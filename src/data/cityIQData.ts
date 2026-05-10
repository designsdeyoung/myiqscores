export interface CityIQInfo {
  city: string;
  slug: string;
  country: string;
  countrySlug: string;
  estimatedAvgIQ: number;
  avgIQRange: string;
  knownFor: string;
  description: string;
  keyFactors: string[];
  faqItems: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
  relatedCities: string[];
  continent: string;
}

export const cityIQData: CityIQInfo[] = [
  // ── Asia ──────────────────────────────────────────────────────────────────
  {
    city: "Tokyo",
    slug: "tokyo",
    country: "Japan",
    countrySlug: "japan",
    estimatedAvgIQ: 108,
    avgIQRange: "105–111",
    knownFor: "technology, robotics, finance, education",
    description:
      "Tokyo consistently ranks among the world's most cognitively demanding urban environments. As Japan's capital and economic engine, it draws the country's highest-achieving students and professionals through fierce university entrance competition. The city's dense concentration of elite universities, research institutes, and technology firms creates powerful selection effects that elevate population-level cognitive test performance above the already-high national average. Infrastructure investments in early childhood education and widespread access to supplementary tutoring (juku) reinforce these advantages.",
    keyFactors: [
      "Concentration of Japan's top universities and research institutions",
      "Strong juku (cram school) culture providing intensive academic preparation",
      "High-income professional population drawn by finance and technology sectors",
      "Excellent public healthcare and childhood nutrition outcomes",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Tokyo?",
        answer:
          "Tokyo's estimated average IQ is around 108, somewhat above Japan's national average of 106. This urban premium reflects the city's role as a hub for highly educated professionals, elite universities, and competitive academic culture.",
      },
      {
        question: "Why does Tokyo score higher than Japan's national average?",
        answer:
          "Major cities typically score above national averages due to selection effects — ambitious, high-achieving individuals migrate to capital cities for education and career opportunities. Tokyo also has the highest concentration of top universities and research institutions in Japan.",
      },
      {
        question: "How does Tokyo compare to other Asian megacities?",
        answer:
          "Tokyo scores comparably to Singapore City and Seoul, and slightly above Shanghai. All these cities share high-pressure education cultures, strong economies, and large concentrations of highly educated residents.",
      },
    ],
    relatedCities: ["osaka", "seoul", "singapore-city"],
    continent: "Asia",
  },
  {
    city: "Shanghai",
    slug: "shanghai",
    country: "China",
    countrySlug: "china",
    estimatedAvgIQ: 108,
    avgIQRange: "105–111",
    knownFor: "finance, manufacturing, education, innovation",
    description:
      "Shanghai is China's financial capital and consistently produces some of the highest PISA scores of any city or region in the world, outperforming entire national averages. Its education system is internationally benchmarked and competitive, with students regularly achieving top rankings in mathematics and science. The city's rapid economic development has attracted highly educated migrants from across China, raising the cognitive profile of its resident population substantially above the national average. State investment in early education, nutrition programs, and healthcare has further supported cognitive development outcomes.",
    keyFactors: [
      "World-leading PISA scores in mathematics, science, and reading",
      "Strong selective migration of educated professionals from across China",
      "Heavy government investment in early childhood education and nutrition",
      "Dense concentration of elite universities and research centers",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Shanghai?",
        answer:
          "Shanghai's estimated average IQ is around 108, well above China's national average of 105. The city's PISA scores — among the highest ever recorded — reflect its exceptional education system and highly educated resident population.",
      },
      {
        question: "Why does Shanghai perform so well academically?",
        answer:
          "Shanghai benefits from heavy government investment in education, a highly competitive school system that emphasizes mathematics and science, and selective migration of educated professionals seeking economic opportunities in China's financial capital.",
      },
      {
        question: "How does Shanghai compare to Beijing?",
        answer:
          "Shanghai and Beijing score similarly, both around 108, and both consistently outperform China's national average. Shanghai edges slightly ahead on international business-oriented metrics while Beijing's concentration of government and military research institutions gives it comparable cognitive density.",
      },
    ],
    relatedCities: ["beijing", "shenzhen", "hong-kong-city"],
    continent: "Asia",
  },
  {
    city: "Beijing",
    slug: "beijing",
    country: "China",
    countrySlug: "china",
    estimatedAvgIQ: 107,
    avgIQRange: "104–110",
    knownFor: "government, research, education, history",
    description:
      "Beijing serves as China's political and cultural capital and houses the country's most prestigious universities, including Peking University and Tsinghua University, widely regarded as the Harvard and MIT of China. The city attracts the top academic talent from across the country through the gaokao (national university entrance exam), creating intense selection pressure that elevates the resident population's average cognitive performance. Government and military research institutions further concentrate educated professionals. Improvements in nutrition and healthcare have paralleled economic growth, supporting strong cognitive development outcomes.",
    keyFactors: [
      "Home to Peking University and Tsinghua University, China's most elite institutions",
      "Gaokao-driven selection draws China's highest-performing students",
      "Dense cluster of state research institutes and innovation centers",
      "Rapidly improving healthcare and childhood nutrition infrastructure",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Beijing?",
        answer:
          "Beijing's estimated average IQ is around 107, above China's national average of 105. The city's concentration of elite universities and research institutions creates strong selection effects that raise the population's cognitive profile.",
      },
      {
        question: "How does Beijing's education system drive cognitive outcomes?",
        answer:
          "Beijing's education system is extremely competitive, with students from across China competing intensely for places at its top universities. This selection effect, combined with high levels of parental investment in education and extensive tutoring, contributes to above-average cognitive test performance.",
      },
      {
        question: "Is Beijing or Shanghai smarter?",
        answer:
          "Both cities score very similarly at around 107–108. Shanghai tends to score slightly higher on PISA assessments, while Beijing's concentration of research institutions and elite universities gives it comparable cognitive density. The difference is not statistically meaningful.",
      },
    ],
    relatedCities: ["shanghai", "shenzhen", "taipei"],
    continent: "Asia",
  },
  {
    city: "Singapore City",
    slug: "singapore-city",
    country: "Singapore",
    countrySlug: "singapore",
    estimatedAvgIQ: 110,
    avgIQRange: "107–113",
    knownFor: "finance, technology, education, logistics",
    description:
      "Singapore City is the entirety of the city-state of Singapore and consistently achieves the highest PISA scores in the world. Its education system is internationally renowned for its rigor, particularly in mathematics and science, and its bilingual policy ensures all students are proficient in both English and their mother tongue. Singapore's status as a global financial hub attracts highly educated expatriates from around the world, adding to an already cognitively elite resident population. Government investment in early childhood education, nutrition, and healthcare is among the highest in Asia relative to GDP.",
    keyFactors: [
      "World's top PISA scores in mathematics and science",
      "Highly competitive and well-funded national education system",
      "Global financial hub attracting highly educated international professionals",
      "Government investment in early childhood development programs",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Singapore?",
        answer:
          "Singapore's estimated average IQ is around 110, making it one of the highest-scoring cities or countries in the world. Singapore consistently achieves the top PISA scores globally in mathematics, science, and reading.",
      },
      {
        question: "Why does Singapore have such high cognitive test scores?",
        answer:
          "Singapore's high scores reflect its world-class education system, heavy government investment in early childhood development, a culture that strongly values academic achievement, and selection effects from attracting highly educated professionals from around the world.",
      },
      {
        question: "How does Singapore compare to Tokyo and Seoul?",
        answer:
          "Singapore scores slightly higher than Tokyo (108) and Seoul (108) on most measures. All three cities share high-pressure education cultures, strong economies, and large concentrations of highly educated residents, but Singapore's PISA rankings are consistently the highest.",
      },
    ],
    relatedCities: ["hong-kong-city", "tokyo", "taipei"],
    continent: "Asia",
  },
  {
    city: "Hong Kong",
    slug: "hong-kong-city",
    country: "China",
    countrySlug: "china",
    estimatedAvgIQ: 109,
    avgIQRange: "106–112",
    knownFor: "finance, trade, education, law",
    description:
      "Hong Kong is one of the world's great financial centers and consistently ranks among the highest-scoring cities on international cognitive assessments. Its education system combines British academic traditions with Confucian values of rigorous study, creating an intensely competitive environment. The city-state's high population density in a small geographic area concentrates talented individuals, and its role as a gateway between East and West attracts globally mobile professionals. The University of Hong Kong and Hong Kong University of Science and Technology are ranked among Asia's top institutions.",
    keyFactors: [
      "Consistently top-3 PISA scores globally across multiple assessment years",
      "Combination of British academic tradition and Chinese education values",
      "Major international financial center attracting globally mobile talent",
      "Strong university sector with several globally ranked institutions",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Hong Kong?",
        answer:
          "Hong Kong's estimated average IQ is around 109, among the highest of any city in the world. The city consistently scores in the top 3 on PISA assessments and has long been considered one of the world's top-performing education systems.",
      },
      {
        question: "Why does Hong Kong score so high?",
        answer:
          "Hong Kong's high scores reflect its intensely competitive education culture, strong investment in schooling, British academic traditions combined with Chinese study values, and its role as a global financial hub that attracts highly educated professionals from around the world.",
      },
      {
        question: "How does Hong Kong compare to mainland China cities?",
        answer:
          "Hong Kong typically scores 1–2 points higher than Shanghai and Beijing on estimated averages, reflecting its longer history of developed education infrastructure, different curriculum traditions, and higher average income levels.",
      },
    ],
    relatedCities: ["singapore-city", "shanghai", "taipei"],
    continent: "Asia",
  },
  {
    city: "Seoul",
    slug: "seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    estimatedAvgIQ: 108,
    avgIQRange: "105–111",
    knownFor: "technology, K-pop, education, finance",
    description:
      "Seoul is the hyper-urbanized capital of South Korea and the epicenter of its notoriously intense education culture. The city is saturated with hagwons (private tutoring academies) that students attend after school until late in the evening, supplementing an already rigorous national curriculum. South Korea's suneung college entrance exam is a cultural phenomenon that shapes the entire academic trajectory of Seoul's students. The city's dominance in technology (Samsung, LG, Hyundai all headquartered here) attracts the country's top engineering and business graduates, creating a highly educated resident population.",
    keyFactors: [
      "Densest concentration of hagwons (private tutoring academies) in the world",
      "Suneung exam culture drives extreme academic preparation from early childhood",
      "Technology industry hub attracting South Korea's top STEM graduates",
      "High-density professional class with above-average educational attainment",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Seoul?",
        answer:
          "Seoul's estimated average IQ is around 108, above South Korea's national average of 106. The city's extreme academic culture, dense tutoring infrastructure, and concentration of technology companies attract highly educated residents.",
      },
      {
        question: "Is Seoul's education system the most intense in the world?",
        answer:
          "Seoul's education culture is among the most competitive globally. Students regularly study 12–16 hours per day, and the city has the highest density of private tutoring academies (hagwons) in the world. This intensity contributes to high academic performance but also significant student stress.",
      },
      {
        question: "How does Seoul compare to Tokyo?",
        answer:
          "Seoul and Tokyo score very similarly, both around 108. Both cities share intense academic cultures, high rates of educational attainment, and large concentrations of technology companies. Seoul's private tutoring sector is arguably even more developed than Tokyo's.",
      },
    ],
    relatedCities: ["tokyo", "singapore-city", "taipei"],
    continent: "Asia",
  },
  {
    city: "Taipei",
    slug: "taipei",
    country: "Taiwan",
    countrySlug: "taiwan",
    estimatedAvgIQ: 107,
    avgIQRange: "104–110",
    knownFor: "semiconductors, technology, education, food culture",
    description:
      "Taipei is the capital and financial center of Taiwan and home to the island's most prestigious universities and technology companies. Taiwan Semiconductor Manufacturing Company (TSMC) and many of the world's leading chip designers are headquartered in or near Taipei, creating a powerful concentration of highly trained engineers and scientists. The city's education system is competitive and emphasizes mathematics and science, with students supplementing school with cram schools (buxibans). Taipei's high standard of living supports excellent childhood nutrition and healthcare outcomes.",
    keyFactors: [
      "Global semiconductor and technology industry hub requiring highly educated workforce",
      "Competitive cram school (buxiban) culture supplementing academic preparation",
      "Home to National Taiwan University and other elite institutions",
      "High standard of living supporting strong childhood development outcomes",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Taipei?",
        answer:
          "Taipei's estimated average IQ is around 107, above Taiwan's national average of 104. The city's semiconductor and technology industry concentration attracts the country's top technical talent, raising the resident population's cognitive profile.",
      },
      {
        question: "Why is Taipei a global technology hub?",
        answer:
          "Taipei's technology dominance is rooted in government investment in STEM education, strong engineering university programs, and TSMC's foundational role in global semiconductor manufacturing. This creates a self-reinforcing cycle of attracting and developing technical talent.",
      },
      {
        question: "How does Taipei compare to Tokyo and Seoul?",
        answer:
          "Taipei scores slightly below Tokyo (108) and Seoul (108) but above its own national average. All three cities share East Asian education traditions emphasizing mathematics and science, and all are significant technology industry centers.",
      },
    ],
    relatedCities: ["hong-kong-city", "seoul", "singapore-city"],
    continent: "Asia",
  },
  {
    city: "Mumbai",
    slug: "mumbai",
    country: "India",
    countrySlug: "india",
    estimatedAvgIQ: 87,
    avgIQRange: "84–90",
    knownFor: "finance, Bollywood, trade, entrepreneurship",
    description:
      "Mumbai is India's financial capital and the largest city in the country by economic output. As the home of the Bombay Stock Exchange, major multinational headquarters, and India's film industry, it attracts ambitious professionals from across the subcontinent. Mumbai's urban premium over India's national average reflects the concentration of educated professionals, though severe inequality and inadequate infrastructure in informal settlements temper the city-wide average. Elite institutions like the Indian Institute of Technology Bombay produce world-class graduates who contribute significantly to the city's intellectual profile.",
    keyFactors: [
      "India's financial capital attracting the country's most ambitious professionals",
      "IIT Bombay and other elite institutions concentrate top academic talent",
      "Large, prosperous professional and entrepreneurial class",
      "Urban infrastructure advantages over India's rural national average",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Mumbai?",
        answer:
          "Mumbai's estimated average IQ is around 87, above India's national average of approximately 82. The city's role as India's financial capital attracts highly educated professionals, creating an urban premium, though significant inequality and inadequate infrastructure in informal settlements affect the overall average.",
      },
      {
        question: "How does Mumbai compare to Delhi and Bangalore?",
        answer:
          "Mumbai, Delhi, and Bangalore all score in a similar range around 87–88, all above India's national average. Bangalore may edge slightly higher due to its technology sector concentration, while Mumbai's strength lies in finance and Mumbai's Bollywood industry.",
      },
      {
        question: "What factors limit Mumbai's average despite being a wealthy city?",
        answer:
          "Mumbai's significant informal settlement population (dharavi and similar areas) experiences inadequate access to quality education, nutrition, and healthcare, which tempers the city-wide average despite the large, prosperous professional class in formal employment sectors.",
      },
    ],
    relatedCities: ["delhi", "bangalore", "singapore-city"],
    continent: "Asia",
  },
  {
    city: "Delhi",
    slug: "delhi",
    country: "India",
    countrySlug: "india",
    estimatedAvgIQ: 86,
    avgIQRange: "83–89",
    knownFor: "government, history, education, trade",
    description:
      "Delhi is India's capital and second-largest city, housing the national government, major universities, and a rapidly growing technology sector. As a political capital, it concentrates bureaucratic and administrative professionals with above-average educational attainment. Delhi University and Jawaharlal Nehru University attract students from across the country. The city's cognitive profile reflects significant variation, with well-educated professionals in affluent neighborhoods coexisting with large populations in informal settlements that have limited access to quality education and healthcare.",
    keyFactors: [
      "National capital concentration of government and administrative professionals",
      "Delhi University system and JNU attract academically strong students",
      "Rapidly growing technology and startup sector",
      "Urban selection effects from migration of educated professionals",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Delhi?",
        answer:
          "Delhi's estimated average IQ is around 86, modestly above India's national average. As the capital city, Delhi concentrates government, administrative, and educational professionals, though large informal settlement populations with limited educational access temper the overall figure.",
      },
      {
        question: "How does Delhi's education system compare to other Indian cities?",
        answer:
          "Delhi has one of India's largest university systems and has invested more than most Indian cities in free public education. The Delhi government's education reforms in the 2010s improved public school outcomes significantly, though quality remains highly variable.",
      },
      {
        question: "Why does Delhi score slightly below Mumbai?",
        answer:
          "Mumbai's higher income levels from its financial sector lead to better overall access to private education and healthcare compared to Delhi, where a larger proportion of the population depends on underfunded public services.",
      },
    ],
    relatedCities: ["mumbai", "bangalore", "dubai"],
    continent: "Asia",
  },
  {
    city: "Bangalore",
    slug: "bangalore",
    country: "India",
    countrySlug: "india",
    estimatedAvgIQ: 88,
    avgIQRange: "85–91",
    knownFor: "technology, IT services, startups, innovation",
    description:
      "Bangalore (Bengaluru) is India's technology capital and arguably the most cognitively selective major city in the country. The city hosts the Indian Institutes of Science, IIM Bangalore, and numerous IITs, alongside the Indian headquarters of global technology giants including Infosys, Wipro, Tata Consultancy Services, and many multinational R&D centers. This extraordinary concentration of engineering and scientific talent creates selection effects that push Bangalore's estimated cognitive average above any other major Indian city. The city's younger demographic profile, dominated by tech workers, reinforces this advantage.",
    keyFactors: [
      "India's technology capital with the highest concentration of software engineers",
      "Home to Indian Institute of Science and IIM Bangalore",
      "Major R&D centers for global technology companies",
      "Strong selection effects from technology sector migration",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Bangalore?",
        answer:
          "Bangalore's estimated average IQ is around 88, the highest of any major Indian city. The city's extraordinary concentration of technology professionals, elite educational institutions, and global R&D centers creates strong cognitive selection effects.",
      },
      {
        question: "Why is Bangalore India's technology capital?",
        answer:
          "Bangalore's technology dominance stems from post-independence government investment in aerospace and defense research, followed by the growth of software services in the 1990s. The city's pleasant climate, English-language environment, and quality of universities reinforced its position as India's leading tech hub.",
      },
      {
        question: "How does Bangalore compare to Silicon Valley?",
        answer:
          "Both are technology hubs with highly selective, educated populations. Silicon Valley scores higher on estimated averages due to higher income levels, better healthcare infrastructure, and more selective immigration. However, Bangalore's absolute number of software engineers exceeds Silicon Valley, making it arguably the world's largest technology workforce by volume.",
      },
    ],
    relatedCities: ["mumbai", "delhi", "singapore-city"],
    continent: "Asia",
  },
  {
    city: "Osaka",
    slug: "osaka",
    country: "Japan",
    countrySlug: "japan",
    estimatedAvgIQ: 107,
    avgIQRange: "104–110",
    knownFor: "manufacturing, food culture, trade, innovation",
    description:
      "Osaka is Japan's second-largest metropolitan area and commercial heartland, known for its merchant culture and practical, entrepreneurial spirit. As part of the Keihanshin metropolitan region alongside Kyoto and Kobe, it forms Japan's second major intellectual cluster, home to Osaka University, one of Japan's most prestigious research institutions. The city's manufacturing and pharmaceutical industries require a highly skilled workforce, and its residents enjoy the same high standards of education, nutrition, and healthcare that drive Japan's nationally high cognitive scores.",
    keyFactors: [
      "Osaka University is among Japan's top research universities",
      "Large pharmaceutical and advanced manufacturing industrial base",
      "Part of Keihanshin region with Kyoto's world-class research institutions",
      "High standard of living with excellent healthcare and nutrition access",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Osaka?",
        answer:
          "Osaka's estimated average IQ is around 107, in line with Japan's high national average. While slightly below Tokyo's figure, Osaka benefits from the same national education system, juku culture, and high standards of living.",
      },
      {
        question: "How does Osaka compare to Tokyo?",
        answer:
          "Tokyo scores slightly higher (108 vs 107) due to its greater concentration of national-level universities and the government/finance sector. However, Osaka's Keihanshin region, including Kyoto University (Japan's #2 university), makes the broader metropolitan area highly competitive.",
      },
      {
        question: "What industries drive Osaka's cognitive profile?",
        answer:
          "Osaka's strong pharmaceutical sector (home to companies like Takeda and Shionogi), advanced manufacturing, and chemical industries require large numbers of highly educated scientists and engineers, contributing to the city's educated population base.",
      },
    ],
    relatedCities: ["tokyo", "seoul", "taipei"],
    continent: "Asia",
  },
  {
    city: "Shenzhen",
    slug: "shenzhen",
    country: "China",
    countrySlug: "china",
    estimatedAvgIQ: 108,
    avgIQRange: "105–111",
    knownFor: "technology, manufacturing, innovation, startups",
    description:
      "Shenzhen is China's technology innovation capital, rising from a small fishing village in 1980 to a megalopolis of 18 million people in four decades. The city is home to Huawei, Tencent, DJI, and hundreds of hardware and technology companies, creating one of the world's densest concentrations of tech engineers. Shenzhen's population is uniquely young — average age around 32 — and highly educated, as migration to the city strongly selects for technical skills and entrepreneurial ambition. The city has invested heavily in universities and research institutes to support its technology ecosystem.",
    keyFactors: [
      "Home to Huawei, Tencent, DJI and China's leading technology companies",
      "Youngest average age of any major Chinese city with strong selection for tech talent",
      "Rapid investment in university infrastructure and research institutes",
      "World's leading hardware manufacturing ecosystem attracting top engineers",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Shenzhen?",
        answer:
          "Shenzhen's estimated average IQ is around 108, above China's national average of 105. The city's extraordinary concentration of technology professionals and its young, highly selected migrant population create strong cognitive selection effects.",
      },
      {
        question: "How did Shenzhen become China's Silicon Valley?",
        answer:
          "Shenzhen was established as China's first Special Economic Zone in 1980, enabling market-oriented policies that attracted entrepreneurs and factories. Proximity to Hong Kong, government support for technology development, and a culture of rapid iteration turned it into China's leading innovation hub.",
      },
      {
        question: "How does Shenzhen compare to Shanghai and Beijing?",
        answer:
          "All three cities score around 107–108. Shenzhen is notable for having perhaps the most strongly selected migrant population — you generally move to Shenzhen to work in technology or manufacturing, creating a cognitively homogeneous professional base. Shanghai and Beijing have more diverse economic and social profiles.",
      },
    ],
    relatedCities: ["shanghai", "hong-kong-city", "beijing"],
    continent: "Asia",
  },
  {
    city: "Bangkok",
    slug: "bangkok",
    country: "Thailand",
    countrySlug: "thailand",
    estimatedAvgIQ: 93,
    avgIQRange: "90–96",
    knownFor: "tourism, finance, manufacturing, culture",
    description:
      "Bangkok is Southeast Asia's largest economy outside of Indonesia and the region's premier business and logistics hub. The city captures a substantial urban premium over Thailand's national average through its concentration of educated professionals, international businesses, and Thailand's best universities including Chulalongkorn and Mahidol. Bangkok's international school sector is extensive, serving both expatriate families and affluent Thai professionals who seek English-medium education. However, a large service sector workforce with limited educational attainment moderates the city-wide average.",
    keyFactors: [
      "Chulalongkorn University, Thailand's most prestigious institution, is located here",
      "Major regional hub for multinational companies requiring educated staff",
      "Extensive international school sector raising educational standards",
      "Strong urban-rural migration selecting for ambition and basic literacy",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Bangkok?",
        answer:
          "Bangkok's estimated average IQ is around 93, noticeably above Thailand's national average of approximately 88. The city's concentration of educated professionals, international businesses, and elite universities creates a meaningful urban premium.",
      },
      {
        question: "How does Bangkok compare to other Southeast Asian capitals?",
        answer:
          "Bangkok scores similarly to Kuala Lumpur and above Jakarta. Singapore is in a different league as a city-state with a uniquely high education system. Bangkok's strength lies in its role as the dominant economic hub of mainland Southeast Asia.",
      },
      {
        question: "What factors limit Bangkok's average despite being a wealthy city?",
        answer:
          "Bangkok's large tourism and service sector employs many workers who migrated from rural provinces with limited formal education. This population, while valuable to the economy, has lower educational attainment than the professional class, moderating the city-wide cognitive average.",
      },
    ],
    relatedCities: ["singapore-city", "kuala-lumpur", "jakarta"],
    continent: "Asia",
  },
  {
    city: "Jakarta",
    slug: "jakarta",
    country: "Indonesia",
    countrySlug: "indonesia",
    estimatedAvgIQ: 89,
    avgIQRange: "86–92",
    knownFor: "government, trade, manufacturing, finance",
    description:
      "Jakarta is the capital and largest city of the world's fourth most populous country, serving as the economic, political, and cultural center of Indonesia. The city attracts Indonesia's most educated professionals and is home to the University of Indonesia and other leading institutions. Jakarta's middle class has grown rapidly, and access to quality education has improved substantially over the past two decades. The city scores above Indonesia's national average through selection effects from professional migration, though infrastructure challenges and the sheer scale of informal employment in the urban economy create significant inequality.",
    keyFactors: [
      "Indonesia's dominant economic center attracting educated professionals nationally",
      "University of Indonesia and other elite institutions concentrate academic talent",
      "Rapidly growing middle class with increasing educational investment",
      "Government and multinational corporate headquarters create educated employment base",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Jakarta?",
        answer:
          "Jakarta's estimated average IQ is around 89, above Indonesia's national average of approximately 85. The capital city's concentration of educated professionals, top universities, and multinational companies creates an urban premium, though significant inequality tempers the overall figure.",
      },
      {
        question: "How is Jakarta's education system developing?",
        answer:
          "Jakarta has invested significantly in public education over the past decade, achieving near-universal primary enrollment and improving secondary school quality. The city's higher-income families also invest heavily in private schooling, creating a dual-track system with substantial quality differences.",
      },
      {
        question: "How does Jakarta compare to Bangkok and Kuala Lumpur?",
        answer:
          "Jakarta scores somewhat below Bangkok (93) and Kuala Lumpur (93) due to Indonesia's lower national average and greater urban inequality. However, the gap is narrowing as Indonesia's economy grows and educational investment increases.",
      },
    ],
    relatedCities: ["bangkok", "kuala-lumpur", "singapore-city"],
    continent: "Asia",
  },
  {
    city: "Kuala Lumpur",
    slug: "kuala-lumpur",
    country: "Malaysia",
    countrySlug: "malaysia",
    estimatedAvgIQ: 93,
    avgIQRange: "90–96",
    knownFor: "finance, technology, multiculturalism, trade",
    description:
      "Kuala Lumpur is Malaysia's capital and the economic and intellectual center of one of Southeast Asia's most developed nations. The city benefits from Malaysia's trilingual education system (Malay, English, Chinese, Tamil) and high rates of tertiary education among its diverse population. University of Malaya consistently ranks among Southeast Asia's best universities. Kuala Lumpur's technology corridor, including Cyberjaya and the Multimedia Super Corridor, attracts technology companies that employ highly educated engineers. The city's educated Chinese and Indian diaspora communities bring strong academic traditions, contributing to above-average cognitive profiles.",
    keyFactors: [
      "University of Malaya and diverse multilingual education tradition",
      "Technology corridor (Cyberjaya/MSC) concentrating technology talent",
      "Educated Chinese and Indian diaspora communities with strong academic traditions",
      "High rates of tertiary education relative to Southeast Asian peers",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Kuala Lumpur?",
        answer:
          "Kuala Lumpur's estimated average IQ is around 93, above Malaysia's national average of approximately 88. The city's role as the country's economic and educational hub, combined with its diverse educated population, creates a meaningful urban premium.",
      },
      {
        question: "How does Kuala Lumpur's multilingual education affect outcomes?",
        answer:
          "Malaysia's multilingual education system, with instruction available in Malay, English, and Chinese-medium schools, creates cognitive advantages from early bilingualism and trilingualism. Research suggests multilingual education can enhance certain cognitive flexibility measures.",
      },
      {
        question: "How does Kuala Lumpur compare to Bangkok and Singapore?",
        answer:
          "Kuala Lumpur (93) scores similarly to Bangkok (93) but well below Singapore (110). Singapore's exceptional investment in education and its city-state status with more homogeneous high-income population explain the large gap.",
      },
    ],
    relatedCities: ["singapore-city", "bangkok", "jakarta"],
    continent: "Asia",
  },

  // ── Europe ────────────────────────────────────────────────────────────────
  {
    city: "London",
    slug: "london",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    estimatedAvgIQ: 102,
    avgIQRange: "99–105",
    knownFor: "finance, culture, education, media, law",
    description:
      "London is one of the world's great global cities and an extraordinary magnet for highly educated professionals from across the UK and internationally. The city is home to Imperial College London, UCL, King's College London, and LSE — four of the world's top 50 universities — alongside hundreds of other educational institutions. London's financial sector, legal profession, and media industry attract graduates from elite universities worldwide, creating powerful cognitive selection effects. The city's cognitive profile reflects significant diversity: a highly educated professional class alongside substantial populations with more limited educational access.",
    keyFactors: [
      "Four globally top-50 universities (Imperial, UCL, KCL, LSE) concentrated in the city",
      "Global financial center attracting highly educated international professionals",
      "Strong selective immigration of skilled workers from around the world",
      "World-class legal, medical, and scientific research sectors",
    ],
    faqItems: [
      {
        question: "What is the average IQ in London?",
        answer:
          "London's estimated average IQ is around 102, above the UK's national average of approximately 100. The city's concentration of elite universities, financial institutions, and global businesses attracts a highly educated workforce, creating a meaningful urban premium.",
      },
      {
        question: "Why does London have so many elite universities?",
        answer:
          "London's historical role as the capital of a global empire, combined with centuries of philanthropy and government investment, has produced a cluster of world-leading universities. This concentration attracts the best students and faculty from around the world, reinforcing London's intellectual reputation.",
      },
      {
        question: "How does London compare to other European capitals?",
        answer:
          "London scores comparably to Paris and Amsterdam, both major global cities with elite universities and diverse educated populations. Berlin scores slightly lower due to its different economic structure, while smaller capitals like Zurich, Oslo, and Stockholm may score higher per capita due to more homogeneous, wealthy populations.",
      },
    ],
    relatedCities: ["paris", "amsterdam", "zurich"],
    continent: "Europe",
  },
  {
    city: "Paris",
    slug: "paris",
    country: "France",
    countrySlug: "france",
    estimatedAvgIQ: 101,
    avgIQRange: "98–104",
    knownFor: "culture, fashion, finance, research, cuisine",
    description:
      "Paris is France's intellectual and cultural capital, home to the Grandes Écoles — France's elite higher education institutions — alongside Sorbonne Paris Cité and numerous research centers. The city's unique Grandes Écoles system (including École Polytechnique and Sciences Po) represents one of the world's most selective higher education pipelines, producing France's elite in science, government, and business. Paris concentrates France's most highly educated professionals through the national civil service and major corporation headquarters. The city's strong intellectual tradition and commitment to education have historically supported above-average cognitive performance.",
    keyFactors: [
      "Grandes Écoles system (Polytechnique, ENS, Sciences Po) creates extreme educational selection",
      "National capital concentrating France's top civil servants and executives",
      "Dense cluster of research universities and CNRS research institutes",
      "Strong cultural emphasis on intellectual achievement and education",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Paris?",
        answer:
          "Paris's estimated average IQ is around 101, above France's national average of approximately 99. The city's extraordinary concentration of Grandes Écoles graduates, civil service elite, and international educated professionals creates a strong urban premium.",
      },
      {
        question: "What are France's Grandes Écoles and why are they important?",
        answer:
          "France's Grandes Écoles are elite higher education institutions with extremely competitive entrance exams (concours). Polytechnique, ENS, and Sciences Po rank among the world's most selective schools. Paris concentrates most of these institutions and their graduates, significantly elevating the city's cognitive profile.",
      },
      {
        question: "How does Paris compare to London and Berlin?",
        answer:
          "Paris (101) scores similarly to London (102) and above Berlin (100). All three are major global capitals with elite universities and diverse educated populations. The differences are not statistically significant and reflect slightly different economic structures and educational traditions.",
      },
    ],
    relatedCities: ["london", "berlin", "amsterdam"],
    continent: "Europe",
  },
  {
    city: "Berlin",
    slug: "berlin",
    country: "Germany",
    countrySlug: "germany",
    estimatedAvgIQ: 100,
    avgIQRange: "97–103",
    knownFor: "technology, startups, arts, research, history",
    description:
      "Berlin is Germany's capital and increasingly its technology startup hub, home to some of Europe's most innovative companies and a large creative professional class. The city has four major universities including the Free University of Berlin and Humboldt University, with strong research traditions across sciences and humanities. Berlin's technology sector has grown rapidly, attracting educated young professionals from across Europe and beyond. The city scores approximately at Germany's strong national average, with its diverse population — including large immigrant communities with varying educational backgrounds — moderating potential urban premiums.",
    keyFactors: [
      "Humboldt University and Free University of Berlin maintain strong research reputations",
      "Europe's largest startup ecosystem attracts technology-oriented graduates",
      "National capital with government, research, and media sectors",
      "Highly educated European migrant population in the technology sector",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Berlin?",
        answer:
          "Berlin's estimated average IQ is around 100, approximately in line with Germany's strong national average. The city's diverse population, including large communities with limited educational backgrounds, tempers what might otherwise be a higher urban premium from its technology and university sectors.",
      },
      {
        question: "Why is Berlin becoming Europe's startup capital?",
        answer:
          "Berlin offers relatively low costs compared to London and Paris, a large talent pool from multiple strong universities, an international and English-speaking environment, and a culture that is open to risk and creativity. These factors have made it the fastest-growing startup ecosystem in Europe.",
      },
      {
        question: "How does Berlin compare to Munich within Germany?",
        answer:
          "Munich likely scores slightly higher than Berlin within Germany due to its higher average income, stronger technology and manufacturing sector (BMW, Siemens headquarters), and less urban diversity. Berlin scores closer to the national average while Munich may be a point or two above.",
      },
    ],
    relatedCities: ["amsterdam", "london", "warsaw"],
    continent: "Europe",
  },
  {
    city: "Amsterdam",
    slug: "amsterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    estimatedAvgIQ: 103,
    avgIQRange: "100–106",
    knownFor: "finance, technology, logistics, culture, innovation",
    description:
      "Amsterdam is the Netherlands' capital and financial hub, home to the University of Amsterdam and several other strong research institutions. The Netherlands has historically achieved excellent PISA scores, and Amsterdam concentrates the country's educated professional class in finance, technology, and creative industries. The city's role as a major European logistics hub and home to the European headquarters of many US technology companies (Booking.com, Uber, Netflix Europe) attracts highly educated international professionals. Amsterdam also benefits from the Netherlands' exceptionally high English proficiency, enabling a truly global talent market.",
    keyFactors: [
      "University of Amsterdam and Vrije Universiteit maintain strong research programs",
      "European headquarters of major US technology companies concentrate international talent",
      "High English proficiency enables a truly global talent market",
      "Strong national PISA performance with Amsterdam as educational hub",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Amsterdam?",
        answer:
          "Amsterdam's estimated average IQ is around 103, above the Netherlands' strong national average of approximately 100. The city's concentration of technology company headquarters and financial sector, combined with strong educational institutions, creates a meaningful urban premium.",
      },
      {
        question: "Why does the Netherlands perform so well on cognitive assessments?",
        answer:
          "The Netherlands has a well-funded and high-quality education system, high living standards, excellent healthcare and nutrition, and a culture that values critical thinking and education. The Dutch also have among the highest English proficiency of any non-native speaking country, suggesting broader language and cognitive flexibility.",
      },
      {
        question: "How does Amsterdam compare to other Northern European capitals?",
        answer:
          "Amsterdam scores comparably to Copenhagen and Oslo, somewhat below Zurich and Stockholm. All Northern European capitals benefit from wealthy, educated populations and strong public education systems, resulting in relatively small differences between them.",
      },
    ],
    relatedCities: ["london", "brussels", "zurich"],
    continent: "Europe",
  },
  {
    city: "Zurich",
    slug: "zurich",
    country: "Switzerland",
    countrySlug: "switzerland",
    estimatedAvgIQ: 104,
    avgIQRange: "101–107",
    knownFor: "banking, finance, research, precision engineering",
    description:
      "Zurich is Switzerland's largest city and global financial center, widely regarded as one of the world's highest-quality-of-life urban environments. The city is home to ETH Zurich, consistently ranked among the world's top 10 universities and Europe's foremost technical university. Switzerland's wealth and investment in education produce excellent outcomes, and Zurich concentrates the country's financial elite alongside a large international scientific and engineering community centered on ETH and the University of Zurich. The city's high incomes, excellent healthcare, and very high educational standards all support strong cognitive development.",
    keyFactors: [
      "ETH Zurich ranks in the world's top 10 universities, particularly in STEM",
      "Global financial center with high-income professional population",
      "Excellent public services, healthcare, and nutrition supporting cognitive development",
      "International scientific community concentrated around ETH's research programs",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Zurich?",
        answer:
          "Zurich's estimated average IQ is around 104, above Switzerland's already-high national average. The city's concentration of ETH Zurich graduates, financial professionals, and international scientists creates one of the world's most cognitively elevated urban populations.",
      },
      {
        question: "What makes ETH Zurich so prestigious?",
        answer:
          "ETH Zurich (Swiss Federal Institute of Technology) consistently ranks in the world's top 10 universities in science and engineering. It has produced 22 Nobel Laureates, including Albert Einstein as a student and faculty member. ETH's focus on applied research and strong industry connections make it particularly influential.",
      },
      {
        question: "How does Zurich compare to other finance-oriented cities like London?",
        answer:
          "Zurich scores slightly higher than London (104 vs 102) due to its smaller, more homogeneous highly-educated population and Switzerland's higher income levels. London's much larger and more diverse population creates greater variance in educational outcomes.",
      },
    ],
    relatedCities: ["amsterdam", "stockholm", "oslo"],
    continent: "Europe",
  },
  {
    city: "Stockholm",
    slug: "stockholm",
    country: "Sweden",
    countrySlug: "sweden",
    estimatedAvgIQ: 103,
    avgIQRange: "100–106",
    knownFor: "technology, design, sustainability, music, welfare state",
    description:
      "Stockholm is Scandinavia's largest city and a global leader in technology entrepreneurship, having produced more billion-dollar tech companies per capita than almost any city in the world, including Spotify, Klarna, and King. Sweden's comprehensive welfare state, excellent public education, and strong healthcare system support cognitive development across the population. Stockholm concentrates Sweden's educated professional class and is home to KTH Royal Institute of Technology and Stockholm University. The city's high English proficiency and international business culture attract educated global professionals.",
    keyFactors: [
      "Highest per-capita unicorn tech company production in the world (Spotify, Klarna, etc.)",
      "KTH Royal Institute of Technology produces world-class engineers",
      "Sweden's comprehensive welfare state ensures universal access to quality education and healthcare",
      "High English proficiency and international culture attract global talent",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Stockholm?",
        answer:
          "Stockholm's estimated average IQ is around 103, above Sweden's strong national average of approximately 101. The city's technology sector, elite universities, and concentration of Sweden's most educated professionals create a meaningful urban premium.",
      },
      {
        question: "Why has Stockholm produced so many successful technology companies?",
        answer:
          "Stockholm's success in technology entrepreneurship reflects high-quality STEM education, a culture of innovation, government support for startups, early broadband internet infrastructure, and a small, educated domestic market that forced Swedish companies to think globally from the start.",
      },
      {
        question: "How does Stockholm compare to Oslo and Copenhagen?",
        answer:
          "Stockholm, Oslo, and Copenhagen all score very similarly at around 102–104. All three are wealthy Nordic capitals with excellent education systems and high living standards. The differences between them are not statistically meaningful.",
      },
    ],
    relatedCities: ["oslo", "copenhagen", "zurich"],
    continent: "Europe",
  },
  {
    city: "Oslo",
    slug: "oslo",
    country: "Norway",
    countrySlug: "norway",
    estimatedAvgIQ: 103,
    avgIQRange: "100–106",
    knownFor: "energy, maritime, finance, welfare state, nature",
    description:
      "Oslo is Norway's capital and economic center, one of the world's wealthiest cities due to Norway's oil revenues and its comprehensive welfare state model. The city benefits from Norway's exceptional investment in education and public services, with the University of Oslo and Norwegian University of Science and Technology both producing world-class graduates. Oslo's high incomes, universal healthcare, and excellent nutrition standards support strong cognitive development across all social strata. The city's educated professional class in energy, maritime, and financial sectors contributes to an elevated cognitive profile.",
    keyFactors: [
      "Among the world's highest household incomes providing excellent educational investment",
      "Universal healthcare and nutrition support cognitive development across income levels",
      "University of Oslo is a leading Nordic research university",
      "Energy and maritime sectors require highly educated scientific and engineering workforce",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Oslo?",
        answer:
          "Oslo's estimated average IQ is around 103, above Norway's national average of approximately 102. The city concentrates Norway's most educated professionals and benefits from the country's exceptional wealth and public service investment.",
      },
      {
        question: "How does Norway's oil wealth affect education and cognitive outcomes?",
        answer:
          "Norway's sovereign wealth fund from oil revenues enables exceptional public investment in education, healthcare, and social services. This universal high quality of public services means cognitive advantages from good nutrition, healthcare, and education are distributed broadly across the population rather than concentrated in wealthy classes.",
      },
      {
        question: "How does Oslo compare to Stockholm and Copenhagen?",
        answer:
          "Oslo, Stockholm, and Copenhagen all score around 102–104. All three are Nordic welfare state capitals with high incomes and excellent education systems. Oslo may have a slight edge in per-capita wealth but the differences in cognitive outcomes are negligible.",
      },
    ],
    relatedCities: ["stockholm", "copenhagen", "zurich"],
    continent: "Europe",
  },
  {
    city: "Copenhagen",
    slug: "copenhagen",
    country: "Denmark",
    countrySlug: "denmark",
    estimatedAvgIQ: 103,
    avgIQRange: "100–106",
    knownFor: "design, pharmaceutical, sustainability, welfare, technology",
    description:
      "Copenhagen is Denmark's capital and intellectual center, home to the University of Copenhagen, one of the top 100 universities in the world. Denmark's pharmaceutical industry (Novo Nordisk, Leo Pharma) concentrates high-level scientific talent, and the city's design and architecture sectors attract creative professionals with strong spatial reasoning. Denmark's comprehensive welfare state provides universal access to high-quality education and healthcare, supporting cognitive development across all economic strata. Copenhagen's high quality of life and international reputation attract educated professionals from across Europe.",
    keyFactors: [
      "University of Copenhagen among Europe's top research universities",
      "Novo Nordisk and major pharmaceutical companies concentrate scientific talent",
      "Denmark's welfare state ensures universal high-quality education and healthcare",
      "High quality of life and safety attract internationally mobile educated professionals",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Copenhagen?",
        answer:
          "Copenhagen's estimated average IQ is around 103, above Denmark's national average of approximately 102. The city's concentration of pharmaceutical scientists, university researchers, and educated professionals creates a modest urban premium.",
      },
      {
        question: "Why is Denmark's pharmaceutical industry so strong?",
        answer:
          "Denmark's pharmaceutical strength, led by Novo Nordisk, stems from historically strong university research, government support for life sciences, and Denmark's welfare system enabling long-term research investment. Novo Nordisk alone employs over 50,000 people globally with a high proportion of scientists and engineers.",
      },
      {
        question: "How does Copenhagen compare to other Scandinavian capitals?",
        answer:
          "Copenhagen, Stockholm, and Oslo all score around 102–104. All three benefit from Nordic welfare state models, excellent education systems, and high living standards. Denmark's strength in pharmaceutical research and design gives Copenhagen a distinctive cognitive profile.",
      },
    ],
    relatedCities: ["stockholm", "oslo", "amsterdam"],
    continent: "Europe",
  },
  {
    city: "Vienna",
    slug: "vienna",
    country: "Austria",
    countrySlug: "austria",
    estimatedAvgIQ: 102,
    avgIQRange: "99–105",
    knownFor: "music, culture, medicine, history, diplomacy",
    description:
      "Vienna is Austria's capital and one of Europe's great historical centers of intellectual and artistic achievement, home to the University of Vienna — one of the world's oldest universities, founded in 1365. The city is a global center for international diplomacy, housing numerous UN agencies and international organizations that attract highly educated multilingual professionals. Vienna's medical university is among Europe's most prestigious, and the city has a strong tradition in scientific research. Austria's strong PISA performance and Vienna's concentration of educated professionals create an above-average cognitive profile.",
    keyFactors: [
      "University of Vienna, one of Europe's oldest and most distinguished research universities",
      "International diplomatic hub with UN agencies attracting multilingual educated professionals",
      "World-leading medical university and strong life sciences sector",
      "Austria's strong PISA performance with Vienna as national educational hub",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Vienna?",
        answer:
          "Vienna's estimated average IQ is around 102, above Austria's national average of approximately 100. The city's diplomatic community, medical university, and concentration of Austria's most educated professionals create a meaningful urban premium.",
      },
      {
        question: "Why is Vienna such an important center for international organizations?",
        answer:
          "Vienna's neutrality during the Cold War, central European location, and high quality of life made it attractive as a location for UN agencies, OPEC, and other international bodies. This has created a permanent community of multilingual, internationally educated diplomats and staff.",
      },
      {
        question: "How does Vienna compare to Berlin and Zurich?",
        answer:
          "Vienna (102) scores similarly to Berlin (100) and somewhat below Zurich (104). Zurich's higher score reflects Switzerland's higher average income and ETH Zurich's extraordinary academic reputation. Vienna and Berlin both have strong research university traditions.",
      },
    ],
    relatedCities: ["zurich", "berlin", "prague"],
    continent: "Europe",
  },
  {
    city: "Brussels",
    slug: "brussels",
    country: "Belgium",
    countrySlug: "belgium",
    estimatedAvgIQ: 101,
    avgIQRange: "98–104",
    knownFor: "European Union, NATO, diplomacy, chocolate, beer",
    description:
      "Brussels is the de facto capital of the European Union and home to NATO headquarters, creating an extraordinary concentration of highly educated international civil servants and diplomats from across Europe and the world. The free movement of people within the EU means Brussels attracts the most ambitious and educated Europeans who want to shape continental policy. This has made Brussels one of the most highly educated cities in Europe by resident profile. Université Libre de Bruxelles (ULB) and KU Leuven's Brussels campus add academic depth, while Belgium's own PISA performance is strong in Flanders.",
    keyFactors: [
      "De facto EU capital concentrating Europe's educated international civil servant class",
      "NATO headquarters and hundreds of international organizations attract global talent",
      "Free movement within EU enables selection of Europe's most ambitious professionals",
      "Strong Belgian university sector including ULB and VUB",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Brussels?",
        answer:
          "Brussels's estimated average IQ is around 101, above Belgium's national average of approximately 100. The city's extraordinary concentration of EU civil servants, diplomats, and lobbyists — among the most educated populations in Europe — creates a significant selection effect.",
      },
      {
        question: "How many people work for EU institutions in Brussels?",
        answer:
          "Approximately 40,000 European Commission officials, 750 MEPs and their staff, and tens of thousands of lobbyists, journalists, and NGO workers are based in Brussels due to EU institutions. These are among the most educated and internationally mobile professionals in the world.",
      },
      {
        question: "How does Brussels compare to Paris and Amsterdam?",
        answer:
          "Brussels (101) scores similarly to Paris (101) and below Amsterdam (103). Amsterdam's technology sector adds a particular cognitive boost from international tech companies, while Brussels's unique political profile creates a different but equally educated population composition.",
      },
    ],
    relatedCities: ["amsterdam", "paris", "london"],
    continent: "Europe",
  },
  {
    city: "Madrid",
    slug: "madrid",
    country: "Spain",
    countrySlug: "spain",
    estimatedAvgIQ: 99,
    avgIQRange: "96–102",
    knownFor: "culture, finance, government, football, art",
    description:
      "Madrid is Spain's capital and the country's dominant economic and educational center, home to Complutense University of Madrid, one of the largest universities in the world by enrollment. The city concentrates Spain's most educated professionals in finance, government, law, and media. While Spain's national PISA scores are below the European average, Madrid performs above the national average due to urban selection effects and higher investment in education. The city's growing technology sector, sometimes called the Silicon Alley of Southern Europe, has attracted an increasingly educated young professional class.",
    keyFactors: [
      "Complutense University, one of Europe's largest, is headquartered here",
      "National capital concentrating Spain's government, legal, and financial elite",
      "Growing technology startup ecosystem attracting young educated professionals",
      "Urban selection effects from national migration of ambitious workers",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Madrid?",
        answer:
          "Madrid's estimated average IQ is around 99, above Spain's national average of approximately 97. The city's role as national capital concentrates Spain's most educated professionals and benefits from stronger investment in education than the national average.",
      },
      {
        question: "How is Madrid's technology sector developing?",
        answer:
          "Madrid's technology sector has grown significantly, with major companies including Indra and Amadeus headquartered there, alongside a growing startup scene. The city's relatively low costs compared to London or Paris, large talent pool, and improving digital infrastructure make it increasingly attractive to tech companies.",
      },
      {
        question: "How does Madrid compare to Barcelona?",
        answer:
          "Madrid and Barcelona score very similarly. Barcelona may have a slight edge due to its stronger technology and design sectors, while Madrid's dominance in finance and government provides equivalent cognitive selection effects. Both cities significantly outperform the Spanish national average.",
      },
    ],
    relatedCities: ["rome", "paris", "brussels"],
    continent: "Europe",
  },
  {
    city: "Rome",
    slug: "rome",
    country: "Italy",
    countrySlug: "italy",
    estimatedAvgIQ: 97,
    avgIQRange: "94–100",
    knownFor: "history, culture, government, fashion, art",
    description:
      "Rome is Italy's capital and a city of extraordinary historical and cultural significance, housing the national government, the Vatican, and numerous research institutions. Sapienza University of Rome is one of Europe's largest universities by enrollment. However, Italy's national PISA scores are below the European average, and Rome's cognitive profile reflects this. The city benefits from urban selection effects as the seat of the national government and home to major media and cultural institutions, but less so from a technology or finance sector than Milan, Italy's economic capital.",
    keyFactors: [
      "Sapienza University of Rome is one of Europe's largest universities",
      "National government and public administration concentrate educated professionals",
      "Vatican institutions and cultural organizations add an educated resident population",
      "Urban selection effect from serving as national capital",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Rome?",
        answer:
          "Rome's estimated average IQ is around 97, above Italy's national average of approximately 96. As the national capital, Rome concentrates government professionals and university students, though it lacks Milan's strong financial and manufacturing sectors.",
      },
      {
        question: "How does Rome compare to Milan within Italy?",
        answer:
          "Milan likely scores slightly higher than Rome within Italy due to its role as Italy's economic capital, concentration of the fashion and finance sectors, and higher average incomes. Rome's strength lies in government, law, and cultural institutions.",
      },
      {
        question: "How does Rome compare to other Southern European capitals like Madrid?",
        answer:
          "Rome (97) scores slightly below Madrid (99), reflecting Italy's somewhat lower national average and Rome's less developed technology sector compared to Spain's capital. Both cities significantly outperform their respective national averages through urban selection effects.",
      },
    ],
    relatedCities: ["madrid", "paris", "vienna"],
    continent: "Europe",
  },
  {
    city: "Warsaw",
    slug: "warsaw",
    country: "Poland",
    countrySlug: "poland",
    estimatedAvgIQ: 101,
    avgIQRange: "98–104",
    knownFor: "technology, finance, history, startup ecosystem",
    description:
      "Warsaw is Poland's capital and the dominant economic center of Central and Eastern Europe, rapidly emerging as a major technology and outsourcing hub. Poland consistently achieves strong PISA scores — above the EU average in mathematics — and Warsaw concentrates the country's most ambitious and educated professionals. The city's technology sector has exploded in recent years, with many global companies establishing significant engineering centers here. Warsaw University and the Warsaw University of Technology produce large numbers of high-quality STEM graduates. The urban premium over Poland's strong national average is meaningful.",
    keyFactors: [
      "Poland consistently achieves above-EU-average PISA scores, especially in mathematics",
      "Warsaw University of Technology produces large quantities of strong STEM graduates",
      "Rapidly growing technology and outsourcing sector concentrating engineering talent",
      "Major European financial outsourcing hub attracting educated financial professionals",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Warsaw?",
        answer:
          "Warsaw's estimated average IQ is around 101, above Poland's national average of approximately 99. The city's concentration of technology companies, financial outsourcing centers, and Poland's most ambitious professionals creates a meaningful urban premium.",
      },
      {
        question: "Why is Poland's PISA performance so strong?",
        answer:
          "Poland implemented significant education reforms in the late 1990s and 2000s that extended compulsory schooling, improved teacher training, and standardized curriculum. These reforms produced measurable improvements in PISA scores over the following decade, with Poland rising from below-average to above-average in EU comparisons.",
      },
      {
        question: "How does Warsaw compare to Prague and Budapest?",
        answer:
          "Warsaw scores slightly above Prague and Budapest (around 101 vs 99–100), partly because Poland's PISA scores have recently risen above the Czech and Hungarian averages. All three cities significantly outperform Western stereotypes of Eastern Europe.",
      },
    ],
    relatedCities: ["berlin", "prague", "budapest"],
    continent: "Europe",
  },
  {
    city: "Prague",
    slug: "prague",
    country: "Czech Republic",
    countrySlug: "czech-republic",
    estimatedAvgIQ: 100,
    avgIQRange: "97–103",
    knownFor: "technology, automotive, beer, history, engineering",
    description:
      "Prague is the Czech Republic's capital and economic hub, benefiting from one of Central Europe's highest living standards and strongest education systems. Charles University, founded in 1348, is one of Europe's oldest universities, and the Czech Technical University produces world-class engineers. The Czech Republic scores above the EU average on PISA assessments, particularly in science, and Prague concentrates the country's most educated professionals. The city's technology sector has grown substantially, and it serves as an engineering and R&D center for German automotive and technology companies.",
    keyFactors: [
      "Charles University, founded 1348, is one of Europe's oldest and most distinguished",
      "Czech Technical University produces internationally competitive engineers",
      "R&D and engineering center for German automotive sector (Škoda, etc.)",
      "Czech Republic scores above EU average on PISA science assessments",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Prague?",
        answer:
          "Prague's estimated average IQ is around 100, above the Czech Republic's national average of approximately 98. The city's concentration of university graduates, technology workers, and Central Europe's educated professional class creates a modest urban premium.",
      },
      {
        question: "How strong is Czech Republic's education system?",
        answer:
          "The Czech Republic has historically had a strong engineering and technical education tradition. Czech students score above the EU average in science on PISA assessments, and the country has a robust network of technical universities producing high-quality engineers.",
      },
      {
        question: "How does Prague compare to Warsaw and Budapest?",
        answer:
          "Prague (100) scores similarly to Budapest (99) and slightly below Warsaw (101). All three Central European capitals benefit from strong education traditions and are emerging as significant technology hubs. Warsaw's more rapid recent growth in the tech sector gives it a slight edge.",
      },
    ],
    relatedCities: ["warsaw", "budapest", "vienna"],
    continent: "Europe",
  },
  {
    city: "Budapest",
    slug: "budapest",
    country: "Hungary",
    countrySlug: "hungary",
    estimatedAvgIQ: 99,
    avgIQRange: "96–102",
    knownFor: "technology, pharmaceuticals, thermal baths, history, math olympiad",
    description:
      "Budapest is Hungary's capital and a city with a remarkable intellectual tradition — Hungary has produced more Nobel Laureates per capita than almost any other country, with a particular strength in mathematics and physics. Eötvös Loránd University and Budapest University of Technology and Economics are strong research institutions. Hungary scores above the EU average in mathematics on PISA assessments, reflecting a deep cultural tradition of mathematical education epitomized by Hungary's legendary mathematical olympiad culture. The city's pharmaceutical sector and growing technology industry concentrate highly educated STEM professionals.",
    keyFactors: [
      "Hungary's extraordinary mathematical tradition produces world-class mathematicians",
      "Budapest University of Technology and Economics has strong engineering output",
      "Hungary scores above EU average in PISA mathematics assessments",
      "Growing technology and pharmaceutical sectors requiring highly educated workforce",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Budapest?",
        answer:
          "Budapest's estimated average IQ is around 99, above Hungary's national average of approximately 97. The city's strong mathematical tradition, research universities, and concentration of Hungary's educated professionals create a meaningful urban premium.",
      },
      {
        question: "Why does Hungary produce so many prominent mathematicians?",
        answer:
          "Hungary's mathematical tradition dates to the 19th century and was reinforced by the famous Budapest-based mathematical community of the early 20th century. The Hungarian education system places exceptional emphasis on mathematical problem-solving, and the country's mathematical olympiad culture has produced disproportionate numbers of Fields Medalists and other major math prize winners.",
      },
      {
        question: "How does Budapest compare to Vienna and Prague?",
        answer:
          "Budapest (99) scores similarly to Prague (100) and below Vienna (102). Vienna's higher score reflects Austria's higher income levels and Vienna's role as an international diplomatic hub. Budapest and Prague are more similar in their Central European development profiles.",
      },
    ],
    relatedCities: ["vienna", "prague", "warsaw"],
    continent: "Europe",
  },

  // ── Americas ──────────────────────────────────────────────────────────────
  {
    city: "New York",
    slug: "new-york",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 105,
    avgIQRange: "102–108",
    knownFor: "finance, media, culture, fashion, technology",
    description:
      "New York City is the world's leading financial center and cultural capital, drawing the most ambitious and highly educated professionals from across the United States and internationally. The city's concentration of elite universities (Columbia, NYU, Rockefeller) alongside world-leading financial institutions, law firms, and media companies creates extraordinary cognitive selection effects. Manhattan in particular concentrates a globally unique density of lawyers, financiers, doctors, and academics. New York's diversity means the city-wide average includes communities with widely varying educational access, but the overall urban premium over the US national average is substantial.",
    keyFactors: [
      "World's leading financial center attracting highly educated global talent",
      "Columbia University, NYU, and Rockefeller University in the city core",
      "Dominant media, publishing, and legal sectors requiring high cognitive skills",
      "Gateway city for highly skilled international immigrants",
    ],
    faqItems: [
      {
        question: "What is the average IQ in New York City?",
        answer:
          "New York's estimated average IQ is around 105, well above the US national average of approximately 98. The city's extraordinary concentration of financial professionals, lawyers, doctors, and academics creates one of the most cognitively elevated urban populations in the Western Hemisphere.",
      },
      {
        question: "How does Manhattan's population differ from the outer boroughs?",
        answer:
          "Manhattan's resident population is disproportionately composed of highly educated, high-income professionals, giving it an especially elevated cognitive profile. The outer boroughs (Brooklyn, Queens, Bronx, Staten Island) have more diverse economic profiles, moderating the city-wide average.",
      },
      {
        question: "How does New York compare to other major US cities?",
        answer:
          "New York scores above most US cities, comparable to San Francisco and Boston (both around 105–107). All three are major financial, technology, or academic centers with strong selection effects for educated residents.",
      },
    ],
    relatedCities: ["san-francisco", "boston", "chicago"],
    continent: "Americas",
  },
  {
    city: "San Francisco",
    slug: "san-francisco",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 107,
    avgIQRange: "104–110",
    knownFor: "technology, venture capital, innovation, startups",
    description:
      "San Francisco and its surrounding Bay Area represent perhaps the world's most extreme cognitive selection effect in any major metropolitan area. The region is home to Stanford University, UC Berkeley, UCSF, and dozens of other strong institutions, alongside the headquarters of Apple, Google, Meta, Salesforce, and hundreds of technology companies. The combination of elite university clustering and the world's densest concentration of technology industry creates a resident population with extraordinary average educational attainment. San Francisco proper has one of the highest proportions of college-educated residents of any major US city.",
    keyFactors: [
      "World's leading technology industry concentration (Apple, Google, Meta, Salesforce)",
      "Stanford University and UC Berkeley create extraordinary nearby research cluster",
      "Venture capital and startup ecosystem attracts the world's most ambitious technologists",
      "High proportion of technology H-1B visa holders with STEM graduate degrees",
    ],
    faqItems: [
      {
        question: "What is the average IQ in San Francisco?",
        answer:
          "San Francisco's estimated average IQ is around 107, among the highest of any major American city. The region's extraordinary concentration of technology companies and proximity to Stanford and UC Berkeley create one of the world's most extreme positive cognitive selection effects.",
      },
      {
        question: "Why does Silicon Valley create such cognitive selection effects?",
        answer:
          "Silicon Valley's technology companies hire from a globally competitive pool of the best engineers, scientists, and business professionals. The salaries required to live in the Bay Area then further select for high earners with high educational attainment, concentrating cognitive ability in the resident population.",
      },
      {
        question: "How does San Francisco compare to New York and Boston?",
        answer:
          "San Francisco (107) scores slightly higher than New York (105) and similarly to Boston (106). San Francisco's technology sector creates perhaps the world's most extreme selection for STEM-oriented cognitive ability, while New York and Boston have more diverse high-skill sectors.",
      },
    ],
    relatedCities: ["boston", "seattle", "new-york"],
    continent: "Americas",
  },
  {
    city: "Boston",
    slug: "boston",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 106,
    avgIQRange: "103–109",
    knownFor: "education, biotechnology, finance, medicine, history",
    description:
      "Boston has the highest concentration of universities and colleges per capita of any major American city, anchored by Harvard University and MIT — arguably the two most influential research universities in the world — alongside Tufts, Northeastern, BU, and dozens of others. The city's biotechnology and pharmaceutical sector, centered in Kendall Square (often called the most innovative square mile in the world), employs tens of thousands of PhD-level scientists and researchers. Boston's resident population of students, academics, and life sciences professionals creates an extraordinary cognitive profile.",
    keyFactors: [
      "Harvard University and MIT are arguably the two most influential research universities globally",
      "Kendall Square biotechnology cluster concentrates the world's highest density of PhD scientists",
      "More universities per capita than any other major American city",
      "Strong financial, legal, and consulting sectors attracting high-achievers",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Boston?",
        answer:
          "Boston's estimated average IQ is around 106, among the highest of any American city. The combination of Harvard, MIT, and over 100 other colleges and universities creates an extraordinary concentration of educated residents, while the biotechnology sector adds thousands of PhD scientists to the resident population.",
      },
      {
        question: "Why is Kendall Square called 'the most innovative square mile'?",
        answer:
          "Kendall Square in Cambridge (adjacent to MIT and Boston) has the highest density of biotechnology and pharmaceutical companies of any location in the world. It houses the global headquarters or major research centers of Pfizer, Novartis, AstraZeneca, Biogen, Sanofi, and hundreds of biotech startups.",
      },
      {
        question: "How does Boston compare to New York and Washington DC in education?",
        answer:
          "Boston scores higher than both New York (105) and Washington DC (approximately 104) due to its extraordinary university density. While New York has Columbia and NYU and DC has Georgetown and GWU, Boston's concentration of world-leading institutions is unmatched.",
      },
    ],
    relatedCities: ["new-york", "san-francisco", "seattle"],
    continent: "Americas",
  },
  {
    city: "Chicago",
    slug: "chicago",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 103,
    avgIQRange: "100–106",
    knownFor: "finance, architecture, commodities trading, law, food",
    description:
      "Chicago is America's third-largest city and its financial capital for commodities and derivatives trading, home to the University of Chicago (ranked among the world's top 10, famous for economics and law), Northwestern University in nearby Evanston, and the Chicago School of Economics. The University of Chicago has produced more Nobel Prize winners in economics than any other institution. Chicago's financial sector, legal profession, and consulting industry attract high-achieving professionals from across the country. The city's diverse population includes large communities with varying educational backgrounds, producing a moderate urban premium over the US average.",
    keyFactors: [
      "University of Chicago has produced more Nobel economists than any other institution",
      "Major financial center for commodities and derivatives trading",
      "Northwestern University and UChicago create dual elite university anchor",
      "Dominant legal, consulting, and professional services sector",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Chicago?",
        answer:
          "Chicago's estimated average IQ is around 103, above the US national average. The city's financial sector, elite universities, and professional services industries attract high-achieving residents, though its large, diverse population creates substantial variation.",
      },
      {
        question: "Why is the University of Chicago so important to economics?",
        answer:
          "The University of Chicago's economics department pioneered free-market economic thought and has produced over 90 Nobel laureates. The 'Chicago School of Economics' has had outsized influence on global economic policy through figures like Milton Friedman, Gary Becker, and Eugene Fama.",
      },
      {
        question: "How does Chicago compare to New York and Los Angeles?",
        answer:
          "Chicago (103) scores above Los Angeles (102) and below New York (105). Los Angeles's entertainment industry, while high-profile, creates less of a cognitive selection effect than New York's finance or Chicago's commodities trading. Chicago's financial sector creates a strong pull for mathematically oriented talent.",
      },
    ],
    relatedCities: ["new-york", "boston", "toronto"],
    continent: "Americas",
  },
  {
    city: "Los Angeles",
    slug: "los-angeles",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 102,
    avgIQRange: "99–105",
    knownFor: "entertainment, technology, aerospace, fashion, diversity",
    description:
      "Los Angeles is America's entertainment capital and second-largest city, home to UCLA, USC, and Caltech — one of the world's greatest scientific research institutions. The city's diverse economy spans entertainment, aerospace (SpaceX, Boeing), technology, fashion, and international trade. Caltech's extraordinary concentration of scientific talent — arguably the highest-ranked university in the world by research output per faculty member — significantly elevates the city's intellectual profile despite being located in Pasadena rather than LA proper. SpaceX, aerospace companies, and biotech firms further concentrate STEM professionals.",
    keyFactors: [
      "Caltech (California Institute of Technology) ranks among the world's top research universities",
      "SpaceX and major aerospace companies concentrate elite engineering talent",
      "UCLA and USC are major research universities with large graduate programs",
      "Diverse economy spanning entertainment, technology, and aerospace requiring varied cognitive skills",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Los Angeles?",
        answer:
          "Los Angeles's estimated average IQ is around 102, above the US national average. Despite its entertainment industry reputation, LA has a significant STEM sector anchored by Caltech, SpaceX, aerospace companies, and a large biotech cluster.",
      },
      {
        question: "How does Caltech affect Los Angeles's cognitive profile?",
        answer:
          "Caltech, located in Pasadena in the greater LA area, has perhaps the most extreme positive selection effect of any university in the world — with the lowest acceptance rate and highest research productivity per student of any institution. Its faculty and graduate students significantly elevate the region's cognitive profile.",
      },
      {
        question: "How does LA compare to San Francisco?",
        answer:
          "San Francisco (107) scores higher than LA (102) primarily due to the Bay Area's extraordinary concentration of technology companies and the unique cognitive selection of Silicon Valley. LA's more diverse economic base, while intellectually rich, creates less extreme selection for any single type of cognitive ability.",
      },
    ],
    relatedCities: ["san-francisco", "seattle", "new-york"],
    continent: "Americas",
  },
  {
    city: "Toronto",
    slug: "toronto",
    country: "Canada",
    countrySlug: "canada",
    estimatedAvgIQ: 104,
    avgIQRange: "101–107",
    knownFor: "finance, technology, multiculturalism, education, film",
    description:
      "Toronto is Canada's largest city and economic capital, home to the University of Toronto — one of the world's top 25 research universities — alongside York University and Ryerson (now Toronto Metropolitan University). The city is a major financial center and increasingly a significant technology hub, with a growing artificial intelligence research cluster anchored by the Vector Institute and the University of Toronto's machine learning research group that produced the foundational deep learning work of Geoffrey Hinton. Canada's points-based immigration system selects for highly educated immigrants, significantly elevating Toronto's resident population quality.",
    keyFactors: [
      "University of Toronto ranks among the world's top 25 research universities",
      "Leading global AI research hub (Vector Institute, Geoffrey Hinton's research)",
      "Canada's points-based immigration system selects for highly educated immigrants",
      "Major financial center with significant technology sector growth",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Toronto?",
        answer:
          "Toronto's estimated average IQ is around 104, above Canada's national average of approximately 100. The city's world-class university, growing technology sector, and Canada's highly selective immigration system contribute to a well-educated resident population.",
      },
      {
        question: "Why is Toronto an emerging AI research hub?",
        answer:
          "Toronto's AI research strength stems from the University of Toronto's deep learning research, particularly Geoffrey Hinton's foundational work. The Canadian government's pan-Canadian AI strategy provided further funding, attracting researchers and establishing the Vector Institute as a global AI research center.",
      },
      {
        question: "How does Toronto compare to Vancouver and Montreal?",
        answer:
          "Toronto (104) scores slightly above Vancouver (103) and similarly to Montreal (103). All three Canadian cities benefit from points-based immigration and strong universities. Toronto's larger financial sector gives it a slight edge, while Montreal has a distinctive French-English bilingual educational tradition.",
      },
    ],
    relatedCities: ["vancouver", "montreal", "boston"],
    continent: "Americas",
  },
  {
    city: "Vancouver",
    slug: "vancouver",
    country: "Canada",
    countrySlug: "canada",
    estimatedAvgIQ: 103,
    avgIQRange: "100–106",
    knownFor: "technology, film, natural resources, sustainability, multiculturalism",
    description:
      "Vancouver is one of the world's most desirable cities to live and a gateway for highly educated immigrants from East Asia in particular. The University of British Columbia (UBC) is a top-40 global research university, and Simon Fraser University adds additional research capacity. Vancouver's technology sector has grown rapidly, driven partly by the spillover of Bay Area companies seeking talent in a similar timezone with more affordable housing. The city's high proportion of Chinese and South Asian immigrants who selected Canada through the points system contributes to Vancouver's notably high average educational attainment.",
    keyFactors: [
      "University of British Columbia ranks in the global top 40 for research output",
      "High proportion of highly educated East and South Asian immigrants",
      "Technology sector spillover from San Francisco Bay Area",
      "Canada's points-based immigration system creates educated resident population",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Vancouver?",
        answer:
          "Vancouver's estimated average IQ is around 103, above Canada's national average. The city's world-class university, highly educated immigrant population (particularly from East and South Asia), and growing technology sector all contribute to an elevated cognitive profile.",
      },
      {
        question: "Why does Vancouver have such a large East Asian population?",
        answer:
          "Vancouver's proximity to Pacific Asia, Canada's openness to skilled immigrants, and the city's high quality of life have made it the top destination for highly educated Chinese, Korean, and South Asian immigrants. This community brings strong educational traditions and contributes significantly to the city's cognitive profile.",
      },
      {
        question: "How does Vancouver compare to Seattle?",
        answer:
          "Vancouver (103) and Seattle (106) are neighboring major Pacific Northwest cities that score differently due to Seattle's extraordinary technology sector concentration (Amazon, Microsoft). Seattle's tech sector creates stronger cognitive selection effects than Vancouver's more diverse economy.",
      },
    ],
    relatedCities: ["toronto", "seattle", "san-francisco"],
    continent: "Americas",
  },
  {
    city: "Montreal",
    slug: "montreal",
    country: "Canada",
    countrySlug: "canada",
    estimatedAvgIQ: 103,
    avgIQRange: "100–106",
    knownFor: "technology, AI research, aerospace, culture, gaming",
    description:
      "Montreal is Canada's second-largest city and one of the world's most important artificial intelligence research centers, home to Mila (Quebec AI Institute) founded by Yoshua Bengio, a Turing Award winner and co-inventor of deep learning. McGill University is consistently ranked in the world's top 40, and Université de Montréal is a major French-language research institution. The city's video game industry (Ubisoft Montreal, EA Montreal) and aerospace sector (Bombardier, Pratt & Whitney Canada) create significant demand for highly educated STEM professionals. Montreal's bilingual French-English environment fosters cognitive flexibility.",
    keyFactors: [
      "Mila, world's leading academic AI research institute, is based here",
      "McGill University ranks in the global top 40 for research output",
      "Major gaming, aerospace, and technology industries requiring highly educated workforce",
      "French-English bilingualism enhances certain cognitive flexibility measures",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Montreal?",
        answer:
          "Montreal's estimated average IQ is around 103, above Canada's national average. The city's extraordinary concentration of AI researchers, aerospace engineers, and game developers — alongside McGill University and other strong institutions — creates a cognitively elevated urban environment.",
      },
      {
        question: "Why is Montreal a global AI research hub?",
        answer:
          "Montreal's AI dominance stems from Yoshua Bengio's decision to build Mila at the Université de Montréal, the Quebec government's CIFAR grants that kept deep learning researchers in Canada, and subsequent corporate investment from DeepMind, Google Brain, Microsoft, and Meta research centers.",
      },
      {
        question: "How does Montreal's bilingualism affect cognitive outcomes?",
        answer:
          "Research suggests that bilingualism, particularly from early childhood, can enhance certain aspects of executive function and cognitive control. Montreal's required French-English bilingualism for professional advancement may provide modest cognitive flexibility benefits to the resident population.",
      },
    ],
    relatedCities: ["toronto", "boston", "new-york"],
    continent: "Americas",
  },
  {
    city: "São Paulo",
    slug: "sao-paulo",
    country: "Brazil",
    countrySlug: "brazil",
    estimatedAvgIQ: 90,
    avgIQRange: "87–93",
    knownFor: "finance, industry, culture, media, diversity",
    description:
      "São Paulo is South America's largest city and economic powerhouse, generating approximately 12% of Brazil's GDP. The city is home to the University of São Paulo (USP), consistently ranked as the best university in Latin America. Brazil's financial services, manufacturing, and media industries are heavily concentrated in São Paulo, creating significant demand for educated professionals. While Brazil's national average reflects significant inequality in educational access, São Paulo's urban premium is substantial — the city houses Brazil's largest middle and upper class populations with much better access to quality education than the national average suggests.",
    keyFactors: [
      "University of São Paulo is consistently ranked the best university in Latin America",
      "Brazil's financial, media, and manufacturing center concentrates educated professionals",
      "Large and growing middle class with higher educational attainment than national average",
      "Selective internal migration from across Brazil for professional opportunities",
    ],
    faqItems: [
      {
        question: "What is the average IQ in São Paulo?",
        answer:
          "São Paulo's estimated average IQ is around 90, well above Brazil's national average of approximately 84. The city's role as Brazil's economic capital, combined with the University of São Paulo and strong professional sector migration, creates a significant urban premium.",
      },
      {
        question: "How does São Paulo compare to other Latin American capitals?",
        answer:
          "São Paulo scores comparably to Buenos Aires (around 90), both above their respective national averages. Both are the economic and educational powerhouses of their countries with similar levels of urban-rural educational inequality.",
      },
      {
        question: "What challenges does São Paulo face in improving educational outcomes?",
        answer:
          "São Paulo faces extreme inequality between its wealthy districts with world-class private schools and large peripheral areas where public schools are underfunded. Improving educational access in the city's vast periphery is the primary challenge for elevating the overall average.",
      },
    ],
    relatedCities: ["buenos-aires", "mexico-city", "miami"],
    continent: "Americas",
  },
  {
    city: "Buenos Aires",
    slug: "buenos-aires",
    country: "Argentina",
    countrySlug: "argentina",
    estimatedAvgIQ: 91,
    avgIQRange: "88–94",
    knownFor: "culture, medicine, education, beef, tango",
    description:
      "Buenos Aires is one of Latin America's most culturally sophisticated cities and has historically had the highest rate of psychoanalysts per capita of any city in the world, reflecting a strong cultural emphasis on intellectual and analytical thinking. Argentina has long prioritized free public university education, making the University of Buenos Aires (UBA) — entirely free and open to all — one of Latin America's largest universities by enrollment. The city's strong European cultural heritage (predominantly Italian and Spanish immigrant descent) brought educational traditions that distinguish it from other Latin American capitals.",
    keyFactors: [
      "University of Buenos Aires (UBA) provides entirely free higher education to all citizens",
      "High rates of university attendance relative to Latin American peers",
      "Strong European immigrant heritage bringing traditional emphasis on education",
      "Major medical education center with one of Latin America's best medical schools",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Buenos Aires?",
        answer:
          "Buenos Aires's estimated average IQ is around 91, above Argentina's national average of approximately 86. The city's free university education policy, strong European cultural traditions, and concentration of Argentina's most educated professionals create a meaningful urban premium.",
      },
      {
        question: "Why does Argentina have free public universities?",
        answer:
          "Argentina established free public university education through the University Reform of 1918, which spread across Latin America. This democratic education tradition has maintained high rates of university attendance despite economic instability, and Buenos Aires hosts Argentina's most prestigious public institutions.",
      },
      {
        question: "How does Buenos Aires compare to São Paulo?",
        answer:
          "Buenos Aires (91) scores slightly above São Paulo (90), reflecting Argentina's historically higher national education levels relative to Brazil. Both cities significantly outperform their national averages and are the intellectual powerhouses of their respective countries.",
      },
    ],
    relatedCities: ["sao-paulo", "mexico-city", "miami"],
    continent: "Americas",
  },
  {
    city: "Mexico City",
    slug: "mexico-city",
    country: "Mexico",
    countrySlug: "mexico",
    estimatedAvgIQ: 90,
    avgIQRange: "87–93",
    knownFor: "culture, government, manufacturing, media, history",
    description:
      "Mexico City is one of the world's great megacities and Latin America's most populous urban area, serving as the economic, political, and cultural capital of Mexico. The National Autonomous University of Mexico (UNAM) is among Latin America's top universities and enrolls over 350,000 students. Mexico City's urban premium over the national average is substantial — the capital concentrates Mexico's most educated professionals in government, finance, media, and manufacturing. However, the city's scale and the persistence of large informal settlement populations temper the overall average despite the large educated professional class.",
    keyFactors: [
      "UNAM is among Latin America's most prestigious universities with over 350,000 students",
      "National capital concentrating Mexico's government and professional elite",
      "Media and cultural industries headquartered in the city requiring educated workforce",
      "Substantial urban-national gap from concentration of Mexico's educated professionals",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Mexico City?",
        answer:
          "Mexico City's estimated average IQ is around 90, above Mexico's national average of approximately 88. Despite the large informal settlement population that moderates the average, the capital's concentration of educated professionals, universities, and government institutions creates a meaningful urban premium.",
      },
      {
        question: "How does UNAM compare to other Latin American universities?",
        answer:
          "UNAM (Universidad Nacional Autónoma de México) consistently ranks in the top 100–150 globally and is among the top 3 in Latin America alongside USP (Brazil) and UBA (Argentina). Its sheer enrollment of over 350,000 students makes it one of the largest universities in the world.",
      },
      {
        question: "How does Mexico City compare to São Paulo and Buenos Aires?",
        answer:
          "Mexico City scores similarly to São Paulo (90) and slightly below Buenos Aires (91). All three are the dominant economic capitals of their respective countries and share the challenge of very high inequality between educated professional populations and large informal settlement communities.",
      },
    ],
    relatedCities: ["sao-paulo", "miami", "los-angeles"],
    continent: "Americas",
  },
  {
    city: "Miami",
    slug: "miami",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 101,
    avgIQRange: "98–104",
    knownFor: "finance, real estate, Latin America gateway, tourism, technology",
    description:
      "Miami is the financial gateway between North America and Latin America, home to a large community of highly educated Latin American professionals and the US operations of many South American and Central American companies. The University of Miami is a significant research institution, and the city is rapidly growing as a technology and financial hub, attracting wealthy educated professionals from New York and California. Miami's population includes a high proportion of first-generation immigrants with strong professional and educational backgrounds, particularly from Cuba, Venezuela, Colombia, and Brazil.",
    keyFactors: [
      "Gateway city attracting highly educated Latin American professionals and entrepreneurs",
      "Rapidly growing financial and technology sector drawing professionals from New York and California",
      "University of Miami is a significant research institution",
      "High proportion of professional-class immigrants with strong educational backgrounds",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Miami?",
        answer:
          "Miami's estimated average IQ is around 101, above the US national average of approximately 98. The city's role as Latin America's US financial gateway attracts highly educated professionals, and its growing technology sector is drawing an increasing number of high-achieving residents from other US cities.",
      },
      {
        question: "Why is Miami becoming a technology hub?",
        answer:
          "Miami's emergence as a tech hub accelerated during the COVID-19 pandemic when high-income technology professionals left New York and San Francisco for Florida's lower taxes and warmer climate. Mayor Francis Suarez's active recruitment of technology companies and investors reinforced this trend.",
      },
      {
        question: "How does Miami compare to other Southern US cities like Austin?",
        answer:
          "Miami (101) and Austin (104) have both grown as alternative tech hubs to Silicon Valley. Austin scores higher due to its stronger university anchor (University of Texas) and more established technology industry. Miami's edge is its Latin American connections and financial sector.",
      },
    ],
    relatedCities: ["new-york", "austin", "sao-paulo"],
    continent: "Americas",
  },
  {
    city: "Seattle",
    slug: "seattle",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 106,
    avgIQRange: "103–109",
    knownFor: "technology, aerospace, coffee culture, innovation, environment",
    description:
      "Seattle is home to Amazon and Microsoft, two of the world's most valuable companies, as well as Boeing's engineering operations, creating an extraordinary concentration of technology and aerospace talent. The University of Washington is a top-15 research university in the US, particularly strong in computer science. Seattle's technology sector draws STEM graduates from across the country and world, and the H-1B visa workforce contributes a large proportion of highly educated engineers from India, China, and other countries. The city consistently ranks among the most educated major American cities by proportion of college graduates.",
    keyFactors: [
      "Amazon and Microsoft headquarters create extraordinary technology talent concentration",
      "University of Washington is a top-15 US research university in computer science",
      "Boeing and aerospace engineering sector adds highly educated technical workforce",
      "High H-1B visa technology workforce with STEM graduate degrees from top institutions",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Seattle?",
        answer:
          "Seattle's estimated average IQ is around 106, among the highest of any major American city. The combination of Amazon, Microsoft, Boeing, and the University of Washington creates an extraordinary concentration of STEM talent that rivals the Bay Area.",
      },
      {
        question: "How has Amazon transformed Seattle?",
        answer:
          "Amazon's growth from a small bookseller to a global technology giant has transformed Seattle's economy and population. The company employs over 50,000 people in Seattle proper, predominantly engineers, scientists, and business professionals, significantly elevating the city's average educational attainment and income.",
      },
      {
        question: "How does Seattle compare to San Francisco?",
        answer:
          "Seattle (106) scores slightly below San Francisco (107), primarily because the Bay Area's technology concentration is larger and includes more elite research universities in close proximity. However, Seattle's combination of Amazon, Microsoft, and Boeing gives it comparable cognitive selection effects.",
      },
    ],
    relatedCities: ["san-francisco", "boston", "vancouver"],
    continent: "Americas",
  },
  {
    city: "Austin",
    slug: "austin",
    country: "United States",
    countrySlug: "united-states",
    estimatedAvgIQ: 104,
    avgIQRange: "101–107",
    knownFor: "technology, music, university, live-work culture, startups",
    description:
      "Austin has undergone a remarkable transformation from a college and government town into one of America's most dynamic technology hubs, with Tesla, Oracle, and Apple all relocating or expanding significant operations there. The University of Texas at Austin is a major research university with particular strength in engineering and computer science. Austin's lower costs relative to the Bay Area and New York, combined with Texas's favorable tax environment, have attracted both established technology companies and venture-backed startups. The city has one of the highest proportions of millennial college graduates of any major US city.",
    keyFactors: [
      "Tesla, Oracle, Apple, and Dell headquarters or major operations in the metropolitan area",
      "University of Texas at Austin is a major research university with top-20 engineering programs",
      "Favorable tax environment and lower costs attracting technology companies from high-cost coastal cities",
      "High proportion of college-educated millennial residents among the fastest-growing US cities",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Austin?",
        answer:
          "Austin's estimated average IQ is around 104, well above the US national average. The city's rapid growth as a technology hub, anchored by UT Austin and major corporate relocations, has attracted a highly educated professional class that significantly elevates the resident population's cognitive profile.",
      },
      {
        question: "Why are technology companies moving to Austin?",
        answer:
          "Austin offers lower costs than San Francisco or New York, no state income tax, a large university producing strong STEM graduates, a high quality of life for young professionals, and a business-friendly regulatory environment. These factors make it an attractive alternative to high-cost coastal technology hubs.",
      },
      {
        question: "How does Austin compare to other emerging tech hubs like Miami?",
        answer:
          "Austin (104) scores higher than Miami (101) due to its stronger university anchor (UT Austin) and more established technology industry base. Austin has attracted more major corporate headquarters relocations, while Miami's strength lies more in finance and its Latin American gateway role.",
      },
    ],
    relatedCities: ["san-francisco", "seattle", "chicago"],
    continent: "Americas",
  },

  // ── Middle East / Africa / Oceania ────────────────────────────────────────
  {
    city: "Dubai",
    slug: "dubai",
    country: "United Arab Emirates",
    countrySlug: "united-arab-emirates",
    estimatedAvgIQ: 96,
    avgIQRange: "93–99",
    knownFor: "finance, real estate, tourism, luxury, innovation hub",
    description:
      "Dubai is the UAE's economic engine and one of the world's most ambitious cities, drawing highly educated professionals from across Asia, Europe, and the Middle East. The city's population is over 85% expatriate, and its professional sectors — finance, consulting, technology, and engineering — predominantly employ university-educated internationals. American University in Dubai and other institutions serve a growing student population. Dubai's cognitive profile is uniquely shaped by its selective expatriate population, many of whom are professionals who chose Dubai specifically for career advancement, creating strong positive selection effects despite the city's young educational history.",
    keyFactors: [
      "Highly selective expatriate population that is predominantly professional-class",
      "Major international financial hub attracting globally mobile educated professionals",
      "Significant technology and innovation investments (Dubai Internet City)",
      "Government-funded education expansion and international school sector",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Dubai?",
        answer:
          "Dubai's estimated average IQ is around 96, above the UAE's national average. The city's predominantly expatriate, professional-class population creates significant positive selection effects, though the large unskilled labor workforce (construction workers, domestic staff) moderates the city-wide average.",
      },
      {
        question: "How does Dubai's unique demographic profile affect its cognitive average?",
        answer:
          "Dubai's population is about 85% expatriate, comprising two very different groups: highly educated professionals in finance, technology, and management, and large numbers of low-skilled workers from South and Southeast Asia in construction and domestic service. This extreme bimodal population creates a different cognitive profile than most cities.",
      },
      {
        question: "How does Dubai compare to Tel Aviv and Istanbul?",
        answer:
          "Tel Aviv scores higher than Dubai (100 vs 96) due to Israel's exceptional education system and indigenous high-tech sector. Istanbul (95) scores similarly to Dubai. Both Dubai and Istanbul benefit from their roles as regional hubs attracting educated professionals.",
      },
    ],
    relatedCities: ["tel-aviv", "istanbul", "singapore-city"],
    continent: "Middle East & Africa",
  },
  {
    city: "Tel Aviv",
    slug: "tel-aviv",
    country: "Israel",
    countrySlug: "israel",
    estimatedAvgIQ: 100,
    avgIQRange: "97–103",
    knownFor: "startups, cybersecurity, technology, medicine, beaches",
    description:
      "Tel Aviv is Israel's technology hub and consistently ranks as one of the world's leading startup ecosystems, earning the nickname 'Silicon Wadi'. Israel has the highest density of tech startups per capita in the world and the highest concentration of NASDAQ-listed companies outside the US. Tel Aviv University and the Weizmann Institute of Science (one of the world's leading basic science research institutions) contribute to an extraordinary research ecosystem. Israeli military technology units, particularly Unit 8200 (signals intelligence), effectively function as the world's most selective technology incubator, producing elite engineers and cybersecurity professionals.",
    keyFactors: [
      "World's highest startup density per capita — the original 'Startup Nation'",
      "Military Unit 8200 functions as an elite technology incubator producing cybersecurity talent",
      "Tel Aviv University and Weizmann Institute are world-class research institutions",
      "Israel's high average IQ (approximately 95 nationally) elevated further by urban selection",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Tel Aviv?",
        answer:
          "Tel Aviv's estimated average IQ is around 100, above Israel's national average of approximately 95. The city's extraordinary concentration of technology professionals, military intelligence alumni, and researchers creates one of the Middle East's most cognitively elevated urban environments.",
      },
      {
        question: "What is Unit 8200 and why is it important to Tel Aviv's tech scene?",
        answer:
          "Unit 8200 is Israel's elite signals intelligence unit, equivalent to the NSA in the US. It recruits the country's top technical talent at age 18 and provides intensive training in cybersecurity, programming, and cryptography. Alumni of Unit 8200 have founded many of Israel's most successful technology companies including Check Point, CyberArk, and Palo Alto Networks.",
      },
      {
        question: "How does Tel Aviv compare to other Middle Eastern cities?",
        answer:
          "Tel Aviv scores higher than Dubai (96) and Istanbul (95) due to Israel's exceptionally high national education investment, mandatory military service providing technical training, and the Startup Nation ecosystem. Tel Aviv is in a different category from most Middle Eastern cities in its technology orientation.",
      },
    ],
    relatedCities: ["dubai", "istanbul", "london"],
    continent: "Middle East & Africa",
  },
  {
    city: "Istanbul",
    slug: "istanbul",
    country: "Turkey",
    countrySlug: "turkey",
    estimatedAvgIQ: 95,
    avgIQRange: "92–98",
    knownFor: "history, trade, culture, technology, bridge between East and West",
    description:
      "Istanbul is Turkey's economic and cultural capital, a transcontinental city spanning Europe and Asia that serves as a crucial bridge between Eastern and Western markets. The city concentrates Turkey's most educated professionals in finance, manufacturing, media, and increasingly in technology. Istanbul's universities, including Bogazici University (modeled on Columbia University), Istanbul Technical University, and several others, produce large numbers of well-trained graduates. Turkey has invested significantly in expanding university access over the past two decades, and Istanbul captures the most cognitively selective migrants from across the country.",
    keyFactors: [
      "Bogazici University is among the most selective and prestigious universities in Turkey",
      "Istanbul Technical University has a strong engineering tradition",
      "Turkey's dominant economic hub attracting ambitious professionals from across the country",
      "Bridge between European and Asian markets creating dynamic international business environment",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Istanbul?",
        answer:
          "Istanbul's estimated average IQ is around 95, above Turkey's national average of approximately 90. The city's role as Turkey's dominant economic capital, combined with its selective universities and concentration of the country's most educated professionals, creates a meaningful urban premium.",
      },
      {
        question: "Why is Istanbul geographically significant?",
        answer:
          "Istanbul is the world's only city located on two continents (Europe and Asia), straddling the Bosphorus strait. This location has historically made it a crucial trading hub and cultural crossroads, and today gives it unique advantages in serving both European and Middle Eastern markets.",
      },
      {
        question: "How does Istanbul compare to Cairo and Johannesburg?",
        answer:
          "Istanbul (95) scores higher than Cairo (88) and Johannesburg (90), reflecting Turkey's higher national income and educational investment levels. Istanbul benefits from Turkey's more developed university system and higher urbanization rate.",
      },
    ],
    relatedCities: ["dubai", "tel-aviv", "athens"],
    continent: "Middle East & Africa",
  },
  {
    city: "Sydney",
    slug: "sydney",
    country: "Australia",
    countrySlug: "australia",
    estimatedAvgIQ: 101,
    avgIQRange: "98–104",
    knownFor: "finance, technology, education, lifestyle, diversity",
    description:
      "Sydney is Australia's largest city and financial capital, home to the University of Sydney and UNSW (University of New South Wales), both consistently ranked in the global top 100. Australia's points-based immigration system selects strongly for educational attainment, and Sydney receives the highest share of skilled immigrants. The city's financial sector, technology industry, and professional services create significant demand for university-educated professionals. Sydney benefits from Australia's strong PISA performance — consistently above the OECD average — and its role as the gateway city for Asia-Pacific business.",
    keyFactors: [
      "University of Sydney and UNSW both rank in the global top 100",
      "Australia's points-based immigration system selects for educational attainment",
      "Financial hub of the Asia-Pacific region attracting educated international professionals",
      "Australia's PISA performance consistently above OECD average",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Sydney?",
        answer:
          "Sydney's estimated average IQ is around 101, above Australia's national average of approximately 99. The city's world-class universities, highly selective immigration policy, and Asia-Pacific financial hub status create a meaningfully educated resident population.",
      },
      {
        question: "How does Australia's immigration policy affect Sydney's cognitive profile?",
        answer:
          "Australia's points-based immigration system awards points for higher education, English proficiency, and skilled work experience, selecting immigrants who are significantly more educated than the average Australian citizen. Sydney receives the largest share of these skilled immigrants, elevating the city's cognitive profile.",
      },
      {
        question: "How does Sydney compare to Melbourne?",
        answer:
          "Sydney and Melbourne score very similarly, with Sydney having a slight edge due to its larger financial sector. Melbourne has a slight edge in cultural and educational prestige (University of Melbourne is consistently ranked higher than any Sydney university). The difference is not statistically meaningful.",
      },
    ],
    relatedCities: ["melbourne", "singapore-city", "tokyo"],
    continent: "Oceania",
  },
  {
    city: "Melbourne",
    slug: "melbourne",
    country: "Australia",
    countrySlug: "australia",
    estimatedAvgIQ: 101,
    avgIQRange: "98–104",
    knownFor: "education, culture, sports, coffee, technology, biomedical research",
    description:
      "Melbourne is Australia's cultural capital and home to the University of Melbourne, consistently ranked in the global top 35 universities — higher than any Sydney institution. Monash University, also in Melbourne, is a significant research university. The city's strong biomedical research sector, centered on the Parkville Biomedical Precinct (housing Melbourne's major research hospitals and the Walter and Eliza Hall Institute), concentrates PhD-level scientists. Melbourne's large Chinese, Indian, and Southeast Asian student and professional communities bring educational traditions that support above-average cognitive performance.",
    keyFactors: [
      "University of Melbourne ranks in the global top 35, highest of any Australian university",
      "Parkville Biomedical Precinct is one of the world's leading biomedical research clusters",
      "Large, highly educated Asian student and professional community",
      "Strong cultural emphasis on education and intellectual achievement",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Melbourne?",
        answer:
          "Melbourne's estimated average IQ is around 101, comparable to Sydney and above Australia's national average. The city's world-class university sector, major biomedical research cluster, and highly educated immigrant communities create a cognitively elevated population.",
      },
      {
        question: "Why does the University of Melbourne rank higher than Sydney universities?",
        answer:
          "The University of Melbourne has consistently invested in research excellence and international faculty recruitment. Its graduate-entry model (similar to US research universities), strong postgraduate programs, and research output per faculty member have driven higher international rankings than comparable Sydney institutions.",
      },
      {
        question: "How does Melbourne compare to Singapore and Tokyo?",
        answer:
          "Melbourne (101) scores below Singapore (110) and Tokyo (108). Singapore's extraordinary investment in education and Tokyo's extreme academic culture create higher selection effects. Melbourne's strength lies in its excellent research university system and diverse educated immigrant community.",
      },
    ],
    relatedCities: ["sydney", "singapore-city", "auckland"],
    continent: "Oceania",
  },
  {
    city: "Nairobi",
    slug: "nairobi",
    country: "Kenya",
    countrySlug: "kenya",
    estimatedAvgIQ: 83,
    avgIQRange: "80–86",
    knownFor: "technology hub, wildlife, UN agencies, innovation, finance",
    description:
      "Nairobi is sub-Saharan Africa's most dynamic technology hub, often called the 'Silicon Savannah,' and is home to a rapidly growing startup ecosystem including M-Pesa, one of the world's most successful mobile money systems. The city houses major UN agency headquarters (UNEP and UN-Habitat), attracting internationally educated Kenyan and other African professionals. The University of Nairobi is Kenya's most prestigious institution. Nairobi's cognitive profile is substantially above Kenya's national average due to strong urban selection effects, an internationally oriented professional class, and Kenya's relatively strong educational infrastructure for sub-Saharan Africa.",
    keyFactors: [
      "Sub-Saharan Africa's leading technology hub (Silicon Savannah)",
      "UN agency headquarters (UNEP, UN-Habitat) attract internationally educated professionals",
      "Kenya's relatively strong educational infrastructure for sub-Saharan Africa",
      "Rapidly growing middle class investing heavily in children's education",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Nairobi?",
        answer:
          "Nairobi's estimated average IQ is around 83, meaningfully above Kenya's national average. The city's technology sector, UN agencies, and Kenya's strongest universities create urban selection effects, while improving access to education and nutrition supports positive trends.",
      },
      {
        question: "Why is Nairobi called the 'Silicon Savannah'?",
        answer:
          "Nairobi earned the Silicon Savannah nickname for its vibrant technology startup ecosystem, supported by the iHub innovation center, Safaricom's M-Pesa mobile money platform (which transformed financial inclusion in Africa), and investments from Google, Microsoft, and other technology companies.",
      },
      {
        question: "How does Nairobi compare to Johannesburg?",
        answer:
          "Johannesburg (90) scores higher than Nairobi (83), reflecting South Africa's higher national income and educational investment compared to Kenya. However, Nairobi's technology sector is more dynamic, and Kenya's educational improvement trajectory is steeper.",
      },
    ],
    relatedCities: ["johannesburg", "cairo", "dubai"],
    continent: "Middle East & Africa",
  },
  {
    city: "Johannesburg",
    slug: "johannesburg",
    country: "South Africa",
    countrySlug: "south-africa",
    estimatedAvgIQ: 90,
    avgIQRange: "87–93",
    knownFor: "mining, finance, industry, diversity, arts",
    description:
      "Johannesburg is sub-Saharan Africa's largest city by economic output and the financial center of the African continent. The University of the Witwatersrand (Wits) is South Africa's most research-intensive university and among the continent's most prestigious. Johannesburg concentrates South Africa's financial, mining, and technology sectors, creating significant demand for educated professionals. South Africa's national average reflects historical inequality in educational access from the apartheid era, but Johannesburg's urban population has much higher average educational attainment than the national figure suggests, with a large professional class driving the urban premium.",
    keyFactors: [
      "Sub-Saharan Africa's largest economy and financial center",
      "University of the Witwatersrand is among Africa's most research-intensive institutions",
      "Mining, finance, and technology sectors require highly educated professional workforce",
      "Urban selection effects from large professional class with above-average educational attainment",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Johannesburg?",
        answer:
          "Johannesburg's estimated average IQ is around 90, substantially above South Africa's national average of approximately 77. The city's financial sector, mining industry, and concentration of South Africa's most educated professionals create a meaningful urban premium.",
      },
      {
        question: "How does historical apartheid affect Johannesburg's educational landscape today?",
        answer:
          "Apartheid-era educational segregation created lasting inequality in school quality between formerly white and formerly black areas. While significant progress has been made, school quality remains highly variable, and the legacy of unequal access to quality education continues to affect population-level cognitive test outcomes.",
      },
      {
        question: "How does Johannesburg compare to Nairobi and Cairo?",
        answer:
          "Johannesburg (90) scores higher than Nairobi (83) and Cairo (88), reflecting South Africa's higher national income and educational investment. However, South Africa's unique historical inequalities create a particularly large gap between the professional class and broader population.",
      },
    ],
    relatedCities: ["nairobi", "cairo", "dubai"],
    continent: "Middle East & Africa",
  },
  {
    city: "Cairo",
    slug: "cairo",
    country: "Egypt",
    countrySlug: "egypt",
    estimatedAvgIQ: 88,
    avgIQRange: "85–91",
    knownFor: "history, government, media, trade, the pyramids",
    description:
      "Cairo is Africa's most populous city and the Arab world's cultural capital, home to Al-Azhar University — one of the world's oldest universities, founded in 970 CE — alongside Cairo University and the American University in Cairo. Egypt's national average reflects significant challenges in educational quality, but Cairo concentrates the country's educated professional elite in government, media, law, and finance. The city's role as the dominant economic center for over 100 million Egyptians creates substantial selection effects, and the large middle class in Cairo's formal economy has much higher educational attainment than the national figure suggests.",
    keyFactors: [
      "Al-Azhar University is one of the world's oldest universities (founded 970 CE)",
      "Arab world's dominant media, culture, and government center",
      "Large educated professional class in finance, law, and government above national average",
      "American University in Cairo produces internationally competitive graduates",
    ],
    faqItems: [
      {
        question: "What is the average IQ in Cairo?",
        answer:
          "Cairo's estimated average IQ is around 88, above Egypt's national average of approximately 83. The city's concentration of Egypt's most educated professionals and its role as the Arab world's cultural and governmental center create a meaningful urban premium.",
      },
      {
        question: "What is Al-Azhar University's historical significance?",
        answer:
          "Al-Azhar, founded in Cairo in 970 CE, is one of the oldest continuously operating universities in the world and the world's foremost center of Islamic learning. Its influence on education across the Arab world and Muslim-majority countries has been profound for over a millennium.",
      },
      {
        question: "How does Cairo compare to Nairobi and Johannesburg?",
        answer:
          "Cairo (88) scores above Nairobi (83) but below Johannesburg (90). Cairo's advantage over Nairobi reflects Egypt's higher national income and more developed urban professional sector. Johannesburg's higher score reflects South Africa's generally higher income levels despite greater internal inequality.",
      },
    ],
    relatedCities: ["dubai", "istanbul", "johannesburg"],
    continent: "Middle East & Africa",
  },
];

export function getCityBySlug(slug: string): CityIQInfo | undefined {
  return cityIQData.find((c) => c.slug === slug);
}

export const citySlugs = cityIQData.map((c) => c.slug);
