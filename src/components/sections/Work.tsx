import { selectedWork, openSource } from "../../data/projects";
import Section, { Row } from "../layout/Section";

export default function Work() {
  return (
    <Section id="work" title="Selected work">
      {selectedWork.map((work) => (
        <Row key={work.title} label={work.domain}>
          <article>
            <h3 className="text-xl font-semibold text-ink">{work.title}</h3>
            <p className="mt-3">{work.description}</p>
            <p className="mt-3 text-ink">{work.proof}</p>
            <p className="mt-3 text-sm text-muted">{work.tech.join(", ")}</p>
            {work.article && (
              <a
                href={work.article}
                target="_blank"
                rel="noopener noreferrer"
                className="link mt-4 inline-block text-sm"
              >
                Read the write-up
              </a>
            )}
          </article>
        </Row>
      ))}
    </Section>
  );
}

export function OpenSource() {
  return (
    <Section id="open-source" title="Open source">
      <Row>
        <ul className="space-y-6">
          {openSource.map((project) => (
            <li key={project.title}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link font-semibold"
              >
                {project.title}
              </a>
              <p className="mt-1">{project.description}</p>
            </li>
          ))}
        </ul>
      </Row>
    </Section>
  );
}
