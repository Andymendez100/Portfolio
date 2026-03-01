import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import TechBadge from "./TechBadge";

interface TimelineItemProps {
  entry: {
    company: string;
    title: string;
    period: string;
    highlights: string[];
    tech: string[];
  };
  index: number;
  isCurrent?: boolean;
}

export default function TimelineItem({ entry, index, isCurrent }: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="relative rounded-xl border border-border bg-bg-card p-6 transition-colors hover:border-border-bright"
    >
      {/* Left accent border */}
      <div className="absolute top-0 left-0 h-full w-0.5 rounded-full bg-gradient-to-b from-accent-blue to-accent-cyan" />

      <div className="pl-4">
        <div className="mb-1 flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-fg-bold">{entry.title}</h3>
          {isCurrent && (
            <span className="rounded-full bg-accent-blue/10 px-2.5 py-0.5 text-xs font-medium text-accent-blue">
              Current
            </span>
          )}
        </div>

        <p className="mb-3 text-sm text-fg-muted">
          {entry.company} &middot; {entry.period}
        </p>

        <ul className="mb-4 space-y-1.5">
          {entry.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-2 text-sm leading-relaxed text-fg"
            >
              <span className="mt-1 text-accent-blue">›</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {entry.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
