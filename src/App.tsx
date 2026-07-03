import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { asyncPage } from "@/lib/asyncPage";
// The homepage (quiz landing) stays in the entry chunk: it is the LCP-critical
// page and must hydrate without an extra chunk round-trip.
import Index from "./pages/Index.tsx";
// Route slugs come from the compact generated link index, NOT the full data
// files, so the route table doesn't pull ~2MB of content data into the entry.
import {
  famousIndex,
  careerIndex,
  majorIndex,
  cityIndex,
  countryIndex,
  stateIndex,
  conditionIndex,
  mythIndex,
  compareIndex,
  ageIndex,
  scoreIndex,
  questionIndex,
} from "@/generated/linkIndex";

// Every other page is its own lazy chunk (SSR preloads them; see asyncPage).
const NotFound = asyncPage(() => import("./pages/NotFound.tsx"));
const WhatIsIQ = asyncPage(() => import("./pages/WhatIsIQ.tsx"));
const IQScoreRanges = asyncPage(() => import("./pages/IQScoreRanges.tsx"));
const IsXIQGood = asyncPage(() => import("./pages/IsXIQGood.tsx"));
const CountryIQ = asyncPage(() => import("./pages/CountryIQ.tsx"));
const AverageIQByCountry = asyncPage(() => import("./pages/AverageIQByCountry.tsx"));
const CityIQ = asyncPage(() => import("./pages/CityIQ.tsx"));
const CityIQHub = asyncPage(() => import("./pages/CityIQHub.tsx"));
const CareerIQ = asyncPage(() => import("./pages/CareerIQ.tsx"));
const IQvsEQ = asyncPage(() => import("./pages/IQvsEQ.tsx"));
const SATtoIQ = asyncPage(() => import("./pages/SATtoIQ.tsx"));
const ACTtoIQ = asyncPage(() => import("./pages/ACTtoIQ.tsx"));
const GREtoIQ = asyncPage(() => import("./pages/GREtoIQ.tsx"));
const ASVABtoIQ = asyncPage(() => import("./pages/ASVABtoIQ.tsx"));
const StateIQHub = asyncPage(() => import("./pages/StateIQHub.tsx"));
const HowToImproveIQ = asyncPage(() => import("./pages/HowToImproveIQ.tsx"));
const AgeIQ = asyncPage(() => import("./pages/AgeIQ.tsx"));
const FamousIQ = asyncPage(() => import("./pages/FamousIQ.tsx"));
const ConditionIQ = asyncPage(() => import("./pages/ConditionIQ.tsx"));
const IQMyth = asyncPage(() => import("./pages/IQMyth.tsx"));
const IQCompare = asyncPage(() => import("./pages/IQCompare.tsx"));
const IQCompareHub = asyncPage(() => import("./pages/IQCompareHub.tsx"));
const StateIQ = asyncPage(() => import("./pages/StateIQ.tsx"));
const HighestIQEver = asyncPage(() => import("./pages/HighestIQEver.tsx"));
const GoodIQScore = asyncPage(() => import("./pages/GoodIQScore.tsx"));
const GeniusIQ = asyncPage(() => import("./pages/GeniusIQ.tsx"));
const MensaIQ = asyncPage(() => import("./pages/MensaIQ.tsx"));
const TypesOfIQTests = asyncPage(() => import("./pages/TypesOfIQTests.tsx"));
const IQPercentile = asyncPage(() => import("./pages/IQPercentile.tsx"));
const FamousIQHub = asyncPage(() => import("./pages/FamousIQHub.tsx"));
const CareerIQHub = asyncPage(() => import("./pages/CareerIQHub.tsx"));
const MajorIQ = asyncPage(() => import("./pages/MajorIQ.tsx"));
const MajorIQHub = asyncPage(() => import("./pages/MajorIQHub.tsx"));
const PrivacyPolicy = asyncPage(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = asyncPage(() => import("./pages/TermsOfService.tsx"));
const About = asyncPage(() => import("./pages/About.tsx"));
const Methodology = asyncPage(() => import("./pages/Methodology.tsx"));
const EditorialPolicy = asyncPage(() => import("./pages/EditorialPolicy.tsx"));
const Contact = asyncPage(() => import("./pages/Contact.tsx"));
const Unsubscribe = asyncPage(() => import("./pages/Unsubscribe.tsx"));
const AverageIQUS = asyncPage(() => import("./pages/AverageIQUS.tsx"));
const PresidentIQ = asyncPage(() => import("./pages/PresidentIQ.tsx"));
const LowIQ = asyncPage(() => import("./pages/LowIQ.tsx"));
const AverageIQ = asyncPage(() => import("./pages/AverageIQ.tsx"));
const IQTest = asyncPage(() => import("./pages/IQTest.tsx"));
const PracticeIQTest = asyncPage(() => import("./pages/PracticeIQTest.tsx"));
const Disclaimer = asyncPage(() => import("./pages/Disclaimer.tsx"));
const HowItWorks = asyncPage(() => import("./pages/HowItWorks.tsx"));
const Blog = asyncPage(() => import("./pages/Blog.tsx"));
const WhatIsIQScore = asyncPage(() => import("./pages/blog/WhatIsIQScore.tsx"));
const HowToIncreaseIQ = asyncPage(() => import("./pages/blog/HowToIncreaseIQ.tsx"));
const IQvsSuccess = asyncPage(() => import("./pages/blog/IQvsSuccess.tsx"));
const FamousIQScores = asyncPage(() => import("./pages/blog/FamousIQScores.tsx"));
const IQByCountry = asyncPage(() => import("./pages/blog/IQByCountry.tsx"));
const WhatIsGeniusIQ = asyncPage(() => import("./pages/blog/WhatIsGeniusIQ.tsx"));
const IQTestsAccurate = asyncPage(() => import("./pages/blog/IQTestsAccurate.tsx"));
const EmotionalIntelligenceVsIQ = asyncPage(() => import("./pages/blog/EmotionalIntelligenceVsIQ.tsx"));
const FluidVsCrystallizedIntelligence = asyncPage(() => import("./pages/blog/FluidVsCrystallizedIntelligence.tsx"));
const FlynnEffect = asyncPage(() => import("./pages/blog/FlynnEffect.tsx"));
const IQGeneticsNatureVsNurture = asyncPage(() => import("./pages/blog/IQGeneticsNatureVsNurture.tsx"));
const SleepAndIQ = asyncPage(() => import("./pages/blog/SleepAndIQ.tsx"));
const NutritionAndIQ = asyncPage(() => import("./pages/blog/NutritionAndIQ.tsx"));
const IQAndMentalHealth = asyncPage(() => import("./pages/blog/IQAndMentalHealth.tsx"));
const IQAndWorkplace = asyncPage(() => import("./pages/blog/IQAndWorkplace.tsx"));
const WorkingMemoryAndIQ = asyncPage(() => import("./pages/blog/WorkingMemoryAndIQ.tsx"));
const IQTestingInChildren = asyncPage(() => import("./pages/blog/IQTestingInChildren.tsx"));
const ExerciseAndIQ = asyncPage(() => import("./pages/blog/ExerciseAndIQ.tsx"));
const MultipleIntelligences = asyncPage(() => import("./pages/blog/MultipleIntelligences.tsx"));
const IQAndCreativity = asyncPage(() => import("./pages/blog/IQAndCreativity.tsx"));
const IQAndLeadership = asyncPage(() => import("./pages/blog/IQAndLeadership.tsx"));
const CanYouRaiseYourIQ = asyncPage(() => import("./pages/blog/CanYouRaiseYourIQ.tsx"));
const HistoryOfIQTesting = asyncPage(() => import("./pages/blog/HistoryOfIQTesting.tsx"));
const IQAndIncome = asyncPage(() => import("./pages/blog/IQAndIncome.tsx"));
const GiftedChildrenIQ = asyncPage(() => import("./pages/blog/GiftedChildrenIQ.tsx"));
const IQAndLongevity = asyncPage(() => import("./pages/blog/IQAndLongevity.tsx"));
const DunningKrugerEffect = asyncPage(() => import("./pages/blog/DunningKrugerEffect.tsx"));
const IQAndAge = asyncPage(() => import("./pages/blog/IQAndAge.tsx"));
const TwiceExceptional = asyncPage(() => import("./pages/blog/TwiceExceptional.tsx"));
const PovertyAndIQ = asyncPage(() => import("./pages/blog/PovertyAndIQ.tsx"));
const LogicalReasoning = asyncPage(() => import("./pages/tests/LogicalReasoning.tsx"));
const PatternRecognition = asyncPage(() => import("./pages/tests/PatternRecognition.tsx"));
const VerbalReasoning = asyncPage(() => import("./pages/tests/VerbalReasoning.tsx"));
const SpatialReasoning = asyncPage(() => import("./pages/tests/SpatialReasoning.tsx"));
const NumericalReasoning = asyncPage(() => import("./pages/tests/NumericalReasoning.tsx"));
const MemoryTest = asyncPage(() => import("./pages/tests/MemoryTest.tsx"));
const AbstractReasoning = asyncPage(() => import("./pages/tests/AbstractReasoning.tsx"));
const QuestionPage = asyncPage(() => import("./pages/QuestionPage.tsx"));
const QuestionsHub = asyncPage(() => import("./pages/QuestionsHub.tsx"));
const WhatIsIntelligence = asyncPage(() => import("./pages/WhatIsIntelligence.tsx"));
const ToolsHub = asyncPage(() => import("./pages/tools/ToolsHub.tsx"));
const PercentileCalculator = asyncPage(() => import("./pages/tools/PercentileCalculator.tsx"));
const SatToIQConverter = asyncPage(() => import("./pages/tools/SatToIQConverter.tsx"));
const IQRarity = asyncPage(() => import("./pages/tools/IQRarity.tsx"));
const CelebrityIQMatch = asyncPage(() => import("./pages/tools/CelebrityIQMatch.tsx"));
const ReactionTimeTest = asyncPage(() => import("./pages/tools/ReactionTimeTest.tsx"));
const NumberMemoryTest = asyncPage(() => import("./pages/tools/NumberMemoryTest.tsx"));
const SequenceMemoryTest = asyncPage(() => import("./pages/tools/SequenceMemoryTest.tsx"));
const VisualMemoryTest = asyncPage(() => import("./pages/tools/VisualMemoryTest.tsx"));
const VerbalMemoryTest = asyncPage(() => import("./pages/tools/VerbalMemoryTest.tsx"));
const DigitSpanTest = asyncPage(() => import("./pages/tools/DigitSpanTest.tsx"));
const IQTestForKids = asyncPage(() => import("./pages/IQTestForKids.tsx"));
const IQTestForTeens = asyncPage(() => import("./pages/IQTestForTeens.tsx"));

const queryClient = new QueryClient();

const iqScores = scoreIndex;
const countrySlugs = countryIndex.map((c) => c.slug);
const careerSlugs = careerIndex.map((c) => c.slug);
const ageGroupSlugs = ageIndex.map((a) => a.slug);
const famousPersonSlugs = famousIndex.map((p) => p.slug);
const conditionSlugs = conditionIndex.map((c) => c.slug);
const mythSlugs = mythIndex.map((m) => m.slug);
const stateSlugs = stateIndex.map((s) => s.slug);
const compareSlugs = compareIndex.map((c) => c.slug);
const majorSlugs = majorIndex.map((m) => m.slug);
const citySlugs = cityIndex.map((c) => c.slug);
const questionSlugs = questionIndex.map((q) => q.slug);

// Extracted routes for reuse with StaticRouter during pre-rendering
export const AppRoutes = () => (
  <Suspense fallback={null}>
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
      <Route path="/average-iq" element={<AverageIQ />} />
      <Route path="/iq-test" element={<IQTest />} />
      <Route path="/practice-iq-test" element={<PracticeIQTest />} />
      <Route path="/tests/logical-reasoning" element={<LogicalReasoning />} />
      <Route path="/tests/pattern-recognition" element={<PatternRecognition />} />
      <Route path="/tests/verbal-reasoning" element={<VerbalReasoning />} />
      <Route path="/tests/spatial-reasoning" element={<SpatialReasoning />} />
      <Route path="/tests/numerical-reasoning" element={<NumericalReasoning />} />
      <Route path="/tests/memory" element={<MemoryTest />} />
      <Route path="/tests/abstract-reasoning" element={<AbstractReasoning />} />
      <Route path="/what-is-intelligence" element={<WhatIsIntelligence />} />
      <Route path="/tools/reaction-time-test" element={<ReactionTimeTest />} />
      <Route path="/tools/number-memory-test" element={<NumberMemoryTest />} />
      <Route path="/tools/sequence-memory-test" element={<SequenceMemoryTest />} />
      <Route path="/tools/visual-memory-test" element={<VisualMemoryTest />} />
      <Route path="/tools/verbal-memory-test" element={<VerbalMemoryTest />} />
      <Route path="/tools/digit-span-test" element={<DigitSpanTest />} />
      <Route path="/iq-test-for-kids" element={<IQTestForKids />} />
      <Route path="/iq-test-for-teens" element={<IQTestForTeens />} />
      <Route path="/questions" element={<QuestionsHub />} />
      {questionSlugs.map((slug) => (
        <Route key={slug} path={`/questions/${slug}`} element={<QuestionPage />} />
      ))}
      <Route path="/tools" element={<ToolsHub />} />
      <Route path="/tools/iq-percentile-calculator" element={<PercentileCalculator />} />
      <Route path="/tools/sat-to-iq-converter" element={<SatToIQConverter />} />
      <Route path="/tools/iq-rarity" element={<IQRarity />} />
      <Route path="/tools/celebrity-iq-match" element={<CelebrityIQMatch />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
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
  </Suspense>
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
