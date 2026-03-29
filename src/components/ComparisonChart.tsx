import { Link } from "react-router-dom";

interface BarItem {
  label: string;
  value: number;
  href?: string;
  highlight?: boolean;
}

interface ComparisonChartProps {
  items: BarItem[];
  maxValue?: number;
  className?: string;
  title?: string;
}

const ComparisonChart = ({ items, maxValue, className = "", title }: ComparisonChartProps) => {
  const max = maxValue || Math.max(...items.map((i) => i.value)) * 1.1;

  const getColor = (value: number, highlight?: boolean) => {
    if (highlight) return "linear-gradient(135deg, #00E5FF, #8B5CF6)";
    if (value >= 130) return "rgba(139, 92, 246, 0.7)";
    if (value >= 110) return "rgba(0, 229, 255, 0.5)";
    if (value >= 90) return "rgba(34, 197, 94, 0.4)";
    return "rgba(234, 179, 8, 0.4)";
  };

  return (
    <div className={`my-8 ${className}`} role="img" aria-label={title || "IQ comparison chart"}>
      {title && <p className="text-sm font-heading font-semibold text-foreground mb-4">{title}</p>}
      <div className="space-y-3">
        {items.map((item, idx) => {
          const widthPct = Math.min((item.value / max) * 100, 100);
          const bar = (
            <div className="group">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm ${item.highlight ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                  {item.label}
                </span>
                <span className={`text-sm font-mono ${item.highlight ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  {item.value}
                </span>
              </div>
              <div className="h-3 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${widthPct}%`,
                    background: getColor(item.value, item.highlight),
                  }}
                />
              </div>
            </div>
          );

          return item.href ? (
            <Link key={idx} to={item.href} className="block no-underline hover:opacity-80 transition-opacity">
              {bar}
            </Link>
          ) : (
            <div key={idx}>{bar}</div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonChart;
