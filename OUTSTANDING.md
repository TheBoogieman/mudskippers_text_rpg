# What is left

*This file holds **remaining work only**. State and standing rules are in `HANDOVER.md`.
Nothing finished stays here — when a thing is done it leaves this file and lives in the
commit that did it.*

**Do not trust these numbers over the game's.** Open MUDSKIPPERS, pry into THE WRITERS'
BOARD, and page one recounts everything off the live arrays every time it opens. This
document exists for what a counter cannot hold: why the work is shaped the way it is, what
has been ruled, and which of it is a trap.

---

## THE MEASURED DEBTS — read off `corpus.js` at v5.71.0

| | count | where |
|---|---|---|
| cards with **no second take at all** | **71** of 483 | all in Book Two, plus 5 in `a3-seize` |
| takes with **no choice line of their own** | **25** | all in `a2-chassis` |
| choice lines that **address somebody and name nobody** | **123** of 1,181 | nights 11–33 |
| spoken blocks — **THE BANTER FLOOR** | **4,656** | must never fall |
| narration blocks | 1,926 | **29.3%** book-wide |
| bare landing / opening rows | **0** | closed |

**The no-second-take debt, by night:** `a2-hand` 7 · `a2-turn` 7 · `a2-ground` 6 ·
`a2-mirren` 6 · `a2-seven` 6 · `a2-three` 6 · `a2-annul` 6 · `a2-law` 6 · `a3-seize` 5 ·
`a2-chassis` 4 · `a2-housing` 4 · `a2-manual` 4 · `a2-choir` 4.

**Book Three is clean** and was written to the laws as they were being made. Nothing in the
plan below runs over Book Three without a measured reason.

Also open, unmeasured: **32 transition scenes** for TAKE THE NIGHT ON (not started) ·
roughly **230 staged choices unwired** outside the finished rooms · **6 amber sweep rows**,
all AI-side · the storyteller respecting family time · the drift nudge pointing at TAKE THE
NIGHT ON. The last two are **deferred by the author until the written side settles.**

---

## THE PLAN, AND WHERE WE ARE IN IT

**PHASE 0 — THE GUARDS. DONE at v5.55.0.** `REVEAL_LEDGER` in `corpus.js` and its rows, the
banter floor, the contraction band per speaker, the granny guard.

**PHASE 1 — ONE NIGHT AT A TIME, BOOKS ONE AND TWO.** Each wave takes one night and finishes
it: empty second takes, take-lines and rails that name nobody, the contraction band, the
narration floor, the nerve beat, and the tics. **Season 1 (nights 1–9) is done. Night 10's
deck is done. Nights 11–22 have not been started.**

**PHASE 2 — THE TWO PINNED NIGHTS**, past 50% narration, after Phase 1 has settled the voice
— because the two-narrator contrast only reads once the dialogue under it is fluent. **Night
10 is running now; night 15 has not been started.**

**PHASE 3 — THE LORE FOLDS.** Only where a scene already reaches for them. Grep Books One and
Two for the places that already gesture at a supplier, a landlord, a lock or Vic's parts, and
sharpen those. **No new cards, no new plants** — the standing instruction is that nothing
already written gets retconned.

### WHAT WOULD MAKE THIS PLAN WRONG

- **If the contraction pass stops visibly improving a night's readability**, stop and re-ask.
- **If the banter floor falls** during any wave, the wave is wrong however good the prose is.
- **If the narration gauge shows a night dropping** while its dialogue improves, that is
  expected and fine — check the floor, not the direction.

---

## §A. THE BANTER FLOOR — IT OUTRANKS EVERYTHING BELOW IT

**The author, after ruling all the passes: *"I still want to have banter, they shouldn't be
too serious."*** He has said this three times across the project and was right every time.
**If any instruction below reads as "make it grimmer", it is being read wrong.**

**THE GUARANTEE IS ARITHMETIC. The narration target is reached by ADDING narration, never by
cutting dialogue.** The spoken-block count is a FLOOR, checked the way the drift net is
checked: a fall is a failure however good the new prose is. **The book gets BIGGER, not drier.**

**THE TIEBREAK IS TERRITORY, NOT COMPROMISE:**
- **IN NARRATION: dread wins.** The odds, the cost, what is coming. Bleak start to finish.
- **IN DIALOGUE: banter wins.** Warm, funny, rude, callbacks. **They do not know what the
  prose knows.**
- **"One break a night" is ONE PASSAGE, not a mood.** A book where somebody breaks every night
  is a book where nobody breaks.
- **The fear-under-the-joke law is a COMEDY instruction.** If a passage came out sadder rather
  than funnier, it was applied backwards.

**THE TWO REGISTERS, AS THE AUTHOR ILLUSTRATED THEM: dialogue is Ken, narration is Blade
Runner K.** Dialogue bright, easy, fluid, everyone deflecting at the same level, nobody
admitting what the task demands. Narration bleak, soft, poetic, foreshadowing, describing the
emotions — and **it is the only voice in the book that says the sentence out loud.**

**THE COURIER IS WHY IT WORKS.** His life burned on day one and he is taking on a cult. Facing
that head-on would break anybody, so he deflects, and the family deflects with him.

**WHERE THE BANTER LIVES, MEASURED: THE ROOMS HOLD 73% OF EVERY SPOKEN LINE IN THE GAME.** The
staged passages are already past 50% narration on their own. That says where new narration
belongs and where it does not.

**THE TEST: if a room card has no line in it that would make somebody smile, it is not
finished** — whatever else it is doing.

**AND THE ENDING MUST NOT BE REVEAL-HEAVY.** The epilogue as shipped is, and the drift net
measured it: `tell` gained **eight** anchors on that one night. **The facts move earlier; what
stays in the epilogue is what they COST.** The model for a late payoff is the granny joke —
**a payoff the reader assembles is not a reveal; a payoff somebody narrates is.**

---

## §B. THE NARRATION PASS — the prose stops agreeing with the room. RUNNING.

**The author's note:** *Hesta's open door and the smoke session in "the cook" are the last
normal and most sincere moments of normalcy they have. That night should be the peak: cosy,
jokes, banter — but the narration is telling a different story than what the room shows,
foreshadowing the immense price they are about to pay. Narration always shows the bleak truth
from start to finish, how impossible the odds look. It contrasts the jokes, giving them a
stable grounding.*

**THE TWO NIGHTS ARE PINNED BY ID:**
- **`a2-door` — night 10, "The Open Door".** Hesta's door and the tin going round for the
  first time. **The peak.** It is the first night the family is a family in one room with the
  door shut, and nothing after it is that uncomplicated again.
- **`a2-chassis` — night 15, "the cook".** The second smoke session.

**THE TARGET, RESCOPED: the two pinned nights go past 50%. Every other night gets a 35%
floor.** The whole-book >50% figure is ~2,400 new blocks, which is a rewrite rather than a
pass. **The book's median is 30.8%** — run `floors.js` before ever quoting a narration floor.
*(A "floor of 35" was once invented from four already-polished nights and quoted as measured.)*

**AIM AT THE RUN, NOT AT THE PERCENTAGE.** A share is an average, and an average hides the
thing that actually goes wrong on the page: eight people talking in a row with nobody looking
at the room. `layers.js <beat> [minRun]` lists every layer by longest unbroken spoken run,
and that listing is an **address**. Night 10 opened v5.71.0 with a run of eight and closed it
with a run of five; the share moved from 30.6% to 35.8% as a by-product.

**THE PLACEMENT, AND THE TWO POSITIONS DO DIFFERENT JOBS.** At the **end of a layer** the
prose gets the last word after a joke — the highest-value position, and it needs no
re-indexing. **Mid-layer**, it gets to be quietly wrong about a thing the room is certain of,
or to price a kindness nobody at the table noticed receiving.

### THE AI MANNERISMS — measured properly at v5.72.0, and the pass was writing them

**The banned shapes:** the **contrast** (*"it is not a rule. It is the shape of a thing"*),
**"which is the whole…"**, **"and that is the point"**, and the word **"load-bearing"**.

**THE ESTIMATE OF ~105 WAS LOW, AND THE TOOL THAT PRODUCED IT WAS BLIND.** It collected
**spoken blocks only and returned early on narration** — and narration is the authorial
voice with nobody's mouth in front of it, which is exactly where an authorial habit lives.
**So the narration pass spent three releases writing the figure it had been ruled to
remove: four of night ten's seven narration tics were written by the pass itself.**

| | at v5.72.0 |
|---|---|
| **the banned word / phrase** | **0** — `load-bearing` (12) and `which is the whole` (5) are gone |
| **the contrast, in NARRATION** | **28**, against a sweep ceiling of 28 that ratchets down |
| **the contrast, in DIALOGUE** | **172** — *open, and the author's ruling to make* |

**IT IS COUNTED, NOT FORBIDDEN.** A denial answered by an assertion is a real figure and
sometimes it is the sentence — *"It is not a large bag, and it is the most frightening thing
in this kitchen"* earns it, and night 10's *"What breaks it is not an apology. What breaks
it is the room slowing down"* is a deliberate anaphora that was left alone. **What is banned
is the habit**, which is why narration carries a ceiling rather than a zero.

**THE GUARD IS SWEEP ROW (6g7)**, and it is PROVED rather than exempt: **its broken form
restores the blindness** — the scan reading spoken blocks only — and the row fails, because
what it asserts is that the scan can see narration at all. `ticBlocks` / `ticScan` are
production code in `index.html` for that reason. **Lower the ceiling when a wave clears
some; never raise it to make a wave go green.**

**AND EVERY WAVE FROM HERE RUNS THE SCAN ON ITS OWN NEW PROSE BEFORE IT SHIPS.** The lesson
is not "remember the tic list" — it is that a measurement which cannot see the place a fault
lives is not a measurement. This project has now been handed that same lesson four times: a
card-only line audit, a mangled regex, a take-versus-line conflation, and this.

**AND THE BLEAKNESS GOES IN THE NARRATION, NEVER INTO THEIR MOUTHS.** Nobody becomes bitter,
cruel or self-pitying. **The family gets warmer as the prose around it gets colder.**

### THE VOICE PASS RIDES IT — they TALK like the characters they are

**The author's words:** *"a twelve-year-old being a twelve-year-old, not operational
efficiency. Hesta being an old lady, Vic having a guilty conscience, Nine and Seven being
grown minds."*

| | talks like |
|---|---|
| **Pia** | **a twelve-year-old.** Not a staff officer running a briefing |
| **Hesta** | **an old lady.** Her age is in her mouth, not only in her competence |
| **Vic** | **a guilty conscience.** He installed that housing without consent |
| **Nine** and **Seven** | **grown minds.** Adults — not quirky machines, not children, not devices |

**For Pia, precocious is fine; PROCEDURAL is not.** Sharp, filthy, funny, rude and older than
her years emotionally is who she has always been. What she must stop sounding like is somebody
running an operation: jobs assigned, plans ratified, rules minuted.

**This is the largest pass by line count** — it has no scope smaller than every line anybody
says.

### The contraction band — the mechanical half of the same diagnosis

**The author's note:** *the AI tics and mannerisms are disguising as character… the dialogue
just doesn't read fluidly and hurts my brain a bit.* Measured: **of every place a contraction
was available, 9% were taken. Natural speech runs 60–80%.** The order was right and the band
was wrong — the whole cast sat forty points below speech, so the differences between voices
compressed to nothing a reader can feel.

| speaker | target | speaker | target |
|---|---|---|---|
| Pia | ~65% | Seven | ~30% |
| Vic | ~60% | Three | ~15% |
| Marek | ~55% | Nine | ~10% |
| Hesta | ~45% | **Machine / Principal** | **0% — do not touch** |

**THE RATE IS A BUDGET, NOT A MAXIMUM.** A speaker with no uncontracted forms left has no
emphasis instrument — the mechanical pass took Vic to 85% and the author ruled it back.
**Restore for weight, never evenly.**

**AND THE CALIBRATION IS THE SPREAD, NOT THE RATE.** Night one's shape is Pia at 0% on the
cards where she is working and 100% on the cards where she is twelve. A night that comes out
flat is a night the pass was applied to rather than written. **The pass is PER CARD.** A
speaker whose spread is deliberate — Mirren's alternation between the law and the intimacy —
must not be passed over at all; flattening her dissolved the character.

**BLOCK LENGTH IS NOT THE PROBLEM AND MUST NOT BE "FIXED".** Median spoken block is 20–22
words in all three books. **The stiffness is grammatical, not bulky** — cutting for length
would spend the banter floor to solve a problem the book does not have.

---

## §C. THE NERVE PASS — nobody in this book is ever frightened. NOT STARTED.

**The author's note:** *most of the time they don't even have a plan; they decide, and the
world lets them act in much bigger ways than a ragtag group is allowed to. They don't even
panic — they joke around the real issue, deflecting, never actually stopping to think what
they signed up for. The story is much more serious than any one of the characters ever admits.*

**THIS IS A DIFFERENT NOTE FROM §D AND MUST NOT BE MERGED WITH IT.** §D is what the WORLD does
about them; this is what THEY do about the world.

**THE DIAGNOSIS, sharper than "add anxiety": every character copes by being good at
something, and not one has a failure mode.** Pia gets *more* organised · Hesta cooks harder
and refuses to sit down · Three retreats into the record · Seven goes professional · Nine
listens harder · Marek takes another shift · Vic shuts doors · the Machine asks whether it
would be cruel to say the number. **Eight people, eight competences, zero panic** — which is
why the book reads calm through a catastrophe. **Anxiety is not a tone to add. It is a missing
piece of characterisation, and it differs per person the way their competence does.**

**TWO CRAFT LAWS FOR EVERYTHING WRITTEN FROM HERE:**

1. **THE JOKE MUST HAVE THE FEAR UNDERNEATH IT, ON THE PAGE, IN THE SAME PASSAGE.** A
   deflection only reads as one if the reader has already seen the thing being deflected FROM.
   Set the weight, then let them dodge it. **And once a night, somebody fails to dodge.**
2. **THEY PLAN, AND THE PLAN FRIGHTENS THEM.** Before any big move: somebody says the odds out
   loud, somebody says what happens if it goes wrong, and **somebody says they do not want
   to.** All three belong in the evening deck, which is exactly what an evening deck is for.

**RULED: PIA BREAKS, AND THE DIAL IS "WEIGHT UNDER EVERY JOKE, ONE BREAK A NIGHT".** Her
over-organising is the symptom, so the book turns it: **the rules stop working**, and a
twelve-year-old is left next to a decision nobody her age should be near.

**Four rules so it does not eat her:** she is still the funniest person in the book and the
break is rationed · **it costs her the METHOD, not her nerve** — she has been frightened since
night 22 and said so calmly · it arcs and escalates across Book Three rather than repeating ·
**nobody fixes her**, because *"stand there and be ordinary at me"* is her own ruled law.

**DO NOT SWING THE TONE GREY.** A joke with visible pressure under it is funnier, which is the
whole reconciliation. **The v5.42.0 epilogue is in scope for this pass**, and expect it to
touch second takes hardest — a second take is where a character is asked again and has already
used their deflection once.

**Where it already works, and these are the models:** Pia at night 22 saying she is
*"seven-digit-reference-number frightened"* and then refusing to be comforted · Hesta's
epilogue sum ending *"that isn't a queue, that's geology"* · Toller on his own step in the
dark. **All three set the weight before anybody gets a joke.**

---

## §D. THE PLAUSIBILITY PASS — RUNS NOW THAT BOOK THREE IS WRITTEN. NOT STARTED.

**The author's note:** *a ragtag group infiltrates a cult, a city-wide organisation; takes a
city block; does surgeries; and everyone is just playing along. The Choir looks like it just
let this happen. No bigger authority chases them. After a whole street is "taken back" they go
on like a normal Tuesday. How do they even TAKE a row back? One of them is twelve.*

**Six holes. Two are answered; four are open.**

1. **WHY DOES NOTHING COME BACK AT THEM?** Four hundred thousand converts, millions of
   sleepers, intake desks on every row — and across thirty-three nights it never once costs
   them anything for what they did the night before. **It behaves like scenery with a voice.**
2. **WHERE IS EVERYBODY ELSE?** No civic authority, no rival, nobody above the Choir ever
   takes an interest.
3. **CONSEQUENCE DOES NOT SURVIVE THE NIGHT.** Each beat resets. **The engine is complicit:**
   the record carries canon and scars forward and almost nothing READS them as pressure.
4. ~~**"TAKING A ROW BACK" IS UNDEFINED.**~~ **ANSWERED at v5.44.0**, in prose and in canon.
5. **PIA IS TWELVE AND SHE IS LOAD-BEARING.** Not present — operational. The book has never
   said why the adults allow it, and **the Choir has never once used it against them**, which
   is the first thing an organisation that files children would do. *(§C's ruling answers half
   of this in the same stroke.)*
6. **THE SCALE DOES NOT BALANCE.** Eight people against a city.

**THE FIX IS IN THE AUTHOR'S OWN SENTENCE: they ARE a much bigger threat than the book gives
them credit for.** Everything needed is on the page and none of it has ever been treated as
decisive by the enemy — **maker's blood** that opens doors nothing else in the city opens · a
founding-era chassis and a housing built to seat a mind, from a supply line the Choir does not
know is leaking · **an unmaker who can undo a conversion**, the only counter to its entire
method · a defector who knows the shape of its paperwork · a shard on every civic channel at
once · **the building's own landlord**, who has been robbing it for a hundred and thirty years.

**AND THE CHOIR HAS A REAL ANSWER THE BOOK HAS NEVER SAID OUT LOUD.** It is a **tenant with an
apparatus**, not a police force. Its method is paperwork, patience and conversion; it has
never needed force because until this family nobody had ever simply refused. **That is a
legitimate explanation and it is currently doing its work invisibly, which is the same as not
doing it.** Somebody has to SAY it, early, or every quiet night reads as the author looking
away.

**WHAT THE PASS IS:** a read of all thirty-three nights asking, per night, *what did the other
side do about last night, and what did it cost this family* — and then the writing that
answers it. **Expect it to touch pressure blocks, teeth, canon and scars far more than rooms.**

**And check every night's `press` against its own `never` by hand.** Two pressure blocks in
two nights were handing the storyteller a move their own beat outlaws. **Nothing in the sweep
reads pressure blocks.**

---

## §E. THE PRINCIPAL IS THE PRIME MOVER — fold it through the whole book. NOT WRITTEN.

**The author's note:** *the leaks are happening with the help of the Principal; this group is
the last piece she needs to take down the whole thing. We can write the whole plan as her
attempt to kick the Choir out. A hundred-and-thirty-year-old woman in a bio-gren suit, peak
technology. She should have a hand in the first night being the way it is. The Choir doesn't
realise the danger they're in until it is too late to act in force.*

**THIS IS BARELY A RETCON — it is an activation of lore already in the bible.** She and the
Architect **built** the machine together after losing a child · **the bio-hash comes from
their bloodline**, so the maker's blood the courier carries is *hers* · her stated want in
`WANTS` is verbatim *"an argument finished with a dead man, THROUGH WHOEVER CARRIES HIS KEY"*
— she has always been written as somebody who acts through an instrument · Vic co-founded the
reprint program and spent decades scanning every customer in his chair · and her supply line
is already canon.

**THE FOLD, IN ONE SENTENCE:** *she has spent a century assembling the conditions for somebody
of her own bloodline to be sitting in a ripperdoc's chair with a housing in reach, and the
family is the piece she could not manufacture.*

**IT ANSWERS THREE OF §D's HOLES OUTRIGHT.** Why nothing comes back at them: **the Choir RENTS
FROM HER**, so the most dangerous person in the city is filed under premises, and by the time
the pattern resolves it is too late to act in force. Where everybody else is: the bigger
authority has been on their side for a century. The scale: they were never the weapon, they
were the last component.

**NEW CHARACTER FACT, RULED: she wears a bio-gren suit.** Her six attendant bio-grens are
already canon; this makes her one of them and explains a longevity the book never accounted for.

**WHAT MUST NOT BREAK, and it is one thing: nobody ever tells the courier why he was chosen.**
She arranged the **conditions**, not the man — she needed someone of the bloodline in that
chair, and which body turned up was chance. **No night may imply she picked him.**

**Plants at `a1-hum` (night 1 — a REOPENING of the hardcoded cold open, handle with care) and
`a3-principal` (31), alongside the theft. Every night between gets one thread at most** — the
point is that it is invisible until it isn't.

---

## §F. THE FOUNDING LOCK — ruled, and not a retcon. NOT WRITTEN.

*Checked at v5.71.0: the phrase "own blood" appears **nowhere** in the corpus. None of this is
on the page.*

**The author's note:** *the Principal is also locked out of the machine. The Architect's lock
is a double-edged sword, because he used his own blood to forge the key while they were
estranged, and died before she could learn what he was trying to do after seeing the Choir
take the machine. She discovers this, but cannot unlock it alone. So she preserves herself and
dedicates her life to undoing the thing that estranged them. She knows about Vic — aiding the
blood-scan secretly, supplying him the parts anyway. Even she does not understand why the
courier fits, but the maths check out.*

**THE RECEIPT THAT NO RETCON IS NEEDED:** `a3-vic`'s own `before` already says, about Vic,
*"his own tissue could hold the door open and never knock, and he does not know why the
difference exists either."* **The lock has distinguished holding from knocking since it was
written.** The Principal's whole predicament is Vic's predicament, one character over.

**THE SHAPE:**
1. The Architect forged the key with **his own blood, while they were estranged.** It kept the
   Choir out and it kept **her** out.
2. He died before she could ask what he intended. **The argument was never finished — that is
   her want, already in `WANTS`.**
3. She can hold the door. **She cannot knock.** She is not of his blood; they were partners
   who lost a child, not relatives.
4. **So she preserves herself** and spends a hundred and thirty years undoing **the keeping**,
   which is the thing that estranged them. His position was *teach her to let go*; hers was
   *nothing that can be lost is safe*. **The family finishing the machine's keeping in the
   finale is her argument being won against her, by her own hand** — and that is already what
   happens.
5. She finds Vic, feeds the scan secretly and supplies the parts anonymously. **He thinks he
   has a very good grey-market supplier. He has a patron.**
6. **Even she does not know why the courier fits.** The maths check out and the reason does not
   exist — which preserves the epilogue's ruling exactly.

**THE PEAK JOKE, AND IT IS A PAYOFF RATHER THAN A REVEAL.** The courier calls the machine
**GRANNY** because in the most abstract way possible they are related by blood: she is the
child the Architect and the Principal built after losing one, the lock is keyed to that
bloodline, and he is the only living thing left the door answers. **The name has been in the
game for ten nights and nobody has ever explained where it came from.** This is the
explanation, and it costs nothing.

**Write it as a laugh that lands and then goes quiet. NOBODY IN THE ROOM EXPLAINS IT** — there
is a sweep guard standing over exactly that.

---

## §G. THE 123 CHOICE LINES THAT NAME NOBODY

**The author's note:** *some of the choices are ambiguous about who they are addressing and
whether it's the second or third time the courier is asking. The player can select the first
card in a series and then be confused on the second take because the choice is ambiguous.*

**Half of this is closed.** `rowBadge()` badges any row returning to a card already opened —
**"2ND TIME"**, **"3RD TIME"** — and prefixes **WHO ANSWERS** only where the sentence does not
already name them. **The line string is byte-identical**, because a choice line is the deal
KEY: `railDeal` maps `normLine(line)` to a card index. **The badge is rendered beside the line,
never into it.**

**WHAT IS OPEN: the lines themselves.** Every choice line names its addressee — **never a bare
her, him, them or "again"**. Only the author knows who "her" is in a given room and it has to
read naturally, so no machine can do this one. **It rides the narration pass, where every line
is being touched anyway.** `allrails.js` lists the remaining 123.

**USE THE BADGE AS THE METER.** Drive a night, and **any row still showing a NAME prefix is a
line the rewrite has not reached.** When the writing catches up, the badge goes quiet on those
lines by itself.

**TWO TRAPS.** A card's badge says who ANSWERS, off `t.who` — so a take line reading *"Ask
Vic…"* on a card whose `who` is Pia renders as "Ask Vic… **PIA · 2ND TIME**". **Address the
card's own answerer.** And **a card whose SECOND TAKE changes speaker will badge the wrong
person**; `hideWho:true` is the right tool for that shape, and for the handful where who
answers is the surprise the card is built on.

---

## THE SMALL OPEN ITEMS

**THE CAPTURE BEAT DOES NOT EXIST.** The bible: *"THE CAPTURE IS ITS OWN BEAT, between
a2-choir and a2-annul: the ambush, what it costs, and a Choir officer in a shack with a
recovery team already looking. It is currently missing entirely and the annulment reads as
assumed."* Night 19 is a knowledge night; night 20 opens with a commander already in a chair,
and nobody ever took them. **It is blocked on engine work, not writing:** adding a beat means
inserting into `SPINE`, and `beatIdx` is a **position** that live save files hold. Every index
at or after the insertion shifts and a save resumes on the wrong night. It needs either a save
migration keyed on beat id, or the beat appended with the order held somewhere other than the
array index.

**THE MIRREN DOCTRINE STILL WAITS FOR NIGHT 19.** *Machines serve, never harvest* is in the
bible as a law the family may write, and her grave is where it comes from. It is deliberately
**not** at the cairn — it belongs on `a2-choir`, once they know what the harvesting actually
is, where it reads as an answer rather than an invention. **`a2-choir` is a finished night, so
this is a REOPENING**, and it must read as the family reaching back to her grave for the name,
not as a line she left lying about.

**THE FATE-ONE RHYME IS STILL NEVER SAID ALOUD.** "Taking turns" rhymes with fate one and the
book has never noticed out loud. Night 20's room walks close to it and turns round. The bible
says a character does it — probably Three, possibly Five. **It is still nobody.**

**FIVE NEVER BECOMES THE WAY INTO THE VAULT.** After night 20 he appears twice, in a graze and
a kitchen line. The vault descent has Marek and not him.

**VIC'S FILE STILL NEVER SPEAKS.** It is load-bearing — night 20 turns on its steps being read
out — but it is a document in the scene rather than a voice in it. **Whether it ever gets a
nameplate of its own, all caps, out loud, through the wrist, is an open question for the
author.**

**A LEADING ELLIPSIS IS LOST ON THE PLAYED PATH.** `["Vic","...I arranged a night. Tea."]`
renders as *"I arranged a night. Tea."* **`renderBlock` called directly preserves it**, so the
strip is somewhere on the played path (`playAuthored` / `serveSceneTurn`), not in the renderer.
It is book-wide and it predates the polishing pass — the ellipsis-opening line is one of the
book's habits. **It is cosmetic, and what is lost is the beat of hesitation before a line,
which is exactly what those lines are for.** Worth one short wave: find the strip, decide
whether it is deliberate, and either keep it and stop writing leading ellipses or drop it and
let them through.

---

## WHAT MUST NOT BREAK

**THE SEAL ON THE COURIER'S BLOOD.** The bible: *"a **deliberate open mystery** — descent,
fluke, or something Vic never dared test… the canon never fully confesses. What the hash-key
actually is, and why the design demands a seated mind, belong to the same sealed stratum —
**hint at a shape, never confirm one.**"* A proposed fix once had the Architect keying the lock
to his own bloodline and the courier descending from it. **Ruled: the seal holds. Do not
confirm it, in any beat, ever.**

**NOBODY EVER TELLS THE COURIER WHY HE WAS CHOSEN.** Vic never said, there is no entry about
him in the founders' records, and the family says so to his face. **That is the door left open
for a second season and it must stay shut.**

**WHAT SEVEN WAS ON THE LISTS STAYS SEALED — ruled, final, and not to be re-opened.** *How he
got out* is his to tell and he tells it; *what he did* is the hole in him that the family steps
around, and it is stronger unspoken.

**EARN THE ANNULMENT; DO NOT REMOVE IT.** Marek is in the cast of every beat from `a2-law` to
the end — thirteen nights. `a3-dreamers` hangs a failure on **Five's watch**, `a3-stone` has
Marek holding the courier's other hand, and `a3-seize` closes on *"two pilots who take turns."*

**HOW NINE HEARD ANYTHING INSIDE THE FARM IS AN OPEN WORLD FACT AND MUST NOT BE INVENTED.** A
shard is a stone unless somebody is holding it, and she was in nobody's hand there.
`a3-dreamers` reached the room it was needed in and **refused rather than invented** — *"I do
not have a where"* — so the gap is hers rather than the author's. **Leave it that way unless
the author rules otherwise.**

**NOTHING ALREADY WRITTEN GETS RETCONNED.** The author's standing instruction, and it is why
§E and §F are folds rather than rewrites.
