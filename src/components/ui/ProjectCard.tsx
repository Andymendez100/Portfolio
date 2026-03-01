import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { fadeInUp } from "../../lib/animations";
import TechBadge from "./TechBadge";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group rounded-xl border border-border bg-bg-card p-6 transition-all hover:-translate-y-1 hover:border-border-bright hover:shadow-lg hover:shadow-accent-blue/5"
    >
      <h3 className="mb-2 text-lg font-bold text-fg-bold transition-colors group-hover:text-accent-blue">
        {project.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-fg">
        {project.description}
      </p>

      {/* Impact metric */}
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-accent-cyan">
        <TrendingUp size={14} />
        {project.impact}
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}
