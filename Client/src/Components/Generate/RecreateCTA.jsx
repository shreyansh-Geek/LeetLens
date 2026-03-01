export default function RecreateCTA() {
  return (
    <section className="w-full px-6 mt-6 mb-8">
      <div
        className="
          relative max-w-6xl mx-auto
          rounded-2xl px-8 md:px-14 py-10 md:py-10
          flex flex-col md:flex-row items-center justify-between gap-8
          text-white overflow-hidden
          border border-white/10
          bg-gradient-to-r from-[#0B0B0C] via-[#140A12] to-[#0B0B0C]
        "
      >
        {/* soft glow lights */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-10 w-72 h-72 bg-pink-500/25 blur-[120px]" />
          <div className="absolute -bottom-16 right-0 w-72 h-72 bg-fuchsia-500/20 blur-[120px]" />
        </div>

        {/* LEFT TEXT */}
        <div className="relative z-10 text-center md:text-left">
          <h2
            className="
              text-xl md:text-2xl font-semibold leading-tight
              bg-gradient-to-r from-white via-white to-pink-300
              bg-clip-text text-transparent
            "
          >
            Recreate Thumbnails with AI
          </h2>

          <p className="mt-3 text-pink-100/70 text-xs md:text-sm max-w-xl">
            Upload a thumbnail or paste a URL, add your changes,
            and get a similar AI-recreated version instantly.
          </p>
        </div>

        {/* CTA */}
        <button
          className="
            relative z-10
            px-7 py-2.5 rounded-full
            bg-white text-slate-900 text-sm font-medium
            hover:bg-gray-100 transition
            flex items-center gap-2
            whitespace-nowrap
          "
        >
          Try Now
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="opacity-80"
          >
            <path
              fill="currentColor"
              d="M5 12h14M13 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}