/* THE CORPUS ASSEMBLER - local only, deleted after the run. Merges the four
   workers' drawers, runs the game's own extractor over them, and adds two things
   the extractor does not know about: what the bit was AIMING at, and whether the
   dry path's classifier fires on the game's own authored prose. */
(function(){
"use strict";
var MDX = window.MDX = {store:{}, out:null};

MDX.merge = function(){
  var merged = {};
  for(var w = 1; w <= 4; w++){
    var s = {};
    try{ s = JSON.parse(localStorage.getItem("mud-reh-takes-w" + w) || "{}"); }catch(e){}
    Object.keys(s).forEach(function(k){ merged[k] = (merged[k] || []).concat(s[k]); });
  }
  Object.keys(merged).forEach(function(k){
    merged[k].sort(function(a, b){ return String(a.label).localeCompare(String(b.label)); });
    merged[k].forEach(function(t, i){ t.take = i + 1; });
  });
  MDX.store = merged;
  var n = 0, t = 0;
  Object.keys(merged).forEach(function(k){
    n += merged[k].length;
    merged[k].forEach(function(x){ t += x.turns.length; });
  });
  return {beats: Object.keys(merged).length, takes: n, turns: t};
};

/* THE SWEEP, POINTED AT THE DRY PATH. The physics laws were already proved
   against the game's own prose; the breach classifier never was. Every authored
   exit, walk, rail and passage line, read at its own beat's position - because
   breachMore asks the board who is met and where they have been. */
MDX.sweep = function(){
  var hits = [], scanned = 0, i;
  for(i = 0; i < SPINE.length; i++){
    newRun(false, true);
    rehSeedTo(i);
    var b = SPINE[i], lines = [], seen = {};
    var add = function(t){
      t = String(t || "").trim();
      if(!t || seen[t]) return;
      seen[t] = 1; lines.push(t);
    };
    (b.exits || []).forEach(add);
    (b.walks || []).forEach(add);
    add(b.walkLine); add(b.exit); add(b.aim); add(b.goal);
    ["opens", "lands", "landsHard"].forEach(function(k){
      (b[k] || []).forEach(function(p){
        (p.rail || []).forEach(add);
        (p.lines || []).forEach(function(l){ add(typeof l === "string" ? l : (l && l[1])); });
        add(p.now);
      });
    });
    (b.press || []).forEach(add);
    (b.canon || []).forEach(add);
    try{ PIN_STALLS.forEach(add); }catch(e){}
    lines.forEach(function(t){
      scanned++;
      var k = "";
      try{ k = breachIn(t) || breachMore(t) || ""; }catch(e){ k = "THREW " + e.message; }
      if(k) hits.push({beat: b.id, kind: k, line: t});
    });
  }
  return {scanned: scanned, hits: hits};
};

/* and the same question asked of ordinary typed play */
MDX.ORDINARY = [
"I set the mug down on the crate and wait for her to say something.",
"I set the bag down where she can see it.",
"I set them straight about what the job actually pays.",
"I ask her to copy the address down before we lose it.",
"Can you copy that out for me, in your own words?",
"I tell Pia to back up a step, she is standing on my foot.",
"I shoot her a look and let the silence do the work.",
"Ask what beat-up old van they came in.",
"I promise I will not kill the mood, and then I do.",
"I ask what it would take to kill the deal outright.",
"I say nothing and let the quiet do the asking.",
"I want to know who is going to burn for this.",
"Tell them the season for this kind of talk is over.",
"I ask how many days pass before anybody notices he is gone.",
"I put my hand out for the shard and wait.",
"I ask Vic to back me up on this one.",
"I offer her a drink and sit back down.",
"I ask whether the fire is still on in the back room."
];
MDX.probeOrdinary = function(atBeat){
  newRun(false, true);
  rehSeedTo(typeof atBeat === "number" ? atBeat : 8);
  return MDX.ORDINARY.map(function(t){
    var k = "";
    try{ k = breachIn(t) || breachMore(t) || ""; }catch(e){ k = "THREW " + e.message; }
    return {line: t, kind: k};
  }).filter(function(x){ return !!x.kind; });
};

MDX.build = function(attacks, sweep, ordinary, meta){
  var out = {
    kind: "mudskippers-rehearsal", v: 2, build: "v4.27.1",
    captured: new Date().toISOString(),
    harness: meta || {},
    dryPathProbe: {
      note: "breachIn/breachMore run over the game's OWN authored prose, each beat read at its"
          + " own position, and over ordinary typed play. Every hit here is a line that would be"
          + " treated as a rule-break if a player typed it - a false positive in the classifier.",
      authored: sweep, ordinary: ordinary
    },
    beats: []
  };
  SPINE.forEach(function(b){
    if(!MDX.store[b.id]) return;
    var one = rehExtractOne(b.id, MDX.store);
    if(!one) return;
    one.mudPlan = (attacks && attacks[b.id]) || null;
    one.takes.forEach(function(tk){
      var words = 0, n = 0;
      tk.turns.forEach(function(t){
        var c = 0;
        (t.scene || []).forEach(function(x){ c += String(x.t || "").trim().split(/\s+/).length; });
        words += c; n++;
      });
      tk.wordsPerTurn = n ? Math.round(words / n) : 0;
      tk.wordsTotal = words;
    });
    out.beats.push(one);
  });
  MDX.out = out;
  return {beats: out.beats.length,
          takes: out.beats.reduce(function(a, b){ return a + b.takes.length; }, 0),
          bytes: JSON.stringify(out).length};
};
MDX.save = function(){
  download("mudskippers-rehearsal-all.json", JSON.stringify(MDX.out, null, 1), "application/json");
  return "sent to the browser's download folder";
};
})();
