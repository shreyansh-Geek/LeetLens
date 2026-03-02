export default function RecreatePrompt({ prompt, setPrompt }) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-2 block">
        What do you want to change?
      </label>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        placeholder="Change text, colors, expressions, style..."
        className="w-full px-4 py-3 rounded-xl bg-[#0F0F11] border border-white/10 focus:border-pink-400 outline-none text-sm resize-none"
      />
    </div>
  );
}