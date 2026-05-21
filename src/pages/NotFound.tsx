import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import { Brain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <SEOHead
        title="Page Not Found | MyIQScores"
        description="The page you're looking for doesn't exist. Take the free IQ test at MyIQScores."
      />
      <BackgroundEffect />
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Brain className="w-16 h-16 text-primary/40 mx-auto mb-6" />
          <h1 className="font-heading text-6xl font-extrabold gradient-text mb-4">404</h1>
          <p className="text-xl text-foreground font-semibold mb-2">Page Not Found</p>
          <p className="text-muted-foreground mb-8 text-sm">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="glow-button text-sm px-6 py-3">
              Take the Free IQ Test →
            </Link>
            <Link
              to="/iq-score-ranges"
              className="glass-card px-6 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors border border-[rgba(255,255,255,0.1)]"
            >
              IQ Score Ranges
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            {[
              { to: "/what-is-iq", label: "What Is IQ?" },
              { to: "/famous-iq", label: "Famous IQs" },
              { to: "/average-iq-by-country", label: "IQ by Country" },
              { to: "/iq-by-career", label: "IQ by Career" },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="hover:text-foreground transition-colors py-1">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
