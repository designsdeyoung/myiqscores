import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const RELATED_PAGES = [
  { title: "Pattern Recognition Test", href: "/tests/pattern-recognition" },
  { title: "Logical Reasoning Test", href: "/tests/logical-reasoning" },
  { title: "Numerical Reasoning Test", href: "/tests/numerical-reasoning" },
  { title: "Verbal Reasoning Test", href: "/tests/verbal-reasoning" },
  { title: "Memory Test", href: "/tests/memory" },
  { title: "Free IQ Test", href: "/" },
  { title: "IQ by Career", href: "/iq-by-career" },
];

const faqItems = [
  {
    question: "What is spatial reasoning?",
    answer:
      "Spatial reasoning is the ability to mentally manipulate, rotate, and visualize two- and three-dimensional objects and their relationships in space. It's a core component of the Perceptual Reasoning Index in the WAIS-IV and maps to Visual-Spatial Intelligence (Gv) in the CHC model.",
  },
  {
    question: "What careers use spatial reasoning most?",
    answer:
      "Architecture, surgery, engineering, and design professions require exceptionally high spatial reasoning. Pilots, radiologists, dentists, sculptors, and mathematicians also depend heavily on spatial cognition. Research shows spatial ability predicts success in STEM fields better than verbal ability alone.",
  },
  {
    question: "Are men better at spatial reasoning than women?",
    answer:
      "On average, males score slightly higher on certain spatial tasks (mental rotation in particular), while females score equally or higher on others (spatial memory, for instance). This difference is smaller than stereotypes suggest, varies by task type, and is heavily influenced by training and experience.",
  },
  {
    question: "Can spatial reasoning be improved?",
    answer:
      "Yes, and spatial reasoning shows some of the largest training gains of any cognitive domain. Action video games, 3D puzzle solving, drafting/CAD work, and structured spatial training all produce measurable improvements. Tetris practice, in particular, has shown IQ-level gains in spatial tasks.",
  },
  {
    question: "How does spatial reasoning relate to IQ?",
    answer:
      "Spatial reasoning contributes to the Perceptual Reasoning Index (PRI) on the WAIS-IV, which is one of four primary components of full-scale IQ. Strong spatial ability is particularly important in STEM contexts and is a distinct factor from verbal and logical reasoning.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Spatial Reasoning Test: What It Measures and Which Careers Rely on It",
  description:
    "Understand what spatial reasoning tests measure, how visual-spatial intelligence (Gv) works, which careers require high spatial ability, and how to improve it.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const SpatialReasoning = () => (
  <>
    <SEOHead
      title="Spatial Reasoning Test: What It Measures & Which Careers Need It | MyIQScores"
      description="Learn what spatial reasoning tests measure, how visual-spatial intelligence works, which professions require high spatial IQ, and evidence-based ways to improve it."
      canonicalUrl="/tests/spatial-reasoning"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="Test your spatial reasoning — free IQ test, instant results"
      lastUpdated="May 2026"
      readingTime={5}
    >
      <h1>
        Spatial Reasoning Test:{" "}
        <span className="gradient-text">What It Measures</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Spatial reasoning is the ability to visualize and mentally manipulate objects in two and three dimensions. It's
        a strong predictor of success in engineering, surgery, architecture, and mathematics — and a distinct cognitive
        dimension that standard verbal IQ tests often underweight.
      </p>

      <h2>What Spatial Reasoning Tests Measure</h2>
      <p>
        Spatial reasoning, formally called <strong>Visual-Spatial Intelligence (Gv)</strong> in the CHC model, includes
        several distinct abilities:
      </p>
      <ul>
        <li><strong>Mental rotation</strong> — rotating a 3D object in your mind to determine its orientation</li>
        <li><strong>Spatial visualization</strong> — imagining how a 2D shape would look when folded into 3D</li>
        <li><strong>Spatial relations</strong> — rapidly comparing shapes to determine if they are the same object</li>
        <li><strong>Closure speed</strong> — identifying an incomplete figure as a recognizable object</li>
        <li><strong>Perceptual speed</strong> — quickly matching identical visual stimuli</li>
      </ul>
      <p>
        In the WAIS-IV, spatial tasks appear in the <strong>Perceptual Reasoning Index (PRI)</strong>, which includes
        Block Design, Matrix Reasoning, and Picture Completion subtests.
      </p>

      <h2>Spatial Reasoning and STEM Careers</h2>
      <p>
        A landmark longitudinal study (Project TALENT, followed participants for 50 years) found that spatial ability
        in adolescence predicted STEM career entry and achievement equally as well as mathematical ability — and better
        than verbal ability. Fields with especially high spatial demands include:
      </p>
      <ul>
        <li>Surgery and dentistry (3D anatomy visualization)</li>
        <li>Architecture and structural engineering</li>
        <li>Aviation and air traffic control</li>
        <li>Radiology and diagnostic imaging</li>
        <li>Mechanical and chemical engineering</li>
        <li>Game design and 3D animation</li>
      </ul>
      <p>
        See our <Link to="/iq-by-career">IQ by career page</Link> for how these fields rank on cognitive demand.
      </p>

      <h2>Common Spatial Reasoning Questions</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-3 text-muted-foreground">
          <li><strong>Mental rotation:</strong> "Which of these four shapes is the same object rotated?" (presented with 3D wire-frame figures)</li>
          <li><strong>Paper folding:</strong> "A piece of paper is folded and punched; which answer shows where the holes appear when unfolded?"</li>
          <li><strong>3D visualization:</strong> "Which 3D cube can be made from this flat net?"</li>
          <li><strong>Block design:</strong> "Arrange blocks to match this 2D pattern"</li>
        </ul>
      </div>

      <h2>How to Improve Spatial Reasoning</h2>
      <p>
        Spatial reasoning shows some of the largest training gains of any cognitive ability. Evidence-backed methods:
      </p>
      <ul>
        <li><strong>Action video games</strong> — FPS and action-puzzle games improve spatial attention and rotation speed</li>
        <li><strong>Tetris</strong> — meta-analyses show reliable spatial IQ gains from Tetris practice</li>
        <li><strong>3D puzzles</strong> — jigsaw puzzles (especially 3D), Soma cubes, and LEGO builds</li>
        <li><strong>Drafting and CAD software</strong> — working in 3D modeling environments builds mental rotation fluency</li>
        <li><strong>Origami and spatial drawing</strong> — paper folding and perspective drawing directly train the mental folding ability tested in psychometric tasks</li>
      </ul>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default SpatialReasoning;
