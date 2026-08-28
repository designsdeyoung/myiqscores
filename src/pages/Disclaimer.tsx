import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Disclaimer = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SEOHead
      title="Disclaimer — MyIQScores"
      description="Important disclaimers about the MyIQScores online IQ-style test: it is an educational estimate, not a clinical, medical, or employment assessment."
      canonicalUrl="/disclaimer"
    />
    <BackgroundEffect />
    <Navbar />
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-foreground">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8">Disclaimer</h1>
      <p className="text-muted-foreground text-sm mb-6">Last updated: August 28, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">1. Educational Purpose Only</h2>
          <p>
            The test offered on MyIQScores.com is a free, 30-question online reasoning quiz designed for
            educational and entertainment purposes. The score it produces is an{" "}
            <strong className="text-foreground">estimated IQ-style score</strong> — an approximation based on
            your performance on a short set of reasoning questions. It is not a measurement of your true IQ.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">2. Not a Clinical or Professional Assessment</h2>
          <p className="mb-2">Our test is NOT:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>A licensed clinical IQ assessment</li>
            <li>A psychological or medical diagnosis of any kind</li>
            <li>An official WAIS (Wechsler Adult Intelligence Scale) or Stanford-Binet examination</li>
            <li>An employment, academic, or admissions assessment</li>
            <li>A disability, special-needs, or benefits eligibility evaluation</li>
          </ul>
          <p className="mt-3">
            Professionally administered IQ tests are conducted one-on-one by licensed psychologists under
            standardized conditions and are normed on large representative samples. If you need an accurate,
            clinically valid measure of cognitive ability — for example for educational placement, a
            disability evaluation, or gifted-program admission — consult a licensed psychologist.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">3. Accuracy and Limitations</h2>
          <p>
            Short online tests are inherently less reliable than professional assessments. Your result can be
            affected by fatigue, distraction, device and screen size, language familiarity, prior exposure to
            similar puzzles, and simple chance. Treat your result as a rough indication of how you performed on
            this particular set of questions on this particular day — nothing more. Our{" "}
            <Link to="/methodology" className="text-primary hover:underline">methodology page</Link> explains
            exactly how scores are calculated.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">4. Celebrity and Historical IQ Estimates</h2>
          <p>
            Articles on this site discussing the IQ of famous people, historical figures, presidents, or other
            public figures are based on publicly circulated estimates, biographical analysis, and media
            reports. Unless explicitly stated otherwise,{" "}
            <strong className="text-foreground">these figures are unverified estimates, not confirmed test results</strong>.
            Most public figures have never released an authenticated IQ score, and historical figures lived
            before modern IQ testing existed. We label such figures as estimates and encourage readers to treat
            them as informed speculation.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">5. No Professional Advice</h2>
          <p>
            Nothing on this website constitutes medical, psychological, legal, financial, or career advice.
            Content about careers, education, cognitive health, nutrition, sleep, or exercise is provided for
            general informational purposes only and should not replace advice from qualified professionals.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">6. External Links</h2>
          <p>
            This site may link to external websites. We are not responsible for the content, accuracy, or
            practices of third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">7. Questions</h2>
          <p>
            If you have questions about this disclaimer, contact us at{" "}
            <a href="mailto:support@myiqscores.com" className="text-primary hover:underline">support@myiqscores.com</a>{" "}
            or via our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Disclaimer;
