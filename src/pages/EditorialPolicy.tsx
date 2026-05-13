import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const EditorialPolicy = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="Editorial Policy — MyIQScores"
      description="Read the MyIQScores editorial policy for IQ guides, score explanations, estimates, corrections, and responsible content standards."
      canonicalUrl="/editorial-policy"
    />

    <h1>Editorial Policy</h1>
    <p>
      MyIQScores publishes educational content about IQ scores, cognitive testing, score ranges,
      famous IQ estimates, and related psychology topics. Our goal is to make the subject easier to
      understand while being clear about uncertainty and limits. Every article on this site is written
      to help readers — not to inflate scores, sensationalize results, or mislead about what online
      tests can and cannot measure.
    </p>

    <h2>Our Standards</h2>
    <ul>
      <li>We separate educational explanation from clinical advice.</li>
      <li>We avoid presenting online quiz results as official diagnoses or certified IQ scores.</li>
      <li>We label famous-person IQ figures as estimates unless a verified score is public.</li>
      <li>We update pages when we find unclear wording, broken links, or better source material.</li>
      <li>We prioritize plain-language explanations over sensational score claims.</li>
      <li>All statistics and specific numerical claims are attributed to their source publication.</li>
      <li>We do not publish content designed to flatter readers — accuracy takes precedence over engagement.</li>
    </ul>

    <h2>Review Process</h2>
    <p>
      Every article published on MyIQScores goes through a structured review process before it
      goes live. Draft articles are reviewed for factual accuracy, logical consistency, and alignment
      with current peer-reviewed research in cognitive psychology and psychometrics. Articles covering
      psychometric content — including IQ score interpretation, test design, and cognitive development —
      are reviewed by team members with backgrounds in cognitive science or educational psychology.
    </p>
    <p>
      We fact-check specific claims against primary peer-reviewed sources wherever possible. Where
      primary research is not available, we rely on established secondary sources such as publications
      from the American Psychological Association (APA), the National Institutes of Health (NIH),
      Nature, Science, and peer-reviewed journals including Intelligence, Psychological Science, and
      the Journal of Educational Psychology.
    </p>

    <h2>Source Quality Criteria</h2>
    <p>
      We apply a tiered approach to sourcing:
    </p>
    <ul>
      <li>
        <strong>Preferred:</strong> Primary peer-reviewed research published in indexed academic journals.
        Studies with large sample sizes, pre-registration, and independent replication are given the
        most weight.
      </li>
      <li>
        <strong>Acceptable:</strong> Systematic reviews and meta-analyses from established research
        institutions; guidance from recognized professional bodies (APA, NIH, APA Division 5); textbooks
        authored by recognized experts in psychometrics or cognitive psychology.
      </li>
      <li>
        <strong>Used with caveats:</strong> Reputable science journalism (Nature News, Scientific
        American) where it accurately reflects the underlying research. We note when findings are
        preliminary or contested.
      </li>
      <li>
        <strong>Not used:</strong> Anonymous blogs, pop-psychology content without citations, self-reported
        IQ claims by public figures, and any source that cannot be independently verified.
      </li>
    </ul>

    <h2>Sources and Estimates</h2>
    <p>
      Some IQ-related topics have strong public research behind them, while others rely on estimates
      or imperfect public records. Pages about score ranges, percentiles, and test types are written
      from standard psychometric concepts. Pages about public figures, careers, countries, and states
      are interpretive and should be read as educational context rather than verified measurements.
    </p>
    <p>
      For famous-person IQ estimates, we clearly label all figures as estimates and explain the basis
      for each estimate (e.g., academic records, self-reported claims, standardized test proxies).
      We do not present unverified scores as fact.
    </p>

    <h2>Expert Review</h2>
    <p>
      Psychometric content — including articles on IQ score interpretation, cognitive subtests, test
      reliability, and intelligence theory — is reviewed by editorial team members who hold backgrounds
      in cognitive science, educational psychology, or related fields. We consult established literature
      from researchers including Arthur Jensen, James Flynn, Richard Nisbett, Scott Barry Kaufman, and
      others when describing contested areas of intelligence research.
    </p>
    <p>
      When a topic is genuinely contested in the research literature (e.g., whether g-factor fully
      explains IQ variance, or whether IQ differences between groups reflect genetics or environment),
      we present multiple scientific perspectives rather than a single view, and note the current
      scientific consensus where one exists.
    </p>

    <h2>Corrections</h2>
    <p>
      We take accuracy seriously. If you notice a factual problem, unclear explanation, or page that
      needs more context, email{" "}
      <a href="mailto:content@myiqscores.com">content@myiqscores.com</a>. Include the page URL and a
      short explanation of the issue. We review correction requests and update content when the
      evidence supports a change.
    </p>
    <p>
      Material errors — defined as factual inaccuracies that could mislead a reader about a meaningful
      claim — are corrected within 48 hours of confirmation. Corrections are noted at the bottom of
      the relevant article with a brief description of what changed and the date of correction. Minor
      clarifications (wording improvements, broken links, formatting) are updated without a formal
      correction notice.
    </p>

    <h2>Update Schedule</h2>
    <p>
      The field of intelligence research continues to evolve. We review evergreen articles — those
      covering topics like IQ score ranges, cognitive testing methodology, nutrition and IQ, and
      the Flynn Effect — on an annual basis to ensure they reflect the current state of the research.
      Articles that cover rapidly changing topics (such as IQ and technology, or emerging neuroplasticity
      research) may be updated more frequently.
    </p>
    <p>
      When an article is substantially updated to reflect new research, the "last updated" date on the
      article is revised accordingly. All statistics are re-attributed to their source publication at
      the time of review.
    </p>

    <h2>Attribution Standards</h2>
    <p>
      All specific statistics, numerical findings, and research claims are attributed to their source
      publication. We link to primary sources wherever possible. When a specific study is cited (e.g.,
      "a 2019 meta-analysis in Psychological Science"), we provide enough information for a reader to
      locate the original work independently.
    </p>
    <p>
      General consensus statements — such as "the average IQ is set at 100" or "IQ is moderately
      heritable" — may not cite a single source because they reflect established consensus across
      many studies and professional standards.
    </p>

    <h2>Advertising Independence</h2>
    <p>
      Editorial content on MyIQScores is fully independent of advertising revenue. Our writers and
      editors do not receive direction from advertisers or advertising partners. Ad placements on our
      pages (including Google AdSense) do not influence which topics we cover, how we explain IQ
      scores, or what conclusions we draw from the research.
    </p>
    <p>
      Ads help support the free test and educational guides, but the editorial goal remains to provide
      useful, responsible information regardless of which ads happen to appear alongside it. Learn more
      about the site on our <Link to="/about">About page</Link> or review our{" "}
      <Link to="/privacy-policy">Privacy Policy</Link> for details on how advertising data is handled.
    </p>

    <h2>Conflict of Interest Policy</h2>
    <p>
      MyIQScores does not accept payment for editorial coverage, paid placements within articles, or
      sponsored reviews of IQ-related products or services. If we ever publish a sponsored piece
      (which we currently do not), it will be clearly labeled as such. Editorial decisions — including
      which topics to cover and how to cover them — are made independently of business relationships.
    </p>
  </ContentPage>
);

export default EditorialPolicy;
