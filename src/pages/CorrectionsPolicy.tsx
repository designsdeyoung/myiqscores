import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const CorrectionsPolicy = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SEOHead
      title="Corrections Policy — MyIQScores"
      description="How to report an error on MyIQScores.com and how we handle corrections to articles, data pages, and quiz content."
      canonicalUrl="/corrections-policy"
    />
    <BackgroundEffect />
    <Navbar />
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-foreground">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8">Corrections Policy</h1>
      <p className="text-muted-foreground text-sm mb-6">Last updated: August 28, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">1. Our Commitment</h2>
          <p>
            We want every page on MyIQScores.com to be accurate and honestly framed. IQ is a topic full of
            myths, exaggerated claims, and unverified numbers, so we take corrections seriously. When we get
            something wrong — a fact, a statistic, an attribution, or a claim stated more strongly than the
            evidence supports — we fix it.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">2. How to Report an Error</h2>
          <p className="mb-2">
            Email{" "}
            <a href="mailto:content@myiqscores.com" className="text-primary hover:underline">content@myiqscores.com</a>{" "}
            with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The URL of the page</li>
            <li>The statement you believe is incorrect</li>
            <li>Why it is incorrect, with a source if you have one</li>
          </ul>
          <p className="mt-3">We aim to acknowledge reports within a few business days.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">3. How We Handle Corrections</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Factual errors</strong> — corrected in the article as soon as verified</li>
            <li><strong className="text-foreground">Outdated statistics</strong> — updated, with the page's "updated" date revised</li>
            <li><strong className="text-foreground">Unverified claims</strong> — reworded to make their estimated or disputed status explicit, or removed</li>
            <li><strong className="text-foreground">Typos and formatting</strong> — fixed without notation</li>
          </ul>
          <p className="mt-3">
            Material corrections that change the substance of an article are made promptly once confirmed.
            Celebrity and historical IQ figures on this site are estimates by default — see our{" "}
            <Link to="/disclaimer" className="text-primary hover:underline">disclaimer</Link> — but if a
            specific claim is presented more confidently than the evidence warrants, we treat that as an error
            and reword it.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">4. Copyright and Content Concerns</h2>
          <p>
            If you believe content on this site infringes your copyright or misuses your likeness, contact{" "}
            <a href="mailto:content@myiqscores.com" className="text-primary hover:underline">content@myiqscores.com</a>{" "}
            with the page URL and details of your claim. We review such reports promptly and remove or replace
            material where a claim is substantiated.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">5. Related Policies</h2>
          <p>
            See also our <Link to="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>{" "}
            (how content is produced and reviewed) and{" "}
            <Link to="/methodology" className="text-primary hover:underline">Methodology</Link> (how the test is scored).
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default CorrectionsPolicy;
