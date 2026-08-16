# MUDSKIPPERS — v6.1: THE STABLE. Amendment to THE TWO TABLES — the DMs we recommend, and what each needs in code.

**From:** Cyberbossman · **For:** Claude Code · **Amends:** v6.0, mid-flight. Nothing in v6.0 changes; this adds the model menu for THE WILD TABLE and the request-path work that makes it honest. Prices checked against OpenRouter this week (mid-August 2026) — keep prices OUT of the UI copy; they move.

---

## 1. The curated menu (the WILD TABLE model picker)

The settings for a wild run present a **curated shortlist plus a free-text slug field** — recommendations, not a cage. Pin **dated slugs** wherever they exist; `-latest` aliases are for players, never for our tests.

| tier | slug | why it is on the card |
|---|---|---|
| **RECOMMENDED** | `anthropic/claude-sonnet-5` | The proven wild DM — the Architect ran it and it sang. Best judgment-per-dollar of the top tier: holds the lane, keeps the register, knows when a night is over. |
| **BUDGET** | `deepseek/deepseek-v4-flash-0731` | ~$0.08/M in, 1M context, the RP crowd's volume king. Obedient JSON, workmanlike prose. Whole campaigns for pocket change. |
| **STRONG BUDGET** | `deepseek/deepseek-v4-pro` | The budget DM promoted; first knob to turn if Flash's banter runs flat. |
| **PREMIUM** | `anthropic/claude-opus-5` | The wiser DM — instruction-following royalty, for players who want the night *judged*, not just written. |
| **CEILING** | `anthropic/claude-fable-5` | The top of the 2026 board — **availability on OpenRouter unconfirmed**: probe the `/models` endpoint at picker-build time and show it only if the key can see it. Never hardcode-assume. |
| **WILDCARD** | `google/gemini-3.1-pro` | The one non-Claude rival on pure prose Elo; worth offering for taste. |
| alternate | `openai/gpt-5.6-luna` | Cheap, fast, 1M context; fine, never the headline. |

**Do not shortlist reasoning-first tiers** (GLM 5.2, `deepseek-v3.2-speciale`, o-style) — latency and analytical prose are the wrong shape for a table DM. The free-text field lets the determined reach them anyway; the parser must survive it (§2.3).

## 2. What each needs in code

**2.1 Anthropic prompt caching (`cache_control`) — the money change.** Claude models cut cached input ~90%, but only with explicit breakpoints, and OpenRouter passes them through. When the selected model matches `anthropic/*`, send the **BIBLE as a content-part array with `cache_control: {type: "ephemeral"}` on its stable block**. That alone caches the largest fully-stable prefix we have (~10k tokens a turn). Be honest about the limit: our wire order is briefing-first-then-history, and the briefing changes every turn, so the history behind it cannot prefix-cache — for Claude *or* for DeepSeek/OpenAI's implicit caching. **Do not reorder the wire in this wave** — that is a composition change with teeth; if you judge a safe reorder exists (stable history prefix first, volatile briefing last), send it back as a finding with the shape, and I will rule on it. Verify caching works with one turn pair against a Claude model, reading OpenRouter's usage block — cache-read tokens > 0 on the second turn is the row.

**2.2 Model-family request knobs**, set where the request is built, keyed on the slug prefix:
- `max_tokens` capped (~1,200) on every wild turn — a DM turn is a scene, not an essay; bounds cost and latency both.
- Temperature: default **0.9 for wild runs** (unhinged is a feature), player-adjustable in settings as today.
- `response_format: {type:"json_object"}` **only** for families known to honor it (OpenAI, DeepSeek); everything else keeps the prompt-level JSON contract that four waves already proved. A provider that errors on the field costs a turn — do not spray it.

**2.3 Reasoning-tolerance in the parser.** Any model may arrive with a `reasoning` field or a `<think>...</think>` preamble (OpenRouter surfaces both, model-dependent). The reply path must: request reasoning off where the API allows (`reasoning: {enabled:false}` / `include_reasoning:false`), strip think-tags and reasoning fields before `repairJSON` sees the body, and never render a syllable of it. This is lane, not preference — a thinking transcript leaking into the feed is a broken turn.

**2.4 Optional resilience, flagged not mandated:** OpenRouter accepts a `models: [primary, fallback]` array. A wild run *may* offer "fallback to the budget DM on provider failure" as a settings toggle, default off — the v6.0 contract (scenario 11: held turn, retry, state unmoved) remains the floor either way. If you build it, the feed must say the understudy stepped in; a silent cast change is a lie.

**2.5 The picker copy** stays qualitative — "pocket change per night" / "premium" — never dollar figures. Prices moved twice while this amendment was being written; UI that quotes them ships stale.

## 3. The bar grows two rows

- **(vi)** The hand-played wild report covers **both ends of the stable**: `anthropic/claude-sonnet-5` and `deepseek/deepseek-v4-flash-0731`. The lane must hold at the cheap end, not just the smart one — a lane only the expensive DM stays in is a lane painted on one side of the road.
- **(vii)** The cache row: the Claude turn-pair with cache-read > 0, and the reasoning-tolerance row: a stubbed reply wrapped in `<think>` junk parses clean and renders none of it.

*Same contract: ambiguity mine, findings back, ruled same-day. The audit still starts at your report.*
