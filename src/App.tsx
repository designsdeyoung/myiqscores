import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatIsIQ from "./pages/WhatIsIQ.tsx";
import IQScoreRanges from "./pages/IQScoreRanges.tsx";
import IsXIQGood from "./pages/IsXIQGood.tsx";
import CountryIQ from "./pages/CountryIQ.tsx";
import AverageIQByCountry from "./pages/AverageIQByCountry.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import { iqScores } from "./data/iqScoreData";
import { countrySlugs } from "./data/countryIQData";

const queryClient = new QueryClient();

// Extracted routes for reuse with StaticRouter during pre-rendering
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/test" element={<Index />} />
    <Route path="/what-is-iq" element={<WhatIsIQ />} />
    <Route path="/iq-score-ranges" element={<IQScoreRanges />} />
    {iqScores.map((score) => (
      <Route key={score} path={`/is-${score}-iq-good`} element={<IsXIQGood />} />
    ))}
    <Route path="/average-iq-by-country" element={<AverageIQByCountry />} />
    {countrySlugs.map((slug) => (
      <Route key={slug} path={`/average-iq/${slug}`} element={<CountryIQ />} />
    ))}
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

// Core app shell (without Router or HelmetProvider — those are provided by entry files)
export const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRoutes />
    </TooltipProvider>
  </QueryClientProvider>
);

// Default export wraps everything for standalone usage
const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
