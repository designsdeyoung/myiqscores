// Q&A pages targeting "People Also Ask" queries that have no dedicated page.
// GEO rule: shortAnswer must directly answer the question in ~40-60 words —
// it's the block AI engines and featured snippets quote. Don't add slugs that
// cannibalize existing pages (score pages, /genius-iq, /mensa-iq-test, etc.).

export interface QuestionInfo {
  slug: string;
  question: string;
  metaDescription: string;
  shortAnswer: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqItems: { question: string; answer: string }[];
  related: { title: string; href: string }[];
}

export const questionsData: QuestionInfo[] = [
  {
    slug: "what-does-iq-stand-for",
    question: "What Does IQ Stand For?",
    metaDescription: "IQ stands for Intelligence Quotient. Learn where the term comes from, why it's called a 'quotient,' and how modern IQ scores are actually calculated.",
    shortAnswer: "IQ stands for Intelligence Quotient. The term was coined by psychologist William Stern in 1912, when scores were calculated as a quotient: mental age divided by chronological age, multiplied by 100. Modern tests no longer use that division, but the name stuck.",
    sections: [
      {
        heading: "Why Is It Called a 'Quotient'?",
        paragraphs: [
          "The original IQ formula really was a quotient — a division problem. Early tests like the Binet-Simon scale estimated a child's 'mental age' from their answers, then divided it by their actual age and multiplied by 100. A 10-year-old performing like a typical 12-year-old scored 120 (12 ÷ 10 × 100).",
          "That formula broke down for adults — mental age plateaus, so an adult's ratio IQ would nonsensically decline every birthday. In 1939, David Wechsler replaced it with the 'deviation IQ' still used today: your score reflects how far you sit from the average of your age group on a bell curve with a mean of 100 and a standard deviation of 15.",
        ],
      },
      {
        heading: "What IQ Means Today",
        paragraphs: [
          "On modern tests like the WAIS-IV and Stanford-Binet 5, IQ is a statistical ranking, not a measurement of a physical quantity. A score of 100 means you performed exactly at the median for your age group. A score of 115 places you one standard deviation above — roughly the 84th percentile.",
          "So while 'Intelligence Quotient' is technically a historical misnomer, the underlying idea survives: IQ expresses your measured reasoning performance relative to everyone else your age.",
        ],
      },
    ],
    faqItems: [
      { question: "Who invented the term IQ?", answer: "German psychologist William Stern coined 'Intelligenzquotient' in 1912 to describe the ratio of mental age to chronological age. Lewis Terman popularized the term when he published the Stanford-Binet test in 1916." },
      { question: "Is IQ still calculated as a quotient?", answer: "No. Modern tests use 'deviation IQ' — your performance compared to a normed sample of your age group, placed on a bell curve with mean 100 and standard deviation 15. No division is involved." },
      { question: "What does a 100 IQ mean?", answer: "A score of 100 is by definition the exact average for your age group. Roughly two-thirds of people score between 85 and 115." },
    ],
    related: [
      { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
      { title: "IQ Score Ranges Explained", href: "/iq-score-ranges" },
      { title: "History of IQ Testing", href: "/blog/history-of-iq-testing" },
    ],
  },
  {
    slug: "how-long-does-an-iq-test-take",
    question: "How Long Does an IQ Test Take?",
    metaDescription: "Professional IQ tests take 60–90 minutes with a psychologist. Online IQ tests take 10–30 minutes. Here's the timing for every major test format.",
    shortAnswer: "A full professional IQ test, such as the WAIS-IV administered by a psychologist, takes 60–90 minutes. Shorter clinical screeners take 15–30 minutes. Online IQ-style tests typically take 10–30 minutes. Timed sections are part of the measurement — processing speed counts toward your score.",
    sections: [
      {
        heading: "Timing by Test Type",
        paragraphs: [
          "The Wechsler Adult Intelligence Scale (WAIS-IV) — the most widely used clinical test — takes 60 to 90 minutes across its 10 core subtests, plus time for breaks. The Stanford-Binet 5 runs 45 to 75 minutes. The Raven's Progressive Matrices, a nonverbal test, is usually completed in 40–45 minutes.",
          "Mensa's supervised admissions test takes about two hours including instructions and two separate test formats. Brief screeners like the Wonderlic (used in hiring) compress the format to 12 minutes and 50 questions.",
          "Online IQ-style tests, including ours, typically run 10–30 minutes. They estimate the same reasoning domains but cannot replicate the standardized conditions of a supervised assessment — which is why serious decisions should always rely on professional testing.",
        ],
      },
      {
        heading: "Why the Time Limit Matters",
        paragraphs: [
          "Time pressure isn't an inconvenience — it's part of what the test measures. Processing speed correlates with general cognitive ability, so most tests either time each section or score faster correct answers higher. Taking an untimed test and a timed test can produce noticeably different scores for the same person.",
        ],
      },
    ],
    faqItems: [
      { question: "How long is the Mensa test?", answer: "The supervised Mensa admissions session takes about two hours, during which candidates sit two different standardized tests. Qualifying on either one (98th percentile) earns membership eligibility." },
      { question: "Can you take breaks during an IQ test?", answer: "In professional administration, the psychologist can pause between subtests, and testing is sometimes split across two sessions for children or fatigued examinees. Individual timed subtests cannot be paused." },
      { question: "How long does an online IQ test take?", answer: "Most online IQ-style tests take 10–30 minutes. Our free test is 30 questions and takes about 10–15 minutes for most people." },
    ],
    related: [
      { title: "Types of IQ Tests", href: "/types-of-iq-tests" },
      { title: "Free IQ Test", href: "/iq-test" },
      { title: "Practice IQ Test", href: "/practice-iq-test" },
    ],
  },
  {
    slug: "why-is-100-the-average-iq",
    question: "Why Is 100 the Average IQ?",
    metaDescription: "100 is the average IQ by design, not by discovery. Learn how test norming works, why the scale re-centers every generation, and what the Flynn effect changes.",
    shortAnswer: "100 is average by design, not by measurement. When an IQ test is developed, it's given to a large representative sample, and the median raw performance is defined as 100. Scores are then spread on a bell curve with a standard deviation of 15. Every re-norming re-centers the average back to 100.",
    sections: [
      {
        heading: "How Test Norming Works",
        paragraphs: [
          "IQ tests are 'normed' before release: publishers administer the test to thousands of people chosen to mirror the population by age, region, and education. Whatever raw score lands in the exact middle of that sample becomes 100. The rest of the scale is built outward in standard deviations of 15 points — 115 is one deviation above average, 85 one below.",
          "This means IQ is inherently relative. If everyone in the world got smarter overnight, the average IQ would still be 100 after the next norming — the bar would simply have moved.",
        ],
      },
      {
        heading: "The Flynn Effect: The Moving Average",
        paragraphs: [
          "Raw performance on IQ tests rose steadily through the 20th century — roughly 3 points per decade — a phenomenon called the Flynn effect. Better nutrition, schooling, and familiarity with abstract problem-solving all contributed. Test publishers periodically re-norm to pull the average back to 100, which is why a score from a 1970s test isn't directly comparable to one from today.",
          "In some developed countries the Flynn effect has slowed or slightly reversed since the 1990s, an active area of research.",
        ],
      },
    ],
    faqItems: [
      { question: "Has the average IQ always been 100?", answer: "Yes, by construction — every properly normed IQ test defines its sample's median as 100. What changes over time is the raw performance required to score 100, which rose throughout the 20th century (the Flynn effect)." },
      { question: "What percentage of people have an IQ of exactly 100?", answer: "About 50% of people score within 90–110, the 'average' band. Scoring exactly 100 places you at the 50th percentile — the precise middle of the distribution." },
      { question: "Is the average IQ different in different countries?", answer: "Published national estimates vary, but they're heavily affected by which tests were used, when they were normed, and sampling quality. Within any country that norms its own tests, the average is 100 by definition." },
    ],
    related: [
      { title: "What Is the Average IQ?", href: "/average-iq" },
      { title: "The Flynn Effect Explained", href: "/blog/flynn-effect" },
      { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
    ],
  },
  {
    slug: "do-iq-tests-measure-intelligence",
    question: "Do IQ Tests Actually Measure Intelligence?",
    metaDescription: "IQ tests reliably measure reasoning, memory, and processing speed — but intelligence is broader. Here's what the science says IQ tests do and don't capture.",
    shortAnswer: "IQ tests reliably measure a cluster of cognitive abilities — abstract reasoning, working memory, vocabulary, spatial thinking, and processing speed — that statistically overlap in what researchers call 'g' (general cognitive ability). They do not measure creativity, emotional skill, wisdom, motivation, or practical judgment, all of which shape real-world intelligence.",
    sections: [
      {
        heading: "What IQ Tests Capture Well",
        paragraphs: [
          "Performance across very different mental tasks correlates: people who do well on vocabulary questions tend to also do well on pattern puzzles and mental arithmetic. This shared variance — 'g' — is what IQ tests are built to estimate, and they do it with high reliability. Retest the same adult and scores typically land within a few points.",
          "IQ scores predict outcomes at the population level: academic performance, job-training success, and performance in cognitively complex work all correlate moderately with measured IQ. These are statistical relationships across groups, not destinies for individuals.",
        ],
      },
      {
        heading: "What They Miss",
        paragraphs: [
          "No IQ test measures creativity, emotional intelligence, integrity, curiosity, or resilience — attributes that heavily influence life outcomes. Psychologists have documented these limits for decades; even Alfred Binet, who created the first IQ test, warned against treating scores as a fixed measure of a person's worth.",
          "Test performance is also situational. Anxiety, sleep, unfamiliarity with test formats, and cultural distance from the test's content all move scores. A single number is a snapshot of performance under specific conditions — useful, but incomplete.",
        ],
      },
    ],
    faqItems: [
      { question: "What is 'g' in intelligence research?", answer: "'g' (general cognitive ability) is the statistical factor explaining why performance on very different cognitive tasks correlates. IQ tests are designed to estimate g by sampling multiple domains — verbal, spatial, numerical, and memory." },
      { question: "Can a smart person score low on an IQ test?", answer: "Yes. Test anxiety, fatigue, unfamiliarity with the format, language barriers, and conditions like ADHD or dyslexia can all depress scores below a person's underlying ability. That's why professionals interpret scores alongside history and context." },
      { question: "Do IQ tests measure knowledge or ability?", answer: "Mostly ability. Fluid-reasoning sections (patterns, matrices) require no prior knowledge. Verbal sections do draw on acquired vocabulary, which is why they partly reflect education and reading exposure as well as raw ability." },
    ],
    related: [
      { title: "Are IQ Tests Accurate?", href: "/blog/iq-tests-accurate" },
      { title: "IQ vs EQ: What's the Difference?", href: "/iq-vs-eq" },
      { title: "Fluid vs Crystallized Intelligence", href: "/blog/fluid-vs-crystallized-intelligence" },
    ],
  },
  {
    slug: "what-percentage-of-people-have-an-iq-over-130",
    question: "What Percentage of People Have an IQ Over 130?",
    metaDescription: "About 2.3% of people score above 130 on IQ tests. See the full rarity breakdown for 130, 140, 145, and 160+ scores on the bell curve.",
    shortAnswer: "About 2.3% of people score above 130 on a standard IQ test — roughly 1 in 44. Because IQ follows a bell curve with an average of 100 and a standard deviation of 15, a 130 sits two standard deviations above the mean, the common threshold for 'gifted' programs.",
    sections: [
      {
        heading: "Rarity at Every Threshold",
        paragraphs: [
          "The bell curve makes rarity easy to calculate. About 15.9% of people score above 115. Above 130, it's 2.3% (1 in 44). Above 140, roughly 0.4% (1 in 260). Above 145 — three standard deviations — about 0.1% (1 in 740). Above 160, fewer than 1 in 30,000.",
          "These percentages assume a perfectly normal distribution, which holds well near the middle and gets less precise at the extremes. Very high scores also become statistically noisier because so few people in any norming sample score there.",
        ],
      },
      {
        heading: "What a 130+ Score Means in Practice",
        paragraphs: [
          "130 is the most common cutoff for gifted education programs and roughly the threshold for the top 2% societies like Mensa (which uses the 98th percentile). People scoring 130+ typically find academic material faster to absorb, but research on gifted cohorts — like Terman's famous longitudinal study — shows that beyond a threshold, personality, opportunity, and persistence matter more for achievement than additional IQ points.",
        ],
      },
    ],
    faqItems: [
      { question: "How rare is an IQ of 140?", answer: "Roughly 0.4% of people — about 1 in 260 — score 140 or above. That places the score around the 99.6th percentile, well past the Mensa threshold." },
      { question: "Is 130 IQ enough for Mensa?", answer: "Usually yes. Mensa admits the top 2% on an approved supervised test. On a test with standard deviation 15, that's a score of about 131 or higher; on the Cattell scale (SD 24), the equivalent is 148." },
      { question: "What percentage of people have an IQ over 120?", answer: "About 9.1% of people score above 120 — roughly 1 in 11. That corresponds to the 'superior' range on most classification tables." },
    ],
    related: [
      { title: "Is 130 IQ Good?", href: "/is-130-iq-good" },
      { title: "What Is Genius IQ?", href: "/genius-iq" },
      { title: "IQ Rarity Calculator", href: "/tools/iq-rarity" },
    ],
  },
  {
    slug: "what-is-the-lowest-iq-score-possible",
    question: "What Is the Lowest IQ Score Possible?",
    metaDescription: "Most IQ tests bottom out around 40–55 — not zero. Learn why the scale has a floor, what low scores mean, and how intellectual disability is actually diagnosed.",
    shortAnswer: "Standard IQ tests can't measure below roughly 40–55 because too few items are easy enough to discriminate at that level — so 'zero IQ' doesn't exist. Scores below 70 may indicate intellectual disability, but a diagnosis also requires assessing adaptive functioning, never the score alone.",
    sections: [
      {
        heading: "Why the Scale Has a Floor",
        paragraphs: [
          "An IQ score is a comparison against a norming sample, and a test can only rank what it can distinguish. Below a certain raw performance, standard tests simply run out of items easy enough to separate one examinee from another — the WAIS-IV, for example, reports full-scale scores down to 40. Specialized instruments and clinical judgment take over below that.",
          "Statistically, a 40 IQ is four standard deviations below the mean — territory occupied by roughly 1 in 30,000 people, mirroring how rare 160 is on the high end.",
        ],
      },
      {
        heading: "How Low Scores Are Interpreted",
        paragraphs: [
          "Clinicians use IQ ranges as one input: scores around 55–70 are described as mild intellectual disability, 40–55 moderate, and below 40 severe to profound. Crucially, modern diagnostic manuals (DSM-5, ICD-11) require deficits in adaptive functioning — daily living, communication, social skills — alongside test scores. Two people with the same low score can have very different capabilities and support needs.",
          "A low score on a single online test means very little: language barriers, distraction, or not understanding instructions routinely produce misleadingly low results. Only supervised, professionally administered assessment carries diagnostic weight.",
        ],
      },
    ],
    faqItems: [
      { question: "Can someone have an IQ of 0?", answer: "No. IQ is a relative ranking, not a quantity that can reach zero. Standard tests bottom out around 40–55 because no test items can meaningfully discriminate below that level of performance." },
      { question: "What IQ indicates an intellectual disability?", answer: "Scores below about 70 (two standard deviations below average) are one diagnostic criterion, but clinicians must also find significant limitations in adaptive functioning before diagnosing intellectual disability." },
      { question: "What is the lowest IQ ever recorded?", answer: "There's no meaningful 'lowest recorded IQ' — tests can't measure below their floor (about 40), and individuals below it are assessed with specialized instruments rather than ranked by score." },
    ],
    related: [
      { title: "Understanding Low IQ Scores", href: "/low-iq" },
      { title: "IQ Score Ranges Explained", href: "/iq-score-ranges" },
      { title: "IQ Testing in Children", href: "/blog/iq-testing-in-children" },
    ],
  },
  {
    slug: "did-einstein-take-an-iq-test",
    question: "Did Einstein Ever Take an IQ Test?",
    metaDescription: "No — Albert Einstein never took an IQ test. The famous '160 IQ' figure is an estimate. Here's where the number comes from and what historians actually know.",
    shortAnswer: "No. There is no record of Albert Einstein ever taking an IQ test — modern standardized tests weren't widely used until after his most famous work. The '160 IQ' commonly attributed to him is a posthumous estimate by writers based on his achievements, not a measured score.",
    sections: [
      {
        heading: "Where the '160' Number Comes From",
        paragraphs: [
          "Einstein published his special relativity paper in 1905, when IQ testing barely existed — Binet's first practical test appeared that same year in France, designed for schoolchildren. Adult IQ testing didn't mature until the Wechsler scales of 1939, by which point Einstein was 60 and had no reason to sit one.",
          "The 160 figure circulating online traces to speculative estimates by authors and 'historiometric' studies that infer scores from biographical accomplishments. Such estimates are educated guesses with wide error bars — useful for conversation, meaningless as measurement.",
        ],
      },
      {
        heading: "The Myth of the Failing Student",
        paragraphs: [
          "The related legend that Einstein failed math is false. He excelled at mathematics from childhood and had mastered calculus by 15. The confusion likely arose from a grading-scale switch at his Swiss school, where 6 became the top mark instead of 1.",
          "Einstein's own view aligns with modern research: he attributed his achievements to curiosity and persistence — 'I have no special talent, I am only passionately curious' — traits no IQ test measures.",
        ],
      },
    ],
    faqItems: [
      { question: "What was Einstein's IQ?", answer: "Unknown — he never took a test. Estimates around 160 are posthumous inferences from his work, not measurements. Any specific number you see attributed to Einstein is speculation." },
      { question: "Did Einstein fail math in school?", answer: "No. This is a myth. Einstein excelled in mathematics, teaching himself calculus by age 15. The story likely stems from a reversed grading scale at his Swiss school being misread by later writers." },
      { question: "Which famous people actually took IQ tests?", answer: "Very few verified celebrity scores exist, since results are private. Chess champion Garry Kasparov was tested for a magazine (scoring 135 in one documented session), but most published celebrity IQs are estimates." },
    ],
    related: [
      { title: "Albert Einstein's IQ", href: "/famous-iq/albert-einstein" },
      { title: "Famous IQ Scores Hub", href: "/famous-iq" },
      { title: "Highest IQ Ever Recorded", href: "/highest-iq-ever" },
    ],
  },
  {
    slug: "what-age-can-a-child-take-an-iq-test",
    question: "At What Age Can a Child Take an IQ Test?",
    metaDescription: "Children can be tested from age 2 with the right instrument, but scores stabilize around age 5–7. Here's the test used for each age and when testing makes sense.",
    shortAnswer: "Formal IQ testing is possible from about age 2 using instruments like the Bayley Scales or WPPSI, but scores before age 5 are unstable and mainly flag developmental concerns. Most psychologists consider ages 5–7 the earliest point where scores become reasonably predictive, with reliability improving through adolescence.",
    sections: [
      {
        heading: "Which Test at Which Age",
        paragraphs: [
          "For toddlers (roughly 1–3), the Bayley Scales assess developmental milestones rather than IQ proper. The WPPSI-IV covers ages 2.5 to 7.5, the WISC-V spans 6 to 16, and from 16 up examinees take the adult WAIS-IV. The Stanford-Binet 5 covers ages 2 through 85 with age-adjusted item sets.",
          "Because every score is normed against same-age peers, a 6-year-old and a 40-year-old scoring 115 both sit at the same percentile within their own age group.",
        ],
      },
      {
        heading: "When Testing a Child Makes Sense",
        paragraphs: [
          "Schools typically test between ages 5 and 8 for gifted-program placement, and at any age when learning difficulties, developmental delays, or large gaps between ability and performance need investigation. Early scores should be treated as provisional: childhood IQ can shift 10–20 points into adolescence as the brain develops.",
          "For parents, the practical guidance is to test when there's a decision the result would inform — program eligibility, support services, or diagnostic clarity — rather than out of curiosity. A professional evaluation also yields subtest profiles far more useful than the single number.",
        ],
      },
    ],
    faqItems: [
      { question: "How stable is a child's IQ score?", answer: "Scores measured before age 5 correlate weakly with adult IQ. From ages 6–8 the correlation strengthens considerably, and by adolescence scores are quite stable — though individual shifts of 10+ points still occur." },
      { question: "What IQ qualifies a child as gifted?", answer: "Most US gifted programs use a cutoff around 130 (98th percentile) on a professionally administered test like the WISC-V, though some districts use lower thresholds or broader multi-criteria assessments." },
      { question: "Can toddlers take IQ tests?", answer: "Instruments exist from age 2 (WPPSI, Stanford-Binet Early SB5), and developmental scales from infancy. But early results mainly screen for developmental concerns — they're poor predictors of later intelligence." },
    ],
    related: [
      { title: "IQ Testing in Children", href: "/blog/iq-testing-in-children" },
      { title: "Gifted Children and IQ", href: "/blog/gifted-children-iq" },
      { title: "IQ by Age Group", href: "/iq-by-age/children" },
    ],
  },
  {
    slug: "how-much-does-an-iq-test-cost",
    question: "How Much Does an IQ Test Cost?",
    metaDescription: "A professional IQ test costs $200–$800+ in the US. School evaluations and research studies can be free. Here's the full cost breakdown and cheaper alternatives.",
    shortAnswer: "A professionally administered IQ test in the US typically costs $200–$800, depending on region and whether it's part of a broader psychoeducational evaluation (which can run $1,500–$5,000). Public schools must evaluate students for free when disability is suspected, Mensa's supervised test costs about $60, and online IQ-style tests like ours are free.",
    sections: [
      {
        heading: "What You're Paying For",
        paragraphs: [
          "The fee covers a licensed psychologist's time: 1–2 hours of standardized administration, scoring against commercial norms, and usually a written report. Comprehensive evaluations that also assess learning disabilities, ADHD, or giftedness cost more because they bundle multiple instruments and a detailed clinical write-up.",
          "Insurance rarely covers testing done purely for curiosity or gifted placement, but often covers it when medically indicated — for example, as part of a neuropsychological evaluation after injury or for diagnostic assessment.",
        ],
      },
      {
        heading: "Free and Low-Cost Routes",
        paragraphs: [
          "US public schools are legally required (under IDEA) to evaluate a child at no cost when a disability affecting education is suspected — this evaluation typically includes cognitive testing. University psychology clinics offer reduced-fee testing by supervised graduate students. Mensa's supervised admissions test costs around $60 and provides a percentile result.",
          "Free online tests, including ours, are educational estimates: useful for practice and ballpark self-knowledge, but not valid for diagnosis, school placement, or any official purpose.",
        ],
      },
    ],
    faqItems: [
      { question: "Does insurance cover IQ testing?", answer: "Usually only when medically necessary — as part of a neuropsychological or diagnostic evaluation. Testing for curiosity, gifted programs, or Mensa admission is almost always out of pocket." },
      { question: "Can I get an IQ test for free?", answer: "Yes: public schools must evaluate students free of charge when a disability is suspected, university clinics offer low-cost testing, research studies sometimes include cognitive batteries, and online IQ-style estimates are free." },
      { question: "How much does the Mensa test cost?", answer: "About $60 in the US for the supervised admissions session. Alternatively, Mensa accepts qualifying scores from prior professional testing submitted with documentation." },
    ],
    related: [
      { title: "Types of IQ Tests", href: "/types-of-iq-tests" },
      { title: "Free IQ Test", href: "/iq-test" },
      { title: "Mensa IQ Test Requirements", href: "/mensa-iq-test" },
    ],
  },
  {
    slug: "can-you-fail-an-iq-test",
    question: "Can You Fail an IQ Test?",
    metaDescription: "You can't fail an IQ test — there's no pass mark. But scores can misrepresent your ability. Here's what a 'bad' score means and what can invalidate a result.",
    shortAnswer: "No — IQ tests have no pass or fail threshold. Your score simply places you on a distribution relative to your age group. You can, however, underperform your true ability due to anxiety, fatigue, illness, or distraction, and specific cutoffs (like Mensa's 98th percentile) can be missed.",
    sections: [
      {
        heading: "No Pass Mark — But Cutoffs Exist",
        paragraphs: [
          "An IQ test ranks; it doesn't grade. Every completed test produces a valid score somewhere on the bell curve, and the median person by definition scores 100. 'Failing' only makes sense relative to an external cutoff: missing Mensa's 98th percentile, falling below a gifted program's 130 threshold, or scoring under a job screener's benchmark.",
        ],
      },
      {
        heading: "What Actually Invalidates a Score",
        paragraphs: [
          "Psychologists distinguish a low score from an invalid one. Results can be flagged invalid when the examinee didn't understand instructions, testing conditions were disrupted, effort was clearly inadequate, or practice effects contaminated a retest taken too soon (most publishers recommend 1–2 years between administrations of the same instrument).",
          "Ordinary bad-day factors — poor sleep, anxiety, illness — don't invalidate a result but can depress it by several points. If a score will inform a real decision, professionals recommend testing when rested and, where results seem inconsistent with history, retesting with a different instrument.",
        ],
      },
    ],
    faqItems: [
      { question: "What happens if you do badly on an IQ test?", answer: "Nothing intrinsic — the score is just a percentile ranking. If the result was needed for a cutoff (gifted program, Mensa), you can usually retest after a waiting period, often with a different approved instrument." },
      { question: "Can anxiety lower your IQ score?", answer: "Yes. Test anxiety consumes working memory — one of the core abilities being measured — and can depress scores by several points. Familiarity with the format, adequate sleep, and practice with sample questions all reduce the effect." },
      { question: "How soon can you retake an IQ test?", answer: "Publishers typically recommend waiting 12–24 months before retaking the same test, because remembered items inflate scores. A different instrument can be taken sooner if professionally justified." },
    ],
    related: [
      { title: "Practice IQ Test", href: "/practice-iq-test" },
      { title: "Are IQ Tests Accurate?", href: "/blog/iq-tests-accurate" },
      { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
    ],
  },
  {
    slug: "how-many-questions-are-on-an-iq-test",
    question: "How Many Questions Are on an IQ Test?",
    metaDescription: "The WAIS-IV has ~500 items across 10 subtests; Raven's has 60; online tests run 20–50 questions. Here's the question count for every major IQ test.",
    shortAnswer: "It varies by test: the professionally administered WAIS-IV contains roughly 400–500 items across 10 core subtests (not all are given to every examinee), Raven's Standard Progressive Matrices has 60 puzzles, the Wonderlic has 50, and most online IQ-style tests use 20–50 questions.",
    sections: [
      {
        heading: "Question Counts by Test",
        paragraphs: [
          "Professional batteries are adaptive in practice: the WAIS-IV's subtests each contain 20–50 items of rising difficulty, and the examiner stops a subtest after a run of failures, so no one sees every item. The Stanford-Binet 5 works the same way, routing examinees to harder or easier item sets based on early performance.",
          "Fixed-form tests are simpler: Raven's Standard Progressive Matrices presents exactly 60 matrix puzzles; the Advanced version has 36 harder ones. The Wonderlic packs 50 questions into 12 minutes. Mensa's supervised session includes two separate tests taken back-to-back.",
          "Online IQ-style tests typically use 20–50 questions. Ours uses 30, sampling five domains — enough to produce a stable estimate while staying under 15 minutes.",
        ],
      },
      {
        heading: "Does More Questions Mean More Accurate?",
        paragraphs: [
          "Up to a point. Reliability rises with item count, which is why professional tests are long — but well-targeted items matter more than raw quantity. Adaptive tests achieve high precision with fewer questions by concentrating items near the examinee's ability level. A short test's main cost is a wider confidence interval: a 30-question estimate is honest at ±7–10 points, while a full WAIS administration narrows that to about ±4–5.",
        ],
      },
    ],
    faqItems: [
      { question: "How many questions are on the Mensa test?", answer: "The US Mensa supervised session includes two tests taken back-to-back in about two hours. Item counts vary by version, but each test contains several dozen questions; qualifying at the 98th percentile on either one suffices." },
      { question: "How many questions does the WAIS have?", answer: "The WAIS-IV contains roughly 400–500 items across its 10 core and 5 supplemental subtests, but discontinue rules mean a typical examinee answers far fewer — testing stops within each subtest after consecutive failures." },
      { question: "Is a 30-question IQ test accurate?", answer: "It can produce a reasonable estimate — enough for education and self-knowledge — but with a wider margin of error than professional testing (roughly ±7–10 points versus ±4–5). For any high-stakes purpose, use a professionally administered test." },
    ],
    related: [
      { title: "Types of IQ Tests", href: "/types-of-iq-tests" },
      { title: "How Long Does an IQ Test Take?", href: "/questions/how-long-does-an-iq-test-take" },
      { title: "Free IQ Test", href: "/iq-test" },
    ],
  },
  {
    slug: "can-ai-have-an-iq",
    question: "Can AI Have an IQ? What Happens When Chatbots Take IQ Tests",
    metaDescription: "AI models can answer IQ test questions — sometimes impressively — but an 'AI IQ score' is fundamentally misleading. Here's why, and what the results actually mean.",
    shortAnswer: "AI language models can answer IQ-test questions and sometimes score high, but the resulting number isn't a real IQ. IQ scores are normed against human age groups and assume the test-taker hasn't memorized the material — assumptions AI breaks completely, since models may have trained on the very questions and lack the general embodied cognition the score is meant to summarize.",
    sections: [
      {
        heading: "Why an 'AI IQ Score' Is Misleading",
        paragraphs: [
          "An IQ score means one thing: how a person performed relative to a human norming sample of their age. Feeding the same questions to an AI produces a number without that meaning. Worse, public IQ-test items circulate widely online, so a model may have effectively seen the answers during training — the equivalent of grading a student who memorized the answer key.",
          "Researchers who evaluate AI reasoning use benchmarks built to resist memorization, like the ARC (Abstraction and Reasoning Corpus), which tests novel pattern induction. AI systems have improved rapidly on such benchmarks, but their failure patterns remain very unlike human ones — models can solve graduate-level problems while fumbling puzzles most children find trivial.",
        ],
      },
      {
        heading: "What AI Performance Does Tell Us",
        paragraphs: [
          "The interesting finding isn't the score — it's the profile. Language models excel at verbal analogies, vocabulary, and general knowledge (crystallized-intelligence analogues) while remaining less reliable at genuinely novel visual and spatial reasoning, precisely the fluid-intelligence tasks IQ tests weight most heavily for humans.",
          "For human test-takers, the takeaway is reassuring: your IQ score describes your standing among people. No chatbot's benchmark performance changes what your 115 or 130 means, any more than a calculator's arithmetic invalidates a math grade.",
        ],
      },
    ],
    faqItems: [
      { question: "What is ChatGPT's IQ?", answer: "Headlines assigning ChatGPT an IQ (often 120–155) come from feeding it test questions it may have seen in training, scored against human norms that don't apply to software. AI researchers instead use contamination-resistant benchmarks like ARC to measure machine reasoning." },
      { question: "Can AI pass a Mensa test?", answer: "Modern models answer many Mensa-style verbal and logical questions correctly, and some vendors have claimed passing-level performance. But Mensa admission requires supervised human testing — and a score normed on humans has no defined meaning for a machine." },
      { question: "Will AI make IQ tests obsolete?", answer: "Unlikely. IQ tests exist to compare humans with humans for education, diagnosis, and research. AI progress changes none of that, though it has pushed test publishers to guard item security and researchers to design memorization-proof reasoning benchmarks." },
    ],
    related: [
      { title: "Do IQ Tests Measure Intelligence?", href: "/questions/do-iq-tests-measure-intelligence" },
      { title: "What Is Intelligence?", href: "/what-is-intelligence" },
      { title: "Are IQ Tests Accurate?", href: "/blog/iq-tests-accurate" },
    ],
  },
];

export const questionSlugs = questionsData.map((q) => q.slug);

export function getQuestionBySlug(slug: string): QuestionInfo | undefined {
  return questionsData.find((q) => q.slug === slug);
}
