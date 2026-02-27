import { useState } from "react"
import logo from "../assets/leetLens_Logo_resized.png"

const navItems = ["Home", "Generate", "My Generations", "Contact"]

export default function Navbar() {
  const [active, setActive] = useState("Home")

  return (
    <header className="w-full flex justify-center pt-6">
      <nav className="flex items-center justify-between w-[900px] bg-[#0B0B0C] text-white rounded-full px-6 py-3 shadow-lg">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-xl">
          <div>
            <img
            src={logo}
            alt="LeetLens"
            className="h-12 w-auto"
          />
          </div>
          LeetLens
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-2 bg-[#111112] rounded-full p-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                active === item
                  ? "bg-[#1C1C1E] text-pink-400"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1C]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-pink-400 text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-pink-600 transition">
          Get Started
        </button>
      </nav>
    </header>
  )
}