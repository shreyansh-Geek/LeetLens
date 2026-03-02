import UploadToggle from "./UploadToggle";
import ImageUploadBox from "./ImageUploadBox";
import ImageUrlInput from "./ImageUrlInput";
import RecreatePrompt from "./RecreatePrompt";
import AspectSelector from "../Generate/AspectSelector";
import GenerateButton from "../ui/GenerateButton";

export default function RecreateForm({
  mode,
  setMode,
  image,
  setImage,
  url,
  setUrl,
  prompt,
  setPrompt,
  aspect,
  setAspect,
}) {
  return (
    <div className="bg-[#0B0B0C] border border-white/5  rounded-2xl p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Recreate Thumbnail</h2>
        <p className="text-sm text-gray-400 mt-1">
          Upload an image or paste a URL and describe your changes
        </p>
      </div>

      {/* Toggle + Input */}
      <div className="space-y-4">
        <UploadToggle mode={mode} setMode={setMode} />

        {mode === "upload" ? (
          <ImageUploadBox image={image} setImage={setImage} />
        ) : (
          <ImageUrlInput url={url} setUrl={setUrl} />
        )}
      </div>

      {/* Prompt */}
      <RecreatePrompt prompt={prompt} setPrompt={setPrompt} />

      {/* Aspect */}
      <AspectSelector aspect={aspect} setAspect={setAspect} />

      {/* Credits */}
      <p className="text-xs text-gray-500 flex justify-center mb-3">
        <span className="font-bold">10 Credits</span> / per thumbnail generation
      </p>

      {/* CTA */}
      <div className="flex justify-center">
        <GenerateButton>Recreate Thumbnail</GenerateButton>
      </div>
    </div>
  );
}
