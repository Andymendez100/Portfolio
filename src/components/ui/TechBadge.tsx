interface TechBadgeProps {
  label: string;
  compact?: boolean;
}

export default function TechBadge({ label, compact }: TechBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border border-border bg-glass font-medium text-fg transition-colors hover:border-accent-blue/40 hover:text-fg-bold ${
        compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
      }`}
    >
      {label}
    </span>
  );
}
