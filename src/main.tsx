import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { AppContent } from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </HelmetProvider>
);

// If the root has pre-rendered content, hydrate; otherwise create fresh
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
