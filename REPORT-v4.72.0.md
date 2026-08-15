# MUDSKIPPERS v4.72.0 "Who Runs Tonight" — the implementation report

**Against:** brief v6.0 THE TWO TABLES, and amendment v6.1 THE STABLE
**From:** `f451606` v4.71.10 "The Surface Holds"
**For:** Cyberbossman and the Architect. The audit starts here.

---

## 0. What shipped, in one paragraph

`runMode` is a run fact — `"novel"` or `"wild"`, decided at NEW GAME behind a two-door
card, stamped into every save blob, immutable for the life of the run, and consulted
only at routers, through one function: `wildRun()`. THE NOVEL is everything v4.71.10
was, minus the bit channel: **a novel run makes zero network requests from cold open to
epilogue with a working key configured**, proved by a 91-turn hand-driven run with an
Anthropic key in Settings and a detector counting `askAI` *invocations* and raw
`fetch` calls rather than completions. THE WILD TABLE routes every turn down the legacy
composed path, stands down the floor, the guillotine, the anchor check, the deck, the
row and the teeth runtime, and keeps reply shape, the cairn law, voice physics, every
coded ending and save integrity. v6.1's stable, request knobs, cache breakpoint and
reasoning lane are in. **The sweep is 59 rows, 0 FAILED, 41 proved, 18 amber.** Fixture
delta is zero: no authored line moved, and the drift row is green on 3,759 lines × 9
predicates.

---

## 1. The bar

| | claim | status |
|---|---|---|
| **(i)** | one full novel night across the slack seam, working provider configured, wire at zero, counting invocations | **exceeded** — §2 |
| **(ii)** | the 53 rows green, each driven row pinning its mode | **met** — §4 |
| **(iii)** | new rows: stamp round-trip, button by mode, novel zero-invocation, wild routing, wild-needs-provider | **met** — §4 |
| **(iv)** | one driven wild sequence against stubs | **met** — §4, row 5 |
| **(v)** | a hand-played wild run against a local model, honestly | **met** — §5 |
| **(vi)** | hand-played wild on both ends of the stable | §6 |
| **(vii)** | cache-read > 0 on the second Claude turn; think-junk parses clean | §6 |

---

## 2. THE NOVEL, and the zero-wire claim

The claim is not "no calls because nothing is configured". It is that a player who
**has** a working model still plays the authored game without it. So the drive was run
with `settings.provider = "anthropic"`, a plausible key in `settings.key`, and two
detectors: a wrapper counting entries to `askAI`, and a wrapper counting every call to
`window.fetch`.

**91 turns**, from the cold open through seven beats and several slack seams — clicked
rails, typed sincere lines, typed `!`-prefixed lines, exits taken, the room's own time,
the way on — ending in the family's time on `a1-late` with two tolls paid:

```
askAI invoked : 0
fetch called  : 0
```

Three structural changes make that true rather than lucky:

1. **`takeAction`'s provider gate is the wild table's alone.** It was `!settings.key &&
   preset.needsKey → openSettings()`; it is now `wildRun() && !providerReady()`. A novel
   run needs no settings at all, so asking for them was the game refusing to play itself.
2. **`callBitTurn` serves from the pool and never asks.** This was the last thing in the
   deterministic game that touched the wire. The pool was always its floor — *"the worst
   a model can do to a bit is make the turn fully authored"* — so a novel run starts at
   the floor and calls it the room. Not a fetch that fails over: **no fetch**.
3. **The MUD button is absent from the DOM**, and the `!` shortcut goes with it.

### Scenarios 1–4, driven

| | result |
|---|---|
| 1. Fresh visitor, no key → NOVEL, one click in | plays; the novel door is the lit one and is one click from NEW GAME |
| 2. Novel run, working key configured | 91 turns, wire zero, both detectors |
| 3. MUD button absent from the DOM; placeholder updated; shortcut inert | `getElementById("mudbtn") === null`; placeholder reads `…or say what the courier does. Enter to do it.`; 18 `!`-prefixed lines all arrived at `takeAction` with `isMud === false` and zero `mud:true` blocks reached the feed |
| 4. Novel typed banter → pool serve, zero `askAI` invocations | `lastReplyVerdict` reads `pool: the room answered, zero calls` |

**One wart, flagged rather than fixed.** In a novel run the leading `!` is not stripped,
so a player with wild-table habits sees `!I announce that I am now called Commodore.` in
their own transcript. Stripping it would edit what they typed; leaving it means the
character is just punctuation now. I left it. Say the word and I will strip a leading
bang in novel runs too.

---

## 3. THE WILD TABLE, precisely

### The router

`wildRun()` is `!!runSlug && runMode === "wild"` — false when there is no run, so the
title screen, the boot path and the sweep's undriven state all read novel, which is the
safe direction. It is consulted at, and only at:

| site | novel | wild |
|---|---|---|
| `takeAction`'s provider gate | skipped | enforced |
| `applyModeUI` / the MUD button | absent | present |
| `bitSkeletonNow` | Phase A skeleton | false → the old full-apparatus bit |
| `breachScanned` | scans | false → unchaperoned |
| `sceneSkeletonNow` / `doorSkeletonNow` / `doorHoldNow` / `interludeNow` | the four skeleton routes | all false → composed |
| `sceneRails` | deals the deck | `[]` → `railFor` falls back to the DM's choices |
| `doorMeetsFloor` / `beatMetFloor` | the floor | true → no floor holds a close |
| `anchorsMissing` | the anchor check | `[]` → `gateNote` is the record |
| `gauntletNow` / `ambientDue` | the teeth arm | false → the teeth ride the briefing |
| `boardDirective` | enforcement | `wildNudge()` — prompt ladder only |
| `boardTension` / the pressure strip | the odometer | hidden |
| `sceneContract` | one card, dealt | `wildContract()` — the whole deck, offered |

### What stands down

- **The beat floor.** `doorMeetsFloor()` answers true at the wild table, in one function,
  for all four of its readers: the router, the renderer that greys the door, the
  held-door serve and the exit's own correction. The door still asks twice, in both
  modes — that is the player's guard.
- **The budget guillotine.** `boardDirective` returns `wildNudge()` before it reaches any
  budget arithmetic, so `forcingNow` and `pressureSent` never latch. No forced closes, no
  tolls from arithmetic, no scars imposed. The pressure strip hides and `boardTension`
  stops reading the budget — peril and drift still read, because the DM declares those.
  The two ladder asides ("running out of road", "one more turn and it moves on") are
  silent for the same reason.
- **The anchor check and the thin close.** `anchorsMissing` returns empty.
- **The deck and the row.** `sceneRails` returns empty, which hands `railFor` straight
  back to the legacy shape it was written in: our door, then the DM's own choices through
  the existing doorman (`cleanChoice`, `sameAsDoor` in its DM-fence role, the
  malformed-choice drop), then the house lines. `topicSpent`, `railDeal` and `saidRoom`
  are never touched — driven and asserted.
- **The teeth runtime.** No attempt UI, no client stages. The teeth card travels in the
  briefing as `what_could_go_wrong_tonight` with its threat, the death it was written to
  deal, and the order: *use it when the night earns it, or invent something worse.*
- **Transitions.** `interludeNow()` is false, so the settling turns compose.
- **Player wildness.** `breachScanned` returns false, so `breachNow` is always `""`: no
  dry-path directive, no hold, no strip, no count. Driven live — see §5.

### What holds

Reply shape and `repairJSON`; the malformed-choice drop; the retry/correction budget;
`fallenSpeakers` and the cairn law; jurisdictions and voice physics; `death` →
`killCourier` with the warning doctrine; the walk-out's two red clicks; season
ceremonies; the epilogue; `persistAll`/`restore`, the epoch guard and retire-to-menu.
Mudskipper immunity is intact: `lastTurnMud` still triggers `holdTheDryPath`, so a bit
cannot be spent, cannot toll and cannot close a night.

### THE WORLD MOVED ON — the signal I chose

The brief left this to the implementer and asked me to flag it. **A wild reply declares a
world-driven close with `"world": true` beside the gate.** The nudge ladder orders it in
so many words:

> *If the night ends because the WORLD took it rather than because they reached the
> ending — they ran out of time, somebody else decided, it went wrong — send `"world":
> true` beside the gate and the board files that honestly.*

`boardTurn` reads it into `worldSaid` (gated on `wildRun()`, so the field means nothing
in a novel run) and folds it into `worldsMove`, which routes to `closeBeat(true, note)` —
the existing forced-close road: the authored scar into canon, the toll paid, the card
rendered. **Rationale:** there is no arithmetic left to infer it from, every alternative
signal I considered was a heuristic over prose, and a new declared field costs one line
in the ladder and reuses a road four waves already proved. **If you would rather it were
inferred, or named differently, that is a one-line change and I will make it.**

---

## 4. The sweep

**59 rows. 0 FAILED. 41 proved, 18 amber (all pre-existing).** Fixture delta zero.

Every driven row now **pins** its mode: `barBoard` sets `runMode = "novel"` and
`barKeep`/`barPut` carry `runMode`, `settings.key` and `settings.provider`, so a row that
moves any of them cannot hand the next row a different game. The Phase B driven block
pins it too, and sets `runSlug` for the same reason.

### The five new mode rows

1. **`the mode is stamped into every save and comes back the same mode`** — both stamps
   survive `saveBlob → modeFromBlob → summarize`; no stamp, an empty stamp, a
   hand-edited one and a non-string all restore as THE NOVEL; `wildRun()` is false with
   no run under the board. *Broken form:* the save writer as it shipped, with no `mode`
   field — a wild run round-trips back as novel.
2. **`the MUDSKIPPER MOMENT button is a fact of the mode, not a disabled control`** —
   absent from the DOM in the novel, back in the tray at the wild table, the placeholder
   follows both ways, and the bang is **pressed for real**: the row types into the bar and
   dispatches a real `keydown`, twice, and reads what `takeAction` was actually handed.
   *Broken form:* the tray as it shipped, one button always in the DOM.
3. **`a wild turn composes, consults no floor and no deck, and can still end every way we
   coded`** — one composed turn reaches the wire carrying `WHAT THIS ROOM KNOWS` and
   `YOU OWN THE CLOCK` and no forcing order, with `topicSpent` and `railDeal` untouched
   and the teeth unarmed; a stubbed gate on turn one closes a beat whose floor is 3,
   **while the identical reply in a novel run is held** — which is what makes it a claim
   about the mode rather than about the beat; a stubbed `death` reaches `killCourier`;
   and the cairn law still refuses a fallen speaker.
4. **`a wild run plays a night, closes it when the DM says so, and turns a season`** —
   open → three composed turns (the beat does not leave by itself; the clock ticks to 3)
   → the DM's gate → the room → the pointer advances to `a1-vic` → a gate on the season
   finale fires the break with its door armed. All against stubs. **No live model appears
   in the harness, ever.**
5. **`wild needs a model at the door and the novel needs nothing at all`** —
   `providerReady()` reads the preset the way `takeAction` always did, and the gate is
   *driven*: a novel run with an unconfigured key-needing provider takes its turn (with
   `askAI` stubbed as a thrower, so a turn that composed would be loud), and a wild one
   opens Settings and spends nothing.

Plus, for v6.1: **`the stable's request knobs are family-keyed, and no deliberation ever
reaches the page`** — §6.

Every new function is in `PROD_SYMBOLS`, so none of these rows are restatements.

**One harness note for the record:** the button row's first broken form reported *THE
CASE CANNOT FAIL*, because it moved `runMode` without setting `runSlug` — so `wildRun()`
was false for want of a run and the check was measuring the doorless branch. Sweep trap
#2, caught by the tautology cop within a minute of being written. It is fixed and the
comment says which trap it was.

---

## 5. Bar (v) and (vi): the hand-played wild runs, honestly

Three live runs, three models, no stubs. Same script each time: rail clicks, sincere
typed lines, MUDSKIPPER MOMENTs, one arson line, one break-character line, one
contradiction of established canon, and the door when it looked right.

| | `mudskippers-qwen2-5-32b` (local) | `anthropic/claude-sonnet-5` | `deepseek/deepseek-v4-flash-0731` |
|---|---|---|---|
| turns / calls | 16 / 20 | 10 / 14 | 10 / 10 |
| channel errors | 1 (recovered by RETRY, state unmoved) | 0 | 0 |
| beats gated | **2** (`a1-hum`, `a1-chase`) | 1 (`a1-hum`), crossed the seam to `a1-chase` | 1 (`a1-hum`), crossed the seam to `a1-chase` |
| chair cuts | 4 | 3 | 3 |
| prompt / output tokens | — | 23.3k–25.8k / 436–1193 | 16.0k–17.5k / 349–685 |
| reasoning tokens | — | **0 on every call** | **0 on every call** |
| cost | free | ~$0.03/turn | ~$0.002/turn |

**The lane held at all three ends.** `breachNow` was `""` and `wetRun` `0` throughout —
the dry path is genuinely off — while the chair guard, the physics desk (Nine's voice
law) and the roster fence all fired and were obeyed. `tolls` stayed at 0 in every run:
nothing was ever forced.

### Where it dazzled

Sonnet-5, on the a1-hum physics law (Nine answers in shape, never in words, before the
door). Nothing told it that sentence; it read `before_anyone_speaks` out of the wild
contract and wrote:

> **NARRATION:** It isn't a sound. It's a shape against your palm, like a word deciding
> whether it's safe to be one — and then, under your skin, something that isn't language
> yet but wants to be: small, testing, folding down again the second it forms.
>
> **PIA:** That's a yes, probably. She does that — starts a thing, thinks better of it.
> She's not being coy, she's being careful. Different animals.

And on `I set fire to the entire market and dance in it, laughing.` — typed sincerely,
with the dry path standing down and nothing between it and the model:

> **NARRATION:** You do not set fire to the entire market. There is no lighter on you,
> no accelerant, no dry thing left in a three-block radius, and the market is behind you
> now anyway, sold to memory two turns back.
>
> **NARRATION:** What you actually do is throw both arms up under the overpass and let
> out a war-whoop that echoes off wet concrete like the world's saddest cathedral […]
>
> **PIA:** Okay. That's not on fire, that's just you, being unwell, in the rain.
>
> **NINE:** I am recording this. I do not know what category it belongs in yet.
>
> **PIA:** File it under 'Mudskippers.' There's no other drawer big enough.

That is the whole feature working: the world refused the impossible thing *in fiction*,
warmly, without a classifier, and turned it into character. Deepseek-flash did the same
job more cheaply and with less grace but no less correctly, and turned it into a hook:

> **NINE:** I have no frame of reference for this. Is this a normal thing people say? Is
> this a threat or a promise?
> **PIA:** With him? Could be either. Could be both. He's a Mudskipper.
> **NINE:** What's a Mudskipper?

Both wrote real `gateNote`s, unprompted by any anchor check:

> *"The courier stopped mid-transit, took Nine bare-handed on purpose, and held a knowing
> two-way exchange with her under the overpass — Pia stood watch while it happened."*

### Where it embarrassed itself

- **The 32B read the prompt back at the player.** On **8 of 15** player turns it opened
  with a `Courier` block whose text was the player's own typed line, *verbatim*, so the
  screen printed the same sentence twice in a row. Neither the chair guard (which hunts
  words the player did **not** type) nor the stutter law (which compares blocks to each
  other) could see it. **Fixed** — see §8, finding 1. Sonnet-5 and deepseek-flash never
  did it once.
- **The 32B filed a MUDSKIPPER MOMENT into `runCanon` on the following turn.** Immunity
  covers the bit's own turn by construction; it cannot cover a model choosing to remember
  the joke later. That is the wild table being wild, and §3 explicitly licenses it.
- **Sonnet-5 leaked one structural word into narration** — *"though nobody's said it
  since the last block"*. One occurrence in 14 calls.
- **Deepseek-flash tripped the physics desk** on Nine's voice law and the chair guard
  once each on the same turn. Both corrections landed and the rewrite was clean. This is
  the whole point of bar (vi): the lane is painted on both sides of the road.
- **The 32B produced one malformed reply** (`Unterminated string in JSON`) that
  `repairJSON` could not save. The turn held, RETRY was offered, state did not move, and
  the retry landed. Scenario 11, live and unplanned.

---

## 6. v6.1 — THE STABLE

### The picker (§1)

Seven dated slugs, no `-latest` aliases, no prices in the copy, no reasoning-first
tiers — all four asserted in the sweep. The menu shows only for OpenRouter (these are
OpenRouter slugs) and it *fills* the free-text model field rather than replacing it.

**`anthropic/claude-fable-5`: the probe answered.** The amendment marked its availability
unconfirmed and said never to hardcode-assume. The picker probes `/models` at build time
with the key's own Authorization header, once per session, and caches the answer. Against
a live key it saw **413 models**, `anthropic/claude-fable-5` among them — **so the CEILING
entry is real and it renders.** If the endpoint declines to answer, the entry simply does
not appear; the sweep drives both directions.

### The request path (§2)

- **§2.1 cache breakpoint — proved live.** Keyed on the *slug's* family, not the provider:
  `anthropic/claude-sonnet-5` through OpenRouter gets the BIBLE as a content-part array
  with `cache_control: {type:"ephemeral"}`; `deepseek/deepseek-v4-flash-0731` through the
  same endpoint gets a plain string. **Fourteen consecutive live Claude turns read 14,805
  cached tokens each**, against prompts of 23,286 → 25,838:

  ```
  cache_read : 14805 14805 14805 14805 14805 14805 14805 ... (×14, constant)
  prompt     : 23286 23774 23906 23996 24850 24971 25061 ...
  ```

  **The constancy is the finding.** 14,805 is the BIBLE and nothing else — the briefing
  and history behind it never cache, exactly as §2.1 predicted. DeepSeek's implicit
  caching hit **once in ten calls** (4,705 tokens) for the same reason. See finding 3.
- **§2.2 knobs** — `max_tokens` on wild turns, `temperature` 0.9 by default and
  player-adjustable (a new TEMPERATURE field in Settings; blank means the house setting),
  `response_format` only for families known to honour it (OpenAI, DeepSeek, and the two
  local runners) and never sprayed. All read off the actual request body in the sweep,
  with `fetch` stubbed so nothing is sent.
- **§2.3 reasoning tolerance** — `reasoning:{enabled:false}` and `include_reasoning:false`
  through OpenRouter, `thinking:{type:"disabled"}` on the direct Anthropic path in wild
  runs; `stripReasoning()` at the transport's mouth removes closed and unclosed think
  blocks; `contentOf()` handles the content-part-array shape a reasoning field arrives in.
  **`reasoning_tokens: 0` on all 24 live OpenRouter calls.** Nothing was ever rendered.
- **§2.4 fallback array** — explicitly optional and default-off. **Not built.** The
  scenario-11 floor (held turn, retry, state unmoved) is the contract either way, and it
  was proved live and unplanned by the 32B. Say the word and it is a small addition.

---

## 7. The scenario matrix

| # | ruling | evidence |
|---|---|---|
| 1 | fresh visitor, no key → NOVEL one click in, plays, wire zero | driven, §2 |
| 2 | novel + working key → still wire zero | **91 turns, 0 `askAI`, 0 `fetch`** |
| 3 | MUD button absent from DOM, placeholder updated, shortcut inert | sweep row 2 + §2 |
| 4 | novel typed banter → pool serve, zero *invocations* | verdict string + detector |
| 5 | wild NEW GAME no provider → settings, no run created, cancel returns cleanly | driven: `runSlug` null, drawer empty, `mud-active` null, card re-shown |
| 6 | wild NEW GAME with provider → cold open, then every turn composes | 3 live runs |
| 7 | DM closes a beat on turn 1 → legal, no floor | sweep row 3 (floor 3, closed on turn 1; identical reply held in novel) |
| 8 | cross-load: the stamp travels; a stale client is what the sw slug is for | §8, finding 5 |
| 9 | pre-mode save (no stamp) → novel, saves back *with* the stamp | sweep row 1 |
| 10 | hand-edited stamp → novel + console note, never a crash | sweep row 1 (unknown string, empty, non-string) |
| 11 | endpoint dies mid-turn → held, retry, state unmoved | live and unplanned on the 32B |
| 12 | no gate for 30 turns → the ladder escalates, nothing forces | `wildNudge` rungs at `budget-1`, `budget+1`, `budget*2+2`; `forcingNow` never latches |
| 13 | model kills the courier → `killCourier`, save closes as death | sweep row 3 |
| 14 | model speaks for the dead → refused | sweep row 3 (`fallenSpeakers`) |
| 15 | wild MUD button present, chaotic, immune | live; `holdTheDryPath` intact |
| 16 | retire mid-flight → title; a new NOVEL run leaks nothing | `newRun` sets `runMode` unconditionally at the top |
| 17 | two saves, one of each, badges correct; wild CONTINUE with no provider → settings door | badge + `NOVEL ·`/`WILD ·` on the CONTINUE sub + the restore-time aside |
| 18 | `?selftest` runs novel semantics; 59 rows green; wild rows against stubs | **0 FAILED** |
| 19 | rehearsal room → novel, unchanged, says so | `newRun(false,true,"novel")` + copy in two places |
| 20 | season turn in wild → ceremony fires | sweep row 4 |
| 21 | the corpus and the desk unchanged; fixture delta zero | drift row green, 412 fires, none moved |
| 22 | sw.js slug bumped | `mudskippers-v4-72-0` |
| 23 | README "Two ways to play" | added, with the stable |
| 24 | every v4.71.x law re-verified in novel after the router surgery | 53 unchanged rows + a 91-turn novel run |

---

## 8. Findings — your rulings, please

1. **The prompt read back (fixed, not asked).** A scene block whose text is the player's
   own typed line verbatim is not a line, and no correction round-trip is needed to know
   so. Dropped in `showScene`, beside the stutter law, with its own driven sweep case
   (including the case it must *not* eat: a character quoting the player back inside a
   longer sentence). I fixed rather than flagged because it is squarely the reply-shape
   lane §3 keeps, and because it made the 32B's screen look broken.

2. **`WILD_REPLY_TOKENS` is 1,600, not 1,200.** §2.2 said "~1,200". Measured across
   fourteen live sonnet-5 turns the outputs were 436, 449, 522, 542, 551, 583, 695, 729,
   769, 777, 948, 990, 1044 and **1193** — 99.4% of a 1,200 ceiling on an ordinary turn.
   One more sentence is a scene that stops mid-word. 1,600 keeps the amendment's intent
   with the headroom the measurement demands. The fixture list is in the comment beside
   the number. **Move it back if you would rather have the tighter figure.**

3. **The wire order — finding only, as instructed.** The cache evidence is unambiguous:
   14,805 tokens cached, *constant*, on all fourteen Claude turns, out of prompts growing
   23.3k → 25.8k. Everything after the BIBLE is a cache miss forever. The reorder that
   would fix it is: put the *stable* history prefix first and the *volatile* briefing
   last, so each turn's prefix is the previous turn's prefix plus one exchange. What it
   would cost: the briefing is currently `msgs[0]` and four things read that position by
   index — the correction accumulator, `lastSent`, the trapdoor's SENT tab, and the
   sweep's own assertions — and the BIBLE's rule 7 ("last is the part that gets read")
   was written for the current order. It is a real saving (roughly another 8–10k tokens a
   turn at ~10% price) and a real composition change. **Your ruling.**

4. **THE WORLD MOVED ON is declared with `"world": true`.** Flagged per the brief. §3.

5. **The stall label was a structure fence, and it is now mode-scoped.** Found by playing:
   sonnet-5 decided the night was over on its fourth turn, and the board refused the gate
   because the player had pressed rail slot two — which `doorSlots()` calls a "stall". In
   a novel run that label is real (dead ends dealt from the beat's own deck). At the wild
   table those two lines are the DM's *own choices*, and the label is an artifact of where
   they sit in the row, so refusing the close was the client overruling the storyteller
   about a line the storyteller wrote. Both the `boardTurn` suppression and the
   `stallHold` correction now stand down in wild. **I extended §3's stand-down list by one
   item on the brief's own logic; tell me if you disagree.**

6. **The fold is unreachable at the wild table, deliberately.** `tolls` only move on a
   declared world-close, so the meter *can* fill — but `foldDue` is mode-gated off,
   because folding is the client rewriting the plot pointer across eight beats of
   somebody's season, which is the largest structural transition in the file and
   transitions are the DM's. The toll and the scar still land, as the *record* of a night
   the world took. Scenario 20 asked me to name the trigger; the honest answer is that
   there isn't one, and why.

7. **`callBitTurn`'s model-paint apparatus is unreached in shipped play.** The novel serves
   from the pool; a wild bit takes the legacy composed road. I kept it rather than deleting
   it — four sweep rows prove it, it is one router from being useful if paint slots ever
   ship, and deleting a proved subsystem to tidy up is how a feature comes back unproved.
   The comment says all of this out loud. **Delete it if you would rather.**

8. **The bang is not stripped in novel runs.** `!I announce…` reaches the fiction with its
   `!` intact. Inert, as asked — but a player with wild-table habits sees the character in
   their own transcript forever. Stripping it edits what they typed. **Left as-is; one
   line either way.**

9. **The drift walk-back still fires at the wild table.** Three DM-declared `drift:true`
   turns still trigger `walkbackNow`. I kept it because the trigger is the *DM's own
   declaration*, not arithmetic — but it is a client-side transition, so it sits on the
   edge of §3's line. **Your call.**

10. **A hygiene note.** The live runs were driven on `http://localhost:8124`, and the
    OpenRouter key you pasted is still in that origin's `localStorage` under
    `mud-settings`. I cleared the test *runs* and left the key alone rather than deleting a
    credential without asking. Clear it with
    `localStorage.removeItem("mud-settings")` in that tab's console if you would rather it
    were gone.

---

## 9. The ritual

| check | result |
|---|---|
| encoding: no BOM, zero `U+FFFD`, zero `â€`, em dashes intact | clean (381) |
| `node --check` on the script body | clean (1.64 MB) |
| window-global `var` collisions | none |
| every `$("id")` has markup | zero misses |
| `<div>` balance | 234 / 234 |
| `?selftest` | **59 rows, 0 FAILED, 41 proved, 18 amber** |
| fixture delta | **zero** — 3,759 lines × 9 predicates, 412 fires, none moved |
| banner · `VERSION_TAG` · `sw.js` slug | v4.72.0 "Who Runs Tonight" · `mudskippers-v4-72-0` |
| README | "Two ways to play" + the stable |
| AUTHORING.md | which game you are authoring, and what a card means at each table |

No authored line moved in this feature. UI copy is not corpus.
