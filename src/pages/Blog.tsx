import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const posts = [
  // Original 8 articles
  { slug: "what-is-iq-score", category: "Science", categoryColor: "hsl(var(--primary))", title: "What Is an IQ Score? The Complete Scientific Explanation", excerpt: "IQ scores measure specific cognitive abilities — but what exactly are they measuring, and how accurate are they?", readTime: "8 min read", date: "April 6, 2026" },
  { slug: "how-to-increase-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Can You Actually Increase Your IQ? What the Research Says", excerpt: "The science is more nuanced than most headlines suggest. Here's what actually works.", readTime: "10 min read", date: "April 6, 2026" },
  { slug: "iq-vs-success", category: "Research", categoryColor: "#F59E0B", title: "IQ vs. Success: Does a Higher IQ Mean a Better Life?", excerpt: "The correlation between IQ and life outcomes is real — but much weaker than most people assume.", readTime: "7 min read", date: "April 6, 2026" },
  { slug: "famous-iq-scores", category: "Famous IQs", categoryColor: "#EC4899", title: "The Most Surprising Celebrity IQ Scores Ever Revealed", excerpt: "Some of the smartest (and least expected) IQ scores from entertainers, athletes, and world leaders.", readTime: "6 min read", date: "April 6, 2026" },
  { slug: "iq-by-country", category: "Research", categoryColor: "#F59E0B", title: "IQ by Country: Why Nations Score Differently", excerpt: "Average IQ varies dramatically by nation. The reasons are more about policy than genetics.", readTime: "9 min read", date: "April 6, 2026" },
  { slug: "what-is-genius-iq", category: "Science", categoryColor: "hsl(var(--primary))", title: "What Is a Genius IQ? The History, Science & Reality", excerpt: "The word genius gets thrown around constantly — but what does a genius-level IQ actually mean?", readTime: "8 min read", date: "April 6, 2026" },
  { slug: "iq-tests-accurate", category: "Science", categoryColor: "hsl(var(--primary))", title: "Are IQ Tests Actually Accurate? A Balanced Look", excerpt: "IQ tests have been praised and criticized for decades. Here's what psychologists actually know.", readTime: "11 min read", date: "April 6, 2026" },
  { slug: "emotional-intelligence-vs-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Emotional Intelligence vs IQ: Which Matters More?", excerpt: "EQ vs IQ is one of psychology's great debates. The answer depends on what you're trying to do.", readTime: "7 min read", date: "April 6, 2026" },
  // New articles
  { slug: "fluid-vs-crystallized-intelligence", category: "Science", categoryColor: "hsl(var(--primary))", title: "Fluid vs. Crystallized Intelligence: What's the Difference?", excerpt: "Two distinct cognitive abilities explain why IQ changes across the lifespan — and what you can do about it.", readTime: "9 min read", date: "April 10, 2026" },
  { slug: "flynn-effect", category: "Research", categoryColor: "#F59E0B", title: "The Flynn Effect: Why Average IQ Scores Have Been Rising for Decades", excerpt: "Global IQ rose ~3 points per decade through the 20th century. What caused it — and is it reversing?", readTime: "10 min read", date: "April 12, 2026" },
  { slug: "iq-genetics-nature-vs-nurture", category: "Science", categoryColor: "hsl(var(--primary))", title: "IQ and Genetics: Nature vs. Nurture — What Science Actually Says", excerpt: "How much of your IQ is genetic? Twin studies and GWAS research reveal the surprising truth.", readTime: "11 min read", date: "April 14, 2026" },
  { slug: "sleep-and-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Sleep and IQ: How Rest Affects Your Cognitive Performance", excerpt: "Sleep deprivation can temporarily lower IQ by 5–15 points. Here's exactly how sleep shapes intelligence.", readTime: "9 min read", date: "April 16, 2026" },
  { slug: "nutrition-and-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Nutrition and IQ: How Diet Affects Brain Power", excerpt: "What you eat profoundly influences brain performance. From omega-3s to iodine, here's what science shows.", readTime: "10 min read", date: "April 18, 2026" },
  { slug: "iq-and-mental-health", category: "Research", categoryColor: "#F59E0B", title: "IQ and Mental Health: What Research Shows About the Connection", excerpt: "Depression, anxiety, and ADHD measurably affect IQ scores. The relationship is more nuanced than you'd expect.", readTime: "9 min read", date: "April 20, 2026" },
  { slug: "iq-and-workplace", category: "Research", categoryColor: "#F59E0B", title: "IQ in the Workplace: What Employers and Employees Need to Know", excerpt: "IQ is one of the strongest predictors of job performance ever studied. Here's what the research shows.", readTime: "10 min read", date: "April 22, 2026" },
  { slug: "working-memory-and-iq", category: "Science", categoryColor: "hsl(var(--primary))", title: "Working Memory and IQ: The Hidden Link Between Memory and Intelligence", excerpt: "Working memory is one of the strongest predictors of IQ — and it's trainable.", readTime: "9 min read", date: "April 24, 2026" },
  { slug: "iq-testing-in-children", category: "Science", categoryColor: "hsl(var(--primary))", title: "IQ Testing in Children: What Parents and Educators Need to Know", excerpt: "When is IQ testing appropriate? What do scores mean? What are the limitations? A complete guide.", readTime: "10 min read", date: "April 26, 2026" },
  { slug: "exercise-and-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Exercise and IQ: How Physical Activity Boosts Cognitive Performance", excerpt: "Aerobic exercise reliably improves fluid intelligence. Research reveals exactly how movement changes the brain.", readTime: "9 min read", date: "April 28, 2026" },
  { slug: "multiple-intelligences-theory", category: "Science", categoryColor: "hsl(var(--primary))", title: "Multiple Intelligences Theory: What Gardner Said vs. What Science Shows", excerpt: "Howard Gardner's famous theory is widely taught but widely misunderstood. Here's the honest assessment.", readTime: "10 min read", date: "April 29, 2026" },
  { slug: "iq-and-creativity", category: "Research", categoryColor: "#F59E0B", title: "IQ and Creativity: Are More Intelligent People More Creative?", excerpt: "Research reveals a surprising threshold effect in the IQ-creativity relationship — and what drives genius-level creativity.", readTime: "9 min read", date: "April 29, 2026" },
  { slug: "iq-and-leadership", category: "Research", categoryColor: "#F59E0B", title: "IQ and Leadership: Does Intelligence Make a Better Leader?", excerpt: "IQ predicts leadership — but only up to a point. Research reveals what actually distinguishes great leaders.", readTime: "9 min read", date: "April 30, 2026" },
  { slug: "can-you-raise-your-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Can You Actually Raise Your IQ? The Science Behind Neuroplasticity", excerpt: "Neuroplasticity research suggests targeted training can improve specific cognitive abilities. But does it actually raise your IQ score?", readTime: "9 min read", date: "May 1, 2026" },
  { slug: "history-of-iq-testing", category: "Science", categoryColor: "hsl(var(--primary))", title: "The History of IQ Testing: From Binet to Modern Assessments", excerpt: "IQ testing began in 1905 as a tool to identify students needing help. How did it become one of the most debated measures in psychology?", readTime: "11 min read", date: "May 3, 2026" },
  { slug: "iq-and-income", category: "Research", categoryColor: "#F59E0B", title: "IQ and Income: Does Higher Intelligence Mean Higher Earnings?", excerpt: "The IQ-income correlation is real but modest. Understanding the mechanisms — and the exceptions — reveals what intelligence actually predicts.", readTime: "10 min read", date: "May 6, 2026" },
  { slug: "gifted-children-iq", category: "Science", categoryColor: "hsl(var(--primary))", title: "Gifted Children and IQ: Identification, Development, and What Parents Should Know", excerpt: "What does it actually mean for a child to be cognitively gifted? How should parents and educators respond to high IQ scores?", readTime: "10 min read", date: "May 8, 2026" },
  { slug: "iq-and-longevity", category: "Research", categoryColor: "#F59E0B", title: "IQ and Longevity: Why Smarter People Tend to Live Longer", excerpt: "Childhood IQ is one of the strongest predictors of mortality in old age. The reasons are surprising — and largely modifiable.", readTime: "9 min read", date: "May 10, 2026" },
];

const topicClusters = [
  {
    title: "IQ fundamentals",
    links: [
      { title: "What Is IQ?", href: "/what-is-iq" },
      { title: "IQ Score Ranges", href: "/iq-score-ranges" },
      { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
      { title: "Types of IQ Tests", href: "/types-of-iq-tests" },
    ],
  },
  {
    title: "Score interpretation",
    links: [
      { title: "Is 100 IQ Good?", href: "/is-100-iq-good" },
      { title: "Is 120 IQ Good?", href: "/is-120-iq-good" },
      { title: "Is 130 IQ Good?", href: "/is-130-iq-good" },
      { title: "What Is a Genius IQ?", href: "/genius-iq" },
    ],
  },
  {
    title: "Comparisons and data",
    links: [
      { title: "Average IQ by Country", href: "/average-iq-by-country" },
      { title: "Average IQ by State", href: "/average-iq-by-state" },
      { title: "IQ by Career", href: "/iq-by-career" },
      { title: "Famous IQ Scores", href: "/famous-iq" },
    ],
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "IQ Blog",
  url: "https://www.myiqscores.com/blog",
  description:
    "Research-backed IQ guides covering score interpretation, cognitive testing, intelligence myths, and practical learning resources.",
  hasPart: posts.map((post, index) => ({
    "@type": "BlogPosting",
    position: index + 1,
    headline: post.title,
    description: post.excerpt,
    url: `https://www.myiqscores.com/blog/${post.slug}`,
    datePublished: "2026-04-06",
    dateModified: "2026-04-30",
    author: { "@type": "Person", name: "MyIQScores Editorial Team", url: "https://www.myiqscores.com/about" },
  })),
};

const Blog = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="IQ Blog: Science, Research & Insights | MyIQScores"
      description="Explore IQ science, research, and insights. Learn about cognitive psychology, brain training, famous IQs, and what intelligence really means."
      canonicalUrl="/blog"
      ogType="website"
      jsonLd={blogSchema}
    />

    {/* Header */}
    <div className="relative overflow-hidden py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Intelligence. Explained.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The <span className="gradient-text">IQ Blog</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Deep dives into cognitive science, IQ research, brain training, and what
          intelligence really means for your life and career.
        </p>
      </motion.div>
    </div>

    {/* Posts Grid */}
    <div className="max-w-5xl mx-auto px-4 pb-20">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Start With a Topic</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topicClusters.map((cluster) => (
            <div key={cluster.title} className="glass-card rounded-2xl p-5">
              <h3 className="font-heading font-semibold text-foreground mb-3">{cluster.title}</h3>
              <ul className="space-y-2 text-sm">
                {cluster.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
          >
            {/* Category badge */}
            <span
              className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: `${post.categoryColor}22`, color: post.categoryColor }}
            >
              {post.category}
            </span>

            {/* Title */}
            <Link to={`/blog/${post.slug}`} className="group">
              <h2 className="text-base font-bold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
              <span>{post.readTime}</span>
              <span>{post.date}</span>
            </div>

            {/* CTA */}
            <Link
              to={`/blog/${post.slug}`}
              className="text-sm font-semibold text-primary hover:underline mt-1"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
