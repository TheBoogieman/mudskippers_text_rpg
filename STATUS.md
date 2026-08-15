# Where the game stands, in plain English

*Updated after v4.73.0. All five problems are done.*

---

## 1. The game answering a question you didn't ask ✅

Eleven clickable lines trigger a pre-written reply. Reading all eleven properly instead
of trusting the automatic check, **five of the ones I'd flagged turned out to be the
opposite of a problem** — they're the player *defying* the scene, which is the best thing
one of those lines can be. Four were genuinely wrong and are reworded. One chapter was
also offering the same question in two of its three slots, which is now caught
automatically.

## 2. Chapters that could never be recorded as "finished well" ✅

The chapter with the big branching choice was genuinely missing a name. One line added,
in the right character's mouth.

**The other two I nearly damaged.** I was about to add a name to each, then read them:
both are *about* the name not being said. One is a funeral. The other says twice, in its
own closing text, *"Nobody has said her name yet"* — the character starts to say it and
stops, deliberately, twice. Adding it would have contradicted the scene the game plays
thirty seconds later. Those two had the *requirement* removed instead, and not a word
changed.

## 3. The first chapter asking you to know a name before it tells you ✅

Removed. It also turned out the game had been treating that name as "already known to the
player" *because* of that requirement — so now it correctly thinks you've met the kid from
the opening and have **not** yet been told the shard's name. Which is just the truth.

## 4. The character labelled "Other" ✅

She's **THE CLERK** now.

---

## 5. The AI cost saving ✅ — and this one took three attempts

Only affects the mode where an AI writes the story. Worth reading because two of the three
attempts failed and the failures were the useful part.

**The idea.** Providers charge about a tenth of the price for any part of your message
they've already seen and that hasn't moved. The game was only ever getting that discount
on its rulebook.

**Attempt one — reorder the message. Failed before I wrote it.** I measured first: the
"story so far" the game sends is a *sliding window* of the last twelve messages, and every
turn adds two. From about turn six the front of it changes every single turn, so there's
no stable part to reuse whatever order things are in. I refused to build it and told you
why.

**Attempt two — stop the window sliding. Built, and still bought nothing.** The window now
only re-cuts every eight messages, so it does hold still between cuts. Twelve live turns
on your key said: **cached 14,805 tokens. Flat. Identical to before.** Not one token moved.

**Attempt three — the actual cause.** Anthropic only reuses your message *up to a marker
you place*, and the only marker was on the rulebook. A perfectly stable story-so-far
sitting behind an unmarked boundary gets re-read at full price forever. The window carries
its own marker now.

### What it actually saves — measured, same chapter, same twelve moves, both ways

| | before | after |
|---|---|---|
| full-price tokens per turn | 10,050 | **7,395** — a quarter fewer |
| cost per turn | $0.0282 | **$0.0265** |
| discounted tokens | 14,805, flat all run | **14,805 → 21,152, climbing** |

**The last number is the important one.** Before, the discount was the same on turn one and
turn twelve. Now it grows as the night goes on, so **the longer you play, the better it
does** — which is the opposite of how it behaved.

**Honest about the size:** roughly **6% off a turn**, not the "most of it" I guessed at in
the first version of this document. Most of what's sent is the rulebook (already
discounted) and this turn's fresh instructions (can never be). Total spend to find all
this out: about **£0.70**.

**And the story held.** The twelve-turn run produced a proper closing note, thirty-seven
lines of story record, no corrections needed for the AI speaking out of turn, and the
characters stayed in voice.

---

## Nothing is outstanding on my side

Everything left is writing, and it's yours: the twenty "echo" lines that repeat the scene
above them (sorted with a first opinion in `HAND-PASS-DRAFTS.md`), and a few clickable
lines that are judgement calls rather than faults.

**One housekeeping note:** your OpenRouter key is still saved in the test browser at
`localhost:8124`. It's only in that browser's local storage, but if you'd rather clear it,
open Settings there and empty the API KEY field.
