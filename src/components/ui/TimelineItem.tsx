import { motion } from "framer-motion";
import type { ExperienceEntry } from "../../data/experience";

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
}

export default function TimelineItem({ entry, index }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      {/* Timeline line */}
      <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-accent-blue to-accent-purple opacity-30" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-accent-blue bg-bg" />

      {/* Content card */}
      <div className="glass rounded-xl p-5 hover:bg-glass-hover transition-colors duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-base font-semibold text-fg-bold">
              {entry.title}
            </h3>
            <p className="text-sm gradient-text font-medium">{entry.company}</p>
          </div>
          <span className="text-xs text-fg-muted font-mono">{entry.period}</span>
        </div>

        <ul className="space-y-1.5 mb-3">
          {entry.highlights.map((highlight, i) => (
            <li key={i} className="text-sm text-fg-muted leading-relaxed">
              <span className="text-accent-blue mr-2">›</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {entry.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-medium rounded-full
                bg-accent-blue/10 text-accent-blue/80 border border-accent-blue/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
