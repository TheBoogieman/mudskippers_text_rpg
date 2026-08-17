# Handover — the family-time writing programme

*Live state. Update after every finished room. A fresh session should be able to pick the
loop up from this file alone.*

**Last updated: v5.13.0.**

**Do not count the writing by hand any more.** Open the game, pry into THE WRITERS' BOARD,
and the first page is THE BOOK: every night, its cards against `budget + 2`, its takes, its
landing rows, its room, and one of `written` / `part` / `outline`. It is recounted off
`SPINE` and `SCENEBOOK` every time the page opens and it keeps no copy of anything, so it
cannot go stale the way this file can. **It is the answer to "what do we write next" and it
is never a guess.** As of v5.13.0: **4 of 33 nights are finished**; 28 run out of cards
before the night ends, 21 repeat themselves if asked twice, 21 land on nothing to click,
20 rooms are still on their first three cards.

Book One is finished and `a2-chassis` is FINISHED — 25 cards, an id on every one, a second
take on every card live on either road, seven cards carrying a THIRD take, and both landings
wired. It is the deepest room in the game by a distance.

## BOOK ONE IS CLOSED (v5.23.0)

Nine nights, all four counts, nothing outstanding in any of them: pressure blocks at
`budget + 2`, a room of 7–11 cards, a take on every card, every take carrying its own
choice line, and both landings wired. **10 of 33 nights are finished.**

### → READ `OUTSTANDING.md` FOR EVERYTHING THAT IS LEFT

It carries the annulment thread's unwritten half, the chassis-road policy and its known
damage, the 49 take lines still mute, the unverified finale, and every standing law that
was learned by something going wrong. This file stays the loop and the working rules;
that file is the map of the debt.

**Read this before picking the next wave.** The board points at `a1-pack` (night 4), not at
`a2-housing`, and it is right to. **Book One's ROOMS are all finished, but every one of its
nights is short of beat cards for its own pressure block.** Those are two different
programmes and only the room one has been running. The author has not ruled which goes
next — ask, do not assume.

---

## STOP — read THE-WORLD.md first, every session, before authoring anything

**`var BIBLE` in `index.html` (line ~1739) is the single source of world truth** — the
founding, the cast's truth, the annulment, the rules. `THE-WORLD.md` is a GENERATED verbatim
mirror of it plus every `canon:` line; regenerate with `node tools-gen-world.js` after any
edit to either, and never hand-edit the mirror.

I claimed on 2026-08-16 that this repo had no story bible. **That was wrong** — `var BIBLE`
was always there. I had extracted only the `canon:` arrays and treated that as the whole
world, which is the same one-layer mistake three test harnesses made the same week. The
author had already written that Vic co-founded the reprint program as the Architect's best
friend, and that Vic "understands the mechanics completely and the reasons not at all."
**Read `var BIBLE` before asserting anything is missing.** `THE-ANNULMENT-THREAD.md` records
why that wave happened; it holds no rulings, because a second copy drifted within a day.

**The in-world Architect is a founder, not the author.** Code comments used to call the
author "the Architect" too, which buried the character under dozens of unrelated hits;
comments now say "the author". Do not reintroduce the collision.

*(And note the collision this file used to make itself: **the author is not "the Architect."**
The Architect is a dead founder in the fiction. Say "the author".)*

## Also read THE-ANNULMENT-THREAD.md before touching Three, Five, Marek or Book Two's order

Ruled 2026-08-16. The author halted the `a2-law` wave because the annulment thread does
not hold up: the same operation had two opposite outcomes, the family forcibly annulled a
conscious being in a book about consent, the capture was never staged, and "taking turns"
rhymes with fate one without the book noticing. **All of it is now settled and none of it is
authored.** The brief is in `THE-ANNULMENT-THREAD.md`.

### The content sweep, v5.12.0 — driven over every authored string against the new bible

**Every contradiction is in one night, `a2-annul`.** Nothing else in 33 nights fights the
rulings. What must change there: `aim` and `exits[0]` say *hold Five still*; `walkLine` says
*leave Five to Three*; `walks[0]` is *refuse to hold him*; `exits[2]` says *end Five properly*
under the scene's own rule that Five is not destroyed. `goal` and the scene's `where` both
assert a capture that no beat stages. **And `topics[0]` has Three explaining the method she
spent years failing to find** — under the bible it comes out of Vic's file and neither she
nor the file is enough alone.

**Keep these — they already say the right thing.** Three: *"the second voice not being
destroyed but ESCORTED out — rage tears tissue; procedure spares it."* Five: *"it will not
beg... begging is simply not in the loadout."* The room's `never`: *"nobody is separated —
they share the body now, by consent."* And Three listing *"annulment — assessment and
execution"* as a skill is **not** a contradiction: she can do the Choir's version, the one
that kills.

**The absences are the longer list.** The book never once says a grown mind is grown from a
copy of a real person — "grown" and "scrape" are all over it and never touch. Five is never
asked. The fate-one rhyme is never said aloud. Five never becomes the way into the vault.
And **Vic's file, installed on night 17, never appears again in the sixteen nights after it
and is not a speaker anywhere in the book.**

**And beats get written IN ORDER from here.** `a2-law` was proposed next; it is night 21 and
the finished work stops at night 15 (`a2-chassis`). This file used to say "next: a2-law" and
that line was five beats stale. The order is `a2-three` (night 16) **done**, `a2-housing`
(17) **done**, `a2-manual` (18) **done**, `a2-choir` (19) **done at v5.26.0**, **the new
capture beat**, `a2-annul` (20) **done at v5.29.0**. **THEN THE ORDER CHANGED, ruled
2026-08-16: sequence runs from the earliest UNFINISHED night, not forward from the last one
written.** `a2-ground` (11) and `a2-hand` (12) **done at v5.30.0**; `a2-mirren`
(13) **done at v5.31.0**; the 33 cold opens **done at v5.32.0**; `a2-seven` (14) **done at
v5.33.0**; `a2-law` (21) **done at v5.35.0**; next is **`a2-turn` (22), the season
finale and the last night of Season 2**. Before writing it: **Pia's background is ruled
blank and that night puts her name on the Choir's paper as a salvage listing** — take it
to the author first. Night 21's `the-knock-at-the-door` is its seed and deliberately
withholds the name.
*Night numbers are the board's 1-based ones; `SPINE` indices are one lower.*

### THE TOOLING RUN IS FINISHED (v5.36.0 → v5.40.0) — AUTHORING RESUMES AT NIGHT 22

**Everything ruled on 2026-08-16 is shipped.** Read the per-release sections below for the
detail; this is the state to start from.

**THE GAME IS FOUR FILES NOW, NOT ONE.**

| file | what it is |
|---|---|
| `index.html` | engine, UI and the sweep — **24,800 lines**, down from 35,158 |
| `corpus.js` | **every authored word** — BIBLE, SPINE, SCENEBOOK, TEASES. 10,399 lines |
| `veldt-menu.js` + `veldt-skin.css` | the skin: title art, menu, feed styling |
| `editor.html` | the card editor. Not loaded by the game; open it yourself |

All classic scripts in document order — no JSON, no fetch, no modules, nothing async.
**`sw.js` SHELL lists all of them**, and `corpus.js` is the one whose absence is not
cosmetic. **Three files get `node --check` before a push**, and `index.html` now has THREE
`<script>` tags, so the inline-body extractor must anchor on the FIRST `</script>`.

**WHAT WAS FIXED, IN ONE LINE EACH:**
1. **The writers' board had been dead for three releases** — `wbReach` returned only the
   room deck and `wbDrawBeat` threw on every opening row, inside a click handler that
   swallowed it. A sweep row draws all 33 night pages every release now.
2. **The title art lost its city after a run** — a zero-width hidden canvas divided into the
   parallax, made it NaN, and NaN is absorbing. Two guards in the skin.
3. **Passages are read from their first line**, and READING PACE (slow/normal/brisk,
   defaulting to slow) is in Settings.
4. **The entry transition actually plays**, held 1300ms, and the menu no longer pops on
   return. **The option panel is capped at 42vh** — it was taking 434px of an 800px window.
5. **The corpus split**, byte-for-byte.
6. **The card editor**, editing text in place.

**THE BOARD MOVE WAS DROPPED ON MEASUREMENT, and the numbers are the lesson.** The pitch
said the board and rehearsal room were ~4,000 lines; measured, they are **939**. The span I
had measured was mostly the FX atmosphere system, the shard widget, the boot path and the
sweep's corpus walkers. The board also reads live run state (`persistAll`, `currentChoices`)
and the rehearsal room drives real runs. **Estimate by measuring the thing, not the gap
between two landmarks.**

### SEASON TWO IS CLOSED (v5.41.0) — 22 of 33, AND BOOK THREE IS THE WHOLE OF WHAT IS LEFT

`a2-turn` is finished and the board says so itself: **7 evening cards (budget 5 + 2), 11 in
the room, a second take AND its own choice line on every one of them, 14 wired rows.**
Nothing outstanding in it. **Every night of Books One and Two is written.**

**THE CRAFT RULING OF 2026-08-16 LANDS WITH IT, and it is not a preference — it came from
readers.** Three laws, all of which apply to everything written from here:

1. **SHORT BLOCKS.** A speech is several blocks, not one paragraph. Night 22's longest
   spoken line is **194 characters against the book's 397, and its median is 85 against the
   book's 113** — measured, not asserted. **The mechanism for this already existed and I
   nearly rebuilt it:** `groupRuns` in `veldt-menu.js` tags consecutive blocks from one
   mouth `solo/first/mid/last` and `veldt-skin.css` collapses them into ONE speech box with
   the name said once and a `· · ·` between lines. **838 of the book's 4,701 blocks already
   qualify.** It keys on `.tag` being the block's first element child — **so never stop
   emitting the nameplate to save a repeat; that drops the block out of speech styling
   altogether.** Look in the SKIN before adding a presentation form to `index.html`.
2. **NO AI TICS.** The banned move is the contrast — *"it is not a thing, it is another
   thing"* — plus *"which is the whole…"*, *"and that is the point"*, and **"load-bearing"**.
   Measured across the corpus at the time of the ruling: **42, 23, 24 and 16 instances.**
   Those ~105 are a debt in the FINISHED nights and were deliberately not touched this wave.
3. **MORE NARRATION, and it goes BETWEEN the lines.** The book was at **23.6% narration
   blocks**. Every passage on night 22 carries at least two, most carry three or four.
   Poetic, cyberpunk, sharp, witty — trams considering derailment, lamps thinking better of
   leaving, water finding a lower opinion.

**TEN CARDS A NIGHT IS THE STANDARD FROM BOOK THREE ON, and the arithmetic matters.** The
EVENING deck cannot reach ten: `railFor` offers exactly **two** unspent cards a turn under
the door, and the world takes the night one turn past budget, so a beat can only ever show
**budget + 1** cards. The FAMILY ROOM has no such ceiling — it laps, the way out is up from
turn one, and every card is reachable. **Ruled: rooms to 10+ everywhere in Book Three, plus
a raised turn clock on the four heaviest lore nights only** (`a3-founding`, `a3-principal`,
`a3-granny`, `a3-dreamers`), so their evenings carry 8 rather than 5.

**TWO STORY FACTS WERE RULED ON 2026-08-16 AND BOTH ARE NOW ON THE PAGE:**
- **PIA IS ADMINISTRATIVELY ALONE.** No guardian, no record, nobody who would come looking
  — *and that is precisely why her name could be written down.* Her own card says it: *"No
  card. No entry. Nobody wrote me down when I turned up and nobody has since. I'm not on one
  single list anywhere in this city. Except theirs."* Her second take turns it into a plan:
  when it is over she walks into an intake desk in daylight and stands there until somebody
  files a correction in front of her. **That is the seed of `a3-seize`'s canon line "Nobody
  files Pia under anything, ever again."**
- **THE SEASON'S BILL IS THE CHANDLER.** Not a family member — all seven are alive at the
  top of Book Three, so it could never have been. **Emrys Toller, the chandler on the
  corner**, the coward with good hearing who owes Hesta and watches the family through his
  own candle stock. He probably did talk. They took him regardless, because he was standing
  nearest and he was on their list. **HE IS A PLANT, NOT A CLOSED SCENE: night 22 is day
  23–24 and `a3-evict` is day 31, so he can be one of the nine standing very still on
  Cannery Row when the family takes that street back and stills them the kind way.** Hesta
  is keeping his shop, and has put his name on the shelf under her floor **in pencil,
  because pencil comes off** — which is also a plant for `a3-dreamers`, whose canon already
  says her kept names get checked against the shelves.

**Other authoring debts, unchanged:** the Mirren Doctrine goes on night 19, which is a
REOPENING of a finished night · how Nine heard anything inside the farm is an OPEN WORLD
FACT and must not be invented (night 29 needs it) · the ~105 AI tics in the finished nights
· eighteen nights unaudited for the earshot fault.

### THE NOVEL HAS AN ENDING (v5.42.0) — 23 of 33, AND NIGHT 33 IS WRITTEN

**This was the biggest hole in the game and it is closed.** Up to v5.41.0 a player who
finished all thirty-three nights got exactly this and nothing else:

> **PAID IN FULL** — Season complete. The chronicle survives the courier.

**Three things were wrong with that and all three are fixed.**

1. **THE LAST NIGHT COULD NOT REACH ITS OWN ROOM.** The aftermath tick special-cased the
   finale: pointer advanced, `beatDone()` went true, closing card dealt over the top of a
   family who had just won and never sat down. So the ONE night that had to have family
   time in it was the only night in the book with none. The tick is now `aftermathDrain()`,
   a function of its own, and the finale falls through to `slack` like every other beat.
   **The way OUT is what differs:** `lastRoom()` is true there, the door reads **CLOSE THE
   BOOK** instead of TAKE THE NIGHT ON, it confirms first, and `closeTheBook()` plays the
   last page and ends the run **by the player's hand**.
2. **`endCard("season")` WAS SPENDING VIC'S DYING WORDS.** The head is now **AND NOBODY UP
   THERE KNOWS**, and the first button says START AGAIN, because there is no next season.
3. **THE CLOSING PASSAGE IS A NEW FIELD, `closes:`, AND EVERY READER WAS HUNTED.** Ten of
   them: `placeNamesOk`, `beatDayPin`, `wbStage`, `wbStat`, the beat page, `stScenes`,
   `stCorpus`, the death-predication row, the anchor row and the cast-of-the-scene row.
   `editor.html` needed nothing — it walks cards, never passages. It is a POOL like `lands`
   and `opens`, so it forks with the season's choice and every existing walker understands
   the shape.

**`a3-seize` scores four of four on the board's own count:** 5 evening cards, **12 in the
room**, a second take on every one, both landings wired (6 rows), and a 13-block last page.
**Driven on both fork roads:** 24 room turns, 12 distinct cards, every one served twice with
distinct text, nothing empty on the Nine road, nothing repeated.

**THE ENDING WAS RULED ON 2026-08-17 AND IT IS NOT A HAPPY ONE.** Write every Book Three
night toward this, because the epilogue is written against it:

- **They took down something holding millions of minds and there is no fast way out.** An
  unmaking done right takes days, by hand, one person at a time. Hesta's own sum: *"At one a
  day, by hand, that isn't a queue. That's geology."*
- **Four hundred thousand convergent citizens lost the voice mid-sentence, and most of them
  had signed up for it.** They queued. It made them calm and useful and a great many of them
  liked it. **Seven says this out loud in the evening, BEFORE the word goes out**, because
  he is the only person in the room who chose the calm and left it.
- **THE PRINCIPAL HAS BEEN STEALING FROM HER OWN TENANT FOR A HUNDRED AND THIRTY YEARS** —
  substrate, housing shells, chassis blanks, shard stock — and putting it where builders
  would find it cheap. **Vic's "very good supplier" on the grey market was her, and he never
  knew.** Every quiet body in this city that is not the Choir's came off a shelf she
  emptied. Eleven hundred people got out that way. At her rate, from here, the last sleeper
  comes up in about twenty thousand years. *"Congratulations. It is the correct disaster."*
  **THIS IS NEW LORE AND IT NEEDS PLANTING at `a3-principal` (night 31), which is unwritten.**
- **The city came outside and stayed outside. It is global news by breakfast, with no cause
  attached.** The family is about to be the most famous family alive and not one word of it
  will be about the plates. **Nobody has their names yet. Somebody will.**
- **NOBODY EVER TELLS THE COURIER WHY HE WAS CHOSEN.** Vic never said, there is no entry
  about him in the founders' records, and the family says so to his face. *"He was in a
  chair, his blood fitted a lock, and an old man made a decision about him in a room he
  wasn't in."* **That is the door left open for a second season and it must stay shut.**
- **Emrys Toller is on his own step in the dark**, working out the end of a sentence
  something else started for him ten days ago, and Hesta does not know who will be in there
  when he stands up.

**The last page is the book's own voice, wide and cold, after thirty-three nights of warm
rooms.** It ends: *"It only knows that it is quiet, and that nobody is speaking for it any
more."*

### → YOU ARE HERE: v5.64.0. THE NOVEL IS WRITTEN. THE POLISHING PASS HAS STARTED.

**State: 33 of 33 nights authored. Sweep 74 PROVED of 99, 0 FAILED. Tree clean, pushed.**

**THE PLAN IS `OUTSTANDING.md` §8 — read it before anything else.** It supersedes nothing in
§7a–§7j; it is the ORDER those notes get worked in, with the debt measured.

**DONE:**
- **Phase 0, the guards (v5.55.0).** `REVEAL_LEDGER` in `corpus.js` + four rows; banter floor;
  contraction band; granny guard. **The ledger is NOT called `REVEALS` — that name was already
  taken by an object with six readers and taking it broke all of them.**
- **Phase 1 wave 1: night 1 `a1-hum` (v5.56.0).** All 16 cards have a second take, all 26
  choice lines name their addressee, Pia 3%→48%, narration 38%.
- **Phase 1 wave 2: night 2 `a1-chase` (v5.57.0).** All 14 cards have a second take, all 30
  choice lines name their addressee, Pia 7%→50%, Nine 2%→7%, narration 36.7%.

- **v5.58.0, the ladder shaft.** Its stage-nought row was a real exit the engine could not
  grant, so "climb back up like a person" printed "you put weight on the fourth rung". One
  opt-in flag, `out:true`, on the one row in the book that needs it.
- **v5.59.0, EVERY DECK IS LANES.** 86 evening second takes - 9,711 words across 17 nights -
  were written and unreachable, because only the room let a card be asked twice. Ask an
  evening card twice and it answers twice now. See `OUTSTANDING.md` §9 for the chain, the
  five readers the change had, and the peek that burned a layer.

### TWO STANDING RULINGS FROM 2026-08-17 - BOTH COST A WAVE ALREADY, BOTH PAID

1. **EVERY WAVE GETS PLAYED OUT IN THE DRAWER**, not merely driven through the Node harness.
   `startRehearsal(beatId, label)` in the browser at `http://localhost:8124`. **It is free and
   it is safe: the rehearsal room is pinned to the novel, so it never reaches the wire and
   costs no key, and every save routes to `mud-reh-runs`.** Check `localStorage["mud-runs"]`
   is byte-identical before and after anyway. **NEVER click NEW GAME** - that is the live
   save. Dying in the drawer is free; just call `startRehearsal` again.
   *It found the ladder shaft on the turn it was made, and the 9,711 dark words on the next.*
2. **NOTHING COUNTS UNTIL IT IS REACHED IN PLAY.** An audit that counts
   `(t.takes||[]).length` counts what is WRITTEN, never what is REACHED - nine waves of them
   called nights finished that were not. A night is done when the running game has served
   every scene in it.

- **Phase 1 wave 3: night 3 `a1-vic` (v5.60.0).** All 14 cards have a second take, all 29
  choice lines name their addressee, Vic 61%→53%, narration 30.5%→35.2%, **and §7j is done** —
  the door opens on screen and nothing had to move. §7j is closed in `OUTSTANDING.md`.

- **Phase 1 wave 4: night 4 `a1-pack` (v5.61.0).** All 13 cards have a second take, all 26
  choice lines name their addressee AND reach their own card, cast 8%→42%, narration
  29.1%→35.2%, **and the longest unbroken run of dialogue fell from NINE blocks to three.**

- **Phase 1 wave 5: Season 1 Act 2, HALF (v5.62.0).** Nights 5, 6 and 7 (`a1-fare`,
  `a1-late`, `a1-exit`) have their contraction pass, their dial-back, and all 59 choice lines
  named and dealing correctly.

**THE AUTHOR RULED ON 2026-08-17 THAT WAVES GO ACT BY ACT, NOT NIGHT BY NIGHT**, and that a
wave should only stop for a ruling that genuinely cannot wait.

### → SEASON 1 ACT 2 IS FINISHED (v5.63.0)

All three nights now have a second take on every evening card - 20 written this wave - and
all 100 choice lines across the act name their addressee AND deal to their own card when
typed. Bands: Clerk 59%, Pia 62/51/61%, Vic 63%, Mirren 38% (the author's own alternation,
left alone). Longest unbroken dialogue run is 3, 4 and 5.

**THE NARRATION "FLOOR" OF 35 WAS A NUMBER I INVENTED.** Measured across all 33 nights the
book's median is **30.6%**, and the four nights sitting above 35 are the four I had already
polished — the target was my own homework read back to me. The three nights land at 30.8,
34.7 and 33.1, at or above the book's middle. **Run `node scratchpad/floors.js` before ever
quoting a narration floor again.** The real narration debt is Season 2: `a2-manual` 19.5%,
`a2-chassis` 20.2%, `a2-law` 23.1%, `a2-housing` 23.3%, `a2-door` 23.5% — and two of those
are the nights pinned at over 50%.

**AND MEASURE THE RUNS, NOT THE RATIO.** The floor is what you get when nobody talks for nine
blocks without the room doing anything. `node scratchpad/runs.js <beat> 4` lists every
unbroken run of spoken blocks, longest first. Break the fours and the ratio follows; do not
break a list the character has just announced as a list.

### → THE NINE-BLOCK CAP IS FIXED (v5.64.0) — RULED BY THE AUTHOR: LET THE NOVEL PRINT IN FULL

`showScene` trimmed EVERY reply at nine blocks. It is a guard against a model that was asked
for four blocks and hands back twenty, and it was being applied to the authored book:
**107 card layers of 889 were over it, and 456 written blocks never reached the page on any
night in any run.** Vic's "The kettle has not boiled. Nobody says so." was one of them.

The cap is now one function with one reader — `blockCapFor(data)` — and it answers a question
about WHO WROTE THE REPLY. The composing path (the single place a model's reply is rendered)
sets `__composed:true` and gets the cap. A card playing itself, a landing, an opening and the
client's own skeleton print what they were written with.

**Sweep row (4a4) drives both halves through the real `showScene`:** a twelve-block authored
reply must arrive whole, a twelve-block composed one must still be cut to nine. Its broken
form restores the shipped shape. It also counts the corpus, so it goes red the day a cap gets
re-applied to the book from any other direction. `scratchpad/overnine.js` lists the 107.

**Found by PLAYING an act out and noticing ONE line missing from the end of a take.** Not by
reading the code, and not by any audit — every audit in the drawer counts what is written.

### → NEXT: SEASON 1 ACT 3, NIGHTS 8 AND 9 (`a1-carried`, `a1-turn`)

Same pass as the last seven nights. Start with `node scratchpad/act.js a1-carried a1-turn`,
then `node scratchpad/runs.js <beat> 4` for the dialogue runs. **`a1-carried` currently has
ten room cards whose choice lines name nobody** — they show up in `scratchpad/ambig.js`.

**AND THE TAKES CAN BE AS LONG AS THEY WANT NOW.** Before v5.64.0 anything past nine blocks
was decorative.

Then Season 1 Act 3 (`a1-carried`, `a1-turn`), then Season 2.

**Whole book after seven nights: run `node scratchpad/contract.js`.**
Book Three is clean and is not part of this pass.

**AND EVENING SECOND TAKES ARE WORTH WRITING AGAIN** — from v5.59.0 every deck is lanes, so
they are reachable. Before v5.59.0 they were not, and 86 of them sat dark.

**Whole book after three nights: 12% contracted, up from 9%. Pia 28%, Vic 23%.**

### THE WAVE RECIPE (worked twice; follow it)

1. Audit: empty second takes, unnamed rails/take-lines, bare landing rows (**`knock:true` rows
   are NOT bare — they are way-forwards and correctly cardless**), contraction rates per
   speaker, narration %, and read `never`/`press`/`here`.
2. Contraction pass: `scratchpad/contract-pass.js <beat> <Who,Who> --apply`. **Then dial back
   for WEIGHT, never evenly** — restore uncontracted forms on the lines where the speaker
   means it. Better still, find that speaker's own split (Pia: loose when twelve, formal when
   working). **Machine and Principal stay at 0%.**
3. **Check the SPREAD, not the night's number** — `scratchpad/spread.js <beat> <Who>`. Night
   one is the calibration and its shape is 0% on the working cards, 100% on the jokes. **A
   flat night is a night the pass was applied to rather than written.** Night two came out
   flat at 75% and needed a whole second restore pass read card by card.
4. Write the missing second takes. **`takes` is an array of ARRAYS** — writing an array of
   strings crashes the whole sweep.
5. Name every rail and take-line, and **check both faults at once with
   `scratchpad/lines_n2.js`** (edit the beat id): a line that names nobody usually also
   matches nothing, and then typed input deals whatever card is first unplayed. On night two
   that was 22 unnamed and 8 mis-dealing, and 6 of the 8 were the same lines.
6. Sweep, fixture by delta + ledger paragraph, release ritual, push.

### TRAPS THAT HAVE ALREADY COST A WAVE EACH

- **The counting trap, four times now** — "Nine beds", "Three till six", "Three beats of
  that". Five of this cast are numbers.
- **Metaphors of HOLDING** are the fork trap for Seven and Nine (`bodiless` refuses them even
  in the past tense).
- **Grammar the contraction pass must refuse** (all shipped as bugs first): **CLAUSE**-final
  `it is`/`that is`/`there is` — a comma ends a clause as hard as a full stop, which night 2
  found the hard way; modal `have to`; the pro-form (*"What you're is"*); and **possessive
  `have`**, the nastiest of them, because *"I've been meaning to"* is right and *"I've one
  most Tuesdays"* is not. All four are in `contract-pass.js` with the shipped strings as
  their tests. **No law in this project reads English — read every contraction diff by eye.**
- **The name-magnet is narrow:** only strip a name from a `key` on a night where ONE speaker
  owns every rail. Doing it on a two-hander broke typed input. **Strip the name, never the
  subject.**
- **Check key collisions with `pickTopic` itself, per road** — never an approximation.
- **Grep a global's name before declaring one.**
- **MEASURE PER SPEAKER BEFORE THE PASS, AND EXCLUDE ANYONE ALREADY CALIBRATED.** Mirren
  was written as a deliberate ALTERNATION — full forms for the law, contractions for the
  intimacy — and the pass flattened her to 100% and dissolved the character. A speaker whose
  spread is deliberate rather than absent must not be passed over. **Check the per-card
  spread of every speaker on the night before running `contract-pass.js`.**
- **THE DIAL-BACK HAS A TOOL: `scratchpad/revert-cards.js <backup> <beat> <ids>`.** On a card
  that is entirely the speaker working, the right dial-back IS the author's original. Take a
  `cp corpus.js scratchpad/corpus.before-<act>.js` before the pass so it has something to
  revert to.
- **A MAGNET IS NOT ALWAYS A NAME.** Night six's was a key holding `what`, `was`, `her`,
  `thing` — question-scaffolding, not subject. Strip what is not the subject.
- **RE-RUN `lines_n2.js <beat>` AFTER WRITING THE TAKES, not only after the naming pass.**
  New take lines are lines: two of night four's own new ones tied with a neighbour and lost
  on authored order, and were only caught by running the audit a second time.
- **MEASURE THE DIALOGUE RUNS, NOT JUST THE RATIO.** Night four carried a NINE-BLOCK
  unbroken run of speech. The narration floor is a symptom; the runs are the disease, and
  breaking them clears the floor as a side effect. Find them before writing narration.
- **"<NAME> HAS GONE <ADJECTIVE>" IS THE DEATH SHAPE.** `deathPredicated` fires on it and is
  right to - it is what a death line looks like. Written twice in two waves ("Pia has gone
  very still", "Pia has gone the particular colour"). Use the present tense.
- **THE BADGE CAN CONTRADICT ITS OWN LINE.** A card's badge says who ANSWERS, off `t.who`. A
  take line reading "Ask Vic..." on a card whose `who` is Pia renders as "Ask Vic… PIA · 2ND
  TIME". **Address the card's own answerer.** Found by playing it; no probe looks at a button
  and a card's `who` in the same glance.
- **`new RegExp` BUILT FROM A STRING PASSED THROUGH `node -e` IN BASH LOSES A BACKSLASH
  LEVEL** — `` silently stops being a word boundary and the probe reports a confident
  zero. Write probes to a FILE and run the file. A checker that cannot fail is not a checker.
- **A LAW ADDED MID-BOOK NEVER LOOKS BACKWARDS.** The clause-final refusal was written on
  night 3 and widened on night 2; night 3's own prose still carried *"I've finally worked out
  what it's"* until v5.60.0. **When a refusal is added, sweep the whole book for it that wave**
  — `scratchpad/grammar.js` does all four in one pass. Watch for false positives: a possessive
  genitive (*"other people's to tell"*) looks exactly like a contracted modal to a regex.
- **A FORM HAS READERS, AND A SAVE/RESTORE PAIR IS ONE OF THEM.** Making every deck lanes
  broke five readers, and the harness found all five. The worst was a PEEK: `barWouldServe`
  saves `topicSpent`, deals a card to see if one is servable, and restores it - "the peek
  costs the deck nothing". It never restored `topicLayer`, so every peek burned a layer.
  **Before changing what a deal writes, grep every place that saves and puts back the deck.**

### → THE NOVEL IS WRITTEN (v5.53.0) — 33 OF 33

`a3-granny` is finished — **8 evening cards, 4 in the room, a second take on all twelve, 6
of 6 landing rows wired**, seven and four live on both roads. **Every night of all three
books now has cards to its budget, an id on every card, and both landings wired.**

**THE PEAK JOKE IS IN THE BOOK.** The beat has been called `a3-granny` for ten nights and
nothing in it earned the name. She says nobody has offered her a name since the second one
died; Pia laughs at her own joke first, the way she always does, and then stops, because
Three has not laughed and Three is doing arithmetic with her face. *"Granny. Yes. I should
like that very much. ...I do not know why you have all gone quiet."* **Nobody explains it.**

**HESTA'S PLAN FROM NIGHT 24 IS EXECUTED AND IT WORKS, WHICH IS THE HORROR.** She made a
forty-year-old child fond of her in eleven minutes, deliberately, and then used it. *"It is
the best piece of work I have done in forty years and I would like never to do it again."*
She will not be thanked for it.

**AND THE FORK WROTE A BETTER SCENE THAN THE ONE IT REJECTED.** `earshot` refused the
Machine thanking Seven by name on the housed road — so on that road **she cannot perceive
him at all**, counts the room at six, and he asks the courier not to correct her. Second
time a law has produced a better scene than the one it blocked.

### → WHAT IS LEFT IS NOT AUTHORING. THE MEASURED DEBTS, WHOLE-BOOK:

- **133 of 483 cards have no second take at all** — 58 in Book One, 70 in Book Two, **5 in
  Book Three.** Ask a card twice in Books One and Two and a quarter of the time there is
  nothing behind it.
- **39 more have a second take but no choice line of its own** (`takes` without
  `railTakes`), all in Book Two — the take exists and the row that offers it reuses the
  first line. **This is exactly the ambiguity the badge papers over.**
- **8 nights have unwired landing rows** (`a1-hum`, `a2-chassis`, `a2-three`, `a2-housing`,
  `a2-manual`, `a2-choir`, `a2-law`, `a2-turn`) — they fall back to the keyword scorer,
  which works but is not aimed.
- **The four named passes remain** — `OUTSTANDING.md` §7a–§7j — and they are now the whole
  of the remaining work.

### → NIGHT 31 IS WRITTEN (v5.52.0) — 32 of 33

`a3-principal` is finished: **6 evening cards, 4 in the room, a second take on all ten, 6 of
6 landing rows wired.** Nine canon lines, up from four. **One night left: `a3-granny`** —
the child under the Exchange, and the peak joke of the book.

**BOTH LANDINGS OFFERED "SAY HELLO TO THE CHILD"** on a night whose law says *"nothing about
the Heart Room, the child, or what happens next"* — twice, with no card able to answer it
either way. Rewired; the child stays night 32's.

**SHE ASKS AFTER VIC AND DOES NOT KNOW HE IS DEAD.** Thirty-one years of supplying him, a
housing seal sent nine days ago, and she asks how her tissue man is, mid-argument. Nobody
answers for slightly too long. She puts the bread down — the first thing she does all
evening that was not decided in advance. **He never once said her name; the family thought
he was protecting a price.**

**THE 130 YEARS OF THEFT IS PLANTED, NOT ANNOUNCED** — Hesta clocks a new pan, new wire, a
crate with the packing straw still in it, and asks where a woman who never goes upstairs
gets a new pan. The Principal declines to answer, precisely, and looks faintly pleased.
**The epilogue still pays it.**

**NINE ASKS, AND THE ANSWER KEEPS THE FACT OPEN WHILE EXPLAINING WHY IT IS OPEN:** the
Principal kept no record of a single mind she ever made, deliberately, from the first,
because a record is a thing that can be taken. **Nobody will ever be able to tell Nine where
she came from — and now there is a reason rather than a hole.**

**AND THE AMBIGUOUS-CHOICE LAW BUILT ITS OWN TRAP.** Rewriting every rail to say *"the
Principal"* instead of *"her"* is correct — and `who-she-is` had **"principal" in its key**,
while `scenewideTerms` only measures a term across keys, never across rails. One card
quietly won every line in the deck. **A character's own name must never sit in a key on a
night where every rail names them.** The two laws only collide on a night with one dominant
speaker — which is exactly what a reveal night is, and `a3-granny` is the next one.

### → NIGHT 30 IS WRITTEN (v5.51.0) — 31 of 33

`a3-dreamers` is finished: **6 evening cards, 4 in the room, a second take on all ten, 6 of
6 landing rows wired.** Nine canon lines, up from four. Seven and Marek were both silent on
the act turn; both speak now. **Two nights left: `a3-principal` · `a3-granny`.**

**ALL SIX LANDING RAILS WERE ABOUT LIGHTS COMING ON AND NO CARD ANSWERED THEM** — the same
fault nights 24 and 25 had, third time. The housekeeping has its card now, and what it does
is the most frightening courtesy in the book: **it lights the way *ahead* of them**, one
bank at a time, unhurried, toward the shelf they were already walking to. Nobody turns it
off, because turning it off is a sentence — *"we do not want your help"* — and nobody is
ready to have said that to this room.

**SEVEN KNOWS THE AISLE NUMBERING BY INTAKE QUARTER**, so he knows where the people he
processed are: nine minutes' walk, worked out without deciding to. He does not go.
**MAREK IS THE ONLY ONE LOOKING AT THE ROOM** rather than the shelves, and it is superbly
kept and has been for forty years, by her, by hand — *"every perfect seal is her being
careful with somebody."*
**NINE IS NOT FILED HERE.** She looked before they reached the bottom of the ladder. She is
still from somewhere and it is still not here — **and it still must not be invented.**

**HESTA'S LIST IS NOW ONE LIST.** The four names taken in pencil at the Cannery Row post
door on night 24 are on the same page as the eleven from under her floor, copied over on
the ladder. It has stopped being a keepsake and become a working document.

### → NIGHT 29 IS WRITTEN (v5.50.0) — 30 of 33

`a3-descent` is finished: **7 evening cards, 5 in the room, a second take on all twelve,
6 of 6 landing rows wired.** Marek had no line at all on a *cable descent*; he has two now.
**Three nights left:** `a3-dreamers` · `a3-principal` · `a3-granny`.

**THE WAVE CAUGHT A CONTRADICTION IT HAD WRITTEN ITSELF THE NIGHT BEFORE.** Night 28's new
card has Hesta say she is not coming down — *"going back is how six become none"* — and
`a3-descent` has her on the cable, and the finale has her in the Heart Room. **Ruled: keep
the promise and break it.** She is forty rungs down before anybody notices, she does not
announce it, and she waited until announcing it would have meant somebody climbing back up
to argue. *"It is a good rule. I am simply not a good enough woman for it."*
**The general lesson: a card written in one wave can contradict a beat three nights later.
Grep the character across the remaining nights' `here` lists before promising anything.**

**THE OPEN WORLD FACT STAYS OPEN.** Nine's second take does not invent where her hum comes
from — *"I do not have a where"* — so the gap is now **hers rather than the author's**.
Still do not invent it.

**Seven states the time ratio once, flatly:** a minute in there per second out here, the
published figure he filed against for eleven years without being told why it was the
figure.

### → NIGHT 28 IS WRITTEN (v5.49.0) — 29 of 33

`a3-for` is finished: **7 evening cards, 5 in the room, a second take on all twelve, 6 of 6
landing rows wired**, six and five live on both roads. Seven canon lines, up from three.
**Four nights left:** `a3-descent` · `a3-dreamers` · `a3-principal` · `a3-granny`.

**SEVEN HAD NO CARD ON THE NIGHT EVERYBODY GETS A NAMED PART** — and the beat's own brief
lists *"Seven's chassis senses"* as one of them. He has two now, one per road: with the
frame he is doors and dark and reach; **housed he is eleven years of their floorplans**,
read out from inside the courier's skull, and it is the bigger contribution.

**THE WINDOW CLOSES BECAUSE A CLERK STARTED A LIST.** A polite man spent yesterday on
Cannery Row asking who had been helpful during the eviction — no van, no uniform, no hurry.
**That is what the Choir looks like when it finally moves**, and it pays night 23's *easy
means unnoticed* and night 24's *we are in somebody's diary*. He bought his candle from
Toller, who would not have known.

**A CHECK I HAD BEEN USING FOR SIX WAVES WAS WRONG.** My hand-rolled key-collision probe
scored only single tokens, and the real `pickTopic` gives **+2 for a hyphenated phrase** —
so it reported collisions on cards that resolve correctly. The collisions it found earlier
were real; the false positives were mine. **Use `pickTopic` itself, per road, not an
approximation of it.**

### → NIGHT 27 IS WRITTEN (v5.48.0) — 28 of 33

`a3-stone` is finished: **4 evening cards, 5 in the room, a second take on all nine, 6 of
6 landing rows wired**, four and four live on both roads. **Five nights left:** `a3-for` ·
`a3-descent` · `a3-dreamers` · `a3-principal` · `a3-granny`.

**IT IS DELIBERATELY THE SMALLEST NIGHT IN THE BOOK and the wave respected that.** Budget
2, and its own law says *a stone, a name, one line each at most — do not let it become a
meeting.* **The second takes here are two or three blocks, not five.** Do not "bring it up
to size" on a later pass; the shortness is the writing.

**THE FORK DEBT FROM v5.45.0 IS PAID.** The dawn census had Seven standing on a causeway,
so it was gated to his road and the Nine road walked that room a card short. It has its
twin now — same census, same joke, Nine caught calibrating a path she has walked four
hundred times.

**AND A THIRD GUARD DISAGREED WITH THE ENGINE ABOUT THE FORK.** A landing row may name a
fork PAIR — `wireRail` picks whichever half is live — but the landing walker drove with
**no chassis holder at all**, where `cardOnBranch` answers false for both halves, so it
dropped the row and reported it as written-but-never-offered. The row was correct on both
real roads and broken only under nobody. **The walker now drives both roads: 167 aimed
rows became 334.** The recurring lesson, third time: *a test that runs in a state the game
cannot reach is not testing the game.*

### → NIGHT 26 IS WRITTEN (v5.47.0) — 27 of 33

`a3-vic` is finished: **6 evening cards, 6 in the room, a second take on all twelve, 6 of
6 landing rows wired**, and six and six live on both fork roads. Eleven canon lines, up
from six. Nine, Seven and Marek had no line on this night at all; all three do now.
**Six nights left:** `a3-stone` · `a3-for` · `a3-descent` · `a3-dreamers` ·
`a3-principal` · `a3-granny`.

**THE SHARD OFFER WAS NEVER IN THIS BEAT, and the author's ruling required it.** This is a
world that keeps people on shards, the family owns every piece of the method, and the book
had never once put that offer in front of him. It is made now — **once, properly, costed
honestly** — and the night's `never` was rewritten to say so, because the old law only ever
forbade *repairing the rig*.

**NINE MAKES IT, because she is exactly what he would become.** Her half is written as a
fork pair inside the card — aloud where she holds the chassis, relayed through the courier
where she does not — which is the landing form applied to a card, and it swept clean on
both roads. **He refuses her to her face**, and his reason is the novel's own argument
handed back: *"You're offering me the same weight and no end to it. That's the thing we're
all out here trying to switch off, and you're offering me a private one."* Four seconds
earlier he called her the proof it works and meant both, and `what-nine-does-after` is her
having to hold those apart with him no longer available to be asked.

**IT ALSO GIVES A LOOSE PRESSURE LINE ITS FIRST MEANING** — *"the choice arrives early and
Vic takes it before anyone can argue"* had nothing to point at while nothing could save
him.

**HE NEVER REACHES THE OTHER HALF.** Night 25 ended on him asking for a chair and a drink
and tomorrow. He spends all of tomorrow on the part that indicts him and gets as far as
*"His name was —"*. **That is how `a3-seize`'s canon stays true:** nobody ever told the
courier why he was chosen, and there is no entry about Vic in the founders' records.

### → NIGHT 25 IS WRITTEN (v5.46.0) — 26 of 33

`a3-founding` is finished: **6 evening cards, 6 in the room, a second take on all twelve,
6 of 6 landing rows wired.** Six canon lines, up from four. Seven and Marek had no card on
this night at all; both do now. **Seven nights left:** `a3-vic` · `a3-stone` · `a3-for` ·
`a3-descent` · `a3-dreamers` · `a3-principal` · `a3-granny`.

**VIC WAS ALREADY IN THIS NIGHT AND THE CAST LIST DID NOT KNOW — the exact fault
`a3-voice`'s doorway had, one night later in the book.** Both landings already ended on
him asking the courier outside *"in the voice people use when they have already decided to
say the whole thing"*, and **all six landing rails were about that, with no card in either
deck to answer them.** `outside-with-vic` is the card those rails were asking for. He knew
the Architect's voice inside two seconds, will not say how, and on the step he starts, and
stops, and asks for a chair and a drink and tomorrow. **Tomorrow is night 26. He does not
get it.** Nobody standing on that step knows that, which is the whole point of the card.

**THE PRINCIPAL IS NOW PLANTED AS A WRONG ANSWER.** She is all over the early record and
absent from the end of it, and Hesta closes the question out loud and comfortably: *"Long
dead, love. Everybody in that room is long dead."* **Nobody checks.** The drift net flagged
that line as a `tell`, correctly — it is the only deliberately FALSE tell in the book, and
the ledger paragraph beside the fixture says so, because a later guard that reads `tell` as
truth would have to survive it and the fix would never be to soften the line.

**AND A THIRD PRESSURE BLOCK CONTRADICTED ITS OWN NIGHT** — *"the machine answers a
question nobody asked her out loud"*, on a night whose `never` says the machine does not
speak here. **Two in two nights. Nothing in the sweep reads `press`, so every remaining
night's pressure block has to be read against its own `never` by hand when it is written.**

### → NIGHT 24 IS WRITTEN (v5.45.0) — 25 of 33

`a3-voice` is finished: **7 evening cards, 6 in the room, a second take on all thirteen,
6 of 6 landing rows wired**, and all 26 choice lines naming their addressee. Three canon
lines, up from one. **Eight nights left:** `a3-founding` · `a3-vic` · `a3-stone` ·
`a3-for` · `a3-descent` · `a3-dreamers` · `a3-principal` · `a3-granny`.

**HESTA NOW KNOWS WHAT THE ENDING IS GOING TO ASK HER, and it is canon.** Three names her
as the one who talks for a living; Hesta works the method out loud and hates it: *"you sit
with her, and you let her be kind at you, and you let her get fond — properly fond, the
real thing — and THEN you tell her what it costs."* She has not agreed. Nobody in that
room believes she said no. **This is the seven-night plant for `a3-principal`'s "food
opened a door iron couldn't" and for the argument about keeping in `a3-granny`.**

**A SHIPPED BUG CAME OUT OF THE AUDIT AND IT IS THE MOST IMPORTANT THING IN THIS WAVE.**
`fork` gates a CARD — `cardOnBranch` reads that field and nothing else. `holder` gates a
BLOCK inside a card. **Three cards said `holder` where they meant `fork`**, so the game
dealt them on the wrong road, where the variant picker found no usable variant and served
**nothing at all** — a blank lane and a spent turn, with no error anywhere.
**And the desk could not see it, because the two readers disagreed in both directions:**
the desk skipped a passage on `holder` and had never heard of `fork`. It was blind exactly
where the deck leaked — and blind the other way the instant the cards were corrected, at
which point it started judging Seven-bodied prose in the world where Nine has the chassis.
**Both readers now read both fields.** New sweep row: *no card is dealt on a road it has
nothing to say on* — 872 card/road pairs, proved, not exempt.
**`a3-stone` (night 27) still owes its room a Nine twin** — its census card is gated to
Seven now because it has him standing on a causeway.

**THE COUNTING TRAP CAME BACK ONE WAVE AFTER IT WAS WRITTEN UP, as a CLOCK:** Marek's
*"Three till six is me"* read as the engineer. **The rule is not "don't start on a number"
— five of this cast ARE numbers, so any sentence where a number does ordinary English work
(a count, a time, a shelf, a year) has to be read twice by whoever writes it.**

### → NIGHT 23 IS WRITTEN (v5.44.0) — 24 of 33

`a3-evict` is finished and the board's own counts say so: **6 evening cards (budget 4 + 2),
6 in the room, a second take on all twelve, and 9 of 9 landing rows wired.** Five canon
lines, up from three.

**THE FINDING OF THAT WAVE, AND IT COST NOTHING: Toller was already standing in that street
and nobody had noticed.** The handover said he could be one of the nine stilled. He cannot —
`a3-seize`'s `the-empty-chairs` had already spent him as a CONVERGENT man, taken with
paperwork, *"very calm and very pleasant and not one bit himself"*, whose borrowed voice
stops mid-word at the seizure. Stilling him on night 23 would put him in a bed and break the
ending. **And the existing prose had him all along:** Hesta's neighbour card named the
chandler *"watching through his own stock"* on day 31 — eight days after he was taken. So
night 23's cost is that the family frees nine strangers the kind way while the one man Hesta
owes serves customers across the road, unhelpable, because there is no kind eleven minutes
for what was done to him. **No retcon, and the ending gets its plant for free.**

**HOLE 4 OF THE PLAUSIBILITY PASS IS ANSWERED IN PROSE** — *"taking a row back" is
undefined.* Seven now says it out loud: nothing holds the street except that nobody has come
for it, a van with correct paperwork takes it back by lunch, and **no van is worse news than
a van**, because it means they are not in the argument, they are in somebody's diary. Marek
carries the unglamorous other half — water, lamps, drains — *"the eleven minutes were the
easy part."* Both are canon now, so the night after reads them.

**Nine nights left**, every one still at 3–4 beat cards and 2–4 room cards with no second
takes and nothing wired: `a3-voice` · `a3-founding` · `a3-vic` · `a3-stone` · `a3-for` ·
`a3-descent` · `a3-dreamers` · `a3-principal` · `a3-granny`. **They now have an ending to aim
at, which is exactly why it was built first.**

**TWELVE RULINGS TAKEN 2026-08-17, AFTER THE ENDING SHIPPED — and rulings 4 to 12 describe a REWRITE that is now clearly larger than the authoring left to do.**

> ### 0. THE BANTER FLOOR, AND IT OUTRANKS EVERY RULING BELOW IT. `OUTSTANDING.md` §7a.
> **The author, after ruling all four passes: *"I still want to have banter, they shouldn't
> be too serious."* He has now said this three times across the project and was right every
> time. IF ANY INSTRUCTION BELOW READS AS "MAKE IT GRIMMER", IT IS BEING READ WRONG.**
>
> **THE GUARANTEE IS ARITHMETIC:** §7d's narration target is reached **by ADDING narration,
> never by cutting dialogue.** **The spoken-block count is 3,819 and it is a FLOOR** — after
> the rewrite it must be ≥ 3,819. Check it the way the drift net is checked; a fall is a
> failure however good the new prose is. The book gets BIGGER, not drier.
>
> **THE TIEBREAK IS TERRITORY, NOT COMPROMISE:** in NARRATION dread wins; in DIALOGUE banter
> wins. **"One break a night" is ONE PASSAGE, not a mood** — a book where somebody breaks
> every night is a book where nobody breaks. **Craft law 4 is a COMEDY instruction:** if a
> passage came out sadder rather than funnier, it was applied backwards.
>
> **WHERE THE BANTER LIVES, MEASURED: the ROOMS hold 73% of every spoken line in the game.**
> The staged passages are already at 56.1% narration and have met §7d's target on their own,
> which says where the ~2,400 new blocks belong and where they do not.
>
> **THE TEST: if a room card has no line that would make somebody smile, it is not finished.**
>
> **THE TWO REGISTERS, SETTLED WITH A PICTURE (2026-08-17): dialogue is Ken, narration is
> Blade Runner K.** Dialogue bright, easy, fluid, everyone deflecting **at the same level**,
> nobody admitting what the task demands. Narration bleak, soft, poetic, foreshadowing,
> describing the emotions — and it is the only voice in the book that says the sentence out
> loud. **The courier is why it works:** his life burned on day one and facing that head-on
> would break anybody, so he deflects and the family deflects with him.
> **DIALOGUE IS REPHRASED FOR FLUIDITY, NEVER CUT** — the craft-side statement of the 3,819
> floor.
>
> **AND THE ENDING MUST NOT BE REVEAL-HEAVY. This corrects v5.42.0**, where the drift net
> measured EIGHT new `tell` anchors on the last night alone. **The facts move earlier; what
> stays in the epilogue is what they COST.** The model for a late payoff is §7f's granny joke:
> **a payoff the reader assembles is not a reveal; a payoff somebody narrates is.**

8. **THE FOUNDING LOCK, AND IT IS NOT A RETCON. `OUTSTANDING.md` §7f.** The Architect forged
   the key **with his own blood, while they were estranged**, and died before she could ask
   what he meant to do once the Choir took the machine. **She is locked out** — she can hold
   the door, she cannot knock — so she preserved herself and spent a hundred and thirty years
   undoing **the keeping**, which is the thing that estranged them. She found Vic, fed his
   blood-scan secretly and supplied his parts. **Even she does not know why the courier fits;
   the maths check out and the reason does not exist.** **THE RECEIPT THAT THIS NEEDS NO
   RETCON:** `a3-vic`'s own `before` already says Vic's tissue *"could hold the door open and
   never knock, and he does not know why the difference exists either."* The lock has
   distinguished holding from knocking since it was written.
   **THE PEAK JOKE OF THE BOOK: the courier calls the machine GRANNY** because in the most
   abstract way they are related by blood — and **that is where the name a3-granny has been
   using for ten nights comes from.** Write it as a laugh that lands and then goes quiet.
   **Nobody in the room explains it.**

9. **VIC REFUSES, AND IT IS THE GUILT RATHER THAN THE PARTS. §7g.** Minds go on shards in this
   world and the family knows it, **so somebody must OFFER and he must refuse.** The
   mechanical reason already authored in `a3-vic` stays — the rig went past saving, the parts
   do not exist. What is added underneath is that he would say no anyway: **he cannot carry
   the guilt any more and does not want more time with it.** Self-defeating, sincere, not
   noble. **Seeing the family take the reins is what lets him stop.** One `never` line needs a
   careful reword so the offer is not forbidden by accident — see §7g.

10. **THE GUARDS COME BEFORE THE REWRITE, NOT DURING IT. §7h.** A `REVEALS` ledger in
   `corpus.js` — fact, plant beat, pay beat, words — and four rows off it: **planted before
   paid · nothing states it earlier than its plant · the plant beat really contains its plant
   · the finale is not where the book explains itself.** Plus three cheap ones worth building
   immediately: **the banter floor (spoken blocks ≥ 3,819)**, the narration ratio as a live
   gauge per night and per deck, and a guard that nobody ever explains the granny joke.

11. **THE CHOICE LINES ARE AMBIGUOUS, AND IT IS MEASURED. §7i.** **197 of 438 first-take
   lines (45%) name nobody; 177 of 200 later-take lines (89%) name nobody; 168 of 200 (84%)
   carry no repeat marker either.** The player picks a card, and twenty turns later gets
   *"Ask her to take the lid off it"* with no way to know who "her" is or that it is the same
   card. **TWO FIXES AND ONLY ONE IS WRITING: (a) WHO is an authoring rule** — every choice
   line names its addressee, never a bare her/him/them/again; ~374 lines, and it rides the
   voice pass where every line is being touched anyway. **(b) WHICH TAKE is an ENGINE job** —
   `topicLayer` already knows, so the client badges a line that returns to a card already
   opened. A badge cannot be forgotten; a convention can.
   **THE BADGE SHIPPED AT v5.43.0 AND HALF THIS IS CLOSED.** `rowBadge()` puts "2ND TIME" on
   any returning row, and prefixes WHO ANSWERS only where the sentence does not already name
   them. **The line string is byte-identical** — it is the deal key, not decoration.
   `hideWho:true` opts a card out where the answerer is the surprise.
   **THE 374 LINES ARE STILL OPEN.** The badge makes the ambiguity survivable, not the prose
   good. **When the rewrite names them, the badge goes quiet on those lines by itself — which
   is the tell that the writing has caught up.**

12. **THE SAFEHOUSE DOOR IS STANDING IN THE WRONG ROOM. `a1-vic`, night 3. §7j.** The opening
   says *"Pia has knocked. The door has not opened yet"*, and then SIX evening cards play with
   Vic answering. **Two of them cannot happen on a porch:** `t5` is *"Ask about the labels.
   The kettle says KETTLE, Vic"* — **you cannot see the kettle from outside the house** — and
   `t4` asks whether the place is safe. **The beat's own `where` confesses it:** *"the
   safehouse porch, THEN the kitchen."* **Fix: the porch is a SHORT beat (cut the budget), the
   opening actually moves them across the threshold on screen, and the interior cards go to
   the room deck — which already is that kitchen and already holds 8 cards.**
   **AND IT IS A PATTERN: any beat whose `where` contains "then" is two rooms in one deck.
   Sweep for it.**

1. **THE PRINCIPAL'S THEFT IS PLANTED AT NIGHT 31 AND PAID IN THE EPILOGUE.** `a3-principal`
   is where she admits it — a hundred and thirty years of skimming her own tenant, in her
   own house, to her face. **The epilogue's version then changes job: it stops being the
   news and becomes the ARITHMETIC** — eleven hundred people, twenty thousand years, *"it is
   the correct disaster."* When night 31 is written, re-read `what-the-principal-has-been-doing`
   in a3-seize's room and make sure it reads as a sum rather than a revelation.
2. **THE ~105 AI TICS STAY A DEBT AND DO NOT GET SWEPT PIECEMEAL.** The finale's four
   original evening cards still read in the old voice, next to twelve new ones written to
   the craft laws, and the join is visible. **Ruled: push on to night 23 anyway.** Doing
   four cards now would hide the size of the debt rather than pay it. It is its own wave,
   whole-corpus, when the author calls it.
3. **NIGHT 23 IS THE FIRST TASTE OF THE COST.** `a3-evict` — the family takes Cannery Row
   back and stills the nine the kind way, **and it works, and it is horrible.** The
   neighbours they save do not thank them. **This is where the epilogue's moral engine
   starts running**, on the first night of Book Three, so that every night after it is
   living with something rather than heading toward it. Toller is standing in that street.

4. **THE PLAUSIBILITY PASS IS A NAMED WAVE, AFTER BOOK THREE — see `OUTSTANDING.md` §7b.**
   The author's note of 2026-08-17: the Choir looks like it just let all this happen, nobody
   bigger ever chases them, a whole street gets "taken back" and the next night is a normal
   Tuesday, and one of them is twelve. **Six holes, written up in full in that section.**
   **THREE OF THEM MUST BE HONOURED WHILE WRITING NIGHTS 23–32 or the pass grows instead of
   shrinking:** give the enemy a move in every night's pressure block; never open a night on
   ordinary business after a night that cost the Choir something; and let somebody name the
   mismatch out loud once, early — **`a3-evict` is the place, and the family should be
   frightened of how easy that street was.**

5. **THE NERVE PASS — NOBODY IN THIS BOOK IS EVER FRIGHTENED. See `OUTSTANDING.md` §7c.**
   A SEPARATE note from §7b and it must not be merged with it: §7b is what the world does
   about them, this is what they do about the world. **The diagnosis: every character in the
   cast copes by being good at something and not one of them has a failure mode**, so the
   reader is never worried on their behalf through a catastrophe. **Two more craft laws,
   applying to everything written from here — they join the three of 2026-08-16:**
   **(4) the joke must have the fear underneath it, on the page, in the same passage, and
   once a night somebody fails to dodge**; **(5) they plan, and the plan frightens them** —
   somebody says the odds, somebody says what happens if it goes wrong, and somebody says
   they do not want to. **DO NOT SWING THE TONE GREY:** he protects the comedy hard and has
   twice said a scene was too dry. A joke with visible pressure under it is funnier, which
   is the whole reconciliation. **The v5.42.0 epilogue is in scope for this pass too.**
   **RULED THE SAME DAY: PIA BREAKS, AND THE DIAL IS "WEIGHT UNDER EVERY JOKE, ONE BREAK A
   NIGHT".** Her over-organising is the symptom, so the book turns it — **the rules stop
   working**, and a twelve-year-old is left next to a decision nobody her age should be
   near, which answers §7b's Pia hole in the same stroke. **Four rules so it does not eat
   her:** she is still the funniest person in the book and the break is rationed · it costs
   her the METHOD, not her nerve — she has been frightened since night 22 and said so calmly
   · it arcs and escalates across Book Three rather than repeating · **nobody fixes her**,
   because "stand there and be ordinary at me" is her own ruled law. **Book Three does not
   run grey and the jokes do not get rarer.**

6. **THE NARRATION PASS — TWO NARRATORS WHO DISAGREE. See `OUTSTANDING.md` §7d.**
   **Two nights are pinned by id as the peak of normalcy**, the last sincere ordinary the
   family gets: **`a2-door` (night 10, "The Open Door")** — Hesta's door and the tin going
   round for the first time — **and `a2-chassis` (night 15, "the cook")**, the second smoke
   session. **The technique:** the room jokes and the prose does not. Narration carries the
   bleak truth start to finish — the odds, the cost, what is coming — while the dialogue
   stays warm and completely unaware. **A joke over a visible drop is funny; a joke over
   nothing is noise.** This is craft law 4 seen from the other end: law 4 says the fear must
   be on the page, and this says WHERE — in the narration, permanently, as the book's second
   voice.
   **THE RATIO IS MEASURED AND IT SUPERSEDES CRAFT LAW 3's TARGET:** the book is at **27.5%
   narration blocks (1,452 against 3,819 spoken)**; the ruled target is **over 50%**, which
   is about **2,400 more narration blocks** — a REWRITE, which is what the author is calling
   it. The pinned nights are the lowest in the book: `a2-chassis` 20.2%, `a2-door` 23.5%.
   **The ~105 AI tics and every "load-bearing" ride this pass** rather than a separate one,
   which supersedes the earlier ruling for the tics specifically. **And the cast stays
   likeable: the bleakness goes in the NARRATION, never into their mouths.** **AND THE VOICE PASS RIDES IT, RULED: they
   TALK like the characters they are.** **Pia talks like a TWELVE-YEAR-OLD, not operational
   efficiency** — precocious is fine, PROCEDURAL is not · **Hesta like an old lady** · **Vic
   with a guilty conscience**, because he installed that housing without consent · **Nine and
   Seven like grown minds**, adults rather than quirky machines. **This is the biggest of the
   passes by line count** — it has no scope smaller than every line anybody says.

7. **THE PRINCIPAL IS THE PRIME MOVER — FOLD IT THROUGH THE WHOLE BOOK. See `OUTSTANDING.md`
   §7e.** The whole plan is HER attempt to evict the Choir; the family is the last piece she
   could not manufacture. **This is barely a retcon** — the bible already says she and the
   Architect BUILT the machine, that the bio-hash comes from THEIR bloodline, and that her
   want is *"an argument finished with a dead man, through whoever carries his key."* Nobody
   has ever played it that way. **It answers three of §7b's six holes outright, including the
   big one:** the Choir RENTS FROM HER, so the most dangerous person in the city is filed
   under premises, and by the time the pattern resolves it is too late to act in force.
   **She wears a bio-gren suit** — new, ruled, and it explains a hundred and thirty years.
   **THE ONE THING THAT MUST NOT BREAK:** nobody ever tells the courier why he was chosen.
   She arranged the CONDITIONS, not the man — she needed someone of the bloodline in that
   chair and which body turned up was chance. **No night may imply she picked him.**
   **Plants at `a1-hum` (night 1, a reopening of the cold open) and `a3-principal` (31),
   alongside the theft.**


**Writing now happens in `corpus.js`**, and `editor.html` is the fastest way to proofread it.

### THE CARD EDITOR (v5.40.0) — `editor.html`, and it never re-serialises

**Open `editor.html` from a served copy** (`http://localhost:8124/editor.html`, or the
deployed site). It lists all 33 nights and every card in both decks, with every string in a
text box: `ask`, `rail`, `who`, `gives`, `holds`, `key`, the second-take lines, and every
line of `plays` and `takes`.

**IT HOLDS THE CORPUS TWICE ON PURPOSE** — parsed (from the same `<script src="corpus.js">`
the game uses) and as RAW TEXT (fetched). An edit finds that field's exact character range
in the raw text and replaces only those characters. **It never builds a file from objects.**
The comments in `corpus.js` are the project's memory and live *between* the data; a
read-into-objects-and-write-back tool would delete every one of them silently.

**PROVEN, NOT ASSERTED.** Editing one line of night 21 produced a file with **952,103
identical bytes before the change and 153,467 after**, one 209-byte range replaced, the same
line count, and it parses. A deliberately hostile value — quotes, backslashes, newlines,
tabs, an em-dash and a fake `"},{id:\"fake\""` terminator — round-tripped **byte-exact**
through the game's own object graph.

**A FIELD IT CANNOT LOCATE UNAMBIGUOUSLY IS LOCKED, NOT GUESSED.** Greyed, with the reason
printed. **5 of 6,788 fields** are locked, all genuine duplicates — the same short line
written twice in one card ("Minuted.", "You are keeping it."). The first cut locked **422**,
every one a `who`, because `who:"Pia"` also matches that card's own nameplates; anchoring on
the field name and on the speaker fixed it. **Anchor on as much as you know.**

**Saving:** DOWNLOAD writes a new `corpus.js` you drop over the old one. On Chromium, PICK
`corpus.js` TO SAVE IN PLACE gives it a file handle and it writes straight to disk. **Both
paths refuse if the result would not parse**, and refuse if a field has moved under the
editor since load.

**It does not touch the game.** No engine, no board, no rehearsal room, no run state — it
reads and writes one file. That is why moving the writers' board out was dropped: measured,
the board and rehearsal room are **939 lines, not the ~4,000 the pitch claimed**, they are
threaded through the FX system, the shard widget and the boot path, and the board calls live
run state (`persistAll`, `currentChoices`). The editor needed none of it.

### THE CORPUS IS ITS OWN FILE (v5.39.0) — and half of index.html was your writing

**`index.html` 35,158 lines → 24,795. `corpus.js` is 10,399**, and every byte of it is a
byte-for-byte slice of what index.html held — asserted, not assumed.

**What moved:** `BIBLE`, `BACKSTORY`, `OPENING`, `OPENING_CANON`, `OPENING2`, `REVEALS`,
`WANTS`, `SPINE`, `SCENEBOOK`, `TEASES`. Ten declarations, no functions, no calls out —
checked before the cut, not after.

**IT IS A PLAIN `<script src>` LOADED BEFORE THE ENGINE.** No JSON, no fetch, no module.
Those would break `file://`, complicate the offline shell and put a network hop in the boot
path. Load order is document order, so nothing became asynchronous and nothing downstream
of the cut knows the difference.

**Three readers had to learn it**, which is the standing law paying out again: `sw.js`
SHELL (and **corpus.js is the one entry whose absence is not cosmetic** — without it the
game loads with no beats, no cards and no bible), the node `ctx.js` harness (which now
concatenates corpus + inline body in the same order the page does), and the release ritual.

**How the cut was made, because the method is the point:** anchors asserted unique or the
script refuses; output built by slicing at recorded offsets and joining; byte accounting
proved before writing; and afterwards the extracted corpus compared byte-for-byte against
the region removed. Verified after: node harness loads 33 beats, sweep identical at **67
PROVED of 86 with nothing failing**, drift **none moved**, the writers' board still draws
night 21 at exactly 44,579 characters, and a real run plays from the split corpus.

### THE ENTRY TRANSITION, AND THE PANEL THAT ATE THE SCREEN (v5.38.0)

**Three faults, all measured, all in the skin except the last.**

**1. The transition played to a hidden screen.** `start()` faded the menu and wordmark out
and the game's own handler hid `#titlescreen` on the same click — so the fade was never
seen and the run just began. It now **holds the door**: a capture listener blocks the first
click, plays the transition, then re-issues the click with a one-shot flag that lets it
through. **1300ms**, not the old 3400 — the fade is .5s/.6s, so that is the fade plus a beat
of clear city. One constant, `ENTER_HOLD`, one place. The game's handler is an `onclick`
PROPERTY, which runs in the target phase, so `stopImmediatePropagation` from capture stops
it — that is why this works at all.

**2. The restore was a timer you could walk into.** The menu's opacity was scheduled back to
1 on a 3400ms timer. Return via MENU inside that window and the menu was still at 0, then
popped to 1 in front of you — **which is why it was intermittent: it depended on how long
you played.** It is now `settleMenu()`, fired by a `MutationObserver` on `#titlescreen`'s
attributes whenever it goes hidden → visible, restoring opacity with the transition
suppressed for that frame. Watching the attribute means the skin does not have to know
whether MENU, a walk-out or an ending brought us back.

**3. THE OPTION PANEL WAS TAKING HALF THE WINDOW.** `#controls` is `flex: 0 1 auto` in a
column with `#feed`, so it takes whatever its contents want. **Measured at 1280x800 with a
four-choice rail: the bar grew from 84px to 434px, leaving the feed 237px.** The scene the
choices are about was a sliver — and no scroll anchoring can fix that, because the passage's
top then falls outside the reachable scroll range and the browser clamps to the bottom.
`max-height:42vh` + `overflow-y:auto` in **veldt-skin.css**, where visual values belong.
After: bar 336px, feed 419px, **52% of the window**, and the rail scrolls in its own box on
the rare turn that needs it. With that room, the v5.37.0 anchor works — after a real turn the
feed sits **110px above the bottom** instead of parked on it.

**A HARNESS THAT "RESTORES" FROM A MISSING BACKUP IS A WIPE.** My own backup/restore snippet
read `window.__bk || {}` and then deleted every key not in it. A `location.href` between the
capture and the restore cleared `window`, so it restored from `{}` — and deleted the
author's live run with the confident wording of a repair. **Capture and restore must live in
one page load, and a restore must refuse to run on an empty backup rather than treat it as
"delete everything".**

### THE PASSAGE IS READ FROM ITS TOP NOW (v5.37.0), and there is a READING PACE

**Two complaints, one coat.** The reveal was too fast, and when the choices appeared the
reader was parked at the END of the scene and had to scroll back up to read the thing they
were choosing about.

**The anchor was already written and was only ever undone.** `scrollToTurn(el)` sets the
feed's scroll to the passage's own top and has existed for a long time — but it was called
only at the START of a reveal, and every road out of `showScene` finished on `scrollFeed()`,
which sets `scrollTop = scrollHeight`. So the passage was anchored, revealed, and then the
view was thrown to the bottom. **A `settle()` now re-anchors on every exit** — the natural
end of a reveal, the click-to-skip, and the instant path.

**READING PACE is in Settings** — slow / normal / brisk — as a **multiplier**, not a rewrite:
a long line still holds longer than a short one and the 2400ms cap still applies. Measured
on a 120-character line: **1340ms before, 2278 slow, 1340 normal, 804 brisk.** It **defaults
to SLOW**, including for every settings blob written before this release, because the old
fixed speed was the complaint. Nothing is skipped at any setting and clicking the feed still
brings the whole passage up at once.

**WHAT IS VERIFIED AND WHAT IS NOT.** Driven at **1280x800**, because at a tall window the
feed does not scroll at all and none of this is visible — my first measurement showed
`scrollHeight === clientHeight` on every sample and proved nothing. After a real turn with
13 blocks the view settles at **1005 of a possible 1134**, i.e. anchored above the bottom.
**`showScene` is the path that is fixed.** There are about a dozen other `scrollFeed()`
call sites — end cards, ceremonies, the busy indicator — and the COLD OPEN still ends at the
bottom in a trace. Those are deliberate bottom-jumps in most cases and want their own pass;
**do not assume they are covered.**

### THE TITLE ART LOST ITS CITY AFTER A RUN (fixed v5.36.1) — one divide by zero

**Reproduce:** refresh, see the art; start a new run; answer a couple of questions; click
MENU. The skyline, the warehouses, the cranes and the cobbles are gone. The rain, the
traffic, the neon and the seven figures are still there, which is why it reads as
**mangled rather than blank** — and it never recovers without a reload.

**The chain, measured end to end:**
1. The mousemove listener is bound to **`window`**, not to the art.
2. While a run plays, the game sets `#titlescreen` to `display:none`, so the canvas
   `getBoundingClientRect()` is **0 wide**.
3. `((e.clientX - r.left) / r.width - 0.5) * 2` divides by that zero → `tx = Infinity`.
4. Next frame: `par.x += (Infinity - par.x) * 0.055` → `Infinity + -Infinity` = **NaN**.
5. **NaN is absorbing.** `par.x` never recovers for the life of the page.
6. Every pre-rendered layer blits through `drawImage(buf, Math.round(pr * p) - OFF, 0)`.
   With `pr` NaN, `drawImage` **silently draws nothing** — no error, no warning.

**The pre-rendered buffers were never damaged** — `bgC` still had 1,600 lit pixels while
the screen showed no city. Setting `par.x = 0` by hand brought **55,087 skyline pixels**
back instantly, which is what proved the mechanism rather than merely suggesting it.

**Two guards, both in `veldt-menu.js`:** the listener returns early on a zero-width rect,
and `draw()` resets `par.x`/`par.tx` to 0 if either is not finite. The second is the belt
to the first's braces — any future non-finite frame would otherwise stick forever, and the
failure mode is silent.

**A NaN THAT REACHES A CANVAS COORDINATE IS INVISIBLE.** No exception, no console line,
nothing on the sweep. The only symptom is that some things stop being drawn. **Guard every
division by a measured DOM dimension** — an element that is `display:none` measures zero,
and listeners bound to `window` keep firing while it is hidden.

### THE WRITERS' BOARD WAS DEAD FOR THREE RELEASES (fixed v5.36.0)

**Clicking any night in the board did nothing from v5.32.0 to v5.35.0.** The cold-opens
wave taught `wbReach` that an opening row wires against the NIGHT deck and a landing
against the ROOM deck — and then returned only the room table. `wbDrawBeat` indexes
`RE.byId[cid].ask` for **every** row, so the first opening row of every beat came back
undefined and threw.

**IT THREW INSIDE A DELEGATED CLICK HANDLER, WHICH SWALLOWS THE EXCEPTION.** The board did
not break, crash, or blank. It stopped answering. That is the failure mode to fear: the
state updated (`wbBeat` was set correctly every time), and only the redraw was missing.

**THE FIX IS THE ONE FROM v5.32.0, APPLIED TO THE READER THAT WAS MISSED**: the row now
carries its own `deck`, `wbReach` returns `byNight` alongside `byId`, and the renderer asks
the row which table it belongs to. **A fix is itself a new form, and it has readers.**

**And a sweep row now draws all 33 night pages, the dashboard and the bible every release**,
with the shipped shape as its known break. Nothing was watching this surface at all before.

**I BLAMED THE VELDT SKIN FIRST AND WAS WRONG.** The same click is dead on the pre-skin
build. Two of my own measurements were also wrong before the real one landed — comparing
the first 120 characters of a pane whose header is identical on every page, and clicking
rail buttons cached before `wbGo` re-rendered the rail and detached them. **Re-query after
a redraw, and diff the part of the page that actually differs.**

## The loop we are running

1. I bring the author a room's candidate subjects **as a pick-list question** (he
   asked for pick-from-alternatives, never open questions).
2. He picks. He rules the subjects; the scenes are mine.
3. I write the room, verify, ship, report.
4. Next room.

**"Don't stop until we do this for every beat."** — his instruction, 2026-08-15.

### A WAVE DOES NOT GET ITS OWN FILE — RULED 2026-08-16

**Do not write `REPORT-vX.md`, `AUDIT-vX.md`, `BRIEF-X.md` or any other per-wave document.**
The write-up goes in exactly two places, both of which he actually reads: **the commit
message**, and **the standing sections of this file and `OUTSTANDING.md`**. Step 3 of the
loop above says *report* and it means report **in chat** — spoken to him, not filed.

**Why this is a rule and not a preference:** twenty-one such files had accumulated in the
repo root — thirteen release reports, four one-off audits for a hand pass that finished
months of waves ago, two status documents both superseded by `OUTSTANDING.md`, and two
feature briefs whose features all shipped. Nothing in the repo referenced any of them
except one dangling mention in an `index.html` comment. They were removed at v5.34.0; git
has every one of them by path if a wave ever needs to be re-read.

**The test before creating any new file in the repo root: will this be true in ten waves?**
`HANDOVER.md`, `OUTSTANDING.md`, `THE-WORLD.md`, `THE-ANNULMENT-THREAD.md`, `AUTHORING.md`,
`HOW-A-NIGHT-WORKS.md` and `README.md` pass it — they are rewritten in place and stay
current. A document with a version number in its name fails it by construction.
**Scratch work goes in the session scratchpad, never in the repo.**

## HOW TO SPLICE index.html WITHOUT BREAKING IT

*Learned the hard way on 2026-08-16: three scripted splices in a row damaged the file in
one session. Every one of them passed my own eyes and failed `node --check`.*

**The rule: PRINT THE EXACT TEXT FIRST, then edit against what you printed.** Not against
what you remember writing, and not against what the pattern "should" be.

The three ways it went wrong, all of which will happen again:

1. **A comma after a block that already ended in one.** `[{...},,{...}]` is legal
   JavaScript, passes `node --check`, and leaves an undefined card that every walker steps
   over. The deck reports one more card than it has. Check the character before your
   insertion point.
2. **Consuming a bracket that belonged to the enclosing array.** Appending `takes:` by
   anchoring on a card's last dialogue line eats the `]` that closed `plays:`. Anchor on
   the closer itself, not on the last line before it.
3. **A segment scan that stops finding its own anchor after the first insert.** A script
   that inserts twice into the same block recomputes its bounds between inserts and lands
   somewhere else. Do one insert per run, or insert the LAST deck first.

**Count the closers by what the last element is.** A `takes:[[...]]` whose final element is
a dialogue array needs `"]]]}`; one ending on a narration string needs `"]]}`. This is the
single commonest failure and it has happened in every authoring wave so far.

**And prefer the Edit tool over a script for anything under about six insertions.** The
scripts were faster and wrong three times running; the slow way was the only one that
landed.

## WHEN TO COMPACT

**Compact at the end of a shipped wave, never in the middle of one.** The work gets
measurably sloppier as the context fills - the three splice failures above all happened in
the last third of a long session, on a task that had gone cleanly twice before.

A good moment: a release is pushed, the sweep is green, HANDOVER and OUTSTANDING are
current, and the next wave's brief is written down. That is the state this file is in
whenever you read this sentence, because it is the only state a wave is allowed to end in.

**I will say so explicitly when I think it is time.** If a wave is going to involve more
than about six splices, or a new field with readers to hunt, and the context is already
long - say so before starting rather than after failing.

## `a2-choir` IS DONE (v5.26.0) — and what it settled

Night 19 shipped with 6 beat cards, 7 room cards, 9 second takes and both landings wired.
Three things came out of it that outlive the night:

1. **THE PERSONHOOD RULING IS ON THE PAGE.** A grown mind is grown from a hosted scrape —
   a real person copied at intake, filed and cultivated. It is Seven's beat card, it is
   also `canon[6]` so it is true of the run whether or not that card was drawn, and the
   landing proves it: Three stands up and says the name of the one they took out of her,
   because the overlay had a name, because the overlay was a person.
2. **THE SEAL HELD.** The bible says Nine having a line in the same book is a NIGHT, not a
   remark, and must not be confirmed before the vaults are open. Seven's `holds` is that he
   does not follow the arithmetic to anybody at the table; `on-the-lists` walks up to it
   and turns round; Nine's own second take says *"there is a version of tonight that is
   about me... I am going to pick that night myself."* **That refusal is the hook. When the
   vaults open, that is the line that gets cashed.**
3. **THE EARSHOT LAW HAD ALREADY BEEN BROKEN, AND NOTHING WAS WATCHING IT.** `a2-choir`'s
   first room card ended with Hesta saying *"Sit down, Seven"* in the block straight after
   he spoke — the room answering, by name, a man who on one road is an inner voice in the
   courier's skull. It was written before the fork existed. **The drift net found it as a
   DELETION** (`named:Seven` stopped firing), which is the first time that ledger has
   recorded a predicate going quiet on purpose. **Every pre-fork night is suspect the same
   way** — anything written before a2-chassis that has Nine or Seven in the room.

## `a2-annul` IS DONE (v5.28.0 + v5.29.0) — and it took two waves

Night 20 was the last night in Book Two that argued with its own bible. v5.28.0 repaired
the evening; v5.29.0 wrote the morning. It now scores 4 of 4: 6 evening cards, **7 room
cards, 8 second takes, both landings wired, 0 mute lines added.**

**What the room is for.** The evening asks Five and gets a yes given under a false belief.
The room is the morning after that yes turned out to be wrong — and that is the payoff the
night had no card for. `still-here` is Five in the world on the far side of the last form
it knows, correcting the tense on its own obituary. `three-after` takes two takes and the
second is the payoff of `a2-three`: not her hands, but a document in another man's head and
a question asked out loud — *"mine came apart on the way… I was present for the better
one."* `being-asked` is Nine on watching somebody get asked, built road-neutral by
construction. `the-file` gives Vic the morning after the thing in his skull worked, and
**the file still does not SPEAK** — that stays the author's open question, not a room card's.

**Three things this wave proves about the process, all of them found by machine:**

1. **`playAuthored` returns `V.rail.slice(0, 3)`.** A landing shows three rows and no more.
   A fourth row is written, counted by the board as a cut row, and never seen by anybody.
   A knock row was drafted for the soft landing and removed for exactly that reason.
2. **`boardleak` catches a later night's TITLE said out loud in the prose.** Hesta's pan
   card said *"bread after, in the same pan"* — and `the same pan` is the title of night 22.
   Three red rows for a doctrine everybody in that kitchen holds. The wording, not the rule,
   was the problem.
3. **The capitals trap has a fifth costume, and this one is not a name.** *"a man came back
   up out of nine years"* reads to the net as BACK UP with a number-name inside twenty-four
   characters — a mind being copied through the air. It is a QUANTITY that got read as a
   character. Add that to the list: a shouted count, a clock reading, a numbered list, a
   plural, and now a duration.

## `a2-ground` AND `a2-hand` ARE DONE (v5.30.0) — and the order changed

**Ruled 2026-08-16: go in sequence from the EARLIEST unfinished night, not forward from the
last one written.** The writing had jumped from night 10 to night 15 and left four nights
behind it. Nights 11 and 12 were taken as one wave, on the author's call, because they are
one unbroken action: the hunt corners them, and then the family has to end it.

**Both were short of things they were already asking for, and neither absence was a matter
of taste:**

- `a2-ground`'s own `goal` names four kind options — jammer, signal cut, distance, mercy.
  Three had cards. **The signal cut had none**, on the night whose entire job is spending
  the gentle playbook on screen.
- `a2-ground`'s **opening rail line asks who wrote option four** and nothing in the book
  could answer it. A question a night puts on its own first screen must have a card behind
  it. Check every `opens` rail for this; it is a cheap sweep and it found a whole card.
- `a2-hand`'s `before` says *"Somebody will offer to spare him"* — and **there was no card
  where the offer could be made**, so it could not happen however the player played.
- **Vic had no room card at the marsh edge** on the night his oldest friend was ended. The
  largest single hole in the season, hidden behind three good cards.

**And writing two nights as one wave bought something specific:** night 11's room ends with
a twelve-year-old asking to be in the room and Hesta saying *"I have not decided"*; night
12's evening is where that gets decided out loud. Night 11's Vic take is thirty years of
Tuesdays; night 12's room is the arithmetic of the next one. Neither payoff is available if
the nights are written a wave apart.

**THREE NEW LAWS CAME OUT OF IT** — see the fixture ledger and OUTSTANDING §6:
1. **Growing a beat's deck dilutes its anchors.** The anchor row went red from adding two
   good cards: two-of-four dealt is safe, two-of-six under a budget of four is not.
2. **A character's family is the author's to invent.** `breach`'s kin rule caught a take
   that opened *"when my mum went"*. Pia has never been given a family anywhere in the book.
3. **One word may not win two cards in the same deck.** `standing` meant a standing
   arrangement on one card and a man refusing to sit down on the other.

**AND TWO MORE FROM v5.31.0.**

4. **THREE ROWS MAY NOT NAME ONE CARD.** A landing rail whose cards are all spent is
   dropped on sight (`wireRail`), so three rows pointing at the same card collapse to one
   the moment it is played — the player gets one question where the author wrote three.
   `a2-mirren`'s soft landing had *"Answer it" / "Ask who else still has that number" /
   "Let it ring"*: three rows, one subject, and once `the-wire` existed all three would
   have been the same click. **Three rows, three cards, always.**
5. **THE KEYWORD SCORER IS WRONG ABOUT HALF THE BOOK, AND THAT IS FINE — BUT KNOW IT.**
   Measured across all 19 finished rooms: **164 of 337 rail lines (49%) score onto the
   wrong card** when the scorer alone decides, and most of the misses fall through to the
   deck's first card. This is unreachable in a novel run — the row *binds* its lines before
   showing them and there is no typing box — which is exactly why the wiring was built. Do
   not report "0 misbindings" off a harness that calls `pickTopic` without `sceneRails`
   first: that measures the scorer, not the game. **The room binds; drive the bound path.**

### `a2-law` IS DONE (v5.35.0) — and the card you ruled was already written

**21 of 33 finished. Season 2 has ONE night left in it: `a2-turn` (22), the finale.**
Two evening cards, five room cards, a second take on every card in the room, both
landings wired. Corpus 7,293 → **7,458**. Browser sweep **66 PROVED of 85, nothing
failing**.

**THE RULED CARD WAS ALREADY IN THE BOOK.** *"What the week-old argument was"* — the
brief said nothing anywhere told it. `what-the-rule-should-be` tells it in full: Tuesday,
the chandler's errand, somebody walked to the wall alone at night, *"it rhymes with
brick"*, two hours of not knowing. **What was missing was VIC'S SIDE**, and the author
re-ruled it on the spot. He gets one line in the existing card — *"fine. Yes. It was me."*
— and his own card `whether-a-rule-is-a-good-idea` explicitly holds back *which of his own
improvisations he is looking at.* This is which, and the answer is worse than the room's
guess: no emergency, no clock, he could have gone Wednesday with company. **Telling them
would have cost forty minutes, and he priced forty minutes of his family against an hour
of nobody knowing where he was, and picked the one that was cheaper for him.**

**THE BOOK'S FIRST LANDING FORK.** `the-one-in-his-head` / `-seven` is one subject in two
voices, because a nameplate cannot be body-neutral: whoever is in the courier's skull is
Nine on one road and Seven on the other. **One landing row names both ids** and `wireRail`
takes the first on-branch one, so a single row serves both roads. Its content is the card
`will-three-keep-it` was asking for all along — Three made symmetry her condition and got
it in nine seconds, and there is exactly one seat at that table where symmetry is not
available, and it belongs to the person living inside the man who could switch them off.

**THREE THINGS THE DESK CAUGHT THAT READING NEVER WOULD HAVE:**
1. **`earshot` certified three passages.** The room was answering a voice only the courier
   can hear — Three opening on *"...She is right"* straight after the housed one speaks.
   The fix is the law's other half: **the courier says it aloud first**, and the reply must
   not open on an agreement or on the resident's name. Same fault as `a2-choir`'s.
2. **"Seven. Eight if you count the one on the bread board" certified a NAME.** A
   number-name at a sentence head beats every detector in the file. **That trap has now
   arrived in five consecutive costumes** — a shouted count, a clock reading, a numbered
   list, a plural, and now a headcount at a full table. Rewritten as *"There are seven of
   us."*
3. **A row of only forked cards can vanish.** `chassisHolder` is null until night 15 is
   played, and `cardOnBranch` compares against it — so on an unsettled run BOTH fork ids
   are off-branch, `wireRail` drops the row, and the landing goes up with two choices where
   three were written. **A wired row needs one unforked id to fall back to.** Caught by the
   landing sweep row added last wave, within a minute of the row being written.

**Plus the fork leak, and the landings.** `what-the-meal-is-like` said *"Seven has the mug
Hesta issued him"* on both roads; `housingResident()` says whichever one did not take the
chassis has been in the courier's head since night 18. Now *"the one of them with hands
tonight"* — **write the one with the hands, not the name.** And all six landing rows dealt
the same card, the handwriting argument, because it is simply the deck's first; *"Answer
the door"* was a bare string on a landing that ends on a knock, where `a2-chassis` writes
the identical sentence as `knock:true`; and *"Everyone away from the windows. Now."* was
written into **both** landings with nothing behind it on either, so it is cut.

### `a2-law` (21) WAS THE NEXT WAVE, AND ITS SUBJECTS WERE RULED — 2026-08-16

The law night. Hesta's kitchen, **seven at the table** — Pia, Vic, Nine, Hesta, Seven, Three
and **Marek**, who is nine years under an overlay and is now two souls in one chair learning
to take turns. A week-old argument hardens into a rule the family writes down, and the
`before` is explicit: **the law is not supplied ready-made and it is not handed down by an
elder — it is argued into existence and quoted back in Book Three.**

The night stands at **4 evening cards where the budget wants 6, room at 4 of 7, two takes in
the whole beat, both landings bare, and it is not fork-aware at all.** That last one is the
expensive part and this wave is where it gets paid.

**THE EVENING, RULED — two cards:**
1. **Seven on what a written rule actually does.** He administered written rules for eleven
   years and is the only person at that table who has seen one from the enforcement side:
   what happens to a rule after somebody writes it down, who it protects, and the moment it
   stops protecting them. **The seal on his WORK still holds** — no names, no cases, nothing
   about what a clerk of theirs does. The shape of a rule's life is not the work.
2. **What the week-old argument actually was.** The beat's own goal says *"a week-old
   disagreement about to become a rule"* and **nothing anywhere says what it was.** The
   opening says it starts over who is allowed to touch the pan and *"within four minutes it
   is not about the pan"*. Nobody has ever written the four minutes. Same shape of hole the
   last four waves found by reading the night's own pages.

**THE ROOM, RULED — three cards:**
1. **What happens the first time it costs something.** Hesta's own rule from night 13 —
   *"a rule that has never cost anything is not a rule, it is a mood"* — turned on a law this
   family has now written down deliberately, on a good evening, with nobody at the door.
2. **Seven under a rule by choice.** The first rule he has ever been under that he agreed to.
   He walked a hundred miles out from under the last set; the second take is what it costs
   him to put his name to anything at all.
3. **Whoever is in the courier's skull.** From night 17 one of Nine and Seven lives in his
   head, and a law written at a table where one of the family has no chair is a different
   scene depending which. **This is the card that makes night 21 fork-aware**, and it must be
   written body-neutral where it can be and forked only where it genuinely cannot exist on
   the other road — the `a2-housing` pattern: *write the one with the hands, not the name.*

**TWO THINGS TO CARRY IN, FLAGGED AND NOT ARGUED:**
- **Nine and Marek still have no card on this night.** Both were offered and neither was
  taken, so five of the night's new cards go to Seven (two), Hesta's law, the argument, and
  the fork. Marek's first ordinary evening in the book — two souls in one chair, at a table
  arguing about whose turn it is to touch the pan — stays unwritten. Raise it again only if
  the room comes out thin; do not smuggle it in.
- **The week-old argument is a STORY FACT that does not exist yet.** Writing that card means
  inventing what this family argued about for a week. **Pitch it before writing it** — the
  subject is ruled, the content is not.

**AND THE MIRREN DOCTRINE STILL WAITS FOR NIGHT 19.** *Machines serve, never harvest* goes
on `a2-choir`, which is already finished, so it is a REOPENING and it must read as the family
reaching back to her grave for the name — not as a line she left lying about.

### `a2-seven` IS DONE (v5.33.0) — and a character had a line on two nights she is not in

Night 14 was written to the ruling of 2026-08-16: a sixth evening card, all four room
subjects taken, a second take on all seven, both landings wired. **20 of 33 finished.**
Corpus 7,177 → **7,293**. Browser sweep **66 PROVED of 85, nothing failing**.

**THE HEADLINE IS NOT THE NIGHT. THREE HAD A SPEAKING LINE IN THE HARD LANDING OF NIGHT 14
AND THE HARD LANDING OF NIGHT 15** — two beats whose cast lists do not contain her, one of
whose `never` says *"Three is not here and her two voices are not mentioned — she arrives
two beats from now and that is her scene"* in those exact words. She arrives on night 16.
Both lines were reachable **only on the hesitation road**, which is how they survived every
sweep the book has ever run. Night 14's is Nine's now — private, precise, and it pays the
new evening card. Night 15's is Hesta's.

**AND THE DRIFT NET COULD NEVER HAVE FOUND IT.** Every predicate in `VERDICT_FIXTURE` reads
the TEXT of a line; not one reads the speaker. A name in the wrong mouth is invisible to it
and stays invisible however many predicates get added. **`nobody speaks in a scene they are
not in`** is a sweep row now — 3,287 nameplates read through `playSpeaker` against the cast
of the scene they are spoken in, every staged passage and both decks of all 33 beats.

**AND `a1-turn` HAS FOUR LANDINGS, NOT TWO.** It is the one night in Book One with two
`lands` AND two `landsHard`; `playAuthored` picks one at run time. Every wiring wave counted
three rows per landing and stopped, so **six rows of a night shipped nine waves ago had
never reached `wireRail`** — and on `landsHard1` two of the three then scored onto
`tomorrow-gutter`, so the night offered two questions and answered one of them twice. This
is the SAME SHAPE as `SEASON_OPENS` in v5.32.0: a count that assumed one scene where there
were two. **Twice running now, so it is a rule: before wiring a form, count the variants,
not the beats.**

**The night's own three holes, all visible from its own pages** — four waves running:
1. **The recognition only existed on ONE road.** The canon says *"Nine knew his voice from
   inside the farm"*; the only place it was staged was the SOFT landing, so a player who
   hesitated never learned it at all. It is `she-knows-his-voice` now, an evening card, and
   both roads reach it. **It is private by physics** — the bible says a shard *"speaks ONLY
   as a private bone-hum to a carrier in sustained skin contact"* and *"can never address a
   room"* — so it happens inside one closed hand while the family argues two feet away, and
   she stops herself with the clock running: *"Ask me after. ...If there is an after."* The
   landing is where she finishes it, which is what keeps it from being one scene twice.
2. **Both landings offered to pull a sheet off a dead frame, and there was no card.** The
   room's own `where` says *"a dead frame in the corner and nobody willing to be the one who
   moves it"*. `the-dead-frame` is Vic's: a ripperdoc's post-mortem on a self-extraction,
   and the second take is the whole vow in four words — *bench, hour, lamp, person*.
3. **"Ask Vic where a chassis like that even comes from" is CUT**, and the word is the
   reason: the room's `never` says *the chassis is not mentioned*, and night 15 is the night
   a chassis comes up through Hesta's floor.

Plus `hestas-door` — the beat's entire premise is that a dying man in **another city** heard
there is a door here held open with a brick, and nobody had ever asked her how that happened.
She will not take the brick out, and the reason is the best line in the room: the story is
already gone, so closing the door does not call it back, it only turns the map into a lie
somebody walks a hundred miles to.

**A FALSE FIRE WAS FIXED BY CHANGING THE SENTENCE, NOT THE RULE.** A new narration line ran
*"your hand has gone stiff"* and `death` certified a killing on it — `DEATH_VERBS` carries a
bare "gone", `GONE_SOFT` forgives gone quiet/still/cold and not gone stiff, and "her" and
"she" sit inside the proximity window. Widening `GONE_SOFT` for one sentence is exactly the
move the corpus has overruled three times. The line is now *"your hand has closed without
asking you"*.

**AND ONE WORLD QUESTION IS STILL OPEN, DELIBERATELY NOT INVENTED.** The book never says
**how Nine heard anything inside the farm.** She was in nobody's hand there, and a shard
across a room is a stone. Night 14 did not need the answer and does not give one — she
simply knows the voice — but **`a3-dreamers` (29) walks the family into a room full of
shelved people and will need it.** It is the author's to rule.

### THE COLD OPENS ARE DONE (v5.32.0) — and there were 72 of them, not 64

**Every night opens on a staged passage and two clickable lines. All 72 are now wired to a
card by name, an `id` is on all 175 night cards, and the sweep drives every row every
release.** Before: **14 of the 36 openings gave ONE answer to TWO different questions.**
After: none, and every row deals the card it names — 72 of 72, driven, not read.

**THE COUNT WAS WRONG IN THIS FILE AND THE MISCOUNT IS THE LESSON.** It said 64 rows across
33 nights. It is 72 across 36 openings, because **`SEASON_OPENS` exists**: the PREMIERE,
which on the first night of Books Two and Three *replaces* the beat's own opening. Two
books, two variants each, four rows a book. And `playPremiere` did not call `wireRail` at
all — it handed bare strings to `railFor` — so **the two openings that introduce a whole
book were the two the wiring could not reach.** One line of engine work, and the previous
brief's "NO ENGINE WORK" was wrong because it had only hunted one reader.

**It was found by the splice refusing to run.** The scripted wiring asserted one source
anchor per row and found THREE for `a3-evict`'s — its opening row is written out again,
word for word, in both premiere variants. **An assertion that the anchor is unique is worth
more than any amount of reading.**

**The other reader that had to learn the shape: `wbReach`.** It resolved every staged row —
openings included — against the ROOM deck, because landings wire against the room. An
opening wires against the BEAT. The day the openings were wired it would have called all 72
of them broken and been believed. **`playOpening` and `playLanding` have always passed
different decks; the one function that joined them up read one table for both.**

**Ten lines were re-aimed rather than answered with a new card**, because a night at
`budget + 2` cannot absorb one. Three of those were real defects rather than taste:

1. **`a2-seven`'s opening asked THREE a question on a night Three is not in the cast** —
   she arrives two nights later — and the number it asked for had been said out loud by Vic
   four lines above. Now it asks Vic.
2. **`a2-mirren`'s opening asked what is in the basket**, which its full deck cannot
   answer — while two lines above, Pia asks out loud whether there is a thing you say over
   somebody, and nothing was offering to answer *her*. The row now does.
3. **`a3-descent`'s opening offered to open Hesta's bag**, which is paid off two nights
   later at the Principal's door. A row offering to open it there would have spent the seed
   with nothing behind it.

**AND THE DRIFT NET FOUND THE CASTING ERROR BY WATCHING A NAME GO QUIET.** `named:Three`
stopped firing on `a2-seven/opens0/r1`; that silence *is* the fault being fixed. Second time
in three waves (the first was `a2-choir`'s earshot fault). **A predicate going silent is
worth as much attention as one firing.**

**Two new sweep rows** drive the whole thing every release: *"every night's opening line
deals the card it names"* and *"no night offers two questions and answers only one of
them"*, both proved against the openings as bare strings. Sweep is **63 PROVED of 82**.

### `a2-mirren` IS DONE (v5.31.0) — and the night was short of three things it had already put on the page

**One night per wave from here** (ruled 2026-08-16). Nights 11 and 12 were paired because
they are one unbroken action; 13 and 14 are not.

Its evening deck was already full at 6 of 6, so this was purely a room wave: **3 cards to 7,
a second take on every one, both landings wired.** 90 new lines; corpus 7,087 → **7,177**.

**THE THREE HOLES WERE ALL VISIBLE FROM THE BEAT'S OWN PAGES, and that is now three waves
running.** The law from `a2-door` keeps paying: *look for what the night is short OF before
topping it up.*

1. **A wire rang in both landings and nothing was behind it.** Both `lands` and `landsHard`
   end on *"Somebody's wire goes off on the walk back. It rings twice, stops, and rings
   again, and nobody has that number any more"*, and **both landing rails offered to answer
   it** — three of the six rows were about that wire. There was no card. `the-wire` now
   says what it actually is: a receiver's handset walking its own route because nobody
   switched it off, with nothing at the far end. **That is the same sentence as the hunt
   they ended two hours ago, pointed the other way**, and nobody in the scene says so.
2. **Nine had no card in this room** — on the night the family learns how to bury somebody,
   and she is the one who cannot be. She asks the practical question at the graveside in
   the beat (*"Will anybody be able to find it? After."*) and the room never gave her a
   second one. `nothing-to-bury` is hers.
3. **The beat's own canon says *"Mirren's name goes first. On every cairn this family ever
   builds, Mirren's name goes first"* and nothing anywhere earned it.** `whose-name-goes-first`
   does now — and its second take is the rule the night is named for: **a cairn has no top.
   It is a count, not a monument; it goes up; the day it has a top is the day the family
   stopped coming out here.**

Plus `the-basket`, the small one this room badly needed — Hesta's opening line is *"a burial
is a meal with a hole in the ground attached"* and the basket was never mentioned again by
anybody. Nobody ate a thing, she expected exactly that, and it goes on the counter
uncovered and is gone by teatime.

**The fences held.** Pia's background stays blank. Mirren does not speak, appear, or get
heard — the wire has nothing on it. And `vow-in-practice`'s second take **notices that the
vow as spoken has no boundary in it and refuses to put one in**, because whether it covers
somebody who is not theirs is night 14's entire question.

**AND THE SECOND LAW WITH HER NAME ON IT IS NOT IN THIS NIGHT — ruled 2026-08-16.** The
bible lists the **Mirren Doctrine — *machines serve, never harvest*** among the laws the
family may write, and says her grave is where it comes from. It is deliberately **not** at
the cairn. **It belongs on night 19 (`a2-choir`), once they know what the harvesting
actually is** — it reads as an answer there and as an invention at a graveside, and the
morning of the burial already carries one law. *Night 19 is a FINISHED night, so this is a
reopening, not a fresh room: it goes in as a follow-up edit when that wave comes round, and
it must be written as the family reaching back to her grave for the name, not as somebody
inventing a doctrine in Hesta's back room.*

## THE NEXT WAVE — and it is still a fork the author has to call

The nights get written in order, and the order says the next thing is **the capture**.
Two candidates, and they are not the same size of job. **(B) below is now DONE** — it was
taken at v5.28.0 and finished at v5.29.0 — so the live question is (A) against `a2-law`.

**(A) THE CAPTURE BEAT — a whole new night that does not exist.** The bible: *"THE CAPTURE
IS ITS OWN BEAT, between a2-choir and a2-annul: the ambush, what it costs, and a Choir
officer in a shack with a recovery team already looking. It is currently missing entirely
and the annulment reads as assumed."* Everything after it currently assumes a capture the
book never stages — night 20 opens with Five already taken alive and nobody ever took it.
**THE STRUCTURAL COST, AND IT IS THE REAL QUESTION: adding a beat means inserting into
`SPINE`, and `beatIdx` is a POSITION that live save files hold.** Every index at or after
the insertion point shifts, and a save loaded against the new spine resumes on the wrong
night. Appending at the end is free; inserting in the middle is not. It needs either a
save migration keyed on beat id, or the beat appended and the ORDER held somewhere other
than the array index. That is engine work before a word gets written.

**(B) `a2-annul` REPAIRS — DONE at v5.28.0, and its room DONE at v5.29.0.** Kept here
because the reasoning is still the model for the next one of these. No new
structure, all rewriting: `aim`, `exits[0]`, `exits[2]`, `walkLine`, `walks[0]`, `goal`,
`where` and `topics[0]` are all built around **holding a body still**, and the bible says
the family does not perform a forced removal — that is the one thing that would make them
the Choir. Five is ASKED, and consents believing it is about to die. And `topics[0]` has
Three explaining the method start to finish, when the bible says she spent years and could
not find it: the method is steps in Vic's file, read out by the mind in the housing, and
**neither Three nor the file is enough alone.** Doing (B) first makes (A) cheaper, because
the repaired night says what the capture has to have cost.

**Recommendation: (B) first.** It is bounded, it is pure writing, and it retires the last
night in Book Two that actively contradicts the settled bible.

## Two laws that arrived with the shuffle (v5.18.0)

**A BEAT DEALS ITS CARDS IN A DIFFERENT ORDER EVERY RUN.** Same order all through one run,
seeded off the run slug exactly as `pickVariant` is. Rooms are NOT shuffled — they have no
clock, so a player who stays gets the whole deck anyway, and their authored order is doing
real work. Two consequences you must write for:

1. **A beat's anchor must be named by MORE THAN ONE card.** An anchor is a name that has to
   reach the screen before the gate counts. Under the old fixed order, a single card naming
   it was guaranteed to be dealt; now it is luck. `a2-mirren` failed this the moment the
   shuffle went in — one card named her, and it was the night whose entire subject is
   saying her name aloud. The sweep row "every beat's anchors can be earned" catches it.
2. **Order is not a way to sequence a scene.** If card B only makes sense after card A, say
   so: `after:"card-a"` on B. It names ids, not positions, so it survives the append-only
   law, and B is neither offered nor dealt until A has played — asking for B by name deals
   A instead, which is usually the right scene anyway. A landing rail naming a card by id is
   NOT gated: an explicit instruction from the author is obeyed.

**And the ceiling this exposed: `budget + 2` is exactly the most cards a beat can carry and
still show all of them.** A beat gives `budget` turns and the row shows two unspent at a
time, so at `budget + 3` cards start being unreachable outright. Measured, not reasoned:
148 of 151 beat cards are offerable, and the three that are not are the three nights sitting
at seven cards.

## What a FINISHED room means

- **7+ cards** in the beat's `room.topics` (three was the old default; more is better —
  he took all eight candidates for `a1-fare`)
- **a second take on every card** — `takes:[[ ... ]]`. Asked twice, they go FURTHER. The
  first take is what they tell anybody; the second is what they tell somebody who asked
  again. It must still respect the card's `holds`.
- **an `id` on every card** — kebab-case, unique within its deck
- **both landing rows wired** — `rail:[{line:"...", cards:["id","id","id"]}]` on the
  beat's `lands` and `landsHard`. Order is preference; the row binds the first unspent.
  **A LANDING RAIL IS THREE ROWS AND NO MORE**: `playAuthored` ends on
  `V.rail.slice(0, 3)`, so a fourth row is written, counted by the board as a cut row,
  and never once seen. Spend all three on cards, or spend one on a knock — not both.
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
| `a2-door` | 15 | The Open Door. The tin, the thimble, one true sentence a year |
| `a2-chassis` | 25 | **Deepest room in the game.** The fork, the high cluster, the recital, the proceeding. 7 cards go three layers deep |
| `a2-three` | 7 | The long table, morning. The years she could not find it, the name she refuses, the one who did not survive, the treaty over the chair |
| `a2-housing` | 10 | The long table, night 17. The document nobody opens all evening |
| `a2-manual` | 10 | The long table, night 18. Being a key, the mug on page four, standing up on purpose |
| `a2-choir` | 7 | The long table at four in the morning, night 19. The name of the one they took out of Three, the handwriting on the forms, the page Vic will not put down |
| `a2-annul` | 7 | The shack step at dawn, night 20. Five still in the world with no form for it, agreed-or-settled, the one thing she never learned, eleven pages carried for years |
| `a2-ground` | 7 | A dry corner of the flooded undercroft, night 11. The napkin with all four crossed out, the door that stays open, the thing under the street, and a twelve-year-old asking to be in the room |
| `a2-hand` | 7 | The marsh edge before dawn, night 12. A man checking the ground three times, fifteen hundred Tuesdays, whether it really was all of us, and the height the fog stops at |
| `a2-mirren` | 7 | The walk back from the cairn, night 13. A wire ringing with nothing on it, a mind asking what her own grave would be, whose name goes at the bottom of every cairn, and a basket nobody touched |

**And at v5.27.0 the two richest nights in the book finally counted as finished.**
`a2-door` (16 family cards) and `a2-chassis` (25) had been sitting one count short for
weeks, both for the same reason: their MAIN EVENING was four cards where the budget wants
six. Two cards each closed them — and both holes turned out to be real rather than
arithmetic. `a2-door`'s opening has Nine ask out loud *"am I a coat pocket again tonight?"*
and its own rail offers to answer her, and until now there was nothing for that line to
reach. `a2-chassis` had **no card for Seven at all** on the night his own life is on the
table. **When a night is short on cards, look for what it is short OF before topping it
up: twice out of two, the missing card was the one the night was already asking for.**

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
| `a2-chassis` | "the cook" — a new body, floorboards up | **The Open Door** | **7 cards** — recital cluster in, 9 ruled subjects still to write |
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

### `a2-chassis` — WHERE IT IS AND WHAT IS NEXT

Shipped at v5.1.0: the recital cluster, **the first forked cards in the game**. Shipped at
v5.2.0: **Nine's branch**. The room is now **12 cards — 7 live on Seven's path, 8 on Nine's**,
which is a main road and a main road, as ruled.

Nine's five, all `fork:"Nine"`: `nine-asks` (the tin reaches her and she will not put a hand
out for it, because nobody has said out loud that it is hers) · `nine-first-hour` (the peak
on this branch — she does not go grand, she goes *precise*, and starts reading the whole
family off their own voices) · `why-it-hits-her` (Vic's design answer, plus the half that is
hers alone: Seven had a body once and knows what a normal amount of a room feels like; she
has never had a calibration in her life) · `seven-on-the-cloth` (the inversion — he is the
shard in the hand now, he is glad, and Nine refuses to let him be gracious about it) ·
`nine-morning-after` (she did not sleep, because nobody told her that stopping is a thing you
have to start).

**WHERE SEVEN IS ON NINE'S BRANCH — settled, and it was wrong in the file.** He is a **carried
shard** at that table: out of the failing frame, on a cloth, in a hand. He is **not** in the
courier's skull. Three places already said so — the beat's own `never` (*"nobody is seated in
the courier's skull in this scene… it is a later night"*), the F4 SYMMETRY ruling in the
engine, and `a2-housing`, which is the beat that *reveals* the housing exists. Only
`canonAlt` still said "seated the same night", and `mergeCanon` makes `canonAlt` true at beat
close — so it set the housing two beats before the courier learns he has one. Repaired at
v5.2.0. **If you are ever about to write this branch: he is carried.**

**Shipped at v5.3.0 — the room is now 24 cards: 19 live on Seven's road, 16 on Nine's,
11 shared.** The high cluster is the biggest part of it, as ruled 2026-08-15: *"a full
family gathering... everybody laughing and on the floor except Seven."*

- **The high cluster** (`pia-cross-examines`, `vic-joins-in`, `nine-heckles`, plus the two
  unforked ones): Pia conducts a formal PROCEEDING with a notebook and a sealed verdict.
  **Deepened at v5.5.0, ruled: lean into it.** She asks what a guard is, what peril is,
  what a beat is, and he answers with **the machinery this book is built out of — without
  ever naming a game.** A guard is a thing told what must never happen and left alone in
  the dark with it for years. Peril is the interval in which the bad thing is still
  deciding. A beat is a night that is allowed to change something. The family hears a man
  talking rubbish about departments; the reader hears the architecture. **Keep it inside
  the fiction if this is ever revised** — the moment he says "game" the scene loses its
  sincerity, and the sincere turn at the end ("you can always feel one starting… saying it
  is how you spend it") is what stops it being only a joke ·
  Vic has had a couple and is now WORSE than the robot, with his hand on a cabbage · Nine
  keeps the score from the pocket (*"He has said the word THRESHOLD twenty-two times"*) and
  will not adjudicate quotations · **`the-stupid-argument`**, which is the emotional load
  of the whole night: they row about a saucepan lid, and it is the first argument this
  family has had that was not about whether somebody would be alive on Tuesday. Nobody says
  that out loud, because it would spoil it · **`hesta-sits-down`**, the host off duty for
  the first time, eleven years of laying out too much cutlery on the off chance.
- **The ruled subjects**: `the-face` · `the-frame-in-the-corner` (the thumb-width hole in
  the back of a neck, seen once and then covered) · `vic-after` · `the-empty-plate` ·
  `does-anybody-owe` (*"a debt is a leash with a nicer name"*) · `the-boards-still-up` ·
  `nine-watching` (fourteen times, and what came a second and a half after each).

**WRITE THE ONE WITH THE HANDS, NOT THE NAME.** Eight of those twelve carry **no fork**,
because they were written body-neutral - "whoever took it", "the one who cannot eat" - so a
single card serves both roads. Only fork a card when it genuinely cannot exist on the other
road. This is the pattern to copy for every remaining room.

**"WHAT HE WAS ON THE LISTS" STAYS SEALED — RULED 2026-08-15, FINAL.** It was refused at
v5.3.0, taken back to the author, and he ruled: **leave it sealed.** `a2-seven`'s never
still holds — the work he did for the Choir is never detailed, no names, no columns, no
cases. *How he got out* is his to tell and he tells it; *what he did* is the hole in him
that the family steps around, and it is stronger unspoken. **Do not re-open this in a later
wave.** The original refusal, for the record:

**ONE RULED SUBJECT WAS REFUSED, AND IT NEEDS HIS RULING.** *"What he was on the lists"* is
still forbidden: `a2-seven`'s never seals **the work he did for the Choir** - names, columns,
what a clerk of theirs actually does. v5.0.0 narrowed that never to unlock *how he got out*
and left the work sealed on purpose. A ruled subject does not outrank a never; it goes back
to the author. **Open question for him: unseal the work, or leave it sealed for good?**

**Next wave, in order:**

1. **DONE at v5.7.0. THE ROOM IS FINISHED.** Second takes on all 25 cards (v5.6.0 did the
   12 that play on both roads, v5.7.0 the 13 forked), third takes on seven, both landings
   wired. Nothing is outstanding in `a2-chassis`. Next room is `a2-law`.
2. Remaining ruled subjects not yet written:
   the face he chose · the frame in the corner · what eating is actually like · the tracker
   scar · Nine watching him in it · Pia's assessment of the new housemate · Vic after the
   surgery · Hesta feeding somebody who cannot eat · whether he owes them now · whether Nine
   regrets it · what he was on the lists · the boards still up. Most of these need **no
   fork at all** — write *the one with the hands*, not the name, and one card serves both
   roads. That takes the room to the 15–16 he asked for.
**A HOLD CAN REFUSE A SECOND TAKE, AND THAT IS THE BETTER CARD.** Two of them did.
`the-frame-in-the-corner` holds *"it is not discussed twice"*; `the-empty-plate` holds
*"she does not explain herself twice"*. Writing a deeper version of either would have spent
the one thing the room was firm about. Both second takes are therefore the REFUSAL, with
something else given instead — Vic on what the frame did, and the plate answer arriving
sideways from the wrong person. Reuse this whenever a card's hold and its second take
disagree: the hold wins, and the refusal is the scene.

**THE BRANCH LIE, AND HOW TO FIND THE NEXT ONE.** `how-the-other-one` was UNFORKED, so it
dealt on both roads — and Nine says *"he knows what I gave"* in it, which is only true when
she is the one who gave. On Nine's road she took the body and sat there thanking herself.
Now `fork:"Seven"`, mirrored by `how-the-other-one-nine` **appended at the end of the deck**
(positions live in save files — never insert, never reorder). The check that found it is
`scratchpad/branchlie.js`: walk every card live on a branch and test who the SPEAKER is
against what they claim. **Run it on every room that has a fork.** An unforked card is a
promise that nothing in it depends on which road the run took, and that promise is easy to
break by accident and invisible to read.

**His standing note on the recital:** *"the story's peak moment and it should have the best
writing."* The version that shipped is the whole family — Pia under the table making a noise
like a kettle, Vic agreeing with him and furious about it, Hesta putting the cloth down and
not laughing, Nine unable to laugh and saying so, and Seven arriving somewhere sincere at
the end and stopping. If it is ever revised, that shape is the brief.

**TWO SMOKE SCENES, AND THE SECOND MUST NOT REPEAT THE FIRST.** The Architect spotted this
before it was written: `a2-door` already spends four of its fifteen cards on the tin and the
drink, and `a2-chassis` is going to have its own session. Same failure mode as the name
conversation across `a1-chase` and `a1-turn` — read that ruling too. The division:

| | night 9 — `a2-door` OWNS | night 15 — `a2-chassis` OWNS |
|---|---|---|
| the tin | asking properly; the whole name said out loud; where it lives; "the GOOD kind" | the tin is furniture by now — **no ceremony, no re-explaining** |
| the rules | the etiquette: passed not taken, say what it is for, nobody alone in this building | **Seven breaks the etiquette instantly**, because he has never had a body and does not know there are rules |
| the drink | Pia's thimble, the shed, "you do this ON PURPOSE?" | Pia has a NEW joke, and it is about him |
| the body | Nine cannot join, and the table describes the food to her instead | **Nine watches somebody else be delighted in the body she gave away** |
| the comic engine | four adults getting silly in front of a scathing twelve-year-old | **a mind two hours old in a body whose senses take a taste, not a lungful** |

**Short on ceremony, long on Seven.** If a line in `a2-chassis` could have been said on night
nine, it belongs on night nine.

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
Seven or keep it. If she keeps it, Seven comes out of the failing frame that night and is
**carried — a shard on a cloth, in a hand** — until `a2-housing` finds him a room two beats
later. Either way he has **no body at all** on that path, so he cannot smoke, and the scene
as briefed does not exist on it. (He is **not** in the courier's skull yet. See the
`canonAlt` repair above — the file got this wrong in one place and it shipped for a while.)

Asked directly, the author ruled **both branches fully written**: Seven's recital on
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

## The sealed-fact lint — shipped v5.4.0

**A canon line may not state a fact that a LATER beat exists to reveal.** `mergeCanon`
merges `canon`/`canonAlt` into run canon at beat close, so such a line is not describing
the night — it is asserting the twist is already out.

It exists because that exact bug shipped at v5.1.0 and was found by hand. And on its first
run it found the **second half of the same bug**: the hand pass had repaired `a2-chassis`'s
`canonAlt` and left the identical claim sitting in the same beat's `goal`, four lines above
a `never` that forbids it. One field away, and nobody read it.

Five sealed facts × six fields (the whole canon family, plus `goal`) × every beat before its
reveal: the skull housing (`a2-housing`) · the manual and the courier as a key (`a2-manual`)
· what the Choir actually is (`a2-choir`) · the founders' lost child (`a3-founding`) · Vic
building the housing without asking (`a3-vic`).

**Adding one:** put it in `SEALED_FACTS` with the beat that reveals it and a matcher tight
enough to miss the setup and catch the assertion. `goal` is checked on purpose — it is not
merged, but the DM reads it as the night's brief, and a brief that names the twist is a
twist the DM can spend early.

**The lesson, and it is the one that keeps recurring:** an engine ruling is not finished
until the prose that disagrees with it has been hunted. Reading has never once caught this
class of thing. Build the mechanism.

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

**TWO WAYS A HARNESS GOES BLIND ON SECOND TAKES — both were live at v5.6.0.**

1. **A walker that reads `t.plays` only.** `drive_room.js` checked speakers, empty text and
   the bodiless fence on take one and reported on the whole card: twelve new takes and 109
   blocks were checked by nothing, and it printed ALL CLEAN. It now walks
   `[t.plays].concat(t.takes || [])`. Any new check must do the same.
2. **`pickTopic` does not lap.** When every card is spent it replays one card for ever.
   Only **`pickTopicFresh`** rolls the room over, and only for a key containing `"|room"`.
   A driver that clears `topicSpent` by hand proves the deck deals distinctly and **nothing
   whatsoever** about takes. `scratchpad/drive_lap.js` does it properly: deal the whole
   deck, ask once more, assert `topicLap` went to 1, then assert the text CHANGED for every
   card carrying a take and did NOT change for every card without one.

**A THIRD TAKE IS NOT MORE OF THE SECOND — RULED 2026-08-15.** The Architect ruled that
the best cards go three layers deep. Seven cards in `a2-chassis` do; eighteen do not, and
that is the point. Write a third only where there is a third THING, not a longer version
of the second. `takeForLap` clamps at a card's last layer, so a two-layer card holds at its
second for ever and nothing breaks — which means the honest answer to "is there a third
here?" is usually no. `hesta-sits-down` is the test case: she has given her one thing and
her correction to it, so her third take is her sitting there NOT saying anything while the
room is good at that. A third speech would have made her somebody else.

**WIRING A LANDING: ONLY THREE ROWS EXIST — CORRECTED v5.9.0.** `playAuthored` returns
`V.rail.slice(0, 3)` and `playLanding` hands THAT to `wireRail`. **A fourth row is not
spare; it does not exist.** v5.7.0 shipped five-row landings on `a2-chassis` with the two
`knock:true` rows at positions 4 and 5, so they never reached a player at all. The shape
is **two carded rows and one knock row**, which is what `a1-hum` has always had.

And the thing I got wrong twice: **a landing always wires against a FRESH deck.**
`playLanding` is called once per beat, guarded by `beatJustCleared`, at the moment the
beat clears — which is *before* the family room is played. So "the landing empties on a
spent deck" cannot happen, and the nine rooms I reported as stranding players were not.
The knock row is belt-and-braces, not a fix for a live bug. `scratchpad/landing_audit.js`
tests the invariants that do hold, across every beat: at most 3 rows authored, at least
one row surviving on a fresh deck, and no row dealing an off-branch card.

**THREE HARNESSES LIED THIS SESSION, ALL THE SAME WAY: they exercised a path the game does
not take.** `drive_room.js` walked `t.plays` and skipped `takes`. `drive_lap.js` called
`pickTopic`, which never laps, instead of `pickTopicFresh`. `drive_lap3.js` called
`wireRail` on a raw rail array instead of `rail.slice(0, 3)`. Each printed ALL CLEAN.
**Before trusting a new check, find the real caller and copy what it passes in.**

**THE PRESSURE BLOCK: BUDGET + 2 CARDS — RULED 2026-08-16.** The beat's own deck is not
the family room and does not lap: it has a budget and an ending. The forced close lands on
`budget + 1`, so a player who stalls every turn needs `budget + 1` cards to reach the red
without a repeat, and the author ruled **budget + 2** — one spare. For the usual
`budget:4` beat that is **6 cards** where nearly all of them have 4. Keep them SMALL:
these are working rooms, lingering has a cost, and the point is only that a stalling
player always has something fresh to spend so the night closes on a red naturally rather
than on house filler.

Measured at v5.7.0: **26 of the 33 beats have fewer beat cards than the forced-close turn
count.** Typical shape is budget 4 / force 5 / 4 cards. Already long enough: `a1-hum` (7),
`a1-chase` (6), `a1-vic` (6), `a2-three` (6), `a2-seven` (5). Worst, 2 short each:
`a1-turn`, `a2-hand`, `a2-turn`, `a3-granny`. Re-measure with the audit in this file
rather than trusting the numbers above.

**THE WAY OUT OF FAMILY TIME IS A BUTTON, NOT A CARD.** TAKE THE NIGHT ON is rendered into
`boardbox` by `renderSlackDoor`, outside the choice list, and `openSlackDoor()` is called
unconditionally the moment the room opens. It does not depend on any card being wired or
any deck having cards left — which is why the nine rooms whose landing rows all drop on a
spent deck are not stranding anybody. Do not re-introduce a countdown: v4.82.0 removed it
because thirty of thirty-three rooms held fewer than seven cards, so the shape was three
real questions and then four turns of hollow stalls waiting on a timer.

## The five traps that catch me EVERY room

Written into the fixture ledger as well. All five are invisible when reading; only the
sweep finds them:

1. **Counting prose.** A bare number in dialogue reads as a character name — Three, Five,
   Seven, Nine are all people. *"Three places, two noes and a yes"*, *"Five: decide
   before you are tired"*, *"Dead. So: three."* all fired. **Write numbers as words that
   are not names** ("the fifth is", "two noes and a yes", "So: us").
   **A DURATION IS A NUMBER TOO (v5.29.0).** *"a man came back up out of nine years"* fired
   `breach`, because the net reads BACK UP with a number-name inside twenty-four characters
   as a mind being copied through the air. Nothing was being copied; a man was surfacing.
   Nine years, five minutes, three weeks — the trap does not care that it is a quantity.
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
- **THREE FILES ARE SYNTAX-CHECKED BEFORE A PUSH FROM v5.39.0**, not one:
  `node --check corpus.js`, `node --check veldt-menu.js`, and the extracted inline body of
  `index.html`. The corpus is where the writing goes, so it is the one most likely to be
  broken by a splice and the one whose breakage is loudest.
- **INDEX.HTML HAS TWO `<script>` TAGS FROM v5.34.0, so the extraction step changed.** The
  old recipe took `indexOf('<script>')` to `lastIndexOf('</script>')`, and the last close is
  now the Veldt skin's, not the game's — it swallowed the game's own closing tag and
  `node --check` died on `Unexpected token '<'`. Anchor on the **first** close instead:
  `var start = s.indexOf('>', s.indexOf('<script>')) + 1; var end = s.indexOf('</script>', start);`
  It fails loudly rather than silently, but it fails.
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
  watching") pointing at `TAKE THE NIGHT ON`. Deferred by the author until the written
  side settles.
