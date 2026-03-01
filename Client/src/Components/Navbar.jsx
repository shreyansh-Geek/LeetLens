import logo from "../assets/leetLens_Logo_resized.png"
import { NavLink } from "react-router-dom"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Generate", path: "/generate" },
  { name: "My Generations", path: "/my-generations" },
  { name: "Community", path: "/community" },
]

export default function Navbar() {

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
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
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#1C1C1E] text-pink-400"
                    : "text-gray-400 hover:text-white hover:bg-[#1A1A1C]"
                }`
              }
            >
              {item.name}
            </NavLink>
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