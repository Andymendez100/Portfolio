import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SectionShell from "./components/layout/SectionShell";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import CodePanel from "./components/features/CodeShowcase";

// Raw source code imports for code panel
import heroSource from "./components/sections/Hero.tsx?raw";
import aboutSource from "./components/sections/About.tsx?raw";
import experienceSource from "./components/sections/Experience.tsx?raw";
import skillsSource from "./components/sections/Skills.tsx?raw";
import projectsSource from "./components/sections/Projects.tsx?raw";
import contactSource from "./components/sections/Contact.tsx?raw";

const codeFiles = [
  { id: "hero", filename: "Hero.tsx", code: heroSource },
  { id: "about", filename: "About.tsx", code: aboutSource },
  { id: "experience", filename: "Experience.tsx", code: experienceSource },
  { id: "skills", filename: "Skills.tsx", code: skillsSource },
  { id: "projects", filename: "Projects.tsx", code: projectsSource },
  { id: "contact", filename: "Contact.tsx", code: contactSource },
];

const sections = [
  { id: "about", component: About },
  { id: "experience", component: Experience },
  { id: "skills", component: Skills },
  { id: "projects", component: Projects },
  { id: "contact", component: Contact },
] as const;

export default function App() {
  const [showCode, setShowCode] = useState(false);
  const toggleCode = useCallback(() => setShowCode((v) => !v), []);
  const closeCode = useCallback(() => setShowCode(false), []);

  return (
    <div className="relative">
      <Background />

      <div className="relative z-10">
        <Navbar onCodeToggle={toggleCode} codeOpen={showCode} />
        <Hero />

        {sections.map((s) => (
          <SectionShell key={s.id} id={s.id}>
            <s.component />
          </SectionShell>
        ))}

        <Footer />
      </div>

      <AnimatePresence>
        {showCode && <CodePanel files={codeFiles} onClose={closeCode} />}
      </AnimatePresence>
    </div>
  );
}
