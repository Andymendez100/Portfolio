import Hero from "./components/sections/Hero";
import Work, { OpenSource } from "./components/sections/Work";
import CaseStudies from "./components/sections/CaseStudies";
import CaseStudyPage from "./components/pages/CaseStudyPage";
import { caseStudies } from "./data/caseStudies";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { resume } from "./data/resume";

function currentCaseStudy() {
  const match = window.location.pathname.match(/^\/case-studies\/([a-z0-9-]+?)(?:\.html)?\/?$/);
  return match ? caseStudies.find((study) => study.slug === match[1]) : undefined;
}

export default function App() {
  const study = currentCaseStudy();
  if (study) return <CaseStudyPage study={study} />;

  return (
    <div className="mx-auto max-w-6xl px-6">
      <Hero />
      <main>
        <CaseStudies />
        <Work />
        <Experience />
        <OpenSource />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-rule py-10 text-sm text-muted">
        &copy; {new Date().getFullYear()} {resume.name}, {resume.location}
      </footer>
    </div>
  );
}
