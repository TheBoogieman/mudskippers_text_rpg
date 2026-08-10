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

### How a run remembers itself

The AI is stateless between turns, so the game keeps the memory rather than the
transcript. Three things carry a run forward:

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

> **Save compatibility.** Saves from v2.7 onward store cast sheets as structured
> objects. Older saves load fine and are migrated on the spot, but a v2.7 save is
> **not** readable by a pre-v2.7 client. This only matters if you hand a folder-save
> JSON to an old cached copy of the game — the hosted version and the installed app
> both update themselves.

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
