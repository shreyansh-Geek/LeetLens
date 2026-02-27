export default function PricingSection() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">


      {/* Ambient patches */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* blue glow */}
        <div className="absolute top-40 left-[12%] w-[420px] h-[260px] bg-blue-500/25 blur-[190px]" />

        {/* fuchsia glow */}
        <div className="absolute top-112 right-[12%] w-[420px] h-[260px] bg-fuchsia-500/25 blur-[190px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70 backdrop-blur-md">
              PRICING
            </div>
          </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight
          bg-gradient-to-b from-white/30 via-white/70 to-white
          bg-clip-text text-transparent">
            Choose your Pricing Plan
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Choose the plan that fits your creation schedule. Cancel anytime.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          <PricingCard
            title="Starter"
            subtitle="Best for starters"
            price="₹99"
            credits="100 credits"
            thumbnails="10 Premium AI Thumbnails"
          />

          <PricingCard
            title="Pro"
            subtitle="Best for intermediate"
            price="₹299"
            credits="400 credits"
            thumbnails="40 Premium AI Thumbnails"
            highlighted
          />

          <PricingCard
            title="Ultra"
            subtitle="Best for professionals"
            price="₹999"
            credits="1500 credits"
            thumbnails="150 Premium AI Thumbnails"
          />

        </div>
      </div>
    </section>
  )
}

function PricingCard({
  title,
  subtitle,
  price,
  credits,
  thumbnails,
  highlighted,
}) {
  return (
    <div
      className={`rounded-xl p-8 flex flex-col transition duration-300
      ${highlighted
        ? "bg-white/[0.06] border border-white/10 shadow-[0_0_40px_rgba(236,72,153,0.15)]"
        : "bg-transparent hover:bg-white/[0.04]"
      }`}
    >
      {/* Title */}
      <h3 className="text-white font-medium text-lg">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="mt-1 text-gray-400 text-sm">
        {subtitle}
      </p>

      {/* Price */}
      <div className="mt-6">
        <div className="text-4xl font-semibold text-white">
          {price}
        </div>
        <div className="text-gray-400 text-sm">
          / {credits}
        </div>
      </div>

      {/* Thumbnails */}
      <p className="mt-4 text-white text-sm font-medium">
        {thumbnails}
      </p>

      {/* CTA */}
      <button
        className={`mt-6 py-2.5 rounded-md text-sm font-medium transition
        ${highlighted
          ? "bg-white text-black hover:bg-gray-200"
          : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Buy Now
      </button>

      {/* Features */}
      <ul className="mt-8 space-y-3 text-sm text-gray-300">
        <li className="flex items-center gap-2">✓ Access to all AI models</li>
        <li className="flex items-center gap-2">✓ No watermark on downloads</li>
        <li className="flex items-center gap-2">✓ High-quality</li>
        <li className="flex items-center gap-2">✓ Commercial usage allowed</li>
        <li className="flex items-center gap-2">✓ Credits never expire</li>
      </ul>
    </div>
  )
}