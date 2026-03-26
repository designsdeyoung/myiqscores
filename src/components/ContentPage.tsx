import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import BackgroundEffect from "./BackgroundEffect";

interface ContentPageProps {
  children: React.ReactNode;
  ctaText?: string;
}

const ContentPage = ({
  children,
  ctaText = "Think you can score higher? Take the free IQ test",
}: ContentPageProps) => (
  <div className="relative min-h-screen">
    <BackgroundEffect />

    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Brain className="w-7 h-7 text-primary" />
          <span className="font-heading font-bold text-lg tracking-tight text-foreground">
            My<span className="text-primary">IQ</span>Scores
          </span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/what-is-iq" className="hover:text-foreground transition-colors">What Is IQ?</Link>
          <Link to="/iq-score-ranges" className="hover:text-foreground transition-colors">Score Ranges</Link>
          <Link to="/average-iq-by-country" className="hover:text-foreground transition-colors">By Country</Link>
          <Link to="/test" className="text-primary hover:text-primary/80 transition-colors font-medium">Take Test</Link>
        </div>
      </div>
    </nav>

    {/* Article Content */}
    <main className="relative z-10 pt-24 pb-16 px-4">
      <article className="max-w-3xl mx-auto prose-content">
        {children}
      </article>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <div className="glass-card p-8 text-center rounded-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            {ctaText}
          </h2>
          <p className="text-muted-foreground mb-6">
            30 questions. 15 minutes. Instant results. No sign-up required.
          </p>
          <Link to="/test" className="glow-button inline-block text-lg">
            Start Free IQ Test
          </Link>
        </div>
      </div>
    </main>

    {/* Footer */}
    <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] mt-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold text-foreground">
                My<span className="text-primary">IQ</span>Scores
              </span>
            </div>
            <p className="text-muted-foreground">
              Free, accurate IQ testing with instant results.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-3">Learn</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/what-is-iq" className="hover:text-foreground transition-colors">What Is IQ?</Link></li>
              <li><Link to="/iq-score-ranges" className="hover:text-foreground transition-colors">IQ Score Ranges</Link></li>
              <li><Link to="/average-iq-by-country" className="hover:text-foreground transition-colors">Average IQ by Country</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-3">Test</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/test" className="hover:text-foreground transition-colors">Take the Free IQ Test</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} MyIQScores. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
);

export default ContentPage;
