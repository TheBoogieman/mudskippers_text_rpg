# MUDSKIPPERS v4.72.3 "The Seams Get Their Own Switch" — the implementation report

**On top of:** `fe6ab62` v4.72.2 "Both Ends of the Night"
**Implements:** the five rulings given on the v4.72.2 report, 2026-08-15
**Commit:** `40fdda6` · verified against `git ls-remote` and the Contents API sha

---

## 0. What shipped

Five rulings, all of them corrections to choices I had made a release too confidently.

| ruling | shipped |
|---|---|
| **Split the controls** | Seam authorship is now a checkbox on the WILD TABLE door — *"…and let it write the seams too"* — **off by default**, remembered between runs. `seamsDM` reads `settings.seams` once at run creation, stamped and immutable exactly as before. Temperature is prose-only again, relabelled, and its hint names the local-model degradation instead of the seam threshold. |
| **The night keeps its name** | The TONIGHT card renders in both modes. Above the line the DM supplies its words with a `tonight` field on the opening seam reply; the authored `TEASES` line is the floor when it sends none. |
| **Fence wherever the board stamped** | A seam reply that sends `location`, `day` or `time` back *changed* has those fields dropped and the attempt logged. Deliberately no wider — an ordinary wild turn still moves the family wherever the storyteller says. |
| **Anchors → amber sweep row** | Row 65 drives all 33 beats four ways and names the beats whose anchors no play pattern can witness for. Amber by design; it goes green when the writing changes. |
| **Seam keeps its own call** | Unchanged, as ruled. |

### Two defects of mine that the questions round exposed

- **The tease drop was inconsistent, not merely debatable.** It fired only on the
  `slackArm` road; a tease queued by any other road still rendered through the generic
  aside branch. Had you ruled "drop it," I would have shipped a card that flickered. The
  special case is gone entirely now.
- **The old threshold coupled two unrelated choices.** A player who wanted stranger prose
  got the seams as a side effect; a player who wanted the seams was forced to a
  temperature that makes small models return malformed JSON. Neither was discoverable.

---

## 1. The ritual

| check | result |
|---|---|
| encoding: no BOM, zero `U+FFFD`, zero mojibake, em dashes intact | clean |
| `node --check` on the script body | clean |
| window-global `var` collisions | none |
| every `$("id")` has markup | zero misses |
| `<div>` balance | 234 / 234 |
| `?selftest` | **65 rows, 0 FAILED, 46 PROVED, 19 amber** (one amber by design) |
| fixture delta | **zero** — 3,759 lines × 9 predicates, 412 fires, none moved |
| banner · `VERSION_TAG` · `sw.js` slug | v4.72.3 · `mudskippers-v4-72-3` |
| README · AUTHORING.md | both corrected off the temperature switch onto the checkbox |

### Driven by hand

- The two-door card: box present, default off, ticking it saves, a wild run stamps
  `seams:true` into the blob, and dropping the temperature dial to 0.2 afterwards does
  **not** take the seams back.

---

## 2. What is outstanding

### A. A gap in my own verification — the most important item here

**The seam path has not been driven against a live model since the switch changed.** The
live run in v4.72.2 turned the seams on via temperature and predates all three of this
release's changes. So these are **sweep-proved but never seen on a real wire**:

1. the **checkbox** road into `seamsDM` (the temperature road is what I drove);
2. the **`tonight` field** — no model has ever actually been asked for it, so I do not
   know whether it comes back usable, or at all;
3. the **stamp fence** — proved against a hand-built reply, not against a model that
   genuinely restamps the room the way the 32B did.

The mechanisms are asserted and the sweep is green. That is not the same as having
watched them work, and on this project the second one is what has ever caught anything.

### B. Unruled, carried forward

| # | item | state |
|---|---|---|
| 1 | **The wire order** — briefing-first means nothing after the BIBLE ever prefix-caches (14,805 tokens cached *constant* across 14 sonnet-5 turns). Worth ~8–10k tokens/turn at ~10% price. | Ruled "its own wave, first on the resume queue." **Unscheduled.** |
| 2 | **The unreachable anchors** — `a2-hand` [Mirren], `a2-chassis` [Seven+Nine], `a3-stone` [Vic] name people their own cards never say. `a2-chassis` is the season's fork. | Now permanently visible as the amber row. **Authoring, the Architect's call.** |
| 3 | **`a1-hum`'s anchor is its own reveal** (`anchors:["Nine"]` on the beat whose job is revealing that name). A sub-case of #2 needing a different answer from the other three. | **Unruled.** |
| 4 | **v6.1 §2.4 — the OpenRouter `models: [primary, fallback]` array.** Flagged optional, default off; never built. The scenario-11 floor holds either way and was proved live. | **Unbuilt by design.** |
| 5 | **`stripReasoning`'s unclosed-tag salvage takes the first brace** — an *unclosed* think block containing a discarded JSON draft would hand the parser the draft. | Accepted residual, documented in the v4.72.1 audit. |
| 6 | **RAIL-AUDIT.md's authoring findings** (v4.71.10): 9 deck-evidence rails, 33 scene-echo rails, 17 key collisions, the `Other` nameplate. | Awaiting the Architect's hand pass. Not mine. |

---

*Questions on A and B follow.*
