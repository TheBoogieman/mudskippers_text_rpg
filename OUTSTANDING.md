# What is outstanding

*Written 2026-08-16, updated at v5.41.0. **BOOKS ONE AND TWO ARE CLOSED. 22 of 33 nights are finished and Book Three is the whole of what is left — eleven nights, the lore-heavy ones, and an ending the novel does not currently have.***

**Do not trust this file's numbers over the game's.** Open MUDSKIPPERS, pry into THE
WRITERS' BOARD, and page one recounts everything below off the live arrays every time it
opens. This document exists for the things a counter cannot hold: why the work is shaped
the way it is, what has been ruled, and which of it is a trap.

---

## 0. The shape of the repo, as of v5.41.0

**The game is four files, not one.** This changed during the tooling run and everything
below assumes it.

| file | what it is |
|---|---|
| `index.html` | engine, UI, the sweep — **24,800 lines** (was 35,158) |
| `corpus.js` | **every authored word**: BIBLE, SPINE, SCENEBOOK, TEASES — 10,399 lines |
| `veldt-menu.js`, `veldt-skin.css` | the skin |
| `editor.html` | the card editor — not loaded by the game |

**Writing goes in `corpus.js` now.** It is a plain script loaded before the engine: no JSON,
no fetch, no modules, nothing asynchronous, so `file://` still works and the boot path has
no network hop. `sw.js` SHELL lists every file, and **`corpus.js` is the one whose absence
is not cosmetic** — without it the game loads with no beats, no cards and no bible.

**`editor.html` is how you proofread.** Served, not `file://`. Every card in all 33 nights,
both decks, every string in a box — 6,788 fields. **It edits `corpus.js` by character range
and never re-serialises it**, because the authorial comments live between the data and a
read-write-back tool would delete them all. A field it cannot locate unambiguously is
**locked with the reason printed**, not guessed: 5 of 6,788, all genuine duplicates.

**The release ritual grew.** Three files get `node --check`; `index.html` has THREE
`<script>` tags so the inline-body extractor must anchor on the FIRST `</script>`; the node
harness concatenates `corpus.js` + the inline body in that order.

**Six things were fixed in the run** — see HANDOVER for each: the writers' board (dead for
three releases), the title art losing its city to a NaN parallax, passages anchoring to
their first line, a READING PACE setting, the entry transition, the option panel that was
taking half the window, and the corpus split.

---

## 1. Where the book actually stands

**22 of 33 nights finished — every night of Books One and Two.** A night is finished on four counts and not before:

1. enough cards to outlast its own pressure block — `budget + 2`
2. a second take on them
3. a landing rail wired to real cards
4. a room with more than the three it was born with

*Every figure below was read off the board at v5.35.0, not carried forward.*

| | count |
|---|---|
| finished nights | **22 of 33** |
| cards across both decks | 417 |
| second and third takes | 224 |
| **takes with no choice line of their own** | **47 of 224** |
| nights short of cards | 11 |
| nights with no wired row at all | **0** |
| rooms still on their first three cards | 11 |
| authored lines in the drift net | 7,458 |

**The opening rows are all wired as of v5.32.0** — 72 of them, across 36 openings, every
one dealing the card it names, driven every release by two sweep rows. Fourteen openings
used to give one answer to two different questions. **This did not finish a single night**:
a night is finished on the four counts above and an opening is not one of them. What it
changed is that every night now *starts* honestly.

**And the landings are driven every release as of v5.33.0** — every landing that has been
aimed, clicked row by row, each from the state the screen was drawn in. Two rows: *every
card a landing row names is really in that night's room* and *no landing answers two of its
rows with one card*. **A bare row is not judged**, so the thirteen unwritten nights join the
sweep on the day they are written and not before. Finding this took counting the VARIANTS
rather than the beats — `a1-turn` has two `lands` and two `landsHard`, and six of its rows
had never reached the wiring at all.

**Nothing in the book now has somebody speaking in a room they are not in.** A third row,
`nobody speaks in a scene they are not in`, reads 3,287 nameplates through `playSpeaker`
against the cast of the scene they are spoken in — every staged passage and both decks of
all 33 beats. It was added because **Three had a line in the hard landing of night 14 and
the hard landing of night 15**, two beats before she arrives, on the road you only reach by
hesitating. **The drift net cannot do this job**: every predicate reads what is SAID, never
who says it.

**Book One (nights 1–9) is complete.** Nine rooms, nine pressure blocks, every landing
wired, every take carrying its own line. Nothing in Book One is outstanding.

**Books Two and Three are the whole job**: 23 nights, of which 10 are finished and 12 rooms
have never been opened.

**Season 2 stands at TWELVE of thirteen (v5.35.0), and the only night left in it is the
finale.** The writing had jumped from night 10 to night 15 and left four behind it;
`a2-ground` (11), `a2-hand` (12), `a2-mirren` (13) and `a2-seven` (14) closed the hole in
the middle, and `a2-law` (21) closed the ending's first half. **What is left is
`a2-turn` (22)**, and it is the expensive one: seven in the room, both sides of the chassis
fork, four staged landings rather than two, and Pia's name on the Choir's paper.

**`a2-seven` (14) IS DONE (v5.33.0)** — the vow's first trial, and it was the last night in
the season short on its EVENING deck as well as its room. Six evening cards, seven room
cards, a second take on every one, both landings wired. The question `a2-mirren`
deliberately left open is answered in it: *the vow covers somebody who is not ours, and it
costs.*

**IT ALSO TURNED UP TWO FAULTS THAT WERE NOT NIGHT 14'S.** Three had a speaking line in the
hard landings of **nights 14 and 15**, two beats before she arrives, on a road only reached
by hesitating — and **`a1-turn` has FOUR landings, not two**, six of whose rows had never
reached the wiring in nine waves. Both are fixed and both now have a sweep row standing over
them. See HANDOVER for the full account.

**`a2-law` (21) IS DONE (v5.35.0)** — the night the family writes its first law and eats
under it. Two evening cards, five room cards, a second take on every card in the room,
both landings wired. **The card that was ruled for it was already in the book**: Pia's
existing card tells the week-old argument in full, so the slot went to **Vic's side of
Tuesday** — why he walked to the wall alone, which is worse than the room's guess.

**IT CARRIES THE BOOK'S FIRST LANDING FORK.** Whoever is in the courier's skull is Nine on
one road and Seven on the other, and a nameplate cannot be body-neutral — so the subject is
two cards in two voices, and **one landing row names both ids** and lets `wireRail` pick the
one that is on branch. **A row of only forked cards can vanish**, though: `chassisHolder` is
null until night 15 is played, so a wired row needs one unforked id to fall back to. The
landing sweep row added at v5.33.0 caught that within a minute of it being written.

**Nine and Marek were offered for this night and not taken.** Marek got `when-it-first-costs`
anyway — the ruled subject, in the mouth that makes it land, since he did nine years under an
institution whose beautiful laws cost its officers nothing. **Speakers are mine; subjects are
the author's.** Nine still has no card of her own on night 21.

**THE COLD OPENS CAME FIRST, AND THEY ARE DONE (v5.32.0).** All 72 opening rows wired —
not 64, because the PREMIERE that opens Books Two and Three is a second set of openings
nobody had counted, and it was the one that never reached the wiring at all. See HANDOVER
for what it cost and the three readers that had to be hunted.

**ONE WORLD FACT IS OPEN AND MUST NOT BE INVENTED: how Nine heard anything inside the
farm.** A shard is a stone unless somebody is holding it, and she was in nobody's hand
there. Night 14 does not need the answer. **`a3-dreamers` (29) does** — that is the night
the family walks into a room of shelved people. It is the author's to rule.

**`a2-choir` (night 19) shipped at v5.26.0** and it carried the ruling the whole annulment
thread rests on: **a grown mind is grown from a hosted scrape — a real person copied at
intake, filed and cultivated.** It comes from Seven, who filed them for eleven years. The
room does *not* follow the arithmetic to Nine: the bible rules that Nine having a line in
the same book is a night of its own and must not be confirmed before the vaults are open,
so `on-the-lists` walks right up to it and turns round on purpose, and the turning round
is the scene. **If that seal is ever lifted, that card is where it lifts.**

---

## 2. The annulment thread — settled, and almost entirely unwritten

This is the biggest single piece of unpaid work and it is **story**, not engine. The
rulings are in `var BIBLE` under `THE ANNULMENT`, mirrored into `THE-WORLD.md`. None of
them are on the page yet.

### The one night that contradicted the bible — REPAIRED at v5.28.0, FINISHED at v5.29.0

**`a2-annul`, night 20.** Every door, the aim, the walk line and one walk-out were built
around **holding a body still**, and the bible says the family does not perform a forced
removal — that is the one thing that would make them the Choir. All of it is rewritten.

- `aim` and `exits[0]` now ask Five instead of holding it
- `exits[2]` — *End Five properly* — is gone; it contradicted the scene's own rule
- `walkLine` / `walks[0]` are refusals to be in the room for the asking, not refusals to
  hold somebody down
- `goal` says plainly that Five is **asked**, and consents under the belief the Choir
  taught it: that an overlay does not come out of this at all
- **the asking is a card now**, and so is Seven explaining what Five thinks is coming —
  without which the question reads as a formality
- `canon` gained both facts, so they are true of the run whether or not the cards are drawn

**And the deep one is fixed too.** `topics[0]` used to have Three explain the method start
to finish. Under the bible she spent years and *could not find it*: the steps are in Vic's
file, documented by a man who never understood them, and the mind in the housing reads
them out. She says so out loud now, before they start, in front of everybody — *"neither
of us could have done this alone and I am not going to pretend otherwise afterwards."*

**And its room is written too, at v5.29.0** — the second half of the night, the shack step
toward dawn. Three cards became **seven, with eight second takes and both landings wired**,
and it scores 4 of 4. The room is the morning after a yes that turned out to be wrong:

- **Five is still in the world**, and has no form for that. It corrects the tense on its
  own obituary (*"He said it HAD opinions about music. Has."*), does not thank anybody
  because there is no procedure for it, and asks for the canals.
- **Marek answers agreed-or-settled honestly.** Settled, at the time — *"I would have said
  yes to almost anything with a door in it"* — and what he has got to by five in the
  morning is that neither of them is a saint and both of them are still here.
- **Three's second take is the payoff of `a2-three`.** What was different was not her
  hands: it was steps written by a man who never understood them, and a question asked out
  loud. *"Mine came apart on the way… I did not achieve it. I was present for the better
  one."* Her first take answers the one-thing question and does NOT add a fourth line to
  the three she has about the one who did not survive — that hole has to stay a hole.
- **Nine watches somebody get asked**, from the position of the one who mostly gets
  decided about, and the card is road-neutral by construction: nobody answers her by name
  or by agreement, and nothing in it needs her to have hands or a seat on the step.
- **Vic gets the morning after the thing in his skull worked** — eleven pages carried for
  years as a keepsake — and he will not take credit for it.
- **Hesta has the pan on at five in the morning**, which this room needed badly.

### Keep these — a rewrite would destroy them

- Three: *"the second voice not being destroyed but **escorted** out — rage tears tissue;
  procedure spares it."* Mechanical, not wishful. This is what the author asked for.
- Five: *"It will not beg. For the record: that is not courage. Begging is simply not in
  the loadout."*
- The room's rule: *"nobody is separated — they share the body now, by consent."*
- Three listing *"annulment — assessment and execution"* as a skill is **not** a
  contradiction. She can do the Choir's version, the one that kills.

### The absences, which are longer than the contradictions

- ~~**The book never says why a grown mind is a person.**~~ **DONE at v5.26.0.** It is
  Seven's card on night 19, and `a2-choir`'s `canon[6]` besides, so it is true of the run
  whether or not the card was drawn. The sentence the whole story rests on is on the page.
- ~~**Five is never asked.**~~ **DONE at v5.28.0.** The question is a card now, put out
  loud with the tools down and Three stepped back from the chair, and Five answers it
  believing it is agreeing to stop. Marek's *"it was offered instead of an execution, and
  I said yes"* now has the overlay's own yes standing beside it.
- **The capture has no beat.** Night 19 is a knowledge night; night 20 opens with a
  commander already in a chair. A new beat belongs between them.
- **Five never becomes the way into the vault.** After night 20 he appears twice, in a
  graze and a kitchen line. The vault descent has Marek and not him.
- **The fate-one rhyme is STILL never said aloud.** Night 20's room walks close to it —
  Nine's card is entirely about the asking being the thing that made it a question — but
  nobody in the book has yet put the two side by side and named the resemblance. The bible
  says a character does it, probably Three, possibly Five. It is still nobody.
- **Vic's file still never SPEAKS**, but it is at least load-bearing now: from v5.28.0
  night 20 turns on its steps being read out, and Three says out loud that without them
  she had eleven years of the wrong hands. It is a document in the scene rather than a
  voice in it. Whether it ever gets a nameplate of its own — all caps, out loud, through
  the wrist — is an open question for the author.

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

## 5. VERIFIED AT v5.41.0, AND IT IS WORSE THAN "UNVERIFIED": THE NOVEL HAS NO ENDING

**`a3-seize`, night 33, has no authored closing.** No `lands`, no `landsHard`. That is
deliberate for the wild table: its goal says *"Epilogue in chronicle voice, then set
the_end true"*, written per run against that run's own record. **The novel has no
storyteller, and this was driven rather than reasoned about.**

**Every word a player gets after thirty-three nights:** the head **PAID IN FULL**, the line
*"Season complete. The chronicle survives the courier."*, and two buttons.

**And the last night's family time never opens.** The aftermath tick sees
`beatIdx === SPINE.length - 1`, advances the pointer and returns before the branch that
enters `slack` — so `a3-seize`'s three room cards have never been reachable by anybody.

**Three things make this the most valuable hour left in the project:**
1. **The headline is Vic's dying words**, spent as a generic completion stamp four nights
   after the scene that earns them.
2. **`a3-seize`'s canon already promises ten specific things** and dramatises none of them:
   Mirren's name called first at the narrow door · nobody filing Pia under anything ever
   again · the canals reopening under two pilots who take turns · every keeping left
   sleeping now having Three to answer to · the Principal staying for the letting go.
3. **It is the last thing a player ever sees.**

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

**From `a2-housing` onward, one of Nine and Seven is always in the courier's skull.** So any
line that ANSWERS either of them has to survive both roads — on one of them it is the room
replying to a voice only the courier can hear. The earshot law catches the tell-tale, which
is an agreement (“Yes.”, “Exactly.”) landing straight after the housed one speaks.

**A beat's anchor must be named by more than one card.** Beats deal in a run-seeded order
now, so a name carried by a single card is luck. `a2-mirren` failed this the moment the
shuffle landed.

**`budget + 2` is exactly the ceiling.** A beat shows two unspent cards a turn and closes
at `budget + 1`, so at `budget + 3` cards go dark outright. Measured, not reasoned.

**One choice, one card.** A landing row names exactly one card. The old three-id rows never
once reached their second id — the landing always fires on a fresh deck.

**Three rows may not name one card** *(v5.31.0)*. A row whose cards are all spent is
dropped, so three rows about the same subject collapse into one question the moment it is
answered. `a2-mirren`'s soft landing offered *"Answer it"*, *"Ask who else still has that
number"* and *"Let it ring"* — three rows, one wire, and the player would have got one
click out of three written lines.

**A landing rail is evidence of a hole** *(v5.31.0)*. Both of `a2-mirren`'s landings ended
on a wire ringing and both rails offered to answer it, and there was no card in the book
that could. **Read a night's own landings before deciding what its room is short of** — the
author already wrote down what the night wants, on the page, in the rows.

**The room binds; the scorer is not the game** *(v5.31.0)*. In a room, `sceneRails` writes
`railDeal` for every line before the row is shown, so a click never touches the keyword
scorer. Measured across all 19 finished rooms, **164 of 337 rail lines (49%) score onto the
wrong card** if the scorer alone decides — which is unreachable in a novel run and is
exactly why the wiring exists. **A harness that calls `pickTopic` without `sceneRails`
first is measuring the scorer, not the game**, and will report misbindings that no player
can ever reach. It cost half an hour of chasing a defect that was in the harness.

**COUNT THE VARIANTS, NOT THE BEATS** *(v5.33.0)*. A beat may carry more than one `opens`,
`lands` or `landsHard` scene, and `playAuthored` picks one at run time. **This has now hidden
whole scenes from a wiring wave twice running**: `SEASON_OPENS` in v5.32.0 (the premiere that
opens Books Two and Three), and `a1-turn` in v5.33.0, which has two `lands` AND two
`landsHard` and had six unwired rows nine waves after shipping as finished. A per-beat count
— *three rows per landing, two landings a night* — is the shape of the error both times.

**THE DRIFT NET READS WHAT IS SAID, NEVER WHO SAYS IT** *(v5.33.0)*. Every predicate in
`VERDICT_FIXTURE` takes the TEXT of a line. A wrong nameplate is invisible to it, and stays
invisible however many predicates get added. **Three had a speaking line in the hard landings
of nights 14 and 15**, two beats before she arrives, on beats whose cast lists do not contain
her — one of whose `never` says *"Three is not here"* in those words. `nobody speaks in a
scene they are not in` is a sweep row now, reading nameplates through `playSpeaker` against
the scene's own `here`.

**A HARD LANDING IS THE ROAD NOBODY AUDITS** *(v5.33.0)*. Both of the above lived in
`landsHard`, which a player only reaches by hesitating until the choice nearly closes. When
a night is checked by hand it gets checked on the road it is written for. **Whatever the
audit is, run it on the hesitation road too.**

**FIX THE SENTENCE, NOT THE RULE** *(v5.33.0)*. A new narration line ran *"your hand has
gone stiff"* and `death` certified a killing on it — `DEATH_VERBS` carries a bare "gone" and
`GONE_SOFT` forgives gone quiet/still/cold and not gone stiff. Widening a detector to admit
one sentence is the move the corpus has already overruled three times. The sentence changed.

**A NUMBER-NAME AT A SENTENCE HEAD IS A NAME, AND THAT IS FIVE COSTUMES NOW** *(v5.35.0)*.
"Seven. Eight if you count the one on the bread board" — Hesta doing a headcount at a full
table — certified as somebody answering a voice only the courier can hear. The rule above
about capitals has now been rediscovered by a shouted count, a clock reading, a numbered
list, a plural, and a headcount. **Do not start a sentence with a cast number.**

**THE ROOM CANNOT ANSWER WHAT IT CANNOT HEAR** *(v5.35.0)*. A card built on the housed one
addressing the table has to route through the courier: narration saying he said it aloud,
and then a reply that opens on neither an agreement word nor the resident's name — those two
are exactly what `earshot` watches for. Three saying *"...She is right"* after the housed one
speaks is the fault, and it is the same one `a2-choir` had.

**A WIRED ROW OF ONLY FORKED CARDS CAN VANISH** *(v5.35.0)*. `cardOnBranch` compares a card's
fork to `chassisHolder`, which is **null** until a2-chassis is played — so on an unsettled run
every forked id is off branch, `wireRail` drops the row, and the landing goes up with two
choices where three were written, silently. **Every wired row needs one unforked id.**

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

**GROWING A BEAT'S DECK DILUTES ITS ANCHORS.** An anchor is a name that has to reach the
screen before the night can close. `a2-ground` names Mirren on two of its four cards, which
was safe while all four were dealt — at six cards and a budget of four, a shuffle can deal
the other four and never say her name on the night she is the anchor of. **The sweep row
went red from adding two good cards.** Re-check anchors every time a beat gains a card, not
only when one is written.

**A CHARACTER'S FAMILY IS THE AUTHOR'S TO INVENT, AND THE DETECTOR ENFORCES IT.** A take
written for Pia at v5.30.0 opened *"when my mum went"* — and `breach` caught it on the kin
rule. The book has never given Pia a family.

**RULED 2026-08-16: PIA'S BACKGROUND STAYS BLANK.** Not "she has nobody" — blank, unwritten,
and not to be assumed either way. Nothing may imply where she came from, that she has
people, or that she does not, until the author rules otherwise. **The bill for this falls
due at `a2-turn` (22)**, the season finale, where her name goes on the Choir's paper as a
salvage listing: that night will want to know whether anybody outside this family would
come looking for her. Raise it before writing 22, not during.

**A LANDING RAIL IS THREE ROWS AND NO MORE.** `playAuthored` ends on `V.rail.slice(0, 3)`,
so a fourth row is written, counted by the board as a cut row, and never once seen by a
player. Spend all three on cards, or spend one of them on a knock — not both. Found at
v5.29.0 by the board, on a knock row that had just been drafted for night 20's landing.

**A LATER NIGHT'S TITLE MAY NOT BE SAID OUT LOUD IN THE PROSE.** `boardleak` scans every
line against the titles of every beat still to come. Night 20's kitchen card said *"bread
after, in the same pan"* — and `the same pan` is the title of night 22. Three red rows for
a doctrine everybody in that kitchen actually holds. The rule survives; the wording that
happened to be a night's name does not.

**A hole in a deck is legal JavaScript.** `[{...},,{...}]` passes `node --check` and leaves
an undefined card every walker steps over. One got in this session from a splice that put a
comma after a block that already ended in one. **The board counts holes now.**

**A SCRIPTED SPLICE MUST ASSERT ITS ANCHOR IS UNIQUE, AND THE REFUSAL IS THE FINDING.**
v5.32.0's wiring script required exactly one source match per row and refused to write when
`a3-evict`'s opening row returned three. That is how `SEASON_OPENS` — a whole second set of
openings, and the only ones that had never reached the wiring at all — got found. A script
that had simply replaced the first match would have shipped and been believed. **Count your
anchors; a surprising count is a reader you have not met.**

**MEASURE A ROW FROM THE STATE THE SCREEN WAS DRAWN IN.** The two lines of an opening are
offered together and the player clicks ONE. A harness that clicks both in sequence spends
row one's card, so row two scores onto something else and a genuine collision reads as two
different answers. Measured that way the book had **zero** duplicate openings; measured
correctly it had **fourteen**. Wire once, snapshot, then click each line from the snapshot.

**AN OPENING WIRES AGAINST THE NIGHT; A LANDING WIRES AGAINST THE ROOM.** `playOpening`
passes `SCENEBOOK[id]`, `playLanding` passes `SCENEBOOK[id].room`, and they have always
been different decks. `wbReach` — the join that reports a row naming a card that is not
there — resolved both against the room, so the day the openings were wired it would have
called all 72 broken. Repaired at v5.32.0. **A form has readers: hunt all of them.**

---

## 7. The loop

1. Sweep, and bring the author a **pick-list** — alternatives, never open questions.
2. He rules. **One act per wave**, with the questions asked.
3. Write, drive, ship as one release with the full ritual.
4. Report in **plain English** — no internal vocabulary, describe what a player experiences,
   and name what was **not** driven.

**Beats get written in order.** The order from here is `a2-housing` (17), `a2-manual` (18),
`a2-choir` (19), **the new capture beat**, `a2-annul` (20 today), `a2-law` (21 today).
**Ruled 2026-08-16: go in sequence from the earliest unfinished night, not forward from the
last one written.** `a2-mirren` (13) and `a2-seven` (14) are done, so the order from here is
**`a2-law` (21) then `a2-turn` (22)**. Nights 16 through 20 are all done. **The capture beat
is still
blocked on an engine call** — inserting into `SPINE` moves `beatIdx`, and live save files
hold that as a position.

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
