export default function PromptTextarea() {
  return (
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
  );
}