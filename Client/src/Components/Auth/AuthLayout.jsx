import AmbientBackground from "../ui/AmbientBackground"
export default function AuthLayout({ children }) {
  return (
        <div className="relative min-h-screen pb-16 px-6 text-white overflow-hidden">
      <AmbientBackground />
    <div className="min-h-screen  text-white flex items-center justify-center px-6 mt-16">
      
      {/* CENTERED CONTAINER */}
      <div className="w-full max-w-[1100px] flex rounded-2xl overflow-hidden border border-white/7 bg-[#0B0B0C]">
        
        {/* LEFT */}
        <div className="w-full lg:w-[480px] px-10 py-12 flex flex-col justify-center">
          {children}
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex flex-1 items-center justify-center border-l border-white/5 bg-[#0F0F11]">
          <div className="max-w-sm text-center px-10">
            
            {/* avatars */}
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    className="w-12 h-12 rounded-full border-2 border-[#0F0F11]"
                  />
                ))}
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              People love us
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              LeetLens is loved by thousands of people across the world,
              be part of the community and join us.
            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}