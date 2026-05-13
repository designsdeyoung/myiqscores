import { Link } from "react-router-dom";
import { ShieldCheck, BookOpen } from "lucide-react";

interface AuthorBoxProps {
  lastUpdated?: string;
}

const AuthorBox = ({ lastUpdated = "2026-05-10" }: AuthorBoxProps) => {
  const formattedDate = new Date(lastUpdated + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="glass-card p-5 sm:p-6 rounded-2xl mt-10 border border-[rgba(255,255,255,0.08)]">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground select-none"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
          aria-label="MyIQScores Editorial Team"
        >
          <BookOpen className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Reviewed by
            </span>
          </div>
          <p className="font-heading font-semibold text-foreground text-base leading-tight">
            MyIQScores Editorial Team
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Researchers in cognitive psychology, psychometrics &amp; educational science
          </p>
        </div>

        <div className="hidden sm:block text-right flex-shrink-0">
          <p className="text-xs text-muted-foreground">Last updated</p>
          <p className="text-xs font-medium text-foreground">{formattedDate}</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
        All content on MyIQScores is reviewed for scientific accuracy against peer-reviewed
        research in cognitive psychology and psychometrics. Our editorial team cross-references
        each article with published literature before publication and updates pages whenever
        new research warrants a revision.
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs">
        <Link to="/methodology" className="text-primary hover:text-primary/80 transition-colors font-medium">
          Our Methodology →
        </Link>
        <Link to="/editorial-policy" className="text-primary hover:text-primary/80 transition-colors font-medium">
          Editorial Policy →
        </Link>
        <span className="sm:hidden text-muted-foreground">
          Last updated: {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default AuthorBox;
