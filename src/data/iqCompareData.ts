export interface IQCompareInfo {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  sideA: {
    label: string;
    avgIQ: number;
    range: string;
    notes: string;
  };
  sideB: {
    label: string;
    avgIQ: number;
    range: string;
    notes: string;
  };
  verdict: string;
  overview: string;
  keyFindings: string[];
  faqItems: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
  relatedSlugs: string[];
}

export const iqCompareData: IQCompareInfo[] = [
  // ── Gender / Demographics ──────────────────────────────────────────────────
  {
    slug: "men-vs-women",
    title: "Men vs Women IQ",
    metaTitle: "Men vs Women IQ: Average Scores & Key Differences | MyIQScores",
    metaDescription: "Are men or women smarter? Compare average IQ scores by gender, explore score distributions, specific subtest differences, and what the research actually shows.",
    sideA: {
      label: "Men",
      avgIQ: 100,
      range: "97–103",
      notes: "Men show slightly higher variance in IQ scores — more individuals at both the very high and very low ends of the distribution. Men average marginally higher on spatial rotation and visuospatial tasks. The overall mean is statistically identical to women's.",
    },
    sideB: {
      label: "Women",
      avgIQ: 100,
      range: "97–103",
      notes: "Women average marginally higher on verbal fluency, processing speed, and perceptual speed tasks. The distribution is slightly less variable than men's. On most modern IQ batteries, the female mean is indistinguishable from the male mean.",
    },
    verdict: "Decades of research consistently show that average IQ is essentially identical between men and women — the difference in means is less than one point, which is both statistically and practically negligible. Where real differences appear is in the variance: men show slightly more spread, meaning modestly more men at both the highest and lowest extremes. Small subtest differences exist (men slightly favor spatial rotation; women slightly favor verbal fluency) but these are dwarfed by within-group variation. Claims that either gender is categorically 'smarter' are not supported by evidence.",
    overview: "The question of gender and IQ is one of the most studied topics in psychometrics. Large-scale studies consistently find no meaningful gap in average general intelligence between men and women. Differences that do appear are subtest-specific, small in magnitude, and may be partially attributable to socialization and cultural factors rather than biology. Understanding the distribution — not just the mean — is essential for interpreting gender and IQ research correctly.",
    keyFindings: [
      "Average IQ is virtually identical for men and women (<1 point difference in mean scores across major studies).",
      "Men show slightly higher score variance — more men appear at both the top and bottom 1–2% of the IQ distribution.",
      "Men average 3–4 points higher on 3D spatial rotation tasks; women average 3–4 points higher on verbal fluency tests.",
      "The Flynn Effect has raised IQ scores faster for women than men in several nations, narrowing even subtest gaps.",
      "Observed differences in high-achievement representation are better explained by historical barriers and socialization than by inherent cognitive differences.",
    ],
    faqItems: [
      {
        question: "Do men or women have a higher average IQ?",
        answer: "Neither. The difference in average IQ between men and women is less than 1 point across major population studies — a statistically and practically negligible gap. Both genders average close to 100 on a properly normed IQ test.",
      },
      {
        question: "Why are there more men at the very top of IQ distributions?",
        answer: "Men show slightly higher score variance than women, meaning more men appear at both the highest and lowest extremes of the IQ bell curve. This statistical pattern, combined with historical barriers to women's education and professional participation, explains most observed differences in elite representation.",
      },
      {
        question: "Are men better at math and women better at language?",
        answer: "On average, men score slightly higher on 3D spatial rotation tasks and women score slightly higher on verbal fluency and processing speed. However, these differences are small (0.1–0.3 standard deviations), overlap enormously, and the smartest women far outperform most men on spatial tasks and vice versa.",
      },
      {
        question: "Is the gender IQ gap getting smaller over time?",
        answer: "Yes. The Flynn Effect has raised scores faster in women in several countries, and measured subtest gaps have narrowed substantially over the past 50 years. This generational change strongly suggests that environmental and social factors — not fixed biology — drive much of the observed variation.",
      },
    ],
    relatedSlugs: ["introverts-vs-extroverts", "only-child-vs-siblings", "college-vs-no-college"],
  },
  {
    slug: "introverts-vs-extroverts",
    title: "Introverts vs Extroverts IQ",
    metaTitle: "Introverts vs Extroverts IQ: Who Scores Higher? | MyIQScores",
    metaDescription: "Do introverts really have higher IQs than extroverts? Explore the research on personality, temperament, and measured intelligence differences.",
    sideA: {
      label: "Introverts",
      avgIQ: 104,
      range: "100–108",
      notes: "Multiple studies find introverts score modestly higher on IQ tests on average, particularly on verbal and analytical subtests. They tend to prefer sustained, solitary study — a habit that correlates with crystallized intelligence gains. The effect is real but modest.",
    },
    sideB: {
      label: "Extroverts",
      avgIQ: 99,
      range: "96–102",
      notes: "Extroverts often show stronger practical and social intelligence, which standard IQ tests underweight. They tend to excel in real-time verbal tasks and collaborative problem-solving. Their overall IQ average is slightly lower but the overlap with introverts is enormous.",
    },
    verdict: "Introverts do score modestly higher on traditional IQ tests — roughly 3–5 points on average — but the difference is not large enough to meaningfully separate individuals. The introvert advantage likely reflects study habits, reading volume, and preference for solitary cognitive tasks rather than a fixed biological difference in cognitive capacity. Extroverts often excel on forms of intelligence not fully captured by standard tests, such as social reasoning and adaptive communication. Neither personality type is categorically 'smarter.'",
    overview: "The relationship between introversion/extroversion and IQ has fascinated researchers for decades. Studies consistently find a small positive correlation between introversion and measured IQ, particularly on verbal and analytical tasks. This connection may reflect the tendency of introverts to engage in more solitary, cognitively demanding activities — reading, reflection, and deliberate practice — rather than a direct causal link between personality and raw intelligence. Extroverts may hold advantages in emotionally intelligent and socially dynamic contexts that IQ tests do not capture.",
    keyFindings: [
      "Introverts average approximately 3–5 IQ points higher than extroverts across multiple studies examining personality and measured intelligence.",
      "The introvert–IQ correlation is strongest for verbal and analytical subtests, weaker for perceptual speed tasks.",
      "Introverts spend more time reading and in solitary cognitive practice, building crystallized intelligence measurable by IQ tests.",
      "Extroverts demonstrate stronger social and practical intelligence — domains underrepresented in standard IQ batteries.",
      "The correlation between introversion and IQ is real but modest (r ≈ 0.1–0.2), meaning personality explains only a small fraction of IQ variance.",
    ],
    faqItems: [
      {
        question: "Are introverts smarter than extroverts?",
        answer: "Introverts score modestly higher on traditional IQ tests (roughly 3–5 points on average), but the difference is small and the overlap enormous. The advantage likely reflects introvert study habits and reading volume rather than inherent cognitive superiority.",
      },
      {
        question: "Why might introverts score higher on IQ tests?",
        answer: "Introverts tend to spend more time in solitary, cognitively demanding activities such as reading and reflective thinking. These habits build crystallized intelligence — vocabulary, analytical reasoning, general knowledge — all of which are directly measured by IQ tests.",
      },
      {
        question: "Do extroverts have any cognitive advantages?",
        answer: "Yes. Extroverts often excel at social reasoning, adaptive communication, and real-time collaborative problem-solving. These skills are underrepresented in standard IQ batteries but are critical for leadership, sales, negotiation, and many high-impact careers.",
      },
      {
        question: "Does being introverted cause higher IQ?",
        answer: "Probably not directly. The relationship is likely mediated by behavior — introverts engage in more solitary cognitive practice, which builds measurable intelligence over time. Intelligence may also predispose some people to introversion (finding social stimulation less rewarding than intellectual solitude), creating a bidirectional relationship.",
      },
    ],
    relatedSlugs: ["men-vs-women", "readers-vs-tv-watchers", "night-owl-vs-early-bird"],
  },
  {
    slug: "left-brain-vs-right-brain",
    title: "Left Brain vs Right Brain IQ",
    metaTitle: "Left Brain vs Right Brain IQ: Myth vs Reality | MyIQScores",
    metaDescription: "Is the left brain–right brain IQ theory real? Explore neuroscience, dominant hemisphere research, and what brain lateralization actually means for intelligence.",
    sideA: {
      label: "Left-Brain Dominant",
      avgIQ: 102,
      range: "98–106",
      notes: "Left-hemisphere-dominant individuals tend to score higher on verbal, logical, and sequential reasoning tasks — components that make up a large share of standard IQ batteries. Language processing and analytical reasoning are strongly left-lateralized in most people.",
    },
    sideB: {
      label: "Right-Brain Dominant",
      avgIQ: 100,
      range: "97–104",
      notes: "Right-hemisphere-dominant individuals tend to excel at spatial, holistic, and creative processing. Standard IQ tests include spatial subtests where right-dominant individuals may have advantages. Overall scores are comparable to left-dominant individuals.",
    },
    verdict: "The popular 'left brain vs right brain' personality framework is largely a myth — modern neuroscience shows that virtually all complex cognitive tasks involve both hemispheres working together. That said, individual differences in hemispheric specialization do influence which cognitive subtests individuals perform best on. There is no consistent evidence that left- or right-brain dominance produces meaningfully higher overall IQ. Verbal IQ subtests favor left-hemisphere processing while spatial subtests favor right-hemisphere processing, so 'winners' depend entirely on which subtest you measure.",
    overview: "The idea that people are either 'left-brained' (logical, analytical) or 'right-brained' (creative, intuitive) is a powerful cultural narrative that neuroscience has substantially debunked. Brain imaging studies consistently show that complex thought involves dynamic cooperation between both hemispheres. While some functions are indeed lateralized — language strongly to the left, certain spatial tasks to the right — no person operates primarily from one hemisphere. The practical implication for IQ is that hemisphere dominance influences subtest profiles more than overall intelligence.",
    keyFindings: [
      "The left brain–right brain personality dichotomy is not supported by modern neuroimaging studies — both hemispheres collaborate on virtually all complex tasks.",
      "Language and sequential processing are strongly left-lateralized; holistic spatial processing and face recognition are more right-lateralized.",
      "IQ subtest profiles differ by hemispheric specialization, but overall full-scale IQ does not reliably differ between hemisphere-dominant individuals.",
      "Damage to either hemisphere produces specific, predictable cognitive deficits rather than global intelligence loss.",
      "Individual variation in hemispheric specialization is real but does not map cleanly onto personality types or general intelligence levels.",
    ],
    faqItems: [
      {
        question: "Is the left brain–right brain theory real?",
        answer: "The idea that people are purely 'left-brained' or 'right-brained' is a myth. Modern neuroscience shows both hemispheres collaborate on virtually all complex tasks. While some functions are lateralized, no person operates from a single dominant hemisphere in everyday cognition.",
      },
      {
        question: "Do left-brain dominant people have higher IQs?",
        answer: "Not overall. Left-hemisphere dominance correlates with stronger verbal reasoning scores, while right-hemisphere specialization correlates with stronger spatial scores. Full-scale IQ — which combines both — does not reliably differ between hemisphere-dominant groups.",
      },
      {
        question: "Are creative people right-brained?",
        answer: "Creativity involves both hemispheres. Research by Roger Beaty and colleagues found that creative individuals show stronger connectivity between multiple brain networks spanning both hemispheres, not simply right-hemisphere dominance. The right-brained creative stereotype oversimplifies complex neuroscience.",
      },
      {
        question: "Can I change my brain dominance?",
        answer: "Brain lateralization is partly genetic but also shaped by experience and training. Musicians, for example, develop stronger auditory processing in specific hemispheres based on instrument type and practice. However, trying to 'train' one hemisphere in isolation is not supported as an effective intelligence-boosting strategy.",
      },
    ],
    relatedSlugs: ["introverts-vs-extroverts", "men-vs-women", "stem-vs-humanities"],
  },
  {
    slug: "night-owl-vs-early-bird",
    title: "Night Owls vs Early Birds IQ",
    metaTitle: "Night Owls vs Early Birds IQ: Who's Smarter? | MyIQScores",
    metaDescription: "Do night owls really have higher IQs than early birds? Explore chronotype research, sleep science, and what the data says about IQ and sleep timing.",
    sideA: {
      label: "Night Owls",
      avgIQ: 103,
      range: "100–107",
      notes: "Several studies find that eveningness (preference for staying up late) correlates modestly with higher general intelligence and openness to experience. Night owls may benefit from quieter late-night environments for sustained cognitive work. The effect is small but consistently replicated.",
    },
    sideB: {
      label: "Early Birds",
      avgIQ: 100,
      range: "97–103",
      notes: "Early risers tend to score higher on measures of conscientiousness and proactive behavior, which correlate with academic and career success. On raw IQ scores, early birds average slightly lower than night owls in studies controlling for sleep quality, but the gap is modest.",
    },
    verdict: "Multiple studies find a small but consistent association between evening chronotype (night-owl preference) and higher general intelligence, particularly on novel problem-solving tasks. The magnitude is modest — roughly 3–5 IQ points on average — and the mechanism is unclear. It may reflect that higher-IQ individuals are more likely to override ancestral sleep patterns (an evolutionarily novel behavior), or simply that late-night environments offer fewer distractions for sustained thinking. Early birds have strong advantages in real-world performance due to better alignment with conventional schedules.",
    overview: "Chronotype — your biological preference for sleeping and waking times — has been linked to cognitive performance in a growing body of research. Satoshi Kanazawa's 'Savanna-IQ interaction hypothesis' proposed that higher intelligence predicts preference for evolutionarily novel behaviors, including staying up late. Studies of college students and working populations consistently find evening types score 3–6 points higher on cognitive ability tests, though the relationship is confounded by age, lifestyle, and sleep quality. Neither chronotype is objectively superior — performance depends heavily on task timing and schedule alignment.",
    keyFindings: [
      "Evening chronotypes (night owls) score approximately 3–6 IQ points higher than morning types in several large studies.",
      "The intelligence–eveningness correlation holds even after controlling for age and socioeconomic status.",
      "Night owls show advantages on creative and novel problem-solving tasks; early birds show advantages on tasks requiring consistent daily routine.",
      "Sleep deprivation — more common in night owls who must wake early for work — can easily negate any baseline IQ advantage.",
      "Chronotype is roughly 50% heritable; the other half is shaped by age, lifestyle, and light exposure habits.",
    ],
    faqItems: [
      {
        question: "Do night owls really have higher IQs?",
        answer: "Studies consistently find evening chronotypes score modestly higher on IQ tests — typically 3–6 points. The mechanism may relate to higher-IQ individuals preferring evolutionarily novel behaviors (like staying up late), or simply having fewer distractions during late-night work sessions.",
      },
      {
        question: "Are early birds more successful despite lower IQ scores?",
        answer: "Often yes. Early birds tend to score higher on conscientiousness and align better with conventional work schedules, translating to better academic grades and career performance. Night owls may have higher raw intelligence but face structural penalties from a society built around morning schedules.",
      },
      {
        question: "Can you change your chronotype?",
        answer: "Partially. Chronotype is about 50% heritable, but light exposure, meal timing, exercise habits, and age all influence it. Gradual schedule shifts of 15–30 minutes per day, combined with morning bright light exposure, can shift chronotype toward earlier rising over weeks.",
      },
      {
        question: "Does staying up late make you smarter?",
        answer: "No. Simply forcing yourself to stay up late will not improve your IQ — and sleep deprivation actively reduces cognitive performance. The night owl–IQ correlation reflects a natural preference, not the act of staying awake. Adequate sleep is one of the strongest known factors for maintaining cognitive performance.",
      },
    ],
    relatedSlugs: ["introverts-vs-extroverts", "meditation-vs-no-meditation", "morning-exercise-vs-sedentary"],
  },
  {
    slug: "only-child-vs-siblings",
    title: "Only Children vs Siblings IQ",
    metaTitle: "Only Child vs Siblings IQ: Birth Order & Intelligence | MyIQScores",
    metaDescription: "Do only children have higher IQs than children with siblings? Explore birth order research, parental investment theory, and what studies actually find.",
    sideA: {
      label: "Only Children",
      avgIQ: 103,
      range: "100–106",
      notes: "Only children receive undivided parental time, resources, and intellectual stimulation throughout childhood. Studies consistently find they average slightly higher IQ scores than children with siblings — comparable to first-borns — due to concentrated parental investment and adult-dominated language environments.",
    },
    sideB: {
      label: "Children with Siblings",
      avgIQ: 100,
      range: "97–103",
      notes: "Children with siblings typically average slightly lower IQ scores than only children, with scores declining modestly with each additional sibling. However, they may develop stronger social intelligence, cooperation skills, and emotional regulation — qualities not captured by standard IQ tests.",
    },
    verdict: "Research consistently finds that only children score 2–4 IQ points higher on average than children raised with siblings, with the gap explained by parental investment theory: only children receive more parental time, richer language environments, and greater educational resources. The effect is real but modest, and the IQ advantage of being an only child has essentially no practical significance for an individual's life outcomes. Children with siblings often develop stronger social skills and resilience, which may offset any small IQ difference in real-world performance.",
    overview: "The only child vs siblings IQ question connects to decades of birth-order and family size research. The consensus finding is that IQ declines modestly with family size — a pattern most strongly predicted by parental investment theory, which holds that cognitive stimulation per child decreases as the number of children increases. Only children — like first-borns — consistently score 2–4 IQ points above population averages. However, family size effects on IQ are small, and confounds like socioeconomic status and parental education make causal interpretation difficult.",
    keyFindings: [
      "Only children average 2–4 IQ points above population norms, comparable to first-born children in multi-sibling families.",
      "Average IQ declines by approximately 1.5–2 points per additional sibling in large-sample studies, according to confluence model predictions.",
      "The only child IQ advantage is primarily explained by concentrated parental investment and richer adult-language environments.",
      "Socioeconomic status partially confounds the data: higher-income families are more likely to have only children and provide enriched environments.",
      "Only children may lag in social intelligence and cooperative problem-solving — domains not fully captured by standard IQ measures.",
    ],
    faqItems: [
      {
        question: "Are only children smarter than children with siblings?",
        answer: "On average, only children score 2–4 IQ points higher than children with siblings. This is attributed to greater parental investment, richer language environments, and more educational resources per child — not to anything inherent about being an only child.",
      },
      {
        question: "Does having more siblings lower IQ?",
        answer: "Large studies find IQ declines by roughly 1.5–2 points per additional sibling, following the confluence model prediction. However, this is an average trend across populations, not a deterministic rule. Many individuals with large sibships have high IQs, and family dynamics vary enormously.",
      },
      {
        question: "Do siblings have any cognitive advantages over only children?",
        answer: "Yes. Children with siblings often develop stronger social cognition, theory of mind, conflict resolution skills, and emotional resilience through peer interaction within the home. These competencies are underrepresented in standard IQ tests but are highly valuable in adult social and professional life.",
      },
      {
        question: "Is the only child IQ advantage meaningful in practice?",
        answer: "Not really. A 2–4 point difference is statistically detectable in large studies but too small to matter for any individual's life outcomes. Parenting quality, education, and individual motivation swamp the effect of sibship size in predicting academic and career success.",
      },
    ],
    relatedSlugs: ["men-vs-women", "college-vs-no-college", "readers-vs-tv-watchers"],
  },

  // ── Countries ──────────────────────────────────────────────────────────────
  {
    slug: "us-vs-china",
    title: "USA vs China IQ",
    metaTitle: "USA vs China IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Compare average IQ scores in the United States vs China. Explore national IQ data, education systems, cultural factors, and what the research actually shows.",
    sideA: {
      label: "USA",
      avgIQ: 98,
      range: "96–100",
      notes: "The United States scores near the global average for high-income countries. IQ scores vary significantly by state and demographic group. The US benefits from strong higher education institutions but shows broader within-country score dispersion than many peer nations.",
    },
    sideB: {
      label: "China",
      avgIQ: 105,
      range: "103–107",
      notes: "China consistently ranks among the highest-scoring nations in international cognitive assessments and IQ studies. PISA scores for Shanghai and Beijing are among the world's highest. The strong emphasis on academic achievement, competitive testing, and rote learning supports high measured scores.",
    },
    verdict: "Studies consistently place China's national average IQ approximately 5–7 points above the United States, positioning China among the world's highest-scoring nations alongside Japan, South Korea, and Singapore. This gap reflects a combination of educational culture, test preparation emphasis, and potentially nutritional and environmental improvements over recent decades. Methodological caution is warranted: national IQ estimates carry significant uncertainty due to sampling issues, and within-country variation in both nations dwarfs the between-country gap. Neither national score predicts individual ability.",
    overview: "Comparing national IQ averages is scientifically contested but widely cited in research by Lynn, Vanhanen, and Rindermann. China consistently appears in the top tier of national cognitive performance studies, scoring roughly 5–8 points above the United States average. US scores are close to the high-income-country average but show more internal dispersion. Both countries have experienced significant IQ score gains over recent decades (the Flynn Effect), driven by better nutrition, healthcare, and educational access. Cultural emphasis on academic achievement in China likely contributes to higher average test performance.",
    keyFindings: [
      "China averages approximately 105 on national IQ estimates; the United States averages approximately 98 — a gap of roughly 7 points.",
      "Chinese students consistently lead international assessments like PISA in mathematics and science, corroborating IQ data.",
      "The US scores near the median for high-income nations but shows higher within-country variance due to large demographic diversity.",
      "Both countries have experienced Flynn Effect gains of 3+ points per decade over the 20th century.",
      "National IQ estimates carry substantial methodological uncertainty and should not be used to make inferences about individuals.",
    ],
    faqItems: [
      {
        question: "Does China have a higher average IQ than the USA?",
        answer: "According to major national IQ studies, China averages approximately 105 compared to approximately 98 for the United States — a gap of about 7 points. China consistently ranks among the top nations in both IQ studies and international academic assessments like PISA.",
      },
      {
        question: "Why does China score higher on average IQ tests?",
        answer: "Factors include a strong cultural emphasis on academic achievement, intensive test preparation from early childhood, competitive educational systems, and improvements in nutrition and healthcare over recent decades. The extremely competitive gaokao exam culture may also selectively boost cognitive test performance.",
      },
      {
        question: "Are Americans less intelligent than Chinese people?",
        answer: "No. National average differences of 5–8 points are population-level statistics with enormous individual variation on both sides. Millions of Americans score higher than the Chinese average and vice versa. National averages reflect complex environmental, cultural, and educational factors, not fixed biological differences.",
      },
      {
        question: "How reliable are national IQ comparisons?",
        answer: "Moderately. National IQ estimates face challenges including non-representative sampling, varying test conditions, and cultural test bias. They correlate meaningfully with GDP, educational outcomes, and PISA scores, suggesting they capture something real — but individual-level inferences from national averages are scientifically unjustified.",
      },
    ],
    relatedSlugs: ["us-vs-japan", "us-vs-uk", "india-vs-china"],
  },
  {
    slug: "us-vs-japan",
    title: "USA vs Japan IQ",
    metaTitle: "USA vs Japan IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Compare average IQ scores in the United States vs Japan. See national IQ estimates, PISA rankings, cultural factors, and what drives the cognitive score gap.",
    sideA: {
      label: "USA",
      avgIQ: 98,
      range: "96–100",
      notes: "The United States scores near the global average for high-income nations. Strong university research output and innovation capacity coexist with notable within-country score disparities across demographic and socioeconomic groups.",
    },
    sideB: {
      label: "Japan",
      avgIQ: 105,
      range: "103–107",
      notes: "Japan consistently ranks among the top five nations in international IQ and cognitive assessment studies. The country's rigorous education system, low inequality, excellent nutrition, and cultural emphasis on precision and discipline correlate with high average cognitive test scores.",
    },
    verdict: "Japan consistently scores among the world's highest on both IQ research studies and international academic assessments. The gap between Japan and the United States is approximately 5–7 IQ points according to most published estimates. Japan's educational rigor, homogeneous test environment, high nutrition standards, and cultural emphasis on academic performance likely all contribute. As with all national comparisons, these are population averages with enormous individual overlap — many Americans score well above Japan's average and vice versa.",
    overview: "Japan has long been a top-performing nation in cognitive assessment research, appearing at or near the summit of national IQ rankings alongside South Korea, Singapore, and China. Its educational system is internationally respected for producing high levels of mathematical and scientific literacy. The United States, while home to many world-leading research institutions, shows a lower national average due partly to greater demographic heterogeneity and higher socioeconomic inequality. The Flynn Effect has raised IQ scores in both countries, with Japan showing some of the largest documented generational gains.",
    keyFindings: [
      "Japan averages approximately 105 on national IQ estimates; the USA averages approximately 98 — a gap of roughly 7 points.",
      "Japan ranks consistently in the top 5 of international PISA mathematics and science assessments.",
      "Japanese Flynn Effect gains in the mid-20th century were among the largest documented, linked to rapid post-war improvements in nutrition and education.",
      "The US shows higher within-country IQ variance, reflecting greater demographic and socioeconomic diversity.",
      "Both nations' high-IQ institutions (MIT, Tokyo University) produce globally competitive research despite national average differences.",
    ],
    faqItems: [
      {
        question: "Does Japan have a higher average IQ than the United States?",
        answer: "Yes, according to major national IQ studies. Japan averages approximately 105 compared to approximately 98 for the United States — a 7-point gap. Japan ranks consistently among the top nations on both IQ studies and PISA international assessments.",
      },
      {
        question: "Why does Japan score higher on average cognitive tests?",
        answer: "Contributing factors include a rigorous and uniform national education system, strong cultural emphasis on academic excellence, low rates of poverty and malnutrition (both of which depress IQ), and relatively low within-country socioeconomic inequality compared to the United States.",
      },
      {
        question: "Do Japanese people have the highest IQ in the world?",
        answer: "Japan is consistently among the highest-scoring nations but shares the top tier with Singapore, South Korea, China, and Hong Kong — all averaging 105–108. No single nation is clearly dominant, and ranking differences often fall within measurement error.",
      },
      {
        question: "Should I compare myself to a national average IQ?",
        answer: "No. National averages are statistical abstractions with huge individual variation. A 7-point national average difference between Japan and the US means millions of Americans score higher than the Japanese average and vice versa. Your individual IQ is shaped by your unique genetic endowment and life experiences, not your nationality.",
      },
    ],
    relatedSlugs: ["us-vs-china", "uk-vs-germany", "us-vs-uk"],
  },
  {
    slug: "uk-vs-germany",
    title: "UK vs Germany IQ",
    metaTitle: "UK vs Germany IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Compare average IQ scores in the United Kingdom vs Germany. Explore national IQ research, PISA data, education differences, and what drives cognitive performance gaps in Europe.",
    sideA: {
      label: "UK",
      avgIQ: 100,
      range: "98–102",
      notes: "The United Kingdom consistently scores around 100 in national IQ studies — close to the traditional global benchmark. Strong university systems and research output coexist with notable regional variation in educational outcomes across England, Scotland, Wales, and Northern Ireland.",
    },
    sideB: {
      label: "Germany",
      avgIQ: 102,
      range: "100–104",
      notes: "Germany typically scores 1–3 points above the UK in most national IQ estimates, consistent with its top-tier PISA mathematics performance. Germany's vocational training system and emphasis on technical precision may contribute to strong performance on quantitative IQ subtests.",
    },
    verdict: "The UK and Germany are cognitively very close — most studies place Germany 1–3 points above the UK, a difference that falls within the margin of error for many national estimates. Both countries rank in the top quarter of European nations. Germany's slight edge may reflect stronger mathematical education and its celebrated vocational training system (Ausbildung). The practical difference between scores this close is negligible, and both nations produce world-class intellectual and scientific output.",
    overview: "Within the European context, the UK and Germany consistently rank as high-performing nations but are closely matched in measured cognitive ability. Germany slightly edges the UK in most published estimates, consistent with better PISA mathematics scores and a renowned engineering and technical education tradition. Both countries have well-funded education systems, low rates of severe poverty, and strong public health infrastructure — the key environmental prerequisites for maximizing cognitive potential at the population level.",
    keyFindings: [
      "Germany averages approximately 102 on national IQ estimates; the UK averages approximately 100 — a gap of only 1–3 points.",
      "Both nations rank in the top 25% of European countries on measured cognitive ability.",
      "Germany consistently outperforms the UK on PISA mathematics, but the UK narrows the gap in reading literacy.",
      "Within-country variation in both the UK and Germany is far larger than the between-country gap.",
      "Both countries demonstrate that high national average IQ is consistent with diverse immigrant populations and strong multicultural integration.",
    ],
    faqItems: [
      {
        question: "Is Germany smarter than the UK on average?",
        answer: "Germany scores approximately 1–3 IQ points higher than the UK in most national estimates — a tiny difference that is arguably within measurement error. Both countries rank among Europe's higher-scoring nations, and the practical difference between scores this close is negligible.",
      },
      {
        question: "How do UK and Germany compare on international academic tests?",
        answer: "Germany consistently outperforms the UK on PISA mathematics, while the UK performs comparably on reading and science. These patterns are consistent with the slight IQ estimate advantage for Germany and Germany's celebrated engineering and technical education tradition.",
      },
      {
        question: "What drives Germany's cognitive test performance?",
        answer: "Germany's Gymnasium academic track, strong STEM education culture, internationally respected vocational training system (Ausbildung), and low child poverty rates all likely contribute to high average cognitive performance relative to peers.",
      },
      {
        question: "Are national IQ differences within Europe meaningful?",
        answer: "The differences are small and carry significant methodological uncertainty. Within Europe, most high-income nations cluster between 98–104 on national IQ estimates — a range so narrow that individual sampling differences, test conditions, and cultural familiarity with testing can shift a country's position substantially.",
      },
    ],
    relatedSlugs: ["us-vs-uk", "us-vs-japan", "us-vs-china"],
  },
  {
    slug: "us-vs-uk",
    title: "USA vs UK IQ",
    metaTitle: "USA vs UK IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Compare average IQ scores in the United States vs United Kingdom. See what national IQ studies and PISA data reveal about cognitive differences between these English-speaking nations.",
    sideA: {
      label: "USA",
      avgIQ: 98,
      range: "96–100",
      notes: "The United States scores near the high-income-country average. Wide demographic diversity and significant socioeconomic inequality produce higher within-country score variance than most European nations. The US leads in research university output despite being slightly below UK national average estimates.",
    },
    sideB: {
      label: "UK",
      avgIQ: 100,
      range: "98–102",
      notes: "The United Kingdom typically scores 1–3 points above the United States in national IQ estimates, consistent with somewhat higher PISA scores. Strong national literacy traditions and more equitable primary education systems relative to the US likely contribute to the modest gap.",
    },
    verdict: "The UK holds a modest 1–3 point advantage over the United States in national IQ estimates — a difference too small to be practically meaningful but consistent across multiple studies. The US higher education and research system is arguably the world's strongest, illustrating that national average IQ does not determine the ceiling of cognitive achievement within a country. Both English-speaking nations perform well in global innovation and Nobel Prize rates, reflecting that high-performing individuals exist in large numbers in both countries.",
    overview: "The USA and UK are closely matched on national cognitive measures, with the UK holding a slight statistical edge. Both countries share the English language, strong democratic institutions, and world-class university systems. The modest gap likely reflects socioeconomic inequality differences — the US has higher child poverty rates and greater educational resource disparities between wealthy and low-income communities, both of which suppress national average IQ estimates without reflecting the cognitive potential of the population.",
    keyFindings: [
      "The UK averages approximately 100 on national IQ estimates; the USA averages approximately 98 — a gap of only 1–3 points.",
      "Both nations score similarly on international cognitive benchmarks, with neither holding a dominant position.",
      "US within-country IQ variance is higher, reflecting greater demographic diversity and socioeconomic inequality.",
      "The US leads the world in Nobel Prize winners — demonstrating elite cognitive achievement independent of national average IQ.",
      "Both countries have experienced consistent Flynn Effect gains, with the US showing steeper gains in recent decades due to improving education for historically underserved populations.",
    ],
    faqItems: [
      {
        question: "Does the UK have a higher average IQ than the USA?",
        answer: "Slightly. Most national IQ studies estimate the UK at approximately 100 and the USA at approximately 98 — a 2-point gap that is barely outside the margin of error for these estimates. Both countries are closely matched, and the difference is not practically significant.",
      },
      {
        question: "Why might the UK score marginally higher than the USA?",
        answer: "Possible contributors include lower child poverty rates in the UK, more equitable primary school funding (the UK uses centralized funding rather than the US's property-tax-based model), and lower rates of nutritional deprivation among children — all environmental factors that support higher average cognitive test scores.",
      },
      {
        question: "If the US has a lower national IQ, why does it lead in Nobel Prizes?",
        answer: "National average IQ and elite intellectual achievement are different things. The US attracts the world's top talent through immigration, has the most research universities, and provides enormous funding for science. Nobel Prize rates reflect institutional investment and talent attraction, not national average intelligence.",
      },
      {
        question: "Are Americans or Brits better at specific types of tasks?",
        answer: "There is no reliable evidence of systematic differences in specific cognitive domains between Americans and Britons beyond the small overall average gap. Individual variation within both populations dwarfs any group-level difference.",
      },
    ],
    relatedSlugs: ["uk-vs-germany", "us-vs-japan", "us-vs-china"],
  },
  {
    slug: "india-vs-china",
    title: "India vs China IQ",
    metaTitle: "India vs China IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Compare average IQ scores in India vs China. Explore national cognitive data, education differences, socioeconomic factors, and what drives the measured gap between these two nations.",
    sideA: {
      label: "India",
      avgIQ: 82,
      range: "79–85",
      notes: "India's national IQ estimate is significantly affected by widespread poverty, malnutrition, limited access to quality education in rural areas, and high rates of infectious disease during childhood — all environmental factors that suppress measured cognitive performance. India's elite segment performs at world-class levels.",
    },
    sideB: {
      label: "China",
      avgIQ: 105,
      range: "103–107",
      notes: "China's national average is substantially higher than India's, reflecting decades of investment in universal education, near-elimination of childhood malnutrition, and a culture of intensive academic preparation. China's one-child policy also increased per-child parental investment for a generation.",
    },
    verdict: "The measured gap between India and China's national IQ averages — approximately 20–23 points — is one of the largest between neighboring major economies and largely reflects differences in developmental environment rather than genetic potential. India's measured scores are suppressed by high rates of childhood malnutrition, inconsistent educational access, and childhood disease burden. When Indian children are raised in nutritionally adequate, educationally stimulating environments — as seen among Indian-Americans — they score at or above the top of global cognitive distributions. China's advantage reflects environmental investment, not inherent biological superiority.",
    overview: "India and China represent a striking contrast in national cognitive assessment outcomes, with a gap of roughly 20+ IQ points in published estimates. This difference is far too large and too rapidly changeable to be explained by genetics — instead, it reflects dramatic differences in the environmental conditions for cognitive development. China's rapid post-Mao investment in universal education and childhood nutrition drove Flynn Effect gains of exceptional magnitude. India's uneven development means its national average is dragged down by the roughly 350 million people still living in severe poverty with inadequate nutrition and schooling.",
    keyFindings: [
      "China averages approximately 105 on national IQ estimates; India averages approximately 82 — a gap of roughly 20–23 points, primarily explained by environmental differences.",
      "Childhood malnutrition affects roughly 35% of Indian children under 5, a factor known to suppress IQ by 5–15 points.",
      "Indian-Americans — raised in nutritionally and educationally adequate environments — score among the highest of any US demographic group.",
      "China's rapid mid-20th-century IQ gains followed its massive investment in universal education and childhood nutrition programs.",
      "India's IIT and IIM graduates compete globally at elite levels, demonstrating the enormous cognitive potential when environmental conditions are favorable.",
    ],
    faqItems: [
      {
        question: "Why is China's average IQ so much higher than India's?",
        answer: "The gap primarily reflects environmental differences, not genetics. China invested heavily in universal education, childhood nutrition, and public health from the 1950s onward, driving massive cognitive gains. India's uneven development leaves a large share of its population without adequate nutrition and schooling, suppressing the national average.",
      },
      {
        question: "Are Indians inherently less intelligent than Chinese people?",
        answer: "No. The evidence strongly suggests the gap is environmental, not genetic. Indian-Americans — who grow up in nutritionally and educationally rich environments — score at or above the top of US cognitive distributions. The same genetic potential, expressed in a different environment, produces dramatically different measured IQ.",
      },
      {
        question: "Does India produce highly intelligent people?",
        answer: "Absolutely. India produces world-class mathematicians, scientists, engineers, and business leaders at elite levels. IIT admission requires scoring in the top 0.1% of a cohort of 1.5 million — producing graduates who compete globally with any nation's best. National averages obscure the high-performing segment.",
      },
      {
        question: "Will India's national IQ increase as it develops?",
        answer: "Historical evidence from other developing nations strongly suggests yes. As childhood malnutrition declines, educational access improves, and disease burden falls, national average IQ rises accordingly — following the same Flynn Effect pattern seen in China, South Korea, and previously Japan. India's IQ gains are likely to accelerate as economic development continues.",
      },
    ],
    relatedSlugs: ["us-vs-china", "us-vs-japan", "uk-vs-germany"],
  },

  // ── Careers ────────────────────────────────────────────────────────────────
  {
    slug: "doctor-vs-engineer",
    title: "Doctor vs Engineer IQ",
    metaTitle: "Doctor vs Engineer IQ: Average IQ Compared | MyIQScores",
    metaDescription: "Who has a higher IQ — doctors or engineers? Compare average IQ scores by profession, explore the cognitive demands of medicine vs engineering, and see what the research shows.",
    sideA: {
      label: "Doctors",
      avgIQ: 125,
      range: "120–130",
      notes: "Physicians consistently score in the 120–130 range on studies of professional IQ. Medicine requires broad mastery of biological sciences, rapid diagnostic reasoning under uncertainty, and communication skills — demanding both verbal and fluid reasoning capacities.",
    },
    sideB: {
      label: "Engineers",
      avgIQ: 126,
      range: "120–132",
      notes: "Engineers average in the 120–132 range, with variation by specialty. Electrical and software engineers tend to score highest. Engineering demands strong spatial reasoning, mathematical ability, and systems thinking — highly g-loaded tasks that require sustained abstract reasoning.",
    },
    verdict: "Doctors and engineers are essentially tied in measured average IQ, both averaging around 125–126 with similar ranges. Both professions sit comfortably in the top 5% of the general population's IQ distribution. The cognitive profiles differ slightly — physicians rely more on verbal reasoning and working memory for diagnostic pattern recognition, while engineers lean more heavily on spatial and mathematical reasoning. Specialty matters: neurosurgeons and aerospace engineers both likely exceed their respective profession averages, while primary care physicians and civil engineers tend to score closer to the professional mean.",
    overview: "Both medicine and engineering are among the most cognitively demanding careers, drawing from the upper tier of the IQ distribution. Studies of occupational IQ — including Hauser & Warren's occupational scoring tables and military AFQT data — consistently place both professions in the 120–130 range. The difference between average physician and average engineer IQ is too small to be practically meaningful. Both careers require years of intensive academic training that selects for and further develops cognitive ability.",
    keyFindings: [
      "Physicians average approximately 125 IQ; engineers average approximately 126 — a statistically negligible difference.",
      "Both professions draw from the top 5–10% of the general IQ distribution.",
      "Cognitive profiles differ: physicians emphasize verbal reasoning and working memory; engineers emphasize mathematical and spatial reasoning.",
      "Specialty IQ varies substantially within each profession — neurosurgeons and theoretical physicists score well above their profession averages.",
      "Years of professional training continue to build crystallized intelligence, raising measured IQ above entry-level scores for experienced practitioners.",
    ],
    faqItems: [
      {
        question: "Do doctors or engineers have higher IQs on average?",
        answer: "They are essentially tied — both professions average approximately 125–126 IQ, well within each other's measurement range. Engineers show slightly more within-profession variance (aerospace and software engineers tend very high; civil engineers somewhat lower), while physicians cluster more tightly around the mean.",
      },
      {
        question: "What cognitive skills do doctors need that engineers don't?",
        answer: "Physicians rely heavily on verbal reasoning, working memory, and interpersonal communication. Diagnostic medicine requires integrating ambiguous information under time pressure — pattern recognition combined with empathetic communication. These verbal-social demands are less central in most engineering roles.",
      },
      {
        question: "Which engineering specialty has the highest average IQ?",
        answer: "Electrical engineering and software engineering consistently score highest among engineering disciplines in occupational IQ studies, reflecting the strong mathematical abstraction and algorithmic thinking these fields require. Aerospace engineering also ranks near the top.",
      },
      {
        question: "Does IQ matter more for doctors or engineers?",
        answer: "IQ is highly predictive of performance in both fields. However, above IQ ~120, the threshold needed for adequate professional performance is met by most practitioners, and other factors — conscientiousness, practical experience, domain knowledge, and interpersonal skills — become stronger differentiators of exceptional vs. average performance.",
      },
    ],
    relatedSlugs: ["lawyer-vs-doctor", "scientist-vs-businessman", "programmer-vs-accountant"],
  },
  {
    slug: "lawyer-vs-doctor",
    title: "Lawyer vs Doctor IQ",
    metaTitle: "Lawyer vs Doctor IQ: Who Scores Higher? | MyIQScores",
    metaDescription: "Compare average IQ scores for lawyers vs doctors. Explore the cognitive demands of law vs medicine, LSAT and MCAT data, and occupational IQ research findings.",
    sideA: {
      label: "Lawyers",
      avgIQ: 123,
      range: "118–128",
      notes: "Attorneys average in the 118–128 IQ range in occupational studies. Law relies heavily on verbal reasoning, logical argumentation, reading comprehension, and working memory for case law. The LSAT selects strongly for analytical and logical reasoning skills.",
    },
    sideB: {
      label: "Doctors",
      avgIQ: 125,
      range: "120–130",
      notes: "Physicians average in the 120–130 range. Medicine requires broad scientific knowledge, diagnostic reasoning, and strong working memory for clinical protocols. The MCAT is highly g-loaded, assessing verbal, scientific, and critical reasoning simultaneously.",
    },
    verdict: "Doctors hold a modest 2-point average IQ advantage over lawyers in occupational studies — a statistically negligible difference given both professions draw from the top 5–8% of the IQ distribution. The cognitive profiles differ meaningfully: lawyers tend to excel at verbal argumentation and logical deduction, while physicians lean more heavily on scientific reasoning and pattern recognition under uncertainty. Both professions require exceptional academic performance for admission, and specialty within each field creates substantial within-profession IQ variation.",
    overview: "Law and medicine are both elite professions requiring extended post-graduate training and drawing from the upper IQ range. Occupational IQ studies consistently place both in the 120–130 range. LSAT and MCAT data provide indirect but powerful evidence of the cognitive demands: both exams are among the most difficult standardized tests, and admission to top programs requires scores in the 90th+ percentile. The practical distinction between a 123 and 125 average is negligible — but cognitive profile differences between the professions are real and worth understanding for career decisions.",
    keyFindings: [
      "Physicians average approximately 125 IQ; lawyers approximately 123 — a 2-point gap that is not practically meaningful.",
      "Both professions draw from the top 5–8% of the general population IQ distribution.",
      "The LSAT loads heavily on verbal and logical reasoning; the MCAT loads heavily on scientific and critical reasoning.",
      "Trial lawyers may show higher verbal IQ than transactional attorneys; surgeons may show higher spatial IQ than psychiatrists.",
      "Earnings in both professions correlate more strongly with network, specialization, and business development than with IQ above professional threshold levels.",
    ],
    faqItems: [
      {
        question: "Do doctors or lawyers have higher IQs on average?",
        answer: "Doctors edge lawyers by approximately 2 IQ points on average (125 vs 123), but this difference is statistically negligible. Both professions draw from the top 5–8% of the IQ distribution, and the overlap between the two ranges is almost complete.",
      },
      {
        question: "Which profession is more cognitively demanding — law or medicine?",
        answer: "Both are exceptionally demanding in different ways. Medicine requires broad scientific knowledge and diagnostic reasoning under uncertainty. Law requires mastery of complex argumentation, voluminous case law, and real-time verbal reasoning in adversarial settings. Cognitive demand profiles differ more than overall levels.",
      },
      {
        question: "Do LSAT scores predict IQ?",
        answer: "Yes, strongly. The LSAT is a highly g-loaded test measuring logical reasoning, analytical reading, and deductive argumentation. LSAT scores correlate approximately 0.60–0.70 with general intelligence measures, making it one of the stronger cognitive predictors among professional admissions tests.",
      },
      {
        question: "Is law school or medical school harder to get into?",
        answer: "At the elite level, both are extremely competitive. Top law schools (Yale, Harvard Law) and top medical schools (Johns Hopkins, UCSF) both accept under 5% of applicants. Medical school is generally considered more scientifically rigorous; law school places stronger emphasis on argumentative writing and logical reasoning.",
      },
    ],
    relatedSlugs: ["doctor-vs-engineer", "scientist-vs-businessman", "engineer-vs-artist"],
  },
  {
    slug: "engineer-vs-artist",
    title: "Engineer vs Artist IQ",
    metaTitle: "Engineer vs Artist IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Compare average IQ scores for engineers vs artists. Explore creativity, intelligence, cognitive profiles, and what research reveals about engineers and artists.",
    sideA: {
      label: "Engineers",
      avgIQ: 126,
      range: "120–132",
      notes: "Engineers consistently rank among the highest-IQ professions in occupational studies. Strong mathematical, spatial, and systems reasoning demands select for high g-factor ability. Software and electrical engineers lead within the field.",
    },
    sideB: {
      label: "Artists",
      avgIQ: 104,
      range: "98–110",
      notes: "Visual artists and performing artists average in the 98–110 range in occupational studies — above the general population but well below STEM professions. Artists often show high openness to experience and divergent thinking, which standard IQ tests partially underweight.",
    },
    verdict: "Engineers score approximately 20–22 points higher on average IQ than artists — one of the larger professional IQ gaps. This reflects the heavy mathematical and logical demands of engineering, which select strongly for high general intelligence. However, artistic success depends substantially on creativity, emotional intelligence, aesthetic judgment, and communication — domains where standard IQ tests have limited predictive power. Many highly successful artists have above-average but not elite IQs, and many highly intelligent individuals choose the arts precisely because conventional metrics cannot fully capture their strengths.",
    overview: "The engineer–artist IQ gap is substantial in measured terms, reflecting the different cognitive demands of each field. Engineering has explicit quantitative prerequisites that create a high cognitive floor for entry. Artistic fields have lower cognitive entry barriers but reward a different set of abilities — creativity, aesthetic sensitivity, emotional expressiveness — that correlate only modestly with standard IQ. Research on creativity and intelligence suggests a 'threshold theory': a minimum IQ of roughly 120 is associated with creative genius, but above that threshold, other factors (openness, divergent thinking, intrinsic motivation) predict creative output better than additional IQ points.",
    keyFindings: [
      "Engineers average approximately 126 IQ; artists average approximately 104 — a gap of roughly 22 points.",
      "The gap reflects engineering's quantitative prerequisites, not evidence that engineers are more valuable or capable human beings.",
      "Divergent thinking — strongly associated with artistic ability — correlates only modestly with IQ (r ≈ 0.2–0.3).",
      "Many world-renowned artists have had high IQs: Leonardo da Vinci is estimated at 180+; Andy Warhol at approximately 86 — suggesting IQ is not the primary determinant of artistic greatness.",
      "Engineering and art overlap in design, architecture, and product development — where both quantitative and aesthetic reasoning are essential.",
    ],
    faqItems: [
      {
        question: "Are engineers smarter than artists on IQ tests?",
        answer: "Yes, by a substantial margin on average — approximately 22 IQ points. Engineering's mathematical prerequisites create a high cognitive floor. However, IQ tests measure only a subset of relevant cognitive abilities, underrepresenting the creativity, aesthetic judgment, and emotional intelligence central to artistic success.",
      },
      {
        question: "Do you need to be intelligent to be a great artist?",
        answer: "You need to be above a modest threshold — roughly average or above-average IQ — but artistic greatness is not primarily an IQ contest. Creativity, emotional depth, unique perspective, technical skill, and the ability to connect with audiences all matter far more than IQ above the basic threshold.",
      },
      {
        question: "Can someone be both a great engineer and a great artist?",
        answer: "Absolutely. Leonardo da Vinci is the classic example. Many engineers pursue music, painting, or writing at high levels, and many artists have strong mathematical backgrounds. The skills are complementary — spatial reasoning, pattern recognition, and systems thinking contribute to both engineering and visual art.",
      },
      {
        question: "Is IQ a good predictor of artistic success?",
        answer: "Weakly. IQ correlates with artistic technical skill acquisition but poorly predicts whether an artist achieves commercial or critical success. Personality factors — especially openness to experience — and environmental factors like social networks and market timing are much stronger predictors of artistic career outcomes.",
      },
    ],
    relatedSlugs: ["doctor-vs-engineer", "scientist-vs-businessman", "stem-vs-humanities"],
  },
  {
    slug: "scientist-vs-businessman",
    title: "Scientist vs Businessman IQ",
    metaTitle: "Scientist vs Businessman IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Who has a higher IQ — scientists or businesspeople? Compare average IQ scores, cognitive profiles, and what occupational research reveals about intelligence in science vs business.",
    sideA: {
      label: "Scientists",
      avgIQ: 130,
      range: "125–135",
      notes: "Research scientists — particularly in physics, mathematics, chemistry, and biology — average among the highest IQs of any occupational group, typically 125–135. Scientific reasoning requires novel problem formulation, hypothesis testing, and sustained abstract thought at high levels.",
    },
    sideB: {
      label: "Businesspeople",
      avgIQ: 115,
      range: "110–120",
      notes: "Business executives and entrepreneurs average in the 110–120 IQ range — above average and in the top 15–25% of the population, but below research scientists. Business success relies heavily on social intelligence, risk judgment, and emotional regulation — capabilities that IQ captures only partially.",
    },
    verdict: "Research scientists score substantially higher on average IQ than businesspeople — approximately 15 points — but the comparison obscures more than it reveals. Scientists are selected almost exclusively for abstract reasoning ability, with doctoral programs and academic hiring serving as extended IQ-filtered funnels. Business success depends on a broader portfolio of skills including social intelligence, risk tolerance, persuasion, and execution under uncertainty — qualities that IQ measures poorly. Many of the world's wealthiest and most influential businesspeople have above-average but not exceptional IQs, while many genius-level scientists have lived unremarkable lives outside their laboratory.",
    overview: "Occupational IQ studies consistently place scientists — especially theoretical scientists — near the top of all professions. PhD programs in physics and mathematics draw from the top 1–2% of cognitive ability. Business executives and entrepreneurs draw from a broader IQ range, with successful businesspeople spanning from 100 to 150+. The essential difference is that scientific careers select almost purely for abstract reasoning, while business careers reward a much wider array of capabilities including people management, negotiation, strategic risk-taking, and opportunity recognition.",
    keyFindings: [
      "Research scientists average approximately 130 IQ; business executives average approximately 115 — a gap of roughly 15 points.",
      "Scientists in theoretical physics and mathematics are among the highest-IQ professionals in any occupational database.",
      "Business success correlates with IQ at moderate levels (r ≈ 0.3) but depends heavily on social intelligence and practical judgment above cognitive thresholds.",
      "Entrepreneurship draws from a wider IQ range than academic science — many successful founders have average to above-average IQs.",
      "The most successful individuals in both fields often combine high IQ with strong social skills — a combination rarer than either alone.",
    ],
    faqItems: [
      {
        question: "Do scientists have higher IQs than businesspeople?",
        answer: "Yes, substantially. Research scientists average approximately 130 IQ, while business executives average approximately 115 — a 15-point gap. Scientific careers select almost purely for abstract reasoning ability; business careers reward a wider portfolio of skills where IQ is one factor among many.",
      },
      {
        question: "Why are some low-IQ people successful in business?",
        answer: "Business success depends on social intelligence, sales ability, risk tolerance, resilience, opportunity recognition, and network — none of which are strongly measured by IQ tests. Someone with an IQ of 105 who excels at reading people, building relationships, and managing risk can outperform a 130-IQ peer who lacks those skills.",
      },
      {
        question: "Are scientists smarter than billionaires?",
        answer: "On average IQ tests, yes — research scientists average higher than business leaders. But 'smarter' is value-laden. Billionaires demonstrate extraordinary real-world problem-solving, risk judgment, and social influence. These require a different cognitive profile than theoretical science, not necessarily a lesser one.",
      },
      {
        question: "What cognitive skills matter most in business?",
        answer: "Research points to social intelligence (reading people, building trust), executive function (planning, self-regulation), cognitive flexibility (adapting strategy under uncertainty), and practical intelligence (applying knowledge in real-world contexts) as the most predictive cognitive factors for business success above the basic IQ threshold of ~110.",
      },
    ],
    relatedSlugs: ["doctor-vs-engineer", "lawyer-vs-doctor", "programmer-vs-accountant"],
  },
  {
    slug: "programmer-vs-accountant",
    title: "Programmer vs Accountant IQ",
    metaTitle: "Programmer vs Accountant IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Compare average IQ scores for programmers vs accountants. See cognitive profiles, occupational IQ data, and what drives differences between software developers and accountants.",
    sideA: {
      label: "Programmers",
      avgIQ: 122,
      range: "117–127",
      notes: "Software developers and computer scientists consistently score in the top 10% of IQ distributions across occupational studies. Programming demands abstract algorithmic thinking, spatial reasoning, working memory, and pattern recognition — all highly g-loaded cognitive tasks.",
    },
    sideB: {
      label: "Accountants",
      avgIQ: 112,
      range: "108–116",
      notes: "Accountants average in the 108–116 range — solidly above the general population average. Accounting demands numerical reasoning, attention to detail, and rule application rather than the open-ended abstract problem-solving that drives programming's higher IQ average.",
    },
    verdict: "Programmers score approximately 10 IQ points higher than accountants on average — a meaningful but not enormous gap. Both are professional fields that require above-average cognitive ability, but programming's open-ended problem formulation and algorithmic abstraction demands push the average higher. Accounting rewards numerical accuracy, attention to regulatory detail, and procedural consistency — skills that require above-average but not exceptional general intelligence. The most complex accounting roles (forensic accounting, tax law at the intersection of finance and legal reasoning) narrow this gap substantially.",
    overview: "Both software development and accounting are respectable professional fields with well-above-average IQ distributions. Programming consistently ranks in the top 10% of occupational IQ studies, reflecting its demanding algorithmic and abstract reasoning requirements. Accounting ranks in the top 20–25%, reflecting strong but less extreme cognitive prerequisites. The gap has widened somewhat with the rise of highly complex software systems and the bifurcation of accounting between routine and analytical roles.",
    keyFindings: [
      "Programmers average approximately 122 IQ; accountants average approximately 112 — a gap of roughly 10 points.",
      "Programming's abstract algorithmic demands, open-ended problem formulation, and system architecture complexity drive its higher IQ average.",
      "Accounting's demands — numerical accuracy, regulatory knowledge, procedural consistency — require above-average but less extreme cognitive ability.",
      "Machine learning engineers and cryptographers within programming score at the upper end of the programmer range.",
      "Forensic accountants and tax attorneys at the intersection of accounting and law score considerably higher than average accountants.",
    ],
    faqItems: [
      {
        question: "Are programmers smarter than accountants?",
        answer: "On average IQ tests, yes — programmers score approximately 10 points higher. This reflects programming's harder abstract reasoning demands. However, both fields require well-above-average intelligence, and the most complex accounting specialties narrow the gap considerably.",
      },
      {
        question: "What type of intelligence does programming require?",
        answer: "Programming demands fluid intelligence (novel problem-solving), working memory (holding complex system state in mind), spatial reasoning (visualizing data structures and algorithm flow), and pattern recognition. These are among the most g-loaded cognitive tasks in any professional context.",
      },
      {
        question: "Do accountants need to be smart?",
        answer: "Yes. CPA exam passage rates hover around 50% for each section — passing all four sections is a meaningful cognitive achievement. Accountants scoring in the top 20–25% of the population are the norm, not the exception. Complex specialties like forensic accounting and tax require elite analytical reasoning.",
      },
      {
        question: "Does IQ predict programming performance?",
        answer: "Yes, more than most professions. Coding ability correlates approximately 0.35–0.50 with general intelligence in studies of student programmers. The correlation is strongest for algorithmic problem-solving and weakest for routine code maintenance tasks that primarily require attention and memory rather than novel reasoning.",
      },
    ],
    relatedSlugs: ["doctor-vs-engineer", "engineer-vs-artist", "scientist-vs-businessman"],
  },

  // ── Education ──────────────────────────────────────────────────────────────
  {
    slug: "college-vs-no-college",
    title: "College Degree vs No Degree IQ",
    metaTitle: "College Degree vs No Degree IQ: What the Research Shows | MyIQScores",
    metaDescription: "Do people with college degrees have higher IQs? Compare average IQ by education level, explore selection effects vs causal effects, and see what research reveals.",
    sideA: {
      label: "College Graduates",
      avgIQ: 112,
      range: "108–116",
      notes: "College graduates average approximately 112 IQ in large population studies. This reflects both selection (higher-IQ individuals are more likely to attend college) and causal effects (college education builds crystallized intelligence measurably). The gap exists across multiple countries and measurement approaches.",
    },
    sideB: {
      label: "No College Degree",
      avgIQ: 97,
      range: "93–101",
      notes: "Individuals without college degrees average approximately 97 IQ in US population studies — very close to the overall population mean of 100. This group includes highly skilled tradespeople, entrepreneurs, and self-taught professionals alongside those who struggled academically.",
    },
    verdict: "College graduates average approximately 15 IQ points higher than those without degrees, but this gap is primarily a selection effect rather than a college-caused intelligence boost. Higher-IQ individuals are more likely to attend college because they score better on standardized tests, navigate admissions processes more easily, and have greater academic motivation. College education does build crystallized intelligence (vocabulary, general knowledge, analytical writing), likely contributing 3–5 points of genuine causal effect. The remaining gap reflects the pre-existing cognitive differences that made college attendance more likely in the first place.",
    overview: "The relationship between college education and IQ is one of the most studied in social science. Large population datasets — including the General Social Survey, NLSY, and military aptitude databases — consistently show that college graduates score 12–18 IQ points above those without degrees. Disentangling selection from causation is challenging. Natural experiments (like compulsory schooling law changes) suggest that each additional year of formal education causes approximately a 2-point IQ gain — modest but real. The bulk of the education–IQ gap, however, reflects the pre-existing cognitive advantages that lead higher-IQ individuals to pursue college in the first place.",
    keyFindings: [
      "College graduates average approximately 112 IQ; those without college degrees average approximately 97 — a gap of about 15 points.",
      "The majority of the education–IQ gap is a selection effect: higher-IQ individuals are more likely to attend and complete college.",
      "Each additional year of formal schooling is causally associated with approximately 2 IQ points of gain in natural experiment studies.",
      "College builds crystallized intelligence (vocabulary, general knowledge, analytical reasoning) even when holding initial IQ constant.",
      "Many non-college-educated individuals in skilled trades and entrepreneurship have above-average IQs and demonstrate high practical intelligence.",
    ],
    faqItems: [
      {
        question: "Does going to college increase your IQ?",
        answer: "Modestly. Each additional year of formal education is associated with approximately a 2-point IQ gain in natural experiment studies. College likely contributes 3–5 genuine IQ points through building vocabulary, analytical reasoning, and general knowledge. Most of the college-graduate IQ advantage, however, reflects selection — higher-IQ people are more likely to attend college.",
      },
      {
        question: "Can people without college degrees have high IQs?",
        answer: "Absolutely. Many highly intelligent people choose not to attend college, leave before completing a degree, or attend and drop out. Bill Gates and Steve Jobs are famous examples. The college–IQ correlation exists at the population level but says nothing about any individual.",
      },
      {
        question: "What IQ is needed to complete a college degree?",
        answer: "Research suggests a practical floor of approximately 105–110 IQ for completing a 4-year college degree. Graduation rates decline steeply below this range. However, many colleges — particularly community colleges and open-enrollment institutions — serve students across a much wider IQ range.",
      },
      {
        question: "Is a college degree worth it if you have a high IQ?",
        answer: "The ROI depends heavily on field, institution, and individual circumstances. For high-IQ individuals pursuing medicine, law, engineering, or research, college and advanced degrees are essential. For entrepreneurship, skilled trades, and tech, self-teaching and portfolio-based credentialing are increasingly competitive alternatives.",
      },
    ],
    relatedSlugs: ["phd-vs-masters", "stem-vs-humanities", "private-school-vs-public"],
  },
  {
    slug: "phd-vs-masters",
    title: "PhD vs Master's IQ",
    metaTitle: "PhD vs Master's Degree IQ: Average Scores Compared | MyIQScores",
    metaDescription: "Do PhD holders have higher IQs than Master's degree graduates? Compare average IQ by graduate degree level, explore selection effects, and see what research shows.",
    sideA: {
      label: "PhD Holders",
      avgIQ: 128,
      range: "123–133",
      notes: "Doctoral degree holders average in the 125–133 range across occupational and educational IQ studies. PhD programs, especially in STEM, mathematics, and philosophy, select aggressively for abstract reasoning and create additional crystallized intelligence through years of independent research.",
    },
    sideB: {
      label: "Master's Graduates",
      avgIQ: 119,
      range: "115–123",
      notes: "Master's degree holders average approximately 119 IQ — solidly in the top 10% of the population. Master's programs require strong cognitive ability but typically select from a broader range than doctoral programs, particularly in professional fields like business (MBA) and education.",
    },
    verdict: "PhD holders score approximately 9 IQ points higher than Master's graduates on average — a meaningful difference reflecting the more extreme cognitive selection of doctoral programs. PhD programs, especially in research-heavy fields, effectively function as extended cognitive filtration processes: comprehensive exams, dissertation research, and peer review weed out candidates who cannot sustain original abstract thinking at the highest levels. Master's programs — particularly professional degrees like MBAs — select from a somewhat wider cognitive range while still drawing from the upper quintile of the population.",
    overview: "The PhD–Master's IQ gap reflects one of the clearest education-level cognitive gradients in the research literature. As graduate education level increases, average measured IQ rises substantially, driven more by selection than by the education itself. Research-track PhD programs in mathematics, physics, and philosophy draw from the top 1–3% of the cognitive distribution. Professional master's programs (MBA, MPH, MEd) draw from a wider range, pulling the master's average toward a somewhat lower mean. Both groups are well above the college graduate average of 112.",
    keyFindings: [
      "PhD holders average approximately 128 IQ; Master's graduates average approximately 119 — a gap of roughly 9 points.",
      "PhD programs in mathematics, theoretical physics, and philosophy draw from the top 1–2% of the IQ distribution.",
      "Professional master's degrees (MBA, MEd) draw from a broader cognitive range than research doctorates, pulling the master's average lower.",
      "The PhD–Master's gap reflects primarily selection rather than education causation — the process filters for pre-existing ability.",
      "Within-PhD-field variation is large: mathematics PhDs average significantly higher than education doctorates.",
    ],
    faqItems: [
      {
        question: "Do people with PhDs have higher IQs than those with Master's degrees?",
        answer: "Yes, on average — approximately 9 points higher. PhD programs, especially in research-intensive fields, select extremely aggressively for abstract reasoning ability. Most candidates who begin but do not complete PhDs score between the master's and doctorate averages.",
      },
      {
        question: "Does getting a PhD make you smarter?",
        answer: "Somewhat. Independent research, comprehensive exams, and dissertation writing build analytical and writing skills that translate to higher crystallized intelligence scores. However, most of the IQ gap between PhD and Master's holders reflects pre-existing differences that made PhD completion more likely, not gains from the doctoral education itself.",
      },
      {
        question: "What is the average IQ in PhD programs?",
        answer: "Approximately 125–130 overall, with substantial variation by field. Theoretical physics and mathematics PhD students average around 130–135; education and social science doctorates average somewhat lower, around 120–125. All fall well above the college-educated average of 112.",
      },
      {
        question: "Is a PhD worth it if you're highly intelligent?",
        answer: "Depends entirely on goals. For academic research, science, and certain elite professional roles, a PhD is often essential. For business, entrepreneurship, technology, and many high-earning careers, a PhD offers diminishing returns relative to the 5–7 year opportunity cost. High intelligence alone does not make a PhD advisable.",
      },
    ],
    relatedSlugs: ["college-vs-no-college", "stem-vs-humanities", "scientist-vs-businessman"],
  },
  {
    slug: "stem-vs-humanities",
    title: "STEM vs Humanities Students IQ",
    metaTitle: "STEM vs Humanities Students IQ: Who Scores Higher? | MyIQScores",
    metaDescription: "Do STEM students have higher IQs than humanities students? Compare cognitive profiles, GRE data, research findings, and what the science says about intelligence across academic disciplines.",
    sideA: {
      label: "STEM Students",
      avgIQ: 118,
      range: "114–122",
      notes: "STEM students — particularly in mathematics, physics, and computer science — average in the 114–122 range. Heavy quantitative demands select for strong fluid intelligence and mathematical reasoning. Math and physics students consistently rank among the highest-scoring academic disciplines.",
    },
    sideB: {
      label: "Humanities Students",
      avgIQ: 112,
      range: "108–116",
      notes: "Humanities students average approximately 112 — well above the general population but 6 points below STEM peers on average. Philosophy and linguistics students tend to score highest within humanities, approaching STEM averages. Literature and history students average somewhat lower.",
    },
    verdict: "STEM students average approximately 6 IQ points higher than humanities students — a real but modest gap. The difference is largest when comparing mathematics and physics students against literature and education students, and smallest when comparing computer science against philosophy and linguistics. Both groups draw from the top 25–30% of the general IQ distribution. Importantly, STEM students show stronger quantitative and spatial reasoning while humanities students often show comparable or stronger verbal reasoning — the aggregate IQ gap partly reflects IQ tests' heavier quantitative loading.",
    overview: "GRE score data provides the largest and most systematic comparison of cognitive ability across academic disciplines. Physics, mathematics, and philosophy students consistently lead all fields on the quantitative and analytical GRE. Humanities fields show more within-discipline variation — philosophy scores near STEM levels while education and social work score considerably lower. The STEM–humanities IQ gap exists primarily on quantitative subtests; on verbal reasoning, the gap narrows substantially and sometimes reverses for the most verbal humanities disciplines.",
    keyFindings: [
      "STEM students average approximately 118 IQ; humanities students average approximately 112 — a gap of about 6 points.",
      "Mathematics, physics, and computer science students score highest of all academic disciplines on both IQ tests and GRE scores.",
      "Philosophy students score comparably to engineering students on analytical reasoning, narrowing the STEM–humanities gap significantly.",
      "Humanities students average higher on verbal IQ subtests than the aggregate STEM average — the gap is primarily quantitative.",
      "Education and social work students score at the low end of the academic distribution, pulling the humanities average down.",
    ],
    faqItems: [
      {
        question: "Are STEM students smarter than humanities students?",
        answer: "On average IQ tests, STEM students score about 6 points higher. This gap is primarily driven by quantitative reasoning differences — STEM fields select heavily for mathematical ability. On verbal reasoning, the gap between humanities and STEM students narrows substantially, and philosophy students match or exceed most STEM disciplines.",
      },
      {
        question: "Which academic major has the highest average IQ?",
        answer: "Physics and mathematics students consistently rank highest in GRE and IQ studies, followed closely by philosophy, computer science, and economics. These fields select strongly for abstract and analytical reasoning — the core of general intelligence.",
      },
      {
        question: "Do humanities degrees make you less intelligent?",
        answer: "No. Humanities degrees build strong verbal reasoning, critical analysis, historical understanding, and communication skills — all components of crystallized intelligence measured by IQ tests. Humanities students are cognitively accomplished; they simply excel more in verbal than quantitative domains.",
      },
      {
        question: "Is it true that philosophy students score as high as science students?",
        answer: "Largely yes. Philosophy students score among the highest of any academic major on the GRE analytical writing section and score comparably to physical science students on verbal and analytical measures. The stereotype of philosophy as cognitively less demanding than science is not supported by admissions data.",
      },
    ],
    relatedSlugs: ["college-vs-no-college", "phd-vs-masters", "engineer-vs-artist"],
  },
  {
    slug: "private-school-vs-public",
    title: "Private School vs Public School IQ",
    metaTitle: "Private School vs Public School IQ: What the Research Shows | MyIQScores",
    metaDescription: "Do private school students have higher IQs than public school students? Explore research on school type, socioeconomic factors, cognitive outcomes, and selection effects.",
    sideA: {
      label: "Private School Students",
      avgIQ: 112,
      range: "108–116",
      notes: "Private school students average approximately 112 IQ in studies that control for school type. The advantage over public school peers exists but is substantially reduced when controlling for parental income and education — indicating that selection into private schools, not the schools themselves, drives most of the gap.",
    },
    sideB: {
      label: "Public School Students",
      avgIQ: 101,
      range: "97–105",
      notes: "Public school students average close to the population mean of 100, reflecting the full demographic diversity of the general population. Public school IQ ranges widely by school quality, location, and student socioeconomic background — internal variation is much larger than the private–public gap.",
    },
    verdict: "Private school students score approximately 10–11 IQ points higher on average than public school students, but research consistently shows this gap is primarily a selection and socioeconomic effect rather than a private-schooling cause. Families that send children to private schools are wealthier, more educated, and provide richer home learning environments — all factors that independently raise measured IQ. Studies using lottery-based natural experiments find that attending private vs public school adds only 1–3 genuine IQ points when selection is properly controlled.",
    overview: "The private school–public school IQ debate is a microcosm of the larger nature-nurture-socioeconomics triangle in education research. Raw comparisons show large private-school advantages, but controlling for parental income and education shrinks the gap substantially. The most methodologically rigorous studies — using school lottery systems that randomly assign students to private vs public schools — find small causal effects of private schooling on cognitive outcomes, suggesting that who attends private schools matters far more than what happens there.",
    keyFindings: [
      "Private school students average approximately 112 IQ; public school students average approximately 101 — an 11-point raw gap.",
      "After controlling for parental income and education, the private–public IQ gap shrinks to approximately 3–5 points in most studies.",
      "Lottery-based natural experiments find only 1–3 IQ point causal effects of private schooling, suggesting selection dominates the raw gap.",
      "Within-public-school variation is enormous — top public schools in wealthy suburbs routinely outperform average private schools.",
      "Parental involvement, home reading environment, and nutrition matter more for cognitive development than school type in controlled studies.",
    ],
    faqItems: [
      {
        question: "Do private school students have higher IQs than public school students?",
        answer: "On average, yes — by approximately 10–11 IQ points in raw comparisons. However, the vast majority of this gap reflects who attends private schools (wealthier, more educated families) rather than what private schools do. Lottery studies that control for selection find only 1–3 point causal effects.",
      },
      {
        question: "Does private school make kids smarter?",
        answer: "Marginally. The most rigorous studies find private schooling adds approximately 1–3 IQ points causally — a real but small effect. The larger benefits of private schools may be social (networks, signaling) rather than cognitive.",
      },
      {
        question: "Are top public schools as good as private schools for cognitive development?",
        answer: "Often yes. High-performing public schools in affluent districts frequently outperform average private schools on cognitive outcome measures. The quality of any specific school — public or private — varies enormously, making the private–public distinction a weak predictor of educational quality.",
      },
      {
        question: "What matters most for a child's IQ — school type or home environment?",
        answer: "Home environment dominates in most research. Parental education, reading habits, nutritional quality, stress levels, and intellectual engagement at home account for far more IQ variance than school type. A stimulating home environment with mediocre public schooling typically outperforms a poor home environment with elite private schooling.",
      },
    ],
    relatedSlugs: ["college-vs-no-college", "stem-vs-humanities", "phd-vs-masters"],
  },

  // ── Lifestyle ──────────────────────────────────────────────────────────────
  {
    slug: "vegetarian-vs-meat-eater",
    title: "Vegetarian vs Meat Eater IQ",
    metaTitle: "Vegetarian vs Meat Eater IQ: Who Scores Higher? | MyIQScores",
    metaDescription: "Do vegetarians have higher IQs than meat eaters? Explore the research linking diet, intelligence, and lifestyle choices, and what large cohort studies actually show.",
    sideA: {
      label: "Vegetarians",
      avgIQ: 105,
      range: "102–108",
      notes: "A large UK cohort study (British Cohort Study, n=8,170) found that individuals who became vegetarian by age 30 had IQ scores approximately 5 points higher at age 10 than those who remained meat-eaters. Vegetarians also showed higher educational attainment and social class in this dataset.",
    },
    sideB: {
      label: "Meat Eaters",
      avgIQ: 100,
      range: "97–103",
      notes: "The general meat-eating population averages close to the population mean of 100. Omnivore diets that include fish and lean meats provide omega-3 fatty acids, B12, and other brain-essential nutrients — potentially offsetting any diet-related cognitive disadvantage compared to some vegetarian diets.",
    },
    verdict: "A notable 2007 UK cohort study found that childhood IQ predicted later vegetarianism — individuals with higher IQs at age 10 were more likely to adopt vegetarian diets by age 30. The causal direction appears to be IQ → diet choice rather than diet → IQ: smarter people tend to adopt dietary patterns they believe are healthier or more ethical. After controlling for socioeconomic status and education, the IQ difference between vegetarians and meat-eaters shrinks substantially. Diet quality matters far more for cognitive health than the simple vegetarian/omnivore dichotomy.",
    overview: "The vegetarian–IQ connection is one of the most frequently misrepresented findings in popular science. The 2007 British Cohort Study found higher childhood IQ scores among future vegetarians — but the study's authors were clear that this represented IQ predicting diet choice, not diet affecting intelligence. Vegetarians in the UK study were also more likely to be female, of higher social class, and better educated — all factors independently associated with higher IQ. Meanwhile, research on omega-3 fatty acids (DHA and EPA, found primarily in fish and animal products) does show genuine cognitive benefits, complicating the narrative that plant-based diets are cognitively superior.",
    keyFindings: [
      "The UK British Cohort Study found vegetarians scored approximately 5 IQ points higher at age 10 than those who remained meat-eaters at age 30.",
      "The causal direction is IQ → diet choice, not diet → IQ: higher childhood intelligence predicted later vegetarianism.",
      "After controlling for social class, education, and gender, the vegetarian IQ advantage shrinks to approximately 2–3 points.",
      "Omega-3 fatty acids (DHA/EPA), primarily from fish and animal sources, have genuine brain-supportive effects supported by multiple RCTs.",
      "Diet quality within any dietary pattern — not the vegetarian/omnivore label itself — is the primary nutritional predictor of cognitive health.",
    ],
    faqItems: [
      {
        question: "Do vegetarians have higher IQs than meat-eaters?",
        answer: "On average, slightly — approximately 5 points in the largest UK study. However, the relationship runs in the opposite direction from what many assume: higher childhood IQ predicts later adoption of vegetarianism, not vegetarian diets causing intelligence gains. Socioeconomic confounds explain much of the remaining gap.",
      },
      {
        question: "Does eating meat make you less intelligent?",
        answer: "No evidence supports this claim. Red meat provides B12, zinc, and iron — all brain-essential nutrients. Fish provides DHA and EPA omega-3s that have documented cognitive benefits. What likely matters is overall diet quality, not meat consumption per se.",
      },
      {
        question: "Can a vegetarian diet harm cognitive development?",
        answer: "Poorly planned vegetarian diets — particularly those lacking B12, omega-3 DHA, zinc, and iron — can impair cognitive development, especially in children and pregnant women. B12 deficiency causes measurable cognitive decline. Well-planned vegetarian diets that address these nutrients through supplementation or fortified foods are nutritionally adequate.",
      },
      {
        question: "What diet is best for brain health?",
        answer: "The MIND diet — a hybrid of Mediterranean and DASH patterns emphasizing vegetables, berries, whole grains, fish, poultry, olive oil, and nuts — has the strongest evidence for cognitive protection and reduced dementia risk. Neither pure vegetarianism nor omnivory per se predicts better brain health outcomes when overall diet quality is controlled.",
      },
    ],
    relatedSlugs: ["meditation-vs-no-meditation", "morning-exercise-vs-sedentary", "readers-vs-tv-watchers"],
  },
  {
    slug: "gamers-vs-non-gamers",
    title: "Gamers vs Non-Gamers IQ",
    metaTitle: "Gamers vs Non-Gamers IQ: Do Gamers Score Higher? | MyIQScores",
    metaDescription: "Are gamers smarter than non-gamers on IQ tests? Explore research on video games, cognitive ability, specific skill improvements, and what the science actually shows.",
    sideA: {
      label: "Gamers",
      avgIQ: 103,
      range: "100–107",
      notes: "Multiple studies find gamers score modestly higher on IQ tests than non-gamers, particularly on spatial reasoning and visual attention subtests. Action game players show the strongest advantages on reaction time and 3D spatial rotation tasks. The overall IQ advantage is modest but consistently replicated.",
    },
    sideB: {
      label: "Non-Gamers",
      avgIQ: 99,
      range: "96–102",
      notes: "Non-gamers average close to the population mean. They may spend time on activities — reading, sports, social activities — that build different types of cognitive skills. Absence of gaming does not indicate lower intelligence; many highly intelligent people simply prefer other activities.",
    },
    verdict: "Gamers score modestly higher on IQ tests than non-gamers — approximately 3–5 points on average — but the relationship is primarily one of selection (higher-IQ individuals may be more attracted to cognitively demanding games) and narrow skill transfer (gaming improves visual attention and spatial rotation, which are measured by IQ tests). There is no evidence that simply playing games broadly raises general intelligence. Game genre matters enormously: strategy and RPG games provide more cognitive benefit than simple mobile games.",
    overview: "The relationship between gaming and intelligence is complex and much-studied. Research consistently finds that gamers score higher than non-gamers on visual-spatial tasks, reaction time, and divided attention. Whether this reflects gaming causing IQ improvements or smarter people preferring gaming is debated. The most methodologically rigorous studies — randomized controlled trials assigning people to play specific games — find task-specific improvements that do not generalize to full-scale IQ. Self-selection appears to drive most of the observed gamer IQ advantage.",
    keyFindings: [
      "Gamers average approximately 3–5 IQ points higher than non-gamers in observational studies.",
      "The advantage is largest on visual-spatial and visual attention subtests — skills directly trained by action games.",
      "RCT studies find that gaming causes narrow skill improvements that don't transfer broadly to full-scale IQ gains.",
      "Genre matters: strategy games (StarCraft, chess) provide greater cognitive benefit than simple mobile or casual games.",
      "Self-selection is likely the primary explanation: higher-IQ individuals are more attracted to cognitively complex games.",
    ],
    faqItems: [
      {
        question: "Do gamers have higher IQs than non-gamers?",
        answer: "On average, modestly — approximately 3–5 points in observational studies. The advantage is strongest on visual-spatial tasks. However, most of this gap reflects self-selection (higher-IQ people gravitate toward cognitively complex games) rather than gaming causing IQ improvements.",
      },
      {
        question: "Do video games increase IQ?",
        answer: "Gaming improves specific skills — visual attention, spatial rotation, reaction time — that are measured by some IQ subtests. But RCT evidence shows these improvements are narrow and don't transfer broadly to full-scale IQ increases. General intelligence is not reliably raised by video games.",
      },
      {
        question: "Which games are best for cognitive improvement?",
        answer: "Strategy games (chess, real-time strategy games like StarCraft), puzzle games (Portal, Tetris), and cognitively demanding RPGs provide more cognitive benefit than simple reflex games or mobile casual games. Games that require planning, strategy, and adaptation over many hours show the strongest associations with cognitive ability.",
      },
      {
        question: "Are professional esports players highly intelligent?",
        answer: "Studies of professional esports players find very high scores on spatial reasoning, attention, and processing speed — cognitive domains directly relevant to competitive gaming. Whether this reflects gaming-caused development or the extreme selection at professional levels (the best of millions of players) is unclear, though both likely contribute.",
      },
    ],
    relatedSlugs: ["readers-vs-tv-watchers", "introverts-vs-extroverts", "athletes-vs-non-athletes"],
  },
  {
    slug: "readers-vs-tv-watchers",
    title: "Readers vs TV Watchers IQ",
    metaTitle: "Readers vs TV Watchers IQ: Who Scores Higher? | MyIQScores",
    metaDescription: "Do people who read books have higher IQs than TV watchers? Explore research on reading, television, cognitive outcomes, and what the data actually shows about these two activities.",
    sideA: {
      label: "Regular Readers",
      avgIQ: 107,
      range: "103–111",
      notes: "Regular book readers consistently score higher on verbal IQ subtests and general knowledge measures. Studies find that childhood reading frequency is one of the strongest predictors of vocabulary size and verbal reasoning in adulthood. Reading is among the most cognitively enriching leisure activities studied.",
    },
    sideB: {
      label: "TV Watchers",
      avgIQ: 97,
      range: "93–101",
      notes: "Heavy TV watching correlates with lower IQ scores in most studies, particularly on verbal and reading comprehension subtests. The relationship is bidirectional: lower-IQ individuals may prefer TV, and heavy TV watching may crowd out reading and other cognitively enriching activities.",
    },
    verdict: "Regular readers score approximately 10 IQ points higher than heavy TV watchers in most population studies — one of the larger lifestyle-IQ associations in the research literature. Both selection (higher-IQ people prefer books) and causation (reading builds vocabulary and analytical thinking) contribute to the gap. Television is not uniformly harmful — educational programming like documentaries can provide genuine cognitive stimulation — but passive, entertainment-focused TV watching crowds out more cognitively demanding activities and is associated with lower reading frequency and shorter attention spans.",
    overview: "The reading–television–IQ triangle is among the most studied relationships in developmental and educational psychology. Large longitudinal studies find strong reading–IQ associations that persist from childhood through adulthood. Reading is particularly effective at building crystallized intelligence — vocabulary, general knowledge, verbal reasoning — components that standard IQ tests measure heavily. Television viewing, particularly entertainment programming, is associated with passive processing and reduced reading time. However, the causal structure is complex: IQ shapes leisure preferences, and leisure preferences shape cognitive development in a reinforcing cycle.",
    keyFindings: [
      "Regular readers average approximately 107 IQ; heavy TV watchers average approximately 97 — a gap of about 10 points.",
      "The reading–IQ correlation is strongest for verbal and reading comprehension subtests, with smaller effects on fluid reasoning.",
      "Childhood reading frequency is one of the best predictors of adult vocabulary size and verbal IQ, independent of parental education.",
      "Educational TV programming (documentaries, science shows) is associated with smaller IQ differences than pure entertainment viewing.",
      "The relationship is bidirectional: higher-IQ individuals prefer reading, and reading builds the crystallized intelligence measured by IQ tests.",
    ],
    faqItems: [
      {
        question: "Do people who read more have higher IQs?",
        answer: "Yes, on average — approximately 10 IQ points higher than heavy TV watchers. Reading builds vocabulary, general knowledge, and analytical thinking skills directly measured by IQ tests. Both selection (smarter people like books) and causation (books make you smarter) contribute to the gap.",
      },
      {
        question: "Does watching TV make you less intelligent?",
        answer: "Heavy entertainment TV watching is associated with lower cognitive outcomes, likely because it displaces more enriching activities. The content matters: documentary and educational programming is far less harmful than pure entertainment. The mechanism is primarily one of opportunity cost — time spent watching TV is time not spent reading or engaging in other cognitively stimulating activities.",
      },
      {
        question: "How much reading is needed to see cognitive benefits?",
        answer: "Studies suggest 30+ minutes of daily reading produces measurable cognitive benefits over time. The key is consistency and difficulty level — reading material that challenges your current comprehension builds cognitive capacity more effectively than easy, familiar material.",
      },
      {
        question: "Is listening to audiobooks as good as reading for IQ?",
        answer: "Audiobooks provide many of the same knowledge and vocabulary benefits as reading, but research suggests print reading may confer slightly stronger benefits for reading comprehension and analytical reasoning. Audiobooks are an excellent complement to reading, particularly for multitasking contexts, but likely don't fully replicate all cognitive benefits of print reading.",
      },
    ],
    relatedSlugs: ["gamers-vs-non-gamers", "introverts-vs-extroverts", "meditation-vs-no-meditation"],
  },
  {
    slug: "athletes-vs-non-athletes",
    title: "Athletes vs Non-Athletes IQ",
    metaTitle: "Athletes vs Non-Athletes IQ: Does Exercise Boost Intelligence? | MyIQScores",
    metaDescription: "Do athletes have higher IQs than non-athletes? Explore research on physical fitness, exercise, brain health, and whether athletic training improves cognitive performance.",
    sideA: {
      label: "Athletes",
      avgIQ: 104,
      range: "101–108",
      notes: "Athletes consistently score modestly higher on cognitive measures than non-athletes — particularly on executive function, processing speed, and spatial attention. Team sport athletes show stronger social cognition advantages; individual sport athletes show stronger sustained attention benefits.",
    },
    sideB: {
      label: "Non-Athletes",
      avgIQ: 99,
      range: "96–102",
      notes: "Non-athletes average close to the population mean. Sedentary individuals show higher rates of cognitive decline with age, and low cardiovascular fitness correlates with lower executive function scores across multiple age groups. The cognitive gap between fit and unfit individuals is particularly pronounced at older ages.",
    },
    verdict: "Athletes score approximately 5 IQ points higher than non-athletes on average, with the relationship driven by both selection (athletic success often reflects the executive function and self-regulation that underpin cognitive performance) and causation (regular aerobic exercise demonstrably improves brain health). Exercise increases BDNF (brain-derived neurotrophic factor), promotes hippocampal neurogenesis, improves cerebral blood flow, and reduces inflammation — all mechanisms with established links to cognitive function. The cognitive benefits of regular athletic training are among the most robustly supported lifestyle–intelligence connections in neuroscience.",
    overview: "The relationship between athletic activity and cognitive performance is increasingly well-established in neuroscience. Aerobic exercise in particular — the kind sustained by most athletic training — promotes neurogenesis in the hippocampus, increases BDNF production, improves cerebrovascular health, and enhances executive function. Multiple RCTs show that aerobic exercise programs cause measurable cognitive improvements in both children and adults. The athlete–non-athlete IQ gap reflects both these genuine causal effects and selection: sports require planning, self-regulation, and strategic thinking — cognitive capacities that overlap substantially with general intelligence.",
    keyFindings: [
      "Athletes average approximately 4–5 IQ points higher than non-athletes on cognitive assessments.",
      "Aerobic exercise causes measurable hippocampal growth and BDNF increases — mechanisms directly tied to cognitive function.",
      "Children who participate in regular physical activity show 3–5% better performance on cognitive tests in RCT studies.",
      "Executive function (planning, self-regulation, cognitive flexibility) shows the strongest exercise-related improvements.",
      "Elite team sport athletes show particularly strong advantages on social cognition and adaptive decision-making tasks.",
    ],
    faqItems: [
      {
        question: "Do athletes have higher IQs than non-athletes?",
        answer: "On average, modestly — approximately 4–5 IQ points. The gap reflects both genuine exercise-related cognitive benefits (BDNF, hippocampal growth, improved executive function) and selection effects (athletic success requires self-regulation and strategic thinking that correlate with intelligence).",
      },
      {
        question: "Does exercise make you smarter?",
        answer: "Yes, with solid RCT evidence. Regular aerobic exercise increases BDNF, promotes hippocampal neurogenesis, improves cerebrovascular health, and enhances executive function. Studies in school-age children find 3–5% improvements in cognitive test scores from exercise programs. The benefits are strongest for executive function and weakest for crystallized intelligence.",
      },
      {
        question: "What type of exercise is best for intelligence?",
        answer: "Aerobic exercise — running, swimming, cycling, team sports — has the most robust evidence for cognitive benefit. Resistance training shows some benefits for executive function, particularly in older adults. High-intensity interval training (HIIT) may provide similar or greater benefits to steady-state cardio in less time. Complexity matters: team sports that require strategic thinking add cognitive benefits beyond pure fitness.",
      },
      {
        question: "Does being physically fit improve IQ scores?",
        answer: "Modestly, yes. Cardiovascular fitness correlates with IQ scores (r ≈ 0.1–0.2), and longitudinal studies show that improving fitness is associated with improved cognitive performance over time. The effect is too small to dramatically change IQ scores but is consistent and meaningful for long-term brain health.",
      },
    ],
    relatedSlugs: ["morning-exercise-vs-sedentary", "meditation-vs-no-meditation", "gamers-vs-non-gamers"],
  },
  {
    slug: "meditation-vs-no-meditation",
    title: "Meditators vs Non-Meditators IQ",
    metaTitle: "Meditators vs Non-Meditators IQ: Does Meditation Boost Intelligence? | MyIQScores",
    metaDescription: "Do people who meditate have higher IQs? Explore research on meditation, mindfulness, cognitive performance, and what neuroscience reveals about mental training and intelligence.",
    sideA: {
      label: "Meditators",
      avgIQ: 105,
      range: "102–109",
      notes: "Experienced meditators consistently outperform non-meditators on attention, working memory, and cognitive flexibility tasks. Long-term meditators show increased cortical thickness in attention-related brain regions. The IQ advantage appears strongest for fluid reasoning tasks that require sustained attention and mental flexibility.",
    },
    sideB: {
      label: "Non-Meditators",
      avgIQ: 100,
      range: "97–103",
      notes: "Non-meditators average at the population norm. Those who have never practiced any form of contemplative or focused attention training tend to show lower performance on sustained attention tasks — a cognitive domain that strongly influences performance on IQ test subtests requiring prolonged concentration.",
    },
    verdict: "Meditators score approximately 5 IQ points higher on average cognitive assessments — a gap that is partially explained by selection (higher-IQ, more introspective individuals are drawn to meditation) and partially by genuine meditation-related cognitive improvements. RCT evidence shows that 8-week mindfulness programs improve attention, working memory, and cognitive flexibility — all IQ-relevant capacities. Long-term meditators show neuroplasticity changes including greater prefrontal cortical thickness. However, meditation is unlikely to produce large IQ gains quickly; the benefits accumulate over months and years of consistent practice.",
    overview: "Meditation research has expanded dramatically in recent decades, with neuroscience providing mechanistic evidence for cognitive benefits. Mindfulness-based stress reduction (MBSR), transcendental meditation, and focused attention practices all show measurable benefits for attention control, working memory, and executive function in RCTs. These are precisely the cognitive capacities that IQ tests measure. Long-term meditators — monks and experienced practitioners — show substantial brain differences in attention-related cortical areas. But whether meditation causes IQ-level gains in typical practitioners remains uncertain; most RCT effects are modest and focused on specific attention domains.",
    keyFindings: [
      "Experienced meditators score approximately 5 IQ points higher on cognitive assessments — strongest for attention and fluid reasoning tasks.",
      "RCTs of 8-week MBSR programs find improvements in working memory capacity, attention, and cognitive flexibility.",
      "Long-term meditators show increased cortical thickness in the prefrontal cortex and anterior cingulate — regions associated with executive function.",
      "Meditation's cognitive benefits accumulate with practice; short interventions (< 4 weeks) show smaller, less consistent effects.",
      "Selection effects are substantial: individuals who adopt meditation are often higher-educated, more reflective, and intrinsically more cognitively engaged.",
    ],
    faqItems: [
      {
        question: "Does meditation increase IQ?",
        answer: "Meditation improves specific IQ-relevant capacities — attention, working memory, cognitive flexibility — with RCT support. Long-term practice may produce small but real IQ gains, particularly on fluid reasoning subtests. However, the effects are modest (2–5 points) and accumulate slowly over months or years of consistent practice.",
      },
      {
        question: "How does meditation affect the brain?",
        answer: "Research shows meditation increases cortical thickness in the prefrontal cortex, anterior cingulate, and insula; improves functional connectivity between brain networks; reduces default mode network activity (mind-wandering); and increases gray matter density in hippocampus and frontal regions. These changes correlate with improved cognitive performance.",
      },
      {
        question: "How long must you meditate before seeing cognitive benefits?",
        answer: "Short-term studies find attention improvements after as little as 10–20 minutes of practice over several days. Larger working memory and executive function improvements appear after 4–8 weeks of consistent daily practice. The substantial brain structural changes seen in expert meditators take years of dedicated practice to develop.",
      },
      {
        question: "Which type of meditation is best for cognitive improvement?",
        answer: "Focused attention meditation (concentrating on breath or an object) shows the strongest evidence for attention improvements. Open monitoring meditation (mindful awareness of thoughts) shows benefits for cognitive flexibility. Both types appear beneficial and are often combined in standard MBSR programs, which have the most RCT support.",
      },
    ],
    relatedSlugs: ["morning-exercise-vs-sedentary", "athletes-vs-non-athletes", "night-owl-vs-early-bird"],
  },
  {
    slug: "morning-exercise-vs-sedentary",
    title: "Regular Exercisers vs Sedentary IQ",
    metaTitle: "Regular Exercisers vs Sedentary People IQ: What Research Shows | MyIQScores",
    metaDescription: "Do people who exercise regularly have higher IQs than sedentary people? Explore the neuroscience of exercise, BDNF, cognitive performance research, and practical takeaways.",
    sideA: {
      label: "Regular Exercisers",
      avgIQ: 105,
      range: "102–109",
      notes: "Individuals who engage in regular aerobic exercise (150+ minutes/week) consistently score higher on cognitive assessments, particularly for executive function and processing speed. Exercise increases BDNF, promotes hippocampal neurogenesis, and improves cerebrovascular health — mechanisms with direct links to IQ-relevant cognitive capacities.",
    },
    sideB: {
      label: "Sedentary People",
      avgIQ: 98,
      range: "95–101",
      notes: "Sedentary individuals average closer to the population norm and show accelerated cognitive decline with age relative to active peers. Low cardiovascular fitness is consistently associated with lower executive function scores and smaller hippocampal volume in neuroimaging studies.",
    },
    verdict: "Regular exercisers score approximately 7 IQ points higher than their sedentary peers on average — one of the larger lifestyle-IQ associations in the research literature, with unusually strong causal evidence from RCTs. Aerobic exercise is arguably the single most well-supported lifestyle intervention for brain health, with effects on hippocampal neurogenesis, BDNF expression, cerebrovascular fitness, and executive function all documented across multiple high-quality studies. The benefits are consistent across age groups and appear particularly protective against age-related cognitive decline.",
    overview: "The exercise–cognition relationship has exceptionally strong scientific backing compared to most lifestyle–intelligence associations. The mechanisms are well-characterized: aerobic exercise raises serum BDNF levels (brain-derived neurotrophic factor), which promotes neurogenesis in the hippocampus; improves cerebrovascular health, ensuring adequate blood flow to the brain; reduces neuroinflammation; and enhances mitochondrial function in neurons. RCTs in children show 3–5% improvements in cognitive test scores from exercise programs. RCTs in older adults show reduced cognitive decline rates and measurable hippocampal volume preservation. The dose–response relationship is well-established: more exercise produces more cognitive benefit up to a moderate plateau.",
    keyFindings: [
      "Regular exercisers score approximately 5–7 IQ points higher than sedentary individuals on cognitive assessments.",
      "Aerobic exercise is the most robustly evidence-supported lifestyle intervention for improving and maintaining cognitive function.",
      "Exercise raises BDNF, promoting hippocampal neurogenesis — the brain structure most critical for memory and spatial cognition.",
      "RCTs in school-age children find 3–5% cognitive test score improvements from aerobic exercise programs.",
      "Exercise's cognitive benefits are dose-dependent up to approximately 150–200 minutes of moderate aerobic activity per week.",
    ],
    faqItems: [
      {
        question: "Does regular exercise increase IQ?",
        answer: "Yes, with strong RCT evidence. Regular aerobic exercise raises BDNF, promotes hippocampal neurogenesis, improves executive function, and is associated with 3–7 IQ points higher scores in comparison studies. The effects are most pronounced for executive function and are well-documented across age groups from children to older adults.",
      },
      {
        question: "How much exercise is needed for cognitive benefits?",
        answer: "Evidence suggests 150+ minutes per week of moderate aerobic exercise (or 75 minutes of vigorous exercise) produces meaningful cognitive benefits. The dose–response relationship is real up to approximately 200 minutes/week. More intensive training beyond this shows diminishing cognitive returns, though it continues to provide cardiovascular benefits.",
      },
      {
        question: "Does exercise help more than studying for improving cognitive performance?",
        answer: "Exercise and studying work through different mechanisms and complement each other. Exercise improves the neural infrastructure — blood flow, BDNF, hippocampal health — that makes learning more effective. Studying builds domain knowledge and crystallized intelligence. Exercise before or after learning sessions enhances memory consolidation, suggesting the two should be combined rather than traded off.",
      },
      {
        question: "Is it too late to start exercising for cognitive benefits in older age?",
        answer: "No. RCTs with older adults — including those in their 70s and 80s — consistently show cognitive benefits from starting aerobic exercise programs. Hippocampal volume can increase in previously sedentary older adults after 6–12 months of aerobic exercise. The benefits are smaller than if started earlier in life but are real and clinically meaningful.",
      },
    ],
    relatedSlugs: ["athletes-vs-non-athletes", "meditation-vs-no-meditation", "night-owl-vs-early-bird"],
  },
];

export const compareSlugs = iqCompareData.map((c) => c.slug);

export function getCompareBySlug(slug: string): IQCompareInfo | undefined {
  return iqCompareData.find((c) => c.slug === slug);
}
