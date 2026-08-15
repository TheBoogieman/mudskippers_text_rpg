# Handover — the family-time writing programme

*Live state. Update after every finished room. A fresh session should be able to pick the
loop up from this file alone.*

**Last updated: v4.90.0.**

---

## The loop we are running

1. I bring the Architect a room's candidate subjects **as a pick-list question** (he
   asked for pick-from-alternatives, never open questions).
2. He picks. He rules the subjects; the scenes are mine.
3. I write the room, verify, ship, report.
4. Next room.

**"Don't stop until we do this for every beat."** — his instruction, 2026-08-15.

## What a FINISHED room means

- **7+ cards** in the beat's `room.topics` (three was the old default; more is better —
  he took all eight candidates for `a1-fare`)
- **a second take on every card** — `takes:[[ ... ]]`. Asked twice, they go FURTHER. The
  first take is what they tell anybody; the second is what they tell somebody who asked
  again. It must still respect the card's `holds`.
- **an `id` on every card** — kebab-case, unique within its deck
- **both landing rows wired** — `rail:[{line:"...", cards:["id","id","id"]}]` on the
  beat's `lands` and `landsHard`. Order is preference; the row binds the first unspent.
- **`knock:true`** on any "way forward" line (marks it as not-a-question; no longer opens
  anything, since the room's door is always up)

## Rooms finished so far

| room | cards | notes |
|---|---|---|
| `a1-pack` | 7 | Vic's shack. Hands, the causeway walk, the open favour |
| `a1-fare` | 11 | The doorway. Deepest room in the book; eight of eleven are Pia |
| `a1-late` | 9 | The shut laundry. Pia frightened, the fifth rule, "somebody deciding" |
| `a1-exit` | 10 | The porch. Lights on the far bank, the lay-by, the third Vic death plant |
| `a1-carried` | 11 | The back room after the sweep. The pipe, the second lamp, the bag by the door |
| `a1-turn` | 11 | The kitchen after. Kept vs chosen, the cover story, the pan moved up the table |

## CORRECTION: Book One is NOT finished

This file said `a1-turn` was "the last room in Book One". **That was wrong**, and it was
wrong because nobody had counted. Driven at v4.90.0, the three remaining Book One rooms
are:

| room | cards | ids | second takes | wired |
|---|---|---|---|---|
| `a1-hum` | 9 | all 9 | **1 of 9** | yes (6 rows) |
| `a1-chase` | 8 | none | none | no |
| `a1-vic` | 8 | none | none | no |

`a1-hum` is the cheapest of the three and the odd one out: it was the pilot, so it was
given ids and wiring first and only ever got one second take. It needs **eight second
takes and nothing else** — no new subjects to rule, no wiring to do. That makes it the
right next room, and it is a smaller job than any room since `a1-pack`.

`a1-chase` and `a1-vic` are full rooms from scratch: subjects to rule, ids, second takes,
both landings. Ask for subjects as a pick-list before writing either.

The check that would have caught this, and which should be run at the start of every
wave from now on — it is three lines in the console on `?selftest`:

```
Object.keys(SCENEBOOK).map(k => { var r = SCENEBOOK[k].room; return r && r.topics
  ? [k, r.topics.length, r.topics.filter(t=>t.id).length, r.topics.filter(t=>t.takes&&t.takes.length).length]
  : [k,0,0,0]; })
```

Three numbers per room: cards, cards with ids, cards with second takes. A finished room
reads `[name, n, n, n]` with n at least 7. Anything else is unfinished, however green the
sweep is — **the sweep does not check for a room being thin**, and that is exactly how a
whole book came to be called done.

## The four traps that catch me EVERY room

Written into the fixture ledger as well. All four are invisible when reading; only the
sweep finds them:

1. **Counting prose.** A bare number in dialogue reads as a character name — Three, Five,
   Seven, Nine are all people. *"Three places, two noes and a yes"*, *"Five: decide
   before you are tired"*, *"Dead. So: three."* all fired. **Write numbers as words that
   are not names** ("the fifth is", "two noes and a yes", "So: us").
2. **Violence that is NOT happening.** `breachIn` matched "arson" on *"will not burn a
   laundry down"* — a sentence denying it. **Avoid the verb entirely**; rewrite to "take a
   building apart".
3. **Bodies lent to Nine by figure of speech.** `breach` fired on *"her equivalent of
   clearing a throat"*. The hedge does not save it — she has **no throat, no breath, no
   shoulders to shrug, no eyes to close**. Describe the hum instead: it steadies, it
   flattens, it goes down and comes back up.
4. **Stillness written of the living.** `death` fired on *"Pia has gone very still"*. The
   book reserves that register for the dead — **gone still, stopped moving, went quiet
   and stayed quiet** — and a living character borrowing it reads as a death every time.
   Give them something to do instead ("became extremely interested in the far wall").

Also: **do not name a character before the player has met them.** Pia said "Hesta's lot"
in Book One and the desk correctly called it summoning an off-stage person.

## The method that works

- Write the room's block to a scratch `.txt`, then splice with a small python script that
  **asserts the anchor appears exactly once** and refuses otherwise. Heredocs choke on
  this prose; use files.
- After splicing: `node --check` the script body, then `?selftest`.
- Expect **zero to two** fixture drifts per room. `a1-turn` came back with one, honest,
  and no false positive at all — the first clean room in five, because the four traps
  below were read BEFORE the prose was written rather than after. Any predicate drifting
  is a false positive in the new prose until proven otherwise — read the line, do not
  regenerate.
- Take the fixture **by delta**, and write a ledger paragraph above `VERDICT_FIXTURE`.
- Release ritual: banner, `VERSION_TAG`, `sw.js` CACHE slug, encoding check, id/div check,
  0 FAILED, then commit and push.

## Engine state a new session needs to know

- **Family time**: its way out (`TAKE THE NIGHT ON`) is up from turn one. `SLACK_ARM` is
  vestigial. The room **laps**: when every card is spent the deck goes round and each card
  plays its next take. Only rooms lap; beats do not.
- **The beat**: budget ~4. Two yellow warnings, then the world takes it — hard landing,
  scar, toll. Three tolls folds the table. **Taking the door IS answering the question**,
  which is why the door closes clean.
- **Peril** only exists in the beat, never in family time, and **does not spend the
  budget** while it is live.
- Novel runs have **no typing box** — every player act is a click.

## Still open beyond the rooms

- **Three Book One rooms** — `a1-hum` (eight second takes, nothing else), then `a1-chase`
  and `a1-vic` from scratch. Then Books Two and Three (24 rooms).
- **32 transition scenes** for `TAKE THE NIGHT ON` — short, 3-4 lines, the family pushes
  and the courier stands up. Not started.
- **~240 staged choices still unwired** outside the finished rooms. 43 rows wired so far,
  six per finished room plus one in `a3-seize`.
- **6 amber sweep rows**, all AI-side.
- **The AI side**: the DM respecting family time, and the drift nudge ("the rain is
  watching") pointing at `TAKE THE NIGHT ON`. Deferred by the Architect until the written
  side settles.
