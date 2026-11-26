import { selectedWork, openSource } from "../../data/projects";
import { caseStudyPath } from "../../data/caseStudies";
import Section from "../layout/Section";
import Flow from "../ui/Flow";

export default function Work() {
  return (
    <Section id="work" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {selectedWork.map((work) => (
          <article
            key={work.title}
            className="flex flex-col overflow-hidden rounded-xl border border-rule bg-panel"
          >
            <Flow steps={work.flow} highlight={work.highlight} branch={work.branch} />

            <div className="flex flex-1 flex-col border-t border-rule p-6">
              <p className="text-sm text-muted">{work.domain}</p>
              <h3 className="mt-1 text-xl font-semibold text-ink">{work.title}</h3>
              <p className="mt-2">{work.summary}</p>

              <p className="mt-auto flex items-baseline gap-3 pt-6">
                <span className="text-4xl font-semibold tracking-tight text-ink">
                  {work.metric.value}
                </span>
                <span className="text-sm text-muted">{work.metric.label}</span>
              </p>

              {work.caseStudy && (
                <a href={caseStudyPath(work.caseStudy)} className="link mt-5 inline-block self-start font-medium">
                  Read the case study
                </a>
              )}

              <details className="group mt-5 border-t border-rule pt-4">
                <summary className="cursor-pointer list-none text-sm text-ink [&::-webkit-details-marker]:hidden">
                  <span className="link group-open:hidden">More detail</span>
                  <span className="link hidden group-open:inline">Less detail</span>
                </summary>
                <p className="mt-3">{work.description}</p>
                <p className="mt-3 text-ink">{work.proof}</p>
                <p className="mt-3 text-sm text-muted">{work.tech.join(", ")}</p>
                {work.article && (
                  <a
                    href={work.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link mt-3 inline-block text-sm"
                  >
                    Read the write-up
                  </a>
                )}
              </details>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function OpenSource() {
  return (
    <Section id="open-source" title="Open source">
      <div className="grid gap-6 sm:grid-cols-2">
        {openSource.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-xl border border-rule bg-panel"
          >
            <img
              src={project.image}
              alt={`${project.title} demo`}
              loading="lazy"
              className="aspect-[16/9] w-full bg-bg object-cover object-top"
            />
            <div className="flex flex-1 flex-col border-t border-rule p-6">
              <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link mt-auto inline-block pt-4 text-sm"
              >
                View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
