import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
const isSSR = process.argv.includes("--ssr");

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: isSSR ? undefined : {
          // Core React + Router (shared by every route chunk)
          "vendor-react": ["react", "react-dom", "react-router-dom", "react-helmet-async"],
          // UI framework shared across pages
          "vendor-ui": ["framer-motion", "@tanstack/react-query", "lucide-react"],
          // NOTE: data files and page templates are intentionally NOT listed
          // here anymore. Routes are code-split via React.lazy (see
          // src/lib/asyncPage.tsx), so each page chunk pulls only the data
          // file(s) it imports instead of every page shipping all ~2MB.
        },
      },
    },
  },
}));
