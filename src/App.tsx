import Hero from "./components/sections/Hero";
import Work, { OpenSource } from "./components/sections/Work";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { resume } from "./data/resume";

export default function App() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Hero />
      <main>
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
