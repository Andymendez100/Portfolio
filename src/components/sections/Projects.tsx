import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div>
      <SectionHeading
        eyebrow="Projects"
        heading="Featured Work"
        description="Production systems and innovations across AI, cloud, and full-stack engineering."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
