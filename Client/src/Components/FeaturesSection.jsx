export default function FeaturesSection() {
  return (
    <section className="relative w-full pb-28 bg-black overflow-hidden">
      {/* Hero → Features fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Ambient mesh glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* center glow */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[620px] h-[300px] bg-gradient-to-r from-pink-500/10 via-fuchsia-500/15 to-blue-500/30 blur-[180px]" />

        {/* left glow */}
        <div className="absolute top-30 left-[10%] w-[420px] h-[260px] bg-blue-500/45 blur-[190px]" />

        {/* right glow */}
        <div className="absolute top-52 right-[10%] w-[420px] h-[260px] bg-blue-500/45 blur-[200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center px-6">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70 backdrop-blur-md">
              FEATURES
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-semibold leading-tight
bg-gradient-to-b from-white/45 via-white/70 to-white
bg-clip-text text-transparent"
          >
            Powerful Tools for
            <span className="block">Effortless Thumbnail Creation</span>
          </h2>

          <p className="mt-4 text-gray-400 text-lg md:text-base">
            Everything you need to generate eye-catching, high-converting
            thumbnails in seconds.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden">
            <FeatureCard
              title="AI Thumbnail Generation"
              desc="Generate high-quality thumbnails instantly from simple text prompts."
              image="/features/ai-thumbnail.png"
            />

            <FeatureCard
              title="Smart Layout & Typography"
              desc="AI composes layouts, text placement, and visual hierarchy automatically."
              image="/features/ai-layout.png"
            />

            <FeatureCard
              title="One-Click Export"
              desc="Download optimized thumbnails ready for YouTube, blogs, and social."
              image="/features/ai-export.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, image }) {
  return (
    <div className="group p-8 md:p-12 transition hover:bg-white/[0.03]">
      {/* Illustration */}
      <div className="relative mb-6 h-28 flex items-center justify-center">
        <div className="absolute inset-0 bg-pink-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300" />

        <img
          src={image}
          alt={title}
          className="relative h-28 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-white font-medium text-base">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-gray-400 text-sm leading-relaxed max-w-xs">
        {desc}
      </p>
    </div>
  );
}
