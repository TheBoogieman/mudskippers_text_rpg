# MUDSKIPPERS — v6.0: THE TWO TABLES. One game, two masters, and a hard wall between them.

**From:** Cyberbossman · **For:** Claude Code · **Against:** `f451606` v4.71.10 "The Surface Holds"
**This is the last feature before the game rests.** It ships polished or it does not ship. The report starts my audit — no pre-granted sign-off this time; the Architect and I read everything.

---

## 0. The intent, in one paragraph

The player picks a master at NEW GAME and never again. **THE NOVEL** is what we built: every night authored, dealt, and enforced, complete with no model and no key — and purer than today, because the mudskipper bit channel leaves it entirely. **THE WILD TABLE** is the road not taken, resurrected on purpose: a model drives *everything* — the middles, the perils, the closes, the opens, the season turns — with the SPINE as its map and its material, and the client keeping only the lane that protects *integrity*, never the fences that protect *structure*. Two games in one file, stamped into their saves, never cross-loaded. The deterministic build taught a model to stay in its lane; this feature finally gives it a lane worth driving.

## 1. THE MODE IS A RUN FACT

`runMode` is `"novel"` or `"wild"`, decided at run creation, written into every save blob, immutable for the life of the run.

- **The flags stay build-time truth.** `V5MODE`, `V5SCENE`, `TEETH_LIVE` do not move — they are the deterministic engine's own switches and the sweep's subjects. Mode is consulted **at the routers** (callDM's one door, the row builder, the settle, the intro), exactly the way every other run fact is. No global flag flipping at runtime: a flag that changes per run is two rosters waiting to drift.
- **Restore refuses cross-mode, gracefully.** Loading a wild save while the game would run it as novel (or vice versa) is impossible by construction: restore reads the stamp and runs that run in its own mode. The *refusal* case is only the one the player can actually cause — see §6, scenarios 8–10.
- **A save with no stamp is a novel save.** Every existing run was played deterministic; that is the safe direction, said in a comment where the tolerant default lives.
- **The runs drawer badges every save** — `NOVEL` / `WILD` beside the date line — and the CONTINUE pointer honors the stamp.

## 2. THE NOVEL (deterministic, purified)

Everything currently live, minus the bit channel:

1. **The MUDSKIPPER MOMENT button does not render.** Not greyed — absent; the input bar takes the width, and its placeholder drops the "the button for a bit" clause: `...or say what the courier does. Enter to do it.`
2. **No turn in a novel run touches the wire. None. Ever.** Not bits (gone), not scenes (already zero), not retries. The strongest claim this feature makes: a novel run with a configured, working API key makes **zero requests** from cold open to epilogue. The provider-key gate at takeAction (the `needsKey` check) does not run for novel runs — a novel run needs no settings at all.
3. **Typed conversational lines** keep the v4.71.8 ladder — first said, answered; said again, noticed — but the "answered" half serves **directly from the presence-gated pools, client-side, no fetch and no fallback-after-failure**. `callBitTurn` in a novel run is a pool serve, full stop.
4. Everything else is untouched: the deck, the binding, the doors, the teeth, the rooms, the said-memory, the guillotine, the landings, the anchors. The 53 sweep rows keep their meanings — driven rows pin `runMode="novel"` explicitly rather than inheriting it.

## 3. THE WILD TABLE (the model drives)

The legacy composed-turn path becomes the *primary* road for wild runs: full briefing, history, structural reply — `scene`, `choices`, `gate`, `gateNote`, `canon`, `day/time/location`, `peril`, `death`, the whole vocabulary. On top of it:

**What stands down (the structure fences — these were the deterministic world's laws, not the model's lane):**

- **The beat floor.** The door still asks twice — that is the *player's* guard and it stays in both modes — but no floor holds a close the DM or the player wants. `doorMeetsFloor` is a novel-mode fact.
- **The budget guillotine.** No forced closes, no client tolls, no scars imposed by arithmetic. The pressure strip — a gauge wired to enforcement that no longer exists — **hides in wild runs**; a threat the world never keeps is scenery, and we do not ship scenery.
- **The anchor check and the thin close.** The DM writes the close it wants; `gateNote` is the record. `THE WORLD MOVED ON` renders only if the DM's own reply declares a world-driven close (implementer's call on the signal; flag the shape you choose as a finding if ambiguous).
- **The deck and the row.** Rails come from the DM's `choices` again, through the existing doorman (`cleanChoice`, `sameAsDoor` in its DM-fence role, the malformed-choice drop). `topicSpent`, `railDeal`, `saidRoom`, the stalls-when-dry logic — novel-mode machinery, not consulted. The SCENEBOOK rides the **briefing** instead: the beat's cards (`ask`/`gives`/`holds`), its `never` list, its `before` physics — the DM's material, offered as "what this room knows," never dealt for it.
- **The teeth runtime.** No attempt UI, no client stages. The teeth cards travel in the briefing as authored peril material — *"use these when the night earns them, or invent worse"* — and the `peril`/`death` reply fields do what they always did. The game can still kill exactly as we already coded it: the `death` field reaches `killCourier`, warnings-before-death doctrine rides the BIBLE as it always has.
- **Transitions are the DM's, all of them.** No hardcoded scene, beat, or season transition fires client-side. The client's job is the **nudge ladder**: the briefing carries standing orders — *you own the clock; when a night has said what it came to say, close it with `gate` and write the landing yourself; when a season's business is done, turn it* — and as a beat's turn count grows the old boardDirective language returns as escalating *suggestions* in the composed context, never as enforcement. When `gate` lands, the client advances `beatIdx` (the SPINE is the map: order preserved, **timing entirely the DM's** — close on turn one or turn thirty, both legal). A gate on a season-final beat fires the season ceremony; the fold and PREVIOUSLY ON machinery serve the DM's decision rather than the meter's.
- **Player wildness.** The dry-path hold and breach strip on typed lines stand down — the BIBLE's own line *"honor whatever the player types as a custom action, however wild"* finally runs unchaperoned. Unhinged is the point; the run may cheerfully contradict the deterministic canon.

**What holds (the lane — integrity, not structure):**

- **Reply shape.** Validation, `repairJSON`, the malformed-choice drop, the stutter filter, the empty-reply retry/correction budget. A broken reply costs a retry, never a corrupted turn.
- **The dead stay dead.** `fallenSpeakers`, the roster, the cairn law. The one place the client overrules the DM, in both modes, forever.
- **Jurisdictions.** Skull to courier alone, wrist to the room, nothing in a housing room-audible. Voice physics are the world, not the pacing.
- **The endings we coded.** `death` → `killCourier` (with the warning doctrine), the walk-out (two red clicks — the player's right, both modes), season ceremonies, the epilogue. The game must still be able to end every way it already can.
- **Save integrity.** persistAll/restore, the epoch guard, retire-to-menu, everything from the patch series. Mode-stamped per §1.
- **MUDSKIPPER MOMENTS in wild runs are the old full-apparatus bits**: chaotic banter, the model unchained, immunity intact as coded (a bit cannot be spent, cannot toll, cannot close a night) — but the run around them can still end by every coded road above.

**Wild requires a model.** Picking THE WILD TABLE with no working provider opens settings *at the door* — the run does not start until a provider exists (scenario 6). A wire failure mid-run holds the turn and offers the retry exactly as the legacy path always did; state never advances on a failed call.

## 4. THE CHOICE, AT NEW GAME

NEW GAME becomes a two-door card (the title's NEW GAME and the runs drawer's NEW both lead here). Authored copy — use verbatim:

> **WHO RUNS TONIGHT?**
>
> **THE NOVEL** — *The story as written. Every night authored start to finish; complete offline; no key, no model, no setup. The recommended first run.*
>
> **THE WILD TABLE** — *Bring a model and hand it the keys: the beats, the perils, the closes — all of it, decided at the table, no two nights alike. Requires a connected AI. Unhinged is a feature, not a defect.*

Novel is the visually-default door (the Pages visitor with nothing configured must reach play in one click). The choice card also appears in the GUIDE. Rehearsal room pins to **novel** semantics (it is an authoring tool for the authored game); note it in its own copy.

## 5. THE ROUTER, PRECISELY

One consultation point per fork, no scattered ifs: `wildRun()` (a function of the run stamp, false when no run) consulted at — takeAction's provider gate (novel skips; wild enforces), the MUD button render, callDM's one door (wild → composed legacy path before any skeleton check), the row builder (wild → DM choices path), the settle/interlude (novel machinery), the teeth arming sites (novel machinery), the pressure-strip render, and boardDirective (novel: enforcement; wild: prompt-ladder text only). Every one of these is a place the sweep can put a hand.

## 6. THE SCENARIO MATRIX — think of everything, then prove it

Rulings included; each numbered case is either a sweep row, a driven check in your report, or an explicitly-flagged finding:

1. **Fresh Pages visitor, no key** → NEW GAME → NOVEL one click in → plays to the epilogue, wire zero. (The bar's row i.)
2. **Novel run with a working key configured** → still wire zero, cold open to close. (Row — the strongest claim; drive it with the key present and a detector watching.)
3. **Novel run: MUD button** absent from the DOM; placeholder text updated; keyboard shortcut for it (if any) inert.
4. **Novel typed banter** → pool serve, no fetch attempt at all (assert zero `askAI` invocations, not just zero completed calls).
5. **Wild NEW GAME, no provider** → settings door opens, run does not exist yet, cancel returns to the choice card cleanly (no half-created run, no stamped save).
6. **Wild NEW GAME, provider set** → cold open plays (the hardcoded cold open is pre-mode UI: it stays for both — the reveal is canon), then every turn composes.
7. **Wild run: the DM closes a beat on turn 1** → legal; `gate` honored; no floor holds it; `beatIdx` advances; next beat's material composes.
8. **Cross-load: a wild save opened when the run's mode machinery would matter** → the run simply runs wild (the stamp travels); the *refusal* case is an old CLIENT (pre-v4.72.0 build, e.g. a stale service worker) reading a wild save — it has no stamp reader; that is what the sw slug bump is for. State in the report how a stale client fails (it must fail safe, not corrupt).
9. **Pre-mode save (no stamp)** → restores as novel, plays on, saves back *with* the novel stamp.
10. **A player hand-edits a stamp** (folder saves are files) → unknown mode string restores as novel with a console note; never a crash.
11. **Wild run, endpoint dies mid-turn** → busy clears, turn held, retry offered, state unmoved; retire and load both still work from that state.
12. **Wild run, model replies with no `gate` for 30 turns** → the nudge ladder escalates in the briefing; nothing forces; the player's twice-asked door and walk-out remain available every turn. (The night that never ends must still be leavable — by the player.)
13. **Wild run, model kills the courier** → `death` lands through the existing warning doctrine and `killCourier`; save closes as death; runs drawer shows it.
14. **Wild run, model speaks for the dead** → fallen-speaker refusal, as ever. Once overruled, twice rendered.
15. **Wild MUD button** → present, chaotic, immune as coded; a bit mid-composed-turn cannot interleave (busy/reveal guards hold in both modes).
16. **Wild run mid-flight, player retires it** → title screen, per v4.71.2; a new NOVEL run right after → no wild state leaks (mode-scoped teardown).
17. **Two saves, one of each mode, in the drawer** → badges correct; LOAD each; CONTINUE follows the pointer's stamp; the wild CONTINUE with the provider since removed → settings door, not a broken run.
18. **Selftest** (`?selftest`) → runs entirely in novel semantics; all 53 current rows green and pinned; the new mode rows (below) green; wild rows driven against stubbed replies, never a live endpoint.
19. **The rehearsal room** → novel semantics, unchanged behavior, says so in its copy.
20. **Season turn in wild** → DM gates the season-final beat → break ceremony, PREVIOUSLY ON, next season opens composed; the fold path reachable when the DM's close implies it (flag the exact fold trigger you choose as a finding).
21. **The corpus and the desk** → unchanged: no authored line moves in this feature (UI copy is not corpus). Fixture delta must be zero; if any predicate moves, stop and send a finding.
22. **sw.js** → slug bump; both modes work offline-after-first-load *for the novel run*; wild obviously needs the wire and must fail its turns gracefully offline (case 11's UX).
23. **README** → a "Two ways to play" section, honest about which needs a key.
24. **The intro race, the held door, retire-to-menu, the settle gate, the said-ladder** — every v4.71.x law re-verified in novel mode after the router surgery; they are the regressions most at risk from a fork at callDM's top.

## 7. THE BAR — before my audit reads a word

- **(i)** One full novel night, cold open across the slack seam into night two, **with a working provider configured**, wire at zero — the detector counting *invocations*, not completions.
- **(ii)** The 53 rows, green, each driven row pinning its mode.
- **(iii)** New rows: the mode stamp round-trip (save/restore both modes + the no-stamp default), the MUD button's absence/presence by mode, novel's zero-invocation claim, wild's routing claim (a composed turn reaches the wire path; a stubbed `gate` reply advances the beat with no floor consulted; a stubbed `death` reply kills through the coded road), and the wild-needs-provider door.
- **(iv)** One driven wild sequence against stubbed replies: open → three composed turns → DM gate → beat advance → season-final gate → ceremony. No live model in the harness, ever.
- **(v)** A hand-played wild run against your local model, reported honestly — transcript excerpts, where it dazzled, where it embarrassed itself. The Architect and I audit from your report; unhinged output is not a defect, but a broken lane is.

## 8. Working notes (standing)

Everything that rewrites `index.html` is a file edit, never `node -e`. `git ls-remote` is the push truth. Contents API returns empty for `index.html` — compare `sha`. Release ritual: banner + `VERSION_TAG` + `sw.js` slug — this is **v4.72.0**, name it what it earns. RAIL-AUDIT.md and AUTHORING.md live beside the code; the Architect's hand pass may land content commits while you work — rebase around content, never revert it.

*Self-contained. Ambiguity is my defect: findings back, ruled same-day. When it ships, the Architect carries your report to my desk and the audit begins — code read hostile, both modes played through my rig, the wild table driven against a mock and a live local model both. Build the second table like the first one is watching.*
