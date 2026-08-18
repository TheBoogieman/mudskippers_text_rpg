# Handover — where we are, and the rules that were learned the hard way

*This file holds **live state and standing rules only**. What is still to do lives in
`OUTSTANDING.md`. Nothing here is a record of finished work — if a thing is done, it is
in the commit that did it, and this file forgets it.*

---

## WHERE WE ARE

**v5.96.0. All 33 nights written. Sweep 77 PROVED of 102, 0 FAILED. Tree clean, pushed.**

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

**PASS 5 IS FINISHED (v5.86.0 – v5.89.0). BOTH PINNED NIGHTS ARE DONE.** `a2-door` 44.1% →
**50.5%** (68 blocks); `a2-chassis` 20.6% → **49.8%** (448 blocks). Spoken unmoved on both
the whole way, and the book floor unmoved at 4,656 across all four releases.

**`a2-chassis` LANDED AT 49.8% ON PASS 5 AND CROSSED 50% ON PASS 6** — landing lines count
toward the share, and pass 6 put twelve of them on the night. Both pinned nights are over.
The pass-5 reasoning still stands and is the rule for any future night: The last twelve blocks were
left on purpose: every remaining place a breath could go is either an anchor that appears
twice in the file — `"...What?"`, `"...Right."`, `"You are on the rota."`, a bare `"No."` —
or a comic snap the breath would break. **Write one block fewer rather than force an
ambiguous home.** Two tenths of a percent is not worth four jokes.

**PASS 6 IS FINISHED (v5.90.0 + v5.91.0).**

**THE AUDIT FOUND NO BROKEN CLOSING.** Every landing on all 33 nights, both roads, reads
against what its night was for; not one closes a scene that did not happen; every landing
rail in the book is wired. **What it found instead is SIZE.** Twenty of thirty-three nights
land on exactly five lines — the shape a landing gets when nobody decided otherwise — and
the nights that break it are the ones that *felt* big while being written, not the ones
that *are* big. `a2-chassis` is 1,220 blocks and landed on five. `a3-stone` is 63, the
smallest night in the book on purpose, and lands on nine.

**RULED BY THE AUTHOR, 2026-08-18:** six nights get longer endings — the two pinned, the two
season finales' weak halves, the two season premieres. **Both roads grow, the hard road
stays visibly leaner.** The seven nights that end both roads on the same line **keep the
shared line** — it is the hook into the next night and has to land the same way either way.

**DONE — ALL SIX, v5.90.0 and v5.91.0, 60 landing lines.** `a2-door` 5/5 → 12/8 ·
`a2-chassis` 5/5 → 13/9 · `a1-hum` 15/5 → 15/9 · `a1-turn` 18/8/8/8 → 18/12/11/11 ·
`a2-turn` 8/9/8/8 → 13/12/11/11 · `a3-evict` 5/7/5 → 9/10/8. **No night in the book now
ends smaller than the night it is ending.**

**PASS 7 IS DONE (v5.93.0 + v5.94.0), WHOLE BOOK BY THE AUTHOR'S RULING.** 1,485 swaps.
**Book-wide 19% → 37%**, from the 9% the diagnosis measured. Every speaker on band: Vic 59
(60), Pia 58 (65), Hesta 44 (45), Marek 60 (55), Seven 28 (30), Three 16 (15), Nine 9 (10).
Machine and Principal untouched at 0%. **Mirren untouched at 35% — her alternation between
the law and the intimacy is a deliberate spread and `band-pass.js` is told to leave her
alone by name.** 294 swaps remain and are not worth taking: they are the residue of
per-card rounding, and a budget does not have to be spent to the penny.

**USE `band.js` TO PRICE AND `band-pass.js` TO APPLY — NEVER `contract-pass.js`,** which
converts every available instance and lands Hesta near 100% against a target of 45%.
**Read the diff by eye after every night.** No law here reads English; all three faults in
the new tool were found that way, two of them shipped grammar.

**THE PER-CARD LIST IS BUILT — `node scratchpad/flagcards.js`.** 104 cards sit 28 points or
more from their speaker's target with enough instances to mean anything, and **the list
mostly CONFIRMS the author's shape rather than contradicting it.** The cards that came out
at 0% are `pia-afraid`, `what-being-kept-actually-costs`, `what-vic-owes-her`,
`who-vic-can-still-call`, `taking-turns` — every one of them a card where the character is
working, frightened, or on the record. The refusals bite hardest exactly where the writing
is most formal, so the tool arrived at the right shape by accident. The +55s are all night
33, the epilogue, where the whole cast is off duty for the first time in the book.

**THE THREE FLAGGED CARDS ARE RULED AND DONE (v5.95.0) — AND ONE OF THE THREE FLAGS WAS
WRONG.** `a2-door/the-rolling` was not a fault: nearly every Pia line on that card is
shouting, and the tool's emphasis rule refused them all because a line already shouting is
doing its emphasis another way. Her 17% is right. Two clauses outside the shout were taken.
`a3-seize/why-they-picked-him` (Three, 80% against 15) and `a2-annul/taking-turns` (Marek,
0% on the night he first speaks in nine years) both stood and are fixed.

**THE LESSON IS ABOUT THE FLAG, NOT THE CARDS: a rate far from target is a place to LOOK,
never a fault on its own.** The refusals are doing editorial work; a card full of capitals
is supposed to come out low. Read the lines before flagging them. The other 101 rows in
`flagcards.js` have not been read and most of them are probably the same story.

---

## PASS 8 — NOT STARTED. FOUR SEPARATE JOBS, EACH WANTING ITS OWN SESSION.

| § | job | shape |
|---|---|---|
| §C | **the nerve pass** — nobody in this book is ever frightened | the big one; changes prose, not mechanics |
| §D | the plausibility pass — the Choir behaves like scenery, eight people take a city | six holes, three the author ruled to honour NOW |
| §E | the Principal as prime mover — the whole plan is her eviction | a fold through the whole book |
| §F | the founding lock — the Architect keyed it with his own blood | a fold; and where "Granny" comes from |

### §C — THE NERVE AUDIT IS TAKEN. The note measures true, and harder than it was put.

**THE INSTRUMENT IS `scratchpad/nerve.js`**, and it separates the four things the note
separates, over all 7,724 prose blocks in all 33 nights — evening deck, room deck, second
takes, openings, both landing roads and the closings.

| | what it looks for | book total | share of blocks |
|---|---|---|---|
| **NAMED** | a person says they are frightened | **52** | 0.7% |
| **SHOWN** | the prose shows a body doing it | **24** | 0.3% |
| **ODDS** | somebody says the chances, or what happens if it goes wrong | **27** | 0.3% |
| **no-GO** | somebody says they do not want to do it | **44 → effectively 0** | — |

**THE LAST ROW IS THE FINDING AND IT SURVIVED BEING DOUBTED.** The first count said 88
refusals and the book looked full of people saying no. Reading all 88 showed nearly every
one is somebody declining to *answer* — *"ask me something else"*, *"I am not going to
soften the arithmetic"*. Partitioning those out left 44, and reading all 44 by hand left
**two** that are anywhere near declining to *act*: Nine at night 10 (*"I cannot do any of
tonight"*) and Vic at night 25 (*"me being braver than I currently am"*). **Neither is
about a plan. Across the whole book nobody ever says they do not want to go.**

**18 of 33 nights never put fear in a body. 17 of 33 never speak the odds. 12 of 33 never
name fear at all.**

**NIGHT 29 IS THE WORST CASE AND IT IS THE WORST NIGHT TO BE THE WORST CASE.** `a3-descent`
— down the cable, into the enemy's vault, the machine close — scores **zero on all four**
across 124 blocks. Its seven evening cards are *what the racks are*, *how far down it goes*,
*what Marek makes of the iron*: seven questions about the place, none about the people
being in it. A deliberately over-wide control (`scratchpad/wide.js`, any unease word at
all, narration included) agrees — 8 of 86 blocks, and every one of them is a *tactical*
worry. **Marek does not say he is afraid; he offers "a different worry" about the ironwork.**

**WHERE IT ALREADY WORKS, and these are the models to copy.** Night 22 carries 9 of the
book's 52 named-fear lines on its own. Night 28 has a card called *what could go wrong* and
another called *if somebody does not come up*, and Hesta answering *"I am not going to stand
at a hatch and tell six people a comfort I've not checked"* — that is craft law 2 already
written, once. And night 29's one working card is Pia's rope joke, because it ends *"then
the dark wins by MORE"*: the fear is on the page under the joke, which is the whole law.

**ONE THING THE AUDIT WAS NOT LOOKING FOR.** *"I am not going to pretend"* and its variants
run **19 times across 13 nights and 7 of the 8 speakers** (`scratchpad/pretend.js`). It is a
brave, good line, and it has stopped being characterisation and become the house voice.
Night 18 has it twice in near-identical words from two different people — Nine: *"I am fine.
I am saying that before anybody asks it kindly and I have to be brave in front of people"*
and Seven: *"I'm well. I say it first, before somebody asks kindly and I have to be brave in
front of people."*

### THE RULINGS, AND WHAT WAS DONE WITH THEM (v5.96.0)

The author ruled four ways: **the dry big-move nights** (not the whole book), **rewrite what
is there** (not new cards), **Pia breaks and the other seven crack once each**, and **fold
the "I am not going to pretend" habit into the same pass**.

**EIGHT NIGHTS, TWENTY-TWO BLOCKS REWRITTEN. Nothing added, nothing cut.** Every swap is
same-speaker, so the spoken count is **4687 before and 4687 after** and the block count is
7724 on both sides - the banter floor cannot move under a same-speaker swap, and that is
checkable rather than promised.

| night | what changed |
|---|---|
| 12 `a2-hand` | a heel going under the table, and nobody has noticed whose |
| 14 `a2-seven` | Vic says out loud that if the frame quits mid-extraction there is no second attempt and no him |
| 18 `a2-manual` | the Choir would not want him for a night - they would want him for life, warm and now, on a schedule; and Seven's "I will not pretend" is gone |
| 23 `a3-evict` | Three says the other half: two hours standing still on a street the Choir holds the paperwork to |
| 26 `a3-vic` | Vic rehearsed shutting the door on the last of it and finds he cannot |
| 27 `a3-stone` | Hesta will not make peace with waiting at the hatch · Three is frightened of the down and says so once · **Pia's system has a range** · Seven stops inflating four weeks |
| 29 `a3-descent` | **ten blocks.** Marek does not want to go under the patched iron and goes · Three spends one unprofessional sentence · Seven's clerk register breaks · Hesta comes down the cable · Pia pre-files her own failure |
| 31 `a3-principal` | Hesta knows she can be filed before a kettle boils and knocks · her hands have been going since the stairs |

**HESTA ARCS ACROSS 27 AND 29 and that was not planned - it fell out of the pass.** She
refuses to make peace with standing at the hatch on night 27, and on night 29 she is forty
rungs down the cable. Two nights apart, and the second now pays the first.

**TWO NIGHTS THE AUDIT CALLED DRY WERE NOT.** `a3-vic` already had *"I could do this one in
my sleep and I find that I cannot do it at all"* and a mug full and untouched all night;
`a3-evict` already had *"Three's hands are shaking and she's doing sums at me so I say they
aren't"*. Both got **one** edit instead of six. **A word list finds fear that is SPELLED,
not fear that is FELT** - read the cards before believing the census about them.

**THE CENSUS STILL CANNOT SEE MOST OF THIS PASS.** NAMED went 52 to 55 book-wide. That is
not the size of the change; it is the size of the vocabulary the instrument knows. The
proof is the prose and the drive.

**THE INSTRUMENT HAD TWO BUGS AND THE PROSE FOUND BOTH.** The refusal partition read the
whole block instead of the refusal's own clause, so Marek's *"I don't want to go under that
patch"* filed as a speech refusal because the word `say` appears thirty words later. And
ODDS had only ever been taught the phrase "goes wrong", so it walked past *"if the cable
goes... nobody up top hears about it for a day and a half"*. Both repaired. **SHOWN was
left alone on purpose** - it missed a body tell I had just written, and widening a list
because it did not applaud your own sentence is the invented-floor mistake.

**`scratchpad/swap.js` IS NEW AND IT IS THE FIRST TOOL IN THE DRAWER THAT REPLACES.** Every
other one only adds, which is a safety property. This one carries the discipline instead:
address by card+layer+index, read the needle out of the corpus, refuse on a `was` mismatch,
refuse to change the speaker, refuse a `holder`/`relay` gated block, and **refuse a
duplicated needle unless the spec declares `n:`**. That last one earned itself immediately:
`whether-anyone-slept` and `whether-anyone-slept-nine` are a FORK PAIR carrying Pia's answer
word for word, and changing one would have given half the players the old line.

**WHAT §C DID NOT TOUCH.** The other 25 nights, by the author's ruling. If the pass is ever
widened, the audit tools are `scratchpad/nerve.js` (census, `--dry`, or one beat),
`scratchpad/wide.js` (the over-wide control) and `scratchpad/pretend.js` (the house-voice
tic, still 17 instances across the untouched nights).

---

## §D — THE PRESSURE AUDIT IS TAKEN. Nine collisions, not two, plus a structural one.

**`press` reaches a player ONLY THROUGH THE WILD TABLE.** In the novel nothing reads it
(index.html ~7239-7362 is the storyteller wire and it is the only reader). So the collisions
below are wild-table defects — real, but they cannot reach a novel run.

**A KEYWORD TOOL CANNOT DO THIS JOB AND IT PROVED IT.** `scratchpad/press.js` ranks every
press line against its own beat's `never` by shared rare vocabulary. Its whole top of list is
the press *implementing* the never — nights 6, 30 and 31 restate their rule almost word for
word, which is good design. **The real collisions share almost no vocabulary with the rule
they break.** So all 33 were read by hand, which is what the note asked for.

### THREE ARE OUTRIGHT CONTRADICTIONS

| night | the press says | the never says |
|---|---|---|
| **13** `a2-mirren` | "The Choir sends a polite retrieval notice… **It arrives mid-burial.**" | "**nobody has a wire go off, a message arrive, or a caller ring here**" — and "nobody who was not at the undercroft arrives at this grave" |
| **17** `a2-housing` | "**The housed mind** can suddenly do something it should not be able to do" | "**nobody is seated in the housing in this scene**" — there is no housed mind to act |
| **18** `a2-manual` | "**Something tests the lock** while they are still reading" | "**the lock is the founders' lock and it is somewhere else** — the manual is paper, not a door" |

### SIX MORE ARE UNDER-SPECIFIED IN A WAY THAT INVITES THE FORBIDDEN MOVE

**3** `a1-vic` — "Pia says the thing Vic did not want said in front of the courier", when the
only such thing on that night is what `never[0]` and `never[1]` outlaw · **4** `a1-pack` — a
packmate collects a debt "exactly now", against "the pack does not arrive in person" · **5**
`a1-fare` — the recipient "recognizes his face", against "an ordinary person with an ordinary
errand — not the Choir, not a contact" · **21** `a2-law` — "the meal is interrupted", against
"nothing interrupts except the thing the board sends" · **23** `a3-evict` — "somebody could
leave a door open for him", against "nobody knocks on a neighbour's door and goes inside" ·
**30** `a3-dreamers` — the housekeeping "asks, gently", against "she does not appear".

### TWO THINGS THE READ TURNED UP THAT NOBODY WAS LOOKING FOR

**Night 9 `a1-turn` has NO press at all** — an empty array, the only one of thirty-three.
**Night 33's press[1] is engine instructions in a prose field**: *"Land it now. Epilogue in
chronicle voice, then set the_end true."* That string goes to a language model.

### AND THE STRUCTURAL ONE, WHICH IS HOLE 3 MEASURED

**In THE NOVEL the other side can only cost this family something on the ten nights that
carry `teeth`, or when the player runs out of turns and takes a toll.** Teeth are on nights
2, 8, 11, 12, 14, 19, 23, 29, 30, 33. **The other twenty-three nights have no mechanism at
all by which last night costs anything** — `canon` and `scar` are carried forward and read
back on the board, in the endgame and by the storyteller, but nothing in a novel night ever
reads them AS PRESSURE. That is hole 3 exactly, and it is an engine fact, not a prose one.

### THE RULINGS, AND WHAT WAS DONE (v5.97.0)

Ruled: **fix all nine**, **make the record push back in prose** rather than in the engine,
and **Seven says what the Choir actually is**, once he has defected.

**ALL NINE PRESSURE LINES REWRITTEN** (`scratchpad/pressfix.py` + `pressfix.json`, which
carry the reason for each one next to the change). Night 13's retrieval notice now arrived
this morning and is in somebody's pocket, so nothing arrives at the grave. Night 17 is Pia
noticing that Vic knows the shape of that seat without measuring it, so no unoccupied
housing has to grow a mind. Night 18's lock is tried on the other side of the city and the
news reaches the table, so the lock stays where the beat says it is. Night 5's recipient is
now entirely ordinary and the handoff curdles from the courier's side, which is better than
what was there.

**SEVEN SAYS IT ON NIGHT 18**, in `whether-anybody-can-take-it-off`, second take - the card
where Three uses the word *attendance* and the narration notes that the clerk does not
correct her. He takes the word off her: *"You have all been picturing a police force. What
you are standing in front of is a TENANT with an apparatus - it rents its rooms, it files
its residents, and in this whole city it has never once had to break a door, because until
the six of you nobody had ever simply said no to a form."* Then he refuses to let it be a
comfort. Three blocks; **the banter floor ROSE from 4687 to 4689**, which is allowed.

**MY OWN FIRST DRAFT OF THAT SPEECH WAS THE TIC.** "The Choir is not a police force. It is a
TENANT" is `X is not a Y, it is a Z` - the exact CONTRAST shape, and the book total went 31
to 32 the moment it landed. Recast to name what they had been picturing instead of negating
it, which is better writing anyway. Back to 31/28.

### AND THE THIRD RULING IS NOT DONE, BECAUSE THE SURVEY FOR IT FAILED

`scratchpad/costs.js` was built to find, per teeth-less night, whether the other side
reacts in the DECK (visible in the novel) or only in the PRESS (invisible). It reported 21
of 23 nights already covered in deck prose, which would have made the structural finding
mostly wrong. **Reading its hits showed every thin one is a false positive.** The word
`filed` does two jobs in this book - *"I filed the dodge"*, *"filed under nobody's
business"*, *"I have filed that under nights that ended at home"* - and the emotional one
is commoner than the bureaucratic one. `noticed` and `the clerk` fail the same way.

**SO THE STRUCTURAL FINDING STANDS AND THE SURVEY FOR IT DOES NOT EXIST YET.** Whatever
comes next has to tell *filing a memory* from *filing a person*, and a word list cannot -
which is the same conclusion the press audit reached about the same kind of tool. Expect to
read all 23 nights by hand.

**ONE THING costs.js FOUND THAT IS REAL: night 4 `a1-pack` is the only night whose
consequence lives entirely in the press.** Both its pressure lines are the Choir asking the
stalls about a courier by description, and a debt being called in - and a novel player
meets neither. That is the one clear case of authored consequence the novel cannot serve.

### THE 23 NIGHTS ARE NOW READ BY HAND (v5.98.0), and the diagnosis is sharper than the note

`scratchpad/enemy.js` does RECALL and decides nothing: it prints every authored block on a
teeth-less night that names anything on the Choir's side of the world - 135 of them - and
leaves the judgement to the read. That is the division of labour costs.js got wrong.

**THE ENEMY IS A SUBJECT OF EXPLANATION AND ALMOST NEVER A SUBJECT OF VERBS.** Nearly all
135 are a character explaining it: Vic on debts (*"a leash with a nicer name"*), Seven on
intake columns (*"a thing does not exist to me because I've seen it, it exists because it
has a column"*), Three on lock classes, Hesta on how the city files its dead. **It is
described with more precision than almost anything else in the book, and it hardly ever
does anything.**

**WHERE IT DOES ACT THE BOOK IS AT ITS BEST, AND THERE ARE FOUR PLACES.** Night 22, Hesta
reading the record out: *"Intake conducted on the row at eleven-twenty. One subject.
Voluntary conscription paperwork lodged and countersigned"* and *"they took him regardless,
because he was standing nearest and he was on their list"* · night 28, *"it came to Seven
off a fish porter before six this morning. No van, no uniform, no threats. A clerk doing a
list"* · night 32, the Machine: *"the small one is filed for salvage. I have read it. It is
a bad file and it will be actioned, because files are"* · and nights 3 and 5, where it is
the CITY rather than the Choir - the causeway watched by morning, the noodle man making
change without touching his hand. **Night 24 has it conspicuously not reacting, on purpose,
and says so: *"she hasn't said one word about yesterday. Not the nine, not the van, not
us."***

**THE HOLE HAS A LOCATION: NIGHTS 9 TO 21.** Of the nine teeth-less nights in that stretch
- 9, 10, 13, 15, 16, 17, 18, 20, 21 - not one has the other side doing anything about what
this family did. That is the middle of Book Two, and it is exactly where the book gets
talky.

**AND SEVERAL OF THOSE NIGHTS FORBID IT ON PURPOSE, WHICH CHANGES THE FIX.** Night 10's own
`never` says nobody knocks at Hesta's door in a stall - *"that is the world's move and it
belongs to the pressure"*. Night 13 forbids any message arriving at the grave. Night 21
allows exactly one interrupter. **The quiet on those nights is authored, not accidental.**
So the fix cannot be "give the Choir a verb here". It has to be **the family saying what
last night cost**, which is what a deck is for and which breaks no rule on any night.

**NIGHT 17 IS WRITTEN AS THE MODEL.** On `anybody-else`, second take, straight after Seven
says he has stopped protecting his own answer: his desk at the west intake has been empty
for eleven days and somebody has filed that. He countersigned four hundred of those forms
and knows almost to the hour how one travels. Three asks how long. *"It went days ago.
Eleven days is a staffing note for the first four and a name for the rest. I am not
forecasting weather at you. I am telling you what it is doing outside."* Nobody at that
table had thought about what it cost the Choir to lose a clerk, because nobody had thought
of him as a thing the Choir had lost. Four blocks; **the floor rose 4689 to 4692**.

### AND THEY ARE WRITTEN (v5.99.0). §D's PROSE WORK IS DONE.

**NIGHT 20 WAS NEVER ON THE LIST.** Five already says it: *"the convoy reports its officer
missing at eight, and I know exactly how that paperwork moves, because I have moved it."*
The enemy.js read walked past it because it reads as Five offering himself, and it is both.
**Eight was really seven.**

| night | what the family now says it cost |
|---|---|
| 9 `a1-turn` | Pia: the chit with his description on it has been getting quietly more correct for eleven weeks, and nobody had to touch it once. *Nobody asks how she knows. She does doors, and a door is a thing that people bring paper to.* |
| 10 `a2-door` | Hesta: this building was the least interesting address on the row for thirty years and that stopped at about eight o'clock tonight — *"I want you to know what it costs, so that when it turns up nobody at this table has to stand there being surprised at it."* |
| 13 `a2-mirren` | Hesta at the grave: something of theirs stopped moving out there and gets a line in a register whether anybody says a word or not. Vic: *"It'll be a query first. Nobody looks at a query. A form asks a form."* |
| 15 `a2-chassis` | Vic over the sheeted frame: it went out on a Tuesday with a number on it, and there is a man whose entire job is the difference between what went out and what came back |
| 16 `a2-three` | Three, in her first hour: *"Taking me into a household takes in what is attached to me."* Hesta: *"Noted. Eat something."* |
| 18 `a2-manual` | Three: the lock keeps a log. **The key is not only a way in, it is a signature, and this family has been carrying a pen.** |
| 21 `a2-law` | Three while the ink is wet: does the law hold for a thing the Choir will come looking for. Hesta: *"Yes. Next question."* |

**TWENTY-ONE BLOCKS ADDED, none cut; the floor rose 4692 to 4713.** Sweep green, nobody
speaks out of a scene they are not in (4,690 nameplates), no canon leaks, mannerism at the
28/28 baseline, drift 10,941 lines and none moved.

**`a2-chassis`'s `does-anybody-owe` was left alone as ruled** - the cost went on
`the-frame-in-the-corner` instead, which is the same night and does not spoil the contrast.

*(superseded) WHAT WAS LEFT: EIGHT NIGHTS - 9, 10, 13, 15, 16, 18, 20, 21* - each wanting one exchange
in the family's own mouths about what the night before has cost. **`a2-chassis`'s
`does-anybody-owe` MUST NOT BE ONE OF THEM.** It is eighteen closed blocks setting the
family's debt economy against the Choir's - *"there is no bill in this building"*, *"in
about four hundred small ways over about thirty years and not one of us will notice it
happening"* - and a cost dropped into it would spoil the contrast it exists to draw. Find
another card on that night.

**THE TOOL IS `scratchpad/landline.js`** — landings live on `SPINE[].lands[].lines[]`, not in
the SCENEBOOK deck, so `breathe.js` cannot reach them. Same discipline: address by index,
read the anchor out of the corpus, refuse on a duplicated anchor.

**TWO THINGS THIS WAVE LEARNED THE HARD WAY.** (1) **Landing lines count toward the night's
narration share** — `floors.js` has always scanned them and I had never used it. `a2-chassis`
went 49.8% → 50.1% on this wave alone, so both pinned nights are over 50% now, which pass 5
did not quite manage. (2) **A tool that only ever ADDS can still add in the wrong ORDER** —
several lines sharing one anchor came out reversed and put three blocks in front of the
lines they were commenting on. Caught by dumping the result, not by trusting the APPLIED
count. `landline.js` now groups by anchor.

**THE SECOND PASS NEEDED A SECOND TOOL, AND THIS IS THE REUSABLE PART.** `layers.js` aims
at the longest unbroken run, which is right for a FIRST pass and useless for a second — once
every layer has breath in it the fault is no longer *where the talking runs on* but *which
layers are still thin*. Two new tools live in the scratchpad:

| tool | what it does |
|---|---|
| `thin.js <beat> [pct]` | every layer sorted by narration share, with the blocks each still owes |
| `gaps.js <beat> [pct]` | for the layers that owe, every spoken block followed by another spoken block — the list of places a breath can go without splitting a call-and-response that already has ground under it |

The first pass on `a2-chassis` took 273 blocks with `layers.js`; the second took 175 with
these, and would not have been findable with the first pass's instrument. **Still re-dump
between batches on the same layer** — every insert shifts the indices behind it.

**AND THE REAL LESSON OF v5.86.0: READING THE TRAP LIST IS NOT A GUARD.** Four of my own
new blocks tripped a detector in that one wave — `death` on "Pia has gone red", `named:Three`
on "Three decades" at a sentence head, `shard:hand` on "the shard into the number", and
`boardleak` on "the same pan", which is the literal title of night 22 and which fired on
THIS EXACT CARD in an earlier wave too. I had read all four warnings before writing. The
machines caught all four. **Run the guards after every batch, not at the end of the wave.**

**THE AUTHOR'S SEAM BUG IS FIXED (v5.92.0).** No seam in the game had ever revealed —
`playAuthored` added `shown` inside its own loop, which is the class the walk *arrives* at.
It gets the same paced walk now, and **the rail waits for it**. Sweep row (6g8) drives the
real function and is proved against the shipped shape.

Then pass 6, the closings audit, **which is a REPORT before it is a wave** — the author
rules the mismatches before a word is written.

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

---

## §E AND §F ARE WRITTEN (v6.0.0). They were the same fold from two directions.

**MOST OF §E WAS ALREADY ON THE PAGE and nobody had noticed.** Night 31 has said since it
shipped: *"I hold the freehold. They hold a lease. Every terrible thing they run down there,
they run as TENANTS"* - which is §D's biggest hole answered in her own mouth. And
*"There is a man I have been sending parts to for a very long time and he has stopped
acknowledging them"* … *"How is my tissue man?"* … *"...Ah."* **She already supplied Vic.**
What was missing was smaller than the note thought.

**THE FOUR RULINGS AND WHAT THEY BOUGHT:**

**§F, night 25, in the record.** `who-made-her`, second take, already had the estrangement
structurally - *"Two voices for the first forty minutes. One voice for the last nine"* and
*"somebody edited a woman out of her own recording"*. What it lacked was the content of the
last nine minutes. Now the Architect describes a lock he has just finished and says **he has
made it so that she cannot open it either** - not triumphant, *"a man who has thought for a
long time and has decided to be sorry later"*. Then Hesta's existing *"Long dead, love"*
lands on top of it, and the narration's existing verdict - *"the only deliberately false
thing anybody says in this book"* - is now false twice over.

**IT DOES NOT SAY THE LOCK ANSWERS BLOOD, AND THAT IS DELIBERATE.** `founding-lock` is
planted a beat later on `a3-vic` and paid at `a3-seize`; stating the mechanism on 25 would
spend a3-vic's own reveal five nights early. The reader assembles blood plus her exclusion
themselves, which is the shape the book already uses.

**§E, night 31, conditions and never the man.** *"I can hold that door. I have never once
been able to knock on it. He saw to that in the year we were not speaking, and then he died
before I could ask him whether it was a punishment or a kindness."* Then the prime mover, in
her own words: *"I spent a century arranging the CONDITIONS. A line that goes on. A man in a
chair who scans everyone who sits in it and has never been told why. Parts that arrive from
nowhere and are never invoiced. Conditions, courier - not people. Which body walked into
that shop was never mine to choose, and I do not know why you fit."* **The ruling that no
night may imply she picked him is kept in the same breath that makes the claim.**

**THE SUIT, said flatly by her**, on `how-she-has-lived-this-long`, straight after
*"replaced tissue on a schedule"*. She is wearing one of them, the same pattern as the ones
at her door, worn longer than any of them have been alive. And her existing closer - *"then
six strangers carry crockery down a cable and fry bread in my corridor. Do you see the
methodological insult? I had it SOLVED"* - is a better joke now it follows the reveal.

**THE PLANT WENT ON NIGHT ONE'S DECK, not the cold open.** Pia, second take, closing a card
about why Vic picked him, on something that is *not* about him: his shop takes deliveries
nobody ever bills him for, and in two years of doing his doors she has never seen a docket.
*Nobody has any use for it tonight. It goes in anyway, and that is the whole of her method.*
**Thirty nights later the Principal says "parts that arrive from nowhere and are never
invoiced."**

**TWO NEW ROWS IN `REVEAL_LEDGER`** - `she-is-locked-out` (plant a3-founding, pay
a3-principal) and `unbilled-parts` (plant a1-hum, pay a3-principal). The sweep now reports
**8 plant/pay pairs, every plant earlier in the spine than its payoff**, and 9 facts checked
against every earlier night with no leaks. A fact that travels thirty nights and is not in
the ledger is a fact nothing is watching.

**THE PEAK JOKE IS UNTOUCHED.** The sweep still reports the granny name in exactly one night
and explained in none. The fold lays the pieces - the bloodline, the lock keyed to it, the
child they built after losing one - and never once connects them out loud.

### TWO THINGS THE GUARDS CAUGHT IN MY OWN NEW PROSE

**`breach` fired on a narration line and it was right.** I wrote *"become relatives in the
space of a sentence"*, and the bare word **space** is a place-breach term - what it means in
a player's typed line is not what it meant in mine. **The prose was changed, not the
fixture.** That is the only correct direction for that mechanism to be pushed.

**The `tell` delta was three entries and every one is accounted for** in a ledger paragraph
above `VERDICT_FIXTURE`: one matched renumbering pair (Hesta's line moved three indices, word
for word) and two new lines that are *supposed* to fire, because they are the principal
reveal and a detector that stayed quiet on them would be the thing worth investigating.

---

## §G IS CLOSED (v6.1.0) — and the tool §G named as the meter had a hole in it.

**THE STALE NUMBER FIRST.** OUTSTANDING says 123 lines remain. `allrails.js` reported **one**,
because §G predicted correctly that this work rides the narration pass, and eight passes have
been quietly naming addressees for months. That one line - a3-dreamers' peril tempt, *"She is
right there - take her tray tonight"* - is now **"Mirren is right there"**.

**THEN THE SECOND INSTRUMENT DISAGREED WITH THE FIRST, AND THE FIRST WAS WRONG.**
`scratchpad/badgemeter.js` replicates `rowBadge`'s own rule - chip the card's answerer onto
any row whose sentence does not mention them - over every rail and railTake, and split the
result by whether the line names somebody ELSE. Twelve rows came back. Four of them were
lines `allrails.js` called clean.

**THE HOLE: `allrails.js` only flagged a bare pronoun when the line named NOBODY AT ALL.**
So *"Ask her what Vic is actually like"* passed - a bare HER being asked about a named man,
which is precisely the ambiguity §G is about - because the sentence names Vic. Nine waves of
"all lines named" were claims about a predicate with an exception in it that §G's own rule
does not have.

**WIDENING IT TO "any bare pronoun in the addressing position" THEN OVER-FIRED**, on eighteen
rows, and fourteen of those are correct English: *"Pia - jam her. Cut the signal. Make her
stop"* names its addressee and then uses a pronoun for somebody else, which is what pronouns
are for. **THE ACTUAL RULE IS ANAPHORA: a pronoun in the addressing position is a fault only
if no cast name appears EARLIER IN THE SAME LINE.** A name after it does not help; the reader
has already had to guess. Eight self-tests now pin all three shapes.

**FIVE LINES WERE REAL AND ARE NAMED**, and rewriting them is safe for live runs because
index.html:2692 says the index is the identity - `topicSpent`, `railDeal` and every deck
counter store POSITIONS, and the line string is only used inside a turn to map a click:

| night | was | now |
|---|---|---|
| 2 `vic-the-man` | Ask **her** what Vic is actually like. | Ask **Pia** what Vic is actually like. |
| 11 `her-door` | Ask **her** what she is not saying in front of Pia. | Ask **Hesta** … |
| 16 `opens0` | Ask **her** what she wants, before Pia gets to the chair. | Ask **Three** … |
| 20 `whether-marek-will-survive-it` | Ask **her** straight: will Marek survive this. | Ask **Three** straight … |
| 21 `when-it-first-costs` | Ask **him** what Five makes of a law like this one. | Ask **Marek** … |

**AND THE OTHER TRAP §G NAMES, FOUND AS A CLASS RATHER THAN AN INSTANCE.** `t.who` is set
from whoever OPENS a card, so when a take hands the card to somebody else the badge still
says the opener. Twenty cards in the book do that. Most are fine - the opener does answer
first. **Three actively contradict their own line** and now carry `hideWho:true`:
`a1-turn/what-to-call-her` (*"Ask Nine what her name has come to mean"* → chip PIA, over a
take that is five blocks of Nine and none of Pia), `a2-law/the-tin-at-the-full-table` and
`a2-door/the-rolling` (both tin-round-the-table cards whose takes belong to Pia, Vic and
Marek). All three are the shape §G nominates `hideWho` for.

**WHAT WAS PROVED AND WHAT WAS NOT.** allrails 0/0, badge clashes 12 → 5 and all five are
lines where the chip is doing its job. `hideWho` was **already carried by eight cards before
these three**, so it is a shipped mechanism and this change is data, not code - but **the
three cards' second takes were not driven by hand to watch the chip go quiet.** Read
`rowBadge` at index.html:3488 if that needs settling; the field is the second term in the
condition.

### AND A FIXTURE EDIT WENT INTO THE WRONG ARRAY

Naming two lines made `named:Three` fire on them, which is the change working. Taking that
by delta, the first attempt anchored on `"a2-annul/scar",` and asserted it was unique **in
the file**. It was - and it lives in `named:Five`. **A UNIQUENESS CHECK OVER A FILE IS NOT A
SCOPE CHECK.** The drift net reported `named:Five` losing a line on the very next run, which
is exactly its job. The repair finds the array by its KEY and edits inside that slice only,
and the lesson is written above `VERDICT_FIXTURE`.
