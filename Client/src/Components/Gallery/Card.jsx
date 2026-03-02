export default function Card({ children }) {
  return (
    <div
      className="
        group
        border border-white/5
        rounded-2xl
        overflow-hidden
        transition
        hover:border-pink-400/40
        hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
      "
    >
      {children}
    </div>
  );
}