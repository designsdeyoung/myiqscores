# SEO & UX Revamp Plan — MyIQScores.com
**Audit Date:** 2026-05-21  
**Status:** Phase 1 Complete — Ready for Implementation

---

## 1. CODEBASE AUDIT FINDINGS

### Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 with SSR pre-rendering |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Animations | Framer Motion |
| SEO | react-helmet-async (`SEOHead` component) |
| Backend | Supabase (leads, referrals tables + Edge Functions) |
| Payments | Stripe (direct links for $7.99 report + $3.99 cert) |
| Analytics | Custom `lib/analytics.ts` (GA4 events) |
| Hosting | Vercel + pre-rendered static pages |

### Routing Architecture
The site generates **1,052 URLs** in the sitemap via React Router with programmatic routes:

| Route Pattern | Count | Template Component |
|--------------|-------|--------------------|
| `/is-{score}-iq-good` | ~70 | `IsXIQGood.tsx` |
| `/average-iq/{country}` | ~100 | `CountryIQ.tsx` |
| `/iq-needed-for/{career}` | ~80 | `CareerIQ.tsx` |
| `/iq-by-age/{age}` | ~20 | `AgeIQ.tsx` |
| `/famous-iq/{person}` | ~100 | `FamousIQ.tsx` |
| `/iq-and/{condition}` | ~30 | `ConditionIQ.tsx` |
| `/iq-myths/{myth}` | ~20 | `IQMyth.tsx` |
| `/average-iq-by-state/{state}` | 50 | `StateIQ.tsx` |
| `/iq-compare/{slug}` | ~50 | `IQCompare.tsx` |
| `/iq-by-major/{major}` | ~80 | `MajorIQ.tsx` |
| `/iq-by-city/{city}` | ~200 | `CityIQ.tsx` |
| Hub + Static pages | ~150 | Various |
| Blog articles | 30 | Various |

### Pre-Rendering System
Build command: `vite build && vite build --ssr src/entry-server.tsx && node scripts/prerender.mjs`

This generates static HTML for all routes — **critical SEO asset**. The prerender script walks all routes defined in App.tsx. Do NOT break this pipeline.

---

## 2. WHAT IS CURRENTLY WORKING ✅

### SEO Fundamentals
- **Pre-rendering**: All 1,052+ pages render to static HTML at build time. Google can crawl without JavaScript.
- **SEOHead component**: Covers title, meta description, canonical, OG tags, Twitter cards, JSON-LD (Organization + WebSite + BreadcrumbList + WebPage/Article schemas). Well structured.
- **Robots.txt**: Clean — allows all bots including GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot. `Sitemap:` directive present.
- **Sitemap**: 1,052 URLs with lastmod, changefreq, priority. All major programmatic pages included.
- **Canonical tags**: Auto-generated from `canonicalUrl` prop in SEOHead. Homepage uses `https://www.myiqscores.com`.
- **Breadcrumb schema**: Auto-generated from canonical URL path segments in SEOHead.
- **Internal linking**: Footer has 4-column link grid on homepage; ContentPage has "You Might Also Like" related pages; Results page has score-based recommendations.
- **ContentPage wrapper**: Shared layout with scroll progress bar, sticky TOC, sidebar ad unit, AuthorBox, CitationBlock, mobile CTA banner, responsive ad slots.

### UX & Conversion
- **Quiz flow**: Clean multi-step flow (Landing → Quiz → Processing → Results) with smooth Framer Motion transitions. Progress bar, elapsed timer, difficulty indicators, milestone messages, keyboard shortcuts.
- **Results page**: Animated score reveal, bell curve, category breakdown, premium report upsell ($7.99), certificate upsell ($3.99), social sharing (Twitter/Facebook/LinkedIn/WhatsApp), challenge-a-friend feature, email capture, score-based recommendations.
- **Email infrastructure**: Supabase leads table + Edge Functions for transactional emails. Referrals table for challenge tracking.
- **Landing page**: Hero, trust indicators, score bands preview (links to /iq-score-ranges), How It Works, sample results preview, second CTA, FAQ accordion, content links.

### Monetization Infrastructure
- AdSense pub ID configured (`ca-pub-5051305701488211`) — slots are placeholder IDs awaiting real slot IDs after approval.
- `ADSENSE_ENABLED = false` flag — clean toggle for activation.
- AdUnit component with size variants (leaderboard, 300x250, 300x600, 320x50, multiplex, in-article).
- Stripe links live for premium report and certificate.
- Email nurture flow (EmailNurture component shown after 10s on results).

---

## 3. WHAT IS RISKY TO CHANGE ⚠️

### Do Not Touch
| Asset | Risk if Changed |
|-------|----------------|
| All URL slugs (any route in App.tsx) | Loss of indexed traffic |
| Sitemap.xml URL entries | Deindexation risk |
| Pre-rendering build pipeline | Pages become CSR-only, lose SEO |
| `canonicalUrl` props on existing pages | Wrong canonicals = duplicate penalty |
| robots.txt | Could block crawlers |
| Supabase leads table schema | Breaks email flow |
| Stripe payment links | Breaks revenue |

### Change With Care
| Asset | Risk | Safe Approach |
|-------|------|---------------|
| H1 text on programmatic pages | Affects ranking signal | A/B test; change one slug, monitor |
| Homepage H1 | High-impact; could gain or lose ranking | Improve keyword signal while keeping context |
| Meta titles on high-traffic pages | CTR change | Preserve brand suffix pattern |
| SEOHead schema | Could break rich results | Test via Google Rich Results Test |
| ContentPage component | Affects all content pages | Test on one page first |
| prerender.mjs | Could break build | Run full build after any change |

---

## 4. CURRENT ISSUES & RISKS 🔴

### Critical Issues
1. **Duplicate Organization schema**: `ContentPage.tsx` injects an Organization schema via `useEffect` (lines 152-177) that duplicates what `SEOHead` already outputs. This creates two conflicting Organization schemas on content pages. Fix: Remove the `useEffect` schema injection from `ContentPage.tsx`.

2. **AdSense slot IDs are placeholders**: `AD_SLOTS` all show `"slot-XXXXXXXXX1"` etc. Once AdSense approves, these need real slot IDs. `ADSENSE_ENABLED = false` currently.

3. **Homepage H1 is not keyword-optimized**: Current H1 is *"How Smart Are You, Really?"* — does not include "IQ test," "free IQ test," or similar primary keywords. This is a missed on-page signal.

4. **`/test` route is alias for homepage**: `<Route path="/test" element={<Index />} />` renders the same component as `/` with the same canonical tag pointing to `https://www.myiqscores.com`. The `/test` path is fine as a UI convenience URL but should not be in the sitemap.

5. **hardcoded datePublished**: Article schema uses `"2024-01-15"` as hardcoded `datePublished` for all article pages. Each page should have its own date.

6. **No visible breadcrumbs on content pages**: BreadcrumbList schema exists, but no visual breadcrumb component is rendered on pages. Visual breadcrumbs improve UX and reinforce schema signals.

### Medium Issues
7. **StateIQHub doesn't use ContentPage wrapper**: `StateIQHub.tsx` has its own layout (BackgroundEffect + Navbar) without the ContentPage scroll progress, sidebar, or CTA. Inconsistent experience.

8. **Missing FAQ schema on most programmatic pages**: IsXIQGood and other templates likely have FAQ content but no FAQ schema markup passed to SEOHead.

9. **Email capture on Results page stores to localStorage only (when no prior email)**: The `handleEmailCapture` function only writes to localStorage — it doesn't call Supabase. The email isn't actually captured in the database. Fix: Add Supabase insert.

10. **Challenge code stored in localStorage**: Challenge results use localStorage with random codes. If the user clears storage or uses a different device, the challenger score is lost.

11. **No Open Graph image per page**: All pages share the same default OG image. Programmatic pages should have contextual OG images or at least unique image URLs.

### Minor Issues
12. **Missing `<noscript>` fallback**: If JS fails to load, users see nothing (SPA behavior). Pre-rendering mitigates this but worth noting.
13. **`favicon.ico` present but `favicon.svg` referenced in schema** (Organization logo URL). Check if SVG exists in `/public`.
14. **`aria-expanded` on FAQ buttons without associated `aria-controls`**: Minor accessibility gap.
15. **Back navigation on quiz sends user to previous question, not out of quiz**: Users cannot exit mid-quiz via back button.

---

## 5. WHAT NEEDS IMPROVEMENT 🟡

### Homepage (Landing.tsx)
- H1 needs primary keyword ("Free IQ Test")
- Add structured data for the test as a WebApplication on the landing screen
- Add more trust signals: test count, user count estimate, methodology link
- FAQ section should have FAQ schema (currently missing)
- Score bands section should link individual scores to `/is-{score}-iq-good` pages
- Missing email capture on landing page (pre-test lead capture opportunity)

### Quiz (Quiz.tsx)
- Question cards look good; mobile tap targets adequate (full-width buttons)
- Ad placeholders during quiz — correct placement but need real slot IDs
- Missing: question save/resume (no localStorage persistence between sessions)
- Missing: "Skip this question" option (some users may want to continue and return)

### Results (Results.tsx)
- Email capture `handleEmailCapture` doesn't save to Supabase — fix required
- Premium report upsell is well-placed but the $7.99 price should be A/B tested
- Missing: shareable image generation (og:image with score baked in)
- Missing: FAQ schema on results (search engines can't currently surface result snippets)
- Missing: retake with different question set option

### Content Pages (ContentPage.tsx)
- ContentPage has duplicate schema injection — remove
- TOC could add H2 auto-detection to avoid manual `toc` prop on every page
- AuthorBox could include Person schema for E-E-A-T signals
- Add reading time calculation helper

### Technical
- `datePublished` and `dateModified` should be per-page in Article schema
- All blog pages should use `ogType="article"` in SEOHead
- Missing: `WebApplication` schema on `/iq-test` page specifically
- Missing: `HowTo` or `Quiz` schema for actual test

---

## 6. SAFE UPGRADES TO IMPLEMENT NOW ✅

These can be done without any SEO risk:

### Priority 1 — Fix Bugs (No SEO Risk)
1. Remove duplicate Organization schema from ContentPage.tsx useEffect
2. Fix email capture in Results.tsx to save to Supabase
3. Add per-page `datePublished` prop to content pages
4. Verify favicon.svg exists in /public

### Priority 2 — On-Page SEO Improvements (Low Risk)
5. Update Landing H1 to include "Free IQ Test" keywords while keeping engagement
6. Add FAQ schema to Landing.tsx FAQ section
7. Add FAQ schema to IsXIQGood.tsx pages (they likely have FAQ content)
8. Add visible breadcrumb component on content pages
9. Ensure all blog pages use `ogType="article"`

### Priority 3 — Content & UX Improvements (Safe)
10. Refactor StateIQHub to use ContentPage wrapper for consistent experience
11. Add keyword-rich intro paragraph to hub pages
12. Add "Take Free IQ Test" sticky CTA that's more prominent
13. Improve internal linking from hub pages to related long-tail pages

### Priority 4 — New Components (Addition, No Breakage)
14. Create reusable `FAQSection` component with auto-FAQ-schema
15. Create visible `Breadcrumb` component (schema already exists)
16. Create `TrustBox` component for social proof
17. Create `RelatedScoreLinks` for programmatic pages

### Priority 5 — New Pages (Net Positive SEO)
18. Create missing hub pages: `/average-iq`, `/iq-percentile-chart` (these exist already — verify content depth)
19. Add missing IQ score pages if gaps exist in current /is-{score}-iq-good range
20. Add `/blog` hub with category filters for better discoverability

---

## 7. RECOMMENDED IMPLEMENTATION ORDER

### Phase 1 (This Session): Audit + Planning Documents
- [x] Audit existing codebase
- [x] Create SEO_UX_REVAMP_PLAN.md
- [ ] Create KEYWORD_MAP.md
- [ ] Create INTERNAL_LINKING_PLAN.md
- [ ] Create MONETIZATION_PLAN.md
- [ ] Create CONTENT_EXPANSION_PLAN.md
- [ ] Create TECHNICAL_SEO_CHECKLIST.md

### Phase 2: Bug Fixes + Quick Wins (Commit separately)
- [ ] Remove duplicate Organization schema from ContentPage
- [ ] Fix Results email capture to save to Supabase
- [ ] Fix Landing H1 to include primary keyword
- [ ] Add FAQ schema to Landing page
- [ ] Add Breadcrumb component (visible) to content pages
- [ ] Verify robots.txt, sitemap, canonical integrity

### Phase 3: UX/UI Refresh
- [ ] Homepage: Enhanced hero with keyword-optimized H1, more trust indicators, email capture pre-test
- [ ] Quiz: Progress refinements, skip question option, save state to localStorage
- [ ] Results: Fix email save, improve premium upsell layout, add share card image
- [ ] ContentPage: Remove duplicate schema, add auto-TOC generation
- [ ] StateIQHub: Migrate to ContentPage wrapper

### Phase 4: SEO Hubs & Internal Linking
- [ ] Add/improve hub pages for: /average-iq, /iq-percentile-chart, /types-of-iq-tests
- [ ] Build RelatedScoreLinks component for is-X-iq-good pages
- [ ] Improve footer: add hub page links, blog category links
- [ ] Add "Related Scores" section to IsXIQGood pages

### Phase 5: Monetization System
- [ ] Activate AdSense with real slot IDs (after approval)
- [ ] Add affiliate block component for brain training tools
- [ ] Implement email capture before quiz (optional, not gated)
- [ ] Add premium report cross-sell on hub pages

### Phase 6: Technical QA
- [ ] Run full build and verify prerender output
- [ ] Check for broken links (internal)
- [ ] Validate JSON-LD with Google Rich Results Test
- [ ] Audit Core Web Vitals (Lighthouse)
- [ ] Mobile usability check
- [ ] Verify sitemap matches all live routes

---

## 8. PROTECTED SEO ASSETS — DO NOT CHANGE

These URLs have ranking potential and must not be redirected, removed, or canonicalized away:

- `/` — homepage (primary IQ test keyword target)
- `/what-is-iq` — informational hub
- `/iq-score-ranges` — high-value informational
- `/average-iq-by-country` — high traffic potential
- `/average-iq-by-state` — US local SEO
- `/is-{score}-iq-good` — 70+ programmatic pages
- `/famous-iq/{person}` — celebrity IQ traffic
- `/iq-needed-for/{career}` — career intent traffic
- `/iq-vs-eq` — comparison keyword
- `/how-to-improve-iq` — actionable guide
- `/genius-iq` — high-volume informational
- `/iq-percentile-chart` — data-driven page
- `/average-iq` — broad average IQ queries
- All `/blog/*` articles — individual ranking assets

---

## 9. CURRENT MONETIZATION STATUS

| Channel | Status | Est. Monthly Potential |
|---------|--------|----------------------|
| AdSense display ads | Configured, not enabled (placeholder slots) | $500–$3,000 at current traffic |
| Premium report ($7.99) | Live via Stripe | Depends on conversion rate |
| Certificate ($3.99) | Live via Stripe | Depends on conversion rate |
| Email list | Supabase leads table, basic nurture | Growing |
| Affiliate | Not implemented | $200–$1,000 at scale |
| Subscription | Not implemented | Future $9–$19/mo |

---

## 10. RISKS TO REVIEW BEFORE DEPLOYING ANY CHANGE

1. **Pre-render build** — always run `npm run build` locally and verify `/dist` contains HTML files for major routes.
2. **Canonical sanity** — check that no page has a canonical pointing to a different page (except /test → /).
3. **Sitemap integrity** — sitemap.xml must not lose any existing URLs after any update.
4. **No accidental noindex** — grep for `noindex` in any changed files before deploying.
5. **JSON-LD validity** — test any schema changes in Google's Rich Results Test.
6. **Stripe links** — do not change PREMIUM_REPORT_LINK or CERTIFICATE_LINK constants without coordinating with payment setup.
7. **Supabase schema** — do not alter leads or referrals table columns without a migration.
