import { resume } from "../../data/resume";

const nav = [
  { href: "#case-studies", label: "Case studies" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  return (
    <header className="pt-8 pb-20 md:pb-24">
      <nav aria-label="Sections" className="flex justify-end">
        <ul className="flex gap-6 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-fg transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="settle mt-16 flex flex-col gap-8 sm:flex-row sm:items-center md:mt-24">
        <img
          src="/images/headshot-320.jpg"
          alt="Andy Mendez"
          width={160}
          height={160}
          className="h-28 w-28 shrink-0 rounded-full object-cover md:h-40 md:w-40"
        />
        <div>
          <h1 className="text-5xl leading-none font-bold tracking-[-0.03em] text-ink md:text-7xl">
            {resume.name}
          </h1>
          <p className="mt-3 text-xl text-fg md:text-2xl">{resume.headline}</p>
        </div>
      </div>

      <p className="mt-10 max-w-[36rem] text-lg">{resume.summary}</p>

      <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
        <li>
          <a
            href={`mailto:${resume.email}`}
            className="inline-block rounded-sm bg-accent px-5 py-2.5 font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Email me
          </a>
        </li>
        <li>
          <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={resume.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
        </li>
      </ul>
    </header>
  );
}
