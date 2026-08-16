# v4.79.0 — "A Choice Names Its Cards"

*Shipped and pushed. The mechanism is built and one beat is done as the sample, which is
what you asked to see before the other 267 decisions get made.*

---

## The number that justifies the whole change

You were right, and it's worse than either of us said out loud.

> **271 clickable lines appear after a scene ends. In 78 of the 101 rows, two or more of
> the three lines fetch the same reply.**

The player is shown three questions and gets one answer twice. That's not a bug in four
places — it's what happens when you resolve a click by matching words, across the whole
book.

And here's the part that makes it clearly a mistake rather than a trade-off: **the written
game has no typing box.** Every single thing a player does on that side is a click. The
word-matching was never needed there — it was inherited from the AI side and left running.

## What a choice looks like now

Before, a choice was a sentence and the game guessed:

> `"Ask Pia what she is looking at."`

Now it can say what it means:

> `{ line: "Ask Pia what she is looking at.",`
> ` cards: ["mud-what", "pia-twelve", "wire-calls"] }`

**One-to-many, exactly as you described it.** The game gives you the first of those three
the run hasn't already used. And when all three are used up, **the line disappears from
the row** — which is the slack repeating itself, fixed at the only place it can be fixed.

Old-style sentences still work exactly as before, so nothing already written changed the
day this landed. And **saves are untouched**: cards gained names, but "which cards are
spent" is still recorded by position, so anyone mid-run is fine.

## The sample beat

The first chapter's room deck now has names on all nine of its scenes, and both of its
endings are wired. Driven in the actual game, not just checked:

- The two wired lines lead to **different** scenes. They didn't before.
- Clicking one plays exactly the scene it named, and marks exactly that one used.
- With everything a line can reach used up, the line is gone from the row.

## The same trap, for the third wave running

Adding a new shape to the book means finding everything that reads the book. **Eight
places knew only the old shape.** Two checks went red immediately — the one that catches a
row offering the same line twice was comparing objects, which all look identical to it.

And the serious one, again: **the safety net was silently dropping every wired line's
text.** Same failure as the frames two waves ago. Fixed, and the net is back to seeing
3,835 lines.

There was also one of mine: merely *building* a row was creating an empty "cards used"
record, and the check that proves ending a beat never costs you a card reads that record.
Building a row now observes what's been used and never touches it.

**Three waves in a row where adding a form meant hunting its readers afterwards.** It's the
first thing I do now, not the thing I discover.

## The bar

71 checks — **54 proved, 11 exempt, 6 amber, 0 failing.** The new check proves all three
parts of the promise, and carries the old word-matching as its broken version: that
matcher lands on the wrong scene for one of the four wired lines, so the wiring is doing
real work rather than restating what already happened.

---

# What's left, precisely

1. **267 more choices to wire.** 4 of 271 done. This is the beat-by-beat work — I propose
   the wiring for a beat, you rule, I apply.
2. **The dry-room scene isn't written yet.** The *mechanism* is in (lines vanish when
   spent), but the thing you ruled — the room notices out loud and the way forward opens —
   still needs its lines. It should land with the first batch of wiring, because that's
   when rows will start emptying.
3. **Multiple versions of a card** — you ruled whole alternate takes. Not built yet; it's
   the natural next piece after the wiring, since a wired choice with two takes is how a
   spent card can come back once without repeating itself.
4. **A third kind of line I found while wiring.** *"Move. The marsh road is hours out"* isn't
   a question at all — it's a way forward. It currently pretends to be a question and
   fetches a scene. There are a lot of these, and they probably want their own treatment
   rather than a card list. Worth a ruling before I wire the beats that have them.
