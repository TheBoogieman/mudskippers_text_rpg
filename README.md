# MUDSKIPPERS — The Courier's Run
### A cozy-cyberpunk story game. Bring your own AI. Nothing leaves your machine.

The rain in Lower Veldt Market doesn't fall so much as leak. You're a broke courier,
it's 11:47 PM, and the data shard in your pocket has started humming.
Data shards do not hum.

---

## Play it

**Online:** https://theboogieman.github.io/mudskippers_text_rpg/ *(GitHub Pages)*

**Offline:** download `index.html` and double-click it. That single file IS the game.
(Chrome, Edge, or Brave recommended: they let the game write save files to a real
folder. Firefox/Safari work too, with manual export instead.)

First visit? The game walks you through setup itself — a three-step **GUIDE** opens
automatically, and lives in the header afterward.

## Hook up your AI

Settings opens automatically the first time:

| Provider | Cost | Notes |
|---|---|---|
| Anthropic (Claude) | your API key | best results — the canon was written by one |
| OpenAI | your API key | |
| OpenRouter | your API key | any model behind one key |
| **Ollama** | **free, fully offline** | see below |
| **LM Studio** | **free, fully offline** | enable CORS in server settings |
| Custom | — | any OpenAI-compatible endpoint |

Your key is stored only in your own browser's local storage. Every API call goes
directly from your machine to the provider you chose. There is no middleman, no
telemetry, no server of ours — there is no server at all.

## Saves & the Ledger

Pick a save folder (SAVE FOLDER button). After every turn the game writes two files there:

- `mudskippers-save-<timestamp>.json` — the full run, resumable
- `mudskippers-ledger-<timestamp>.md` — a readable chronicle of everything that happened

The **RUNS** button is the save manager: every playthrough in one list — load any
of them, or retire one (the story-log stays; the chronicle survives the courier).

The ledger is designed to be handed to any AI assistant ("here's my run, pick up as
the DM"). Everything needed to continue a run lives in that one readable file.

## New Game

Starts a completely fresh run at **Day 1**, in the rain, with the humming shard — and
creates a brand-new save + ledger pair. Old runs stay untouched in your folder.

## The Canon Vault

This game world has a history: the original run, played across eight in-story days, in
which a courier accidentally assembled a family out of ghosts, gods, and one furious
twelve-year-old. The full canon is baked into the DM's knowledge — the same forces and
secrets exist under every new run — but the Vault (header button) contains **the
complete original timeline, all twists included**. It is spoiler-gated. Earn them the
long way if you can.

## Fully offline play (Ollama)

```
# install from ollama.com, then:
ollama pull llama3.1
# allow the game page to connect:
OLLAMA_ORIGINS="*" ollama serve
```

Then in Settings pick **Ollama**. No key, no internet, no one watching.

## Sharing

Send people the link above, or just the `index.html` file. That's the whole game.

Want a "real" executable? The file wraps cleanly:
- **Tauri** (`npm create tauri-app`, point it at this file) → ~3 MB native binaries
- **Electron** → heavier but simplest
- Or just zip it. It's one file. It runs everywhere a browser does.

---

*Eight days. Eight years. One family. Same pan.*
