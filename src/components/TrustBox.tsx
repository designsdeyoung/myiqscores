import { Shield, BookOpen, ClipboardCheck, Scale } from "lucide-react";

interface TrustItem {
  icon: React.ElementType;
  title: string;
  text: string;
}

const DEFAULT_ITEMS: TrustItem[] = [
  {
    icon: ClipboardCheck,
    title: "Transparent Scoring",
    text: "Your result is an estimate based on accuracy and completion time across 5 cognitive reasoning categories.",
  },
  {
    icon: Scale,
    title: "Honest Limitations",
    text: "Online IQ-style tests are educational estimates — not a substitute for WAIS, Stanford-Binet, or a licensed psychologist.",
  },
  {
    icon: BookOpen,
    title: "Educational Context",
    text: "All results include plain-language explanations of what your score means and where you stand relative to the population.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    text: "No account required. Your results are yours. We never sell personal data to third parties.",
  },
];

interface TrustBoxProps {
  items?: TrustItem[];
  title?: string;
  className?: string;
  columns?: 2 | 3 | 4;
}

const TrustBox = ({
  items = DEFAULT_ITEMS,
  title,
  className = "",
  columns = 4,
}: TrustBoxProps) => {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-2 sm:grid-cols-4";

  return (
    <div className={`${className}`}>
      {title && (
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-center text-foreground mb-6">
          {title}
        </h2>
      )}
      <div className={`grid ${gridClass} gap-4`}>
        {items.map(({ icon: Icon, title: itemTitle, text }) => (
          <div
            key={itemTitle}
            className="glass-card rounded-xl p-5 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-primary flex-shrink-0" />
              <h3 className="font-heading font-semibold text-foreground text-sm">
                {itemTitle}
              </h3>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBox;
