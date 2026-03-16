export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-bg">
      {/* Gradient orb 1 — blue */}
      <div
        className="gradient-orb-1 absolute -top-1/4 -left-1/4 h-[60vmax] w-[60vmax] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, #c8952e 0%, transparent 70%)",
        }}
      />
      {/* Gradient orb 2 — cyan */}
      <div
        className="gradient-orb-2 absolute -right-1/4 -bottom-1/4 h-[50vmax] w-[50vmax] rounded-full opacity-12"
        style={{
          background:
            "radial-gradient(circle, #e8c547 0%, transparent 70%)",
        }}
      />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid" />
    </div>
  );
}
