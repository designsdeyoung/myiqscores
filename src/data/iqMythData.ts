export interface IQMythInfo {
  title: string;
  slug: string;
  myth: string;
  reality: string;
  explanation: string;
  faqItems: { question: string; answer: string }[];
}

export const iqMythData: IQMythInfo[] = [
  {
    title: "Do Video Games Make You Smarter?",
    slug: "do-video-games-make-you-smarter",
    myth: "Playing video games increases your IQ and makes you more intelligent.",
    reality: "Some games improve specific cognitive skills (reaction time, spatial reasoning) but don't reliably increase overall IQ.",
    explanation: "Research on video games and cognition is nuanced. Action video games have been shown to improve visual attention, spatial reasoning, and reaction time. Strategy games may enhance planning and multitasking ability. However, these improvements tend to be task-specific — getting better at a game makes you better at that game and closely related tasks, but doesn't reliably transfer to broader cognitive ability or IQ scores. A 2019 meta-analysis in Psychological Bulletin found small positive effects on specific cognitive domains but no evidence of general intelligence improvement. The key distinction is between training a specific skill versus genuinely becoming 'smarter' in a general sense. That said, cognitively demanding games are better for your brain than passive entertainment, and strategic games that require planning and adaptation offer more cognitive benefit than simple reflex-based games.",
    faqItems: [
      { question: "Do video games increase IQ?", answer: "Research shows video games can improve specific cognitive skills like reaction time and spatial reasoning, but they don't reliably increase overall IQ scores. The improvements tend to be narrow and task-specific rather than reflecting general intelligence gains." },
      { question: "Which video games are best for your brain?", answer: "Strategy games (chess, Civilization, StarCraft), puzzle games (Portal, Tetris), and action games with complex decision-making offer the most cognitive benefit. Simple mobile games with repetitive mechanics offer minimal cognitive stimulation." },
      { question: "Are gamers smarter than non-gamers?", answer: "Studies show gamers tend to score slightly higher on visual-spatial tasks and reaction time tests, but this likely reflects both self-selection (people with good spatial skills enjoy games) and practice effects. There's no evidence that gaming causes higher general intelligence." },
    ],
  },
  {
    title: "Does Listening to Mozart Make You Smarter?",
    slug: "mozart-effect-iq",
    myth: "Listening to classical music, especially Mozart, permanently increases intelligence — the 'Mozart Effect.'",
    reality: "The original Mozart Effect study showed only a temporary, small improvement on one specific spatial task. It does not increase IQ.",
    explanation: "The Mozart Effect is one of the most misrepresented findings in psychology. The original 1993 study by Rauscher, Shaw, and Ky found that college students who listened to Mozart's Sonata for Two Pianos in D Major performed slightly better on a spatial reasoning task — but only for about 10-15 minutes afterward. The effect was small, temporary, and specific to one task. It was never about increasing IQ. Subsequent research found that any enjoyable, arousing stimulus (upbeat music, a funny story, caffeine) produces similar short-term effects by improving mood and alertness. The popular interpretation — that playing Mozart for babies makes them smarter — has no scientific support whatsoever. Despite this, the myth spawned a multi-million dollar industry of 'Baby Einstein' products. Learning to play music, however, does show real cognitive benefits.",
    faqItems: [
      { question: "Does the Mozart Effect really work?", answer: "The original finding was real but extremely limited: a small, temporary boost in one spatial task lasting about 15 minutes. It was never about permanently increasing IQ. Any enjoyable, stimulating activity produces similar short-term arousal effects." },
      { question: "Does classical music make babies smarter?", answer: "No. There is no scientific evidence that playing classical music for babies increases their intelligence. This myth, popularized in the late 1990s, led to products like 'Baby Einstein' but has been thoroughly debunked by subsequent research." },
      { question: "Does playing music increase IQ?", answer: "Yes — unlike merely listening to music, learning to play a musical instrument has genuine cognitive benefits. Studies show 2-3 IQ point gains in children who receive music lessons, with improvements in verbal memory, spatial reasoning, and executive function." },
    ],
  },
  {
    title: "Are First-Born Children Smarter?",
    slug: "birth-order-and-iq",
    myth: "First-born children have significantly higher IQs than their younger siblings.",
    reality: "First-borns score about 1-3 IQ points higher on average, but the effect is small and driven by family dynamics, not biology.",
    explanation: "Research does show a small but consistent IQ advantage for first-born children — typically 1-3 points compared to second-borns. A large Norwegian study of 250,000 men found the effect was about 2.3 points. However, this difference is driven by social dynamics within the family rather than biological birth order. First-borns receive undivided parental attention during their early years and often serve as tutors to younger siblings, reinforcing their own learning. When a second-born child is raised as effectively a first-born (due to a large age gap or the older sibling's absence), they show the same 'first-born' IQ advantage. The practical significance of 1-3 IQ points is negligible — it's detectable in large population studies but invisible in individual comparisons.",
    faqItems: [
      { question: "Are first-born children smarter?", answer: "First-borns score about 1-3 IQ points higher on average in large studies. However, this tiny difference is driven by family dynamics (more parental attention, tutoring siblings) rather than biology, and is too small to matter in practice." },
      { question: "Does birth order affect intelligence?", answer: "Slightly. First-borns average 1-3 IQ points higher than second-borns, with each subsequent child averaging slightly lower. But the effect is so small that it's undetectable at the individual level and irrelevant for predicting any person's actual intelligence." },
      { question: "Why do first-borns score slightly higher?", answer: "The leading theory is the 'confluence model': first-borns receive undivided parental attention during critical developmental years and later reinforce their own learning by teaching younger siblings. It's a social/environmental effect, not a biological one." },
    ],
  },
  {
    title: "Does IQ Determine Success?",
    slug: "does-iq-determine-success",
    myth: "Your IQ score determines how successful you'll be in life — high IQ means success, low IQ means failure.",
    reality: "IQ correlates with some outcomes but is far from deterministic. Personality, opportunity, and effort matter as much or more.",
    explanation: "IQ is the single best psychometric predictor of academic performance (correlation ~0.5) and job performance (correlation ~0.3-0.5), but these correlations leave enormous room for other factors. Above an IQ of approximately 115-120, the relationship between IQ and success weakens significantly — a phenomenon researchers call the 'threshold effect.' Beyond that point, personality traits (especially conscientiousness), social skills, emotional intelligence, creativity, and opportunity become stronger predictors. The Terman Study followed 1,500 gifted children (IQ 135+) throughout their lives and found wide variation in outcomes — some became leaders in their fields while others led unremarkable lives. Meanwhile, many spectacularly successful people have average or modestly above-average IQs. Richard Feynman, a Nobel Prize-winning physicist, reportedly had an IQ of 125 — gifted but not exceptionally so by physics standards.",
    faqItems: [
      { question: "Does IQ determine success in life?", answer: "IQ correlates with success but doesn't determine it. Above average IQ (~115+), personality traits like conscientiousness, social skills, and opportunity become much stronger predictors. Many highly successful people have average IQs, and many high-IQ individuals achieve modest outcomes." },
      { question: "What matters more than IQ for success?", answer: "Research identifies conscientiousness (discipline, reliability), emotional intelligence, grit (perseverance), social capital (networks and relationships), and opportunity as factors that often matter more than IQ for real-world success, especially above the average IQ range." },
      { question: "What is the IQ threshold for success?", answer: "Research suggests a threshold around IQ 115-120 — above this level, additional IQ points add diminishing returns for career and life success. Below this threshold, higher IQ provides meaningful advantages. This is sometimes called the 'threshold theory' of intelligence." },
    ],
  },
  {
    title: "Are Men Smarter Than Women?",
    slug: "iq-gender-differences",
    myth: "Men are smarter than women, or women are smarter than men.",
    reality: "Average IQ is identical between men and women. Men show slightly more variance (more at both extremes), but average ability is equal.",
    explanation: "Decades of research consistently show that average IQ scores are essentially identical between men and women. The difference in means is less than 1 point — statistically and practically zero. Where gender differences do appear is in the distribution: men show slightly higher variance, meaning there are somewhat more men at both the very high and very low extremes of the IQ distribution. Men tend to score slightly higher on spatial rotation tasks, while women tend to score slightly higher on verbal fluency and processing speed. These differences are small (typically 0.1-0.3 standard deviations), overlapping enormously between genders, and may be partially explained by socialization rather than biology. The claim that either gender is 'smarter' is not supported by evidence. Any observed differences in representation at the extremes reflect a combination of variance differences, socialization, and systemic factors.",
    faqItems: [
      { question: "Are men smarter than women?", answer: "No. Average IQ is essentially identical between men and women (less than 1 point difference). Men show slightly more score variance (more at both extremes), and small differences exist in specific subtests, but overall intelligence is equal between genders." },
      { question: "Why are there more male geniuses?", answer: "Men show slightly higher IQ variance, meaning more men at both the highest and lowest extremes. This statistical difference, combined with historical barriers to women's education and professional participation, explains most of the observed gender gap at the highest levels. The gap is closing as barriers diminish." },
      { question: "Do men and women have different types of intelligence?", answer: "Small average differences exist in specific cognitive domains: men slightly favor spatial rotation, women slightly favor verbal fluency and processing speed. But these differences are tiny compared to individual variation — the smartest women outscore the vast majority of men on spatial tasks and vice versa." },
    ],
  },
  {
    title: "Does Brain Size Determine IQ?",
    slug: "brain-size-and-iq",
    myth: "Bigger brains mean higher IQ — intelligence is simply a matter of brain size.",
    reality: "Brain size correlates weakly with IQ (~0.3), but neural efficiency, connectivity, and organization matter much more than raw volume.",
    explanation: "There is a real but modest correlation between brain size and IQ — approximately 0.24-0.33 in modern MRI studies. However, this means brain size accounts for only about 6-10% of the variation in IQ, leaving 90%+ unexplained. What matters far more than brain size is neural efficiency (how effectively neurons communicate), white matter integrity (the quality of connections between brain regions), cortical thickness in key areas, and the organization of neural networks. Einstein's brain was actually slightly smaller than average, but had an unusually large parietal lobe and more glial cells (support cells that aid neural communication). Women have smaller average brain sizes than men but identical average IQs, further demonstrating that efficiency matters more than volume. Among species, brain-to-body-size ratio predicts cognitive ability better than absolute brain size.",
    faqItems: [
      { question: "Does brain size affect IQ?", answer: "Weakly. Brain size correlates with IQ at about 0.3, meaning it accounts for roughly 6-10% of IQ variation. Neural efficiency, connectivity, and organization matter far more than raw brain volume. Einstein's brain was slightly smaller than average." },
      { question: "Did Einstein have a big brain?", answer: "No — Einstein's brain was slightly smaller than average (1,230 grams vs the male average of ~1,400 grams). However, his parietal lobe (involved in mathematical and spatial reasoning) was 15% wider than normal, and he had an unusually high density of glial cells supporting neural communication." },
      { question: "If brain size doesn't matter much, what does?", answer: "Neural efficiency (processing speed per neuron), white matter integrity (quality of connections), cortical thickness in frontal and parietal regions, and the overall organization of neural networks are stronger predictors of cognitive ability than brain volume." },
    ],
  },
  {
    title: "Does Reading Make You Smarter?",
    slug: "does-reading-make-you-smarter",
    myth: "Reading books significantly increases your IQ and makes you more intelligent.",
    reality: "Reading builds crystallized intelligence (vocabulary, knowledge) and may modestly improve fluid intelligence. It's one of the best cognitive activities but won't dramatically raise IQ.",
    explanation: "Reading is genuinely one of the best activities for cognitive development, but its effects on IQ are more nuanced than the simple claim suggests. Reading consistently builds crystallized intelligence — vocabulary, general knowledge, and verbal reasoning — which is directly measured by IQ tests. Studies show that children who read regularly score 5-10 points higher on verbal IQ subtests. For fluid intelligence (abstract reasoning), the evidence is weaker but still positive: complex reading material exercises working memory, attention, and analytical thinking. A study at Emory University found that reading fiction creates measurable changes in brain connectivity lasting days after reading. The key distinction: reading makes you more knowledgeable and verbally skilled (which shows up on IQ tests) rather than fundamentally increasing your raw processing power. But since IQ tests measure both crystallized and fluid intelligence, regular reading can genuinely improve your score, particularly on verbal subtests.",
    faqItems: [
      { question: "Does reading increase IQ?", answer: "Reading primarily builds crystallized intelligence (vocabulary, knowledge), which is measured by IQ tests. Regular readers score 5-10 points higher on verbal IQ subtests. Effects on fluid intelligence (abstract reasoning) are smaller but still positive." },
      { question: "What type of reading is best for intelligence?", answer: "Complex material that challenges your comprehension — literary fiction, science non-fiction, philosophy, and long-form journalism. Easy, repetitive reading (simple genre fiction, social media) provides less cognitive benefit. The key is reading material that stretches your current ability." },
      { question: "How much reading is needed to see IQ benefits?", answer: "Studies suggest 30+ minutes of daily reading produces measurable cognitive benefits. The effects are cumulative — lifelong readers show the strongest advantages. Even starting a reading habit in adulthood produces benefits, though the effects are strongest when reading begins in childhood." },
    ],
  },
  {
    title: "Is IQ Fixed at Birth?",
    slug: "is-iq-fixed-at-birth",
    myth: "Your IQ is completely determined by your genes and fixed at birth — it never changes.",
    reality: "IQ has a strong genetic component (50-80%) but is significantly influenced by environment, especially during childhood. IQ can change, particularly in youth.",
    explanation: "The nature vs. nurture debate about IQ is one of the most studied topics in psychology, and the answer is clear: it's both. Twin studies show that genetics account for approximately 50-80% of IQ variation in adults, with the genetic contribution increasing from childhood (about 40%) to adulthood (about 80%). However, this leaves 20-50% influenced by environment. The Flynn Effect — the 3-point-per-decade rise in IQ scores across populations — proves that environmental factors like nutrition, education, healthcare, and cultural complexity significantly impact cognitive development. A study from University College London tracked teenagers' IQ scores over 4 years and found individual changes of up to 20 points, with corresponding changes visible in brain structure on MRI scans. Adoption studies show that children moved from deprived to enriched environments gain 10-15 IQ points. The bottom line: your genes set a range of potential, but your environment determines where within that range you land.",
    faqItems: [
      { question: "Is IQ determined at birth?", answer: "Partially. Genetics set a range of potential (estimated 50-80% influence), but environment, nutrition, education, and enrichment determine where within that range a person scores. IQ is not fixed — it can change, especially during childhood and adolescence." },
      { question: "Can IQ change over a lifetime?", answer: "Yes. IQ scores can change by 10-20 points during childhood and adolescence. In adulthood, scores are more stable but can still shift by 3-10 points through lifestyle changes. The Flynn Effect proves that populations' IQ scores change over generations." },
      { question: "What percentage of IQ is genetic?", answer: "Approximately 50-80% of IQ variation is attributable to genetics in adults. In children, the genetic contribution is lower (~40%), with environment playing a larger role. This means environment matters most during the critical developmental years." },
    ],
  },
  {
    title: "Do Bilingual People Have Higher IQs?",
    slug: "bilingual-iq",
    myth: "Speaking two or more languages automatically means you have a higher IQ.",
    reality: "Bilingualism doesn't cause higher IQ, but it does enhance executive function, and bilinguals perform slightly better on certain cognitive tasks. The relationship is complex.",
    explanation: "The relationship between bilingualism and intelligence is more nuanced than either 'bilinguals are smarter' or 'language doesn't affect intelligence.' Research shows bilingual individuals perform better on tasks requiring executive function — inhibitory control, task switching, and working memory — skills that overlap with what IQ tests measure. A meta-analysis published in Psychological Bulletin found small but consistent advantages for bilinguals on non-verbal reasoning tasks. However, it's unclear whether bilingualism causes these advantages or whether people with higher cognitive ability are more likely to successfully learn a second language. What is clear: bilingualism delays dementia onset by approximately 4-5 years, suggesting lasting neuroprotective effects. The cognitive demands of constantly managing two language systems appear to strengthen neural networks involved in executive control. So while bilingualism may not 'increase IQ' in a simple sense, it does enhance specific cognitive skills and protect brain health long-term.",
    faqItems: [
      { question: "Do bilingual people have higher IQs?", answer: "Bilinguals show advantages in executive function (task switching, inhibitory control) but not necessarily higher overall IQ. The relationship is complex — higher cognitive ability may make language learning easier, and bilingualism may also enhance certain cognitive skills." },
      { question: "Does learning a language increase IQ?", answer: "Learning a new language exercises working memory, attention, and pattern recognition — skills measured by IQ tests. While dramatic IQ increases are unlikely, language learning is one of the best cognitive activities and may modestly improve performance on certain IQ subtests." },
      { question: "Does bilingualism prevent dementia?", answer: "Yes — research consistently shows bilingualism delays dementia onset by approximately 4-5 years. The constant cognitive exercise of managing two language systems strengthens neural networks and builds cognitive reserve that protects brain function in aging." },
    ],
  },
  {
    title: "Are Only Children Smarter?",
    slug: "only-child-iq",
    myth: "Only children are smarter than children with siblings because they get all the parental attention.",
    reality: "Only children score slightly higher on IQ tests on average (1-3 points), likely due to more parental resources and attention, but the difference is trivially small.",
    explanation: "Research does show that only children score about 1-3 IQ points higher than children with siblings on average. However, this tiny difference is driven by resource dilution theory — parents of one child can invest more time, money, and educational resources per child than parents of multiple children. It's not that being an only child makes you smarter; it's that having more resources directed at you gives a slight cognitive boost. The effect is comparable to birth order effects (first-borns also score slightly higher) and for the same reason — undivided parental attention during early development. Importantly, the 1-3 point advantage is so small that it's undetectable at the individual level. Many children with siblings score higher than many only children. The effect only appears in large population studies. Additionally, children with siblings may develop stronger social skills, emotional intelligence, and conflict resolution abilities — traits that IQ tests don't measure but that matter enormously for life success.",
    faqItems: [
      { question: "Are only children smarter?", answer: "Only children score about 1-3 IQ points higher on average in large studies. This tiny advantage is attributed to more parental resources and attention, not to any inherent cognitive difference. The effect is too small to matter at the individual level." },
      { question: "Does having siblings lower your IQ?", answer: "Very slightly, on average. Each additional sibling is associated with about a 1-point decrease in average IQ, likely due to diluted parental resources. But the effect is so small that it's irrelevant for any individual comparison." },
      { question: "Do only children have any disadvantages?", answer: "Only children may have less practice with social skills, conflict resolution, and sharing that naturally develop through sibling interactions. While they score marginally higher on IQ tests, they may score lower on measures of social competence and emotional resilience." },
    ],
  },
  {
    title: "Does IQ Decrease with Age?",
    slug: "does-iq-decrease-with-age",
    myth: "Your IQ steadily declines as you get older, meaning you become less intelligent with age.",
    reality: "Fluid intelligence (processing speed) declines gradually, but crystallized intelligence (knowledge, vocabulary) continues growing into your 60s. Overall cognitive ability remains relatively stable for most people until quite late in life.",
    explanation: "The relationship between age and intelligence is more nuanced than 'you get dumber as you age.' The key distinction is between fluid and crystallized intelligence. Fluid intelligence — raw processing speed, working memory, and novel problem-solving — does begin a gradual decline in the late 20s, losing about 1-2 points per decade. However, crystallized intelligence — accumulated knowledge, vocabulary, expertise, and wisdom — continues growing well into the 60s and sometimes beyond. Since most IQ tests measure both types, the net effect on total IQ score is relatively small until late in life. A 60-year-old may process information slightly more slowly than they did at 25, but their vastly greater knowledge base and judgment often more than compensate. Many professionals do their most impactful work in their 50s and 60s, leveraging decades of accumulated expertise. The takeaway: you don't become less intelligent with age; you become differently intelligent.",
    faqItems: [
      { question: "Does IQ decrease with age?", answer: "Partially. Fluid intelligence (processing speed, working memory) declines gradually starting in the late 20s. But crystallized intelligence (knowledge, vocabulary, expertise) continues growing into the 60s. Overall IQ remains relatively stable for most people until very old age." },
      { question: "At what age does IQ peak?", answer: "Different abilities peak at different ages. Processing speed peaks around 18-25. Working memory peaks around 25-30. Vocabulary and knowledge peak around 60-70. There is no single age when 'IQ' peaks because it's a composite of abilities that develop on different timelines." },
      { question: "How can I prevent cognitive decline?", answer: "Regular aerobic exercise (strongest evidence), continuous learning, social engagement, quality sleep, Mediterranean diet, and managing health conditions (hypertension, diabetes) all help maintain cognitive function. The brain retains neuroplasticity throughout life." },
    ],
  },
  {
    title: "Does Alcohol Kill Brain Cells?",
    slug: "does-alcohol-kill-brain-cells",
    myth: "Drinking alcohol kills brain cells and permanently lowers your IQ.",
    reality: "Moderate drinking doesn't kill brain cells directly, but heavy chronic drinking damages neural connections and can cause lasting cognitive impairment. The effect on IQ depends on the amount and duration of drinking.",
    explanation: "The popular claim that 'alcohol kills brain cells' is an oversimplification. Moderate alcohol consumption does not kill neurons directly. However, heavy and chronic drinking does cause significant damage: it disrupts neural connections (white matter), shrinks brain volume (particularly the hippocampus and prefrontal cortex), impairs neurogenesis (growth of new brain cells), and can cause Wernicke-Korsakoff syndrome — a devastating form of brain damage caused by alcohol-related thiamine deficiency. Research shows that heavy drinkers (4+ drinks per day) show measurable cognitive decline and reduced IQ over time. A 2022 study in Nature Communications found that even moderate drinking (1-2 drinks per day) was associated with reduced brain volume. Binge drinking is particularly harmful because it causes acute neurotoxicity. The good news: for people who stop drinking, significant cognitive recovery is possible. Brain imaging studies show measurable improvement in brain structure and function within months of sobriety, though some damage from years of heavy drinking may be permanent.",
    faqItems: [
      { question: "Does alcohol kill brain cells?", answer: "Not directly in moderate amounts. However, heavy chronic drinking damages neural connections, shrinks brain volume, and impairs cognitive function. Binge drinking causes acute neurotoxicity. The popular 'kills brain cells' claim is oversimplified but points to a real phenomenon." },
      { question: "Can drinking lower your IQ?", answer: "Heavy, chronic drinking can reduce effective cognitive function by several IQ points over time. A recent study found even moderate drinking (1-2 drinks/day) is associated with reduced brain volume. The effect is dose-dependent — more drinking means more cognitive impact." },
      { question: "Can the brain recover from alcohol damage?", answer: "Partially, yes. Brain imaging shows measurable recovery in structure and function within months of stopping heavy drinking. Cognitive performance improves significantly. However, some damage from years of heavy drinking may be permanent, particularly in older adults." },
    ],
  },
  {
    title: "Is IQ the Same as Intelligence?",
    slug: "is-iq-the-same-as-intelligence",
    myth: "IQ and intelligence are the same thing — your IQ score tells you exactly how intelligent you are.",
    reality: "IQ measures specific cognitive abilities (logical reasoning, pattern recognition, processing speed) but misses many important forms of intelligence including creativity, emotional intelligence, practical wisdom, and social skills.",
    explanation: "IQ tests measure a specific set of cognitive abilities: logical reasoning, pattern recognition, working memory, processing speed, and verbal comprehension. These are important cognitive skills, and IQ scores do predict academic and some career outcomes. However, human intelligence is far broader than what any test measures. Howard Gardner identified eight types of intelligence (linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, and naturalistic), of which IQ tests primarily assess only two or three. Robert Sternberg's triarchic theory adds practical intelligence (street smarts) and creative intelligence to the analytical intelligence that IQ tests measure. Emotional intelligence (EQ) — the ability to understand and manage emotions — is not captured by IQ but strongly predicts leadership effectiveness and relationship quality. Many of history's most impactful people had modest IQ scores but exceptional other forms of intelligence. Richard Feynman (125 IQ) won a Nobel Prize in physics. Many successful entrepreneurs have average IQs but extraordinary practical and social intelligence. The takeaway: IQ is one important dimension of a multidimensional phenomenon.",
    faqItems: [
      { question: "Is IQ the same as intelligence?", answer: "No. IQ measures specific cognitive abilities (reasoning, pattern recognition, processing speed) but doesn't capture creativity, emotional intelligence, practical wisdom, social skills, or many other forms of human capability. IQ is one dimension of a much broader phenomenon." },
      { question: "What types of intelligence do IQ tests miss?", answer: "IQ tests miss emotional intelligence (EQ), creative intelligence, practical intelligence (street smarts), musical intelligence, bodily-kinesthetic intelligence, interpersonal skills, and naturalistic intelligence. These are all legitimate cognitive abilities that matter for real-world success." },
      { question: "Can someone be intelligent but have a low IQ?", answer: "Yes. A person can have extraordinary musical talent, social intelligence, practical problem-solving ability, or creative genius while scoring average or below on an IQ test. IQ captures a specific type of analytical intelligence, not the full range of human cognitive ability." },
    ],
  },
  {
    title: "Does Marijuana Lower IQ?",
    slug: "does-marijuana-lower-iq",
    myth: "Using marijuana permanently lowers your IQ and makes you stupid.",
    reality: "Teen marijuana use may reduce IQ by 5-8 points, particularly with heavy use. Adult-onset use has minimal lasting effects on IQ. The key factor is age of first use — the developing adolescent brain is much more vulnerable.",
    explanation: "The landmark Dunedin study (2012) followed 1,000 New Zealanders from birth to age 38 and found that participants who began heavy marijuana use as teenagers showed an average IQ decline of 5-8 points by age 38, even after quitting. Critically, this effect was only observed in those who started using before age 18 — adult-onset users showed no significant IQ decline. This makes biological sense: the adolescent brain is still developing, particularly the prefrontal cortex (responsible for executive function), and cannabinoids can disrupt this development. However, subsequent studies have complicated the picture. A 2016 study of twin pairs found that shared family factors (genetics, environment) may explain much of the apparent IQ decline attributed to marijuana. The current scientific consensus is: heavy teen use probably does impair cognitive development, particularly executive function and processing speed; occasional adult use has minimal lasting cognitive effects; and any effects in adults are largely reversible after cessation.",
    faqItems: [
      { question: "Does marijuana lower IQ?", answer: "Heavy teen marijuana use (before age 18) may reduce IQ by 5-8 points. Adult-onset use has minimal lasting effects. The developing adolescent brain is particularly vulnerable to cannabinoid disruption. Occasional adult use does not appear to permanently affect IQ." },
      { question: "At what age is marijuana most harmful to the brain?", answer: "Before age 18, when the prefrontal cortex is still developing. Heavy use during adolescence is associated with reduced IQ, impaired executive function, and changes in brain structure. After age 25 (when brain development is complete), the risks are significantly lower." },
      { question: "Is marijuana IQ loss permanent?", answer: "For teens who used heavily and quit, some recovery is observed but may not be complete. For adults, cognitive effects of marijuana are largely reversible within weeks to months of cessation. The key variable is age of onset and duration of heavy use." },
    ],
  },
  {
    title: "Are Left-Handed People Smarter?",
    slug: "are-left-handed-people-smarter",
    myth: "Left-handed people are more intelligent and creative than right-handed people.",
    reality: "Left-handedness is weakly associated with slightly different cognitive profiles but not with higher overall IQ. The 'creative lefty' stereotype is largely a myth based on anecdotal examples.",
    explanation: "The idea that left-handed people are smarter is one of the most persistent IQ myths, partly because several famous geniuses (Einstein, da Vinci, Newton — though Einstein's handedness is debated) were reportedly left-handed. However, large-scale studies show the reality is more nuanced. A 2019 meta-analysis found no significant difference in overall IQ between left-handers and right-handers. Left-handers do show slightly different cognitive profiles: they may have a small advantage in spatial tasks and divergent thinking (generating multiple solutions to open-ended problems), but they also show slightly higher rates of certain learning difficulties like dyslexia. The 'creative lefty' stereotype likely persists because of confirmation bias — we remember the left-handed geniuses and forget the far larger number of left-handed people with average abilities. About 10% of the population is left-handed, which means that with 8 billion people on earth, there are about 800 million left-handers spanning the full range of cognitive ability.",
    faqItems: [
      { question: "Are left-handed people smarter?", answer: "No. Large studies show no significant difference in overall IQ between left-handers and right-handers. Left-handers may have slightly different cognitive profiles (small advantages in spatial tasks) but not higher general intelligence." },
      { question: "Why do people think lefties are smarter?", answer: "Confirmation bias — several famous geniuses (Einstein, da Vinci) are said to have been left-handed, creating the perception. But with 10% of the population being left-handed, there are hundreds of millions of left-handers across the full IQ range." },
      { question: "Do left-handers have different brains?", answer: "Slightly. Left-handers show different patterns of brain lateralization — their right hemisphere is often more involved in language processing. This may contribute to slightly different cognitive profiles but does not result in higher overall intelligence." },
    ],
  },
];

export function getMythBySlug(slug: string): IQMythInfo | undefined {
  return iqMythData.find((m) => m.slug === slug);
}

export const mythSlugs = iqMythData.map((m) => m.slug);
