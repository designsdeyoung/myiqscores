export interface IQScoreInfo {
  score: number;
  classification: string;
  percentile: string;
  rarity: string;
  detailedExplanation: string;
  careerContext: string;
  faqItems: { question: string; answer: string }[];
}

export const iqScoreData: Record<number, IQScoreInfo> = {
  70: {
    score: 70,
    classification: "Borderline",
    percentile: "2nd",
    rarity: "1 in 44",
    detailedExplanation: "An IQ of 70 falls in the borderline range, meaning approximately 2% of the population scores at or below this level. It is important to understand that many factors can affect IQ test performance, including test anxiety, language barriers, cultural bias in testing, and limited access to formal education. A score in this range may indicate that certain academic tasks require additional time or alternative approaches, but it says nothing definitive about a person's character, creativity, social intelligence, or capacity for growth. Many individuals with scores in this range lead independent, fulfilling lives with the right support systems in place.",
    careerContext: "People in this score range often excel in hands-on, practical work environments where they can learn through direct experience. Careers in agriculture, landscaping, food service, custodial work, and assembly line roles are common and valued paths. With appropriate job training and supportive supervision, individuals can develop strong vocational skills and build stable careers.",
    faqItems: [
      { question: "Is 70 a good IQ score?", answer: "An IQ of 70 is in the borderline range, placing you at the 2nd percentile. While it is below the average of 100, IQ is only one measure of cognitive ability and does not define your worth or potential. Many factors like education access, test conditions, and language can significantly impact scores." },
      { question: "Can someone with a 70 IQ live independently?", answer: "Yes, many people with an IQ around 70 live independently and hold jobs. With appropriate support, vocational training, and community resources, individuals in this range can lead fulfilling, self-sufficient lives." },
      { question: "What jobs suit someone with a 70 IQ?", answer: "Hands-on roles that allow learning through practice are often a great fit. This includes positions in agriculture, food service, retail stocking, cleaning services, and manufacturing assembly. Many people in this range build long, successful careers in these fields." },
    ],
  },
  75: {
    score: 75,
    classification: "Borderline",
    percentile: "5th",
    rarity: "1 in 20",
    detailedExplanation: "An IQ of 75 sits near the upper boundary of the borderline range, just five points below what is classified as low average. About 5% of the population scores at or below this level. This score suggests that while standardized academic tasks may be more challenging, the individual likely has meaningful strengths in other areas such as interpersonal skills, physical coordination, artistic ability, or practical problem-solving. IQ tests primarily measure a narrow set of cognitive skills and do not capture the full range of human capability.",
    careerContext: "Individuals scoring around 75 can succeed in a variety of structured work environments. Roles in hospitality, warehouse operations, groundskeeping, and personal care assistance are areas where many people at this level thrive. On-the-job training programs and apprenticeships can be particularly effective pathways to career development.",
    faqItems: [
      { question: "Is 75 a good IQ score?", answer: "An IQ of 75 is in the borderline range at the 5th percentile. While below average, this score does not define your abilities or limit your potential for a satisfying life and career. Many environmental and situational factors influence IQ test results." },
      { question: "What does an IQ of 75 mean for education?", answer: "A score of 75 may mean that traditional classroom learning requires extra time and support. However, many people at this level complete vocational training and certification programs successfully, especially with individualized instruction." },
      { question: "Can an IQ of 75 improve over time?", answer: "Yes, IQ scores can change, particularly with improved nutrition, education, and cognitive engagement. Studies show that enriched environments and targeted learning can lead to meaningful score increases, especially in younger individuals." },
    ],
  },
  80: {
    score: 80,
    classification: "Low Average",
    percentile: "9th",
    rarity: "1 in 11",
    detailedExplanation: "An IQ of 80 places you in the low average range, scoring higher than roughly 9% of the general population. This is a more common score than many people realize — about 1 in 11 people fall in this area. Individuals at this level can handle most daily cognitive tasks without difficulty and are fully capable of learning new skills, though complex abstract reasoning may take additional effort. Many people with an IQ of 80 complete high school and pursue further vocational or technical training successfully.",
    careerContext: "The low average range opens doors to a wide variety of careers, particularly in skilled trades and service industries. Electrician apprenticeships, plumbing, HVAC repair, automotive maintenance, retail management, and administrative support roles are all realistic and well-paying career paths. Practical intelligence and work ethic matter as much as test scores in these fields.",
    faqItems: [
      { question: "Is 80 a good IQ score?", answer: "An IQ of 80 is classified as low average and falls at the 9th percentile. It is a perfectly functional score — most people at this level complete high school, hold steady jobs, and manage daily life without significant difficulties. Success depends on many factors beyond IQ alone." },
      { question: "What are the strengths of someone with an 80 IQ?", answer: "People with an IQ of 80 often have strong practical skills, good physical coordination, solid interpersonal abilities, and a strong work ethic. These strengths are highly valued in many careers and life situations that do not depend heavily on abstract reasoning." },
      { question: "Can someone with an 80 IQ go to college?", answer: "Some individuals with an IQ of 80 do attend community college or vocational programs, particularly in hands-on fields. Success in higher education at this level often depends on study habits, motivation, and available academic support rather than IQ alone." },
    ],
  },
  85: {
    score: 85,
    classification: "Low Average",
    percentile: "16th",
    rarity: "1 in 6",
    detailedExplanation: "An IQ of 85 is at the boundary between low average and average intelligence, exactly one standard deviation below the mean. About 16% of the population — roughly 1 in 6 people — score at or below this point. This is a very common score and people at this level function well in everyday life, handling finances, navigating relationships, and solving practical problems effectively. The difference between 85 and 100 is far smaller in real-world impact than most people assume.",
    careerContext: "At an IQ of 85, a broad range of careers becomes accessible. Many people at this level work successfully as office clerks, retail supervisors, construction workers, truck drivers, security personnel, and healthcare aides. The U.S. military accepts recruits at this level for many non-technical roles, reflecting a practical assessment of real-world capability.",
    faqItems: [
      { question: "Is 85 a good IQ score?", answer: "An IQ of 85 is low average, at the 16th percentile, meaning you score higher than about 16% of people. This is an extremely common score shared by roughly 1 in 6 people. Most individuals at this level lead normal, productive lives with no functional limitations in daily activities." },
      { question: "Is an IQ of 85 considered a disability?", answer: "No. An IQ of 85 is within the normal range and is not considered an intellectual disability. Intellectual disability diagnoses typically require an IQ below 70 along with significant limitations in adaptive functioning. An 85 is simply on the lower end of the normal spectrum." },
      { question: "What is the difference between an 85 and 100 IQ in practice?", answer: "In everyday life, the difference is often minimal. Someone with a 100 IQ may learn certain abstract concepts slightly faster, but an individual with an 85 IQ can accomplish the same tasks with a bit more time or a more hands-on learning approach. Work ethic and motivation often matter more than this 15-point gap." },
    ],
  },
  90: {
    score: 90,
    classification: "Average",
    percentile: "25th",
    rarity: "1 in 4",
    detailedExplanation: "An IQ of 90 falls squarely within the average range, where roughly half of all people score. At the 25th percentile, you score higher than about a quarter of the population. This is a solidly average result that indicates no cognitive limitations for everyday life, education, or most careers. People at this level handle complex daily decisions, understand nuanced information, and can succeed in college-level coursework with reasonable effort.",
    careerContext: "An IQ of 90 places no meaningful restrictions on career choice. People at this level work successfully as teachers, nurses, police officers, small business owners, salespeople, technicians, and in countless other roles. Career success at this level, as at most levels, depends far more on dedication, interpersonal skills, and domain-specific training than on IQ.",
    faqItems: [
      { question: "Is 90 a good IQ score?", answer: "Yes, an IQ of 90 is a perfectly good score. It falls within the average range and is shared by about 25% of people scoring at or below this point. There is no practical limitation associated with a score of 90 — it is well within the normal range of human intelligence." },
      { question: "Can someone with a 90 IQ be successful?", answer: "Absolutely. An IQ of 90 is average and places no ceiling on professional or personal success. Many business owners, skilled professionals, and community leaders have IQ scores in this range. Success is driven by motivation, social skills, and effort far more than by a test score." },
      { question: "Is 90 IQ enough for college?", answer: "Yes. An IQ of 90 is sufficient for most college programs. While elite academic programs may be more challenging, community colleges, state universities, and many private institutions are well within reach. Study skills and persistence matter more than a few IQ points." },
    ],
  },
  95: {
    score: 95,
    classification: "Average",
    percentile: "37th",
    rarity: "Very common",
    detailedExplanation: "An IQ of 95 is right in the heart of the average range, just five points below the statistical mean of 100. This is a very common score — so common that distinguishing between a 95 and a 100 in real-world performance is virtually impossible. Individuals at this level have perfectly typical cognitive abilities and can engage with any standard educational curriculum, professional training program, or intellectual pursuit without handicap.",
    careerContext: "There is essentially no career that is categorically closed to someone with an IQ of 95. People at this level regularly become accountants, engineers, programmers, managers, and medical professionals. While the most cognitively demanding academic paths like theoretical physics may require higher aptitude, the vast majority of professional careers are well within reach.",
    faqItems: [
      { question: "Is 95 a good IQ score?", answer: "Yes, 95 is a perfectly good score. It is average, falling at the 37th percentile. In practical terms, there is no meaningful difference between a 95 and a 100. Both represent typical human cognitive ability, and neither predicts success or failure on its own." },
      { question: "How close is 95 to the average IQ?", answer: "Very close. The average IQ is 100, and 95 is only one-third of a standard deviation below the mean. This difference is so small that it falls within the margin of error on most IQ tests. You could test at 95 one day and 100 the next." },
      { question: "Should I be concerned about an IQ of 95?", answer: "Not at all. A score of 95 is well within the normal range and indicates typical cognitive functioning. IQ tests have a standard error of measurement of about 3-5 points, meaning a 95 could easily be a 98 or 100 on a different day." },
    ],
  },
  100: {
    score: 100,
    classification: "Average",
    percentile: "50th",
    rarity: "Most common",
    detailedExplanation: "An IQ of 100 is, by definition, the exact average — the score that sits at the center of the bell curve. Scoring at the 50th percentile means you perform higher than half the population and lower than the other half. But \"average\" is deeply misunderstood. Average does not mean mediocre or limited. It means you share the most common level of cognitive ability with the largest group of humans on the planet. The world runs on average intelligence — most of the teachers, managers, engineers, nurses, and entrepreneurs you interact with every day score near 100.",
    careerContext: "Virtually every career path is accessible at an IQ of 100. Research shows that above a threshold of about 85-90, factors like conscientiousness, emotional intelligence, specific skills, and opportunity become far stronger predictors of career success than IQ. Many CEOs, successful entrepreneurs, and senior professionals score right around 100.",
    faqItems: [
      { question: "Is 100 a good IQ score?", answer: "Yes, 100 is the definition of average and represents a perfectly good score. It is the most common IQ score and indicates typical cognitive functioning. Most successful people in the world have IQ scores near 100. Average does not mean mediocre — it means normal, functional, and capable." },
      { question: "What does it mean to have an average IQ?", answer: "Having an average IQ of 100 means your cognitive abilities are typical for the general population. You can learn, reason, solve problems, and adapt to new situations as well as most people. It means IQ is unlikely to be either an advantage or a limitation in your life — other factors like motivation and skills matter more." },
      { question: "Can you be successful with a 100 IQ?", answer: "Absolutely. Research consistently shows that above a baseline of average intelligence, success is driven primarily by personality traits like conscientiousness, social skills, grit, and opportunity. Many highly successful business leaders, athletes, artists, and professionals have average IQ scores." },
    ],
  },
  105: {
    score: 105,
    classification: "Average",
    percentile: "63rd",
    rarity: "Common",
    detailedExplanation: "An IQ of 105 is just slightly above average — close enough to 100 that the difference is largely imperceptible in daily life. At the 63rd percentile, you score higher than about 63% of the population. This subtle edge might show up as slightly faster processing of new information or a marginal advantage on timed tests, but in conversations, work performance, and everyday problem-solving, a person scoring 105 is indistinguishable from someone scoring 100. It is still very much a \"normal\" score.",
    careerContext: "A score of 105 provides a slight statistical edge in academic and professional settings, but the advantage is so small that individual effort and specific skills completely overshadow it. People at this level work in every field imaginable. If anything, this score confirms that cognitive ability is not a bottleneck — focus on building expertise and relationships instead.",
    faqItems: [
      { question: "Is 105 a good IQ score?", answer: "Yes, 105 is a good score — slightly above the average of 100 and at the 63rd percentile. However, the difference between 100 and 105 is so small that it has virtually no practical significance. Both scores indicate normal, healthy cognitive functioning." },
      { question: "Is 105 considered above average?", answer: "Technically yes, by 5 points. But IQ tests have a standard error of 3-5 points, so a score of 105 is not meaningfully distinguishable from 100. Psychologists consider the entire 90-109 range to be average. You are above the midpoint but still within the average band." },
      { question: "What advantage does a 105 IQ give you?", answer: "In practical terms, very little. The 5-point difference from average might translate to slightly quicker learning on complex tasks, but it is far too small to predict success in any specific area. Work ethic, curiosity, and social skills are vastly more impactful than this marginal cognitive edge." },
    ],
  },
  110: {
    score: 110,
    classification: "High Average",
    percentile: "75th",
    rarity: "1 in 4",
    detailedExplanation: "An IQ of 110 marks the beginning of the high average range and places you at the 75th percentile — higher than three out of four people. At this level, cognitive advantages start becoming noticeable, particularly in academic settings. People with a 110 IQ tend to pick up new concepts faster, perform well on standardized tests, and handle complex reading material with relative ease. This score is common among successful college graduates and mid-career professionals.",
    careerContext: "An IQ of 110 is well-suited for careers that involve moderate analytical thinking, such as teaching, nursing, accounting, project management, software development, and business administration. Many people at this level pursue and complete graduate degrees. It is a strong cognitive foundation for virtually any career that does not require extreme specialization in abstract reasoning.",
    faqItems: [
      { question: "Is 110 a good IQ score?", answer: "Yes, 110 is a good score. It is classified as high average and puts you at the 75th percentile, meaning you score higher than about 75% of people. This is a noticeable cognitive advantage, particularly in academic and professional settings." },
      { question: "Is 110 IQ smart?", answer: "A 110 IQ is above average and indicates stronger-than-typical reasoning and learning ability. While it is not in the gifted range, it represents a meaningful cognitive edge. Most people at this level are perceived as bright and capable by their peers." },
      { question: "What careers are common at IQ 110?", answer: "People with an IQ of 110 commonly work as teachers, registered nurses, accountants, engineers, project managers, software developers, and business analysts. This score supports success in virtually any career that values analytical thinking and problem-solving." },
    ],
  },
  115: {
    score: 115,
    classification: "High Average",
    percentile: "84th",
    rarity: "1 in 6",
    detailedExplanation: "An IQ of 115 is one full standard deviation above the mean, placing you at the 84th percentile. Only about 1 in 6 people score this high. This is the threshold where cognitive ability becomes a genuine and consistent advantage. People at this level tend to excel in academic environments, grasp abstract concepts readily, and demonstrate strong verbal and analytical reasoning. It is the typical score for someone who finds university coursework manageable and often enjoyable.",
    careerContext: "A score of 115 is common among professionals in fields that require sustained analytical thinking — lawyers, physicians, engineers, senior managers, and university professors frequently score in this range. Graduate school is a natural fit, and many people at this level pursue advanced degrees and specialized certifications.",
    faqItems: [
      { question: "Is 115 a good IQ score?", answer: "Yes, 115 is a very good score. At the 84th percentile, you score higher than approximately 84% of the population. It is classified as high average and represents a strong cognitive foundation for demanding academic and professional pursuits." },
      { question: "Is 115 IQ enough for graduate school?", answer: "Absolutely. An IQ of 115 is typical for successful graduate students. While doctoral programs in highly theoretical fields may average slightly higher, a 115 IQ combined with strong study habits and motivation is more than sufficient for most master's and doctoral programs." },
      { question: "How rare is a 115 IQ?", answer: "About 1 in 6 people score 115 or above. It is uncommon enough to represent a genuine cognitive advantage but common enough that you will encounter many peers at similar levels in professional and academic settings." },
    ],
  },
  120: {
    score: 120,
    classification: "Superior",
    percentile: "91st",
    rarity: "1 in 11",
    detailedExplanation: "An IQ of 120 enters the superior range, placing you at the 91st percentile — higher than about 9 out of 10 people. This level of cognitive ability is associated with strong abstract reasoning, quick pattern recognition, and the capacity to handle complex information with relative ease. Research suggests that an IQ around 120 may represent a sweet spot for leadership effectiveness — high enough to grasp complex problems but not so high as to create a communication gap with the majority of people.",
    careerContext: "People with a 120 IQ are well-represented in demanding professional careers including law, medicine, engineering, finance, and senior management. Research on leadership effectiveness suggests that IQs in the 115-125 range correlate with the most effective leaders, as these individuals can think strategically while still communicating naturally with a broad range of people.",
    faqItems: [
      { question: "Is 120 a good IQ score?", answer: "A 120 IQ is an excellent score. It falls in the superior range at the 91st percentile, meaning you outperform about 91% of the population on cognitive tests. It reflects strong reasoning ability and is associated with high academic and professional achievement." },
      { question: "Is 120 IQ considered gifted?", answer: "Not quite by most formal definitions. Giftedness typically begins at 130. However, a 120 IQ is in the superior range and is well above average. Some school programs consider 120 as a threshold for advanced or enriched curricula." },
      { question: "What is the best IQ for leadership?", answer: "Research suggests IQs in the 115-125 range may be optimal for leadership. Leaders in this range are smart enough to understand complex systems but not so far above their teams cognitively that communication becomes strained. A 120 IQ sits right in this sweet spot." },
    ],
  },
  125: {
    score: 125,
    classification: "Superior",
    percentile: "95th",
    rarity: "1 in 20",
    detailedExplanation: "An IQ of 125 places you at the 95th percentile, higher than 19 out of 20 people. You are comfortably in the 'smart' category by any definition. People at this level typically find academic work comes easily, enjoy intellectually stimulating activities, and can quickly see connections and patterns that others miss. While not quite at the gifted threshold of 130, the practical difference between 125 and 130 is minimal — both represent strong intellectual capability.",
    careerContext: "At 125, you have the cognitive ability for virtually any career, including the most intellectually demanding fields. Research scientists, surgeons, senior attorneys, software architects, and university professors commonly score in this range. The key differentiator at this level is no longer intelligence but rather passion, specialization, and interpersonal skills.",
    faqItems: [
      { question: "Is 125 a good IQ score?", answer: "A 125 IQ is an excellent score, placing you at the 95th percentile. You score higher than about 95% of the population. This is in the superior range and reflects very strong cognitive ability. Only 1 in 20 people reach this level." },
      { question: "How close is 125 to gifted?", answer: "Very close. The conventional threshold for giftedness is 130, so a 125 is just 5 points below. Given the standard error of measurement on IQ tests (3-5 points), some testing sessions might produce a score of 130 for the same individual. Functionally, the difference is negligible." },
      { question: "What can I do with a 125 IQ?", answer: "Essentially anything. A 125 IQ provides the cognitive capacity for the most demanding intellectual careers — research, medicine, law, engineering, and academia are all strong fits. At this point, success depends almost entirely on interest, work ethic, and opportunity rather than cognitive limitation." },
    ],
  },
  130: {
    score: 130,
    classification: "Very Superior / Gifted",
    percentile: "98th",
    rarity: "1 in 50",
    detailedExplanation: "An IQ of 130 is the widely accepted threshold for giftedness and marks entry into the very superior range. At the 98th percentile, only about 1 in 50 people score this high. This is the minimum score for Mensa membership. People at this level often report thinking differently from their peers — seeing patterns and connections quickly, craving intellectual stimulation, and sometimes feeling out of sync in environments where deep thinking is not valued. Giftedness can be a double-edged sword, bringing both exceptional capability and challenges like perfectionism, overthinking, and existential concerns.",
    careerContext: "A 130 IQ opens doors to the most intellectually demanding careers. Research scientists, theoretical engineers, academic scholars, and high-level strategists commonly score in this range. Many gifted individuals also thrive in creative fields where their ability to make novel connections drives innovation. The challenge at this level is often not capability but finding work that is stimulating enough.",
    faqItems: [
      { question: "Is 130 a good IQ score?", answer: "A 130 IQ is an outstanding score. It is classified as very superior or gifted, at the 98th percentile. Only 2% of the population scores this high. It qualifies you for Mensa and indicates exceptional cognitive ability across most intellectual domains." },
      { question: "Can I join Mensa with a 130 IQ?", answer: "Yes. Mensa requires a score at or above the 98th percentile on a standardized IQ test, which corresponds to approximately 130 on most tests using the standard deviation of 15. A score of 130 meets this threshold." },
      { question: "Are there challenges with being gifted?", answer: "Yes. Research on giftedness shows that highly intelligent individuals sometimes experience perfectionism, heightened sensitivity, difficulty finding intellectual peers, and existential anxiety. However, these challenges are manageable, and giftedness is overwhelmingly a cognitive advantage." },
    ],
  },
  135: {
    score: 135,
    classification: "Very Superior / Gifted",
    percentile: "99th",
    rarity: "1 in 100",
    detailedExplanation: "An IQ of 135 places you at the 99th percentile — higher than 99 out of 100 people. At this level, you are not just gifted but well into the gifted range. People scoring here tend to have an almost effortless ability to absorb and synthesize complex information. Abstract thinking, rapid problem-solving, and deep analytical capability come naturally. Many individuals at this level report that their challenge is not understanding things but finding environments and peers that match their intellectual pace.",
    careerContext: "At 135, you have the cognitive tools for the most demanding intellectual work available. Cutting-edge research, advanced mathematics, theoretical science, elite law and medicine, and high-level strategic consulting are common paths. Many people at this level also gravitate toward entrepreneurship, where their pattern-recognition ability helps them identify opportunities others miss.",
    faqItems: [
      { question: "Is 135 a good IQ score?", answer: "A 135 IQ is exceptional. At the 99th percentile, you score higher than 99% of the population. Only about 1 in 100 people reach this level. It reflects outstanding cognitive ability and is well into the gifted range." },
      { question: "What is it like having a 135 IQ?", answer: "People with a 135 IQ often describe picking up concepts very quickly, enjoying complex problem-solving, and sometimes feeling intellectually understimulated in typical environments. Many seek out challenging hobbies, advanced education, or specialized careers to satisfy their need for cognitive engagement." },
      { question: "How does 135 compare to genius level?", answer: "A 135 IQ is gifted but not quite at the commonly cited genius threshold of 140. However, the distinction between gifted and genius is somewhat arbitrary. At 135, cognitive ability is exceptionally strong, and the practical difference from 140 is very small." },
    ],
  },
  140: {
    score: 140,
    classification: "Genius-level",
    percentile: "99.6th",
    rarity: "1 in 261",
    detailedExplanation: "An IQ of 140 is often cited as the threshold for genius-level intelligence, placing you at the 99.6th percentile. Only about 1 in 261 people score this high. At this level, cognitive processing is markedly faster and more complex than the vast majority of the population. People scoring here can hold multiple abstract concepts simultaneously, identify deep structural patterns, and solve novel problems with remarkable speed. However, genius-level IQ does not guarantee achievement — history is full of both celebrated geniuses and brilliant individuals who led quiet, ordinary lives.",
    careerContext: "Individuals with a 140 IQ often gravitate toward fields where they can push the boundaries of human knowledge — theoretical physics, advanced mathematics, philosophy, cutting-edge technology research, and creative arts at the highest levels. Many become innovators and thought leaders. Finding adequately challenging work is often more of a concern than finding employment.",
    faqItems: [
      { question: "Is 140 a good IQ score?", answer: "A 140 IQ is extraordinary. It is classified as genius-level and places you at the 99.6th percentile. Only about 1 in 261 people achieve this score. It indicates exceptional cognitive ability that surpasses nearly the entire population." },
      { question: "What does genius-level IQ look like in practice?", answer: "People with a 140 IQ often learn new subjects rapidly, see connections between seemingly unrelated ideas, and can solve complex problems intuitively. In daily life, they may finish others' sentences, find routine tasks tedious, and constantly seek intellectual challenges." },
      { question: "Are all people with 140 IQ successful?", answer: "No. While a 140 IQ provides exceptional cognitive tools, success depends on many other factors including motivation, emotional intelligence, mental health, opportunity, and discipline. Some of the highest-IQ individuals live modest lives by choice, while others achieve great renown." },
    ],
  },
  145: {
    score: 145,
    classification: "Very Gifted",
    percentile: "99.9th",
    rarity: "1 in 741",
    detailedExplanation: "An IQ of 145 is profoundly gifted territory, placing you at the 99.9th percentile — higher than 999 out of 1,000 people. Scores this high are so rare that they are difficult to measure reliably with standard IQ tests, which are designed and normed for the middle range of intelligence. People at this level experience a qualitatively different relationship with information: complex systems feel intuitive, learning new domains happens remarkably fast, and novel insights emerge naturally from connecting disparate ideas.",
    careerContext: "At 145, career choice is less about what you can do — the answer is virtually anything — and more about what sustains your interest. Many individuals at this level become leading researchers, inventors, or creative visionaries. Some struggle in traditional corporate structures because routine work fails to engage them. Finding meaning and challenge is often more important than finding a job.",
    faqItems: [
      { question: "Is 145 a good IQ score?", answer: "A 145 IQ is exceptional and rare. At the 99.9th percentile, fewer than 1 in 700 people score this high. It represents profound cognitive gifts that go well beyond the gifted threshold of 130." },
      { question: "How rare is a 145 IQ?", answer: "Extremely rare. Only about 1 in 741 people have an IQ of 145 or higher. In a city of 100,000 people, you might expect to find roughly 135 individuals at this level. Standard IQ tests begin to lose precision at these extremes." },
      { question: "What challenges come with a very high IQ?", answer: "People with very high IQs sometimes struggle with feeling intellectually isolated, finding it difficult to relate to peers, experiencing frustration with the pace of normal conversation or work, and dealing with heightened existential awareness. Many benefit from connecting with others at similar cognitive levels." },
    ],
  },
  150: {
    score: 150,
    classification: "Exceptionally Advanced",
    percentile: "99.96th",
    rarity: "1 in 2,330",
    detailedExplanation: "An IQ of 150 is exceptionally rare, placing you at the 99.96th percentile. Only about 1 in 2,330 people reach this level. At this height of cognitive ability, standard IQ tests are at the limits of their measurement capability, and specialized high-range tests are often needed for accurate assessment. Individuals at this level possess extraordinary capacity for abstract reasoning, can master new fields in a fraction of the time it takes most people, and often make original intellectual contributions. The cognitive distance between 150 and the average person is the same as the distance between the average person and someone with an IQ of 50.",
    careerContext: "People with a 150 IQ are found in the highest echelons of academia, research, and innovation. Many make groundbreaking contributions to their fields. However, some find that traditional career paths feel constraining and instead forge unconventional paths as independent researchers, inventors, or polymath generalists who work across multiple disciplines.",
    faqItems: [
      { question: "Is 150 a good IQ score?", answer: "A 150 IQ is among the highest scores attainable on standard tests. It is exceptionally rare — only about 1 in 2,330 people score this high. It reflects extraordinary cognitive ability and places you in the company of some of history's most notable thinkers." },
      { question: "How is a 150 IQ measured accurately?", answer: "Standard IQ tests like the WAIS are normed for the general population and lose precision at extreme scores. For accurate measurement at the 150 level, specialized high-range tests or extended versions of standard batteries are used. Multiple testing sessions are recommended for reliable assessment." },
      { question: "What is daily life like with a 150 IQ?", answer: "Individuals at this level often describe thinking in complex systems, finding most routine tasks unstimulating, and having a constant drive to understand how things work at a deep level. Social challenges can arise from the significant cognitive difference from most people. Finding peers who share similar thinking patterns is often important for wellbeing." },
    ],
  },
  65: {
    score: 65,
    classification: "Extremely Low",
    percentile: "1st",
    rarity: "1 in 100",
    detailedExplanation: "An IQ of 65 falls in the extremely low range and may qualify for an intellectual disability diagnosis when accompanied by significant limitations in adaptive functioning. About 1% of the population scores at or below this level. It is essential to understand that IQ scores at this range are influenced by many factors including testing conditions, language barriers, and cultural differences. Many individuals with IQ scores around 65 develop meaningful skills, maintain social relationships, and contribute to their communities with appropriate support.",
    careerContext: "With proper support and training, many individuals at this level find fulfilling work in supervised environments. Supported employment programs, sheltered workshops, and community-based jobs in areas like food preparation, grounds maintenance, and recycling can provide meaningful work. The key is matching job demands to individual strengths with appropriate coaching.",
    faqItems: [
      { question: "Is 65 a good IQ score?", answer: "An IQ of 65 is in the extremely low range at the 1st percentile. While below average, this score alone does not determine a person's quality of life. With appropriate support services, many people at this level lead meaningful, fulfilling lives." },
      { question: "Does an IQ of 65 mean intellectual disability?", answer: "An IQ of 65 falls in the range associated with mild intellectual disability, but diagnosis requires both low IQ and significant limitations in adaptive functioning (daily living skills, communication, social skills). IQ alone is not sufficient for diagnosis." },
      { question: "What support is available for someone with a 65 IQ?", answer: "Many resources exist including special education services, vocational rehabilitation, supported employment programs, community living assistance, and social skills training. Early intervention and consistent support can significantly improve outcomes." },
    ],
  },
  78: {
    score: 78,
    classification: "Borderline",
    percentile: "7th",
    rarity: "1 in 14",
    detailedExplanation: "An IQ of 78 is in the borderline range, just below the low average threshold of 80. About 7% of the population scores at or below this point. People at this level can manage most aspects of daily life independently and are capable of learning practical skills effectively. The gap between 78 and the average of 100 is smaller in real-world impact than most people assume — many successful workers, parents, and community members have IQ scores in this range.",
    careerContext: "People with an IQ of 78 succeed in many careers that emphasize practical skills and hands-on learning. Retail, food service, warehousing, landscaping, janitorial work, and entry-level manufacturing are all accessible paths. With experience and on-the-job training, many advance to supervisory positions where their practical knowledge is valued.",
    faqItems: [
      { question: "Is 78 a good IQ score?", answer: "An IQ of 78 is in the borderline range at the 7th percentile. While below average, it is fully functional for daily life. About 1 in 14 people score at or below this level, making it more common than many realize." },
      { question: "Can someone with a 78 IQ hold a job?", answer: "Absolutely. Most people with an IQ of 78 work regular jobs and manage their daily lives independently. Practical skills, reliability, and work ethic are valued by employers regardless of IQ scores." },
      { question: "Is 78 IQ considered a disability?", answer: "No. The threshold for intellectual disability is typically IQ 70 or below with significant adaptive limitations. An IQ of 78 is in the borderline range but above the disability threshold. People at this level generally function independently." },
    ],
  },
  82: {
    score: 82,
    classification: "Low Average",
    percentile: "12th",
    rarity: "1 in 8",
    detailedExplanation: "An IQ of 82 is in the low average range at the 12th percentile. About 1 in 8 people score at or below this level. At 82, you are well within the functional range for everyday life, capable of managing personal finances, understanding news and current events, and navigating complex social situations. Academic tasks that require heavy abstract reasoning may take more effort, but with dedication, most educational goals are achievable.",
    careerContext: "An IQ of 82 opens up a wide range of career paths. Many people at this level work successfully in construction, transportation, retail management, food service management, healthcare support, and manufacturing. The skilled trades — welding, carpentry, masonry — are excellent fits that offer strong wages and don't depend heavily on academic-style reasoning.",
    faqItems: [
      { question: "Is 82 a good IQ score?", answer: "An IQ of 82 is low average, at the 12th percentile. It is a perfectly functional score — people at this level complete school, hold careers, raise families, and manage daily life without significant cognitive limitations." },
      { question: "What jobs are good for someone with an 82 IQ?", answer: "Many well-paying careers suit people with an IQ of 82: skilled trades (welding, carpentry), truck driving, retail management, food service supervision, healthcare aide positions, and manufacturing roles. Practical skills and experience matter more than test scores in these fields." },
      { question: "Can someone with an 82 IQ attend college?", answer: "Yes, particularly community colleges and vocational programs. Hands-on degree programs in trades, culinary arts, or healthcare support are strong options. Some four-year programs are also achievable with good study habits and motivation." },
    ],
  },
  88: {
    score: 88,
    classification: "Low Average",
    percentile: "21st",
    rarity: "1 in 5",
    detailedExplanation: "An IQ of 88 sits right at the boundary between low average and average, just 12 points below the mean. At the 21st percentile, about 1 in 5 people score at or below this level. The practical difference between an 88 and a 100 is modest — both can handle the cognitive demands of everyday life, education, and most careers. People at this level may take slightly longer to process complex written material but are fully capable of learning and applying new information.",
    careerContext: "An IQ of 88 places virtually no restrictions on career choice within the blue-collar and service sectors, and many white-collar careers are also accessible. Sales, office administration, supervisory roles, law enforcement, military service, and small business ownership are all realistic paths. At this level, domain expertise and interpersonal skills become stronger career drivers than cognitive test scores.",
    faqItems: [
      { question: "Is 88 a good IQ score?", answer: "An IQ of 88 is low average, at the 21st percentile. It is extremely close to the average range (90-109) and represents no practical limitation for most life and career goals. The 12-point gap from 100 is smaller in real life than it sounds." },
      { question: "How does 88 compare to average?", answer: "An IQ of 88 is only 12 points below the mean of 100 — less than one standard deviation. In daily life, the difference between 88 and 100 is barely noticeable. Both scores allow for independent living, successful careers, and typical social functioning." },
      { question: "Can someone with an 88 IQ be successful?", answer: "Yes. An IQ of 88 is well within the range of normal functioning. Many business owners, supervisors, and skilled professionals have IQs in this range. Motivation, work ethic, and social skills are much stronger predictors of success at this level than the 12-point gap from average." },
    ],
  },
  92: {
    score: 92,
    classification: "Average",
    percentile: "30th",
    rarity: "Common",
    detailedExplanation: "An IQ of 92 is solidly within the average range, just 8 points below the mean of 100. At the 30th percentile, nearly a third of the population scores at or below this level. This is an entirely normal score that reflects typical cognitive ability. The difference between 92 and 100 is so small that it falls within the standard error of most IQ tests — you could score 92 one day and 97 the next simply due to testing conditions.",
    careerContext: "At 92, every career path available to someone with a 100 IQ is also available to you. The 8-point difference is statistically insignificant for career purposes. Teachers, nurses, managers, technicians, small business owners, and most professional roles are all within reach. Career success at this level depends entirely on skills, training, and effort.",
    faqItems: [
      { question: "Is 92 a good IQ score?", answer: "Yes, 92 is a good score. It is within the average range (90-109) and represents normal cognitive functioning. About 30% of people score at or below this level. There is no meaningful practical difference between 92 and 100." },
      { question: "Is 92 IQ below average?", answer: "No. The average range is 90-109, and 92 falls within it. While below the mean of 100, it is classified as average. The 8-point difference from the mean is within the test's margin of error." },
      { question: "What can I do with a 92 IQ?", answer: "Essentially anything someone with a 100 IQ can do. The 8-point difference is negligible in practice. College, professional careers, management roles, and entrepreneurship are all achievable. Focus on developing specific skills and domain expertise rather than worrying about a number." },
    ],
  },
  98: {
    score: 98,
    classification: "Average",
    percentile: "45th",
    rarity: "Most common",
    detailedExplanation: "An IQ of 98 is virtually identical to the population average of 100. At the 45th percentile, you score higher than 45% of people — essentially the middle of the bell curve. The 2-point difference from 100 is completely meaningless in practical terms and falls well within the standard error of any IQ test. If you score 98, you are statistically indistinguishable from someone who scores 100.",
    careerContext: "A 98 IQ is functionally equivalent to 100 for all career purposes. No employer, university, or training program would distinguish between these scores. Every career path is open to you, and your success will depend entirely on your specific skills, education, motivation, and opportunities rather than a 2-point deviation from the mean.",
    faqItems: [
      { question: "Is 98 a good IQ score?", answer: "Yes, 98 is a perfectly average score. It is statistically indistinguishable from 100. The 2-point difference is within the margin of error of any IQ test. You are exactly where most humans are." },
      { question: "Is 98 below average IQ?", answer: "Technically 2 points below the mean, but this is meaningless. IQ tests have a standard error of 3-5 points, meaning a 98 could just as easily be a 100, 101, or 96. Psychologists would classify 98 as average without qualification." },
      { question: "Should I worry about a 98 IQ?", answer: "Absolutely not. A 98 is the definition of normal. It places you in the most common range of human intelligence. Your IQ is not a bottleneck for any life goal." },
    ],
  },
  102: {
    score: 102,
    classification: "Average",
    percentile: "55th",
    rarity: "Most common",
    detailedExplanation: "An IQ of 102 is just 2 points above the mean of 100, placing you at the 55th percentile. Like a 98, this score is functionally identical to 100. You are in the dead center of the normal distribution. About 55% of people score at or below this level. The notion that 102 is 'above average' while 98 is 'below average' is technically true but practically meaningless — these scores represent identical real-world cognitive ability.",
    careerContext: "At 102, you have the same career outlook as anyone scoring 100. The 2-point advantage is invisible in any practical context. Focus your energy on developing expertise in a field you enjoy rather than thinking about IQ points. Skills, relationships, and persistence determine career trajectories far more than this marginal difference.",
    faqItems: [
      { question: "Is 102 a good IQ score?", answer: "Yes, 102 is a good, average score at the 55th percentile. It is functionally identical to 100. You are right in the middle of normal human cognitive ability." },
      { question: "Is 102 above average?", answer: "Technically yes, by 2 points. But this difference is within the margin of error of IQ tests. Psychologists classify 90-109 as average. At 102, you are in the center of the average range — neither notably above nor below." },
      { question: "What does a 102 IQ mean for my life?", answer: "It means IQ is not a factor you need to think about. A 102 places you squarely in the middle of normal cognitive ability. Your life outcomes will depend on your choices, opportunities, work ethic, and relationships — not on 2 IQ points above the mean." },
    ],
  },
  108: {
    score: 108,
    classification: "Average",
    percentile: "70th",
    rarity: "Common",
    detailedExplanation: "An IQ of 108 is at the upper end of the average range, approaching the high average threshold of 110. At the 70th percentile, you score higher than about 70% of the population. While still classified as average, a 108 represents a slight but noticeable cognitive edge — you likely learn new material a bit faster, perform slightly better on standardized tests, and handle complex information with a bit more ease than someone scoring 100.",
    careerContext: "At 108, you have a subtle cognitive advantage that, while classified as average, places you in a good position for careers requiring moderate analytical thinking. Most college programs, professional training, and management roles are comfortably within reach. Many successful people in business, education, and the professions score in this range.",
    faqItems: [
      { question: "Is 108 a good IQ score?", answer: "Yes, 108 is a good score at the 70th percentile — you score higher than about 70% of people. While still classified as average, you are at the upper end of the average range, near the high average threshold." },
      { question: "Is 108 close to above average?", answer: "Yes. The high average range begins at 110, so 108 is just 2 points below that threshold. In practice, someone scoring 108 would perform very similarly to someone scoring 110 or 112. You are on the cusp of high average." },
      { question: "What opportunities does a 108 IQ provide?", answer: "A 108 IQ provides a comfortable foundation for most career paths. College degrees, professional certifications, and management roles are all accessible. You have slightly more cognitive headroom than the average person for handling complex information and learning new skills." },
    ],
  },
};

export const iqScores = Object.keys(iqScoreData).map(Number).sort((a, b) => a - b);

export function getAdjacentScores(score: number): number[] {
  const idx = iqScores.indexOf(score);
  const adjacent: number[] = [];
  if (idx > 0) adjacent.push(iqScores[idx - 1]);
  if (idx < iqScores.length - 1) adjacent.push(iqScores[idx + 1]);
  return adjacent;
}
