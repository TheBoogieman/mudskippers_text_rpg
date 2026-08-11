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

**Offline file:** download `index.html` and double-click it. That single file IS the game.

First visit? A three-step **GUIDE** walks you through everything.

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

## How a season actually ends

The season is a **flowchart**, not a mood. Twenty-four beats across three arcs live
in the game itself: each one names the single thing it exists to accomplish, the gate
that ends it, its own turn budget, what it is allowed to reveal, and the canon it
writes when it clears. Every turn, the DM is handed exactly one instruction — *this
is the beat, steer to this gate, and do not invent past it.*

The DM does not decide the plot and cannot wander off it:

- **Branches are routes, never forks.** You decide *how* a gate falls; the board
  decides *that* it falls and what is true on the far side. Burn down the wrong
  building and you still arrive at the same beat, having burned down a building.
- **Nothing is revealed before its beat.** Everything the run hasn't reached is
  served to the DM as a locked list it may not confirm, hint at, or write canon
  about. Improvisation stops becoming permanent truth.
- **The plot's canon is written by the game.** When a gate clears, that beat's facts
  go into the run. Every route through a season produces the same spine.
- **A beat cannot stall.** Each carries its own budget — most get four turns, the big
  ones five. Near the end the DM is told to angle toward the gate; at the budget the
  world acts without waiting for you; one turn past it the gate is **forced** — the
  game orders the beat landed and moves the pointer itself. A forced gate leaves a
  **scar**: one canon line recording that it happened rougher than it should have.
- **Between beats, the clock stops.** Every cleared gate opens a stretch of slack —
  two free turns, three after an arc turn — with no pressure, no clock, nothing owed.
  The family's time. Sometimes the game deals the DM an **interlude** there: a small
  optional scene from a hand-authored deck — a paying run everyone insists on joining,
  a ceremonial tasting, a rooftop where nothing happens on purpose. Suggestions, never
  orders, and each one is dealt at most once a season.

A season runs **95–100 turns played straight, ~145 played leisurely** — and it cannot
fail to end: victory, death, or loss, always seen coming.

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

### Pressure you can see

You are never told a turn count — you're shown one. As a beat runs out of room the
room itself closes in: a vignette tightens and warms, then reddens and starts to
breathe. A strip above your choices names the feeling — **SOMETHING IS ABOUT TO
GIVE**, then **THE WORLD IS MOVING**, then **OUT OF ROOM**. When the world takes its
own turn it lands as a hit: the screen flashes and shoves, the rain leans harder, and
everything on the canvas speeds up. When a beat finally closes, the board says so once
in the feed — *that beat is closed*, or *the world moved on*, or *the arc turns* — and
the pressure drops away.

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

> MR. TOGAN, THE SHARD IS WATCHING. GO GENTLY INTO THE RAIN.

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
> objects; saves from v3.5 onward store quests and board ids. Older saves load fine
> and are migrated on the spot — flat threads become quests, old board positions are
> remapped onto the new spine — but a v3.5 save is **not** readable by an older
> client. This only matters if you hand a folder-save JSON to an old cached copy of
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
`index.html` file — it runs everywhere a browser does.

---

*Eight days. Eight years. One family. Same pan.*
