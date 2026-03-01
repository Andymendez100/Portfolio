import { Github, Linkedin, Mail } from "lucide-react";
import { resume } from "../../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-fg-muted">
          &copy; {new Date().getFullYear()} {resume.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg-bold"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg-bold"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${resume.email}`}
            className="text-fg-muted transition-colors hover:text-fg-bold"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
