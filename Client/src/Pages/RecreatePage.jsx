import { useState } from "react";
import AmbientBackground from "@/Components/ui/AmbientBackground";
import PreviewPanel from "@/Components/Generate/PreviewPanel";
import RecreateForm from "@/Components/Recreate/RecreateForm";

export default function RecreatePage() {
  const [mode, setMode] = useState("upload");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [aspect, setAspect] = useState("16:9");

  const aspectMap = {
    "16:9": "16 / 9",
    "1:1": "1 / 1",
    "9:16": "9 / 16",
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 text-white overflow-hidden">
      <AmbientBackground />

      {/* same vertical rhythm as Generate */}
      <div className="h-6" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <RecreateForm
          mode={mode}
          setMode={setMode}
          image={image}
          setImage={setImage}
          url={url}
          setUrl={setUrl}
          prompt={prompt}
          setPrompt={setPrompt}
          aspect={aspect}
          setAspect={setAspect}
        />

        <PreviewPanel aspectMap={aspectMap} aspect={aspect} />
      </div>
    </div>
  );
}