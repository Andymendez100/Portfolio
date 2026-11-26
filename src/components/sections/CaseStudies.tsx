import { caseStudies, caseStudyPath } from "../../data/caseStudies";
import Section from "../layout/Section";

export default function CaseStudies() {
  return (
    <Section id="case-studies" title="Case studies">
      <ul className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <a
              href={caseStudyPath(study.slug)}
              className="group flex h-full flex-col rounded-xl border border-rule bg-panel p-6 transition-colors hover:border-accent"
            >
              <span className="text-sm text-muted">{study.domain}</span>
              <span className="mt-1 text-xl font-semibold text-ink">{study.title}</span>
              <span className="mt-3">{study.summary}</span>
              <span className="mt-auto pt-6 text-sm text-ink underline decoration-accent underline-offset-4 group-hover:decoration-2">
                Read the case study
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
