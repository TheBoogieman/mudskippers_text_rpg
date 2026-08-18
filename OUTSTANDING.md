# What is left

*Live list only. A finished thing leaves this file — the commit that did it is the record.
Standing rules, traps and tools live in `HANDOVER.md`, not here.*

**v6.25.0 · 34 nights written · sweep 91 PROVED of 109, 0 FAILED.**

**ONE THING IS OWED: the terminal, below.** The record sweep is closed, both halves, and the walk is answered on all
34 nights. There is no unwritten prose in this book and no known defect in it.

*The two entries below are not tasks. They are MEASUREMENTS THAT CAME OUT FINE, written down
so that nobody finds the numbers again in six months and mistakes them for a debt. Everything
that was genuinely outstanding has left this file, which is what the line above requires.*

**The next real work is the author playing it**, which is where the last five faults came from
and where the next one will come from too.

---

## 0. THE TERMINAL HAS NOT BEEN AUDITED AGAINST THE FINISHED BOOK

**The author, playing on a phone: "the terminal needs some love too... I'm not sure if
anything on this screen is up to date with the story."** Not yet checked, and it should be
done as its own wave with a fresh head.

**FIRST, A CORRECTION THAT MUST NOT BE ACTED ON BACKWARDS. He believed the TOLLS row shows a
removed mechanic. IT IS NOT REMOVED.** `payToll()` is called on a forced close
(`index.html:7928`) and on a walkback (`index.html:8433`), and at `TOLL_MAX` the season FOLDS
- `tolls >= TOLL_MAX && !isFinaleBeat()`, gated `!wildRun()`, so **novel runs only**. What was
removed at v6.10 is the pressure STRIP AT THE WILD TABLE, which is a different thing in a
different mode. **Deleting the TOLLS row would hide a live mechanic that can end a season.**
The likely truth is that he has never SEEN one charged, because they only land on forced
closes and walkbacks.

**WHAT THE AUDIT IS.** The STATUS pane renders THE JOB, TONIGHT, the season-beats line, the
turn meter, TOLLS, THE FAMILY, THE COURIER SO FAR and THE RECORD, and there are five more
panes behind it - JOBS, CAST, MAP, ARCHIVE. Each has its own source. The question for every
one of them is the question this week has been asking everywhere else: **does it still say
something true about a book that is now finished, or is it describing a game from before the
34 nights landed?** Read each pane against the run it claims to describe, and drive the
screen rather than reading the renderer.

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
