# Where the game stands, in plain English

*One page. What's wrong, what I'd do about it, and what I need you to decide.*

---

## First, the good news

The game works. Both ways of playing it work. Nothing here is broken for a player —
these are things that would make a careful reader wince, not things that crash or block
anyone.

---

## Problem 1 — Sometimes the game answers a question you didn't ask

**What a player sees.** After a chapter ends, the game offers you two or three things you
could say next. You click one. The game then plays a short pre-written scene as the
reply.

On a few of those, the reply doesn't match. The clearest example: you click **"Say what
it is we are going to get back"** — and the game answers with a scene about *who's coming
along on the trip*. You asked what. It told you who.

**Why it happens.** The game matches your clicked line to a pre-written scene by looking
for shared words. That line contains "going" and "all", which are also the words attached
to the "who's coming" scene. So it matches the wrong one.

**How big.** One chapter has three lines doing this. Across the whole game, five more
clickable lines have a related problem: they offer to do something the scene you just
watched *already did*. You see a character say a thing out loud, and then the game offers
you the button "say it out loud".

**What I'd do.** Reword the offending lines so they stop colliding — same meaning,
different words. About a dozen small rewrites. I've already drafted them.

---

## Problem 2 — Three chapters can never be marked "properly finished"

**What a player sees.** Almost nothing, honestly. But the game keeps a private record of
each chapter, and three chapters can only ever be recorded as *"this went badly"* — even
when it went fine.

**Why it happens.** Each chapter has a short list of names that need to come up in the
scenes you actually see before the game counts it as a clean finish. On three chapters,
none of the scenes ever say those names. So the requirement can't be met, by anyone,
ever.

**Which chapters.** A funeral, a confrontation about someone's fate, and — the important
one — **the chapter where the story's biggest branching choice happens.** That's the one
that decides which of two characters ends up in a new body, and everything later reads
that decision. It currently gets filed as a chapter that went wrong, always.

**What I'd do.** Add the missing name to one scene in each chapter — one line of
dialogue, in a character's voice, saying a name that everyone in the room is already
thinking about. I've drafted two of the three.

**The third one is a judgement call I can't make.** It's the funeral, and the name that's
missing is the dead man's. Nobody in any of the scenes says it. That might be sloppy — or
it might be the whole point of the scene, that nobody can bring themselves to say it. I
don't know which, and guessing wrong would wreck something good.

---

## Problem 3 — The first chapter asks you to know a name before it tells you

**What a player sees.** Nothing wrong. But the requirement makes no sense.

The first chapter's whole job is revealing that the thing in your pocket is a person
called Nine. And that chapter's "properly finished" requirement is... that someone says
the name Nine. It's asking the chapter to have already done the thing it exists to do.

**What I'd do.** Remove the requirement from that one chapter. Everything else about it
already guarantees the ending happens properly — this check adds nothing.

---

## Problem 4 — One character is called "Other"

A shopkeeper in one scene appears on screen labelled **"Other"** instead of a name. It's
deliberate — she's meant to be anonymous — but "Other" reads like a placeholder somebody
forgot to fill in. Something like **"THE CLERK"** would do the same job without looking
like a bug.

---

## Problem 5 — The AI mode costs more than it needs to

**What this affects.** Only the mode where an AI writes the story. The offline mode
doesn't touch this at all.

**What's happening.** Every turn, the game sends the AI a large block of text: the
rulebook, the story so far, and this turn's instructions. AI providers will charge you
about a tenth of the normal price for any part of that block they've seen before and
haven't had to re-read.

Right now the game sends the changeable part *first* and the unchanging part *behind* it.
That ordering means the provider can only reuse the rulebook and has to re-charge for
everything else, every single turn.

**What I'd do.** Swap the order — unchanging stuff first, this turn's instructions last.
Rough saving: **most of each turn's cost.**

**The risk, honestly.** Four rounds of work went into tuning what the AI reads and in
what order. Moving things around could change how well it behaves. So I'd build it with a
test that plays the same chapter both ways and compares the results — and if anything at
all differs, I don't ship it.

---

## What I need from you

Five decisions, below. In each case I do the work, test it, and report back — you're
deciding whether it happens, not how.
