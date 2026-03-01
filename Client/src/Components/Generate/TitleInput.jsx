export default function TitleInput({ title, setTitle }) {
  return (
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

        <span className="absolute right-3 bottom-[-22px] text-xs text-gray-500">
          {title.length}/100
        </span>
      </div>
    </div>
  );
}