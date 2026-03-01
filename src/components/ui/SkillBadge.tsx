import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

export default function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-block px-3 py-1.5 text-xs font-medium rounded-full
        bg-glass border border-border text-fg-muted
        hover:border-accent-blue/40 hover:text-accent-blue hover:bg-accent-blue/5
        transition-all duration-200 cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  );
}
