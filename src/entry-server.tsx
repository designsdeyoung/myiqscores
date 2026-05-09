import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppContent } from "./App";

export { famousPersonSlugs } from "@/data/famousIQData";
export { conditionSlugs } from "@/data/conditionIQData";
export { iqScores } from "@/data/iqScoreData";
export { ageGroupSlugs } from "@/data/ageIQData";
export { countrySlugs } from "@/data/countryIQData";
export { careerSlugs } from "@/data/careerIQData";
export { stateSlugs } from "@/data/stateIQData";
export { mythSlugs } from "@/data/iqMythData";
export { majorSlugs } from "@/data/majorIQData";

export function render(url: string) {
  const helmetContext = {} as any;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    html,
    head: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ]
      .filter(Boolean)
      .join("\n    "),
  };
}
