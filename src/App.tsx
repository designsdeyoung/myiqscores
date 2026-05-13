import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatIsIQ from "./pages/WhatIsIQ.tsx";
import IQScoreRanges from "./pages/IQScoreRanges.tsx";
import IsXIQGood from "./pages/IsXIQGood.tsx";
import CountryIQ from "./pages/CountryIQ.tsx";
import AverageIQByCountry from "./pages/AverageIQByCountry.tsx";
import CityIQ from "./pages/CityIQ.tsx";
import CityIQHub from "./pages/CityIQHub.tsx";
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
import ConditionIQ from "./pages/ConditionIQ.tsx";
import IQMyth from "./pages/IQMyth.tsx";
import IQCompare from "./pages/IQCompare.tsx";
import IQCompareHub from "./pages/IQCompareHub.tsx";
import StateIQ from "./pages/StateIQ.tsx";
import HighestIQEver from "./pages/HighestIQEver.tsx";
import GoodIQScore from "./pages/GoodIQScore.tsx";
import GeniusIQ from "./pages/GeniusIQ.tsx";
import MensaIQ from "./pages/MensaIQ.tsx";
import TypesOfIQTests from "./pages/TypesOfIQTests.tsx";
import IQPercentile from "./pages/IQPercentile.tsx";
import FamousIQHub from "./pages/FamousIQHub.tsx";
import CareerIQHub from "./pages/CareerIQHub.tsx";
import MajorIQ from "./pages/MajorIQ.tsx";
import MajorIQHub from "./pages/MajorIQHub.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
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
import CanYouRaiseYourIQ from "./pages/blog/CanYouRaiseYourIQ.tsx";
import HistoryOfIQTesting from "./pages/blog/HistoryOfIQTesting.tsx";
import IQAndIncome from "./pages/blog/IQAndIncome.tsx";
import GiftedChildrenIQ from "./pages/blog/GiftedChildrenIQ.tsx";
import IQAndLongevity from "./pages/blog/IQAndLongevity.tsx";
import DunningKrugerEffect from "./pages/blog/DunningKrugerEffect.tsx";
import IQAndAge from "./pages/blog/IQAndAge.tsx";
import TwiceExceptional from "./pages/blog/TwiceExceptional.tsx";
import PovertyAndIQ from "./pages/blog/PovertyAndIQ.tsx";
import { iqScores } from "./data/iqScoreData";
import { countrySlugs } from "./data/countryIQData";
import { careerSlugs } from "./data/careerIQData";
import { ageGroupSlugs } from "./data/ageIQData";
import { famousPersonSlugs } from "./data/famousIQData";
import { conditionSlugs } from "./data/conditionIQData";
import { mythSlugs } from "./data/iqMythData";
import { stateSlugs } from "./data/stateIQData";
import { compareSlugs } from "./data/iqCompareData";
import { majorSlugs } from "./data/majorIQData";
import { citySlugs } from "./data/cityIQData";

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
    {conditionSlugs.map((slug) => (
      <Route key={slug} path={`/iq-and/${slug}`} element={<ConditionIQ />} />
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
    <Route path="/iq-compare" element={<IQCompareHub />} />
    {compareSlugs.map((slug) => (
      <Route key={slug} path={`/iq-compare/${slug}`} element={<IQCompare />} />
    ))}
    <Route path="/iq-by-major" element={<MajorIQHub />} />
    {majorSlugs.map((slug) => (
      <Route key={slug} path={`/iq-by-major/${slug}`} element={<MajorIQ />} />
    ))}
    <Route path="/iq-by-city" element={<CityIQHub />} />
    {citySlugs.map((slug) => (
      <Route key={slug} path={`/iq-by-city/${slug}`} element={<CityIQ />} />
    ))}
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
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
    <Route path="/blog/can-you-raise-your-iq" element={<CanYouRaiseYourIQ />} />
    <Route path="/blog/history-of-iq-testing" element={<HistoryOfIQTesting />} />
    <Route path="/blog/iq-and-income" element={<IQAndIncome />} />
    <Route path="/blog/gifted-children-iq" element={<GiftedChildrenIQ />} />
    <Route path="/blog/iq-and-longevity" element={<IQAndLongevity />} />
    <Route path="/blog/dunning-kruger-effect" element={<DunningKrugerEffect />} />
    <Route path="/blog/iq-and-age" element={<IQAndAge />} />
    <Route path="/blog/twice-exceptional-adhd-high-iq" element={<TwiceExceptional />} />
    <Route path="/blog/poverty-and-iq" element={<PovertyAndIQ />} />
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
      <CookieConsent />
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
