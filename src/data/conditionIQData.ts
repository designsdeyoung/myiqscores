export interface ConditionIQInfo {
  name: string;
  slug: string;
  headline: string;
  metaDescription: string;
  overview: string;
  iqImpact: string;
  researchFindings: string;
  faqItems: { question: string; answer: string }[];
}

export const conditionIQData: ConditionIQInfo[] = [
  {
    name: "ADHD",
    slug: "adhd",
    headline: "ADHD and IQ: What the Research Shows",
    metaDescription:
      "Does ADHD affect IQ? Research shows ADHD does not lower intelligence, but it does impact how IQ tests are scored — especially processing speed and working memory.",
    overview:
      "ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental condition characterized by difficulties with sustained attention, impulse control, and, in some cases, hyperactivity. It affects approximately 5–8% of children and 2–5% of adults worldwide. ADHD is not an intellectual disability — people with ADHD span the full range of intelligence, from below-average to profoundly gifted. In fact, many of history's most creative and entrepreneurial minds are believed to have had ADHD, including entrepreneurs, artists, and inventors. The relationship between ADHD and IQ is complex: the condition can mask underlying intelligence on standardized tests while leaving core reasoning ability intact.",
    iqImpact:
      "ADHD directly affects two of the four major WISC/WAIS index scores: Processing Speed and Working Memory. These subtests require sustained focus, resistance to distraction, and rapid output under time pressure — all areas where ADHD creates measurable challenges. A person with ADHD may score 15–25 points lower on Processing Speed and Working Memory subtests than on Verbal Comprehension or Perceptual Reasoning, creating a highly uneven cognitive profile. This discrepancy — called a 'split profile' — is itself diagnostic of ADHD in many evaluations. Crucially, the Verbal Comprehension Index (vocabulary, reasoning, knowledge) is often completely unaffected, reflecting the person's true intellectual potential rather than the ADHD deficit.",
    researchFindings:
      "A 2019 meta-analysis in Psychological Medicine analyzing 34 studies found that individuals with ADHD scored on average 9 points lower on full-scale IQ than controls, but that this gap was largely explained by Processing Speed and Working Memory subtests rather than general reasoning. A landmark 2021 study in JAMA Psychiatry found that when IQ tests are adjusted for intra-individual variability (the scatter between subtests), the intelligence gap between ADHD and neurotypical individuals nearly disappears. Research from the MTA Cooperative Group found that effective ADHD treatment (medication plus behavioral therapy) improved performance on cognitive assessments, consistent with the view that ADHD suppresses rather than determines intellectual performance. Notably, studies consistently find higher-than-average rates of giftedness in ADHD populations, with the 'twice exceptional' (gifted + ADHD) profile estimated at 2–5% of gifted students.",
    faqItems: [
      {
        question: "Does ADHD lower your IQ?",
        answer:
          "ADHD does not lower your underlying IQ, but it can reduce your score on IQ tests. The condition most heavily impacts Processing Speed and Working Memory subtests — both of which require sustained focus and rapid output. Verbal reasoning and perceptual reasoning scores are often unaffected. Think of ADHD as interference on the channel, not a weaker signal — the underlying intelligence is intact, but the condition makes it harder to demonstrate on timed tests.",
      },
      {
        question: "Can someone with ADHD have a high IQ?",
        answer:
          "Absolutely. ADHD and high IQ frequently co-occur — this is called the 'twice exceptional' (2e) profile. Research suggests that gifted individuals may actually be somewhat more likely to have ADHD than the general population, possibly due to shared neurological traits like intense curiosity and hyperfocus. Many highly successful scientists, entrepreneurs, and artists have been diagnosed with ADHD, including Richard Branson, Justin Timberlake, and Olympic athletes.",
      },
      {
        question: "How does ADHD affect IQ test performance specifically?",
        answer:
          "On standardized IQ tests like the WISC-V or WAIS-IV, ADHD most noticeably impacts the Processing Speed Index (tasks requiring rapid, accurate symbol copying or scanning) and the Working Memory Index (holding information in mind while performing operations). A common pattern is a 15–25 point gap between these scores and Verbal Comprehension, creating a split profile that psychologists recognize as a hallmark of ADHD. This is why a full neuropsychological evaluation — not just a full-scale IQ score — is essential for accurate assessment.",
      },
    ],
  },
  {
    name: "Autism Spectrum Disorder",
    slug: "autism",
    headline: "Autism and IQ: Understanding the Full Spectrum",
    metaDescription:
      "Autism and IQ: most autistic people have average or above-average IQ. Learn how autism creates uneven cognitive profiles and what research really shows.",
    overview:
      "Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by differences in social communication, sensory processing, and pattern of interests or behaviors. It is called a 'spectrum' precisely because it encompasses an enormous range of cognitive profiles — from individuals with profound intellectual disabilities to those with exceptional intelligence. Historically, autism was mistakenly conflated with intellectual disability because early diagnostic criteria relied on populations with co-occurring intellectual disabilities. Modern epidemiological data paints a very different picture: approximately 44–50% of autistic people have average or above-average IQ scores, and about 3% score in the superior or gifted range. The relationship between autism and intelligence is one of the most complex and misunderstood in all of psychology.",
    iqImpact:
      "Autism characteristically produces an uneven or 'spiky' cognitive profile — significant strengths in some areas coexisting with significant weaknesses in others. Many autistic individuals show strong performance on Perceptual Reasoning (pattern recognition, spatial reasoning, non-verbal logic), Block Design, and Raven's Progressive Matrices. At the same time, they may score substantially lower on subtests requiring rapid social inference, verbal fluency under time pressure, or processing speed for social stimuli. Traditional IQ tests were not designed with autistic cognitive profiles in mind, and full-scale IQ scores can badly misrepresent autistic individuals' true abilities — sometimes by 30 or more points. Tests like the Raven's Matrices (non-verbal, no time pressure, pattern-based) tend to produce much higher scores for autistic individuals than verbal or speeded tests.",
    researchFindings:
      "A landmark 2007 study by Michelle Dawson et al. in Psychological Science found that autistic children and adults scored, on average, 30 percentile points higher on Raven's Progressive Matrices than on the Wechsler scales — a larger gap than in any other clinical population studied. A 2020 review in Autism Research confirmed that approximately 44% of autistic individuals have IQ scores in the average to above-average range (IQ 85+), challenging the long-held clinical assumption of widespread intellectual disability in autism. Research by Simon Baron-Cohen's group at Cambridge found that in areas requiring systemizing, pattern recognition, and technical reasoning, autistic individuals often outperform neurotypical peers. A 2022 study in Nature Neuroscience linked higher non-verbal IQ in autism to stronger local cortical connectivity — suggesting the autistic brain processes information in a fundamentally different, and in some domains superior, way.",
    faqItems: [
      {
        question: "Do autistic people have lower IQs?",
        answer:
          "This is a common misconception. While some autistic people do have co-occurring intellectual disabilities, the majority do not. Studies show approximately 44–50% of autistic individuals have average or above-average IQ scores, and a significant proportion score in the superior or gifted range. Early diagnostic criteria over-sampled autistic people with intellectual disabilities, creating a misleading picture that has persisted in public perception.",
      },
      {
        question: "What is the IQ range for autism?",
        answer:
          "Autistic people span the full range of human IQ — from profound intellectual disability to profoundly gifted. This is precisely why it's called a spectrum. Research suggests roughly: 25–30% have intellectual disability (IQ below 70), 25–30% have borderline to low-average IQ (70–85), and 40–50% have average to superior IQ (85+). The distribution varies significantly depending on the population studied and diagnostic criteria used.",
      },
      {
        question: "Why do autistic people sometimes score differently on different IQ tests?",
        answer:
          "Standard IQ tests like the Wechsler scales involve social interaction with an examiner, time pressure, and subtests that tap verbal fluency and processing speed — all areas where autism creates disadvantages that are unrelated to intelligence. Non-verbal tests like Raven's Progressive Matrices, which present abstract patterns with no time pressure and no social demands, tend to show much higher scores in autistic individuals. A landmark study found autistic people scored 30 percentile points higher on Raven's than Wechsler — meaning standard IQ tests can dramatically underestimate autistic intelligence.",
      },
    ],
  },
  {
    name: "Dyslexia",
    slug: "dyslexia",
    headline: "Dyslexia and IQ: Are They Related?",
    metaDescription:
      "Dyslexia does not indicate low IQ. Learn why people with dyslexia have average or above-average intelligence, and how dyslexia affects reading without affecting reasoning.",
    overview:
      "Dyslexia is a specific learning disability that primarily affects reading accuracy and fluency, rooted in difficulties with phonological processing — the ability to hear and manipulate the sound components of language. It is one of the most common learning disabilities, affecting an estimated 5–17% of the population across languages and cultures. Despite widespread misconception, dyslexia has nothing to do with intelligence. By definition, dyslexia is diagnosed in individuals who have normal or above-normal intelligence but whose reading ability falls significantly below what their IQ would predict. Many highly accomplished individuals have dyslexia, including entrepreneurs, scientists, artists, and world leaders. The relationship between dyslexia and IQ is not one of deficit but of discrepancy.",
    iqImpact:
      "On IQ tests, people with dyslexia typically score at or above average on non-verbal, perceptual, and reasoning subtests, but may perform below their potential on timed verbal tasks or tasks requiring rapid phonological retrieval. Processing Speed subtests — particularly Coding (copying symbols rapidly) — can be reduced due to fine motor and automaticity challenges associated with dyslexia. Some research suggests dyslexic individuals show enhanced strengths in global spatial processing, visual-spatial reasoning, and the ability to see patterns and connections between disparate ideas — sometimes called the 'dyslexic advantage.' Importantly, the full-scale IQ score of a person with dyslexia is essentially unaffected by the reading disability itself.",
    researchFindings:
      "Research by Matthew Schneps at Harvard found that individuals with dyslexia showed superior performance on tests of peripheral visual detection and identifying blurry images — suggesting enhanced global spatial processing as a trade-off for the local phonological processing differences. A 2019 review in Dyslexia journal confirmed that the cognitive profile of dyslexia is characterized by weak phonological processing with intact higher-order reasoning, creativity, and spatial ability. The British Dyslexia Association cites studies showing that dyslexic individuals are significantly over-represented in entrepreneurship, architecture, engineering, and the visual arts — fields that leverage strengths in big-picture thinking. A landmark longitudinal study by Shaywitz et al. followed children with dyslexia into adulthood and found IQ stability over time, confirming that dyslexia affects specific reading-related processes without diminishing general intelligence.",
    faqItems: [
      {
        question: "Does dyslexia mean you have a lower IQ?",
        answer:
          "No. Dyslexia is by definition a reading disability that occurs despite normal or above-average intelligence. A diagnosis of dyslexia requires that reading ability falls significantly below what the person's IQ would predict — meaning you cannot have dyslexia and low IQ together (that would be classified differently). Studies consistently show people with dyslexia have average to above-average IQ scores and often show specific cognitive strengths in spatial reasoning and pattern recognition.",
      },
      {
        question: "Are people with dyslexia more creative or better at spatial reasoning?",
        answer:
          "Research suggests that dyslexic individuals as a group show elevated performance on certain spatial and visual tasks. A Harvard study found superior peripheral visual processing. Studies of professional architects, engineers, and artists consistently find higher rates of dyslexia than in the general population. While not every person with dyslexia has these strengths, the pattern is robust enough that researchers like Thomas West ('In the Mind's Eye') argue that dyslexic cognitive profiles often include genuine intellectual advantages alongside reading difficulties.",
      },
      {
        question: "How is dyslexia diagnosed if IQ is normal?",
        answer:
          "Dyslexia is diagnosed through comprehensive psychoeducational evaluation that assesses both IQ (to establish cognitive baseline) and specific reading-related skills including phonological awareness, decoding, reading fluency, and spelling. The diagnosis is made when there is a significant discrepancy between the person's cognitive ability and their reading performance, after ruling out inadequate instruction, sensory impairment, or other explanations. A full IQ test is a standard part of the evaluation process.",
      },
    ],
  },
  {
    name: "Depression",
    slug: "depression",
    headline: "Depression and IQ: How Mental Health Affects Cognitive Testing",
    metaDescription:
      "Depression can reduce IQ test scores by 5–15 points through slowed processing and impaired memory. Learn how treating depression can restore cognitive performance.",
    overview:
      "Depression — formally Major Depressive Disorder — is a mood disorder characterized by persistent sadness, loss of interest, fatigue, cognitive slowing, and in severe cases, hopelessness or suicidal ideation. It affects approximately 280 million people worldwide and is one of the leading causes of disability. Depression has profound effects on cognition that go beyond mood — it impairs memory, concentration, processing speed, and decision-making in measurable ways that directly affect IQ test performance. Crucially, these cognitive effects are typically reversible with effective treatment. The relationship between depression and measured IQ is one of state-dependent performance: the underlying intellectual capacity is intact, but the active illness creates what researchers call 'pseudodementia' — a reversible cognitive impairment that mimics intellectual decline.",
    iqImpact:
      "Depression impairs IQ test performance primarily through three mechanisms: slowed processing speed (psychomotor retardation reduces performance on timed subtests), impaired working memory (depression disrupts the prefrontal-hippocampal circuits that support working memory, reducing Digit Span and Letter-Number Sequencing scores), and reduced executive function (planning, cognitive flexibility, and verbal fluency are all compromised during depressive episodes). Studies consistently show reductions of 5–15 points on full-scale IQ during active depression, with the largest impacts on Processing Speed and Working Memory indices. Verbal Comprehension and crystallized knowledge tend to be relatively preserved, as these draw on long-term memory rather than active processing. Severe depression can produce cognitive impairment approaching 20 IQ points during acute episodes.",
    researchFindings:
      "A 2020 meta-analysis in Psychological Medicine examined 24 studies and confirmed that active depression is associated with significant impairment across multiple cognitive domains, with the largest effects on processing speed (Cohen's d = 0.55) and executive function (d = 0.49). A longitudinal study in JAMA Psychiatry found that successful antidepressant treatment restored cognitive performance to near-normal levels within 8–12 weeks, confirming the state-dependent nature of depressive cognitive impairment. Research from the STAR*D trial — the largest depression treatment study ever conducted — found that patients in remission showed significant improvements in cognitive function compared to their performance during acute depression, though subtle deficits sometimes persisted. A 2022 study in The Lancet Psychiatry found that inflammatory biomarkers associated with depression predicted cognitive impairment severity, suggesting a biological mechanism linking depression's neural inflammation to measurable IQ test performance reduction.",
    faqItems: [
      {
        question: "Does depression permanently lower your IQ?",
        answer:
          "For most people, no. Depression causes reversible cognitive impairment that improves with effective treatment. Studies show that patients in depression remission recover most of the cognitive function lost during acute episodes. However, in cases of repeated, severe, or long-untreated depressive episodes, some research suggests subtle long-term cognitive effects may persist — particularly in memory and processing speed. This underscores the importance of early and effective treatment.",
      },
      {
        question: "Why does depression make you feel less intelligent?",
        answer:
          "Depression impairs the brain circuits most critical for efficient thinking: the prefrontal cortex (executive function, decision-making), the hippocampus (memory formation and retrieval), and the connections between them. This produces concrete, measurable deficits in working memory, processing speed, verbal fluency, and concentration. The subjective experience of feeling 'foggy' or 'dumb' during depression accurately reflects real neurobiological impairment — not a fixed change in intelligence.",
      },
      {
        question: "Can a high-IQ person develop depression?",
        answer:
          "Yes, and research suggests highly intelligent people may actually have elevated rates of depression and anxiety, a phenomenon sometimes called the 'intelligence curse.' A 2018 study found Mensa members (IQ 132+) reported significantly higher rates of mood disorders than the general population. Possible explanations include overthinking tendencies, heightened sensitivity to injustice and suffering, and difficulty finding intellectually stimulating environments. Intelligence does not protect against mental illness.",
      },
    ],
  },
  {
    name: "Anxiety Disorders",
    slug: "anxiety",
    headline: "Anxiety and IQ: How Anxiety Affects Intelligence Test Scores",
    metaDescription:
      "Anxiety can reduce IQ test scores, especially under timed conditions. Learn how test anxiety, working memory interference, and stress hormones affect measured intelligence.",
    overview:
      "Anxiety disorders — including Generalized Anxiety Disorder (GAD), Social Anxiety Disorder, Panic Disorder, and OCD — are the most common class of mental health conditions, affecting approximately 18% of adults in the United States alone. Anxiety involves excessive fear, worry, and physiological arousal that interferes with daily functioning. Cognitive science has clearly established that anxiety interferes with optimal cognitive performance, particularly on tasks requiring working memory, executive function, and performance under pressure. The mechanisms are well understood: elevated cortisol and adrenaline, attentional hijacking by threat-related stimuli, and the deployment of cognitive resources toward monitoring for danger — all of which reduce the resources available for problem-solving. This makes IQ testing one of the most anxiety-prone environments imaginable for people with anxiety disorders.",
    iqImpact:
      "Anxiety primarily impairs IQ test performance through working memory interference — anxious individuals use a significant portion of their working memory capacity to monitor for threats, ruminate about performance, and process physiological anxiety signals, leaving less capacity for the actual test questions. This effect is strongest on Working Memory subtests (Digit Span, Letter-Number Sequencing) and Processing Speed subtests performed under time pressure. Research shows that the performance gap between anxious and non-anxious individuals is largest on the most difficult items — where working memory demand is highest — and smallest on easy items where cognitive load is low. Social anxiety additionally impairs performance in one-on-one testing with an examiner. Test anxiety specifically, even in non-anxious individuals, can reduce IQ scores by 10–15 points compared to performance in low-stakes conditions.",
    researchFindings:
      "A foundational study by Michael Eysenck's Attentional Control Theory demonstrated that anxiety impairs the efficiency of working memory through intrusive thought monitoring, with the effect proportional to anxiety severity. A 2021 meta-analysis in Clinical Psychology Review found that anxiety disorders were associated with working memory impairments equivalent to 0.5–0.7 standard deviations — roughly 7–10 IQ points — with the largest effects in high-demand cognitive tasks. Research by Sian Beilock (now president of Dartmouth College) showed that high-working-memory individuals — typically the highest performers — suffer the most from test anxiety because they have more 'cognitive horsepower' available to be hijacked by worry. A 2019 study in Psychological Science found that students with high math anxiety showed processing speed and accuracy reductions equivalent to significant IQ decreases on timed mathematics assessments, with performance recovering substantially in untimed conditions.",
    faqItems: [
      {
        question: "Can anxiety make you score lower on an IQ test?",
        answer:
          "Yes, significantly. Research consistently shows that anxiety reduces performance on IQ tests, particularly on timed Working Memory and Processing Speed subtests. The mechanism is well-established: anxiety hijacks working memory resources for threat monitoring, leaving less capacity for problem-solving. The effect can be 7–15 IQ points in people with moderate-to-severe anxiety disorders. This means IQ test scores obtained during acute anxiety may substantially underestimate a person's true cognitive ability.",
      },
      {
        question: "Does high intelligence protect against anxiety?",
        answer:
          "Research suggests the opposite may be true. Highly intelligent people appear to experience anxiety at higher rates, possibly because they can anticipate more possible negative outcomes, engage in more extensive rumination, and are more sensitive to complexity and contradiction. A 2016 study found that high verbal IQ was associated with both more adaptive and more maladaptive worry — suggesting intelligence amplifies the anxiety tendency rather than buffering it.",
      },
      {
        question: "What's the difference between test anxiety and an anxiety disorder?",
        answer:
          "Test anxiety is a situational fear specifically triggered by evaluative settings like exams or IQ tests. Anxiety disorders involve pervasive, chronic anxiety that extends across situations and significantly impairs daily functioning. Both can reduce IQ test performance, but anxiety disorders typically cause broader and more consistent cognitive impairment. Test anxiety is extremely common (estimated to affect 25–40% of students) and represents the single largest source of bias in standardized cognitive assessment.",
      },
    ],
  },
  {
    name: "Schizophrenia",
    slug: "schizophrenia",
    headline: "Schizophrenia and IQ: What Research Shows",
    metaDescription:
      "Schizophrenia is associated with average IQ scores that decline after onset. Learn what research shows about cognition, the premorbid IQ, and cognitive treatment.",
    overview:
      "Schizophrenia is a serious mental illness characterized by psychosis (hallucinations, delusions, disorganized thinking), negative symptoms (flat affect, social withdrawal, reduced motivation), and cognitive impairments. It affects approximately 1% of the global population. One of the most striking and consistent findings in schizophrenia research is that the illness is associated with measurable cognitive impairment — including IQ reduction — that appears to begin before the first psychotic episode and worsens with illness onset. However, this is a relative decline from a premorbid baseline, not a fixed intellectual limitation. The relationship between schizophrenia and IQ is one of the most extensively studied in psychiatry, partly because cognitive impairment — not psychosis — is the primary predictor of functional outcomes in schizophrenia.",
    iqImpact:
      "Schizophrenia is associated with broad cognitive impairment across multiple domains assessed by IQ tests: verbal learning and memory, working memory, processing speed, attention, and executive function are all significantly impaired. The average full-scale IQ in schizophrenia populations is approximately 85–90 — about 10–15 points below population average — but this represents a decline from premorbid levels, not a lifelong fixed trait. Studies comparing pre-illness cognitive records (military assessments, school grades, childhood IQ tests) with post-onset scores consistently find a drop of approximately 10–15 IQ points around the time of first psychotic episode. Processing Speed and Working Memory are the most severely affected index scores. Crucially, Verbal Comprehension and crystallized knowledge show less decline, reflecting the preservation of knowledge acquired before illness onset.",
    researchFindings:
      "A landmark meta-analysis by Heinrichs and Zakzanis (1998) examining 204 studies established that cognitive impairment in schizophrenia is broad, consistent across studies, and clinically significant — with a mean effect size of 1 standard deviation below population norms on most cognitive measures. The Copenhagen High-Risk Study tracked children with schizophrenic parents from childhood through illness onset and found measurable cognitive differences predating psychosis by decades, supporting a neurodevelopmental model. A 2020 study in JAMA Psychiatry found that pre-illness IQ (assessed from school records and military testing) was significantly higher than post-onset IQ across a large registry, with the largest drops occurring in the two years surrounding first hospitalization. Cognitive remediation therapy — structured training targeting working memory, attention, and processing speed — has shown effect sizes of 0.4–0.5 in clinical trials, suggesting meaningful but modest cognitive recovery is achievable.",
    faqItems: [
      {
        question: "Do people with schizophrenia have low IQs?",
        answer:
          "The average IQ in people with schizophrenia is approximately 85–90, compared to the population average of 100. However, this represents a decline from premorbid levels — research shows that people with schizophrenia had higher IQ scores before illness onset. Schizophrenia affects people across the full range of intelligence, and the cognitive impairment associated with the illness is better understood as a symptom than a fixed intellectual characteristic.",
      },
      {
        question: "Can schizophrenia medication improve IQ?",
        answer:
          "Antipsychotic medications primarily target positive symptoms (hallucinations, delusions) rather than cognitive symptoms. Some second-generation antipsychotics (like clozapine) show modest cognitive benefits, but overall medication effects on IQ are limited. Cognitive remediation therapy — structured brain training targeting attention, working memory, and reasoning — shows more consistent and meaningful improvements in cognitive function, with effects that translate to better functional outcomes in daily life.",
      },
      {
        question: "Is there a link between high IQ and schizophrenia risk?",
        answer:
          "Interestingly, research shows a U-shaped relationship — both very low and very high premorbid IQ are associated with slightly elevated schizophrenia risk. A large Swedish military study found that men scoring in the lowest cognitive quartile had 3.5 times the schizophrenia risk, but those in the highest IQ range also had somewhat elevated risk. The genes associated with creative and analytical thinking may partially overlap with genetic risk for psychotic disorders — a finding that has spurred research into the biology of creative and divergent thinking.",
      },
    ],
  },
  {
    name: "Bipolar Disorder",
    slug: "bipolar-disorder",
    headline: "Bipolar Disorder and IQ: The Surprising Connection",
    metaDescription:
      "Bipolar disorder is linked to above-average IQ in some studies. Explore the surprising research on creativity, cognitive profiles, and intelligence in bipolar disorder.",
    overview:
      "Bipolar Disorder is a mood disorder characterized by episodes of mania or hypomania (elevated mood, decreased need for sleep, increased energy and risk-taking) alternating with episodes of depression. It affects approximately 2.4% of the global population and is associated with significant functional impairment. Unlike schizophrenia — where cognitive impairment is a consistent finding — the relationship between bipolar disorder and IQ is more nuanced and, in some respects, surprising. While acute mood episodes produce measurable cognitive impairment, euthymic (mood-stable) individuals with bipolar disorder often show average to above-average cognitive function. Several population-level studies have found that bipolar disorder is overrepresented among highly educated and high-IQ populations — fueling the long-standing cultural association between bipolar disorder and creative genius.",
    iqImpact:
      "Cognitive effects in bipolar disorder are highly state-dependent. During manic episodes: accelerated processing speed can produce temporarily elevated performance on some timed tasks, but working memory and executive function are impaired, and judgment is severely compromised. During depressive episodes: processing speed, working memory, executive function, and attention are all impaired, similar to unipolar depression. During euthymia (mood stability): most cognitive deficits remit, though subtle impairments in verbal learning and executive function often persist. Research shows that the number of lifetime mood episodes predicts the degree of residual cognitive impairment — suggesting cumulative illness burden affects the brain over time. Verbal intelligence and crystallized knowledge tend to be well-preserved throughout the illness course.",
    researchFindings:
      "A landmark 2010 study in the British Journal of Psychiatry analyzed Swedish military IQ test data from over 700,000 men and found that those who later developed bipolar disorder had significantly higher childhood IQ scores than the general population, particularly in verbal reasoning. A 2012 study published in PNAS found that genetic variants associated with bipolar disorder and schizophrenia were also associated with superior cognitive performance in the general population — suggesting a genetic 'tradeoff.' Research by Kay Redfield Jamison (herself diagnosed with bipolar disorder) documented dramatically elevated rates of bipolar disorder among award-winning poets and writers, supporting the creativity-bipolar connection. A 2021 meta-analysis in Psychological Medicine confirmed that euthymic bipolar patients show deficits of about 0.4–0.5 standard deviations on processing speed and verbal learning tasks, but performance closer to normal on reasoning measures.",
    faqItems: [
      {
        question: "Are people with bipolar disorder smarter than average?",
        answer:
          "Some large population studies find that bipolar disorder is somewhat more common in individuals with higher premorbid IQ, particularly high verbal IQ. A Swedish study of over 700,000 people found significantly higher childhood IQ scores in those who later developed bipolar disorder. However, this is a population-level statistical association — not every person with bipolar disorder has high IQ, and not every high-IQ person is at risk for bipolar disorder. The finding likely reflects complex genetic overlaps rather than a simple intelligence-bipolar link.",
      },
      {
        question: "How does bipolar disorder affect cognitive function?",
        answer:
          "Cognitive effects depend heavily on mood state. During manic episodes, processing speed may be elevated but working memory and judgment are impaired. During depression, processing speed, memory, and executive function are all reduced. In euthymia (mood stability), most people with bipolar disorder perform near the average range, though subtle deficits in verbal learning and executive function often persist. The cognitive impact of bipolar disorder generally worsens with more lifetime mood episodes, making consistent treatment particularly important.",
      },
      {
        question: "Is there really a link between bipolar disorder and creativity?",
        answer:
          "The research supports a real, though complex, association. Studies of eminent writers, poets, composers, and artists consistently show higher-than-expected rates of bipolar disorder and related mood conditions. Shared genetic factors between mood disorders and creative achievement have been identified in population genetics studies. However, it's important to distinguish between the hyomanic personality traits (openness, energy, associative thinking) that may enhance creativity and the full disorder, which causes significant suffering and impairment. Bipolar disorder is not necessary for creativity, and creativity does not require bipolar disorder.",
      },
    ],
  },
  {
    name: "Down Syndrome",
    slug: "down-syndrome",
    headline: "Down Syndrome and IQ: Understanding Cognitive Profiles",
    metaDescription:
      "Down syndrome affects IQ, typically in the mild-to-moderate range. Learn about the wide variation in abilities, strengths in social cognition, and what research shows.",
    overview:
      "Down syndrome (Trisomy 21) is a chromosomal condition caused by the presence of an extra copy of chromosome 21, occurring in approximately 1 in 700 live births. It is the most common chromosomal cause of intellectual disability. Down syndrome affects cognitive development across a wide spectrum — some individuals with Down syndrome live semi-independently, hold jobs, and maintain rich social relationships, while others require substantial daily support. The intellectual profile associated with Down syndrome has distinct characteristics: relative strengths in social cognition, visual learning, and long-term memory, alongside greater challenges with auditory processing, verbal working memory, and language production. Understanding these patterns helps educators and caregivers provide targeted support that maximizes individual potential.",
    iqImpact:
      "IQ scores in individuals with Down syndrome typically fall in the mild to moderate intellectual disability range (IQ 40–70), with a mean around 50–55, though the range extends from severe disability (below 40) to borderline intellectual functioning (70–75) in some individuals. The intellectual profile is characteristically uneven: visual-spatial processing and facial recognition are relative strengths, while auditory sequential processing, verbal working memory, and expressive language are areas of significant challenge. On WISC assessments, the Perceptual Reasoning Index tends to be higher than the Verbal Comprehension Index. It is critical to recognize that IQ scores provide a statistical summary that does not capture the full range of an individual's capabilities, adaptive behaviors, or quality of life. Early intervention — particularly in language and early childhood education — significantly impacts developmental trajectories.",
    researchFindings:
      "A 2018 systematic review in the Journal of Intellectual Disability Research confirmed that IQ in Down syndrome follows a roughly normal distribution centered around 50–55, with greater variability than in typical populations. Research by Sue Buckley's group showed that early reading instruction can dramatically improve language and cognitive outcomes for children with Down syndrome, with some children achieving reading levels that far exceed predictions based on IQ alone. A longitudinal study by Pennington et al. found that processing speed is a particularly strong predictor of adaptive outcomes in Down syndrome, more so than full-scale IQ. The Down Syndrome Cognition Project (ongoing) is investigating the genetic mechanisms by which individuals with Down syndrome show considerably more cognitive variability than chromosomal models would predict, suggesting modifier genes play a crucial role.",
    faqItems: [
      {
        question: "What is the average IQ for someone with Down syndrome?",
        answer:
          "The average IQ in Down syndrome is approximately 50–55, placing most individuals in the mild to moderate intellectual disability range. However, there is significant variation — some individuals with Down syndrome score below 40 (severe range), while others score above 70 (borderline range). IQ scores alone provide an incomplete picture; adaptive functioning, social cognition, and real-world abilities are equally important for understanding what an individual with Down syndrome can achieve.",
      },
      {
        question: "Can people with Down syndrome live independently?",
        answer:
          "Many people with Down syndrome achieve significant independence, particularly with appropriate education and support. Adults with Down syndrome commonly live in supported housing, hold employment, have romantic relationships, and participate fully in community life. The degree of independence varies widely based on individual cognitive profiles, the quality of early intervention and education, family support, and available community resources. IQ alone is a poor predictor of life quality or independence in Down syndrome.",
      },
      {
        question: "How does early intervention affect cognitive development in Down syndrome?",
        answer:
          "Early intervention has a substantial positive impact. Research consistently shows that children with Down syndrome who receive high-quality early childhood education, speech-language therapy, and structured reading instruction achieve significantly better cognitive and adaptive outcomes than those without such support. Studies by the Down Syndrome Educational Trust show that early reading instruction — even before age 3 — measurably improves language, memory, and cognitive function. The brain is most plastic in early childhood, making this period particularly critical for Down syndrome.",
      },
    ],
  },
  {
    name: "Giftedness",
    slug: "gifted",
    headline: "What IQ Score Qualifies as Gifted? A Complete Guide",
    metaDescription:
      "What IQ score is considered gifted? Learn about the thresholds, the different tiers of giftedness, and what research shows about high-IQ individuals' lives and outcomes.",
    overview:
      "Giftedness refers to exceptional intellectual ability that significantly exceeds age-group norms. While the term lacks a single universal definition, the most widely used threshold is IQ 130 or above, representing the top 2.1% of the population. Many schools and gifted programs use 125 (top 5%) or 120 (top 9%) as practical thresholds. Some researchers distinguish between 'mildly gifted' (IQ 120–130), 'moderately gifted' (130–145), 'highly gifted' (145–160), and 'profoundly gifted' (160+) — a distinction with important practical implications, as the educational and social needs of a child with IQ 135 differ dramatically from those of a child with IQ 160. Giftedness is far more complex than a single test score: it involves cognitive, emotional, and motivational characteristics that interact to produce exceptional achievement — or, in the absence of appropriate support, profound underachievement.",
    iqImpact:
      "Gifted individuals show distinctive profiles on IQ tests: extremely high scores across reasoning domains, often accompanied by remarkable score consistency across subtests (the opposite of ADHD's split profile). However, gifted children often present a fascinating paradox known as 'asynchronous development' — their intellectual capabilities far outpace their emotional, social, and physical development, leading to complex educational and psychological needs. Profoundly gifted individuals (IQ 160+) are so cognitively distant from age-peers that social integration is particularly challenging. They may appear to have 'problems' — refusing to complete repetitive work, intense interest in narrow topics, social difficulties — that are actually artifacts of the mismatch between their abilities and their environment rather than intrinsic deficits. Twice-exceptional (gifted + learning disability or ADHD) individuals may have high IQ obscured by performance deficits, or vice versa.",
    researchFindings:
      "The longest-running longitudinal study of giftedness — Lewis Terman's Genetic Studies of Genius, begun in 1921 — tracked over 1,500 California children with IQ above 135 throughout their lives and found significantly higher rates of professional achievement, health, and longevity than matched comparison groups. The Study of Mathematically Precocious Youth (SMPY) — now over 45 years old — identified students in the top 1% of mathematical reasoning ability at age 13 and found extraordinary adult achievement rates: 25% earned PhDs, 60% held graduate degrees, and they produced patents and publications at rates far exceeding predictions. A 2020 study in Psychological Science found that IQ differences within the top 1% remain highly predictive of real-world outcomes — an IQ of 160 predicts significantly higher achievement than an IQ of 130, even though both are 'gifted.' Research by Linda Silverman has extensively documented the social-emotional characteristics of gifted individuals, including heightened sensitivity, overexcitabilities, and the 'impostor syndrome' that is paradoxically common in highly gifted adults.",
    faqItems: [
      {
        question: "What IQ score is considered gifted?",
        answer:
          "The most commonly used threshold is IQ 130 or above, representing the top 2% of the population. This is the cutoff used by most gifted education programs and by organizations like Mensa. However, many programs use 125 (top 5%) or even 120 (top 9%) as practical cutoffs. Some researchers and clinicians distinguish multiple tiers: mildly gifted (120–130), moderately gifted (130–145), highly gifted (145–160), and profoundly gifted (160+), each with distinct characteristics and needs.",
      },
      {
        question: "Do gifted people have more mental health problems?",
        answer:
          "Research shows a mixed picture. Gifted individuals show higher rates of certain conditions — particularly anxiety, perfectionism, and what psychologist Kazimierz Dabrowski called 'overexcitabilities' (heightened sensitivity and intensity in emotional, intellectual, sensory, and psychomotor domains). A 2018 Mensa survey found significantly elevated rates of mood and anxiety disorders among members. However, many gifted individuals show exceptional resilience and wellbeing. The key predictors of good outcomes are appropriate intellectual challenge, social connection with intellectual peers, and supportive environments that honor the gifted child's complexity.",
      },
      {
        question: "Can giftedness go undetected?",
        answer:
          "Yes, commonly. Several groups are particularly likely to be overlooked: twice-exceptional children (gifted + learning disability), where the two factors mask each other; girls, who are socialized to downplay intellectual ability and are traditionally identified for gifted programs at lower rates than boys; children from low-income backgrounds, who may score lower due to reduced educational opportunity rather than lower intellectual potential; and highly creative children, whose divergent thinking may be interpreted as disruptive rather than gifted. Research suggests that gifted identification systems miss a substantial portion of intellectually exceptional children.",
      },
    ],
  },
  {
    name: "Intellectual Disability",
    slug: "intellectual-disability",
    headline: "Intellectual Disability and IQ: Diagnosis, Support, and Outcomes",
    metaDescription:
      "Intellectual disability is defined by IQ below 70 plus adaptive functioning deficits. Learn about causes, severity levels, support approaches, and what outcomes research shows.",
    overview:
      "Intellectual Disability (ID), formerly known as mental retardation, is characterized by significant limitations in both intellectual functioning and adaptive behavior, originating before age 18. By definition, it involves an IQ score below approximately 70 (two standard deviations below the population mean of 100) combined with deficits in adaptive behaviors — the practical skills needed for daily life, communication, and social participation. ID affects approximately 1–3% of the global population and has many causes, including genetic conditions (Down syndrome, Fragile X syndrome), prenatal factors (alcohol exposure, infection), perinatal events (oxygen deprivation), and environmental factors (severe early deprivation, lead exposure). The vast majority of people with ID — approximately 85% — fall in the mild range (IQ 55–70) and with appropriate support can achieve significant independence and a good quality of life.",
    iqImpact:
      "By definition, intellectual disability is identified partly through IQ assessment, but IQ score alone is insufficient for diagnosis — adaptive functioning must also be significantly impaired. The American Association on Intellectual and Developmental Disabilities (AAIDD) defines ID severity based on needed support levels rather than IQ ranges alone. Roughly: mild ID (IQ 55–70, ~85% of cases) — can develop academic skills to approximately 6th grade level and often live and work in the community with moderate support; moderate ID (IQ 40–55, ~10% of cases) — can develop communication skills and perform simple tasks with regular supervision; severe ID (IQ 25–40, ~4% of cases) — requires extensive daily support; profound ID (IQ below 25, ~1–2% of cases) — requires pervasive support for all daily activities. These categories are statistical summaries, not destiny — individuals frequently exceed expectations with appropriate support.",
    researchFindings:
      "Research consistently shows that the IQ cutoff of 70 is a statistical convention, not a biological cliff — the difference between a person scoring 68 and one scoring 72 is trivial, yet the diagnostic category differs. A landmark 2010 review in the American Journal on Intellectual and Developmental Disabilities emphasized that support needs — not IQ numbers — should drive intervention planning. Studies of supported employment programs show that adults with mild to moderate ID who receive appropriate job coaching achieve employment rates of 60–80% and report high job satisfaction. A 2019 longitudinal study found that adults with mild intellectual disability who had attended inclusive education settings showed significantly better adaptive outcomes at age 30 than those from segregated settings. Research on Fragile X syndrome — the most common inherited cause of ID — has led to candidate treatments targeting the mGluR5 pathway, raising hope that some forms of genetic intellectual disability may become partially treatable.",
    faqItems: [
      {
        question: "What IQ score defines intellectual disability?",
        answer:
          "Intellectual disability is typically defined as an IQ score of approximately 70 or below — two standard deviations below the population mean — combined with significant deficits in adaptive functioning. The IQ cutoff alone is not sufficient for diagnosis; adaptive behavior (communication, self-care, social skills, practical daily living) must also be significantly impaired. The cutoff is a clinical convention with a measurement standard error of ±5 points, meaning a score of 72 or 73 may warrant evaluation if adaptive functioning is significantly limited.",
      },
      {
        question: "Can someone with an intellectual disability live independently?",
        answer:
          "Many people with mild intellectual disability live semi-independently or fully independently with appropriate support. They hold jobs, form romantic relationships, raise families, and participate meaningfully in community life. People with moderate intellectual disability typically require more consistent support but can often live in supported residential settings, work in structured environments, and enjoy full social lives. Independence is not determined solely by IQ — access to education, support systems, employment opportunities, and the wider social environment are equally important.",
      },
      {
        question: "What is the difference between intellectual disability and learning disability?",
        answer:
          "These are distinct diagnoses. Intellectual disability involves global cognitive limitations (IQ below 70) affecting all areas of learning and adaptive functioning. A learning disability (like dyslexia or dyscalculia) is a specific, circumscribed deficit in a particular academic domain despite normal overall intelligence. A person with dyslexia may have an IQ of 130 and struggle only with reading; a person with intellectual disability shows broad limitations across cognitive domains. Crucially, people with learning disabilities do not have intellectual disability — they have normal or above-average general intelligence.",
      },
    ],
  },
  {
    name: "Traumatic Brain Injury",
    slug: "traumatic-brain-injury",
    headline: "Traumatic Brain Injury and IQ: How TBI Affects Cognitive Function",
    metaDescription:
      "Traumatic brain injury can reduce IQ by 10–30+ points depending on severity. Learn how TBI affects different cognitive domains and what recovery research shows.",
    overview:
      "Traumatic Brain Injury (TBI) results from external mechanical force to the brain — including falls, vehicle accidents, sports injuries, and blast exposure. It ranges from mild concussion (brief confusion, no loss of consciousness) to severe TBI (extended unconsciousness, structural brain damage). TBI is one of the leading causes of acquired cognitive disability worldwide, affecting an estimated 69 million people annually. The cognitive consequences of TBI vary enormously based on injury severity, location, age at injury, and pre-injury cognitive reserve. Mild TBI (concussion) typically produces temporary cognitive effects that resolve within days to weeks. Moderate to severe TBI can produce lasting and sometimes permanent cognitive deficits that directly affect measured IQ and real-world functioning. Sports concussion research — particularly in contact sports — has dramatically increased public awareness of TBI's cognitive consequences over the past decade.",
    iqImpact:
      "TBI affects IQ through multiple mechanisms depending on injury characteristics. Focal injuries (to specific brain regions) produce specific deficits: frontal lobe damage primarily affects executive function and Processing Speed; temporal lobe damage impairs memory and language; parietal damage affects spatial reasoning. Diffuse axonal injury — the most common mechanism in acceleration-deceleration injuries — broadly impairs information processing speed throughout the brain, making Processing Speed the most reliably affected IQ subtest after TBI of any mechanism. Working Memory is typically second most affected. In severe TBI, full-scale IQ reductions of 20–40 points below estimated premorbid levels are documented. The IQ profile after TBI is characterized by preserved crystallized knowledge (vocabulary, factual memory stored before injury) with impaired fluid processing — the opposite pattern from normal aging.",
    researchFindings:
      "A large meta-analysis in Neuropsychology Review found that severe TBI is associated with full-scale IQ reductions averaging 20 points below premorbid estimates, with Processing Speed and Working Memory most severely affected. Research on professional athletes — particularly the NFL BRAIN study and studies of boxers — has documented progressive cognitive decline with repeated subconcussive impacts, even without clinically recognized concussion. A landmark longitudinal study by Dikmen et al. showed that cognitive recovery after moderate-to-severe TBI continues for 2–5 years post-injury, after which a plateau is typically reached — highlighting the importance of prolonged rehabilitation. Research published in JAMA Neurology in 2022 found that higher premorbid IQ (cognitive reserve) is protective after TBI: people with higher pre-injury IQ show less functional impairment for the same degree of structural brain damage, underscoring the value of lifelong cognitive engagement.",
    faqItems: [
      {
        question: "Can TBI permanently lower IQ?",
        answer:
          "Yes, moderate to severe TBI can permanently lower IQ. Severe TBI is associated with average IQ reductions of 15–30+ points below premorbid levels. Mild TBI (concussion) typically produces temporary effects that resolve within days to weeks, though repeated concussions accumulate. The prognosis depends on injury severity, location, age at injury (younger brains recover better), the quality of rehabilitation received, and the person's pre-injury cognitive reserve. Some recovery continues for 2–5 years after severe TBI, but residual deficits are common.",
      },
      {
        question: "Which types of thinking are most affected by TBI?",
        answer:
          "Processing speed — how quickly the brain processes and responds to information — is the most consistently affected cognitive ability after TBI, regardless of injury location. Working memory (holding information in mind while using it) is typically second most affected. Executive functions (planning, inhibition, cognitive flexibility) are severely impaired when frontal lobes are damaged. Long-term stored knowledge — vocabulary, factual memory, semantic knowledge — is typically the best-preserved domain after TBI, because this information is stored in distributed networks rather than processed in real time.",
      },
      {
        question: "Does cognitive rehabilitation work after TBI?",
        answer:
          "Yes, with evidence-based caveats. Comprehensive cognitive rehabilitation — addressing attention, memory, executive function, and compensatory strategies — improves functional outcomes and quality of life after moderate to severe TBI. The evidence is strongest for attention training and use of external memory aids. Effects on measured IQ are modest, but gains in functional ability, employment, and independence are meaningful and clinically significant. The Institute of Medicine's 2011 report on cognitive rehabilitation endorsed it as effective for moderate-to-severe TBI with sufficient scientific evidence.",
      },
    ],
  },
  {
    name: "Dementia and Alzheimer's",
    slug: "dementia",
    headline: "Dementia and IQ: How Cognitive Decline Affects Intelligence",
    metaDescription:
      "Dementia progressively reduces IQ over time. Learn how Alzheimer's and other dementias affect different cognitive domains and what research shows about cognitive reserve.",
    overview:
      "Dementia is a syndrome characterized by progressive deterioration of cognitive function sufficient to interfere with daily activities. Alzheimer's disease accounts for 60–80% of dementia cases; other types include vascular dementia, Lewy body dementia, and frontotemporal dementia. Dementia affects approximately 55 million people worldwide, with numbers projected to triple by 2050 as populations age. Unlike most other conditions discussed in this cluster, dementia involves actual structural brain degeneration — the progressive loss of neurons and synapses — that causes genuine, permanent, and worsening intellectual decline. IQ scores in dementia decrease progressively over time, following a characteristic pattern that depends on the type and stage of dementia. Understanding this trajectory is important not only clinically but for families and individuals navigating dementia's impact.",
    iqImpact:
      "In Alzheimer's dementia, cognitive decline typically begins with episodic memory (the ability to form new memories) while sparing procedural memory and some crystallized knowledge in early stages. On IQ tests, the first measurable declines appear in Working Memory, Processing Speed, and delayed recall tasks. As the disease progresses, deficits spread to all cognitive domains: verbal comprehension, perceptual reasoning, and ultimately basic language and self-care. By moderate dementia stage, full-scale IQ may be 20–40 points below estimated premorbid levels; in severe dementia, IQ testing becomes inappropriate as a measure. Vascular dementia tends to produce a step-wise decline pattern (sudden drops following strokes or vascular events) rather than the gradual progression of Alzheimer's. Frontotemporal dementia preferentially affects executive function and personality before memory, creating a distinctive profile of behavioral change with relatively preserved episodic memory in early stages.",
    researchFindings:
      "The concept of 'cognitive reserve' — developed by Yaakov Stern and colleagues — is one of the most important findings in dementia research: people with higher premorbid IQ, education, and lifelong intellectual engagement show Alzheimer's pathology (amyloid plaques, tau tangles) at death equivalent to those with dementia, but had not developed clinical symptoms. This suggests high IQ confers protection not by preventing brain pathology, but by building neural redundancy that compensates for it. A landmark 2003 study in Brain found that education and IQ protect against dementia onset by an average of 4–5 years. The FINGER trial (Finnish Geriatric Intervention Study) published in The Lancet showed that a multimodal intervention (exercise, diet, cognitive training, vascular risk management) significantly reduced cognitive decline in at-risk older adults — the first randomized trial to demonstrate dementia prevention. A 2021 meta-analysis in Nature Reviews Neuroscience confirmed that each additional year of education reduces dementia risk by approximately 7%, with the protective effect proportional to educational attainment.",
    faqItems: [
      {
        question: "How much does Alzheimer's lower IQ?",
        answer:
          "In mild Alzheimer's, IQ scores may be 5–15 points below premorbid levels, with episodic memory and processing speed most affected. In moderate Alzheimer's, declines of 20–35 points from premorbid levels are typical. Severe Alzheimer's involves cognitive impairment so profound that standard IQ testing is no longer appropriate or meaningful. The rate of decline varies considerably — some individuals show very gradual progression over a decade; others decline rapidly over 2–3 years. Premorbid IQ (cognitive reserve) is the strongest predictor of how long a person can compensate for Alzheimer's pathology before functional impairment appears.",
      },
      {
        question: "Can a high IQ delay dementia?",
        answer:
          "Research strongly suggests yes — but not by preventing the underlying brain pathology. High IQ and education create 'cognitive reserve': additional neural pathways and compensatory strategies that allow the brain to function normally despite accumulating Alzheimer's-related changes. Studies of high-IQ individuals show that they can carry significantly more amyloid plaques (the hallmark of Alzheimer's) than average before developing clinical symptoms. The trade-off is that once cognitive reserve is exhausted, decline can be more rapid. Still, the net effect is a longer period of normal functioning — on average 4–5 additional years.",
      },
      {
        question: "What's the difference between normal aging and dementia?",
        answer:
          "Normal aging involves gradual slowing of processing speed, minor word retrieval difficulties, and occasional forgetfulness — particularly for names and recent events — that does not significantly impair daily functioning. Dementia involves progressive decline that interferes with daily life: forgetting recent conversations entirely, getting lost in familiar places, difficulty managing finances, repeating questions within minutes, and personality or behavioral changes. If cognitive changes are causing functional impairment, a medical evaluation — including cognitive testing, brain imaging, and laboratory work — is warranted.",
      },
    ],
  },
  {
    name: "PTSD",
    slug: "ptsd",
    headline: "PTSD and IQ: How Trauma Affects Cognitive Performance",
    metaDescription:
      "PTSD can reduce IQ test scores through hypervigilance, memory disruption, and processing speed impairment. Learn what research shows about trauma and cognitive function.",
    overview:
      "Post-Traumatic Stress Disorder (PTSD) develops in some individuals following exposure to traumatic events such as combat, sexual assault, serious accidents, or natural disasters. It is characterized by intrusive re-experiencing of the trauma (flashbacks, nightmares), avoidance of trauma-related stimuli, negative alterations in cognition and mood, and hyperarousal (heightened startle response, sleep disturbance, difficulty concentrating). PTSD affects approximately 7–8% of the U.S. population over a lifetime, with higher rates among combat veterans, first responders, and survivors of interpersonal violence. The cognitive effects of PTSD are substantial and measurable — trauma does not just affect emotional wellbeing, it reorganizes brain function in ways that directly impact cognitive assessment. Understanding how PTSD affects IQ testing is critical for accurate evaluation of trauma survivors.",
    iqImpact:
      "PTSD impairs cognitive performance through several mechanisms that directly affect IQ test scores. Hypervigilance — the constant scanning of the environment for threat — consumes significant working memory capacity, reducing available resources for problem-solving. This produces reduced Working Memory Index scores on tests like the WAIS-IV. Avoidance and emotional numbing associated with PTSD can reduce verbal fluency and associative thinking. Sleep disturbance (present in nearly 90% of PTSD cases) chronically impairs the Processing Speed Index. The hippocampus — central to memory formation and recall — shows measurable volume reduction in PTSD (particularly severe, chronic PTSD), contributing to verbal learning deficits. Studies consistently show that PTSD produces reductions of 7–12 points on full-scale IQ compared to trauma-exposed individuals without PTSD, with the largest effects on Working Memory and Processing Speed.",
    researchFindings:
      "A 2011 meta-analysis in Clinical Psychology Review examining 60 studies found significant cognitive impairments across all domains assessed in PTSD, with the largest effects on sustained attention (d = 0.69), verbal learning (d = 0.54), and processing speed (d = 0.48). The National Vietnam Veterans Longitudinal Study found that veterans with chronic PTSD showed cognitive performance significantly below matched veterans without PTSD, with deficits persisting decades after the original trauma. Research by Rachel Yehuda demonstrated that maternal PTSD (particularly in Holocaust survivors) was associated with altered cortisol regulation in offspring — suggesting that PTSD can affect the stress-biology systems that regulate cognitive performance across generations. A 2019 study in JAMA Psychiatry found that EMDR (Eye Movement Desensitization and Reprocessing) therapy not only reduced PTSD symptom severity but was associated with meaningful improvements in working memory performance — suggesting cognitive benefits from trauma-focused psychotherapy.",
    faqItems: [
      {
        question: "Does PTSD affect intelligence or just memory?",
        answer:
          "PTSD affects multiple cognitive domains beyond memory. Research documents significant impairments in sustained attention, working memory, processing speed, and executive function — all of which are measured by IQ tests. The working memory and processing speed subscales of standard IQ tests are most affected. Crystallized intelligence (vocabulary, stored factual knowledge) is relatively preserved. So PTSD does not lower a person's underlying intellectual capacity, but it substantially impairs cognitive efficiency — particularly under the evaluative pressure of IQ testing, which itself can be a traumatic trigger for some trauma survivors.",
      },
      {
        question: "Can treating PTSD improve cognitive function?",
        answer:
          "Yes. Studies of evidence-based PTSD treatments — including EMDR, Prolonged Exposure therapy, and Cognitive Processing Therapy — show improvements not just in PTSD symptoms but in cognitive performance. Working memory, attention, and processing speed show measurable gains following successful PTSD treatment. The improvement in cognitive function appears to be mediated by reduced hypervigilance (freeing working memory), improved sleep quality, and normalization of stress hormone levels. This is clinically important: cognitive deficits in PTSD are largely state-dependent and can improve with effective trauma treatment.",
      },
      {
        question: "Why might a trauma survivor score lower on an IQ test?",
        answer:
          "Multiple factors converge. The testing environment itself — a one-on-one evaluative situation with a stranger — can activate hypervigilance in trauma survivors, hijacking working memory. The time pressure in many subtests activates stress responses that further impair performance. Sleep disturbance (nearly universal in PTSD) reduces processing speed. Intrusive thoughts consume attentional resources. And for some trauma survivors, specific test content (stories about accidents, conflict, or emotionally loaded scenarios) can trigger avoidance responses. Evaluators should be aware of these factors and interpret IQ scores from trauma survivors with appropriate caution.",
      },
    ],
  },
  {
    name: "Dyscalculia",
    slug: "dyscalculia",
    headline: "Dyscalculia and IQ: Math Learning Disabilities and Intelligence",
    metaDescription:
      "Dyscalculia affects numerical processing but not general intelligence. Learn how math learning disabilities relate to IQ and what research shows about dyscalculia's cognitive profile.",
    overview:
      "Dyscalculia is a specific learning disability that primarily affects the ability to understand and work with numbers, mathematical concepts, and numerical relationships. It is the mathematical counterpart to dyslexia in reading, and affects approximately 3–7% of the population across cultures. Like dyslexia, dyscalculia occurs independently of general intelligence — people with dyscalculia have average to above-average IQ but struggle specifically with numerical processing. The condition involves deficits in 'number sense' — the intuitive understanding of numerical magnitude, relationships, and operations that most people develop automatically. Despite affecting a similar proportion of the population as dyslexia, dyscalculia receives far less research attention and public awareness, and is significantly under-diagnosed.",
    iqImpact:
      "On standard IQ tests like the WISC-V or WAIS-IV, dyscalculia most directly affects the Arithmetic subtest within Working Memory, where mathematical computation is performed orally under time pressure. The Digit Span subtest may also be affected, as working memory for numerical sequences is compromised. However, critically, verbal reasoning (Vocabulary, Similarities, Comprehension) and perceptual reasoning (Block Design, Matrix Reasoning) subtests are typically unaffected, reflecting intact general intelligence. A characteristic profile is strong performance on verbal and perceptual subtests with specific weakness on arithmetic and number-sequence tasks. This discrepancy between verbal and math performance is itself part of the diagnostic picture for dyscalculia and should not reduce the full-scale IQ score interpretation to suggest global intellectual deficit.",
    researchFindings:
      "Foundational research by Brian Butterworth at University College London identified specific numerical processing deficits in dyscalculia using behavioral and neuroimaging methods, confirming that dyscalculia reflects a specific deficit in the intraparietal sulcus — the brain region responsible for numerical magnitude processing — rather than general cognitive weakness. A 2019 meta-analysis in Developmental Neuropsychology confirmed that dyscalculia is associated with specific deficits in numerical cognition while general intelligence, reading ability (absent comorbid dyslexia), and spatial reasoning are unaffected. Research has found that approximately 40–50% of individuals with dyscalculia also have comorbid dyslexia, ADHD, or both, reflecting shared underlying neurodevelopmental risk factors. A 2021 study in Journal of Learning Disabilities found that early math interventions targeting number sense (concrete manipulatives, number line training, subitizing practice) significantly improved outcomes for children with dyscalculia, with effects persisting at 2-year follow-up.",
    faqItems: [
      {
        question: "Does dyscalculia mean you have a low IQ?",
        answer:
          "No. Dyscalculia, like dyslexia, is defined as a specific learning disability in the context of normal overall intelligence. People with dyscalculia typically have average or above-average IQ scores on verbal reasoning, perceptual reasoning, and other non-numerical subtests. The diagnosis specifically requires that mathematical difficulties are disproportionate to overall intelligence — meaning IQ is normal but math performance falls significantly below what IQ would predict. Many highly intelligent people, including scientists and professionals, have dyscalculia.",
      },
      {
        question: "How is dyscalculia different from just being bad at math?",
        answer:
          "Dyscalculia involves a specific neurological difference in how the brain processes numerical information — particularly in the intraparietal sulcus, which handles number magnitude. People with dyscalculia struggle with basic numerical tasks that most people find effortless: estimating quantities, comparing which number is larger, or automatically retrieving arithmetic facts. 'Being bad at math' due to poor instruction, math anxiety, or low effort is a different phenomenon. True dyscalculia persists despite good instruction, adequate effort, and normal general intelligence — and is visible on neuroimaging as reduced activation in numerical processing brain regions.",
      },
      {
        question: "Can people with dyscalculia succeed in high-IQ careers?",
        answer:
          "Absolutely. Many highly successful professionals — including lawyers, writers, researchers, designers, and executives — have dyscalculia. The vast majority of high-IQ careers require logical reasoning, verbal ability, creativity, and domain knowledge rather than the specific numerical automaticity that dyscalculia impairs. With appropriate compensatory strategies (calculator use, visual representations of numerical information, extended time on quantitative tasks), people with dyscalculia routinely achieve at the highest levels across many fields. The key is identifying the specific deficit and implementing targeted support rather than assuming global intellectual limitation.",
      },
    ],
  },
  {
    name: "High IQ Problems",
    slug: "high-iq-problems",
    headline: "The Dark Side of High IQ: Challenges of Exceptional Intelligence",
    metaDescription:
      "High IQ comes with surprising challenges: overthinking, social isolation, perfectionism, and higher rates of anxiety. Explore the research on the downsides of exceptional intelligence.",
    overview:
      "High IQ — typically defined as 130+ (top 2%) — is often portrayed as an unqualified advantage, bringing academic success, career achievement, and superior decision-making. The reality is considerably more complex. Research and clinical observation consistently document a set of challenges that disproportionately affect highly intelligent individuals: intense perfectionism, difficulty with 'good enough' thinking, social isolation from cognitive differences, overanalysis of simple situations, existential discomfort from perceiving complexity others miss, and paradoxically higher rates of anxiety, depression, and certain psychological disorders. This is sometimes called the 'intelligence curse' or 'high IQ problems' — a set of genuine challenges that warrant understanding rather than dismissal. Recognizing these difficulties does not diminish the advantages of high IQ; it provides a more complete and honest picture of exceptional intelligence.",
    iqImpact:
      "The challenges of high IQ are not deficits on IQ tests — by definition, gifted individuals score in the highest ranges across subtests. The 'IQ impact' of being highly intelligent is better understood as the consequences of cognitive differences that standard IQ tests don't capture: the tendency toward overthinking (excessive elaboration of simple decisions), perfectionism (the IQ test equivalent is refusing to estimate when uncertain rather than providing a best guess), and asynchronous development (where exceptionally high intelligence coexists with normal emotional and social development, creating internal conflict). Some highly gifted individuals show a characteristic profile where extraordinary verbal and abstract reasoning scores coexist with slightly lower — though still above-average — processing speed scores, suggesting that extremely complex internal processing can sometimes paradoxically slow performance on timed simple tasks.",
    researchFindings:
      "A groundbreaking 2018 study in Intelligence by Ruth Karpinski et al. surveyed Mensa members (IQ 132+) and found dramatically elevated rates of diagnosed and self-reported anxiety disorders (20% vs. 10% general population), mood disorders (26.7% vs. 10%), ADHD (5.7% vs. 4.7%), and autoimmune conditions — suggesting that hyperreactive nervous systems that support high intelligence may also create vulnerability to heightened psychological and physiological reactivity. Research by Lazar Stankov found diminishing returns of intelligence on life satisfaction above IQ ~120 — suggesting very high IQ provides progressively less additional happiness benefit and may introduce new challenges. The Study of Mathematically Precocious Youth (SMPY) found that while extremely gifted individuals achieved extraordinary professional success, they also reported significantly higher rates of perfectionism, difficulty with work-life balance, and social isolation. Psychologist Kazimierz Dabrowski's theory of 'overexcitabilities' (first proposed in 1972) described five domains of heightened intensity — psychomotor, sensory, intellectual, imaginational, and emotional — that are especially common in gifted individuals and contribute to both their exceptional capabilities and their greater psychological sensitivity.",
    faqItems: [
      {
        question: "Do people with high IQ have more anxiety?",
        answer:
          "Research suggests yes. A landmark 2018 study of Mensa members found that 20% had diagnosed anxiety disorders compared to about 10% in the general population — twice the rate. The proposed mechanism is 'hyperconnectivity' — the same neural richness that supports complex thinking also creates more pathways for worry, rumination, and threat detection. Highly intelligent people can anticipate more possible negative outcomes, analyze their own anxiety more intensely, and find fewer situations where they can truly 'switch off' their constantly-active minds.",
      },
      {
        question: "Why do some highly intelligent people struggle socially?",
        answer:
          "Social difficulty in high-IQ individuals typically stems from cognitive differences that create real barriers: thinking at a different speed and depth than conversational partners, losing patience with topics that feel obvious, or having unusual intellectual interests that few people share. Profoundly gifted individuals (IQ 160+) are so cognitively different from average adults that finding genuine intellectual peers is statistically rare. Research by Miraca Gross documented that many profoundly gifted children deliberately underperform to fit in — a strategy that provides short-term social relief but long-term psychological costs.",
      },
      {
        question: "Is overthinking a sign of high intelligence?",
        answer:
          "Overthinking is extremely common in high-IQ individuals, but it is not caused by high IQ per se — it is a cognitive style that often co-occurs with it. Highly intelligent people's ability to generate multiple perspectives, anticipate consequences, and detect subtle inconsistencies is valuable in complex problems but can become maladaptive in simple decisions where fast, intuitive responses are more effective. Research suggests that very high verbal IQ specifically predicts more ruminative thinking styles. Therapies like mindfulness and ACT (Acceptance and Commitment Therapy) specifically address the 'thinking too much' tendency and are frequently recommended for high-IQ individuals with anxiety.",
      },
    ],
  },
];

export function getConditionBySlug(slug: string): ConditionIQInfo | undefined {
  return conditionIQData.find((c) => c.slug === slug);
}

export const conditionSlugs = conditionIQData.map((c) => c.slug);
