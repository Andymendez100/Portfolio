import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface CodeToggleContextValue {
  globalCodeView: boolean;
  toggleGlobal: () => void;
  sectionStates: Record<string, boolean>;
  toggleSection: (sectionId: string) => void;
  isCodeView: (sectionId: string) => boolean;
}

const CodeToggleContext = createContext<CodeToggleContextValue | null>(null);

export function CodeToggleProvider({ children }: { children: ReactNode }) {
  const [globalCodeView, setGlobalCodeView] = useState(false);
  const [sectionStates, setSectionStates] = useState<Record<string, boolean>>({});

  const toggleGlobal = useCallback(() => {
    setGlobalCodeView((prev) => {
      const next = !prev;
      // Reset all individual states to match global
      setSectionStates({});
      return next;
    });
  }, []);

  const toggleSection = useCallback((sectionId: string) => {
    setSectionStates((prev) => ({
      ...prev,
      [sectionId]: !(prev[sectionId] ?? globalCodeView),
    }));
  }, [globalCodeView]);

  const isCodeView = useCallback(
    (sectionId: string) => {
      return sectionStates[sectionId] ?? globalCodeView;
    },
    [sectionStates, globalCodeView],
  );

  return (
    <CodeToggleContext.Provider
      value={{ globalCodeView, toggleGlobal, sectionStates, toggleSection, isCodeView }}
    >
      {children}
    </CodeToggleContext.Provider>
  );
}

export function useCodeToggle() {
  const context = useContext(CodeToggleContext);
  if (!context) throw new Error("useCodeToggle must be used within CodeToggleProvider");
  return context;
}
