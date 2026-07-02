import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { questionsData } from "@/data/questionsData";

const QuestionsHub = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "IQ Questions Answered",
    description: "Direct, research-backed answers to the most common questions about IQ, IQ tests, and intelligence.",
    url: "https://www.myiqscores.com/questions",
    hasPart: questionsData.map((q) => ({
      "@type": "WebPage",
      name: q.question,
      url: `https://www.myiqscores.com/questions/${q.slug}`,
    })),
  };

  const relatedPages = [
    { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
    { title: "IQ Score Ranges", href: "/iq-score-ranges" },
    { title: "IQ Myths Debunked", href: "/iq-myths/does-iq-determine-success" },
    { title: "Free IQ Test", href: "/" },
  ];

  return (
    <ContentPage relatedPages={relatedPages}>
      <SEOHead
        title="IQ Questions Answered: Direct Answers from the Research | MyIQScores"
        description="Every common question about IQ answered directly — from what IQ stands for to how rare a 130 score is. Research-backed, no fluff."
        canonicalUrl="/questions"
        jsonLd={jsonLd}
      />

      <h1><span className="gradient-text">IQ Questions, Answered</span></h1>

      <p>
        Direct answers to the questions people actually ask about IQ and intelligence testing.
        Every page leads with the answer, then unpacks the research behind it. For the
        fundamentals, start with <Link to="/what-is-iq">our complete IQ guide</Link>; to see
        where you stand, <Link to="/">take the free test</Link>.
      </p>

      <div className="grid gap-4 my-8">
        {questionsData.map((q) => (
          <Link
            key={q.slug}
            to={`/questions/${q.slug}`}
            className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors no-underline block"
          >
            <h2 className="text-lg font-heading font-bold text-foreground m-0 mb-2">{q.question}</h2>
            <p className="text-sm text-muted-foreground m-0 line-clamp-2">{q.shortAnswer}</p>
          </Link>
        ))}
      </div>

      <p>
        Have a question we haven't covered? <Link to="/contact">Send it to us</Link> — the most
        asked questions become new pages.
      </p>
    </ContentPage>
  );
};

export default QuestionsHub;
