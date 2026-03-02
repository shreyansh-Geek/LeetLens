import { useState } from "react";
import { ImageIcon } from "lucide-react";

export default function ImageUploadBox({ image, setImage }) {
  const [ratio, setRatio] = useState(null);

  function handle(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);

    // detect image aspect ratio
    const img = new Image();
    img.onload = () => {
      setRatio(img.width / img.height);
    };
    img.src = url;
  }

  return (
    <label className="block">
      <input
        type="file"
        accept="image/*"
        onChange={handle}
        className="hidden"
      />

      <div
        className={`
          relative w-full
          rounded-xl
          border border-dashed border-white/20
          bg-[#0F0F11]
          flex items-center justify-center
          overflow-hidden
          hover:border-white/20
          transition
          cursor-pointer
        `}
        style={
          image && ratio
            ? { aspectRatio: ratio, maxHeight: "260px" }
            : { height: "160px" }
        }
      >
        {image ? (
          <img
            src={image}
            alt="upload preview"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
            <ImageIcon size={20} />
            Click to upload image
          </div>
        )}
      </div>
    </label>
  );
}