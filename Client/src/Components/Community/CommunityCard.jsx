import { Heart } from "lucide-react";

export default function CommunityCard({ item }) {
  return (
    <div
      className="
        group
        bg-[#0B0B0C]
        border border-white/5
        rounded-2xl
        overflow-hidden
        transition
        hover:border-pink-400/40
        hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full h-full object-cover
            transition duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* hover overlay */}
        <div
          className="
            absolute inset-0
            bg-black/0
            group-hover:bg-black/40
            transition
          "
        />

        {/* likes */}
        <div
          className="
            absolute top-3 right-3
            flex items-center gap-1
            px-2 py-1 rounded-md
            bg-black/50 backdrop-blur
            text-xs text-white
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <Heart size={12} />
          {item.likes}
        </div>

        {/* glow frame */}
        <div className="absolute inset-0 border border-pink-400/40 rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* BODY */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-200 line-clamp-2">
          {item.title}
        </h3>

        {/* author */}
        <div className="text-xs text-gray-500 mt-1">
          by {item.author}
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((t, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}