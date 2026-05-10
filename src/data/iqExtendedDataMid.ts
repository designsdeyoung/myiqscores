export interface IQExtendedInfoMid {
  cognitiveProfile: string;   // 80-120 words: what cognitive abilities look like at this score
  researchContext: string;    // 60-80 words: what research says about this range, citing real studies
  realWorldScenarios: string; // 80-100 words: 2-3 concrete daily/work examples specific to this score
  satEquivalent: number;      // estimated SAT equivalent (old 1600 scale)
  actEquivalent: number;      // estimated ACT composite equivalent
}

export const iqExtendedDataMid: Record<number, IQExtendedInfoMid> = {
  91: {
    cognitiveProfile:
      "At IQ 91, working memory and processing speed are solidly functional, enabling competent handling of multi-step instructions and routine problem-solving. Abstract reasoning is adequate for everyday logic tasks but may slow on novel, unfamiliar material. Verbal comprehension supports clear communication and basic inference. Learning new procedures requires some repetition but retention is reliable once established. Individuals typically perform well in structured environments with clear expectations. Reading comprehension extends comfortably to general-audience text. Numeracy is sufficient for budgeting, measurement, and workplace calculations without difficulty.",
    researchContext:
      "Gottfredson's (1997) threshold model notes that IQ scores in the low-to-mid 90s provide sufficient cognitive horsepower for the majority of civilian occupations listed in the Dictionary of Occupational Titles. Research by Schmidt and Hunter (1998) in Psychological Bulletin confirms that general mental ability in this range meaningfully predicts training success across a broad array of moderately complex jobs.",
    realWorldScenarios:
      "A shipping coordinator at IQ 91 accurately tracks multiple delivery schedules, resolves minor discrepancies in manifests, and updates colleagues on delays without needing supervisor intervention. A retail team lead with this score creates weekly shift schedules, mediates minor staff conflicts, and processes inventory discrepancies efficiently. A community college student can complete an associate degree in business administration with consistent effort, particularly excelling in courses that build on concrete, step-by-step procedural knowledge rather than heavy abstraction.",
    satEquivalent: 960,
    actEquivalent: 19,
  },
  92: {
    cognitiveProfile:
      "IQ 92 sits comfortably within the average band, reflecting reliable performance across core cognitive domains. Working memory supports keeping several pieces of information active simultaneously, useful in scheduling, customer service, and light project management. Processing speed allows efficient completion of timed tasks. Abstract reasoning is sufficient to spot patterns and draw basic inferences. Verbal skills support persuasive everyday communication and reading of informational materials. Individuals at 92 often compensate effectively for any cognitive limitations through strong organizational habits and procedural mastery.",
    researchContext:
      "The Armed Forces Qualification Test (AFQT), which correlates closely with IQ, classifies scores corresponding to roughly IQ 92 in Category IIIA, indicating full eligibility for most military occupational specialties. Ree and Earles (1992) demonstrated in Journal of Applied Psychology that general cognitive ability at this level reliably predicts both training performance and job proficiency across dozens of military roles.",
    realWorldScenarios:
      "An insurance claims adjuster at IQ 92 reads policy documents, collects claimant information, and writes accurate case summaries with minimal errors. A licensed practical nurse at this score follows complex care protocols, monitors patient vitals, and effectively communicates status changes to supervising RNs. A small business owner running a landscaping company manages client schedules, estimates material costs, and coordinates a team of three workers, balancing practical logistics with basic financial record-keeping throughout the work week.",
    satEquivalent: 970,
    actEquivalent: 19,
  },
  93: {
    cognitiveProfile:
      "At IQ 93, cognitive abilities are solidly average, with particular strength often evident in practical domains. Individuals handle multi-part instructions reliably and adapt to moderately changing conditions at work. Reading comprehension supports general-audience nonfiction and technical manuals. Quantitative reasoning is sufficient for occupational math including fractions, percentages, and basic algebraic thinking. Working memory capacity allows tracking ongoing tasks without external aids in many situations. Learning curves for new job skills are typical, with mastery emerging steadily through practice and feedback rather than requiring unusually extensive repetition.",
    researchContext:
      "Cawley, Conneely, Heckman, and Vytlacil (1997) used NLSY data to show that individuals with cognitive scores near IQ 93 achieve labor market outcomes very close to the population median when educational attainment is controlled. Kuncel, Hezlett, and Ones (2004) in Psychological Bulletin found that ability at this level sufficiently predicts academic performance in two-year college and vocational programs.",
    realWorldScenarios:
      "A dental assistant at IQ 93 efficiently sterilizes instruments, takes X-rays following established protocols, and records treatment notes accurately while managing a patient flow of fifteen appointments per day. An automotive service writer interprets customer complaints, translates them into technically accurate repair orders, and coordinates labor estimates between mechanics and customers. A first-year community college student in an allied health program completes anatomy coursework with moderate study effort, passing exams by reviewing notes systematically and using visual memory aids.",
    satEquivalent: 980,
    actEquivalent: 19,
  },
  94: {
    cognitiveProfile:
      "IQ 94 represents the lower-middle of the average range with reliable all-around cognitive functioning. Abstract reasoning is adequate for most workplace logic, including troubleshooting sequences and procedural exceptions. Verbal comprehension supports understanding professional correspondence and technical instructions. Processing speed is typical, enabling comfortable performance in time-managed work environments. Working memory allows juggling moderate task complexity. Individuals at 94 often demonstrate strong practical intelligence — the ability to navigate real-world problems effectively — which frequently exceeds what their test score might suggest to uninformed observers.",
    researchContext:
      "Herrnstein and Murray's (1994) The Bell Curve analysis of NLSY data indicates that individuals near IQ 94 reach median wage outcomes for full-time employed Americans. More constructively, Strenze (2007) meta-analysis in Intelligence confirms that cognitive ability at this level provides a meaningful positive advantage in educational and occupational attainment relative to scores below 85.",
    realWorldScenarios:
      "A licensed electrician's apprentice at IQ 94 reads blueprints, follows National Electrical Code guidelines, and trouble-shoots basic wiring faults on residential projects under journeyman supervision. A pharmacy technician at this score accurately fills prescriptions, flags potential drug interaction alerts, and manages inventory reorder points across hundreds of SKUs. A student completing an associate degree in criminal justice writes competent analytical papers on case studies, drawing reasonable conclusions from evidence and applying learned frameworks consistently across new scenarios.",
    satEquivalent: 985,
    actEquivalent: 19,
  },
  95: {
    cognitiveProfile:
      "At IQ 95, all core cognitive abilities function solidly within average range parameters. Working memory and processing speed combine to support smooth performance in moderately demanding office and technical environments. Abstract reasoning allows following multi-step logical arguments and formulating straightforward inferences. Verbal abilities support reading reports, writing clear summaries, and participating effectively in professional discussions. Numerical reasoning is comfortable through basic algebra and statistics relevant to most non-specialist workplace roles. Individuals at 95 are capable of completing four-year bachelor's degree programs, particularly in applied or professionally oriented fields.",
    researchContext:
      "Sackett, Kuncel, Arneson, Cooper, and Waters (2009) published in Psychological Bulletin a large-scale meta-analysis showing that SAT scores equivalent to this IQ range — roughly 970-990 — predict first-year GPA meaningfully at four-year universities after controlling for socioeconomic factors. Research by Deary, Strand, Smith, and Fernandes (2007) in Intelligence using Scottish longitudinal data confirms that IQ near 95 in childhood reliably predicts attainment of average educational credentials.",
    realWorldScenarios:
      "A human resources coordinator at IQ 95 manages onboarding documentation, schedules interviews, and explains benefit options clearly to new hires across multiple departments. A construction project supervisor tracks material deliveries, coordinates subcontractor schedules, and resolves minor site conflicts while keeping projects within a few percent of budget. A bachelor's degree student in education completes their program successfully, excelling in practicum placements where classroom management skills and structured lesson planning play to their practical strengths.",
    satEquivalent: 990,
    actEquivalent: 20,
  },
  96: {
    cognitiveProfile:
      "IQ 96 sits near the center of the average range, reflecting a well-rounded cognitive profile. Abstract reasoning supports basic categorization, analogy completion, and multi-step problem decomposition. Verbal comprehension extends comfortably to professional and semi-technical texts. Processing speed is sufficient for managing customer-facing roles and moderate workloads without bottlenecks. Working memory capacity allows maintaining awareness of ongoing priorities across a typical workday. Individuals at 96 handle the academic demands of most undergraduate majors with consistent effort, particularly when content is applied and procedurally structured.",
    researchContext:
      "Data from the National Longitudinal Survey of Youth cited in Cawley et al. (1997) shows that labor force participants with AFQT scores corresponding to roughly IQ 96 cluster near median income outcomes. A meta-analysis by Roth, BeVier, Switzer, and Schippmann (1996) in Journal of Applied Psychology found that cognitive ability at this level predicts supervisor ratings of job performance across a broad array of occupations.",
    realWorldScenarios:
      "A bank teller at IQ 96 processes transactions accurately under time pressure, identifies suspicious activity patterns, and explains account options persuasively to branch customers. A firefighter at this score masters technical protocols for fire suppression, emergency medical response, and hazmat awareness through structured academy training and retains that knowledge reliably under operational conditions. A student majoring in communications earns above-average grades on projects requiring research synthesis and presentation, consistently turning in work that meets or exceeds instructor expectations.",
    satEquivalent: 995,
    actEquivalent: 20,
  },
  97: {
    cognitiveProfile:
      "At IQ 97, cognitive functioning is clearly average with emerging strengths in particular domains. Abstract reasoning handles workplace-level logic comfortably, including identifying the odd one out in a procedural sequence or inferring a missing step in a documented process. Verbal skills support confident written and spoken professional communication. Processing speed allows comfortable operation in time-sensitive environments like call centers or trading floors in support roles. Working memory is sufficient for project coordination at a team-member level. Individuals at 97 often distinguish themselves through soft skills — leadership, reliability, creativity — that amplify cognitive ability in meaningful ways.",
    researchContext:
      "Schmidt and Hunter's (2004) comprehensive review in Journal of Applied Psychology found that general mental ability at the average level strongly predicts job performance when combined with conscientiousness, which frequently co-occurs. Kuncel and Hezlett (2010) reviewing decades of data in Perspectives on Psychological Science note that ability at this level meaningfully separates occupational outcomes from those seen at IQ 85.",
    realWorldScenarios:
      "A surgical technologist at IQ 97 anticipates surgeon needs during procedures, correctly passes instruments in sequence, and maintains sterile field discipline across multi-hour operations. A junior financial analyst processes data using Excel models, generates clean summary reports, and answers client queries accurately under manager guidance. A bachelor's degree student in nursing completes the rigorous curriculum successfully, performing especially well in clinical rotations where protocols are clearly defined and reinforcement comes through direct patient interaction.",
    satEquivalent: 1000,
    actEquivalent: 20,
  },
  98: {
    cognitiveProfile:
      "IQ 98 is precisely at the population midpoint — the true median. Cognitive abilities across working memory, processing speed, verbal comprehension, and abstract reasoning all function at textbook-average levels. Individuals at this score navigate most educational and occupational environments without significant cognitive friction. Reading comprehension handles professional and popular-science texts with ease. Numerical reasoning extends to interpreting graphs, computing percentages, and following quantitative arguments in news and workplace contexts. Individuals are fully capable of contributing in team problem-solving, supervisory roles, and undergraduate education across many disciplines.",
    researchContext:
      "By definition, roughly 50% of measured populations score at or below IQ 98. Research by Jensen (1998) in The g Factor documents that persons at median cognitive ability represent the single most common profile across most workforce sectors. A longitudinal study by Deary et al. (2004) in Intelligence found that childhood IQ near the mean predicted a wide scatter of adult educational credentials, with most attaining high school diplomas and a substantial minority completing bachelor's degrees.",
    realWorldScenarios:
      "A paralegal at IQ 98 drafts routine legal documents, researches case precedents using legal databases, and manages attorney calendars and filings for a mid-size family law practice. A middle school teacher successfully delivers curriculum in social studies, manages a classroom of twenty-five students, and differentiates instruction modestly for higher- and lower-performing pupils. A retail store manager oversees staff scheduling for thirty employees, handles customer escalations, tracks shrinkage, and meets monthly sales targets through coaching and floor presence.",
    satEquivalent: 1005,
    actEquivalent: 20,
  },
  99: {
    cognitiveProfile:
      "At IQ 99, cognitive abilities are well-balanced and fully functional for mainstream academic and professional demands. Abstract reasoning supports identifying rules and patterns in moderately complex data sets. Verbal comprehension is comfortable with technical trade publications and undergraduate-level coursework texts. Processing speed is sufficient for multi-tasking and adapting to shifting work priorities in real time. Working memory capacity supports following detailed verbal instructions and managing several concurrent projects at an entry-management level. Individuals at 99 are one point from median and effectively indistinguishable from those at 100-102 in practical contexts.",
    researchContext:
      "Strenze's (2007) comprehensive meta-analysis in Intelligence, pooling 85 longitudinal studies, confirms that cognitive ability scores near the median show positive associations with educational attainment, occupational prestige, and income that are clearly distinguishable from those seen at IQ 85. The National Academy of Sciences' 2015 report on cognitive ability and workforce readiness notes that average-ability individuals fill critical mid-skill roles throughout the economy.",
    realWorldScenarios:
      "A police officer at IQ 99 applies legal statutes correctly in field situations, writes detailed and accurate incident reports, and de-escalates minor confrontations using communication skills honed through academy training. An office manager coordinates vendor contracts, monitors supply budgets, and implements new filing systems after evaluating several options presented by staff. A student completing a bachelor's degree in business administration maintains a GPA around 3.0, earning solid marks on case study analyses that require applying course frameworks to real company scenarios.",
    satEquivalent: 1010,
    actEquivalent: 20,
  },
  100: {
    cognitiveProfile:
      "IQ 100 is the defined population mean — the exact midpoint of the normal distribution. Cognitive functioning across all major domains is textbook average: working memory is sufficient for multi-step task management, processing speed supports efficient operation in time-managed environments, verbal comprehension handles professional and educational texts fluently, and abstract reasoning enables comfortable inference from moderately complex premises. Individuals at 100 can succeed across a wide range of undergraduate majors and occupational categories. The score is associated with clear capacity for learning, adaptability, and the kind of general problem-solving demanded throughout everyday professional life.",
    researchContext:
      "By norming convention, IQ 100 is the defined median of the general population (Wechsler, 1939, with updates through WAIS-IV norms). Gottfredson (1997) in Intelligence notes that IQ 100 is described as a 'comfortable threshold' for independent completion of most civil service and technical occupational exams. Schmidt and Hunter (1998) in Psychological Bulletin identify that the predictive validity of g for job performance is near its inflection point at average ability levels.",
    realWorldScenarios:
      "An air traffic control trainee at IQ 100 succeeds in the FAA Academy's structured curriculum, mastering radar procedures, phraseology, and traffic sequencing with consistent study and simulator practice. A registered nurse at this score delivers high-quality patient care across a twelve-hour shift, correctly prioritizes among multiple simultaneous patient needs, and documents care plans in full compliance with hospital standards. A bachelor's degree student in psychology earns a solid B average, contributing thoughtful observations in seminar discussions and completing research methods assignments competently.",
    satEquivalent: 1010,
    actEquivalent: 20,
  },
  101: {
    cognitiveProfile:
      "At IQ 101, cognitive abilities are fully average with a slight upward tilt that manifests in somewhat faster learning curves and slightly more comfortable abstract reasoning than at exactly 100. Working memory is reliable for moderately complex workplace coordination. Verbal skills support writing cohesive professional memos and understanding semi-technical documentation without assistance. Processing speed is efficient for standard workloads. The one-point separation from median is statistically insignificant but represents a useful psychological threshold — individuals at 101 often describe feeling comfortable tackling unfamiliar intellectual challenges without anticipating difficulty.",
    researchContext:
      "Research using NLSY data by Cawley et al. (1997) shows earnings distributions at IQ 101 are nearly identical to those at 98-103, reflecting the statistical equivalence of scores within roughly half a standard deviation of the mean. Lubinski and Benbow's (2006) review in Perspectives on Psychological Science confirms that incremental IQ differences within the average band have modest but measurable effects on educational completion rates.",
    realWorldScenarios:
      "A dental hygienist at IQ 101 conducts thorough cleanings, educates patients about gum disease progression, and records detailed clinical notes that facilitate accurate treatment planning by the supervising dentist. A technical writer produces clear user manuals for consumer software products, accurately translating engineer specifications into plain-language documentation. A community college student in accounting earns a 3.2 GPA, demonstrating particular comfort with the procedural logic of debits and credits and earning praise for clean, accurate spreadsheet work.",
    satEquivalent: 1015,
    actEquivalent: 20,
  },
  102: {
    cognitiveProfile:
      "IQ 102 represents a comfortably average cognitive profile slightly above the median. Abstract reasoning allows comfortable work with analogies, logical sequences, and pattern completion at a level that supports most supervisory and technical roles. Verbal comprehension handles undergraduate textbooks and professional publications. Processing speed is efficient enough to support real-time decision-making in customer-facing and operations roles. Working memory sustains attention across complex, multi-part workplace tasks. Individuals at 102 typically navigate college-level coursework without significant strain and often complete four-year degrees in professional programs when sufficiently motivated.",
    researchContext:
      "Murray's (1998) analysis of NLSY data in Income Inequality and IQ found that individuals near IQ 102 closely mirror national median income trajectories when years of education are held constant. A study by Deary, Whiteman, Starr, Whalley, and Fox (2004) in Intelligence using Scottish Mental Survey data showed that IQ near the mean predicted moderate-to-good educational credentials across the population cohort.",
    realWorldScenarios:
      "A cardiovascular technologist at IQ 102 operates echocardiography equipment, records diagnostic-quality images, and flags abnormalities for cardiologist review with high accuracy on routine exams. A loan officer processes mortgage applications, explains amortization schedules to first-time buyers, and evaluates debt-to-income ratios using bank software and established guidelines. A bachelor's degree student in sociology writes competent research papers integrating multiple academic sources, earning B+ grades on assignments that require synthesizing empirical data with theoretical frameworks.",
    satEquivalent: 1020,
    actEquivalent: 20,
  },
  103: {
    cognitiveProfile:
      "At IQ 103, cognitive functioning is solidly above the median by a small but consistent margin. Abstract reasoning is comfortable with multi-step logical problems and begins to show ease with formal argumentation. Verbal comprehension extends confidently to scholarly writing at an introductory level. Processing speed is slightly faster than average, enabling comfortable management of high-throughput work environments. Working memory capacity supports tracking four to five simultaneous tasks without losing thread. Individuals at 103 often describe a feeling of cognitive ease in everyday life — rarely feeling overtaxed by normal intellectual demands — which translates into reliable workplace performance.",
    researchContext:
      "Gottfredson (1997) notes that individuals from approximately IQ 100 to 110 constitute the primary pool for skilled trades, paraprofessional roles, and a range of four-year degree programs. Research by Roth et al. (1996) in Journal of Applied Psychology confirmed that cognitive ability at this level provides positive predictions of supervisor-rated job performance that hold across diverse job categories and industry sectors.",
    realWorldScenarios:
      "A court reporter at IQ 103 maintains stenographic accuracy above the required 95% threshold during complex trial testimony, switches seamlessly between speakers, and produces certified transcripts with minimal corrections afterward. A supply chain analyst generates weekly shortage reports, identifies root causes for delivery delays, and recommends corrective actions in a logistics dashboard used by operations leadership. A student completing a bachelor's in health information management excels in coding courses by applying memorized classification rules and earns high marks on case-study exams.",
    satEquivalent: 1025,
    actEquivalent: 21,
  },
  104: {
    cognitiveProfile:
      "IQ 104 shows a cognitive profile marginally above average across all domains, with growing ease in tasks requiring logical inference. Abstract reasoning is comfortable with pattern identification in moderately complex sequences and begins to handle hypothetical reasoning more fluently. Verbal skills are sufficient for writing clear, organized analytical essays at an undergraduate level. Processing speed and working memory together support comfortable multitasking in demanding professional environments. Individuals at 104 often pursue four-year degrees and emerge as reliable, competent contributors in knowledge-work environments, demonstrating a healthy margin of cognitive capacity above the minimum requirements for most graduate-adjacent roles.",
    researchContext:
      "A longitudinal analysis by Strenze (2007) in Intelligence found that cognitive ability scores between IQ 100 and 110 are consistently associated with above-median educational attainment and occupational prestige relative to scores below 90. Sackett et al. (2009) in Psychological Bulletin demonstrated that SAT scores in the range corresponding to IQ 104 predict four-year college GPA at a meaningful level even after partialing out socioeconomic factors.",
    realWorldScenarios:
      "A quality assurance engineer at IQ 104 reviews software builds, writes bug reports with accurate reproducible steps, and tracks defect trends across sprint cycles to surface systemic issues to the development team. An occupational therapy assistant conducts therapeutic exercises with patients under OTR supervision, documents session progress, and adapts activity modifications based on patient responses. A student in a bachelor's nursing program earns a 3.3 GPA, excelling in clinical placements where systematic nursing process application plays to their methodical cognitive style.",
    satEquivalent: 1030,
    actEquivalent: 21,
  },
  105: {
    cognitiveProfile:
      "At IQ 105, cognitive abilities are clearly above the population midpoint, with notably comfortable handling of moderately complex reasoning tasks. Abstract reasoning supports multi-step logical problem-solving and inference from incomplete information. Verbal comprehension handles upper-division undergraduate texts fluently. Processing speed and working memory together allow smooth management of cognitively demanding jobs without feeling stretched. Individuals at 105 tend to complete four-year degrees efficiently and frequently proceed to graduate programs, professional certifications, or career paths that demand sustained intellectual engagement. Learning new concepts occurs slightly faster than average, reducing time-to-competency in new roles.",
    researchContext:
      "Schmidt and Hunter's (1998) seminal meta-analysis in Psychological Bulletin found predictive validity for general cognitive ability accelerating measurably in the IQ 100-110 band relative to lower scores. Data from Project TALENT, a large-scale longitudinal study of American high schoolers, showed that individuals scoring near IQ 105 were substantially more likely than those near 90 to complete four-year college degrees and enter professional occupational categories.",
    realWorldScenarios:
      "A respiratory therapist at IQ 105 manages ventilator settings, interprets arterial blood gas results, and adjusts treatment plans for ICU patients under physician guidance, making time-sensitive decisions reliably. A marketing coordinator develops campaign briefs, coordinates vendor timelines, tracks ROI metrics across channels, and presents clear performance summaries to senior leadership each quarter. A student completing a bachelor's in computer science manages the computational thinking demands of algorithm courses, earning passing to good marks by applying systematic debugging and problem decomposition strategies.",
    satEquivalent: 1040,
    actEquivalent: 21,
  },
  106: {
    cognitiveProfile:
      "IQ 106 places an individual clearly within the upper half of the average range, with cognitive processing that handles most undergraduate and professional intellectual demands with evident ease. Abstract reasoning is comfortable with formal logic, hypothesis testing, and multi-variable problem analysis. Verbal skills support reading scholarly articles and producing organized analytical writing at an above-average undergraduate level. Processing speed is fast enough to feel ahead of most peers in structured workplace tasks. Working memory supports four to six simultaneous information streams without significant degradation. This score represents sufficient intellectual capacity for most graduate and professional programs.",
    researchContext:
      "Kuncel, Hezlett, and Ones' (2001) meta-analysis in Psychological Bulletin shows that GRE scores corresponding to roughly IQ 106 predict first-year graduate GPA significantly, though with smaller effect sizes than in undergraduate populations. Deary et al.'s (2007) Scottish longitudinal study found that childhood IQ near this level strongly predicted attainment of post-secondary credentials by mid-adulthood in the majority of participants.",
    realWorldScenarios:
      "A clinical laboratory scientist at IQ 106 operates complex analytical instruments, identifies specimen quality issues, and investigates unexpected test results before releasing critical lab values to ordering physicians. A financial advisor at this score constructs personalized investment portfolios, explains risk-return tradeoffs clearly to clients with varying financial literacy, and recalibrates plans when market conditions shift. A master's degree student in public health completes rigorous biostatistics coursework with regular tutoring support and produces a strong capstone project on community health intervention outcomes.",
    satEquivalent: 1050,
    actEquivalent: 21,
  },
  107: {
    cognitiveProfile:
      "At IQ 107, cognitive abilities are comfortably above average, with increasing fluency in abstract reasoning and conceptual thinking. Pattern recognition in complex data, logical argument evaluation, and multi-step problem-solving all feel accessible. Verbal comprehension is sufficient for fluent reading of upper-division university texts and professional journals in many fields. Processing speed is above typical, and working memory capacity supports efficient coordination of complex workflows. Individuals at 107 are competitive applicants at selective four-year universities and perform well in graduate programs with strong motivation and study skills.",
    researchContext:
      "Lubinski and Benbow (2006) in Perspectives on Psychological Science demonstrate that individuals scoring in the IQ 105-110 range show meaningfully higher rates of advanced degree attainment than those at 95-100. Research by Hunter (1986) in Psychological Bulletin using U.S. Employment Service data confirmed that general cognitive ability at this level is the strongest single predictor of job performance in professional and managerial occupational categories.",
    realWorldScenarios:
      "A physical therapist at IQ 107 designs comprehensive rehabilitation plans, explains biomechanical principles to patients in accessible language, and modifies exercise progressions based on weekly functional assessments. A senior accountant at this score manages quarterly close processes, reviews junior staff workpapers, and identifies tax optimization opportunities by recognizing patterns across client financial statements. A student pursuing a master's in social work completes demanding field practicum requirements, applying evidence-based intervention models to complex client cases with growing confidence.",
    satEquivalent: 1060,
    actEquivalent: 21,
  },
  108: {
    cognitiveProfile:
      "IQ 108 represents a profile where abstract reasoning, verbal comprehension, and processing speed all operate at a comfortably above-average level. Individuals here handle complex analytical tasks with ease and begin to show genuine facility with novel, non-routine intellectual challenges. Conceptual learning — grasping principles rather than just procedures — is noticeably accessible, accelerating mastery in technical disciplines. Verbal skills support producing coherent, logically organized arguments in writing and speech. Working memory capacity is sufficient for project management, coordinating several moving parts simultaneously. This range provides strong competitive positioning for selective undergraduate and most graduate programs.",
    researchContext:
      "Data from the College Board SAT normative studies shows that scores corresponding to roughly IQ 108 (approximately 1060-1080) place students around the 60th percentile nationally, a competitive threshold for admission at a broad range of four-year institutions. Research by Kuncel and Hezlett (2010) in Perspectives on Psychological Science confirms that general ability at this level shows reliable positive effects on both academic performance and earnings across three decades of longitudinal follow-up.",
    realWorldScenarios:
      "A physician assistant at IQ 108 conducts patient histories and physicals, orders and interprets diagnostic tests, and manages a panel of outpatient patients under physician supervision, exercising significant clinical judgment on routine cases. An information systems manager at this score evaluates competing software solutions, oversees implementation timelines, and trains staff on new platforms using clear explanatory strategies. A law student completes their first year in the middle of the class, demonstrating sound case-briefing skills and earning strong marks on courses where logical rule application is the primary assessment method.",
    satEquivalent: 1070,
    actEquivalent: 21,
  },
  109: {
    cognitiveProfile:
      "At IQ 109, cognitive functioning is at the top of the average range, one point below the high average threshold. Abstract reasoning is flexible and handles multi-level inferences, analogical reasoning, and identification of structural similarities across different problem domains. Verbal comprehension is strong, supporting fluent engagement with demanding academic texts. Processing speed is above average, enabling efficient performance in fast-paced analytical work environments. Working memory is robust, allowing comfortable orchestration of complex multi-project workflows. Individuals at 109 are strong candidates for professional schools and perform competitively in graduate programs, often landing in the top third of their cohort.",
    researchContext:
      "Gottfredson (1997) identifies the IQ 105-115 range as particularly well-matched to the cognitive demands of most professional and managerial occupations. Murray's (2008) Real Education analysis of NLSY data found that individuals near IQ 109 complete four-year degrees at rates substantially above the national average and enter the professional-managerial occupational tier at above-average rates.",
    realWorldScenarios:
      "A radiation therapist at IQ 109 delivers precision radiation treatments, troubleshoots setup deviations using imaging verification, and provides compassionate communication to patients undergoing difficult cancer treatment protocols. A senior HR business partner at this score leads workforce planning conversations with business unit leaders, designs competency frameworks, and analyzes employee engagement survey data to recommend organizational interventions. A student in a four-year engineering technology program earns a strong GPA by excelling at applied analysis courses that blend concrete procedural knowledge with reasoning about system-level tradeoffs.",
    satEquivalent: 1080,
    actEquivalent: 22,
  },
  110: {
    cognitiveProfile:
      "IQ 110 marks the threshold of high average — the top 25% of the population. Abstract reasoning is notably proficient, supporting comfortable work with hypotheticals, nested logical structures, and multi-step quantitative reasoning. Verbal comprehension extends fluently to graduate-level reading, professional literature, and legal or policy documents. Processing speed is above average, enabling efficient handling of demanding analytical workloads. Working memory capacity supports complex project orchestration. Individuals at 110 typically flourish in four-year degree programs and are fully competitive for most master's-level graduate programs. Many professionals in knowledge-intensive fields cluster around this score.",
    researchContext:
      "Gottfredson (1997) identifies IQ 110 as a practical threshold above which job training performance becomes notably easier across high-complexity occupational categories. Research by Coward and Sackett (1990) in Journal of Applied Psychology confirmed that cognitive ability at this level exceeds the minimum threshold for effective performance in professional, managerial, and most technical occupations listed in the U.S. Dictionary of Occupational Titles.",
    realWorldScenarios:
      "A certified public accountant at IQ 110 conducts financial audits, identifies material misstatements in client balance sheets, and writes management letters that clearly explain technical findings to non-specialist executives. A nurse practitioner at this score independently diagnoses and treats common acute and chronic conditions, prescribes medications, and manages a panel of primary care patients with minimal physician involvement. A law student in the top third of their class earns a spot on law review and produces a publishable note on regulatory interpretation, demonstrating ability to synthesize complex statutory and case materials into coherent analysis.",
    satEquivalent: 1100,
    actEquivalent: 22,
  },
  111: {
    cognitiveProfile:
      "At IQ 111, cognitive abilities sit comfortably in the high average range with clear strengths in abstract reasoning and verbal comprehension. Logical inference feels natural across a range of domains — mathematical, verbal, and spatial. Complex texts, including graduate syllabi and professional journals, are accessible with normal reading effort. Processing speed and working memory together support sophisticated analytical workflows. Individuals at 111 generally perform in the upper portion of their cohort in professional programs and are frequently identified as strong contributors in knowledge-work organizational settings. Conceptual learning — grasping principles behind procedures — feels intuitive.",
    researchContext:
      "Lubinski and Benbow (2006) in Perspectives on Psychological Science report that longitudinal data from the Study of Mathematically Precocious Youth shows that individuals testing near IQ 111 (roughly the 77th percentile) significantly outperform median-ability peers in rates of advanced degree attainment and professional achievement across a 35-year follow-up window.",
    realWorldScenarios:
      "A civil engineer at IQ 111 designs drainage systems for a suburban subdivision, applies hydraulic calculations correctly, and coordinates plan review responses with municipal planners to move projects through permitting efficiently. A school principal at this score leads curriculum adoption processes, interprets standardized test score data to inform professional development priorities, and coaches teachers on instructional practice through structured observation cycles. A student in a competitive MBA program earns above-average marks in finance and strategy courses that require integrating quantitative analysis with qualitative judgment.",
    satEquivalent: 1110,
    actEquivalent: 22,
  },
  112: {
    cognitiveProfile:
      "IQ 112 reflects a high average cognitive profile where abstract reasoning, verbal fluency, and processing efficiency combine to produce clearly above-average intellectual capability. Novel problem-solving feels comfortable — individuals can work through unfamiliar challenges by applying reasoning principles rather than relying solely on memorized procedures. Verbal skills support producing polished analytical writing and engaging persuasively in professional discussions. Quantitative reasoning extends to statistics and formal modeling at a level relevant to many research and policy roles. This score range is associated with strong performance in competitive professional graduate programs.",
    researchContext:
      "A large-scale study by Sackett, Kuncel, Arneson, Cooper, and Waters (2009) in Psychological Bulletin found that SAT scores corresponding to approximately IQ 112 predict college GPA and degree completion at rates meaningfully above those for average-ability students, with effects persisting after controlling for high school GPA and socioeconomic status.",
    realWorldScenarios:
      "A pharmacist at IQ 112 reviews complex medication regimens for contraindications and dosing appropriateness, counsels patients on new prescriptions with clear explanations of mechanism and side effects, and supervises pharmacy technicians in a high-volume hospital inpatient pharmacy. A management consultant analyzes client operating cost structures, identifies efficiency opportunities through process mapping, and delivers board-ready presentations synthesizing three months of analysis into clear strategic recommendations. A doctoral student in education policy publishes a co-authored paper analyzing charter school lottery data, demonstrating solid grasp of quasi-experimental research design.",
    satEquivalent: 1120,
    actEquivalent: 22,
  },
  113: {
    cognitiveProfile:
      "At IQ 113, the cognitive profile is high average with notable proficiency in abstract reasoning and conceptual synthesis. Individuals at this level are comfortable reading across disciplines and integrating ideas from multiple domains into coherent frameworks. Verbal comprehension extends fluently to dense professional and academic literature. Processing speed is above average, supporting efficient throughput in demanding analytical roles. Working memory robustly sustains complex reasoning chains across extended tasks. This score provides strong competitive positioning for selective graduate programs including medical, dental, and law schools, particularly when combined with strong conscientiousness and academic preparation.",
    researchContext:
      "Kuncel and Hezlett's (2010) review in Perspectives on Psychological Science demonstrates that general cognitive ability scores in the range corresponding to IQ 113 show significantly stronger positive effects on long-term earnings and occupational attainment than scores near the median, with each additional standard deviation above average producing roughly 10-15% earnings gain in longitudinal datasets.",
    realWorldScenarios:
      "An actuary at IQ 113 uses statistical models to assess insurance risk pools, clearly explains liability exposure to underwriters using scenario analyses, and passes professional actuarial examinations with moderate preparation effort. A judge advocate in the military at this score researches complex international law questions, drafts legal opinions for command decision-makers, and advocates effectively in administrative and disciplinary hearings. A medical student in the middle two quartiles of their class manages the demanding cognitive load of preclinical coursework through systematic note organization and active retrieval practice.",
    satEquivalent: 1130,
    actEquivalent: 23,
  },
  114: {
    cognitiveProfile:
      "IQ 114 marks a high average cognitive profile where abstract and verbal reasoning work together particularly well, supporting fluent engagement with both technical and humanistic intellectual content. Pattern recognition in complex data sets is reliable and fast. Verbal skills include strong production of organized, persuasive analytical prose. Processing speed is comfortably above average, and individuals rarely feel cognitively limited in standard professional or academic settings. Working memory sustains sophisticated multi-step reasoning without degradation. The score is common among successful professionals in law, medicine, engineering, and business — fields where intellectual horsepower interacts with domain expertise to produce high-quality output.",
    researchContext:
      "Robertson, Smeets, Lubinski, and Benbow's (2010) longitudinal study in Current Directions in Psychological Science found that individuals in the upper quartile of cognitive ability — roughly IQ 110 and above — earned graduate degrees at dramatically higher rates and achieved significantly greater professional distinction than peers from lower ability quartiles, even when controlling for family socioeconomic status.",
    realWorldScenarios:
      "A biomedical engineer at IQ 114 develops testing protocols for a new cardiovascular device, writes technical sections of FDA regulatory submissions, and troubleshoots unexpected bench-test failures using systematic experimental analysis. A corporate attorney reviews complex merger agreement terms, identifies ambiguous indemnification clauses that create client liability risk, and negotiates favorable revisions with opposing counsel over several drafting cycles. A resident physician in internal medicine manages a demanding call schedule, rapidly synthesizes differential diagnoses from complex patient presentations, and presents coherent assessments on morning rounds.",
    satEquivalent: 1140,
    actEquivalent: 23,
  },
  115: {
    cognitiveProfile:
      "At IQ 115 — exactly one standard deviation above the mean — cognitive abilities are unambiguously above average in a way that becomes visible to careful observers in professional and academic contexts. Abstract reasoning is proficient across verbal, numerical, and spatial domains. Conceptual synthesis — drawing connections between ideas across disciplines — is notably fluid. Verbal comprehension and production are strong, supporting clear communication of complex ideas to varied audiences. Processing speed and working memory together enable managing multiple high-complexity projects simultaneously. This score is commonly associated with successful completion of professional degrees (MD, JD, MBA) and productive careers in science, law, medicine, and engineering.",
    researchContext:
      "Jensen's (1998) The g Factor documents that IQ 115, one standard deviation above the mean, has historically been identified as the approximate average cognitive ability of college graduates in the United States during the mid-20th century. Gottfredson (1997) notes that this score corresponds to ability levels associated with comfortable entry into high-complexity professional occupations requiring graduate credentials and independent judgment.",
    realWorldScenarios:
      "A practicing physician at IQ 115 efficiently works through complex diagnostic puzzles in a general internal medicine outpatient practice, synthesizes results from multiple specialties' reports, and communicates nuanced treatment tradeoffs clearly to patients across educational backgrounds. An appellate attorney crafts sophisticated written briefs analyzing multi-layered statutory interpretation issues, drawing on interdisciplinary sources to construct persuasive original arguments before appellate courts. A doctoral student in molecular biology advances through their PhD program by rapidly identifying the conceptual core of new literature and translating it into productive experimental hypotheses.",
    satEquivalent: 1150,
    actEquivalent: 23,
  },
  116: {
    cognitiveProfile:
      "IQ 116 sits solidly in high average territory, with cognitive abilities that are clearly above the population norm and sufficient for demanding graduate and professional work. Abstract reasoning handles multi-layered logical problems with ease. Verbal reasoning supports fluent reading of primary scientific literature and production of sophisticated analytical writing. Quantitative reasoning is comfortable through inferential statistics and the mathematical demands of most graduate programs outside pure mathematics. Processing speed is above average. Individuals at 116 often report that most academic and professional tasks feel within comfortable reach, leaving cognitive bandwidth for creativity, depth, and quality refinement beyond the minimum threshold.",
    researchContext:
      "Wai, Lubinski, and Benbow (2005) published in the Journal of Educational Psychology a study showing that individuals in roughly the top 20% of cognitive ability — IQ approximately 113 and above — disproportionately attained STEM doctoral degrees, top-tier academic positions, and intellectual patents in their longitudinal cohort. Ability at IQ 116 places individuals well within this productive upper quintile.",
    realWorldScenarios:
      "A structural engineer at IQ 116 designs load-bearing systems for a multi-story commercial building, identifies a cost-saving modification to the foundation plan by recognizing an under-utilized structural redundancy, and documents findings in a sealed engineering report. A hospital administrator at this score analyzes patient flow bottlenecks using lean process data, implements phased staffing changes, and demonstrates statistically significant reductions in average wait times over a six-month evaluation window. A philosophy PhD student produces a well-received dissertation chapter arguing for a novel position in philosophy of mind, engaging critically with recent literature.",
    satEquivalent: 1160,
    actEquivalent: 23,
  },
  117: {
    cognitiveProfile:
      "At IQ 117, cognitive abilities are high average verging on superior, with particularly notable fluency in abstract reasoning and conceptual processing. Multi-step logical problems are approached systematically and solved reliably without reverting to trial-and-error strategies. Verbal comprehension is strong enough to engage productively with primary literature in most academic disciplines. Learning rates for new technical skills and conceptual frameworks are meaningfully above average. Working memory sustains long reasoning chains in demanding problem-solving contexts. Individuals at 117 are competitive for selective doctoral programs and professional schools and regularly achieve high performance in those environments.",
    researchContext:
      "Longitudinal data from Lubinski, Webb, Morelock, and Benbow (2001) in the Journal of Applied Psychology found that individuals scoring near the top quintile of cognitive ability, corresponding to roughly IQ 113-120, were 18 times more likely than median-ability peers to earn a doctoral degree over a twenty-year follow-up period. The academic and occupational trajectories at IQ 117 are consistently more distinguished than those one standard deviation lower.",
    realWorldScenarios:
      "A neuropsychologist at IQ 117 administers a battery of cognitive assessments, integrates behavioral observations with test data to produce nuanced diagnostic reports, and presents findings to multidisciplinary case conference teams managing complex dementia and TBI cases. An intelligence analyst at this score synthesizes satellite imagery, signals intelligence, and human-source reporting into finished assessments, accurately identifying strategic trends before they are confirmed by other collection platforms. A medical student in the top third of their class handles the volume and complexity of clinical year rotations with confidence, frequently praised by attendings for diagnostic reasoning quality.",
    satEquivalent: 1170,
    actEquivalent: 24,
  },
  118: {
    cognitiveProfile:
      "IQ 118 reflects a high average cognitive profile with measurable advantages in abstract reasoning, verbal synthesis, and conceptual learning speed. Individuals at this score routinely find intellectual tasks that challenge average peers to be manageable with modest effort, allowing investment of cognitive resources in depth, innovation, and quality. Formal logical reasoning, including the kind used in law, philosophy, and mathematics, is comfortable and accessible. Verbal comprehension extends to primary literature in virtually all academic fields. Processing speed supports high-throughput performance in demanding analytical roles. Working memory sustains extended inference chains in research, writing, and problem-solving contexts.",
    researchContext:
      "Park, Lubinski, and Benbow (2008) in Psychological Science reported that cognitive ability differences even within the top quartile — distinguishing IQ 116 from IQ 120 — predict meaningful differences in creative and scholarly achievement over a thirty-year window, with higher ability consistently associated with more distinguished outcomes. IQ 118 sits within this productive upper tier.",
    realWorldScenarios:
      "A federal prosecutor at IQ 118 constructs coherent trial narratives from complex documentary evidence, cross-examines expert witnesses with precisely calibrated questions, and produces appellate briefs that demonstrate sophisticated statutory and constitutional analysis. A clinical psychologist at this score integrates multiple evidence-based treatment modalities for a complex case involving comorbid PTSD and personality disorder, adjusting the treatment formulation based on emerging session data. A doctoral student in chemistry independently designs a novel synthesis route, troubleshoots unexpected reaction outcomes, and communicates findings in a peer-reviewed manuscript accepted at a respected journal.",
    satEquivalent: 1180,
    actEquivalent: 24,
  },
  119: {
    cognitiveProfile:
      "At IQ 119, cognitive functioning is near the top of the high average range — one point below the superior threshold. Abstract reasoning is robust and flexible across multiple domains. Conceptual synthesis, critical evaluation of arguments, and generation of novel problem-solving approaches all feel accessible. Verbal comprehension is fluent across primary academic literature in virtually any field. Quantitative reasoning is strong enough for advanced statistical methods and formal mathematical argument at the level required in most graduate disciplines. Working memory and processing speed together enable complex, multi-stage analytical workflows at speed. Individuals at 119 are among the most capable in the upper quarter of the population.",
    researchContext:
      "Wai, Lubinski, Benbow, and Steiger (2010) in the Journal of Educational Psychology analyzed Patent and Trademark Office records linked to longitudinal cognitive data, finding that individuals in approximately the top 15-20% of cognitive ability, corresponding to IQ 116 and above, accounted for a disproportionate share of technological patents relative to their population proportion.",
    realWorldScenarios:
      "A radiologist at IQ 119 interprets CT and MRI studies across a high-volume academic medical center workload, reliably identifies subtle abnormalities in complex cases, and provides clinically actionable reports that guide downstream treatment decisions. A senior data scientist at this score develops machine learning pipelines for a financial institution, evaluating model performance across multiple subgroups and communicating results meaningfully to non-technical stakeholders in risk management. A law student in the top fifth of their class earns a prestigious summer associate position at a large firm, where partners note their ability to navigate complex transactional documents quickly.",
    satEquivalent: 1190,
    actEquivalent: 24,
  },
  120: {
    cognitiveProfile:
      "IQ 120 marks the threshold of the superior range — the top 9% of the population. Abstract reasoning is genuinely proficient, handling multi-layered logical structures, formal argumentation, and conceptual abstraction with evident ease. Verbal comprehension is strong across all types of academic and professional literature. Quantitative reasoning extends comfortably to advanced statistics, formal logic, and the mathematical foundations of technical disciplines. Processing speed is above average, and working memory sustains complex multi-step reasoning reliably. Individuals at 120 are highly competitive for top doctoral programs and typically perform near the top of their cohort in demanding graduate and professional environments.",
    researchContext:
      "Gottfredson (1997) identifies IQ 120 as approximately the threshold above which entry into the most cognitively demanding professions — research science, academic law, elite consulting — becomes broadly accessible. Lubinski and Benbow (2006) document in Perspectives on Psychological Science that individuals at the 90th percentile and above show dramatically elevated rates of distinguished professional achievement relative to those at the 75th percentile.",
    realWorldScenarios:
      "An emergency medicine attending physician at IQ 120 manages a high-acuity emergency department, rapidly synthesizing presenting symptoms, vital signs, and test results to initiate time-critical interventions while simultaneously supervising residents on multiple concurrent cases. A management consultant at McKinsey or BCG at this score constructs sophisticated analytical frameworks, identifies high-impact strategic issues in client data, and produces executive-level presentations that drive major organizational decisions. A PhD candidate in economics successfully defends a dissertation on labor market search theory, having independently derived several novel theoretical results that are recognized as publishable contributions.",
    satEquivalent: 1220,
    actEquivalent: 25,
  },
  121: {
    cognitiveProfile:
      "At IQ 121, cognitive functioning is clearly in the superior range, with proficient abstract reasoning, strong verbal synthesis, and noticeably above-average processing speed. Multi-level logical argumentation is comfortable, and individuals can hold several interacting reasoning strands simultaneously in working memory. Conceptual learning is fast — new technical frameworks, domain vocabularies, and formal methods are mastered with less effort than at average ability levels. Verbal comprehension extends to primary literature in esoteric or technically dense fields outside one's area of expertise. This score is characteristic of many research scientists, senior attorneys, physicians, and other knowledge-work professionals who demonstrate distinguished performance in their fields.",
    researchContext:
      "Robertson, Smeets, Lubinski, and Benbow (2010) in Current Directions in Psychological Science found that among top-quartile ability individuals tracked longitudinally, those near the 90th percentile showed significantly greater rates of advanced degree attainment and professional distinction than those near the 75th percentile, confirming that ability differences within the high range continue to predict meaningful outcome variation.",
    realWorldScenarios:
      "A cardiothoracic surgeon at IQ 121 performs complex valve repair procedures, manages intraoperative complications with rapid adaptive decision-making, and reviews current surgical literature to integrate evidence-based technique modifications into their practice. A constitutional law professor at this score produces intellectually influential law review articles, teaches upper-division seminars with nuanced Socratic engagement, and is regularly cited in appellate court decisions on civil rights issues. A PhD student in theoretical physics advances through their program quickly, independently contributing a novel calculation to the research group's high-energy physics project within the first two years.",
    satEquivalent: 1230,
    actEquivalent: 25,
  },
  122: {
    cognitiveProfile:
      "IQ 122 reflects superior cognitive ability with strong advantages in abstract reasoning, conceptual integration, and verbal fluency. Individuals at this level engage productively with complex, novel intellectual problems that have no clearly defined solution path. Formal argumentation in logic, law, and mathematics is comfortable. Verbal comprehension includes confident engagement with dense technical monographs and primary scientific literature outside one's specialty. Processing speed is above average, and working memory sustains sophisticated analysis across extended intellectual tasks. Individuals at 122 are highly competitive for elite professional and doctoral programs and regularly distinguish themselves within those environments.",
    researchContext:
      "Wai et al. (2005) in the Journal of Educational Psychology found that cognitive ability at the level of IQ 120-125 predicted doctoral degree attainment in STEM fields at rates more than twenty times higher than base rates for median-ability individuals. Park, Lubinski, and Benbow (2007) in Psychological Science confirmed that individual differences at this ability level continue to predict meaningful variation in professional creativity and scholarly productivity.",
    realWorldScenarios:
      "A neurosurgeon at IQ 122 plans complex tumor resections using preoperative imaging, executes delicate microsurgical dissections through eloquent cortex, and manages rare intraoperative complications with calm adaptive problem-solving while communicating clear situational updates to the surgical team. A senior economist at the Federal Reserve Board at this score authors influential monetary policy research, presents findings to the Board of Governors, and testifies before congressional committees on macroeconomic conditions. A law clerk for a federal circuit court judge researches complex circuit-split issues, drafts bench memos that clearly frame the competing legal arguments, and contributes draft language used in published opinions.",
    satEquivalent: 1240,
    actEquivalent: 25,
  },
  123: {
    cognitiveProfile:
      "At IQ 123, abstract reasoning is notably proficient — individuals approach complex, ill-defined problems with structured analytical strategies and generate insightful solutions through active reasoning rather than pattern matching to memorized examples. Verbal comprehension includes facile engagement with advanced academic discourse across disciplines. Quantitative reasoning extends to graduate-level statistics, mathematical modeling, and formal proof structures. Working memory sustains complex argumentation across long reasoning chains. Processing speed is high enough that cognitive effort feels distributed more toward depth and quality than throughput management. This score provides excellent competitive positioning at elite academic institutions and top professional organizations.",
    researchContext:
      "Kuncel, Hezlett, and Ones' (2001) meta-analysis in Psychological Bulletin shows that GRE scores corresponding to approximately IQ 123 predict doctoral dissertation quality ratings significantly above those predicted by lower scores. Chabris (2007) reviewing cognitive ability research in the New York Academy of Sciences confirms that differences between the 90th and 95th percentile of cognitive ability produce measurable differences in scientific publication rates across academic fields.",
    realWorldScenarios:
      "A hedge fund portfolio manager at IQ 123 constructs quantitative trading models, evaluates macroeconomic signals in real time, and manages risk across a multi-billion dollar long/short equity book while articulating the investment thesis clearly to limited partners. A medical researcher at a leading academic institution designs randomized controlled trials, navigates the statistical complexities of adaptive trial designs, and publishes findings in top-tier journals. A law student at a top-14 school finishes in the top 10% of their class and earns offers from multiple elite litigation boutiques after demonstrating exceptional analytical writing during moot court competitions.",
    satEquivalent: 1260,
    actEquivalent: 26,
  },
  124: {
    cognitiveProfile:
      "IQ 124 reflects clearly superior cognitive ability, with abstract reasoning that is comfortable tackling genuinely complex, multi-variable problems across technical and humanistic domains. Logical structure is perceived quickly in dense material — legal arguments, scientific papers, financial models — and weaknesses in those structures are identified rapidly. Verbal comprehension and production are highly developed, supporting sophisticated analytical writing and nuanced professional communication. Working memory capacity supports holding several complex ideas simultaneously to compare, synthesize, and evaluate them. This score is characteristic of many high-performing professionals in medicine, law, academia, finance, and engineering.",
    researchContext:
      "Lubinski (2009) reviewing the Study of Mathematically Precocious Youth in the American Psychologist documents that individuals scoring in the top 5-10% of cognitive ability — approximately IQ 122-130 — disproportionately populate the most distinguished occupational roles in science, technology, law, and medicine, as documented across multiple longitudinal cohorts spanning thirty-five years.",
    realWorldScenarios:
      "A patent attorney specializing in biotechnology at IQ 124 drafts claims for gene-editing technology patents, develops claim differentiation arguments during USPTO prosecution, and conducts validity challenges in inter partes review proceedings with sufficient technical depth to earn client and examiner respect. A biostatistician at a pharmaceutical company designs adaptive clinical trial endpoints, models sample size projections using Bayesian simulation, and presents regulatory-facing statistical analysis plans to FDA reviewers. A doctoral student in mathematics proves a novel lemma extending a known result in algebraic topology, recognized by their dissertation committee as a meaningful contribution.",
    satEquivalent: 1270,
    actEquivalent: 26,
  },
  125: {
    cognitiveProfile:
      "At IQ 125, cognitive functioning is comfortably superior, placing this individual in roughly the top 5% of the general population. Abstract reasoning is clearly a strength — individuals at this level naturally seek structural explanations, enjoy theoretical challenges, and often find conventional solutions to problems insufficient when more elegant or complete approaches are available. Conceptual synthesis across domains is fluid. Verbal comprehension supports effortless engagement with any academic text, regardless of field. Quantitative reasoning handles advanced mathematics at a level relevant to research applications. Working memory is robust under extended cognitive load. This score is characteristic of successful researchers, senior professionals, and intellectual leaders.",
    researchContext:
      "Data from the National Merit Scholarship program, which selects approximately the top 1% of high school students primarily on PSAT scores corresponding to the IQ 130-137 range, suggests that students near IQ 125 form a highly competitive applicant pool for selective colleges. Park, Lubinski, and Benbow (2008) in Psychological Science confirm that individuals near this percentile level are disproportionately represented among award-winning scholars and scientists in longitudinal studies.",
    realWorldScenarios:
      "A McKinsey senior associate at IQ 125 leads workstreams on pharmaceutical pricing strategy, builds detailed revenue and cost models, and structures a final presentation that convinces a Fortune 100 client board to adopt a major pricing strategy shift. A university professor of cognitive neuroscience teaches graduate seminars on neural mechanisms of memory, writes R01 grant applications funded at above-average rates, and publishes research in Nature Neuroscience. A third-year medical resident excels in a competitive subspecialty fellowship match by demonstrating exceptional clinical reasoning skills during difficult case presentations to fellowship program directors.",
    satEquivalent: 1290,
    actEquivalent: 26,
  },
  126: {
    cognitiveProfile:
      "IQ 126 reflects a superior cognitive profile with particularly well-developed abstract reasoning, conceptual flexibility, and verbal analytical ability. Complex arguments — whether legal, scientific, philosophical, or strategic — are parsed quickly, their structure identified, and their weaknesses detected. Intellectual curiosity is often a distinguishing feature: individuals at this level actively seek out challenging material and find intellectual engagement intrinsically rewarding. Processing speed and working memory together support high-quality performance in demanding, fast-paced intellectual work environments. This score places an individual comfortably in the top 4-5% of the population and is associated with distinguished professional performance.",
    researchContext:
      "Wai, Lubinski, Benbow, and Steiger (2010) in the Journal of Educational Psychology found that individuals in approximately the top 5% of cognitive ability were dramatically overrepresented among Fortune 500 CEOs, federal judges, and National Academy of Sciences members relative to their population share, demonstrating that ability differences at this level translate into measurably differentiated elite professional outcomes.",
    realWorldScenarios:
      "A venture capital investor at IQ 126 evaluates complex biotech startup pitches, identifies which scientific claims are credible versus speculative, assesses team capability, and makes portfolio allocation decisions under conditions of significant uncertainty and incomplete information. A federal judge at this score analyzes novel statutory interpretation questions with no direct circuit precedent, synthesizes reasoning from analogous cases across multiple circuits, and drafts opinions that stand up to appellate review. A tenure-track assistant professor publishes three peer-reviewed articles in their first three years, securing a strong external evaluation record ahead of their tenure case.",
    satEquivalent: 1300,
    actEquivalent: 27,
  },
  127: {
    cognitiveProfile:
      "At IQ 127, cognitive ability is meaningfully superior — placing this individual in the top 3-4% of the population. Abstract reasoning handles truly complex, multi-layered problems with systematic analytical strategies and productive insight. Pattern recognition in dense data, identification of logical fallacies in sophisticated arguments, and generation of non-obvious creative solutions are all characteristic strengths. Verbal comprehension and production are highly developed, supporting expert-level engagement with academic and technical literature. Working memory sustains extended reasoning tasks under cognitive load. Processing speed is notably above average. This score profiles many research scientists, senior policy analysts, physician-scientists, and elite legal professionals.",
    researchContext:
      "Schmidt and Hunter's (1998) influential Psychological Bulletin meta-analysis of over 85 years of personnel selection research found that general cognitive ability is the single best predictor of job performance across all occupational complexity levels, and that the predictive relationship strengthens as job complexity increases — a finding directly relevant to the elite professional roles occupied by many individuals at IQ 127.",
    realWorldScenarios:
      "A physician-scientist at an academic medical center conducts translational research on tumor immunology, writes and defends R01 grant applications to NIH study sections, and maintains an active clinical practice that informs the biological questions driving their research program. A senior State Department foreign service officer at IQ 127 analyzes geopolitical scenarios, writes cable traffic assessing political stability across several Eastern European countries, and advises the Ambassador on recommended policy responses to rapidly evolving diplomatic situations. A law firm partner at this score manages complex patent litigation with dozens of witnesses, crafting deposition strategy that successfully undermines the opposing expert's technical credibility.",
    satEquivalent: 1320,
    actEquivalent: 27,
  },
  128: {
    cognitiveProfile:
      "IQ 128 represents superior cognitive ability with particular strengths in abstract reasoning depth and intellectual breadth. Individuals at this level engage productively with original, difficult problems at the frontier of their domains. Theoretical thinking comes naturally — principles are extracted from examples, models are built from first principles, and implications of premises are traced through extended logical chains. Verbal comprehension and production support polished, sophisticated written expression of complex ideas for both specialist and general audiences. Working memory and processing speed enable high-throughput complex problem-solving with retained depth. This score is consistent with distinguished researchers, senior government analysts, and high-achieving professionals in multiple demanding fields.",
    researchContext:
      "Plomin, DeFries, McClearn, and McGuffin (2008) in Behavioral Genetics document that cognitive ability at this level has strong genetic components estimated at 50-80% heritability in adult populations, but also that environmental enrichment meaningfully interacts with high genetic potential to produce exceptional professional and creative achievement. Longitudinal data in Lubinski and Benbow (2006) confirms sustained above-average achievement trajectories for individuals at this percentile level.",
    realWorldScenarios:
      "A computational biologist at IQ 128 develops novel algorithms for single-cell RNA sequencing data analysis, publishes the methods in Nature Methods, and presents their approach at a keynote address at a major international conference in their field. A senior White House policy advisor at this score integrates economic modeling, legal feasibility analysis, and political landscape assessments to develop technically sound and politically viable policy proposals on healthcare cost regulation. An appellate attorney argues complex statutory preemption questions before the U.S. Supreme Court after developing the issue through a carefully planned multi-year litigation strategy.",
    satEquivalent: 1330,
    actEquivalent: 28,
  },
  129: {
    cognitiveProfile:
      "At IQ 129, cognitive functioning is superior and approaching the gifted threshold. Abstract reasoning is advanced and multidimensional — individuals work with formal systems, theoretical models, and complex conceptual architectures with genuine facility. Verbal comprehension includes confident production of original, sophisticated prose on complex topics across disciplines. Quantitative reasoning supports advanced mathematics, formal logic, and statistical methods at a level appropriate for research and high-level analytical roles. Working memory is highly robust, sustaining complex multi-step reasoning across long intellectual tasks. Processing speed is above average. Individuals at 129 consistently occupy the top tier within elite professional and academic environments.",
    researchContext:
      "Wai, Lubinski, and Benbow (2009) analyzed longitudinal data from the Study of Mathematically Precocious Youth showing that individuals scoring in the top 1-5% of cognitive ability, corresponding to approximately IQ 128-135, accounted for a disproportionate share of scientific publications, Fortune 500 leadership positions, and academic tenured positions over a thirty-five-year follow-up. The difference between the 95th and 99th percentile remains consequential for the most elite outcomes.",
    realWorldScenarios:
      "A leading cardiologist and clinical trialist at IQ 129 designs a landmark multicenter randomized controlled trial, chairs a data safety monitoring board, publishes in the New England Journal of Medicine, and shapes international clinical practice guidelines in their specialty. A federal appellate judge at this score writes opinions in complex financial regulation cases that are cited approvingly by multiple circuit courts and repeatedly referenced in academic legal commentary. A tenure-track professor of economics at a research-intensive university publishes in the American Economic Review within five years of their PhD, securing their position.",
    satEquivalent: 1350,
    actEquivalent: 28,
  },
  130: {
    cognitiveProfile:
      "IQ 130 marks the conventional threshold for giftedness — the top 2.3% of the population. Abstract reasoning is clearly gifted-level, with advanced facility in formal systems, theoretical modeling, and multi-layered inference. Problem decomposition, identification of deep structural patterns, and generation of creative non-obvious solutions are characteristic cognitive strengths. Verbal comprehension is excellent, extending to primary texts in any academic field. Quantitative reasoning handles advanced mathematics fluently. Working memory is highly developed, sustaining sophisticated analysis across long, demanding intellectual tasks. Processing speed is notably above average. This score is strongly associated with distinguished outcomes in research, senior leadership, and creative intellectual work.",
    researchContext:
      "Terman's landmark longitudinal study of gifted children (1925 and follow-ups through the 1980s) established that individuals at IQ 130 and above showed dramatically elevated rates of professional distinction, publication, and earned recognition relative to the general population across several decades of follow-up. Lubinski and Benbow (2006) updated this picture with SMPY data, confirming that the gifted threshold continues to predict distinguished outcomes reliably.",
    realWorldScenarios:
      "A professor of mathematics at MIT at IQ 130 proves a significant theorem in analytic number theory, teaches graduate-level courses that students describe as intellectually transformative, and serves on NSF review panels evaluating the most technically ambitious grant proposals in their field. A senior partner at a premier global law firm manages complex multi-jurisdictional M&A transactions simultaneously, leading teams of junior attorneys and negotiating deal terms that preserve billions of dollars in client value. A medical school dean at this score navigates the complex interplay of clinical, educational, research, and financial missions within a major academic medical center.",
    satEquivalent: 1360,
    actEquivalent: 29,
  },
  131: {
    cognitiveProfile:
      "At IQ 131, cognitive ability is clearly gifted, with abstract reasoning that approaches problems from structural and theoretical angles naturally. Intellectual engagement with difficult, novel material is energizing rather than draining. Conceptual synthesis across disciplines — integrating insights from mathematics, social science, biology, or philosophy — is fluid and often produces genuinely original frameworks. Verbal comprehension and production are highly advanced. Quantitative reasoning handles graduate-level mathematics and formal methods. Working memory is exceptionally robust, sustaining extended multi-thread reasoning under cognitive load. This score profiles many leading researchers, scholars, and senior analytical professionals whose work requires handling sustained intellectual complexity.",
    researchContext:
      "Lubinski and Benbow (2006) in Perspectives on Psychological Science report SMPY longitudinal data showing that individuals scoring above approximately the 98th percentile — IQ 131 and above — showed rates of doctoral degree attainment, tenure at research universities, and patent acquisition that dramatically exceeded those of peers at even the 95th percentile, confirming that ability differences within the gifted range remain consequential.",
    realWorldScenarios:
      "A computational neuroscientist at IQ 131 develops novel mathematical models of synaptic plasticity, writes successful NIH R01 grant applications, and maintains a productive publication record in top-tier neuroscience and computational journals simultaneously. A federal district court judge at this score manages a complex antitrust case involving dozens of expert witnesses, technical econometric evidence, and novel legal questions, writing a comprehensive findings-of-fact opinion that the circuit court upholds in full. A startup founder builds a successful AI-powered legal research company, personally contributing to the core NLP architecture before eventually leading a team of forty engineers.",
    satEquivalent: 1380,
    actEquivalent: 29,
  },
  132: {
    cognitiveProfile:
      "IQ 132 reflects gifted cognitive ability with exceptional abstract reasoning and intellectual versatility. Formal logical systems, mathematical structures, theoretical models, and complex argumentation are all engaged with ease and genuine enthusiasm. Learning rates are dramatically above average — new technical frameworks, domain vocabularies, and methodological approaches are mastered in a fraction of the time required by average-ability peers. Verbal comprehension and production are highly developed, supporting original sophisticated writing accessible to expert and educated general audiences simultaneously. Working memory and processing speed combine to support high-quality performance in the most demanding intellectual roles in any professional domain.",
    researchContext:
      "Park, Lubinski, and Benbow (2008) in Psychological Science analyzed creative achievement data for SMPY cohort members scoring at the 99th percentile and above, corresponding to approximately IQ 137 and above, but noted that creative achievements were meaningfully elevated even among the 95th-99th percentile group — roughly IQ 127-137 — relative to lower ability peers tracked over thirty years.",
    realWorldScenarios:
      "A Nobel Prize candidate in chemistry at IQ 132 leads a research group that makes pioneering contributions to catalysis chemistry, mentors doctoral students who go on to distinguished independent careers, and advises national science funding agencies on research priority setting in materials science. A Supreme Court clerk at this score researches extraordinarily complex constitutional questions, drafts bench memoranda that frame the critical legal issues for Justices, and drafts initial opinions that influence landmark decisions. A quantitative finance chief risk officer builds sophisticated stress testing frameworks for a global bank's trading book, earning recognition from regulators for the methodological rigor of the models.",
    satEquivalent: 1400,
    actEquivalent: 30,
  },
  133: {
    cognitiveProfile:
      "At IQ 133, cognitive functioning is gifted with exceptional breadth and depth. Abstract reasoning operates at a level where theoretical and formal thought feels natural and generative. Original insights — perceiving connections or implications that others miss — are more frequent and reliable. Verbal abilities support producing intellectually substantial work accessible to both specialist and educated lay audiences. Quantitative reasoning handles advanced mathematics, formal logic systems, and rigorous proof construction. Working memory sustains the simultaneous management of multiple complex reasoning threads without degradation. Processing speed is well above average. This score is consistent with leading scholars, award-winning researchers, and senior executives of complex organizations.",
    researchContext:
      "Chabris (2007) analyzing cognitive ability data from multiple longitudinal studies in the Annals of the New York Academy of Sciences found that ability differences in the range above approximately the 95th percentile continue to predict meaningful variation in creative, scholarly, and scientific achievement, challenging the popular notion that a cognitive threshold exists above which additional ability provides no incremental benefit.",
    realWorldScenarios:
      "A leading climate scientist at IQ 133 runs global circulation models on supercomputing clusters, publishes foundational papers on tipping point dynamics in Nature and Science, and advises IPCC working groups on the technical accuracy of summary for policymakers language. A federal reserve bank president at this score conducts monetary policy research, presents at Jackson Hole symposium, and communicates complex economic tradeoffs clearly to diverse audiences ranging from financial market participants to congressional oversight committees. An elite appellate litigator wins landmark environmental law cases at the Supreme Court level, having built the winning arguments through a decade of careful strategic case selection and brief writing.",
    satEquivalent: 1410,
    actEquivalent: 30,
  },
  134: {
    cognitiveProfile:
      "IQ 134 represents gifted-level cognitive ability with exceptional abstract reasoning, conceptual depth, and intellectual generativity. Novel problems are approached with genuine curiosity and systematic analytical creativity. Theoretical frameworks are built from first principles rather than borrowed wholesale from existing models. Verbal comprehension and production are at a high level, enabling sophisticated engagement with primary literature and production of original scholarly or analytical writing. Quantitative reasoning is advanced. Working memory is exceptional — long, complex reasoning chains are managed without degrading into cognitive shortcuts. This score profiles many of the most accomplished researchers, leaders, and creative thinkers in intellectually demanding fields.",
    researchContext:
      "The Study of Mathematically Precocious Youth's fifty-year longitudinal follow-up, summarized by Lubinski (2016) in the Journal of Personality and Social Psychology, demonstrates that individuals scoring in approximately the top 1% — roughly IQ 135 and above — accumulated patents, publications, and career awards at rates five to ten times higher than those in the top 5% but below the top 1%, confirming that ability differences within the gifted range have profound real-world consequences.",
    realWorldScenarios:
      "A theoretical physicist at IQ 134 makes original contributions to quantum field theory, collaborates internationally with leading groups on the mathematical structure of string theory compactifications, and attracts outstanding graduate students by their reputation for identifying important open problems. A chief technology officer at a top AI research company leads strategic technical direction decisions, personally assesses the soundness of core architectural choices in major model development efforts, and represents the organization's technical credibility with academic and policy partners. A judge on the U.S. Court of International Trade produces opinions on complex trade law disputes that become primary references for practitioners in international trade regulation.",
    satEquivalent: 1430,
    actEquivalent: 31,
  },
  135: {
    cognitiveProfile:
      "At IQ 135, cognitive ability is unambiguously gifted — approximately top 1% of the population. Abstract reasoning is deeply proficient: formal systems, mathematical structures, and complex theoretical models are engaged at an expert level with genuine facility. Generating original insights, identifying non-obvious structural similarities across domains, and constructing novel intellectual frameworks are characteristic cognitive outputs. Verbal comprehension and production are highly advanced. Quantitative reasoning supports graduate-level and research-level mathematics. Working memory is exceptional, enabling sustained management of multiple interacting complex ideas. Processing speed is well above average. Individuals at 135 occupy the highest strata of academic, scientific, legal, and strategic professional roles.",
    researchContext:
      "Jensen (1998) in The g Factor documents that IQ 135 and above has historically been associated with the most intellectually demanding occupational niches — research mathematics, theoretical physics, academic philosophy, elite legal scholarship — and that individuals at this level are more than ten times as likely as average-ability individuals to publish in top-tier academic journals or hold leadership positions in research-intensive organizations.",
    realWorldScenarios:
      "A professor of mathematics at a leading research university at IQ 135 proves significant results in algebraic geometry, co-organizes an international conference that sets the intellectual agenda for the field, and wins a prestigious early-career award recognizing their research contributions. A senior intelligence community analyst at this score produces finished intelligence assessments on state adversary decision-making that directly inform National Security Council deliberations. A leading trial attorney tries complex securities fraud cases, managing hundreds of thousands of pages of documentary evidence, dozens of expert witnesses, and a trial team of fifteen attorneys over a four-month jury trial resulting in a favorable verdict.",
    satEquivalent: 1440,
    actEquivalent: 31,
  },
  136: {
    cognitiveProfile:
      "IQ 136 reflects gifted-level cognitive ability with exceptional abstract reasoning depth and intellectual versatility approaching the very highest ranges. Formal and theoretical problems are approached with systematic generativity — not merely solving what is presented but perceiving the structure of the problem space itself and generating novel approaches organically. Verbal and quantitative abilities are at an advanced level. Cross-domain synthesis — connecting insights from disparate fields — is fluid and often produces insights that specialists within a single domain fail to perceive. Working memory is highly robust. This score is characteristic of intellectual leaders whose work shapes fields rather than merely contributing to them.",
    researchContext:
      "Wai, Lubinski, and Benbow (2009) in Developmental Psychology analyzed SMPY cohort data demonstrating that individuals above the 99th percentile of cognitive ability (roughly IQ 135+) showed dramatically elevated representation among tenured faculty at top research universities, Fortune 500 executives, and federal judges compared to peers even in the top 5-10% of ability — confirming the continued predictive power of ability differences at the highest levels.",
    realWorldScenarios:
      "A computer science professor at Stanford at IQ 136 develops foundational algorithms for a new paradigm in distributed systems, advises startups whose products incorporate their published research, and teaches legendary graduate courses that alumni consistently identify as the most intellectually formative experience of their doctoral training. A senior judge on the Federal Circuit writes opinions shaping the doctrine of patent claim construction, regularly cited by practitioners across the country and generating substantial academic commentary. A global management consulting firm senior partner leads a cross-industry practice on digital transformation strategy, advising boards of Fortune 100 companies on technology-driven business model evolution.",
    satEquivalent: 1450,
    actEquivalent: 32,
  },
  137: {
    cognitiveProfile:
      "At IQ 137, cognitive functioning is in the highest tiers of the gifted range, approaching the exceptionally gifted threshold. Abstract reasoning is profoundly advanced — theoretical architecture, formal system construction, and multi-domain conceptual synthesis operate at a level that produces genuinely original intellectual output. Pattern recognition in complex, noisy data environments is exceptional. Verbal comprehension and production are at the level of the most sophisticated academic and professional discourse. Quantitative reasoning handles advanced research mathematics fluently. Working memory sustains extraordinarily complex multi-thread reasoning without degradation. Processing speed is well above average. Individuals at 137 occupy the most intellectually demanding roles in any knowledge domain.",
    researchContext:
      "Lubinski's (2016) fifty-year retrospective on the SMPY cohort published in the Journal of Personality and Social Psychology confirmed that individuals scoring in approximately the top 0.5% of cognitive ability — roughly IQ 140 and above — accumulated scholarly and professional accomplishments that dwarfed even those of individuals in the top 1%. Individuals near IQ 137 are at the leading edge of the populations producing the most consequential intellectual outputs.",
    realWorldScenarios:
      "A leading theoretical economist at IQ 137 publishes in the Quarterly Journal of Economics and American Economic Review regularly, wins the Clark Medal for contributions to mechanism design theory before age 40, and teaches PhD theory sequences that produce students who go on to top department placements. A senior director of AI safety research leads a team studying alignment approaches, evaluates competing theoretical frameworks for robustness under capability scaling, and publishes influential technical reports read carefully by leading AI labs worldwide. A Supreme Court advocate at this score handles a dozen Supreme Court arguments over a career, winning landmark decisions in administrative law and statutory interpretation.",
    satEquivalent: 1460,
    actEquivalent: 32,
  },
  138: {
    cognitiveProfile:
      "IQ 138 reflects exceptional gifted-level cognitive ability — the top 0.7% of the population. Abstract reasoning is at a level where truly novel intellectual terrain is engaged productively rather than feeling inaccessible. Theoretical and formal thinking is generative: individuals build and evaluate complex models, identify structural flaws in sophisticated arguments, and perceive implications of premises that others overlook. Verbal ability supports world-class scholarly and professional writing. Quantitative reasoning handles the most advanced research-level mathematics relevant to applied domains. Working memory is exceptional. Processing speed is well above average. This score profiles many of the most intellectually productive scholars, scientists, and senior strategic leaders in global knowledge-economy institutions.",
    researchContext:
      "Murray (1998) in Human Accomplishment analyzed the cognitive profiles of historically recognized intellectual achievers and found strong positive associations between estimated cognitive ability and the scale of creative contribution, with the most prolific contributors across science, mathematics, and philosophy clustering well above the 98th percentile of cognitive ability. Individuals at IQ 138 are situated within this most productive population segment.",
    realWorldScenarios:
      "A professor and MacArthur Fellow in linguistics at IQ 138 develops a transformative new framework for understanding syntactic universals, publishes foundational monographs that reshape graduate training in the field, and participates in cross-disciplinary collaborations with cognitive scientists and computer scientists designing NLP systems grounded in formal linguistic theory. A chief economic advisor to a G7 head of government synthesizes complex macroeconomic and geopolitical analysis into actionable policy recommendations, managing a team of PhD economists and communicating nuanced economic tradeoffs to political leaders under time pressure. A landmark civil rights attorney wins multiple Supreme Court cases establishing foundational precedents over a forty-year career.",
    satEquivalent: 1465,
    actEquivalent: 32,
  },
  139: {
    cognitiveProfile:
      "At IQ 139, cognitive ability is in the exceptional range — top 0.5% of the population. Abstract reasoning operates at a level where engagement with the most technically demanding intellectual content in any field is productive rather than merely effortful. Original insight, theoretical system building, and cross-domain synthesis are characteristic outputs of sustained intellectual engagement at this level. Verbal comprehension and production are at the level of the most sophisticated academic discourse. Quantitative reasoning handles research-level mathematics with facility. Working memory is exceptional, sustaining multi-thread reasoning of extraordinary complexity. Processing speed is well above average. This score is characteristic of the most intellectually distinguished professionals in any knowledge-intensive domain.",
    researchContext:
      "Terman's original Genetic Studies of Genius (1925) and subsequent follow-ups showed that individuals at or above IQ 135-140 showed lifelong trajectories of exceptional intellectual productivity, professional distinction, and creative contribution across virtually all domains studied — from science and engineering to law, business, and the arts. SMPY longitudinal data extends and refines these findings across multiple modern cohorts.",
    realWorldScenarios:
      "A tenured professor of mathematics at Princeton at IQ 139 resolves a decades-old conjecture in analytic number theory, receives the Fields Medal, and mentors students who achieve independent distinction — several becoming faculty at leading research universities. A CIA senior intelligence officer at this score leads complex multi-source analysis on an adversary state's nuclear program, produces assessments that directly shape presidential policy decisions, and designs collection strategies that significantly advance the intelligence community's understanding. A global technology company CEO builds an organization that transforms multiple industries, articulating a coherent multi-decade technological vision that guides product strategy and capital allocation across a vast enterprise.",
    satEquivalent: 1470,
    actEquivalent: 33,
  },
  140: {
    cognitiveProfile:
      "IQ 140 sits at the threshold of profoundly gifted cognitive ability — the top 0.4% of the population. Abstract reasoning at this level is qualitatively different from average: theoretical frameworks are built and discarded quickly, the deep structure of complex problems is perceived almost immediately, and novel solutions are generated through genuine creative synthesis rather than procedural application. Verbal comprehension and production are at the level of the most demanding scholarly and literary discourse. Quantitative reasoning handles research-level and frontier mathematics fluently. Working memory is exceptional — capable of sustaining extraordinary reasoning complexity across extended intellectual work. This score profiles many of the world's most recognized intellectual contributors across science, mathematics, law, philosophy, and strategic leadership.",
    researchContext:
      "Lubinski's (2016) definitive fifty-year SMPY retrospective in the Journal of Personality and Social Psychology provides the clearest longitudinal picture: individuals scoring above approximately IQ 140 are represented among Nobel laureates, National Academy of Sciences members, Fortune 500 CEOs, and landmark legal decision-makers at rates hundreds of times greater than their proportion of the general population. Within-gifted ability differences at this extreme level predict lifetime intellectual output at a magnitude that cannot be attributed to chance.",
    realWorldScenarios:
      "A Nobel laureate in physics at IQ 140 devises a fundamentally new theoretical approach to quantum gravity, building a mathematical framework over fifteen years of sustained intellectual effort that eventually unifies previously incompatible research programs, reshaping the field's agenda for a generation. A U.S. Supreme Court Justice at this score authors landmark majority opinions in complex constitutional law cases — on separation of powers, equal protection, and administrative law — that define legal doctrine for decades and are quoted by courts worldwide. A pioneering AI researcher leads the development of architectures that produce qualitative capability jumps in language understanding, writing foundational papers that are among the most cited in the history of the field.",
    satEquivalent: 1480,
    actEquivalent: 33,
  },
};
