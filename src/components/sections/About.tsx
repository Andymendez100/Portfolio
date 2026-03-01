import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { resume } from "../../data/resume";

export default function About() {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-2xl font-bold gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Photo placeholder */}
        <motion.div
          className="flex-shrink-0 mx-auto sm:mx-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="w-36 h-36 rounded-full gradient-border overflow-hidden">
            <img
              src="/images/headshot.jpg"
              alt="Andy Mendez"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <p className="text-sm leading-relaxed text-fg-muted">{resume.bio}</p>

          <div className="flex items-center gap-2 text-xs text-fg-muted">
            <MapPin size={14} className="text-accent-blue" />
            {resume.location}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {resume.stats.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-xl p-4 text-center"
          >
            <div className="text-2xl font-bold gradient-text">
              {stat.value}
            </div>
            <div className="text-[11px] text-fg-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Social links */}
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        {[
          {
            icon: Github,
            href: resume.github,
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: resume.linkedin,
            label: "LinkedIn",
          },
          {
            icon: Mail,
            href: `mailto:${resume.email}`,
            label: "Email",
          },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full
              glass hover:bg-glass-hover text-fg-muted hover:text-fg-bold
              transition-all duration-200"
            aria-label={label}
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
