# AdSense Audit — MyIQScores.com

Audit date: 2026-08-28 (v2 — post content-quality hardening) · Branch: `adsense-production-hardening`
Auditor: automated code + content review — full repo inspection, production
build, scripted mobile end-to-end quiz run, hydration diagnostics with a
development React build, axe-core WCAG 2.0 A/AA scans, prerendered-output
validation, and a page-family content audit (see `CONTENT_AUDIT.md`).

Scores are 0–10. For all rows except "Policy risk", higher is better.
"Policy risk" is a risk level — lower is better.

| Dimension | v1 | v2 | Notes |
|---|---|---|---|
| Original content | 7 | 8 | All copy original; per-page uniqueness verified on adjacent templated pages; factual errors where rumor was stated as verified fact (Kasparov, Carlsen, Tao, Epstein detail, Sharon Stone) corrected across every cross-reference. |
| Content depth | 7 | 8 | Representative built pages: score 1,035 words, career ~850, country ~1,100, famous ~1,850, blog ~1,500 — each with data visuals, FAQs, comparisons, and new limitations/methodology sections. State pages (~500 words) remain the thinnest family. |
| Trust | 8 | 9 | Estimate disclosures on all famous pages; measurement-error and "what this doesn't establish" sections on score pages; "IQ is not a job requirement" on career pages; named-dataset controversy sections on country pages; unverifiable "60% Off / $19.99" pricing removed everywhere including the email template; myth-busting family actively corrects misinformation. |
| Navigation | 8 | 9 | Consistent navbar, dual footers with full legal links, breadcrumbs (+schema), hub pages per family, 47–176 internal links per page, working noindexed 404; sitemap now lists only canonical URLs. |
| Legal / privacy | 9 | 9 | 10 trust/legal pages with effective dates; Privacy Policy covers GA4, AdSense, cookies, GDPR/CCPA; Consent Mode v2 region-scoped defaults. Held at 9 (not 10) until Google's certified CMP message is actually enabled in the AdSense console — a manual owner step. |
| Technical quality | 7 | 9 | 0 lint errors (was 14), typecheck clean, hydration errors root-caused and fixed (35 routes were serving the wrong prerendered HTML; routes now derive from a single manifest with a build-failing 404 guard), 557 routes prerender with verified titles/canonicals/schema. Residual: `vite preview` serves slashless URLs via SPA fallback locally (production Vercel serving is unaffected — verified against its filesystem-first behavior). |
| Mobile UX | 8 | 9 | Full 30-question quiz E2E passes at 390px including both manual-continue interstitials; responsive layouts; ads use reserved min-heights (CLS-safe); axe mobile-viewport scans clean. |
| Accessibility | 6 | 8 | axe-core WCAG 2.0 A/AA: 0 violations across homepage, quiz, score, famous, privacy, and blog pages (one nested-interactive violation found and fixed in ComparisonChart). Held at 8: automated scans only — no manual screen-reader or full keyboard audit. |
| SEO | 8 | 9 | Major fix: 35 live routes (13 blog articles, 19 famous pages, 2 career pages, state hub) were missing from prerender/sitemap and served homepage HTML with the wrong canonical to crawlers — now prerendered and in the sitemap (556→555 URLs, zero removals except non-canonical `/test`). Sitemap auto-generates from the route manifest; utility page noindexed. |
| Ad placement safety | 9 | 9 | Unchanged: no ads render pre-approval; max 8 ad opportunities per completed quiz (per-5-question refresh); no auto-advancing interstitials; ads separated from controls; labeled, lazy-loaded units. |
| Policy risk (lower = better) | 6→ | 3 | Remaining: (1) sheer volume of templated pages could still pattern-match "low value content" despite unique copy and honest framing; (2) national-IQ topic is inherently contested even with the new methodology sections; (3) one sensitive-figure page (Epstein) is factual but reviewable. All deliberately deceptive elements (fake urgency, false "verified" claims, false rank precision) are gone. |

**Overall: 85/100** (weighted judgment, not an average; v1 was 74).

The two-point gap to a higher score is structural, not fixable by polish: a
~430-page templated core will always carry some "programmatic content" risk
with an AdSense reviewer, and national/celebrity IQ content is inherently
sensitive subject matter. Within those constraints the site is now honestly
framed, factually corrected, technically clean, and better-documented than the
large majority of sites in this niche.

## Verdict

### GO — production merge
All builds, checks, and E2E pass; the branch fixes crawler-facing defects
(wrong HTML on 35 URLs) that argue for deploying sooner rather than later.

### GO — AdSense (re)application, after two preconditions
1. Deploy this branch to production and spot-check `/blog/flynn-effect`,
   `/ads.txt`, and `/sitemap.xml` on the live domain.
2. Enable Google's certified GDPR consent message in AdSense → Privacy &
   messaging (the site's Consent Mode v2 wiring is ready for it).

Then submit for review. This remains a judgment that applying is reasonable —
not a guarantee of approval. Most likely rejection vector if any: "low value
content" triggered by templated-page volume; the fallback plan is in
`ADSENSE_READINESS.md` §6.
