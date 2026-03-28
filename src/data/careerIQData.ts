export interface CareerIQInfo {
  career: string;
  slug: string;
  avgIQRange: string;
  minIQ: number;
  maxIQ: number;
  description: string;
  educationPath: string;
  relatedCareers: string[];
  faqItems: { question: string; answer: string }[];
}

export const careerIQData: CareerIQInfo[] = [
  {
    career: "Doctor",
    slug: "doctor",
    avgIQRange: "120–130",
    minIQ: 120,
    maxIQ: 130,
    description: "Physicians and surgeons typically score in the superior to gifted IQ range. Medical school requires strong analytical reasoning, massive information retention, and the ability to make rapid decisions under pressure. The MCAT entrance exam correlates heavily with cognitive ability. However, bedside manner, empathy, and communication skills are equally critical for patient outcomes — traits IQ tests don't measure.",
    educationPath: "Becoming a doctor requires a bachelor's degree (4 years), medical school (4 years), and residency (3–7 years depending on specialty). This 11–15 year training pipeline selects for both cognitive ability and sustained dedication. Board certification exams further filter for knowledge mastery.",
    relatedCareers: ["nurse", "pharmacist", "dentist"],
    faqItems: [
      { question: "What IQ do you need to be a doctor?", answer: "Most physicians have IQs between 120 and 130, though some specialties like neurosurgery may average higher. The MCAT and medical school curriculum require strong analytical and memory skills, but becoming a great doctor also demands empathy, communication, and resilience." },
      { question: "Can someone with an average IQ become a doctor?", answer: "It would be very challenging. The cognitive demands of medical school — memorizing thousands of conditions, drugs, and procedures while applying complex reasoning — typically require above-average cognitive ability. However, exceptional work ethic and study skills can partially compensate." },
      { question: "Which medical specialties have the highest IQ?", answer: "Research suggests neurosurgery, cardiothoracic surgery, and radiology tend to attract physicians with the highest cognitive test scores. Primary care and family medicine, while equally valuable, tend to have slightly lower average scores but require broader knowledge bases." },
    ],
  },
  {
    career: "Lawyer",
    slug: "lawyer",
    avgIQRange: "115–130",
    minIQ: 115,
    maxIQ: 130,
    description: "Attorneys typically score in the high average to superior range. Law requires exceptional verbal reasoning, logical argumentation, and the ability to hold complex rule systems in working memory. The LSAT, required for law school admission, is essentially a reasoning test that correlates strongly with IQ. Top-tier law firms and federal clerkships tend to draw from the higher end of this range.",
    educationPath: "A law career requires a bachelor's degree (4 years) followed by a Juris Doctor (3 years). Passing the bar exam is required for licensure. Many top lawyers also pursue clerkships or LLM degrees. The path rewards strong reading comprehension, analytical writing, and oral argumentation skills.",
    relatedCareers: ["judge", "accountant", "professor"],
    faqItems: [
      { question: "What IQ do you need to be a lawyer?", answer: "Most lawyers have IQs between 115 and 130. The LSAT, which is required for law school admission, heavily tests logical reasoning and reading comprehension — skills closely related to IQ. However, successful lawyering also requires strong interpersonal skills, persuasion, and emotional resilience." },
      { question: "Do corporate lawyers have higher IQs than other lawyers?", answer: "Not necessarily. Different legal specialties emphasize different cognitive strengths. Corporate and patent lawyers may score higher on quantitative reasoning, while trial lawyers may excel in verbal and social intelligence. All legal careers require strong analytical ability." },
      { question: "Is law school harder than medical school?", answer: "They test different abilities. Law school emphasizes analytical reading, argumentation, and legal reasoning. Medical school demands massive memorization and scientific problem-solving. Both require high cognitive ability, but the skill profiles differ significantly." },
    ],
  },
  {
    career: "Engineer",
    slug: "engineer",
    avgIQRange: "115–128",
    minIQ: 115,
    maxIQ: 128,
    description: "Engineers across all disciplines tend to score in the high average to superior range, with particularly strong spatial and mathematical reasoning. Engineering requires the ability to think in systems, model complex physical phenomena, and solve novel problems with quantitative precision. Software engineers, electrical engineers, and aerospace engineers tend to score at the higher end of the range.",
    educationPath: "Engineering typically requires a bachelor's degree in an engineering discipline (4 years), often followed by a master's degree for specialization. Professional Engineer (PE) licensure is required in some fields. The curriculum is math-heavy from day one, with calculus, differential equations, and physics forming the foundation.",
    relatedCareers: ["software-developer", "architect", "data-scientist"],
    faqItems: [
      { question: "What IQ do you need to be an engineer?", answer: "Most engineers have IQs between 115 and 128. Engineering programs are math-intensive and require strong spatial and analytical reasoning. However, practical problem-solving skills, creativity, and teamwork are equally important for engineering success." },
      { question: "Which engineering field requires the highest IQ?", answer: "Aerospace, electrical, and nuclear engineering tend to have the highest average cognitive test scores among engineering disciplines. Software engineering and data science also score high. Civil and industrial engineering, while still demanding, may have slightly lower averages." },
      { question: "Can you be an engineer with a 100 IQ?", answer: "It would be difficult in traditional engineering programs, which are heavily math-based. However, some engineering-adjacent roles like engineering technology, technical drafting, or construction management have lower cognitive barriers while still offering rewarding technical careers." },
    ],
  },
  {
    career: "Software Developer",
    slug: "software-developer",
    avgIQRange: "110–125",
    minIQ: 110,
    maxIQ: 125,
    description: "Software developers and programmers typically score in the high average to superior range, with particular strength in logical and abstract reasoning. Programming requires building complex mental models, debugging through systematic logic, and learning new languages and frameworks continuously. The field is notable for being accessible without a traditional degree — self-taught developers can succeed if they have the cognitive aptitude.",
    educationPath: "Software development can be entered through a computer science degree (4 years), coding bootcamps (3–6 months), or self-study. Many successful developers are self-taught. The field values demonstrable skill over credentials, making it one of the most meritocratic career paths available.",
    relatedCareers: ["engineer", "data-scientist", "accountant"],
    faqItems: [
      { question: "What IQ do you need to be a software developer?", answer: "Most software developers have IQs between 110 and 125. Programming requires strong logical reasoning and pattern recognition. However, the field is notably accessible through self-teaching and bootcamps, and practical coding skill matters more than test scores." },
      { question: "Do you need to be smart to code?", answer: "You need good logical thinking ability, but you don't need to be a genius. Many successful programmers have above-average but not exceptional IQs. Persistence, curiosity, and the ability to learn continuously are often more important than raw cognitive ability." },
      { question: "Are software developers smarter than other professionals?", answer: "Software developers score above average on cognitive tests but not higher than doctors, lawyers, or scientists. Their particular strength tends to be in logical and abstract reasoning rather than verbal or general knowledge domains." },
    ],
  },
  {
    career: "Teacher",
    slug: "teacher",
    avgIQRange: "105–120",
    minIQ: 105,
    maxIQ: 120,
    description: "Teachers typically score in the average to high average range, though this varies significantly by subject and level. High school math and science teachers tend to score higher than elementary teachers. Teaching requires strong verbal communication, patience, and the ability to explain complex concepts at multiple levels of understanding — a skill that correlates with but is distinct from IQ.",
    educationPath: "Teaching requires a bachelor's degree and teaching certification in most states. Many teachers pursue master's degrees for salary advancement. Special education, STEM subjects, and gifted education often require additional credentials. The path emphasizes pedagogy, child development, and subject mastery.",
    relatedCareers: ["professor", "nurse", "social-worker"],
    faqItems: [
      { question: "What IQ do you need to be a teacher?", answer: "Most teachers have IQs between 105 and 120. Teaching requires solid cognitive ability plus exceptional communication skills, patience, and emotional intelligence. Subject matter expertise is more important than raw IQ — a great math teacher needs strong math skills, not necessarily a 130 IQ." },
      { question: "Are teachers smart?", answer: "Yes. Teachers are typically above average in cognitive ability and have college degrees. More importantly, they possess skills that IQ tests don't measure well: the ability to explain complex ideas simply, manage group dynamics, and adapt instruction to diverse learners." },
      { question: "Do teachers with higher IQs produce better student outcomes?", answer: "Research shows teacher effectiveness depends more on pedagogical skill, subject knowledge, and relationship-building than on IQ. A teacher with an IQ of 110 who connects well with students will likely outperform a teacher with an IQ of 130 who lacks classroom management skills." },
    ],
  },
  {
    career: "Nurse",
    slug: "nurse",
    avgIQRange: "105–115",
    minIQ: 105,
    maxIQ: 115,
    description: "Registered nurses typically score in the average to high average range. Nursing requires strong applied science knowledge, critical thinking for patient assessment, and the ability to perform accurately under pressure. The cognitive demands have increased significantly as healthcare has become more complex, with nurses now managing sophisticated monitoring systems and making increasingly autonomous clinical decisions.",
    educationPath: "Registered nurses need either an Associate Degree in Nursing (2 years) or a Bachelor of Science in Nursing (4 years). Advanced practice nurses (nurse practitioners, nurse anesthetists) require a master's or doctoral degree. Licensure requires passing the NCLEX exam.",
    relatedCareers: ["doctor", "pharmacist", "social-worker"],
    faqItems: [
      { question: "What IQ do you need to be a nurse?", answer: "Most nurses have IQs between 105 and 115. Nursing requires solid analytical ability for patient assessment, medication management, and clinical decision-making. Advanced practice roles like nurse practitioners may require higher cognitive ability." },
      { question: "Is nursing school hard?", answer: "Yes, nursing school is academically demanding, requiring mastery of anatomy, pharmacology, pathophysiology, and clinical skills. However, the challenge is more about volume and applied knowledge than abstract reasoning. Strong study habits and dedication matter as much as IQ." },
      { question: "Do nurse practitioners have higher IQs than registered nurses?", answer: "On average, likely yes. Nurse practitioner programs require graduate-level education and more advanced clinical reasoning. However, the difference is modest, and many excellent RNs have the cognitive ability for advanced practice but choose bedside nursing by preference." },
    ],
  },
  {
    career: "Accountant",
    slug: "accountant",
    avgIQRange: "110–125",
    minIQ: 110,
    maxIQ: 125,
    description: "Accountants and CPAs typically score in the high average to superior range, with particular strength in quantitative reasoning and attention to detail. Accounting requires the ability to work with complex numerical systems, understand regulatory frameworks, and identify patterns in financial data. The CPA exam is notoriously difficult, with pass rates around 50%, serving as a significant cognitive filter.",
    educationPath: "Accounting requires a bachelor's degree in accounting or a related field. CPA certification requires 150 credit hours (typically a master's degree), passing the four-part CPA exam, and meeting experience requirements. The path rewards methodical thinking and precision.",
    relatedCareers: ["lawyer", "data-scientist", "software-developer"],
    faqItems: [
      { question: "What IQ do you need to be an accountant?", answer: "Most accountants have IQs between 110 and 125. The CPA exam requires strong quantitative reasoning and the ability to master complex tax and audit regulations. However, attention to detail and organizational skills are equally important as raw intelligence." },
      { question: "Is accounting a good career for smart people?", answer: "Accounting is excellent for people with strong analytical and quantitative skills who prefer structured, detail-oriented work. It offers stable employment, good compensation, and clear career progression. People who prefer creative or abstract work may find it less engaging." },
      { question: "What's the difference in IQ between accountants and financial analysts?", answer: "Financial analysts may score slightly higher on average (112-128) due to the more abstract and predictive nature of their work. Accountants focus more on systematic rule application, while analysts emphasize forecasting and strategic thinking." },
    ],
  },
  {
    career: "Police Officer",
    slug: "police-officer",
    avgIQRange: "100–115",
    minIQ: 100,
    maxIQ: 115,
    description: "Police officers typically score in the average to high average range. Law enforcement requires practical reasoning, quick decision-making under stress, situational awareness, and strong interpersonal skills. The cognitive demands of policing are often underestimated — officers must rapidly assess complex situations, apply legal knowledge, de-escalate conflicts, and write detailed reports, all within shifting and unpredictable environments.",
    educationPath: "Police officers typically need a high school diploma or associate degree, plus completion of a police academy program (4–6 months). Many departments increasingly prefer or require bachelor's degrees. Ongoing training in use of force, legal updates, and specialized skills continues throughout the career.",
    relatedCareers: ["detective", "firefighter", "military-officer"],
    faqItems: [
      { question: "What IQ do you need to be a police officer?", answer: "Most police officers have IQs between 100 and 115. The job requires solid practical reasoning, quick decision-making, and strong communication skills. Departments typically use aptitude tests during hiring, but emotional stability and physical fitness are equally important qualifications." },
      { question: "Do detectives have higher IQs than patrol officers?", answer: "Detective work requires more analytical and investigative reasoning, so detectives may score slightly higher on average. However, many excellent detectives develop their skills through experience rather than starting with higher cognitive test scores." },
      { question: "Can you be too smart to be a police officer?", answer: "Some departments have historically screened out very high scorers, fearing they would become bored and leave quickly. However, this practice is controversial and declining. Modern policing increasingly values higher education and analytical skills." },
    ],
  },
  {
    career: "Electrician",
    slug: "electrician",
    avgIQRange: "100–110",
    minIQ: 100,
    maxIQ: 110,
    description: "Electricians typically score in the average to high average range, with particular strength in spatial reasoning and practical problem-solving. Electrical work requires understanding complex systems, reading technical diagrams, performing mathematical calculations for load and resistance, and troubleshooting problems through systematic logic. It's one of the most cognitively demanding skilled trades.",
    educationPath: "Electricians typically complete a 4–5 year apprenticeship combining classroom instruction with on-the-job training. Licensure requires passing an exam demonstrating knowledge of electrical codes and theory. Many electricians earn over $80,000 annually, making it one of the highest-paying trades.",
    relatedCareers: ["plumber", "police-officer", "teacher"],
    faqItems: [
      { question: "What IQ do you need to be an electrician?", answer: "Most electricians have IQs between 100 and 110. The trade requires good mathematical ability, spatial reasoning, and systematic troubleshooting skills. It's one of the more intellectually demanding trades due to the complexity of electrical systems." },
      { question: "Is being an electrician intellectually challenging?", answer: "Yes. Electricians must understand electrical theory, read complex diagrams, calculate loads and resistance, comply with detailed building codes, and troubleshoot problems in systems they can't see. It requires more abstract thinking than many people realize." },
      { question: "How does an electrician's IQ compare to an engineer's?", answer: "Engineers (115-128) typically score higher than electricians (100-110) on standardized tests. However, electricians often have stronger hands-on spatial reasoning and practical problem-solving skills. Both careers require applying technical knowledge to real-world problems." },
    ],
  },
  {
    career: "Plumber",
    slug: "plumber",
    avgIQRange: "95–110",
    minIQ: 95,
    maxIQ: 110,
    description: "Plumbers score in the average range, with practical intelligence and spatial reasoning being particular strengths. Plumbing requires understanding fluid dynamics, reading blueprints, solving three-dimensional spatial problems, and troubleshooting complex systems. Master plumbers who run their own businesses also need business acumen and customer service skills that go well beyond what IQ tests measure.",
    educationPath: "Plumbers typically complete a 4–5 year apprenticeship with both classroom and hands-on training. Journeyman and master plumber licenses require passing exams on plumbing codes and theory. Many successful plumbers earn six-figure incomes, especially those who own their own businesses.",
    relatedCareers: ["electrician", "police-officer", "firefighter"],
    faqItems: [
      { question: "What IQ do you need to be a plumber?", answer: "Most plumbers have IQs between 95 and 110 — solidly in the average range. Plumbing requires good spatial reasoning, practical problem-solving, and the ability to read technical diagrams. Business-minded plumbers who run their own companies often earn six-figure incomes." },
      { question: "Is plumbing a good career for practical thinkers?", answer: "Absolutely. Plumbing is ideal for people with strong hands-on problem-solving skills who prefer physical work to desk work. It's recession-resistant, well-compensated, and offers entrepreneurial opportunities. Many plumbers earn more than college graduates." },
      { question: "Do you need to be smart to be a plumber?", answer: "You need solid practical intelligence and spatial reasoning. Plumbing involves real mathematics (calculating pipe grades, water pressure), reading complex blueprints, and solving puzzles in three-dimensional space. It's intellectually demanding in ways that standardized tests don't fully capture." },
    ],
  },
];

export function getCareerBySlug(slug: string): CareerIQInfo | undefined {
  return careerIQData.find((c) => c.slug === slug);
}

export const careerSlugs = careerIQData.map((c) => c.slug);
