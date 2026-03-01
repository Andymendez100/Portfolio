import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="glass rounded-xl p-6 hover:bg-glass-hover transition-all duration-200 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -2 }}
    >
      <h3 className="text-lg font-semibold text-fg-bold mb-2 group-hover:gradient-text transition-all duration-200">
        {project.title}
      </h3>

      <p className="text-sm text-fg-muted leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Impact metric */}
      <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-accent-blue/5 border border-accent-blue/10">
        <TrendingUp size={14} className="text-accent-blue flex-shrink-0" />
        <span className="text-xs font-medium text-accent-blue">
          {project.impact}
        </span>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[10px] font-medium rounded-full
              bg-accent-purple/10 text-accent-purple/80 border border-accent-purple/20"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
