import { useState, useEffect } from "react";
import type { SectionId } from "../App";

const validSections: SectionId[] = [
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1) as SectionId;
      if (validSections.includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection(null);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return { activeSection, setActiveSection };
}
