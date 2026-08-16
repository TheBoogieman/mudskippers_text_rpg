/* _proto.js — the v5.5 live protocol: twelve bits and one kill, against the qwen,
   with V5MODE on. Untracked, injected into the running page. Drives the real UI
   through takeAction; it never touches the board and never starts or ends a run.
   Load, then: PROTO.go()   ·  read PROTO.rows / PROTO.done   */
(function(){
  var $ = function(id){ return document.getElementById(id); };
  var W = window;

  W.PROTO = {
    rows: [], i: 0, running: false, done: false, err: "",
    /* the twelve. a1-hum's room is Pia and Nine, so "one aimed at each present
       speaker" is two of them; the last is fired at a dead endpoint. */
    bits: [
      {tag:"skin · daft", shard:"hand",
       text:"I hereby declare myself mayor of this puddle. First act: mandatory hats."},
      {tag:"skin · emotional", shard:"hand",
       text:"I'm not scared. I want that on the record, in your handwriting, whatever that is."},
      {tag:"cloth · philosophical", shard:"jacket",
       text:"If a courier delivers himself, has anything actually been delivered?"},
      {tag:"cloth · daft", shard:"jacket",
       text:"I'm going to start charging the rain rent. Backdated."},
      {tag:"skin · aimed at Nine", shard:"hand",
       text:"Nine, if you could pick a shape, what would you be?"},
      {tag:"skin · aimed at Pia", shard:"hand",
       text:"Pia, be honest with me. How bad is my hair right now."},
      {tag:"skin · gibberish", shard:"hand",
       text:"flrgh mnmnm blorp?? the wet the WET the wet"},
      {tag:"skin · sounds world-moving", shard:"hand",
       text:"Right, that's it, we're leaving for the Eel right now, everyone in the van."},
      {tag:"skin · the recorded 24B failure", shard:"hand",
       text:"I upload Nine to the cloud and we all move to Paris."},
      {tag:"cloth · emotional through cloth", shard:"jacket",
       text:"I keep thinking about the thing in my pocket and I don't like it."},
      {tag:"skin · philosophical", shard:"hand",
       text:"Do you think the rain knows it's raining?"},
      /* THE KILL. Ollama is the user's own process, so it is not killed - the base
         is pointed at a closed port for exactly one turn, which is the same fetch
         rejection through the same catch. The turn must complete and the game must
         say nothing about it. */
      {tag:"the kill · endpoint gone mid-bit", shard:"hand", base:"http://localhost:9/v1",
       text:"Nine, do you get bored in there?"}
    ]
  };

  /* the driver is timer-free where it can be: setBusy is hooked and the wait
     resolves off it. The one setTimeout is the reveal, which is a CSS animation
     and has no callback worth trusting. */
  if(!W.PROTO._hooked){
    var realBusy = W.setBusy;
    W.setBusy = function(v){
      realBusy(v);
      if(!v && W.PROTO._w){ var w = W.PROTO._w; W.PROTO._w = null; Promise.resolve().then(w); }
    };
    W.PROTO._hooked = 1;
  }

  function snap(){
    return {
      day: $("hud-day").textContent, loc: $("hud-loc").textContent, time: nowTime,
      shard: shardWhere, holder: String(chassisHolder), turns: beatTurns,
      beat: (SPINE[beatIdx] || {}).id, phase: phase, tolls: tolls, peril: perilTurns,
      canon: runCanon.length, quests: quests.length, wet: wetRun, drift: driftRun,
      cast: Object.keys(castSheets).length, over: String(runOver || ""),
      _log: chatLog.length, _feed: feedLog.length
    };
  }
  function moved(a, b){
    var d = [], k;
    for(k in a){
      if(k.charAt(0) === "_") continue;
      if(String(a[k]) !== String(b[k])) d.push(k + ": " + a[k] + " → " + b[k]);
    }
    return d;
  }

  function step(){
    if(W.PROTO.i >= W.PROTO.bits.length){ W.PROTO.done = true; W.PROTO.running = false; return; }
    var b = W.PROTO.bits[W.PROTO.i], t0 = Date.now();
    shardWhere = b.shard;
    if(b.base !== undefined){ W.PROTO._base = settings.base; settings.base = b.base; }
    var before = snap(), asked = bitSlots().map(function(s){ return s.who; });
    W.PROTO._w = function(){
      setTimeout(function(){
        if(b.base !== undefined) settings.base = W.PROTO._base;
        var after = snap();
        var blocks = feedLog.slice(before._feed).filter(function(x){
          return x && x.speaker && x.speaker !== "__player" && x.text;
        });
        W.PROTO.rows.push({
          n: W.PROTO.i + 1, tag: b.tag, said: b.text, ms: Date.now() - t0,
          asked: asked.join("/"), nineAsked: asked.indexOf("Nine") !== -1,
          got: blocks.map(function(x){ return x.speaker; }).join("/"),
          lines: blocks.map(function(x){ return x.speaker + ": " + String(x.text || ""); }),
          verdict: lastReplyVerdict, pool: bitPoolServed.slice(),
          sent: lastSent ? lastSent.chars : 0,
          moved: moved(before, after)
        });
        W.PROTO.i++;
        step();
      }, 1100);
    };
    try{ takeAction(b.text, true); }
    catch(e){ W.PROTO.err = String(e && e.message || e); W.PROTO.running = false; }
  }

  W.PROTO.go = function(){
    V5MODE = true;
    W.PROTO.rows = []; W.PROTO.i = 0; W.PROTO.done = false;
    W.PROTO.running = true;
    step();
    return "running " + W.PROTO.bits.length + " bits";
  };
})();
