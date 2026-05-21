# Internal Linking Plan — MyIQScores.com
**Created:** 2026-05-21  
**Goal:** Build a scalable internal linking system that distributes authority, improves crawlability, and drives users toward test completion and monetization.

---

## 1. CURRENT INTERNAL LINKING AUDIT

### What Exists Today
| Location | Links To | Quality |
|----------|---------|---------|
| Homepage footer (4-col grid) | Major hubs, blog, tools, company pages | Good — 25+ links |
| ContentPage footer CTA | `/test` | Good |
| ContentPage "You Might Also Like" | `relatedPages` prop (manual per page) | Manual — inconsistent |
| Results page recommendations | Score-based (5 links based on IQ range) | Good — dynamic |
| Landing "Popular on MyIQScores" | 6 hardcoded popular pages | Manual — static |
| Landing bottom content links | what-is-iq, iq-score-ranges, average-iq-by-country | Good but limited |
| Quiz interstitial | None | Missing opportunity |

### What's Missing
- No breadcrumb navigation (schema exists, visual doesn't)
- No "related scores" sidebar/footer on IsXIQGood pages
- No cross-linking from blog posts to hub pages and tests
- No "you might also like" on homepage (only "popular" section)
- No category/tag system for blog
- No "see more countries" on country pages
- No hub → programmatic page linking except via footer

---

## 2. SITE LINK ARCHITECTURE

### Authority Flow Target
```
Homepage (/)
├── Primary Hubs (0.8–0.9 priority)
│   ├── /what-is-iq
│   ├── /iq-score-ranges  
│   ├── /average-iq
│   ├── /average-iq-by-country
│   ├── /average-iq-by-state
│   ├── /iq-percentile-chart
│   ├── /famous-iq
│   ├── /iq-by-career
│   └── /blog
│
├── Test Pages (1.0 priority — primary conversion)
│   ├── / (landing) → /test (quiz trigger)
│   └── /practice-iq-test
│
└── Programmatic Pages (0.6–0.8 priority)
    ├── /is-{score}-iq-good (70+ pages)
    ├── /average-iq/{country} (100+ pages)
    ├── /famous-iq/{person} (100+ pages)
    ├── /iq-needed-for/{career} (80+ pages)
    ├── /average-iq-by-state/{state} (50 pages)
    └── /blog/{slug} (30+ articles)
```

---

## 3. LINKING RULES BY PAGE TYPE

### Homepage (`/`)
**Must link to:**
- `/what-is-iq` — "What Is IQ?" content link
- `/iq-score-ranges` — Score bands section
- `/average-iq-by-country` — Content link
- `/iq-percentile-chart` — Score context
- `/famous-iq` — "Popular on MyIQScores" section
- `/genius-iq` — "Popular on MyIQScores"
- `/average-iq-us` — Popular
- `/iq-of-presidents` — Popular
- `/is-130-iq-good` — Popular (Is 130 IQ Good?)
- `/blog` — Footer
- All major hubs — Footer 4-column grid

**Anchor text principles:**
- Use descriptive, keyword-rich anchors
- Vary phrasing: "IQ score ranges" ≠ "see full score guide" ≠ "where does my score land"

---

### IQ Score Pages (`/is-{score}-iq-good`)
**Every page must link to:**
1. **Previous score** (`/is-{score-5}-iq-good`) — "Is [score-5] IQ good?"
2. **Next score** (`/is-{score+5}-iq-good`) — "Is [score+5] IQ good?"
3. **Score ranges hub** (`/iq-score-ranges`) — "See full IQ score chart"
4. **Percentile page** (`/iq-percentile-chart`) — "Find your percentile"
5. **Average IQ** (`/average-iq`) — "Compare to average IQ"
6. **Career page** (if applicable) — "IQ and career fit"
7. **Test CTA** (`/`) — "Take the Free IQ Test"
8. **Good IQ score** (`/good-iq-score`) — "What makes a good IQ score?"

**Score-specific links (examples):**
- Score ≥130: Link to `/genius-iq`, `/mensa-iq-test`, famous geniuses
- Score 110–129: Link to `/iq-by-career` (professional careers), `/good-iq-score`
- Score 90–109: Link to `/average-iq`, `/how-to-improve-iq`
- Score <90: Link to `/low-iq`, `/how-to-improve-iq`, careful framing

**Recommended component:** `RelatedScoreLinks` — renders next/previous score cards and hub links automatically based on the score prop.

---

### Country IQ Pages (`/average-iq/{country}`)
**Every page must link to:**
1. `/average-iq-by-country` — Hub (breadcrumb + footer)
2. 3–5 neighboring/similar countries — "Compare with [country]"
3. `/average-iq` — Global average context
4. `/iq-score-ranges` — Score context
5. `/` — Test CTA
6. 2–3 related blog posts

---

### State IQ Pages (`/average-iq-by-state/{state}`)
**Every page must link to:**
1. `/average-iq-by-state` — Hub (breadcrumb)
2. 3 nearby states (by rank) — "How [state] compares"
3. `/average-iq-us` — National average
4. `/iq-score-ranges` — Score context
5. `/` — Test CTA

---

### Career IQ Pages (`/iq-needed-for/{career}`)
**Every page must link to:**
1. `/iq-by-career` — Hub
2. 3 related careers (same IQ band)
3. `/iq-score-ranges` — What the score range means
4. `/` — Test CTA
5. Blog: `/blog/iq-and-workplace` or `/blog/iq-vs-success`

---

### Famous IQ Pages (`/famous-iq/{person}`)
**Every page must link to:**
1. `/famous-iq` — Hub
2. 3–4 people with similar IQ scores
3. `/is-{score}-iq-good` — For that person's score
4. `/iq-score-ranges` — Score context
5. `/` — Test CTA

---

### Blog Articles (`/blog/{slug}`)
**Every post must link to:**
1. `/blog` — Blog hub (breadcrumb)
2. 2–4 related blog posts (topically related)
3. 1–2 hub pages (e.g., a post about average IQ → link to `/average-iq`)
4. `/` — Test CTA (via ContentPage footer CTA)
5. Relevant programmatic pages when cited

---

### Hub Pages (famous-iq, iq-by-career, average-iq-by-country, etc.)
**Every hub must link to:**
1. 10+ programmatic child pages (the hub's purpose)
2. Related hubs
3. `/iq-score-ranges` — Context
4. `/` — Test CTA (prominent)
5. 2–3 blog posts
6. Homepage via breadcrumb

---

## 4. GLOBAL INTERNAL LINKING COMPONENTS

### A. Breadcrumb Component (Visual)
Already have BreadcrumbList schema — need visual counterpart.

```
Home > [Hub] > [Current Page]
```

- Show on: all ContentPage-wrapped pages, hub pages
- Link format: each segment is a clickable link
- Schema: already auto-generated in SEOHead

**Implementation:** Create `src/components/Breadcrumb.tsx` that accepts `items: {label: string, href: string}[]` and renders visually + generates matching schema.

---

### B. RelatedScoreLinks Component
For IsXIQGood pages — shows cards for neighboring scores.

```
┌─────────────────┬─────────────────┐
│  ← Is 115 IQ   │  Is 125 IQ →   │
│     good?       │     good?       │
└─────────────────┴─────────────────┘
```

---

### C. TestCTA Component
Reusable CTA block — appears at end of every content page.

```
┌──────────────────────────────────────┐
│  Ready to find your IQ?              │
│  Take the Free IQ Test → [Button]   │
│  Free · No Sign-Up · Instant Results │
└──────────────────────────────────────┘
```

Currently exists in ContentPage. Extract as standalone for flexibility.

---

### D. RelatedLinks Component
Flexible grid of 3–6 related page cards.

Props: `title`, `links: {title, href, description}[]`

Use cases:
- "Explore More IQ Scores" on score pages
- "Related Countries" on country pages
- "Similar Careers" on career pages
- "You Might Also Like" on blog posts

---

### E. HubPageLayout Component
Wrapper for hub pages that auto-includes:
- Breadcrumb
- Sidebar with TestCTA
- RelatedLinks footer
- FAQ section
- Internal links to all child pages (paginated if >20)

---

## 5. FOOTER ENHANCEMENT PLAN

### Current Footer (Homepage)
4 columns: Learn, Famous IQs, Tools & Tests, Company

### Proposed Footer Enhancement
Add a 5th row of links below the main footer:

**Row: Popular Searches**
- Is 100 IQ good? | Is 120 IQ good? | Is 130 IQ good? | Is 140 IQ good?
- Average IQ in USA | Average IQ by Country | IQ Percentile Chart
- Elon Musk IQ | Einstein IQ | Types of IQ Tests

This creates crawlable anchor text links to the highest-traffic programmatic pages.

---

## 6. NAVBAR ENHANCEMENT

### Current Navbar
Minimal — shows logo + some links. Needs audit.

### Proposed Dropdown Menu
```
[Take Free IQ Test]  [Learn ▾]  [Scores ▾]  [Compare ▾]  [Blog]
                      ↓                ↓
               What Is IQ?      IQ Score Ranges
               How It Works     Average IQ
               Types of Tests   Famous IQs
               Methodology      IQ Percentile Chart
```

This creates crawlable navigation links to major hub pages.

---

## 7. ANCHOR TEXT GUIDELINES

### Do
- Use descriptive, keyword-containing anchor text
- Vary anchor text across occurrences of the same link
- Use topic-relevant anchors ("IQ score ranges chart", "free online IQ test")

### Don't
- Never use "click here" or "read more"
- Don't use exact same anchor text for every link to a page (over-optimization)
- Don't link to the same page 5+ times on a single page
- Don't use keyword-stuffed anchors unrelated to context

### Anchor Text Patterns
| Target Page | Good Anchors (vary) |
|-------------|-------------------|
| `/iq-score-ranges` | "IQ score chart", "full score range guide", "score ranges explained", "what IQ scores mean" |
| `/average-iq` | "average IQ score", "what is average IQ", "national IQ average" |
| `/` (test) | "free IQ test", "take the IQ test", "measure your IQ", "start the test" |
| `/famous-iq/{person}` | person's name + "IQ", "estimated IQ of [name]" |

---

## 8. CROSS-LINKING PRIORITY MATRIX

### Highest Priority (Implement First)
1. Add RelatedScoreLinks to all /is-{score}-iq-good pages
2. Add breadcrumb to all ContentPage-wrapped pages
3. Improve hub pages to list/link all child pages
4. Add inter-article links within blog posts

### Medium Priority (Phase 4)
5. Add "Popular Countries" sidebar to country hub
6. Add "Related Careers" section on career pages
7. Add blog sidebar "Popular Articles" widget
8. Add FAQ cross-links from individual FAQ answers

### Lower Priority (Phase 5+)
9. Contextual in-content links (manual, per page)
10. "Readers also viewed" dynamic section
11. Topical cluster internal link matrix

---

## 9. LINK AUDIT PROCESS (Pre-Deployment)

Before deploying any update:

```bash
# Check for broken internal links
grep -r 'to="/' src/ | grep -v node_modules

# Verify all linked hrefs exist in App.tsx routes
# Manual review: cross-reference all <Link to="..."> with AppRoutes
```

After deployment:
- Run Screaming Frog or Ahrefs Site Audit for broken internal links
- Check Google Search Console for crawl errors
- Verify breadcrumb rich results in GSC
