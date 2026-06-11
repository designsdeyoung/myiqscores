# Growth Overhaul Report: myiqscores.com

Generated 2026-06-11 on branch `growth-overhaul`. Companion document: AUDIT.md (regenerate any time with `npm run build && node scripts/audit.mjs`).

## Headline numbers

| Metric | Before (Phase 1 audit) | After |
|---|---|---|
| Prerendered pages | 1,058 | 1,063 |
| Orphan pages (<3 inbound internal links) | 387 | 0 |
| Thin pages (<600 words) | 65 | 0 |
| Title tags over 60 characters | 445 | 0 |
| Pages missing canonical | 0 | 0 |
| Sitemaps | 1 monolithic, fake lastmod | index + 8 segments, git-derived lastmod |
| IndexNow | none | all URLs on every production deploy |
| ESLint errors / TS errors | 9 / 1 | 0 / 0 |

The page count rose by only 5 (the new /tools section) by design: the approved strategy was to enrich existing URLs in place rather than generate parallel structures that would compete with already-indexed pages.

## Route map

| Section | URL pattern | Pages | Sitemap |
|---|---|---|---|
| Score pages | /is-40-iq-good ... /is-200-iq-good | 161 | sitemap-scores.xml |
| Celebrity profiles | /famous-iq/[slug] | 312 | sitemap-celebrities.xml |
| Countries | /average-iq/[slug] | 125 | sitemap-countries.xml |
| US states | /average-iq-by-state/[slug] | 50 | sitemap-countries.xml |
| Cities | /iq-by-city/[slug] | 52 | sitemap-countries.xml |
| Careers | /iq-needed-for/[slug] | 108 | sitemap-careers.xml |
| College majors | /iq-by-major/[slug] | 40 | sitemap-careers.xml |
| Age groups | /iq-by-age/[slug] | 23 | sitemap-topics.xml |
| Conditions | /iq-and/[slug] | 35 | sitemap-topics.xml |
| Myths | /iq-myths/[slug] | 54 | sitemap-topics.xml |
| Comparisons | /iq-compare/[slug] | 25 | sitemap-topics.xml |
| Interactive tools | /tools, /tools/[4 tools] | 5 | sitemap-tools.xml |
| Blog guides | /blog, /blog/[slug] | 31 | sitemap-blog.xml |
| Core, hubs, tests, legal | various | 42 | sitemap-core.xml |

Sitemap index: https://www.myiqscores.com/sitemap.xml (also submitted in robots.txt). All lastmod dates derive from the last git commit touching each route's data file or page component.

## What shipped, by phase

**Phase 1 (technical foundation).** Repeatable site audit tooling (scripts/audit.mjs → AUDIT.md), segmented sitemaps with truthful lastmod, IndexNow on production deploys (scripts/indexnow.mjs, key in public/), robots.txt blocking of ?ref=/?utm_ duplicates, CLS fix on celebrity images, schema logo URL fixes.

**Phase 2 (adapted: enrich in place).** All 312 celebrity entries gained three structured fields: `field` (10-category domain taxonomy), `sources` (2-3 honest provenance strings ending with verification status), `estimatedIQMid` (numeric midpoint powering percentile math). Celebrity pages now show a "Where This Estimate Comes From" section and a visible estimate disclaimer linking to /methodology. The celebrity hub filters all 312 entries by field (previously a hand-maintained 36-person map). All 50 state pages gained a unique ~155-word analysis section; 26 thin career pages gained a cognitive-demands section; the methodology page now documents how celebrity estimates and data pages are compiled.

**Phase 3 (tools).** Four interactive client-side tools plus a hub, each with full SEO treatment (WebApplication + FAQPage schema, 600+ words of supporting content, quiz CTA): /tools/iq-percentile-calculator, /tools/iq-rarity (shareable output), /tools/sat-to-iq-converter (SAT/ACT/GRE, both directions, research-cited anchors), /tools/celebrity-iq-match (powered by estimatedIQMid).

**Phase 4 (internal linking engine).** src/lib/internalLinks.ts distributes 6-10 contextual links per page via ring-neighbor selection (uniform inbound coverage by construction) plus rotating cross-family and core-page links, merged automatically into every page by ContentPage. Score pages link adjacent scores, matching celebrities and careers; celebrity pages link same-IQ neighbors, same-field peers, their score page, and the hub. Breadcrumbs with BreadcrumbList schema were already sitewide via SEOHead/ContentPage. Hubs already listed all entries; orphan count is now zero and stays zero structurally, since new data entries wire themselves into the graph.

**Phase 5 (share loop).** Dynamic OG images via @vercel/og edge function (/api/og) for quiz results, all 161 score pages, and all 312 celebrity pages. Share links now land on /share (edge-rendered teaser with score-specific OG tags, noindex, instant redirect to the quiz with a challenge banner). Challenge links carry the score in the URL (cs/cp params), fixing the previous localStorage-only implementation that silently broke on any other device. Result page has X/Facebook/LinkedIn/WhatsApp/copy/download-image buttons; referral source is tracked via ref param and a referrals table insert.

**Phase 6 (CTR and freshness).** Keyword-first 60-char title formula enforced across every template via fitTitle/preferTitle (hand-written overrides kept only when compliant). FAQPage schema confirmed on every template with an FAQ block. Article schema on all 30 guides now carries a real dateModified from git history; every content page shows a visible "Updated [date]" badge from the same generated module (scripts/gen-content-dates.mjs, runs each build). Quiz schema added to the homepage quiz.

**Phase 7 (measurement).** GA4 events: quiz_started, quiz_question_answered, quiz_completed, result_viewed, result_shared (per platform + challenge), tool_used (per tool, with score/test params), hub_navigation (fires on every internal related-link click). Referral loop measurable via ?ref= + utm_source=share params and the Supabase referrals table.

## Schema coverage by template

| Template | Schema types emitted |
|---|---|
| Every page (via SEOHead) | Organization, WebSite, BreadcrumbList, WebPage or Article |
| Score pages | + FAQPage, Article |
| Celebrity pages | + FAQPage, Person, Article |
| Country/state/city/career/major/age/condition/myth/compare | + FAQPage |
| Blog guides | + Article (real dateModified) |
| Tools | + WebApplication, FAQPage |
| Homepage | + Quiz, FAQPage |
| Hubs | + FAQPage (famous, compare, major) |

## Lighthouse (mobile, simulated slow 4G, built site served statically)

| Template | Performance | SEO | LCP | CLS |
|---|---|---|---|---|
| Homepage (/) | 93 | 100 | 2.5 s | 0 |
| Blog guide (/blog/flynn-effect) | 95 | 100 | 2.2 s | 0.001 |
| Score page (/is-127-iq-good) | 92 | 100 | 2.3 s | 0 |
| State page (/average-iq-by-state/texas) | 92 | 100 | 2.9 s | 0.003 |
| Tool page (/tools/iq-percentile-calculator) | 92 | 100 | 2.9 s | 0 |
| Celebrity page (/famous-iq/albert-einstein) | 70-72 | 100 | ~5.7 s | 0 |

Baseline before this work: 39-54 performance across all templates, with 12-15 s mobile LCP. Three architectural fixes drove the gains:

1. **Prerendered HTML was invisible until hydration.** framer-motion entrance animations server-render as inline opacity:0, so pages painted nothing until the full JS bundle loaded. The homepage hero now animates via CSS (paints immediately), the screen-transition wrapper uses AnimatePresence initial={false}, and the cookie banner (which had become the homepage LCP element) collapses its disclosure text behind a Learn-more expander.
2. **Every page shipped the entire 2.1 MB app.** Routes are now code-split via React.lazy with an SSR preload step (src/lib/asyncPage.tsx), the quiz flow is split out of the homepage chunk, and the internal-linking engine reads a generated 57 KB index instead of the ~2 MB data files. Shared JS dropped to ~580 KB total (entry 230 KB + two vendor chunks), with each route loading only its own chunk.
3. **CLS sources removed**: ad slots already reserved fixed heights; celebrity images render at fixed dimensions with eager loading + preload + preconnect (they are the LCP element); oversized decorative background gradients no longer render on mobile.

The celebrity template is capped near 70 in lab conditions by its externally hosted Wikipedia image over simulated 4G; see flagged items. Scores were measured against `npx serve dist` with live AdSense/GA loading; run-to-run variance of a few points is normal. Production field data (CrUX) is the source of truth.

## Top 50 target keywords to track in GSC

| # | Keyword | Target page | Set |
|---|---|---|---|
| 1 | elon musk iq | /famous-iq/elon-musk | Celebrities |
| 2 | albert einstein iq | /famous-iq/albert-einstein | Celebrities |
| 3 | donald trump iq | /famous-iq/donald-trump | Celebrities |
| 4 | taylor swift iq | /famous-iq/taylor-swift | Celebrities |
| 5 | kanye west iq | /famous-iq/kanye-west | Celebrities |
| 6 | stephen hawking iq | /famous-iq/stephen-hawking | Celebrities |
| 7 | bill gates iq | /famous-iq/bill-gates | Celebrities |
| 8 | nikola tesla iq | /famous-iq/nikola-tesla | Celebrities |
| 9 | mark zuckerberg iq | /famous-iq/mark-zuckerberg | Celebrities |
| 10 | lebron james iq | /famous-iq/lebron-james | Celebrities |
| 11 | is 120 iq good | /is-120-iq-good | Scores |
| 12 | is 130 iq good | /is-130-iq-good | Scores |
| 13 | is 125 iq good | /is-125-iq-good | Scores |
| 14 | is 110 iq good | /is-110-iq-good | Scores |
| 15 | is 140 iq good | /is-140-iq-good | Scores |
| 16 | 127 iq percentile | /is-127-iq-good | Scores |
| 17 | is 100 iq good | /is-100-iq-good | Scores |
| 18 | is 115 iq good | /is-115-iq-good | Scores |
| 19 | is 135 iq good | /is-135-iq-good | Scores |
| 20 | is 145 iq good | /is-145-iq-good | Scores |
| 21 | average iq by country | /average-iq-by-country | Countries |
| 22 | average iq in usa | /average-iq-us | Countries |
| 23 | average iq japan | /average-iq/japan | Countries |
| 24 | average iq by state | /average-iq-by-state | States |
| 25 | average iq california | /average-iq-by-state/california | States |
| 26 | average iq of doctors | /iq-needed-for/doctor | Careers |
| 27 | average lawyer iq | /iq-needed-for/lawyer | Careers |
| 28 | software engineer iq | /iq-needed-for/software-developer | Careers |
| 29 | average iq by major | /iq-by-major | Majors |
| 30 | physics major iq | /iq-by-major/physics | Majors |
| 31 | average iq by age | /iq-by-age/adults | Age |
| 32 | average iq for a 13 year old | /iq-by-age/teenagers | Age |
| 33 | what is a good iq score | /good-iq-score | Core |
| 34 | genius iq level | /genius-iq | Core |
| 35 | highest iq ever recorded | /highest-iq-ever | Core |
| 36 | iq score ranges | /iq-score-ranges | Core |
| 37 | average iq | /average-iq | Core |
| 38 | mensa iq requirement | /mensa-iq-test | Core |
| 39 | iq percentile chart | /iq-percentile-chart | Core |
| 40 | what is a low iq | /low-iq | Core |
| 41 | iq percentile calculator | /tools/iq-percentile-calculator | Tools |
| 42 | sat to iq conversion | /tools/sat-to-iq-converter | Tools |
| 43 | how rare is my iq | /tools/iq-rarity | Tools |
| 44 | celebrity iq list | /famous-iq | Hubs |
| 45 | iq and adhd | /iq-and/adhd | Conditions |
| 46 | autism and iq | /iq-and/autism | Conditions |
| 47 | iq vs eq | /iq-vs-eq | Core |
| 48 | are iq tests accurate | /blog/iq-tests-accurate | Guides |
| 49 | can you increase your iq | /blog/can-you-raise-your-iq | Guides |
| 50 | free iq test | / | Core |

## Flagged, skipped, and deviations (with reasons)

1. **Stack is Vite + React SSG, not Next.js.** Every Next.js-specific instruction (App Router, generateStaticParams, next/image, server components) was mapped onto the existing prerender pipeline. No server components exist; equivalent wins were achieved by full HTML prerendering and deferred third-party scripts.
2. **Parallel URL structures skipped deliberately** (/iq-score/, /celebrity-iq/, /iq-by-profession/, /average-iq-by-age/, /iq-vs/, /guides/): equivalents already existed and were indexed. Approved by owner; existing sets enriched in place instead.
3. **Google sitemap ping skipped:** Google retired the ping endpoint in January 2024 (returns 404). Discovery is covered by the robots.txt Sitemap line and the existing GSC property; IndexNow covers Bing/Yandex/Seznam/Naver.
4. **Set E (comparison pages) not expanded:** 25 curated /iq-compare/ pages already exist, within the 40-page cap. No new pairs generated this round; expand only with search-volume evidence.
5. **Set D age coverage kept at 23 group pages:** per-age pages for every age 5-80 would be near-duplicate doorway content (the content is identical within developmental bands). The existing group pages cover the keyword space honestly.
6. **Old SAT scale (pre-2016) not supported in the converter:** different scale mapping; noted on-page. Could be added with its own anchor table.
7. **OG image for /share teaser depends on crawler behavior:** robots.txt explicitly allows /api/og and /api/share; most social crawlers fetch OG images regardless, but if a platform's preview looks wrong, check its debugger first.
8. **Email-capture upsert was silently dropping new leads** (missing required `name` column): fixed in passing, worth verifying in Supabase logs that inserts now succeed.
9. **Supabase generated types were stale** (missing newsletter_opt_in): patched by hand; regenerate properly with `supabase gen types` when convenient.
10. **Lighthouse measured locally** with live ad scripts; expect a few points of run-to-run variance. Production field data (CrUX/GSC) remains the source of truth.
11. **Celebrity-page LCP is the externally hosted Wikipedia image** (~5.7 s simulated 4G even with preload + preconnect + eager loading). The structural fix is serving resized, modern-format copies from our own origin (an image proxy or build-time download step); flagged for a follow-up rather than rushed here.
12. **Fonts switched to display=optional**: first-visit text renders in the system font and the brand font applies from cache on subsequent navigations. This stops LCP from re-firing on font swap. If brand typography on first paint matters more than the LCP gain, revert to display=swap in index.html.

## Suggested next steps (not executed)

- Submit the sitemap index in GSC once this branch deploys, and watch Page indexing for the /tools section.
- Watch GSC CTR on the retitled famous-iq and career pages over 2-4 weeks; revert individual titles only with data.
- Backlink outreach for the four tools pages (calculators earn links; the content pages rarely do).
- Expand /iq-compare/ only for pairs with proven impressions in GSC.
