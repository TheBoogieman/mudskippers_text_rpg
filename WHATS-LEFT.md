# What is left — the hand pass, measured

*Everything on the engine board is shipped (v4.72.4 `d11981a`). What remains is writing.
This document re-measures it against the current build rather than quoting `RAIL-AUDIT.md`
(v4.71.10) and `ANCHOR-AUDIT.md` — and two of the numbers have moved a long way.*

---

## The headline: the key-collision job is 2 items, not 17

`RAIL-AUDIT.md` §3 lists **17 key collisions** — a distinctive token owned by two cards
in one deck, so a typed line using it scores both and authored order breaks the tie. That
was a static read of the `key` lists. Run through the game's **own scorer**, across all
66 decks and 252 cards:

| | |
|---|---|
| shared tokens across all decks | **49** |
| of those, tokens that actually **tie two cards** in `topicEvidence` | **2** |

The other 47 are already handled by machinery that exists: stop-words score nothing,
`scenewideTerms` suppresses anything in more than half a deck, and the rarity rule means
a short common word needs two hits — at which point the rest of the typed line
discriminates. Only a token of 8+ letters wins a card on its own, and only two such
tokens are owned twice:

| deck | token | ties |
|---|---|---|
| `a2-turn` walk | **exchange** | *"what the offer actually is"* ↔ *"what they do instead"* (2–2) |
| `a3-principal` walk | **landlord** | *"who she is"* ↔ *"why she rents to the Choir"* (2–2) |

**The fix is one word each:** trim `exchange` from whichever of the two a2-turn cards it
is *less* the subject of, and the same for `landlord` on a3-principal. Neither is
prose — it is the `key` field, which is not corpus, so **the fixture does not move.**

*(The other 15 in the audit's list — `courier`, `stairs`, `think`, `where`, `water`,
`funeral`, `seven`, `shard`, `doing`, `manual`, `inside`, `marek`, `built`, `guide`,
`family` — are all sub-threshold. They can be left alone with confidence now, which they
could not be when the list was written.)*

---

## 2. The deck-evidence rails — 11 live, 3 worth your eye

A landing rail whose words score a card makes the settle **deal that card**. That is the
gate working when the card answers the rail, and the kettle defect when it does not.
Measured against the current book:

| rail | deals | v4.71.10 verdict |
|---|---|---|
| `a1-chase lands0/r1` | what Vic is like | ✓ correct |
| `a3-evict lands1/r0` | how to accept the tea | ✓ correct |
| `a2-ground lands0/r2` + `landsHard0/r2` | the undercroft itself | **✗ likely non-answer** |
| `a2-turn landsHard0/r2` | who is going | ~ your call |
| `a2-turn landsHard1/r0` | who is going | **✗ non-answer** |
| `a2-turn landsHard1/r2` | who is going | ~ your call |
| `a3-principal landsHard0/r1` | what she wants | ~ your call |
| `a2-three opens0/r0` | what the two voices are | *(new to this measure)* |
| `a2-housing opens0/r1` | the lamp, the shack, the hour | *(new)* |
| `a2-turn opens0/r1` | what the Exchange even is | *(new)* |

**Note `a2-turn` carries four of the eleven.** Three of its landing rails all deal *"who
is going"*, and its opening rail deals *"what the Exchange even is"* — that beat's rails
and its deck are pulling at each other harder than anywhere else in the book. If you fix
one beat here, fix that one.

*(My count is 11 where the audit said 9 because I measured `opens` rails too; the audit
sampled landings. The three verdicts marked ✗ are unchanged and still stand.)*

---

## 3. The scene-echo rails — 20 by the current measure

Rails that share most of their words with the passage they hang under. Two kinds live
here and **only you can tell them apart**: *follow-through* (the rail asks about a detail
the landing planted — good, leave it) versus the *"always" defect* (the rail offers to
redo an exchange the landing already completed — v4.71.7's class).

`RAIL-AUDIT.md` §2 lists them sorted by overlap, full-overlap first. The seven at 100%
are where to start:

`a2-housing landsHard0/r2` (7/7) · `a1-turn lands0/r0` (4/4) · `a2-annul opens0/r1` (4/4)
· `a1-turn landsHard1/r0` (3/3) · `a2-housing opens0/r0` (3/3) · `a3-vic opens0/r1` (3/3)

This is the largest item on the board by volume and the one least suited to me.

---

## 4. The anchors — four beats, `ANCHOR-AUDIT.md`

| beat | anchor | proposal | kind |
|---|---|---|---|
| `a2-hand` | Mirren | card 3 (*any way back for her*) says her name once, in Vic's mouth | prose |
| `a2-chassis` | Seven | card 2 (*whoever does not get it*) names Seven | prose |
| `a3-stone` | Vic | card 0 names him — **or the anchor comes off** if the not-saying is the point | **your fork** |
| `a1-hum` | Nine | drop the anchor: a beat cannot be gated on the name it exists to reveal | engine |

`a2-chassis` first — it is the season's fork and cannot witness for its own gate under any
play pattern.

---

## 5. One nameplate

`a1-fare`'s counter clerk speaks as **`Other`** (one card: *"what is actually in the
box"*). Deliberate anonymous voice, whitelisted in the surface lint. If you want it to
read with more flavour — `COUNTER`, `THE CLERK` — it is a two-line change: the speaker
string and the whitelist entry.

---

## 6. Behind all of it: the wire order

The last engine item, ruled to wait for this pass so the composition change lands against
a settled book. Worth ~8–10k tokens a turn at ~10% price, and it ships behind its own bar:
the same driven night composed both ways, bookings and transcripts must match or it does
not go in.

---

## What moves the fixture, and what does not

| item | corpus? | fixture |
|---|---|---|
| key collisions (§1) | **no** — `key` is matcher tokens | **unmoved** |
| deck-evidence rails (§2) | yes if the rail's wording changes | **moves** |
| scene-echo rails (§3) | yes | **moves** |
| anchor prose (§4) | yes | **moves** |
| `a1-hum` anchor drop | **no** — SPINE field | **unmoved** |
| the nameplate (§5) | yes | **moves** |

Anything that moves it is re-taken **by delta** with a ledger line saying what moved and
why. Never regenerated.
