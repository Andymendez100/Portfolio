interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block rounded-full border border-border bg-glass px-3 py-1 text-xs font-medium text-fg transition-colors hover:border-accent-blue/40 hover:text-fg-bold">
      {label}
    </span>
  );
}
