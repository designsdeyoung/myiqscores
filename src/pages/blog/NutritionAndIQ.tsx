import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nutrition and IQ: How Diet Affects Brain Power and Cognitive Performance",
  description:
    "What you eat profoundly influences how your brain performs. From omega-3s to iron to iodine, here's what the science says about nutrition and IQ.",
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  author: { "@type": "Person", name: "MyIQScores Editorial Team", url: "https://www.myiqscores.com/about" },
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does diet affect IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, substantially. Nutritional deficiencies — particularly during prenatal development and early childhood — can permanently impair cognitive development and reduce IQ by 5–15 points or more. Key nutrients include iodine, iron, omega-3 fatty acids, zinc, and B vitamins. In adults, diet affects day-to-day cognitive performance rather than permanently altering IQ potential.",
      },
    },
    {
      "@type": "Question",
      name: "What foods improve brain function?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foods with the strongest evidence for supporting cognitive function include: fatty fish (omega-3 DHA), leafy greens (folate, vitamin K), eggs (choline, lutein), blueberries (flavonoids), nuts and seeds (vitamin E, healthy fats), and whole grains (steady glucose supply). The Mediterranean and MIND diets have the strongest overall evidence for cognitive health.",
      },
    },
    {
      "@type": "Question",
      name: "Does sugar lower IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excessive refined sugar consumption is associated with worse cognitive performance, particularly in areas of memory and attention. High-sugar diets cause blood glucose spikes followed by crashes that impair sustained cognitive performance. Chronic high sugar intake is also associated with insulin resistance in the brain, which may contribute to long-term cognitive decline.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best diet for brain health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MIND diet (Mediterranean-DASH Intervention for Neurodegenerative Delay) has the strongest evidence for cognitive health. It emphasizes leafy greens, other vegetables, nuts, berries, beans, whole grains, seafood, poultry, olive oil, and wine in moderation, while limiting red meat, butter, cheese, pastries, and fried food. Studies show it reduces Alzheimer's risk by up to 53%.",
      },
    },
  ],
};

const NutritionAndIQ = () => (
  <ContentPage
    relatedPages={[
      { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
      { title: "Sleep and IQ", href: "/blog/sleep-and-iq" },
      { title: "The Flynn Effect", href: "/blog/flynn-effect" },
      { title: "IQ and Genetics", href: "/blog/iq-genetics-nature-vs-nurture" },
    ]}
  >
    <SEOHead
      title="Nutrition and IQ: How Diet Affects Brain Power and Cognitive Performance | MyIQScores"
      description="What you eat shapes how your brain performs. From iodine deficiency to omega-3s to the MIND diet, here's the science on nutrition and intelligence."
      canonicalUrl="/blog/nutrition-and-iq"
      ogType="article"
      jsonLd={[articleSchema, faqSchema]}
    />

    <h1>Nutrition and IQ: How <span className="gradient-text">Diet Affects</span> Brain Power</h1>

    <p>
      The brain is the most metabolically expensive organ in the body, consuming roughly 20% of
      your total caloric intake despite representing only 2% of your body weight. It is exquisitely
      sensitive to the quality of the fuel it receives — and decades of research have established
      that nutrition profoundly influences cognitive development, day-to-day brain performance,
      and long-term cognitive health.
    </p>
    <p>
      The effects are largest during critical developmental windows — prenatal nutrition and early
      childhood — when deficiencies can permanently alter brain architecture and reduce IQ by
      measurable amounts. But dietary choices continue to affect cognitive performance throughout
      the lifespan, with diet emerging as one of the most modifiable risk factors for cognitive
      decline in older age.
    </p>

    <h2>Critical Nutrients for Brain Development</h2>
    <p>
      Several nutrients are so important for cognitive development that their deficiency — even
      moderate deficiency during critical periods — can produce lasting IQ reductions:
    </p>

    <h3>Iodine</h3>
    <p>
      Iodine deficiency is the world's leading preventable cause of intellectual disability. The
      thyroid gland requires iodine to produce thyroid hormones, which are essential for fetal
      brain development — particularly during the first trimester. Severe maternal iodine deficiency
      during pregnancy can reduce offspring IQ by 10–15 points. Even mild-to-moderate deficiency
      has been associated with 5–8 point IQ reductions in children.
    </p>
    <p>
      The <Link to="/blog/flynn-effect">Flynn Effect</Link> — the 20th-century rise in global IQ
      scores — is partly attributed to the widespread adoption of iodized salt starting in the
      1920s. This single public health intervention may be one of the largest population-level IQ
      increases ever achieved.
    </p>

    <h3>Iron</h3>
    <p>
      Iron is essential for myelination (the formation of the protective sheath around neurons)
      and for neurotransmitter synthesis. Iron deficiency anemia — affecting roughly 2 billion
      people worldwide — is associated with significantly reduced cognitive performance, attention,
      and learning ability in children. Studies find that iron supplementation in deficient children
      improves IQ scores by 3–8 points and substantially improves attention and learning.
    </p>

    <h3>Omega-3 Fatty Acids (DHA and EPA)</h3>
    <p>
      Docosahexaenoic acid (DHA) is a structural component of the brain, constituting about 40%
      of the polyunsaturated fatty acids in the brain and 60% of those in the retina. DHA is
      critical for neuronal membrane fluidity, synapse formation, and neurotransmitter function.
    </p>
    <p>
      Prenatal DHA status strongly predicts infant cognitive development. Children born to mothers
      with higher DHA levels during pregnancy show better problem-solving ability, attention, and
      language development. Multiple randomized controlled trials show that omega-3 supplementation
      improves cognitive performance in children with ADHD and in older adults at risk for cognitive
      decline.
    </p>

    <h3>Folate and B Vitamins</h3>
    <p>
      Folate (vitamin B9) is essential for neural tube development in early pregnancy. Deficiency
      causes neural tube defects and is associated with cognitive impairments. B12 deficiency —
      more common in vegetarians, vegans, and older adults — can cause significant cognitive
      impairment, which is often reversible with supplementation. Homocysteine, elevated by
      B-vitamin deficiencies, is directly neurotoxic and associated with accelerated brain atrophy.
    </p>

    <h3>Zinc</h3>
    <p>
      Zinc plays critical roles in neural signaling, particularly in the hippocampus (the brain
      region most important for memory formation). Zinc deficiency impairs learning and memory in
      children. Supplementation in deficient populations improves cognitive test performance.
    </p>

    <h2>Foods That Support Cognitive Performance</h2>
    <p>
      Beyond preventing deficiencies, certain foods have positive evidence for supporting cognitive
      function in well-nourished individuals:
    </p>

    <h3>Fatty Fish (Salmon, Mackerel, Sardines)</h3>
    <p>
      The best dietary source of pre-formed omega-3 DHA and EPA. Regular fish consumption is
      associated with better cognitive performance, slower cognitive decline with aging, and lower
      Alzheimer's risk. Aim for at least 2 servings per week.
    </p>

    <h3>Leafy Greens (Spinach, Kale, Arugula)</h3>
    <p>
      Rich in folate, vitamin K, lutein, and nitrates. A study of 960 older adults found that
      those who ate one serving of leafy greens daily had cognitive performance equivalent to
      someone 11 years younger. Vitamin K is particularly important for sphingolipid metabolism
      in brain cell membranes.
    </p>

    <h3>Eggs</h3>
    <p>
      Excellent source of choline — a nutrient critical for acetylcholine production
      (the neurotransmitter most important for learning and memory). Choline is also essential
      for fetal brain development, yet over 90% of Americans consume less than the adequate intake.
      Eggs also contain lutein, zeaxanthin, and B12.
    </p>

    <h3>Berries (Especially Blueberries)</h3>
    <p>
      Rich in flavonoids, particularly anthocyanins, which improve blood flow to the brain,
      reduce neuroinflammation, and protect neurons from oxidative stress. A Harvard study found
      that women who consumed 2+ servings of strawberries and blueberries weekly delayed cognitive
      aging by up to 2.5 years. Blueberries have also shown acute cognitive-boosting effects in
      randomized trials.
    </p>

    <h3>Nuts (Especially Walnuts)</h3>
    <p>
      Walnuts are particularly rich in plant-based omega-3 (ALA), vitamin E, and antioxidants.
      A UCLA study found that adults who ate walnuts regularly had significantly higher cognitive
      test scores. Nuts also provide magnesium, which supports synaptic plasticity and is often
      deficient in Western diets.
    </p>

    <h3>Dark Chocolate (70%+ Cacao)</h3>
    <p>
      Contains flavanols that increase cerebral blood flow and may improve working memory and
      processing speed. A study in Nature Neuroscience found that cocoa flavanols improved
      memory in healthy adults by improving function in the dentate gyrus, a hippocampal region
      that degrades with normal aging.
    </p>

    <h2>Foods That Harm Cognitive Performance</h2>
    <p>
      Just as certain foods support brain function, others consistently impair it:
    </p>

    <h3>Ultra-Processed Foods</h3>
    <p>
      Ultra-processed foods (chips, fast food, packaged snacks) are high in refined carbohydrates,
      trans fats, and additives, while low in micronutrients. High consumption is associated with
      accelerated cognitive decline, worse working memory, and higher dementia risk in multiple
      large longitudinal studies.
    </p>

    <h3>Excessive Sugar</h3>
    <p>
      Blood glucose spikes from high-sugar foods are followed by crashes that impair sustained
      attention and cognitive performance. Chronic high sugar intake is linked to insulin resistance
      in the brain ("type 3 diabetes"), which may contribute to cognitive decline and Alzheimer's
      risk. Research shows reducing sugar intake improves memory performance within weeks.
    </p>

    <h3>Trans Fats</h3>
    <p>
      Artificial trans fats (partially hydrogenated oils) impair cognitive function and are
      associated with higher Alzheimer's risk. While largely banned in many countries, they still
      appear in some processed foods. Trans fats reduce the fluidity of neuronal membranes,
      impairing neural signal transmission.
    </p>

    <h2>The Best Diets for Cognitive Health</h2>
    <p>
      Beyond individual foods, overall dietary patterns matter. Two dietary patterns have the
      strongest evidence for cognitive health:
    </p>
    <ul>
      <li>
        <strong>Mediterranean Diet</strong> — emphasizes vegetables, fruits, whole grains, fish,
        olive oil, nuts, and legumes; moderate wine; limited red meat and dairy. Associated with
        better cognitive performance and slower decline in observational studies.
      </li>
      <li>
        <strong>MIND Diet</strong> (Mediterranean-DASH Intervention for Neurodegenerative Delay) —
        a hybrid of the Mediterranean and DASH diets specifically optimized for brain health.
        Emphasizes leafy greens (6+ servings/week), other vegetables, nuts, berries, beans,
        whole grains, fish, poultry, and olive oil. Associated with up to 53% reduced Alzheimer's
        risk in strict adherents.
      </li>
    </ul>

    <h2>Practical Nutrition Strategies for Brain Health</h2>
    <ul>
      <li>Eat fatty fish 2+ times per week; supplement with omega-3s if you don't</li>
      <li>Aim for one serving of leafy greens daily</li>
      <li>Replace refined carbohydrates with whole grains to stabilize blood glucose</li>
      <li>Eat berries regularly — even frozen berries retain their flavonoid content</li>
      <li>Include eggs (unless restricted for medical reasons) for choline</li>
      <li>Minimize ultra-processed foods, added sugar, and artificial trans fats</li>
      <li>Stay well-hydrated — even mild dehydration impairs attention and short-term memory</li>
      <li>Consider B12 supplementation if you follow a plant-based diet</li>
    </ul>

    <h2>Frequently Asked Questions</h2>

    <h3>Does diet affect IQ?</h3>
    <p>
      Yes, especially during development. Nutritional deficiencies during prenatal life and early
      childhood can permanently reduce IQ by 5–15+ points. In adults, diet affects day-to-day
      performance rather than permanently altering IQ potential, though chronic poor diet
      accelerates cognitive aging. See our{" "}
      <Link to="/how-to-improve-iq">IQ improvement guide</Link> for more strategies.
    </p>

    <h3>What foods improve brain function?</h3>
    <p>
      Fatty fish, leafy greens, eggs, blueberries, nuts, and dark chocolate all have research
      support for cognitive benefits. The Mediterranean and MIND diets have the strongest
      overall evidence as dietary patterns.
    </p>

    <h3>Does sugar lower IQ?</h3>
    <p>
      Excessive refined sugar impairs cognitive performance acutely through glucose spikes and
      crashes, and chronically through promoting insulin resistance in the brain. Reducing
      sugar intake improves memory performance.
    </p>

    <h3>What is the best diet for brain health?</h3>
    <p>
      The MIND diet has the strongest evidence for cognitive health, associated with up to 53%
      reduced Alzheimer's risk in strict adherents. It emphasizes leafy greens, berries, nuts,
      fish, and olive oil while limiting processed foods, red meat, and sugar.
    </p>

    <p className="mt-8">
      Ready to see where your cognitive abilities stand today?{" "}
      <Link to="/test">Take our free IQ test</Link> — 30 questions, instant results.
    </p>
  </ContentPage>
);

export default NutritionAndIQ;
