import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Background from "./components/layout/Background";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import SectionWrapper from "./components/layout/SectionWrapper";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { CodeToggleProvider } from "./hooks/useCodeToggle";

// Raw source code imports for code toggle feature
import aboutSource from "./components/sections/About.tsx?raw";
import experienceSource from "./components/sections/Experience.tsx?raw";
import skillsSource from "./components/sections/Skills.tsx?raw";
import projectsSource from "./components/sections/Projects.tsx?raw";
import contactSource from "./components/sections/Contact.tsx?raw";

export type SectionId =
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "contact";

interface SectionConfig {
  id: SectionId;
  label: string;
  component: React.FC;
  source: string;
  filename: string;
}

const sections: SectionConfig[] = [
  { id: "about", label: "About", component: About, source: aboutSource, filename: "About.tsx" },
  { id: "experience", label: "Experience", component: Experience, source: experienceSource, filename: "Experience.tsx" },
  { id: "skills", label: "Skills", component: Skills, source: skillsSource, filename: "Skills.tsx" },
  { id: "projects", label: "Projects", component: Projects, source: projectsSource, filename: "Projects.tsx" },
  { id: "contact", label: "Contact", component: Contact, source: contactSource, filename: "Contact.tsx" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const openSection = useCallback((id: SectionId) => {
    setActiveSection(id);
    window.location.hash = id;
  }, []);

  const closeSection = useCallback(() => {
    setActiveSection(null);
    history.pushState(null, "", window.location.pathname);
  }, []);

  // Handle hash changes (back/forward navigation)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1) as SectionId;
      if (sections.some((s) => s.id === hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection(null);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeSection) {
        closeSection();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, closeSection]);

  const activeConfig = activeSection
    ? sections.find((s) => s.id === activeSection)
    : null;

  return (
    <CodeToggleProvider>
      <div className="relative min-h-screen">
        <Background blurred={activeSection !== null} />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
          <Header shrunk={activeSection !== null} />
          <Navigation
            sections={sections.map((s) => ({ id: s.id, label: s.label }))}
            activeSection={activeSection}
            onNavigate={openSection}
          />
          <Footer visible={activeSection === null} />
        </div>

        <AnimatePresence mode="wait">
          {activeConfig && (
            <SectionWrapper
              key={activeConfig.id}
              sectionId={activeConfig.id}
              onClose={closeSection}
              sourceCode={activeConfig.source}
              filename={activeConfig.filename}
            >
              <activeConfig.component />
            </SectionWrapper>
          )}
        </AnimatePresence>
      </div>
    </CodeToggleProvider>
  );
}
