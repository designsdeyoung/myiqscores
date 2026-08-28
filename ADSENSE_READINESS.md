# AdSense Readiness — MyIQScores.com

Branch: `adsense-production-hardening` (merged to `main` in 307c7ce) ·
Prepared: 2026-08-28 (v3 — post-merge, post-live-verification)

This document records the production-hardening work done to prepare MyIQScores.com
for a Google AdSense application, and the manual steps that remain for the account owner.

---

## ⚠️ 0a. CRITICAL FINDING: this repo does not deploy www.myiqscores.com

Verified 2026-08-28 during post-merge production checks:

- The live site at www.myiqscores.com is served by Vercel, but from a
  **different, more-evolved codebase** than this GitHub repo. Evidence: live
  page titles ("Garry Kasparov IQ: 190 Estimate and Percentile", "Flynn
  Effect: Why Average IQ Scores Keep Rising") exist in **no commit on any
  branch** of this repo; the live sitemap is a sitemap-index with child
  sitemaps (this repo has a single flat sitemap); live has entire page
  families this repo lacks (CityIQ, ConditionIQ, CelebrityIQMatch,
  AbstractReasoning…); live asset hashes match no local build. Pushing `main`
  produced no change in production (~30 min observation).
- The Vercel project in `.vercel/project.json` (`prj_UW2xlUoxPy7t…`) returns
  404 under the accessible team (`vertex-data`), whose project list does not
  include myiqscores. The local Vercel CLI is not authenticated.
- The Supabase project in `.env` (`pzvbazyandlatabewppj`) **no longer
  resolves** (DNS NXDOMAIN). The live site uses a different Supabase project
  (`ckmckhjqqkcrnpfeaxcr`), which is also not in the authenticated Supabase
  CLI account.
- The live tree is almost certainly the **Lovable-managed project** (this
  repo is Lovable-origin); the two trees share the same GA4 property
  (G-57H1Q82XZ4) and AdSense publisher ID (pub-5051305701488211) but have
  diverged in content and code.

**Consequence:** merging this repo to `main` preserves the hardening work but
does not ship it. No deployment was forced — overwriting a newer production
site from a stale fork would have destroyed months of live content and SEO.

**Owner decision required — pick one source of truth:**
1. *Live/Lovable tree is canonical (likely):* port the small set of
   outstanding fixes (see §0b) into the Lovable project and republish; treat
   this repo as an archive/reference of the hardening patterns.
2. *This repo is canonical:* re-link the domain's Vercel project to this
   GitHub repo — knowingly replacing the live site and its extra content.
   Not recommended without a content diff/merge first.

### 0a.1 Re-verification (2026-08-28, later session — repo relocated)

Repo now lives at `/Volumes/FG SSD/Projects/MyIQScores/production` (same repo,
`designsdeyoung/myiqscores` @ `main`, local == origin). Re-verified from scratch:

- **Still not the production source.** Live `index-DguCuE5o.js` lazy-loads
  `CityIQ`/`CityIQHub`/`ConditionIQ`/`CelebrityIQMatch` chunks that exist in no
  commit on any branch here. Last Lovable-authored commit in this repo:
  **2026-03-29** — the Lovable↔GitHub sync has been dead since then, while the
  live Lovable project kept evolving (live sitemap lastmods through 2026-07-03).
- **Vercel:** the connected Vercel account (team `vertex-data` / Vertex Data
  LLC) contains no myiqscores project. The live site serves `server: Vercel`
  from a project not visible to this account.
- **Supabase:** authenticated CLI org (`ldmthxadtuyrndwtymze`) does not contain
  `ckmckhjqqkcrnpfeaxcr`. The corrected `send-transactional-email` template is
  committed here but cannot be deployed from this environment.
- **Live issues from §0b re-confirmed today** by auditing the live chunks:
  `Results-6GyKwpA1.js` still contains `$19.99`, visible
  "Advertisement (728×90 — Desktop Only)" / "(336×280)" placeholder boxes, and
  "Your IQ Score" (no "Estimated"); `Quiz-DOpMYtgS.js` still has the
  "Auto-continue in" countdown beside an ad placeholder; `/privacy` still
  serves homepage-canonical HTML with HTTP 200 (soft 404). Live `ads.txt` is
  correct (`google.com, pub-5051305701488211, DIRECT, f08c47fec0942fa0`).
- **This repo's QA re-run green** after fresh `npm ci`: vitest pass, eslint
  0 errors (12 pre-existing shadcn warnings), `tsc --noEmit` clean, full build
  prerendered 557 routes / 555-URL sitemap with no 404-guard failures.

**Path to ship the fixes (owner):** in Lovable ("MindMetric IQ Journey") →
GitHub settings, reconnect/re-sync so the live project's current code lands in
a GitHub repo; then port §0b's six fixes from this repo into that tree and
Publish from Lovable. Do not point the domain at this repo — it would delete
the newer page families.

## 0b. Live-site verification results (what AdSense will actually review)

Verified live 2026-08-28 (quiz run with all Google ad/analytics domains and
Supabase blocked — zero ad impressions, zero production writes):

Healthy on live:
- ads.txt: `google.com, pub-5051305701488211, DIRECT, f08c47fec0942fa0` —
  correct format, HTTP 200
- Consent Mode v2 with EEA/UK/CH denied defaults **plus a real cookie-consent
  banner** (Accept all / Decline non-essential)
- GA4 G-57H1Q82XZ4 loading once; AdSense loader present; ad units fail safe
  (placeholder slot IDs, no adsbygoogle pushes)
- All representative pages (score/career/country/state/famous/myth/blog/legal)
  return 200 with correct self-canonicals, indexable robots, and substantive
  prerendered HTML (1,100–2,200 words) — including the route classes that were
  broken in this repo before the manifest fix
- Full 30-question quiz completes on mobile with no JS errors; retake works;
  no "60% Off" / "Limited Time" language

**Outstanding issues on the LIVE site** (all already fixed in this repo —
port these to the Lovable tree):
1. Results page shows a struck-through **$19.99 → $7.99** fake reference
   price, and the emailed-results section references a "special 24-hour
   discount" (deceptive-pricing risk).
2. A dashed **"ADVERTISEMENT (728×90)" placeholder box renders visibly** on
   the results page — and overflows the viewport on mobile.
3. Quiz interstitials **auto-advance on a countdown** next to the ad zone.
4. Results headline says "Your IQ Score" with no estimated/limitations
   framing (it does include one softening line).
5. Unknown routes soft-404: they serve indexable homepage HTML with the
   homepage canonical (no noindexed 404 page). `/privacy` is such a route —
   the real page is `/privacy-policy`.
6. Live famous-IQ pages still present the Kasparov "190" estimate without the
   documented-test correction (labeled "Estimate", so lower severity).

---

## 0. Round-2 hardening (content quality, claims, technical)

Done after the initial hardening pass; full detail in `CONTENT_AUDIT.md`:

- **Route manifest + 35-URL SEO repair.** Prerender routes and the sitemap now
  derive from `src/routeManifest.ts` (single source of truth shared with the
  app's data files), with a build-failing guard if any route renders the 404
  page. This fixed 35 live URLs — including 13 blog articles — that previously
  served the prerendered *homepage* HTML (wrong title/canonical) and crashed
  hydration. Sitemap: 555 URLs, zero legitimate URLs removed.
- **Hydration errors resolved.** Root-caused with a development React build:
  the mismatches were exactly those missing prerender routes. All page families
  now hydrate clean; the only remaining #418 occurs on `vite preview` for
  slashless URLs (local preview artifact — Vercel serves prerendered files
  filesystem-first in production).
- **Score pages**: added measurement-error (±5), "what this score does not
  establish", and career-caveat sections to all 110 pages.
- **Career pages**: removed IQ-as-requirement framing on all 108 pages
  (question-form H1, "IQ is not a job requirement" notice, evidence-base
  section naming Harrell & Harrell 1945 and admission-test correlations).
- **Country pages**: added a named-dataset controversy section (Lynn &
  Vanhanen vs PISA/TIMSS-based estimates), replaced false rank precision
  ("#N of ~199") with "#N of 50 covered", hedged titles/descriptions.
- **Famous-IQ factual corrections**: Kasparov "190 tested/verified" myth
  corrected to the documented ~123 Der Spiegel result (all cross-references
  fixed), Carlsen 186 marked unverified, Tao 220-230 marked childhood ratio
  estimate, Epstein 2008 conviction described accurately, Sharon Stone Mensa
  claim noted as retracted.
- **Pricing honesty**: "$19.99 → $7.99 / 60% Off" could not be verified as a
  real price history (`git log -S` shows it was born already-discounted), so
  all percentage-off and struck-through pricing was removed from the results
  page and the transactional email template. Plain price: $7.99.
  ⚠️ Redeploy the `send-transactional-email` Supabase function to apply the
  email-template change in production.
- **Lint**: 14 errors → 0 (typed fixes, no rules silenced; 12 pre-existing
  warnings remain in generated shadcn files).
- **Accessibility**: axe-core WCAG 2.0 A/AA scans across six representative
  pages: 0 violations (fixed a nested-interactive issue in ComparisonChart).
- `/unsubscribe` prerendered + noindexed; `/test` (canonicalizes to `/`)
  removed from the sitemap.

## 1. Completed Work (round 1)

### Quiz ad architecture (compliance rework)
- **Removed the per-question ad refresh.** Previously every quiz question remounted
  its ad containers ("refreshing impressions" per question — ~30+ forced ad
  requests per quiz). Ad slots are now keyed by **5-question block**, so a
  completed 30-question quiz produces at most **8 ad opportunities**
  (6 in-quiz blocks + 2 section-break screens). Cadence rationale: at ~12 min
  per completed quiz that is well under one request per minute per slot,
  keeps viewability high, and stays clearly inside Google Publisher Policies
  on ad refresh and accidental clicks. Every-3-questions was considered and
  rejected (10 refreshes/quiz, higher abandonment and misclick risk);
  every-5 is the recommended balance.
- **Removed the interstitial auto-advance countdown.** Section-break screens now
  require an explicit "Continue" click; the ad sits below the card, well away
  from the button.
- **Moved ads away from interactive controls.** The bottom quiz ad now renders
  below the progress strip with clear margin from the Next button; the mobile ad
  that sat directly under the Next button was removed.
- **No visible placeholder boxes.** All dashed "Advertisement (728×90)" divs were
  replaced with the `AdUnit` component, which renders **nothing** while
  `ADSENSE_ENABLED = false`. AdSense reviewers see a clean site, not empty ad frames.

### Results page (built as a content page)
- Score is now framed as **"Your Estimated IQ Score."**
- Added a **"What This Score Means — and What It Doesn't"** section covering
  percentile interpretation, limitations of short online tests, and explicit
  "not a clinical assessment / not for employment or medical decisions" language,
  linking to /methodology and /disclaimer.
- Added a **Retake the Test** button.
- Removed the false-scarcity **"Limited Time"** badge from the paid-report upsell
  (deceptive-pattern risk; the discount claim itself was left to the owner — see
  Unresolved Risks).
- Ad slots (top/mid/bottom) use `AdUnit` and render nothing until activation.

### Trust & legal pages (new)
| Page | Route |
|---|---|
| Disclaimer | `/disclaimer` |
| Cookie Policy | `/cookie-policy` |
| Advertising Policy | `/advertising-policy` |
| Corrections Policy | `/corrections-policy` |

All are routed, prerendered, in the sitemap, and linked from both site footers
(homepage footer legal row + ContentPage footer). Existing pages (About, Contact,
Methodology, Editorial Policy, Privacy, Terms) were already present.

### Privacy & consent
- **Privacy Policy updated** (effective date bumped to 2026-08-28): new
  §5a Advertising (Google AdSense) section covering ad cookies, personalized vs.
  non-personalized ads, opt-out links, and EEA/UK/CH consent; cookies section now
  links to the Cookie Policy.
- **Google Consent Mode v2 implemented** in `index.html`: `ad_storage`,
  `ad_user_data`, `ad_personalization`, and `analytics_storage` **default to
  denied** in the EEA, UK, and Switzerland (region-scoped), granted elsewhere,
  with `wait_for_update: 500` so a Google-certified CMP message can update the
  state. This is real gating, not a cosmetic banner — GA and ad tags honor these
  signals. The consent *collection UI* comes from Google's certified CMP,
  enabled in the AdSense console (see Manual Actions).

### Content / claim quality
- Every famous-IQ page (127 people) now displays a standardized notice directly
  under the headline: the figure is an **unverified estimate**, not an
  authenticated test result, linking to /disclaimer. (Underlying data already
  used "estimated" language throughout; this makes it unmissable.)
- Famous-person pages use generated abstract icons — **no celebrity photographs**,
  so no image-licensing exposure there.

### SEO fixes
- Removed duplicate `/famous-iq/*-detailed` pages from prerender + sitemap;
  added a 308 redirect for `/famous-iq/rihanna-detailed` → `/famous-iq/rihanna`
  (the other three `-detailed` slugs already had redirects).
- 404 page now emits `noindex,nofollow` (new `noindex` prop on `SEOHead`).
- Sitemap regenerates automatically at build from the prerender route list
  (now 521 URLs, including the four new legal pages).

---

## 2. AdSense Implementation — Where Everything Goes

The site's **real publisher ID (`ca-pub-5051305701488211`) is already in place**
in the three locations that must stay in sync:

| Location | Purpose |
|---|---|
| `public/ads.txt` | `google.com, ca-pub-5051305701488211, DIRECT, f08c47fec0942fa0` |
| `index.html` | AdSense loader script (`?client=ca-pub-5051305701488211`), deferred until page load |
| `src/config/adsense.ts` | `ADSENSE_PUB_ID` used by every `AdUnit` |

**Activation after approval** (all in `src/config/adsense.ts`):
1. Create ad units in the AdSense dashboard; copy the numeric slot IDs.
2. Replace each `"slot-XXXXXXXXX…"` placeholder in `AD_SLOTS` with its numeric ID.
3. Set `ADSENSE_ENABLED = true`.
4. `npm run build` and deploy.

Until then, `AdUnit` renders nothing and pushes no ad requests. Do **not** flip
`ADSENSE_ENABLED` before real slot IDs exist — `AdUnit` also guards on
numeric-looking slot IDs, but keep the flag authoritative.

---

## 3. Remaining Manual Actions (account owner)

1. **Verify the AdSense account status** for `ca-pub-5051305701488211`. This ID
   was already committed in the repo; if a previous application for this site
   was rejected, fix-and-resubmit from the same account (do not create a second
   account — AdSense allows only one per publisher).
2. **In AdSense → Privacy & messaging**: create and publish the **GDPR consent
   message** (Google's certified CMP) for the site, and the US state privacy
   message if desired. This provides the consent UI that Consent Mode v2 is
   already wired to receive.
3. **In AdSense → Sites**: add `myiqscores.com` and request review once this
   branch is deployed to production.
4. Confirm `https://www.myiqscores.com/ads.txt` serves correctly after deploy
   (AdSense may take a few days to recognize it).
5. ~~Consider whether the paid report's "60% Off / $19.99 → $7.99" framing
   reflects real pricing history~~ — resolved in v2: the discount framing was
   unverifiable and has been removed everywhere; redeploy the
   `send-transactional-email` Supabase function to update the live email.
6. After approval: create ad units, fill `AD_SLOTS`, enable the flag (Section 2).

## 4. Deployment

- `npm run build` — builds client + SSR bundle, prerenders ~520 routes,
  regenerates `public/sitemap.xml` and `dist/sitemap.xml`.
- Deployed on Vercel; `vercel.json` provides redirects, security headers, and the
  SPA fallback rewrite (static prerendered files are served first).
- **Do not merge this branch to main blindly** — review the diff, deploy to a
  preview environment first.

## 5. Review Instructions (what an AdSense reviewer will see)

- Homepage with quiz (no visible ad placeholders), substantial educational
  content (60+ articles/guides, 100+ reference pages), full navigation, and
  10 trust/legal pages reachable from every footer.
- The AdSense loader script is present site-wide (required for verification),
  but no ad units render until activation.

## 6. Unresolved Risks (updated, v2)

1. **Volume of templated pages** (~430 across score/career/country/state/famous
   families). Every page now has unique copy plus honest framing sections, but
   a reviewer can still pattern-match the volume as programmatic. Fallback if
   rejected for "low value content": noindex the least-trafficked adjacent
   score pages and the state family first (both identified in
   `CONTENT_AUDIT.md`), then request re-review.
2. **Country-IQ subject matter** is inherently contested. Pages now name the
   datasets and the academic criticism explicitly; residual risk is topical,
   not fixable by copy. Per-country FAQ text retains some mild "ranking #N"
   phrasing — a future data pass could hedge those individually.
3. **State pages are the thinnest family** (~500 words); improve next if
   content depth is ever challenged.
4. **`/famous-iq/jeffrey-epstein`** is factual and non-glorifying but concerns
   a notorious criminal; keep on a sensitivity watchlist.
5. **"30-day money-back guarantee"** on the paid report must be honored in
   practice — it remains claimed on the results page and in the email template.
6. **Supabase email function** — the corrected template is committed here, but
   this repo's Supabase project (`pzvbazyandlatabewppj`) no longer exists; the
   live site uses project `ckmckhjqqkcrnpfeaxcr`, not accessible from this
   environment. Owner action: fix the pricing language in the live project's
   copy of `send-transactional-email` (function name confirmed) and deploy with
   `supabase functions deploy send-transactional-email --project-ref ckmckhjqqkcrnpfeaxcr`
   after `supabase login` under the account that owns that project.
7. **`.env` is committed** containing the Supabase URL and anon (publishable)
   key. Public-by-design values, but poor hygiene; consider `.env.example` +
   Vercel env vars.
8. **Local preview quirk**: `vite preview` serves slashless URLs via the SPA
   fallback, producing a hydration warning locally that does not occur on
   Vercel (filesystem-first serving). Automated QA should use trailing-slash
   URLs against `vite preview`.
