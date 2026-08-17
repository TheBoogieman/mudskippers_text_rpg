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
with no beats, no cards and no bible.

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

### The stable — DMs we recommend for the wild table

The wild table's Settings offer a short, curated menu (plus a free-text box, because
recommendations are not a cage). Start with **`anthropic/claude-sonnet-5`** — it holds
the lane, keeps the register, and knows when a night is over. If you want whole
campaigns for pocket change, **`deepseek/deepseek-v4-flash-0731`** is obedient and
workmanlike; **`deepseek/deepseek-v4-pro`** is the first knob to turn if the cheap
one's banter runs flat. **`anthropic/claude-opus-5`** is for players who want the night
*judged* rather than merely written.

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

> **Save compatibility.** Older saves load fine and are migrated on the spot. A newer
> save is **not** readable by an older client — which only matters if you hand a
> folder-save JSON to an old cached copy of the game. The hosted version and the
> installed app both update themselves.

---

## The cold open is dealt, not generated

A new game opens with a golden card — who you are, who Vic is, what the personal run
was — then the street, the humming shard, and a kid who doesn't melt back into the
crowd. One gold choice: **INTO THE RAIN**. The reveal that follows is dealt by the
game itself, word for word, no AI required. (The gold bar looks open during the cold
open. That is the bait. Try it.)

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

**A beat closes completely before the next one opens.** Every gate is followed by the
**landing** — a turn where nothing new is allowed to begin: reactions, cost, quiet,
the family being people about what just happened.

**Then the clock stops, and the room is yours.** After the landing comes **the
family's own time**, and it lasts exactly as long as you want it to. The clock does
not move, the day does not roll, nobody arrives and nobody leaves. It is the only
part of the night that is allowed to be about nothing, and that is what it is for:
ask what the rain actually is, argue about what the vow means on a day it is
inconvenient, find out what somebody did before, be funny at each other.

**You open the next door.** A card sits there reading *take the night on*. It does not
nag and it does not expire. Press it when you have had enough of each other.

One more rule, and it protects you: you own the courier, and the world owns the
world. What you *do* is law. What you *guess* is a guess — say "it was Mirren" and be
wrong, and the only casualty is the courier's pride.

## The game is a series now

Three **seasons**, each a book of its own with three internal acts, a finale, and an
end card: **THE PERSONAL RUN** (~80 turns), **SOMEONE MUST BE SAVED** (~110), **THE
MACHINE** (~100). At each season finale the run performs the **archive ritual**: it
distills itself once, ceremonially, into a **Season Record** — what happened, who we
are now, what we carry, what it cost, where things stand — and files it into the
ledger under a season break. The record resets the working memory (jokes are family
heirlooms; the best eight travel), zeroes the season's tolls, and is then dealt to
you as an on-screen **PREVIOUSLY ON** — the season's real story in order, folded
beats marked as the ones the world did without you, and the names it cost underneath
in red.

The seam itself is written, not asked for. Six days between Book One and Book Two,
seven between Book Two and Book Three: the finale lands in a scene of its own, the
record closes the book, and the **premiere** opens the next one in a new room, on the
new day, with people already mid-sentence. **No model is called at a season boundary
at all**, and the first move of a new book is yours.

The three books also do not sound alike. **Book One is a chase** — short lines, no
speeches, nobody growing as a person, because these people are being hunted and have
no room to be characters yet. **Book Two breathes**: the hunt ends inside it, a family
forms around a table, and the banter picks up properly. **Book Three carries weight** —
deliberate, fewer jokes, and none of them nervous.

Nothing distilled is truly gone. Everything the ritual retires drops into an archive,
and **the game remembers on demand** — walk back into a place or say a name, and the
run's own past is quoted back verbatim, never re-summarized.

And one truth told spoiler-lightly: **the receiver did not stay put.**

The series runs **~300 turns for all three books** played with intent, longer played
leisurely, and it cannot fail to end: victory, death, or loss, always seen coming.

## The chair is yours

Two promises, enforced by the game rather than asked of the storyteller:

- **The game cannot speak for you.** The courier's voice, choices, and growth belong
  to the player alone. A reply that puts words in the courier's mouth you never typed
  is caught and sent back to be rewritten. When something needs the courier to say or
  choose, it must be offered as a choice and waited for — the door can be visible, but
  only your hand opens it.
- **Your bits cannot be spent.** A mudskipper moment lands as a bit: the family plays
  along or plays the straight man, and nobody diagnoses you. Mechanically it is
  immune — a gate cannot ride it, the rain neither ticks nor forgives on it, and no
  amount of goofing can be converted into the scene's sincerity. **Sincerity arrives
  when you type it, and not one turn before.**

**The way out is the game's own control, and it asks twice.** Below the choices, while
a beat is live, sits one red option: put the whole job down and walk. It is authored
per beat, so what leaving *means* changes as the story does — handing the shard back
in a market alley and walking out of the Exchange are different sentences. Use it and
the family feels it, and the game says so on a red card. Use it again the very next
turn and the courier really does go — that is the end of the run, quietly, with nobody
dead. Anything else in between and it is forgotten.

## Quests

Every promise made, job taken, and obligation owed lives in a quest log the game keeps
itself: title, giver, goal, stakes, status — **offered, active, done, failed** — so
nothing finished ever quietly reopens. Quests tied to a beat fail with it if the world
has to force the gate. The world moving on has a cost, and the log remembers it.

## The rain — and the tolls

Wildness is welcome; absence is not. A wild turn aimed *at* the story is a mudskipper
moment. A turn that ignores the season entirely — no beat, no family, no thread of it —
is **drift**, and the rain notices: a gold warning first, then a red one, and then the
city itself walks the courier back to the story's doorstep. The wandering is never
punished and never undone — it happened, and it stays — but the walk home is not free.

Four pips sit on the wrist unit. Three collections are survivable, and the game warns
you plainly at the third. The fourth ends the season — **not with a death, with a
loss** — and each book loses differently.

## The courier can die

He is mortal, and it is permanent. No resurrection, no substrate copy, no last-minute
save — his death ends the season on the spot and the only way on is a new game.

But it is never a coin flip. **Nothing kills him that you were not warned about.**
Before death is possible the threat is named plainly in the prose, the room goes red,
a strip above your choices reads **ONE MORE WRONG MOVE**, and at least one of the
three choices is a genuine way out. Only then, and only for two turns, can the wrong
answer be fatal. A death sent without that warning is rejected outright.

Mudskipper moments are still safe. Being wild is not fatal; knowingly walking into the
thing that was just named as lethal is.

**And the worst nights never ask a model at all.** Ten perils are authored — the
cordon's last gap, a flooded market floor, the last forty metres of a cable that goes
down further than anybody has been. When one opens, the night stops being a
conversation and becomes a short, lethal, entirely local thing: the threat named in
its own prose, three doors, and a clock that **does not tick**. One of the three doors
is always the one your eyes like, it never carries a keyword so no typed sentence can
take it by accident, and it asks you twice — and the second ask survives a reload.
Refuse to engage twice and the family moves you: you come out alive, marked, and not
by your own hand.

Three are **gauntlets** — the door out of that night opens the peril instead of ending
it, so reaching for the exit is reaching for the fight. The rest are **ambient**: once
a night has run long enough, the next thing you say is said with the thing already
happening.

## Pressure you can see

There is exactly one gauge on the play screen, and it tells the truth: the beat's own
turn odometer, one dot per turn of the night, lit as they're spent — with a countdown
in plain words: **THE NIGHT HAS ROOM IN IT**, then **TWO TURNS BEFORE THE WORLD
MOVES**, then **NEXT TURN THE WORLD MOVES**, then **OUT OF ROOM — NEXT TURN SETTLES
IT**. The wrist says exactly the same words, always.

As the road shortens the room itself closes in: a vignette tightens and warms, then
reddens and starts to breathe, and when the world takes its own turn it lands as a hit
— the screen flashes and shoves, the rain leans harder. The strip and the closing
walls are plain HTML, so they still work on **VISUALS: CALM** and **VISUALS: OFF**, and
reduced-motion settings still win.

## MUD//OS — the courier's terminal

The wrist unit clipped to the right edge is the game's own face, and everything on it
is diegetic — what the courier himself could read off his arm. It glows green when a
turn writes something it will show, and goes quiet when read. Four screens:

- **STATUS** — location, day, clock, and the sky in pixel art (each of the twelve
  ambiences has its own 8×8 glyph); the current heading; the family as coloured chips
  with the fallen struck through; the toll pips; the run's canon.
- **JOBS** — the quest log, active and settled, plus the season so far: cleared beats
  with their titles and summaries, told strictly in hindsight — the beat in play has
  no title yet, and unreached arcs are censored bars.
- **CAST** — clickable dossiers: status, voice, who they've met, what they know.
- **MAP** — the city as far as it has been walked. Drag to pan, scroll to zoom; your
  location is a pulsing gold diamond, and places named in open jobs carry a gold pin.
  **Nothing unvisited exists.**

## Twelve skies

The game has no art; the weather *is* the art.

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

Rain has wind. Fog breathes instead of sliding. The hearth flickers.

## One more thing

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
pressure rises it reddens, brightens and goes restless.

**It talks.** Tap it and it tells you what it can feel — thirty-six lines across the
twelve skies, two more when the pressure is on, and one it always says first:

> THE SHARD IS WATCHING. GO GENTLY INTO THE RAIN.

*For Mr. Togan.*

---

## The rehearsal room

An authoring tool, on the title screen, and it always runs as THE NOVEL. Pick any one
of the thirty-three questions and play it in isolation, as many times as you like,
labelling each take with the approach you took — *stall-heavy, hostile, comic, straight
at it*. The record before the beat is seeded from the board itself, so a mid-season
question opens where the story would actually be rather than in a void.

**Rehearsal runs live in their own drawer.** They never appear in RUNS, never move the
CONTINUE pointer, and never write a file to your save folder — a night of rehearsing
leaves a real run exactly where it was.

## The trapdoor — when something goes wrong

**Middle-click the shard.** A panel opens over the run with every number the night is
actually running on, and none of it is fiction: where you are on the board, the three
doors and which line sits in which slot, the tolls, the drift, the peril clock, the
whole thirty-three-beat road marked closed / forced / live, and the exact bytes that
went to the storyteller last turn next to the raw reply that came back. It reads the
machine and never touches it. Leave it open and it re-reads itself after every turn.

**COPY REPORT** / **DOWNLOAD REPORT** give you the same thing as a markdown file —
enough to reproduce a turn rather than describe it.

The one row worth knowing on sight is **whole wire**: the total characters across every
message actually sent, with a token estimate. **A local model whose context window is
smaller than that number silently discards the front of the prompt** — the rules, the
board, the fence — and nothing else in the game can tell you it happened. This row can.

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
