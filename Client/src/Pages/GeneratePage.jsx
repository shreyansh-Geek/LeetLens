import { useState } from "react";
import {
  Sparkles,
  ImageIcon,
  Upload,
  Square,
  Image,
  PenTool,
  Cpu,
  RectangleHorizontal,
  RectangleVertical,
} from "lucide-react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

import GenerateButton from "@/Components/ui/GenerateButton";

export default function GeneratePage() {
  const [title, setTitle] = useState("");
  const [aspect, setAspect] = useState("16:9");
  const [style, setStyle] = useState("bold");
  const [colorScheme, setColorScheme] = useState("vibrant");
  const [userImage, setUserImage] = useState(null);
  const [model, setModel] = useState("premium");

  const styles = [
    {
      key: "bold",
      title: "Bold & Graphic",
      desc: "High contrast, bold typography, striking visuals",
      icon: Sparkles,
    },
    {
      key: "minimal",
      title: "Minimalist",
      desc: "Clean, simple, lots of white space",
      icon: Square,
    },
    {
      key: "photo",
      title: "Photorealistic",
      desc: "Photo-based, natural looking",
      icon: Image,
    },
    {
      key: "illustrated",
      title: "Illustrated",
      desc: "Hand-drawn, artistic, creative",
      icon: PenTool,
    },
    {
      key: "tech",
      title: "Tech/Futuristic",
      desc: "Modern, sleek, tech-inspired",
      icon: Cpu,
    },
  ];

  const colorSchemes = [
    {
      key: "vibrant",
      name: "Vibrant",
      colors: ["#ff4d6d", "#ff8a00", "#ffd60a", "#4ade80", "#22d3ee"],
    },
    {
      key: "warm",
      name: "Warm",
      colors: ["#ff6b6b", "#ff9f1c", "#ffd166"],
    },
    {
      key: "cool",
      name: "Cool",
      colors: ["#38bdf8", "#22d3ee", "#4ade80"],
    },
    {
      key: "pastel",
      name: "Pastel",
      colors: ["#fbcfe8", "#ddd6fe", "#bfdbfe", "#bbf7d0"],
    },
    {
      key: "sunset",
      name: "Sunset",
      colors: ["#ff5f6d", "#ffc371", "#ff8c42"],
    },
    {
      key: "ocean",
      name: "Ocean",
      colors: ["#0ea5e9", "#06b6d4", "#0891b2"],
    },
    {
      key: "forest",
      name: "Forest",
      colors: ["#166534", "#22c55e", "#86efac"],
    },
    {
      key: "purple",
      name: "Purple",
      colors: ["#6d28d9", "#a855f7", "#e879f9"],
    },
    {
      key: "neon",
      name: "Neon",
      colors: ["#39ff14", "#00eaff", "#ff00ff"],
    },
    {
      key: "retro",
      name: "Retro",
      colors: ["#f97316", "#facc15", "#84cc16"],
    },
    {
      key: "luxury",
      name: "Luxury",
      colors: ["#0f172a", "#334155", "#cbd5f5"],
    },
    {
      key: "mono",
      name: "Mono",
      colors: ["#374151", "#6b7280", "#9ca3af"],
    },
  ];

  const models = [
    {
      key: "basic",
      name: "Basic",
      credits: 5,
    },
    {
      key: "premium",
      name: "Premium",
      credits: 10,
    },
  ];

  const aspectMap = {
    "16:9": "16 / 9",
    "1:1": "1 / 1",
    "9:16": "9 / 16",
  };

  function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setUserImage(url);
  }

  const selectedStyle = styles.find((s) => s.key === style);
  const SelectedIcon = selectedStyle.icon;
  const selectedModel = models.find((m) => m.key === model);

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 bg-[#070708] text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl font-semibold mb-2">Generate Thumbnail</h1>
        <p className="text-gray-400">
          Describe your vision and let LeetLens bring it to life
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* LEFT PANEL */}
        <div className="bg-[#0B0B0C] border border-white/5 rounded-2xl p-6 space-y-6">
          {/* TITLE */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Title or Topic
            </label>

            <div className="relative">
              <input
                value={title}
                onChange={(e) => {
                  if (e.target.value.length <= 100) setTitle(e.target.value);
                }}
                placeholder="e.g. 10 Tips for Better Sleep"
                className="w-full h-11 px-4 pr-14 rounded-xl bg-[#0F0F11] border border-white/10 focus:border-pink-400 outline-none text-sm"
              />

              {/* counter */}
              <span className="absolute right-3 bottom-[-22px] text-xs text-gray-500">
                {title.length}/100
              </span>
            </div>
          </div>

          {/* ASPECT */}
          {/* ASPECT */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block">
              Aspect Ratio
            </label>

            <div className="flex gap-3">
              {[
                { key: "16:9", label: "16:9", icon: RectangleHorizontal },
                { key: "1:1", label: "1:1", icon: Square },
                { key: "9:16", label: "9:16", icon: RectangleVertical },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.key}
                    onClick={() => setAspect(item.key)}
                    className={`
          flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition
          ${
            aspect === item.key
              ? "border-pink-400 bg-pink-400/10 text-pink-300"
              : "border-white/10 text-gray-400 hover:border-white/20"
          }
        `}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
          {/* THUMBNAIL STYLE */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Thumbnail Style
            </label>

            <Dropdown placement="bottom-start" offset={10}>
              <DropdownTrigger>
                <button
                  className="
          w-full h-12 px-4 rounded-xl
          bg-[#0F0F11] border border-white/10
          flex items-center gap-3
          hover:border-white/20 transition
        "
                >
                  <SelectedIcon size={18} className="text-pink-400" />
                  <span className="text-sm text-gray-200">
                    {selectedStyle.title}
                  </span>
                </button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="Thumbnail Style"
                onAction={(key) => setStyle(key)}
                className="
        mt-2 p-2
        bg-[#0B0B0C]/95 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
        min-w-[260px]
      "
                itemClasses={{
                  base: `
          px-4 py-3 rounded-xl
          flex items-start gap-3
          data-[hover=true]:bg-white/5
          transition
        `,
                }}
              >
                {styles.map((s) => {
                  const Icon = s.icon;
                  const selected = style === s.key;

                  return (
                    <DropdownItem
                      key={s.key}
                      textValue={s.title}
                      className={selected ? "bg-pink-500/10" : ""}
                    >
                      <div className="flex gap-3">
                        <Icon
                          size={18}
                          className={
                            selected
                              ? "text-pink-400 mt-0.5"
                              : "text-gray-300 mt-0.5"
                          }
                        />

                        <div className="flex flex-col">
                          <span
                            className={`text-sm ${
                              selected
                                ? "text-pink-400 font-medium"
                                : "text-gray-200"
                            }`}
                          >
                            {s.title}
                          </span>

                          <span
                            className={`text-xs ${
                              selected ? "text-pink-400/70" : "text-gray-400"
                            }`}
                          >
                            {s.desc}
                          </span>
                        </div>
                      </div>
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          </div>
          {/* COLOR SCHEME */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block">
              Color Scheme
            </label>

            <div className="grid grid-cols-6 gap-3">
              {colorSchemes.map((scheme) => {
                const selected = colorScheme === scheme.key;

                return (
                  <button
                    key={scheme.key}
                    onClick={() => setColorScheme(scheme.key)}
                    className={`
            relative h-10 rounded-xl overflow-hidden
            transition-all duration-200
            ${
              selected
                ? "ring-2 ring-pink-400 shadow-[0_0_0_1px_rgba(236,72,153,0.4)]"
                : "border border-white/10 hover:border-white/20"
            }
          `}
                  >
                    {/* color stripes */}
                    <div className="absolute inset-0 flex">
                      {scheme.colors.map((c, i) => (
                        <div
                          key={i}
                          style={{ background: c }}
                          className="flex-1"
                        />
                      ))}
                    </div>

                    {/* gloss */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

                    {/* depth */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] rounded-xl" />
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Selected: {colorSchemes.find((c) => c.key === colorScheme)?.name}
            </p>
          </div>

          {/* MODEL */}
          {/* MODEL */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Model</label>

            <Dropdown placement="bottom-start" offset={10}>
              <DropdownTrigger>
                <button
                  className="
          w-full h-12 px-4 rounded-xl
          bg-[#0F0F11] border border-white/10
          flex items-center justify-between
          hover:border-white/20 transition
        "
                >
                  <span className="text-sm">
                    {selectedModel.name}{" "}
                    <span className="text-gray-500">
                      ({selectedModel.credits} credits)
                    </span>
                  </span>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="text-gray-400"
                  >
                    <path fill="currentColor" d="M7 10l5 5 5-5" />
                  </svg>
                </button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="Model"
                onAction={(key) => setModel(key)}
                className="
        mt-2 p-2
        bg-[#0B0B0C]/95 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
        min-w-[220px]
      "
                itemClasses={{
                  base: `
          px-4 py-3 rounded-xl
          flex items-center justify-between
          gap-6
          data-[hover=true]:bg-white/5
          transition
        `,
                }}
              >
                {models.map((m) => {
                  const selected = model === m.key;

                  return (
                    <DropdownItem
                      key={m.key}
                      textValue={m.name}
                      className={selected ? "bg-pink-400/10" : ""}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span
                          className={`text-sm ${
                            selected
                              ? "text-pink-400 font-medium"
                              : "text-gray-200"
                          }`}
                        >
                          {m.name}
                        </span>

                        <span
                          className={`text-xs whitespace-nowrap ${
                            selected ? "text-pink-400/80" : "text-gray-500"
                          }`}
                        >
                          {m.credits} credits
                        </span>
                      </div>
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          </div>

          {/* USER PHOTO */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Reference Image (optional)
            </label>

            <div className="flex items-center gap-3">
              {/* preview */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#0F0F11] border border-white/10 flex items-center justify-center">
                  {userImage ? (
                    <img
                      src={userImage}
                      alt="upload"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon size={18} className="text-gray-500" />
                  )}
                </div>

                {/* remove */}
                {userImage && (
                  <button
                    onClick={() => setUserImage(null)}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-[10px] hover:bg-black"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* upload button */}
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

          {/* PROMPT */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Additional Prompt
            </label>

            <textarea
              rows={3}
              placeholder="Add mood, colors, or visual details..."
              className="w-full px-4 py-3 rounded-xl bg-[#0F0F11] border border-white/10 focus:border-pink-400 outline-none text-sm resize-none"
            />
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center">
            <GenerateButton>Generate Thumbnail</GenerateButton>
          </div>
        </div>

        {/* RIGHT — PREVIEW */}
        <div className="bg-[#0B0B0C] border border-white/5 rounded-2xl p-6 flex flex-col">
          <h3 className="text-sm text-gray-400 mb-4">Preview</h3>

          <div
            className="w-full max-w-lg mx-auto rounded-xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center transition-all duration-300"
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
      </div>
    </div>
  );
}
