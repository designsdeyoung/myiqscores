import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
  columns?: 2 | 3;
  className?: string;
}

const RelatedLinks = ({
  links,
  title = "Related Pages",
  columns = 3,
  className = "",
}: RelatedLinksProps) => {
  if (!links.length) return null;

  const gridClass =
    columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3";

  return (
    <section className={`mt-10 ${className}`}>
      {title && (
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">{title}</h2>
      )}
      <div className={`grid ${gridClass} gap-3`}>
        {links.map(({ title: linkTitle, href, description }) => (
          <Link
            key={href}
            to={href}
            className="glass-card rounded-xl p-4 flex items-start gap-3 hover:bg-[rgba(255,255,255,0.06)] transition-colors group card-hover"
          >
            <div className="flex-1 min-w-0">
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block leading-snug">
                {linkTitle}
              </span>
              {description && (
                <span className="text-xs text-muted-foreground mt-1 block leading-relaxed line-clamp-2">
                  {description}
                </span>
              )}
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedLinks;
