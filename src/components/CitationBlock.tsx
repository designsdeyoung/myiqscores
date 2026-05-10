import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

export interface Citation {
  text: string;
  url?: string;
  year: number;
  author: string;
}

interface CitationBlockProps {
  citations: Citation[];
}

const CitationBlock = ({ citations }: CitationBlockProps) => {
  const [open, setOpen] = useState(false);

  if (citations.length === 0) return null;

  return (
    <div className="glass-card rounded-2xl mt-8 border border-[rgba(255,255,255,0.08)] overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[rgba(255,255,255,0.04)] transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="font-heading font-semibold text-sm text-foreground">
            References &amp; Sources
          </span>
          <span className="text-xs text-muted-foreground ml-1">({citations.length})</span>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
      </button>

      {open && (
        <ol className="list-none px-5 pb-5 space-y-3 border-t border-[rgba(255,255,255,0.06)] pt-4">
          {citations.map((citation, index) => (
            <li key={index} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 font-heading font-bold text-primary text-xs mt-0.5">
                [{index + 1}]
              </span>
              <div className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">{citation.author}</span>{" "}
                ({citation.year}). {citation.text}
                {citation.url && (
                  <>
                    {" "}
                    <a
                      href={citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      [Link]
                    </a>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CitationBlock;
