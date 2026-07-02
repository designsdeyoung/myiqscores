import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { fitTitle } from "@/lib/seo";
import { getQuestionBySlug, questionsData } from "@/data/questionsData";

const QuestionPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/questions/", "");
  const q = slug ? getQuestionBySlug(slug) : undefined;

  if (!q) return <Navigate to="/questions" replace />;

  // QAPage + FAQPage: the main question uses the shortAnswer as its accepted
  // answer (the block snippets and AI engines quote), FAQs cover follow-ups.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.shortAnswer },
      },
      ...q.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ],
  };

  const otherQuestions = questionsData.filter((o) => o.slug !== q.slug).slice(0, 6);

  const relatedPages = [
    ...q.related,
    { title: "All IQ Questions Answered", href: "/questions" },
    { title: "Free IQ Test", href: "/" },
  ];

  return (
    <ContentPage relatedPages={relatedPages}>
      <SEOHead
        title={fitTitle(q.question, [" | MyIQScores", ""])}
        description={q.metaDescription}
        canonicalUrl={`/questions/${q.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <h1><span className="gradient-text">{q.question}</span></h1>

      {/* Answer-first block — the quotable summary for snippets/AI engines */}
      <div className="glass-card p-5 rounded-xl my-8 border-l-4 border-primary">
        <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Quick Answer</p>
        <p className="text-foreground leading-relaxed m-0">{q.shortAnswer}</p>
      </div>

      {q.sections.map((section) => (
        <div key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ))}

      <h2>Frequently Asked Questions</h2>
      {q.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>More IQ Questions Answered</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {otherQuestions.map((o) => (
          <Link key={o.slug} to={`/questions/${o.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline">
            {o.question}
          </Link>
        ))}
      </div>

      <p className="mt-6">
        Curious where you'd land? <Link to="/">Take our free 30-question IQ test</Link> — instant
        results, no sign-up — or explore <Link to="/iq-score-ranges">what every score means</Link>.
      </p>
    </ContentPage>
  );
};

export default QuestionPage;
