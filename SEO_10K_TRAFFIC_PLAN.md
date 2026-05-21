# MyIQScores.com — SEO Growth Plan: 1,000 → 10,000 Monthly Visits

**Created:** May 21, 2026  
**Target:** 10,000 organic visits/month  
**Current baseline:** ~1,000 visits/month  
**Site:** https://www.myiqscores.com

---

## What Was Fixed in This Session

### Critical Fixes
- Removed `/test` from sitemap (duplicate of homepage `/` with canonical pointing back to `/`)
- Added 4 missing blog posts to prerender.mjs static routes: `dunning-kruger-effect`, `iq-and-age`, `twice-exceptional-adhd-high-iq`, `poverty-and-iq`
- Added `noindex,nofollow` to the `/unsubscribe` page
- Improved sitemap priority logic (homepage 1.0, hubs 0.9, blog 0.8, dynamic pages 0.7)

### New Pages Created
| URL | Target Keyword | Priority |
|-----|---------------|----------|
| `/average-iq` | "average IQ", "what is average IQ score" | High |
| `/iq-test` | "IQ test", "free IQ test", "online IQ test" | High |
| `/practice-iq-test` | "practice IQ test", "IQ test questions" | Medium |
| `/disclaimer` | Trust/AdSense readiness | Medium |
| `/how-it-works` | Trust/UX conversion | Medium |

### SEO Infrastructure Improvements
- Added `SearchAction` to WebSite schema (Sitelinks Searchbox eligibility)
- Added default OG/Twitter meta tags to `index.html` fallback
- Updated footer in `ContentPage` and `Index` with new hub page links
- Added `Disclaimer` and `How It Works` links to site footers

### Files Changed
- `scripts/prerender.mjs` — missing blog routes added, /test excluded, priority logic improved
- `src/App.tsx` — 5 new route imports and route definitions added
- `src/pages/AverageIQ.tsx` — NEW
- `src/pages/IQTest.tsx` — NEW
- `src/pages/PracticeIQTest.tsx` — NEW
- `src/pages/Disclaimer.tsx` — NEW
- `src/pages/HowItWorks.tsx` — NEW
- `src/components/SEOHead.tsx` — SearchAction schema added
- `src/components/ContentPage.tsx` — footer links updated
- `src/pages/Index.tsx` — footer links updated
- `src/pages/Unsubscribe.tsx` — noindex added
- `index.html` — default OG/Twitter fallback meta tags added
- `public/sitemap.xml` — /test removed, 5 new pages added (1047 → 1051 URLs)

---

## Current SEO Architecture

### Framework
- Vite + React 18 + TypeScript SPA with SSR prerendering
- `react-router-dom` v6 for routing
- `react-helmet-async` for per-page SEO metadata
- Prerender script generates static HTML for all 1,050+ routes at build time
- Deployed to Vercel

### Page Inventory (~1,051 total)

| Category | Count | URL Pattern |
|----------|-------|-------------|
| IQ Score pages | 163 | `/is-{score}-iq-good` |
| Famous IQ pages | 314 | `/famous-iq/{slug}` |
| Country IQ pages | 127 | `/average-iq/{slug}` |
| Career IQ pages | 110 | `/iq-needed-for/{slug}` |
| State IQ pages | 52 | `/average-iq-by-state/{slug}` |
| IQ Myths pages | 56 | `/iq-myths/{slug}` |
| Condition IQ pages | 37 | `/iq-and/{slug}` |
| College Major pages | 42 | `/iq-by-major/{slug}` |
| IQ Compare pages | 27 | `/iq-compare/{slug}` |
| City IQ pages | 54 | `/iq-by-city/{slug}` |
| Age Group IQ pages | 25 | `/iq-by-age/{slug}` |
| Blog posts | 30 | `/blog/{slug}` |
| Static hub pages | ~65 | Various |
| **Total** | **~1,051** | |

### Schema Markup (per page via SEOHead)
- `Organization` — site-wide
- `WebSite` with `SearchAction` — site-wide
- `BreadcrumbList` — all interior pages
- `WebPage` or `Article` — per page type
- `FAQPage` — most content pages
- `WebApplication` — homepage/test
- `CollectionPage` — blog index

### Trust Pages
- ✅ `/about`
- ✅ `/contact`
- ✅ `/privacy-policy`
- ✅ `/terms-of-service`
- ✅ `/methodology`
- ✅ `/editorial-policy`
- ✅ `/disclaimer` (NEW)
- ✅ `/how-it-works` (NEW)

---

## Indexation Strategy

### Pages to Index First (Request in GSC)
These pages have the highest topical authority and search volume potential:

1. `https://www.myiqscores.com` (homepage/quiz)
2. `https://www.myiqscores.com/average-iq` (NEW — high volume)
3. `https://www.myiqscores.com/iq-test` (NEW — high volume)
4. `https://www.myiqscores.com/iq-score-ranges`
5. `https://www.myiqscores.com/what-is-iq`
6. `https://www.myiqscores.com/iq-percentile-chart`
7. `https://www.myiqscores.com/good-iq-score`
8. `https://www.myiqscores.com/genius-iq`
9. `https://www.myiqscores.com/average-iq-by-country`
10. `https://www.myiqscores.com/average-iq-us`
11. `https://www.myiqscores.com/famous-iq`
12. `https://www.myiqscores.com/iq-by-career`
13. `https://www.myiqscores.com/how-to-improve-iq`
14. `https://www.myiqscores.com/is-100-iq-good`
15. `https://www.myiqscores.com/is-120-iq-good`
16. `https://www.myiqscores.com/is-130-iq-good`
17. `https://www.myiqscores.com/famous-iq/albert-einstein`
18. `https://www.myiqscores.com/famous-iq/elon-musk`
19. `https://www.myiqscores.com/blog`
20. `https://www.myiqscores.com/practice-iq-test` (NEW)

### Pages to Improve Before Indexing
- `/unsubscribe` — has noindex now; keep excluded
- Any `/iq-myths/*` pages with thin content — review and strengthen
- `/iq-compare/*` pages — verify each has unique, substantial content

### Pages Excluded from Sitemap
- `/test` — duplicate of `/`, canonical → `/`
- `/unsubscribe` — functional page with noindex

---

## Internal Linking Strategy

### Hub-and-Spoke Architecture
```
Homepage (/)
├── /iq-test (new hub)
│   ├── /practice-iq-test
│   ├── /types-of-iq-tests
│   └── /how-it-works
├── /iq-score-ranges (hub)
│   ├── /is-{score}-iq-good (×163)
│   ├── /good-iq-score
│   ├── /genius-iq
│   └── /iq-percentile-chart
├── /average-iq (new hub)
│   ├── /average-iq-by-country
│   │   └── /average-iq/{country} (×127)
│   ├── /average-iq-us
│   │   └── /average-iq-by-state/{state} (×52)
│   └── /iq-by-city/{city} (×54)
├── /famous-iq (hub)
│   └── /famous-iq/{person} (×314)
├── /iq-by-career (hub)
│   └── /iq-needed-for/{career} (×110)
└── /blog (hub)
    └── /blog/{post} (×30)
```

### Key Internal Links Added This Session
- Footer: `/average-iq`, `/iq-test`, `/practice-iq-test`, `/how-it-works`, `/disclaimer`
- New pages link to: `/iq-score-ranges`, `/iq-percentile-chart`, `/average-iq-by-country`, `/good-iq-score`, `/practice-iq-test`, `/how-to-improve-iq`, and quiz CTA

### Remaining Internal Link Improvements
- Add `/average-iq` link to `IQScoreRanges.tsx`
- Add `/iq-test` link to `WhatIsIQ.tsx` and homepage landing section
- Add `/practice-iq-test` link from quiz results page
- Link `famous-iq` hub from `is-{score}-iq-good` pages (already done)
- Link `iq-by-career` hub from `is-{score}-iq-good` pages (already done)

---

## CTR Improvement Strategy

### Title Formula Improvements (Already Implemented)
The `IsXIQGood.tsx` already uses dynamic title templates:
- Low scores: "Is {score} IQ Low? What It Actually Means"
- Average: "Is {score} IQ Good? You're {percentile} Percentile"
- High: "Is {score} IQ Good? Top {top%} — Here's What It Means"
- Gifted: "Is {score} IQ Good? Gifted Range Explained"

### Target Title Patterns for Hub Pages
| Page | Target Title Pattern |
|------|---------------------|
| `/average-iq` | "What Is the Average IQ Score? A Complete Guide" |
| `/iq-test` | "Free IQ Test Online: 30 Questions, Instant Results" |
| `/practice-iq-test` | "Practice IQ Test: Sample Questions, Tips & How to Improve" |
| `/iq-score-ranges` | "IQ Score Ranges: What Every Score Means (Chart + Percentiles)" |
| `/famous-iq/{slug}` | "{Name}'s IQ: [Hook] | MyIQScores" |

### Meta Description Best Practices (Follow for All Pages)
- Include the target keyword naturally in the first 20 words
- State a clear benefit: what the user will learn or get
- Keep under 155 characters
- Avoid duplicate descriptions across pages

---

## Conversion Strategy

### Quiz Flow CTAs
- Landing → Quiz → Processing → Results (already implemented)
- Results page → Score explanation page → Related content
- Sticky mobile banner: "Take Free IQ Test" appears on scroll (ContentPage)
- CTA block at bottom of every content page

### Result Page Monetization Opportunities
1. **Premium report CTA** — "Get your detailed 12-page cognitive breakdown"
2. **Email capture** — Offer score save/email via EmailNurture component (already in Index.tsx)
3. **Challenge a friend** — Share link with `?ref=` parameter (already implemented)
4. **Related content** — Score-appropriate blog posts and explanation pages
5. **AdSense placements** — leaderboard, sidebar, in-article, multiplex (configured but pending slot IDs)

---

## AdSense Readiness Checklist

| Item | Status |
|------|--------|
| Original educational content | ✅ |
| Clear site navigation | ✅ |
| About page | ✅ |
| Contact page | ✅ |
| Privacy Policy | ✅ |
| Terms of Service | ✅ |
| Disclaimer | ✅ (new) |
| How It Works | ✅ (new) |
| No placeholder pages | ✅ |
| No fake claims | ✅ |
| No copied content | ✅ |
| Mobile-friendly design | ✅ |
| Educational content beyond quizzes | ✅ (30+ blog posts) |
| Ad slots configured | ⚠️ Slot IDs are still placeholder values |
| AdSense enabled in config | ⚠️ `ADSENSE_ENABLED = false` in `src/config/adsense.ts` |

**Action required before enabling ads:**
1. Get real slot IDs from Google AdSense dashboard
2. Replace placeholders in `src/config/adsense.ts`
3. Set `ADSENSE_ENABLED = true`
4. Test ad rendering on staging before production

---

## Google Search Console Action Plan

### After Deployment

**Step 1: Verify property and submit sitemap**
1. Go to Google Search Console → your property
2. Navigate to Sitemaps
3. Submit: `https://www.myiqscores.com/sitemap.xml`
4. Verify it shows "Success" and the URL count matches (~1,051)

**Step 2: Request indexing for top 25 pages**
Use URL Inspection → Request Indexing for:
1. `https://www.myiqscores.com`
2. `https://www.myiqscores.com/average-iq`
3. `https://www.myiqscores.com/iq-test`
4. `https://www.myiqscores.com/iq-score-ranges`
5. `https://www.myiqscores.com/what-is-iq`
6. `https://www.myiqscores.com/iq-percentile-chart`
7. `https://www.myiqscores.com/good-iq-score`
8. `https://www.myiqscores.com/genius-iq`
9. `https://www.myiqscores.com/average-iq-by-country`
10. `https://www.myiqscores.com/average-iq-us`
11. `https://www.myiqscores.com/famous-iq`
12. `https://www.myiqscores.com/iq-by-career`
13. `https://www.myiqscores.com/how-to-improve-iq`
14. `https://www.myiqscores.com/practice-iq-test`
15. `https://www.myiqscores.com/how-it-works`
16. `https://www.myiqscores.com/is-100-iq-good`
17. `https://www.myiqscores.com/is-110-iq-good`
18. `https://www.myiqscores.com/is-120-iq-good`
19. `https://www.myiqscores.com/is-130-iq-good`
20. `https://www.myiqscores.com/famous-iq/albert-einstein`
21. `https://www.myiqscores.com/famous-iq/elon-musk`
22. `https://www.myiqscores.com/blog`
23. `https://www.myiqscores.com/blog/what-is-iq-score`
24. `https://www.myiqscores.com/iq-by-career`
25. `https://www.myiqscores.com/average-iq-by-state`

**Step 3: Monitor crawl health**
- Pages → Coverage: look for "Discovered, currently not indexed" (Google found it but hasn't crawled it yet — build internal links to fix)
- Pages → Coverage: look for "Crawled, currently not indexed" (Google crawled but chose not to index — improve content quality)
- Enhancements: check for Schema errors

**Step 4: CTR optimization (after 30 days of data)**
- Performance → Search results
- Filter: Position 8–20 (low-hanging fruit for title/description improvements)
- Filter: High impressions, low CTR (title is showing but not compelling enough)
- Rewrite titles/descriptions for pages with CTR below 3%

---

## Path from 1,000 to 10,000 Monthly Visits

### Month 1 (June 2026) — Technical Foundation
**Goal: Fix all crawl/index blockers. Get clean base.**
- Deploy this session's changes
- Submit sitemap to GSC and verify 1,051 URLs
- Request indexing for top 25 pages
- Confirm all prerendered HTML files have correct `<title>`, `<meta description>`, and canonical tags
- Check for "Discovered, currently not indexed" pages — add internal links to them
- Verify AdSense pub ID and ads.txt are correct (already done)
- Check mobile usability in GSC → Mobile Usability report
- Monitor Core Web Vitals report

**Projected traffic end of Month 1:** 1,200–1,500

### Month 2 (July 2026) — Top Page Strengthening
**Goal: Get existing pages ranking higher. Improve the best pages first.**
- Pull GSC query data: which pages have 100+ impressions?
- For each high-impression page: rewrite title and meta description to improve CTR
- Add internal links from hub pages to the top-performing dynamic pages
- Improve 10 most-visited famous IQ pages with richer content and more related people
- Improve 10 most-visited career IQ pages with salary data, education path, and IQ range context
- Publish 3 new blog posts targeting high-volume keywords not yet covered
- Build 5 external backlinks (submit to relevant directories, IQ-related forums, education sites)

**Projected traffic end of Month 2:** 2,000–3,000

### Month 3 (August 2026) — Content Cluster Completion
**Goal: Fill keyword gaps in existing clusters.**
- Check GSC for queries you're ranking for but don't have dedicated pages
- Publish missing score pages if any gaps in `/is-{score}-iq-good` coverage
- Create `/high-iq` hub page (targeting "high IQ", "high IQ traits")
- Create `/free-iq-test-for-kids` or a carefully worded kids-oriented page
- Create `/iq-test-for-adults` hub page
- Improve `/iq-compare/*` pages — each should have a clear comparison table
- Publish 4 more blog posts in the "cognitive skills" cluster:
  - "What Is Working Memory and Why Does It Matter?"
  - "How to Improve Fluid Intelligence"
  - "Spatial Reasoning: What It Is and How to Practice"
  - "What Is Verbal Reasoning?"
- Begin internal link audit: every `/is-{score}-iq-good` page should link to `/average-iq`

**Projected traffic end of Month 3:** 3,500–5,000

### Month 4 (September 2026) — GSC-Driven Optimization
**Goal: Use real data to make targeted improvements.**
- Pull 90-day GSC data; identify top 50 queries by impressions
- For queries ranked 4–10: strengthen the page targeting that query
  - Add the query to H2/H3 headings
  - Expand content section answering the query directly
  - Add 2–3 internal links pointing to the page
- For queries with click-through rate below 2%: rewrite title/description
- For pages stuck at "Crawled, not indexed": substantially expand the content
- Add FAQ sections to any hub page missing them
- Submit updated sitemap after content additions

**Projected traffic end of Month 4:** 5,000–6,500

### Month 5 (October 2026) — Distribution and Links
**Goal: Build authority through distribution and backlinks.**
- Identify 20 relevant sites to pitch for links (education blogs, psychology sites, career advice sites)
- Submit the site to free directories: Best of the Web, DMOZ alternatives, education resource lists
- Create a shareable IQ score infographic for social distribution
- Set up a Reddit strategy: share helpful resources in r/cognitivescience, r/psychology, r/IQ
- Pitch the "IQ by Country" data to data journalism blogs (Vox, FiveThirtyEight style)
- Create a "State IQ Rankings" story pitch for regional news outlets
- Use Quora: answer IQ-related questions with helpful responses + natural links back to relevant pages

**Projected traffic end of Month 5:** 6,500–8,000

### Month 6 (November 2026) — Scale Winners, Prune Losers
**Goal: Double down on what's working; cut what isn't.**
- Identify top 100 pages by traffic from GSC
- Create a second content piece targeting the same keyword cluster as each top performer
- Identify pages with zero impressions after 6 months: consolidate or improve them
- Review all 163 `/is-{score}-iq-good` pages — are they being indexed? If not, check for thin content
- Review the 30 blog posts — which ones are getting traffic? Create "part 2" or related posts
- Consider adding interactive tools: IQ percentile calculator, SAT-to-IQ calculator widget
- If budget allows: acquire 1–2 expired domains in the intelligence/education space for link equity

**Projected traffic end of Month 6:** 8,000–10,000+

---

## Content Clusters to Build (Next 90 Days)

### Cluster 1: Test-Taking
Already covered: `/iq-test`, `/practice-iq-test`, `/types-of-iq-tests`  
Still needed:
- `/iq-test-for-kids` (with parental language and disclaimers)
- `/iq-test-for-adults`
- `/short-iq-test` (targeting "quick IQ test")
- `/mensa-practice-test`

### Cluster 2: Score Understanding
Already covered: `/iq-score-ranges`, `/good-iq-score`, `/genius-iq`, `/average-iq`, `/is-{score}-iq-good` (×163)  
Still needed:
- `/high-iq` (targeting "high IQ", "what counts as high IQ")
- `/iq-score-chart` (visual chart page)
- `/low-iq-score` (already have `/low-iq`)

### Cluster 3: Cognitive Skills
Still needed (no dedicated pages):
- `/verbal-reasoning-test`
- `/numerical-reasoning-test`
- `/spatial-reasoning-test`
- `/working-memory-test`
- `/cognitive-ability-test`

### Cluster 4: Comparisons and Questions
Already covered: `/iq-vs-eq`, `/iq-compare/*`, `/iq-myths/*`  
Still needed:
- `/iq-vs-aptitude-test`
- `/can-iq-change`
- `/what-affects-iq`

---

## Top 25 URL Priorities for GSC Indexing Requests

| Priority | URL | Target Query |
|----------|-----|-------------|
| 1 | `/` | free IQ test online |
| 2 | `/average-iq` | average IQ score |
| 3 | `/iq-test` | IQ test |
| 4 | `/iq-score-ranges` | IQ score ranges |
| 5 | `/what-is-iq` | what is IQ |
| 6 | `/iq-percentile-chart` | IQ percentile chart |
| 7 | `/good-iq-score` | what is a good IQ score |
| 8 | `/genius-iq` | genius IQ score |
| 9 | `/average-iq-by-country` | average IQ by country |
| 10 | `/average-iq-us` | average IQ in US |
| 11 | `/famous-iq` | famous people IQ |
| 12 | `/iq-by-career` | IQ by career |
| 13 | `/how-to-improve-iq` | how to improve IQ |
| 14 | `/practice-iq-test` | practice IQ test |
| 15 | `/is-100-iq-good` | is 100 IQ good |
| 16 | `/is-120-iq-good` | is 120 IQ good |
| 17 | `/is-130-iq-good` | is 130 IQ good |
| 18 | `/famous-iq/albert-einstein` | Einstein IQ |
| 19 | `/famous-iq/elon-musk` | Elon Musk IQ |
| 20 | `/blog` | IQ blog |
| 21 | `/blog/what-is-iq-score` | what is an IQ score |
| 22 | `/blog/sleep-and-iq` | sleep and IQ |
| 23 | `/average-iq-by-state` | average IQ by state |
| 24 | `/iq-by-city` | IQ by city |
| 25 | `/sat-to-iq` | SAT to IQ conversion |

---

## Remaining Manual Steps After Deployment

### Immediate (Day 1)
1. Deploy to Vercel (git push → Vercel auto-deploys)
2. Verify deployment at https://www.myiqscores.com
3. Check that `/test` no longer appears in the sitemap at https://www.myiqscores.com/sitemap.xml
4. Submit sitemap to GSC
5. Request indexing for top 10 pages using URL Inspection

### Within 1 Week
6. Get real AdSense slot IDs from your AdSense dashboard
7. Replace placeholder slot IDs in `src/config/adsense.ts`
8. Set `ADSENSE_ENABLED = true`
9. Test ad rendering on a few content pages
10. Check GSC Coverage report for crawl errors

### Within 2 Weeks
11. Review GSC Performance report — which queries are getting impressions?
12. Identify top 20 impression queries and verify the target pages are indexed
13. Check GSC Mobile Usability — fix any issues
14. Review Core Web Vitals in GSC — flag CWV failures

### Within 30 Days
15. Pull full GSC query data and start CTR optimization
16. Identify "position 4–10" pages and improve their content
17. Publish 3 new blog posts targeting keyword gaps
18. Build first 5 external backlinks

---

## Notes on AdSense Slot IDs

The current `src/config/adsense.ts` has placeholder values:
```typescript
ADSENSE_ENABLED = false
AD_SLOTS.leaderboard = "slot-XXXXXXXXX1"
// etc.
```

To activate AdSense:
1. Log into https://adsense.google.com
2. Create ad units for each slot type (leaderboard, sidebar, in-article, multiplex)
3. Copy the slot IDs
4. Update `src/config/adsense.ts` with real IDs
5. Set `ADSENSE_ENABLED = true`
6. Rebuild and deploy

Ad placements are already wired up in `ContentPage.tsx` and the quiz pages via the `AdUnit` component.

---

*Document created May 21, 2026. Update monthly as traffic grows and GSC data becomes available.*
