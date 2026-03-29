interface PercentileBarProps {
  percentile: number;
  label?: string;
  className?: string;
}

const PercentileBar = ({ percentile, label, className = "" }: PercentileBarProps) => {
  const getGradient = () => {
    if (percentile >= 98) return "linear-gradient(to right, #8B5CF6, #7C3AED)";
    if (percentile >= 84) return "linear-gradient(to right, #22D3EE, #3B82F6)";
    if (percentile >= 50) return "linear-gradient(to right, #4ADE80, #10B981)";
    if (percentile >= 16) return "linear-gradient(to right, #FACC15, #F59E0B)";
    return "linear-gradient(to right, #FB923C, #EF4444)";
  };

  return (
    <div className={`my-4 ${className}`} role="img" aria-label={`${label || "Score"} at ${percentile}th percentile`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">{label || "Percentile"}</span>
        <span className="text-sm font-mono font-bold text-foreground">{percentile}th</span>
      </div>
      <div className="relative h-4 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${Math.max(percentile, 2)}%`, background: getGradient() }}
        />
        <div
          className="absolute top-0 h-full w-0.5"
          style={{ left: `${percentile}%`, backgroundColor: "rgba(255,255,255,0.6)" }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-muted-foreground/40">0th</span>
        <span className="text-[10px] text-muted-foreground/40">50th</span>
        <span className="text-[10px] text-muted-foreground/40">100th</span>
      </div>
    </div>
  );
};

export default PercentileBar;
