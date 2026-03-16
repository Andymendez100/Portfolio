import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { resume } from "../../data/resume";
import { fadeInUp } from "../../lib/animations";
import SectionHeading from "../ui/SectionHeading";
import StatCard from "../ui/StatCard";

export default function About() {
  return (
    <div>
      <SectionHeading
        eyebrow="About"
        heading="How I Lead"
        description="Technology leader focused on teams, strategy, and measurable business outcomes."
      />

      <div>
        {/* Bio + info */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <p className="text-lg leading-relaxed text-fg">{resume.bio}</p>

          <div className="flex items-center gap-2 text-sm text-fg-muted">
            <MapPin size={16} className="text-accent-blue" />
            {resume.location}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Github, href: resume.github, label: "GitHub" },
              { icon: Linkedin, href: resume.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${resume.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-fg-muted transition-all hover:border-border-bright hover:text-fg-bold"
                aria-label={label}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-8">
        {resume.stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </motion.div>
    </div>
  );
}
