import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { careerIQData } from "@/data/careerIQData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What career requires the highest IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Careers in theoretical physics, mathematics, and academic research tend to attract the highest IQ ranges, with average scores often above 130. Neurosurgeons, aerospace engineers, and research scientists also cluster in the 125–140 range. However, IQ is only one factor — domain expertise, creativity, and persistence matter enormously in every field.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for a doctor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ for physicians is estimated at 120–130, placing them well above the general population average of 100. Medical school admission requires strong performance on the MCAT, which correlates with IQ. Surgeons and specialists tend to score slightly higher than general practitioners.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need a high IQ to be successful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. While IQ correlates with academic performance and some career outcomes, it is far from the only determinant of success. Emotional intelligence, conscientiousness, interpersonal skills, grit, and opportunity all play major roles. Many highly successful people in business, arts, and trades have average or slightly above-average IQ scores.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ for an engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engineering professionals typically score in the 115–130 IQ range, depending on the specialty. Software engineers and electrical engineers tend to score toward the higher end, while civil and mechanical engineers average around 115–120. These are population averages — individual scores vary widely.",
      },
    },
  ],
};

const CareerIQHub = () => {
  const sorted = [...careerIQData].sort((a, b) => b.minIQ - a.minIQ);

  return (
    <ContentPage>
      <SEOHead
        title="IQ Needed for Every Career: Complete Job IQ Chart | MyIQScores"
        description="What IQ do you need for your dream career? See average IQ scores for 50+ professions from doctor to plumber, with detailed breakdowns and education paths."
        canonicalUrl="/iq-by-career"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1><span className="gradient-text">IQ Needed for Every Career:</span> Complete Job IQ Chart</h1>

      <p>
        What IQ do you need for your dream job? Below is our complete database of average IQ
        ranges for over 50 careers, from the most intellectually demanding (mathematician, professor)
        to practical trades (electrician, plumber). Click any career for detailed analysis including
        education paths, cognitive requirements, and FAQs.
      </p>

      <p>
        Remember: IQ is just one factor in career success. Motivation, interpersonal skills,
        domain expertise, and opportunity often matter more. See our guide on{" "}
        <Link to="/iq-myths/does-iq-determine-success">whether IQ determines success</Link>.
      </p>

      <table>
        <thead>
          <tr><th>Career</th><th>Average IQ Range</th><th>Education</th></tr>
        </thead>
        <tbody>
          {sorted.map((c) => (
            <tr key={c.slug}>
              <td><Link to={`/iq-needed-for/${c.slug}`}>{c.career}</Link></td>
              <td className="font-mono font-semibold text-foreground">{c.avgIQRange}</td>
              <td className="text-sm text-muted-foreground">{c.educationPath.split('.')[0]}.</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-8">
        Learn more about <Link to="/what-is-iq">what IQ measures</Link>,{" "}
        <Link to="/iq-score-ranges">IQ score ranges</Link>,{" "}
        <Link to="/iq-by-major">IQ by College Major</Link>,{" "}
        <Link to="/average-iq-by-country">Average IQ by Country</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link>.
      </p>
    </ContentPage>
  );
};

export default CareerIQHub;
