# What is left

*Live list only. A finished thing leaves this file — the commit that did it is the record.
Standing rules, traps and tools live in `HANDOVER.md`, not here.*

**v6.7.0 · 34 nights written · sweep 81 PROVED of 106, 0 FAILED.**

---

## 1. THE 101 UNREAD CARD ROWS — *the blocker is cleared; the list is spread, not faults*

**THE TWO READERS ARE RECONCILED AND `band.js` WAS RIGHT.** `flagshape.js` disagreed with it
by up to ten points and the cause was entirely in the reader, not the book: it carried 18
contraction pairs against band.js's 23, and — the real one — it averaged **per-card** rates
instead of taking the whole-book ratio, so a five-instance card counted the same as a
fifty-instance one. Re-run with band.js's own pair list and a true ratio (`flagshape2.js`),
the two land within 0–5 points on every speaker. **The earlier figures of Pia 54, Seven 18
and Vic 54 were wrong and are withdrawn.**

**AND THE ANSWER TO THE ACTUAL QUESTION IS THAT THE LIST IS MEASURING SPREAD.** Every
speaker is on band book-wide — Pia 59 against 65, Vic 59 against 60, Hesta 44 against 45,
Seven 27 against 30, Three 14 against 15, Nine 9 against 10, and Machine, Principal and Five
flat at zero as ruled. Of Pia's 113 cards, 13 sit at the bottom, 19 at the top and **81 in
the middle**; Vic, Hesta, Marek and Seven are the same shape. Only Nine and Three pile at one
end, which is correct for both.

**So the 103 flagged cards are per-card deviation around a correct book average — the same
thing the 294 residual swaps are, counted a different way.** The two flagged cards that were
real were both extremes (80% against a target of 15; 0% on the night a man first speaks in
nine years), which is the tail rather than the body.

**Not closed by reading, and it does not need to be.** If anything is ever worth taking it
is Pia and Seven book-wide, and that is the ruling already made about the 294.

---

## 2. 294 RESIDUAL CONTRACTION SWAPS — *ruled not worth taking, and still is*

Every speaker is on band. These are the residue of per-card rounding. **A budget does not
have to be spent to the penny.** Listed so nobody rediscovers them and thinks they are a
debt.

---

## 3. `band-pass.js` CANNOT REACH `a3-seize` — **FIXED**

**The last beat has no next beat, and that was the whole bug.** Both of the tool's regions
were bounded by the *next* entry of their kind; `a3-seize` is last in both `SPINE` and
`SCENEBOOK`, so the search found nothing, the bound fell back to end-of-file, the region
swallowed the rest of `corpus.js` and the size guard threw. **The guard was right and the
bound was wrong.** Regions end at their own container's terminator now.

**AND THE TERMINATOR HAD TO BE A REGEX, BECAUSE THE WORKING COPY IS CRLF.** A literal
`"
};"` cannot match `"
};"`. The next-entry bound never noticed, because a regex `
`
matches the `
` inside a `
` perfectly well — so the line endings were invisible until
a literal string was compared against them. Verified on the first beat, a middle beat, a
random beat and the last one.

---

## 4. A REAL SAVE ACROSS THE SPINE INSERT — *verification, and it needs the author*

Inserting `a2-take` into the middle of `SPINE` shifted every night index after it. Saves
resolve by **name** and sweep row **(4a5)** proves it with a save carrying a deliberately
wrong number.

**What has not happened is opening an actual saved run.** If there is a run parked in Book
Two on the author's machine, opening it is the last piece — it should land exactly where it
was left.

---

## 5. NINE SWEEP ROWS CARRY NO BROKEN FORM — *now named, and none has earned one yet*

A row proves itself by breaking the code and watching the claim fail. These nine assert
something and have no broken version to run, so they show a property without proving they
would notice it going away. **They are named here for the first time:**

- every card is answered by somebody in the room
- no card orders a voice the physics has switched off
- the relay never speaks the answer it is withholding
- the composer is reached once per player action
- every correction route spends from one capped budget
- every plant and every payoff is really in the night that claims it
- the two formal voices never contract
- nobody explains the peak joke
- a bit turn asks for dialogue and nothing else

**Several of these can be broken honestly** — the plant/payoff row by moving a plant word to
a night that does not contain it, the formal-voices row by contracting one Machine line in a
copy — and those are the mutations the row exists to catch rather than a stubbed detector.
**None was attempted; this was identification, not repair.** The number should go down one
row at a time and never up quietly.

---

## WHAT MUST NOT BREAK

**THE SEAL ON THE COURIER'S BLOOD.** *"A deliberate open mystery — descent, fluke, or
something Vic never dared test… the canon never fully confesses."* A proposed fix once had
the Architect keying the lock to his own bloodline and the courier descending from it.
**Ruled: the seal holds. Do not confirm it, in any beat, ever.**

**NOBODY EVER TELLS THE COURIER WHY HE WAS CHOSEN.** Vic never said, there is no entry about
him in the founders' records, and the family says so to his face. **That is the door left
open for a second season and it must stay shut.**

**WHAT SEVEN WAS ON THE LISTS STAYS SEALED — ruled, final, not to be re-opened.** *How he
got out* is his to tell and he tells it; *what he did* is the hole in him that the family
steps around, and it is stronger unspoken.

**TWO DEBTS WERE RETIRED BY THE AUTHOR AND MUST NOT COME BACK:** not every card needs a
second take, and `a2-chassis`'s 25 take-lines are being lived with. **Never add a second
take to a beat that is short by nature**, and **never rewrite a second take that already
exists.**
