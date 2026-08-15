# Handover — the family-time writing programme

*Live state. Update after every finished room. A fresh session should be able to pick the
loop up from this file alone.*

**Last updated: v5.0.0. Book One is finished. `a2-door` is finished — 15 cards, the
deepest room in the game. The chassis fork engine is BUILT and the chassis now lives under
Hesta's floor. Next is writing `a2-chassis`.**

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
| `a2-door` | 15 | The Open Door. Deepest room in the game. The tin, the thimble, one true sentence a year |

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

## `a2-door` is DONE, and it is the room to copy

Fifteen cards, fifteen second layers, both landings dealing. Built across two releases
(v4.94.0 first layers, v4.95.0 second layers and wiring) because 12 new cards + 15 second
takes + 2 landings is about three times any Book One room, and the standing law is **never
start a room you cannot finish**. Splitting at "all first layers ship green" is the pattern
to reuse for every 10–15 card room from here.

### The warm-room programme — his brief, 2026-08-15

He wants the family's table **as warm as possible**: lots of food and cooking, a smoke
session (cannabis, called *pre-collapse devil's lettuce, the good kind*, and the courier
has to ask for it), some drinking, peak banter, and **this is where the family really
forms**. **10–15 cards for every one of these rooms.**

**Geography — got wrong twice in conversation, so here it is from the text itself.**

The whole row sits on **one drowned basement**, and it is not two places. Hesta's own card
in `a2-ground` says it: *"A market floor, when my grandmother ran the row. Then the water
table had opinions, and the city agreed to lose."* The teeth of that beat say what is under
the water: *"Flat water over a market floor means stalls under it. Stall frames, hooks,
cellar mouths. It is not a floor, it is a lid."*

So: **the old market is the lid, the stalls' cellars are the rooms off it, and some are
drowned and some are not.** `a2-ground` is the flooded half; `a2-hand` opens at the dry end.
**Hesta's cold dry cellar under The Open Door is one of those rooms** — which is why things
*keep* in it, and why Vic can stand in the flooded part and say something under this street
goes with it. He is nearly pointing at it.

**AND THERE ARE ONLY TWO PLACES IN THE WHOLE STORY, not three.** The city — the Veldt, the
row, The Open Door, the drowned market under it. And **Vic's place on the marsh**, which is
ONE property: the safehouse is *"a farmhouse that lost an argument with the marsh and
stayed"*, and the cable shack is *"behind the safehouse"* — the house and his workshop out
the back, same address. Mirren's cairn is on the marsh edge nearby. The causeway is the road
between the two. "The shack" and "the safehouse" are not two locations and never were.

**SEASON TWO LIVES AT THE OPEN DOOR (ruled 2026-08-15, shipped v4.99.0).** Book One ends at
the marsh, and Book Two had inherited it as home base without one line of prose ever
choosing it — seven of its thirteen nights, including the finale, were in a shack because
that is where the previous book stopped. Now `a2-seven`, `a2-three`, `a2-housing`,
`a2-manual`, `a2-choir`, `a2-law` and `a2-turn` are all at Hesta's. **The long room became
the long table** — what she does when a family outgrows a booth.

**What is still on the marsh is there for a REASON, and the reason is written into the
beat.** `a2-mirren` is the cairn, because you bury people on the marsh. `a2-annul` is Vic's
shack, because you do not bring a Choir officer taken alive into the row where your family
eats and a twelve-year-old sleeps upstairs. Nothing is ever a retreat and **Hesta's is never
compromised** — the hunt visits that street and is finished the next night.

Room by room: `a2-door` is the back booth. `a2-ground` is the flooded undercroft below the
old exchange house, on the same row. `a2-chassis` moved into Hesta's back room at v4.97.0.
`a2-law` is still the safehouse kitchen out on the marsh. The warmth is not tied to a
building — it is tied to Hesta being in the room and a pan being on, and she is in all of
them.

**WHY VIC PICKS THAT ROOF, and he never says it.** Plan A for getting Nine out of the city
was **Mirren** — Vic's friend, the receiver, the delivery's destination. The Choir spent
her, and the thing hunting the family in `a2-ground` is wearing her. **Plan B is the
chassis.** So when Vic gathers everyone at The Open Door on day 9 he is walking them to the
body without telling them it is there. The player learns something is down there at
`a2-ground` and what it is at `a2-chassis`. Vic gives up neither early.

**THE CHASSIS LIVES UNDER HESTA'S FLOOR (ruled 2026-08-15, shipped v4.97.0).** Vic built it
and has kept it in the cold dry space under The Open Door for years. She was never told
what it is, which is exactly why the only thing she will say about her own cellar is that
what is under it is not hers — the `under-the-floor` card in `a2-door` is now load-bearing
rather than decoration. The family learns something is down there in `a2-ground`, from Vic,
in the water, with a hunter between them and that street; they learn WHAT it is at
`a2-chassis`. Do not let anything explain the floor earlier than that.

| room | what it is | where | state |
|---|---|---|---|
| `a2-door` | the back booth, the first meal | The Open Door | **DONE — 15 cards** |
| `a2-chassis` | "the cook" — a new body, floorboards up | **The Open Door** | 3 cards, untouched |
| `a2-law` | "the same pan" — bacon first, bread after | safehouse | 3 cards, untouched |

**Why they go to Hesta's at all (ruled 2026-08-15, shipped v4.98.0).** Vic called it. Six
days after the courier says out loud that he is keeping Nine, Vic sends word to the one
roof in the city he trusts and asks everybody to be under it — which is his whole want this
season, and it had been sitting in his character sheet unsaid for the entire beat it
explains. He will not answer *why this courier*. Hesta was told they were coming and told
nothing else, which is why she is laying out more cutlery than there are people on the
street: she does not need a reason, she needs a number, and she rounds up.

**The marsh house is NOT burned and this is not a flight.** The sweep in `a1-carried`
passed over them and the family sleeps at the safehouse again three times before the season
ends. That wrong reading is refused in capitals inside `a2-door`'s `before`, because the
wild table reads `before` and would otherwise have invented it — and so would a human
picking this up cold. A gap does not stay empty; whatever sounds plausible fills it.

**Four things the book could not explain, now authored (ruled 2026-08-15, shipped v5.0.0).**

1. **How Seven got out.** He seated himself in a Choir labour frame he had no right to —
   did the seating himself, badly, over a whole night — then went into the back of his own
   neck after the tracker with a tool meant for something else. He made a mess of it. **The
   botched extraction is why the cell is failing**, which turns his clock from a
   coincidence into a consequence: his escape is the thing that is going to end him.
2. **How Three found them.** She did not — she found the *hunter*. She reads for overlay
   work (two minds on one body run at frequencies that disagree, and the disagreement
   leaks) and was eleven days behind it. She came expecting to do it herself, alone, and
   found it already finished by hand, with the woman underneath carried out to a stone.
   *"I did not come for you. I stayed for that."*
3. **Why the Choir does not pursue her.** Not mercy, not an oversight — **arithmetic**.
   Pursuing her would concede that the process hands people back, and it will not concede
   that. She is not a fugitive; she is a filing error, and an error is never entered.
4. **Nine knew Seven's voice from inside.** He read the lists; she was a number on one. He
   does not remember her. She remembers because it was her number. **She gives him the body
   anyway** — which is the whole of why the chassis choice is a character moment.

**And a collision routed around, worth copying as a rule:** Three's answer wanted the word
*communion*, and `a2-three` is three beats **before** `a2-choir`, the beat where what the
Choir actually is gets revealed. So she gestures instead — *"nobody is dragged in, I will
say no more than that tonight and you should not push."* **A character who knows the answer
is not a licence to print it early.**

**Seven's beat was NOT moved forward, and here is why, so it is not re-proposed.** It is
built to test the vow made over Mirren's grave — its goal opens *"THE VOW'S FIRST TRIAL"*
and Vic says it out loud: *"Nobody left behind. We said it over a cairn three nights ago."*
Move Seven ahead of the hunt and there is no vow, no Mirren and no grave. There is also a
hard clock: he has **five to eight hours** on that cell, so his arrival and the chassis
cannot be pulled apart, and moving them drags the body out from under the floor before the
undercroft reveal. He does not need to arrive early — from `a2-chassis` he is in **five
more rooms at Hesta's** with Pia working on him the whole time.

**The Book Two timeline, so nobody has to re-derive it.** Days and places are authored on
the beats; this is just them written out.

| day | beat | where | note |
|---|---|---|---|
| 9 | `a2-door` | the back booth | **smoke session one.** Pia, Vic, Nine, Hesta |
| 10–11 | `a2-ground` | the flooded undercroft | Vic says something of his is under the street |
| 11 | `a2-hand` | dry end → the marsh | |
| 11 | `a2-mirren` | the cairn | |
| 14 | `a2-seven` | the row → Hesta's back room | **Seven arrives** on her step. He came because he heard there is a door here held open with a brick that feeds anybody needing out of Choir business |
| 15 | `a2-chassis` | Hesta's back room, boards up | **Seven gets hands. Smoke session two** |
| 16–19 | three / housing / manual / choir | Hesta's — the long table, the back room | |
| 20 | `a2-annul` | Vic's shack, on purpose | you do not bring a captive into the row |
| 22–23 | `a2-law`, `a2-turn` | Hesta's kitchen, the long table | **the season ends at the warm table** |

**Seven cannot be at the first session** — it is day 9 and the family has not met him, and
that night's job is the core four forming. He gets the second one instead, five days later,
in the same building with the same tin: a body about two hours old, the dying frame he
arrived in nearby, and the open hole the body came out of in the floor beside the table.

**Three castings he ruled that bind all of them:**

1. **Pia is twelve** and says so in her own mouth on the causeway. She gets a thimble,
   hates it, and cannot understand why adults do this to themselves on purpose. She does
   not smoke. She roasts everybody all evening and that is the joke — a found family
   having a silly time inside something serious, and **the contrast is the point**.
2. **Seven does most of the cooking and recites poems** — some land, some do not, and
   there is laughter throughout. **Seven is not in `a2-door`**; he arrives at `a2-seven`
   and gets hands at `a2-chassis`.
3. **The robot smokes.** Ruled 2026-08-15: Seven tries it and goes full Shakespeare, and
   it is a **full scene**, not a line. The canon mechanic is already on the beat and it is
   the reason it works — *"a chassis tastes in tokens"*. Token-grade chemical sensing,
   brand new, no tolerance and no baseline, taking an input nobody specified for it.

### `a2-chassis` forks, and BOTH BRANCHES GET WRITTEN — ruled 2026-08-15

This is **the one twin-exit beat in the game**. The chassis is Nine's; she can give it to
Seven or keep it. If she keeps it, Seven is seated in the courier's skull housing and has
**no body at all** — so he cannot smoke, and the scene as briefed does not exist on that
path.

Asked directly, the Architect ruled **both branches fully written**: Seven's recital on
one path, and on the other, Nine's — the shard who spent the whole of `a2-door` being told
what food tasted like, finally getting senses, all of them, at once. The two paths are a
main road and a main road, not a road and a footnote.

**The engine for this SHIPPED at v4.96.0.** Write forked cards like this:

```js
{id:"the-recital", ask:"...", key:"...", who:"Seven", fork:"Seven", plays:[ ... ]}
```

`fork:"Seven"` or `fork:"Nine"`. Omit it and the card plays on both, which is what most
cards should do — write *the one with the hands* rather than the name and a card needs no
fork at all. Only the recital cluster genuinely forks.

**Two laws it rests on, both now sweep rows that drive the shipped code:**

1. **An off-branch card is never removed from the list.** `topicSpent`, `railDeal` and
   every counter store **positions**, and those positions are inside the save files of
   people who are part-way through a run. Filtering renumbers everything behind the gap
   and deals strangers to anybody who loads. Off-branch cards stay where they are and are
   treated as permanently spent. **Append new cards; never reorder or delete.**
2. **Every deck total asks `branchLive()`, never `topics.length`.** The room laps when
   every card is spent; a half-forked deck can never reach its own raw total, so the naive
   version stops lapping and every second take becomes permanently unreachable **with no
   error anywhere**. Four counters were hunted for this reason, not one.

Nine readers were changed: `pickTopic`, `pickTopicFresh`, `deckHasUnspent`, `roomDeckDry`,
`wireRail`, `scenewideTerms`, `topicEvidence`, the wild-table briefing, and the workbench.
`stCorpus` was deliberately left alone — the drift net must keep walking **both** branches,
because both are real writing.

**Known pre-existing hole, still open:** `a2-chassis`'s card *"how the other one is taking
it"* reads as though Seven took the body (*"he knows what I gave"*). On the Nine branch it
is wrong today. Fix it with a `fork:` pair when the room is written.

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
- **~230 staged choices still unwired** outside the finished rooms. 61 rows wired so far,
  six per finished room plus one in `a3-seize`.
- **One never-line was deliberately relaxed at v4.95.0** — `a2-door`'s guard on what is
  under Hesta's floor. The Architect ruled a card that trades one true sentence a year
  about it, so the guard was narrowed to exactly the ground that card stands on rather
  than left as a law the authored text already broke. If a card ever needs more of that
  floor, narrow the guard again in the same commit; never leave the two disagreeing,
  because the wild table reads the guard and the novel reads the card.
- **6 amber sweep rows**, all AI-side.
- **The AI side**: the DM respecting family time, and the drift nudge ("the rain is
  watching") pointing at `TAKE THE NIGHT ON`. Deferred by the Architect until the written
  side settles.
