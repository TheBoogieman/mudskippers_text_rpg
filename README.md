# MUDSKIPPERS — The Courier's Run
### A cozy-cyberpunk story game. Bring your own AI. Nothing leaves your machine.

The rain in Lower Veldt Market doesn't fall so much as leak. You're a broke courier,
it's 11:47 PM, and the data shard in your pocket has started humming.
Data shards do not hum.

---

## Play it

**Online:** https://theboogieman.github.io/mudskippers_text_rpg/ *(GitHub Pages)*

**Install it like a real game:** open the link in Chrome, Edge, or Brave and hit
**INSTALL AS APP** on the title screen (or the install icon in the address bar).
You get a desktop icon, a Start-menu entry, its own window with no browser chrome,
and it works offline. Updates arrive automatically.

**Offline files:** download `index.html` **and `corpus.js`** — plus `veldt-skin.css` and
`veldt-menu.js` if you want the skin — into the same folder and double-click the HTML.
The corpus is not optional: it holds every authored word, and without it the game opens
with no beats, no cards and no bible. (Until v5.39.0 this was one file; the writing was
half of it, so it moved out.)

First visit? A three-step **GUIDE** walks you through everything.

## Two ways to play

NEW GAME asks one question before anything else — **WHO RUNS TONIGHT?** — and the run
remembers your answer for as long as it lives. The two are genuinely different games
sharing one file, and a save from one never opens as the other.

| | **THE NOVEL** | **THE WILD TABLE** |
|---|---|---|
| Who writes the night | The book. Every beat, card, door, landing and peril is authored and dealt by the game itself. | Your model. The middles, the perils, the closes, the opens and the season turns are all its call. |
| Needs an AI? | **No.** No key, no model, no setup, no internet. A novel run makes **zero** network requests from the cold open to the epilogue — even with a working key sitting in Settings. | **Yes.** The run will not start without a connected model, and it says so at the door. |
| The clock | Real. Each night has a budget; run out and the world takes the night and charges a toll. The pressure strip shows it. | Yours and the DM's. No floor, no forced close, no toll from arithmetic — so the strip is hidden, because a gauge wired to nothing is scenery. |
| The rail | Dealt from the beat's own deck of authored cards. | The DM's own choices, every turn. |
| Typing | **No bar at all.** The novel is played on the rail: pick a numbered choice, and that is the whole control. | The bar, plus a MUDSKIPPER MOMENT button beside it — the joke, the wild line, the thing that gets you thrown out of better establishments. Free; they never cost a turn. |
| Who writes the seams | The book. Every night's opening scene and its closing passage are authored and dealt. | Yours by default — or tick **"…and let it write the seams too"** on the wild door and the storyteller writes those as well. Decided once when you start the run, and fixed for that run's life. |
| Best for | Your first run, a plane, a laptop with no key, or reading the story as written. | A second run, a stranger night, and finding out what your model does with the keys. |

Whichever you pick, the same things are never negotiable: **the dead stay dead**, the
voice physics hold, the courier's chair is yours alone, no death arrives without a
warning you could have answered, and every ending the game can reach it can still
reach. The wild table stands down the fences that protected *structure*; it never
touches the ones that protect *integrity*.

The **REHEARSAL ROOM** always runs as THE NOVEL — it is an authoring tool for the
authored game.

### The stable — DMs we recommend for the wild table

The wild table's Settings offer a short, curated menu (plus a free-text box, because
recommendations are not a cage). Start with **`anthropic/claude-sonnet-5`** — it holds
the lane, keeps the register, and knows when a night is over. If you want whole
campaigns for pocket change, **`deepseek/deepseek-v4-flash-0731`** is obedient and
workmanlike; **`deepseek/deepseek-v4-pro`** is the first knob to turn if the cheap
one's banter runs flat. **`anthropic/claude-opus-5`** is for players who want the night
*judged* rather than merely written, and **`google/gemini-3.1-pro`** is worth a night
for the taste of it. Reasoning-first models are deliberately not on the list: latency
and analytical prose are the wrong shape for a table DM. On Claude models the game
marks its own rulebook as a cache breakpoint, so most of each turn's input bills at a
fraction of the first one.

## The title screen

A proper main menu: **CONTINUE** (picks up your last run), **NEW GAME** (Day 1, the
rain, the humming shard), **RUNS** (save manager), **LEDGER** (read the chronicle of
your current run, download it as markdown), **CANON VAULT**, **SETTINGS**, **GUIDE**,
and **INSTALL AS APP**. The MENU button in-game brings you back any time.

## Hook up your AI — no key-pasting required

| Path | Friction | Notes |
|---|---|---|
| **Connect with OpenRouter** | one click | Approve on their site, come back connected. Any model, including Claude. Nothing pasted, ever. |
| **Use a local AI** | one click | The game detects Ollama / LM Studio running on your machine and connects, auto-filling the model. Free, private, offline. |
| Manual key | paste once | Anthropic / OpenAI / any OpenAI-compatible endpoint. Stored only in your browser. |

Every AI call goes directly from your machine to the provider you chose. There is no
middleman, no telemetry, no server of ours — there is no server at all.

## Saves & the Ledger

Pick a save folder (SAVE FOLDER button, Chromium browsers). After every turn the game
writes two files there:

- `mudskippers-save-<timestamp>.json` — the full run, resumable
- `mudskippers-ledger-<timestamp>.md` — a readable chronicle of everything that happened

The **RUNS** menu is the save manager: every playthrough in one list — load any of
them, or retire one (the story-log stays; the chronicle survives the courier).
On Firefox/Safari, saves live in the browser and the ledger downloads on demand.

The ledger is designed to be handed to any AI assistant ("here's my run, pick up as
the DM"). Everything needed to continue a run lives in that one readable file.

## The cold open is dealt, not generated

A new game opens with a golden card — who you are, who Vic is, what the personal run
was — then the street, the humming shard, and a kid who doesn't melt back into the
crowd. One gold choice: **INTO THE RAIN**. The reveal that follows is dealt by the
game itself, word for word, no AI required — the DM inherits a table with the cards
already face up. (The gold bar looks open during the cold open. That is the bait.
Try it.)

## How the night works

The game is a list of questions. One is live at a time — that's the beat. When a
question goes live you'll get a green card: **TONIGHT**, and what it's about. You get
a handful of turns of night, usually four or five. Spend them however you like —
bits, detours, long dinners; all of it is loved and recorded — but somewhere in those
turns, take one honest run at tonight's business. That is the entire expectation. Not
speed. One reach.

If the night runs out, the game refuses to stall — that is its oldest promise — so
the world answers the question for you, and that costs a **toll**: not a punishment
for what you did, a fee for what went undone. Your bits never feed the clock:
mudskipping stalls the night for as long as you're playing. You'll see everything
coming — a yellow card when the road is short, a second when the world stirs — and
every toll explains itself when it's paid. Three are survivable and the meter
re-zeroes every season. A fourth doesn't end anything: the world folds the table,
catches the story up without you, tells you exactly what it did on a gold card, and
hands you the season's finale with a clean meter.

The hard endings are few and all of them are yours to see coming: the mortality rules
warn you before they take the courier; killing someone the story is standing on ends
the run out loud; and the red control under the rail is the way out of the whole
thing. Use it and the family feels it, and you get told plainly what a second one
does. Use it twice in a row and the courier really does put the job down — the end of
that run, quietly, with nobody dead. Anything else resets the count.

Between questions there is no clock at all. The aftermath, the slack, the family's
time — those are yours, forever, free.

One more rule, and it protects you: you own the courier, and the world owns the
world. What you *do* is law. What you *guess* is a guess — say "it was Mirren" and be
wrong, and the only casualty is the courier's pride.

## The game is a series now

Three **seasons**, each a book of its own with three internal acts, a finale, and an
end card: **THE PERSONAL RUN** (~80 turns), **SOMEONE MUST BE SAVED** (~110), **THE
MACHINE** (~100). At each season finale the run performs the **archive ritual**: it
distills itself once, ceremonially, into a **Season Record** — what happened, who we
are now, what we carry, what it cost, where things stand — written from the run's own
registers, no AI calls, and filed into the ledger under a season break. The record
resets the working memory (jokes are family heirlooms; the best eight travel), zeroes
the season's tolls, and is then dealt to the reader as an on-screen **PREVIOUSLY ON**
— the season's real story in order, folded beats marked as the ones the world did
without you, and the names it cost underneath in red.

The seam itself is written, not asked for. The board is the only thing that knows how
long the gap is — six days between Book One and Book Two, seven between Book Two and
Book Three — so the board writes it: the finale lands in a scene of its own, the
record closes the book, and the **premiere** opens the next one in a new room, on the
new day, with people already mid-sentence. No model is called at a season boundary at
all, and the first move of a new book is yours.

Nothing distilled is truly gone. Everything the ritual retires drops into an
entity-indexed archive, and **the game remembers on demand** — walk back into a place
or say a name, and the run's own past is quoted back verbatim, never re-summarized.

And one truth told spoiler-lightly: **the receiver did not stay put.**

## The rehearsal room

An authoring tool, on the title screen. Pick any one of the thirty-three questions
and play it in isolation, as many times as you like, labelling each take with the
approach you took — *stall-heavy, hostile, comic, straight at it*. The record before
the beat is seeded from the board itself: every earlier beat's authored canon, its
gate note, its stones, the cast the road has named. The spine **is** the history, so
a mid-season question opens where the story would actually be rather than in a void.

Rehearsal runs live in their own drawer. They never appear in RUNS, never move the
CONTINUE pointer, and never write a file to your save folder — a night of rehearsing
leaves a real run exactly where it was.

**EXTRACT** gives you a worksheet, not a transcript: the beat's authored spec, the
tempo it's written in, the state it opened on, every rail line ever offered split by
slot, every scene as speaker/text blocks, what each take closed on and what it cost —
and a node skeleton pre-seeded with the stall prompts players were actually given, to
write into. It's built for handing to someone (or something) that has to author the
offline version of that beat without the repo open.

## The prompt book — what the storyteller no longer writes

A beat used to hand the AI four jobs and hope. It reliably did one. Asked to put
"the move that ends tonight" in slot one, a local 24B spent an entire four-turn
beat offering *what's the safehouse look like* and *what's Vic told you about me* —
four stalls in the exit's chair — and the board closed the night on a scene that
never contained it.

So the rail is the game's now, top to bottom:

- **The exit is pinned and authored.** Every one of the 33 questions carries two
  or three versions of its own way out, in the courier's voice — loose about *how*
  (the scene owns that), exact about *what* (the board owns that). One sits in slot
  one and they rotate while the beat stays open, so a player who digs in sees the
  same door worded differently rather than the same sentence four times. Take it and
  the beat closes, **green**, once, guaranteed.
- **The door is never locked.** It is the one honest way out of tonight, so it sits
  in slot one from the first turn and it is takeable from the first turn. Locking it
  to the end of the beat taught the player that the rail lies about what it offers.
  It **asks twice**: a door that ends the night should never be something you find
  out you clicked.
- **The bail-out is authored the same way**, and what leaving *means* moves with the
  story: handing a shard back in Book One and walking out of the heart room in Book
  Three are not the same sentence, so they are not the same sentence.
- **The storyteller writes two dead ends.** That's it. It's told the pinned line
  verbatim so its two don't collide with it — and when it ignores that and hands
  the door back anyway, the game drops the line rather than printing it. A "dead
  end" is checked against *every* authored wording of that beat's exit, not just
  tonight's, loosely enough to catch a paraphrase. Anything that opens with a
  bracketed aside about the rail or the board gets that aside stripped: a choice is
  only ever the courier's own words.

## Openings and landings

Every question is bracketed by authored prose, played instantly by the game the way
the cold open is:

- **The opening** — when a question goes live it establishes itself: a time, a place,
  three sentences and two dead ends, with the pinned exit dropped in front of them.
  No more nights that begin with somebody walking and somebody repeating the last
  thing they said.
- **The landing** — a card is not a transition. The beat closes, the page turns *in
  the same breath*: the clock moves, the family is somewhere else, three sentences
  put them there and a fresh rail belongs to the new room.
- **The scar rides it.** A beat the world took off you does not land in the room you'd
  have landed in. Each question has a second, harder landing written from inside the
  loss — miss the conversation with Nine and you get the overpass with her still in
  your jacket, and Pia not making the joke.

Both land in the storyteller's own context as scenes it appears to have written, so
the next turn never opens with the model quietly missing something you already read.
And the moment a gate falls, the board **arms the DM with the next question** — named,
not playable, fenced off from arriving — so the quiet turns lean somewhere instead of
wandering.

716 authored lines, one-to-one with the board. The AI's job is now the middle.

## The scene book — the middle, as data

The middle was the last thing left to the model, and it was where the run came apart.
The board told the storyteller what tonight was *for* and left the how to it. That
works on a large model. On a cheap one it fails in one specific place: **the stall.**

A stall said *give them the answer under the answer* without ever saying what the
answer was, so the model invented one — and every extra stall invented a little
further from the story. Ask a 24B who was watching you in the market and it will
happily explain what the Choir does to people, five nights before that question is
supposed to exist. The drift grew with the stalling, and by the end of a night the
middle no longer agreed with the card the game printed over it.

So the middle is written down too, and it is sent as **data rather than prose**:

- **Each night carries a table of what can actually be dug into.** One entry per
  topic: who answers it, the true thing they give up, and the thing they will not
  say tonight — plus *how* they get out of saying it, because somebody refusing well
  is better television than somebody explaining well.
- **The game reads what you typed and deals exactly one card.** Ask about Mirren and
  you get the Mirren card. Ask about nothing in particular and it deals the next one
  you haven't seen. **Stalling spends the list instead of inventing past it**, and it
  never deals the same card twice in a run.
- **The card is sent as a small JSON object at the very bottom of the message**, under
  six numbered rules. That position is deliberate: a large model reads six thousand
  characters of briefing and does as it's told, and a cheap one reads the front, the
  back, and skims the middle — which is where the rules used to be.
- **The night's destination rides with it.** The storyteller is told, in the landing's
  own words, where this beat is standing when it finishes. It used to write the middle
  of a night without ever being told how the night looked at the end of it, which is
  the whole reason the in-between stopped matching the end cards.
- **The fence rides in the structure too.** Everything not yet unlocked is listed in
  the object, not only in the prose above it. A fence is only a fence where the model
  is actually reading.

The sealed room after each beat gets its own table, on the same rules — which is the
part of the night that is *entirely* conversation, and so was entirely drift.

Written for all thirty-three nights and every room after them: **251 cards.** A
night with no entry behaves exactly as it did before — the prose block, and the
storyteller's judgment. The Writers' Board shows both on the same page, so what has
been written and what has not sit next to each other.

And since v4.64.0 every one of those cards carries its own **rail and its own scene.**
A card's topic was always a *subject* — "what happened to Mirren" — which is a thing
the night is about and not a thing a courier can say, so the deterministic build had
nothing to put on the button. Now each card holds the line in the courier's own voice,
and behind it four to six authored blocks: narration, the family answering, somebody
refusing well. **1,152 blocks across 251 cards, 767 of them spoken aloud** — counted by
the release check rather than by the commit that pasted them, which is why the number
moved. The model
is not needed to write the middle of a night any more. It is needed to paint between
the turns — which is the job it is actually good at.

**And since v4.70.0 the rails are what you are actually clicking.** They shipped in
v4.64.0 for a reader that had not been written yet, so for six releases the row under
the door was the same two house lines every turn of every night — which is why a
playtester clicked one of them seven times and got the same scene seven times. The row
is dealt from the deck now: the questions this room has left, in order, each one
retiring the moment it is spent, and the line you click deals the card it was dealt
from rather than the card a keyword scorer thinks you meant. When the deck runs dry
the row falls back to the door and the stalls, which is the room telling you it is
finished — and if you ask anyway, the family says *asked and answered* in their own
voices instead of reheating a scene. Since v4.71.0 a handful of cards carry a second
authored wording, and each run deals one of the two — stable for the whole run,
different on the next playthrough — so a second run reads a little differently before
it plays differently. And a suggestion the *landing* put on the row (a tender line, a
piece of conversation) is answered as conversation, in the family's own voices — it no
longer walks into the deck and comes back wearing whichever card was next in the pile.

**And since v4.67.0 that is how a scene turn actually plays.** The card the client just
dealt is served straight to the screen — the authored blocks, the fork's own frame — and
**nothing reaches the wire**: no gate field for a reply to set, no day to skip, no canon
to write. The world never lived in the reply; it lived in the fences that policed the
reply, and with no reply there is nothing to police. Gate landing is the client's: a
night ends when you take the twice-asked exit, or when the world closes it on its own
budget arithmetic.

One night in thirty-three has **two doors instead of one.** The chassis is Nine's, and
the question of who lives in it is the biggest branch in the season — and for every
recorded run it was decided by a fallback, because the branch lived in a field the
reply was supposed to carry and never did. It lives in the door now: two endings on
the rail, each one the courier saying where he stands rather than choosing for her,
each one asked twice on its own. What you pick is which cost the family shoulders.

And the door answers to the keyboard too. Its wording rotates every turn, so a player
who read the ending on turn one and typed it on turn two used to get a scene about
something else with the night quietly ending underneath it. A line that IS one of
tonight's authored doors is that door — exact wording, nothing looser, because the
cost of guessing wrong here is a night you did not mean to end.

It did not flip until it had earned it. One night, a1-chase, open to close on authored
blocks with the wire at zero — then **the same night again with the endpoint throwing on
sight, transcript for transcript identical**, which is the only proof that matters that
the model was never in it. Then all thirty-three beats closed twice, once with the flag
up and once without, booking the same thing at every step — checked against a booking
moved on purpose, because a comparison that cannot see a moved booking is not a
comparison.

## The physics desk — the body of the world

The bible has always *told* the storyteller the physical laws, and telling is not
keeping. Nine speaks only through bare skin on the shard — the most-repeated law in
the whole file — and a 24B still had her answer a question through a closed jacket,
in the same reply where Pia says *you can't hear that through cloth.* The model
wasn't being careless. It was being asked to hold a fact about the world across a
turn, which is the one job it reliably cannot do.

So the client keeps the body of the world, the way it already keeps the roster, the
fence and the clock. Every law needs three parts, or it is just prose again:

- **Track.** The client knows where the shard is, what hour it is, and what room they
  are standing in — derived from the player's own move first, then from the prose
  that came back. The player's hands are the player's: reaching for the shard *is*
  taking it out, so the world moves on the move rather than waiting to be told.
- **Tell.** The true state rides every briefing and every scene contract, phrased as
  a fact rather than a rule. Not *she needs skin contact* but **she is in his jacket
  right now, and she does not speak this turn.**
- **Enforce.** A reply that breaks it is re-rolled once, and on the second refusal the
  offending lines are cut — same shape as the chair, the fence and the cast gate,
  because one correction is a request and every gate here that stopped at asking has
  been walked through.

Three laws so far, and they are data, not pipeline — adding one is a table entry:

- **The hum.** Nine reaches a person only through skin on the shard. Unheld she is a
  stone: she cannot hear the question, cannot answer, does not speak. Checked block
  by block down the reply, so prose that legitimately puts her in his hand halfway
  through frees everything after it.
- **The body she does not have.** She does not reach, stand, nod, step, touch or
  breathe, and she moves only when a hand moves her. Narration only — a *person*
  saying "Nine held on longer than most" is a figure of speech.
- **The dead house.** Vic's safehouse is off the grid and cable-only. No wire buzzes
  there, nobody rings through. The silence is architecture, not mood.

The hard part turned out to be reading the fiction correctly rather than writing the
rules. Two passes were lost to it: **dialogue is not an event** — Pia saying *"I'm not
taking her out of your pocket, that's a you job"* is a scene obeying the law
beautifully, and it moved the shard into his hand in the client's model, which then
stopped enforcing for the rest of the run. And **a hypothetical is not an event** —
*if he took her out, she would hear him* is not him taking her out. Only the world's
own narration, in the affirmative, moves anything.

The clock is tracked the same way and only ever goes forward — with the midnight
amendment, because the board's authored landings roll past twelve and keep the same
day on purpose. A night is a night. It stands down below the hatch, where time runs
about a minute inside the machine per second outside and a turn coming back out is
legitimately stamped *earlier* than the turn that went in; down there the day is
guarded instead, because a subjective week inside is still minutes on the surface.

### Twenty laws, and the sweep that keeps them honest

The laws now run the length of the spine — the hum, the bodiless (a mind in the
courier's skull has *less* body than a shard: a shard at least sits somewhere), the
fork (whoever did not get the one chassis does not walk or cook), the machine (she
is a room, and a room that kneels and takes your hand is a different story), the
mouth (a stone does not eat, and the warmest mistake a model makes is setting a
place for someone who cannot use it), the Hollows (nobody home, so no line), transit
(**no mind is ever uploaded, copied or backed up** — a world with backups has no
permanent death in it), the one chassis, the sleepers on the shelves, the six
bio-grens, and the vessel law: when the family's only ripperdoc dies, the skill dies
with him and what is broken stays broken.

And since v4.65.0, the two jurisdictions. There is one chassis and one spare room, so
whoever misses the body rides the courier's skull for the rest of the story — and the
two voices in him do not share a door. The housing is his alone: she speaks to him and
to nobody else standing there, and the room hears her only when he says it out loud.
The wrist is the file's: all caps, out loud, heard by everybody, and never once inside
anybody's head. Four scenes in Book Three are written twice because of it — once for
the fork where she stands at his shoulder, once for the fork where he repeats her, word
for word, to the family. Being somebody's ear runs both directions now.

Keeping twenty detectors honest needs a test bigger than reading them. There is
one, and it is free: **the game's own authored prose is legal by definition.** Open
**index.html?selftest** and every one of the 106 written passages is replayed past
the desk at its own beat, in the state the game would actually be in, on all three
sides of the chassis fork — 3,428 live law evaluations. A single hit is a bug in a
rule. Then the grid runs backwards: nine scenes that plainly break a law, each of
which must be caught *by the law it was written for*. The page also declares what
it does **not** cover — six of the twenty laws have a case that proves them, and
the other fourteen are named on screen, because a sweep that hides its own gaps is
worse than no sweep. In CI: load the page and read window.__SELFTEST__.fail.

Two more things the page does, both of which exist because the sweep was once caught
flattering itself. A case may declare the **broken form** it was written against — the
old regex, the pre-fix rule — and the sweep re-runs the same assertion against it and
requires it to *fail*; a case that passes against the bug it claims to catch is not a
case, and goes red. Credit for that is *observed*, not read: the check is only counted
as proof if it actually entered game code, which is why the header says "16 PROVED of
34" rather than a green thirty-four. The other eighteen are amber — real assertions,
no proof they would have caught their own defect — and amber is counted apart from
pass so the headline cannot launder debt as success.

And every detector declares what it must **not** change. All nine predicates are run
over all 2,154 authored lines and the exact set of lines each one fires on is checked
in as a fixture; a change to any predicate shows up as a diff, and a flip on a line
nobody listed is red. It catches the two regressions of that shape this codebase has
actually shipped, and misses a third, and the page says which.

That sweep has earned its keep. It found that the board's own writing broke the
board's own law (from night two onward every authored page has Nine talking, but
only the first declared where she was, so after the *hard* landing she was left in
the jacket); that `holding her` had started matching **"holding her mug"** once the
rooms filled with other women; that **"Nine" is also a number**, so nine Hollows
walking down a street read as one bodiless person with legs; and two bugs of mine
that would have been very hard to find by playing — the fork lands in the same reply
that reports it, so the scene where Nine finally stands up in a body was checked as
if she were still a shard and would have been *cut*; and authored passages never fed
the clock, so a single overshooting turn could freeze it permanently, silently, and
into the save file.

## The trapdoor — when something goes wrong

**Middle-click the shard.** A panel opens over the run with every number the night is
actually running on, and none of it is fiction: the pointer and where it sits on the
board, the gate and the witness text the anchor check reads, which anchors are missing
*right now*, the three doors and which line is sitting in which slot, the tolls, the
drift, the fold, the peril clock, the whole thirty-three-beat road marked closed /
forced / live with each gate note under it, and the exact bytes that went to the
storyteller last turn next to the raw reply that came back.

It reads the machine and never touches it. That is a constraint rather than a
courtesy: two of the things you'd most want to see — the board's press directive and
the memory briefing — arm flags as a side effect of being built, so a panel that
called them to show you "what we send" would change the next turn by being looked at.
The composed payload is therefore read back from the last real send; everything
computed live is a pure builder. Leave the panel open and it re-reads itself after
every turn.

**COPY REPORT** / **DOWNLOAD REPORT** give you the same thing as a markdown file: the
panel verbatim, the outgoing payload, the raw reply, the last fourteen feed blocks and
the entire save as JSON — enough to reproduce a turn rather than describe it. The
panel and the file are rendered from one structure, so they can never disagree.

The one row worth knowing on sight is **whole wire**: the total characters across
every message actually sent, with a token estimate. A local model whose context window
is smaller than that number silently discards the front of the prompt — the rules, the
board, the fence — and nothing in the game can tell you it happened. This row can.

## The road — one list, said once

The board used to say the same thing three times a turn: a storyboard naming every
question in the season, a fence naming the next six *again* with their exits, and an
armed-next block naming the one after tonight a third time. All of it rode every
turn.

It's one block now. Each question appears once and its line does both jobs at once —
this is where the road goes, and none of it may happen yet:

```
THE ROAD — SEASON 1 of 3, THE PERSONAL RUN. Fixed, and the board's…
  done — the shard that hums · no way home · the safehouse door
  >> TONIGHT — the last fare
  NEXT — the delivery is late: The trap stands up. Mirren — the receiver, worn…
  fenced — "the clean exit": the exit has been answered or has expired, out loud…
  fenced — "the courier, carried": the courier is clear of the sweep because…
  fenced — and further off still: the keeping.
```

Nothing was dropped: the near questions still carry their exits, the far ones are
still named, the discipline paragraph still runs underneath, and on the quiet turns
the leaning order and the knock clause still ride along. It is simply said once.

## How a season actually ends

Each season is a **flowchart**, not a mood. Thirty-three beats across the three
seasons live in the game itself: each one names the single thing it exists to
accomplish, the gate that ends it, its own turn budget, what it is allowed to reveal,
and the canon it writes when it clears. Every turn, the DM is handed exactly one
instruction — *this is the beat, steer to this gate, and do not invent past it* —
and, under it, **the storyboard**: the whole season in order, what's cleared, what's
live, and what's actually next, with a logline. A DM that can't see the road invents
one; asked "so what's the plan?" in the family's own quiet time it will produce a
fixer and a dock out of thin air and send everyone walking, and the real next beat
has to elbow its way in afterwards. The cure isn't a stricter rule, it's an answer:
when the table asks where this is going, the true reply is already in the DM's hand.

The three books also do not sound alike, and the DM is handed the difference every
turn. **Book One is a chase** — short lines, no speeches, no backstory offered
unprompted, nobody growing as a person, because these people are being hunted and
have no room to be characters yet. **Book Two breathes**: the hunt ends inside it, a
family forms around a table, and the banter picks up properly. **Book Three carries
weight** — deliberate, fewer jokes, and none of them nervous.

The DM does not decide the plot and cannot wander off it:

- **Branches are routes, never forks.** You decide *how* a gate falls; the board
  decides *that* it falls and what is true on the far side. Burn down the wrong
  building and you still arrive at the same beat, having burned down a building.
- **Nothing is revealed before its beat.** Everything the run hasn't reached is
  served to the DM as a locked list it may not confirm, hint at, or write canon
  about. Improvisation stops becoming permanent truth.
- **And nothing *happens* before its beat either.** Every later gate in the season
  rides along as a fence — named, and forbidden. Not on screen, not in summary, not
  as someone finally explaining, not as a reward for asking the right way. People can
  be walked toward; they cannot arrive and they cannot deliver. A question played
  before its night arrives already spent, and the beat that owned it has nothing left
  to be about. If you reach for the next one during the family's own time, the DM
  doesn't hand it over — it knocks, and the board brings that question forward
  properly.
- **The plot's canon is written by the game.** When a gate clears, that beat's facts
  go into the run. Every route through a season produces the same spine.
- **A beat cannot stall — and cannot be rushed.** Each carries its own budget — most
  get four turns, the big ones five. Near the end the DM is told to angle toward the
  gate; at the budget the world acts without waiting for you; one turn past it the
  gate is **forced** — the game orders the beat landed and moves the pointer itself.
  A forced gate leaves a **scar**: one canon line recording that it happened rougher
  than it should have. And every beat also has a **floor**: a gate sent before the
  scene has been lived is held, and the DM is told to keep playing. The clock watches
  the storyteller's speed as closely as it watches yours.
- **The rail always reads the same way down, and you decide when the night ends.**
  Inside a live beat: **first the exit** — a real attempt at the thing that finishes
  tonight's business. Take it and the beat closes, because you reached for it. **Then
  two stalls that go nowhere on purpose** — the question under the question, the
  detail, the person pressed, the human thing said. They hold the gate open (the DM
  does not get to close a beat you're still standing in) and cost nothing but a turn.
  One is earnest, one is sideways; neither leaves you closer to the gate. A mudskipper
  moment is a stall with a joke in it: it holds the beat open and doesn't even cost the
  turn, unless you've called it. The slots belong to the game, not the storyteller:
  the DM is told what each position must contain and writes only the lines. Nothing
  about the rail depends on it remembering to label anything.
- **The way out is the game's own control, and it asks twice.** Below the choices,
  while a beat is live, sits one red option: put the whole job down and walk. It is
  authored per beat, so what leaving *means* changes as the story does — handing the
  shard back in a market alley and walking out of the Exchange are different sentences
  — and it can never come back missing. It takes two deliberate clicks. Use it and the family feels it, and the game says so on a red card. Use it
  again the very next turn and the courier really does go — that is the end of the run.
  Anything else in between and it is forgotten.
- **Calling it puts the exit away.** Arm the green call and the exit choice greys out
  for that turn: you have already promised your next move settles the night, and two
  ways to end the same night on one rail is just a way to misclick.
- **The DM cannot close a beat on you.** A gate lands when you reach for it, or when
  the road runs out and the board forces it. "The scene felt covered" is not a
  reason, and no beat can end before its third turn.
- **The page turns on the way out, and only when the world did the ending.** Close it
  yourself — the exit, or a call — and the story walks on out of the scene unbroken.
  Stall all the way to the end of the road and the world lands it for you, and cuts:
  time moves on screen, the family lands somewhere they can put their coats down,
  and the next turn opens there. Nothing is ever ordered on the *next* beat's first
  turn — a new question is yours to walk into at your own pace.
- **A beat closes completely before the next one opens.** Every gate is followed by
  the **landing** — a turn (two on an arc turn) where nothing new is allowed to
  begin: reactions, cost, quiet, the family being people about what just happened.
- **Then the clock stops, and the room is yours.** After the landing comes **the
  family's own time**, and it lasts exactly as long as you want it to. Gates are
  dead. The clock does not move, the day does not roll, nobody arrives and nobody
  leaves — the board seals the room: it ignores any day, time or place the DM sends,
  and refuses to file any name the family has not already met. Nothing the DM writes
  ends it. It is the only part of the night that is allowed to be about nothing, and
  that is what it is for: ask what the rain actually is, argue about what the vow
  means on a day it is inconvenient, find out what somebody did before, be funny at
  each other. The DM is told to spend the lore here — everything except what is
  fenced for a later question.
- **You open the next door.** After seven turns of conversation a card appears:
  *take the night on*. It does not nag and it does not expire. Press it when you have
  had enough of each other and the next question opens in a written room, with no AI
  call at all. Sometimes the game deals the DM an **interlude** during the family's
  time: a small optional scene from a hand-authored deck — a paying run everyone
  insists on joining, a ceremonial tasting, a rooftop where nothing happens on
  purpose. Suggestions, never orders, and each one is dealt at most once a season.
- **The knock is a doorbell, not a key.** If your typed action during the family's
  time is plainly reaching for the next matter, the DM can knock and the board brings
  the card forward early — but it is still your hand that opens it. Momentum,
  convenience, or the DM's good segue is not a knock.

The series runs **~80 / ~110 / ~100 turns per season — roughly 300 for all three
books** played with intent, longer played leisurely — and it cannot fail to end:
victory, death, or loss, always seen coming. Losing is season-shaped too: each book
loses differently, the toll meter is season-long, and the grave re-closes at every
season break.

### The chair is yours

Two promises, enforced by the game rather than asked of the storyteller:

- **The game cannot speak for you.** The courier's voice, choices, and growth belong
  to the player alone. A reply that puts words in the courier's mouth you never typed
  is caught and sent back to be rewritten. When a gate needs the courier to say or
  choose something, it must be offered as a choice and waited for — the door can be
  visible, but only your hand opens it.
- **Two channels, one bar.** Typing into the gold bar and pressing Enter is the
  courier acting — it costs a turn and the world answers. The MUDSKIPPER MOMENT
  button (or a `!` in front of anything) is the other channel: the bit, the joke,
  the wild swing — free, safe, and sacred.
- **Your bits cannot be spent.** A mudskipper moment lands as a bit: the family plays
  along or plays the straight man, and nobody diagnoses you. Mechanically it is
  immune — a gate cannot ride it, the rain neither ticks nor forgives on it, and no
  amount of goofing can be converted into the scene's sincerity. Sincerity arrives
  when you type it, and not one turn before.
- **And under the hood, a bit is a different kind of turn entirely.** It used to be
  enforced by the client stripping a world change back out of the reply after the
  fact. Since v4.60.0 a bit does not send the storyteller a scene brief at all.
  It sends a **skeleton**: two or three dialogue slots, each naming its speaker, what
  that speaker is doing with your line, and how long the line may be. The model
  answers with strings, one per slot, and nothing else. There is no location field to
  move the room, no day to skip, no canon to write and no gate to land — not because
  the model is forbidden them, but because the ask has no such field in it. A fill
  that fails its own lint costs its own slot and nothing more, answered instead from
  nine written house lines that are presence-gated to the room. A bit has stopped
  needing to be *caught* rewriting the world and has become unable to say one. Each
  slot also carries that speaker's **voice card** — how Hesta answers a joke is not
  how Vic does — and the room takes turns, so the same two people do not do all the
  talking for thirty-three nights.

The **LEDGER** panel and the courier's terminal both show the board: which beat you
are on, which arc, how many turns it has left, and how far along the season you are.

### Quests

Jobs are structured now. Every promise made, job taken, and obligation owed lives in
a quest log the game itself keeps: title, giver, goal, stakes, status — **offered,
active, done, failed**. The DM proposes transitions; the client keeps the book, and
serves the settled list back every turn so nothing finished ever quietly reopens.
Quests tied to a beat fail with it if the world has to force the gate — the world
moving on has a cost, and the log remembers it.

### The rain — and the tolls

Wildness is welcome; absence is not. A wild turn aimed *at* the story is a mudskipper
moment. A turn that ignores the season entirely — no beat, no family, no thread of it —
is **drift**, and the rain notices: a gold warning first, then a red one, and then the
city itself walks the courier back to the story's doorstep. The wandering is never
punished and never undone — it happened, and it stays — but the walk home is not free.

The world collects a **toll** whenever it has to force a gate or walk you back. Four
pips sit on the wrist unit; three collections are survivable, and the game warns you
plainly at the third. The fourth ends the season — **not with a death, with a loss**,
and each arc loses differently. Same law as dying: the count is always visible, and
nothing ends the season unwarned.

### The courier can die

He is mortal now, and it is permanent. No resurrection, no substrate copy, no
last-minute save — his death ends the season on the spot and the only way on is a
new game.

But it is never a coin flip. The game itself enforces the one rule that makes real
stakes fair: **nothing kills him that you were not warned about.** Before death is
possible the DM must declare **peril** — the threat named plainly in the prose, the
room gone red, a strip above your choices reading **ONE MORE WRONG MOVE**, and at
least one of the three choices a genuine way out. Only then, and only for two turns,
can the wrong answer be fatal. A death sent without that warning is rejected: the DM
is told to write the turn again, and if it insists, the death is dropped and you live.

Mudskipper moments are still safe. Being wild is not fatal; knowingly walking into
the thing that was just named as lethal is.

And the worst nights no longer ask the model at all. Some perils are **authored** —
the cordon's last gap, a flooded market floor, the last forty metres of a cable that
goes down further than anybody has been. When one opens, the night stops being a
conversation and becomes a short, lethal, entirely local thing: the threat named in
its own prose, three doors, and a clock that **does not tick.** Nothing inside an
authored peril reaches the wire, which is not a promise — it is why the beat cannot
age while you are holding your breath. One of the three doors is always the one your
eyes like, it never carries a keyword so no typed sentence can ever take it by
accident, and it asks you twice, and the second ask survives a reload. Refuse to
engage twice and the family moves you: you come out of it alive, marked, and not by
your own hand.

There are ten of them, and as of v4.70.0 all ten are live. Three are **gauntlets** —
the door out of that night opens the peril instead of ending it, so reaching for the
exit is reaching for the fight. The rest are **ambient**: once a night has run long
enough, the next thing you say is said with the thing already happening, and when it
resolves the night simply goes on. Every one of them is driven in the self-test on
every load — clear leg and graze leg, the temptation armed and refused, the death
text reachable only through the twice-asked door on the last stage — because a peril
is the one part of this game where being wrong is not a bad turn.

### Pressure you can see

There is exactly one gauge on the play screen, and it tells the truth: the beat's own
turn odometer, one dot per turn of the night, lit as they're spent, visible through
the whole live beat — with a countdown in plain words: **THE NIGHT HAS ROOM IN IT**,
then **TWO TURNS BEFORE THE WORLD MOVES**, then **NEXT TURN THE WORLD MOVES**, then
**OUT OF ROOM — NEXT TURN SETTLES IT**. The wrist says exactly the same words,
always. As the road shortens the room itself closes in: a vignette tightens and
warms, then reddens and starts to breathe, and when the world takes its own turn it
lands as a hit — the screen flashes and shoves, the rain leans harder. When a beat
finally closes, the board says so once in the feed — *that beat is closed*, or *the
world moved on*, or *the act turns* — and the pressure drops away.

The strip and the closing walls are plain HTML, so they still work on **VISUALS: CALM**
and **VISUALS: OFF**, and reduced-motion settings still win.

### MUD//OS — the courier's terminal

The wrist unit clipped to the right edge is the game's own face, and everything on it
is diegetic — what the courier himself could read off his arm. It glows green when a
turn writes something it will show, and goes quiet when read. Four screens:

- **STATUS** — location, day, clock, and the sky in pixel art (each of the twelve
  ambiences has its own 8×8 glyph); the current heading; the family as colored chips
  with the fallen struck through; the toll pips; the run's canon.
- **JOBS** — the quest log, active and settled, plus the season so far: cleared beats
  with their titles and summaries, told strictly in hindsight — the beat in play has
  no title yet, unreached arcs are censored bars, and between beats it says so.
- **CAST** — clickable dossiers: status, voice, who they've met, what they know.
- **MAP** — the city as far as it has been walked, grown from the run's own route
  registers. Drag to pan, scroll to zoom; your location is a pulsing gold diamond,
  and places named in open jobs carry a gold pin. Nothing unvisited exists.

### Twelve skies

The game has no art; the weather *is* the art. Where there were six ambiences there are
now twelve, each painted differently on the canvas behind the words:

| | |
|---|---|
| **rain-neon** | the usual leaking rain, wind-driven, dripping off the panel lip |
| **storm** | the sky properly coming down — sheets, gusts, lightning |
| **neon-dry** | night with no rain: sodium haze, dust, flickering signs |
| **marsh-fog** | breathing fog banks and midges low over the reeds |
| **interior-warm** | firelight that wanders, and dust turning in it |
| **vault-cold** | a cold slab of light through archive air |
| **smoke** | embers rising, brown haze, something still burning below |
| **tunnel** | close dark, a receding chain of lamps, water falling somewhere |
| **substrate-dark** | motes and fast data-runs where the machine is close |
| **dawn** | first light climbing over an hour |
| **dead-signal** | a dead zone: scanlines, tearing, nothing being told what to do |
| **danger** | red pulse, searchlight sweep, the panel edge going hot |

Rain now has wind. Fog breathes instead of sliding. The hearth flickers. Adding a
thirteenth is one row of data and one line of CSS.

### One more thing

Something fell out of the icon, and it weighs nothing at all.

It flutters rather than falls — a leaf, not a stone: two-frequency rocking, a slow
swirl laid over the drift, and a tumble that tips into whatever direction it is
sliding. It settles on the lip of the panel where the rain already breaks, then bobs
there on a cushion instead of freezing. Pick it up and throw it and it topples out of
your hand; the air takes it back almost at once. It remembers where you left it.

**It feels the weather.** Each of the twelve skies is a different kind of air — how
thick it is, how hard it flutters, how freely it tumbles, how much of the wind it
catches. It is battered about in a storm, hangs low and *faintly dims* in a warm
room, glows cyan and half-floats in the substrate, hovers on the updraught in smoke,
and drops dead straight and dull in a dead zone. Rain knocks it sideways. When the
board's pressure rises it reddens, brightens and goes restless.

**It talks.** Tap it and it tells you what it can feel — thirty-six lines across the
twelve skies, two more when the pressure is on, and one it always says first:

> THE SHARD IS WATCHING. GO GENTLY INTO THE RAIN.

*For Mr. Togan.*

### How a run remembers itself

The AI is stateless between turns — it loses the thread on almost every call — so
the game keeps the memory rather than the transcript, and keeps as much of it as
possible *without asking*. The client watched every scene, so it records for
itself who was present, who has now met whom, where everyone was last seen, and
every journey between two places. Even a storyteller that sends nothing but prose
will still build a cast, a relationship graph and a map.

What only the AI can know — what just happened, and what a character has now
*worked out* — it is asked for every turn. Everything else is asked for one
register at a time, in rotation, and it is free to decline. Three things carry a
run forward:

- **RUN CANON** — short factual lines the DM writes each turn. Older eras get
  compressed into a **CHRONICLE** by the DM itself, during a normal turn, so a
  three-hundred-turn season costs no more context than a thirty-turn one.
- **CAST STATE** — per character: who they have **met**, what they **know**, and
  their current **status**. This is what stops people re-introducing themselves to
  family they have known for a hundred turns.
- **The ledger** — the readable chronicle, never touched by any of the above.

**REBUILD MEMORY** (in the LEDGER panel) has the AI re-read the whole chronicle
chapter by chapter and rebuild canon and relationships from it. Useful for runs
started before this system existed. It tells you how many AI calls it will cost
before it starts, and it never alters a word of your story.

**FIND OUR PLACE** (in the LEDGER panel) is for runs started before the board existed.
They load and play immediately, steered from the first beat of whatever arc they had
reached — and a gold banner offers one AI call that reads your chronicle and snaps the
pointer to the beat you are *actually* on. It touches nothing but the pointer.

> **Save compatibility.** Saves from v2.7 onward store cast sheets as structured
> objects; saves from v3.5 onward store quests and board ids; saves from v3.9 onward
> store the beat lifecycle phase; saves from v4.0 onward store Season Records and the
> retrieval archive. Older saves load fine and are migrated on the spot — flat
> threads become quests, old board positions carry across the series reorder by beat
> id, and a run already seasons deep is *offered* (never forced) a free record
> rebuild for the seasons it played before the Archive existed — but a newer save is
> **not** readable by an older client. This only matters if you hand a folder-save JSON to an old cached copy of
> the game — the hosted version and the installed app both update themselves.

## New Game

Starts a completely fresh run at **Day 1** — and creates a brand-new save + ledger
pair. Old runs stay untouched.

## The Canon Vault

This game world has a history: the original run, played across eight in-story days, in
which a courier accidentally assembled a family out of ghosts, gods, and one furious
twelve-year-old. The full canon is baked into the DM's knowledge — but the Vault
contains **the complete original timeline, all twists included**. Spoiler-gated.
Earn them the long way if you can.

## Fully offline play (Ollama)

```
# install from ollama.com, then:
ollama pull llama3.1
# allow the game page to connect:
OLLAMA_ORIGINS="*" ollama serve
```

Then click **Use a local AI** in Settings — the game finds it by itself.

## Sharing

Send people the link. They can install it as an app in two clicks. Or send the
`index.html` + `corpus.js` pair — it runs everywhere a browser does.

---

*Eight days. Eight years. One family. Same pan.*
