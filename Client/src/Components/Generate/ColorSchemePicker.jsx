export default function ColorSchemePicker({
  colorSchemes,
  colorScheme,
  setColorScheme,
}) {
  return (
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
              className={`relative h-10 rounded-xl overflow-hidden transition-all duration-200 ${
                selected
                  ? "ring-2 ring-pink-400 shadow-[0_0_0_1px_rgba(236,72,153,0.4)]"
                  : "border border-white/10 hover:border-white/20"
              }`}
            >
              <div className="absolute inset-0 flex">
                {scheme.colors.map((c, i) => (
                  <div key={i} style={{ background: c }} className="flex-1" />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] rounded-xl" />
            </button>
          );
        })}
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Selected: {colorSchemes.find((c) => c.key === colorScheme)?.name}
      </p>
    </div>
  );
}