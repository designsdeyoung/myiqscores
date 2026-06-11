import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const posts = blogPosts;

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
