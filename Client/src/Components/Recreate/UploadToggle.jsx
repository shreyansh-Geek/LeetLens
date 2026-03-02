import { Upload, Link2 } from "lucide-react";

export default function UploadToggle({ mode, setMode }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => setMode("upload")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition ${
          mode === "upload"
            ? "border-pink-400 bg-pink-400/10 text-pink-300"
            : "border-white/10 text-gray-400 hover:border-white/20"
        }`}
      >
        <Upload size={14} />
        Upload
      </button>

      <button
        onClick={() => setMode("url")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition ${
          mode === "url"
            ? "border-pink-400 bg-pink-400/10 text-pink-300"
            : "border-white/10 text-gray-400 hover:border-white/20"
        }`}
      >
        <Link2 size={14} />
        Image URL
      </button>
    </div>
  );
}