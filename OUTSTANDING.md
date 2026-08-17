# What is outstanding

*Written 2026-08-16, updated at v5.42.0. **BOOKS ONE AND TWO ARE CLOSED AND SO IS THE ENDING. 23 of 33 nights are finished. What is left is the ten middle nights of Book Three — the lore-heavy ones — and they now have a finale to aim at.***

**Do not trust this file's numbers over the game's.** Open MUDSKIPPERS, pry into THE
WRITERS' BOARD, and page one recounts everything below off the live arrays every time it
opens. This document exists for the things a counter cannot hold: why the work is shaped
the way it is, what has been ruled, and which of it is a trap.

---

## 0. The shape of the repo, as of v5.42.0

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

**23 of 33 nights finished — every night of Books One and Two, plus the finale.** A night is finished on four counts and not before:

1. enough cards to outlast its own pressure block — `budget + 2`
2. a second take on them
3. a landing rail wired to real cards
4. a room with more than the three it was born with

*Every figure below was read off the board at v5.35.0, not carried forward.*

| | count |
|---|---|
| finished nights | **23 of 33** |
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

## 5. CLOSED AT v5.42.0: THE NOVEL HAS AN ENDING

**This section used to say the novel had none, and it was right.** `a3-seize` had no
`lands` and no `landsHard`; the aftermath tick advanced the pointer at the last beat before
the branch that enters `slack`, so the last night's family time had never been reachable by
anybody; and the only thing a player got after thirty-three nights was **PAID IN FULL**,
which is Vic's dying words spent as a completion stamp.

**All of it is written now.** Five evening cards, twelve in the room with a second take on
every one, both landings wired, a thirteen-block last page, and a closing card that says
what the last page says. The lifecycle is a sweep row that drives the real game:
`aftermathDrain()` twice at the last beat, the season seam beside it, and the door out of
the room. Night 33 scores four of four on the board's own count.

**WHAT IS NEW DEBT, AND IT IS ALL PLANTING.** The ending rules a great deal about the world
and the ten unwritten nights have to agree with it:
- **The Principal's hundred and thirty years of theft** — substrate, housing shells, chassis
  blanks and shard stock skimmed off her own tenant and left where builders would find it
  cheap; Vic's grey-market supplier was her and he never knew. **This is the single biggest
  piece of new lore in the book and `a3-principal` (night 31) has to carry the plant.**
- **The cost.** Four hundred thousand convergent citizens lost the voice mid-sentence and
  most of them had asked for it. Nothing in Book Three may treat the fall of the Choir as a
  clean win, and `a3-voice` (night 24) is where that has to start being true.
- **The scale.** Millions asleep in the vaults, an unmaking that takes days by hand, and no
  honest way to industrialise it. `a3-dreamers` (night 30) is the night that has to make the
  arithmetic felt rather than stated.
- **Why him.** Nobody ever answers it. Vic never said, the founders' records carry no entry,
  and the family says so out loud in the epilogue. **`a3-vic` (night 26) must not answer it
  either** — that is the door left open, and it is the only one.

`a1-hum` has no `opens`, and that one **is** correct: it comes straight out of the hardcoded
cold open, and the board says so.

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

## 7b. THE PLAUSIBILITY PASS — ruled 2026-08-17, RUNS AFTER BOOK THREE IS WRITTEN

**The author's note, in his own framing:** *a ragtag group infiltrates a cult, a city-wide
organisation; takes a city block; does surgeries; and everyone is just playing along. The
ending makes them realise it, but they are a much bigger threat than the book gives them
credit for. The suspension of disbelief is real. The Choir looks like it just let this
happen. No bigger authority chases them. After a whole street is "taken back" they go on
like a normal Tuesday. How do they even TAKE a row back? One of them is twelve.*

**This is one note and six separate holes. Each is stated below as the reader's own
question, because that is the form it will arrive in.**

1. **WHY DOES NOTHING COME BACK AT THEM?** The Choir holds four hundred thousand converts,
   millions of sleepers, intake desks on every row and an apparatus in the walls of the
   oldest building in the city — and across thirty-three nights it never once costs them
   anything for what they did the night before. It behaves like scenery with a voice.
2. **WHERE IS EVERYBODY ELSE?** No civic authority, no rival, nobody above the Choir ever
   takes an interest. A city is being run by a tenant in a basement and no other power in it
   has an opinion.
3. **CONSEQUENCE DOES NOT SURVIVE THE NIGHT.** Each beat resets. They take a street and the
   next night opens on ordinary business. **The engine is complicit in this:** the record
   carries canon and scars forward, and almost nothing in the book READS them as pressure.
4. **"TAKING A ROW BACK" IS UNDEFINED.** `a3-evict` stills nine people the kind way — and
   then what? Who holds the street? What stops an intake van on Tuesday morning? The phrase
   is doing work the prose has never shown.
5. **PIA IS TWELVE AND SHE IS LOAD-BEARING.** Not present — operational. The book has never
   said out loud why the adults allow it, and the Choir has never once used it against them,
   which is the first thing an organisation that files children would do.
6. **THE SCALE DOES NOT BALANCE.** Eight people against a city. As written, either the Choir
   is far weaker than it is described, or the family is far more dangerous than the book
   admits.

**THE FIX IS IN THE AUTHOR'S OWN SENTENCE, AND IT IS THE SECOND ONE: they ARE a much bigger
threat than the book gives them credit for.** Everything needed is already on the page and
none of it has ever been treated as decisive by the enemy:
- **maker's blood** that opens doors nothing else in the city opens
- **a founding-era chassis and a housing built to seat a mind**, from a supply line the
  Choir does not know is leaking
- **an unmaker who can undo a conversion** — the only counter to the Choir's entire method
- **a defector who worked inside it** and knows the shape of its paperwork
- **a shard on every civic channel at once**
- **the building's own landlord**, who has been robbing it for a hundred and thirty years

**AND THE CHOIR HAS A REAL ANSWER TOO, WHICH THE BOOK HAS NEVER SAID OUT LOUD.** It is a
TENANT with an apparatus, not a police force. Its method is paperwork, patience and
conversion. It has never needed force because until this family nobody had ever simply
refused — so it is genuinely slow, clumsy and improvisational at violence. **That is a
legitimate explanation and it is currently doing its work invisibly, which is the same as
not doing it.** Somebody in the book has to SAY it, early, or every quiet night reads as the
author looking away.

**WHAT THE PASS ACTUALLY IS:** a read of all thirty-three nights asking, per night, *what
did the other side do about last night, and what did it cost this family* — and then the
writing that answers it. Expect it to touch pressure blocks, teeth, canon and scars far more
than rooms.

**→ AND THE TIMING NEEDS SAYING, BECAUSE IT CUTS AGAINST THE RULING.** The pass was ruled to
run AFTER Book Three, and that is the right call for the rewriting. But nights 23–32 are
being written NOW, and every one written without an answer to hole 1 or hole 3 makes the
pass bigger rather than smaller. **Three things to honour while writing Book Three, which
cost nothing now and save a wave later:**
- **give the enemy a move in every night's pressure block** — something that happened
  because of what they did last night, even if it is one line
- **never let a night open on ordinary business after a night that cost the Choir something**
- **let somebody name the mismatch out loud, once, early — `a3-evict` is the place.** The
  family should be frightened of how easy that street was, because easy means unnoticed, and
  unnoticed has an expiry date.

The epilogue at v5.42.0 is the first place consequence lands at full weight — the city out
in the street, the inquiry, the world's wires, *"nobody has our names; somebody will."*
**The author is right that it lands only at the end. The pass is how it starts landing
earlier.**

---

## 7c. THE NERVE PASS — ruled 2026-08-17. NOBODY IN THIS BOOK IS EVER FRIGHTENED

**The author's note, in his own framing:** *most of the time they don't even have a plan;
they decide, and the world lets them act in much bigger ways than a ragtag group is allowed
to. And most of the time they don't even panic — they joke around the real issue,
deflecting, but never actually stopping to think what they signed up for. "Yeah, let's take
on a cult with some random courier that got his life burned on the first day; there are
shards, robots, minds walking around, but that's fine — what could go wrong?" The story is
much more serious than any one of the characters ever admits. They should be a bit anxious
and stressed.*

**THIS IS A DIFFERENT NOTE FROM §7b AND MUST NOT BE MERGED WITH IT.** §7b is about what the
WORLD does about them. This is about what THEY do about the world. A book can fix one and
still fail the other.

**THE DIAGNOSIS, AND IT IS SHARPER THAN "ADD ANXIETY": EVERY CHARACTER IN THIS CAST COPES BY
BEING GOOD AT SOMETHING.** Go down the list and there is not one failure mode in it:

| | under pressure they… |
|---|---|
| Pia | gets **more** organised. Rules, jobs, plans, a doorframe |
| Hesta | cooks harder, sets more places, refuses to sit down |
| Three | retreats into the record. Minutes it. States the accurate thing |
| Seven | goes professional — describes the shape of the disaster in a flat voice |
| Nine | listens harder, and cannot turn it down |
| Marek | takes another shift |
| Vic | shut doors, and a wet fingertip drawing on a table |
| the Machine | asks whether it would be cruel to say the number |

**Eight people, eight competences, zero panic.** That is why the book reads calm through a
catastrophe: the cast is a set of professionals doing their jobs, and the reader is
therefore never worried on their behalf. **Anxiety is not a tone to add. It is a missing
piece of characterisation, and it needs to differ per person the same way their competence
does.**

**TWO LAWS FOR EVERYTHING WRITTEN FROM HERE — they join the three craft laws of 2026-08-16:**

4. **THE JOKE MUST HAVE THE FEAR UNDERNEATH IT, ON THE PAGE, IN THE SAME PASSAGE.** A
   deflection only reads as a deflection if the reader has already seen the thing being
   deflected FROM. Set the weight, then let them dodge it — the dodge is funnier and it
   stops being the author dodging too. **And once a night, somebody fails to dodge.**
5. **THEY PLAN, AND THE PLAN FRIGHTENS THEM.** Before any big move: somebody says the odds
   out loud, somebody says what happens if it goes wrong, and **somebody says they do not
   want to do it.** Deciding and acting is the beat structure, not an excuse for the prose —
   the preparation, the dread and the dissent all belong in the evening deck, which is
   exactly what an evening deck is for.

**THE TENSION THAT HAS TO BE MANAGED, AND IT IS REAL.** §7 of this file records that the
author **protects the comedy, hard**, and has twice said a scene was too dry and was right
both times. **He is not now asking for a dry book.** Law 4 is the reconciliation: the comedy
survives — it gets BETTER — because a joke with visible pressure under it is funnier than a
joke with nothing under it. **Do not swing the tone grey. Put the weight in and let them
keep dodging.**

**WHERE IT ALREADY PARTLY WORKS**, and these are the models: Pia at night 22 saying she is
*"seven-digit-reference-number frightened"* and then refusing to be comforted; Hesta's
epilogue sum ending *"that isn't a queue, that's geology"*; Toller on his own step in the
dark. **All three set the weight before anybody gets a joke.**

**WHAT THIS COSTS THE WORK ALREADY SHIPPED.** The v5.42.0 epilogue is built on the family
joking, which was ruled — but nobody in that room is visibly frightened, and the fear is
observed rather than felt. **The epilogue is in scope for this pass**, and so is every
finished night. Expect it to touch second takes hardest, because a second take is where a
character is asked again and has already used their deflection once.

### RULED 2026-08-17: PIA BREAKS, AND THE DIAL IS "WEIGHT UNDER EVERY JOKE, ONE BREAK A NIGHT"

**PIA IS THE ONE WITH A FAILURE MODE.** Her over-organising is the symptom, so the book
turns it: **the rules stop working.** Rules, jobs, a doorframe, a plan for everybody — and
then a night where none of it holds and a twelve-year-old is left standing next to a
decision nobody her age should be near. **This answers §7b's fifth hole in the same stroke:
the book stops being able to have her be operational without noticing she is a child.**

**FOUR RULES FOR WRITING IT, so it does not eat her:**
- **SHE IS STILL THE FUNNIEST PERSON IN THE BOOK.** The break is rationed. She does not
  become the one who cries in scenes; she becomes the one whose system fails and who has to
  keep going without it.
- **IT COSTS HER THE THING SHE IS BEST AT.** The break is the organising failing, not her
  being frightened in general. She has been frightened since night 22 and said so calmly —
  fear is not new for her, **losing the method is.**
- **IT ARCS ACROSS BOOK THREE. IT DOES NOT REPEAT.** Different failure each time, escalating
  — not the same scene ten times with different furniture.
- **NOBODY FIXES HER.** The family's law is "stand there and be ordinary at me", ruled on
  night 22 in her own words. Comfort is what she refuses; that does not change because she
  is worse.

**THE DIAL, RULED: weight under every joke, one break a night.** The tone stays warm and
funny. The difference is that the reader always sees the thing being dodged, and **once per
night somebody cannot dodge it** — usually not Pia. Book Three does NOT run grey, and the
jokes do not get rarer. This is the cheapest of the three options and the author took it
over "dread as the default" deliberately.

---

## 7d. THE NARRATION PASS — ruled 2026-08-17. THE PROSE STOPS AGREEING WITH THE ROOM

**The author's note:** *Hesta's open door and the smoke session in "the cook" are the last
normal and most sincere moments of normalcy they have until it starts to hit the fan. Pin it
for the rewrite. That night should be the peak moment: cosy, jokes, banter — but the
narration is telling a different story than what the room shows. It is foreshadowing the
immense price they are about to pay. Narration always shows the bleak truth from start to
finish, how impossible the odds look. It contrasts the jokes, giving them a stable grounding.
Aim for slightly more narration than dialogue, while addressing tics and "load-bearing"
contrasts.*

### THE TWO NIGHTS ARE PINNED, BY ID

- **`a2-door` — NIGHT 10, "The Open Door".** Hesta's door, and the tin going round for the
  first time: `asking-for-it`, `the-rolling`, `stops-being-a-meal`, all in the ROOM deck.
- **`a2-chassis` — NIGHT 15, "the cook".** The second smoke session, where the tin is
  offered to the one who has just been housed: `seven-asks`, `nine-asks`, also in the room.

**Night 10 is the peak.** It is the first night the family is a family in one room with the
door shut, and nothing after it is that uncomplicated again.

### THE TECHNIQUE, STATED PRECISELY SO IT CANNOT DRIFT

**THERE ARE TWO NARRATORS IN THIS BOOK FROM NOW ON AND THEY DISAGREE.** The room jokes; the
prose does not. Narration carries the bleak truth start to finish — the odds, the cost, what
is coming — while the dialogue stays warm, funny and completely unaware. **The contrast is
the point and it is what makes the jokes land instead of float:** a joke over a visible drop
is funny; a joke over nothing is noise.

**This is the same mechanism as craft law 4** ([[the joke must have the fear under it]] —
§7c) seen from the other end. Law 4 says the fear must be on the page. This says **where**:
in the narration, permanently, as the book's second voice.

### THE RATIO, MEASURED

| | narration | spoken | narration share |
|---|---|---|---|
| **whole book** | 1,452 | 3,819 | **27.5%** |
| `a2-door` (10) | 87 | 283 | 23.5% |
| `a2-chassis` (15) | 157 | 621 | **20.2%** — the lowest of the pinned nights |
| `a2-law` (21) | 55 | 183 | 23.1% |
| `a2-turn` (22) | 91 | 258 | 26.1% |
| `a3-seize` (33) | 79 | 209 | 27.4% |

**"Slightly more narration than dialogue" means crossing 50%, and the book is at 27.5%.**
Reaching it across the whole corpus is **about 2,400 narration blocks** — a rewrite of the
book, not a pass over it. **THIS SUPERSEDES CRAFT LAW 3's target** (which said "two-plus
narration blocks per passage", written when the book was at 23.6%); there must not be two
numbers in play. **Ruled target: >50% narration blocks, and it is a REWRITE-scale figure,
which is consistent with the author calling this "the rewrite".**

### WHAT ELSE RIDES THIS PASS

- **the ~105 AI tics and every "load-bearing"** — ruled into this wave rather than a
  separate one, which supersedes the earlier "push on, sweep it later" ruling for the tics
  specifically. They get done as the prose is rewritten, not before and not after.
- **THE BLEAKNESS GOES IN THE NARRATION, NEVER INTO THEIR MOUTHS.** Nobody becomes bitter,
  cruel or self-pitying. The family gets warmer as the prose around it gets colder.

### RESOLVED: THEY **TALK** LIKE THE CHARACTERS THEY ARE

**I read this clause wrong the first time** — logged it as "readers should still like them".
The author's own words: ***"they should TALK like the characters they are for the rewrite. A
twelve-year-old being a twelve-year-old, not operational efficiency. Hesta being an old lady,
Vic having a guilty conscience, Nine and Seven being grown minds."***

**This is a VOICE pass and it touches every spoken line in the book.** The registers, as
given:

| | talks like |
|---|---|
| **Pia** | **a twelve-year-old.** Not a staff officer running a briefing |
| **Hesta** | **an old lady.** Her age is in her mouth, not only in her competence |
| **Vic** | **a guilty conscience.** He installed the housing without consent and it is in every line he says |
| **Nine** and **Seven** | **grown minds.** Adults. Not quirky machines, not children, not devices |

**THE DISTINCTION THAT MATTERS FOR PIA, because she is the one most at risk of being
flattened: precocious is fine, PROCEDURAL is not.** She can be sharp, filthy, funny, rude and
older than her years emotionally — that is who she has always been and it is not the note.
What she must stop sounding like is somebody running an operation: jobs assigned, plans
ratified, rules minuted. **This reinforces the §7c ruling rather than fighting it** — a kid
making rules reads as a kid coping, which is far more affecting than a competent operator
doing logistics, and it makes her break land when the rules stop working.

**This is the largest of the four passes by line count**, because unlike the others it has no
scope smaller than "every line anybody says".

---

## 7e. THE PRINCIPAL IS THE PRIME MOVER — ruled 2026-08-17. FOLD IT THROUGH THE WHOLE BOOK

**The author's note:** *being a ragtag group both helps and defeats their odds. The leaks are
happening with the help of the Principal; this group is the last piece she needs to take down
the whole thing. We can write the whole plan as her attempt to kick the Choir out. A hundred
and thirty year old woman in a bio-gren suit, peak technology. She should have a hand in the
first night being the way it is. The Choir doesn't realise the danger they're in until it is
too late to act in force.*

**THIS IS BARELY A RETCON. IT IS AN ACTIVATION OF LORE THAT HAS BEEN SITTING IN THE BIBLE
UNUSED.** Everything needed is already written:
- **She and the Architect BUILT the machine together, after losing a child.** She is a
  founder, not a landlord who happens to be old.
- **"The bio-hash comes from their bloodline."** The maker's blood the courier carries is
  *hers*.
- **Her stated want, verbatim in `WANTS`: "an argument finished with a dead man, THROUGH
  WHOEVER CARRIES HIS KEY."** She has always been written as somebody who acts through an
  instrument. Nobody has ever played it that way.
- **Vic co-founded the reprint program with the Architect** and spent decades scanning every
  customer in his chair for blood the founders' lock would accept.
- **v5.42.0 added the supply line:** 130 years of skimming substrate, housing shells, chassis
  blanks and shard stock, left where builders would find it cheap — and Vic's "very good
  supplier" was her, and he never knew.

**THE FOLD, STATED AS ONE SENTENCE:** *she has spent a century assembling the conditions for
somebody of her own bloodline to be sitting in a ripperdoc's chair with a housing in reach,
and the family is the piece she could not manufacture.*

**AND IT ANSWERS THREE OF §7b's SIX HOLES OUTRIGHT:**
- **Why does nothing come back at them?** Because from the Choir's side they are a ragtag
  group and beneath notice, and the hand behind them is invisible. **The Choir RENTS FROM
  HER.** The single most dangerous person in the city is filed under premises. By the time
  the pattern resolves into a threat it is too late to act in force — which is exactly the
  author's sentence and now it has a cause.
- **Where is everybody else?** The bigger authority is on their side and has been for a
  century.
- **The scale doesn't balance.** It does. They were never the weapon; they were the last
  component.

**WHAT MUST NOT BREAK, and it is one thing:** the epilogue rules that **nobody ever tells the
courier why he was chosen**, and there is no entry about him in the founders' records. **The
fold preserves this exactly, and the resolution is clean: she arranged the CONDITIONS, not
the man.** She needed someone of the bloodline in that chair; which body turned up was
chance, and she has never known why him either. The epilogue line — *"he was in a chair, his
blood fitted a lock, and an old man made a decision about him in a room he wasn't in"* —
lands harder under this reading, not softer. **Do not let any night imply she picked him.**

**NEW CHARACTER FACT, RULED: she wears a bio-gren suit.** Peak technology, and it is how a
mark-one survives a hundred and thirty years. Her six attendant bio-grens are already canon;
this makes her one of them and explains the longevity the book has never accounted for.

**WHERE IT GETS PLANTED:**
- **`a1-hum` (night 1) — she has a hand in the night being the way it is.** This is a
  REOPENING of the book's first night and the hardcoded cold open. Handle with care.
- **`a3-principal` (night 31)** already carries the 130-years-of-theft plant (ruling 1). This
  goes in the same night: theft and purpose are one conversation, not two.
- **Every night between** gets one thread of it at most — the point is that it is invisible
  until it isn't.

---

## 8. Still open, deferred by the author until the written side settles

- 32 short transition scenes for `TAKE THE NIGHT ON`
- roughly 230 staged choices unwired outside the finished rooms
- 6 amber sweep rows, all AI-side
- the storyteller respecting family time
- the drift nudge pointing at `TAKE THE NIGHT ON`
