# Where the game stands, in plain English

*Updated after v4.72.6. What got fixed, and the one thing I stopped before building.*

---

## Done — four of the five problems

### 1. The game answering a question you didn't ask ✅

**Fixed, and it was smaller than I thought.** Eleven clickable lines trigger a
pre-written reply. I read all eleven properly instead of trusting the word-matching
measure, and **five of the ones I'd flagged turned out to be the opposite of a
problem** — they're the player *defying* the scene, which is the best thing one of those
lines can be. The clearest example: a line offering *"Shut the door behind me"* under a
scene where the character pointedly does **not** shut the door.

Four were genuinely wrong and are reworded. One chapter was also offering the **same
question in two of its three slots** — two-thirds of your choices were the same thing in
different words. That one's now caught automatically if it ever happens again.

### 2. Chapters that could never be recorded as "finished well" ✅

**Fixed — but one of them I nearly damaged, and stopping to read saved it.**

For the chapter with the big branching choice, a name genuinely was missing. One line
added, in the right character's mouth, and that chapter can now be recorded properly.
That matters because everything later in the story reads that decision.

For the other two I was about to add a name — and then read the scenes. **Both are
*about* the name not being said.** One is a funeral. The other literally says, twice, in
its own closing text: *"Nobody has said her name yet."* The character starts to say it
and stops, on purpose, twice. Adding the name would have contradicted the scene the game
plays thirty seconds later.

So for those two I removed the *requirement* instead and left every word alone.

### 3. The first chapter asking you to know a name before it tells you ✅

**Fixed.** Requirement removed. And it turned out to be load-bearing in a way I didn't
expect: the game had been treating that name as "already known to the player" from turn
one *because* of that requirement. Removing it means the game now correctly thinks you've
met the kid from the opening scene and have **not** yet been told the shard's name —
which is simply the truth. The safety net caught the change and I checked it was right
rather than papering over it.

### 4. The character labelled "Other" ✅

**Fixed.** She's **THE CLERK** now. "Other" stays in the code because it's what the game
falls back to when an AI invents someone who shouldn't exist yet — but it's no longer
anyone's name on screen.

---

## Not done — and I recommend we don't

### 5. The AI cost saving ❌ — the idea doesn't work

You approved this and I started on it. **Before writing any code I measured whether the
saving is actually there, and it isn't.**

**Why the idea seemed good.** AI providers charge about a tenth of the normal price for
any part of your message they've seen before *and that hasn't moved*. The game sends the
changeable part first, so nothing behind it can be reused. Swapping the order looked like
it would make most of the message reusable.

**Why it fails.** The "story so far" that the game sends is a **sliding window** — the
last twelve messages, always. Every turn adds two, so the window starts sliding after
about **six turns**, and from then on it's different at the front *every single turn*.
Providers only reuse a message from the beginning up to the first thing that changed —
so once the window slides, the reuse stops dead no matter what order things are in.

**What the swap would actually buy:** a discount for roughly the first six turns of a
run, and nothing for the rest of it. Against four rounds of careful tuning of what the AI
reads and in what order. That's a bad trade and I'd rather not make it.

**What would actually work** is a different, larger change: stop sliding the window every
turn, and instead keep the story-so-far block fixed for stretches — re-cutting it every
eight turns or so instead of every turn. Then the reuse holds between re-cuts. That's a
real saving, but it changes what the AI remembers turn to turn, so it's its own piece of
work with its own testing.

**One honest caveat:** I can't measure the actual money either way without a paid AI key,
so the figures above are about *when reuse breaks*, not about pounds saved.

---

## What I need from you

One decision, below.
