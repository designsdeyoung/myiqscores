import { Brain } from "lucide-react";

interface FamousPersonIconProps {
  name: string;
  className?: string;
}

const FamousPersonIcon = ({ name, className = "" }: FamousPersonIconProps) => {
  // Generate a consistent color from the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;

  return (
    <div
      className={`w-full max-w-[200px] mx-auto my-6 ${className}`}
      role="img"
      aria-label={`${name} portrait illustration`}
    >
      <div
        className="aspect-square rounded-2xl flex items-center justify-center glass-card relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsla(${hue}, 70%, 20%, 0.8), hsla(${(hue + 60) % 360}, 70%, 15%, 0.8))`,
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
          style={{ background: `hsla(${hue}, 80%, 50%, 0.3)` }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-15"
          style={{ background: `hsla(${(hue + 120) % 360}, 80%, 50%, 0.3)` }}
        />

        <div className="text-center z-10">
          <Brain className="w-12 h-12 mx-auto mb-2" style={{ color: `hsla(${hue}, 70%, 60%, 0.8)` }} />
          <p className="font-heading font-bold text-sm text-foreground/80 px-4 leading-tight">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamousPersonIcon;
