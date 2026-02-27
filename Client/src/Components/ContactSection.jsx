export default function ContactSection() {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden">

        

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-40 left-[10%] w-[420px] h-[260px] bg-blue-500/20 blur-[150px]" />
        <div className="absolute top-60 right-[12%] w-[420px] h-[260px] bg-fuchsia-500/20 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>


          {/* heading */}
          <h2 className="text-4xl font-semibold leading-tight
          bg-gradient-to-b from-white via-white to-white/30
          bg-clip-text text-transparent">
            Contact us
          </h2>

          <p className="mt-5 text-gray-400 max-w-md">
            We’re always looking for ways to improve LeetLens.
            Tell us how we can help you build better thumbnails.
          </p>

          <div className="mt-8 text-sm text-gray-400 space-y-2">
            <div>contact@leetlens.ai</div>
            <div>+91 62667 66826</div>
            <div>India</div>
          </div>

          {/* map */}
          <div className="mt-10 relative">
            <img src="/world-map.svg" className="opacity-40" />

            <div className="absolute top-[37.5%] left-[70%]">
              <div className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
              <div className="absolute -top-8 -left-0 text-xs bg-white/10 border border-white/10 px-2 py-1 rounded-md backdrop-blur">
                India
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">

          {/* gradient glass card */}
          <div className="relative rounded-[24px] border border-white/10
          bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-transparent
          backdrop-blur-xl p-10">

            {/* subtle top-right light */}
            <div className="pointer-events-none absolute inset-0 rounded-[24px]
            bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_40%)]" />

            <FormField label="Full name" placeholder="Shreyansh Pandit" />
            <FormField label="Email address" placeholder="support@leetlens.com" />
            <FormField label="Company" placeholder="LeetLens Labs LLC" />

            <div className="mt-6">
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message here"
                className="mt-2 w-full rounded-md
                bg-white/[0.04] border border-white/10
                px-4 py-3 text-sm text-white
                placeholder-gray-500
                focus:outline-none focus:border-white/20
                transition"
              />
            </div>

            <button className="mt-6 px-5 py-2.5 rounded-md
            bg-white/90 text-black text-sm font-medium
            hover:bg-white transition">
              Submit
            </button>
          </div>

          {/* GRID FADE OVERLAY (reference accurate) */}
          <div className="pointer-events-none absolute inset-0 rounded-[24px]
          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:26px_26px]
          [mask-image:radial-gradient(circle_at_80%_20%,black,transparent_70%)]
          opacity-40" />
        </div>

      </div>
    </section>
  )
}

function FormField({ label, placeholder }) {
  return (
    <div className="mt-6">
      <label className="text-sm text-gray-300">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-md
        bg-white/[0.04] border border-white/10
        px-4 py-3 text-sm text-white
        placeholder-gray-500
        focus:outline-none focus:border-white/20
        transition"
      />
    </div>
  )
}