# Content Expansion Plan — MyIQScores.com
**Created:** 2026-05-21  
**Goal:** Scale from 1,052 pages to 1,500+ pages of genuinely useful, rankable content without thin pages.

---

## 1. CONTENT INVENTORY

### What Exists (Do Not Duplicate)
| Category | Count | Template |
|----------|-------|---------|
| Is X IQ good? | ~70 pages | IsXIQGood.tsx |
| Average IQ by country | ~100 pages | CountryIQ.tsx |
| IQ needed for career | ~80 pages | CareerIQ.tsx |
| Famous person IQ | ~100 pages | FamousIQ.tsx |
| IQ by age group | ~20 pages | AgeIQ.tsx |
| IQ and condition | ~30 pages | ConditionIQ.tsx |
| IQ myths | ~20 pages | IQMyth.tsx |
| IQ by state | 50 pages | StateIQ.tsx |
| IQ comparisons | ~50 pages | IQCompare.tsx |
| IQ by college major | ~80 pages | MajorIQ.tsx |
| IQ by city | ~200 pages | CityIQ.tsx |
| Blog articles | 30 | Individual TSX |
| Hub pages | ~15 | Various |
| Static pages | ~10 | Individual TSX |

**Total: ~855 programmatic + ~55 editorial = ~910 unique content pages**
(Sitemap shows 1,052 with homepage/test variants counted)

---

## 2. CONTENT GAPS TO FILL

### Gap 1: Test Type Pages (High Priority)
**Why:** Keywords like "logical reasoning test," "pattern recognition test," "verbal reasoning test" have 10K–50K monthly searches each. No dedicated pages exist.

**Proposed routes and content:**
```
/tests/logical-reasoning
/tests/pattern-recognition
/tests/verbal-reasoning
/tests/spatial-reasoning
/tests/numerical-reasoning
/tests/memory
/tests/abstract-reasoning
```

**Each page should include:**
- H1: "[Test Type] Test — Free Online Practice"
- What this cognitive ability means
- How it's measured in IQ tests
- 3–5 sample questions (text-based, to avoid copyright)
- What a good score looks like
- How to improve this specific ability
- Link to full IQ test (with CTA)
- FAQ schema
- Schema: `WebApplication` + `FAQPage`

**Content rules:**
- Do NOT present sample questions as "the real test"
- Clearly label as "practice examples"
- Always link to the full 30-question test

---

### Gap 2: Specific Age IQ Hub Page
**Why:** "average IQ by age" gets significant search volume but there's no clear hub.

**Current:** Individual `/iq-by-age/{age}` pages exist.  
**Missing:** A hub page at `/average-iq/by-age` that:
- Shows average IQ across age groups in a table
- Links to each age-specific page
- Explains how IQ changes over a lifetime
- Includes FAQ about IQ and aging
- Links to `/blog/iq-and-age`

---

### Gap 3: IQ Score Calculator / Percentile Calculator
**Why:** "IQ percentile calculator" gets 5K–20K searches/month. Currently the page `/iq-percentile-chart` shows a static chart.

**Enhancement needed:**
- Add an interactive percentile calculator to `/iq-percentile-chart`
- Input: IQ score → Output: exact percentile + population context
- Can be simple JavaScript (no backend needed)

---

### Gap 4: Comparison Pages
**Existing at `/iq-compare/{slug}`** — check what slugs exist.  
**Gaps likely include:**
- `/iq-compare/iq-vs-eq` (may exist as `/iq-vs-eq`)
- `/iq-compare/iq-vs-grit`
- `/iq-compare/iq-vs-street-smarts`
- `/iq-compare/iq-vs-emotional-intelligence`

---

### Gap 5: Question-Answer Pages
**Why:** "can you improve your IQ" and similar question-format queries get significant traffic. Some exist as blog posts.

**Proposed new routes:**
```
/questions/what-is-average-iq
/questions/how-accurate-are-online-iq-tests
/questions/what-iq-is-considered-genius
/questions/does-iq-change-with-age
/questions/what-is-the-highest-iq-possible
/questions/can-you-improve-your-iq
/questions/does-iq-predict-success
/questions/what-iq-score-is-needed-for-mensa
```

**These overlap with existing blog posts** — consider whether new routes are better than improving existing blog posts. Recommendation: improve blog posts first, then add question pages if gaps remain.

---

### Gap 6: New Blog Articles (30+ Needed)
**Why:** 30 articles is thin for a site targeting SEO at scale. Need 60+ high-quality articles.

**Priority blog topics:**
```
/blog/what-is-average-iq-score  (hub + FAQ format)
/blog/online-iq-test-accuracy   (E-E-A-T signal — supports trust)
/blog/iq-test-for-children      (existing: iq-testing-in-children)
/blog/how-to-prepare-for-iq-test
/blog/iq-score-ranges-guide    (support /iq-score-ranges hub)
/blog/pattern-recognition-tips  (support tests/ pages)
/blog/verbal-reasoning-tips
/blog/logical-reasoning-tips
/blog/what-does-iq-measure
/blog/limitations-of-iq-testing
/blog/iq-and-education
/blog/iq-test-questions-examples
/blog/brain-training-exercises
/blog/cognitive-decline-and-age
/blog/gifted-children-identification
/blog/mensa-membership-guide
/blog/famous-low-iq-scores        (counter-intuitive, high traffic)
/blog/iq-scores-by-decade         (Flynn Effect application)
/blog/is-iq-genetic
/blog/iq-and-meditation
/blog/working-memory-training
/blog/iq-myths-debunked
/blog/cognitive-biases-and-iq
/blog/emotional-regulation-and-performance
/blog/iq-test-cheating            (surprising search volume)
/blog/how-iq-tests-are-scored
```

---

### Gap 7: Country Extended Data Pages
**Current:** ~100 country pages exist. Some may lack extended data.  
**Enhancement:** Ensure each country page has:
- Average IQ estimate with data source citation
- Population context
- Education system context
- 3–5 neighboring country comparison links
- FAQ with at least 3 questions
- 250+ words of unique content

---

### Gap 8: IQ and Specific Professions (Extended)
**Current:** ~80 career pages exist via `/iq-needed-for/{career}`.  
**Gap:** Hub page at `/iq-by-career` (exists) should better link to all career pages.  
**New pages:**
```
/iq-needed-for/teacher
/iq-needed-for/nurse
/iq-needed-for/programmer
/iq-needed-for/lawyer
/iq-needed-for/physician
/iq-needed-for/accountant
/iq-needed-for/engineer
/iq-needed-for/artist
```
Only add if not already covered by existing career slugs.

---

## 3. CONTENT QUALITY STANDARDS

All content on MyIQScores must meet these standards:

### E-E-A-T Signals
- **Experience:** Include test methodology, scoring explanation
- **Expertise:** Cite research, name sources, include AuthorBox
- **Authoritativeness:** Link to authoritative sources (APA, ACS, peer-reviewed studies)
- **Trustworthiness:** Clear disclaimers, no medical diagnosis language, honest limitations

### Disclaimer Requirements
Include on all IQ score, demographic, and test pages:

> *"IQ scores measured by this tool are educational estimates only. This is not a clinically validated assessment and should not be used for medical, educational placement, or employment decisions. For a formal IQ assessment, consult a licensed psychologist."*

### Content Rules
- Minimum 400 words per programmatic page
- Minimum 800 words per hub page  
- Minimum 1,200 words per blog article
- Every page: at least 1 table or structured data section
- Every page: FAQ section with 3–5 questions
- Every page: at least 3 internal links
- Every page: 1 CTA to take the free IQ test
- No deterministic language about individuals based on demographics
- No fake scientific certainty ("research proves" → "research suggests")
- No misleading score inflation

### Sensitive Topic Rules
**Age pages:** Present as general trends, not prescriptions.  
**Career pages:** "Studies suggest" not "you must have X IQ to work in Y."  
**Country pages:** Full disclaimer, cite source, note data limitations.  
**Condition pages:** Extra sensitivity — never stigmatize, always provide context.  
**Low score pages:** Especially careful — positive framing, focus on growth.

---

## 4. PROGRAMMATIC TEMPLATE IMPROVEMENTS

### IsXIQGood.tsx Enhancement
Each /is-{score}-iq-good page should include:

1. **Quick Answer Box** (above fold, schema-ready)
   ```
   IQ [Score] is in the [Classification] range.
   It places you at the [X]th percentile.
   Approximately [X]% of people score this high.
   ```

2. **Bell Curve Visual** — static SVG showing score position

3. **Score Context Table**
   | Measure | Value |
   |---------|-------|
   | Classification | Above Average |
   | Percentile | 84th |
   | Rarity | 1 in 6 people |
   | Average for college grads | ~115 |

4. **Career Alignment Section** — which careers align with this range

5. **Neighboring Scores** — RelatedScoreLinks component

6. **FAQ Schema** — 5 questions specific to that score

7. **Internal Links** — to test, to hub pages, to nearby scores

---

### CountryIQ.tsx Enhancement
Each /average-iq/{country} page should include:

1. Quick summary: country name, estimated IQ, rank among countries
2. Historical context + data source
3. Education system context (brief)
4. Regional comparison (neighboring countries)
5. Disclaimer paragraph
6. FAQ: 3–5 questions
7. Link to /average-iq-by-country hub
8. Test CTA

---

## 5. BLOG PUBLISHING SCHEDULE

### Recommended: 4 articles/month minimum

**Month 1 (Foundation):**
- What Is Average IQ? (hub-level guide)
- How Online IQ Tests Are Scored (trust/methodology)
- How to Prepare for an IQ Test (actionable)
- Pattern Recognition: What It Is and How to Improve It

**Month 2 (Long-Tail):**
- Logical Reasoning Test: Complete Guide
- Verbal Reasoning: How to Score Higher
- IQ Score Ranges: The Complete Chart Explained
- IQ and Education: What the Research Says

**Month 3 (Authority):**
- Famous People Who Changed How We Think About IQ
- The Limitations of IQ Testing (honest, E-E-A-T)
- Brain Training: What Actually Works
- Cognitive Development Across Your Lifespan

---

## 6. CONTENT THAT SHOULD NOT BE CREATED

To avoid thin content and ethical issues:
- Do NOT create pages making deterministic claims about IQ by race/ethnicity
- Do NOT create pages claiming IQ predicts specific life outcomes
- Do NOT create pages listing fictional IQ scores without clear labeling
- Do NOT create "IQ test for specific nationalities" — cultural bias
- Do NOT create pages that could be used to discriminate in employment
- Do NOT create articles that inflate user scores to increase sharing

---

## 7. CONTENT CALENDAR TRACKER

| Status | Priority | URL | Target Keyword | Est. Monthly Searches |
|--------|---------|-----|---------------|---------------------|
| ❌ Missing | High | `/tests/logical-reasoning` | logical reasoning test | 20K |
| ❌ Missing | High | `/tests/pattern-recognition` | pattern recognition test | 15K |
| ❌ Missing | High | `/tests/verbal-reasoning` | verbal reasoning test | 12K |
| ❌ Missing | High | `/iq-percentile-calculator` | iq percentile calculator | 8K |
| ❌ Missing | Medium | `/tests/memory` | memory test online | 30K |
| ❌ Missing | Medium | `/tests/spatial-reasoning` | spatial reasoning test | 10K |
| ❌ Missing | Medium | `/average-iq/by-age` | average iq by age | 15K |
| ✅ Exists | Verify | `/iq-percentile-chart` | iq percentile chart | 10K |
| ✅ Exists | Enhance | `/iq-score-ranges` | iq score chart | 25K |
| ✅ Exists | Enhance | `/average-iq` | average iq score | 40K |
| ✅ Exists | Enhance | `/good-iq-score` | what is a good iq score | 15K |
