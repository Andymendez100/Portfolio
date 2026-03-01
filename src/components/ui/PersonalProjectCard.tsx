import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { fadeInUp } from "../../lib/animations";
import TechBadge from "./TechBadge";
import type { PersonalProject } from "../../data/projects";

interface PersonalProjectCardProps {
  project: PersonalProject;
  index: number;
}

export default function PersonalProjectCard({
  project,
  index,
}: PersonalProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group overflow-hidden rounded-xl border border-border bg-bg-card transition-all hover:border-border-bright hover:shadow-lg hover:shadow-accent-blue/5"
    >
      {/* Image preview */}
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-fg-bold transition-colors group-hover:text-accent-blue">
            {project.title}
          </h3>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-fg-bold"
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-accent-cyan"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

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
      </div>
    </motion.div>
  );
}
