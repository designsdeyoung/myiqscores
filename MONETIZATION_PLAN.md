# Monetization Plan — MyIQScores.com
**Created:** 2026-05-21  
**Goal:** Build a $100K/month revenue machine without compromising SEO, UX, or user trust.

---

## 1. CURRENT MONETIZATION STATUS

| Channel | Status | Monthly Est. |
|---------|--------|-------------|
| AdSense display ads | Configured, disabled (placeholder slots) | $0 (potential: $2K–$8K at scale) |
| Premium Report ($7.99) | Live via Stripe | Minimal (no traffic data) |
| Certificate only ($3.99) | Live via Stripe | Minimal |
| Email list | Supabase — basic nurture | Not monetized yet |
| Affiliate | Not implemented | $0 |
| Subscription | Not implemented | $0 |
| B2B | Not implemented | $0 |

### Known Issues to Fix First
- AdSense slot IDs are placeholders — get real IDs after approval
- Email capture in Results doesn't save to Supabase (bug)
- No affiliate links implemented

---

## 2. REVENUE LADDER

### Tier 0: Free (Lead Generation)
The free tier creates trust, drives traffic, and feeds all other tiers.
- Free IQ test (30 questions, instant results)
- Free score interpretation
- Free educational guides (1,052+ pages)
- Free email results summary

**Goal:** Maximize test completions and content traffic. This is the top of the funnel.

---

### Tier 1: Micro-Conversion — Lead Capture
**Target:** Capture email before or after test

**Pre-test capture (optional, not gated):**
- "Email me my results" prompt on landing page before test starts
- Framed as: "We'll send your score + a personalized IQ breakdown"
- Do NOT gate the test behind email — this hurts conversion and trust
- Make it optional: "Skip for now"

**Post-test capture (current):**
- Results page email capture — FIX: currently doesn't save to Supabase
- Email nurture bar (EmailNurture component shown after 10s)

**Lead magnet ideas:**
- "Get your free IQ improvement guide" (PDF)
- "Download your IQ percentile chart"
- "Subscribe for weekly brain teasers"

**Target conversion rate:** 15–25% of test completers leave email

---

### Tier 2: Low-Ticket ($3.99–$29)

#### Currently Live
- **Premium Report ($7.99)** — 12-page PDF via Stripe
  - Cognitive strengths breakdown
  - Career fit recommendations
  - Improvement plan
  - Printable certificate
- **Certificate Only ($3.99)** — Printable IQ certificate via Stripe

#### To Add
- **Score History Tracker ($4.99)** — One-time, track retests over time
- **Detailed Brain Profile ($14.99)** — Extended 15-minute test with deeper analysis
- **IQ Study Pack ($9.99)** — Practice questions + score improvement guide PDF

**Target conversion rate:** 3–8% of test completers → $7.99 report  
**Revenue at 1,000 daily tests:** ~30–80 purchases × $7.99 = $240–$640/day = $7K–$19K/month

---

### Tier 3: Mid-Ticket ($29–$99)

#### To Add
- **Premium Assessment Bundle ($29)** — Full report + certificate + IQ study pack + 3 retests
- **Cognitive Profile PDF ($49)** — Professional-looking document suitable for sharing with educators or coaches
- **Personalized Learning Plan ($79)** — AI-generated based on weak cognitive categories

**Placement:** Results page (below free results, before email capture)  
**Target conversion rate:** 1–2% of test completers

---

### Tier 4: Subscription ($9–$29/month)

#### To Build
- **IQ Progress Tracker ($9/mo)**
  - Monthly retests
  - Score history visualization
  - Progress dashboard
  - Weekly brain training exercises
  - Cognitive domain improvement tracking
  
- **Brain Training Plus ($19/mo)**
  - Daily practice questions
  - Category-specific improvement drills
  - Leaderboard and streaks
  - Email digest with tips

**Implementation requirements:**
- Auth system (currently Supabase is set up — extend with auth)
- User dashboard route (e.g., `/dashboard`)
- Stripe recurring billing
- Score history storage in Supabase

**Target:** 500 subscribers × $9/mo = $4,500/mo  
**Stretch:** 2,000 subscribers × $14/mo = $28,000/mo

---

### Tier 5: AdSense Display Revenue

**Current state:** AdSense pub ID `ca-pub-5051305701488211` configured. Slots are placeholders.

**Activation checklist:**
1. Get AdSense approval (apply at google.com/adsense)
2. Replace placeholder slot IDs in `src/config/adsense.ts`
3. Set `ADSENSE_ENABLED = true`
4. Test on staging with real ads

**Ad placement strategy (current infrastructure):**
| Zone | ID | Size | Location | Revenue Potential |
|------|-----|------|---------|-----------------|
| `leaderboard` | slot-1 | 728×90 / 320×50 | Top of content pages | High |
| `inArticle1` | slot-2 | Responsive | Mid-article | High |
| `inArticle2` | slot-3 | Responsive | Lower-article | Medium |
| `sidebar` | slot-4 | 300×250 | Desktop sidebar | Medium |
| `multiplex` | slot-8 | Responsive | Above footer | Medium |
| `resultsTop` | slot-6 | 728×90 | Top of results page | High |
| `resultsMid` | slot-D | 336×280 | After category breakdown | High |
| `resultsBottom` | slot-7 | 336×280 | Bottom of results | Medium |
| `quizTop` | slot-9 | 728×90 | Above quiz card | Medium |
| `quizInterstitial` | slot-C | 336×280 | Section breaks | High |

**Ad rules (DO NOT violate — AdSense policy + user trust):**
- Never place ads above the fold that push the test/content below
- Never show ads during active question answering
- Maximum 3 ads above the fold on any page
- Never use interstitials that block navigation
- No ads on /privacy-policy, /terms-of-service, /contact

**Revenue estimate with 100K monthly sessions:**
- RPM for IQ/education niche: $3–$8 per 1,000 pageviews
- 100K sessions × avg 3 pageviews = 300K pageviews
- 300K pageviews × $5 RPM = $1,500/month from ads
- At 500K sessions: $7,500/month from ads

---

### Tier 6: Affiliate Revenue

**Target products:**
| Category | Products | Commission | Placement |
|----------|---------|-----------|----------|
| Brain training apps | Lumosity, BrainHQ, Brilliant | 20–40% | How to improve IQ page, results page |
| Online learning | Coursera, Khan Academy, Brilliant | $10–$30/signup | How to improve IQ, career pages |
| Books | "Brain Training" books (Amazon) | 4–8% of sale | Blog posts, how to improve IQ |
| Test prep | MCAT, GRE prep courses | $20–$100/sale | SAT-to-IQ, GRE-to-IQ pages |
| Productivity tools | Notion, focus apps | Recurring % | Blog posts |

**Implementation:**
- Create `AffiliateBlock` component with disclosure text
- Add to: Results page (after score), How to Improve IQ, hub pages after value delivered
- Always disclose: "This site may earn a commission from affiliate links."
- Never let affiliate content feel like advertising — integrate naturally

**Target:** $1,000–$3,000/month from affiliate at 100K monthly sessions

---

### Tier 7: B2B / Institutional (Future)

**Potential buyers:**
- Schools and tutoring centers ($50–$200/month per institution)
- Career coaching services ($100–$500/month)
- Corporate HR screening ($500–$2,000/month)
- Educational publishers (white-label licensing)
- Mental health practices (assessment tools)

**Not to implement yet** — focus on consumer first. Design the codebase so it can support multi-tenancy later (Supabase auth + organization table + test result ownership).

---

## 3. CONVERSION POINT MAP

### Homepage / Landing
| Touchpoint | Type | Goal |
|-----------|------|------|
| Hero CTA button | Primary | Start test |
| Optional email field before test | Lead capture | Email |
| Score bands section → /iq-score-ranges | Internal link | Content engagement |
| Second CTA block | Reinforcement | Start test |

### Quiz
| Touchpoint | Type | Goal |
|-----------|------|------|
| Section interstitial ads | Display | Ad revenue |
| Quiz progress bar | Engagement | Completion rate |
| No email gate | Trust | Protect conversion |

### Results Page
| Touchpoint | Type | Goal |
|-----------|------|------|
| Score reveal + bell curve | Delight | Engagement |
| Premium Report upsell (primary CTA) | Low-ticket | $7.99 |
| Certificate upsell | Low-ticket | $3.99 |
| Email capture | Lead | Email list |
| Social share + Challenge | Viral | Traffic |
| Score-based content links | Retention | Return visits |
| EmailNurture bar (10s delay) | Lead | Email list |

### Content Pages (Hub + Programmatic)
| Touchpoint | Type | Goal |
|-----------|------|------|
| Sticky mobile CTA banner | Primary | Start test |
| Sidebar ad (desktop) | Display | Ad revenue |
| In-article ads (2x per long page) | Display | Ad revenue |
| Related pages section | Internal | Engagement |
| Footer CTA block | Test | Conversion |
| After FAQ section (affiliate block) | Affiliate | Commission |

---

## 4. EMAIL NURTURE SEQUENCE

**Current:** Basic nurture exists (EmailNurture component). Supabase Edge Functions handle transactional emails.

**Proposed Sequence (7-day):**
- **Day 0** (immediate): IQ results summary + percentile context
- **Day 1**: "What your score means for your career" — links to /iq-by-career
- **Day 3**: "3 exercises to improve your cognitive performance" — links to /how-to-improve-iq + affiliate
- **Day 5**: Discount offer for premium report (24-hour countdown)
- **Day 7**: "Challenge a friend" re-engagement + weekly brain teaser

**Technical:** Already using Supabase Edge Functions `send-transactional-email`. Add sequence management.

---

## 5. TRUST & CONVERSION MAXIMIZERS

### Trust Signals to Add/Improve
- [ ] Test taker count ("X people have taken this test")
- [ ] AdSense approval badge (once live)
- [ ] "Designed by psychometrics researchers" without overclaiming
- [ ] Methodology page link prominently in test flow
- [ ] 30-day money-back guarantee for premium report (already in Results.tsx)
- [ ] Secure payment badge (already: Stripe + Shield icon in Results.tsx)
- [ ] Testimonials / score screenshots from real users

### Conversion Rate Optimization Targets
| Page | Current Est. CR | Target CR | Method |
|------|---------------|----------|--------|
| Landing → Quiz start | ~40% | 60% | Better H1, social proof, remove friction |
| Quiz completion | ~70% | 85% | Progress bar already good; add save state |
| Results → Premium ($7.99) | ~2% | 5% | Better placement, urgency, email follow-up |
| Results → Email capture | ~10% | 25% | Fix Supabase save, better value prop |
| Content → Test start | ~5% | 10% | Better sticky CTA, contextual CTAs |

---

## 6. PRICING STRATEGY

### Current
- Premium Report: $7.99 (was $19.99 crossed out)
- Certificate: $3.99

### Recommended Tests
- A/B test $12.99 vs $7.99 for premium report (higher price may signal higher quality)
- Bundle: "Report + Certificate" at $9.99 (currently $11.98 separate)
- Add "Early Bird" pricing for email subscribers ($5.99 for 24 hours)

### Psychological Pricing
- Keep .99 suffix for all prices
- Use "was" pricing with strikethrough (already doing this)
- Add countdown timer for "limited time offer" (24h post-results)
- Show what % of users buy at this price: "Chosen by 1 in 12 test-takers"

---

## 7. 12-MONTH REVENUE PROJECTION

Assuming consistent traffic growth and full implementation:

| Month | Monthly Sessions | AdSense | Reports | Affiliate | Email/Sub | Total |
|-------|----------------|---------|---------|-----------|----------|-------|
| Now | 50K | $0 | $500 | $0 | $0 | $500 |
| +3mo | 100K | $1,500 | $2,000 | $500 | $0 | $4,000 |
| +6mo | 200K | $3,000 | $5,000 | $1,500 | $500 | $10,000 |
| +9mo | 400K | $6,000 | $10,000 | $3,000 | $2,000 | $21,000 |
| +12mo | 700K | $10,000 | $18,000 | $6,000 | $8,000 | $42,000 |
| +18mo | 1.5M | $20,000 | $35,000 | $12,000 | $20,000 | $87,000 |
| +24mo | 2.5M | $35,000 | $55,000 | $18,000 | $35,000 | $143,000 |

*Projections assume: SEO content growth, AdSense activation, subscription launch at month 6, B2B pilot at month 12.*

---

## 8. IMPLEMENTATION ORDER

### Immediate (No Code Risk)
1. Get AdSense approval → replace slot IDs → enable ads
2. Fix email capture Supabase insert in Results.tsx

### Phase 2 (UX Revamp)
3. Improve premium report placement and design
4. Add email capture option to landing page (optional)
5. Add 24-hour post-results discount email trigger

### Phase 3 (Affiliate)
6. Create AffiliateBlock component
7. Add to: results page, how-to-improve-iq, score pages

### Phase 4 (Subscription)
8. Design subscription product (Stripe recurring)
9. Create /dashboard route
10. Implement Supabase auth for returning users
11. Score history tracking

### Phase 5 (B2B)
12. Create /enterprise landing page
13. Add org-level Supabase schema
14. Build bulk test reporting feature
