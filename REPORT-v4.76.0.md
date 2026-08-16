# v4.76.0 — "Which Side of the Fork"

*Shipped and pushed. Plain English, as always.*

You asked for the ten Book Three scenes rewritten, with the speaker rig landing later so
the silence has time to hurt. Doing that turned up **three faults, each one hiding the
next.** The writing is done; the three faults are the story of this release.

---

## Fault 1 — the biggest choice in your game was a coin flip

At the end of Book Two the family decides which of the two minds gets the body. Exactly
one scene in Book Three was ever written properly for both outcomes — the morning after
the eviction, where one version has Seven awkwardly holding a cup of tea and the other
has Nine holding it with both hands.

**The game was choosing between those two versions at random.** Not by who actually got
the body — by a number derived from the run's ID. The function that knows how to pick
correctly has existed in the file the whole time, and the two places that put scenes on
screen never called it.

I built a check that counts it rather than describing it: **across 400 selections, the
old code served 200 to the wrong side.** Exactly half, which is what a coin flip looks
like. Fixed, and the check now guards it permanently.

## Fault 2 — a forked line couldn't be written as one line

The reason only *one* scene had ever been forked: the file could mark a line as
belonging to one outcome, but such a line could only ever be **narration** — it couldn't
be someone speaking. So any scene that differs by a single sentence between the two
outcomes had to be written out **twice, in full.**

That's why seven scenes that needed forking never got it. Marked lines can carry a
speaker now, so a one-sentence difference costs one sentence.

## Fault 3 — and the safety net had never seen a single forked line

This is the one worth reading twice.

The safety net that catches accidental changes to your writing reads the book line by
line. It understood two kinds of line: plain narration, and someone speaking. A **forked**
line is a third kind — and the net simply skipped it. Silently.

So every forked line in Book Three was **invisible**. You could have rewritten one, or
deleted it, and the net would have reported everything fine.

I fixed the reader, and:

> **the book went from 3,790 lines to 3,811 without anyone writing nineteen lines.**

Those nineteen were always there. Nothing had ever looked at them. And the important
result: **eight new checks now fire and not one existing verdict changed** — making the
hidden lines visible didn't disturb a single line that was already being read.

---

## The writing itself

Seven Book Three scenes now play differently depending on who got the body. In the runs
where **Nine** got it, Seven is the one in the skull, and:

- **At Vic's funeral**, he starts his eulogy, gets as far as the word *"fondly"*, and
  stops — because he has heard what his own sentence is about to do to him. He asks you
  to say the rest for him. You do, and for once you don't trim a syllable.
- **At the bottom of the shaft**, he tells you to check your wrist. You check it before
  you think to say why, so the family spends a moment watching a man consult his own arm
  for no reason.
- **In the aisle of shelves**, Hesta says her twenty-two come out too. He says four
  words. You say them without checking them first — the only time all season you relay
  him perfectly.

And the **three Vic plants** you approved, all in:

- **The hands.** He misses the same hook twice and blames the damp. Pia: *"It isn't damp
  in here, Vic."* Vic: *"It's damp where I'm working."* And she lets him have it.
- **The gutter.** *"I keep meaning to. I have kept meaning to for a while now, and I
  would like it done."* Nothing in the line is about dying.
- **The lock.** You ask what it's keyed to. *"Something it will never stop recognising."*
  He doesn't say whose. He goes and washes hands he has already washed.

## The bar

Boots clean, no encoding damage, tags balanced, **70 checks, none failing**, safety net
re-taken by hand with a written note, and I played the funeral on screen **both ways
round** to confirm it reads properly on each side.

---

# What's left

1. **The speaker rig scene.** Still to write — you ruled it lands late, near Vic's death,
   with Vic fitting it. Everything now in place for it to land as relief.
2. **The remaining Book Three scenes.** Seven of the ten are done. The other three turned
   out to be already correct (the eviction morning was the one properly forked scene, and
   two more only involve whoever *has* the body).
3. **The twenty "echo" lines** from earlier — still the oldest open item, still yours.
