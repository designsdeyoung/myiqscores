import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { iqCompareData } from "@/data/iqCompareData";

const CATEGORIES: { label: string; slugs: string[] }[] = [
  {
    label: "Gender & Demographics",
    slugs: [
      "men-vs-women",
      "introverts-vs-extroverts",
      "left-brain-vs-right-brain",
      "night-owl-vs-early-bird",
      "only-child-vs-siblings",
    ],
  },
  {
    label: "Countries",
    slugs: [
      "us-vs-china",
      "us-vs-japan",
      "uk-vs-germany",
      "us-vs-uk",
      "india-vs-china",
    ],
  },
  {
    label: "Careers",
    slugs: [
      "doctor-vs-engineer",
      "lawyer-vs-doctor",
      "engineer-vs-artist",
      "scientist-vs-businessman",
      "programmer-vs-accountant",
    ],
  },
  {
    label: "Education",
    slugs: [
      "college-vs-no-college",
      "phd-vs-masters",
      "stem-vs-humanities",
      "private-school-vs-public",
    ],
  },
  {
    label: "Lifestyle",
    slugs: [
      "vegetarian-vs-meat-eater",
      "gamers-vs-non-gamers",
      "readers-vs-tv-watchers",
      "athletes-vs-non-athletes",
      "meditation-vs-no-meditation",
      "morning-exercise-vs-sedentary",
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do men or women have a higher average IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Average IQ is virtually identical for men and women — the difference in means is less than 1 IQ point across major population studies. Men show slightly higher score variance, meaning more men appear at both the highest and lowest extremes, but the averages are statistically equal.",
      },
    },
    {
      "@type": "Question",
      name: "Which country has the highest average IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japan, Singapore, South Korea, China, and Hong Kong consistently rank among the top-scoring nations in national IQ studies, all averaging approximately 105–108. These countries also lead international academic assessments such as PISA in mathematics and science.",
      },
    },
    {
      "@type": "Question",
      name: "Which profession has the highest average IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research scientists — particularly in theoretical physics, mathematics, and philosophy — average among the highest IQs of any occupational group, typically 125–135. Physicians, engineers, lawyers, and programmers all average in the 120–126 range, placing them in the top 5–10% of the general population.",
      },
    },
    {
      "@type": "Question",
      name: "Does lifestyle affect IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Regular aerobic exercise, reading, adequate sleep, and mindfulness meditation are all associated with higher cognitive performance and have causal support from randomized controlled trials. Sedentary behavior and heavy passive TV watching are associated with lower cognitive scores. Lifestyle choices influence IQ through neuroplasticity, BDNF production, and crystallized intelligence accumulation.",
      },
    },
  ],
};

const relatedPages = [
  { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
  { title: "IQ Score Ranges", href: "/iq-score-ranges" },
  { title: "Average IQ by Country", href: "/average-iq-by-country" },
  { title: "IQ by Career", href: "/iq-by-career" },
  { title: "Famous People IQ Scores", href: "/famous-iq" },
  { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
];

const IQCompareHub = () => {
  return (
    <ContentPage relatedPages={relatedPages}>
      <SEOHead
        title="IQ Comparison Charts: Groups, Countries and Careers"
        description="Compare average IQ scores across genders, countries, careers, education levels, and lifestyles. Science-backed IQ comparisons with research citations and balanced verdicts."
        canonicalUrl="/iq-compare"
        ogType="website"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">IQ Comparison Charts</span>
      </h1>

      <p className="text-lg text-muted-foreground mt-2 mb-8">
        How do men and women compare on IQ tests? Which countries score highest? Do doctors
        outperform engineers? Explore 25 science-backed IQ comparisons spanning gender, nationality,
        career, education, and lifestyle — with balanced verdicts grounded in peer-reviewed research.
      </p>

      {CATEGORIES.map((cat) => {
        const items = cat.slugs
          .map((s) => iqCompareData.find((c) => c.slug === s))
          .filter(Boolean) as typeof iqCompareData;

        return (
          <section key={cat.label} className="mb-10">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">{cat.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((compare) => (
                <Link
                  key={compare.slug}
                  to={`/iq-compare/${compare.slug}`}
                  className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors group no-underline"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-base text-foreground group-hover:text-primary transition-colors mb-1">
                        {compare.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">
                          {compare.sideA.label}:{" "}
                          <span className="text-primary">{compare.sideA.avgIQ}</span>
                        </span>
                        <span className="text-muted-foreground/50">vs</span>
                        <span className="font-medium text-foreground">
                          {compare.sideB.label}:{" "}
                          <span className="text-secondary">{compare.sideB.avgIQ}</span>
                        </span>
                      </div>
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors text-lg mt-0.5">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <div className="glass-card p-5 rounded-xl my-8">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          How to Interpret These Comparisons
        </h2>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>
            <strong className="text-foreground">Averages, not individuals.</strong> Every comparison
            shows population means with enormous individual overlap — these numbers say nothing about
            any specific person's intelligence.
          </li>
          <li>
            <strong className="text-foreground">Correlation vs causation.</strong> Many lifestyle and
            education comparisons reflect who chooses those paths (selection effects) as much as what
            those paths do to intelligence (causal effects).
          </li>
          <li>
            <strong className="text-foreground">National estimates carry uncertainty.</strong>{" "}
            Country-level IQ figures reflect complex environmental, educational, and socioeconomic
            factors — not fixed biological differences between nationalities.
          </li>
          <li>
            <strong className="text-foreground">IQ measures one dimension.</strong> Standard IQ tests
            capture analytical reasoning well but underrepresent social intelligence, creativity,
            emotional intelligence, and practical wisdom.
          </li>
        </ul>
      </div>

      <h2>Frequently Asked Questions</h2>
      {faqSchema.mainEntity.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>{item.acceptedAnswer.text}</p>
        </div>
      ))}

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to see where you stand, or read{" "}
        <Link to="/what-is-iq">our complete guide to what IQ actually measures</Link>.
      </p>
    </ContentPage>
  );
};

export default IQCompareHub;
