interface BellCurveProps {
  score: number;
  className?: string;
}

const BellCurve = ({ score, className = "" }: BellCurveProps) => {
  // Map IQ score to x position (55-145 range maps to ~10-290 on 300px SVG)
  const minIQ = 55;
  const maxIQ = 145;
  const clampedScore = Math.max(minIQ, Math.min(maxIQ, score));
  const xPos = 10 + ((clampedScore - minIQ) / (maxIQ - minIQ)) * 280;

  // Bell curve path points (normal distribution)
  const curvePoints = [
    "M 10,180",
    "C 10,180 40,178 70,170",
    "C 100,162 115,140 130,110",
    "C 145,80 150,50 150,40",
    "C 150,50 155,80 170,110",
    "C 185,140 200,162 230,170",
    "C 260,178 290,180 290,180",
  ].join(" ");

  const getLabel = () => {
    if (score < 85) return "Below Average";
    if (score < 100) return "Average";
    if (score === 100) return "Mean (100)";
    if (score < 115) return "Above Average";
    return "High";
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <svg viewBox="0 0 300 210" className="w-full" aria-label={`Bell curve showing IQ ${score} position`}>
        {/* Background zones */}
        <rect x="10" y="0" width="70" height="180" fill="rgba(239,68,68,0.08)" rx="4" />
        <rect x="80" y="0" width="70" height="180" fill="rgba(234,179,8,0.08)" rx="4" />
        <rect x="150" y="0" width="70" height="180" fill="rgba(234,179,8,0.08)" rx="4" />
        <rect x="220" y="0" width="70" height="180" fill="rgba(34,197,94,0.08)" rx="4" />

        {/* Curve */}
        <path d={curvePoints} fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="2.5" />

        {/* Fill under curve */}
        <path d={`${curvePoints} L 290,180 L 10,180 Z`} fill="rgba(0,229,255,0.08)" />

        {/* Score marker */}
        <line x1={xPos} y1="0" x2={xPos} y2="180" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4,3" />
        <circle cx={xPos} cy={10} r="5" fill="#8B5CF6" />

        {/* Labels */}
        <text x="45" y="198" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">70</text>
        <text x="115" y="198" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">85</text>
        <text x="150" y="198" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">100</text>
        <text x="185" y="198" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">115</text>
        <text x="255" y="198" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">130</text>

        {/* Score label */}
        <text x={xPos} y={-2} textAnchor="middle" fill="#8B5CF6" fontSize="11" fontWeight="bold">
          {score}
        </text>
      </svg>
      <p className="text-center text-sm text-muted-foreground mt-1">{getLabel()}</p>
    </div>
  );
};

export default BellCurve;
