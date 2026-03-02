import { ImageIcon } from "lucide-react";

export default function PreviewPanel({ aspectMap, aspect }) {
  return (
    <div className="bg-[#0B0B0C] border border-white/5 rounded-2xl p-6 flex flex-col">
      <h3 className="text-sm text-gray-400 mb-4">Preview</h3>

      <div
        className="w-full max-w-lg mx-auto rounded-xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center transition-all duration-300"
        style={{ aspectRatio: aspectMap[aspect] }}
      >
        <div className="w-14 h-14 rounded-full bg-[#0F0F11] flex items-center justify-center mb-4">
          <ImageIcon className="text-gray-500" />
        </div>

        <p className="text-sm text-gray-300 mb-1">
          Your thumbnail will appear here
        </p>

        <p className="text-xs text-gray-500">
          Fill inputs and click Generate
        </p>
      </div>
    </div>
  );
}