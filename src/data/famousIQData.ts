export interface FamousIQInfo {
  name: string;
  slug: string;
  estimatedIQ: string;
  knownFor: string;
  description: string;
  iqContext: string;
  faqItems: { question: string; answer: string }[];
}

export const famousIQData: FamousIQInfo[] = [
  {
    name: "Albert Einstein",
    slug: "albert-einstein",
    estimatedIQ: "160",
    knownFor: "Theory of Relativity, Nobel Prize in Physics",
    description: "Albert Einstein is perhaps the most iconic genius in history. His estimated IQ of 160 places him in the exceptionally gifted range, though he never took a modern IQ test. Einstein revolutionized physics with his theories of special and general relativity, fundamentally changing our understanding of space, time, and gravity. Interestingly, Einstein was a late talker as a child and reportedly struggled in some school subjects, which is often cited as evidence that IQ doesn't capture every dimension of intellectual potential.",
    iqContext: "An IQ of 160 is extraordinarily rare — approximately 1 in 31,000 people score this high. At this level, cognitive processing is qualitatively different from the average person. Einstein's ability to conduct thought experiments — visualizing himself riding alongside a beam of light, for example — demonstrates the kind of abstract spatial reasoning that very high IQ enables. However, Einstein himself credited curiosity and persistence over raw intelligence for his breakthroughs.",
    faqItems: [
      { question: "What was Albert Einstein's IQ?", answer: "Einstein's IQ is estimated at around 160, though he never took a standardized IQ test. This estimate is based on analysis of his cognitive abilities and academic achievements. A score of 160 places him in the top 0.003% of the population." },
      { question: "Was Einstein a slow learner as a child?", answer: "Einstein was a late talker and reportedly disliked rote memorization in school, but he was not a slow learner. He excelled in mathematics and physics from a young age. The myth of Einstein as a poor student likely stems from a misunderstanding of the Swiss grading system and his rebellious attitude toward rigid teaching methods." },
      { question: "Could Einstein's IQ really be measured?", answer: "Not precisely. Einstein died in 1955 and never took a modern IQ test. The estimate of 160 is retroactive, based on his demonstrated cognitive abilities. Some researchers estimate it could have been even higher, possibly 180+, but such extreme scores are inherently speculative." },
    ],
  },
  {
    name: "Stephen Hawking",
    slug: "stephen-hawking",
    estimatedIQ: "160",
    knownFor: "Black hole radiation, A Brief History of Time",
    description: "Stephen Hawking was one of the most brilliant theoretical physicists of the modern era, with an estimated IQ of 160. Despite being diagnosed with ALS at age 21 and gradually losing almost all physical function, Hawking made groundbreaking contributions to cosmology, including his prediction that black holes emit radiation (Hawking radiation). His ability to perform complex mathematical physics entirely in his head — after losing the ability to write — demonstrates extraordinary cognitive capacity.",
    iqContext: "When asked about his IQ, Hawking famously replied, 'I have no idea. People who boast about their IQ are losers.' This response highlights an important truth: even among the most gifted minds, IQ is seen as a tool rather than a trophy. Hawking's achievements demonstrate that exceptional intelligence combined with extraordinary determination can overcome even the most severe physical limitations.",
    faqItems: [
      { question: "What was Stephen Hawking's IQ?", answer: "Stephen Hawking's IQ is estimated at around 160, the same as Einstein's. However, Hawking himself dismissed the importance of IQ scores, saying 'People who boast about their IQ are losers.' His achievements in theoretical physics speak louder than any test score." },
      { question: "How did Hawking do physics without being able to write?", answer: "Hawking developed an extraordinary ability to think in pictures and geometric shapes, performing complex calculations entirely in his head. He described thinking about physics in terms of visual mental images rather than equations. His collaborators would help translate these ideas into mathematical formalism." },
      { question: "Is 160 the highest IQ possible?", answer: "No. Standard IQ tests can measure above 160, and some specialized tests go higher. People like Terence Tao (estimated 225-230) and Marilyn vos Savant (recorded 228) have scored significantly higher. However, scores above 160 are extremely rare and increasingly difficult to measure reliably." },
    ],
  },
  {
    name: "Elon Musk",
    slug: "elon-musk",
    estimatedIQ: "150–155",
    knownFor: "Tesla, SpaceX, CEO and entrepreneur",
    description: "Elon Musk's IQ is estimated between 150 and 155, placing him in the exceptionally gifted range. Musk has demonstrated extraordinary ability to master complex technical domains — from rocket engineering to artificial intelligence to electric vehicle design — and to synthesize knowledge across fields. His capacity to manage multiple technically complex companies simultaneously suggests exceptional working memory and processing capacity.",
    iqContext: "Musk's story illustrates that exceptional IQ is necessary but not sufficient for his level of achievement. His 80-100 hour work weeks, willingness to risk personal fortune, and ability to attract talented people are equally important. Many people with similar IQs lead quiet professional lives. What distinguishes Musk is the combination of high cognitive ability with extreme drive, risk tolerance, and vision — traits that IQ tests don't measure.",
    faqItems: [
      { question: "What is Elon Musk's IQ?", answer: "Elon Musk's IQ is estimated between 150 and 155. He has not publicly taken a verified IQ test. This estimate is based on his academic background (physics and economics degrees from Penn), his ability to master multiple complex technical fields, and analysis by IQ researchers." },
      { question: "Is Elon Musk a genius?", answer: "By most definitions, yes. An IQ of 150+ places someone in the top 0.04% of the population, well beyond the commonly cited genius threshold of 140. However, Musk's success comes from combining high intelligence with extreme work ethic, risk-taking, and entrepreneurial vision." },
      { question: "How does Musk learn so many fields?", answer: "Musk has described his learning process as building knowledge from first principles — breaking subjects down to fundamental truths and reasoning up from there. This approach, combined with very high IQ and voracious reading (he reportedly read the entire Encyclopedia Britannica as a child), allows him to rapidly master new domains." },
    ],
  },
  {
    name: "Leonardo da Vinci",
    slug: "leonardo-da-vinci",
    estimatedIQ: "180–200",
    knownFor: "Mona Lisa, inventor, polymath",
    description: "Leonardo da Vinci is widely considered the greatest polymath in human history, with an estimated IQ between 180 and 200. He made groundbreaking contributions to painting, sculpture, architecture, science, mathematics, engineering, anatomy, geology, astronomy, and botany — centuries before specialization became the norm. Da Vinci's notebooks reveal a mind that was simultaneously artistic and scientific, practical and theoretical, observational and imaginative.",
    iqContext: "If da Vinci's IQ estimate is accurate, he would be among the most cognitively gifted humans who ever lived — roughly 1 in 10 million at the 180 level. His ability to excel in both creative and analytical domains challenges the common assumption that people are either 'left-brained' or 'right-brained.' Da Vinci demonstrates that at the highest levels of intelligence, the boundaries between art and science dissolve.",
    faqItems: [
      { question: "What was Leonardo da Vinci's IQ?", answer: "Da Vinci's IQ is estimated between 180 and 200, though this is highly speculative since he lived 500 years before modern IQ testing. This estimate reflects his extraordinary achievements across art, science, engineering, and anatomy — a breadth of genius unmatched in recorded history." },
      { question: "Was da Vinci the smartest person ever?", answer: "Possibly. By the breadth and depth of his achievements across unrelated fields, da Vinci may represent the highest combination of cognitive abilities ever documented. However, comparing intelligence across centuries is inherently imprecise, and other candidates (Newton, Goethe, John von Neumann) are also cited." },
      { question: "How accurate are historical IQ estimates?", answer: "Historical IQ estimates are educated guesses, not measurements. Researchers analyze the subject's achievements, writings, and known cognitive feats to estimate what their IQ might have been on a modern test. These estimates can vary by 20+ points between researchers and should be treated as rough approximations." },
    ],
  },
  {
    name: "Nikola Tesla",
    slug: "nikola-tesla",
    estimatedIQ: "160–200",
    knownFor: "AC electricity, Tesla coil, inventor",
    description: "Nikola Tesla, the inventor who made alternating current electricity practical, is estimated to have had an IQ between 160 and 200. Tesla possessed an extraordinary ability to visualize complex three-dimensional machines in his mind, mentally testing them before ever building a physical prototype. He claimed to be able to run entire simulated experiments in his imagination, identifying design flaws without physical testing. Tesla held over 300 patents and his inventions form the foundation of modern electrical power systems.",
    iqContext: "Tesla's particular cognitive gift was visual-spatial intelligence of a degree that borders on synesthesia — he reportedly could visualize objects with such clarity that they appeared real. This extreme spatial ability, combined with deep mathematical and engineering knowledge, allowed him to invent at an almost superhuman rate. Tesla's story also illustrates the dark side of extreme intelligence: he struggled financially, had difficulty with interpersonal relationships, and developed obsessive behaviors later in life.",
    faqItems: [
      { question: "What was Nikola Tesla's IQ?", answer: "Tesla's IQ is estimated between 160 and 200, reflecting his extraordinary inventive genius. He never took a modern IQ test, so this is an approximation based on his cognitive abilities — particularly his legendary capacity for three-dimensional visualization and his mastery of electrical engineering." },
      { question: "Was Tesla smarter than Edison?", answer: "Tesla likely had a higher IQ than Edison (estimated at 145-160). Tesla was more theoretically brilliant, while Edison was a more effective practical inventor and businessman. Tesla could design complete systems in his mind; Edison preferred systematic trial-and-error experimentation." },
      { question: "Why did Tesla die poor if he was so smart?", answer: "Tesla's story is a powerful illustration that IQ alone doesn't guarantee worldly success. Tesla lacked business acumen, gave away valuable patents, struggled with interpersonal relationships, and was exploited by business partners. His high IQ was a tool for invention but not for navigating the social and financial world." },
    ],
  },
  {
    name: "Bill Gates",
    slug: "bill-gates",
    estimatedIQ: "150–160",
    knownFor: "Microsoft co-founder, philanthropist",
    description: "Bill Gates, co-founder of Microsoft and one of the world's most successful entrepreneurs, has an estimated IQ of 150–160. Gates scored 1590 out of 1600 on the SAT (old scale), suggesting exceptional cognitive ability. He dropped out of Harvard — not because he struggled, but because he saw an opportunity in personal computing that couldn't wait. Gates is known for his ability to rapidly process complex information, his deep technical knowledge, and his systematic approach to problem-solving.",
    iqContext: "Gates represents the archetype of high IQ combined with relentless execution. His SAT score alone suggests an IQ around 150+. But his success at Microsoft came from combining cognitive ability with business strategy, competitive instinct, and the ability to identify and exploit market opportunities. In his philanthropic work, Gates applies the same analytical approach to global health and education that he used to build Microsoft.",
    faqItems: [
      { question: "What is Bill Gates' IQ?", answer: "Bill Gates' IQ is estimated at 150-160. He scored 1590 out of 1600 on the SAT, which correlates with an IQ well above 140. Gates has not publicly disclosed a formal IQ test result, but his academic achievements and cognitive abilities consistently suggest exceptional intelligence." },
      { question: "Did Bill Gates finish college?", answer: "No. Gates dropped out of Harvard after two years to co-found Microsoft with Paul Allen. He was not struggling academically — he left because he recognized an urgent business opportunity. Harvard awarded him an honorary degree in 2007. His dropout success story is often misinterpreted as evidence that education doesn't matter." },
      { question: "How does Gates compare to other tech founders?", answer: "Gates' estimated IQ (150-160) is comparable to other tech luminaries: Elon Musk (150-155), Mark Zuckerberg (estimated 140-150), and Steve Jobs (estimated 130-145). However, each founder's success depended on different combinations of intelligence, timing, vision, and personality traits." },
    ],
  },
  {
    name: "Marie Curie",
    slug: "marie-curie",
    estimatedIQ: "180–200",
    knownFor: "Discovery of radium and polonium, two Nobel Prizes",
    description: "Marie Curie, the only person to win Nobel Prizes in two different sciences (physics and chemistry), is estimated to have had an IQ between 180 and 200. Curie's achievements are even more remarkable considering the extreme gender discrimination she faced in early 20th-century academia. She discovered two elements (radium and polonium), pioneered research on radioactivity, and developed mobile X-ray units that saved countless soldiers' lives during World War I.",
    iqContext: "Curie's story powerfully demonstrates that IQ exists independently of gender, cultural background, and social barriers. Despite being denied a university education in her native Poland (because she was female), denied membership in the French Academy of Sciences (because she was a woman), and facing xenophobic press coverage, Curie's intellectual abilities shone through every obstacle. Her estimated IQ places her among the most cognitively gifted humans in recorded history.",
    faqItems: [
      { question: "What was Marie Curie's IQ?", answer: "Marie Curie's IQ is estimated between 180 and 200. This estimate reflects her extraordinary scientific achievements — winning two Nobel Prizes in different fields is a feat no other person has accomplished. She demonstrated exceptional analytical, mathematical, and experimental abilities." },
      { question: "Was Marie Curie the smartest woman in history?", answer: "Curie is certainly among the most accomplished scientists of any gender. Whether she had the 'highest IQ' among all women is unknowable, as IQ testing didn't exist in her era. Her achievements in the face of severe gender discrimination suggest cognitive abilities of the very highest order." },
      { question: "How did Curie succeed despite discrimination?", answer: "Curie's extraordinary intelligence allowed her scientific work to speak for itself despite persistent sexism. She moved from Poland to France to access education, worked in inadequate laboratory conditions, and relied on the quality of her research to overcome institutional barriers. Her story shows that extreme cognitive ability can partially — though not fully — overcome systemic discrimination." },
    ],
  },
  {
    name: "Isaac Newton",
    slug: "isaac-newton",
    estimatedIQ: "190–200",
    knownFor: "Laws of motion, calculus, gravity",
    description: "Sir Isaac Newton is widely regarded as one of the most influential scientists who ever lived, with an estimated IQ of 190–200. Newton invented calculus (simultaneously with Leibniz), formulated the laws of motion and universal gravitation, built the first reflecting telescope, and made fundamental contributions to optics. He accomplished much of this work during a single extraordinary period in 1665–1666 (his 'annus mirabilis'), when Cambridge closed due to plague and Newton, just 23 years old, retreated to his family farm.",
    iqContext: "Newton's estimated IQ of 190–200 would place him among the 2–3 most cognitively gifted humans in recorded history. His ability to invent an entirely new branch of mathematics (calculus) because he needed it to solve physics problems demonstrates cognitive ability that goes beyond what IQ tests can meaningfully measure. However, Newton was also famously difficult, vindictive toward rivals, and possibly on the autism spectrum — reminding us that extreme intelligence doesn't guarantee social or emotional wellbeing.",
    faqItems: [
      { question: "What was Isaac Newton's IQ?", answer: "Newton's IQ is estimated at 190-200, among the highest estimates for any historical figure. This reflects his unparalleled contributions to mathematics, physics, and optics. He invented calculus, formulated the laws of motion, and described universal gravitation — foundational achievements that shaped all subsequent science." },
      { question: "Was Newton smarter than Einstein?", answer: "Most historians of science consider Newton and Einstein comparable in genius, with Newton perhaps having a slight edge due to the sheer breadth of his contributions (mathematics, physics, optics, and even alchemy/chemistry). Einstein's work was more focused but equally revolutionary. The comparison is inherently subjective." },
      { question: "Did Newton really discover gravity from a falling apple?", answer: "The apple story is likely embellished but has some basis in fact. Newton himself told the story to friends, saying that seeing an apple fall prompted him to wonder whether the same force that pulled the apple extended to the Moon. The key insight wasn't that things fall — everyone knew that — but that gravity is universal and follows a precise mathematical law." },
    ],
  },
  {
    name: "Steve Jobs",
    slug: "steve-jobs",
    estimatedIQ: "130–145",
    knownFor: "Apple co-founder, iPhone, Macintosh",
    description: "Steve Jobs had an estimated IQ of 130–145, placing him in the gifted range. Jobs was not a programmer or engineer — his genius was in design thinking, product vision, and understanding what consumers wanted before they knew it themselves. He combined high cognitive ability with extraordinary aesthetic sense, persuasion skills, and relentless perfectionism to create products that transformed entire industries.",
    iqContext: "Jobs demonstrates that the type of intelligence matters as much as the amount. His particular gifts — spatial design sense, ability to simplify complexity, and talent for connecting technology with human experience — don't map neatly onto traditional IQ subtests. Jobs dropped out of Reed College after one semester, yet his calligraphy class there inspired the Mac's beautiful typography. His story shows how unconventional intelligence can reshape the world.",
    faqItems: [
      { question: "What was Steve Jobs' IQ?", answer: "Steve Jobs' IQ is estimated at 130–145. He never publicly disclosed a score. His intelligence was more evident in design vision, product strategy, and persuasion than in traditional academic measures." },
      { question: "Was Steve Jobs smarter than Bill Gates?", answer: "Gates likely has a higher traditional IQ (150-160 vs 130-145 for Jobs). However, Jobs had superior design intuition and product vision. They represent different types of intelligence — Gates excels at analytical and technical thinking, while Jobs excelled at creative and experiential thinking." },
      { question: "Did Jobs succeed because of his IQ?", answer: "Partly, but Jobs' success owed as much to his design obsession, reality distortion field (persuasion ability), perfectionism, and timing. Many people with higher IQs never achieve comparable success. Jobs combined good-enough intelligence with extraordinary vision and drive." },
    ],
  },
  {
    name: "Mark Zuckerberg",
    slug: "mark-zuckerberg",
    estimatedIQ: "140–150",
    knownFor: "Facebook/Meta founder, social media pioneer",
    description: "Mark Zuckerberg's IQ is estimated at 140–150 based on his academic achievements and technical abilities. Zuckerberg was a programming prodigy who built a music recommendation system in high school that Microsoft offered to buy. At Harvard, he built Facebook in his dorm room while also excelling in his computer science and psychology courses. His ability to code complex systems and simultaneously understand social dynamics reflects both technical and social intelligence.",
    iqContext: "Zuckerberg scored 1590 on his SAT, suggesting an IQ in the 140+ range. His combination of programming skill and social insight — understanding how people connect and share online — enabled Facebook's explosive growth. However, his career also shows that high IQ doesn't guarantee wisdom: Facebook has faced persistent criticism for privacy violations and societal impacts that a more emotionally intelligent leader might have foreseen.",
    faqItems: [
      { question: "What is Mark Zuckerberg's IQ?", answer: "Zuckerberg's IQ is estimated at 140-150. He scored 1590 on the SAT and was a programming prodigy from a young age. His ability to build complex systems while understanding social dynamics suggests both high analytical and social intelligence." },
      { question: "Is Zuckerberg a genius?", answer: "By IQ standards, likely yes — an estimated 140-150 exceeds the commonly cited 140 genius threshold. His achievement of building the world's largest social network while still a teenager is consistent with exceptional cognitive ability." },
      { question: "How does Zuckerberg compare to other tech founders?", answer: "Zuckerberg's estimated IQ (140-150) is comparable to Gates (150-160) and Musk (150-155). All three combined exceptional technical ability with business vision, though their specific cognitive strengths differ." },
    ],
  },
  {
    name: "Barack Obama",
    slug: "barack-obama",
    estimatedIQ: "130–145",
    knownFor: "44th US President, Harvard Law Review",
    description: "Barack Obama's IQ is estimated between 130 and 145, placing him in the gifted range. Obama graduated magna cum laude from Harvard Law School and was the first African American president of the Harvard Law Review — achievements that require exceptional verbal reasoning and analytical ability. His ability to deliver complex, nuanced speeches without teleprompter failures and to synthesize policy information across diverse domains suggests strong cognitive flexibility.",
    iqContext: "Obama's intelligence is particularly evident in his verbal and interpersonal domains. His memoir writing, constitutional law teaching at University of Chicago, and ability to communicate complex ideas accessibly all reflect high verbal IQ. Political leadership at the presidential level requires managing vast amounts of information, making decisions under uncertainty, and communicating with diverse audiences — all cognitively demanding tasks that go beyond what IQ tests measure.",
    faqItems: [
      { question: "What is Barack Obama's IQ?", answer: "Obama's IQ is estimated at 130-145. He graduated magna cum laude from Harvard Law School and led the Harvard Law Review, achievements that suggest superior verbal and analytical intelligence. No verified IQ score has been publicly disclosed." },
      { question: "Do presidents have high IQs?", answer: "Research estimates most US presidents had IQs between 120 and 145. The demands of the presidency — policy analysis, strategic thinking, communication, crisis management — select for high cognitive ability. However, emotional intelligence and political instinct matter equally." },
      { question: "Is Obama one of the smartest presidents?", answer: "Most rankings place Obama among the more intellectually gifted presidents, alongside Jefferson, Lincoln, and Clinton. His legal scholarship and rhetorical ability suggest particularly strong verbal intelligence. However, presidential intelligence is difficult to compare across different eras." },
    ],
  },
  {
    name: "Kim Kardashian",
    slug: "kim-kardashian",
    estimatedIQ: "115–125",
    knownFor: "Media mogul, entrepreneur, law student",
    description: "Kim Kardashian's IQ is estimated at 115–125 — above average and possibly in the superior range. While often dismissed as merely famous, Kardashian has built a multi-billion dollar business empire spanning beauty, fashion, media, and technology. She is studying to become a lawyer through California's alternative path (the Law Office Study Program), passing the 'baby bar' exam after multiple attempts. Her business achievements require strategic thinking, brand management, and negotiation skills.",
    iqContext: "Kardashian's story challenges assumptions about the relationship between IQ and public perception. Her estimated IQ places her above roughly 85-95% of the population, yet she is rarely perceived as highly intelligent. This disconnect highlights cultural biases about who 'looks smart' and the reality that business empire-building requires substantial cognitive ability regardless of how a person is perceived by the public.",
    faqItems: [
      { question: "What is Kim Kardashian's IQ?", answer: "Kim Kardashian's IQ is estimated at 115-125, placing her in the high average to superior range. No verified test score exists. This estimate reflects her demonstrated business acumen, media strategy skills, and pursuit of a legal career." },
      { question: "Is Kim Kardashian actually smart?", answer: "By objective measures, yes. Building a multi-billion dollar brand empire requires strategic thinking, negotiation skill, and business intelligence. Her pursuit of a law career demonstrates analytical ability. Her IQ is likely above 85-95% of the population." },
      { question: "How did Kim Kardashian pass the bar exam?", answer: "Kardashian is pursuing law through California's Law Office Study Program (an apprenticeship alternative to law school). She passed the First-Year Law Students' Examination ('baby bar') in 2021 after multiple attempts. This exam has a pass rate of only 20%, requiring genuine legal analytical ability." },
    ],
  },
  {
    name: "Cristiano Ronaldo",
    slug: "cristiano-ronaldo",
    estimatedIQ: "105–115",
    knownFor: "Football/soccer legend, 5 Ballon d'Or awards",
    description: "Cristiano Ronaldo's IQ is estimated at 105–115, in the average to high average range. While Ronaldo's intelligence is rarely discussed, elite athletic performance requires substantial cognitive ability — rapid decision-making, spatial processing, pattern recognition, and the ability to anticipate opponents' movements. Studies show elite athletes score above average on cognitive tests measuring reaction time, spatial awareness, and executive function.",
    iqContext: "Ronaldo's story illustrates that bodily-kinesthetic intelligence — the ability to control movement with precision and grace — is a genuine form of cognitive ability that IQ tests largely ignore. His ability to process visual information, calculate trajectories, and execute complex motor sequences in milliseconds during matches represents extraordinary neural processing. Elite sports require 'game intelligence' that combines pattern recognition, decision-making speed, and spatial awareness.",
    faqItems: [
      { question: "What is Cristiano Ronaldo's IQ?", answer: "Ronaldo's IQ is estimated at 105-115, above average. However, his athletic intelligence — spatial processing, decision-making speed, and pattern recognition on the field — represents cognitive abilities that standard IQ tests don't fully capture." },
      { question: "Are professional athletes smart?", answer: "Research shows elite athletes score above average on cognitive tests measuring executive function, reaction time, and spatial processing. The cognitive demands of elite sports — rapid decision-making under pressure, reading opponents, executing complex strategies — require genuine intelligence." },
      { question: "Is athletic intelligence the same as IQ?", answer: "No. Athletic or bodily-kinesthetic intelligence involves spatial processing, motor control, and rapid decision-making under physical stress. While it correlates modestly with traditional IQ, it represents a distinct cognitive domain. Someone can have average IQ but extraordinary athletic intelligence, or vice versa." },
    ],
  },
];

export function getFamousPersonBySlug(slug: string): FamousIQInfo | undefined {
  return famousIQData.find((p) => p.slug === slug);
}

export const famousPersonSlugs = famousIQData.map((p) => p.slug);
