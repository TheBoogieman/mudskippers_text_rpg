# What is left

*Live list only. A finished thing leaves this file — the commit that did it is the record.
Standing rules, traps and tools live in `HANDOVER.md`, not here.*

**v6.25.0 · 34 nights written · sweep 91 PROVED of 109, 0 FAILED.**

**ONE THING IS OWED: THE TERMINAL — and it has now been AUDITED BY PLAYING IT.** Four faults,
driven and written up below, awaiting a ruling on three questions. The record sweep is closed,
both halves, and the walk is answered on all 34 nights. **There is no unwritten prose in this
book. The defects that are left are all on the glass.**

*The two entries below are not tasks. They are MEASUREMENTS THAT CAME OUT FINE, written down
so that nobody finds the numbers again in six months and mistakes them for a debt. Everything
that was genuinely outstanding has left this file, which is what the line above requires.*

**The next real work is the author playing it**, which is where the last five faults came from
and where the next one will come from too.

---

## 0. THE TERMINAL — DRIVEN, AND IT IS FOUR FAULTS AND SOME FURNITURE

**AUDITED BY PLAYING IT, v6.25.0.** Two cold-open novel runs routed to the drawer, plus a
seeded night 34. `mud-runs` 24,386 and `mud-settings` 239 before and after. **Awaiting the
author's ruling on the three questions below; nothing is written yet.**

**THE TOLL CORRECTION IS NOW PROVED, NOT ARGUED.** Driving badly picked up **three tolls in
three nights** and the wrist said *"one more folds the table"* by night three. `payToll()`
fires on a forced close (`index.html:7928`) and a walkback (`index.html:8433`); at `TOLL_MAX`
the season FOLDS, `!wildRun()`, novel only. **Do not delete the TOLLS row.** What went at
v6.10 was the pressure STRIP AT THE WILD TABLE.

### The four faults, each driven

1. **THE FAMILY IS EMPTY FOR THE WHOLE BOOK.** The pane headed *who is in it with you* reads
   `THE COURIER, SO FAR` on night 1 and still reads it in the Heart Room on night 34 - where
   the entire list is *the courier, so far · MIRREN · VIC*. **`mergeRoster` has exactly two
   callers: the DM absorber (4866) and restore (15354).** Nothing in the novel ever adds a
   living person. Deaths land because `falls` is a beat field; joining is not.
2. **THE JOB AND OPEN JOBS ARE FROZEN ON NIGHT ONE.** `agendaText` is written once, by
   `OPENING2.agenda`, and never again in a novel run - so the wrist says *"Follow Pia through
   the rain to Vic's safehouse"* while the courier stands in the safehouse kitchen on night 3,
   and says it for 31 more nights. **`OPENING2.quests` is the ONLY quest in the corpus** and
   its status never moves off `active`.
3. **`OPENING2.canon` IS STAMPED THIS TABLE.** Five authored lines - Pia, Mirren, Vic in
   hiding, the shard is Nine, the safehouse - are the game's own words and the wrist labels
   them as model improv, in a mode with no model. `canonIsBoard` walks SPINE, card canon and
   `OPENING_CANON`; **the reveal turn's own array was never added.** A one-line fix, but hunt
   the readers first.
4. **THE DOSSIERS ARE THIN FOR EVERYONE BUT PIA.** `OPENING2.cast` is the only cast data in
   the corpus. `playAuthored` sets `.seen` on a speaker and nothing else, so Vic's card on the
   night he confesses is a name, a want and a met-list. **`WANTS` is the one part that keeps
   pace**, because it is served per season.

### Smaller, and cheap

- **The map is fine and `placeNotes` is always empty.** `noteMove` builds routes correctly
  (five places by night 3); nothing in the novel ever writes a marker a note.
- **The wrist boots `LINK ........ OPENROUTER / OK` on a run that never calls anything.**

### What came out clean, so nobody re-audits it

**THE SEASON SO FAR is the best pane on the device** - every closed night in order under its
season and act with what it settled. THE STONES fills (14 by the end). Location, day, time,
weather and the strip line all move. **SENT and REPLY are honest in novel mode** - *"the novel
never asks"*, *"zero calls"*.

### What was NOT driven, and one non-finding

**A real run was played to night 3 only.** Nights 4-34 were read in the rehearsal drawer,
which seeds the record, the cast and the stones artificially - so the claims above about late
nights are limited to the four registers the drawer does not touch: the family, the job, the
open jobs and the map.

**AND A HARNESS LIED, AGAIN.** A driver clicking every 420ms reached `a1-pack` at budget+2
with no clickable anything. **At 3,000ms the same night closed cleanly in nine steps.** It was
the harness outrunning the reveal, not the game. Not a defect, and it is written down here so
nobody re-finds it and believes it.

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
