import { useNavigate } from "react-router-dom";
import { Vortex } from "@/components/ui/vortex";
import HeroBadge from "./HeroBadge";
import { getAuthRedirect } from "@/lib/auth";

export default function HeroSection() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate(getAuthRedirect());
  }

  function handleViewCreations() {
    navigate("/community");
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Vortex
        baseHue={210}
        particleCount={800}
        backgroundColor="#000000"
        containerClassName="absolute inset-0 scale-110"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full"
      >
        <div className="max-w-3xl flex flex-col items-center">
          <HeroBadge />

          <h1 className="mt-0 text-5xl md:text-6xl font-bold text-white leading-tight">
            Create Thumbnails That Demand{" "}
            <span className="relative inline-block px-4 py-1 ml-2">
              <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-pink-500 to-pink-400"></span>
              <span className="relative text-white">Attention</span>
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Stop wasting hours on design. Get high-converting thumbnails in
            seconds with our advanced AI.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Generate now
            </button>

            <button
              onClick={handleViewCreations}
              className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition"
            >
              View Creations
            </button>
          </div>
        </div>
      </Vortex>
    </section>
  );
}