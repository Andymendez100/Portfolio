import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { caseStudies } from "./src/data/caseStudies";

const CASE_STUDY_URL = /^\/case-studies\/[a-z0-9-]+\.html/;

// Each case study is served at /case-studies/<slug>.html. The build writes a
// copy of index.html for every slug, so the links work on S3 without any
// SPA fallback rule; in dev, those URLs are rewritten to index.html.
function caseStudyPages(): Plugin {
  return {
    name: "case-study-pages",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && CASE_STUDY_URL.test(req.url)) req.url = "/index.html";
        next();
      });
    },
    closeBundle() {
      const dist = resolve(__dirname, "dist");
      const html = readFileSync(resolve(dist, "index.html"), "utf8");
      mkdirSync(resolve(dist, "case-studies"), { recursive: true });
      for (const { slug } of caseStudies) {
        writeFileSync(resolve(dist, "case-studies", `${slug}.html`), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), caseStudyPages()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
