import { Link, useLocation } from "react-router-dom";
import { Brain, ArrowRight, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react"; // useEffect kept for useActiveSection
import { getAutoRelatedLinks } from "@/lib/internalLinks";
import { contentDateFor, formatContentDate } from "@/generated/contentDates";
import { trackHubNavigation } from "@/lib/analytics";
import BackgroundEffect from "./BackgroundEffect";
import Navbar from "./Navbar";
import AdUnit from "./AdUnit";
import AuthorBox from "./AuthorBox";
import CitationBlock, { Citation } from "./CitationBlock";
import { AD_SLOTS } from "@/config/adsense";
import Breadcrumb from "./Breadcrumb";

// ── Scroll Progress Hook ──
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return progress;
}

// ── TOC Active Section Hook ──
function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>("");
  useEffect(() => {
    if (!ids.length) return;
    const observers: IntersectionObserver[] = [];
    const visibleMap: Record<string, boolean> = {};

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibleMap[id] = entry.isIntersecting;
          const first = ids.find((i) => visibleMap[i]);
          if (first) setActiveId(first);
        },
        { rootMargin: "-80px 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return activeId;
}

export interface TocItem {
  id: string;
  label: string;
  level?: number;
}

interface ContentPageProps {
  children: React.ReactNode;
  ctaText?: string;
  relatedPages?: { title: string; href: string }[];
  showLeaderboard?: boolean;
  showSidebar?: boolean;
  showAuthor?: boolean;
  citations?: Citation[];
  readingTime?: number;
  lastUpdated?: string;
  toc?: TocItem[];
}

// ── Table of Contents component ──
function TableOfContents({
  items,
  activeId,
  collapsed,
  onToggle,
}: {
  items: TocItem[];
  activeId: string;
  collapsed?: boolean;
  onToggle?: () => void;
}) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav aria-label="Table of contents">
      {onToggle != null && (
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full text-sm font-semibold text-foreground mb-2"
        >
          <span>Contents</span>
          <ChevronRight
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
              !collapsed ? "rotate-90" : ""
            }`}
          />
        </button>
      )}
      {onToggle == null && (
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Contents
        </p>
      )}
      {!collapsed && (
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id} style={{ paddingLeft: item.level && item.level > 1 ? `${(item.level - 1) * 12}px` : undefined }}>
              <button
                onClick={() => handleClick(item.id)}
                className={`text-left text-sm w-full py-1 px-2 rounded-lg transition-colors ${
                  activeId === item.id
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.04)]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

const ContentPage = ({
  children,
  ctaText = "Think you can score higher? Take the free IQ test",
  relatedPages,
  showLeaderboard = true,
  showSidebar = true,
  showAuthor = true,
  citations,
  readingTime,
  lastUpdated,
  toc,
}: ContentPageProps) => {
  const scrollProgress = useScrollProgress();
  const tocIds = toc ? toc.map((t) => t.id) : [];
  const activeId = useActiveSection(tocIds);
  const [tocCollapsed, setTocCollapsed] = useState(true);
  const { pathname } = useLocation();
  // Visible freshness badge: derived from real git history of the content
  // source (data file or page component) unless the page passes its own.
  const autoDate = contentDateFor(pathname);
  const updatedLabel = lastUpdated ?? (autoDate ? formatContentDate(autoDate) : undefined);

  // Merge template-provided links with the sitewide linking engine, dedupe
  // by href, drop self-links, cap at 10.
  const seen = new Set<string>([pathname]);
  const mergedRelated = [...(relatedPages ?? []), ...getAutoRelatedLinks(pathname)]
    .filter((l) => {
      if (seen.has(l.href)) return false;
      seen.add(l.href);
      return true;
    })
    .slice(0, 10);

  return (
    <div className="relative min-h-screen">
      <BackgroundEffect />

      {/* ── Scroll Progress Bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none"
        style={{ zIndex: 60 }}
      >
        <div
          style={{
            width: `${scrollProgress * 100}%`,
            height: "100%",
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
            transition: "width 0.1s linear",
            willChange: "width",
          }}
        />
      </div>

      {/* Sticky Test Banner — mobile only, sits above content */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
        <Link
          to="/test"
          className="block w-full py-3 px-4 text-center font-heading font-bold text-sm text-primary-foreground"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
        >
          Take Free IQ Test <ArrowRight className="w-4 h-4 inline ml-1" />
        </Link>
      </div>

      <Navbar />

      {/* Article Content */}
      <main className="relative z-10 pt-20 sm:pt-24 pb-24 sm:pb-16 px-4">
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

        <div className="max-w-5xl mx-auto">
          <Breadcrumb className="mb-4" />
        </div>

        <div className="max-w-5xl mx-auto flex gap-8">
          {/* Main content */}
          <article className="max-w-3xl w-full prose-content overflow-x-hidden">
            {/* Reading time + last updated badge */}
            {(readingTime || updatedLabel) && (
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                {readingTime && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground glass-card rounded-full px-3 py-1.5 border border-[rgba(255,255,255,0.08)]">
                    <span>📖</span>
                    <span>{readingTime} min read</span>
                  </span>
                )}
                {updatedLabel && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground glass-card rounded-full px-3 py-1.5 border border-[rgba(255,255,255,0.08)]">
                    <span>Updated {updatedLabel}</span>
                  </span>
                )}
              </div>
            )}

            {/* Mobile TOC */}
            {toc && toc.length > 0 && (
              <div className="lg:hidden glass-card rounded-xl p-4 mb-8 border border-[rgba(255,255,255,0.08)]">
                <TableOfContents
                  items={toc}
                  activeId={activeId}
                  collapsed={tocCollapsed}
                  onToggle={() => setTocCollapsed((v) => !v)}
                />
              </div>
            )}

            {children}
            {citations && citations.length > 0 && <CitationBlock citations={citations} />}
            {showAuthor && <AuthorBox />}
          </article>

          {/* Sticky sidebar — desktop only */}
          {showSidebar && (
            <aside className="hidden lg:block w-[300px] flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Desktop TOC */}
                {toc && toc.length > 0 && (
                  <div className="glass-card rounded-xl p-4 border border-[rgba(255,255,255,0.08)]">
                    <TableOfContents items={toc} activeId={activeId} />
                  </div>
                )}
                <AdUnit slotId={AD_SLOTS.sidebar} format="display" size="300x250" />
              </div>
            </aside>
          )}
        </div>

        {/* Related Pages Section */}
        {mergedRelated.length > 0 && (
          <div className="max-w-3xl mx-auto mt-12">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {mergedRelated.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  onClick={() => trackHubNavigation(page.href)}
                  className="glass-card p-4 rounded-xl border-t-2 transition-all duration-200 group card-hover flex items-start gap-3"
                  style={{ borderTopColor: "hsl(var(--primary) / 0.5)" }}
                >
                  <Brain className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex-1 leading-snug">
                    {page.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="max-w-3xl mx-auto mt-12">
          <div
            className="relative rounded-2xl overflow-hidden p-[1px]"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.6), hsl(var(--secondary) / 0.6))",
            }}
          >
            <div className="glass-card rounded-[calc(1rem-1px)] p-6 sm:p-10 text-center relative overflow-hidden">
              {/* Shimmer background */}
              <div className="absolute inset-0 shimmer opacity-40 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {ctaText}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  30 questions. 15 minutes. Instant results — no sign-up, no email wall, no paywall.
                </p>
                <Link
                  to="/test"
                  className="glow-button inline-block text-lg"
                  style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
                >
                  Start Free IQ Test →
                </Link>
                <div className="mt-5 flex items-center justify-center gap-5 text-xs text-muted-foreground flex-wrap">
                  {["Free", "No Sign-Up", "Instant Results"].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                Free IQ estimate with instant educational results.
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
                <li><Link to="/average-iq" className="hover:text-foreground transition-colors">Average IQ Score</Link></li>
                <li><Link to="/average-iq-by-country" className="hover:text-foreground transition-colors">Average IQ by Country</Link></li>
                <li><Link to="/iq-by-career" className="hover:text-foreground transition-colors">IQ by Career</Link></li>
                <li><Link to="/famous-iq" className="hover:text-foreground transition-colors">Famous People IQs</Link></li>
                <li><Link to="/iq-percentile-chart" className="hover:text-foreground transition-colors">IQ Percentile Chart</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">IQ Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Tests &amp; Guides</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground transition-colors font-medium text-primary">Take the Free IQ Test</Link></li>
                <li><Link to="/iq-test" className="hover:text-foreground transition-colors">What Is an IQ Test?</Link></li>
                <li><Link to="/practice-iq-test" className="hover:text-foreground transition-colors">Practice IQ Test</Link></li>
                <li><Link to="/how-to-improve-iq" className="hover:text-foreground transition-colors">How to Improve Your IQ</Link></li>
                <li><Link to="/sat-to-iq" className="hover:text-foreground transition-colors">SAT to IQ Conversion</Link></li>
                <li><Link to="/tools" className="hover:text-foreground transition-colors">Free IQ Tools</Link></li>
                <li><Link to="/genius-iq" className="hover:text-foreground transition-colors">Genius IQ Guide</Link></li>
                <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} MyIQScores™. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
              <Link to="/methodology" className="hover:text-foreground transition-colors">Methodology</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
              <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContentPage;
