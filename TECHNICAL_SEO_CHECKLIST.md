# Technical SEO Checklist — MyIQScores.com
**Created:** 2026-05-21  
**Run this before every deployment.**

---

## 1. PRE-DEPLOYMENT BUILD CHECK

```bash
# 1. Full production build (includes pre-rendering)
npm run build

# 2. Verify pre-rendered HTML files exist for major routes
ls dist/
ls dist/what-is-iq/
ls dist/iq-score-ranges/
ls dist/average-iq-by-country/
ls dist/is-100-iq-good/

# 3. Verify HTML files contain meta tags (not just JS bundle)
grep -l "<title>" dist/*.html dist/**/*.html | head -5
grep "description" dist/index.html

# 4. Verify no unintended noindex
grep -r "noindex" dist/ | grep -v ".js"
```

---

## 2. CANONICAL TAGS AUDIT

### Rules
- Homepage: `https://www.myiqscores.com` (no trailing slash)
- `/test` route: canonical points to `https://www.myiqscores.com` (same as homepage — intentional)
- All other pages: canonical = `https://www.myiqscores.com/{path}`
- No www vs non-www mismatch
- No trailing slashes in canonical URLs

### Check
```bash
# Verify canonical in built HTML files
grep "rel=\"canonical\"" dist/index.html
grep "rel=\"canonical\"" dist/what-is-iq/index.html
grep "rel=\"canonical\"" dist/is-130-iq-good/index.html
```

### SEOHead Canonical Logic
- Accepts `canonicalUrl` prop
- If full URL: uses as-is
- If path only (e.g., `/about`): prepends `https://www.myiqscores.com`
- Result: always outputs full, absolute canonical URL

---

## 3. SITEMAP AUDIT

### Requirements
- [ ] All active routes in `App.tsx` have a corresponding `<loc>` in `sitemap.xml`
- [ ] No URLs in sitemap that have been removed from routes
- [ ] All `<lastmod>` dates updated when content changes
- [ ] `<priority>` values make sense (1.0 = homepage, 0.9 = major hubs, 0.7 = programmatic, 0.5 = utility pages)
- [ ] Sitemap URL at `https://www.myiqscores.com/sitemap.xml` — matches `robots.txt` reference
- [ ] Total URL count: 1,052 (as of 2026-05-21 audit)

### Check
```bash
# Count URLs in sitemap
grep -c "<loc>" public/sitemap.xml

# Verify sitemap is accessible
curl -I https://www.myiqscores.com/sitemap.xml
```

---

## 4. ROBOTS.TXT AUDIT

### Current Status: ✅ GOOD

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /auth/
```

AI bots are explicitly allowed: GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, ChatGPT-User, YouBot.

### Rules
- [ ] Never add `Disallow: /` accidentally
- [ ] Never disallow content pages that should be indexed
- [ ] Never disallow `/sitemap.xml` or `/ads.txt`
- [ ] Verify Sitemap directive is present

---

## 5. META TAG AUDIT

### Per-Page Checklist
For every route, verify in built HTML:

- [ ] `<title>` — unique per page, 50–60 chars, includes primary keyword + brand
- [ ] `<meta name="description">` — unique per page, 140–160 chars, includes keyword
- [ ] `<link rel="canonical">` — correct, absolute URL
- [ ] `<meta property="og:title">` — same as title tag
- [ ] `<meta property="og:description">` — same as meta description
- [ ] `<meta property="og:image">` — valid image URL, 1200×630px recommended
- [ ] `<meta property="og:url">` — same as canonical
- [ ] `<meta property="og:type">` — "website" or "article"
- [ ] `<meta name="twitter:card">` — "summary_large_image"
- [ ] `<meta name="robots">` — "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"

### Known Issues to Fix
- [ ] Blog pages should use `ogType="article"` in their SEOHead call (verify all 30 blog pages)
- [ ] `datePublished` is hardcoded `"2024-01-15"` — should be per-page

---

## 6. STRUCTURED DATA (JSON-LD) AUDIT

### Currently Implemented
Every page gets (via SEOHead):
- `Organization` schema
- `WebSite` schema with `SearchAction`
- `BreadcrumbList` schema (for non-root paths)
- `WebPage` or `Article` schema (based on `ogType`)

### Additional Schema to Add

| Page Type | Schema to Add | Status |
|-----------|--------------|--------|
| Homepage | `WebApplication` (quiz) | ✅ Done via `jsonLd` prop |
| /iq-test | `WebApplication` | ❌ Check |
| IsXIQGood pages | `FAQPage` | ❌ Missing |
| Blog articles | `Article` with full author | ✅ Partial (ogType=article) |
| Hub pages | `FAQPage` | ❌ Missing |
| Landing FAQ | `FAQPage` | ❌ Missing |
| Results page | Not indexable (dynamic) | N/A |

### Validate
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Check for: "Missing required properties," "Invalid value," duplicate schemas

### Known Bug to Fix
`ContentPage.tsx` lines 152-177: Injects an Organization schema via `useEffect` that duplicates what `SEOHead` already outputs. Remove this `useEffect` entirely.

---

## 7. HEADING STRUCTURE AUDIT

### Rules
- Every page must have exactly **one `<h1>`**
- `<h2>` for major sections
- `<h3>` for subsections
- Never skip heading levels (h1 → h3 without h2)
- H1 must contain the primary keyword for that page

### Check Tool
```bash
# In browser console on any page:
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => console.log(h.tagName, h.textContent.trim()))
```

### Current H1 Issues
- **Homepage:** H1 is "How Smart Are You, Really?" — needs keyword injection
- **Verify:** All programmatic pages have a data-driven H1 (check IsXIQGood, CountryIQ, etc.)

---

## 8. IMAGE OPTIMIZATION

### Rules
- [ ] All `<img>` tags have descriptive `alt` attributes
- [ ] No critical content is image-only (must be in HTML text)
- [ ] Use WebP format for photos; SVG for icons/charts
- [ ] Specify `width` and `height` attributes to prevent CLS
- [ ] Use `loading="lazy"` for below-fold images
- [ ] OG image: 1200×630px, < 300KB

### Current State
Most content is text/SVG-based (charts, bell curves are SVG). WikiImage component fetches Wikipedia images with alt text.

---

## 9. CORE WEB VITALS

### Target Scores
| Metric | Target | Good Threshold |
|--------|--------|---------------|
| LCP | < 2.0s | < 2.5s |
| INP | < 100ms | < 200ms |
| CLS | < 0.05 | < 0.1 |
| FCP | < 1.5s | < 1.8s |
| TTFB | < 200ms | < 600ms |

### Current CWV Risks
1. **Framer Motion animations on Homepage** — `BackgroundEffect` component (check if it's expensive)
2. **Font loading** — Verify fonts are preloaded in `index.html`
3. **Large JavaScript bundle** — 1,052 routes × component code can bloat bundle
4. **WikiImage** component fetches images dynamically — may cause CLS if no placeholder
5. **Ad slots** — empty div placeholders can cause layout shifts when ads load

### Optimization Actions
- [ ] Add `<link rel="preload">` for critical fonts in `index.html`
- [ ] Verify route-based code splitting in Vite config
- [ ] Add `width`/`height` to WikiImage placeholder
- [ ] Add `min-height` to ad placeholders to prevent CLS
- [ ] Run `npm run build` and check bundle analyzer

---

## 10. MOBILE USABILITY

### Requirements
- [ ] All tap targets minimum 44×44px
- [ ] No horizontal scroll on mobile
- [ ] Font size minimum 16px for body text (prevents iOS zoom)
- [ ] Sticky CTA banner (`sm:hidden`) doesn't overlap content
- [ ] Quiz option buttons are full-width on mobile (✅ already done)
- [ ] Progress bar visible on mobile (✅ fixed top bar)

### Test
- Chrome DevTools → Toggle device toolbar → iPhone 12 Pro (390px)
- Check: no text overflow, no truncated buttons, no zoomed forms

---

## 11. ACCESSIBILITY

### Minimum Requirements
- [ ] All images have `alt` text
- [ ] All interactive elements are keyboard-navigable
- [ ] Focus ring visible on all buttons/links
- [ ] Color contrast ratio ≥ 4.5:1 for normal text (WCAG AA)
- [ ] `aria-label` on icon-only buttons
- [ ] `aria-expanded` on accordion buttons (✅ exists in FAQ)
- [ ] `aria-controls` linking accordion buttons to content panels
- [ ] `role="main"` on main content area
- [ ] Skip-to-content link (optional but good)

### Known Gaps
- FAQ accordion: has `aria-expanded` but no `aria-controls`
- Icon-only social share buttons: need `aria-label` (e.g., `aria-label="Share on Twitter"`)
- Quiz option buttons: check keyboard tabbing order

---

## 12. SECURITY HEADERS

### Recommended (set in vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

Check current `vercel.json` for existing header configuration.

---

## 13. VERCEL DEPLOYMENT AUDIT

### Pre-Deploy
```bash
npm run build          # Must pass with 0 errors
npm run lint           # Must pass (or document any acceptable warnings)
```

### Post-Deploy
- [ ] Check Vercel deployment logs for errors
- [ ] Visit 5 random programmatic pages — verify HTML rendering
- [ ] Check sitemap is accessible: `https://www.myiqscores.com/sitemap.xml`
- [ ] Check robots.txt: `https://www.myiqscores.com/robots.txt`
- [ ] Check ads.txt: `https://www.myiqscores.com/ads.txt`
- [ ] Test the full quiz flow: landing → quiz → results
- [ ] Test one purchase: premium report Stripe link works
- [ ] Verify Google Search Console shows no new crawl errors (24–48h delay)

---

## 14. DUPLICATE CONTENT CHECK

### Rules
- [ ] No two pages have identical `<title>` tags
- [ ] No two pages have identical `<meta name="description">` tags
- [ ] No two pages have identical `<h1>` tags (unless intentionally template-driven with variable data)
- [ ] `/test` route canonicalizes to `/` — not indexed separately

### Common Risk: Programmatic Pages
IsXIQGood, CountryIQ, etc. use template content. Ensure:
- Title includes the specific score/country/person name
- H1 includes the specific score/country/person name
- Meta description includes the specific data
- At least one unique paragraph per page

---

## 15. 404 HANDLING

### Current State
`<Route path="*" element={<NotFound />} />` — catches all unknown routes.  
NotFound component: returns proper page with CTA to homepage.

### Verify
- [ ] 404 page returns HTTP 404 status (not 200 with 404 content) — Vercel handles this via pre-rendering
- [ ] 404 page has `<meta name="robots" content="noindex">` — check if NotFound adds this
- [ ] 404 page is not in sitemap

**Note:** In a Vite SSR/pre-render setup, 404 status codes depend on Vercel's routing config. Add to `vercel.json` if needed.

---

## 16. PRE-LAUNCH FINAL CHECKLIST

Before any major deployment:

- [ ] `npm run build` passes with 0 TypeScript errors
- [ ] `npm run lint` passes (or acceptable warnings documented)
- [ ] Sitemap URL count unchanged (or increased — never decreased without documented reason)
- [ ] Verified 5 random programmatic pages load with proper HTML title and H1
- [ ] No `noindex` accidentally added to content pages
- [ ] Canonical URLs are correct on all changed pages
- [ ] JSON-LD is valid on changed pages (Rich Results Test)
- [ ] Mobile rendering tested in Chrome DevTools
- [ ] Quiz full flow works (start → 30 questions → results)
- [ ] Premium report Stripe link works
- [ ] Email capture on Results page saves to Supabase (after bug fix)
- [ ] No broken internal links on changed pages
- [ ] Google Search Console: Submit updated sitemap after major content changes
