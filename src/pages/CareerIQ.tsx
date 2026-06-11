import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { fitTitle, preferTitle } from "@/lib/seo";
import IQMeter from "@/components/IQMeter";
import ComparisonChart from "@/components/ComparisonChart";
import PercentileBar from "@/components/PercentileBar";
import Breadcrumb from "@/components/Breadcrumb";
import { getCareerBySlug, careerIQData } from "@/data/careerIQData";
import { careerExtendedData } from "@/data/careerExtendedData";

const seoTitles: Record<string, string> = {
  "airline-pilot": "IQ Needed to Be a Pilot: Minimum Score & What Airlines Look For",
  "doctor": "IQ Needed to Be a Doctor: Average Physician IQ Revealed",
  "lawyer": "IQ Needed to Be a Lawyer: What the Data Shows",
  "engineer": "Average Engineer IQ: How Smart Do You Need to Be?",
  "nurse": "IQ Needed to Be a Nurse: Average Nurse IQ Score",
  "teacher": "Average Teacher IQ: What the Research Says",
  "software-engineer": "Average Software Engineer IQ: How Smart Are Coders?",
  "police-officer": "Average Police Officer IQ: Requirements & Reality",
  "accountant": "Average Accountant IQ: CPA Intelligence Requirements",
  "military-officer": "IQ Needed for Military Officer: ASVAB & Requirements",
  "electrician": "Average Electrician IQ: Skilled Trades Intelligence",
  "dentist": "Average Dentist IQ: How Smart Are Dentists?",
  "pharmacist": "Average Pharmacist IQ: Intelligence Requirements",
  "psychologist": "Average Psychologist IQ: What the Research Shows",
  "ceo": "Average CEO IQ: How Smart Are Business Leaders?",
  "astronaut": "IQ Needed to Be an Astronaut: NASA Requirements",
};

const seoDescs: Record<string, string> = {
  "airline-pilot": "What IQ do you need to become an airline pilot? The average pilot IQ is 115-125. See the cognitive requirements, aptitude tests, and how to qualify.",
  "doctor": "Most physicians score 120-130 IQ. See how the MCAT correlates with cognitive ability, how specialties differ, and what it really takes to get into medicine.",
  "lawyer": "Most lawyers score 115-130 IQ. The LSAT is essentially a reasoning test. See how law school tiers, practice areas, and career paths relate to cognitive ability.",
  "engineer": "Engineers average 115-128 IQ, with aerospace and software at the top. See how different disciplines compare and which cognitive skills matter most.",
  "nurse": "Nurses average 105-115 IQ. Is emotional intelligence more important than IQ? See how RN vs NP roles differ and what the NCLEX actually measures.",
  "teacher": "Teachers average 105-120 IQ, but math and science teachers score higher. See how subject, level, and Praxis scores relate to cognitive demands.",
  "software-engineer": "Software engineers average 115-128 IQ. Logical reasoning is key. See how self-taught vs degree holders compare and what big tech interviews really test.",
  "police-officer": "Police officers average 100-110 IQ. Discover the controversial case where a man was rejected for being 'too smart' — and what entrance exams actually measure.",
  "accountant": "Accountants average 110-120 IQ. The CPA exam is one of the hardest professional tests. See how analytical thinking drives success in accounting careers.",
  "military-officer": "Military officers average 110-125 IQ. The ASVAB correlates directly with IQ. See how officer vs enlisted requirements differ and what scores each branch requires.",
  "electrician": "Electricians average 100-110 IQ, but spatial reasoning is critical. See why the trades vs college debate matters and what apprenticeship exams actually test.",
  "dentist": "Dentists average 115-125 IQ. The DAT tests spatial and scientific reasoning. See how fine motor skill and cognitive ability combine in this demanding profession.",
  "pharmacist": "Pharmacists average 115-125 IQ. Chemistry aptitude is key. See how the PCAT correlates with cognitive ability and whether memorization or reasoning matters most.",
  "psychologist": "Psychologists average 115-125 IQ. Emotional intelligence matters as much as IQ. See how clinical vs research psychologists compare and what the GRE reveals.",
  "ceo": "Fortune 500 CEOs average 115-130 IQ. But research shows returns diminish above 120. See why emotional intelligence often beats raw IQ in the executive suite.",
  "astronaut": "NASA astronauts are estimated at 130-145 IQ — top 2%. With a 0.2% acceptance rate, see what cognitive and professional qualifications actually get you selected.",
};

const CareerIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-needed-for/", "");
  const career = slug ? getCareerBySlug(slug) : undefined;
  const extended = slug ? (careerExtendedData[slug] ?? null) : null;

  if (!career) return <Navigate to="/what-is-iq" replace />;

  const midIQ = Math.round((career.minIQ + career.maxIQ) / 2 / 5) * 5;
  const relatedPages = [
    { title: "IQ by Career (Full List)", href: "/iq-by-career" },
    { title: `Is ${midIQ} IQ Good?`, href: `/is-${midIQ}-iq-good` },
    { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
    ...career.relatedCareers.slice(0, 3).map((s) => {
      const c = careerIQData.find((x) => x.slug === s);
      return c ? { title: `IQ for ${c.career}`, href: `/iq-needed-for/${c.slug}` } : null;
    }).filter(Boolean) as { title: string; href: string }[],
    { title: "SAT to IQ Conversion", href: "/sat-to-iq" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: career.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.myiqscores.com" },
      { "@type": "ListItem", position: 2, name: "IQ by Career", item: "https://www.myiqscores.com/iq-by-career" },
      { "@type": "ListItem", position: 3, name: `${career.career} IQ`, item: `https://www.myiqscores.com/iq-needed-for/${career.slug}` },
    ],
  };

  const relatedCareers = career.relatedCareers
    .map((s) => careerIQData.find((c) => c.slug === s))
    .filter(Boolean);

  return (
    <ContentPage ctaText={`Think you have what it takes? Test your IQ now`} relatedPages={relatedPages}>
      <SEOHead
        title={preferTitle(seoTitles[career.slug], fitTitle(`IQ Needed to Be a ${career.career}`, [": Average Score and Range", ": Average Score"]))}
        description={seoDescs[career.slug] ?? `What IQ do you need to be a ${career.career.toLowerCase()}? The average IQ for ${career.career.toLowerCase()}s is ${career.avgIQRange}. Learn the cognitive requirements and how to qualify.`}
        canonicalUrl={`/iq-needed-for/${career.slug}`}
        ogType="article"
        jsonLd={[faqSchema, breadcrumbSchema]}
      />

      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "IQ by Career", href: "/iq-by-career" }, { label: `${career.career} IQ` }]} />

      <h1>
        IQ Needed to Be a <span className="gradient-text">{career.career}</span>
      </h1>

      {/* IQ Meter for career midpoint */}
      <IQMeter score={Math.round((career.minIQ + career.maxIQ) / 2)} label={`Avg ${career.career}`} />

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Average IQ Range</p>
          <p className="font-heading font-bold text-3xl gradient-text">{career.avgIQRange}</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">IQ Classification</p>
          <p className="font-heading font-bold text-lg text-foreground">
            {career.minIQ >= 120 ? "Superior" : career.minIQ >= 110 ? "High Average" : "Average"} range
          </p>
        </div>
      </div>

      <h2>Cognitive Requirements</h2>
      <p>{career.description}</p>

      <p>
        To understand what these IQ ranges mean, see our{" "}
        <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>. You can also check where
        specific scores fall: <Link to={`/is-${Math.round((career.minIQ + career.maxIQ) / 2 / 5) * 5}-iq-good`}>
          Is {Math.round((career.minIQ + career.maxIQ) / 2 / 5) * 5} IQ Good?
        </Link>
      </p>

      <h2>Education Path</h2>
      <p>{career.educationPath}</p>

      {career.cognitiveDemands && (
        <>
          <h2>Cognitive Demands of the Job</h2>
          <p>{career.cognitiveDemands}</p>
        </>
      )}

      <h2>How Does This Compare to Other Careers?</h2>

      {/* Visual career comparison */}
      <ComparisonChart
        title="Career IQ Comparison"
        items={[
          { label: career.career, value: Math.round((career.minIQ + career.maxIQ) / 2), highlight: true },
          ...relatedCareers.filter(Boolean).map((c) => ({
            label: (c as any).career,
            value: Math.round(((c as any).minIQ + (c as any).maxIQ) / 2),
            href: `/iq-needed-for/${(c as any).slug}`,
          })),
        ]}
        maxValue={150}
      />

      <table>
        <thead>
          <tr>
            <th>Career</th>
            <th>Average IQ Range</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[rgba(0,229,255,0.05)]">
            <td><strong>{career.career}</strong></td>
            <td><strong>{career.avgIQRange}</strong></td>
          </tr>
          {relatedCareers.map((c) => c && (
            <tr key={c.slug}>
              <td><Link to={`/iq-needed-for/${c.slug}`}>{c.career}</Link></td>
              <td>{c.avgIQRange}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {extended && (
        <>
          <h2>Cognitive Skills That Drive Success in {career.career}</h2>
          <p>{extended.cognitiveBreakdown}</p>

          <h2>A Day in the Life: How IQ Shows Up at Work</h2>
          <p>{extended.dayInTheLife}</p>

          <h2>Salary Context and IQ</h2>
          <p>{extended.salaryContext}</p>

          <h2>Entry Barriers and Cognitive Requirements</h2>
          <p>{extended.entryBarriers}</p>
        </>
      )}

      <h2>Frequently Asked Questions</h2>
      {career.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore More Careers</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {careerIQData
          .filter((c) => c.slug !== career.slug)
          .slice(0, 5)
          .map((c) => (
            <Link
              key={c.slug}
              to={`/iq-needed-for/${c.slug}`}
              className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
            >
              {c.career} ({c.avgIQRange})
            </Link>
          ))}
      </div>

      <p className="mt-6">
        Learn more about <Link to="/what-is-iq">what IQ measures</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link> to see where you stand.
      </p>
    </ContentPage>
  );
};

export default CareerIQ;
