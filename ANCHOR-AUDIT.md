# The unreachable anchors — a proposal for the hand pass

*Four beats name anchors their own cards never say, so no way of playing them can
witness for their own ending. Since v4.72.2 that no longer costs the player anything —
the door closes clean regardless — but the beats still cannot honestly earn their
gates, and the sweep's amber row will name them every run until the writing changes.*

**Nothing here is applied. No authored line has been touched and the fixture has not
moved.** These are proposals; the wording is the Architect's.

---

## How to read this

`anchors` is a list of names that must appear in the beat's **played** prose before a
DM-claimed gate counts. The opening cannot witness for them (it plays before anyone has
done anything) and neither can the landing (it plays after the close). Only `plays` text
from cards the player actually reached counts.

So a beat is unreachable when **no card in its deck names its own anchor**. Below, each
beat's cards are listed with who answers them, and the proposal names the one card best
placed to carry the name — chosen where the name is already the subject in all but the
word, so the change is a clarification rather than a new fact.

---

## 1. `a2-hand` — anchor `Mirren` · **0 of 4 cards name her**

> *Exit: "Mirren's hunt has ended by the family's hand, and the room knows exactly whose"*

| # | ask | answers |
|---|---|---|
| 0 | whose hand it is | Vic |
| 1 | whether Vic should be allowed to | Hesta |
| 2 | what happens after | Hesta |
| 3 | whether there is any way back for her | Vic |

**The night is entirely about Mirren and never says her name.** Card 3 — *"whether there
is any way back for her"* — is the one that cannot be about anyone else; "her" is doing
the anchor's whole job.

**Proposal:** in card 3's `plays`, let Vic say the name once. He is the one person in the
room with the standing to, and the beat's own exit line says the room *knows exactly
whose* — which is a sentence about a name being said out loud. One word, in Vic's mouth,
in the card the player reaches when they ask the question the night is for.

---

## 2. `a2-chassis` — anchors `Seven` + `Nine` · **1 of 4 cards names Nine, none names Seven**

> *Exit: "the chassis has been given — to Seven or to Nine — by Nine's own choice, spoken at the table…"*

| # | ask | answers | names |
|---|---|---|---|
| 0 | whose it is | Vic | Nine |
| 1 | what Nine wants to do | Nine | — |
| 2 | what happens to whoever does not get it | Vic | — |
| 3 | whether it even works | Vic | — |

**This is the worst of the four, because it is the season's fork.** The beat that books
which body Nine chooses cannot witness for its own gate under any play pattern — and the
gate it books is the branch every Book Three card reads.

`Seven` is the missing half. Card 2 — *"what happens to whoever does not get it"* — is
literally a question about Seven's position and never names him.

**Proposal:** card 2 names Seven. Vic answering "what happens to whoever does not get
it" without saying Seven is the shape the anchor law is designed to catch: the card is
*about* a person the prose keeps at arm's length. Card 1 (*"what Nine wants to do"*,
answered by Nine) would also carry `Nine` naturally if it does not already — worth
checking by eye, since the automated read says only card 0 names her.

---

## 3. `a3-stone` — anchor `Vic` · **0 of 3 cards name him**

> *Exit: "Vic has been cairned and named, and the family has turned toward the descent"*

| # | ask | answers |
|---|---|---|
| 0 | what to say | Hesta |
| 1 | whether he deserves it | Three |
| 2 | what Seven says | Seven |

**The exit line contains the fix in its own words: "cairned and *named*".** This is a
funeral, and the anchor is the dead man; the beat is about the difficulty of saying his
name, which is presumably why the cards circle it.

**Proposal:** card 0 — *"what to say"* — is the eulogy card, and a eulogy that never says
the name is a deliberate choice or an omission, and only you know which. If it is
deliberate, this beat may be the one where the anchor should come **off** rather than the
prose change: a night whose whole subject is not being able to say a name should not be
gated on saying it. **Flagged as a genuine authoring fork, not a defect with one answer.**

---

## 4. `a1-hum` — anchor `Nine` · **2 of 7 cards name her, and this one is different**

| # | ask | answers | names |
|---|---|---|---|
| 0 | who Mirren was to Vic | Pia | — |
| 1 | how she hears him at all | Nine | **Nine** |
| 2 | is she frightened | Nine | **Nine** |
| 3–6 | Pia's four | Pia | — |

**Not unreachable — but self-defeating.** Cards 1 and 2 name her, so rail-clicking play
witnesses fine; that is why this beat is not on the amber row. The problem is that
`reveals:["nine"]` makes her name **this beat's own reveal**, so the cards are correctly
coy about it, and one of the three rotating exit wordings is literally *"I say the name
out loud. Nine."*

**Proposal — engine, not prose:** drop `anchors:["Nine"]` from `a1-hum`. A beat cannot
honestly be gated on a name it exists to reveal, and the two cards that do say it are the
two least likely to be the ones a player reaches first. Everything else about the beat
already guarantees the ending: the door is pinned, the physics law governs how she
answers, and the reveal fence protects the name until it is earned.

---

## Summary

| beat | anchor | proposal | kind |
|---|---|---|---|
| `a2-hand` | Mirren | card 3 (*any way back for her*) says her name once, in Vic's mouth | prose |
| `a2-chassis` | Seven | card 2 (*whoever does not get it*) names Seven | prose |
| `a2-chassis` | Nine | check card 1 by eye — automated read says only card 0 carries her | prose |
| `a3-stone` | Vic | card 0 (*what to say*) names him — **or** the anchor comes off, if the not-saying is the point | **your fork** |
| `a1-hum` | Nine | drop the anchor; a beat cannot be gated on its own reveal | engine |

Any prose change here **moves the verdict fixture** — it is corpus. Re-take it by delta
with a ledger line saying what moved and why; never regenerate.
