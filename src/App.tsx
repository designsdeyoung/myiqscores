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
import ACTtoIQ from "./pages/ACTtoIQ.tsx";
import GREtoIQ from "./pages/GREtoIQ.tsx";
import ASVABtoIQ from "./pages/ASVABtoIQ.tsx";
import StateIQHub from "./pages/StateIQHub.tsx";
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
import TermsOfService from "./pages/TermsOfService.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import AdvertisingPolicy from "./pages/AdvertisingPolicy.tsx";
import CorrectionsPolicy from "./pages/CorrectionsPolicy.tsx";
import About from "./pages/About.tsx";
import Methodology from "./pages/Methodology.tsx";
import EditorialPolicy from "./pages/EditorialPolicy.tsx";
import Contact from "./pages/Contact.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import AverageIQUS from "./pages/AverageIQUS.tsx";
import PresidentIQ from "./pages/PresidentIQ.tsx";
import LowIQ from "./pages/LowIQ.tsx";
import Blog from "./pages/Blog.tsx";
import WhatIsIQScore from "./pages/blog/WhatIsIQScore.tsx";
import HowToIncreaseIQ from "./pages/blog/HowToIncreaseIQ.tsx";
import IQvsSuccess from "./pages/blog/IQvsSuccess.tsx";
import FamousIQScores from "./pages/blog/FamousIQScores.tsx";
import IQByCountry from "./pages/blog/IQByCountry.tsx";
import WhatIsGeniusIQ from "./pages/blog/WhatIsGeniusIQ.tsx";
import IQTestsAccurate from "./pages/blog/IQTestsAccurate.tsx";
import EmotionalIntelligenceVsIQ from "./pages/blog/EmotionalIntelligenceVsIQ.tsx";
import FluidVsCrystallizedIntelligence from "./pages/blog/FluidVsCrystallizedIntelligence.tsx";
import FlynnEffect from "./pages/blog/FlynnEffect.tsx";
import IQGeneticsNatureVsNurture from "./pages/blog/IQGeneticsNatureVsNurture.tsx";
import SleepAndIQ from "./pages/blog/SleepAndIQ.tsx";
import NutritionAndIQ from "./pages/blog/NutritionAndIQ.tsx";
import IQAndMentalHealth from "./pages/blog/IQAndMentalHealth.tsx";
import IQAndWorkplace from "./pages/blog/IQAndWorkplace.tsx";
import WorkingMemoryAndIQ from "./pages/blog/WorkingMemoryAndIQ.tsx";
import IQTestingInChildren from "./pages/blog/IQTestingInChildren.tsx";
import ExerciseAndIQ from "./pages/blog/ExerciseAndIQ.tsx";
import MultipleIntelligences from "./pages/blog/MultipleIntelligences.tsx";
import IQAndCreativity from "./pages/blog/IQAndCreativity.tsx";
import IQAndLeadership from "./pages/blog/IQAndLeadership.tsx";
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
    <Route path="/act-to-iq" element={<ACTtoIQ />} />
    <Route path="/gre-to-iq" element={<GREtoIQ />} />
    <Route path="/asvab-to-iq" element={<ASVABtoIQ />} />
    <Route path="/average-iq-by-state" element={<StateIQHub />} />
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
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/disclaimer" element={<Disclaimer />} />
    <Route path="/cookie-policy" element={<CookiePolicy />} />
    <Route path="/advertising-policy" element={<AdvertisingPolicy />} />
    <Route path="/corrections-policy" element={<CorrectionsPolicy />} />
    <Route path="/about" element={<About />} />
    <Route path="/methodology" element={<Methodology />} />
    <Route path="/editorial-policy" element={<EditorialPolicy />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/unsubscribe" element={<Unsubscribe />} />
    <Route path="/average-iq-us" element={<AverageIQUS />} />
    <Route path="/iq-of-presidents" element={<PresidentIQ />} />
    <Route path="/low-iq" element={<LowIQ />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/what-is-iq-score" element={<WhatIsIQScore />} />
    <Route path="/blog/how-to-increase-iq" element={<HowToIncreaseIQ />} />
    <Route path="/blog/iq-vs-success" element={<IQvsSuccess />} />
    <Route path="/blog/famous-iq-scores" element={<FamousIQScores />} />
    <Route path="/blog/iq-by-country" element={<IQByCountry />} />
    <Route path="/blog/what-is-genius-iq" element={<WhatIsGeniusIQ />} />
    <Route path="/blog/iq-tests-accurate" element={<IQTestsAccurate />} />
    <Route path="/blog/emotional-intelligence-vs-iq" element={<EmotionalIntelligenceVsIQ />} />
    <Route path="/blog/fluid-vs-crystallized-intelligence" element={<FluidVsCrystallizedIntelligence />} />
    <Route path="/blog/flynn-effect" element={<FlynnEffect />} />
    <Route path="/blog/iq-genetics-nature-vs-nurture" element={<IQGeneticsNatureVsNurture />} />
    <Route path="/blog/sleep-and-iq" element={<SleepAndIQ />} />
    <Route path="/blog/nutrition-and-iq" element={<NutritionAndIQ />} />
    <Route path="/blog/iq-and-mental-health" element={<IQAndMentalHealth />} />
    <Route path="/blog/iq-and-workplace" element={<IQAndWorkplace />} />
    <Route path="/blog/working-memory-and-iq" element={<WorkingMemoryAndIQ />} />
    <Route path="/blog/iq-testing-in-children" element={<IQTestingInChildren />} />
    <Route path="/blog/exercise-and-iq" element={<ExerciseAndIQ />} />
    <Route path="/blog/multiple-intelligences-theory" element={<MultipleIntelligences />} />
    <Route path="/blog/iq-and-creativity" element={<IQAndCreativity />} />
    <Route path="/blog/iq-and-leadership" element={<IQAndLeadership />} />
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
