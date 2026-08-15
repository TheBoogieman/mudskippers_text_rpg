# MUDSKIPPERS v4.72.2 "Both Ends of the Night" — the implementation report

**On top of:** `4ea054a` v4.72.1 "The Audit Seats the House"
**Implements:** the rulings given live on 2026-08-15 — threads 8, 9, 10 and the two small ones
**For:** Cyberbossman and the Architect.

---

## 0. What shipped

Three things, in the order you set — **9 → 8 → 10**, because 8 removes the paths that
reproduce 9 and 10 rewrites the landings 9's anchor check reads.

1. **The door never books thin.** A night the player closed by reaching for the ending
   is never recorded as a night that went wrong.
2. **The novel's typing bar is dark**, and its two repair tools are gone with it.
3. **The seams change hands above a temperature of 1** — the DM writes each beat's
   opening and landing, and the client still keeps the books.

**Sweep: 64 rows, 0 FAILED, 46 PROVED, 18 amber.** Fixture delta zero — no authored
line moved by my hand.

---

## 1. Thread 9 — the door never books thin

### It was not one beat

You asked for the class swept before a fix was chosen. All 33 beats, four play patterns
each (three rail-click shapes, plus typed lines), taking the door at the floor:

| play | beats closing THIN off the door |
|---|---|
| typed chatty lines | **18 of 23 anchored beats** |
| at least one rail-click pattern | **8 of 23** |
| **every** rail-click pattern | **3 of 23** |

Thin however it was played: **`a2-hand`, `a2-chassis`, `a3-stone`.** `a2-chassis` is the
season's fork — the beat that books which body Nine chooses recorded a scar on every
route through it.

### The fix

`closeBeat("thin")` is now unreachable from the door branch. `closeBeat(false, note)`,
always. The witness is still taken and still said out loud — `console.info` names the
beat and the missing anchors as **an authoring finding**, because a beat whose people
never reached the page is real and worth knowing. It is simply no longer the player's fee.

**The anchor law kept its other job**, and the row proves it: a gate the *DM* claims
with the same empty prose is still refused, still sets `gateRefusedNames`, still does
not close the beat.

**Row:** *"a beat the player closed with the door is never recorded as a night that went
wrong"* — 16 door closes across 4 beats × 4 patterns; none booked a scar, none reached
canon, none charged a toll. Broken form: v4.72.1's own rule, which on `a2-chassis` never
produced an empty miss list.

---

## 2. Thread 8 — the novel is a rail game

`#mudinput` is **disabled** in a novel run, not removed: an empty tray reads as a layout
bug, a greyed field with a sentence in it reads as a rule.

Three functions re-enable that input on their own schedule — `openBar` on every new run
and restore, `setBusy` at the end of every turn, `applyModeUI` at the mode's own door —
so the permission is one predicate, `barTyping()`, that all three ask. The sweep drives
all three rather than reasoning about them.

**The cold open's dare would have been a lie**, so it has its own novel wording:

> **wild:** *"Go on, try going off the rails. Type anything down there."*
> **novel:** *"No bar tonight — this one's written, all the way down. Go on: pick the line you'd actually say."*

The green lure on the bar follows it — no glow on a bar that is switched off. GUIDE step 3
is rewritten to teach two controls instead of one.

**Threads 6 and 7 rode along:**

- **FIND OUR PLACE and REBUILD MEMORY are the wild table's alone.** They existed to
  repair a memory that drifted; the board keeps those books deterministically now, and
  they were the last two surfaces that could take a novel run to a provider at all. The
  rehydrate banner that pushes players toward REBUILD is gated with them.
- **The TEMPERATURE field is relabelled** — *"HOW MUCH OF THE NIGHT IS THE DM'S"* — and
  says the three things it now has to: that it does nothing in a novel run, that above
  1.0 the storyteller also writes the seams and that this is decided once per run, and
  that Claude models cap at 1.0 so the game sends 1.0 and keeps your number for the seam
  decision.

---

## 3. Thread 10 — the seams

### The stamp

`seamsDM = (runMode === "wild") && replyTemp() > 1`, evaluated **once** in `newRun`,
written into the blob as `seams`, immutable for the run's life. Absent, `false` or
anything non-boolean restores as the client's seams — which is what every run before
this build was played with. Driven: moving the dial mid-run does not take the seams back.

### What changes hands above the line

`playOpening`, `playLanding`, `playPremiere` stop rendering and ask instead;
`dealTableTalk` and `dealTease` stand down (the DM already writes every room turn, and
the night names itself in its own opening). **The cold open stays client-side**, per your
§6 ruling — it runs before a run exists and is the one scene a visitor sees in one click.

**The beat card needed no fork.** Its summary is already `note || b.exit`, and `note` is
the DM's own `gateNote` — so above the line the card is already in its voice, wearing the
client's booking. That is the ruling exactly.

### The client still keeps the books

`closeBeat` is untouched: it decides clean or hard, merges the authored `canon`,
`canonSoft` and the fork's `canonAlt`, files the gateNote, pays any toll, moves the
pointer. What the DM gets is the seam's **spec** — the room, the day, the hour, the
weather, where the shard is, and the beat's `anchors` as the names that must be in it —
and `seamStamp` applies the page-turn **before** the ask goes out, so the model writes
into a room the board has already moved them to.

### A defect in my own plumbing, caught by driving it

The first cut pushed the seam brief into `chatLog` as a user line. It fired, and the
location moved, and it looked right — but the composed briefing went out still carrying
the ordinary scene contract, with the seam order buried four messages down the history
tail. The wire is where instructions go to be averaged.

Fixed: `seamServing` is read by `buildContext`, and on a seam turn **the seam is the
contract** — it replaces `sceneContract()` rather than sitting behind it. It is spent by
the next player action, or every turn after would re-order the same passage. The sweep
row now reads the bytes that would go on the wire and asserts all three: the order
reaches `msgs[0]`, the scene contract is *not* also in there, and the order does not
outlive its turn.

I would not have found this by reading it. It took a live model and a location that
changed while nothing else did.

---

## 4. Driven, live

**Novel regression** — 80 turns, cold open into Season 2, 9 beats gated:

```
askAI invoked : 0        scars recorded : 0
fetch called  : 0        tolls          : 0
typing bar    : disabled for all 80 turns
```

Zero scars across nine closes is thread 9 working; before this build several of those
beats booked one.

**Wild, seams above the line** (`mudskippers-qwen2-5-32b`, temp 1.4): a1-hum played,
gated on the door, **the landing seam fired** — brief at the front of the briefing, page
already turned to VELDT UNDERPASS — the DM wrote a real landing passage, the room opened,
the slack door advanced the pointer, and **the opening seam fired for a1-chase.** Both
seam kinds proved on the real wire.

> **NARRATION:** Through turns and shortcuts that only a lifelong Market-treader would
> navigate with perfect certainty, you've moved from the din of Lower Veldt Market, and
> now find some semblance of relative peace under Velt Underpass — worn stone flickering
> in watery reds beneath dim fluorescent lamps.

---

## 5. Findings

1. **The seam threshold and the strangeness dial are the same control, and it shows.**
   Temp 1.4 is what turns the seams on, and 1.4 is genuinely hot for a small model. In
   the live drive the 32B produced malformed JSON that `repairJSON` salvaged imperfectly,
   leaking fragments (`"}] , `) and even Chinese characters into rendered prose. **Not a
   lane break** — the lane held, the turn landed, the run continued — but a player who
   wants the seams on a local model is forced into the temperature where that model falls
   apart. The relabel says so plainly now. **If you want them separated after all, the
   split-control option is still one field away.**
2. **A seam reply can overwrite the board's stamp.** The brief says *"send them back
   unchanged"* and the 32B sent `VELT UNDERPASS` for `VELDT UNDERPASS`. The composed path
   has always taken `location` from the reply, so this is legacy behaviour rather than new
   — but on a seam turn the client has *just* stamped that field, so it is newly visible.
   Cheap fix available: refuse a location change on a seam turn. **Unruled.**
3. **`railAlt` — my note was two waves stale and I asked you a question built on it.** It
   was ruled in **v4.71.0** ("a reason, not a retirement"), it *has* a reader
   (`pickVariant` per run in `sceneRails`) and two sweep rows prove the rotation. Nothing
   was touched. My memory is corrected.
4. **The two collisions are resolved to the audit**, both times: the fold stays off at the
   wild table and `callBitTurn`'s paint apparatus stays kept. You confirmed once shown.
5. **AUTHORING.md law 3 was rewritten**, because it documented the behaviour thread 9
   retired, and a guide that describes a rule the engine no longer has is worse than none.
   It now carries the class-sweep numbers so the next author knows why.

---

## 6. The ritual

| check | result |
|---|---|
| encoding: no BOM, zero `U+FFFD`, zero mojibake, em dashes intact | clean (388) |
| `node --check` on the script body | clean (1.67 MB) |
| window-global `var` collisions | none |
| every `$("id")` has markup | zero misses |
| `<div>` balance | 234 / 234 |
| `?selftest` | **64 rows, 0 FAILED, 46 PROVED** |
| fixture delta | **zero** |
| banner · `VERSION_TAG` · `sw.js` slug | v4.72.2 "Both Ends of the Night" · `mudskippers-v4-72-2` |
| README · AUTHORING.md | two-ways table updated; law 3 rewritten; the seam contract documented for authors |
