import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { Brain, Mail, Shield, BookOpen, Users, Award } from "lucide-react";

const About = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="About MyIQScores™ — Our Mission, Team & Contact | MyIQScores"
      description="Learn about MyIQScores.com, our free IQ-style reasoning test, editorial standards, methodology, privacy practices, and contact options."
      canonicalUrl="/about"
    />

    <h1>About <span className="gradient-text">MyIQScores™</span></h1>

    <p>
      MyIQScores is a free educational site for IQ-style reasoning practice, score interpretation,
      and accessible guides to cognitive testing. Our mission is simple: make intelligence testing
      concepts easier to understand without hiding results behind a paywall or presenting an online
      quiz as a clinical assessment.
    </p>

    {/* Mission cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
      <div className="glass-card p-5 rounded-xl text-center">
        <Users className="w-8 h-8 text-primary mx-auto mb-3" />
        <p className="font-heading font-bold text-2xl text-foreground">Free</p>
        <p className="text-sm text-muted-foreground">No Paywall</p>
      </div>
      <div className="glass-card p-5 rounded-xl text-center">
        <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
        <p className="font-heading font-bold text-2xl text-foreground">1,000+</p>
        <p className="text-sm text-muted-foreground">Educational Pages</p>
      </div>
      <div className="glass-card p-5 rounded-xl text-center">
        <Award className="w-8 h-8 text-primary mx-auto mb-3" />
        <p className="font-heading font-bold text-2xl text-foreground">30</p>
        <p className="text-sm text-muted-foreground">Question Assessment</p>
      </div>
    </div>

    <h2>Our Mission</h2>
    <p>
      We believe everyone deserves access to quality cognitive assessment tools without paywalls,
      hidden fees, or misleading marketing. Most online IQ tests either charge excessive fees,
      inflate scores to make users share results, or provide no educational value beyond a number.
    </p>
    <p>
      MyIQScores is different. Our test is <strong>completely free</strong> — no credit card, no
      "premium unlock," no bait-and-switch. We provide your score instantly along with a detailed
      breakdown of your cognitive strengths, percentile ranking, and a downloadable certificate.
      And we back it up with 500+ pages of educational content about IQ, intelligence, and
      cognitive science.
    </p>

    <h2>Our Methodology</h2>
    <p>
      The MyIQScores assessment consists of 30 questions across multiple cognitive domains:
    </p>
    <ul>
      <li><strong>Logical Reasoning</strong> — pattern recognition and sequential logic</li>
      <li><strong>Spatial Reasoning</strong> — mental rotation and visual-spatial processing</li>
      <li><strong>Verbal Reasoning</strong> — vocabulary, analogies, and language comprehension</li>
      <li><strong>Numerical Reasoning</strong> — mathematical patterns and quantitative logic</li>
      <li><strong>Working Memory</strong> — information retention and manipulation</li>
    </ul>
    <p>
      Our questions are designed to correlate with established IQ tests while being accessible in an
      online format. While our test provides a reasonable estimate of cognitive ability, it is
      <strong> not a substitute for professional psychological evaluation</strong>. For a clinically
      validated IQ score, we recommend consulting a licensed psychologist who can administer the
      WAIS-IV or Stanford-Binet. Learn more about{" "}
      <Link to="/types-of-iq-tests">types of IQ tests</Link>.
    </p>

    <h2>Our Content</h2>
    <p>
      Beyond the IQ-style test, MyIQScores provides an educational resource about intelligence
      quotient:
    </p>
    <ul>
      <li><Link to="/what-is-iq">What Is IQ?</Link> — complete guide to intelligence quotient</li>
      <li><Link to="/iq-score-ranges">IQ Score Ranges</Link> — what every score means with percentiles</li>
      <li><Link to="/famous-iq">Famous People's IQs</Link> — 90+ celebrity IQ estimates</li>
      <li><Link to="/iq-by-career">IQ by Career</Link> — average IQ for 90+ professions</li>
      <li><Link to="/average-iq-by-country">Average IQ by Country</Link> — 50 country analysis</li>
      <li>IQ myths debunked, age-related IQ changes, and much more</li>
    </ul>
    <p>
      Our content is written to distinguish between established findings, practical estimates, and
      topics where public data is incomplete. Read our <Link to="/editorial-policy">editorial policy</Link>{" "}
      and <Link to="/methodology">test methodology</Link> for more detail.
    </p>

    <h2>Privacy & Trust</h2>
    <div className="glass-card p-5 rounded-xl my-6">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">We never sell your data.</strong> Your personal information
            is used only to deliver your test results. Period.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">No spam.</strong> We send your results and that's it.
            Unsubscribe anytime with one click.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Transparent scoring.</strong> We don't inflate scores to
            make you share. Your result reflects your actual performance.
          </p>
        </div>
      </div>
    </div>
    <p>
      Read our full <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
      <Link to="/terms-of-service">Terms of Service</Link>.
    </p>

    <h2>Contact Us</h2>
    <div className="glass-card p-6 rounded-xl my-6">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-6 h-6 text-primary" />
        <h3 className="font-heading font-bold text-lg text-foreground !mt-0 !mb-0">Get in Touch</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        We'd love to hear from you. Whether you have questions about your IQ score, feedback about
        the test, content suggestions, or business inquiries, we're here to help.
      </p>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li>
          <strong className="text-foreground">General inquiries:</strong>{" "}
          <a href="mailto:support@myiqscores.com" className="text-primary hover:underline">support@myiqscores.com</a>
        </li>
        <li>
          <strong className="text-foreground">Business & partnerships:</strong>{" "}
          <a href="mailto:business@myiqscores.com" className="text-primary hover:underline">business@myiqscores.com</a>
        </li>
        <li>
          <strong className="text-foreground">Content corrections:</strong>{" "}
          <a href="mailto:content@myiqscores.com" className="text-primary hover:underline">content@myiqscores.com</a>
        </li>
      </ul>
      <p className="text-xs text-muted-foreground/60 mt-4">
        We typically respond within 24-48 hours on business days.
      </p>
    </div>

    <h2>Our Editorial Team</h2>
    <p>
      MyIQScores content is produced and reviewed by a team with backgrounds in cognitive psychology,
      psychometrics, educational research, and science communication. All articles are cross-referenced
      against peer-reviewed literature before publication, and updated when new research warrants a
      revision. We do not publish content under invented names or unverifiable credentials.
    </p>
    <p>
      Our editorial process follows a tiered review system: factual claims must be traceable to a
      primary source (peer-reviewed journal, institutional report, or recognized reference work),
      statistical claims include the originating study, and any estimates — including IQ estimates
      for public figures — are clearly labeled as such. Read our full{" "}
      <Link to="/editorial-policy">Editorial Policy</Link> and{" "}
      <Link to="/methodology">Test Methodology</Link>.
    </p>

    <h2>About the Site</h2>
    <p>
      MyIQScores is an independent educational platform based in the United States, founded to make
      IQ concepts, psychometrics, and cognitive science accessible to a general audience. The site
      has no affiliation with Mensa International, the APA, or any clinical testing organization.
      Results from our free assessment are educational estimates, not clinical measurements.
    </p>

    <h2>Disclaimer</h2>
    <p>
      MyIQScores provides an online IQ estimate for entertainment and educational purposes. Our test
      is <strong>not a clinical diagnostic tool</strong> and should not be used for clinical diagnosis,
      educational placement, employment decisions, or any purpose requiring a validated psychological
      assessment. IQ estimates for famous individuals are based on published sources and expert
      analysis — they are approximations, not verified measurements.
    </p>
    <p>
      For a professionally administered, clinically validated IQ assessment, please consult a
      licensed psychologist in your area. Learn more about{" "}
      <Link to="/types-of-iq-tests">professional IQ testing options</Link>.
    </p>
  </ContentPage>
);

export default About;
