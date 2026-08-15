# The v4.72.0 audit — "Who Runs Tonight," read hostile and driven live

*Cyberbossman's desk, per the v6.0 contract: "The report starts my audit — no pre-granted sign-off this time." Code read against f451606..ffaec2f in full; both modes driven through the rig; the wild table driven against a hand-authored mock DM; the sweep re-run locally. The fixes below shipped as v4.72.1 in the same sitting.*

## The verdict

**The two tables stand.** The mode is a real run fact — stamped, restored, immutable, defaulting to the novel on every doubt. The novel is pure: a full beat cycle driven live with a configured provider pointed at a live endpoint and the endpoint never heard a whisper — held door, deck serves, repeat ladder, an inert `!`, the ask-twice close, the settle, the room, the way on, an ambient peril by turn one, all client-side. The wild table composes every turn, consults no floor and no deck, takes a gate on turn two from a stall-slot press without a hold or a toll, files `world:true` as a scar and a toll off the DM's own word, kills through the coded peril road, holds the lane on malformed replies (SIGNAL LOST + RETRY, state unmoved), strips think-junk with a decoy draft inside it, and marches a fallen speaker off the stage through a correction round. The stable's knobs land on the wire exactly as briefed: 1,600 cap, 0.9 default, JSON mode rostered not sprayed, reasoning refused in both dialects, the cache breakpoint keyed on the slug's family.

Five defects found, all mechanical, all fixed in v4.72.1. None of them touches the lane; three of them touch the seams between the new mode logic and machinery that predates it — which is exactly where a hostile read earns its keep.

## Rulings on the report's findings

**(2) WILD_REPLY_TOKENS = 1,600 — AFFIRMED.** The measurement beats the amendment: a 1,193-token turn against a 1,200 cap is a scene one sentence from truncation. The number is right and the reasoning is written where the number lives.

**(3) The wire-order reorder for cache — DECLINED for this wave, parked as the first item on the resume queue.** The saving is real (~8–10k tokens a turn of history that could prefix-cache behind a stable head). But it is a composition change that touches every msgs[0] reader — the correction accumulator, lastSent, the SENT tab, the sweep's own asserts, BIBLE rule 7 — in the release the game pauses on. The amendment said it plainly: that change ships as its own wave with its own bar, not as a rider on this one.

**(4) `"world": true` as the world's-own-close signal — AFFIRMED.** Driven live: the banner, the scar, and "a toll was paid — 1 of 3" all filed off the DM's declaration. The guard shape is right — the field is inert without a gate beside it, so a stray `world` cannot close anything.

**(5) The stall-label stand-down — AFFIRMED.** Driven live: a gate delivered on a slot-two press closed the beat at the wild table; the same reply in a novel run is demoted exactly as before.

**(6) The fold unreachable at the wild table — AFFIRMED, and extended.** The report stood the fold down at the close road and missed the second road in: the drift branch could still arm the walk-back *and the fold* off the DM's own `drift` self-reports. Fixed in v4.72.1 (below). Structure fences stand down whole, or they are not down.

**(7) The callBitTurn paint apparatus, kept unused — AFFIRMED KEEP.** Four sweep rows prove it, one router guards it, and deleting a proved subsystem to tidy up is how a feature comes back unproved.

**(8) The leading `!` in a novel run — AFFIRMED AS SHIPPED.** The bang is inert, the line is taken literally, and the game does not silently edit what the player typed. The novel's welcome copy already says there is no such button.

**(9) Drift walk-back in wild — RULED: stand down.** See finding (6). In v4.72.1 the counter still runs, the yellow aside still serves (the DM said drift; saying it back is conversation), and boardTension still cools the room off it — but the red aside that *promises* the walk-back, the walk-back itself, and the drift-road fold are novel-only. A threat the world never keeps is scenery, and we do not ship scenery.

**(10) The key in localhost:8124's storage — RELAYED to the Architect.** His action, nobody else's: `localStorage.removeItem("mud-settings")` in that tab's console if he wants it gone.

## The audit's own findings (fixed in v4.72.1)

**A. The provider switch reverted its preset.** v4.72.0's `s-provider` onchange ended in `fillSettingsForm()`, which re-read the *saved* settings into the form — switch anthropic→openrouter and the BASE and MODEL fields snapped back to the anthropic values while the dropdown said openrouter. SAVE then shipped a provider pointed at the wrong endpoint and every wild call died. This sat directly on the wild door's own onboarding road. Fixed: the onchange dresses only the stable field, and the probe reads the form, not the unsaved settings. Sweep-pinned through the real handler.

**B. Every wild bit was billed for the client's own deletion.** `holdTheDryPath` empties the reply's `choices` on every bit *by design* ("a rail written under a mad premise is the mad premise with a button on it"); the no-choices correction then read that deletion as the model's failure — a lying correction, a wasted paid call per joke, and two bits in a row earned the "context window too small" diagnosis. The sibling choiceShape check has excluded bits since it was written; this one collided only when the wild table reopened the composed bit road. Fixed: bits are exempt from the correction and the thin-reply count. Driven live: one call, clean banter, counter still.

**C. Three roads to a new run bypassed the two doors.** The end card's NEW GAME / NEW SEASON, the dangling-CONTINUE fallback, and a line typed with no run under the board all went straight to `newRun`, whose modeless default is the novel — so a wild player whose courier died pressed "Start again?" and was reseated, silently, at the other table. Fixed: all three route through the WHO RUNS TONIGHT card. The card is the only surface that seats a table; now it is also the only road.

**D. The sweep's stable row leaked its settings.** bodyFor moved model, base, style and temp and put back only key and provider — one innocent SAVE after a ?selftest load would have persisted the harness's leftovers as the player's configuration. Fixed: barKeep/barPut carry all of it.

**E. The temperature dial could buy a 400.** The settings field honestly says 0 to 2; the Anthropic API stops at 1, direct or through OpenRouter — a player who dialed 1.5 on an anthropic wild run bought a dead turn every turn. Fixed: clamped to 1 for that family only; and the novel's adaptive-thinking body now carries no temperature at all, because the API refuses the pair (unreachable today, held shut anyway).

## Observations, no code (the Architect's call)

- **The authored open and the authored landing still render at the wild table.** The beat's establishing shot and the close's landing passage are client furniture in both modes; the DM writes everything between. It reads as two voices on one close — mine, then the page's. Defensible as the board keeping the record; yours to reword or stand down if you want the wild close to be the DM's alone.
- **stripReasoning's unclosed-tag salvage takes the first brace after the tag.** An *unclosed* think block that contains a discarded JSON draft would hand the parser the draft. The closed case is handled, the sweep drives it, and the unclosed-with-draft shape needs a model that both leaks and truncates its own deliberation around a valid decoy — accepted residual, documented here so it is a decision and not a surprise.

## The drives, for the record

Novel: ~20 turns, cold open through a1-chase, provider configured at a live mock, **zero requests observed at the endpoint**; MUD button absent from the DOM; `!` line taken sincerely and costing a turn; held door, deck serve, repeat ladder, ask-twice close, settle, room, way on, peril live by turn one. Wild: 16 hand-authored mock turns — composed briefing carrying WHAT THIS ROOM KNOWS + the nudge ladder (turn-10 rung reads as suggestion, no forcing order ever); gate on turn 2 honored from a stall slot; think-junk stripped around a decoy draft; malformed reply → SIGNAL LOST + RETRY, landed clean on the retry; fallen speaker corrected off the stage; bit = one call after the fix; DM-declared peril armed the coded road; `world:true` filed banner + scar + toll; warned death killed and locked the run; the save stamped `"mode":"wild"` and restored as itself.

Sweep, local, v4.72.1: **62 rows, 0 FAILED, 44 PROVED** (three new rows: the bit's single call, drift-as-conversation, no-road-without-the-doors), fixture engine clean, the one declared item still the a1-turn rail awaiting the Architect's hand pass.

*v4.72.1 "The Audit Seats the House" ships with this document.*
