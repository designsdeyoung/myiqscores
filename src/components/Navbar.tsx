import { Brain, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const exploreLearn = [
  { to: "/what-is-iq", label: "What Is IQ?" },
  { to: "/iq-score-ranges", label: "IQ Score Ranges" },
  { to: "/iq-vs-eq", label: "IQ vs EQ" },
  { to: "/types-of-iq-tests", label: "Types of IQ Tests" },
  { to: "/how-to-improve-iq", label: "How to Improve IQ" },
];

const exploreCompare = [
  { to: "/famous-iq", label: "Famous IQs" },
  { to: "/average-iq-by-country", label: "IQ by Country" },
  { to: "/iq-by-career", label: "IQ by Career" },
  { to: "/iq-by-major", label: "IQ by Major" },
  { to: "/iq-by-state", label: "IQ by State" },
];

const mainNavLinks = [
  { to: "/iq-score-ranges", label: "Score Ranges" },
  { to: "/iq-percentile-chart", label: "Percentile" },
  { to: "/famous-iq", label: "Famous IQs" },
  { to: "/iq-by-career", label: "Careers & IQ" },
];

const mobileSections = [
  {
    heading: "Learn",
    links: exploreLearn,
  },
  {
    heading: "Compare",
    links: exploreCompare,
  },
  {
    heading: "Test",
    links: [
      { to: "/test", label: "Take the Free IQ Test" },
      { to: "/mensa-iq-test", label: "Mensa IQ Test" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll-aware transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.06)] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 14, 26, 0.92)"
          : "rgba(10, 14, 26, 0.60)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity flex-shrink-0">
          <Brain className="w-7 h-7 text-primary" />
          <div>
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">
              My<span className="text-primary">IQ</span>Scores<sup className="text-[8px] text-muted-foreground/50 ml-0.5">™</sup>
            </span>
            <span className="hidden sm:block text-[10px] text-muted-foreground/70 -mt-0.5 tracking-wide">
              Free IQ Estimate and Learning Guides
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {/* Explore dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`flex items-center gap-1 text-sm transition-colors ${
                dropdownOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Explore
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[440px] glass-card rounded-2xl border border-[rgba(255,255,255,0.1)] shadow-2xl overflow-hidden"
                  style={{ transformOrigin: "top center" }}
                >
                  <div className="grid grid-cols-2 divide-x divide-[rgba(255,255,255,0.08)]">
                    {/* Learn column */}
                    <div className="p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                        Learn
                      </p>
                      <ul className="space-y-0.5">
                        {exploreLearn.map((link) => (
                          <li key={link.to}>
                            <Link
                              to={link.to}
                              className={`block px-2 py-2 rounded-lg text-sm transition-colors ${
                                isActive(link.to)
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.05)]"
                              }`}
                              onClick={() => setDropdownOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Compare column */}
                    <div className="p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                        Compare
                      </p>
                      <ul className="space-y-0.5">
                        {exploreCompare.map((link) => (
                          <li key={link.to}>
                            <Link
                              to={link.to}
                              className={`block px-2 py-2 rounded-lg text-sm transition-colors ${
                                isActive(link.to)
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.05)]"
                              }`}
                              onClick={() => setDropdownOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other nav links */}
          {mainNavLinks.map((link) => (
            <div key={link.to} className="relative flex flex-col items-center">
              <Link
                to={link.to}
                className={`text-sm transition-colors ${
                  isActive(link.to)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
              {isActive(link.to) && (
                <motion.div
                  layoutId="nav-active-dot"
                  className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </div>
          ))}

          <Link to="/" className="glow-button text-sm px-4 py-2">
            Take the Test
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown — animated */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="md:hidden border-t border-[rgba(255,255,255,0.06)]"
          >
            <div className="px-4 py-4 space-y-5">
              {mobileSections.map((section) => (
                <div key={section.heading}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 px-1">
                    {section.heading}
                  </p>
                  <div className="space-y-0.5">
                    {section.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block px-2 py-2 rounded-lg text-sm transition-colors ${
                          isActive(link.to)
                            ? "text-primary bg-primary/10 font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.05)]"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/"
                className="block glow-button text-sm px-4 py-2 text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Take the Test
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
