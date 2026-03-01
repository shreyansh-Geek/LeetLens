import { useState } from "react";
import { Sparkles, Square, Image, PenTool, Cpu } from "lucide-react";

import AmbientBackground from "@/components/ui/AmbientBackground";
import RecreateCTA from "@/components/generate/RecreateCTA";
import TitleInput from "@/components/generate/TitleInput";
import AspectSelector from "@/components/generate/AspectSelector";
import StyleDropdown from "@/components/generate/StyleDropdown";
import ColorSchemePicker from "@/components/generate/ColorSchemePicker";
import ModelDropdown from "@/components/generate/ModelDropdown";
import ReferenceImageUpload from "@/components/generate/ReferenceImageUpload";
import PromptTextarea from "@/components/generate/PromptTextarea";
import PreviewPanel from "@/components/generate/PreviewPanel";

import GenerateButton from "@/Components/ui/GenerateButton";

export default function GeneratePage() {
  const [title, setTitle] = useState("");
  const [aspect, setAspect] = useState("16:9");
  const [style, setStyle] = useState("bold");
  const [colorScheme, setColorScheme] = useState("vibrant");
  const [userImage, setUserImage] = useState(null);
  const [model, setModel] = useState("premium");

  // ---------- DATA ----------
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
    { key: "vibrant", name: "Vibrant", colors: ["#ff4d6d", "#ff8a00", "#ffd60a", "#4ade80", "#22d3ee"] },
    { key: "warm", name: "Warm", colors: ["#ff6b6b", "#ff9f1c", "#ffd166"] },
    { key: "cool", name: "Cool", colors: ["#38bdf8", "#22d3ee", "#4ade80"] },
    { key: "pastel", name: "Pastel", colors: ["#fbcfe8", "#ddd6fe", "#bfdbfe", "#bbf7d0"] },
    { key: "sunset", name: "Sunset", colors: ["#ff5f6d", "#ffc371", "#ff8c42"] },
    { key: "ocean", name: "Ocean", colors: ["#0ea5e9", "#06b6d4", "#0891b2"] },
    { key: "forest", name: "Forest", colors: ["#166534", "#22c55e", "#86efac"] },
    { key: "purple", name: "Purple", colors: ["#6d28d9", "#a855f7", "#e879f9"] },
    { key: "neon", name: "Neon", colors: ["#39ff14", "#00eaff", "#ff00ff"] },
    { key: "retro", name: "Retro", colors: ["#f97316", "#facc15", "#84cc16"] },
    { key: "luxury", name: "Luxury", colors: ["#0f172a", "#334155", "#cbd5f5"] },
    { key: "mono", name: "Mono", colors: ["#374151", "#6b7280", "#9ca3af"] },
  ];

  const models = [
    { key: "basic", name: "Basic", credits: 5 },
    { key: "premium", name: "Premium", credits: 10 },
  ];

  const aspectMap = {
    "16:9": "16 / 9",
    "1:1": "1 / 1",
    "9:16": "9 / 16",
  };

  // ---------- HANDLERS ----------
  function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUserImage(URL.createObjectURL(file));
  }

  // ---------- DERIVED ----------
  const selectedStyle = styles.find((s) => s.key === style);
  const SelectedIcon = selectedStyle.icon;
  const selectedModel = models.find((m) => m.key === model);

  // ---------- UI ----------
  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 text-white overflow-hidden">
  <AmbientBackground />
      <RecreateCTA />
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-semibold mb-2">Generate Thumbnail</h1>
        <p className="text-gray-400">
          Describe your vision and let LeetLens bring it to life
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* LEFT PANEL */}
        <div className="bg-[#0B0B0C] border border-white/5 rounded-2xl p-6 space-y-6">
          
          <TitleInput title={title} setTitle={setTitle} />

          <AspectSelector aspect={aspect} setAspect={setAspect} />

          <StyleDropdown
            styles={styles}
            style={style}
            setStyle={setStyle}
            SelectedIcon={SelectedIcon}
            selectedStyle={selectedStyle}
          />

          <ColorSchemePicker
            colorSchemes={colorSchemes}
            colorScheme={colorScheme}
            setColorScheme={setColorScheme}
          />

          <ModelDropdown
            models={models}
            model={model}
            setModel={setModel}
            selectedModel={selectedModel}
          />

          <ReferenceImageUpload
            userImage={userImage}
            setUserImage={setUserImage}
            handleImageUpload={handleImageUpload}
          />

          <PromptTextarea />

          <div className="flex justify-center">
            <GenerateButton>Generate Thumbnail</GenerateButton>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <PreviewPanel aspectMap={aspectMap} aspect={aspect} />
      </div>
    </div>
  );
}