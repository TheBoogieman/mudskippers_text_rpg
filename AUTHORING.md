# MUDSKIPPERS — the authoring guide

*How to write scenes and choices by hand. Everything authored lives in `index.html`, in two big tables; everything else in the file is engine. Find things by **search string**, never by line number — the file moves.*

---

## A word before you start: which game are you authoring?

Since v4.72.0 there are two, and **everything in this guide is THE NOVEL**. The
authored deck, the pinned door, the beat floor, the budget and its guillotine, the
teeth runtime — all of it is novel-mode machinery, and the rehearsal room pins novel
for exactly that reason.

**THE WILD TABLE** reads the same two tables, but as *material* rather than as a
script: the beat's cards go into the model's briefing as "what this room knows"
(subject, who would know, the true thing, the held-back thing), the `never` list and
the `before` physics go with them as law, and the teeth card travels as peril
material. Nothing is dealt and nothing is spent. So: **a card you write is read at
both tables, and enforced at only one.** Write `gives` and `holds` as facts about the
world rather than as instructions to a renderer, and both tables get what they need.
`rail`/`railAlt` and `key` are novel-only — the wild table builds its own rail.

## The two tables (of the SCENEBOOK, not of the game)

### `var SCENEBOOK = {` — the conversation decks

This is where most hand work happens. Each beat is keyed by id — search `"a1-hum": {` — and carries:

| field | what it is |
|---|---|
| `where` | the room, in prose |
| `ends` | the landing this beat is walking toward, in the landing's own words |
| `here` | who is in the room — **every speaker in every scene must be on this list** |
| `before` | physics the beat enforces (a1-hum's is the skin-is-voice law) |
| `never` | things that must not happen tonight, enforced as prose law |
| `topics` | the walk's cards — the deck the row deals from |
| `room` | the family's own time after the close: its own `here`, `never`, `topics` |

### A topic card

```js
{ask:"what Nine misses",                    // the SUBJECT - never a speakable line
 key:"miss missing home before quiet want", // tokens that let a TYPED line find it
 who:"Nine",                                // the answerer
 gives:"...",   // the card's contract: the true thing it yields
 holds:"...",   // what it withholds, and how it gets out of saying it
 rail:"Hand on the shard: ask her what she misses.",  // the CLICKABLE line
 railAlt:"...", // optional second wording - each run deals one of the two
 plays:["Narration is a plain string.",
  ["Pia","Dialogue is a two-element array. Spoken lines do not contract; rails may."],
  "Two to six blocks. Every line ships into the corpus and the desk from the commit that writes it."]}
```

Book Three cards can fork by body: a `plays` entry may be a holder-tagged frame object so the scene differs by `chassisHolder` — copy the shape from any `a3-` card before inventing one.

### `var SPINE = [` — the beat skeletons

Search a beat by `id:"a1-vic"`. The authored fields:

| field | what it is |
|---|---|
| `exits` | the door's rotating wordings — all of them end tonight; a typed match IS the door |
| `walks` | the ✗ walk-away line's rotating wordings |
| `opens` / `lands` / `landsHard` | staged scenes: `lines` (same string/pair shapes as `plays`), `now` (the board stamp), `rail` (the aftermath row) |
| `press` | pressure lines the world uses as the budget tightens |
| `canon` / `canonAlt` / `canonSoft` | facts booked at close (Alt on the Nine branch; Soft is what a scar takes back) |
| `scar` | the record of a thin or forced close |
| `anchors` | names that must appear in **played** prose before the door gives the clean close |
| `budget` / `floor` | the night's turn economy |
| `teeth` | the peril card: `when` (`{turnMin:N}` ambient or `{onExit:true}` gauntlet), `stages` with their own rails (`tempt:true` marks the door that can kill), `death`, `deathScene`, survival prose |

---

## The laws that bite (each is asserted in the sweep)

1. **Presence.** Every speaker in a scene is on the beat's `here`. The market is weather and scenery.
2. **Nine's physics.** Skin is voice; through cloth she is weather. Others hear her only bare-held. In a1-hum's walk, before the door: she answers in **shape, never in words** — the first worded sentence belongs to the exit.
3. **Anchors are earned by play.** The opening cannot witness for them. If a beat's subject never gets named in a played card, the door closes thin — on purpose. If you write the subject's name out of a beat's cards, you have made its good ending unreachable (this happened; see the `VERDICT_FIXTURE` ledger, v4.71.4).
4. **Keys discriminate.** A distinctive token used by two cards in one deck stops meaning either. A rare token (8+ letters, one owner) earns its card on a typed line alone; short common words need two hits.
5. **A rail is a line, not an echo.** First person, the courier's voice. It must not redo the scene it hangs under, and it must not shadow a door's wording — a typed door is a door.
6. **Rooms are append-only between releases.** Saves remember spent cards by position. Replace card text freely; add new cards at the end; never reorder a shipped deck.
7. **Ambient teeth honour the window.** `turnMin` ≤ `floor − 2`, or the door outruns the peril and it never fires on a clean night. The sweep lints the whole SPINE for this.
8. **Thresholds hold.** A beat that guards its own ending (a1-hum's voice, a1-turn's keeping, a2-mirren's vow, a3-seize's words) must not spend it in a mid-beat card.

---

## The ritual after every edit

1. **Syntax**: the game not booting is the first test. (If you edit outside the browser, any JS checker on the `<script>` body works.)
2. **The sweep**: open the game with `?selftest` in the URL. **0 FAILED** is the bar. 59 rows as of v4.72.0.
3. **The fixture**: if the drift row goes red, it names exactly which lines started or stopped firing which predicate (names, deaths, shard moves, tells). If the diff is exactly your edit and reads as intended, update `var VERDICT_FIXTURE` from the live map (`window.__VERDICTS__` after a selftest run) and add a line to the annotated ledger above it saying what moved and why. **Never regenerate to silence a row you have not read** — that is the one move the mechanism exists to prevent.
4. **Play it**: the **REHEARSAL ROOM** (menu) runs one beat in isolation, over and over — built for exactly this. For full context, a fresh run reaches any Book One beat in minutes.

---

## Where the truth is

The wave packs (the `wave2-*` docs in the project) are the manuscripts the decks were pasted from — but **the file is the truth now**. The v4.71.x authoring pass corrected things the packs still say wrong (a1-hum's walk cards especially, and the fear conversation's home). Edit `index.html`; treat the packs as history.

Release ritual, when an edit ships: bump the banner (`MUDSKIPPERS — THE COURIER'S RUN · vX`), `var VERSION_TAG`, and the `CACHE` slug in `sw.js` — the service worker only reinstalls when its bytes change, and a stale slug serves old builds to offline players forever.
