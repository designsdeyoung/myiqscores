import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[rgba(255,255,255,0.06)]">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <Brain className="w-7 h-7 text-primary" />
        <span className="font-heading font-bold text-lg tracking-tight text-foreground">
          My<span className="text-primary">IQ</span>Scores
        </span>
      </Link>
      <span className="text-xs text-muted-foreground hidden sm:block">Discover your cognitive edge.</span>
    </div>
  </nav>
);

export default Navbar;
