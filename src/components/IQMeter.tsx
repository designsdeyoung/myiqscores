interface IQMeterProps {
  score: number;
  label?: string;
  className?: string;
}

const IQMeter = ({ score, label, className = "" }: IQMeterProps) => {
  const minIQ = 40;
  const maxIQ = 200;
  const clamped = Math.max(minIQ, Math.min(maxIQ, score));
  const pct = (clamped - minIQ) / (maxIQ - minIQ);

  // SVG arc: semicircle from left to right (180 degrees)
  const r = 75;
  const cx = 100;
  const cy = 90;

  // Background arc: full semicircle left to right
  const bgPath = `M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`;

  // Colored arc: partial, based on percentage
  // Angle goes from PI (left) to 0 (right), so fill angle = PI * (1 - pct) from left
  const angle = Math.PI - pct * Math.PI;
  const endX = cx + r * Math.cos(angle);
  const endY = cy - r * Math.sin(angle);
  const sweep = pct > 0.5 ? 1 : 0;
  const fillPath = `M ${cx - r},${cy} A ${r},${r} 0 ${sweep},1 ${endX},${endY}`;

  const getColor = () => {
    if (score >= 130) return "#8B5CF6";
    if (score >= 110) return "#00E5FF";
    if (score >= 90) return "#22C55E";
    if (score >= 70) return "#EAB308";
    return "#EF4444";
  };

  const getClassification = () => {
    if (score >= 140) return "Genius";
    if (score >= 130) return "Gifted";
    if (score >= 120) return "Superior";
    if (score >= 110) return "High Average";
    if (score >= 90) return "Average";
    if (score >= 80) return "Low Average";
    if (score >= 70) return "Borderline";
    return "Extremely Low";
  };

  const color = getColor();

  return (
    <div
      className={`w-full max-w-[220px] mx-auto ${className}`}
      role="img"
      aria-label={`IQ meter showing score of ${score} - ${getClassification()}`}
    >
      <svg viewBox="0 0 200 115" className="w-full">
        {/* Background track */}
        <path d={bgPath} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" strokeLinecap="round" />

        {/* Colored fill arc */}
        {pct > 0.01 && (
          <path
            d={fillPath}
            fill="none"
            stroke={color}
            strokeWidth="14"
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${color}50)` }}
          />
        )}

        {/* Score */}
        <text x={cx} y={cy - 15} textAnchor="middle" fill="white" fontSize="30" fontWeight="800" fontFamily="var(--font-heading)">
          {score}
        </text>

        {/* Label */}
        <text x={cx} y={cy + 5} textAnchor="middle" fill={color} fontSize="10" fontWeight="600">
          {label || getClassification()}
        </text>

        {/* Min / Max */}
        <text x={cx - r} y={cy + 16} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8">40</text>
        <text x={cx + r} y={cy + 16} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8">200</text>
      </svg>
    </div>
  );
};

export default IQMeter;
