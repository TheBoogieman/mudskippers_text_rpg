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
v5.33.0**; next is `a2-law` (21), then `a2-turn` (22).
*Night numbers are the board's 1-based ones; `SPINE` indices are one lower.*

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

### `a2-law` (21) IS THE NEXT WAVE, AND ITS SUBJECTS ARE RULED — 2026-08-16

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
