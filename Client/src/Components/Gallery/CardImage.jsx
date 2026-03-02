export default function CardImage({ src, alt, children }) {
  return (
    <div className="relative aspect-video overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />

      {/* hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

      {/* glow frame */}
      <div className="absolute inset-0 border border-pink-400/40 rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition" />

      {children}
    </div>
  );
}