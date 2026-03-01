import { ImageIcon, Upload } from "lucide-react";

export default function ReferenceImageUpload({
  userImage,
  setUserImage,
  handleImageUpload,
}) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-2 block">
        Reference Image (optional)
      </label>

      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#0F0F11] border border-white/10 flex items-center justify-center">
            {userImage ? (
              <img src={userImage} alt="upload" className="w-full h-full object-cover" />
            ) : (
              <ImageIcon size={18} className="text-gray-500" />
            )}
          </div>

          {userImage && (
            <button
              onClick={() => setUserImage(null)}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-[10px] hover:bg-black"
            >
              ✕
            </button>
          )}
        </div>

        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <div className="px-4 py-2 rounded-lg bg-[#0F0F11] border border-white/10 text-sm hover:border-white/20 flex items-center gap-2 transition">
            <Upload size={14} />
            {userImage ? "Replace" : "Upload"}
          </div>
        </label>
      </div>
    </div>
  );
}