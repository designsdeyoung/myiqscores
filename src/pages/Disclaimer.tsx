import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPage from "@/components/ContentPage";
import Breadcrumb from "@/components/Breadcrumb";

const Disclaimer = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="Disclaimer | MyIQScores"
      description="MyIQScores provides educational IQ-style tests and cognitive scoring guides for entertainment and educational purposes only. Results are not clinical diagnoses."
      canonicalUrl="/disclaimer"
    />

    <Breadcrumb crumbs={[
      { label: "Home", href: "/" },
      { label: "Disclaimer" },
    ]} />

    <h1>Disclaimer</h1>
    <p className="text-muted-foreground text-sm">Last updated: May 21, 2026</p>

    <h2>Educational Purpose Only</h2>
    <p>
      The IQ-style tests, cognitive assessments, scoring guides, and all related content on MyIQScores.com
      ("the Site") are provided for <strong>educational and entertainment purposes only</strong>. The Site
      is not a clinical tool, medical service, psychological assessment service, or diagnostic platform of
      any kind.
    </p>
    <p>
      Results from tests on this Site are <strong>educational estimates</strong>, not clinically valid
      Intelligence Quotient (IQ) scores. They should not be used for any clinical, diagnostic, educational
      placement, legal, employment, or professional purpose.
    </p>

    <h2>Not a Clinical IQ Test</h2>
    <p>
      Clinically valid IQ tests (such as the WAIS-IV, Stanford-Binet 5, or WISC-V) are standardized,
      normed, and validated instruments administered by licensed psychologists under controlled conditions.
      The tests offered on this Site do not meet these standards and are not clinically equivalent to
      professionally administered intelligence assessments.
    </p>
    <p>
      If you require a clinically valid IQ assessment — for educational placement, disability evaluation,
      legal proceedings, or medical purposes — please contact a licensed psychologist or neuropsychologist.
    </p>

    <h2>No Medical or Psychological Advice</h2>
    <p>
      Nothing on this Site constitutes medical advice, psychological advice, or professional guidance of
      any kind. Content about IQ, cognitive abilities, conditions, and performance is provided for general
      informational and educational purposes only.
    </p>
    <p>
      If you have concerns about your cognitive health, learning disabilities, intellectual functioning,
      or mental health, please consult a qualified healthcare or mental health professional.
    </p>

    <h2>Score Accuracy and Limitations</h2>
    <p>
      IQ-style scores generated on this Site are estimates based on your responses to a set of reasoning
      questions. Many factors can affect performance on any given day, including but not limited to:
    </p>
    <ul>
      <li>Sleep deprivation or fatigue</li>
      <li>Test anxiety</li>
      <li>Language or cultural familiarity with the test format</li>
      <li>Educational background and access to formal schooling</li>
      <li>Distractions during testing</li>
      <li>Technical issues affecting the testing experience</li>
    </ul>
    <p>
      A single online test result should not be used to draw conclusions about your intelligence,
      capability, or potential. Cognitive ability is multidimensional and IQ is one measure of
      limited scope.
    </p>

    <h2>Content Accuracy</h2>
    <p>
      While we strive to provide accurate, research-based educational content, all information on this
      Site may contain errors, omissions, or information that has become outdated. We make no warranty
      about the completeness, reliability, or accuracy of the information published here.
    </p>
    <p>
      IQ scores attributed to famous individuals are published estimates based on publicly available
      information and secondary sources. They are not verified assessments and should be treated as
      educated speculation.
    </p>
    <p>
      Average IQ data by country, city, career, and demographic group is based on published research
      datasets that vary in methodology, sample size, and recency. Such data should be interpreted
      with appropriate caution.
    </p>

    <h2>No Warranties</h2>
    <p>
      This Site and all content are provided "as is" without any warranties, express or implied.
      MyIQScores makes no representations or warranties about the accuracy, completeness, reliability,
      suitability, or availability of the Site or the information on it for any purpose.
    </p>

    <h2>Third-Party Links</h2>
    <p>
      This Site may contain links to external websites. These links are provided for convenience and
      information only. MyIQScores has no control over, and accepts no responsibility for, the content
      of those sites.
    </p>

    <h2>Advertising</h2>
    <p>
      This Site uses Google AdSense to display advertisements. Google may use cookies to serve ads based
      on your prior visits to this website or other websites. For more information about Google's use of
      your data, visit <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google's advertising policy</a>.
      You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google's Ad Settings</a>.
    </p>

    <h2>Contact</h2>
    <p>
      If you have questions about this disclaimer, please <Link to="/contact">contact us</Link>.
      See also our <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
      <Link to="/terms-of-service">Terms of Service</Link>.
    </p>
  </ContentPage>
);

export default Disclaimer;
