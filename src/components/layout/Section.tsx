import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-8 border-t border-rule py-16 md:py-20"
    >
      <h2 id={`${id}-title`} className="mb-10 text-lg font-semibold text-ink">
        {title}
      </h2>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

interface RowProps {
  label?: string;
  children: ReactNode;
}

/** Two-column row: a short label (industry, dates, group) beside the content. */
export function Row({ label, children }: RowProps) {
  return (
    <div className="grid gap-x-10 gap-y-1 md:grid-cols-[11rem_1fr]">
      <p className="text-sm text-muted md:pt-1">{label}</p>
      <div className="max-w-[42rem]">{children}</div>
    </div>
  );
}
