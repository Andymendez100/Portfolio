import { useState } from "react";
import { resume } from "../../data/resume";
import Section, { Row } from "../layout/Section";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
] as const;

const inputClasses =
  "mt-2 w-full rounded-sm border border-line bg-transparent px-3 py-2.5 text-ink transition-colors focus:border-accent focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(import.meta.env.VITE_CONTACT_API_URL || "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" title="Contact">
      <Row>
        <p className="text-xl text-ink">
          I'm open to AI engineering leadership roles: Head of AI, and Director or VP of Engineering.
        </p>
        <p className="mt-4">
          Email{" "}
          <a href={`mailto:${resume.email}`} className="link">
            {resume.email}
          </a>{" "}
          or send a message here.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.id} className="block text-sm text-muted">
                {field.label}
                <input
                  id={field.id}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required
                  value={form[field.id]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className={inputClasses}
                />
              </label>
            ))}
          </div>

          <label className="block text-sm text-muted">
            Message
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClasses} resize-y`}
            />
          </label>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-sm bg-accent px-5 py-2.5 font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending message…" : "Send message"}
            </button>

            <p role="status" className="text-sm">
              {status === "success" && <span className="text-ink">Message sent. I'll reply by email.</span>}
              {status === "error" && (
                <span className="text-ink">
                  Your message didn't send. Email me at {resume.email} instead.
                </span>
              )}
            </p>
          </div>
        </form>
      </Row>
    </Section>
  );
}
