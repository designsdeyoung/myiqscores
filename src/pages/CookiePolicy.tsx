import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const CookiePolicy = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SEOHead
      title="Cookie Policy — MyIQScores"
      description="How MyIQScores.com uses cookies and similar technologies, including Google Analytics and advertising cookies, and how you can control them."
      canonicalUrl="/cookie-policy"
    />
    <BackgroundEffect />
    <Navbar />
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-foreground">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="text-muted-foreground text-sm mb-6">Last updated: August 28, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help websites
            remember your preferences, understand how visitors use the site, and, where advertising is shown,
            help select and measure ads. Similar technologies include local storage and pixels; we use the word
            "cookies" to cover all of these.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">2. Cookies We Use</h2>
          <p className="mb-3"><strong className="text-foreground">Analytics cookies (Google Analytics 4).</strong>{" "}
            We use Google Analytics to understand how visitors use the site — for example which pages are read,
            how long the quiz takes, and where visitors come from. These cookies collect information such as
            your approximate location, device and browser type, and pages visited. See the{" "}
            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Google cookie documentation
            </a>{" "}for details.
          </p>
          <p className="mb-3"><strong className="text-foreground">Advertising cookies (Google AdSense).</strong>{" "}
            We use, or plan to use, Google AdSense to display advertising that keeps the test free. Google and
            its certified ad partners may use cookies to serve ads, limit how often you see an ad, measure ad
            performance, and — where you have consented — personalize ads based on your visits to this and other
            websites. Learn more in{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              How Google uses information from sites that use its services
            </a>.
          </p>
          <p><strong className="text-foreground">Functional local storage.</strong>{" "}
            We use your browser's local storage for small conveniences — for example remembering a friend
            challenge code or an email you chose to save on the results page. This data stays in your browser
            and is not used for advertising.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">3. Consent in the EEA, UK, and Switzerland</h2>
          <p>
            If you visit from the European Economic Area, the United Kingdom, or Switzerland, analytics and
            advertising cookies are not used for personalization until you give consent. We use Google's
            consent framework (Consent Mode), and where ads are shown, a Google-certified consent message
            allows you to accept, refuse, or manage the purposes for which cookies are used. You can change
            your choice at any time via the consent or privacy options presented on the site.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">4. How to Control Cookies</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the consent controls shown on this site (where applicable in your region)</li>
            <li>
              Opt out of personalized Google ads at{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adssettings.google.com</a>
            </li>
            <li>
              Opt out of Google Analytics with the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GA opt-out browser add-on</a>
            </li>
            <li>Block or delete cookies in your browser settings (this may affect some site features)</li>
            <li>
              Manage third-party ad cookies via{" "}
              <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutads.info/choices</a>{" "}
              or{" "}
              <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">youronlinechoices.eu</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">5. More Information</h2>
          <p>
            For a full description of the personal data we process, see our{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. For how
            advertising works on this site, see our{" "}
            <Link to="/advertising-policy" className="text-primary hover:underline">Advertising Policy</Link>.
            Questions? Email{" "}
            <a href="mailto:privacy@myiqscores.com" className="text-primary hover:underline">privacy@myiqscores.com</a>.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default CookiePolicy;
