# Handover — the family-time writing programme

*Live state. Update after every finished room. A fresh session should be able to pick the
loop up from this file alone.*

**Last updated: v4.94.0. Book One is finished. Book Two has started at The Open Door,
and `a2-door` is HALF BUILT — read "Where a2-door actually is" below before touching it.**

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
| `a1-hum` | 9 | Under the overpass. Drown last, the reserve bun, the second and a half |
| `a1-vic` | 8 | The 3am kitchen. The invoice never paid off, the pan, going a day early |
| `a1-chase` | 8 | The causeway. The labels, the tobacco tin, the night that turns convenient |

## Book One is CLOSED

Nine rooms, 84 cards, every one with an id and a second take, every landing in the book
dealing from its deck. Finished at v4.93.0 on 2026-08-15.

**The name conversation now stands in both its rooms, which was the one cross-room
dependency in the book.** `a1-chase` on the causeway is the FIRST time — a stranger rings
her name like a bell and Nine says keep saying it like that; asked again, she has tried
other names privately and every one was wrong, because a chosen name is another thing done
to her. `a1-turn` in the kitchen is the RETURN, and it quotes the causeway out loud ("I
gave it four seconds" / "six, tell her six, I counted"). The kitchen owns *taking the word
off them* and *the name in three different mouths*; the causeway does not touch either.
If either room is ever edited, read the other one first.

## Where `a2-door` actually is — HALF BUILT, and that is deliberate

`a2-door` is The Open Door: Hesta's diner, the family's first table, the room the whole of
Book Two hangs off. At v4.94.0 it has **15 cards with first layers and ids — and no second
layers, and neither landing wired.** The room-count reads `[15,15,0]`.

It was split on purpose. Twelve new cards plus fifteen second layers plus two landings is
roughly three times any room in Book One, and the standing law is **never start a room you
cannot finish**. First layers ship green and the room is playable and warm today; the
second layers and the wiring are the next release. **Nothing is half-spliced.**

**Next action on this room:** fifteen second takes (all fifteen cards, including the three
originals — `hesta-reads-us`, `the-street`, `the-shotgun`) and both landing rails wired.
No new subjects; the Architect ruled all twelve on 2026-08-15.

### The Open Door programme — his brief, 2026-08-15

He wants Hesta's place **as warm as possible**: lots of food and cooking, a smoke session
(cannabis, called *pre-collapse devil's lettuce, the good kind*, and the courier has to
ask for it), some drinking, peak banter, and **this is where the family really forms**.
**10–15 cards for every room at that address.** Three rooms are there:

| room | what it is | state |
|---|---|---|
| `a2-door` | the back booth, the first meal | 15 cards, first layers only |
| `a2-chassis` | "the cook" — the kitchen in the small hours | 3 cards, untouched |
| `a2-law` | "the same pan" — bacon first, bread after | 3 cards, untouched |

**Two castings he ruled that bind all three rooms:**

1. **Pia is twelve** and says so in her own mouth on the causeway. She gets a thimble,
   hates it, and cannot understand why adults do this to themselves on purpose. She does
   not smoke. She roasts everybody all evening and that is the joke — a found family
   having a silly time inside something serious, and **the contrast is the point**.
2. **Seven does most of the cooking and recites poems** — some land, some do not, and
   there is laughter throughout. **Seven is not in `a2-door`**; he arrives at `a2-seven`
   and gets hands at `a2-chassis`. The poems belong in `a2-chassis` and `a2-law`.

## Next: Books Two and Three — RULED: pick-list every room

The Architect ruled on 2026-08-15, asked directly: the depth-only shortcut was for the
last two rooms of Book One and **does not carry forward**. All 24 remaining rooms get the
full Book One treatment — audit the room, bring a **pick-list** of candidate subjects, he
rules them, then write ids, second takes and both landings.

He was told plainly that this is roughly two sessions per room instead of one, and chose
it anyway. Do not offer the shortcut again; it has been declined on the record. The
reason it is worth the time is `a1-fare`: it went to eleven cards that way and is the
deepest room in the book.

So the loop at the top of this file is the loop. It was never suspended — it was relaxed
for exactly two rooms whose subjects were already staged and already good.

## Run this at the start of every wave

This file once said `a1-turn` was "the last room in Book One". It was wrong, and it was
wrong because nobody had counted. Three lines in the console on `?selftest` settle it: 

```
Object.keys(SCENEBOOK).map(k => { var r = SCENEBOOK[k].room; return r && r.topics
  ? [k, r.topics.length, r.topics.filter(t=>t.id).length, r.topics.filter(t=>t.takes&&t.takes.length).length]
  : [k,0,0,0]; })
```

Three numbers per room: cards, cards with ids, cards with second takes. A finished room
reads `[name, n, n, n]` with n at least 7. Anything else is unfinished, however green the
sweep is — **the sweep does not check for a room being thin**, and that is exactly how a
whole book came to be called done.

## The five traps that catch me EVERY room

Written into the fixture ledger as well. All five are invisible when reading; only the
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
5. **Something that is not her, pocketed.** `shard:stow` fired on *"you put it back like
   it might have been the pocket's fault"*, written of the WIRE. Anything **put away,
   tucked, slipped back, stowed** reads as HER being stowed, because she is the thing
   this book puts in pockets. Name the object in the same clause, or give it another
   verb — the wire gets looked at, it does not get put back.

**And the lesson that came with the fifth:** trap 1 caught me again in `a1-hum`, in prose
written the same hour as a ledger paragraph about trap 1. The list only protects prose it
was read against. **Re-read it immediately before writing, every time** — especially for
second takes on cards whose first take was written months earlier, which is exactly where
attention lapses.

Also: **do not name a character before the player has met them.** Pia said "Hesta's lot"
in Book One and the desk correctly called it summoning an off-stage person.

## The method that works

- Write the room's block to a scratch `.txt`, then splice with a small python script that
  **asserts the anchor appears exactly once** and refuses otherwise. Heredocs choke on
  this prose; use files.
- After splicing: `node --check` the script body, then `?selftest`.
- Expect **zero to two** fixture drifts per room, and expect **zero** if you do the one
  thing that works. `a1-turn` came back with one honest fire and no false positive;
  `a1-vic` and `a1-chase` came back byte-identical. `a1-hum` came back with two false
  positives — including trap 1, in prose written the same hour as a ledger paragraph
  about trap 1. The difference is one habit and no talent: **re-read the five shapes
  immediately before writing, not after.** Any predicate drifting is a false positive in
  the new prose until proven otherwise — read the line, do not regenerate.
  `a1-chase` is the proof it scales: its cards include one literally called *whether
  anyone dies of this* and one that is an inventory of coat pockets, which are traps 4
  and 5 by name, and both came back clean because the list was read first.
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

- **Books Two and Three — 24 rooms**, full pick-list each. This is the whole of the
  remaining room programme.
- **32 transition scenes** for `TAKE THE NIGHT ON` — short, 3-4 lines, the family pushes
  and the courier stands up. Not started.
- **~240 staged choices still unwired** outside the finished rooms. 55 rows wired so far,
  six per finished room plus one in `a3-seize`.
- **6 amber sweep rows**, all AI-side.
- **The AI side**: the DM respecting family time, and the drift nudge ("the rain is
  watching") pointing at `TAKE THE NIGHT ON`. Deferred by the Architect until the written
  side settles.
