import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// Human-readable overrides for known slugs
const LABEL_MAP: Record<string, string> = {
  "average-iq": "Average IQ",
  "average-iq-by-country": "Average IQ by Country",
  "average-iq-by-state": "Average IQ by State",
  "average-iq-us": "Average IQ in the US",
  "iq-score-ranges": "IQ Score Ranges",
  "iq-percentile-chart": "IQ Percentile Chart",
  "iq-by-career": "IQ by Career",
  "iq-by-major": "IQ by Major",
  "iq-by-city": "IQ by City",
  "iq-by-age": "IQ by Age",
  "iq-vs-eq": "IQ vs EQ",
  "iq-compare": "IQ Compare",
  "iq-of-presidents": "IQ of US Presidents",
  "iq-and": "IQ and Health",
  "iq-myths": "IQ Myths",
  "iq-needed-for": "IQ by Career",
  "famous-iq": "Famous IQ Scores",
  "what-is-iq": "What Is IQ?",
  "good-iq-score": "Good IQ Score",
  "genius-iq": "Genius IQ",
  "mensa-iq-test": "Mensa IQ Test",
  "highest-iq-ever": "Highest IQ Ever",
  "how-to-improve-iq": "How to Improve IQ",
  "types-of-iq-tests": "Types of IQ Tests",
  "practice-iq-test": "Practice IQ Test",
  "how-it-works": "How It Works",
  "sat-to-iq": "SAT to IQ",
  "act-to-iq": "ACT to IQ",
  "gre-to-iq": "GRE to IQ",
  "asvab-to-iq": "ASVAB to IQ",
  "low-iq": "Low IQ",
  "blog": "Blog",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "editorial-policy": "Editorial Policy",
  "methodology": "Methodology",
  "about": "About",
  "contact": "Contact",
  "disclaimer": "Disclaimer",
};

function slugToLabel(slug: string): string {
  if (LABEL_MAP[slug]) return LABEL_MAP[slug];
  const iqMatch = slug.match(/^is-(\d+)-iq-good$/);
  if (iqMatch) return `Is ${iqMatch[1]} IQ Good?`;
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace(/\bIq\b/g, "IQ")
    .replace(/\bEq\b/g, "EQ")
    .replace(/\bUs\b/g, "US")
    .replace(/\bSat\b/g, "SAT")
    .replace(/\bAct\b/g, "ACT")
    .replace(/\bGre\b/g, "GRE")
    .replace(/\bAsvab\b/g, "ASVAB");
}

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  /** Manual crumbs — if omitted, auto-built from current URL */
  crumbs?: Crumb[];
  className?: string;
}

function AutoBreadcrumb({ className }: { className?: string }) {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    ...parts.map((part, i) => ({
      label: slugToLabel(part),
      href: "/" + parts.slice(0, i + 1).join("/"),
    })),
  ];

  return <BreadcrumbList crumbs={crumbs} className={className} />;
}

function BreadcrumbList({ crumbs, className }: { crumbs: Crumb[]; className?: string }) {
  if (crumbs.length < 2) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1 text-xs text-muted-foreground/70 flex-wrap ${className ?? ""}`}
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="w-3 h-3 opacity-40 flex-shrink-0" />}
            {i === 0 && crumb.href ? (
              <Link
                to={crumb.href}
                className="hover:text-muted-foreground transition-colors flex items-center gap-1"
                aria-label="Home"
              >
                <Home className="w-3 h-3" />
              </Link>
            ) : isLast || !crumb.href ? (
              <span className="text-foreground/60 truncate max-w-[200px]" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.href}
                className="hover:text-muted-foreground transition-colors truncate max-w-[160px]"
              >
                {crumb.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

const Breadcrumb = ({ crumbs, className }: BreadcrumbProps) =>
  crumbs ? (
    <BreadcrumbList crumbs={crumbs} className={className} />
  ) : (
    <AutoBreadcrumb className={className} />
  );

export default Breadcrumb;
