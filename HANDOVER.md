# Handover — where we are, and the rules that were learned the hard way

*This file holds **live state and standing rules only**. What is still to do lives in
`OUTSTANDING.md`. Nothing here is a record of finished work — if a thing is done, it is
in the commit that did it, and this file forgets it.*

---

## WHERE WE ARE

**v5.83.0. All 33 nights written. Sweep 76 PROVED of 101, 0 FAILED. Tree clean, pushed.**

The authoring phase is over. **We are in the polishing pass**, and since 2026-08-17 it runs
as **book-wide passes rather than night-waves** — one fault, one tool, one release. The
ordered list is in `OUTSTANDING.md` and each pass is finishable in a sitting.

**TWO DEBTS WERE RETIRED BY THE AUTHOR AND MUST NOT COME BACK: not every card needs a second
take**, and `a2-chassis`'s 25 take-lines are being lived with. **Never add a second take to a
beat that is short by nature**, and **never rewrite a second take that already exists** —
the scold fix adds narration in front of them, it does not touch his lines.

**The game is five files.**

| file | what it is |
|---|---|
| `index.html` | engine, UI and the sweep — ~24,900 lines |
| `corpus.js` | **every authored word**: BIBLE, SPINE, SCENEBOOK, TEASES, REVEAL_LEDGER |
| `veldt-menu.js` + `veldt-skin.css` | the skin: title art, menu, feed styling |
| `editor.html` | the card editor. Not loaded by the game; open it yourself |
| `sw.js` | the offline shell. **`corpus.js` is the one entry whose absence is not cosmetic** |

All classic scripts in document order — no JSON, no fetch, no modules, nothing async, so
`file://` still works. **The writing goes in `corpus.js`.**

**`var BIBLE` in `corpus.js` is the single source of world truth** — the founding, the cast,
the annulment, the rules. Read it before asserting anything about the world is missing.
`tools-gen-world.js` renders it as a document if you want one; the document is not kept in
the repo, because a second copy of the bible drifted within a day the last time there was one.

**The in-world Architect is a dead founder, not the author.** Say "the author".

---

## → IF YOU ARE PICKING THIS UP COLD, START HERE

**PASS 4 IS FINISHED (v5.83.0).** Every night is at or over the 35% floor except the two
excluded on purpose: **`a2-chassis`, which pass 5 takes past 50% anyway, and `a3-stone`,
which is the funeral.** ~470 blocks, **spoken 4,656 unchanged across all nine releases**,
book-wide narration 29.3% → 34.2%, median night 31% → 35.6%.

**NEXT IS PASS 5: the two pinned nights past 50%** — `a2-door` (37.5%) and `a2-chassis`
(20.6%, and it is 174 blocks on its own). Then pass 6, the closings audit, **which is a
REPORT before it is a wave** — the author rules the mismatches before a word is written.

**AND `floors.js` PRINTS TWO NUMBERS NOW. THE FIRST ONE GOVERNS.** It used to count the
TEETH — peril stages and death scenes, almost pure narration, which most players never
see — and every night with teeth read up to three points high. **Four nights were called
done that were not.** Found by making it disagree with a second reader. A night whose deck
runs dry does not become fine because its death scene is narration.

**A pass-4 night takes about twenty minutes and needs nothing in context but this block.**

```
node scratchpad/floors.js                 # pick the lowest night not yet done
node scratchpad/layers.js <beat> 4        # its layers by longest unbroken spoken run
node scratchpad/dumplayer.js <beat> <id> <layer> …    # dump them WHOLE, with indices
# write a spec: [{id, layer:"plays"|0|1…, after:<index>, narr:"…"}]
node scratchpad/breathe.js <beat> spec.json
node scratchpad/floors.js | grep <beat>   # repeat until 35%+
```

**THE RULES THAT MAKE IT GO WRONG IF IGNORED:**
- **RE-DUMP BETWEEN BATCHES ON THE SAME LAYER.** Every insert shifts the indices behind it.
  `breathe.js` refuses rather than guessing, but only after you have wasted the batch.
- **An ambiguous anchor means write one block fewer.** Pia's bare *"No."* appears five times.
- **Two to three blocks per layer, aimed at the longest runs.** Do not spread evenly.
- **Check `debts.js | grep FLOOR` after every batch.** Spoken must stay at **4,656**.
- **Then: `grammar.js`, browser `?selftest`, fixture by delta + ledger, stamp, drive, push.**

**THE FOUR WAYS MY OWN NEW NARRATION HAS FIRED A PREDICATE**, all of them this pass:
a number at a sentence head (*"Nine years…"*, *"Three clauses…"*) · a DURATION, which is a
number too (*"he spent nine years…"* fired `breach`) · **`closed hand` / `in your pocket`,
which MOVE THE SHARD** · and narration doing a character's own reveal (*"a hundred and
thirty years"* — twice, both the Principal). **Read that list before writing, not after.**

**NOT EVERY NEW FIRE IS A FAULT.** Narration naming Three on Three's own card is honest.
The test is whether the sentence meant to do it.

---

## THE LOOP

1. Audit the night. Bring the author a **pick-list** — alternatives, never open questions.
2. He rules the subjects. **The scenes are mine.**
3. Write it, drive it, play it, ship it as one release with the full ritual.
4. **Report in plain English** — no internal vocabulary, describe what a player experiences,
   and name what was **not** driven.

**Waves go act by act, not night by night**, and a wave only stops for a ruling that
genuinely cannot wait. **Never start a room you cannot finish.**

**What he protects:** the running jokes and callbacks, the quiet character work, nothing that
steals a later night, and **comedy, hard**. He has said three times that a scene was too dry
and was right every time.

---

## THE FIVE THINGS THAT MUST NOT HAPPEN

1. **NEVER CLICK NEW GAME.** That is the author's live save; a day-20 run was destroyed that
   way once. **Every wave is played in the rehearsal drawer**: `startRehearsal(beatId, label)`
   in the browser at `http://localhost:8124`. It is pinned to the novel so it never reaches
   the wire and costs no key, and every save routes to `mud-reh-runs`. Dying in the drawer is
   free — call `startRehearsal` again. Check `localStorage["mud-runs"]` is byte-identical
   before and after anyway.
2. **NEVER READ OR WRITE `localStorage["mud-settings"]`.** The author's API key lives in it.
   Setting `settings.key=""` and saving destroyed it once. He pastes keys himself.
3. **SAVES ARE BACKWARD COMPATIBLE.** Real players are mid-run. `topicSpent`, `railDeal`,
   `beatIdx` and every counter store **positions**. **Append cards at the end; never insert,
   reorder or delete.** An off-branch card stays where it is and is treated as spent.
4. **A WAVE DOES NOT GET ITS OWN FILE.** No `REPORT-vX.md`, no `AUDIT-vX.md`, no briefs. The
   write-up goes in the commit message, in this file and in `OUTSTANDING.md`, and is spoken
   in chat. Twenty-one such files once accumulated in the repo root and nothing referenced
   any of them. **Scratch work goes in the session scratchpad, never in the repo.**
5. **NOTHING COUNTS UNTIL IT IS REACHED IN PLAY.** An audit that counts
   `(t.takes||[]).length` counts what is **written**, never what is **reached**. Nine waves of
   those called nights finished that were not, and 9,711 written words sat dark for months.

---

## THE RELEASE RITUAL

1. `node scratchpad/precheck.js index.html` — BOM, U+FFFD, mojibake, em dashes, the script
   body, `node --check`, window-global collisions, `$(id)` markup, div balance 229/229.
2. `node --check` on **corpus.js, veldt-menu.js and sw.js**, and the extracted inline body of
   `index.html`. `index.html` has THREE `<script>` tags, so the extractor must anchor on the
   **first** `</script>` — anchor on `\n<script>\n`, because a greedy match swallows the
   skin's closing tag and dies on `Unexpected token '<'`.
3. Browser `?selftest`. **0 FAILED is the bar.**
4. **The drift fixture, by delta, never regenerated**, plus a ledger paragraph above
   `VERDICT_FIXTURE` saying what moved and why. Read every drifted line; any predicate
   drifting is a false positive in the new prose until proven otherwise.
5. Stamp: the banner in `index.html`, `var VERSION_TAG`, and the `CACHE` slug in `sw.js`.
   **A stale slug serves old builds to offline players forever.**
6. `git commit -F <file>` for anything multi-line, then push.
7. **Play it out in the drawer.**

---

## THE WAVE RECIPE

1. **Audit first.** Empty second takes, take-lines and rails that name nobody, bare landing
   rows (**`knock:true` rows are NOT bare** — they are way-forwards and correctly cardless),
   contraction rate **per speaker per card**, narration share, longest unbroken dialogue run,
   and read the night's own `never` / `press` / `here`.
2. **Look for what the night is short OF before topping it up.** Twice out of two, and then
   four waves running, the missing card was the one the night was already asking for — in its
   own landing rails, in its own `goal`, in its own opening.
3. **Contraction pass:** `contract-pass.js <beat> <Who,Who> --apply`, then **dial back for
   WEIGHT, never evenly**. Machine and Principal stay at 0%.
4. **Check the SPREAD, not the night's number** (`spread.js`). A flat night is a night the
   pass was applied to rather than written. Night one's shape is 0% on the working cards and
   100% on the jokes.
5. Write the missing second takes. **`takes` is an array of ARRAYS** — an array of strings
   crashes the whole sweep.
6. Name every rail and take-line, and **re-run the line audit AFTER writing the takes**, not
   only after the naming pass — new take lines are lines, and two of night four's tied with a
   neighbour and lost on authored order.
7. **Run the mannerism scan over the wave's OWN new prose before it ships** —
   `node scratchpad/tic.js <beat>`, and read every hit. This is step seven because the
   narration pass wrote four of night ten's tics itself across three releases and no
   instrument in the project could see it.
8. Sweep, fixture by delta plus ledger, release ritual, push, play it.

**ONE PREDICATE, THREE COPIES — `tic.js`, `contrasts.js` and `ticScan` in `index.html` —
and ANY DISAGREEMENT BETWEEN THEM IS A FINDING.** They have drifted twice and both times
the drift was the discovery: once the scratch tool read 23 blocks the guard could not see,
once it carried a pattern the guard lacked and was quietly the better reader. **Chase the
difference; never just pick one.**

**A DELTA THAT IS ALL MATCHED PAIRS SAID NOTHING NEW.** Inserting a block at position zero
renumbers everything behind it, so the net reports an add and a drop for the same unchanged
sentence. **Check that the pairs really do pair** — a single genuine fire hiding among
fifteen renumberings is the easiest thing in this project to wave through, and one did.

**AND THE THREE BANNED SHAPES, because they arrive under your own hand:** the **contrast**
(*"it is not a rule. It is the shape of a thing"*) · **"which is the whole…"** · the word
**"load-bearing"**. Sweep row (6g7) holds the word at zero and narration at a ceiling that
ratchets down. **When you fix one, give it a DIFFERENT image each time** — twelve
`load-bearing`s were replaced with twelve unlike things on purpose, because a single
replacement applied twelve times is just the next tic.

---

## THE TOOLS

**In the repo:** `editor.html` (proofread and edit `corpus.js` by character range — it never
re-serialises, because the authorial comments live between the data and a read-write-back
tool would delete every one of them silently). `tools-gen-world.js` renders the bible.

**In the session scratchpad**, rebuilt as needed — the useful ones, and what each is for:

| tool | what it answers |
|---|---|
| `layers.js <beat> [minRun]` | every layer by **longest unbroken spoken run**, longest first. This is an ADDRESS, not a score |
| `dumplayer.js <beat> <id> <layer>…` | one layer whole, with indices, **untruncated** |
| `breathe.js <beat> <spec.json>` | insert narration after line N **by index** |
| `addtake.js` / `addline.js` | write a second take / give one its own choice line |
| `allrails.js` | every clickable line in the book — cards, landings, openings, teeth |
| `act.js <beat>` | the whole wave audit for one night |
| `floors.js` | narration share for all 33 nights |
| `spread.js <beat> <Who>` | contraction rate per card |
| `contract-pass.js` / `revert-cards.js` | the contraction pass and its dial-back |
| `grammar.js` | all four contraction refusals over the whole book |
| `tic.js [beat]` | the AI mannerisms, over **every** block including narration |
| `untic.js <spec.json>` | replace exact strings in corpus.js, refusing on any count that is not one |
| `debts.js` | the whole-book debt sheet in one pass |
| `openers.js` / `openwith.js` | takes that open with a mouth already moving, and the beat that fixes them |
| `namer.js [beat]` | choice lines naming nobody, each with the card's OWN answerer and a proposed fix |
| `contrasts.js <beat>` | every spoken contrast, with its speaker, for the per-voice repair |
| `scold.js` | take layers that open with somebody talking straight at the courier |
| `precheck.js <file>` | the release precheck |
| `drive_lap.js` / `landing_audit.js` / `branchlie.js` | deck lapping, landing rails, fork lies |

**Take `cp corpus.js scratchpad/corpus.before-<act>.js` before any pass** so `revert-cards.js`
has something to revert to.

**Probes go in FILES, never `node -e` through bash.** A `\b` passed through a shell → python →
JavaScript chain arrives as a literal backspace character, the regex parses, runs, and returns
a confident zero across 1,181 lines. **A checker that cannot fail is not a checker** — prove
the predicate bites on a deliberately broken copy before believing any zero it reports.

---

## THE TRAPS, EACH OF WHICH HAS COST A WAVE

### The drift net's five costumes

1. **Counting prose.** A bare number reads as a character — Three, Five, Seven and Nine are
   people. *"Three places, two noes and a yes"*, *"Five: decide before you are tired"*,
   *"Seven. Eight if you count the one on the bread board"*, *"Three till six is me"* all
   fired. **A DURATION IS A NUMBER TOO** — *"a man came back up out of nine years"* read as a
   mind being copied through the air. The rule is not "never start on a number": five of this
   cast ARE numbers, so **any sentence where a number does ordinary English work — a count, a
   clock, a shelf, a year — gets read twice by whoever writes it.** Seven costumes so far.
2. **Violence that is NOT happening.** `breachIn` matched "arson" on *"will not burn a laundry
   down"*. Avoid the verb; rewrite to "take a building apart".
3. **Bodies lent to Nine by figure of speech.** `breach` fired on *"her equivalent of clearing
   a throat"*. She has no throat, no breath, no shoulders, no eyes. Describe the hum.
4. **"<NAME> HAS GONE <ADJECTIVE>" IS THE DEATH SHAPE**, and `deathPredicated` is right to
   fire on it. Written three times in this pass alone ("Pia has gone very still", "…the
   particular colour", "…pink"). **Use the present tense.**
5. **WATCH THE POCKET.** *"in your pocket"* is a **verb** to this engine — `shardAfter` reads
   it as Nine being PUT there. Three narration beats in this pass did it, once one beat before
   she is taken out and set on a table. **"Against your chest" moves nobody.** Same trap in
   reverse: anything *put away, tucked, slipped back, stowed* reads as HER, because she is the
   thing this book puts in pockets — name the object in the same clause.

**And the lesson that came with them:** trap 1 caught me again in prose written the same hour
as a ledger paragraph about trap 1. **Re-read this list immediately before writing, every
time** — especially for second takes on cards whose first take was written months earlier.

### The four contraction substitutions the mechanical pass must refuse

All four shipped as bugs. All four are in `contract-pass.js` with the shipped strings as their
tests, and `grammar.js` sweeps the whole book for them.

1. **Clause-final `it is` / `that is` / `there is`.** *"for the tea being the way it's"*. A
   comma ends a clause as hard as a full stop — so do a semicolon, colon, dash and closing
   quote. *"Here it's, and then we go back to metres"* is the one that widened it.
2. **Modal `have to` / `has to` / `had to`.** *"a day before you've to"*.
3. **The pro-form.** *"What you're is somebody people hand things to"*.
4. **Possessive `have`**, and it is the most dangerous, because *"I've been meaning to"* is
   right and sits one word from *"I've one most Tuesdays"*, which is not. A contraction is only
   available when a past participle follows.

**No law in this project reads English. Read every contraction diff by eye.**

**And a law added mid-book never looks backwards** — the clause-final refusal was written on
night 3 and widened on night 2, and night 3's own prose still carried the fault for six
releases. **When a refusal is added, sweep the whole book for it in the same wave.**

### The three ways an index.html splice breaks

*Learned when three scripted splices in a row damaged the file in one session. Every one
passed my own eyes and failed `node --check`.*

1. **A comma after a block that already ended in one.** `[{…},,{…}]` is legal JavaScript,
   passes `node --check`, and leaves an undefined card every walker steps over.
2. **Consuming a bracket that belonged to the enclosing array.** Anchor on the closer itself,
   never on the last line before it.
3. **A segment scan that stops finding its own anchor after the first insert.** Do one insert
   per run, or insert the LAST deck first.

**Count the closers by what the last element is:** a `takes:[[…]]` ending on a dialogue array
needs `"]]]}`; one ending on a narration string needs `"]]}`. **PRINT THE EXACT TEXT FIRST**
and edit against what you printed. **Prefer the Edit tool over a script under about six
insertions** — the scripts were faster and wrong three times running.

### The ways a harness lies

- **It exercises a path the game does not take.** Three did it in one session, each printing
  ALL CLEAN: one walked `t.plays` and skipped `takes`; one called `pickTopic`, which never
  laps, instead of `pickTopicFresh`; one called `wireRail` on a raw rail array instead of
  `rail.slice(0,3)`. **Find the real caller and copy what it passes in.**
- **It runs in a state the game cannot reach.** The landing walker drove with no chassis
  holder, where `cardOnBranch` answers false for both halves of a fork pair, and reported a
  correct row as broken. **Drive both roads.**
- **It measures the scorer instead of the game.** In a room, `sceneRails` writes `railDeal`
  for every line before the row is shown, so a click never touches the keyword scorer.
  Measured across 19 rooms, **164 of 337 lines score onto the wrong card** if the scorer alone
  decides — and no player can reach any of it.
- **It measures from a state the screen was never drawn in.** An opening offers two lines and
  the player clicks ONE; clicking both in sequence spends row one's card. Measured that way
  the book had **zero** duplicate openings; measured correctly it had **fourteen**.
- **It restores from a missing backup, which is a wipe.** A snippet read `window.__bk || {}`
  and deleted every key not in it; a `location.href` between capture and restore cleared
  `window`, so it restored from `{}` and deleted a live run with the wording of a repair.
  **Capture and restore in one page load, and refuse to restore from an empty backup.**
- **It counts one layer.** `lines_n2.js` read only cards, so nine waves of "every choice line
  names its addressee" were claims about part of the book. `allrails.js` reads all of them.
- **It reads a flag that has already been tidied away.** The v4.80 report made four false
  claims and shipped a regression because it checked the forcing flag *after* each turn, and
  the game clears it at the end of every turn.

### The measurement traps

- **A NaN that reaches a canvas coordinate is invisible** — no exception, no console line.
  Guard every division by a measured DOM dimension; an element that is `display:none`
  measures zero, and listeners bound to `window` keep firing while it is hidden.
- **An exception inside a delegated click handler is swallowed.** The writers' board did not
  crash or blank for three releases. It stopped answering.
- **Estimate by measuring the thing, not the gap between two landmarks.** The board and
  rehearsal room were pitched at ~4,000 lines and measured at 939.
- **A surprising anchor count is a reader you have not met.** A wiring script refused to run
  because one row returned three source matches — which is how a whole second set of openings
  got found.

---

## STANDING ENGINE LAWS

**A FORM HAS READERS, AND YOU MUST HUNT ALL OF THEM.** Adding a shape to the book means
finding every function that walks it *before* shipping. It has now bitten five times, and
**the drift net is the reader that is silent about being left out** — a net with a hole
reports the same number as a net without. **A save/restore pair is a reader too**: making
every deck lanes broke five readers, and the worst was a peek that saved `topicSpent`, dealt
a card to see if one was servable, and restored it — never restoring `topicLayer`, so every
peek burned a layer.

**`fork` GATES A CARD. `holder` GATES A BLOCK.** `cardOnBranch` reads `fork` and nothing else.
Three cards said `holder` where they meant `fork`, so the game dealt them on the wrong road,
found no usable variant and served **nothing at all** — a blank lane and a spent turn, with no
error anywhere. **Both readers now read both fields.**

**EVERY WIRED ROW NEEDS ONE UNFORKED ID.** `chassisHolder` is null until night 15 is played,
so on an unsettled run every forked id is off branch and `wireRail` drops the row silently.

**WRITE THE ONE WITH THE HANDS, NOT THE NAME.** Most cards need no `fork:` at all — "whoever
took it", "the one who cannot eat". Only fork a card that genuinely cannot exist on the other
road. **An unforked card is a promise that nothing in it depends on the road**, and that
promise is easy to break by accident and invisible to read — `branchlie.js` finds them.

**THE CLICKABLE LINES LIVE IN FIVE PLACES, NOT THREE.** `rail`, `railAlt` and `railTakes` on
a card; the `rail` rows on every `opens`/`lands`/`landsHard`/`closes` variant; **and
`exits[]` and `walks[]` on the beat itself, which no audit in this project had ever read
until v5.75.0.** The door ends the night and the walk puts the whole job down — they are the
most consequential buttons in the game. **Any audit of "the lines" that does not name all
five is an audit of some of them.**

**A LANDING RAIL IS THREE ROWS AND NO MORE.** `playAuthored` ends on `V.rail.slice(0,3)`. A
fourth row is written, counted by the board, and never once seen. Two carded rows and one
knock. **Three rows may not name one card** — a row whose cards are all spent is dropped, so
three rows about one subject collapse into one question. **One choice, one card.**

**COUNT THE VARIANTS, NOT THE BEATS.** A beat may carry more than one `opens`, `lands` or
`landsHard`, and `playAuthored` picks one at run time. This hid whole scenes from a wiring
wave twice: the premiere that opens Books Two and Three, and `a1-turn`, which has two `lands`
AND two `landsHard` and shipped six unwired rows for nine waves.

**AN OPENING WIRES AGAINST THE NIGHT; A LANDING WIRES AGAINST THE ROOM.** Different decks,
always have been.

**A HARD LANDING IS THE ROAD NOBODY AUDITS.** Both of the worst faults ever found lived in
`landsHard`, which a player reaches only by hesitating. **Run every audit on the hesitation
road too.**

**`budget + 2` IS EXACTLY THE CEILING.** A beat shows two unspent cards a turn and closes at
`budget + 1`, so at `budget + 3` cards go dark outright. Rooms have no ceiling — they lap.

**EVERY DECK IS LANES (v5.59.0).** `advanceCard` keeps a card unspent until its layers are
gone. The beat still never goes *round again* — a lane holds its card until it is finished and
then the deck is honestly dry. **Only the room laps.**

**A BEAT DEALS ITS CARDS IN A DIFFERENT ORDER EVERY RUN**, seeded off the run slug. So **an
anchor must be named by more than one card**, and **growing a beat's deck dilutes its
anchors** — the anchor row went red from adding two good cards. **Order is not a way to
sequence a scene**: use `after:"card-id"`.

**ONE WORD MAY NOT WIN TWO CARDS IN THE SAME DECK.** A rare token (8+ letters, one owner)
earns its card on a typed line alone. **And a character's own name must never sit in a `key`
on a night where every rail names them** — one card quietly won every line in the deck that
way. **Check collisions with `pickTopic` itself, per road**: it gives +2 for a hyphenated
phrase, and a hand-rolled approximation reported false collisions for six waves.

**THE ROOM CANNOT ANSWER WHAT IT CANNOT HEAR.** From `a2-housing` on, one of Nine and Seven is
in the courier's skull. A mind in shard form reaches exactly one person: whoever holds her,
bare-handed. **She never holds a two-way conversation with another character.** The shape is:
she speaks → **narration relays** → the room answers *the relay* → she corrects it. The relay
is never a line of courier dialogue. `earshot` watches for the tell — an agreement or the
resident's name landing straight after the housed one speaks — and it cannot see narration
that simply *asserts* the room heard her.

**MAKE THE HOLDER BAD AT THE RELAY, IN THEIR OWN WAY.** That is the comedy engine: the courier
under-reports and edits himself out of trouble, Pia over-dramatises, Vic flattens everything
into a job, Hesta editorialises. What she said and what the room heard should differ, and she
should mind.

**A CANON LINE MAY NOT STATE A FACT A LATER BEAT EXISTS TO REVEAL.** `SEALED_FACTS` lints the
whole canon family plus `goal` — `goal` on purpose, because the DM reads it as the night's
brief. **`boardleak` catches a later night's TITLE said out loud in the prose.**

**A CHARACTER'S FAMILY IS THE AUTHOR'S TO INVENT** — `breach` enforces it on the kin rule.
**Pia's background stays blank.** Not "she has nobody" — blank, and not to be assumed either way.

**DO NOT NAME A CHARACTER BEFORE THE PLAYER HAS MET THEM.**

**FIX THE SENTENCE, NOT THE RULE.** Widening a detector to admit one sentence is the move the
corpus has overruled four times.

**A PREDICATE GOING SILENT IS WORTH AS MUCH ATTENTION AS ONE FIRING.** Twice now the drift net
has found a fault as a **deletion** — a name that stopped being said.

**AN EMPTY DRIFT DELTA IS THE CORRECT RESULT FOR A NARRATION WAVE.** The net reads for death,
four names, breach and the two shard positions; dread about what an evening costs touches none
of them. A narration wave that moves the fixture has said something about a person or a place
by accident.

**A HOLD CAN REFUSE A SECOND TAKE, AND THAT IS THE BETTER CARD.** When a card's `hold` and its
second take disagree, the hold wins and the refusal is the scene.

**A THIRD TAKE IS NOT MORE OF THE SECOND.** Write one only where there is a third THING.
`takeForLap` clamps at the last layer, so a two-layer card holds for ever and nothing breaks.

**NOTHING IN THE NOVEL IS A CLICKABLE LINE THAT IS NOT A CARD.**

**NOVEL RUNS HAVE NO TYPING BOX.** Every player act is a click. The keyword scorer only
matters at the wild table and in the harnesses.

---

## THE WORLD FACTS THAT ARE NOT IN THE BIBLE

**There are only TWO places in the whole story.** The city — the Veldt, the row, The Open Door,
the drowned market under it. And **Vic's place on the marsh**, which is ONE property: the
safehouse is a farmhouse that lost an argument with the marsh, and the cable shack is *behind*
it. Same address. Mirren's cairn is on the marsh edge nearby; the causeway is the road between
the two. **"The shack" and "the safehouse" are not two locations and never were.**

**The whole row sits on one drowned basement.** The old market is the lid, the stalls' cellars
are the rooms off it, and some are drowned and some are not. `a2-ground` is the flooded half;
`a2-hand` opens at the dry end. **Hesta's cold dry cellar under The Open Door is one of those
rooms** — which is why things keep in it, and **the chassis lives under her floor**. She was
never told what it is.

**Season Two lives at The Open Door.** The warmth is not tied to a building — it is tied to
Hesta being in the room and a pan being on. What is still on the marsh is there for a reason
written into the beat: `a2-mirren` is the cairn because you bury people on the marsh, and
`a2-annul` is Vic's shack because you do not bring a Choir officer taken alive into the row
where your family eats and a twelve-year-old sleeps upstairs. **Hesta's is never compromised**,
and **the marsh house is NOT burned** — the family sleeps there three more times before the
season ends. That refusal is in capitals inside `a2-door`'s `before`, because the wild table
reads `before` and **a gap does not stay empty; whatever sounds plausible fills it.**

**Why Vic picks that roof, and he never says it.** Plan A for getting Nine out was **Mirren**;
the Choir spent her, and the thing hunting the family in `a2-ground` is wearing her. **Plan B
is the chassis.** So when he gathers everyone at The Open Door on day 9 he is walking them to
the body without telling them it is there.

**THE TWO SMOKE SESSIONS MUST NOT REPEAT EACH OTHER.**

| | night 10 — `a2-door` OWNS | night 15 — `a2-chassis` OWNS |
|---|---|---|
| the tin | asking properly; the whole name out loud; where it lives; "the GOOD kind" | furniture by now — **no ceremony, no re-explaining** |
| the rules | the etiquette: passed not taken, nobody alone in this building | **Seven breaks it instantly**, never having had a body |
| the drink | Pia's thimble, the shed, "you do this ON PURPOSE?" | Pia has a NEW joke, and it is about him |
| the body | Nine cannot join; the table describes the food to her | **Nine watches somebody else be delighted in the body she gave away** |
| the engine | four adults getting silly in front of a scathing twelve-year-old | **a mind two hours old in senses that take a taste, not a lungful** |

**If a line in `a2-chassis` could have been said on night nine, it belongs on night nine.**
The same law governs the name conversation across `a1-chase` (the first time) and `a1-turn`
(the return): if either room is edited, read the other first.

**Pia is twelve** and says so in her own mouth. She does not smoke; she gets a thimble and
hates it. **The contrast is the point.**

**Nine contracts exactly twice in the whole of Season One** — *"It's fine. I'm — it's fine."*
at the end of night nine, and the next line is *"That is a sentence somebody taught her."*
**Do not calibrate that away. It is the tell.**

---

## WHEN TO COMPACT

**At the end of a shipped wave, never in the middle of one.** The work gets measurably
sloppier as the context fills — the three splice failures above all happened in the last third
of a long session, on a task that had gone cleanly twice before.

A good moment: a release is pushed, the sweep is green, this file and `OUTSTANDING.md` are
current, and the next wave's brief is written down. **That is the only state a wave is allowed
to end in**, so it is the state this file is in whenever you read this sentence.

**Say so before starting, not after failing**, if a wave will involve more than about six
splices or a new field with readers to hunt and the context is already long.
