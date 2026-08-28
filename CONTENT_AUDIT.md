# Content & Page-Family Audit — MyIQScores.com

Audit date: 2026-08-28 · Branch: `adsense-production-hardening`
Scope: every templated/programmatic page family plus static content, audited for
uniqueness, boilerplate ratio, informational value, intent match, internal
linking, sourcing, and whether each page deserves standalone indexing.

## Inventory (sitemap: 555 URLs; 557 prerendered routes)

| Family | URL pattern | Pages | Classification | Action taken |
|---|---|---|---|---|
| Famous IQ | `/famous-iq/:slug` | 123 | B (keep) + targeted corrections | 5 entries factually corrected; estimate notice on all (prior session) |
| Score pages | `/is-N-iq-good` | 110 | A — keep + improve | Template: added measurement-error, "what it doesn't establish", career caveat |
| Career pages | `/iq-needed-for/:slug` | 108 | A — keep + improve | Deterministic framing removed; "not a job requirement" notice; sourcing section |
| IQ myths | `/iq-myths/:slug` | 54 | B — keep as-is | None needed (see below) |
| State pages | `/average-iq-by-state/:slug` | 50 | B — keep, watch | None (existing source note adequate; thinnest family) |
| Country pages | `/average-iq/:slug` | 50 | A — keep + improve | Dataset-controversy section; honest rank framing; regenerated descriptions |
| Blog articles | `/blog/:slug` | 21 | B — keep as-is | 13 articles were missing from prerender/sitemap — fixed |
| Static/hub/legal | various | 33 | B — keep as-is | — |
| Age pages | `/iq-by-age/:slug` | 6 | B — keep as-is | — |

**Classifications:** A = keep + improve (268 pages improved via template/data),
B = keep as-is (~287), C = noindex (2: `/unsubscribe` new, 404 prior),
D = merge/redirect (0 new; 4 `-detailed` duplicates redirected in prior session),
E = remove (0 — nothing met the bar for deletion, and mass-deleting indexed URLs
was explicitly out of scope).

## Per-family findings

### Score pages (110) — improved
Each score has hand-written `detailedExplanation`, `careerContext`, and 3 FAQs
that genuinely differ (verified on adjacent scores 101/102: different framing,
different FAQs). Template now adds per-score measurement-error ranges
(score ±5), a "What an IQ of N Does Not Establish" section, and a career-caveat
paragraph. **Residual weakness:** adjacent integer scores (is-101 vs is-102)
remain conceptually near-duplicate by construction; the unique copy and honest
framing are the mitigation. Representative: `/is-100-iq-good` — 1,035 words,
59 internal links, FAQ + Article + Breadcrumb schema.

### Career pages (108) — improved
Previous framing implied IQ requirements ("IQ Needed to Be a Doctor: Minimum
Score", "Cognitive Requirements"). Now: question-form H1, an "IQ is not a job
requirement" notice on every page, "Typical Cognitive Demands" heading, and a
"Where These Numbers Come From" section naming the actual evidence base
(Harrell & Harrell 1945 occupational tables, admission-test correlations) and
its limits. Worst custom titles fixed ("Minimum Score" removed).
Representative: `/iq-needed-for/doctor` — ~850 words, 54 internal links.

### Country pages (50) — improved (Priority 2)
The most sensitive family. Already had an environmental-factors disclaimer;
now every page also gets "Where These Numbers Come From — and Why They're
Debated": names the Lynn & Vanhanen compilations and PISA/TIMSS-based
alternatives, states plainly that the datasets are academically contested
(sampling, extrapolation, mixed eras), and frames figures as measured test
performance under specific conditions — never innate ability. Rank framing
changed from "Ranked #N Globally … of ~199 countries" (false precision from a
50-country dataset) to "#N of 50 countries covered", score displays as "~N",
titles/descriptions regenerated to hedge ("Estimates & Context"). The hub page
methodology note was rewritten to name the controversy. No fabricated
citations; the named sources (Lynn & Vanhanen 2002, PISA, TIMSS, Flynn Effect)
are real and correctly characterized. Per-country FAQ text retains some mild
"ranking #N" phrasing — acceptable within the new page context, flagged for a
future data pass. **No country page was weak enough to require noindex** after
the rewrite; each carries a unique education-system overview plus comparisons.

### Famous IQ pages (123) — re-audited (Priority 3)
All pages show the standardized unverified-estimate notice (prior session) and
use generated icons, not celebrity photos. This pass corrected genuine factual
errors where rumor was presented as verified fact:
- **Garry Kasparov**: "tested IQ ~190, verified" was false — rewritten around
  the documented Der Spiegel test battery (~123 reported, exceptional memory)
  and the 190 internet myth. Every cross-reference to "Kasparov 190 (tested)"
  fixed (HighestIQEver table, blog famous-IQ table + section, score-page FAQs,
  Anand FAQ).
- **Magnus Carlsen**: "186 … verified" → unverified internet estimate; notes
  Carlsen dismisses IQ speculation.
- **Terence Tao**: "highest verified IQ, tested 220-230" → childhood
  ratio-based estimate from gifted-youth research, beyond test ceilings.
- **Richard Feynman**: "recorded" → "reportedly" (school-days anecdote).
- **Jeffrey Epstein**: corrected 2008 conviction description (solicitation,
  incl. of a minor — not the 2019 federal trafficking charges); page tone is
  factual and non-glorifying but remains on a sensitivity watchlist.
- Sharon Stone's debunked Mensa claim now noted in the blog table.
No fake citations found. No page was thin enough to justify noindexing (typical
page ~1,500-1,900 words with comparisons and FAQs).

### Myth pages (54) — keep as-is
Strongest templated family: myth/reality/explanation format with accurately
characterized real research (e.g., Rauscher 1993 Mozart study, birth-order
cohort studies). No changes needed.

### State pages (50) — keep, watch
Thinnest family (~500 words). Existing note correctly attributes estimates to
NAEP/SAT/ACT-derived proxies; rank is within a complete 50-state set, so the
precision is not overstated. Flagged as the family to improve next if "low
value content" ever becomes an issue; not noindexed because each page has a
unique description, regional comparison, and FAQs.

### Blog (21) + statics — keep
Long-form (typically 1,200-1,800 words), properly hedged. **Critical fix:** 13
of 21 articles (plus 19 famous pages, 2 career pages, the state hub, and 6
age-page variants — 35 URLs total) were routed in the app but missing from the
prerender manifest, so those URLs served the prerendered *homepage* HTML
(wrong title/canonical) to crawlers and crashed hydration. All routes now come
from a single manifest (`src/routeManifest.ts`) shared by the app data and the
prerender/sitemap script, with a build-failing guard if a manifest route
renders the 404 page.

## Pricing-claim investigation (Priority 6)
`git log -S` shows the "$19.99 → $7.99 / 60% Off" framing entered the codebase
already-discounted — $19.99 was never a real selling price in repo history, and
the Stripe integration gave no way to verify it. Accordingly: the 60%-off badge
and struck-through $19.99 were removed from the results page (now plain
"$7.99 — one-time purchase"), the results-page "24-hour discount" email teaser
was removed, and the email template's "24-Hour Exclusive Discount — 60% Off /
$19.99" block was reduced to the plain price. (The deployed Supabase email
function must be redeployed for the template change to take effect.)

## Totals
- Pages audited: 555 indexed URLs (all families sampled; every template read in full)
- Pages improved: ~268 via template/data changes (110 score + 108 career + 50 country) plus 6 corrected famous/blog/reference pages and 35 routing-repaired URLs
- Pages unchanged: ~287 (famous bulk, myths, states, ages, blog, statics)
- Pages noindexed: 1 new (`/unsubscribe`); `/test` removed from sitemap (canonicalizes to `/`, page unchanged)
- Redirects proposed: none new (4 exist from prior session)
- Pages removed: 0
- Still considered weak: state pages (thin), adjacent integer score pages (structural near-duplication), `/famous-iq/jeffrey-epstein` (sensitivity watch)
