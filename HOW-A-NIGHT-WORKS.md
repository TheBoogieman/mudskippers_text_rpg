# How a night works

*The corrected walkthrough. Everything here was driven in the game and watched, not read.*

> **This replaces what I told you in REPORT-v4.80.0.** Four claims in that report were
> wrong — the correction is at the bottom.

---

## The shape of one beat

A beat is a conversation with a way out of it. Three phases.

### 1. The beat itself

**🟢 At the start, the tell.** One green line saying what tonight is about — *"The thing
in your jacket wants a word."* Not a warning. The premise.

**The door is printed from turn one, and greyed.** Below the beat's *floor* (2 or 3 turns,
per beat) it's **held**: pressing it costs you nothing and tells you so. This exists so
you always know what tonight's ending looks like before you can reach it.

**Past the floor the door is Open, and it asks twice.** First click arms it, second takes
it. **Taking the door is answering the night's question** — that's what an exit line *is*.
Look at the first chapter's: *"She's a person, so I talk to her like one. Right here, both
ways, and the street can wait."* That isn't leaving. That's doing the thing the night was
about. A beat closed this way closes **clean**.

**And if you never take it, the world does.** Every beat has a budget — usually 4 turns.

| turn | the bar says | the aside |
|---|---|---|
| 1–2 | THE NIGHT HAS ROOM IN IT | |
| 3 | TWO TURNS BEFORE THE WORLD MOVES | |
| 4 *(budget)* | NEXT TURN THE WORLD MOVES | 🟡 *"Tonight's business is running out of road."* |
| 5 | OUT OF ROOM — NEXT TURN SETTLES IT | 🟡 *"The world is starting to act without you. One more turn and it moves on."* |
| **6** | | **the world takes the beat** |

When it takes it: the **hard landing** plays instead of the clean one — a different closing
scene, already written, for a night that got away from you. A **scar** goes on the record.
And a **toll** is paid: **three tolls and the world folds the table** — the story catches
itself up without you.

**So the pressure ladder is completely honest.** Two warnings, in plain words, one turn
apart, and then the thing it warned about. You have to ignore it twice.

### 2. The landing — one turn

The closing scene, clean or hard, and the row of lines that leads into the room.

### 3. The family's own time

**Seven turns before the way out appears** — or immediately, since last release, if you
click a line that reaches for the road (*"Move. The marsh road is hours out"*).

**Nothing here is counting.** No budget, no pressure, no clock. The board says so out
loud: *"No clock, no gate, nothing owed. The night moves on when you say so."* This is the
one part of the game with no deadline in it, which is right, because it's the part the
game is actually about.

---

## Where danger actually lives

Separate from all of the above, and it's the only thing that can kill you:

- **6 beats** have peril that arrives mid-scene if you linger
- **4 beats** have peril only on the way out — a gauntlet you enter by leaving
- **23 beats have none at all**

When peril is live the bar says **ONE MORE WRONG MOVE — *(the threat's name)***, and it
means it. Roughly a third of the game can hurt you; two thirds are safe to sit in.

---

## The correction

I reported that budget and pressure were inert in the written game, that the yellow ladder
threatened something that never happened, that a red close was impossible without the AI,
and that 47% of the authored landings were dead prose.

**All four were wrong.** I was checking the "world is forcing this" flag *after* each turn
finished — and the game clears that flag at the end of every turn, so it reads false no
matter what. I was looking at a variable that had already been tidied away.

You caught it with one question — *"I thought taking the door WAS answering the
question?"* — which is exactly what it is, and which is why the door closes clean and
letting the night run out does not.

**One real regression came out of it.** On that reading I changed the turn pips to count
the floor instead of the budget, which hid the only genuine deadline in the game. Reverted
in v4.81.0.

**And there's now a check that would have caught me.** It plays a beat, never takes the
door, and asserts the whole ladder in order — two yellows, then a close that books hard,
records the scar, and pays a toll. Its "broken version" is my own faulty instrument: the
same walk, reading the flag after the turn. It never sees it. That's how the wrong report
happened, and it's now permanently on the page.
