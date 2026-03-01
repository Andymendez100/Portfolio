import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-2xl font-bold gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
