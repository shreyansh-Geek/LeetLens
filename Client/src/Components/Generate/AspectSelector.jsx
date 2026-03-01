import { RectangleHorizontal, Square, RectangleVertical } from "lucide-react";

const aspects = [
  { key: "16:9", label: "16:9", icon: RectangleHorizontal },
  { key: "1:1", label: "1:1", icon: Square },
  { key: "9:16", label: "9:16", icon: RectangleVertical },
];

export default function AspectSelector({ aspect, setAspect }) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-3 block">
        Aspect Ratio
      </label>

      <div className="flex gap-3">
        {aspects.map((item) => {
          const Icon = item.icon;
          const selected = aspect === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setAspect(item.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition ${
                selected
                  ? "border-pink-400 bg-pink-400/10 text-pink-300"
                  : "border-white/10 text-gray-400 hover:border-white/20"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}