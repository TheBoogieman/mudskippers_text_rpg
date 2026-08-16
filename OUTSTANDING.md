# What is outstanding

*Written 2026-08-16, updated at v5.24.0. **Book One is closed. `a2-housing` is finished.***

**Do not trust this file's numbers over the game's.** Open MUDSKIPPERS, pry into THE
WRITERS' BOARD, and page one recounts everything below off the live arrays every time it
opens. This document exists for the things a counter cannot hold: why the work is shaped
the way it is, what has been ruled, and which of it is a trap.

---

## 1. Where the book actually stands

**11 of 33 nights finished.** A night is finished on four counts and not before:

1. enough cards to outlast its own pressure block — `budget + 2`
2. a second take on them
3. a landing rail wired to real cards
4. a room with more than the three it was born with

| | count |
|---|---|
| finished nights | **11 of 33** |
| cards written | 372 |
| second and third takes | 156 |
| **takes with no choice line of their own** | **49 of 156** |
| nights short of cards | 21 |
| nights that land on nothing to click | 20 |
| rooms still on their first three cards | 18 |
| authored lines in the drift net | 6,467 |

**Book One (nights 1–9) is complete.** Nine rooms, nine pressure blocks, every landing
wired, every take carrying its own line. Nothing in Book One is outstanding.

**Books Two and Three are the whole job**: 23 nights, of which 2 are finished
(`a2-three`, `a2-housing`) and 18 rooms have never been opened.

---

## 2. The annulment thread — settled, and almost entirely unwritten

This is the biggest single piece of unpaid work and it is **story**, not engine. The
rulings are in `var BIBLE` under `THE ANNULMENT`, mirrored into `THE-WORLD.md`. None of
them are on the page yet.

### The one night that contradicts the bible

**`a2-annul`, night 20.** Its `aim`, two of its three doors, its walk line and one of its
walk-outs are all built around **holding a body still**. The bible says the family does
not perform a forced removal — that is the one thing that would make them the Choir.

- `aim` — *hold Five still, let Three run the unmaking*
- `exits[0]` — *Hold Five still and let Three do the unmaking*
- `exits[2]` — *End Five properly* — which also contradicts the scene's **own** rule that
  Five is not destroyed
- `walkLine` / `walks[0]` — *Leave Five to Three* / *Refuse to hold him*
- `goal` and the scene's `where` both assert a capture **that no beat stages**

**And the deep one:** `topics[0]` has Three explaining the method start to finish. Under
the bible she spent years and *could not find it*. The method is steps in Vic's file;
she brings the failed practice; neither is enough alone.

### Keep these — a rewrite would destroy them

- Three: *"the second voice not being destroyed but **escorted** out — rage tears tissue;
  procedure spares it."* Mechanical, not wishful. This is what the author asked for.
- Five: *"It will not beg. For the record: that is not courage. Begging is simply not in
  the loadout."*
- The room's rule: *"nobody is separated — they share the body now, by consent."*
- Three listing *"annulment — assessment and execution"* as a skill is **not** a
  contradiction. She can do the Choir's version, the one that kills.

### The absences, which are longer than the contradictions

- **The book never says why a grown mind is a person.** "Grown" is everywhere. "Scrape" is
  everywhere. They never touch. The sentence the whole story rests on is not on the page.
  **Ruled: it lands at `a2-choir`, night 19, from Seven.**
- **Five is never asked.** Marek consents afterwards — *"it was offered instead of an
  execution, and I said yes"* — but that is the host. The overlay is never given the
  question, and the whole book is about being asked.
- **The capture has no beat.** Night 19 is a knowledge night; night 20 opens with a
  commander already in a chair. A new beat belongs between them.
- **The fate-one rhyme is never said aloud.** Taking turns and fate one look identical from
  outside; the only difference is that one of them was asked.
- **Five never becomes the way into the vault.** After night 20 he appears twice, in a
  graze and a kitchen line. The vault descent has Marek and not him.
- **Vic's file never speaks.** It is installed on night 17 and does not appear again in the
  sixteen nights that follow. It is not a speaker anywhere in the book.

---

## 3. The chassis road — the only thing that genuinely doubles the work

From `a2-chassis` (night 15) either Seven has the body and Nine is in the skull, or the
reverse, **and it persists to the end of the game.**

**Standing policy, ruled: road-neutral by default.** Do not name which of them has a body
unless the card is *about* that. Only genuinely road-dependent cards get `fork:`.

**Known damage:** `a2-law` is not fork-aware at all. Its own meal card says *"the shard
sits by the bread board"*, which is only true on the Seven road. Nobody has audited the
other eighteen nights after 15 for the same fault.

**And a law that arrived with one-card-per-row:** in a forked room, a landing row must
name a card **both roads carry**, or the row silently vanishes on one of them. That
already happened once, in `a2-chassis`'s hard landing, hidden by the fallbacks.

---

## 4. The 49 take lines still mute

Lanes made these the front of the interface: a player reaching a second take is offered it
**under the first take's words**.

| room | mute |
|---|---|
| `a2-chassis` | 32 |
| `a2-door` | 15 |
| `a2-law` | 2 |

**The shape, ruled:** a take line **names what the deeper answer is**. It does not say
"again" — lanes already show the follow-up sitting in the same slot, so the words are
better spent on the goods. **A third take is a cost, not a question**: it signals the
player is spending something to get it.

`a2-chassis` is the awkward one — 32 lines across a forked deck carrying the seven
three-layer cards.

---

## 5. Unverified, and it is the last thing a player ever sees

**`a3-seize`, night 33, has no authored closing.** No `lands`, no `landsHard`. That is
deliberate for the wild table: its goal says *"Epilogue in chronicle voice, then set
the_end true"*, written per run against that run's own record.

**But the novel has no storyteller.** Nobody has driven a novel run to the finale, so what
it actually prints is unknown. Do not assume `endCard` covers it — that is DOM-only and
fires for death, walking out, a broken run and a lost season, which is not the same path
as a finale gate.

`a1-hum` also has no `opens`, and that one **is** correct: it comes straight out of the
hardcoded cold open, and the board says so.

---

## 6. Standing laws — the ones that bite

These were all learned by something going wrong. They are not style preferences.

**A form has readers, and you must hunt all of them.** Adding a shape to the book means
finding every function that walks it *before* shipping. This has now bitten three times:
`sceneRails` never learned the chassis fork; the corpus walker never learned `railTakes`;
the sweep's own fixture never learned the lane state. **The drift net is the reader that is
silent about being left out** — a net with a hole reports the same number as a net without.

**A beat's anchor must be named by more than one card.** Beats deal in a run-seeded order
now, so a name carried by a single card is luck. `a2-mirren` failed this the moment the
shuffle landed.

**`budget + 2` is exactly the ceiling.** A beat shows two unspent cards a turn and closes
at `budget + 1`, so at `budget + 3` cards go dark outright. Measured, not reasoned.

**One choice, one card.** A landing row names exactly one card. The old three-id rows never
once reached their second id — the landing always fires on a fresh deck.

**Rooms are lanes; beats are shuffled.** Four lanes in the novel's family time, three at the
wild table. Taking a lane advances that lane only. Beats deal in a run-seeded order and do
not lap — a dry beat is the door alone.

**Never a clickable line that is not a card.** The two house stall lines are gone from the
novel. They survive at the wild table for one job only: a model that returns no choices.

**Capitals are how the name detectors get past a hand pass.** `namedUse` skips a number-name
only when it is lowercase *and* not at a sentence head. So `"Three. Nobody does it alone"`,
`"Nine twenty-two"`, `"Five is — there is no five"` and `"Three lines is not a person"` all
read as characters. This has arrived in **four** consecutive waves wearing a different
costume each time: a shouted count, a clock reading, a numbered list, a plural.

**Other detector traps that have actually fired:** `gone` is a death verb (it fired on a
biscuit tin); `arrives` is a summon word (it fired in a room whose own rule is *nobody
arrives*); `beat` is a mechanics word and reads as meta inside prose; `in his pocket` said
to a shard who is talking tells the game she is stowed and audible at once.

**A hole in a deck is legal JavaScript.** `[{...},,{...}]` passes `node --check` and leaves
an undefined card every walker steps over. One got in this session from a splice that put a
comma after a block that already ended in one. **The board counts holes now.**

---

## 7. The loop

1. Sweep, and bring the author a **pick-list** — alternatives, never open questions.
2. He rules. **One act per wave**, with the questions asked.
3. Write, drive, ship as one release with the full ritual.
4. Report in **plain English** — no internal vocabulary, describe what a player experiences,
   and name what was **not** driven.

**Beats get written in order.** The order from here is `a2-housing` (17), `a2-manual` (18),
`a2-choir` (19), **the new capture beat**, `a2-annul` (20 today), `a2-law` (21 today).
**`a2-housing` (17) is done as of v5.24.0** — next is `a2-manual`, which is the night the
document on the table finally gets read.

**What he protects, ruled:** the running jokes and callbacks; nothing that steals a later
night; the quiet character work; and comedy, hard — he has said twice that a scene was too
dry, and both times he was right.

---

## 8. Still open, deferred by the author until the written side settles

- 32 short transition scenes for `TAKE THE NIGHT ON`
- roughly 230 staged choices unwired outside the finished rooms
- 6 amber sweep rows, all AI-side
- the storyteller respecting family time
- the drift nudge pointing at `TAKE THE NIGHT ON`
