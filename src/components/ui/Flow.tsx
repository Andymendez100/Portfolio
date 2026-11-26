interface FlowProps {
  steps: string[];
  highlight: number;
  branch?: string;
}

/** A small system diagram: steps joined by arrows, with an optional side path. */
export default function Flow({ steps, highlight, branch }: FlowProps) {
  const description = `${steps.join(", then ")}.${branch ? ` ${branch}.` : ""}`;

  return (
    <div role="img" aria-label={description} className="blueprint flex min-h-40 flex-col justify-center px-5 py-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3" aria-hidden="true">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            {i > 0 && (
              <svg width="16" height="8" viewBox="0 0 16 8" className="shrink-0 text-muted">
                <path d="M0 4h14M11 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            )}
            <span
              className={`rounded-md border px-2.5 py-1.5 text-xs leading-tight ${
                i === highlight
                  ? "border-accent bg-accent/10 font-medium text-ink"
                  : "border-line/70 bg-bg text-fg"
              }`}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>

      {branch && (
        <p className="mt-4 flex items-center gap-2 text-xs text-muted" aria-hidden="true">
          <svg width="14" height="12" viewBox="0 0 14 12" className="shrink-0">
            <path d="M1 0v6h11M9 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          {branch}
        </p>
      )}
    </div>
  );
}
