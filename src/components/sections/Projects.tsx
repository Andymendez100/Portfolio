import { personalProjects, professionalProjects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import PersonalProjectCard from "../ui/PersonalProjectCard";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div>
      {/* Professional Highlights — lead with business impact */}
      <SectionHeading
        eyebrow="Projects"
        heading="Industry Experience"
        description="Production systems and innovations across AI, cloud, and full-stack engineering."
      />

      <div className="mb-16 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Personal Projects */}
      <SectionHeading
        eyebrow="Open Source"
        heading="What I'm Building"
        description="Personal projects exploring AI, voice systems, and developer tools."
      />

      <div className={`grid gap-6 ${personalProjects.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {personalProjects.map((project, index) => (
          <PersonalProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
