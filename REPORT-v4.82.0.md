# v4.82.0 — "The Room Is Not a Corridor"

*Shipped and pushed. One of your four pieces is in and proved. The other three are
designed, agreed, and not built — that's stated plainly at the bottom.*

---

## What shipped

**The way out of family time is there from the first turn.** Every beat in the book.

It used to appear on turn seven, and that seven was doing real damage: 30 of the 33 rooms
hold fewer than seven things to talk about, so the actual shape of the family's own time
was three real questions and then four turns of the two hollow lines, waiting on a timer
for a door.

Nothing is lost by opening it early. Nothing out there is counting, the deck doesn't run
down toward it, and I confirmed in the source that no peril can reach into that phase at
all — the arming check has an explicit "only during the beat" guard. **The only thing the
seven ever added was the wait.**

**And there are runs in flight, so it migrates.** The restore was reading the old door
state back out of the save, which would have put a player mid-room straight back into the
wait we just removed. The phase is the whole condition now, which is also the migration.

## A feature from two releases ago is now superseded

Two waves back I gave the player a "knock" — a way-forward line that opened the room early
while a question left it shut. **Both halves of that are gone**, because the door is open
either way now. Its check went red the moment this landed, which is correct, and I've
**retired it rather than quietly rewriting it to pass.**

The `knock` marker stays in the data, because it still says something true: *this line is
a way forward, not a question*. It just no longer opens a door that's already open.

Its replacement sweeps all 32 rooms rather than one beat, and reads back an old-shaped
save to confirm the migration. It's marked **exempt rather than proved**, with the reason
on the page: the seven-turn gate was *deleted*, not changed, so there's no old code left
to run — and hand-rebuilding it would prove nothing.

## The bar

73 checks — **55 proved, 12 exempt, 6 amber, 0 failing.**

---

# What is NOT built

I stopped here deliberately. The rest of your design is agreed and specified, and I'd
rather hand it to you unbuilt than half-built in the deck machinery, which is the most
delicate code in the game.

**1. Cards cycling with a second take.** You ruled: unspent cards first, then repeat — but
a repeated card plays a *different version of itself*. That needs two pieces: a card able
to hold two or three complete takes, and a "lap counter" so the room knows it has been
round once. It also needs every reader of the book taught the new shape, which is the
thing that has bitten me three waves running, so it wants a clear head.

**2. The transition into the pressure block.** The button already says `TAKE THE NIGHT ON`
and has no voice. This is the scene where the warmth turns into a job — *"Right. What do
we actually do now?"* — and it's writing, one per beat.

**3. The 120 cards.** Now for depth rather than to fill a timer, as you said. The shape of
the ask changed with it: no longer "four more to reach seven" but "what else is genuinely
worth asking these people tonight".

**4. The AI side** — the DM respecting family time, and the drift nudge pointing at
`TAKE THE NIGHT ON`. You put this after the written side is settled, which it now nearly
is.

## One thing I could not verify

You said peril stops the pressure clock. I couldn't get a peril to arm in the rehearsal
harness to test it, so **I'm recording it as unverified rather than repeating it back to
you as fact.** It's consistent with how the code is arranged — a peril owns the rail and
the clock lives on the other path — but I haven't watched it happen, and last time I told
you how something worked without watching it, I was wrong four times over.
