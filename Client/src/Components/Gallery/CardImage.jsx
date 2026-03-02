import { useState } from "react";

export default function CardImage({ src, alt, children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden">
      {/* IMAGE */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-all duration-700
          group-hover:scale-[1.03]
          ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"}
        `}
      />

      {/* hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

      {/* glow frame */}
      <div className="absolute inset-0 border border-pink-400/40 rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition" />

      {children}
    </div>
  );
}