import logo from "../assets/leetLens_Logo_resized.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { isLoggedIn, getUser, logout, resolveNavPath } from "@/lib/auth";
import { User, LogOut, Coins } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Generate", path: "/generate" },
  { name: "My Generations", path: "/my-generations" },
  { name: "Community", path: "/community" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const logged = isLoggedIn();
  const user = getUser();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleGetStarted() {
    navigate("/signup");
  }

  function handleLogout() {
    logout();
    navigate("/");
    setOpen(false);
  }

  // ✅ CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      <nav className="flex items-center justify-between w-[900px] bg-[#0B0B0C] text-white rounded-full px-6 py-3 shadow-lg">
        
        {/* Logo */}
        <div
          className="flex items-center gap-2 font-semibold text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="LeetLens" className="h-12 w-auto" />
          LeetLens
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-2 bg-[#111112] rounded-full p-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={resolveNavPath(item.path)}
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

        {/* RIGHT SIDE */}
        {!logged ? (
          <button
            onClick={handleGetStarted}
            className="bg-pink-400 text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Get Started
          </button>
        ) : (
          <div className="relative" ref={dropdownRef}>
            {/* Avatar */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center hover:bg-pink-500/30 transition"
            >
              <User size={18} />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-3 w-64 rounded-xl bg-[#0F0F11] border border-white/10 shadow-xl overflow-hidden">
                
                {/* USER INFO */}
                <div className="px-4 py-3 border-b border-white/10">
                  <div className="text-sm font-medium text-white">
                    {user?.name || "User"}
                  </div>
                  <div className="text-xs text-gray-400">
                    {user?.email || "email"}
                  </div>
                </div>

                {/* CREDITS */}
                <div className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 border-b border-white/10">
                  <Coins size={16} className="text-pink-400" />
                  Credits: {user?.credits ?? 0}
                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 transition"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}