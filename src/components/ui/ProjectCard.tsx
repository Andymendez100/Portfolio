import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { fadeInUp } from "../../lib/animations";
import TechBadge from "./TechBadge";
import type { ProfessionalProject } from "../../data/projects";

interface ProjectCardProps {
  project: ProfessionalProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group rounded-lg border border-border bg-bg-card p-4 transition-all hover:border-border-bright hover:shadow-lg hover:shadow-accent-blue/5"
    >
      <h3 className="mb-1.5 text-sm font-bold text-fg-bold transition-colors group-hover:text-accent-blue">
        {project.title}
      </h3>

      <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-fg">
        {project.description}
      </p>

      {/* Impact metric */}
      <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-accent-cyan">
        <TrendingUp size={12} />
        {project.impact}
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} compact />
        ))}
      </div>
    </motion.div>
  );
}
