# MASTER SEO PLAN — MyIQScores.com → 100K+ Monthly Clicks

**Created:** 2026-07-03
**Baseline:** 3.8K active users / 30 days, growing ~71% MoM. ~1,072 indexable pages.
**Target:** 100K monthly clicks. At sustained 75% MoM that's ~6 months (Jan 2027); this plan
is built so growth doesn't stall when the current long-tail engine saturates (~20–35K/mo).

The core thesis: **one engine got us here; four engines get us to 100K.**

1. Long-tail programmatic SEO (running — 1,072 pages)
2. Interactive tools that earn head-term rankings and backlinks (biggest gap — see Phase 1)
3. A share/viral loop (built — needs volume to compound)
4. GEO: being the cited answer in AI engines (started with /questions + llms.txt)

---

## PHASE 1 — Interactive Cognitive Tests (the Human Benchmark play)

**Why this is the single biggest opportunity:** humanbenchmark.com gets ~10M visits/month
with a handful of interactive mini-tests and almost no editorial content. The keyword space
is enormous and largely two-player (Human Benchmark + scattered clones):

| Keyword | Head-term class | What ranks today |
|---|---|---|
| reaction time test | very high | Human Benchmark #1, weak field below |
| number memory test | high | Human Benchmark + clones |
| visual memory test | high | same |
| verbal memory test | medium | same |
| sequence memory test | medium | same |
| typing test / aim trainer | very high | adjacent, skip (off-topic) |
| chimp test | medium | same |

**Our angle:** every mini-test result maps to a percentile (our core competence), links to
the full IQ test ("your reaction time is 78th percentile — see how your full profile
compares"), and produces a shareable score card via the existing /api/og pipeline.

**Build list (each = interactive tool + SEO content below + WebApplication/FAQ schema):**
- [x] /tools/reaction-time-test ← THIS SESSION
- [x] /tools/number-memory-test ← THIS SESSION
- [ ] /tools/visual-memory-test (grid recall)
- [ ] /tools/sequence-memory-test (Simon-style)
- [ ] /tools/verbal-memory-test (seen/new words)
- [ ] /tools/digit-span-test (forward/backward — clinical framing differentiates us)

**Success metric:** these pages ranking top-10 for their head terms would alone exceed the
100K goal. Even page-2 rankings are tens of thousands of clicks in aggregate.

---

## PHASE 2 — /questions Answer Engine → 50+ pages

19 built. The template is proven (answer-first block + FAQPage schema). Expansion list
(all checked against existing pages for cannibalization — check every new slug against
mythIndex + hubs before writing):

Score mechanics: how is an IQ test scored • what is a percentile rank • what is a standard
deviation in IQ • can two people have the same IQ • do IQ scores follow a bell curve
Testing practice: what to expect at an IQ testing appointment • can you take an IQ test
online for free • are timed tests fair to slow deep thinkers • proctored vs unproctored
People/history: who has the highest IQ in the world today (careful: /highest-iq-ever
exists — angle on "today/living") • what was the IQ of famous presidents (hub exists —
skip) • how smart was Leonardo da Vinci (famous-iq covers — skip)
Kids/parents: signs of a gifted child • how do schools test IQ • what is a WISC test
Work: do employers use IQ tests • what is a cognitive ability assessment in hiring •
what is the Wonderlic test
AI/modern: can AI have an IQ (done) • what IQ do you need to understand AI/program

Cadence: 6–8 new questions per batch, one batch per session/week.

---

## PHASE 3 — Audience & Intent Landing Pages

Audience-modified head terms with real volume and weak competition:
- [x] /iq-test-for-kids ← THIS SESSION
- [x] /iq-test-for-teens ← THIS SESSION
- [ ] /iq-test-for-adults (differentiate from homepage: adult-specific norms/expectations)
- [ ] /free-iq-test-no-signup (exact-match intent page; canonical care needed vs /)
- [ ] /quick-iq-test (5-minute version → feeds full test)
- [ ] /accurate-iq-test (comparison/methodology angle)

Rule: each must have genuinely audience-specific content (norms, what scores mean at that
age, testing contexts) or Google will fold it into the homepage.

---

## PHASE 4 — Blog Velocity (2–3/week)

30 posts exist. KEYWORD_MAP Tier 3 + gaps, in priority order:
1. Dual N-Back: does the most-studied brain trainer actually work
2. Processing speed: what it is, why it drops, how to sharpen it
3. IQ and chess ratings: what Elo maps to what IQ (data piece — linkable)
4. The Terman study: what happened to 1,500 genius kids (story piece — shareable)
5. Average IQ of college students by decade (data piece — linkable)
6. Why smart people do dumb things (dysrationalia — shareable)
7. IQ requirements that no longer exist (history piece)
8. What twin studies actually show about IQ heritability

Data pieces (3, 5) are the backlink bait — journalists cite numbers.

---

## PHASE 5 — Backlinks & Digital PR (the only lever not in the repo)

Programmatic content ranks only as far as domain authority carries it. Weekly actions:
1. **HARO/Qwoted/Featured**: answer journalist queries on intelligence/testing (site owner,
   10 min/week each).
2. **Data-page outreach**: pitch /average-iq-by-state to local news ("How smart is Ohio?"
   angle) — 50 states = 50 pitches.
3. **Tool outreach**: reaction-time + memory tests to teachers/homeschool newsletters,
   psychology course pages (.edu links), gaming communities (reaction time).
4. **Free embed**: offer the reaction-time test as an embeddable widget with attribution
   link (classic link magnet).

---

## PHASE 6 — GEO (AI answer engines)

- llms.txt maintained per batch (done through /questions).
- Answer-first blocks on every new page (template enforces it).
- Add `speakable` schema to /questions pages (voice assistants).
- Monitor: Perplexity/ChatGPT/AI Overviews citations — search brand mentions monthly.
- OAI-SearchBot, PerplexityBot, ChatGPT-User already allowed in robots.txt. Keep it that way.

---

## MEASUREMENT LOOP (weekly, 15 minutes)

1. GSC → Pages: indexed count trending up? (Leading indicator #1)
2. GSC → Queries: new queries with impressions but position >10 → strengthen those pages
   (internal links from hubs, content depth).
3. GA4 → result_shared / email_captured / premium_click (loop health).
4. Tools pages: rank tracking for "reaction time test", "number memory test" etc.
5. Monthly: run CWV (PageSpeed) on top-10 templates; celebrity-page LCP fix
   (self-hosted images) is still open from REPORT.md.

## RISKS
- **Thin-content review risk** grows with page count: every programmatic page must answer
  its query alone. When GSC shows a family with impressions ≈ 0 after 8 weeks, prune or
  merge rather than accumulate dead weight (helpful-content system penalizes at site level).
- **Cannibalization**: one query, one page. Check before every new slug.
- **AdSense placement** (post-approval): content pages only at first; never in quiz flow.
