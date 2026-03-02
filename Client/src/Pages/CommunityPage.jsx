import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import AmbientBackground from "@/Components/ui/AmbientBackground";

export default function CommunityPage() {
  // 🔥 demo community data
  const allItems = [
    {
      id: 1,
      title: "What is Microsoft Word?",
      creator: "Eng Mohamed Dek",
      tags: ["Bold & Graphic", "ocean", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-thumbnail.png",
    },
    {
      id: 2,
      title: "Learn complete n8n in one shot",
      creator: "Shreyansh",
      tags: ["Tech/Futuristic", "sunset", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-layout.png",
    },
    {
      id: 3,
      title: "YouTube Growth Hacks",
      creator: "Riya",
      tags: ["Bold", "vibrant", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-export.png",
    },
    // add more later
  ];

  const LIMIT = 15;
  const [visible, setVisible] = useState(LIMIT);

  const items = allItems.slice(0, visible);
  const hasMore = visible < allItems.length;

  function loadMore() {
    setVisible((v) => v + LIMIT);
  }

  return (
    <div className="relative min-h-screen pt-38 pb-20 px-6 text-white overflow-hidden">
      <AmbientBackground />

      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">Community</h1>
          <p className="text-gray-400 text-sm mt-1">
            Explore AI-generated thumbnails from creators worldwide
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <CommunityCard key={item.id} item={item} />
          ))}
        </div>

        {/* LOAD MORE */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={loadMore}
              className="
                px-6 py-2 rounded-full
                bg-white/5 border border-white/10
                text-sm text-gray-300
                hover:border-pink-400/40
                hover:text-white
                transition
              "
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CommunityCard({ item }) {
  function handleDownload(e) {
    e.stopPropagation();

    const link = document.createElement("a");
    link.href = item.image;

    // safe filename
    const name = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    link.download = `${name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleOpen(e) {
    e.stopPropagation();
    window.open(item.image, "_blank", "noopener,noreferrer");
  }

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
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

        {/* CREATOR BADGE */}
        <div
          className="
            absolute bottom-3 left-3
            px-3 py-1 rounded-full
            bg-pink-500/10 backdrop-blur
            text-xs text-white
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          {item.creator}
        </div>

        {/* ACTION BUTTONS */}
        <div
          className="
            absolute bottom-3 right-3
            flex items-center gap-2
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <IconButton onClick={handleDownload}>
            <Download size={14} />
          </IconButton>

          <IconButton onClick={handleOpen}>
            <ExternalLink size={14} />
          </IconButton>
        </div>

        {/* glow frame */}
        <div className="absolute inset-0 border border-pink-400/40 rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* BODY */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-200 line-clamp-2">
          {item.title}
        </h3>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((t, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* DATE */}
        <div className="text-xs text-gray-500 mt-3">
          {item.date}
        </div>
      </div>
    </div>
  );
}

function IconButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-8 h-8
        flex items-center justify-center
        rounded-md
        bg-black/60 backdrop-blur
        border border-white/10
        text-gray-200
        hover:border-white/20
        hover:text-white
        transition
      "
    >
      {children}
    </button>
  );
}