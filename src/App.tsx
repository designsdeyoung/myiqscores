import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatIsIQ from "./pages/WhatIsIQ.tsx";
import IQScoreRanges from "./pages/IQScoreRanges.tsx";
import IsXIQGood from "./pages/IsXIQGood.tsx";
import CountryIQ from "./pages/CountryIQ.tsx";
import AverageIQByCountry from "./pages/AverageIQByCountry.tsx";
import CareerIQ from "./pages/CareerIQ.tsx";
import IQvsEQ from "./pages/IQvsEQ.tsx";
import SATtoIQ from "./pages/SATtoIQ.tsx";
import HowToImproveIQ from "./pages/HowToImproveIQ.tsx";
import AgeIQ from "./pages/AgeIQ.tsx";
import FamousIQ from "./pages/FamousIQ.tsx";
import IQMyth from "./pages/IQMyth.tsx";
import StateIQ from "./pages/StateIQ.tsx";
import HighestIQEver from "./pages/HighestIQEver.tsx";
import GoodIQScore from "./pages/GoodIQScore.tsx";
import GeniusIQ from "./pages/GeniusIQ.tsx";
import MensaIQ from "./pages/MensaIQ.tsx";
import TypesOfIQTests from "./pages/TypesOfIQTests.tsx";
import IQPercentile from "./pages/IQPercentile.tsx";
import FamousIQHub from "./pages/FamousIQHub.tsx";
import CareerIQHub from "./pages/CareerIQHub.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import { iqScores } from "./data/iqScoreData";
import { countrySlugs } from "./data/countryIQData";
import { careerSlugs } from "./data/careerIQData";
import { ageGroupSlugs } from "./data/ageIQData";
import { famousPersonSlugs } from "./data/famousIQData";
import { mythSlugs } from "./data/iqMythData";
import { stateSlugs } from "./data/stateIQData";

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
    {careerSlugs.map((slug) => (
      <Route key={slug} path={`/iq-needed-for/${slug}`} element={<CareerIQ />} />
    ))}
    <Route path="/iq-vs-eq" element={<IQvsEQ />} />
    <Route path="/sat-to-iq" element={<SATtoIQ />} />
    <Route path="/how-to-improve-iq" element={<HowToImproveIQ />} />
    {ageGroupSlugs.map((slug) => (
      <Route key={slug} path={`/iq-by-age/${slug}`} element={<AgeIQ />} />
    ))}
    {famousPersonSlugs.map((slug) => (
      <Route key={slug} path={`/famous-iq/${slug}`} element={<FamousIQ />} />
    ))}
    {mythSlugs.map((slug) => (
      <Route key={slug} path={`/iq-myths/${slug}`} element={<IQMyth />} />
    ))}
    {stateSlugs.map((slug) => (
      <Route key={slug} path={`/average-iq-by-state/${slug}`} element={<StateIQ />} />
    ))}
    <Route path="/highest-iq-ever" element={<HighestIQEver />} />
    <Route path="/good-iq-score" element={<GoodIQScore />} />
    <Route path="/genius-iq" element={<GeniusIQ />} />
    <Route path="/mensa-iq-test" element={<MensaIQ />} />
    <Route path="/types-of-iq-tests" element={<TypesOfIQTests />} />
    <Route path="/iq-percentile-chart" element={<IQPercentile />} />
    <Route path="/famous-iq" element={<FamousIQHub />} />
    <Route path="/iq-by-career" element={<CareerIQHub />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/unsubscribe" element={<Unsubscribe />} />
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
      <ScrollToTop />
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
