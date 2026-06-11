import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const Methodology = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="IQ Test Methodology: How MyIQScores Estimates Results"
      description="Learn how the MyIQScores free IQ-style test is structured, what it measures, how results are estimated, and where online testing has limits."
      canonicalUrl="/methodology"
    />

    <h1>IQ Test Methodology</h1>
    <p>
      MyIQScores provides an online IQ-style reasoning estimate for educational use. The test is
      designed to help visitors practice common cognitive question formats and understand how score
      ranges work, not to replace a professionally administered assessment.
    </p>

    <h2>What the Test Measures</h2>
    <p>
      The assessment includes 30 questions across five broad cognitive domains. Each domain mirrors a
      skill commonly represented in standardized cognitive testing, while staying suitable for a
      short online format.
    </p>
    <ul>
      <li><strong>Pattern recognition:</strong> identifying visual, numerical, or symbolic rules.</li>
      <li><strong>Logical reasoning:</strong> applying rules and eliminating inconsistent answers.</li>
      <li><strong>Spatial reasoning:</strong> mentally rotating, comparing, or completing shapes.</li>
      <li><strong>Numerical reasoning:</strong> recognizing quantitative relationships and sequences.</li>
      <li><strong>Working memory:</strong> holding and manipulating information during a problem.</li>
    </ul>

    <h2>How Results Are Estimated</h2>
    <p>
      Results are based on answer accuracy, question difficulty, and completion time. The final score
      is mapped to familiar IQ score ranges so visitors can understand whether a result is around
      average, above average, gifted, or unusually high.
    </p>
    <p>
      Because this is a web-based estimate, the result should be interpreted as a learning aid. Test
      environment, fatigue, device size, prior exposure to similar questions, language background,
      and distractions can all affect performance.
    </p>

    <h2>What This Test Is Not</h2>
    <p>
      MyIQScores is not a clinical instrument and has not been normed in the same way as the
      WAIS, WISC, Stanford-Binet, or Raven's Progressive Matrices. It should not be used for medical
      diagnosis, school placement, hiring, disability evaluation, or any decision requiring a
      licensed professional.
    </p>

    <h2>Professional IQ Testing</h2>
    <p>
      A formal IQ score should come from a licensed psychologist or qualified examiner using a
      validated test battery under controlled conditions. If you need an official result, start with
      our guide to <Link to="/types-of-iq-tests">types of IQ tests</Link> and then contact a local
      licensed clinician or school psychologist.
    </p>

    <h2>How We Compile Celebrity and Public Figure IQ Estimates</h2>
    <p>
      None of the public figures featured on our <Link to="/famous-iq">famous IQ pages</Link> have
      released verified, professionally administered test results, with very rare exceptions noted on
      the individual page. Every figure we publish is an estimate, and we present it that way. Each
      estimate is compiled from publicly available signals: documented academic records and admission
      test scores where they exist, historiometric studies such as the Cox (1926) analysis of
      historical geniuses, statements the person or their biographers have made, and the cognitive
      demands of their documented achievements. Where credible sources disagree, we publish a range
      rather than a single number, and we widen the range when the underlying evidence is thin.
    </p>
    <p>
      These estimates are for education and entertainment. They should never be read as measured
      scores, and a disclaimer to that effect appears on every celebrity page.
    </p>

    <h2>How We Build Data Pages</h2>
    <p>
      Pages covering average IQ by <Link to="/average-iq-by-country">country</Link>,{" "}
      <Link to="/average-iq-by-state">US state</Link>, <Link to="/iq-by-career">career</Link>, and{" "}
      <Link to="/iq-by-major">college major</Link> draw on published research: international cognitive
      assessment datasets, NAEP and standardized testing patterns, and occupational studies that
      report group averages. Group averages describe distributions, not individuals, and sampling
      methods vary between studies, so we present these figures as estimates with context rather than
      precise measurements. Percentile and rarity figures on score pages are calculated directly from
      the normal distribution with a mean of 100 and a standard deviation of 15, which is the
      convention used by major modern IQ tests.
    </p>

    <h2>How We Improve the Test</h2>
    <p>
      We review question clarity, completion patterns, user feedback, and result explanations over
      time. When a question is confusing, ambiguous, or too dependent on cultural knowledge, it can
      be revised or removed. Content corrections can be sent to{" "}
      <a href="mailto:content@myiqscores.com">content@myiqscores.com</a>.
    </p>
  </ContentPage>
);

export default Methodology;
