import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SEOHead
      title="Privacy Policy — MyIQScores"
      description="Privacy Policy for MyIQScores.com. Learn how we collect, use, and protect your personal data."
      canonicalUrl="https://myiqscores.com/privacy-policy"
    />
    <BackgroundEffect />
    <Navbar />
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-foreground">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-6">Last updated: March 27, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">1. Who We Are</h2>
          <p>MyIQScores ("we," "us," or "our") operates the website myiqscores.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our IQ test service.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-2">We collect the following personal data when you voluntarily provide it:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Name</strong> — to personalize your results</li>
            <li><strong className="text-foreground">Email address</strong> — to deliver your IQ results and optional communications</li>
            <li><strong className="text-foreground">Age range</strong> — to calibrate scoring based on age norms</li>
            <li><strong className="text-foreground">Quiz answers &amp; IQ score</strong> — to generate and store your results</li>
            <li><strong className="text-foreground">Payment information</strong> — processed securely by Stripe; we never store card details</li>
          </ul>
          <p className="mt-3">We also automatically collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address and approximate location (via analytics)</li>
            <li>Browser type, device info, and pages visited</li>
            <li>Cookies and similar tracking technologies (Google Analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide, operate, and improve our IQ test service</li>
            <li>To deliver your test results and personalized reports</li>
            <li>To process payments via Stripe for premium features</li>
            <li>To send you your results and, if you consent, occasional educational content</li>
            <li>To analyze usage patterns and improve user experience (Google Analytics)</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">4. Legal Basis for Processing (GDPR)</h2>
          <p>If you are in the European Economic Area (EEA) or UK, we process your personal data based on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Consent</strong> — you provide explicit consent when submitting your information to take the test</li>
            <li><strong className="text-foreground">Contract performance</strong> — processing necessary to deliver the service you requested</li>
            <li><strong className="text-foreground">Legitimate interest</strong> — analytics and service improvement, balanced against your rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">5. Data Sharing &amp; Third Parties</h2>
          <p>We do not sell your personal data. We share data only with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Stripe</strong> — for secure payment processing (<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe Privacy Policy</a>)</li>
            <li><strong className="text-foreground">Google Analytics</strong> — for anonymized website usage analytics (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a>)</li>
            <li><strong className="text-foreground">Infrastructure providers</strong> — for hosting and data storage, with appropriate safeguards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">6. Your Rights</h2>
          <p className="mb-2">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to or restrict processing</li>
            <li>Data portability (receive your data in a structured format)</li>
            <li>Lodge a complaint with a supervisory authority (EEA/UK residents)</li>
            <li>Opt out of the "sale" of personal information (California residents under CCPA)</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:privacy@myiqscores.com" className="text-primary hover:underline">privacy@myiqscores.com</a>.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">7. Cookies</h2>
          <p>We use cookies and similar technologies for analytics (Google Analytics). You can manage cookie preferences through your browser settings. Disabling cookies may affect some site functionality.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">8. Data Retention</h2>
          <p>We retain your personal data for as long as necessary to provide our services and fulfill the purposes described in this policy. You may request deletion at any time by contacting us.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">9. Data Security</h2>
          <p>We implement industry-standard security measures including encryption in transit (TLS/SSL), secure database access controls, and limited access to personal data. No method of transmission over the internet is 100% secure, but we strive to protect your information.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">10. International Transfers</h2>
          <p>Your data may be processed in countries outside your own. We ensure appropriate safeguards are in place, including standard contractual clauses where required by GDPR.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">11. Children's Privacy</h2>
          <p>Our service is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal data, please contact us and we will delete it.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">12. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last updated" date. Continued use of the site after changes constitutes acceptance.</p>
        </section>

        <section>
          <h2 className="text-foreground font-heading text-xl font-semibold mb-3">13. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:</p>
          <p className="mt-2"><a href="mailto:privacy@myiqscores.com" className="text-primary hover:underline">privacy@myiqscores.com</a></p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
