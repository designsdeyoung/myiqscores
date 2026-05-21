import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  /** Emit FAQPage JSON-LD schema (default true) */
  withSchema?: boolean;
  className?: string;
}

const FAQSection = ({
  items,
  title = "Frequently Asked Questions",
  withSchema = true,
  className = "",
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      {withSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
      <section className={`mt-12 ${className}`} aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
          {title}
        </h2>
        <div className="flex flex-col gap-3 mt-8">
          {items.map(({ question, answer }, i) => (
            <div
              key={question}
              className="glass-card rounded-xl border border-[rgba(255,255,255,0.08)] overflow-hidden"
            >
              <button
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-heading font-semibold text-foreground text-sm sm:text-base">
                    {question}
                  </span>
                </div>
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-primary mt-0.5">
                  {openIndex === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed px-5 pb-5 pl-12">
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQSection;
