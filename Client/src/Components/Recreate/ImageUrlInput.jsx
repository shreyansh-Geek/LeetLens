export default function ImageUrlInput({ url, setUrl }) {
  return (
    <input
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="YouTube link or image URL"
      className="w-full h-11 px-4 rounded-xl bg-[#0F0F11] border border-white/10 focus:border-pink-400 outline-none text-sm"
    />
  );
}