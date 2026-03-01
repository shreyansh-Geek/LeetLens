export default function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Blue glow */}
      <div className="absolute top-40 right-[10%] w-[420px] h-[260px] bg-blue-500/25 blur-[200px]" />

      {/* Pink glow */}
      <div className="absolute top-96 left-[8%] w-[420px] h-[260px] bg-fuchsia-500/25 blur-[200px]" />

      {/* Blue glow */}
      <div className="absolute bottom-60 right-[40%] w-[420px] h-[260px] bg-blue-500/25 blur-[200px]" />

      {/* Pink glow */}
      <div className="absolute bottom-16 left-[8%] w-[420px] h-[260px] bg-fuchsia-500/25 blur-[250px]" />

    </div>
  );
}