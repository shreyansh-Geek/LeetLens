export default function CardTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {tags.map((t, i) => (
        <span
          key={i}
          className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
        >
          {t}
        </span>
      ))}
    </div>
  );
}