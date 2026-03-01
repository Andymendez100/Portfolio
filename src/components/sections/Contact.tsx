import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, Loader2 } from "lucide-react";
import { resume } from "../../data/resume";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        import.meta.env.VITE_CONTACT_API_URL || "/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-8">
      <motion.h2
        className="text-2xl font-bold gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Get in Touch
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-fg-muted mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-lg bg-glass border border-border
                text-fg placeholder:text-fg-muted/50 focus:border-accent-blue focus:outline-none
                transition-colors duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-fg-muted mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-lg bg-glass border border-border
                text-fg placeholder:text-fg-muted/50 focus:border-accent-blue focus:outline-none
                transition-colors duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-fg-muted mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-lg bg-glass border border-border
                text-fg placeholder:text-fg-muted/50 focus:border-accent-blue focus:outline-none
                transition-colors duration-200 resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full
              bg-gradient-to-r from-accent-blue to-accent-purple text-white
              hover:opacity-90 disabled:opacity-50 transition-opacity duration-200"
          >
            {status === "sending" ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Send size={14} />
            )}
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-400">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Failed to send. Please try again or email me directly.
            </p>
          )}
        </motion.form>

        {/* Contact info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-3 text-sm text-fg-muted">
              <MapPin size={16} className="text-accent-blue flex-shrink-0" />
              {resume.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-fg-muted">
              <Mail size={16} className="text-accent-blue flex-shrink-0" />
              <a
                href={`mailto:${resume.email}`}
                className="hover:text-fg-bold transition-colors"
              >
                {resume.email}
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Github, href: resume.github, label: "GitHub" },
              { icon: Linkedin, href: resume.linkedin, label: "LinkedIn" },
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
