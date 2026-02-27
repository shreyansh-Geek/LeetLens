import { Vortex } from "@/components/ui/vortex"
import  HeroBadge  from "./HeroBadge"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vortex background */}
      <Vortex
        baseHue={210}
        particleCount={800}
        backgroundColor="#000000"
        containerClassName="absolute inset-0 scale-110"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full"
      >
        <div className="max-w-3xl flex flex-col items-center">
          
          {/* Badge */}
          <HeroBadge />

          {/* Title */}
          <h1 className="mt-0 text-5xl md:text-6xl font-bold text-white leading-tight">
            Create Thumbnails That Demand{" "}
            <span className="relative inline-block px-4 py-1 ml-2">
              <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-pink-500 to-pink-400"></span>
              <span className="relative text-white">Attention</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Stop wasting hours on design. Get high-converting thumbnails in
            seconds with our advanced AI.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex gap-4 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Generate now
            </button>

            <button className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition">
              View Creations
            </button>
          </div>

        </div>
      </Vortex>
    </section>
  )
}