import { resume } from "../../data/resume";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  return (
    <header className="pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/images/headshot-168.jpg"
            alt="Andy Mendez"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover object-top"
          />
          <div className="leading-tight">
            <p className="font-semibold text-ink">{resume.name}</p>
            <p className="text-sm text-muted">{resume.headline}</p>
          </div>
        </div>

        <nav aria-label="Sections">
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
      </div>

      <h1 className="settle mt-20 max-w-[24ch] text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:mt-28">
        {resume.statement}
      </h1>

      <p className="mt-8 max-w-[38rem] text-lg">{resume.summary}</p>

      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        <li>
          <a href={`mailto:${resume.email}`} className="link font-medium">
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
