# AdSense Readiness — MyIQScores.com

Branch: `adsense-production-hardening` · Prepared: 2026-08-28 (updated same day, v2)

This document records the production-hardening work done to prepare MyIQScores.com
for a Google AdSense application, and the manual steps that remain for the account owner.

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
6. **Supabase email function redeploy needed** for the honest-pricing email
   template to go live (`supabase functions deploy send-transactional-email`).
7. **`.env` is committed** containing the Supabase URL and anon (publishable)
   key. Public-by-design values, but poor hygiene; consider `.env.example` +
   Vercel env vars.
8. **Local preview quirk**: `vite preview` serves slashless URLs via the SPA
   fallback, producing a hydration warning locally that does not occur on
   Vercel (filesystem-first serving). Automated QA should use trailing-slash
   URLs against `vite preview`.
