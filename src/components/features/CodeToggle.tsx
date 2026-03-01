import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface CodeToggleProps {
  active: boolean;
  onClick: () => void;
  size?: "sm" | "md";
}

export default function CodeToggle({
  active,
  onClick,
  size = "sm",
}: CodeToggleProps) {
  const iconSize = size === "sm" ? 14 : 16;
  const padding = size === "sm" ? "p-1.5" : "p-2";

  return (
    <motion.button
      onClick={onClick}
      className={`${padding} rounded-lg transition-all duration-200 ${
        active
          ? "text-accent-blue bg-accent-blue/10 border border-accent-blue/30 glow"
          : "text-fg-muted hover:text-fg-bold border border-transparent hover:border-border"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Toggle code view"
      aria-label="Toggle code view"
    >
      <Code2 size={iconSize} />
    </motion.button>
  );
}
