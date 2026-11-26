import { useEffect } from "react";
import type { CaseStudy } from "../../data/caseStudies";
import { selectedWork } from "../../data/projects";
import { resume } from "../../data/resume";
import Flow from "../ui/Flow";

/** "Short title: explanation" bullets render the title in bold. */
function Bullet({ text }: { text: string }) {
  const split = text.indexOf(": ");
  if (split > 0 && split < 60) {
    return (
      <li>
        <span className="font-semibold text-ink">{text.slice(0, split)}.</span> {text.slice(split + 2)}
      </li>
    );
  }
  return <li>{text}</li>;
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  useEffect(() => {
    document.title = `${study.title} | ${resume.name}`;
    window.scrollTo(0, 0);
  }, [study]);

  const flow = study.flow ?? selectedWork.find((w) => w.caseStudy === study.slug);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <nav aria-label="Site" className="flex items-center justify-between pt-8 text-sm">
        <a href="/" className="font-semibold text-ink">
          {resume.name}
        </a>
        <a href="/#case-studies" className="text-fg transition-colors hover:text-ink">
          All case studies
        </a>
      </nav>

      <article className="pb-20">
        <header className="settle mt-16 max-w-[46rem] md:mt-24">
          <p className="text-sm text-muted">Case study, {study.domain}</p>
          <h1 className="mt-3 text-4xl leading-[1.1] font-bold tracking-[-0.02em] text-ink md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-6 text-xl">{study.summary}</p>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="inline text-muted">Role </dt>
              <dd className="inline text-ink">{study.role}</dd>
            </div>
            <div>
              <dt className="inline text-muted">When </dt>
              <dd className="inline text-ink">{study.period}</dd>
            </div>
          </dl>
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {study.results.map((result) => (
            <div key={result.label} className="rounded-xl border border-rule bg-panel p-5">
              <p className="text-3xl font-semibold tracking-tight text-ink">{result.value}</p>
              <p className="mt-1 text-sm text-muted">{result.label}</p>
            </div>
          ))}
        </div>

        {flow && (
          <div className="mt-4 overflow-hidden rounded-xl border border-rule">
            <Flow steps={flow.flow} highlight={flow.highlight} branch={flow.branch} />
          </div>
        )}

        <div className="max-w-[46rem]">
          {study.sections.map((section) => (
            <section key={section.heading} className="mt-14">
              <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-3 pl-5 text-lg leading-relaxed marker:text-accent">
                  {section.bullets.map((b) => (
                    <Bullet key={b} text={b} />
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-ink">Built with</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <li key={item} className="rounded-md border border-rule bg-panel px-2.5 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <p className="text-xl text-ink">Want to talk about this work?</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={`mailto:${resume.email}`}
                className="inline-block rounded-sm bg-accent px-5 py-2.5 font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Email me
              </a>
              <a href="/#case-studies" className="link">
                Read another case study
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
