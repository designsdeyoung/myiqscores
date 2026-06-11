// SSR-safe route-level code splitting.
//
// Client: pages load as React.lazy chunks inside the <Suspense> wrapper in
// AppRoutes, so a visitor downloads only the JS for the route they're on
// (previously every page shipped the entire 2.1MB app graph).
//
// Server (prerender): renderToString cannot suspend, so prerender calls
// preloadAllPages() once, which resolves every page module into the cache;
// the same component then renders synchronously with no Suspense fallback in
// the prerendered HTML. During client hydration React keeps the prerendered
// DOM visible while the route chunk loads.
import { lazy, type ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

const cache = new Map<Loader, ComponentType>();
const registry: Loader[] = [];

export function asyncPage(loader: Loader): ComponentType {
  const Lazy = lazy(loader);
  registry.push(loader);
  const Page = (props: Record<string, unknown>) => {
    const Resolved = cache.get(loader);
    if (Resolved) return <Resolved {...props} />;
    return <Lazy {...props} />;
  };
  return Page;
}

export async function preloadAllPages(): Promise<void> {
  await Promise.all(
    registry.map(async (loader) => {
      const m = await loader();
      cache.set(loader, m.default);
    }),
  );
}
