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

      <div className="grid gap-12 md:grid-cols-[280px_1fr]">
        {/* Headshot */}
        <motion.div variants={fadeInUp} className="flex justify-center md:justify-start">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl gradient-border">
            <img
              src="/images/headshot.jpg"
              alt="Andy Mendez"
              className="h-full w-full object-cover object-top"
            />
            {/* Gradient glow behind */}
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 blur-xl" />
          </div>
        </motion.div>

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
