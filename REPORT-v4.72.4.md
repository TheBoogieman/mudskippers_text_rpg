# MUDSKIPPERS v4.72.4 "Deleted Before It Is Judged" — the implementation report

**On top of:** `40fdda6` v4.72.3 · report `8f06c91`
**What this is:** the live drive you ruled for, the defect it found, and the anchor proposal

---

## 0. What shipped

**One fix, found by driving the thing rather than reading it.**

The v4.72.3 seam fence sat at the **foot** of the reply handler, one line above
`showScene`. So on the first real seam turn the validators judged fields the fence was
about to delete, and the run spent **two paid corrections** on them:

- *"YOU SENT NO CHOICES"* — a seam reply legitimately has few
- *"THE CLOCK ONLY GOES FORWARD. This turn is stamped earlier than the scene before"* —
  the model's `12:05am` against the `12:26am` the board had itself stamped moments
  earlier, and which the fence was about to throw away

A lying correction and a wasted call, on a turn the client had already decided to
overrule. **This is the same defect the v4.72.1 audit found in the bit channel** (its
finding B — bits billed for `holdTheDryPath`'s own deletion). Twice in three releases is
a rule, not a coincidence, so it is written into the code as one:

> **What the client intends to delete, it deletes before anything is allowed to judge it.**

The fence now runs above every validator, and a sweep row asserts its **position** in
`callDM`'s own source — it must appear before `physicsBreaks` and before the no-choices
ask — because the bug was positional and a value assertion would not have caught it.

---

## 1. The live drive (§2A of the last report, closed)

Wild run, **checkbox road**, local `mudskippers-qwen2-5-32b`, house temperature (0.9 —
no longer coupled to the seams).

| mechanism | result |
|---|---|
| the **checkbox** road into the stamp | **proved** — `seamsDM` true, `seams:true` in the blob, at temp 0.9 |
| **landing** seam | **proved** — fired, page turned to VELDT UNDERPASS before the ask, DM wrote the passage |
| **opening** seam | **proved** — fired on `a1-chase` after the way on |
| the **stamp fence** | **proved twice, against a real model** — caught two genuine restamp attempts (`fence: 2`) |
| the **`tonight` field** | **the model ignored it.** Zero of the seam replies carried one |
| the **fallback** | **proved** — the TONIGHT card rendered with the authored line, *"The way home is closing. Find out what's left open."* |
| lying corrections | **gone** — the only correction spent was `noScene`, which is legitimate |

Two beats gated live, `chairCuts: 2` — the chair guard caught the model writing Courier
dialogue on a seam turn, which the brief explicitly forbids.

**The honest half:** the `tonight` field is unhonoured by a 32B. The design already
anticipated that (the authored line is the floor, not an emergency), so the card is
correct either way — but nobody should expect the DM's own night-naming on a small local
model. A frontier model may well send it; that is untested and I am not going to claim it.

---

## 2. The anchor proposal (§2B.2/3, closed)

`ANCHOR-AUDIT.md` is in the repo. **No authored line was touched and the fixture has not
moved.** It reads each beat's deck, names the one card best placed to carry the anchor,
and flags where the answer is a judgement rather than a fix:

| beat | anchor | proposal | kind |
|---|---|---|---|
| `a2-hand` | Mirren | card 3 (*any way back for her*) says her name once, in Vic's mouth | prose |
| `a2-chassis` | Seven | card 2 (*whoever does not get it*) names Seven | prose |
| `a3-stone` | Vic | card 0 (*what to say*) names him — **or the anchor comes off**, if a eulogy that cannot say the name is the point | **your fork** |
| `a1-hum` | Nine | drop the anchor: a beat cannot honestly be gated on the name it exists to reveal | engine |

`a2-chassis` is the one to look at first — it is the season's fork, and it cannot witness
for its own gate under any play pattern.

---

## 3. The ritual

| check | result |
|---|---|
| encoding, `node --check`, globals, `$(id)`, div balance | all clean |
| `?selftest` | **65 rows, 0 FAILED, 46 PROVED, 19 amber** |
| fixture delta | **zero** |
| banner · `VERSION_TAG` · `sw.js` slug | v4.72.4 · `mudskippers-v4-72-4` |

---

## 4. What is outstanding

| # | item | state |
|---|---|---|
| 1 | **The wire order** — ~8–10k tokens/turn at ~10% price. | **Ruled: next wave, behind a no-behaviour-change bar** — the same driven night composed both ways, bookings and transcripts must match or it does not ship. **Not started.** |
| 2 | **The anchor prose** — `a2-hand`, `a2-chassis`, `a3-stone`. | Proposed in `ANCHOR-AUDIT.md`. **The Architect's.** `a3-stone` needs your fork answered before anyone writes. |
| 3 | **`a1-hum`'s anchor** — engine-side, one line. | **Unruled** — I did not apply it, because dropping an anchor is a doctrine change even when it is one line. |
| 4 | **The `tonight` field on a frontier model.** | Untested. Would take an OpenRouter key and about ten minutes. |
| 5 | **v6.1 §2.4 fallback array.** | **Ruled: leave unbuilt.** Closed. |
| 6 | **`stripReasoning`'s unclosed-tag salvage** takes the first brace. | Accepted residual, documented in the v4.72.1 audit. |
| 7 | **RAIL-AUDIT.md's authoring findings** (9 rails, 33 echoes, 17 key collisions, the `Other` nameplate). | Awaiting the hand pass. Not mine. |
