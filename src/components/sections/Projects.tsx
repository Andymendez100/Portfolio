import { personalProjects, professionalProjects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import PersonalProjectCard from "../ui/PersonalProjectCard";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div>
      {/* Personal Projects */}
      <SectionHeading
        eyebrow="Projects"
        heading="What I'm Building"
        description="Side projects and open-source work."
      />

      <div className={`mb-20 grid gap-6 ${personalProjects.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {personalProjects.map((project, index) => (
          <PersonalProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Professional Highlights */}
      <SectionHeading
        eyebrow="Professional"
        heading="Industry Experience"
        description="Production systems and innovations across AI, cloud, and full-stack engineering."
      />

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
