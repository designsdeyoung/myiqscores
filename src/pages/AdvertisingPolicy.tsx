import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const AdvertisingPolicy = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SEOHead
      title="Advertising Policy — MyIQScores"
      description="How advertising works on MyIQScores.com: Google AdSense, ad labeling, placement standards, and the separation between ads and editorial content."
      canonicalUrl="/advertising-policy"
    />
    <BackgroundEffect />
    <Navbar />
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-foreground">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8">Advertising Policy</h1>
      <p className="text-muted-foreground text-sm mb-6">Last updated: August 28, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">1. Why We Show Ads</h2>
          <p>
            MyIQScores.com is free to use — there is no paywall on the test or on any article. Advertising is
            how we fund the site. We aim to keep ads clearly separated from content and never let advertisers
            influence what we write.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">2. Our Advertising Partner</h2>
          <p>
            Display advertising on this site is served through{" "}
            <strong className="text-foreground">Google AdSense</strong>. Google and its certified partners
            select the ads shown; we do not choose individual advertisers. Where required by law, personalized
            advertising is only shown with your consent — see our{" "}
            <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> and{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">3. Our Placement Standards</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ads are labeled and visually distinct from quiz questions, results, and article content</li>
            <li>Ads are never placed where they could be mistaken for quiz answers, navigation, or buttons</li>
            <li>We do not use pop-ups that block content, auto-redirects, or ads that require dismissal to continue</li>
            <li>During the test, ad positions are limited and kept away from answer options and the Next button</li>
            <li>We do not artificially refresh or reload ads to inflate impressions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">4. Editorial Independence</h2>
          <p>
            Advertisers have no influence over our editorial content, quiz questions, or scores. We do not
            publish sponsored content presented as editorial. If we ever publish sponsored material, it will be
            clearly labeled as such. See our{" "}
            <Link to="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">5. Other Revenue</h2>
          <p>
            In addition to advertising, we offer optional paid extras (a detailed score report and a printable
            certificate) processed securely through Stripe. These are optional purchases — the test and your
            results are always free.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">6. Reporting a Problem Ad</h2>
          <p>
            If you see an ad on this site that is inappropriate, misleading, or broken, please email{" "}
            <a href="mailto:support@myiqscores.com" className="text-primary hover:underline">support@myiqscores.com</a>{" "}
            with the page URL and a description (a screenshot helps). We will review and, where possible, block
            the ad category or advertiser.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default AdvertisingPolicy;
