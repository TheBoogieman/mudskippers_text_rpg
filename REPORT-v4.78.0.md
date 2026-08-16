# v4.78.0 — "The Man in the Doorway"

*Shipped and pushed. The novel side is closed.*

---

## First, a correction

I told you the recording scene plants Vic's silence and nothing picks it up, and asked
whether you wanted a line added. **That was wrong** — the line *"Ask him why he is so
quiet"* was already there, in both versions of the scene. I read one of the three
clickable slots and reported on all three.

What's true is worse than what I described, and testing it is what found it:

> **No card in either deck answered that question.** Clicking the most loaded line in the
> scene got you Pia on whether to switch the recording off.

The plant was written. The question was offered. **The answer was never written.** So the
fix isn't the line you approved changing — it's the missing scene behind it.

## What Vic says now

He hasn't come off the door frame since the recording started, *"which from Vic is a
position."* Asked why he's quiet:

> *"Because you've been arguing the wrong question for an hour and I didn't fancy being
> right out loud."*
>
> *"It isn't whether she meant it. People mean it. I've known a lot of men who meant it."*
>
> *"It's whether she'd have done it anyway if she hadn't meant it. That's the only
> question that tells you anything about anybody."*

He is, of course, describing himself. Then he goes to stand in the yard and asks somebody
to put the kettle on. **Nobody puts the kettle on.** Everybody looks at the doorway he was
standing in, and then at each other, and decides — separately, and wrongly — that it was
nothing.

Two other lines in those rows were also fetching the wrong scene (*"what do we do with a
kind one"* got you Hesta on chairs). All three now deliver what they ask for, checked
through the game's real machinery. Vic also went onto that scene's cast list, where its
own writing had always put him.

---

## The self-test page — the written game is out of debt

Eight checks on the hard-coded side had no proof behind them. **All eight are closed.**

**Two are now properly proved**, against genuinely old broken behaviour dug out of the
project's history, exactly as you ruled:

- The one that says *no question gets asked twice while unasked ones remain* now runs the
  real machinery with its memory wiped between draws — which **is** the old version, the
  one that once asked the same question six times in a row. The check demands that old
  version fail, and it does.
- The one that says *every chapter can earn its own required names* now runs a single way
  of playing instead of four. That's the version that shipped the bug you caught months
  ago, reproduced through live code.

**Six are exempt with reasons printed on the page**, and five of those share one reason
worth explaining, because I think it's the genuinely right answer rather than an excuse:

> **The pair is the proof.** These checks come in twos — one says *"our writing never
> trips the alarm"*, its partner says *"but the alarm still goes off for a real one"*. A
> broken version of either alone would have to be an alarm I disconnected on purpose,
> which proves I can disconnect an alarm, not that one was ever wrong. **Together they
> pin the thing from both sides, and both run every time you load the page.** That's what
> a broken version buys, held permanently instead of once.

### And a third check turned out to be lying

Same shape as the one I found last time: the *"every chapter can earn its names"* check
was **hardcoded to pass** and merely printed its failures next to a green result. The book
could have rotted back to eighteen of twenty-three chapters broken and the page would
still have said everything was fine. It actually checks now.

That's **three** of these found this month. It's now the first thing I look for.

## Where the page stands

| | |
|---|---|
| **Proved** — carries an old broken version and catches it | **53** |
| **Exempt** — no old version exists, reason printed | **11** |
| **Still owed** | **6 — all of them the AI mode** |
| **Failing** | **0** |

**Written-game debt: 8 → 0.**

---

# What's left

Only the six on the AI side: whether a scene asks a question somebody present can answer,
whether it ever tells a character to speak when the physics has silenced them, whether the
relay leaks the thing it's withholding, and three about how turns and budgets are spent.

Which is roughly where your questions about slack and beats are heading — so I'll leave
them there until I've heard them.
