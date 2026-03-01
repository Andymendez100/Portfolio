interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div>
      <p className="text-2xl font-bold text-accent-cyan md:text-3xl">
        {value}
      </p>
      <p className="text-sm text-fg-muted">{label}</p>
    </div>
  );
}
