import { useState } from "react";
import {
  Eye,
  Trash2,
  Download,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";
import AmbientBackground from "@/Components/ui/AmbientBackground";

export default function MyGenerationsPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn complete n8n in one shot",
      tags: ["Tech/Futuristic", "sunset", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-thumbnail.png",
    },
  ]);

  const isEmpty = items.length === 0;

  return (
    <div className="relative min-h-screen pt-38 pb-24 px-6 text-white overflow-hidden">
      {/* Ambient ABOVE page bg, BELOW cards */}
      <AmbientBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              My Generations
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              View and manage all your AI-generated thumbnails
            </p>
          </div>

          <div className="text-sm text-gray-400">
            Total Creations{" "}
            <span className="text-pink-400 font-medium">
              {items.length}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        {isEmpty ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {items.map((item) => (
              <GenerationCard
                key={item.id}
                item={item}
                setItems={setItems}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-32">
      <div className="w-16 h-16 rounded-2xl bg-[#0F0F11] border border-white/10 flex items-center justify-center mb-4">
        <ImageIcon className="text-gray-500" size={26} />
      </div>

      <p className="text-gray-200 font-medium">
        No thumbnails yet
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Generate your first thumbnail to see it here
      </p>
    </div>
  );
}

function GenerationCard({ item, setItems }) {
  function handlePreview() {
    window.open(item.image, "_blank");
  }

  function handleDelete() {
    setItems((prev) => prev.filter((x) => x.id !== item.id));
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = item.image;
    link.download = `${item.title}.png`;
    link.click();
  }

  function handleOpen() {
    window.open(item.image, "_blank");
  }

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
          className="w-full h-full object-cover transition group-hover:scale-[1.02]"
        />

        {/* glow frame */}
        <div className="absolute inset-0 border border-pink-400/40 rounded-t-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition" />

        {/* ACTION BAR */}
        <div
          className="
            absolute bottom-3 right-3
            flex gap-1.5
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <IconButton onClick={handlePreview}>
            <Eye size={14} />
          </IconButton>

          <IconButton onClick={handleDelete}>
            <Trash2 size={14} />
          </IconButton>

          <IconButton onClick={handleDownload}>
            <Download size={14} />
          </IconButton>

          <IconButton onClick={handleOpen}>
            <ExternalLink size={14} />
          </IconButton>
        </div>
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
              className="
                text-[11px]
                px-2.5 py-1
                rounded-md
                bg-white/5
                border border-white/5
                text-gray-400
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-3">
          <div className="text-xs text-gray-500">
            {item.date}
          </div>
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
        rounded-md
        bg-black/60
        border border-white/10
        text-gray-300
        flex items-center justify-center
        backdrop-blur-md
        hover:bg-black
        hover:text-white
        hover:border-white/20
        transition
      "
    >
      {children}
    </button>
  );
}