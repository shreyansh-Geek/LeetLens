export default function CardActions({ children, position = "bottom-right" }) {
  const pos =
    position === "bottom-left"
      ? "bottom-3 left-3"
      : "bottom-3 right-3";

  return (
    <div
      className={`
        absolute ${pos}
        flex items-center gap-2
        opacity-0 group-hover:opacity-100
        transition
      `}
    >
      {children}
    </div>
  );
}