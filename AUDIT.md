# MyIQScores.com Site Audit

Generated: 2026-06-11 from `dist/` after a full production build. Re-run with `node scripts/audit.mjs`.

## Summary

| Metric | Value |
|---|---|
| Total prerendered pages | 1058 |
| Orphan pages (<3 inbound internal links) | 387 |
| Thin pages (<600 words rendered) | 65 |
| Titles over 60 chars | 445 |
| Meta descriptions over 155 chars | 0 |
| Pages missing canonical | 0 |

## Phase 1 technical notes

**Architecture.** Vite + React SPA prerendered to static HTML per route at build time (`scripts/prerender.mjs`). Not Next.js: there are no server components, so the "convert to server components" item does not apply. Every page ships fully rendered HTML with title, meta, canonical, OG/Twitter tags, and JSON-LD before hydration.

**Core Web Vitals status.**
- LCP: fonts preconnect + non-blocking preload with display=swap; AdSense and GA load only after the window load event, keeping them off the critical path.
- CLS: all ad slots reserve fixed min-heights before the ad loads (`AdUnit.tsx`); celebrity page images now render at a fixed 300px height with width/height attributes (was h-auto, a layout-shift source).
- INP: ads lazy-load via IntersectionObserver with a 200px margin, so main-thread ad work happens near the viewport rather than at load.

**Sitemaps.** `/sitemap.xml` is now a sitemap index pointing at sitemap-core, sitemap-scores, sitemap-celebrities, sitemap-countries, sitemap-careers, sitemap-topics, and sitemap-blog. Lastmod dates come from the last git commit touching each route's data file or page component, regenerated on every build.

**Indexing pings.** IndexNow submits all sitemap URLs to Bing/Yandex/Seznam/Naver on every production deploy (`scripts/indexnow.mjs`, key file in `public/`). Flagged and skipped: the Google sitemap ping endpoint was retired in January 2024 and returns 404, so no Google ping is implemented. Google discovery relies on the robots.txt Sitemap line and the GSC sitemap submission, both pointing at the index.

**Robots.** robots.txt blocks /api/, /admin/, /auth/, and parameterized duplicates (?ref= challenge links, ?utm_ tracking). /test renders the same page as / with a canonical to /, so it stays crawlable without duplication risk.

## Pages by template

| Template | Type | Pages | Avg words | Min words | Orphans |
|---|---|---|---|---|---|
| Celebrity (FamousIQ) | dynamic | 312 | 956 | 705 | 248 |
| Score (IsXIQGood) | dynamic | 161 | 1091 | 971 | 7 |
| Country (CountryIQ) | dynamic | 125 | 1025 | 857 | 0 |
| Career (CareerIQ) | dynamic | 108 | 904 | 566 | 55 |
| Myth (IQMyth) | dynamic | 54 | 896 | 848 | 0 |
| City (CityIQ) | dynamic | 52 | 742 | 704 | 10 |
| State (StateIQ) | dynamic | 50 | 589 | 562 | 0 |
| Major (MajorIQ) | dynamic | 40 | 750 | 713 | 12 |
| Core/static page | static | 37 | 1223 | 373 | 3 |
| Condition (ConditionIQ) | dynamic | 35 | 1039 | 931 | 28 |
| Blog article | static | 30 | 1717 | 916 | 19 |
| Compare (IQCompare) | dynamic | 25 | 878 | 827 | 5 |
| Age (AgeIQ) | dynamic | 23 | 839 | 805 | 0 |
| Practice test | static | 6 | 744 | 686 | 0 |

## Orphan pages (fewer than 3 inbound internal links)

| Route | Inbound links | Template |
|---|---|---|
| /iq-and/adhd-hyperactive | 0 | Condition (ConditionIQ) |
| /iq-and/adhd-inattentive | 0 | Condition (ConditionIQ) |
| /iq-and/autism-level-1 | 0 | Condition (ConditionIQ) |
| /iq-and/autism-level-2 | 0 | Condition (ConditionIQ) |
| /iq-and/borderline-personality | 0 | Condition (ConditionIQ) |
| /iq-and/cerebral-palsy | 0 | Condition (ConditionIQ) |
| /iq-and/chronic-fatigue | 0 | Condition (ConditionIQ) |
| /iq-and/dementia | 0 | Condition (ConditionIQ) |
| /iq-and/down-syndrome | 0 | Condition (ConditionIQ) |
| /iq-and/dyscalculia | 0 | Condition (ConditionIQ) |
| /iq-and/eating-disorder | 0 | Condition (ConditionIQ) |
| /iq-and/epilepsy | 0 | Condition (ConditionIQ) |
| /iq-and/fetal-alcohol-syndrome | 0 | Condition (ConditionIQ) |
| /iq-and/fragile-x | 0 | Condition (ConditionIQ) |
| /iq-and/gifted | 0 | Condition (ConditionIQ) |
| /iq-and/high-iq-problems | 0 | Condition (ConditionIQ) |
| /iq-and/hypothyroidism | 0 | Condition (ConditionIQ) |
| /iq-and/intellectual-disability | 0 | Condition (ConditionIQ) |
| /iq-and/lead-exposure | 0 | Condition (ConditionIQ) |
| /iq-and/narcissistic-personality | 0 | Condition (ConditionIQ) |
| /iq-and/ocd | 0 | Condition (ConditionIQ) |
| /iq-and/panic-disorder | 0 | Condition (ConditionIQ) |
| /iq-and/ptsd | 0 | Condition (ConditionIQ) |
| /iq-and/sleep-apnea | 0 | Condition (ConditionIQ) |
| /iq-and/social-anxiety | 0 | Condition (ConditionIQ) |
| /iq-and/tourette-syndrome | 0 | Condition (ConditionIQ) |
| /iq-and/traumatic-brain-injury | 0 | Condition (ConditionIQ) |
| /iq-and/williams-syndrome | 0 | Condition (ConditionIQ) |
| /low-iq | 0 | Core/static page |
| /asvab-to-iq | 1 | Core/static page |
| /blog/dunning-kruger-effect | 1 | Blog article |
| /blog/emotional-intelligence-vs-iq | 1 | Blog article |
| /blog/gifted-children-iq | 1 | Blog article |
| /blog/history-of-iq-testing | 1 | Blog article |
| /blog/how-to-increase-iq | 1 | Blog article |
| /blog/iq-and-creativity | 1 | Blog article |
| /blog/iq-and-leadership | 1 | Blog article |
| /blog/iq-and-longevity | 1 | Blog article |
| /blog/iq-by-country | 1 | Blog article |
| /blog/poverty-and-iq | 1 | Blog article |
| /blog/twice-exceptional-adhd-high-iq | 1 | Blog article |
| /blog/what-is-iq-score | 1 | Blog article |
| /famous-iq/aaron-rodgers | 1 | Celebrity (FamousIQ) |
| /famous-iq/abraham-lincoln | 1 | Celebrity (FamousIQ) |
| /famous-iq/ada-lovelace | 1 | Celebrity (FamousIQ) |
| /famous-iq/adam-sandler | 1 | Celebrity (FamousIQ) |
| /famous-iq/adele | 1 | Celebrity (FamousIQ) |
| /famous-iq/alexandria-ocasio-cortez | 1 | Celebrity (FamousIQ) |
| /famous-iq/ali-wong | 1 | Celebrity (FamousIQ) |
| /famous-iq/amy-schumer | 1 | Celebrity (FamousIQ) |
| /famous-iq/andrew-tate | 1 | Celebrity (FamousIQ) |
| /famous-iq/angel-reese | 1 | Celebrity (FamousIQ) |
| /famous-iq/angela-merkel | 1 | Celebrity (FamousIQ) |
| /famous-iq/angelina-jolie | 1 | Celebrity (FamousIQ) |
| /famous-iq/archimedes | 1 | Celebrity (FamousIQ) |
| /famous-iq/ariana-grande | 1 | Celebrity (FamousIQ) |
| /famous-iq/arnold-schwarzenegger | 1 | Celebrity (FamousIQ) |
| /famous-iq/bad-bunny | 1 | Celebrity (FamousIQ) |
| /famous-iq/barron-trump | 1 | Celebrity (FamousIQ) |
| /famous-iq/ben-affleck | 1 | Celebrity (FamousIQ) |
| /famous-iq/benjamin-netanyahu | 1 | Celebrity (FamousIQ) |
| /famous-iq/bill-clinton | 1 | Celebrity (FamousIQ) |
| /famous-iq/billie-eilish | 1 | Celebrity (FamousIQ) |
| /famous-iq/billie-joe-armstrong | 1 | Celebrity (FamousIQ) |
| /famous-iq/bo-burnham | 1 | Celebrity (FamousIQ) |
| /famous-iq/bob-dylan | 1 | Celebrity (FamousIQ) |
| /famous-iq/brad-pitt | 1 | Celebrity (FamousIQ) |
| /famous-iq/brian-chesky | 1 | Celebrity (FamousIQ) |
| /famous-iq/bruno-mars | 1 | Celebrity (FamousIQ) |
| /famous-iq/caitlin-clark | 1 | Celebrity (FamousIQ) |
| /famous-iq/canelo-alvarez | 1 | Celebrity (FamousIQ) |
| /famous-iq/cardi-b | 1 | Celebrity (FamousIQ) |
| /famous-iq/carl-gauss | 1 | Celebrity (FamousIQ) |
| /famous-iq/carl-sagan | 1 | Celebrity (FamousIQ) |
| /famous-iq/cate-blanchett | 1 | Celebrity (FamousIQ) |
| /famous-iq/chamath-palihapitiya | 1 | Celebrity (FamousIQ) |
| /famous-iq/chappell-roan | 1 | Celebrity (FamousIQ) |
| /famous-iq/charles-darwin | 1 | Celebrity (FamousIQ) |
| /famous-iq/charli-xcx | 1 | Celebrity (FamousIQ) |
| /famous-iq/charlie-munger | 1 | Celebrity (FamousIQ) |
| /famous-iq/chris-rock | 1 | Celebrity (FamousIQ) |
| /famous-iq/christopher-nolan | 1 | Celebrity (FamousIQ) |
| /famous-iq/cleopatra | 1 | Celebrity (FamousIQ) |
| /famous-iq/conan-obrien | 1 | Celebrity (FamousIQ) |
| /famous-iq/conor-mcgregor | 1 | Celebrity (FamousIQ) |
| /famous-iq/dalai-lama | 1 | Celebrity (FamousIQ) |
| /famous-iq/daniel-kahneman | 1 | Celebrity (FamousIQ) |
| /famous-iq/dave-chappelle | 1 | Celebrity (FamousIQ) |
| /famous-iq/david-bowie | 1 | Celebrity (FamousIQ) |
| /famous-iq/denzel-washington | 1 | Celebrity (FamousIQ) |
| /famous-iq/doja-cat | 1 | Celebrity (FamousIQ) |
| /famous-iq/dolly-parton | 1 | Celebrity (FamousIQ) |
| /famous-iq/drake | 1 | Celebrity (FamousIQ) |
| /famous-iq/dua-lipa | 1 | Celebrity (FamousIQ) |
| /famous-iq/dwayne-johnson | 1 | Celebrity (FamousIQ) |
| /famous-iq/ed-sheeran | 1 | Celebrity (FamousIQ) |
| /famous-iq/eddie-murphy | 1 | Celebrity (FamousIQ) |
| /famous-iq/elton-john | 1 | Celebrity (FamousIQ) |
| /famous-iq/elvis-presley | 1 | Celebrity (FamousIQ) |
| /famous-iq/eminem | 1 | Celebrity (FamousIQ) |
| /famous-iq/emma-watson | 1 | Celebrity (FamousIQ) |
| /famous-iq/emmanuel-macron | 1 | Celebrity (FamousIQ) |
| /famous-iq/emmy-noether | 1 | Celebrity (FamousIQ) |
| /famous-iq/erling-haaland | 1 | Celebrity (FamousIQ) |
| /famous-iq/ernest-hemingway | 1 | Celebrity (FamousIQ) |
| /famous-iq/florence-pugh | 1 | Celebrity (FamousIQ) |
| /famous-iq/floyd-mayweather | 1 | Celebrity (FamousIQ) |
| /famous-iq/frank-ocean | 1 | Celebrity (FamousIQ) |
| /famous-iq/franz-liszt | 1 | Celebrity (FamousIQ) |
| /famous-iq/freddie-mercury | 1 | Celebrity (FamousIQ) |
| /famous-iq/frederick-douglass | 1 | Celebrity (FamousIQ) |
| /famous-iq/geoffrey-hinton | 1 | Celebrity (FamousIQ) |
| /famous-iq/george-orwell | 1 | Celebrity (FamousIQ) |
| /famous-iq/george-w-bush | 1 | Celebrity (FamousIQ) |
| /famous-iq/george-washington | 1 | Celebrity (FamousIQ) |
| /famous-iq/giannis-antetokounmpo | 1 | Celebrity (FamousIQ) |
| /famous-iq/gordon-ramsay | 1 | Celebrity (FamousIQ) |
| /famous-iq/gracie-abrams | 1 | Celebrity (FamousIQ) |
| /famous-iq/greta-thunberg | 1 | Celebrity (FamousIQ) |
| /famous-iq/hannah-gadsby | 1 | Celebrity (FamousIQ) |
| /famous-iq/harrison-ford | 1 | Celebrity (FamousIQ) |
| /famous-iq/harry-styles | 1 | Celebrity (FamousIQ) |
| /famous-iq/hasan-minhaj | 1 | Celebrity (FamousIQ) |
| /famous-iq/hillary-clinton | 1 | Celebrity (FamousIQ) |
| /famous-iq/hozier | 1 | Celebrity (FamousIQ) |
| /famous-iq/hugh-laurie | 1 | Celebrity (FamousIQ) |
| /famous-iq/ice-spice | 1 | Celebrity (FamousIQ) |
| /famous-iq/ilya-sutskever | 1 | Celebrity (FamousIQ) |
| /famous-iq/ishowspeed | 1 | Celebrity (FamousIQ) |
| /famous-iq/j-cole | 1 | Celebrity (FamousIQ) |
| /famous-iq/jack-dorsey | 1 | Celebrity (FamousIQ) |
| /famous-iq/jack-ma | 1 | Celebrity (FamousIQ) |
| /famous-iq/jack-white | 1 | Celebrity (FamousIQ) |
| /famous-iq/jay-z | 1 | Celebrity (FamousIQ) |
| /famous-iq/jd-vance | 1 | Celebrity (FamousIQ) |
| /famous-iq/jeff-goldblum | 1 | Celebrity (FamousIQ) |
| /famous-iq/jeffrey-epstein | 1 | Celebrity (FamousIQ) |
| /famous-iq/jennifer-lawrence | 1 | Celebrity (FamousIQ) |
| /famous-iq/jensen-huang | 1 | Celebrity (FamousIQ) |
| /famous-iq/jerry-seinfeld | 1 | Celebrity (FamousIQ) |
| /famous-iq/jim-carrey | 1 | Celebrity (FamousIQ) |
| /famous-iq/jk-rowling | 1 | Celebrity (FamousIQ) |
| /famous-iq/joe-biden | 1 | Celebrity (FamousIQ) |
| /famous-iq/joe-rogan | 1 | Celebrity (FamousIQ) |
| /famous-iq/john-cleese | 1 | Celebrity (FamousIQ) |
| /famous-iq/john-f-kennedy | 1 | Celebrity (FamousIQ) |
| /famous-iq/john-lennon | 1 | Celebrity (FamousIQ) |
| /famous-iq/john-mulaney | 1 | Celebrity (FamousIQ) |
| /famous-iq/john-oliver | 1 | Celebrity (FamousIQ) |
| /famous-iq/jordan-peterson | 1 | Celebrity (FamousIQ) |
| /famous-iq/julia-roberts | 1 | Celebrity (FamousIQ) |
| /famous-iq/julius-caesar | 1 | Celebrity (FamousIQ) |
| /famous-iq/jungkook-bts | 1 | Celebrity (FamousIQ) |
| /famous-iq/justin-bieber | 1 | Celebrity (FamousIQ) |
| /famous-iq/justin-trudeau | 1 | Celebrity (FamousIQ) |
| /famous-iq/kai-cenat | 1 | Celebrity (FamousIQ) |
| /famous-iq/kamala-harris | 1 | Celebrity (FamousIQ) |
| /famous-iq/ken-jeong | 1 | Celebrity (FamousIQ) |
| /famous-iq/kendrick-lamar | 1 | Celebrity (FamousIQ) |
| /famous-iq/kevin-hart | 1 | Celebrity (FamousIQ) |
| /famous-iq/kim-jong-un | 1 | Celebrity (FamousIQ) |
| /famous-iq/kobe-bryant | 1 | Celebrity (FamousIQ) |
| /famous-iq/kylian-mbappe | 1 | Celebrity (FamousIQ) |
| /famous-iq/kylie-jenner | 1 | Celebrity (FamousIQ) |
| /famous-iq/lana-del-rey | 1 | Celebrity (FamousIQ) |
| /famous-iq/larry-ellison | 1 | Celebrity (FamousIQ) |
| /famous-iq/larry-page | 1 | Celebrity (FamousIQ) |
| /famous-iq/leonardo-dicaprio | 1 | Celebrity (FamousIQ) |
| /famous-iq/lewis-hamilton | 1 | Celebrity (FamousIQ) |
| /famous-iq/lex-fridman | 1 | Celebrity (FamousIQ) |
| /famous-iq/lionel-richie | 1 | Celebrity (FamousIQ) |
| /famous-iq/logic-rapper | 1 | Celebrity (FamousIQ) |
| /famous-iq/luka-doncic | 1 | Celebrity (FamousIQ) |
| /famous-iq/madonna | 1 | Celebrity (FamousIQ) |
| /famous-iq/magic-johnson | 1 | Celebrity (FamousIQ) |
| /famous-iq/mahatma-gandhi | 1 | Celebrity (FamousIQ) |
| /famous-iq/malala-yousafzai | 1 | Celebrity (FamousIQ) |
| /famous-iq/malcolm-gladwell | 1 | Celebrity (FamousIQ) |
| /famous-iq/marc-andreessen | 1 | Celebrity (FamousIQ) |
| /famous-iq/margaret-thatcher | 1 | Celebrity (FamousIQ) |
| /famous-iq/margot-robbie | 1 | Celebrity (FamousIQ) |
| /famous-iq/mark-cuban | 1 | Celebrity (FamousIQ) |
| /famous-iq/martin-scorsese | 1 | Celebrity (FamousIQ) |
| /famous-iq/matt-damon | 1 | Celebrity (FamousIQ) |
| /famous-iq/max-verstappen | 1 | Celebrity (FamousIQ) |
| /famous-iq/megan-thee-stallion | 1 | Celebrity (FamousIQ) |
| /famous-iq/meryl-streep | 1 | Celebrity (FamousIQ) |
| /famous-iq/michael-bloomberg | 1 | Celebrity (FamousIQ) |
| /famous-iq/michael-jackson | 1 | Celebrity (FamousIQ) |
| /famous-iq/michael-jordan | 1 | Celebrity (FamousIQ) |
| /famous-iq/michael-phelps | 1 | Celebrity (FamousIQ) |
| /famous-iq/michael-schumacher | 1 | Celebrity (FamousIQ) |
| /famous-iq/michelangelo | 1 | Celebrity (FamousIQ) |
| /famous-iq/michelle-obama | 1 | Celebrity (FamousIQ) |
| /famous-iq/mitski | 1 | Celebrity (FamousIQ) |
| /famous-iq/mrbeast | 1 | Celebrity (FamousIQ) |
| /famous-iq/naomi-osaka | 1 | Celebrity (FamousIQ) |
| /famous-iq/napoleon-bonaparte | 1 | Celebrity (FamousIQ) |
| /famous-iq/narendra-modi | 1 | Celebrity (FamousIQ) |
| /famous-iq/nassim-taleb | 1 | Celebrity (FamousIQ) |
| /famous-iq/naval-ravikant | 1 | Celebrity (FamousIQ) |
| /famous-iq/neil-armstrong | 1 | Celebrity (FamousIQ) |
| /famous-iq/nicki-minaj | 1 | Celebrity (FamousIQ) |
| /famous-iq/nicole-kidman | 1 | Celebrity (FamousIQ) |
| /famous-iq/nikola-jokic | 1 | Celebrity (FamousIQ) |
| /famous-iq/noam-chomsky | 1 | Celebrity (FamousIQ) |
| /famous-iq/novak-djokovic | 1 | Celebrity (FamousIQ) |
| /famous-iq/olivia-rodrigo | 1 | Celebrity (FamousIQ) |
| /famous-iq/patrick-collison | 1 | Celebrity (FamousIQ) |
| /famous-iq/patrick-mahomes | 1 | Celebrity (FamousIQ) |
| /famous-iq/paul-graham | 1 | Celebrity (FamousIQ) |
| /famous-iq/paul-mccartney | 1 | Celebrity (FamousIQ) |
| /famous-iq/pedro-pascal | 1 | Celebrity (FamousIQ) |
| /famous-iq/peso-pluma | 1 | Celebrity (FamousIQ) |
| /famous-iq/peter-thiel | 1 | Celebrity (FamousIQ) |
| /famous-iq/peyton-manning | 1 | Celebrity (FamousIQ) |
| /famous-iq/phoebe-bridgers | 1 | Celebrity (FamousIQ) |
| /famous-iq/pope-francis | 1 | Celebrity (FamousIQ) |
| /famous-iq/post-malone | 1 | Celebrity (FamousIQ) |
| /famous-iq/prince | 1 | Celebrity (FamousIQ) |
| /famous-iq/quentin-tarantino | 1 | Celebrity (FamousIQ) |
| /famous-iq/rafael-nadal | 1 | Celebrity (FamousIQ) |
| /famous-iq/reed-hastings | 1 | Celebrity (FamousIQ) |
| /famous-iq/reese-witherspoon | 1 | Celebrity (FamousIQ) |
| /famous-iq/reid-hoffman | 1 | Celebrity (FamousIQ) |
| /famous-iq/richard-dawkins | 1 | Celebrity (FamousIQ) |
| /famous-iq/richard-thaler | 1 | Celebrity (FamousIQ) |
| /famous-iq/ricky-gervais | 1 | Celebrity (FamousIQ) |
| /famous-iq/rihanna | 1 | Celebrity (FamousIQ) |
| /famous-iq/robert-downey-jr | 1 | Celebrity (FamousIQ) |
| /famous-iq/robin-williams | 1 | Celebrity (FamousIQ) |
| /famous-iq/roger-federer | 1 | Celebrity (FamousIQ) |
| /famous-iq/ronda-rousey | 1 | Celebrity (FamousIQ) |
| /famous-iq/ronnie-osullivan | 1 | Celebrity (FamousIQ) |
| /famous-iq/russ-rapper | 1 | Celebrity (FamousIQ) |
| /famous-iq/ryan-gosling | 1 | Celebrity (FamousIQ) |
| /famous-iq/ryan-reynolds | 1 | Celebrity (FamousIQ) |
| /famous-iq/sabrina-carpenter | 1 | Celebrity (FamousIQ) |
| /famous-iq/sacha-baron-cohen | 1 | Celebrity (FamousIQ) |
| /famous-iq/sachin-tendulkar | 1 | Celebrity (FamousIQ) |
| /famous-iq/sam-bankman-fried | 1 | Celebrity (FamousIQ) |
| /famous-iq/sam-harris | 1 | Celebrity (FamousIQ) |
| /famous-iq/saquon-barkley | 1 | Celebrity (FamousIQ) |
| /famous-iq/satya-nadella | 1 | Celebrity (FamousIQ) |
| /famous-iq/scarlett-johansson | 1 | Celebrity (FamousIQ) |
| /famous-iq/scottie-scheffler | 1 | Celebrity (FamousIQ) |
| /famous-iq/selena-gomez | 1 | Celebrity (FamousIQ) |
| /famous-iq/sergey-brin | 1 | Celebrity (FamousIQ) |
| /famous-iq/seth-macfarlane | 1 | Celebrity (FamousIQ) |
| /famous-iq/shaquille-oneal | 1 | Celebrity (FamousIQ) |
| /famous-iq/sharon-stone | 1 | Celebrity (FamousIQ) |
| /famous-iq/socrates | 1 | Celebrity (FamousIQ) |
| /famous-iq/stephen-colbert | 1 | Celebrity (FamousIQ) |
| /famous-iq/stephen-fry | 1 | Celebrity (FamousIQ) |
| /famous-iq/stephen-merchant | 1 | Celebrity (FamousIQ) |
| /famous-iq/steve-martin | 1 | Celebrity (FamousIQ) |
| /famous-iq/steven-pinker | 1 | Celebrity (FamousIQ) |
| /famous-iq/sza | 1 | Celebrity (FamousIQ) |
| /famous-iq/terence-tao | 1 | Celebrity (FamousIQ) |
| /famous-iq/the-weeknd | 1 | Celebrity (FamousIQ) |
| /famous-iq/thomas-edison | 1 | Celebrity (FamousIQ) |
| /famous-iq/thomas-jefferson | 1 | Celebrity (FamousIQ) |
| /famous-iq/tiger-woods | 1 | Celebrity (FamousIQ) |
| /famous-iq/tim-cook | 1 | Celebrity (FamousIQ) |
| /famous-iq/timothee-chalamet | 1 | Celebrity (FamousIQ) |
| /famous-iq/tina-fey | 1 | Celebrity (FamousIQ) |
| /famous-iq/tom-brady | 1 | Celebrity (FamousIQ) |
| /famous-iq/tom-cruise | 1 | Celebrity (FamousIQ) |
| /famous-iq/tom-hanks | 1 | Celebrity (FamousIQ) |
| /famous-iq/tony-robbins | 1 | Celebrity (FamousIQ) |
| /famous-iq/travis-scott | 1 | Celebrity (FamousIQ) |
| /famous-iq/trevor-noah | 1 | Celebrity (FamousIQ) |
| /famous-iq/tyler-perry | 1 | Celebrity (FamousIQ) |
| /famous-iq/tyler-the-creator | 1 | Celebrity (FamousIQ) |
| /famous-iq/venus-williams | 1 | Celebrity (FamousIQ) |
| /famous-iq/victor-wembanyama | 1 | Celebrity (FamousIQ) |
| /famous-iq/vladimir-putin | 1 | Celebrity (FamousIQ) |
| /famous-iq/volodymyr-zelensky | 1 | Celebrity (FamousIQ) |
| /famous-iq/wayne-gretzky | 1 | Celebrity (FamousIQ) |
| /famous-iq/will-ferrell | 1 | Celebrity (FamousIQ) |
| /famous-iq/will-smith | 1 | Celebrity (FamousIQ) |
| /famous-iq/winston-churchill | 1 | Celebrity (FamousIQ) |
| /famous-iq/xi-jinping | 1 | Celebrity (FamousIQ) |
| /famous-iq/yo-yo-ma | 1 | Celebrity (FamousIQ) |
| /famous-iq/yoshua-bengio | 1 | Celebrity (FamousIQ) |
| /famous-iq/yuval-noah-harari | 1 | Celebrity (FamousIQ) |
| /famous-iq/zendaya | 1 | Celebrity (FamousIQ) |
| /iq-by-major/criminal-justice | 1 | Major (MajorIQ) |
| /iq-by-major/information-technology | 1 | Major (MajorIQ) |
| /iq-by-major/real-estate | 1 | Major (MajorIQ) |
| /iq-compare/left-brain-vs-right-brain | 1 | Compare (IQCompare) |
| /iq-compare/vegetarian-vs-meat-eater | 1 | Compare (IQCompare) |
| /iq-needed-for/air-traffic-controller | 1 | Career (CareerIQ) |
| /iq-needed-for/art-director | 1 | Career (CareerIQ) |
| /iq-needed-for/audiologist | 1 | Career (CareerIQ) |
| /iq-needed-for/blockchain-developer | 1 | Career (CareerIQ) |
| /iq-needed-for/carpenter | 1 | Career (CareerIQ) |
| /iq-needed-for/chiropractor | 1 | Career (CareerIQ) |
| /iq-needed-for/clinical-research-coordinator | 1 | Career (CareerIQ) |
| /iq-needed-for/cloud-architect | 1 | Career (CareerIQ) |
| /iq-needed-for/dermatologist | 1 | Career (CareerIQ) |
| /iq-needed-for/emt | 1 | Career (CareerIQ) |
| /iq-needed-for/epidemiologist | 1 | Career (CareerIQ) |
| /iq-needed-for/ethical-hacker | 1 | Career (CareerIQ) |
| /iq-needed-for/forensic-scientist | 1 | Career (CareerIQ) |
| /iq-needed-for/genetic-counselor | 1 | Career (CareerIQ) |
| /iq-needed-for/hvac-technician | 1 | Career (CareerIQ) |
| /iq-needed-for/insurance-actuary | 1 | Career (CareerIQ) |
| /iq-needed-for/interpreter-translator | 1 | Career (CareerIQ) |
| /iq-needed-for/librarian | 1 | Career (CareerIQ) |
| /iq-needed-for/management-consultant | 1 | Career (CareerIQ) |
| /iq-needed-for/marriage-family-therapist | 1 | Career (CareerIQ) |
| /iq-needed-for/master-electrician | 1 | Career (CareerIQ) |
| /iq-needed-for/mechanical-engineer | 1 | Career (CareerIQ) |
| /iq-needed-for/nuclear-engineer | 1 | Career (CareerIQ) |
| /iq-needed-for/nurse-anesthetist | 1 | Career (CareerIQ) |
| /iq-needed-for/orthodontist | 1 | Career (CareerIQ) |
| /iq-needed-for/physical-education-teacher | 1 | Career (CareerIQ) |
| /iq-needed-for/pilot | 1 | Career (CareerIQ) |
| /iq-needed-for/primary-care-physician | 1 | Career (CareerIQ) |
| /iq-needed-for/project-manager | 1 | Career (CareerIQ) |
| /iq-needed-for/real-estate-appraiser | 1 | Career (CareerIQ) |
| /iq-needed-for/registered-dietitian | 1 | Career (CareerIQ) |
| /iq-needed-for/retail-pharmacist | 1 | Career (CareerIQ) |
| /iq-needed-for/robotics-engineer | 1 | Career (CareerIQ) |
| /iq-needed-for/social-media-manager | 1 | Career (CareerIQ) |
| /iq-needed-for/software-engineer | 1 | Career (CareerIQ) |
| /iq-needed-for/speech-writer | 1 | Career (CareerIQ) |
| /iq-needed-for/statistician | 1 | Career (CareerIQ) |
| /iq-needed-for/urban-planner | 1 | Career (CareerIQ) |
| /iq-needed-for/ux-designer | 1 | Career (CareerIQ) |
| /iq-needed-for/veterinary-surgeon | 1 | Career (CareerIQ) |
| /iq-needed-for/video-game-developer | 1 | Career (CareerIQ) |
| /blog/can-you-raise-your-iq | 2 | Blog article |
| /blog/famous-iq-scores | 2 | Blog article |
| /blog/iq-and-age | 2 | Blog article |
| /blog/iq-and-income | 2 | Blog article |
| /blog/iq-testing-in-children | 2 | Blog article |
| /blog/multiple-intelligences-theory | 2 | Blog article |
| /blog/what-is-genius-iq | 2 | Blog article |
| /famous-iq/ashton-kutcher | 2 | Celebrity (FamousIQ) |
| /famous-iq/galileo-galilei | 2 | Celebrity (FamousIQ) |
| /famous-iq/william-shakespeare | 2 | Celebrity (FamousIQ) |
| /iq-by-city/austin | 2 | City (CityIQ) |
| /iq-by-city/buenos-aires | 2 | City (CityIQ) |
| /iq-by-city/los-angeles | 2 | City (CityIQ) |
| /iq-by-city/madrid | 2 | City (CityIQ) |
| /iq-by-city/melbourne | 2 | City (CityIQ) |
| /iq-by-city/montreal | 2 | City (CityIQ) |
| /iq-by-city/nairobi | 2 | City (CityIQ) |
| /iq-by-city/osaka | 2 | City (CityIQ) |
| /iq-by-city/rome | 2 | City (CityIQ) |
| /iq-by-city/sydney | 2 | City (CityIQ) |
| /iq-by-major/anthropology | 2 | Major (MajorIQ) |
| /iq-by-major/architecture | 2 | Major (MajorIQ) |
| /iq-by-major/biomedical-engineering | 2 | Major (MajorIQ) |
| /iq-by-major/education | 2 | Major (MajorIQ) |
| /iq-by-major/film-studies | 2 | Major (MajorIQ) |
| /iq-by-major/marketing | 2 | Major (MajorIQ) |
| /iq-by-major/mechanical-engineering | 2 | Major (MajorIQ) |
| /iq-by-major/nursing | 2 | Major (MajorIQ) |
| /iq-by-major/social-work | 2 | Major (MajorIQ) |
| /iq-compare/india-vs-china | 2 | Compare (IQCompare) |
| /iq-compare/only-child-vs-siblings | 2 | Compare (IQCompare) |
| /iq-compare/private-school-vs-public | 2 | Compare (IQCompare) |
| /iq-needed-for/airline-pilot | 2 | Career (CareerIQ) |
| /iq-needed-for/athletic-trainer | 2 | Career (CareerIQ) |
| /iq-needed-for/clinical-pharmacist | 2 | Career (CareerIQ) |
| /iq-needed-for/clinical-psychologist | 2 | Career (CareerIQ) |
| /iq-needed-for/database-administrator | 2 | Career (CareerIQ) |
| /iq-needed-for/dental-hygienist | 2 | Career (CareerIQ) |
| /iq-needed-for/film-director | 2 | Career (CareerIQ) |
| /iq-needed-for/landscape-architect | 2 | Career (CareerIQ) |
| /iq-needed-for/mechanic | 2 | Career (CareerIQ) |
| /iq-needed-for/occupational-therapist | 2 | Career (CareerIQ) |
| /iq-needed-for/pharmacologist | 2 | Career (CareerIQ) |
| /iq-needed-for/psychiatric-nurse | 2 | Career (CareerIQ) |
| /iq-needed-for/speech-language-pathologist | 2 | Career (CareerIQ) |
| /iq-needed-for/veterinary-technician | 2 | Career (CareerIQ) |
| /iq-of-presidents | 2 | Core/static page |
| /is-192-iq-good | 2 | Score (IsXIQGood) |
| /is-193-iq-good | 2 | Score (IsXIQGood) |
| /is-194-iq-good | 2 | Score (IsXIQGood) |
| /is-196-iq-good | 2 | Score (IsXIQGood) |
| /is-197-iq-good | 2 | Score (IsXIQGood) |
| /is-198-iq-good | 2 | Score (IsXIQGood) |
| /is-199-iq-good | 2 | Score (IsXIQGood) |

## Thin pages (<600 words)

| Route | Words | Template |
|---|---|---|
| /contact | 373 | Core/static page |
| /methodology | 551 | Core/static page |
| /average-iq-by-state/indiana | 562 | State (StateIQ) |
| /average-iq-by-state/delaware | 564 | State (StateIQ) |
| /iq-needed-for/audiologist | 566 | Career (CareerIQ) |
| /average-iq-by-state/north-dakota | 567 | State (StateIQ) |
| /average-iq-by-state/idaho | 568 | State (StateIQ) |
| /average-iq-by-state/pennsylvania | 568 | State (StateIQ) |
| /iq-needed-for/neurosurgeon | 569 | Career (CareerIQ) |
| /average-iq-by-state/oregon | 571 | State (StateIQ) |
| /average-iq-by-state/wisconsin | 572 | State (StateIQ) |
| /iq-needed-for/hvac-technician | 572 | Career (CareerIQ) |
| /iq-needed-for/orthodontist | 572 | Career (CareerIQ) |
| /average-iq-by-state/colorado | 573 | State (StateIQ) |
| /average-iq-by-state/kansas | 573 | State (StateIQ) |
| /average-iq-by-state/new-hampshire | 573 | State (StateIQ) |
| /average-iq-by-state/alaska | 575 | State (StateIQ) |
| /average-iq-by-state/montana | 576 | State (StateIQ) |
| /iq-needed-for/psychiatric-nurse | 576 | Career (CareerIQ) |
| /average-iq-by-state/connecticut | 577 | State (StateIQ) |
| /average-iq-by-state/minnesota | 578 | State (StateIQ) |
| /iq-needed-for/dermatologist | 578 | Career (CareerIQ) |
| /average-iq-by-state/maine | 580 | State (StateIQ) |
| /average-iq-by-state/wyoming | 580 | State (StateIQ) |
| /average-iq-by-state/missouri | 581 | State (StateIQ) |
| /average-iq-by-state/nebraska | 581 | State (StateIQ) |
| /average-iq-by-state/ohio | 582 | State (StateIQ) |
| /average-iq-by-state/tennessee | 582 | State (StateIQ) |
| /iq-needed-for/patent-attorney | 582 | Career (CareerIQ) |
| /iq-needed-for/pharmacologist | 582 | Career (CareerIQ) |
| /average-iq-by-state/illinois | 583 | State (StateIQ) |
| /average-iq-by-state/iowa | 583 | State (StateIQ) |
| /iq-needed-for/epidemiologist | 583 | Career (CareerIQ) |
| /iq-needed-for/urban-planner | 583 | Career (CareerIQ) |
| /average-iq-by-state/washington | 584 | State (StateIQ) |
| /average-iq-by-state/hawaii | 585 | State (StateIQ) |
| /average-iq-by-state/south-carolina | 585 | State (StateIQ) |
| /iq-needed-for/genetic-counselor | 585 | Career (CareerIQ) |
| /iq-needed-for/nurse-anesthetist | 585 | Career (CareerIQ) |
| /average-iq-by-state/rhode-island | 586 | State (StateIQ) |
| /average-iq-by-state/vermont | 586 | State (StateIQ) |
| /iq-needed-for/clinical-research-coordinator | 586 | Career (CareerIQ) |
| /iq-needed-for/biomedical-engineer | 587 | Career (CareerIQ) |
| /iq-needed-for/landscape-architect | 587 | Career (CareerIQ) |
| /average-iq-by-state/maryland | 588 | State (StateIQ) |
| /average-iq-by-state/new-jersey | 588 | State (StateIQ) |
| /iq-needed-for/interpreter-translator | 588 | Career (CareerIQ) |
| /iq-needed-for/athletic-trainer | 589 | Career (CareerIQ) |
| /iq-needed-for/clinical-psychologist | 589 | Career (CareerIQ) |
| /iq-needed-for/nuclear-engineer | 590 | Career (CareerIQ) |
| /iq-needed-for/blockchain-developer | 591 | Career (CareerIQ) |
| /average-iq-by-state/arkansas | 592 | State (StateIQ) |
| /average-iq-by-state/oklahoma | 592 | State (StateIQ) |
| /iq-needed-for/mechanical-engineer | 592 | Career (CareerIQ) |
| /iq-needed-for/robotics-engineer | 593 | Career (CareerIQ) |
| /iq-needed-for/veterinary-surgeon | 593 | Career (CareerIQ) |
| /iq-needed-for/veterinary-technician | 593 | Career (CareerIQ) |
| /average-iq-by-state/massachusetts | 595 | State (StateIQ) |
| /average-iq-by-state/arizona | 596 | State (StateIQ) |
| /average-iq-by-state/michigan | 597 | State (StateIQ) |
| /average-iq-by-state/new-york | 597 | State (StateIQ) |
| /iq-needed-for/database-administrator | 598 | Career (CareerIQ) |
| /average-iq-by-state/south-dakota | 599 | State (StateIQ) |
| /average-iq-by-state/texas | 599 | State (StateIQ) |
| /iq-needed-for/speech-writer | 599 | Career (CareerIQ) |

## Titles over 60 characters

| Route | Length | Title |
|---|---|---|
| /iq-and/adhd-hyperactive | 99 | ADHD Hyperactive-Impulsive Type and IQ: Impulsivity&#x27;s Effect on Cognitive Testing \| MyIQScores |
| /iq-and/fragile-x | 98 | Fragile X Syndrome and IQ: The Most Common Inherited Cause of Intellectual Disability \| MyIQScores |
| /iq-needed-for/clinical-research-coordinator | 94 | IQ Needed to Be a Clinical Research Coordinator: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/marriage-family-therapist | 94 | IQ Needed to Be a Marriage and Family Therapist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/emt | 93 | IQ Needed to Be a Emergency Medical Technician: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/speech-language-pathologist | 92 | IQ Needed to Be a Speech-Language Pathologist: Average Score &amp; Requirements \| MyIQScores |
| /blog/multiple-intelligences-theory | 91 | Multiple Intelligences Theory: What Howard Gardner Said vs. What Science Shows \| MyIQScores |
| /iq-and/fetal-alcohol-syndrome | 91 | Fetal Alcohol Syndrome and IQ: Prenatal Alcohol Exposure and Brain Development \| MyIQScores |
| /iq-and/social-anxiety | 91 | Social Anxiety Disorder and IQ: How Fear of Judgment Affects Cognitive Testing \| MyIQScores |
| /iq-needed-for/physical-education-teacher | 91 | IQ Needed to Be a Physical Education Teacher: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/primary-care-physician | 89 | IQ Needed to Be a Physician (Primary Care): Average Score &amp; Requirements \| MyIQScores |
| /iq-and/eating-disorder | 88 | Eating Disorders and IQ: How Anorexia and Bulimia Affect Cognitive Function \| MyIQScores |
| /iq-needed-for/management-consultant | 88 | IQ Needed to Be a Consultant (Management): Average Score &amp; Requirements \| MyIQScores |
| /iq-and/borderline-personality | 87 | BPD and IQ: How Borderline Personality Disorder Affects Cognitive Function \| MyIQScores |
| /iq-and/cerebral-palsy | 87 | Cerebral Palsy and IQ: Understanding Cognitive Ability Across the Spectrum \| MyIQScores |
| /iq-needed-for/air-traffic-controller | 87 | IQ Needed to Be a Air Traffic Controller: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/database-administrator | 87 | IQ Needed to Be a Database Administrator: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/interpreter-translator | 87 | IQ Needed to Be a Interpreter/Translator: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/occupational-therapist | 87 | IQ Needed to Be a Occupational Therapist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/professional-athlete | 87 | IQ Needed to Be a Athlete (Professional): Average Score &amp; Requirements \| MyIQScores |
| /types-of-iq-tests | 87 | Types of IQ Tests: WAIS, Stanford-Binet, Raven&#x27;s &amp; More Explained \| MyIQScores |
| /iq-needed-for/clinical-pharmacist | 86 | IQ Needed to Be a Pharmacist (Clinical): Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/clinical-psychologist | 86 | IQ Needed to Be a Clinical Psychologist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/cybersecurity-analyst | 86 | IQ Needed to Be a Cybersecurity Analyst: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/pharmacy-technician | 86 | IQ Needed to Be a Pharmacist Technician: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/real-estate-appraiser | 86 | IQ Needed to Be a Real Estate Appraiser: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/veterinary-technician | 86 | IQ Needed to Be a Veterinary Technician: Average Score &amp; Requirements \| MyIQScores |
| /blog/nutrition-and-iq | 85 | Nutrition and IQ: How Diet Affects Brain Power and Cognitive Performance \| MyIQScores |
| /iq-by-city/san-francisco | 85 | Average IQ in San Francisco (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/blockchain-developer | 85 | IQ Needed to Be a Blockchain Developer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/master-electrician | 85 | IQ Needed to Be a Electrician (Master): Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/registered-dietitian | 85 | IQ Needed to Be a Registered Dietitian: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/social-media-manager | 85 | IQ Needed to Be a Social Media Manager: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/video-game-developer | 85 | IQ Needed to Be a Video Game Developer: Average Score &amp; Requirements \| MyIQScores |
| /iq-and/ocd | 84 | OCD and IQ: How Obsessive-Compulsive Disorder Affects Cognitive Testing \| MyIQScores |
| /iq-by-city/dubai | 84 | Average IQ in Dubai (United Arab Emirates): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/biomedical-engineer | 84 | IQ Needed to Be a Biomedical Engineer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/landscape-architect | 84 | IQ Needed to Be a Landscape Architect: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/mechanical-engineer | 84 | IQ Needed to Be a Mechanical Engineer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/physician-assistant | 84 | IQ Needed to Be a Physician Assistant: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/retail-pharmacist | 84 | IQ Needed to Be a Pharmacist (Retail): Average Score &amp; Requirements \| MyIQScores |
| /blog/working-memory-and-iq | 83 | Working Memory and IQ: The Hidden Link Between Memory and Intelligence \| MyIQScores |
| /famous-iq/dua-lipa | 83 | Dua Lipa&#x27;s IQ: Multilingual Pop Star&#x27;s Intelligence Analyzed \| MyIQScores |
| /famous-iq/dwayne-johnson | 83 | Dwayne &#x27;The Rock&#x27; Johnson&#x27;s IQ: 105–118 — What It Means \| MyIQScores |
| /iq-by-city/johannesburg | 83 | Average IQ in Johannesburg (South Africa): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/los-angeles | 83 | Average IQ in Los Angeles (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/forensic-scientist | 83 | IQ Needed to Be a Forensic Scientist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/nurse-practitioner | 83 | IQ Needed to Be a Nurse Practitioner: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/physical-therapist | 83 | IQ Needed to Be a Physical Therapist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/software-developer | 83 | IQ Needed to Be a Software Developer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/veterinary-surgeon | 83 | IQ Needed to Be a Veterinary Surgeon: Average Score &amp; Requirements \| MyIQScores |
| /iq-and/autism-level-2 | 82 | Autism Level 2 and IQ: Cognitive Profiles With Moderate Support Needs \| MyIQScores |
| /iq-and/panic-disorder | 82 | Panic Disorder and IQ: How Panic Attacks Affect Cognitive Performance \| MyIQScores |
| /iq-by-city/singapore-city | 82 | Average IQ in Singapore City (Singapore): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/dental-hygienist | 82 | IQ Needed to Be a Dentist Hygienist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/financial-analyst | 82 | IQ Needed to Be a Financial Analyst: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/genetic-counselor | 82 | IQ Needed to Be a Genetic Counselor: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/insurance-actuary | 82 | IQ Needed to Be a Insurance Actuary: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/investment-banker | 82 | IQ Needed to Be a Investment Banker: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/marketing-manager | 82 | IQ Needed to Be a Marketing Manager: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/nurse-anesthetist | 82 | IQ Needed to Be a Nurse Anesthetist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/psychiatric-nurse | 82 | IQ Needed to Be a Psychiatric Nurse: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/real-estate-agent | 82 | IQ Needed to Be a Real Estate Agent: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/robotics-engineer | 82 | IQ Needed to Be a Robotics Engineer: Average Score &amp; Requirements \| MyIQScores |
| /blog/flynn-effect | 81 | The Flynn Effect: Why Average IQ Scores Have Been Rising for Decades \| MyIQScores |
| /famous-iq/kai-cenat | 81 | Kai Cenat&#x27;s IQ: Twitch&#x27;s Most Subscribed Streamer Analyzed \| MyIQScores |
| /iq-and/hypothyroidism | 81 | Hypothyroidism and IQ: How Thyroid Deficiency Affects Brain Function \| MyIQScores |
| /iq-compare/meditation-vs-no-meditation | 81 | Meditators vs Non-Meditators IQ: Does Meditation Boost Intelligence? \| MyIQScores |
| /iq-needed-for/anesthesiologist | 81 | IQ Needed to Be a Anesthesiologist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/athletic-trainer | 81 | IQ Needed to Be a Athletic Trainer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/dental-assistant | 81 | IQ Needed to Be a Dental Assistant: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/graphic-designer | 81 | IQ Needed to Be a Graphic Designer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/nuclear-engineer | 81 | IQ Needed to Be a Nuclear Engineer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/personal-trainer | 81 | IQ Needed to Be a Personal Trainer: Average Score &amp; Requirements \| MyIQScores |
| /tests/pattern-recognition | 81 | Pattern Recognition Test: What It Measures &amp; How to Score Higher \| MyIQScores |
| /tests/spatial-reasoning | 81 | Spatial Reasoning Test: What It Measures &amp; Which Careers Need It \| MyIQScores |
| /blog/exercise-and-iq | 80 | Exercise and IQ: How Physical Activity Boosts Cognitive Performance \| MyIQScores |
| /good-iq-score | 80 | What Is a Good IQ Score? Ranges, Percentiles &amp; What Yours Means \| MyIQScores |
| /iq-by-city/buenos-aires | 80 | Average IQ in Buenos Aires (Argentina): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/new-york | 80 | Average IQ in New York (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/cloud-architect | 80 | IQ Needed to Be a Cloud Architect: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/content-creator | 80 | IQ Needed to Be a Content Creator: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/hvac-technician | 80 | IQ Needed to Be a HVAC Technician: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/patent-attorney | 80 | IQ Needed to Be a Patent Attorney: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/project-manager | 80 | IQ Needed to Be a Project Manager: Average Score &amp; Requirements \| MyIQScores |
| /iq-and/tourette-syndrome | 79 | Tourette Syndrome and IQ: Tics, Neurodevelopment, and Intelligence \| MyIQScores |
| /iq-by-city/amsterdam | 79 | Average IQ in Amsterdam (Netherlands): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/chicago | 79 | Average IQ in Chicago (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/kuala-lumpur | 79 | Average IQ in Kuala Lumpur (Malaysia): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/london | 79 | Average IQ in London (United Kingdom): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/prague | 79 | Average IQ in Prague (Czech Republic): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/seattle | 79 | Average IQ in Seattle (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/data-scientist | 79 | IQ Needed to Be a Data Scientist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/epidemiologist | 79 | IQ Needed to Be a Epidemiologist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/ethical-hacker | 79 | IQ Needed to Be a Ethical Hacker: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/pharmacologist | 79 | IQ Needed to Be a Pharmacologist: Average Score &amp; Requirements \| MyIQScores |
| /famous-iq/joe-biden | 78 | Joe Biden&#x27;s IQ: 46th President&#x27;s Estimated Intelligence \| MyIQScores |
| /iq-and/lead-exposure | 78 | Lead Exposure and IQ: How Environmental Lead Reduces Intelligence \| MyIQScores |
| /iq-and/traumatic-brain-injury | 78 | Traumatic Brain Injury and IQ: How TBI Affects Cognitive Function \| MyIQScores |
| /iq-by-city/austin | 78 | Average IQ in Austin (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/boston | 78 | Average IQ in Boston (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-myths/iq-and-mental-health | 78 | Is There a Link Between IQ and Mental Health? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/multilingualism-increases-iq | 78 | Does Speaking Multiple Languages Increase IQ? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/dermatologist | 78 | IQ Needed to Be a Dermatologist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/film-director | 78 | IQ Needed to Be a Film Director: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/mathematician | 78 | IQ Needed to Be a Mathematician: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/social-worker | 78 | IQ Needed to Be a Social Worker: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/speech-writer | 78 | IQ Needed to Be a Speech Writer: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/urban-planner | 78 | IQ Needed to Be a Urban Planner: Average Score &amp; Requirements \| MyIQScores |
| /low-iq | 78 | What Is a Low IQ? Ranges, Signs &amp; What It Means for Your Life \| MyIQScores |
| /blog/fluid-vs-crystallized-intelligence | 77 | Fluid vs. Crystallized Intelligence: What&#x27;s the Difference? \| MyIQScores |
| /blog/iq-genetics-nature-vs-nurture | 77 | IQ and Genetics: Nature vs. Nurture — What Science Actually Says \| MyIQScores |
| /iq-and/epilepsy | 77 | Epilepsy and IQ: How Seizure Disorders Affect Cognitive Function \| MyIQScores |
| /iq-and/high-iq-problems | 77 | The Dark Side of High IQ: Challenges of Exceptional Intelligence \| MyIQScores |
| /iq-and/intellectual-disability | 77 | Intellectual Disability and IQ: Diagnosis, Support, and Outcomes \| MyIQScores |
| /iq-by-city/melbourne | 77 | Average IQ in Melbourne (Australia): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/miami | 77 | Average IQ in Miami (United States): Estimates &amp; Key Factors \| MyIQScores |
| /iq-myths/multiple-types-of-intelligence | 77 | Can You Have Multiple Types of Intelligence? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/art-director | 77 | IQ Needed to Be a Art Director: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/chiropractor | 77 | IQ Needed to Be a Chiropractor: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/neurosurgeon | 77 | IQ Needed to Be a Neurosurgeon: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/orthodontist | 77 | IQ Needed to Be a Orthodontist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/statistician | 77 | IQ Needed to Be a Statistician: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/truck-driver | 77 | IQ Needed to Be a Truck Driver: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/veterinarian | 77 | IQ Needed to Be a Veterinarian: Average Score &amp; Requirements \| MyIQScores |
| /blog/iq-testing-in-children | 76 | IQ Testing in Children: What Parents and Educators Need to Know \| MyIQScores |
| /famous-iq/kamala-harris | 76 | Kamala Harris&#x27;s IQ: Prosecutor, VP, Estimated Intelligence \| MyIQScores |
| /iq-and/dyscalculia | 76 | Dyscalculia and IQ: Math Learning Disabilities and Intelligence \| MyIQScores |
| /iq-by-city/copenhagen | 76 | Average IQ in Copenhagen (Denmark): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/mexico-city | 76 | Average IQ in Mexico City (Mexico): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/zurich | 76 | Average IQ in Zurich (Switzerland): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/audiologist | 76 | IQ Needed to Be a Audiologist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/firefighter | 76 | IQ Needed to Be a Firefighter: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/optometrist | 76 | IQ Needed to Be a Optometrist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/radiologist | 76 | IQ Needed to Be a Radiologist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/ux-designer | 76 | IQ Needed to Be a UX Designer: Average Score &amp; Requirements \| MyIQScores |
| /mensa-iq-test | 76 | Mensa IQ Test: Score Required, How to Join &amp; What to Expect \| MyIQScores |
| /tests/numerical-reasoning | 76 | Numerical Reasoning Test: What It Measures &amp; How to Prepare \| MyIQScores |
| /blog/iq-and-mental-health | 75 | IQ and Mental Health: What Research Shows About the Connection \| MyIQScores |
| /blog/iq-and-workplace | 75 | IQ in the Workplace: What Employers and Employees Need to Know \| MyIQScores |
| /blog/poverty-and-iq | 75 | Poverty Doesn&#x27;t Just Correlate With Low IQ — It Causes It \| MyIQScores |
| /famous-iq/ryan-reynolds | 75 | Ryan Reynolds&#x27;s IQ: Actor, Entrepreneur, Marketing Genius \| MyIQScores |
| /iq-and/autism-level-1 | 75 | Autism Level 1 and IQ: Intelligence in High-Functioning Autism \| MyIQScores |
| /iq-and/depression | 75 | Depression and IQ: How Mental Health Affects Cognitive Testing \| MyIQScores |
| /iq-and/narcissistic-personality | 75 | NPD and IQ: Narcissistic Personality Disorder and Intelligence \| MyIQScores |
| /iq-by-city/jakarta | 75 | Average IQ in Jakarta (Indonesia): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/seoul | 75 | Average IQ in Seoul (South Korea): Estimates &amp; Key Factors \| MyIQScores |
| /iq-compare/athletes-vs-non-athletes | 75 | Athletes vs Non-Athletes IQ: Does Exercise Boost Intelligence? \| MyIQScores |
| /iq-compare/morning-exercise-vs-sedentary | 75 | Regular Exercisers vs Sedentary People IQ: What Research Shows \| MyIQScores |
| /iq-myths/mozart-effect-iq | 75 | Does Listening to Mozart Make You Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/screen-time-children-iq | 75 | Does Screen Time Lower Children&#x27;s IQ? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/vocabulary-and-iq | 75 | Does Having a Big Vocabulary Mean High IQ? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/journalist | 75 | IQ Needed to Be a Journalist: Average Score &amp; Requirements \| MyIQScores |
| /iq-vs-eq | 75 | IQ vs EQ: What&#x27;s the Difference &amp; Which Matters More? \| MyIQScores |
| /blog/iq-and-creativity | 74 | IQ and Creativity: Are More Intelligent People More Creative? \| MyIQScores |
| /famous-iq/sabrina-carpenter | 74 | Sabrina Carpenter&#x27;s IQ: Songwriter and Pop Star Analyzed \| MyIQScores |
| /iq-and/sleep-apnea | 74 | Sleep Apnea and IQ: How Sleep Disruption Affects Intelligence \| MyIQScores |
| /iq-by-age/older-adults | 74 | Average IQ for Older Adults (Ages 50–65): What&#x27;s Normal? \| MyIQScores |
| /iq-by-age/young-adults | 74 | Average IQ for Young Adults (Ages 18–25): What&#x27;s Normal? \| MyIQScores |
| /iq-by-city/bangkok | 74 | Average IQ in Bangkok (Thailand): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/brussels | 74 | Average IQ in Brussels (Belgium): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/budapest | 74 | Average IQ in Budapest (Hungary): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/sao-paulo | 74 | Average IQ in São Paulo (Brazil): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/stockholm | 74 | Average IQ in Stockholm (Sweden): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/sydney | 74 | Average IQ in Sydney (Australia): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/vancouver | 74 | Average IQ in Vancouver (Canada): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/architect | 74 | IQ Needed to Be a Architect: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/carpenter | 74 | IQ Needed to Be a Carpenter: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/economist | 74 | IQ Needed to Be a Economist: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/librarian | 74 | IQ Needed to Be a Librarian: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/paramedic | 74 | IQ Needed to Be a Paramedic: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/professor | 74 | IQ Needed to Be a Professor: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/scientist | 74 | IQ Needed to Be a Scientist: Average Score &amp; Requirements \| MyIQScores |
| /iq-score-ranges | 74 | IQ Score Ranges: What Every Score Means (Chart + Percentiles) \| MyIQScores |
| /practice-iq-test | 74 | Practice IQ Test: Sample Questions, Tips &amp; How to Improve \| MyIQScores |
| /tests/logical-reasoning | 74 | Logical Reasoning Test: What It Measures &amp; How to Improve \| MyIQScores |
| /famous-iq/elon-musk-children-iq | 73 | Elon Musk&#x27;s Children&#x27;s IQ: 140–160 — What It Means \| MyIQScores |
| /famous-iq/gottfried-leibniz | 73 | Gottfried Wilhelm Leibniz&#x27;s IQ: 182–205 — What It Means \| MyIQScores |
| /famous-iq/ishowspeed | 73 | IShowSpeed&#x27;s IQ: The World&#x27;s Most Watched Streamer \| MyIQScores |
| /iq-and/anxiety | 73 | Anxiety and IQ: How Anxiety Affects Intelligence Test Scores \| MyIQScores |
| /iq-and/chronic-fatigue | 73 | Chronic Fatigue Syndrome and IQ: Cognitive Effects of CFS/ME \| MyIQScores |
| /iq-by-city/bangalore | 73 | Average IQ in Bangalore (India): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/hong-kong-city | 73 | Average IQ in Hong Kong (China): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/istanbul | 73 | Average IQ in Istanbul (Turkey): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/montreal | 73 | Average IQ in Montreal (Canada): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/tel-aviv | 73 | Average IQ in Tel Aviv (Israel): Estimates &amp; Key Factors \| MyIQScores |
| /iq-myths/fasting-and-iq | 73 | Does Fasting Improve Cognitive Function? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/mechanic | 73 | IQ Needed to Be a Mechanic: Average Score &amp; Requirements \| MyIQScores |
| /tests/verbal-reasoning | 73 | Verbal Reasoning Test: What It Measures &amp; How to Improve \| MyIQScores |
| /average-iq-us | 72 | Average IQ in the United States: What Is America&#x27;s IQ? \| MyIQScores |
| /famous-iq/alexandria-ocasio-cortez | 72 | Alexandria Ocasio-Cortez&#x27;s IQ: 120–130 — What It Means \| MyIQScores |
| /famous-iq/drake | 72 | Drake&#x27;s IQ: The Mind Behind Music&#x27;s Biggest Brand \| MyIQScores |
| /iq-and/dementia | 72 | Dementia and IQ: How Cognitive Decline Affects Intelligence \| MyIQScores |
| /iq-and/williams-syndrome | 72 | Williams Syndrome and IQ: The Fascinating Cognitive Profile \| MyIQScores |
| /iq-by-city/berlin | 72 | Average IQ in Berlin (Germany): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/shanghai | 72 | Average IQ in Shanghai (China): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/shenzhen | 72 | Average IQ in Shenzhen (China): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/toronto | 72 | Average IQ in Toronto (Canada): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/vienna | 72 | Average IQ in Vienna (Austria): Estimates &amp; Key Factors \| MyIQScores |
| /iq-compare/private-school-vs-public | 72 | Private School vs Public School IQ: What the Research Shows \| MyIQScores |
| /iq-myths/introverts-vs-extroverts-iq | 72 | Are Introverts Smarter Than Extroverts? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/iq-changes-throughout-day | 72 | Does Your IQ Change Throughout the Day? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/podcasts-and-iq | 72 | Does Listening to Podcasts Increase IQ? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/actuary | 72 | IQ Needed to Be a Actuary: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/plumber | 72 | IQ Needed to Be a Plumber: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/surgeon | 72 | IQ Needed to Be a Surgeon: Average Score &amp; Requirements \| MyIQScores |
| /average-iq/dominican-republic | 71 | Average IQ in Dominican Republic: 82, Ranked #117 Globally \| MyIQScores |
| /blog/iq-and-leadership | 71 | IQ and Leadership: Does Intelligence Make a Better Leader? \| MyIQScores |
| /famous-iq/sam-altman | 71 | Sam Altman&#x27;s IQ: OpenAI&#x27;s Visionary CEO Analyzed \| MyIQScores |
| /famous-iq/wolfgang-mozart | 71 | Wolfgang Amadeus Mozart&#x27;s IQ: 150–170 — What It Means \| MyIQScores |
| /iq-by-age/teenagers | 71 | Average IQ for Teenagers (Ages 13–17): What&#x27;s Normal? \| MyIQScores |
| /iq-by-city/beijing | 71 | Average IQ in Beijing (China): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/nairobi | 71 | Average IQ in Nairobi (Kenya): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/taipei | 71 | Average IQ in Taipei (Taiwan): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/warsaw | 71 | Average IQ in Warsaw (Poland): Estimates &amp; Key Factors \| MyIQScores |
| /iq-needed-for/welder | 71 | IQ Needed to Be a Welder: Average Score &amp; Requirements \| MyIQScores |
| /average-iq/ivory-coast | 70 | Average IQ in Côte d&#x27;Ivoire: 71, Ranked #85 Globally \| MyIQScores |
| /blog/gifted-children-iq | 70 | Gifted Children and IQ: Signs, Testing, and What It Means \| MyIQScores |
| /blog/sleep-and-iq | 70 | Sleep and IQ: How Rest Affects Your Cognitive Performance \| MyIQScores |
| /famous-iq/harry-styles | 70 | Harry Styles&#x27;s IQ: From One Direction to Solo Genius \| MyIQScores |
| /iq-by-city/madrid | 70 | Average IQ in Madrid (Spain): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/mumbai | 70 | Average IQ in Mumbai (India): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/paris | 70 | Average IQ in Paris (France): Estimates &amp; Key Factors \| MyIQScores |
| /iq-compare/only-child-vs-siblings | 70 | Only Child vs Siblings IQ: Birth Order &amp; Intelligence \| MyIQScores |
| /iq-myths/handwriting-and-intelligence | 70 | Does Handwriting Affect Intelligence? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/iq-supplements-nootropics | 70 | Can You Increase IQ with Supplements? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/judge | 70 | IQ Needed to Be a Judge: Average Score &amp; Requirements \| MyIQScores |
| /iq-needed-for/pilot | 70 | IQ Needed to Be a Pilot: Average Score &amp; Requirements \| MyIQScores |
| /act-to-iq | 69 | ACT Score to IQ Score: Conversion Chart &amp; Calculator \| MyIQScores |
| /average-iq/papua-new-guinea | 69 | Average IQ in Papua New Guinea: 83, Ranked #111 Globally \| MyIQScores |
| /blog/what-is-iq-score | 69 | What Is an IQ Score? The Complete Scientific Explanation \| MyIQScores |
| /famous-iq/donald-trump | 69 | Donald Trump&#x27;s IQ: Claims, Estimates &amp; Analysis \| MyIQScores |
| /famous-iq/giannis-antetokounmpo | 69 | Giannis Antetokounmpo&#x27;s IQ: 105–115 — What It Means \| MyIQScores |
| /famous-iq/michael-jackson | 69 | Michael Jackson&#x27;s IQ: The King of Pop&#x27;s Genius \| MyIQScores |
| /famous-iq/peso-pluma | 69 | Peso Pluma&#x27;s IQ: Corridos Tumbados Pioneer Analyzed \| MyIQScores |
| /famous-iq/the-weeknd | 69 | The Weeknd&#x27;s IQ: Self-Taught Music Genius Breakdown \| MyIQScores |
| /gre-to-iq | 69 | GRE Score to IQ Score: Conversion Chart &amp; Calculator \| MyIQScores |
| /highest-iq-ever | 69 | Highest IQ Ever Recorded: The Smartest People in History \| MyIQScores |
| /iq-by-age/children | 69 | Average IQ for Children (Ages 6–12): What&#x27;s Normal? \| MyIQScores |
| /iq-by-city/cairo | 69 | Average IQ in Cairo (Egypt): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/delhi | 69 | Average IQ in Delhi (India): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/osaka | 69 | Average IQ in Osaka (Japan): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/oslo | 69 | Average IQ in Oslo (Norway): Estimates &amp; Key Factors \| MyIQScores |
| /iq-by-city/tokyo | 69 | Average IQ in Tokyo (Japan): Estimates &amp; Key Factors \| MyIQScores |
| /iq-myths/bilingual-iq | 69 | Do Bilingual People Have Higher IQs? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/chef | 69 | IQ Needed to Be a Chef: Average Score &amp; Requirements \| MyIQScores |
| /blog/dunning-kruger-effect | 68 | The Dunning-Kruger Effect Is More Nuanced Than the Meme \| MyIQScores |
| /famous-iq/carl-gauss | 68 | Carl Friedrich Gauss&#x27;s IQ: 180–190 — What It Means \| MyIQScores |
| /famous-iq/chappell-roan | 68 | Chappell Roan&#x27;s IQ: The Rise of a Midwest Princess \| MyIQScores |
| /famous-iq/tiger-woods | 68 | Tiger Woods&#x27; IQ: Golf Genius on and off the Course \| MyIQScores |
| /iq-by-city | 68 | Average IQ by City: World&#x27;s Smartest Cities Ranked \| MyIQScores |
| /iq-by-city/rome | 68 | Average IQ in Rome (Italy): Estimates &amp; Key Factors \| MyIQScores |
| /iq-compare/college-vs-no-college | 68 | College Degree vs No Degree IQ: What the Research Shows \| MyIQScores |
| /iq-compare/phd-vs-masters | 68 | PhD vs Master&#x27;s Degree IQ: Average Scores Compared \| MyIQScores |
| /iq-myths/cold-weather-and-iq | 68 | Does Cold Weather Make You Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-percentile-chart | 68 | IQ Percentile Chart: Find Your Exact Percentile Ranking \| MyIQScores |
| /what-is-iq | 68 | What Is IQ? The Complete Guide to Intelligence Quotient \| MyIQScores |
| / | 67 | Free IQ Test — 30 Questions, Instant Score, No Paywall \| MyIQScores |
| /average-iq/united-kingdom | 67 | Average IQ in United Kingdom: 100, Ranked #16 Globally \| MyIQScores |
| /blog/iq-and-age | 67 | What Actually Happens to Your IQ Between Age 20 and 70 \| MyIQScores |
| /famous-iq/jensen-huang | 67 | Jensen Huang&#x27;s IQ: The Mind That Built the AI Era \| MyIQScores |
| /famous-iq/jungkook-bts | 67 | Jung Kook&#x27;s IQ: BTS&#x27;s Golden Artist Analyzed \| MyIQScores |
| /famous-iq/neil-degrasse-tyson | 67 | Neil deGrasse Tyson&#x27;s IQ: 125–135 — What It Means \| MyIQScores |
| /famous-iq/rihanna | 67 | Rihanna&#x27;s IQ: Business Genius Behind Fenty Beauty \| MyIQScores |
| /famous-iq/ruth-bader-ginsburg | 67 | Ruth Bader Ginsburg&#x27;s IQ: 135–150 — What It Means \| MyIQScores |
| /genius-iq | 67 | Genius IQ: What Score Makes You a Genius? (Full Guide) \| MyIQScores |
| /iq-and/down-syndrome | 67 | Down Syndrome and IQ: Understanding Cognitive Profiles \| MyIQScores |
| /iq-by-age/seniors | 67 | Average IQ for Seniors (Ages 65+): What&#x27;s Normal? \| MyIQScores |
| /iq-compare | 67 | IQ Comparison Charts: Men vs Women, Countries, Careers \| MyIQScores |
| /iq-myths/class-size-and-iq | 67 | Does Class Size Affect Student IQ? \| IQ Myths Debunked \| MyIQScores |
| /iq-needed-for/airline-pilot | 67 | IQ Needed to Be a Pilot: Minimum Score &amp; What Airlines Look For |
| /average-iq/czech-republic | 66 | Average IQ in Czech Republic: 99, Ranked #29 Globally \| MyIQScores |
| /blog/can-you-raise-your-iq | 66 | Can You Actually Raise Your IQ? What the Science Says \| MyIQScores |
| /blog/history-of-iq-testing | 66 | A Complete History of IQ Testing: From Binet to Today \| MyIQScores |
| /famous-iq | 66 | Famous People IQ Scores: Complete List with Estimates \| MyIQScores |
| /famous-iq/christopher-langan | 66 | Christopher Langan&#x27;s IQ: 195–210 — What It Means \| MyIQScores |
| /famous-iq/michael-jordan | 66 | Michael Jordan&#x27;s IQ: Basketball Genius Breakdown \| MyIQScores |
| /famous-iq/pedro-pascal | 66 | Pedro Pascal&#x27;s IQ: The Mandalorian Star Analyzed \| MyIQScores |
| /famous-iq/ronnie-osullivan | 66 | Ronnie O&#x27;Sullivan&#x27;s IQ: 147 — What It Means \| MyIQScores |
| /famous-iq/xi-jinping | 66 | Xi Jinping&#x27;s IQ: China&#x27;s President Analyzed \| MyIQScores |
| /iq-and/ptsd | 66 | PTSD and IQ: How Trauma Affects Cognitive Performance \| MyIQScores |
| /iq-by-age/adults | 66 | Average IQ by Age (Adults 26-50): What&#x27;s Normal? \| MyIQScores |
| /iq-compare/men-vs-women | 66 | Men vs Women IQ: Average Scores &amp; Key Differences \| MyIQScores |
| /iq-myths/does-money-increase-iq | 66 | Does Being Rich Make You Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/height-and-iq | 66 | Do Taller People Have Higher IQs? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/sugar-hyperactivity-iq | 66 | Does Sugar Make Kids Hyperactive? \| IQ Myths Debunked \| MyIQScores |
| /sat-to-iq | 66 | SAT to IQ Conversion Chart: What Your SAT Score Says About Your IQ |
| /average-iq/north-korea | 65 | Average IQ in North Korea: 104, Ranked #106 Globally \| MyIQScores |
| /average-iq/saudi-arabia | 65 | Average IQ in Saudi Arabia: 84, Ranked #133 Globally \| MyIQScores |
| /average-iq/south-africa | 65 | Average IQ in South Africa: 77, Ranked #171 Globally \| MyIQScores |
| /average-iq/turkmenistan | 65 | Average IQ in Turkmenistan: 87, Ranked #108 Globally \| MyIQScores |
| /average-iq/united-states | 65 | Average IQ in United States: 98, Ranked #29 Globally \| MyIQScores |
| /blog/how-to-increase-iq | 65 | Can You Actually Increase Your IQ? What Science Says \| MyIQScores |
| /famous-iq/arnold-schwarzenegger | 65 | Arnold Schwarzenegger&#x27;s IQ: 135 — What It Means \| MyIQScores |
| /famous-iq/leonardo-da-vinci | 65 | Leonardo da Vinci&#x27;s IQ: 180–200 — What It Means \| MyIQScores |
| /famous-iq/shaquille-oneal | 65 | Shaquille O&#x27;Neal&#x27;s IQ: 120 — What It Means \| MyIQScores |
| /famous-iq/viswanathan-anand | 65 | Viswanathan Anand&#x27;s IQ: 175–185 — What It Means \| MyIQScores |
| /how-it-works | 65 | How It Works: The MyIQScores IQ-Style Test Explained \| MyIQScores |
| /iq-compare/programmer-vs-accountant | 65 | Programmer vs Accountant IQ: Average Scores Compared \| MyIQScores |
| /iq-compare/scientist-vs-businessman | 65 | Scientist vs Businessman IQ: Average Scores Compared \| MyIQScores |
| /iq-myths/birth-order-and-iq | 65 | Are First-Born Children Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/do-video-games-make-you-smarter | 65 | Do Video Games Make You Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/music-training-and-iq | 65 | Does Music Training Increase IQ? \| IQ Myths Debunked \| MyIQScores |
| /about | 64 | About MyIQScores™ — Our Mission, Team &amp; Contact \| MyIQScores |
| /average-iq/el-salvador | 64 | Average IQ in El Salvador: 80, Ranked #120 Globally \| MyIQScores |
| /average-iq/netherlands | 64 | Average IQ in Netherlands: 101, Ranked #10 Globally \| MyIQScores |
| /average-iq/philippines | 64 | Average IQ in Philippines: 86, Ranked #111 Globally \| MyIQScores |
| /average-iq/switzerland | 64 | Average IQ in Switzerland: 101, Ranked #11 Globally \| MyIQScores |
| /average-iq/timor-leste | 64 | Average IQ in Timor-Leste: 85, Ranked #113 Globally \| MyIQScores |
| /blog/what-is-genius-iq | 64 | What Is a Genius IQ? History, Science &amp; Reality \| MyIQScores |
| /famous-iq/billie-joe-armstrong | 64 | Billie Joe Armstrong&#x27;s IQ: 130 — What It Means \| MyIQScores |
| /famous-iq/chamath-palihapitiya | 64 | Chamath Palihapitiya&#x27;s IQ: 145 — What It Means \| MyIQScores |
| /famous-iq/cristiano-ronaldo | 64 | Cristiano Ronaldo&#x27;s IQ: How Smart Is the GOAT? \| MyIQScores |
| /famous-iq/jeffrey-epstein | 64 | Jeffrey Epstein&#x27;s IQ: How Smart Was He Really? \| MyIQScores |
| /famous-iq/john-von-neumann | 64 | John von Neumann&#x27;s IQ: 180–200 — What It Means \| MyIQScores |
| /famous-iq/kanye-west | 64 | Kanye West&#x27;s IQ: Creative Genius or Overrated? \| MyIQScores |
| /famous-iq/ludwig-van-beethoven | 64 | Ludwig van Beethoven&#x27;s IQ: 165 — What It Means \| MyIQScores |
| /famous-iq/malala-yousafzai | 64 | Malala Yousafzai&#x27;s IQ: 120–135 — What It Means \| MyIQScores |
| /famous-iq/malcolm-gladwell | 64 | Malcolm Gladwell&#x27;s IQ: 130–140 — What It Means \| MyIQScores |
| /famous-iq/sachin-tendulkar | 64 | Sachin Tendulkar&#x27;s IQ: 108–118 — What It Means \| MyIQScores |
| /famous-iq/thomas-jefferson | 64 | Thomas Jefferson&#x27;s IQ: 145–160 — What It Means \| MyIQScores |
| /famous-iq/vladimir-putin | 64 | Vladimir Putin&#x27;s IQ: KGB Agent to World Leader \| MyIQScores |
| /iq-and/gifted | 64 | What IQ Score Qualifies as Gifted? A Complete Guide \| MyIQScores |
| /iq-myths/are-left-handed-people-smarter | 64 | Are Left-Handed People Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/breastfeeding-and-iq | 64 | Does Breastfeeding Increase IQ? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/iq-test-cultural-bias | 64 | Do IQ Tests Have Cultural Bias? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/is-iq-the-same-as-intelligence | 64 | Is IQ the Same as Intelligence? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/wealth-and-intelligence | 64 | Does Wealth Equal Intelligence? \| IQ Myths Debunked \| MyIQScores |
| /is-126-iq-good | 64 | Is 126 IQ Good? Top 95% — Here&#x27;s What It Means \| MyIQScores |
| /tests/memory | 64 | Memory Test: Working Memory, IQ, and How to Improve \| MyIQScores |
| /average-iq-by-country | 63 | Average IQ by Country: The Complete Global Ranking \| MyIQScores |
| /average-iq/costa-rica | 63 | Average IQ in Costa Rica: 89, Ranked #122 Globally \| MyIQScores |
| /average-iq/kyrgyzstan | 63 | Average IQ in Kyrgyzstan: 75, Ranked #109 Globally \| MyIQScores |
| /average-iq/madagascar | 63 | Average IQ in Madagascar: 69, Ranked #101 Globally \| MyIQScores |
| /average-iq/mozambique | 63 | Average IQ in Mozambique: 69, Ranked #100 Globally \| MyIQScores |
| /average-iq/new-zealand | 63 | Average IQ in New Zealand: 99, Ranked #27 Globally \| MyIQScores |
| /average-iq/south-korea | 63 | Average IQ in South Korea: 106, Ranked #2 Globally \| MyIQScores |
| /average-iq/tajikistan | 63 | Average IQ in Tajikistan: 75, Ranked #110 Globally \| MyIQScores |
| /average-iq/uzbekistan | 63 | Average IQ in Uzbekistan: 87, Ranked #107 Globally \| MyIQScores |
| /blog/iq-and-income | 63 | IQ and Income: Does Being Smarter Make You Richer? \| MyIQScores |
| /blog/iq-vs-success | 63 | IQ vs. Success: Does Higher IQ Mean a Better Life? \| MyIQScores |
| /famous-iq/abraham-lincoln | 63 | Abraham Lincoln&#x27;s IQ: 128–150 — What It Means \| MyIQScores |
| /famous-iq/galileo-galilei | 63 | Galileo Galilei&#x27;s IQ: 180–185 — What It Means \| MyIQScores |
| /famous-iq/jordan-peterson | 63 | Jordan Peterson&#x27;s IQ: 145–150 — What It Means \| MyIQScores |
| /famous-iq/lebron-james | 63 | LeBron James&#x27; IQ: Basketball Genius Breakdown \| MyIQScores |
| /famous-iq/megan-thee-stallion | 63 | Megan Thee Stallion&#x27;s IQ: 130 — What It Means \| MyIQScores |
| /famous-iq/natalie-portman | 63 | Natalie Portman&#x27;s IQ: 135–145 — What It Means \| MyIQScores |
| /famous-iq/patrick-mahomes | 63 | Patrick Mahomes&#x27;s IQ: 110–120 — What It Means \| MyIQScores |
| /famous-iq/serena-williams | 63 | Serena Williams&#x27;s IQ: 105–118 — What It Means \| MyIQScores |
| /famous-iq/srinivasa-ramanujan | 63 | Srinivasa Ramanujan&#x27;s IQ: 185 — What It Means \| MyIQScores |
| /famous-iq/william-shakespeare | 63 | William Shakespeare&#x27;s IQ: 210 — What It Means \| MyIQScores |
| /iq-and/bipolar-disorder | 63 | Bipolar Disorder and IQ: The Surprising Connection \| MyIQScores |
| /iq-compare/stem-vs-humanities | 63 | STEM vs Humanities Students IQ: Who Scores Higher? \| MyIQScores |
| /iq-myths/does-alcohol-kill-brain-cells | 63 | Does Alcohol Kill Brain Cells? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/does-reading-make-you-smarter | 63 | Does Reading Make You Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-test | 63 | Free IQ Test Online: 30 Questions, Instant Results \| MyIQScores |
| /is-120-iq-good | 63 | Is 120 IQ Good? Top 9% — Here&#x27;s What It Means \| MyIQScores |
| /is-121-iq-good | 63 | Is 121 IQ Good? Top 8% — Here&#x27;s What It Means \| MyIQScores |
| /is-122-iq-good | 63 | Is 122 IQ Good? Top 7% — Here&#x27;s What It Means \| MyIQScores |
| /is-123-iq-good | 63 | Is 123 IQ Good? Top 6% — Here&#x27;s What It Means \| MyIQScores |
| /is-124-iq-good | 63 | Is 124 IQ Good? Top 5% — Here&#x27;s What It Means \| MyIQScores |
| /is-125-iq-good | 63 | Is 125 IQ Good? Top 5% — Here&#x27;s What It Means \| MyIQScores |
| /is-127-iq-good | 63 | Is 127 IQ Good? Top 4% — Here&#x27;s What It Means \| MyIQScores |
| /is-128-iq-good | 63 | Is 128 IQ Good? Top 3% — Here&#x27;s What It Means \| MyIQScores |
| /is-129-iq-good | 63 | Is 129 IQ Good? Top 3% — Here&#x27;s What It Means \| MyIQScores |
| /average-iq/azerbaijan | 62 | Average IQ in Azerbaijan: 87, Ranked #66 Globally \| MyIQScores |
| /average-iq/bangladesh | 62 | Average IQ in Bangladesh: 82, Ranked #71 Globally \| MyIQScores |
| /average-iq/guatemala | 62 | Average IQ in Guatemala: 79, Ranked #118 Globally \| MyIQScores |
| /average-iq/indonesia | 62 | Average IQ in Indonesia: 84, Ranked #130 Globally \| MyIQScores |
| /average-iq/kazakhstan | 62 | Average IQ in Kazakhstan: 89, Ranked #67 Globally \| MyIQScores |
| /average-iq/nicaragua | 62 | Average IQ in Nicaragua: 81, Ranked #121 Globally \| MyIQScores |
| /blog/emotional-intelligence-vs-iq | 62 | Emotional Intelligence vs IQ: Which Matters More? \| MyIQScores |
| /famous-iq/benjamin-netanyahu | 62 | Benjamin Netanyahu&#x27;s IQ: 145 — What It Means \| MyIQScores |
| /famous-iq/charles-darwin | 62 | Charles Darwin&#x27;s IQ: 150–165 — What It Means \| MyIQScores |
| /famous-iq/conan-obrien | 62 | Conan O&#x27;Brien&#x27;s IQ: 160 — What It Means \| MyIQScores |
| /famous-iq/frederick-douglass | 62 | Frederick Douglass&#x27;s IQ: 145 — What It Means \| MyIQScores |
| /famous-iq/greta-thunberg | 62 | Greta Thunberg&#x27;s IQ: 120–135 — What It Means \| MyIQScores |
| /famous-iq/kendrick-lamar | 62 | Kendrick Lamar&#x27;s IQ: 115–130 — What It Means \| MyIQScores |
| /famous-iq/kim-kardashian | 62 | Kim Kardashian&#x27;s IQ: Smarter Than You Think? \| MyIQScores |
| /famous-iq/lewis-hamilton | 62 | Lewis Hamilton&#x27;s IQ: 110–120 — What It Means \| MyIQScores |
| /famous-iq/magnus-carlsen | 62 | Magnus Carlsen&#x27;s IQ: 180–190 — What It Means \| MyIQScores |
| /famous-iq/michael-schumacher | 62 | Michael Schumacher&#x27;s IQ: 130 — What It Means \| MyIQScores |
| /famous-iq/michelle-obama | 62 | Michelle Obama&#x27;s IQ: 125–135 — What It Means \| MyIQScores |
| /famous-iq/napoleon-bonaparte | 62 | Napoleon Bonaparte&#x27;s IQ: 145 — What It Means \| MyIQScores |
| /famous-iq/neil-armstrong | 62 | Neil Armstrong&#x27;s IQ: 135–145 — What It Means \| MyIQScores |
| /famous-iq/novak-djokovic | 62 | Novak Djokovic&#x27;s IQ: 105–118 — What It Means \| MyIQScores |
| /famous-iq/scarlett-johansson | 62 | Scarlett Johansson&#x27;s IQ: 120 — What It Means \| MyIQScores |
| /famous-iq/volodymyr-zelensky | 62 | Volodymyr Zelensky&#x27;s IQ: 130 — What It Means \| MyIQScores |
| /famous-iq/warren-buffett | 62 | Warren Buffett&#x27;s IQ: 130–145 — What It Means \| MyIQScores |
| /how-to-improve-iq | 62 | How to Improve Your IQ: 12 Science-Backed Methods \| MyIQScores |
| /iq-and/adhd-inattentive | 62 | ADHD Inattentive Type and IQ: The Hidden Struggle \| MyIQScores |
| /iq-by-career | 62 | IQ Needed for Every Career: Complete Job IQ Chart \| MyIQScores |
| /iq-compare/night-owl-vs-early-bird | 62 | Night Owls vs Early Birds IQ: Who&#x27;s Smarter? \| MyIQScores |
| /iq-myths/brain-size-and-iq | 62 | Does Brain Size Determine IQ? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/does-coffee-make-you-smarter | 62 | Does Coffee Make You Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-of-presidents | 62 | IQ Scores of US Presidents: Who Was the Smartest? \| MyIQScores |
| /average-iq/argentina | 61 | Average IQ in Argentina: 93, Ranked #55 Globally \| MyIQScores |
| /average-iq/australia | 61 | Average IQ in Australia: 99, Ranked #23 Globally \| MyIQScores |
| /average-iq/ethiopia | 61 | Average IQ in Ethiopia: 69, Ranked #190 Globally \| MyIQScores |
| /average-iq/honduras | 61 | Average IQ in Honduras: 81, Ranked #119 Globally \| MyIQScores |
| /average-iq/hong-kong | 61 | Average IQ in Hong Kong: 108, Ranked #6 Globally \| MyIQScores |
| /average-iq/lithuania | 61 | Average IQ in Lithuania: 97, Ranked #60 Globally \| MyIQScores |
| /average-iq/mongolia | 61 | Average IQ in Mongolia: 101, Ranked #68 Globally \| MyIQScores |
| /average-iq/pakistan | 61 | Average IQ in Pakistan: 84, Ranked #132 Globally \| MyIQScores |
| /average-iq/paraguay | 61 | Average IQ in Paraguay: 84, Ranked #124 Globally \| MyIQScores |
| /average-iq/singapore | 61 | Average IQ in Singapore: 108, Ranked #5 Globally \| MyIQScores |
| /average-iq/sri-lanka | 61 | Average IQ in Sri Lanka: 91, Ranked #70 Globally \| MyIQScores |
| /average-iq/venezuela | 61 | Average IQ in Venezuela: 84, Ranked #93 Globally \| MyIQScores |
| /blog/iq-and-longevity | 61 | IQ and Longevity: Do Smarter People Live Longer? \| MyIQScores |
| /blog/twice-exceptional-adhd-high-iq | 61 | Twice-Exceptional: When ADHD and High IQ Coexist \| MyIQScores |
| /famous-iq/ariana-grande | 61 | Ariana Grande&#x27;s IQ: 108–118 — What It Means \| MyIQScores |
| /famous-iq/benjamin-franklin | 61 | Benjamin Franklin&#x27;s IQ: 160 — What It Means \| MyIQScores |
| /famous-iq/billie-eilish | 61 | Billie Eilish&#x27;s IQ: 110–120 — What It Means \| MyIQScores |
| /famous-iq/christopher-nolan | 61 | Christopher Nolan&#x27;s IQ: 145 — What It Means \| MyIQScores |
| /famous-iq/denzel-washington | 61 | Denzel Washington&#x27;s IQ: 114 — What It Means \| MyIQScores |
| /famous-iq/george-washington | 61 | George Washington&#x27;s IQ: 140 — What It Means \| MyIQScores |
| /famous-iq/gordon-ramsay | 61 | Gordon Ramsay&#x27;s IQ: 110–120 — What It Means \| MyIQScores |
| /famous-iq/jeff-goldblum | 61 | Jeff Goldblum&#x27;s IQ: 125–135 — What It Means \| MyIQScores |
| /famous-iq/jennifer-lawrence | 61 | Jennifer Lawrence&#x27;s IQ: 110 — What It Means \| MyIQScores |
| /famous-iq/leonardo-dicaprio | 61 | Leonardo DiCaprio&#x27;s IQ: 130 — What It Means \| MyIQScores |
| /famous-iq/lionel-messi | 61 | Lionel Messi&#x27;s IQ: Football Genius Analyzed \| MyIQScores |
| /famous-iq/lionel-richie | 61 | Lionel Richie&#x27;s IQ: 115–125 — What It Means \| MyIQScores |
| /famous-iq/margaret-thatcher | 61 | Margaret Thatcher&#x27;s IQ: 154 — What It Means \| MyIQScores |
| /famous-iq/michael-bloomberg | 61 | Michael Bloomberg&#x27;s IQ: 148 — What It Means \| MyIQScores |
| /famous-iq/oprah-winfrey | 61 | Oprah Winfrey&#x27;s IQ: 120–130 — What It Means \| MyIQScores |
| /famous-iq/pablo-picasso | 61 | Pablo Picasso&#x27;s IQ: 150–170 — What It Means \| MyIQScores |
| /famous-iq/quentin-tarantino | 61 | Quentin Tarantino&#x27;s IQ: 160 — What It Means \| MyIQScores |
| /famous-iq/reese-witherspoon | 61 | Reese Witherspoon&#x27;s IQ: 130 — What It Means \| MyIQScores |
| /famous-iq/robert-downey-jr | 61 | Robert Downey Jr.&#x27;s IQ: 145 — What It Means \| MyIQScores |
| /famous-iq/roger-federer | 61 | Roger Federer&#x27;s IQ: 108–118 — What It Means \| MyIQScores |
| /famous-iq/sacha-baron-cohen | 61 | Sacha Baron Cohen&#x27;s IQ: 155 — What It Means \| MyIQScores |
| /famous-iq/sam-bankman-fried | 61 | Sam Bankman-Fried&#x27;s IQ: 155 — What It Means \| MyIQScores |
| /famous-iq/satya-nadella | 61 | Satya Nadella&#x27;s IQ: 135–150 — What It Means \| MyIQScores |
| /famous-iq/scottie-scheffler | 61 | Scottie Scheffler&#x27;s IQ: 118 — What It Means \| MyIQScores |
| /famous-iq/stephen-curry | 61 | Stephen Curry&#x27;s IQ: 105–120 — What It Means \| MyIQScores |
| /famous-iq/sundar-pichai | 61 | Sundar Pichai&#x27;s IQ: 135–150 — What It Means \| MyIQScores |
| /famous-iq/taylor-swift | 61 | Taylor Swift&#x27;s IQ: How Smart Is She Really? \| MyIQScores |
| /famous-iq/timothee-chalamet | 61 | Timothée Chalamet&#x27;s IQ: 120 — What It Means \| MyIQScores |
| /famous-iq/tyler-the-creator | 61 | Tyler the Creator&#x27;s IQ: 130 — What It Means \| MyIQScores |
| /famous-iq/victor-wembanyama | 61 | Victor Wembanyama&#x27;s IQ: 120 — What It Means \| MyIQScores |
| /famous-iq/winston-churchill | 61 | Winston Churchill&#x27;s IQ: 145 — What It Means \| MyIQScores |
| /famous-iq/yuval-noah-harari | 61 | Yuval Noah Harari&#x27;s IQ: 140 — What It Means \| MyIQScores |
| /iq-compare/gamers-vs-non-gamers | 61 | Gamers vs Non-Gamers IQ: Do Gamers Score Higher? \| MyIQScores |
| /iq-myths/does-chess-increase-iq | 61 | Does Chess Make You Smarter? \| IQ Myths Debunked \| MyIQScores |
| /iq-myths/does-meditation-increase-iq | 61 | Does Meditation Increase IQ? \| IQ Myths Debunked \| MyIQScores |

## Full route inventory

| Route | Template | Type | Words | Inbound | Title chars | Desc chars |
|---|---|---|---|---|---|---|
| / | Core/static page | static | 675 | 1056 | 67 | 154 |
| /about | Core/static page | static | 945 | 1056 | 64 | 154 |
| /act-to-iq | Core/static page | static | 873 | 3 | 69 | 154 |
| /asvab-to-iq | Core/static page | static | 955 | 1 | 59 | 154 |
| /average-iq | Core/static page | static | 1733 | 1055 | 59 | 154 |
| /average-iq-by-country | Core/static page | static | 1345 | 1056 | 63 | 154 |
| /average-iq-by-state | Core/static page | static | 734 | 52 | 57 | 154 |
| /average-iq-by-state/alabama | State (StateIQ) | dynamic | 605 | 15 | 52 | 154 |
| /average-iq-by-state/alaska | State (StateIQ) | dynamic | 575 | 13 | 49 | 154 |
| /average-iq-by-state/arizona | State (StateIQ) | dynamic | 596 | 13 | 52 | 154 |
| /average-iq-by-state/arkansas | State (StateIQ) | dynamic | 592 | 15 | 51 | 154 |
| /average-iq-by-state/california | State (StateIQ) | dynamic | 606 | 13 | 56 | 154 |
| /average-iq-by-state/colorado | State (StateIQ) | dynamic | 573 | 13 | 54 | 154 |
| /average-iq-by-state/connecticut | State (StateIQ) | dynamic | 577 | 50 | 56 | 154 |
| /average-iq-by-state/delaware | State (StateIQ) | dynamic | 564 | 10 | 53 | 154 |
| /average-iq-by-state/florida | State (StateIQ) | dynamic | 604 | 15 | 52 | 154 |
| /average-iq-by-state/georgia | State (StateIQ) | dynamic | 613 | 15 | 50 | 154 |
| /average-iq-by-state/hawaii | State (StateIQ) | dynamic | 585 | 13 | 51 | 154 |
| /average-iq-by-state/idaho | State (StateIQ) | dynamic | 568 | 13 | 51 | 154 |
| /average-iq-by-state/illinois | State (StateIQ) | dynamic | 583 | 12 | 54 | 154 |
| /average-iq-by-state/indiana | State (StateIQ) | dynamic | 562 | 12 | 52 | 154 |
| /average-iq-by-state/iowa | State (StateIQ) | dynamic | 583 | 12 | 49 | 154 |
| /average-iq-by-state/kansas | State (StateIQ) | dynamic | 573 | 12 | 52 | 154 |
| /average-iq-by-state/kentucky | State (StateIQ) | dynamic | 600 | 15 | 51 | 154 |
| /average-iq-by-state/louisiana | State (StateIQ) | dynamic | 604 | 15 | 54 | 154 |
| /average-iq-by-state/maine | State (StateIQ) | dynamic | 580 | 50 | 50 | 154 |
| /average-iq-by-state/maryland | State (StateIQ) | dynamic | 588 | 15 | 54 | 154 |
| /average-iq-by-state/massachusetts | State (StateIQ) | dynamic | 595 | 50 | 58 | 154 |
| /average-iq-by-state/michigan | State (StateIQ) | dynamic | 597 | 12 | 53 | 154 |
| /average-iq-by-state/minnesota | State (StateIQ) | dynamic | 578 | 50 | 54 | 154 |
| /average-iq-by-state/mississippi | State (StateIQ) | dynamic | 632 | 15 | 56 | 154 |
| /average-iq-by-state/missouri | State (StateIQ) | dynamic | 581 | 12 | 53 | 154 |
| /average-iq-by-state/montana | State (StateIQ) | dynamic | 576 | 19 | 52 | 154 |
| /average-iq-by-state/nebraska | State (StateIQ) | dynamic | 581 | 12 | 54 | 154 |
| /average-iq-by-state/nevada | State (StateIQ) | dynamic | 600 | 13 | 51 | 154 |
| /average-iq-by-state/new-hampshire | State (StateIQ) | dynamic | 573 | 50 | 58 | 154 |
| /average-iq-by-state/new-jersey | State (StateIQ) | dynamic | 588 | 10 | 55 | 154 |
| /average-iq-by-state/new-mexico | State (StateIQ) | dynamic | 621 | 13 | 53 | 154 |
| /average-iq-by-state/new-york | State (StateIQ) | dynamic | 597 | 10 | 54 | 154 |
| /average-iq-by-state/north-carolina | State (StateIQ) | dynamic | 627 | 15 | 59 | 154 |
| /average-iq-by-state/north-dakota | State (StateIQ) | dynamic | 567 | 12 | 58 | 154 |
| /average-iq-by-state/ohio | State (StateIQ) | dynamic | 582 | 12 | 49 | 154 |
| /average-iq-by-state/oklahoma | State (StateIQ) | dynamic | 592 | 15 | 51 | 154 |
| /average-iq-by-state/oregon | State (StateIQ) | dynamic | 571 | 50 | 51 | 154 |
| /average-iq-by-state/pennsylvania | State (StateIQ) | dynamic | 568 | 10 | 58 | 154 |
| /average-iq-by-state/rhode-island | State (StateIQ) | dynamic | 586 | 10 | 56 | 154 |
| /average-iq-by-state/south-carolina | State (StateIQ) | dynamic | 585 | 15 | 59 | 154 |
| /average-iq-by-state/south-dakota | State (StateIQ) | dynamic | 599 | 12 | 58 | 154 |
| /average-iq-by-state/tennessee | State (StateIQ) | dynamic | 582 | 15 | 54 | 154 |
| /average-iq-by-state/texas | State (StateIQ) | dynamic | 599 | 15 | 50 | 154 |
| /average-iq-by-state/utah | State (StateIQ) | dynamic | 607 | 13 | 50 | 154 |
| /average-iq-by-state/vermont | State (StateIQ) | dynamic | 586 | 50 | 52 | 154 |
| /average-iq-by-state/virginia | State (StateIQ) | dynamic | 604 | 15 | 53 | 154 |
| /average-iq-by-state/washington | State (StateIQ) | dynamic | 584 | 50 | 55 | 154 |
| /average-iq-by-state/west-virginia | State (StateIQ) | dynamic | 606 | 15 | 58 | 154 |
| /average-iq-by-state/wisconsin | State (StateIQ) | dynamic | 572 | 12 | 55 | 154 |
| /average-iq-by-state/wyoming | State (StateIQ) | dynamic | 580 | 13 | 53 | 154 |
| /average-iq-us | Core/static page | static | 1511 | 4 | 72 | 154 |
| /average-iq/algeria | Country (CountryIQ) | dynamic | 864 | 28 | 59 | 154 |
| /average-iq/angola | Country (CountryIQ) | dynamic | 890 | 6 | 59 | 154 |
| /average-iq/argentina | Country (CountryIQ) | dynamic | 1122 | 23 | 61 | 154 |
| /average-iq/armenia | Country (CountryIQ) | dynamic | 860 | 9 | 59 | 154 |
| /average-iq/australia | Country (CountryIQ) | dynamic | 1107 | 16 | 61 | 154 |
| /average-iq/austria | Country (CountryIQ) | dynamic | 1117 | 15 | 60 | 154 |
| /average-iq/azerbaijan | Country (CountryIQ) | dynamic | 860 | 17 | 62 | 154 |
| /average-iq/bahrain | Country (CountryIQ) | dynamic | 883 | 9 | 59 | 154 |
| /average-iq/bangladesh | Country (CountryIQ) | dynamic | 872 | 9 | 62 | 154 |
| /average-iq/belarus | Country (CountryIQ) | dynamic | 869 | 6 | 59 | 154 |
| /average-iq/belgium | Country (CountryIQ) | dynamic | 1111 | 12 | 60 | 154 |
| /average-iq/bolivia | Country (CountryIQ) | dynamic | 868 | 20 | 59 | 154 |
| /average-iq/brazil | Country (CountryIQ) | dynamic | 1207 | 16 | 59 | 154 |
| /average-iq/brunei | Country (CountryIQ) | dynamic | 906 | 5 | 59 | 154 |
| /average-iq/bulgaria | Country (CountryIQ) | dynamic | 1152 | 7 | 60 | 154 |
| /average-iq/cambodia | Country (CountryIQ) | dynamic | 881 | 14 | 60 | 154 |
| /average-iq/cameroon | Country (CountryIQ) | dynamic | 876 | 8 | 60 | 154 |
| /average-iq/canada | Country (CountryIQ) | dynamic | 1122 | 15 | 58 | 154 |
| /average-iq/chad | Country (CountryIQ) | dynamic | 907 | 10 | 57 | 154 |
| /average-iq/chile | Country (CountryIQ) | dynamic | 894 | 12 | 57 | 154 |
| /average-iq/china | Country (CountryIQ) | dynamic | 1116 | 18 | 57 | 154 |
| /average-iq/colombia | Country (CountryIQ) | dynamic | 1205 | 19 | 60 | 154 |
| /average-iq/costa-rica | Country (CountryIQ) | dynamic | 951 | 6 | 63 | 154 |
| /average-iq/croatia | Country (CountryIQ) | dynamic | 1128 | 11 | 59 | 154 |
| /average-iq/cuba | Country (CountryIQ) | dynamic | 880 | 9 | 56 | 154 |
| /average-iq/czech-republic | Country (CountryIQ) | dynamic | 1160 | 7 | 66 | 154 |
| /average-iq/denmark | Country (CountryIQ) | dynamic | 1130 | 19 | 59 | 154 |
| /average-iq/dominican-republic | Country (CountryIQ) | dynamic | 915 | 7 | 71 | 154 |
| /average-iq/ecuador | Country (CountryIQ) | dynamic | 867 | 21 | 59 | 154 |
| /average-iq/egypt | Country (CountryIQ) | dynamic | 1209 | 10 | 58 | 154 |
| /average-iq/el-salvador | Country (CountryIQ) | dynamic | 950 | 5 | 64 | 154 |
| /average-iq/estonia | Country (CountryIQ) | dynamic | 880 | 8 | 59 | 154 |
| /average-iq/ethiopia | Country (CountryIQ) | dynamic | 1231 | 6 | 61 | 154 |
| /average-iq/fiji | Country (CountryIQ) | dynamic | 917 | 7 | 57 | 154 |
| /average-iq/finland | Country (CountryIQ) | dynamic | 1157 | 35 | 60 | 154 |
| /average-iq/france | Country (CountryIQ) | dynamic | 1158 | 9 | 58 | 154 |
| /average-iq/georgia | Country (CountryIQ) | dynamic | 863 | 7 | 59 | 154 |
| /average-iq/germany | Country (CountryIQ) | dynamic | 1128 | 38 | 60 | 154 |
| /average-iq/ghana | Country (CountryIQ) | dynamic | 1208 | 6 | 58 | 154 |
| /average-iq/greece | Country (CountryIQ) | dynamic | 1130 | 10 | 58 | 154 |
| /average-iq/guatemala | Country (CountryIQ) | dynamic | 922 | 5 | 62 | 154 |
| /average-iq/haiti | Country (CountryIQ) | dynamic | 925 | 7 | 58 | 154 |
| /average-iq/honduras | Country (CountryIQ) | dynamic | 920 | 6 | 61 | 154 |
| /average-iq/hong-kong | Country (CountryIQ) | dynamic | 1142 | 9 | 61 | 154 |
| /average-iq/hungary | Country (CountryIQ) | dynamic | 1115 | 10 | 59 | 154 |
| /average-iq/iceland | Country (CountryIQ) | dynamic | 1181 | 6 | 59 | 154 |
| /average-iq/india | Country (CountryIQ) | dynamic | 1242 | 9 | 58 | 154 |
| /average-iq/indonesia | Country (CountryIQ) | dynamic | 1212 | 12 | 62 | 154 |
| /average-iq/iran | Country (CountryIQ) | dynamic | 1228 | 8 | 57 | 154 |
| /average-iq/ireland | Country (CountryIQ) | dynamic | 1164 | 12 | 60 | 154 |
| /average-iq/israel | Country (CountryIQ) | dynamic | 1159 | 22 | 58 | 154 |
| /average-iq/italy | Country (CountryIQ) | dynamic | 1143 | 8 | 57 | 154 |
| /average-iq/ivory-coast | Country (CountryIQ) | dynamic | 908 | 12 | 70 | 154 |
| /average-iq/jamaica | Country (CountryIQ) | dynamic | 869 | 10 | 59 | 154 |
| /average-iq/japan | Country (CountryIQ) | dynamic | 1111 | 13 | 57 | 154 |
| /average-iq/jordan | Country (CountryIQ) | dynamic | 885 | 17 | 58 | 154 |
| /average-iq/kazakhstan | Country (CountryIQ) | dynamic | 857 | 13 | 62 | 154 |
| /average-iq/kenya | Country (CountryIQ) | dynamic | 1184 | 11 | 58 | 154 |
| /average-iq/kuwait | Country (CountryIQ) | dynamic | 890 | 13 | 58 | 154 |
| /average-iq/kyrgyzstan | Country (CountryIQ) | dynamic | 919 | 9 | 63 | 154 |
| /average-iq/laos | Country (CountryIQ) | dynamic | 919 | 4 | 57 | 154 |
| /average-iq/latvia | Country (CountryIQ) | dynamic | 1156 | 8 | 58 | 154 |
| /average-iq/lebanon | Country (CountryIQ) | dynamic | 891 | 17 | 59 | 154 |
| /average-iq/libya | Country (CountryIQ) | dynamic | 896 | 8 | 57 | 154 |
| /average-iq/lithuania | Country (CountryIQ) | dynamic | 1175 | 8 | 61 | 154 |
| /average-iq/madagascar | Country (CountryIQ) | dynamic | 903 | 7 | 63 | 154 |
| /average-iq/mali | Country (CountryIQ) | dynamic | 894 | 9 | 57 | 154 |
| /average-iq/mexico | Country (CountryIQ) | dynamic | 1186 | 12 | 59 | 154 |
| /average-iq/moldova | Country (CountryIQ) | dynamic | 876 | 5 | 59 | 154 |
| /average-iq/mongolia | Country (CountryIQ) | dynamic | 888 | 7 | 61 | 154 |
| /average-iq/morocco | Country (CountryIQ) | dynamic | 881 | 27 | 59 | 154 |
| /average-iq/mozambique | Country (CountryIQ) | dynamic | 899 | 10 | 63 | 154 |
| /average-iq/myanmar | Country (CountryIQ) | dynamic | 863 | 13 | 59 | 154 |
| /average-iq/nepal | Country (CountryIQ) | dynamic | 889 | 9 | 57 | 154 |
| /average-iq/netherlands | Country (CountryIQ) | dynamic | 1105 | 36 | 64 | 154 |
| /average-iq/new-zealand | Country (CountryIQ) | dynamic | 1132 | 6 | 63 | 154 |
| /average-iq/nicaragua | Country (CountryIQ) | dynamic | 934 | 6 | 62 | 154 |
| /average-iq/niger | Country (CountryIQ) | dynamic | 920 | 10 | 58 | 154 |
| /average-iq/nigeria | Country (CountryIQ) | dynamic | 1227 | 9 | 60 | 154 |
| /average-iq/north-korea | Country (CountryIQ) | dynamic | 945 | 4 | 65 | 154 |
| /average-iq/norway | Country (CountryIQ) | dynamic | 1151 | 13 | 58 | 154 |
| /average-iq/oman | Country (CountryIQ) | dynamic | 889 | 5 | 56 | 154 |
| /average-iq/pakistan | Country (CountryIQ) | dynamic | 1233 | 7 | 61 | 154 |
| /average-iq/panama | Country (CountryIQ) | dynamic | 937 | 6 | 59 | 154 |
| /average-iq/papua-new-guinea | Country (CountryIQ) | dynamic | 917 | 9 | 69 | 154 |
| /average-iq/paraguay | Country (CountryIQ) | dynamic | 948 | 5 | 61 | 154 |
| /average-iq/peru | Country (CountryIQ) | dynamic | 886 | 21 | 56 | 154 |
| /average-iq/philippines | Country (CountryIQ) | dynamic | 1224 | 14 | 64 | 154 |
| /average-iq/poland | Country (CountryIQ) | dynamic | 1137 | 11 | 58 | 154 |
| /average-iq/portugal | Country (CountryIQ) | dynamic | 1160 | 11 | 60 | 154 |
| /average-iq/qatar | Country (CountryIQ) | dynamic | 903 | 7 | 57 | 154 |
| /average-iq/romania | Country (CountryIQ) | dynamic | 1157 | 16 | 59 | 154 |
| /average-iq/russia | Country (CountryIQ) | dynamic | 1140 | 5 | 58 | 154 |
| /average-iq/saudi-arabia | Country (CountryIQ) | dynamic | 1249 | 10 | 65 | 154 |
| /average-iq/senegal | Country (CountryIQ) | dynamic | 883 | 6 | 59 | 154 |
| /average-iq/serbia | Country (CountryIQ) | dynamic | 1138 | 8 | 58 | 154 |
| /average-iq/singapore | Country (CountryIQ) | dynamic | 1128 | 15 | 61 | 154 |
| /average-iq/slovakia | Country (CountryIQ) | dynamic | 1143 | 5 | 60 | 154 |
| /average-iq/somalia | Country (CountryIQ) | dynamic | 920 | 8 | 59 | 154 |
| /average-iq/south-africa | Country (CountryIQ) | dynamic | 1232 | 7 | 65 | 154 |
| /average-iq/south-korea | Country (CountryIQ) | dynamic | 1146 | 13 | 63 | 154 |
| /average-iq/spain | Country (CountryIQ) | dynamic | 1142 | 8 | 57 | 154 |
| /average-iq/sri-lanka | Country (CountryIQ) | dynamic | 898 | 9 | 61 | 154 |
| /average-iq/sudan | Country (CountryIQ) | dynamic | 887 | 9 | 57 | 154 |
| /average-iq/sweden | Country (CountryIQ) | dynamic | 1129 | 13 | 58 | 154 |
| /average-iq/switzerland | Country (CountryIQ) | dynamic | 1127 | 36 | 64 | 154 |
| /average-iq/taiwan | Country (CountryIQ) | dynamic | 1109 | 13 | 58 | 154 |
| /average-iq/tajikistan | Country (CountryIQ) | dynamic | 900 | 9 | 63 | 154 |
| /average-iq/tanzania | Country (CountryIQ) | dynamic | 883 | 30 | 60 | 154 |
| /average-iq/thailand | Country (CountryIQ) | dynamic | 1223 | 17 | 60 | 154 |
| /average-iq/timor-leste | Country (CountryIQ) | dynamic | 927 | 11 | 64 | 154 |
| /average-iq/tunisia | Country (CountryIQ) | dynamic | 872 | 29 | 59 | 154 |
| /average-iq/turkey | Country (CountryIQ) | dynamic | 1231 | 22 | 58 | 154 |
| /average-iq/turkmenistan | Country (CountryIQ) | dynamic | 899 | 8 | 65 | 154 |
| /average-iq/uae | Country (CountryIQ) | dynamic | 1223 | 11 | 56 | 154 |
| /average-iq/uganda | Country (CountryIQ) | dynamic | 884 | 30 | 58 | 154 |
| /average-iq/ukraine | Country (CountryIQ) | dynamic | 1129 | 20 | 59 | 154 |
| /average-iq/united-kingdom | Country (CountryIQ) | dynamic | 1152 | 40 | 67 | 154 |
| /average-iq/united-states | Country (CountryIQ) | dynamic | 1165 | 62 | 65 | 154 |
| /average-iq/uruguay | Country (CountryIQ) | dynamic | 946 | 6 | 60 | 154 |
| /average-iq/uzbekistan | Country (CountryIQ) | dynamic | 886 | 8 | 63 | 154 |
| /average-iq/venezuela | Country (CountryIQ) | dynamic | 881 | 8 | 61 | 154 |
| /average-iq/vietnam | Country (CountryIQ) | dynamic | 1188 | 23 | 59 | 154 |
| /average-iq/zambia | Country (CountryIQ) | dynamic | 876 | 9 | 58 | 154 |
| /average-iq/zimbabwe | Country (CountryIQ) | dynamic | 895 | 9 | 60 | 154 |
| /blog | Core/static page | static | 1232 | 1055 | 54 | 154 |
| /blog/can-you-raise-your-iq | Blog article | static | 2887 | 2 | 66 | 154 |
| /blog/dunning-kruger-effect | Blog article | static | 2129 | 1 | 68 | 154 |
| /blog/emotional-intelligence-vs-iq | Blog article | static | 1062 | 1 | 62 | 154 |
| /blog/exercise-and-iq | Blog article | static | 1480 | 3 | 80 | 154 |
| /blog/famous-iq-scores | Blog article | static | 916 | 2 | 52 | 154 |
| /blog/fluid-vs-crystallized-intelligence | Blog article | static | 1586 | 5 | 77 | 154 |
| /blog/flynn-effect | Blog article | static | 1617 | 4 | 81 | 154 |
| /blog/gifted-children-iq | Blog article | static | 2966 | 1 | 70 | 154 |
| /blog/history-of-iq-testing | Blog article | static | 3254 | 1 | 66 | 154 |
| /blog/how-to-increase-iq | Blog article | static | 1207 | 1 | 65 | 154 |
| /blog/iq-and-age | Blog article | static | 1959 | 2 | 67 | 154 |
| /blog/iq-and-creativity | Blog article | static | 1489 | 1 | 74 | 154 |
| /blog/iq-and-income | Blog article | static | 2508 | 2 | 63 | 154 |
| /blog/iq-and-leadership | Blog article | static | 1397 | 1 | 71 | 154 |
| /blog/iq-and-longevity | Blog article | static | 3077 | 1 | 61 | 154 |
| /blog/iq-and-mental-health | Blog article | static | 1438 | 3 | 75 | 154 |
| /blog/iq-and-workplace | Blog article | static | 1397 | 3 | 75 | 154 |
| /blog/iq-by-country | Blog article | static | 1001 | 1 | 57 | 154 |
| /blog/iq-genetics-nature-vs-nurture | Blog article | static | 1543 | 3 | 77 | 154 |
| /blog/iq-testing-in-children | Blog article | static | 1408 | 2 | 76 | 154 |
| /blog/iq-tests-accurate | Blog article | static | 1196 | 3 | 60 | 154 |
| /blog/iq-vs-success | Blog article | static | 1011 | 4 | 63 | 154 |
| /blog/multiple-intelligences-theory | Blog article | static | 1444 | 2 | 91 | 154 |
| /blog/nutrition-and-iq | Blog article | static | 1607 | 3 | 85 | 154 |
| /blog/poverty-and-iq | Blog article | static | 2516 | 1 | 75 | 154 |
| /blog/sleep-and-iq | Blog article | static | 1620 | 8 | 70 | 154 |
| /blog/twice-exceptional-adhd-high-iq | Blog article | static | 2201 | 1 | 61 | 154 |
| /blog/what-is-genius-iq | Blog article | static | 939 | 2 | 64 | 154 |
| /blog/what-is-iq-score | Blog article | static | 1110 | 1 | 69 | 154 |
| /blog/working-memory-and-iq | Blog article | static | 1559 | 5 | 83 | 154 |
| /contact | Core/static page | static | 373 | 1056 | 18 | 154 |
| /disclaimer | Core/static page | static | 797 | 1055 | 23 | 154 |
| /editorial-policy | Core/static page | static | 1249 | 1055 | 29 | 154 |
| /famous-iq | Core/static page | static | 3811 | 1057 | 66 | 154 |
| /famous-iq/aaron-rodgers | Celebrity (FamousIQ) | dynamic | 1118 | 1 | 57 | 154 |
| /famous-iq/abraham-lincoln | Celebrity (FamousIQ) | dynamic | 1149 | 1 | 63 | 154 |
| /famous-iq/ada-lovelace | Celebrity (FamousIQ) | dynamic | 763 | 1 | 60 | 154 |
| /famous-iq/adam-sandler | Celebrity (FamousIQ) | dynamic | 1098 | 1 | 56 | 154 |
| /famous-iq/adele | Celebrity (FamousIQ) | dynamic | 713 | 1 | 53 | 154 |
| /famous-iq/alan-turing | Celebrity (FamousIQ) | dynamic | 1054 | 10 | 55 | 154 |
| /famous-iq/albert-einstein | Celebrity (FamousIQ) | dynamic | 803 | 328 | 56 | 154 |
| /famous-iq/alexandria-ocasio-cortez | Celebrity (FamousIQ) | dynamic | 739 | 1 | 72 | 154 |
| /famous-iq/ali-wong | Celebrity (FamousIQ) | dynamic | 1079 | 1 | 52 | 154 |
| /famous-iq/amy-schumer | Celebrity (FamousIQ) | dynamic | 1031 | 1 | 55 | 154 |
| /famous-iq/andrew-tate | Celebrity (FamousIQ) | dynamic | 748 | 1 | 56 | 154 |
| /famous-iq/angel-reese | Celebrity (FamousIQ) | dynamic | 1007 | 1 | 55 | 154 |
| /famous-iq/angela-merkel | Celebrity (FamousIQ) | dynamic | 1144 | 1 | 57 | 154 |
| /famous-iq/angelina-jolie | Celebrity (FamousIQ) | dynamic | 1059 | 1 | 58 | 154 |
| /famous-iq/archimedes | Celebrity (FamousIQ) | dynamic | 1021 | 1 | 58 | 154 |
| /famous-iq/ariana-grande | Celebrity (FamousIQ) | dynamic | 705 | 1 | 61 | 154 |
| /famous-iq/aristotle | Celebrity (FamousIQ) | dynamic | 902 | 13 | 53 | 154 |
| /famous-iq/arnold-schwarzenegger | Celebrity (FamousIQ) | dynamic | 1075 | 1 | 65 | 154 |
| /famous-iq/ashton-kutcher | Celebrity (FamousIQ) | dynamic | 721 | 2 | 58 | 154 |
| /famous-iq/bad-bunny | Celebrity (FamousIQ) | dynamic | 739 | 1 | 57 | 154 |
| /famous-iq/barack-obama | Celebrity (FamousIQ) | dynamic | 781 | 143 | 60 | 154 |
| /famous-iq/barron-trump | Celebrity (FamousIQ) | dynamic | 981 | 1 | 56 | 154 |
| /famous-iq/ben-affleck | Celebrity (FamousIQ) | dynamic | 1093 | 1 | 55 | 154 |
| /famous-iq/benjamin-franklin | Celebrity (FamousIQ) | dynamic | 737 | 27 | 61 | 154 |
| /famous-iq/benjamin-netanyahu | Celebrity (FamousIQ) | dynamic | 1112 | 1 | 62 | 154 |
| /famous-iq/beyonce | Celebrity (FamousIQ) | dynamic | 744 | 26 | 55 | 154 |
| /famous-iq/bill-clinton | Celebrity (FamousIQ) | dynamic | 1118 | 1 | 56 | 154 |
| /famous-iq/bill-gates | Celebrity (FamousIQ) | dynamic | 804 | 105 | 54 | 154 |
| /famous-iq/billie-eilish | Celebrity (FamousIQ) | dynamic | 730 | 1 | 61 | 154 |
| /famous-iq/billie-joe-armstrong | Celebrity (FamousIQ) | dynamic | 1028 | 1 | 64 | 154 |
| /famous-iq/blaise-pascal | Celebrity (FamousIQ) | dynamic | 1041 | 14 | 57 | 154 |
| /famous-iq/bo-burnham | Celebrity (FamousIQ) | dynamic | 1086 | 1 | 54 | 154 |
| /famous-iq/bob-dylan | Celebrity (FamousIQ) | dynamic | 1156 | 1 | 53 | 154 |
| /famous-iq/brad-pitt | Celebrity (FamousIQ) | dynamic | 1096 | 1 | 53 | 154 |
| /famous-iq/brian-chesky | Celebrity (FamousIQ) | dynamic | 987 | 1 | 56 | 154 |
| /famous-iq/bruno-mars | Celebrity (FamousIQ) | dynamic | 1115 | 1 | 54 | 154 |
| /famous-iq/caitlin-clark | Celebrity (FamousIQ) | dynamic | 1039 | 1 | 57 | 154 |
| /famous-iq/canelo-alvarez | Celebrity (FamousIQ) | dynamic | 978 | 1 | 58 | 154 |
| /famous-iq/cardi-b | Celebrity (FamousIQ) | dynamic | 749 | 1 | 55 | 154 |
| /famous-iq/carl-gauss | Celebrity (FamousIQ) | dynamic | 1050 | 1 | 68 | 154 |
| /famous-iq/carl-sagan | Celebrity (FamousIQ) | dynamic | 1099 | 1 | 54 | 154 |
| /famous-iq/cate-blanchett | Celebrity (FamousIQ) | dynamic | 1095 | 1 | 58 | 154 |
| /famous-iq/chamath-palihapitiya | Celebrity (FamousIQ) | dynamic | 926 | 1 | 64 | 154 |
| /famous-iq/chappell-roan | Celebrity (FamousIQ) | dynamic | 1082 | 1 | 68 | 154 |
| /famous-iq/charles-darwin | Celebrity (FamousIQ) | dynamic | 745 | 1 | 62 | 154 |
| /famous-iq/charli-xcx | Celebrity (FamousIQ) | dynamic | 1042 | 1 | 54 | 154 |
| /famous-iq/charlie-munger | Celebrity (FamousIQ) | dynamic | 1120 | 1 | 58 | 154 |
| /famous-iq/chris-rock | Celebrity (FamousIQ) | dynamic | 1152 | 1 | 54 | 154 |
| /famous-iq/christopher-langan | Celebrity (FamousIQ) | dynamic | 1035 | 14 | 66 | 154 |
| /famous-iq/christopher-nolan | Celebrity (FamousIQ) | dynamic | 1161 | 1 | 61 | 154 |
| /famous-iq/cleopatra | Celebrity (FamousIQ) | dynamic | 859 | 1 | 53 | 154 |
| /famous-iq/conan-obrien | Celebrity (FamousIQ) | dynamic | 1102 | 1 | 62 | 154 |
| /famous-iq/conor-mcgregor | Celebrity (FamousIQ) | dynamic | 998 | 1 | 58 | 154 |
| /famous-iq/cristiano-ronaldo | Celebrity (FamousIQ) | dynamic | 778 | 81 | 64 | 154 |
| /famous-iq/dalai-lama | Celebrity (FamousIQ) | dynamic | 1136 | 1 | 54 | 154 |
| /famous-iq/daniel-kahneman | Celebrity (FamousIQ) | dynamic | 966 | 1 | 59 | 154 |
| /famous-iq/dave-chappelle | Celebrity (FamousIQ) | dynamic | 1199 | 1 | 58 | 154 |
| /famous-iq/david-bowie | Celebrity (FamousIQ) | dynamic | 1169 | 1 | 55 | 154 |
| /famous-iq/demis-hassabis | Celebrity (FamousIQ) | dynamic | 944 | 7 | 58 | 154 |
| /famous-iq/denzel-washington | Celebrity (FamousIQ) | dynamic | 1061 | 1 | 61 | 154 |
| /famous-iq/doja-cat | Celebrity (FamousIQ) | dynamic | 999 | 1 | 52 | 154 |
| /famous-iq/dolly-parton | Celebrity (FamousIQ) | dynamic | 771 | 1 | 60 | 154 |
| /famous-iq/dolph-lundgren | Celebrity (FamousIQ) | dynamic | 751 | 6 | 58 | 154 |
| /famous-iq/donald-trump | Celebrity (FamousIQ) | dynamic | 772 | 12 | 69 | 154 |
| /famous-iq/drake | Celebrity (FamousIQ) | dynamic | 741 | 1 | 72 | 154 |
| /famous-iq/dua-lipa | Celebrity (FamousIQ) | dynamic | 994 | 1 | 83 | 154 |
| /famous-iq/dwayne-johnson | Celebrity (FamousIQ) | dynamic | 758 | 1 | 83 | 154 |
| /famous-iq/ed-sheeran | Celebrity (FamousIQ) | dynamic | 1106 | 1 | 54 | 154 |
| /famous-iq/eddie-murphy | Celebrity (FamousIQ) | dynamic | 1068 | 1 | 56 | 154 |
| /famous-iq/elon-musk | Celebrity (FamousIQ) | dynamic | 799 | 327 | 54 | 154 |
| /famous-iq/elon-musk-children-iq | Celebrity (FamousIQ) | dynamic | 808 | 10 | 73 | 154 |
| /famous-iq/elton-john | Celebrity (FamousIQ) | dynamic | 1180 | 1 | 54 | 154 |
| /famous-iq/elvis-presley | Celebrity (FamousIQ) | dynamic | 1168 | 1 | 57 | 154 |
| /famous-iq/eminem | Celebrity (FamousIQ) | dynamic | 761 | 1 | 54 | 154 |
| /famous-iq/emma-watson | Celebrity (FamousIQ) | dynamic | 759 | 1 | 59 | 154 |
| /famous-iq/emmanuel-macron | Celebrity (FamousIQ) | dynamic | 1139 | 1 | 59 | 154 |
| /famous-iq/emmy-noether | Celebrity (FamousIQ) | dynamic | 953 | 1 | 56 | 154 |
| /famous-iq/erling-haaland | Celebrity (FamousIQ) | dynamic | 954 | 1 | 58 | 154 |
| /famous-iq/ernest-hemingway | Celebrity (FamousIQ) | dynamic | 1128 | 1 | 60 | 154 |
| /famous-iq/florence-pugh | Celebrity (FamousIQ) | dynamic | 1071 | 1 | 57 | 154 |
| /famous-iq/floyd-mayweather | Celebrity (FamousIQ) | dynamic | 1088 | 1 | 60 | 154 |
| /famous-iq/frank-ocean | Celebrity (FamousIQ) | dynamic | 1032 | 1 | 55 | 154 |
| /famous-iq/franz-liszt | Celebrity (FamousIQ) | dynamic | 907 | 1 | 55 | 154 |
| /famous-iq/freddie-mercury | Celebrity (FamousIQ) | dynamic | 1124 | 1 | 59 | 154 |
| /famous-iq/frederick-douglass | Celebrity (FamousIQ) | dynamic | 984 | 1 | 62 | 154 |
| /famous-iq/galileo-galilei | Celebrity (FamousIQ) | dynamic | 1002 | 2 | 63 | 154 |
| /famous-iq/garry-kasparov | Celebrity (FamousIQ) | dynamic | 754 | 31 | 58 | 154 |
| /famous-iq/geoffrey-hinton | Celebrity (FamousIQ) | dynamic | 974 | 1 | 59 | 154 |
| /famous-iq/george-orwell | Celebrity (FamousIQ) | dynamic | 1096 | 1 | 57 | 154 |
| /famous-iq/george-w-bush | Celebrity (FamousIQ) | dynamic | 1142 | 1 | 58 | 154 |
| /famous-iq/george-washington | Celebrity (FamousIQ) | dynamic | 1060 | 1 | 61 | 154 |
| /famous-iq/giannis-antetokounmpo | Celebrity (FamousIQ) | dynamic | 740 | 1 | 69 | 154 |
| /famous-iq/gordon-ramsay | Celebrity (FamousIQ) | dynamic | 746 | 1 | 61 | 154 |
| /famous-iq/gottfried-leibniz | Celebrity (FamousIQ) | dynamic | 1011 | 3 | 73 | 154 |
| /famous-iq/gracie-abrams | Celebrity (FamousIQ) | dynamic | 1013 | 1 | 57 | 154 |
| /famous-iq/greta-thunberg | Celebrity (FamousIQ) | dynamic | 755 | 1 | 62 | 154 |
| /famous-iq/hannah-gadsby | Celebrity (FamousIQ) | dynamic | 1089 | 1 | 57 | 154 |
| /famous-iq/harrison-ford | Celebrity (FamousIQ) | dynamic | 1031 | 1 | 57 | 154 |
| /famous-iq/harry-styles | Celebrity (FamousIQ) | dynamic | 1019 | 1 | 70 | 154 |
| /famous-iq/hasan-minhaj | Celebrity (FamousIQ) | dynamic | 1096 | 1 | 56 | 154 |
| /famous-iq/hillary-clinton | Celebrity (FamousIQ) | dynamic | 1123 | 1 | 59 | 154 |
| /famous-iq/hozier | Celebrity (FamousIQ) | dynamic | 1020 | 1 | 50 | 154 |
| /famous-iq/hugh-laurie | Celebrity (FamousIQ) | dynamic | 1088 | 1 | 55 | 154 |
| /famous-iq/ice-spice | Celebrity (FamousIQ) | dynamic | 994 | 1 | 53 | 154 |
| /famous-iq/ilya-sutskever | Celebrity (FamousIQ) | dynamic | 950 | 1 | 58 | 154 |
| /famous-iq/immanuel-kant | Celebrity (FamousIQ) | dynamic | 927 | 6 | 57 | 154 |
| /famous-iq/isaac-newton | Celebrity (FamousIQ) | dynamic | 830 | 33 | 60 | 154 |
| /famous-iq/ishowspeed | Celebrity (FamousIQ) | dynamic | 971 | 1 | 73 | 154 |
| /famous-iq/j-cole | Celebrity (FamousIQ) | dynamic | 1049 | 1 | 51 | 154 |
| /famous-iq/jack-dorsey | Celebrity (FamousIQ) | dynamic | 914 | 1 | 55 | 154 |
| /famous-iq/jack-ma | Celebrity (FamousIQ) | dynamic | 1157 | 1 | 51 | 154 |
| /famous-iq/jack-white | Celebrity (FamousIQ) | dynamic | 1049 | 1 | 54 | 154 |
| /famous-iq/james-woods | Celebrity (FamousIQ) | dynamic | 772 | 32 | 55 | 154 |
| /famous-iq/jay-z | Celebrity (FamousIQ) | dynamic | 740 | 1 | 53 | 154 |
| /famous-iq/jd-vance | Celebrity (FamousIQ) | dynamic | 1132 | 1 | 52 | 154 |
| /famous-iq/jeff-bezos | Celebrity (FamousIQ) | dynamic | 743 | 105 | 54 | 154 |
| /famous-iq/jeff-goldblum | Celebrity (FamousIQ) | dynamic | 734 | 1 | 61 | 154 |
| /famous-iq/jeffrey-epstein | Celebrity (FamousIQ) | dynamic | 1030 | 1 | 64 | 154 |
| /famous-iq/jennifer-lawrence | Celebrity (FamousIQ) | dynamic | 1055 | 1 | 61 | 154 |
| /famous-iq/jensen-huang | Celebrity (FamousIQ) | dynamic | 790 | 1 | 67 | 154 |
| /famous-iq/jerry-seinfeld | Celebrity (FamousIQ) | dynamic | 1107 | 1 | 58 | 154 |
| /famous-iq/jim-carrey | Celebrity (FamousIQ) | dynamic | 1082 | 1 | 54 | 154 |
| /famous-iq/jk-rowling | Celebrity (FamousIQ) | dynamic | 771 | 1 | 60 | 154 |
| /famous-iq/jodie-foster | Celebrity (FamousIQ) | dynamic | 777 | 7 | 56 | 154 |
| /famous-iq/joe-biden | Celebrity (FamousIQ) | dynamic | 1032 | 1 | 78 | 154 |
| /famous-iq/joe-rogan | Celebrity (FamousIQ) | dynamic | 757 | 1 | 46 | 154 |
| /famous-iq/john-cleese | Celebrity (FamousIQ) | dynamic | 1119 | 1 | 55 | 154 |
| /famous-iq/john-f-kennedy | Celebrity (FamousIQ) | dynamic | 1140 | 1 | 59 | 154 |
| /famous-iq/john-lennon | Celebrity (FamousIQ) | dynamic | 1120 | 1 | 55 | 154 |
| /famous-iq/john-mulaney | Celebrity (FamousIQ) | dynamic | 1094 | 1 | 56 | 154 |
| /famous-iq/john-oliver | Celebrity (FamousIQ) | dynamic | 1130 | 1 | 55 | 154 |
| /famous-iq/john-stuart-mill | Celebrity (FamousIQ) | dynamic | 966 | 6 | 60 | 154 |
| /famous-iq/john-von-neumann | Celebrity (FamousIQ) | dynamic | 990 | 11 | 64 | 154 |
| /famous-iq/jordan-peterson | Celebrity (FamousIQ) | dynamic | 1075 | 1 | 63 | 154 |
| /famous-iq/julia-roberts | Celebrity (FamousIQ) | dynamic | 1077 | 1 | 57 | 154 |
| /famous-iq/julius-caesar | Celebrity (FamousIQ) | dynamic | 906 | 1 | 57 | 154 |
| /famous-iq/jungkook-bts | Celebrity (FamousIQ) | dynamic | 1070 | 1 | 67 | 154 |
| /famous-iq/justin-bieber | Celebrity (FamousIQ) | dynamic | 1102 | 1 | 57 | 154 |
| /famous-iq/justin-trudeau | Celebrity (FamousIQ) | dynamic | 1076 | 1 | 58 | 154 |
| /famous-iq/kai-cenat | Celebrity (FamousIQ) | dynamic | 1019 | 1 | 81 | 154 |
| /famous-iq/kamala-harris | Celebrity (FamousIQ) | dynamic | 995 | 1 | 76 | 154 |
| /famous-iq/kanye-west | Celebrity (FamousIQ) | dynamic | 750 | 90 | 64 | 154 |
| /famous-iq/keanu-reeves | Celebrity (FamousIQ) | dynamic | 746 | 9 | 60 | 154 |
| /famous-iq/ken-jeong | Celebrity (FamousIQ) | dynamic | 1107 | 1 | 53 | 154 |
| /famous-iq/kendrick-lamar | Celebrity (FamousIQ) | dynamic | 745 | 1 | 62 | 154 |
| /famous-iq/kevin-hart | Celebrity (FamousIQ) | dynamic | 1024 | 1 | 54 | 154 |
| /famous-iq/kim-jong-un | Celebrity (FamousIQ) | dynamic | 1096 | 1 | 55 | 154 |
| /famous-iq/kim-kardashian | Celebrity (FamousIQ) | dynamic | 790 | 131 | 62 | 154 |
| /famous-iq/kobe-bryant | Celebrity (FamousIQ) | dynamic | 768 | 1 | 59 | 154 |
| /famous-iq/kylian-mbappe | Celebrity (FamousIQ) | dynamic | 961 | 1 | 57 | 154 |
| /famous-iq/kylie-jenner | Celebrity (FamousIQ) | dynamic | 740 | 1 | 60 | 154 |
| /famous-iq/lady-gaga | Celebrity (FamousIQ) | dynamic | 779 | 5 | 57 | 154 |
| /famous-iq/lana-del-rey | Celebrity (FamousIQ) | dynamic | 1058 | 1 | 56 | 154 |
| /famous-iq/larry-ellison | Celebrity (FamousIQ) | dynamic | 1105 | 1 | 57 | 154 |
| /famous-iq/larry-page | Celebrity (FamousIQ) | dynamic | 1069 | 1 | 54 | 154 |
| /famous-iq/lebron-james | Celebrity (FamousIQ) | dynamic | 777 | 76 | 63 | 154 |
| /famous-iq/leonardo-da-vinci | Celebrity (FamousIQ) | dynamic | 783 | 325 | 65 | 154 |
| /famous-iq/leonardo-dicaprio | Celebrity (FamousIQ) | dynamic | 1128 | 1 | 61 | 154 |
| /famous-iq/lewis-hamilton | Celebrity (FamousIQ) | dynamic | 767 | 1 | 62 | 154 |
| /famous-iq/lex-fridman | Celebrity (FamousIQ) | dynamic | 1032 | 1 | 59 | 154 |
| /famous-iq/lionel-messi | Celebrity (FamousIQ) | dynamic | 788 | 14 | 61 | 154 |
| /famous-iq/lionel-richie | Celebrity (FamousIQ) | dynamic | 713 | 1 | 61 | 154 |
| /famous-iq/logic-rapper | Celebrity (FamousIQ) | dynamic | 1060 | 1 | 49 | 154 |
| /famous-iq/ludwig-van-beethoven | Celebrity (FamousIQ) | dynamic | 921 | 6 | 64 | 154 |
| /famous-iq/luka-doncic | Celebrity (FamousIQ) | dynamic | 1029 | 1 | 55 | 154 |
| /famous-iq/madonna | Celebrity (FamousIQ) | dynamic | 1136 | 1 | 51 | 154 |
| /famous-iq/magic-johnson | Celebrity (FamousIQ) | dynamic | 1109 | 1 | 57 | 154 |
| /famous-iq/magnus-carlsen | Celebrity (FamousIQ) | dynamic | 733 | 31 | 62 | 154 |
| /famous-iq/mahatma-gandhi | Celebrity (FamousIQ) | dynamic | 974 | 1 | 58 | 154 |
| /famous-iq/malala-yousafzai | Celebrity (FamousIQ) | dynamic | 750 | 1 | 64 | 154 |
| /famous-iq/malcolm-gladwell | Celebrity (FamousIQ) | dynamic | 1077 | 1 | 64 | 154 |
| /famous-iq/marc-andreessen | Celebrity (FamousIQ) | dynamic | 1071 | 1 | 59 | 154 |
| /famous-iq/margaret-thatcher | Celebrity (FamousIQ) | dynamic | 1109 | 1 | 61 | 154 |
| /famous-iq/margot-robbie | Celebrity (FamousIQ) | dynamic | 1097 | 1 | 57 | 154 |
| /famous-iq/marie-curie | Celebrity (FamousIQ) | dynamic | 803 | 35 | 59 | 154 |
| /famous-iq/marilyn-monroe | Celebrity (FamousIQ) | dynamic | 759 | 18 | 58 | 154 |
| /famous-iq/mark-cuban | Celebrity (FamousIQ) | dynamic | 749 | 1 | 58 | 154 |
| /famous-iq/mark-zuckerberg | Celebrity (FamousIQ) | dynamic | 771 | 135 | 60 | 154 |
| /famous-iq/martin-scorsese | Celebrity (FamousIQ) | dynamic | 1137 | 1 | 59 | 154 |
| /famous-iq/matt-damon | Celebrity (FamousIQ) | dynamic | 1066 | 1 | 54 | 154 |
| /famous-iq/max-verstappen | Celebrity (FamousIQ) | dynamic | 1051 | 1 | 58 | 154 |
| /famous-iq/mayim-bialik | Celebrity (FamousIQ) | dynamic | 764 | 41 | 60 | 154 |
| /famous-iq/megan-thee-stallion | Celebrity (FamousIQ) | dynamic | 1013 | 1 | 63 | 154 |
| /famous-iq/meryl-streep | Celebrity (FamousIQ) | dynamic | 1031 | 1 | 56 | 154 |
| /famous-iq/michael-bloomberg | Celebrity (FamousIQ) | dynamic | 1104 | 1 | 61 | 154 |
| /famous-iq/michael-jackson | Celebrity (FamousIQ) | dynamic | 1027 | 1 | 69 | 154 |
| /famous-iq/michael-jordan | Celebrity (FamousIQ) | dynamic | 745 | 1 | 66 | 154 |
| /famous-iq/michael-phelps | Celebrity (FamousIQ) | dynamic | 1076 | 1 | 58 | 154 |
| /famous-iq/michael-schumacher | Celebrity (FamousIQ) | dynamic | 1144 | 1 | 62 | 154 |
| /famous-iq/michelangelo | Celebrity (FamousIQ) | dynamic | 908 | 1 | 56 | 154 |
| /famous-iq/michelle-obama | Celebrity (FamousIQ) | dynamic | 736 | 1 | 62 | 154 |
| /famous-iq/michio-kaku | Celebrity (FamousIQ) | dynamic | 750 | 18 | 59 | 154 |
| /famous-iq/mitski | Celebrity (FamousIQ) | dynamic | 1022 | 1 | 50 | 154 |
| /famous-iq/mrbeast | Celebrity (FamousIQ) | dynamic | 741 | 1 | 55 | 154 |
| /famous-iq/naomi-osaka | Celebrity (FamousIQ) | dynamic | 1017 | 1 | 55 | 154 |
| /famous-iq/napoleon-bonaparte | Celebrity (FamousIQ) | dynamic | 893 | 1 | 62 | 154 |
| /famous-iq/narendra-modi | Celebrity (FamousIQ) | dynamic | 1055 | 1 | 57 | 154 |
| /famous-iq/nassim-taleb | Celebrity (FamousIQ) | dynamic | 1093 | 1 | 60 | 154 |
| /famous-iq/natalie-portman | Celebrity (FamousIQ) | dynamic | 745 | 34 | 63 | 154 |
| /famous-iq/naval-ravikant | Celebrity (FamousIQ) | dynamic | 911 | 1 | 58 | 154 |
| /famous-iq/neil-armstrong | Celebrity (FamousIQ) | dynamic | 812 | 1 | 62 | 154 |
| /famous-iq/neil-degrasse-tyson | Celebrity (FamousIQ) | dynamic | 767 | 5 | 67 | 154 |
| /famous-iq/nicki-minaj | Celebrity (FamousIQ) | dynamic | 744 | 1 | 59 | 154 |
| /famous-iq/nicole-kidman | Celebrity (FamousIQ) | dynamic | 1099 | 1 | 57 | 154 |
| /famous-iq/nikola-jokic | Celebrity (FamousIQ) | dynamic | 773 | 1 | 60 | 154 |
| /famous-iq/nikola-tesla | Celebrity (FamousIQ) | dynamic | 793 | 324 | 58 | 154 |
| /famous-iq/noam-chomsky | Celebrity (FamousIQ) | dynamic | 1093 | 1 | 56 | 154 |
| /famous-iq/novak-djokovic | Celebrity (FamousIQ) | dynamic | 730 | 1 | 62 | 154 |
| /famous-iq/olivia-rodrigo | Celebrity (FamousIQ) | dynamic | 974 | 1 | 58 | 154 |
| /famous-iq/oprah-winfrey | Celebrity (FamousIQ) | dynamic | 785 | 145 | 61 | 154 |
| /famous-iq/pablo-picasso | Celebrity (FamousIQ) | dynamic | 745 | 5 | 61 | 154 |
| /famous-iq/patrick-collison | Celebrity (FamousIQ) | dynamic | 930 | 1 | 60 | 154 |
| /famous-iq/patrick-mahomes | Celebrity (FamousIQ) | dynamic | 751 | 1 | 63 | 154 |
| /famous-iq/paul-graham | Celebrity (FamousIQ) | dynamic | 920 | 1 | 55 | 154 |
| /famous-iq/paul-mccartney | Celebrity (FamousIQ) | dynamic | 1115 | 1 | 58 | 154 |
| /famous-iq/pedro-pascal | Celebrity (FamousIQ) | dynamic | 1056 | 1 | 66 | 154 |
| /famous-iq/peso-pluma | Celebrity (FamousIQ) | dynamic | 1046 | 1 | 69 | 154 |
| /famous-iq/peter-thiel | Celebrity (FamousIQ) | dynamic | 1061 | 1 | 55 | 154 |
| /famous-iq/peyton-manning | Celebrity (FamousIQ) | dynamic | 1121 | 1 | 58 | 154 |
| /famous-iq/phoebe-bridgers | Celebrity (FamousIQ) | dynamic | 1027 | 1 | 59 | 154 |
| /famous-iq/pope-francis | Celebrity (FamousIQ) | dynamic | 1142 | 1 | 56 | 154 |
| /famous-iq/post-malone | Celebrity (FamousIQ) | dynamic | 732 | 1 | 59 | 154 |
| /famous-iq/prince | Celebrity (FamousIQ) | dynamic | 1142 | 1 | 50 | 154 |
| /famous-iq/quentin-tarantino | Celebrity (FamousIQ) | dynamic | 725 | 1 | 61 | 154 |
| /famous-iq/rafael-nadal | Celebrity (FamousIQ) | dynamic | 1110 | 1 | 56 | 154 |
| /famous-iq/reed-hastings | Celebrity (FamousIQ) | dynamic | 1064 | 1 | 57 | 154 |
| /famous-iq/reese-witherspoon | Celebrity (FamousIQ) | dynamic | 1072 | 1 | 61 | 154 |
| /famous-iq/reid-hoffman | Celebrity (FamousIQ) | dynamic | 1082 | 1 | 56 | 154 |
| /famous-iq/rene-descartes | Celebrity (FamousIQ) | dynamic | 927 | 6 | 58 | 154 |
| /famous-iq/richard-dawkins | Celebrity (FamousIQ) | dynamic | 1106 | 1 | 59 | 154 |
| /famous-iq/richard-feynman | Celebrity (FamousIQ) | dynamic | 831 | 147 | 59 | 154 |
| /famous-iq/richard-thaler | Celebrity (FamousIQ) | dynamic | 958 | 1 | 58 | 154 |
| /famous-iq/ricky-gervais | Celebrity (FamousIQ) | dynamic | 1083 | 1 | 57 | 154 |
| /famous-iq/rihanna | Celebrity (FamousIQ) | dynamic | 757 | 1 | 67 | 154 |
| /famous-iq/robert-downey-jr | Celebrity (FamousIQ) | dynamic | 1095 | 1 | 61 | 154 |
| /famous-iq/robin-williams | Celebrity (FamousIQ) | dynamic | 1131 | 1 | 58 | 154 |
| /famous-iq/roger-federer | Celebrity (FamousIQ) | dynamic | 731 | 1 | 61 | 154 |
| /famous-iq/ronda-rousey | Celebrity (FamousIQ) | dynamic | 756 | 1 | 60 | 154 |
| /famous-iq/ronnie-osullivan | Celebrity (FamousIQ) | dynamic | 1159 | 1 | 66 | 154 |
| /famous-iq/rowan-atkinson | Celebrity (FamousIQ) | dynamic | 1102 | 3 | 58 | 154 |
| /famous-iq/russ-rapper | Celebrity (FamousIQ) | dynamic | 1004 | 1 | 48 | 154 |
| /famous-iq/ruth-bader-ginsburg | Celebrity (FamousIQ) | dynamic | 769 | 3 | 67 | 154 |
| /famous-iq/ryan-gosling | Celebrity (FamousIQ) | dynamic | 1076 | 1 | 56 | 154 |
| /famous-iq/ryan-reynolds | Celebrity (FamousIQ) | dynamic | 1038 | 1 | 75 | 154 |
| /famous-iq/sabrina-carpenter | Celebrity (FamousIQ) | dynamic | 1014 | 1 | 74 | 154 |
| /famous-iq/sacha-baron-cohen | Celebrity (FamousIQ) | dynamic | 1100 | 1 | 61 | 154 |
| /famous-iq/sachin-tendulkar | Celebrity (FamousIQ) | dynamic | 750 | 1 | 64 | 154 |
| /famous-iq/sam-altman | Celebrity (FamousIQ) | dynamic | 755 | 5 | 71 | 154 |
| /famous-iq/sam-bankman-fried | Celebrity (FamousIQ) | dynamic | 961 | 1 | 61 | 154 |
| /famous-iq/sam-harris | Celebrity (FamousIQ) | dynamic | 1098 | 1 | 54 | 154 |
| /famous-iq/saquon-barkley | Celebrity (FamousIQ) | dynamic | 1037 | 1 | 58 | 154 |
| /famous-iq/satya-nadella | Celebrity (FamousIQ) | dynamic | 758 | 1 | 61 | 154 |
| /famous-iq/scarlett-johansson | Celebrity (FamousIQ) | dynamic | 1008 | 1 | 62 | 154 |
| /famous-iq/scottie-scheffler | Celebrity (FamousIQ) | dynamic | 984 | 1 | 61 | 154 |
| /famous-iq/selena-gomez | Celebrity (FamousIQ) | dynamic | 726 | 1 | 60 | 154 |
| /famous-iq/serena-williams | Celebrity (FamousIQ) | dynamic | 746 | 9 | 63 | 154 |
| /famous-iq/sergey-brin | Celebrity (FamousIQ) | dynamic | 1039 | 1 | 55 | 154 |
| /famous-iq/seth-macfarlane | Celebrity (FamousIQ) | dynamic | 1068 | 1 | 59 | 154 |
| /famous-iq/shakira | Celebrity (FamousIQ) | dynamic | 722 | 41 | 55 | 154 |
| /famous-iq/shaquille-oneal | Celebrity (FamousIQ) | dynamic | 1066 | 1 | 65 | 154 |
| /famous-iq/sharon-stone | Celebrity (FamousIQ) | dynamic | 1065 | 1 | 56 | 154 |
| /famous-iq/simone-biles | Celebrity (FamousIQ) | dynamic | 776 | 6 | 60 | 154 |
| /famous-iq/snoop-dogg | Celebrity (FamousIQ) | dynamic | 764 | 5 | 58 | 154 |
| /famous-iq/socrates | Celebrity (FamousIQ) | dynamic | 878 | 1 | 52 | 154 |
| /famous-iq/srinivasa-ramanujan | Celebrity (FamousIQ) | dynamic | 1058 | 8 | 63 | 154 |
| /famous-iq/stephen-colbert | Celebrity (FamousIQ) | dynamic | 1134 | 1 | 59 | 154 |
| /famous-iq/stephen-curry | Celebrity (FamousIQ) | dynamic | 755 | 15 | 61 | 154 |
| /famous-iq/stephen-fry | Celebrity (FamousIQ) | dynamic | 1149 | 1 | 55 | 154 |
| /famous-iq/stephen-hawking | Celebrity (FamousIQ) | dynamic | 775 | 326 | 56 | 154 |
| /famous-iq/stephen-merchant | Celebrity (FamousIQ) | dynamic | 1077 | 1 | 60 | 154 |
| /famous-iq/steve-jobs | Celebrity (FamousIQ) | dynamic | 774 | 142 | 58 | 154 |
| /famous-iq/steve-martin | Celebrity (FamousIQ) | dynamic | 1126 | 1 | 56 | 154 |
| /famous-iq/steven-pinker | Celebrity (FamousIQ) | dynamic | 960 | 1 | 57 | 154 |
| /famous-iq/sundar-pichai | Celebrity (FamousIQ) | dynamic | 765 | 5 | 61 | 154 |
| /famous-iq/sza | Celebrity (FamousIQ) | dynamic | 977 | 1 | 47 | 154 |
| /famous-iq/taylor-swift | Celebrity (FamousIQ) | dynamic | 774 | 132 | 61 | 154 |
| /famous-iq/terence-tao | Celebrity (FamousIQ) | dynamic | 757 | 1 | 59 | 154 |
| /famous-iq/the-weeknd | Celebrity (FamousIQ) | dynamic | 973 | 1 | 69 | 154 |
| /famous-iq/thomas-edison | Celebrity (FamousIQ) | dynamic | 1120 | 1 | 57 | 154 |
| /famous-iq/thomas-jefferson | Celebrity (FamousIQ) | dynamic | 1098 | 1 | 64 | 154 |
| /famous-iq/tiger-woods | Celebrity (FamousIQ) | dynamic | 1016 | 1 | 68 | 154 |
| /famous-iq/tim-cook | Celebrity (FamousIQ) | dynamic | 768 | 1 | 56 | 154 |
| /famous-iq/timothee-chalamet | Celebrity (FamousIQ) | dynamic | 1057 | 1 | 61 | 154 |
| /famous-iq/tina-fey | Celebrity (FamousIQ) | dynamic | 1114 | 1 | 52 | 154 |
| /famous-iq/tom-brady | Celebrity (FamousIQ) | dynamic | 780 | 1 | 57 | 154 |
| /famous-iq/tom-cruise | Celebrity (FamousIQ) | dynamic | 1001 | 1 | 54 | 154 |
| /famous-iq/tom-hanks | Celebrity (FamousIQ) | dynamic | 1117 | 1 | 53 | 154 |
| /famous-iq/tony-robbins | Celebrity (FamousIQ) | dynamic | 1101 | 1 | 56 | 154 |
| /famous-iq/travis-kelce | Celebrity (FamousIQ) | dynamic | 775 | 11 | 60 | 154 |
| /famous-iq/travis-scott | Celebrity (FamousIQ) | dynamic | 732 | 1 | 60 | 154 |
| /famous-iq/trevor-noah | Celebrity (FamousIQ) | dynamic | 1181 | 1 | 55 | 154 |
| /famous-iq/tyler-perry | Celebrity (FamousIQ) | dynamic | 741 | 1 | 59 | 154 |
| /famous-iq/tyler-the-creator | Celebrity (FamousIQ) | dynamic | 1033 | 1 | 61 | 154 |
| /famous-iq/usain-bolt | Celebrity (FamousIQ) | dynamic | 726 | 6 | 58 | 154 |
| /famous-iq/venus-williams | Celebrity (FamousIQ) | dynamic | 1121 | 1 | 58 | 154 |
| /famous-iq/victor-wembanyama | Celebrity (FamousIQ) | dynamic | 971 | 1 | 61 | 154 |
| /famous-iq/viswanathan-anand | Celebrity (FamousIQ) | dynamic | 737 | 19 | 65 | 154 |
| /famous-iq/vladimir-putin | Celebrity (FamousIQ) | dynamic | 1055 | 1 | 64 | 154 |
| /famous-iq/volodymyr-zelensky | Celebrity (FamousIQ) | dynamic | 1129 | 1 | 62 | 154 |
| /famous-iq/voltaire | Celebrity (FamousIQ) | dynamic | 887 | 5 | 52 | 154 |
| /famous-iq/warren-buffett | Celebrity (FamousIQ) | dynamic | 786 | 84 | 62 | 154 |
| /famous-iq/wayne-gretzky | Celebrity (FamousIQ) | dynamic | 1155 | 1 | 57 | 154 |
| /famous-iq/will-ferrell | Celebrity (FamousIQ) | dynamic | 1062 | 1 | 56 | 154 |
| /famous-iq/will-smith | Celebrity (FamousIQ) | dynamic | 738 | 1 | 58 | 154 |
| /famous-iq/william-shakespeare | Celebrity (FamousIQ) | dynamic | 854 | 2 | 63 | 154 |
| /famous-iq/winston-churchill | Celebrity (FamousIQ) | dynamic | 1129 | 1 | 61 | 154 |
| /famous-iq/wolfgang-mozart | Celebrity (FamousIQ) | dynamic | 799 | 5 | 71 | 154 |
| /famous-iq/xi-jinping | Celebrity (FamousIQ) | dynamic | 1001 | 1 | 66 | 154 |
| /famous-iq/yo-yo-ma | Celebrity (FamousIQ) | dynamic | 751 | 1 | 56 | 154 |
| /famous-iq/yoshua-bengio | Celebrity (FamousIQ) | dynamic | 944 | 1 | 57 | 154 |
| /famous-iq/yuval-noah-harari | Celebrity (FamousIQ) | dynamic | 1177 | 1 | 61 | 154 |
| /famous-iq/zendaya | Celebrity (FamousIQ) | dynamic | 717 | 1 | 55 | 154 |
| /genius-iq | Core/static page | static | 951 | 1056 | 67 | 154 |
| /good-iq-score | Core/static page | static | 970 | 169 | 80 | 154 |
| /gre-to-iq | Core/static page | static | 815 | 41 | 69 | 154 |
| /highest-iq-ever | Core/static page | static | 1185 | 317 | 69 | 154 |
| /how-it-works | Core/static page | static | 988 | 1055 | 65 | 154 |
| /how-to-improve-iq | Core/static page | static | 1550 | 1055 | 62 | 154 |
| /iq-and/adhd | Condition (ConditionIQ) | dynamic | 931 | 34 | 49 | 154 |
| /iq-and/adhd-hyperactive | Condition (ConditionIQ) | dynamic | 1041 | 0 | 99 | 154 |
| /iq-and/adhd-inattentive | Condition (ConditionIQ) | dynamic | 1030 | 0 | 62 | 154 |
| /iq-and/anxiety | Condition (ConditionIQ) | dynamic | 978 | 34 | 73 | 154 |
| /iq-and/autism | Condition (ConditionIQ) | dynamic | 970 | 34 | 59 | 154 |
| /iq-and/autism-level-1 | Condition (ConditionIQ) | dynamic | 1081 | 0 | 75 | 154 |
| /iq-and/autism-level-2 | Condition (ConditionIQ) | dynamic | 1070 | 0 | 82 | 154 |
| /iq-and/bipolar-disorder | Condition (ConditionIQ) | dynamic | 985 | 6 | 63 | 154 |
| /iq-and/borderline-personality | Condition (ConditionIQ) | dynamic | 1029 | 0 | 87 | 154 |
| /iq-and/cerebral-palsy | Condition (ConditionIQ) | dynamic | 1113 | 0 | 87 | 154 |
| /iq-and/chronic-fatigue | Condition (ConditionIQ) | dynamic | 1082 | 0 | 73 | 154 |
| /iq-and/dementia | Condition (ConditionIQ) | dynamic | 1073 | 0 | 72 | 154 |
| /iq-and/depression | Condition (ConditionIQ) | dynamic | 938 | 34 | 75 | 154 |
| /iq-and/down-syndrome | Condition (ConditionIQ) | dynamic | 974 | 0 | 67 | 154 |
| /iq-and/dyscalculia | Condition (ConditionIQ) | dynamic | 986 | 0 | 76 | 154 |
| /iq-and/dyslexia | Condition (ConditionIQ) | dynamic | 946 | 34 | 47 | 154 |
| /iq-and/eating-disorder | Condition (ConditionIQ) | dynamic | 1088 | 0 | 88 | 154 |
| /iq-and/epilepsy | Condition (ConditionIQ) | dynamic | 1051 | 0 | 77 | 154 |
| /iq-and/fetal-alcohol-syndrome | Condition (ConditionIQ) | dynamic | 1091 | 0 | 91 | 154 |
| /iq-and/fragile-x | Condition (ConditionIQ) | dynamic | 1086 | 0 | 98 | 154 |
| /iq-and/gifted | Condition (ConditionIQ) | dynamic | 1046 | 0 | 64 | 154 |
| /iq-and/high-iq-problems | Condition (ConditionIQ) | dynamic | 1078 | 0 | 77 | 154 |
| /iq-and/hypothyroidism | Condition (ConditionIQ) | dynamic | 1036 | 0 | 81 | 154 |
| /iq-and/intellectual-disability | Condition (ConditionIQ) | dynamic | 1049 | 0 | 77 | 154 |
| /iq-and/lead-exposure | Condition (ConditionIQ) | dynamic | 1135 | 0 | 78 | 154 |
| /iq-and/narcissistic-personality | Condition (ConditionIQ) | dynamic | 1079 | 0 | 75 | 154 |
| /iq-and/ocd | Condition (ConditionIQ) | dynamic | 1022 | 0 | 84 | 154 |
| /iq-and/panic-disorder | Condition (ConditionIQ) | dynamic | 1072 | 0 | 82 | 154 |
| /iq-and/ptsd | Condition (ConditionIQ) | dynamic | 1028 | 0 | 66 | 154 |
| /iq-and/schizophrenia | Condition (ConditionIQ) | dynamic | 966 | 34 | 54 | 154 |
| /iq-and/sleep-apnea | Condition (ConditionIQ) | dynamic | 1073 | 0 | 74 | 154 |
| /iq-and/social-anxiety | Condition (ConditionIQ) | dynamic | 1076 | 0 | 91 | 154 |
| /iq-and/tourette-syndrome | Condition (ConditionIQ) | dynamic | 1067 | 0 | 79 | 154 |
| /iq-and/traumatic-brain-injury | Condition (ConditionIQ) | dynamic | 1023 | 0 | 78 | 154 |
| /iq-and/williams-syndrome | Condition (ConditionIQ) | dynamic | 1076 | 0 | 72 | 154 |
| /iq-by-age/adults | Age (AgeIQ) | dynamic | 827 | 23 | 66 | 154 |
| /iq-by-age/age-10 | Age (AgeIQ) | dynamic | 843 | 22 | 55 | 154 |
| /iq-by-age/age-11 | Age (AgeIQ) | dynamic | 850 | 22 | 55 | 154 |
| /iq-by-age/age-12 | Age (AgeIQ) | dynamic | 839 | 22 | 55 | 154 |
| /iq-by-age/age-13 | Age (AgeIQ) | dynamic | 835 | 22 | 55 | 154 |
| /iq-by-age/age-14 | Age (AgeIQ) | dynamic | 860 | 22 | 55 | 154 |
| /iq-by-age/age-15 | Age (AgeIQ) | dynamic | 850 | 22 | 55 | 154 |
| /iq-by-age/age-16 | Age (AgeIQ) | dynamic | 858 | 22 | 55 | 154 |
| /iq-by-age/age-17 | Age (AgeIQ) | dynamic | 845 | 22 | 55 | 154 |
| /iq-by-age/age-18 | Age (AgeIQ) | dynamic | 855 | 22 | 55 | 154 |
| /iq-by-age/age-19 | Age (AgeIQ) | dynamic | 839 | 22 | 55 | 154 |
| /iq-by-age/age-20 | Age (AgeIQ) | dynamic | 855 | 22 | 55 | 154 |
| /iq-by-age/age-21 | Age (AgeIQ) | dynamic | 854 | 22 | 55 | 154 |
| /iq-by-age/age-5 | Age (AgeIQ) | dynamic | 831 | 22 | 54 | 154 |
| /iq-by-age/age-6 | Age (AgeIQ) | dynamic | 833 | 22 | 54 | 154 |
| /iq-by-age/age-7 | Age (AgeIQ) | dynamic | 848 | 22 | 54 | 154 |
| /iq-by-age/age-8 | Age (AgeIQ) | dynamic | 835 | 22 | 54 | 154 |
| /iq-by-age/age-9 | Age (AgeIQ) | dynamic | 826 | 22 | 54 | 154 |
| /iq-by-age/children | Age (AgeIQ) | dynamic | 835 | 24 | 69 | 154 |
| /iq-by-age/older-adults | Age (AgeIQ) | dynamic | 841 | 22 | 74 | 154 |
| /iq-by-age/seniors | Age (AgeIQ) | dynamic | 827 | 23 | 67 | 154 |
| /iq-by-age/teenagers | Age (AgeIQ) | dynamic | 816 | 23 | 71 | 154 |
| /iq-by-age/young-adults | Age (AgeIQ) | dynamic | 805 | 23 | 74 | 154 |
| /iq-by-career | Core/static page | static | 2717 | 1057 | 62 | 154 |
| /iq-by-city | Core/static page | static | 1244 | 53 | 68 | 154 |
| /iq-by-city/amsterdam | City (CityIQ) | dynamic | 732 | 7 | 79 | 154 |
| /iq-by-city/austin | City (CityIQ) | dynamic | 779 | 2 | 78 | 154 |
| /iq-by-city/bangalore | City (CityIQ) | dynamic | 739 | 3 | 73 | 154 |
| /iq-by-city/bangkok | City (CityIQ) | dynamic | 723 | 3 | 74 | 154 |
| /iq-by-city/beijing | City (CityIQ) | dynamic | 720 | 3 | 71 | 154 |
| /iq-by-city/berlin | City (CityIQ) | dynamic | 746 | 4 | 72 | 154 |
| /iq-by-city/boston | City (CityIQ) | dynamic | 765 | 7 | 78 | 154 |
| /iq-by-city/brussels | City (CityIQ) | dynamic | 746 | 3 | 74 | 154 |
| /iq-by-city/budapest | City (CityIQ) | dynamic | 743 | 3 | 74 | 154 |
| /iq-by-city/buenos-aires | City (CityIQ) | dynamic | 755 | 2 | 80 | 154 |
| /iq-by-city/cairo | City (CityIQ) | dynamic | 763 | 3 | 69 | 154 |
| /iq-by-city/chicago | City (CityIQ) | dynamic | 754 | 3 | 79 | 154 |
| /iq-by-city/copenhagen | City (CityIQ) | dynamic | 724 | 3 | 76 | 154 |
| /iq-by-city/delhi | City (CityIQ) | dynamic | 707 | 3 | 69 | 154 |
| /iq-by-city/dubai | City (CityIQ) | dynamic | 765 | 7 | 84 | 154 |
| /iq-by-city/hong-kong-city | City (CityIQ) | dynamic | 731 | 5 | 73 | 154 |
| /iq-by-city/istanbul | City (CityIQ) | dynamic | 734 | 4 | 73 | 154 |
| /iq-by-city/jakarta | City (CityIQ) | dynamic | 736 | 3 | 75 | 154 |
| /iq-by-city/johannesburg | City (CityIQ) | dynamic | 750 | 3 | 83 | 154 |
| /iq-by-city/kuala-lumpur | City (CityIQ) | dynamic | 729 | 3 | 79 | 154 |
| /iq-by-city/london | City (CityIQ) | dynamic | 753 | 6 | 79 | 154 |
| /iq-by-city/los-angeles | City (CityIQ) | dynamic | 770 | 2 | 83 | 154 |
| /iq-by-city/madrid | City (CityIQ) | dynamic | 740 | 2 | 70 | 154 |
| /iq-by-city/melbourne | City (CityIQ) | dynamic | 729 | 2 | 77 | 154 |
| /iq-by-city/mexico-city | City (CityIQ) | dynamic | 771 | 3 | 76 | 154 |
| /iq-by-city/miami | City (CityIQ) | dynamic | 759 | 4 | 77 | 154 |
| /iq-by-city/montreal | City (CityIQ) | dynamic | 739 | 2 | 73 | 154 |
| /iq-by-city/mumbai | City (CityIQ) | dynamic | 737 | 3 | 70 | 154 |
| /iq-by-city/nairobi | City (CityIQ) | dynamic | 732 | 2 | 71 | 154 |
| /iq-by-city/new-york | City (CityIQ) | dynamic | 747 | 7 | 80 | 154 |
| /iq-by-city/osaka | City (CityIQ) | dynamic | 711 | 2 | 69 | 154 |
| /iq-by-city/oslo | City (CityIQ) | dynamic | 743 | 4 | 69 | 154 |
| /iq-by-city/paris | City (CityIQ) | dynamic | 742 | 5 | 70 | 154 |
| /iq-by-city/prague | City (CityIQ) | dynamic | 744 | 4 | 79 | 154 |
| /iq-by-city/rome | City (CityIQ) | dynamic | 732 | 2 | 68 | 154 |
| /iq-by-city/san-francisco | City (CityIQ) | dynamic | 770 | 7 | 85 | 154 |
| /iq-by-city/sao-paulo | City (CityIQ) | dynamic | 762 | 4 | 74 | 154 |
| /iq-by-city/seattle | City (CityIQ) | dynamic | 753 | 6 | 79 | 154 |
| /iq-by-city/seoul | City (CityIQ) | dynamic | 738 | 4 | 75 | 154 |
| /iq-by-city/shanghai | City (CityIQ) | dynamic | 715 | 4 | 72 | 154 |
| /iq-by-city/shenzhen | City (CityIQ) | dynamic | 748 | 3 | 72 | 154 |
| /iq-by-city/singapore-city | City (CityIQ) | dynamic | 725 | 13 | 82 | 154 |
| /iq-by-city/stockholm | City (CityIQ) | dynamic | 721 | 4 | 74 | 154 |
| /iq-by-city/sydney | City (CityIQ) | dynamic | 742 | 2 | 74 | 154 |
| /iq-by-city/taipei | City (CityIQ) | dynamic | 716 | 6 | 71 | 154 |
| /iq-by-city/tel-aviv | City (CityIQ) | dynamic | 796 | 3 | 73 | 154 |
| /iq-by-city/tokyo | City (CityIQ) | dynamic | 704 | 5 | 69 | 154 |
| /iq-by-city/toronto | City (CityIQ) | dynamic | 747 | 4 | 72 | 154 |
| /iq-by-city/vancouver | City (CityIQ) | dynamic | 753 | 3 | 74 | 154 |
| /iq-by-city/vienna | City (CityIQ) | dynamic | 740 | 4 | 72 | 154 |
| /iq-by-city/warsaw | City (CityIQ) | dynamic | 734 | 4 | 71 | 154 |
| /iq-by-city/zurich | City (CityIQ) | dynamic | 742 | 6 | 76 | 154 |
| /iq-by-major | Core/static page | static | 892 | 41 | 52 | 154 |
| /iq-by-major/accounting | Major (MajorIQ) | dynamic | 771 | 4 | 45 | 154 |
| /iq-by-major/anthropology | Major (MajorIQ) | dynamic | 713 | 2 | 47 | 154 |
| /iq-by-major/architecture | Major (MajorIQ) | dynamic | 748 | 2 | 47 | 154 |
| /iq-by-major/biology | Major (MajorIQ) | dynamic | 743 | 6 | 42 | 154 |
| /iq-by-major/biomedical-engineering | Major (MajorIQ) | dynamic | 766 | 2 | 57 | 154 |
| /iq-by-major/business-administration | Major (MajorIQ) | dynamic | 751 | 4 | 58 | 154 |
| /iq-by-major/chemical-engineering | Major (MajorIQ) | dynamic | 765 | 3 | 55 | 154 |
| /iq-by-major/chemistry | Major (MajorIQ) | dynamic | 725 | 40 | 44 | 154 |
| /iq-by-major/civil-engineering | Major (MajorIQ) | dynamic | 741 | 3 | 52 | 154 |
| /iq-by-major/communications | Major (MajorIQ) | dynamic | 747 | 6 | 49 | 154 |
| /iq-by-major/computer-science | Major (MajorIQ) | dynamic | 740 | 40 | 51 | 154 |
| /iq-by-major/criminal-justice | Major (MajorIQ) | dynamic | 761 | 1 | 51 | 154 |
| /iq-by-major/data-science | Major (MajorIQ) | dynamic | 789 | 4 | 47 | 154 |
| /iq-by-major/economics | Major (MajorIQ) | dynamic | 727 | 11 | 44 | 154 |
| /iq-by-major/education | Major (MajorIQ) | dynamic | 756 | 2 | 44 | 154 |
| /iq-by-major/electrical-engineering | Major (MajorIQ) | dynamic | 765 | 4 | 57 | 154 |
| /iq-by-major/engineering | Major (MajorIQ) | dynamic | 725 | 40 | 46 | 154 |
| /iq-by-major/english-literature | Major (MajorIQ) | dynamic | 761 | 6 | 53 | 154 |
| /iq-by-major/film-studies | Major (MajorIQ) | dynamic | 751 | 2 | 47 | 154 |
| /iq-by-major/finance | Major (MajorIQ) | dynamic | 761 | 5 | 42 | 154 |
| /iq-by-major/fine-arts | Major (MajorIQ) | dynamic | 784 | 4 | 44 | 154 |
| /iq-by-major/history | Major (MajorIQ) | dynamic | 737 | 4 | 42 | 154 |
| /iq-by-major/information-technology | Major (MajorIQ) | dynamic | 752 | 1 | 57 | 154 |
| /iq-by-major/marketing | Major (MajorIQ) | dynamic | 736 | 2 | 44 | 154 |
| /iq-by-major/mathematics | Major (MajorIQ) | dynamic | 716 | 40 | 46 | 154 |
| /iq-by-major/mechanical-engineering | Major (MajorIQ) | dynamic | 763 | 2 | 57 | 154 |
| /iq-by-major/music | Major (MajorIQ) | dynamic | 763 | 3 | 40 | 154 |
| /iq-by-major/neuroscience | Major (MajorIQ) | dynamic | 719 | 4 | 47 | 154 |
| /iq-by-major/nursing | Major (MajorIQ) | dynamic | 761 | 2 | 42 | 154 |
| /iq-by-major/philosophy | Major (MajorIQ) | dynamic | 745 | 40 | 45 | 154 |
| /iq-by-major/physics | Major (MajorIQ) | dynamic | 719 | 40 | 42 | 154 |
| /iq-by-major/political-science | Major (MajorIQ) | dynamic | 748 | 6 | 52 | 154 |
| /iq-by-major/pre-law | Major (MajorIQ) | dynamic | 794 | 4 | 42 | 154 |
| /iq-by-major/pre-medicine | Major (MajorIQ) | dynamic | 755 | 6 | 47 | 154 |
| /iq-by-major/psychology | Major (MajorIQ) | dynamic | 735 | 8 | 45 | 154 |
| /iq-by-major/real-estate | Major (MajorIQ) | dynamic | 774 | 1 | 46 | 154 |
| /iq-by-major/social-work | Major (MajorIQ) | dynamic | 765 | 2 | 46 | 154 |
| /iq-by-major/sociology | Major (MajorIQ) | dynamic | 730 | 6 | 44 | 154 |
| /iq-by-major/statistics | Major (MajorIQ) | dynamic | 736 | 4 | 45 | 154 |
| /iq-by-major/theater | Major (MajorIQ) | dynamic | 743 | 4 | 42 | 154 |
| /iq-compare | Core/static page | static | 961 | 25 | 67 | 154 |
| /iq-compare/athletes-vs-non-athletes | Compare (IQCompare) | dynamic | 871 | 4 | 75 | 154 |
| /iq-compare/college-vs-no-college | Compare (IQCompare) | dynamic | 916 | 6 | 68 | 154 |
| /iq-compare/doctor-vs-engineer | Compare (IQCompare) | dynamic | 845 | 5 | 55 | 154 |
| /iq-compare/engineer-vs-artist | Compare (IQCompare) | dynamic | 908 | 4 | 59 | 154 |
| /iq-compare/gamers-vs-non-gamers | Compare (IQCompare) | dynamic | 860 | 3 | 61 | 154 |
| /iq-compare/india-vs-china | Compare (IQCompare) | dynamic | 934 | 2 | 55 | 154 |
| /iq-compare/introverts-vs-extroverts | Compare (IQCompare) | dynamic | 838 | 6 | 60 | 154 |
| /iq-compare/lawyer-vs-doctor | Compare (IQCompare) | dynamic | 852 | 3 | 52 | 154 |
| /iq-compare/left-brain-vs-right-brain | Compare (IQCompare) | dynamic | 833 | 1 | 58 | 154 |
| /iq-compare/meditation-vs-no-meditation | Compare (IQCompare) | dynamic | 894 | 6 | 81 | 154 |
| /iq-compare/men-vs-women | Compare (IQCompare) | dynamic | 890 | 4 | 66 | 154 |
| /iq-compare/morning-exercise-vs-sedentary | Compare (IQCompare) | dynamic | 908 | 5 | 75 | 154 |
| /iq-compare/night-owl-vs-early-bird | Compare (IQCompare) | dynamic | 884 | 4 | 62 | 154 |
| /iq-compare/only-child-vs-siblings | Compare (IQCompare) | dynamic | 880 | 2 | 70 | 154 |
| /iq-compare/phd-vs-masters | Compare (IQCompare) | dynamic | 894 | 4 | 68 | 154 |
| /iq-compare/private-school-vs-public | Compare (IQCompare) | dynamic | 901 | 2 | 72 | 154 |
| /iq-compare/programmer-vs-accountant | Compare (IQCompare) | dynamic | 827 | 3 | 65 | 154 |
| /iq-compare/readers-vs-tv-watchers | Compare (IQCompare) | dynamic | 901 | 5 | 58 | 154 |
| /iq-compare/scientist-vs-businessman | Compare (IQCompare) | dynamic | 892 | 6 | 65 | 154 |
| /iq-compare/stem-vs-humanities | Compare (IQCompare) | dynamic | 875 | 6 | 63 | 154 |
| /iq-compare/uk-vs-germany | Compare (IQCompare) | dynamic | 832 | 4 | 54 | 154 |
| /iq-compare/us-vs-china | Compare (IQCompare) | dynamic | 865 | 5 | 53 | 154 |
| /iq-compare/us-vs-japan | Compare (IQCompare) | dynamic | 855 | 5 | 53 | 154 |
| /iq-compare/us-vs-uk | Compare (IQCompare) | dynamic | 874 | 4 | 50 | 154 |
| /iq-compare/vegetarian-vs-meat-eater | Compare (IQCompare) | dynamic | 930 | 1 | 60 | 154 |
| /iq-myths/animal-intelligence-iq | Myth (IQMyth) | dynamic | 865 | 53 | 52 | 154 |
| /iq-myths/are-left-handed-people-smarter | Myth (IQMyth) | dynamic | 904 | 53 | 64 | 154 |
| /iq-myths/bilingual-iq | Myth (IQMyth) | dynamic | 905 | 53 | 69 | 154 |
| /iq-myths/birth-order-and-iq | Myth (IQMyth) | dynamic | 873 | 53 | 65 | 154 |
| /iq-myths/brain-size-and-iq | Myth (IQMyth) | dynamic | 898 | 53 | 62 | 154 |
| /iq-myths/breastfeeding-and-iq | Myth (IQMyth) | dynamic | 897 | 53 | 64 | 154 |
| /iq-myths/class-size-and-iq | Myth (IQMyth) | dynamic | 867 | 53 | 67 | 154 |
| /iq-myths/cold-weather-and-iq | Myth (IQMyth) | dynamic | 879 | 53 | 68 | 154 |
| /iq-myths/do-video-games-make-you-smarter | Myth (IQMyth) | dynamic | 884 | 53 | 65 | 154 |
| /iq-myths/does-alcohol-kill-brain-cells | Myth (IQMyth) | dynamic | 925 | 53 | 63 | 154 |
| /iq-myths/does-chess-increase-iq | Myth (IQMyth) | dynamic | 856 | 53 | 61 | 154 |
| /iq-myths/does-coffee-make-you-smarter | Myth (IQMyth) | dynamic | 877 | 53 | 62 | 154 |
| /iq-myths/does-exercise-increase-iq | Myth (IQMyth) | dynamic | 887 | 53 | 59 | 154 |
| /iq-myths/does-iq-decrease-with-age | Myth (IQMyth) | dynamic | 916 | 76 | 59 | 154 |
| /iq-myths/does-iq-determine-success | Myth (IQMyth) | dynamic | 891 | 55 | 59 | 154 |
| /iq-myths/does-marijuana-lower-iq | Myth (IQMyth) | dynamic | 936 | 53 | 57 | 154 |
| /iq-myths/does-meditation-increase-iq | Myth (IQMyth) | dynamic | 894 | 53 | 61 | 154 |
| /iq-myths/does-money-increase-iq | Myth (IQMyth) | dynamic | 864 | 53 | 66 | 154 |
| /iq-myths/does-reading-make-you-smarter | Myth (IQMyth) | dynamic | 912 | 53 | 63 | 154 |
| /iq-myths/does-sleep-affect-iq | Myth (IQMyth) | dynamic | 896 | 53 | 54 | 154 |
| /iq-myths/does-tv-lower-iq | Myth (IQMyth) | dynamic | 901 | 53 | 59 | 154 |
| /iq-myths/dyslexia-and-iq | Myth (IQMyth) | dynamic | 869 | 53 | 57 | 154 |
| /iq-myths/fasting-and-iq | Myth (IQMyth) | dynamic | 907 | 53 | 73 | 154 |
| /iq-myths/handwriting-and-intelligence | Myth (IQMyth) | dynamic | 856 | 53 | 70 | 154 |
| /iq-myths/height-and-iq | Myth (IQMyth) | dynamic | 882 | 53 | 66 | 154 |
| /iq-myths/ideal-iq-score | Myth (IQMyth) | dynamic | 896 | 53 | 54 | 154 |
| /iq-myths/internet-and-iq | Myth (IQMyth) | dynamic | 913 | 53 | 60 | 154 |
| /iq-myths/introverts-vs-extroverts-iq | Myth (IQMyth) | dynamic | 848 | 53 | 72 | 154 |
| /iq-myths/iq-and-creativity | Myth (IQMyth) | dynamic | 880 | 53 | 60 | 154 |
| /iq-myths/iq-and-mental-health | Myth (IQMyth) | dynamic | 933 | 53 | 78 | 154 |
| /iq-myths/iq-and-race | Myth (IQMyth) | dynamic | 958 | 53 | 58 | 154 |
| /iq-myths/iq-changes-throughout-day | Myth (IQMyth) | dynamic | 878 | 53 | 72 | 154 |
| /iq-myths/iq-gender-differences | Myth (IQMyth) | dynamic | 918 | 53 | 60 | 154 |
| /iq-myths/iq-genetics | Myth (IQMyth) | dynamic | 919 | 53 | 53 | 154 |
| /iq-myths/iq-supplements-nootropics | Myth (IQMyth) | dynamic | 909 | 53 | 70 | 154 |
| /iq-myths/iq-test-cultural-bias | Myth (IQMyth) | dynamic | 897 | 53 | 64 | 154 |
| /iq-myths/is-iq-fixed-at-birth | Myth (IQMyth) | dynamic | 915 | 53 | 54 | 154 |
| /iq-myths/is-iq-testing-outdated | Myth (IQMyth) | dynamic | 917 | 53 | 56 | 154 |
| /iq-myths/is-iq-the-same-as-intelligence | Myth (IQMyth) | dynamic | 945 | 53 | 64 | 154 |
| /iq-myths/mozart-effect-iq | Myth (IQMyth) | dynamic | 888 | 53 | 75 | 154 |
| /iq-myths/multilingualism-increases-iq | Myth (IQMyth) | dynamic | 859 | 53 | 78 | 154 |
| /iq-myths/multiple-types-of-intelligence | Myth (IQMyth) | dynamic | 894 | 53 | 77 | 154 |
| /iq-myths/music-training-and-iq | Myth (IQMyth) | dynamic | 912 | 53 | 65 | 154 |
| /iq-myths/night-owls-smarter | Myth (IQMyth) | dynamic | 897 | 53 | 56 | 154 |
| /iq-myths/only-child-iq | Myth (IQMyth) | dynamic | 929 | 53 | 59 | 154 |
| /iq-myths/podcasts-and-iq | Myth (IQMyth) | dynamic | 857 | 53 | 72 | 154 |
| /iq-myths/poverty-and-iq | Myth (IQMyth) | dynamic | 915 | 53 | 55 | 154 |
| /iq-myths/screen-time-children-iq | Myth (IQMyth) | dynamic | 917 | 53 | 75 | 154 |
| /iq-myths/sugar-hyperactivity-iq | Myth (IQMyth) | dynamic | 882 | 53 | 66 | 154 |
| /iq-myths/trauma-and-iq | Myth (IQMyth) | dynamic | 897 | 53 | 53 | 154 |
| /iq-myths/twins-and-iq | Myth (IQMyth) | dynamic | 910 | 53 | 59 | 154 |
| /iq-myths/vegan-diet-and-iq | Myth (IQMyth) | dynamic | 849 | 53 | 59 | 154 |
| /iq-myths/vocabulary-and-iq | Myth (IQMyth) | dynamic | 891 | 53 | 75 | 154 |
| /iq-myths/wealth-and-intelligence | Myth (IQMyth) | dynamic | 893 | 53 | 64 | 154 |
| /iq-needed-for/accountant | Career (CareerIQ) | dynamic | 1103 | 18 | 52 | 154 |
| /iq-needed-for/actuary | Career (CareerIQ) | dynamic | 1114 | 3 | 72 | 154 |
| /iq-needed-for/air-traffic-controller | Career (CareerIQ) | dynamic | 1127 | 1 | 87 | 154 |
| /iq-needed-for/airline-pilot | Career (CareerIQ) | dynamic | 1131 | 2 | 67 | 154 |
| /iq-needed-for/anesthesiologist | Career (CareerIQ) | dynamic | 1106 | 35 | 81 | 154 |
| /iq-needed-for/architect | Career (CareerIQ) | dynamic | 1076 | 8 | 74 | 154 |
| /iq-needed-for/art-director | Career (CareerIQ) | dynamic | 601 | 1 | 77 | 154 |
| /iq-needed-for/astronaut | Career (CareerIQ) | dynamic | 683 | 26 | 47 | 154 |
| /iq-needed-for/athletic-trainer | Career (CareerIQ) | dynamic | 589 | 2 | 81 | 154 |
| /iq-needed-for/audiologist | Career (CareerIQ) | dynamic | 566 | 1 | 76 | 154 |
| /iq-needed-for/biomedical-engineer | Career (CareerIQ) | dynamic | 587 | 4 | 84 | 154 |
| /iq-needed-for/blockchain-developer | Career (CareerIQ) | dynamic | 591 | 1 | 85 | 154 |
| /iq-needed-for/carpenter | Career (CareerIQ) | dynamic | 1122 | 1 | 74 | 154 |
| /iq-needed-for/ceo | Career (CareerIQ) | dynamic | 1170 | 6 | 47 | 154 |
| /iq-needed-for/chef | Career (CareerIQ) | dynamic | 1149 | 7 | 69 | 154 |
| /iq-needed-for/chiropractor | Career (CareerIQ) | dynamic | 1004 | 1 | 77 | 154 |
| /iq-needed-for/clinical-pharmacist | Career (CareerIQ) | dynamic | 1081 | 2 | 86 | 154 |
| /iq-needed-for/clinical-psychologist | Career (CareerIQ) | dynamic | 589 | 2 | 86 | 154 |
| /iq-needed-for/clinical-research-coordinator | Career (CareerIQ) | dynamic | 586 | 1 | 94 | 154 |
| /iq-needed-for/cloud-architect | Career (CareerIQ) | dynamic | 600 | 1 | 80 | 154 |
| /iq-needed-for/content-creator | Career (CareerIQ) | dynamic | 1152 | 4 | 80 | 154 |
| /iq-needed-for/cybersecurity-analyst | Career (CareerIQ) | dynamic | 1127 | 4 | 86 | 154 |
| /iq-needed-for/data-scientist | Career (CareerIQ) | dynamic | 1125 | 44 | 79 | 154 |
| /iq-needed-for/database-administrator | Career (CareerIQ) | dynamic | 598 | 2 | 87 | 154 |
| /iq-needed-for/dental-assistant | Career (CareerIQ) | dynamic | 602 | 4 | 81 | 154 |
| /iq-needed-for/dental-hygienist | Career (CareerIQ) | dynamic | 1105 | 2 | 82 | 154 |
| /iq-needed-for/dentist | Career (CareerIQ) | dynamic | 1081 | 7 | 43 | 154 |
| /iq-needed-for/dermatologist | Career (CareerIQ) | dynamic | 578 | 1 | 78 | 154 |
| /iq-needed-for/doctor | Career (CareerIQ) | dynamic | 1069 | 266 | 55 | 154 |
| /iq-needed-for/economist | Career (CareerIQ) | dynamic | 1124 | 3 | 74 | 154 |
| /iq-needed-for/electrician | Career (CareerIQ) | dynamic | 1066 | 21 | 51 | 154 |
| /iq-needed-for/emt | Career (CareerIQ) | dynamic | 613 | 1 | 93 | 154 |
| /iq-needed-for/engineer | Career (CareerIQ) | dynamic | 1073 | 276 | 49 | 154 |
| /iq-needed-for/epidemiologist | Career (CareerIQ) | dynamic | 583 | 1 | 79 | 154 |
| /iq-needed-for/ethical-hacker | Career (CareerIQ) | dynamic | 615 | 1 | 79 | 154 |
| /iq-needed-for/film-director | Career (CareerIQ) | dynamic | 607 | 2 | 78 | 154 |
| /iq-needed-for/financial-analyst | Career (CareerIQ) | dynamic | 1160 | 5 | 82 | 154 |
| /iq-needed-for/firefighter | Career (CareerIQ) | dynamic | 1086 | 17 | 76 | 154 |
| /iq-needed-for/forensic-scientist | Career (CareerIQ) | dynamic | 602 | 1 | 83 | 154 |
| /iq-needed-for/genetic-counselor | Career (CareerIQ) | dynamic | 585 | 1 | 82 | 154 |
| /iq-needed-for/graphic-designer | Career (CareerIQ) | dynamic | 1138 | 7 | 81 | 154 |
| /iq-needed-for/hvac-technician | Career (CareerIQ) | dynamic | 572 | 1 | 80 | 154 |
| /iq-needed-for/insurance-actuary | Career (CareerIQ) | dynamic | 601 | 1 | 82 | 154 |
| /iq-needed-for/interpreter-translator | Career (CareerIQ) | dynamic | 588 | 1 | 87 | 154 |
| /iq-needed-for/investment-banker | Career (CareerIQ) | dynamic | 1117 | 3 | 82 | 154 |
| /iq-needed-for/journalist | Career (CareerIQ) | dynamic | 1095 | 8 | 75 | 154 |
| /iq-needed-for/judge | Career (CareerIQ) | dynamic | 1149 | 37 | 70 | 154 |
| /iq-needed-for/landscape-architect | Career (CareerIQ) | dynamic | 587 | 2 | 84 | 154 |
| /iq-needed-for/lawyer | Career (CareerIQ) | dynamic | 1085 | 296 | 45 | 154 |
| /iq-needed-for/librarian | Career (CareerIQ) | dynamic | 1030 | 1 | 74 | 154 |
| /iq-needed-for/management-consultant | Career (CareerIQ) | dynamic | 601 | 1 | 88 | 154 |
| /iq-needed-for/marketing-manager | Career (CareerIQ) | dynamic | 1086 | 4 | 82 | 154 |
| /iq-needed-for/marriage-family-therapist | Career (CareerIQ) | dynamic | 615 | 1 | 94 | 154 |
| /iq-needed-for/master-electrician | Career (CareerIQ) | dynamic | 1146 | 1 | 85 | 154 |
| /iq-needed-for/mathematician | Career (CareerIQ) | dynamic | 1185 | 61 | 78 | 154 |
| /iq-needed-for/mechanic | Career (CareerIQ) | dynamic | 1092 | 2 | 73 | 154 |
| /iq-needed-for/mechanical-engineer | Career (CareerIQ) | dynamic | 592 | 1 | 84 | 154 |
| /iq-needed-for/military-officer | Career (CareerIQ) | dynamic | 1076 | 6 | 56 | 154 |
| /iq-needed-for/neurosurgeon | Career (CareerIQ) | dynamic | 569 | 34 | 77 | 154 |
| /iq-needed-for/nuclear-engineer | Career (CareerIQ) | dynamic | 590 | 1 | 81 | 154 |
| /iq-needed-for/nurse | Career (CareerIQ) | dynamic | 1085 | 68 | 47 | 154 |
| /iq-needed-for/nurse-anesthetist | Career (CareerIQ) | dynamic | 585 | 1 | 82 | 154 |
| /iq-needed-for/nurse-practitioner | Career (CareerIQ) | dynamic | 1130 | 4 | 83 | 154 |
| /iq-needed-for/occupational-therapist | Career (CareerIQ) | dynamic | 1107 | 2 | 87 | 154 |
| /iq-needed-for/optometrist | Career (CareerIQ) | dynamic | 1017 | 3 | 76 | 154 |
| /iq-needed-for/orthodontist | Career (CareerIQ) | dynamic | 572 | 1 | 77 | 154 |
| /iq-needed-for/paramedic | Career (CareerIQ) | dynamic | 1090 | 3 | 74 | 154 |
| /iq-needed-for/patent-attorney | Career (CareerIQ) | dynamic | 582 | 4 | 80 | 154 |
| /iq-needed-for/personal-trainer | Career (CareerIQ) | dynamic | 1135 | 3 | 81 | 154 |
| /iq-needed-for/pharmacist | Career (CareerIQ) | dynamic | 1060 | 10 | 48 | 154 |
| /iq-needed-for/pharmacologist | Career (CareerIQ) | dynamic | 582 | 2 | 79 | 154 |
| /iq-needed-for/pharmacy-technician | Career (CareerIQ) | dynamic | 1111 | 4 | 86 | 154 |
| /iq-needed-for/physical-education-teacher | Career (CareerIQ) | dynamic | 601 | 1 | 91 | 154 |
| /iq-needed-for/physical-therapist | Career (CareerIQ) | dynamic | 1117 | 7 | 83 | 154 |
| /iq-needed-for/physician-assistant | Career (CareerIQ) | dynamic | 1129 | 3 | 84 | 154 |
| /iq-needed-for/pilot | Career (CareerIQ) | dynamic | 1110 | 1 | 70 | 154 |
| /iq-needed-for/plumber | Career (CareerIQ) | dynamic | 1114 | 24 | 72 | 154 |
| /iq-needed-for/police-officer | Career (CareerIQ) | dynamic | 1074 | 32 | 53 | 154 |
| /iq-needed-for/primary-care-physician | Career (CareerIQ) | dynamic | 623 | 1 | 89 | 154 |
| /iq-needed-for/professional-athlete | Career (CareerIQ) | dynamic | 1155 | 4 | 87 | 154 |
| /iq-needed-for/professor | Career (CareerIQ) | dynamic | 1136 | 49 | 74 | 154 |
| /iq-needed-for/project-manager | Career (CareerIQ) | dynamic | 1119 | 1 | 80 | 154 |
| /iq-needed-for/psychiatric-nurse | Career (CareerIQ) | dynamic | 576 | 2 | 82 | 154 |
| /iq-needed-for/psychologist | Career (CareerIQ) | dynamic | 1090 | 5 | 48 | 154 |
| /iq-needed-for/radiologist | Career (CareerIQ) | dynamic | 1133 | 4 | 76 | 154 |
| /iq-needed-for/real-estate-agent | Career (CareerIQ) | dynamic | 1144 | 4 | 82 | 154 |
| /iq-needed-for/real-estate-appraiser | Career (CareerIQ) | dynamic | 606 | 1 | 86 | 154 |
| /iq-needed-for/registered-dietitian | Career (CareerIQ) | dynamic | 1068 | 1 | 85 | 154 |
| /iq-needed-for/retail-pharmacist | Career (CareerIQ) | dynamic | 1089 | 1 | 84 | 154 |
| /iq-needed-for/robotics-engineer | Career (CareerIQ) | dynamic | 593 | 1 | 82 | 154 |
| /iq-needed-for/scientist | Career (CareerIQ) | dynamic | 1163 | 17 | 74 | 154 |
| /iq-needed-for/social-media-manager | Career (CareerIQ) | dynamic | 609 | 1 | 85 | 154 |
| /iq-needed-for/social-worker | Career (CareerIQ) | dynamic | 1126 | 13 | 78 | 154 |
| /iq-needed-for/software-developer | Career (CareerIQ) | dynamic | 1080 | 180 | 83 | 154 |
| /iq-needed-for/software-engineer | Career (CareerIQ) | dynamic | 691 | 1 | 51 | 154 |
| /iq-needed-for/speech-language-pathologist | Career (CareerIQ) | dynamic | 1099 | 2 | 92 | 154 |
| /iq-needed-for/speech-writer | Career (CareerIQ) | dynamic | 599 | 1 | 78 | 154 |
| /iq-needed-for/statistician | Career (CareerIQ) | dynamic | 1038 | 1 | 77 | 154 |
| /iq-needed-for/surgeon | Career (CareerIQ) | dynamic | 1090 | 42 | 72 | 154 |
| /iq-needed-for/teacher | Career (CareerIQ) | dynamic | 1099 | 158 | 42 | 154 |
| /iq-needed-for/truck-driver | Career (CareerIQ) | dynamic | 1095 | 12 | 77 | 154 |
| /iq-needed-for/urban-planner | Career (CareerIQ) | dynamic | 583 | 1 | 78 | 154 |
| /iq-needed-for/ux-designer | Career (CareerIQ) | dynamic | 1120 | 1 | 76 | 154 |
| /iq-needed-for/veterinarian | Career (CareerIQ) | dynamic | 1097 | 3 | 77 | 154 |
| /iq-needed-for/veterinary-surgeon | Career (CareerIQ) | dynamic | 593 | 1 | 83 | 154 |
| /iq-needed-for/veterinary-technician | Career (CareerIQ) | dynamic | 593 | 2 | 86 | 154 |
| /iq-needed-for/video-game-developer | Career (CareerIQ) | dynamic | 633 | 1 | 85 | 154 |
| /iq-needed-for/welder | Career (CareerIQ) | dynamic | 1110 | 3 | 71 | 154 |
| /iq-of-presidents | Core/static page | static | 1220 | 2 | 62 | 154 |
| /iq-percentile-chart | Core/static page | static | 761 | 1057 | 68 | 154 |
| /iq-score-ranges | Core/static page | static | 2167 | 1057 | 74 | 154 |
| /iq-test | Core/static page | static | 1070 | 1055 | 63 | 154 |
| /iq-vs-eq | Core/static page | static | 1076 | 11 | 75 | 154 |
| /is-100-iq-good | Score (IsXIQGood) | dynamic | 1257 | 31 | 56 | 154 |
| /is-101-iq-good | Score (IsXIQGood) | dynamic | 1153 | 13 | 56 | 154 |
| /is-102-iq-good | Score (IsXIQGood) | dynamic | 1202 | 9 | 56 | 154 |
| /is-103-iq-good | Score (IsXIQGood) | dynamic | 1116 | 9 | 56 | 154 |
| /is-104-iq-good | Score (IsXIQGood) | dynamic | 1151 | 11 | 56 | 154 |
| /is-105-iq-good | Score (IsXIQGood) | dynamic | 1197 | 45 | 56 | 154 |
| /is-106-iq-good | Score (IsXIQGood) | dynamic | 1162 | 11 | 56 | 154 |
| /is-107-iq-good | Score (IsXIQGood) | dynamic | 1152 | 9 | 56 | 154 |
| /is-108-iq-good | Score (IsXIQGood) | dynamic | 1212 | 22 | 56 | 154 |
| /is-109-iq-good | Score (IsXIQGood) | dynamic | 1177 | 9 | 56 | 154 |
| /is-110-iq-good | Score (IsXIQGood) | dynamic | 1224 | 49 | 55 | 154 |
| /is-111-iq-good | Score (IsXIQGood) | dynamic | 1151 | 9 | 55 | 154 |
| /is-112-iq-good | Score (IsXIQGood) | dynamic | 1159 | 16 | 55 | 154 |
| /is-113-iq-good | Score (IsXIQGood) | dynamic | 1159 | 9 | 55 | 154 |
| /is-114-iq-good | Score (IsXIQGood) | dynamic | 1174 | 10 | 55 | 154 |
| /is-115-iq-good | Score (IsXIQGood) | dynamic | 1213 | 61 | 55 | 154 |
| /is-116-iq-good | Score (IsXIQGood) | dynamic | 1160 | 10 | 55 | 154 |
| /is-117-iq-good | Score (IsXIQGood) | dynamic | 1168 | 9 | 55 | 154 |
| /is-118-iq-good | Score (IsXIQGood) | dynamic | 1183 | 19 | 55 | 154 |
| /is-119-iq-good | Score (IsXIQGood) | dynamic | 1188 | 11 | 55 | 154 |
| /is-120-iq-good | Score (IsXIQGood) | dynamic | 1281 | 57 | 63 | 154 |
| /is-121-iq-good | Score (IsXIQGood) | dynamic | 1065 | 9 | 63 | 154 |
| /is-122-iq-good | Score (IsXIQGood) | dynamic | 1118 | 12 | 63 | 154 |
| /is-123-iq-good | Score (IsXIQGood) | dynamic | 1070 | 9 | 63 | 154 |
| /is-124-iq-good | Score (IsXIQGood) | dynamic | 1077 | 9 | 63 | 154 |
| /is-125-iq-good | Score (IsXIQGood) | dynamic | 1139 | 59 | 63 | 154 |
| /is-126-iq-good | Score (IsXIQGood) | dynamic | 1129 | 9 | 64 | 154 |
| /is-127-iq-good | Score (IsXIQGood) | dynamic | 1093 | 11 | 63 | 154 |
| /is-128-iq-good | Score (IsXIQGood) | dynamic | 1133 | 16 | 63 | 154 |
| /is-129-iq-good | Score (IsXIQGood) | dynamic | 1087 | 9 | 63 | 154 |
| /is-130-iq-good | Score (IsXIQGood) | dynamic | 1161 | 61 | 51 | 154 |
| /is-131-iq-good | Score (IsXIQGood) | dynamic | 1070 | 9 | 51 | 154 |
| /is-132-iq-good | Score (IsXIQGood) | dynamic | 1103 | 18 | 51 | 154 |
| /is-133-iq-good | Score (IsXIQGood) | dynamic | 1109 | 9 | 51 | 154 |
| /is-134-iq-good | Score (IsXIQGood) | dynamic | 1092 | 10 | 51 | 154 |
| /is-135-iq-good | Score (IsXIQGood) | dynamic | 1136 | 31 | 51 | 154 |
| /is-136-iq-good | Score (IsXIQGood) | dynamic | 1098 | 9 | 51 | 154 |
| /is-137-iq-good | Score (IsXIQGood) | dynamic | 1079 | 11 | 51 | 154 |
| /is-138-iq-good | Score (IsXIQGood) | dynamic | 1119 | 15 | 51 | 154 |
| /is-139-iq-good | Score (IsXIQGood) | dynamic | 1103 | 9 | 51 | 154 |
| /is-140-iq-good | Score (IsXIQGood) | dynamic | 1191 | 36 | 51 | 154 |
| /is-141-iq-good | Score (IsXIQGood) | dynamic | 1033 | 10 | 51 | 154 |
| /is-142-iq-good | Score (IsXIQGood) | dynamic | 1090 | 12 | 51 | 154 |
| /is-143-iq-good | Score (IsXIQGood) | dynamic | 1080 | 10 | 51 | 154 |
| /is-144-iq-good | Score (IsXIQGood) | dynamic | 1069 | 10 | 51 | 154 |
| /is-145-iq-good | Score (IsXIQGood) | dynamic | 1131 | 33 | 51 | 154 |
| /is-146-iq-good | Score (IsXIQGood) | dynamic | 1064 | 9 | 51 | 154 |
| /is-147-iq-good | Score (IsXIQGood) | dynamic | 1066 | 10 | 51 | 154 |
| /is-148-iq-good | Score (IsXIQGood) | dynamic | 1112 | 14 | 51 | 154 |
| /is-149-iq-good | Score (IsXIQGood) | dynamic | 1048 | 9 | 51 | 154 |
| /is-150-iq-good | Score (IsXIQGood) | dynamic | 1142 | 19 | 51 | 154 |
| /is-151-iq-good | Score (IsXIQGood) | dynamic | 1063 | 9 | 51 | 154 |
| /is-152-iq-good | Score (IsXIQGood) | dynamic | 985 | 12 | 51 | 154 |
| /is-153-iq-good | Score (IsXIQGood) | dynamic | 1070 | 9 | 51 | 154 |
| /is-154-iq-good | Score (IsXIQGood) | dynamic | 1048 | 12 | 51 | 154 |
| /is-155-iq-good | Score (IsXIQGood) | dynamic | 1030 | 17 | 51 | 154 |
| /is-156-iq-good | Score (IsXIQGood) | dynamic | 1052 | 9 | 51 | 154 |
| /is-157-iq-good | Score (IsXIQGood) | dynamic | 1056 | 9 | 51 | 154 |
| /is-158-iq-good | Score (IsXIQGood) | dynamic | 1008 | 11 | 51 | 154 |
| /is-159-iq-good | Score (IsXIQGood) | dynamic | 1056 | 9 | 51 | 154 |
| /is-160-iq-good | Score (IsXIQGood) | dynamic | 1077 | 22 | 51 | 154 |
| /is-161-iq-good | Score (IsXIQGood) | dynamic | 1065 | 9 | 51 | 154 |
| /is-162-iq-good | Score (IsXIQGood) | dynamic | 1060 | 9 | 51 | 154 |
| /is-163-iq-good | Score (IsXIQGood) | dynamic | 1065 | 10 | 51 | 154 |
| /is-164-iq-good | Score (IsXIQGood) | dynamic | 1053 | 9 | 51 | 154 |
| /is-165-iq-good | Score (IsXIQGood) | dynamic | 1080 | 10 | 51 | 154 |
| /is-166-iq-good | Score (IsXIQGood) | dynamic | 1049 | 9 | 51 | 154 |
| /is-167-iq-good | Score (IsXIQGood) | dynamic | 1067 | 9 | 51 | 154 |
| /is-168-iq-good | Score (IsXIQGood) | dynamic | 1101 | 10 | 51 | 154 |
| /is-169-iq-good | Score (IsXIQGood) | dynamic | 1063 | 9 | 51 | 154 |
| /is-170-iq-good | Score (IsXIQGood) | dynamic | 1112 | 10 | 51 | 154 |
| /is-171-iq-good | Score (IsXIQGood) | dynamic | 1091 | 9 | 51 | 154 |
| /is-172-iq-good | Score (IsXIQGood) | dynamic | 1088 | 9 | 51 | 154 |
| /is-173-iq-good | Score (IsXIQGood) | dynamic | 1085 | 9 | 51 | 154 |
| /is-174-iq-good | Score (IsXIQGood) | dynamic | 1100 | 9 | 51 | 154 |
| /is-175-iq-good | Score (IsXIQGood) | dynamic | 1046 | 12 | 51 | 154 |
| /is-176-iq-good | Score (IsXIQGood) | dynamic | 1101 | 9 | 51 | 154 |
| /is-177-iq-good | Score (IsXIQGood) | dynamic | 1101 | 9 | 51 | 154 |
| /is-178-iq-good | Score (IsXIQGood) | dynamic | 1093 | 10 | 51 | 154 |
| /is-179-iq-good | Score (IsXIQGood) | dynamic | 1120 | 9 | 51 | 154 |
| /is-180-iq-good | Score (IsXIQGood) | dynamic | 1135 | 19 | 51 | 154 |
| /is-181-iq-good | Score (IsXIQGood) | dynamic | 1130 | 9 | 51 | 154 |
| /is-182-iq-good | Score (IsXIQGood) | dynamic | 1087 | 11 | 51 | 154 |
| /is-183-iq-good | Score (IsXIQGood) | dynamic | 1093 | 9 | 51 | 154 |
| /is-184-iq-good | Score (IsXIQGood) | dynamic | 1108 | 9 | 51 | 154 |
| /is-185-iq-good | Score (IsXIQGood) | dynamic | 1119 | 10 | 51 | 154 |
| /is-186-iq-good | Score (IsXIQGood) | dynamic | 1110 | 8 | 51 | 154 |
| /is-187-iq-good | Score (IsXIQGood) | dynamic | 1135 | 7 | 51 | 154 |
| /is-188-iq-good | Score (IsXIQGood) | dynamic | 1122 | 6 | 51 | 154 |
| /is-189-iq-good | Score (IsXIQGood) | dynamic | 1134 | 5 | 51 | 154 |
| /is-190-iq-good | Score (IsXIQGood) | dynamic | 1081 | 8 | 51 | 154 |
| /is-191-iq-good | Score (IsXIQGood) | dynamic | 1111 | 3 | 51 | 154 |
| /is-192-iq-good | Score (IsXIQGood) | dynamic | 1130 | 2 | 51 | 154 |
| /is-193-iq-good | Score (IsXIQGood) | dynamic | 1121 | 2 | 51 | 154 |
| /is-194-iq-good | Score (IsXIQGood) | dynamic | 1124 | 2 | 51 | 154 |
| /is-195-iq-good | Score (IsXIQGood) | dynamic | 1125 | 4 | 51 | 154 |
| /is-196-iq-good | Score (IsXIQGood) | dynamic | 1101 | 2 | 51 | 154 |
| /is-197-iq-good | Score (IsXIQGood) | dynamic | 1140 | 2 | 51 | 154 |
| /is-198-iq-good | Score (IsXIQGood) | dynamic | 1121 | 2 | 51 | 154 |
| /is-199-iq-good | Score (IsXIQGood) | dynamic | 1102 | 2 | 51 | 154 |
| /is-200-iq-good | Score (IsXIQGood) | dynamic | 1185 | 3 | 51 | 154 |
| /is-40-iq-good | Score (IsXIQGood) | dynamic | 995 | 15 | 49 | 154 |
| /is-41-iq-good | Score (IsXIQGood) | dynamic | 1050 | 16 | 49 | 154 |
| /is-42-iq-good | Score (IsXIQGood) | dynamic | 971 | 17 | 49 | 154 |
| /is-43-iq-good | Score (IsXIQGood) | dynamic | 1030 | 18 | 49 | 154 |
| /is-44-iq-good | Score (IsXIQGood) | dynamic | 989 | 19 | 49 | 154 |
| /is-45-iq-good | Score (IsXIQGood) | dynamic | 1043 | 20 | 49 | 154 |
| /is-46-iq-good | Score (IsXIQGood) | dynamic | 1036 | 21 | 49 | 154 |
| /is-47-iq-good | Score (IsXIQGood) | dynamic | 1024 | 9 | 49 | 154 |
| /is-48-iq-good | Score (IsXIQGood) | dynamic | 1003 | 9 | 49 | 154 |
| /is-49-iq-good | Score (IsXIQGood) | dynamic | 1047 | 9 | 49 | 154 |
| /is-50-iq-good | Score (IsXIQGood) | dynamic | 1059 | 9 | 49 | 154 |
| /is-51-iq-good | Score (IsXIQGood) | dynamic | 1039 | 9 | 49 | 154 |
| /is-52-iq-good | Score (IsXIQGood) | dynamic | 992 | 9 | 49 | 154 |
| /is-53-iq-good | Score (IsXIQGood) | dynamic | 1063 | 9 | 49 | 154 |
| /is-54-iq-good | Score (IsXIQGood) | dynamic | 1064 | 9 | 49 | 154 |
| /is-55-iq-good | Score (IsXIQGood) | dynamic | 1069 | 9 | 49 | 154 |
| /is-56-iq-good | Score (IsXIQGood) | dynamic | 1045 | 9 | 49 | 154 |
| /is-57-iq-good | Score (IsXIQGood) | dynamic | 1014 | 9 | 49 | 154 |
| /is-58-iq-good | Score (IsXIQGood) | dynamic | 1069 | 9 | 49 | 154 |
| /is-59-iq-good | Score (IsXIQGood) | dynamic | 1052 | 9 | 49 | 154 |
| /is-60-iq-good | Score (IsXIQGood) | dynamic | 1093 | 9 | 49 | 154 |
| /is-61-iq-good | Score (IsXIQGood) | dynamic | 996 | 9 | 49 | 154 |
| /is-62-iq-good | Score (IsXIQGood) | dynamic | 1001 | 9 | 49 | 154 |
| /is-63-iq-good | Score (IsXIQGood) | dynamic | 1004 | 9 | 49 | 154 |
| /is-64-iq-good | Score (IsXIQGood) | dynamic | 1007 | 9 | 49 | 154 |
| /is-65-iq-good | Score (IsXIQGood) | dynamic | 1081 | 10 | 49 | 154 |
| /is-66-iq-good | Score (IsXIQGood) | dynamic | 1043 | 9 | 49 | 154 |
| /is-67-iq-good | Score (IsXIQGood) | dynamic | 1012 | 10 | 49 | 154 |
| /is-68-iq-good | Score (IsXIQGood) | dynamic | 1024 | 12 | 49 | 154 |
| /is-69-iq-good | Score (IsXIQGood) | dynamic | 1055 | 14 | 49 | 154 |
| /is-70-iq-good | Score (IsXIQGood) | dynamic | 1102 | 13 | 49 | 154 |
| /is-71-iq-good | Score (IsXIQGood) | dynamic | 1019 | 13 | 49 | 154 |
| /is-72-iq-good | Score (IsXIQGood) | dynamic | 1052 | 11 | 49 | 154 |
| /is-73-iq-good | Score (IsXIQGood) | dynamic | 1012 | 11 | 49 | 154 |
| /is-74-iq-good | Score (IsXIQGood) | dynamic | 1025 | 10 | 49 | 154 |
| /is-75-iq-good | Score (IsXIQGood) | dynamic | 1094 | 16 | 49 | 154 |
| /is-76-iq-good | Score (IsXIQGood) | dynamic | 1052 | 9 | 49 | 154 |
| /is-77-iq-good | Score (IsXIQGood) | dynamic | 1025 | 11 | 49 | 154 |
| /is-78-iq-good | Score (IsXIQGood) | dynamic | 1064 | 10 | 49 | 154 |
| /is-79-iq-good | Score (IsXIQGood) | dynamic | 1037 | 10 | 49 | 154 |
| /is-80-iq-good | Score (IsXIQGood) | dynamic | 1081 | 15 | 55 | 154 |
| /is-81-iq-good | Score (IsXIQGood) | dynamic | 1026 | 11 | 55 | 154 |
| /is-82-iq-good | Score (IsXIQGood) | dynamic | 1051 | 13 | 55 | 154 |
| /is-83-iq-good | Score (IsXIQGood) | dynamic | 1010 | 13 | 55 | 154 |
| /is-84-iq-good | Score (IsXIQGood) | dynamic | 1030 | 22 | 55 | 154 |
| /is-85-iq-good | Score (IsXIQGood) | dynamic | 1108 | 17 | 55 | 154 |
| /is-86-iq-good | Score (IsXIQGood) | dynamic | 1070 | 13 | 55 | 154 |
| /is-87-iq-good | Score (IsXIQGood) | dynamic | 1067 | 17 | 55 | 154 |
| /is-88-iq-good | Score (IsXIQGood) | dynamic | 1119 | 9 | 55 | 154 |
| /is-89-iq-good | Score (IsXIQGood) | dynamic | 1065 | 14 | 55 | 154 |
| /is-90-iq-good | Score (IsXIQGood) | dynamic | 1112 | 16 | 55 | 154 |
| /is-91-iq-good | Score (IsXIQGood) | dynamic | 1085 | 15 | 55 | 154 |
| /is-92-iq-good | Score (IsXIQGood) | dynamic | 1095 | 10 | 55 | 154 |
| /is-93-iq-good | Score (IsXIQGood) | dynamic | 1053 | 10 | 55 | 154 |
| /is-94-iq-good | Score (IsXIQGood) | dynamic | 1089 | 10 | 55 | 154 |
| /is-95-iq-good | Score (IsXIQGood) | dynamic | 1185 | 16 | 55 | 154 |
| /is-96-iq-good | Score (IsXIQGood) | dynamic | 1182 | 12 | 55 | 154 |
| /is-97-iq-good | Score (IsXIQGood) | dynamic | 1137 | 16 | 55 | 154 |
| /is-98-iq-good | Score (IsXIQGood) | dynamic | 1174 | 12 | 55 | 154 |
| /is-99-iq-good | Score (IsXIQGood) | dynamic | 1132 | 18 | 55 | 154 |
| /low-iq | Core/static page | static | 1712 | 0 | 78 | 154 |
| /mensa-iq-test | Core/static page | static | 913 | 4 | 76 | 154 |
| /methodology | Core/static page | static | 551 | 1055 | 54 | 154 |
| /practice-iq-test | Core/static page | static | 1357 | 1055 | 74 | 154 |
| /privacy-policy | Core/static page | static | 787 | 1056 | 27 | 154 |
| /sat-to-iq | Core/static page | static | 890 | 1055 | 66 | 154 |
| /terms-of-service | Core/static page | static | 1065 | 1055 | 30 | 154 |
| /tests/logical-reasoning | Practice test | static | 755 | 5 | 74 | 154 |
| /tests/memory | Practice test | static | 818 | 5 | 64 | 154 |
| /tests/numerical-reasoning | Practice test | static | 708 | 5 | 76 | 154 |
| /tests/pattern-recognition | Practice test | static | 768 | 5 | 81 | 154 |
| /tests/spatial-reasoning | Practice test | static | 686 | 5 | 81 | 154 |
| /tests/verbal-reasoning | Practice test | static | 730 | 5 | 73 | 154 |
| /types-of-iq-tests | Core/static page | static | 1215 | 9 | 87 | 154 |
| /what-is-iq | Core/static page | static | 1963 | 1056 | 68 | 154 |
