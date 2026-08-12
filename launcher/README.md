# Playing with a storyteller on your own computer

Two files. No accounts, no keys, no cost, and nothing leaves the machine.

**Download this folder, then double-click `MUDSKIPPERS-PLAY.bat`.**

The first run installs what it needs and downloads a storyteller — a few GB,
once. Every run after that takes seconds. When you've finished playing,
double-click `MUDSKIPPERS-STOP.bat` to give the memory back.

That's the whole thing. The rest of this page is for the curious.

---

## What it picks for you

It reads your graphics card and chooses the best storyteller that fits:

| video memory | storyteller | what to expect |
|---|---|---|
| 18 GB or more | `mistral-small3.2:24b` | full scenes, good prose |
| 9–18 GB | `mistral-nemo:12b` | shorter scenes, still plays properly |
| 5–9 GB | `llama3.2:3b` | thin, but it runs |
| less, or no card | `llama3.2:3b` | works on the processor; turns take a while |

Quality tracks size fairly steeply here. A 24B writes five-block scenes with
the family talking to each other; a 3B writes a line or two. All of them play.

Reasoning models are deliberately avoided. They spend their whole budget
thinking and hand the game an empty reply — `qwen3` fails this way every time.

## Two settings that decide whether any of this works

The launcher sets both. They're written down because they're the difference
between "the storyteller is broken" and "the storyteller is fine":

- **`OLLAMA_CONTEXT_LENGTH=24576`** — the game sends about 12,500 tokens of
  world, rules and board every turn. Ollama's default window is 4,096, which
  silently throws two-thirds of that away *before the model sees it*. The
  symptom is a storyteller that appears to have lost its mind, and nothing in
  the game can report it.
- **`OLLAMA_ORIGINS=*`** — permission for the game's page to talk to the
  server on your machine.

## Where your saves are

In your browser, not in this folder — so **`MUDSKIPPERS-STOP.bat` never
touches them**. Saves are per-website: a run started on the online game and a
run started from a local copy are separate lists. Settings → EXPORT SAVE
writes one out as a file if you want to move it.

## If something goes wrong

- **"cannot connect"** — run `MUDSKIPPERS-PLAY.bat` again; it restarts the
  engine.
- **first turn takes 30 seconds** — normal. The model is loading into the
  graphics card. Turns after that are seconds.
- **the game asks for an API key** — you're on the cloud provider. Settings →
  PROVIDER → *Ollama (local, free)*.
- **you want the memory back right now** — `MUDSKIPPERS-STOP.bat`. It unloads
  everything and reports how much it freed.
