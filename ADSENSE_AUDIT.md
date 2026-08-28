# AdSense Audit — MyIQScores.com

Audit date: 2026-08-28 · Branch: `adsense-production-hardening`
Auditor: automated code + content review (full repo inspection, production build,
scripted end-to-end quiz run, route checks on the built output).

Scores are 0–10, where 10 = no meaningful risk identified.

| Dimension | Score | Notes |
|---|---|---|
| Original content | 7 | All copy appears original (no scraped text found). 21 long-form blog articles, 15+ guides, and large templated datasets (scores, careers, countries, famous people) with per-page unique copy. Templated sections are the weak point. |
| Content depth | 7 | Blog articles and core guides are substantial with FAQs and internal links. `is-X-iq-good` pages have real per-score copy but adjacent scores are similar by construction. |
| Trust | 8 | About, Contact, Methodology, Editorial Policy, Corrections Policy, Disclaimer all present; famous-IQ pages carry explicit unverified-estimate notices; results page states limitations plainly; landing copy is honest ("IQ-style", "educational"). |
| Navigation | 8 | Consistent navbar, two well-linked footers, breadcrumbs with schema, hub pages for each content family, working 404. |
| Legal / privacy | 8 | 10 trust/legal pages, all footer-linked, with effective dates. Privacy Policy covers GA4, AdSense, cookies, GDPR/CCPA rights, consent. Consent Mode v2 defaults deny storage in EEA/UK/CH; Google-certified CMP message still needs to be enabled in the AdSense console (manual step). |
| Technical quality | 7 | Clean production build, typecheck passes, ~520 routes prerendered with per-page titles/canonicals/schema. Pre-existing hydration warnings (React recovers client-side); pre-existing lint errors confined to generated UI/library files. |
| Mobile UX | 8 | Responsive layouts throughout; scripted mobile-viewport (390px) run completed the full quiz and all legal pages without layout-breaking errors; ads use responsive/fixed-rect sizes with reserved min-heights (CLS-safe). |
| Accessibility | 6 | Semantic headings, aria-label on generated person icons, keyboard-clickable controls. Not formally audited against WCAG; color-contrast of muted text on dark background and focus-visible states are unverified. |
| SEO | 8 | Valid sitemap (521 URLs, auto-generated at build), robots.txt with sitemap reference, canonicals, OG/Twitter, Organization/WebSite/Breadcrumb/FAQ schema, llms.txt, duplicate `-detailed` pages redirected, 404 noindexed, www canonical host consistent. |
| Ad placement safety | 9 | No ads render pre-approval. Architecture: max 8 ad opportunities per completed 30-question quiz (per-5-question refresh, not per-question), no auto-advancing interstitials, ads separated from answers/Next/Continue controls, labeled containers, lazy-loaded via IntersectionObserver. |
| Policy risk | 6 | Main risks: large templated page families could be read as low-value content; country-IQ rankings rest on contested research; "60% Off" pricing framing on the paid report needs owner verification. No fabricated citations found; celebrity figures labeled as estimates. |

**Overall: 74/100** (weighted judgment, not an average).

## Verdict

### GO — with conditions

The site is materially stronger than a typical quiz site that fails AdSense
review: real editorial volume, honest framing, complete legal coverage, working
consent defaults, and a conservative ad architecture. Recommended sequence:

1. Deploy this branch to production (after review).
2. Complete the manual AdSense console steps in `ADSENSE_READINESS.md` §3
   (Privacy & messaging CMP, site verification, ads.txt check).
3. Then apply for review.

This is a judgment that an application is *reasonable to submit*, *not* a
guarantee of approval. The most likely rejection reason, if any, is
"low value content" triggered by the templated score/career page families; the
fallback plan for that outcome is in `ADSENSE_READINESS.md` §6.
