# Playing with a storyteller on your own computer

**One file. Download `MUDSKIPPERS.bat` and double-click it.**

A small window opens with two buttons:

- **START LOCAL AI and PLAY** — sets everything up and opens the game in its own
  window, already connected. You never touch Settings.
- **SHUT DOWN AND FREE MEMORY** — gives the graphics memory back and closes up.

**Closing the game window does the shutdown for you** — the model is unloaded,
the engine is stopped, and the launcher closes behind it. You can't leave several
gigabytes stranded by forgetting.

The first run downloads a storyteller — a few GB, once. After that it's seconds.
No account, no key, no cost, and nothing leaves the machine.

## Getting the file onto the other computer

**Email will not work.** Gmail, Outlook and most mail services refuse `.bat`
attachments outright — including inside a `.zip`. Send a **link** to this file on
GitHub instead and let them download it directly.

**The first time they run it, Windows will object.** A downloaded script gets a
blue "Windows protected your PC" box. That is SmartScreen doing its job, not
something being wrong: click **More info**, then **Run anyway**. To skip it
entirely, right-click the file → **Properties** → tick **Unblock** → OK, before
double-clicking.

**The first START is slow.** Installing Ollama and downloading a storyteller can
take ten or twenty minutes on a normal connection, and the window will sit on
"Downloading…" the whole time. That is expected; it only happens once. Every
launch after that is seconds.

---

## What it picks for you

It reads your graphics card and chooses the largest storyteller that genuinely
fits. These are measured footprints — model **plus** its working memory, which is
what has to fit, and is much larger than the download size:

| video memory | storyteller | actually uses | what to expect |
|---|---|---|---|
| 18 GB+ | `mistral-small3.2:24b` | 17.3 GB | full scenes, the family talking to each other |
| 11–18 GB | `mistral-nemo:12b` | 8.9 GB | shorter scenes, plays properly |
| 7–11 GB | `qwen2.5:7b` | 5.2 GB | brief, but it plays — the 8 GB sweet spot |
| 4.5–7 GB | `llama3.2:3b` | ~3 GB | very brief |
| less / none | `llama3.2:3b` | — | runs on the processor; turns take a while |

Quality tracks size steeply. A 24B writes five-block scenes; a 7B writes two.
All of them play the game correctly, because the plot, pacing and endings live in
the game itself rather than in the model.

Reasoning models are deliberately avoided — they spend their whole budget
thinking and hand the game an empty reply. `qwen3` fails exactly this way.

## The setting that decides whether any of this works

The game sends around **5,000 tokens** of world, rules and board every turn, and
Ollama's default window is **4,096**. Go over it and Ollama doesn't complain — it
throws away the *front* of the prompt, which is where the rules, the cast and the
board live, and the storyteller answers with the shape of an answer: one-line
scenes, no choices, sentences that don't parse.

The launcher handles this two ways, because the obvious one isn't enough:

1. **It restarts Ollama.** Setting `OLLAMA_CONTEXT_LENGTH` only affects processes
   started *afterwards*, and Ollama puts itself in Windows startup — so on most
   machines it is already running before the launcher exists, holding whatever
   environment it inherited at login. Earlier versions politely left it alone and
   the setting never applied. Now it gets restarted into the right environment.
2. **It bakes the window into the model.** A derived model — `mudskippers-<name>`
   — is created with `PARAMETER num_ctx` set. An environment variable is a promise
   about a process; a baked parameter is a property of the model, and it holds no
   matter who started the server. This costs nothing on disk: a derived model is a
   manifest pointing at the same weights.

If you ever want to check, `ollama ps` reports the real number while the game is
running. It should read 24576, not 4096. The game's own trapdoor panel
(middle-click the shard) shows what it is sending on the **whole wire** row.

## Where your saves are

In your browser, not in this folder — nothing here ever touches them. The game
opens in its own dedicated window with its own storage, so those saves stay put
between sessions. Settings → EXPORT SAVE writes one out as a file if you want to
move it elsewhere.

## If something goes wrong

- **"cannot connect"** — press START again; it restarts the engine.
- **first turn takes 30 seconds** — normal, the model is loading. After that,
  seconds.
- **it asks for an API key** — you're on the cloud provider. Settings → PROVIDER
  → *Ollama (local, free)*.
- **memory still in use afterwards** — run the launcher and press SHUT DOWN. It
  unloads the model, stops the engine, and clears the runner process that holds
  the weights.

## For the curious

`MUDSKIPPERS.bat` is a batch file with PowerShell inside it, below the `#PSSTART#`
marker. Open it in Notepad and read the whole thing — it is deliberately in plain
sight, because you should be able to see what a file does before you run it.
