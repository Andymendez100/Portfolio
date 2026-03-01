interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block rounded-lg border border-border bg-bg-elevated px-3 py-1.5 text-xs font-medium text-fg transition-all hover:border-accent-blue/40 hover:text-fg-bold">
      {name}
    </span>
  );
}
