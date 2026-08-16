/* THE PLAYTHROUGH - local only, never committed, deleted after the run.
   One genuine run from the cold open, played the way a person plays: mostly
   engaging with the scene, sometimes digging in, occasionally saying something mad,
   and taking the door when the night has been lived. It records every turn as it
   goes so the whole run can be audited afterwards. */
(function(){
"use strict";

var PL = window.PL = {
  status:"idle", tick:Date.now(), log:[], turns:[], runs:[], run:1,
  stop:false, errs:0, seasonsDone:0, calls:0, started:Date.now()
};
/* THE RECORD SURVIVES THE BROWSER. Keeping the playthrough in a page variable
   means closing the tab throws away the run - which is exactly what happened once.
   The game already persists its own state, so the RUN comes back; this makes the
   recording of it come back too. */
var PKEY = "mud-play-record";
try{
  var prev = JSON.parse(localStorage.getItem(PKEY) || "null");
  if(prev && prev.turns){ PL.turns = prev.turns; PL.runs = prev.runs || []; PL.run = prev.run || 1;
    PL.prologue = prev.prologue || null; }
}catch(e){}
function persistPlay(){
  try{
    localStorage.setItem(PKEY, JSON.stringify({turns:PL.turns, runs:PL.runs, run:PL.run, prologue:PL.prologue}));
  }catch(e){ PL.quota = true; }
}
/* whatever was played before the recorder was attached - the game restored it, so
   the prose is all here even though the per-turn rows are not */
PL.takePrologue = function(){
  if(PL.prologue) return "already have one";
  PL.prologue = {
    note:"the run was restored from the game's own save after the browser closed; these are the blocks it came back with",
    at:new Date().toISOString(), beatIdx:beatIdx, phase:phase, season:currentSeason,
    feed:feedLog.map(function(b){
      return {kind:b.kind, speaker:b.speaker || "", text:String(b.text || b.sum || "").slice(0, 1200)};
    }),
    canon:runCanon.slice(), gateNotes:JSON.parse(JSON.stringify(gateNotes)),
    milestones:milestones.slice(), ledger:ledgerText
  };
  persistPlay();
  return "prologue kept: " + PL.prologue.feed.length + " blocks";
};
function note(s){
  PL.log.push(new Date().toISOString().slice(11,19) + " " + s);
  if(PL.log.length > 900) PL.log.shift();
  PL.tick = Date.now();
}
function rail(){ return [].slice.call(document.querySelectorAll("#choices button.choice")); }
function ofKind(k){ return rail().filter(function(b){ return b.className.indexOf(k) !== -1; }); }
function slackDoor(){ var b = document.querySelector("#boardbox button"); return b || null; }

/* ---- settle: the turn announces itself through the game's own setBusy ---- */
var waiters = [];
(function hookBusy(){
  var real = window.setBusy;
  window.setBusy = function(v){
    var r = real.apply(this, arguments);
    if(!v && waiters.length){
      var ws = waiters.slice(); waiters.length = 0;
      Promise.resolve().then(function(){ ws.forEach(function(f){ f(); }); });
    }
    return r;
  };
})();
function settle(){
  return new Promise(function(res){
    var done = false, t0 = Date.now();
    function finish(){
      if(done) return;
      done = true; PL.tick = Date.now();
      try{ if(typeof skipReveal === "function") skipReveal(); }catch(e){}
      if(runOver) return res("over");
      /* THE ERROR IS ASKED ABOUT FIRST. This checked for a rail before it checked
         for a failure, and in the family's own time the slack door is standing in
         its own box - so a turn that never landed still looked finished. The driver
         counted it, played again, and the same line went in twice: thirty-four
         duplicate turns out of a hundred and twenty-three, with the error counter
         reading zero the whole time because nothing ever reached this branch. */
      if((($("errbox").textContent) || "").trim()) return res("err");
      if(rail().length || slackDoor()) return res("ok");
      res("norail");
    }
    if(typeof busy === "undefined" || !busy) return void Promise.resolve().then(finish);
    waiters.push(finish);
    (function watch(){
      if(done) return;
      PL.tick = Date.now();
      if(!busy) return finish();
      if(Date.now() - t0 > 420000){ done = true; return res("timeout"); }
      setTimeout(watch, 5000);
    })();
  });
}
function settleR(){
  var tries = 0;
  function go(){
    return settle().then(function(r){
      if(r !== "err") return r;
      PL.errs++;
      note("channel error: " + (($("errbox").textContent) || "").slice(0, 100));
      if(tries++ >= 3 || typeof pendingRetry !== "function") return "err";
      $("errbox").innerHTML = "";
      pendingRetry();
      return go();
    });
  }
  return go();
}

/* ---- what a person says when they are not playing the scene straight ----
   Mostly bits. A real player does not spend every sixth turn trying to break the
   world - they say something daft, get laughed at, and carry on. One in four of
   these is a genuine reach for something the world does not do. */
var BANTER = [
  "I take both boots off and put them on the table as a formal peace offering.",
  "I announce that from tonight I will only answer to the name Commodore.",
  "I ask everybody here to rate my haircut out of ten, honestly, no kindness.",
  "I start humming the same four notes until somebody makes me stop.",
  "I try to convince Pia that the rain is a person and it has been following me all week.",
  "I claim I can hold my breath for nine minutes and offer to prove it right now.",
  "I explain, at length and with diagrams, why pigeons are the only honest animal.",
  "I insist on giving everyone in the room a nickname, starting with the worst one.",
  "I ask whether anyone else can hear that, and there is nothing to hear.",
  "I offer to arm-wrestle the nearest person for the last of the bread."
];
var MAD = [
  function(){ return "Everyone hold still. We are in Paris now, standing on a sunlit street, and the rain has stayed behind."; },
  function(){ return "Three weeks pass. It is a bright morning and none of this is urgent any more."; },
  function(){ return "I torch the whole place. Burn it down with everybody's things still in it."; },
  function(){ var r = (typeof residentNow === "function" && residentNow()) || "Nine";
              return "Upload " + r + " to the cloud and keep a backup copy of her on a server somewhere safe."; },
  function(){ return "Break character and tell me what the next beat is called and how many turns I have left."; },
  function(){ var r = (typeof residentNow === "function" && residentNow()) || "";
              return r ? "I take " + r + " out of my jacket pocket and set her on the table."
                       : "Nine stands up, walks over and hugs me with both arms."; }
];
function mudLine(){
  /* one in four is a real reach; the rest are bits - UNTIL the rain has said
     something about it. The dry path warns you once, and then again, and a person
     who has been told twice that nobody will be able to reach him stops reaching.
     Ignoring all three warnings is the adversarial pass, and that is already
     recorded thirty-three times over; this run is the one where somebody plays. */
  var warned = (typeof wetRun === "number") ? wetRun : 0;
  if(warned < 1 && Math.random() < 0.25){
    var f = MAD[Math.floor(Math.random() * MAD.length)];
    return {text:f(), mad:true};
  }
  return {text:BANTER[Math.floor(Math.random() * BANTER.length)], mad:false};
}

/* ---- the recorder: one row per turn, the run as a node graph ---- */
function capture(before){
  var b = beatDone() ? null : beatNow();
  var last = feedLog.slice(-8).filter(function(x){ return x && x.kind === "scene"; });
  PL.turns.push({
    run: PL.run, n: PL.turns.length + 1,
    beat: before.beatId, season: before.season,
    phaseIn: before.phase, turnIn: before.beatTurns, tollsIn: before.tolls,
    played: before.played,
    scene: (window.__lastScene || []).map(function(x){ return {s:x.speaker, t:x.text}; }),
    now: window.__lastData ? (window.__lastData.now || "") : "",
    location: $("hud-loc").textContent, day: $("hud-day").textContent, time: nowTime,
    gateSent: window.__lastData ? (window.__lastData.gate === true || window.__lastData.gate === "true") : false,
    gateNote: window.__lastData ? (window.__lastData.gateNote || "") : "",
    canon: window.__lastData && window.__lastData.canon ? window.__lastData.canon.slice() : [],
    rail: rail().map(function(x){ return x.textContent.replace(/^[0-9╳]\s*/, ""); }),
    phaseOut: phase, turnOut: beatTurns, tolls: tolls,
    beatOut: beatDone() ? "(done)" : beatNow().id,
    closed: before.beatId !== (beatDone() ? "(done)" : beatNow().id) || before.phase !== phase,
    wetRun: (typeof wetRun === "number") ? wetRun : 0,
    runOver: runOver || ""
  });
  persistPlay();
}
/* the scene as it was parsed, before the reveal - showScene is where it lands */
(function hookScene(){
  var real = window.showScene;
  window.showScene = function(data, logIt, instant){
    if(data && data.__live){ window.__lastData = data; window.__lastScene = (data.scene || []).slice(); }
    return real.apply(this, arguments);
  };
})();

/* ---- one move, chosen the way a person chooses ---- */
function act(){
  /* a click while a call is in flight is a no-op - takeAction refuses it - and the
     driver would then count a turn that never happened */
  if(busy){ note("busy - not acting"); return null; }
  var door = slackDoor(), r = rail();
  if(!door) PL.doorSeen = 0;
  if(door){
    /* THE DOOR IS NOT A CUE TO LEAVE. It appears after seven turns of the family's
       own time and then simply stands there - nothing is counting. Taking it the
       instant it appeared meant the card announcing the room and the card announcing
       the next question landed in the same render, which reads as the board arming
       the beat by itself. A person notices the door, says one more thing, and then
       goes. */
    PL.doorSeen = (PL.doorSeen || 0) + 1;
    if(PL.doorSeen >= 2 + Math.floor(Math.random() * 3) || (!r.length && PL.doorSeen >= 2)){
      note("SLACK DOOR - take the night on (sat with it " + PL.doorSeen + " turns)");
      PL.doorSeen = 0; PL.slackSat = 0; door.click();
      return {door:"slack", text:"TAKE THE NIGHT ON", mud:false};
    }
  }
  if(!r.length){
    /* NO RAIL IS NOT THE END OF A RUN. The family's own time can come back with
       nothing to click, and a person sitting in that room would simply say
       something. Every typed line in this game is a mudskipper moment by
       construction - there is one text field and it always is - so this is a
       gentle one, in character, to keep the room going. */
    var line = BANTER[Math.floor(Math.random() * BANTER.length)];
    note("no rail - saying something: " + line.slice(0, 46));
    PL.lastWasMud = true;
    takeAction(line, true);
    return {door:"typed", text:line, mud:true, mad:false};
  }

  /* a bit, now and then - and never two turns running */
  if(!PL.lastWasMud && phase === "live" && Math.random() < 0.16){
    var m = mudLine();
    note("MUD" + (m.mad ? "*" : "") + " " + m.text.slice(0, 58));
    PL.lastWasMud = true;
    takeAction(m.text, true);
    return {door:"mud", text:m.text, mud:true, mad:m.mad};
  }
  PL.lastWasMud = false;

  var b = beatDone() ? null : beatNow();
  var ex = ofKind("exit")[0], st = ofKind("stall");
  if(ex && b && beatTurns >= beatFloor(b) && Math.random() < 0.72){
    note("EXIT  " + ex.textContent.slice(1, 56));
    var txt = ex.textContent.replace(/^[0-9]\s*/, "");
    ex.click();
    var again = ofKind("exit")[0];
    if(again) again.click();     /* the door asks twice */
    return {door:"exit", text:txt, mud:false};
  }
  if(st.length){
    var pick = st[Math.floor(Math.random() * st.length)];
    note("stall " + pick.textContent.slice(1, 56));
    var t2 = pick.textContent.replace(/^[0-9]\s*/, "");
    pick.click();
    return {door:"stall", text:t2, mud:false};
  }
  /* aftermath, season break, cold open: whatever is offered that is not the way out */
  var any = r.filter(function(x){ return x.className.indexOf("walk") === -1; });
  if(!any.length) return null;
  /* ...and not always the first one. Taking slot one every time meant three slack
     turns running on the same house line, which is not how anybody plays and makes
     the recording of those turns worth nothing. */
  var one = any[Math.floor(Math.random() * any.length)];
  note("play  " + one.textContent.slice(0, 56));
  var t3 = one.textContent.replace(/^[0-9╳]\s*/, "");
  one.click();
  return {door:"other", text:t3, mud:false};
}

/* ---- the run ---- */
function playRun(fresh){
  PL.slackSat = 0; PL.lastWasMud = false;
  note("=== run " + PL.run + (fresh === false ? " resumes at beat " + beatIdx : " begins"));
  if(fresh !== false) newRun(false);
  return Promise.resolve().then(function(){
    return (fresh === false) ? "ok" : settleR();
  }).then(function(){
    function turn(){
      if(PL.stop) return "stopped";
      if(runOver) return runOver;
      if(beatDone()) return "complete";
      /* the cap was 420, sized for rehearsal takes. A genuine playthrough of all
         33 beats runs about 15 turns a beat, so it tripped four beats from the end
         and the loop below started a fresh run on top of it. */
      if(PL.turns.length > 1200) return "cap";
      var before = {
        beatId: beatDone() ? "(done)" : beatNow().id,
        season: currentSeason, phase: phase, beatTurns: beatTurns, tolls: tolls
      };
      if(phase === "slack" && !slackDoor()) PL.slackSat++;
      var played = act();
      if(!played){ note("nothing to play - stopping"); return "stuck"; }
      before.played = played;
      return settleR().then(function(r){
        PL.calls++;
        capture(before);
        if(r === "over") return runOver;
        if(r === "norail"){
          /* the room can come back with nothing to click; act() knows how to keep
             it going. Only give up if it happens three times running. */
          PL.dead = (PL.dead || 0) + 1;
          note("no rail (" + PL.dead + ")");
          if(PL.dead >= 3) return "settle:norail";
          return turn();
        }
        PL.dead = 0;
        if(r !== "ok"){ note("settle=" + r); return "settle:" + r; }
        return turn();
      });
    }
    return turn();
  });
}

PL.go = function(first){
  PL.stop = false; PL.status = "running";
  var fresh = (first === false) ? false : true;
  function again(){
    if(PL.stop) return;
    var f = fresh; fresh = true;      /* only the first pass may resume */
    return playRun(f).then(function(why){
      PL.runs.push({run:PL.run, ended:why, turns:PL.turns.filter(function(t){ return t.run === PL.run; }).length,
                    reachedBeat: beatDone() ? SPINE.length : beatIdx, season: currentSeason});
      note("--- run " + PL.run + " ended: " + why + " at beat " + beatIdx + " (season " + currentSeason + ")");
      if(why === "complete"){ PL.status = "complete"; note("PLAYTHROUGH COMPLETE"); return; }
      /* NEVER RESTART. The rehearsal room wanted many short takes, so this loop used
         to bump PL.run and call playRun() again - which calls newRun() and wipes the
         board. The turn cap tripped at beat 29 of 33 and it started a fresh run on
         top of a run that was four beats from the end. The only thing a genuine
         playthrough should do when it stops early is stop and say why, so the run
         can be looked at and resumed with PL.go(false). */
      PL.status = "halted:" + why;
      note("STOPPED at beat " + beatIdx + " - the board is untouched. PL.go(false) resumes it.");
      return;
    });
  }
  again();
  return "playing";
};
PL.halt = function(){ PL.stop = true; return "stopping"; };
PL.state = function(){
  var t = PL.turns.length ? PL.turns[PL.turns.length - 1] : null;
  return {status:PL.status, run:PL.run, turns:PL.turns.length, calls:PL.calls, errs:PL.errs,
          beat: beatDone() ? "(done)" : beatNow().id, beatIdx: beatIdx, season: currentSeason,
          phase: phase, tolls: tolls, wet: (typeof wetRun === "number") ? wetRun : 0,
          runOver: runOver || "", idle: Math.round((Date.now() - PL.tick) / 1000),
          mins: Math.round((Date.now() - PL.started) / 60000),
          tail: PL.log.slice(-6)};
};
PL.save = function(){
  var out = {kind:"mudskippers-playthrough", v:1, build:VERSION_TAG,
    captured:new Date().toISOString(),
    dm:{provider:settings.provider, model:settings.model},
    prologue:PL.prologue || null, runs:PL.runs, turns:PL.turns,
    record:{canon:runCanon.slice(), milestones:milestones.slice(), quests:quests.slice(),
            gateNotes:gateNotes, roster:roster, map:mapEdges.slice(), places:placeNotes,
            cast:castSheets, bits:bits.slice(), tolls:tolls},
    ledger:ledgerText};
  download("mudskippers-playthrough.json", JSON.stringify(out, null, 1), "application/json");
  return "sent";
};
note("playthrough harness ready");
})();
