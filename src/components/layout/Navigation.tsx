import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useCodeToggle } from "../../hooks/useCodeToggle";
import type { SectionId } from "../../App";

interface NavigationProps {
  sections: { id: SectionId; label: string }[];
  activeSection: SectionId | null;
  onNavigate: (id: SectionId) => void;
}

export default function Navigation({
  sections,
  activeSection,
  onNavigate,
}: NavigationProps) {
  const { globalCodeView, toggleGlobal } = useCodeToggle();

  return (
    <motion.nav
      className="flex flex-col sm:flex-row"
      style={{
        border: "1px solid white",
        borderRadius: "4px",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: activeSection ? 0 : 1,
        y: activeSection ? -10 : 0,
        pointerEvents: activeSection ? "none" : "auto",
      }}
      transition={{ duration: 0.325 }}
    >
      {sections.map((section, i) => (
        <motion.button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className={`nav-item text-fg-muted hover:text-fg-bold transition-colors duration-200`}
          style={{
            minWidth: "7.5rem",
            height: "2.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.2rem",
            fontSize: "0.8rem",
            background: "transparent",
            padding: "0 1.25rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.075)" }}
          whileTap={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          {section.label}
        </motion.button>
      ))}

      {/* Code toggle — last item in the row */}
      <motion.button
        onClick={toggleGlobal}
        className={`nav-item transition-colors duration-200 flex items-center justify-center ${
          globalCodeView ? "text-accent-blue" : "text-fg-muted hover:text-fg-bold"
        }`}
        style={{
          minWidth: "2.75rem",
          height: "2.75rem",
          background: globalCodeView ? "rgba(88,166,255,0.1)" : "transparent",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 + sections.length * 0.08, duration: 0.4 }}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.075)" }}
        whileTap={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        title="Toggle code view"
      >
        <Code2 size={16} />
      </motion.button>
    </motion.nav>
  );
}
