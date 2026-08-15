# The landing-rail audit — findings for the hand pass

*Mechanical sweep of every `opens`/`lands`/`landsHard` rail across all 33 beats, run through the game's own matchers (`normLine`, `topicEvidence`, the stemmer), plus a key-collision and presence census over all 502 cards. v4.71.10. The mechanical fixes are already in; everything below the line is authoring judgment — yours.*

**Already fixed (mechanical certainty):** Vic restored to a1-carried's back-room roster (he was speaking in his own room and `here` had forgotten him); Five added to a3-for's hatch-head roster (one body, split by watch — the body was listed without the passenger). Both were caught by the new surface lint, which now runs in the sweep forever: no rail may shadow a door or collide with a house stall, and nobody speaks in a room that does not hold them (whitelist: Narration, and `Other` — see below).

**Clean classes:** zero door-shadowing rails and zero stall collisions in the wild, all 33 beats. The lint keeps it that way.

---

## 1. Deck-evidence rails (9) — the settle would deal a card; is it an answer?

A landing rail with evidence deals the matching card as the settle. That is the gate working **when the card answers the rail** — and the kettle defect when it doesn't.

| rail | deals | verdict |
|---|---|---|
| a1-chase lands0/r1 "Ask Pia what Vic will be like when he opens that door." | "what Vic is like" | ✓ correct — leave |
| a3-evict lands1/r0 "Tell her there is no wrong way to hold a cup of tea." | "how to accept the tea" | ✓ correct — leave |
| a1-turn opens0/r1 "Eat first. Whatever this is, it keeps better fed." | "what she is to him now" | ✗ non-answer — reword rail or trim the card's key |
| a2-ground lands0/r2 + landsHard0/r2 "Ask Hesta what is left on the list after this one." | "the undercroft itself" | ✗ likely non-answer — check |
| a2-turn landsHard0/r2 "Everyone off the walls. We move tonight." | "who is going" | ~ command dealt a question card — your call |
| a2-turn landsHard1/r0 "Say what it is we are going to get back. All of it, out loud." | "who is going" | ✗ non-answer |
| a2-turn landsHard1/r2 "Everyone sleeps. We leave when it is light and not before." | "who is going" | ~ your call |
| a1-chase opens0/r1 "Back down. Whatever is coming, it can have the stairs." | "what is coming down the stairs" | ~ defensible — the retreat answered by the fear |
| a3-principal landsHard0/r1 "Take the argument back. Start from the wrong end." | "what she wants" | ~ your call |

## 2. Scene-echo rails (33) — the rail shares most of its words with its own passage

Two kinds live here, and only you can tell them apart: **follow-through** (the rail asks about a detail the landing planted — good, leave it) versus **the "always" defect** (the rail offers to redo an exchange the landing already completed — v4.71.7's class). Sorted by overlap; the full-overlap ones first.

`a2-housing landsHard0/r2` (7/7) "Ask Three for the version where I was sitting down." · `a1-turn lands0/r0` (4/4) "Ask Vic what the job turns into, then." · `a2-annul opens0/r1` (4/4) "Ask Three what the tea towel is for." · `a1-turn landsHard1/r0` (3/3) "Say the thing that was never said." · `a2-housing opens0/r0` (3/3) "Ask Three what she is looking at." · `a3-vic opens0/r1` (3/3) "Shut the door behind me." · `a3-evict lands1/r0` (5/6) · `a1-turn lands0/r2` (5/8) · `a1-hum lands0/r2` (4/6, the Move line — echoes are usually fine on departure lines) · `a1-hum landsHard0/r1` (4/5) · `a1-chase opens0/r0` (3/4) · `a1-late lands0/r0` (3/5) · `a1-late lands0/r2` (3/6) · `a1-carried lands0/r1` (4/5) · `a1-turn lands0/r1` (4/5) · `a2-door landsHard0/r0` (3/4) · `a2-hand lands0/r2` (3/4) · `a2-hand landsHard0/r0` (3/4) · `a2-hand landsHard0/r2` (3/5) · `a2-three opens0/r1` (3/6) · `a2-manual opens0/r0` (3/5) · `a2-annul lands0/r2` (3/4) · `a2-law lands0/r1` (4/7) · `a2-law landsHard0/r1` (4/6) · `a2-turn landsHard0/r1` (3/5) · `a3-evict opens0/r0` (3/4) · `a3-evict opens0/r1` (3/6) · `a3-evict lands0/r2` (4/5) · `a3-evict lands1/r2` (3/6) · `a3-voice landsHard0/r2` (3/4) · `a3-founding landsHard0/r1` (3/5) · `a3-principal opens0/r0` (3/5) · `a3-granny lands0/r1` (3/4)

## 3. Key collisions (17) — one word, two cards, neither wins

A distinctive token owned by two cards in a deck discriminates between nothing: a typed line using it scores both equally and authored order breaks the tie. Give each word to the card whose subject it *is*, and trim it from the neighbor — or accept the tie knowingly.

a1-hum room: **courier** (mudskipper card ↔ courier-from-outside) · a1-chase walk: **stairs** (what-is-coming ↔ the-stairs bit) · a1-exit walk: **think** · a1-carried walk: **where** · a2-ground room: **water** · a2-mirren walk: **funeral** · a2-seven room: **seven**, **shard** · a2-three walk: **doing** · a2-manual walk: **manual**, **inside** · a2-annul walk: **marek** · a2-turn walk: **exchange** · a3-founding walk: **built** · a3-for walk: **guide** · a3-principal walk: **landlord** · a3-granny walk: **family**

## 4. One nameplate for your eye

a1-fare's counter clerk speaks under the nameplate `Other` — deliberate anonymous voice, now whitelisted in the lint. If you'd rather the screen read something with more flavor ("COUNTER", "THE CLERK"), that's a two-line authoring change (the speaker string in both plays and the whitelist entry); the machinery doesn't care.
