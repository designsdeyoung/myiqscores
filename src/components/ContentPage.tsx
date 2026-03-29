import { Link } from "react-router-dom";
import { Brain, ArrowRight } from "lucide-react";
import BackgroundEffect from "./BackgroundEffect";
import AdUnit from "./AdUnit";
import { AD_SLOTS } from "@/config/adsense";

interface ContentPageProps {
  children: React.ReactNode;
  ctaText?: string;
  relatedPages?: { title: string; href: string }[];
  showLeaderboard?: boolean;
  showSidebar?: boolean;
}

const ContentPage = ({
  children,
  ctaText = "Think you can score higher? Take the free IQ test",
  relatedPages,
  showLeaderboard = true,
  showSidebar = true,
}: ContentPageProps) => (
  <div className="relative min-h-screen">
    <BackgroundEffect />

    {/* Sticky Test Banner - appears on scroll */}
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
      <Link
        to="/test"
        className="block w-full py-3 px-4 text-center font-heading font-bold text-sm text-primary-foreground"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
      >
        Take Free IQ Test <ArrowRight className="w-4 h-4 inline ml-1" />
      </Link>
    </div>

    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
          <div>
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-foreground">
              My<span className="text-primary">IQ</span>Scores<sup className="text-[8px] text-muted-foreground/50 ml-0.5">™</sup>
            </span>
            <span className="hidden sm:block text-[10px] text-muted-foreground/70 -mt-0.5 tracking-wide">
              The Most Accurate Free IQ Test Online
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
          <Link to="/what-is-iq" className="hover:text-foreground transition-colors hidden sm:block">What Is IQ?</Link>
          <Link to="/iq-score-ranges" className="hover:text-foreground transition-colors hidden sm:block">Score Ranges</Link>
          <Link to="/average-iq-by-country" className="hover:text-foreground transition-colors hidden sm:block">By Country</Link>
          <Link to="/test" className="glow-button !px-4 !py-2 !text-sm !rounded-lg">Free IQ Test</Link>
        </div>
      </div>
    </nav>

    {/* Article Content */}
    <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:pb-16 pb-24">
      {/* Leaderboard ad — top of content */}
      {showLeaderboard && (
        <div className="max-w-3xl mx-auto mb-6">
          <AdUnit
            slotId={AD_SLOTS.leaderboard}
            format="display"
            size="responsive"
            className="!my-0 hidden sm:block"
          />
          <AdUnit
            slotId={AD_SLOTS.leaderboard}
            format="display"
            size="320x50"
            className="!my-0 sm:hidden"
          />
        </div>
      )}

      <div className="max-w-5xl mx-auto flex gap-8">
        {/* Main content */}
        <article className="max-w-3xl w-full prose-content overflow-x-hidden">
          {children}
        </article>

        {/* Sticky sidebar ad — desktop only */}
        {showSidebar && (
          <aside className="hidden lg:block w-[300px] flex-shrink-0">
            <div className="sticky top-20">
              <AdUnit slotId={AD_SLOTS.sidebar} format="display" size="300x250" />
            </div>
          </aside>
        )}
      </div>

      {/* Related Pages Section */}
      {relatedPages && relatedPages.length > 0 && (
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="glass-card p-4 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {page.title}
                </span>
                <ArrowRight className="w-3 h-3 inline ml-2 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-12">
        <div className="glass-card p-6 sm:p-8 text-center rounded-2xl">
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

    {/* Multiplex ad — above footer */}
    <div className="max-w-5xl mx-auto px-4">
      <AdUnit slotId={AD_SLOTS.multiplex} format="multiplex" size="responsive" />
    </div>

    {/* Footer */}
    <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] mt-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold text-foreground">
                My<span className="text-primary">IQ</span>Scores<sup className="text-[8px] text-muted-foreground/50 ml-0.5">™</sup>
              </span>
            </div>
            <p className="text-muted-foreground">
              Free, accurate IQ testing with instant results.
            </p>
            <Link to="/test" className="inline-block mt-3 text-primary hover:text-primary/80 font-medium transition-colors">
              Take the Free IQ Test →
            </Link>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-3">Learn</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/what-is-iq" className="hover:text-foreground transition-colors">What Is IQ?</Link></li>
              <li><Link to="/iq-score-ranges" className="hover:text-foreground transition-colors">IQ Score Ranges</Link></li>
              <li><Link to="/average-iq-by-country" className="hover:text-foreground transition-colors">Average IQ by Country</Link></li>
              <li><Link to="/iq-by-career" className="hover:text-foreground transition-colors">IQ by Career</Link></li>
              <li><Link to="/famous-iq" className="hover:text-foreground transition-colors">Famous People IQs</Link></li>
              <li><Link to="/iq-percentile-chart" className="hover:text-foreground transition-colors">IQ Percentile Chart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-3">Guides</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/test" className="hover:text-foreground transition-colors font-medium text-primary">Take the Free IQ Test</Link></li>
              <li><Link to="/how-to-improve-iq" className="hover:text-foreground transition-colors">How to Improve Your IQ</Link></li>
              <li><Link to="/sat-to-iq" className="hover:text-foreground transition-colors">SAT to IQ Conversion</Link></li>
              <li><Link to="/iq-vs-eq" className="hover:text-foreground transition-colors">IQ vs EQ</Link></li>
              <li><Link to="/genius-iq" className="hover:text-foreground transition-colors">Genius IQ Guide</Link></li>
              <li><Link to="/mensa-iq-test" className="hover:text-foreground transition-colors">Mensa IQ Test</Link></li>
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
