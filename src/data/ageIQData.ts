export interface AgeIQInfo {
  ageGroup: string;
  slug: string;
  avgIQRange: string;
  description: string;
  keyFactors: string;
  faqItems: { question: string; answer: string }[];
}

export const ageIQData: AgeIQInfo[] = [
  {
    ageGroup: "Children (Ages 6–12)",
    slug: "children",
    avgIQRange: "90–110",
    description: "IQ testing in children measures developing cognitive abilities relative to same-age peers. Children's IQ scores can be more variable than adult scores because the brain is still rapidly developing. A child's score at age 7 may differ significantly from their score at age 12 as different cognitive abilities mature at different rates. The WISC (Wechsler Intelligence Scale for Children) is the most commonly used test for this age group, assessing verbal comprehension, perceptual reasoning, working memory, and processing speed.",
    keyFactors: "Environmental factors have an outsized impact on children's IQ scores. Nutrition, stimulation, reading exposure, parental engagement, sleep quality, and access to education all significantly influence cognitive development during these critical years. Children from enriched environments consistently score higher, and early interventions like quality preschool programs have been shown to boost IQ by 4–7 points. The Flynn Effect — rising IQ scores over generations — is strongest in children, suggesting environmental improvements disproportionately benefit developing brains.",
    faqItems: [
      { question: "What is a normal IQ for a child?", answer: "A normal IQ for a child is the same as for an adult: 90–110 is considered average. Children's IQ tests are age-normed, meaning a child's score reflects their performance relative to other children of the same age. About 68% of children score between 85 and 115." },
      { question: "Can a child's IQ change over time?", answer: "Yes, significantly. Children's IQ scores can shift by 10–20 points between ages 6 and 18 as different cognitive abilities develop at different rates. Early testing is less predictive of adult IQ than testing in adolescence. Environmental changes like improved nutrition or education can also raise scores." },
      { question: "Should I get my child's IQ tested?", answer: "IQ testing is most useful when there's a specific concern — identifying giftedness for enrichment programs, or diagnosing learning disabilities for support services. Routine IQ testing of all children is not recommended, as scores at young ages are less stable and can create unnecessary labeling." },
    ],
  },
  {
    ageGroup: "Teenagers (Ages 13–17)",
    slug: "teenagers",
    avgIQRange: "90–110",
    description: "The teenage years represent a critical period for cognitive development as the prefrontal cortex — responsible for planning, decision-making, and impulse control — undergoes massive restructuring. IQ scores begin to stabilize during adolescence, with scores at age 15–17 being much more predictive of adult IQ than childhood scores. Teenagers show rapid development in abstract reasoning and fluid intelligence, which typically peaks in the early-to-mid 20s. The WISC is used until age 16, after which the WAIS (adult version) becomes appropriate.",
    keyFactors: "Teenage brains are uniquely sensitive to environmental influences, both positive and negative. Sleep deprivation (extremely common in teens due to early school start times and screen use) can reduce effective cognitive performance by 5–10 IQ points. Substance use, particularly cannabis and alcohol, can impair cognitive development during this critical period. Conversely, challenging academic work, physical exercise, and learning new skills can enhance cognitive development. Social media and digital multitasking may negatively impact sustained attention and deep thinking.",
    faqItems: [
      { question: "What is the average IQ for a teenager?", answer: "The average IQ for a teenager is 100, the same as any age group, since IQ tests are normed by age. About 68% of teenagers score between 85 and 115. Teenage IQ scores are more stable than childhood scores and begin to predict adult cognitive ability more reliably." },
      { question: "Does IQ change during puberty?", answer: "Yes, IQ can shift during adolescence. Research from University College London found that some teenagers' IQ scores changed by up to 20 points over a 4-year period, with corresponding changes visible in brain structure on MRI scans. Both increases and decreases were observed." },
      { question: "How does sleep affect teenage IQ?", answer: "Profoundly. Teenagers need 8–10 hours of sleep but average only 6–7. Research shows sleep-deprived teens perform as if their IQ were 5–10 points lower. Chronic sleep deprivation during adolescence may have lasting effects on cognitive development." },
    ],
  },
  {
    ageGroup: "Young Adults (Ages 18–25)",
    slug: "young-adults",
    avgIQRange: "90–110",
    description: "Young adulthood is when fluid intelligence — the ability to reason with novel information — reaches its peak, typically between ages 20 and 25. This is the age when raw cognitive processing speed and working memory are at their highest. IQ scores become quite stable during this period, and scores obtained in the early 20s are highly predictive of lifelong cognitive ability. The brain's prefrontal cortex finishes developing around age 25, completing the maturation of executive function, impulse control, and long-term planning ability.",
    keyFactors: "This age range offers the last major window for cognitive development before scores largely stabilize. Higher education, learning complex skills, and intellectually demanding work during this period can have lasting positive effects on crystallized intelligence. Conversely, substance abuse, chronic stress, head injuries, and sedentary lifestyles can permanently impair cognitive potential. Physical fitness during young adulthood is strongly correlated with cognitive performance both now and decades later.",
    faqItems: [
      { question: "What is the average IQ for a 20-year-old?", answer: "The average IQ for a 20-year-old is 100, by definition. However, fluid intelligence (raw reasoning speed) is at or near its peak at this age. Young adults typically perform best on timed, novel problem-solving tasks compared to any other age group." },
      { question: "Does IQ peak in your 20s?", answer: "Fluid intelligence (processing speed, working memory, novel reasoning) peaks in the early-to-mid 20s. However, crystallized intelligence (accumulated knowledge and skills) continues growing well into the 60s. Overall IQ as measured by most tests remains relatively stable from the mid-20s onward." },
      { question: "Can college increase your IQ?", answer: "Research suggests each year of education adds approximately 1–3 IQ points. College develops analytical thinking, vocabulary, and problem-solving skills that directly improve performance on IQ tests. The effect is strongest for crystallized intelligence but may also modestly improve fluid intelligence." },
    ],
  },
  {
    ageGroup: "Adults (Ages 26–50)",
    slug: "adults",
    avgIQRange: "90–110",
    description: "During the prime adult years, IQ scores are at their most stable. Fluid intelligence begins a very gradual decline starting in the late 20s, but crystallized intelligence — the accumulation of knowledge, vocabulary, and learned skills — continues to grow, often offsetting any decline in raw processing speed. Most adults in this age range will score within 3–5 points of the same result on repeated IQ tests. This is the period where career expertise deepens and practical wisdom develops, though these forms of intelligence are poorly captured by standard IQ tests.",
    keyFactors: "Lifestyle factors become increasingly important for maintaining cognitive function. Regular exercise, intellectual engagement, social connection, stress management, and quality sleep all help preserve cognitive ability. Conversely, chronic stress, depression, sedentary behavior, poor sleep, and heavy alcohol use can accelerate cognitive decline. Career demands that involve continuous learning and problem-solving help maintain cognitive sharpness, while routine work may allow cognitive skills to atrophy.",
    faqItems: [
      { question: "Does IQ decline after 30?", answer: "Fluid intelligence (processing speed, working memory) begins a very gradual decline in the late 20s to early 30s, but the decline is slow — about 1–2 points per decade. Crystallized intelligence (knowledge, vocabulary) continues increasing through middle age, often more than compensating. Most people don't notice any cognitive decline until their 50s or 60s." },
      { question: "What is the average IQ for a 40-year-old?", answer: "The average IQ for a 40-year-old is 100, since IQ tests are age-normed. A 40-year-old is compared to other 40-year-olds, not to 20-year-olds. While raw processing speed may be slightly slower than at 25, accumulated knowledge and expertise make middle-aged adults highly effective problem-solvers." },
      { question: "How can adults maintain their IQ?", answer: "Regular aerobic exercise is the single most evidence-backed strategy. Additionally: continue learning new skills, read challenging material, stay socially engaged, manage stress, get 7–9 hours of sleep, maintain a Mediterranean-style diet, and limit alcohol. These habits can slow or prevent age-related cognitive decline." },
    ],
  },
  {
    ageGroup: "Older Adults (Ages 50–65)",
    slug: "older-adults",
    avgIQRange: "90–110",
    description: "In the 50–65 age range, the divergence between fluid and crystallized intelligence becomes more apparent. Processing speed and working memory continue their gradual decline, but vocabulary, general knowledge, and expertise often reach their lifetime peak during this period. Many professionals do their most impactful work in their 50s and 60s, leveraging decades of accumulated wisdom. IQ tests that emphasize speed may underestimate the cognitive capabilities of this age group, while knowledge-heavy tests may overestimate them relative to younger adults.",
    keyFactors: "Cognitive reserve — built through a lifetime of education, intellectual engagement, and healthy habits — becomes critically important during this period. People with higher cognitive reserve show less functional decline even when age-related brain changes are present. Hormonal changes (menopause, declining testosterone) can affect mood and energy, indirectly impacting cognitive performance. Chronic conditions like hypertension, diabetes, and sleep apnea become more common and can impair cognition if unmanaged. This is also the age when early signs of neurodegenerative diseases may first appear.",
    faqItems: [
      { question: "What is the average IQ for someone in their 50s?", answer: "The average IQ at any age is 100, because tests are normed by age group. However, a 55-year-old's raw performance on speed-based tasks may be lower than a 25-year-old's, while their vocabulary and knowledge scores may be higher. The age-norming adjusts for these natural developmental patterns." },
      { question: "Is cognitive decline inevitable after 50?", answer: "Some decline in processing speed is normal, but significant cognitive decline is not inevitable. Many people maintain excellent cognitive function well into their 70s and 80s. Regular exercise, continuous learning, social engagement, and managing health conditions are the strongest protective factors." },
      { question: "What's the difference between normal aging and dementia?", answer: "Normal aging involves slightly slower processing and occasional difficulty recalling names, but does not significantly impair daily functioning. Dementia involves progressive, significant cognitive decline that interferes with daily life — forgetting recent conversations, getting lost in familiar places, or difficulty with routine tasks. If you're concerned, consult a neurologist." },
    ],
  },
  {
    ageGroup: "Seniors (Ages 65+)",
    slug: "seniors",
    avgIQRange: "85–105",
    description: "After age 65, cognitive changes become more noticeable for most people, though the range of individual variation is enormous. Some 80-year-olds perform as well as the average 50-year-old, while others show significant decline. Fluid intelligence continues its gradual decrease, but crystallized intelligence often remains strong well into the 70s and even 80s. Wisdom — the integration of knowledge, experience, and sound judgment — may actually peak in the late 60s and 70s, though this is not captured by standard IQ tests.",
    keyFactors: "The \"use it or lose it\" principle is strongly supported by research on aging and cognition. Seniors who remain intellectually active, physically fit, and socially connected maintain significantly higher cognitive function than those who are sedentary and isolated. Bilingualism delays dementia onset by approximately 4–5 years. Education level is the strongest single predictor of cognitive function in old age. Medical management of conditions like hypertension, diabetes, and depression is crucial, as these conditions accelerate cognitive decline when untreated.",
    faqItems: [
      { question: "What is the average IQ for a 70-year-old?", answer: "Age-normed IQ for a 70-year-old averages 100 (compared to other 70-year-olds). However, if compared to the general population using young-adult norms, the average would be lower for fluid intelligence tasks. Crystallized intelligence (vocabulary, knowledge) often remains strong." },
      { question: "How much does IQ decline with age?", answer: "Fluid intelligence typically declines about 1–2 points per decade from the late 20s, accelerating somewhat after 65. By age 75, raw processing speed may be 15–20 points below its peak. However, crystallized intelligence can remain stable or even increase, and real-world problem-solving ability may not decline as much as timed test scores suggest." },
      { question: "Can seniors improve their cognitive function?", answer: "Yes. Research shows physical exercise, learning new skills, social engagement, and brain-healthy nutrition can improve cognitive function even after 65. The brain retains neuroplasticity throughout life. Starting a new hobby, learning an instrument, or taking classes can build new neural pathways at any age." },
    ],
  },
  // --- Per-year pages: ages 5–21 ---
  {
    ageGroup: "Age 5",
    slug: "age-5",
    avgIQRange: "90–110",
    description: "At age 5, cognitive testing primarily measures early language development, basic reasoning, and visual-spatial skills rather than the broader intelligence captured in adult IQ tests. Tests like the WPPSI (Wechsler Preschool and Primary Scale of Intelligence) are designed for children 2½–7 and assess vocabulary, similarities, block design, and picture memory. IQ scores at this age are highly variable and considered relatively poor predictors of adult intelligence. The brain is undergoing rapid growth, and environmental factors — especially quality of early childhood education, reading exposure, and nutrition — have an outsized influence at this developmental stage.",
    keyFactors: "Early childhood enrichment programs, access to books, parental verbal engagement, and quality nutrition (particularly iron, iodine, and omega-3 fatty acids) significantly shape cognitive development at age 5. Chronic stress, lead exposure, and insufficient sleep can impair brain development at this critical period. Research shows that preschool programs like Head Start can boost cognitive scores by 4–7 points in children from disadvantaged backgrounds.",
    faqItems: [
      { question: "What is the average IQ for a 5-year-old?", answer: "The average IQ for a 5-year-old is 100, since all IQ tests are normed by age. This means a 5-year-old scoring 100 is performing at the exact middle of other 5-year-olds. However, IQ scores at this age are highly variable and less reliable than scores obtained in adolescence or adulthood." },
      { question: "Can you accurately test a 5-year-old's IQ?", answer: "IQ tests like the WPPSI are designed for young children and can produce reliable results, but scores at age 5 correlate only modestly with adult IQ. The brain is still rapidly developing, and a single test at this age should not be taken as a fixed indicator of intellectual potential." },
      { question: "How can I support my 5-year-old's cognitive development?", answer: "Reading aloud daily, engaging in conversation, allowing exploratory play, and limiting screen time are the most evidence-backed strategies. Nutritional adequacy (particularly iron and omega-3s), consistent sleep schedules, and low-stress environments also support brain development at this stage." },
    ],
  },
  {
    ageGroup: "Age 6",
    slug: "age-6",
    avgIQRange: "90–110",
    description: "Age 6 marks the beginning of formal schooling in most countries, making it an important period for identifying both gifted children and those who may need learning support. The WISC-V (Wechsler Intelligence Scale for Children) becomes applicable from age 6 and provides more comprehensive assessment across verbal comprehension, working memory, processing speed, fluid reasoning, and visual-spatial ability. IQ scores at age 6 are more stable than at age 5 but still more variable than adolescent or adult scores. Children entering first grade show wide variation in school readiness, partly reflecting differences in preschool experience rather than fixed cognitive ability.",
    keyFactors: "Starting formal education, access to qualified teachers, classroom environment, and home reading routines all significantly affect cognitive development at age 6. Sleep quality is particularly important — first-graders need 9–11 hours nightly, and chronic sleep deprivation can impair learning and suppress effective cognitive performance. Physical activity has also been shown to directly improve executive function and academic readiness.",
    faqItems: [
      { question: "What is the average IQ for a 6-year-old?", answer: "The average IQ for a 6-year-old is 100, normed against other 6-year-olds. About 68% of 6-year-olds score between 85 and 115. Scores at this age have moderate predictive validity for later academic performance but can shift considerably as development continues." },
      { question: "My 6-year-old scored high on an IQ test — is this reliable?", answer: "High IQ scores at age 6 are promising but should be interpreted cautiously. Children who score in the gifted range (130+) at age 6 often remain in that range, but scores can shift. Retesting in a few years provides a more reliable picture. Focus on enrichment rather than over-relying on a single score." },
      { question: "What's the best way to build a 6-year-old's cognitive skills?", answer: "Reading together, puzzle-solving, building activities, and imaginative play are among the most effective strategies. Limiting passive screen time and replacing it with interactive play supports executive function development. Consistent school attendance and a stable home environment also contribute significantly." },
    ],
  },
  {
    ageGroup: "Age 7",
    slug: "age-7",
    avgIQRange: "90–110",
    description: "At age 7, children enter Piaget's concrete operational stage of cognitive development — becoming capable of logical reasoning about concrete objects and events. IQ tests at this age show increasing reliability, with scores at 7 being reasonably (though not perfectly) predictive of adult intelligence. Reading ability becomes a major differentiator, as children who struggle to decode words by age 7 often fall behind in vocabulary growth and reasoning development. Working memory — the ability to hold and manipulate information in mind — is developing rapidly and is one of the strongest predictors of academic success at this age.",
    keyFactors: "Reading fluency, working memory development, and access to numeracy instruction are critical factors at age 7. Research shows that reading intervention before age 8 is dramatically more effective than interventions in later years. Sleep (9–11 hours) and physical activity remain important for cognitive function. Social and emotional wellbeing also affects cognitive performance — anxious or stressed children consistently underperform their potential on cognitive tests.",
    faqItems: [
      { question: "What is the average IQ for a 7-year-old?", answer: "The average IQ for a 7-year-old is 100, as all IQ tests are normed by age. IQ scores at 7 are more reliable than at younger ages and begin to be reasonably predictive of later academic performance. About 68% of 7-year-olds score between 85 and 115." },
      { question: "Is IQ at age 7 a good predictor of adult intelligence?", answer: "IQ at age 7 has moderate predictive validity for adult IQ — stronger than early childhood scores but weaker than adolescent scores. Studies tracking children from age 7 to adulthood find correlations of roughly 0.6–0.7, meaning there's meaningful continuity but also substantial room for change." },
      { question: "My 7-year-old is struggling in school — should I get an IQ test?", answer: "If a child is consistently struggling despite adequate instruction and support, an IQ test (along with assessment of learning disabilities like dyslexia or dyscalculia) can help identify what kind of support would be most beneficial. A psychologist or educational specialist should conduct the assessment and interpret results in context." },
    ],
  },
  {
    ageGroup: "Age 8",
    slug: "age-8",
    avgIQRange: "90–110",
    description: "By age 8, cognitive development includes increasingly sophisticated logical reasoning, better working memory capacity, and the beginning of more systematic problem-solving strategies. IQ scores become more stable during this period, and testing by a qualified psychologist is often used to identify both giftedness and learning disabilities. The vocabulary gap between children from high- and low-stimulation environments — which had been widening since birth — begins to have measurable impacts on reasoning ability, since verbal intelligence and general intelligence are closely related. Gifted programs and enrichment activities are often accessible beginning around this age.",
    keyFactors: "Vocabulary development, reading comprehension, and mathematical fluency are key cognitive markers at age 8. Research by Betty Hart and Todd Risley showed that by age 4, children from professional families had heard 30 million more words than those from low-income families — and this gap in verbal exposure continues to shape cognitive performance into middle childhood. After-school enrichment, access to books, and quality teaching significantly affect trajectories at this age.",
    faqItems: [
      { question: "What is the average IQ for an 8-year-old?", answer: "The average IQ for an 8-year-old is 100, normed against other 8-year-olds. IQ scores at age 8 have good reliability and are more predictive of adult intelligence than scores from earlier childhood. About 68% of 8-year-olds score between 85 and 115." },
      { question: "What IQ score is considered gifted at age 8?", answer: "A score of 130 or above is typically used as a threshold for gifted programs, representing the top 2% of 8-year-olds. Some programs use a cut-off of 125 (top ~5%). Giftedness is best assessed through comprehensive evaluation that looks beyond a single test score." },
      { question: "How does screen time affect IQ development at age 8?", answer: "Excessive passive screen time (particularly TV and video streaming) is associated with lower vocabulary development and attention span. Interactive screen use — educational games, coding apps, video calls — has smaller negative effects. Most experts recommend no more than 2 hours of recreational screen time daily for 8-year-olds." },
    ],
  },
  {
    ageGroup: "Age 9",
    slug: "age-9",
    avgIQRange: "90–110",
    description: "Age 9 sits near the transition from early childhood to middle childhood, and cognitive abilities continue to become more organized and efficient. Children at this age develop better metacognitive awareness — an understanding of how they think and learn — which supports more effective studying and problem-solving. Fluid intelligence (raw reasoning ability) continues developing, while crystallized intelligence (knowledge accumulated through experience) grows through school learning. IQ scores at age 9 are substantially more stable than those at younger ages and provide a useful snapshot of current cognitive functioning relative to peers.",
    keyFactors: "Organization, study habits, and intrinsic motivation begin to differentiate high-performing from average-performing students at age 9, independent of raw IQ. Social cognition — the ability to understand other people's perspectives — also develops substantially, which affects collaborative learning. Physical activity continues to benefit cognitive function; research shows children who participate in sports or active play score higher on executive function measures than sedentary peers.",
    faqItems: [
      { question: "What is the average IQ for a 9-year-old?", answer: "The average IQ for a 9-year-old is 100, since IQ tests are normed by age group. Scores at age 9 are reasonably reliable and moderately predictive of adult intelligence. About 68% of 9-year-olds score between 85 and 115." },
      { question: "Does IQ predict school success at age 9?", answer: "IQ is one of the strongest predictors of academic performance, with correlations around 0.5–0.6. However, motivation, study habits, quality of teaching, and family support also significantly predict school success. Children with high IQ and poor study habits often underperform compared to moderately intelligent children with good habits." },
      { question: "Can nutrition still affect a 9-year-old's IQ?", answer: "Yes. Adequate nutrition remains important throughout childhood. Iron deficiency — the world's most common nutritional deficiency — can reduce cognitive performance by up to 10 points and is reversible with treatment. Omega-3 fatty acids, iodine, and adequate calories continue to support brain function and development at age 9." },
    ],
  },
  {
    ageGroup: "Age 10",
    slug: "age-10",
    avgIQRange: "90–110",
    description: "Age 10 is an important milestone in cognitive development — children at this stage can perform complex logical operations, understand abstract concepts more readily, and use systematic reasoning strategies. IQ scores become increasingly stable and are considered moderately reliable predictors of adult intelligence. This is also a period when academic divergence becomes more visible: children in the top quartile are reading chapter books and solving multi-step problems, while those in the lower quartile may still be developing foundational reading fluency. Early identification of learning difficulties and giftedness at this age enables timely intervention and enrichment.",
    keyFactors: "Academic engagement, reading volume, and quality of instruction are major determinants of cognitive development at age 10. The Matthew Effect in reading — 'the rich get richer' — means that children who read widely develop larger vocabularies, which further accelerates comprehension and reasoning ability. Social environment matters too: children in academically stimulating peer groups tend to develop faster cognitively than those in environments where academic achievement is not valued.",
    faqItems: [
      { question: "What is the average IQ for a 10-year-old?", answer: "The average IQ for a 10-year-old is 100, normed against other 10-year-olds. IQ scores at age 10 are substantially more stable than at younger ages, and are reasonably predictive of adult intelligence. About 68% of 10-year-olds score between 85 and 115." },
      { question: "Is 120 IQ good for a 10-year-old?", answer: "An IQ of 120 at age 10 places a child at the 91st percentile — they score higher than 91% of other 10-year-olds. This is in the 'high average' to 'superior' range and often qualifies for gifted programs. However, IQ can shift over subsequent years, and a single test provides just one data point." },
      { question: "How much can a 10-year-old's IQ change over time?", answer: "IQ scores at age 10 can still shift significantly — research suggests changes of 10–15 points are not unusual between ages 10 and 18. Dramatic changes in educational environment, significant health events, or intensive enrichment can all influence trajectories. Stability increases as children approach and enter adolescence." },
    ],
  },
  {
    ageGroup: "Age 11",
    slug: "age-11",
    avgIQRange: "90–110",
    description: "Age 11 often coincides with the transition to middle school, bringing new academic demands that stress higher-order thinking skills: analysis, inference, multi-step problem-solving, and essay writing. Cognitively, children at this age can handle increasingly abstract concepts, though the prefrontal cortex — responsible for executive function and impulse control — is still years from full development. IQ testing at age 11 provides a useful snapshot that is moderately predictive of adult scores. The Scottish Mental Survey of 1932 famously tested nearly every Scottish child born in 1921 at age 11, providing a unique historical dataset on childhood IQ and its long-term health and longevity correlates.",
    keyFactors: "Executive function development — planning, working memory, cognitive flexibility — is a key area of growth at age 11. Environmental factors including school transition stress, puberty onset (which varies widely and can temporarily affect cognitive test performance), sleep needs (which increase with puberty), and peer influence all shape cognitive performance. Engagement in complex hobbies like chess, music, or coding at this age has been associated with accelerated cognitive development.",
    faqItems: [
      { question: "What is the average IQ for an 11-year-old?", answer: "The average IQ for an 11-year-old is 100, normed against other children the same age. Scores at this age are reasonably stable and begin to be more reliable predictors of adult intelligence than scores from earlier childhood. About 68% of 11-year-olds score between 85 and 115." },
      { question: "Does starting puberty affect IQ scores?", answer: "Puberty timing does not directly change underlying cognitive ability, but it can affect performance on IQ tests through stress, sleep disruption (puberty shifts the sleep cycle, making early school times cognitively costly), and emotional changes. IQ scores obtained during peak puberty stress may slightly underestimate a child's stable cognitive level." },
      { question: "What activities boost cognitive development at age 11?", answer: "Learning a musical instrument, playing chess or strategy games, reading complex books, coding, and learning a second language are among the activities with the strongest evidence for boosting cognitive development at this age. Physical exercise (especially aerobic activity) also directly improves executive function and academic performance." },
    ],
  },
  {
    ageGroup: "Age 12",
    slug: "age-12",
    avgIQRange: "90–110",
    description: "By age 12, children are typically entering early adolescence, and cognitive abilities are undergoing substantial reorganization. The brain's white matter (myelination) continues increasing efficiency of neural connections, supporting faster information processing. Abstract reasoning becomes more robust, allowing 12-year-olds to engage with hypothetical scenarios and complex logical arguments. IQ scores at this age are among the most predictive of adult intelligence in the pre-adolescent range, with correlations of approximately 0.70–0.75 with adult scores. Academic differentiation is increasingly pronounced, with high-IQ children demonstrating qualitatively different reasoning approaches to complex problems.",
    keyFactors: "The quality and challenge level of academic curriculum significantly affects cognitive development at age 12. Children who are under-challenged may show stagnating cognitive growth, while those in demanding academic environments continue to develop. Sleep becomes increasingly important as puberty progresses — most 12-year-olds need 9–10 hours but average significantly less. Digital media use, particularly social media, begins competing for cognitive resources and attention at this age.",
    faqItems: [
      { question: "What is the average IQ for a 12-year-old?", answer: "The average IQ for a 12-year-old is 100, normed against other 12-year-olds. IQ scores at age 12 are substantially more stable than earlier childhood scores and correlate moderately to strongly with adult IQ. About 68% of 12-year-olds score between 85 and 115." },
      { question: "Is IQ at 12 a good predictor of academic success?", answer: "Yes — IQ at age 12 is one of the strongest individual-level predictors of academic achievement through high school and into college. However, work ethic, study habits, motivation, and school quality all significantly modify the relationship. A highly motivated student with a 110 IQ often outperforms an unmotivated student with a 130 IQ." },
      { question: "Can a 12-year-old's IQ still change significantly?", answer: "Yes. While IQ becomes more stable in adolescence than in early childhood, changes of 5–15 points between ages 12 and 18 are still common. Environmental changes — moving to a more or less challenging school, significant life stressors, intensive enrichment — can shift scores. The brain remains quite plastic through adolescence." },
    ],
  },
  {
    ageGroup: "Age 13",
    slug: "age-13",
    avgIQRange: "90–110",
    description: "Age 13 marks the onset of formal adolescence for most children, bringing significant hormonal, neurological, and psychological changes that interact with cognitive development. The dorsolateral prefrontal cortex — critical for planning, abstract reasoning, and impulse control — is actively restructuring, which can create a paradox: 13-year-olds show dramatically improved abstract reasoning on IQ tests while simultaneously demonstrating poor real-world decision-making due to still-developing executive control. IQ scores at 13 are among the most reliable childhood scores and correlate strongly (~0.75) with adult intelligence. This is an age when the WISC-V is commonly administered for educational and clinical purposes.",
    keyFactors: "Sleep deprivation is a major issue at age 13, as the biological sleep cycle shifts approximately 2 hours later while school start times remain early. Research shows that sleep-deprived adolescents perform as if their IQ were 5–10 points lower. Social influences become stronger determinants of academic engagement. Physical exercise remains highly beneficial: aerobic fitness at 13 predicts cognitive performance both immediately and in future years.",
    faqItems: [
      { question: "What is the average IQ for a 13-year-old?", answer: "The average IQ for a 13-year-old is 100, normed against other 13-year-olds. Scores at this age are reliable and strongly predictive of adult intelligence, with correlations of approximately 0.75. About 68% of 13-year-olds score between 85 and 115." },
      { question: "Why might a smart 13-year-old make poor decisions?", answer: "High IQ at 13 reflects strong reasoning ability, but the prefrontal cortex — responsible for impulse control, long-term planning, and risk assessment — isn't fully developed until the mid-20s. This creates a developmentally normal gap between reasoning capacity and real-world decision quality that characterizes adolescence across all IQ levels." },
      { question: "What IQ score is considered gifted at age 13?", answer: "An IQ of 130 or above places a 13-year-old in the top 2% — typically considered gifted. Scores of 125+ (top ~5%) often qualify for enrichment programs. Gifted 13-year-olds may benefit from accelerated coursework, subject-matter depth, and intellectual peers, as under-challenge can lead to boredom and disengagement." },
    ],
  },
  {
    ageGroup: "Age 14",
    slug: "age-14",
    avgIQRange: "90–110",
    description: "At age 14, adolescents are typically in the middle of high school, where academic demands sharpen and the gap between students at different cognitive levels becomes increasingly visible. Abstract reasoning is well-developed at this age, allowing engagement with algebra, literary analysis, historical interpretation, and scientific hypothesis testing. IQ scores at 14 are highly reliable and strongly predictive of adult intelligence, with correlations exceeding 0.80 in some longitudinal studies. The WISC-V is still applicable for 14-year-olds, while the WAIS-IV becomes appropriate at 16. Working memory and processing speed continue developing, with processing speed still lagging behind abstract reasoning.",
    keyFactors: "Academic rigor, intellectual challenge, and peer academic culture are major drivers of cognitive development at 14. Research on gifted programs shows that high-ability students who are appropriately challenged develop faster than those who are not. Adolescent sleep continues to be chronically insufficient for most 14-year-olds: the recommended 8–10 hours conflicts with both biological sleep phase shifts and social pressures. Mental health issues — particularly anxiety and depression — become more prevalent at this age and can significantly impair cognitive performance.",
    faqItems: [
      { question: "What is the average IQ for a 14-year-old?", answer: "The average IQ for a 14-year-old is 100, normed against other 14-year-olds. IQ scores at this age are highly stable and strongly predictive of adult intelligence. About 68% of 14-year-olds score between 85 and 115." },
      { question: "How does IQ at 14 compare to adult IQ?", answer: "IQ at 14 correlates very strongly with adult IQ — studies show correlations of 0.80 or higher between IQ at 14 and IQ at 30. While changes can still occur, the trajectory is largely set. Major environmental changes (dramatic improvement or deterioration of educational opportunity) can still shift scores by 5–15 points." },
      { question: "Does taking challenging classes at 14 improve IQ?", answer: "Each additional year of education is associated with approximately 1–3 IQ point gains, and challenging coursework strengthens the reasoning and working memory skills that IQ tests measure. AP, IB, or advanced coursework at 14 builds analytical habits that compound over time. The effect on fluid intelligence is modest, but the impact on crystallized intelligence and practical reasoning is substantial." },
    ],
  },
  {
    ageGroup: "Age 15",
    slug: "age-15",
    avgIQRange: "90–110",
    description: "By age 15, cognitive abilities are approaching adult levels in many domains, particularly abstract reasoning and verbal intelligence. The prefrontal cortex continues developing, but processing speed and fluid intelligence are near their adult performance levels for most individuals. IQ scores at 15 are very stable and highly predictive of adult intelligence — studies show correlations above 0.85 with adult scores. The PISA (Programme for International Student Assessment) tests students at approximately this age across countries, providing international benchmarks on reasoning and applied academic skills. This is also the age when the ASVAB (Armed Services Vocational Aptitude Battery) tests become relevant for some students.",
    keyFactors: "Standardized test preparation, quality of high school curriculum, and access to advanced courses all significantly affect cognitive assessment at this age. Chronic stress — from academic pressure, social conflicts, or family difficulties — impairs the prefrontal cortex function assessed by IQ tests. Conversely, intellectual engagement (debate clubs, science competitions, foreign language learning) builds the cognitive skills that IQ tests measure.",
    faqItems: [
      { question: "What is the average IQ for a 15-year-old?", answer: "The average IQ for a 15-year-old is 100, normed against other 15-year-olds. At this age, IQ scores are highly reliable and very strongly predictive of adult intelligence. Most 15-year-olds score within 5–10 points of where they will score as adults. About 68% score between 85 and 115." },
      { question: "Is a 15-year-old's IQ basically their adult IQ?", answer: "For most people, yes — IQ at 15 is a strong approximation of adult IQ, with correlations above 0.85. That said, significant changes in educational environment, health, or life circumstances can still shift scores by 5–15 points. The brain continues developing through the mid-20s, so some additional change is possible." },
      { question: "What does a high IQ at 15 predict for the future?", answer: "High IQ at 15 is one of the strongest predictors of educational attainment, occupational complexity, and income later in life. It also correlates with health and longevity. However, personality traits like conscientiousness, resilience, and interpersonal skill are equally important predictors of life success and are not captured by IQ tests." },
    ],
  },
  {
    ageGroup: "Age 16",
    slug: "age-16",
    avgIQRange: "90–110",
    description: "Age 16 is a pivotal cognitive and legal milestone in many countries — it is when psychologists transition from the WISC to the adult WAIS-IV for IQ testing. Cognitively, 16-year-olds demonstrate near-adult levels of abstract reasoning and verbal intelligence, though processing speed and executive function continue to mature. IQ scores at 16 are among the most stable ever measured for individuals under 18, with very high correlations with adult intelligence. This is also an age when SAT and ACT scores become relevant — and SAT/ACT performance correlates strongly with IQ (roughly 0.80), making these tests a partial proxy for academic reasoning ability.",
    keyFactors: "At 16, the biggest factors influencing cognitive performance are educational quality, sleep (still insufficient for most teens), mental health, and substance use. Cannabis use during adolescence is particularly concerning for cognitive development — research shows regular use before age 18 is associated with lasting reductions in IQ of approximately 8 points in heavy users. Conversely, learning a musical instrument, competitive debate, or advanced mathematics at 16 builds the neural pathways that support lifelong intellectual performance.",
    faqItems: [
      { question: "What is the average IQ for a 16-year-old?", answer: "The average IQ for a 16-year-old is 100, normed against other 16-year-olds. IQ scores at this age are very stable — essentially adult-level reliability — and correlate above 0.85 with intelligence measured in adulthood. About 68% of 16-year-olds score between 85 and 115." },
      { question: "How does SAT score relate to IQ at age 16?", answer: "SAT scores and IQ correlate at approximately 0.80, meaning they measure largely overlapping cognitive abilities. A combined SAT score of 1100 corresponds roughly to an IQ of 100, 1300 to ~115, and 1500 to ~130. However, SAT preparation can improve scores without necessarily changing underlying cognitive ability." },
      { question: "Does substance use affect IQ at age 16?", answer: "Yes, significantly. Research shows that regular cannabis use before age 18 is associated with lasting cognitive impairment — studies report IQ reductions of 5–8 points in heavy adolescent users even after stopping. Alcohol and stimulant abuse also impair brain development during this critical period. The adolescent brain is particularly vulnerable to substance effects." },
    ],
  },
  {
    ageGroup: "Age 17",
    slug: "age-17",
    avgIQRange: "90–110",
    description: "At age 17, cognitive abilities are very close to adult levels, and IQ scores are highly reliable and stable. Most of the fluid intelligence gains of adolescence are complete, though processing speed and executive function continue to improve marginally through the early 20s. This is a high-stakes year for many students — SAT/ACT testing, college applications, and AP exams all create both stress and cognitive challenge. Performance on these tests provides real-world evidence of cognitive functioning that complements IQ testing. The Study of Mathematically Precocious Youth (SMPY) — the longest-running longitudinal study of intellectual talent — identified many subjects at age 12–13 and tracked their extraordinary adult achievements, demonstrating the long-term predictive power of early IQ testing.",
    keyFactors: "Academic pressure at 17 can be both stimulating and damaging — moderate challenge promotes cognitive growth, while excessive stress impairs performance and wellbeing. Chronic anxiety about college admissions affects millions of 17-year-olds and can produce temporary cognitive impairment (particularly in working memory and processing speed). Sleep deprivation remains prevalent at this age, with most 17-year-olds averaging 6–7 hours against a recommended 8–10.",
    faqItems: [
      { question: "What is the average IQ for a 17-year-old?", answer: "The average IQ for a 17-year-old is 100, normed against other 17-year-olds. Scores at this age are highly reliable and essentially equivalent in stability to adult IQ scores. About 68% of 17-year-olds score between 85 and 115." },
      { question: "Is fluid intelligence fully developed at 17?", answer: "Fluid intelligence (novel reasoning ability) is largely developed by 17, approaching its lifetime peak. Processing speed continues improving slightly through the early 20s, and executive function (impulse control, planning) is still maturing. However, the cognitive gains between 17 and 25 are modest compared to the rapid development during earlier adolescence." },
      { question: "Can a 17-year-old join Mensa?", answer: "Yes. Mensa accepts members at any age, and a qualifying score on a supervised IQ test (scoring at the 98th percentile or above — typically IQ 132+) is sufficient regardless of age. Many gifted 17-year-olds take the Mensa test. Some local chapters offer supervised testing for teenagers." },
    ],
  },
  {
    ageGroup: "Age 18",
    slug: "age-18",
    avgIQRange: "90–110",
    description: "Age 18 represents the legal threshold to adulthood in most countries, and cognitively it marks the point where IQ scores are fully adult-equivalent in reliability and stability. The WAIS-IV (Wechsler Adult Intelligence Scale) becomes the standard instrument from age 16 onward. Fluid intelligence is at or very near its lifetime peak at 18 — processing novel information quickly and efficiently, forming new associations, and working memory are at maximum performance levels. However, crystallized intelligence — accumulated knowledge and skills — continues growing throughout adulthood. College entry at 18 represents a significant cognitive investment: each year of higher education is associated with approximately 1–3 IQ points of additional crystallized intelligence development.",
    keyFactors: "The transition to college or employment at 18 significantly shapes cognitive trajectories. College students develop analytical reasoning, writing, and critical thinking at accelerated rates. Those entering the workforce directly develop domain-specific expertise and practical intelligence. Sleep, nutrition, exercise, and substance use habits formed at 18 often persist for decades and have cumulative cognitive effects. This is also the age when military aptitude testing (ASVAB) and graduate admissions tests become relevant.",
    faqItems: [
      { question: "What is the average IQ for an 18-year-old?", answer: "The average IQ for an 18-year-old is 100, the same as for any age group since tests are normed by age. At 18, IQ scores have reached full adult reliability and stability. Fluid intelligence is at or near its peak, while crystallized intelligence will continue growing for decades." },
      { question: "Is 18 the age of peak intelligence?", answer: "For fluid intelligence (raw processing speed and novel reasoning), yes — most people peak between 18 and 25. For crystallized intelligence (knowledge, vocabulary, expertise), peak comes much later, often in the 40s and 50s. Overall 'wisdom' and practical problem-solving may peak even later, in the 60s and 70s." },
      { question: "Does college significantly raise IQ?", answer: "Research shows each year of education adds approximately 1–3 IQ points, primarily in crystallized intelligence. A 4-year college education can add 4–8 points of test-measured intelligence through expanded vocabulary, analytical reasoning practice, and knowledge accumulation. However, these gains reflect learned skills as much as underlying cognitive capacity." },
    ],
  },
  {
    ageGroup: "Age 19",
    slug: "age-19",
    avgIQRange: "90–110",
    description: "At age 19, most individuals are experiencing full young adulthood cognitively, with fluid intelligence at or approaching its peak. College freshmen and sophomores at this age are developing significant analytical and writing skills that build crystallized intelligence rapidly. For those not attending college, vocational training or work experience develops practical intelligence and domain expertise. IQ at 19 is highly stable — scores typically differ by only 2–5 points from adult scores measured years later. The brain continues maturing, particularly in the prefrontal cortex, contributing to gradual improvements in executive function and impulse regulation through the mid-20s.",
    keyFactors: "The environment at 19 — college, vocational training, or early career — strongly shapes cognitive development trajectories. Young adults in intellectually demanding environments continue developing, while those in cognitively unstimulating situations may show slower crystallized intelligence growth. Sleep, nutrition, exercise, and social connection all affect cognitive performance. Mental health challenges peak in early adulthood — anxiety, depression, and ADHD all have significant cognitive impacts when unmanaged.",
    faqItems: [
      { question: "What is the average IQ for a 19-year-old?", answer: "The average IQ for a 19-year-old is 100, normed against other 19-year-olds. At this age, IQ scores are fully adult in stability and reliability. Fluid intelligence is at or approaching its peak. About 68% of 19-year-olds score between 85 and 115." },
      { question: "Is a 19-year-old's IQ their permanent IQ?", answer: "Largely, yes — with room for modest change. IQ at 19 correlates above 0.90 with IQ measured in the 30s and 40s. However, significant changes in intellectual engagement, education, health, or environment can shift scores by 5–10 points. Crystallized intelligence continues growing with education and experience." },
      { question: "Can a 19-year-old significantly improve their IQ?", answer: "Fluid intelligence is largely fixed by this age, but crystallized intelligence — vocabulary, reasoning skills, domain knowledge — continues developing throughout adulthood. Higher education, voracious reading, and continuous learning reliably increase performance on IQ test components that measure crystallized intelligence. The total effect can be 5–10 additional points over a decade of active intellectual engagement." },
    ],
  },
  {
    ageGroup: "Age 20",
    slug: "age-20",
    avgIQRange: "90–110",
    description: "Age 20 is widely recognized as the approximate peak of fluid intelligence — the raw ability to process novel information quickly, hold information in working memory, and form new associations. Research by Joshua Hartshorne and Laura Germine found that different cognitive abilities peak at different ages, with processing speed peaking around 18–19, working memory around 25, and emotional intelligence much later. IQ tests at 20 provide a snapshot of cognitive ability at close to its maximum raw performance level. While fluid intelligence begins its slow decline from the mid-20s onward, crystallized intelligence — the accumulated knowledge and expertise that makes up much of what we consider 'wisdom' — is just beginning its long growth trajectory.",
    keyFactors: "College and early career environments at 20 are critical contexts for cognitive development. University education systematically develops analytical reasoning, which directly improves performance on IQ test components. Social connection, physical health, sleep quality, and mental health all affect cognitive performance. This is also a period when lifestyle habits — diet, exercise, alcohol use — begin to have compounding effects on long-term brain health.",
    faqItems: [
      { question: "What is the average IQ for a 20-year-old?", answer: "The average IQ for a 20-year-old is 100, normed against other 20-year-olds. This is approximately the age of peak fluid intelligence, meaning raw processing speed and novel reasoning are at their highest lifetime levels. About 68% of 20-year-olds score between 85 and 115." },
      { question: "Does intelligence peak at 20?", answer: "Different aspects of intelligence peak at different ages. Processing speed peaks around 18–19, working memory around 25, vocabulary in the 60s–70s, and wisdom may peak even later. So while raw cognitive speed may be near its peak at 20, many aspects of intelligence continue improving for decades." },
      { question: "Is 20 too late to significantly improve intelligence?", answer: "No. Crystallized intelligence — the accumulated knowledge and skills that constitute much of practical intelligence — continues growing throughout adulthood. Higher education, reading, learning new languages or instruments, and cognitively demanding work all build intelligence measurably at 20 and beyond. Even fluid intelligence can be partially maintained through regular cognitive exercise and physical activity." },
    ],
  },
  {
    ageGroup: "Age 21",
    slug: "age-21",
    avgIQRange: "90–110",
    description: "At age 21, most individuals are in the peak period of fluid intelligence while experiencing rapid crystallized intelligence development through college, work, and life experience. The legal threshold to adulthood in the United States coincides with a cognitive profile that combines maximum raw processing speed with growing expertise and knowledge. IQ scores at 21 are highly stable — changes of more than 5 points over subsequent decades are uncommon in the absence of major health events or dramatic environmental changes. This is a period when young adults begin to understand how their cognitive strengths and weaknesses shape their career trajectories and learning approaches.",
    keyFactors: "Educational environment, intellectual curiosity, physical fitness, and mental health management are the primary modifiable factors affecting cognitive performance at 21. Sleep quality becomes more individually controlled at this age — those who prioritize adequate sleep (7–9 hours) maintain a significant cognitive advantage over their sleep-deprived peers. Research shows that regular aerobic exercise at 21 not only maintains processing speed but also builds the hippocampal volume associated with better memory and learning.",
    faqItems: [
      { question: "What is the average IQ for a 21-year-old?", answer: "The average IQ for a 21-year-old is 100, normed against other 21-year-olds. At this age, IQ scores are at full adult reliability, and both fluid intelligence (near peak) and crystallized intelligence (actively growing) are well-developed. About 68% of 21-year-olds score between 85 and 115." },
      { question: "Does IQ continue to increase after 21?", answer: "Fluid intelligence has largely stabilized by 21 and will slowly decline from the mid-20s. However, crystallized intelligence — vocabulary, knowledge, expertise — continues increasing through middle age if stimulated by education, reading, and cognitively demanding work. Overall cognitive effectiveness often peaks in the 30s–50s when raw speed and accumulated expertise are optimally combined." },
      { question: "What careers best leverage IQ at age 21?", answer: "High-IQ 21-year-olds tend to excel in careers requiring continuous problem-solving, rapid learning, and complex reasoning: engineering, medicine, law, research, finance, technology, and academia. However, career success requires much more than IQ — interpersonal skills, work ethic, creativity, and emotional resilience are equally predictive of achievement across all fields." },
    ],
  },
];

export function getAgeGroupBySlug(slug: string): AgeIQInfo | undefined {
  return ageIQData.find((a) => a.slug === slug);
}

export const ageGroupSlugs = ageIQData.map((a) => a.slug);
