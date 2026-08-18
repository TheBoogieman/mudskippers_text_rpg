# What is left

*Live list only. A finished thing leaves this file — the commit that did it is the record.
Standing rules, traps and tools live in `HANDOVER.md`, not here.*

**v6.8.0 · 34 nights written · sweep 88 PROVED of 106, 0 FAILED.**

---

## 0. FIRST: TWO THINGS THE PLAYTHROUGH TURNED UP

**THE RECORD SWEEP — do this before more writing.** Night 3's `exit` and its `canon[2]` both
asserted "Vic dodged one question" **unconditionally**, on every clean close — so a player who
never drew that card was told about a scene that did not happen. Fixed there at v6.13.0.
**Night 3 is very unlikely to be the only one.**

**THE RULE:** a night's `exit` (the player reads it on the close) and any unconditional `canon`
line may only claim what happens on **every** road through that night. Anything that depends
on a card being drawn belongs to the card.

Sweep all 34: read each `exit` and each `canon` entry and ask *"is this true if the player
asked nothing?"* Where it is not, either move the claim to the card or rewrite it as a fact
about the world rather than a report of a scene — which is what night 3's became.

**AND `a1-chase/vic-the-man` IS UNCONFIRMED.** The author reported its second take answering
with the banter pool instead of its own written take — *"Again? Fine. You want the part I left
out…"* — but he was on a stale bundle at the time and reloaded before we could re-test. **Ask
him whether it still happens before chasing it.** If it does, it is the same shape as the walk
hole: a click that reaches nothing falls through to the pool.

---

## 1. THIRTY-THREE WALK ANSWERS ARE STILL TO WRITE — *authoring, mechanical, and the shape is set*

**RULED: one per night, all 34, and the first walk costs nothing but is remembered.**

The hole the author found by playing: every night authors what the courier SAYS to walk out,
and the ending he reaches on the second press — but nothing answered the FIRST press, so the
room fell through to the banter pool and the most consequential button in the game was met
with a joke about filing.

**THE FORM IS BUILT, PROVED AND DRIVEN.** `walkAnswer` on the beat, in the corpus's own block
shape, so the mannerism scan, the drift net and the speaker fence already read it.
`playWalkAnswer()` plays it and merges one canon line once per run — no toll, no scar.
**A night with no `walkAnswer` falls back to exactly what it did before**, so the 33 unwritten
ones read as "not written yet" and never as a crash on the button that ends the run.

**`a1-hum` IS WRITTEN AND IS THE TEMPLATE.** What the scene has to do is NOT talk him out of
it — the ruling is that it costs nothing — but to decline to make it easy. Night one's own
`never` list wrote most of it: only Pia and Nine may speak, and **Nine cannot hear through
cloth**, so she does not answer, because he has not touched her. He is offering to hand over
somebody who cannot hear him offer it, and Pia having to point that out is the scene.

**The remaining 33 are mechanical.** Read the night's `never` first — it will usually decide
who may answer and what they cannot say. Add `walkAnswer` beside `walkLine`. Then the guards:
`ticfind.js`, `grammar.js`, the drift delta, and press the walk once in the drawer.

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

## 4. A REAL SAVE ACROSS THE SPINE INSERT — **DONE, and it found a defect**

**It did not need the author's machine.** The rehearsal drawer can build the exact case: take
a live save at a night after the insert, put the index it would have carried *before* the
insert back into it, and hand it to the real `restoreFromBlob`.

**Name plus stale number came back perfectly** — right night, and the whole run identical
down to the canon count, the chassis holder and the run slug. The number it carried now
points at the night before, so without the name it would have resumed a night early.

**AND THE NAMELESS CONTROL LANDED ON THE SERIES FINALE.** A save too old to carry a name fell
to the frozen v3.4 order, where the lookup was `Math.min(s.beat, list.length - 1)` — so every
numeric-only pointer past the end of that list clamped to its last entry, which is
`a3-seize`. A nameless save parked at day thirty resumed on the last night of the book with
the whole descent unplayed. **Fixed: a number that cannot be honestly placed now falls
through to the season's first beat**, which is what the restore's own comment always claimed
it did. Re-driven: that case lands on `a3-evict` now. Sweep row **(4a5)** covers all three.

---

## 5. THE SWEEP'S UNDECLARED DEBT — **ZERO**

The harness credits a broken form only when the check **enters** a function it can watch. Its
headline now reads: *every case either proves it would have caught its own defect, or says
why it cannot.* **88 PROVED of 106, 0 FAILED, nothing undeclared.**

**Two of the original nine were the instrument's own fault.** `hasWord` and `revealText` are
named in the credit roster and were both declared *inside* the sweep, so the names referred
to globals that did not exist — every check calling them ran the sweep's private copy and was
correctly reported as a restatement. Hoisted. Two rows went green untouched.

**Four were inline predicates and are now production functions** — `castMuteFaults` and
`contractionByVoice` — so the row and its break drive the same reader over a corpus
deliberately put into the faulty shape: a card whose answerer is not in the room, a room
emptied of every mouth but the muted one, a contraction in the Principal's mouth.

**Two are DECLARED, not faked.** The composer row and the correction-budget row read the
reply handler's own source, because what they assert is a **route** — that no path to the
model opens without a gate — and the fault they exist to catch is a route nobody takes, which
no driven turn can reach. Their broken form would have to be a different string.
**Bolting a production call onto a text compare would buy the credit and prove nothing**,
which is the exact thing this harness was built to refuse.

**The remaining exempt row is the banter floor**, a ratchet, which has no broken form by
construction and says so.

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
