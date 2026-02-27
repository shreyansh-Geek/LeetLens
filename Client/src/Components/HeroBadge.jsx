import { motion } from "motion/react"

export default function HeroBadge() {
  return (
    <motion.div
      className="mb-6 flex justify-center"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.12, type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="group inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-2.5 py-1 pr-3 text-sm text-white/90 backdrop-blur-md">
        
        {/* Free capsule */}
        <span className="rounded-full bg-pink-700 px-3 py-[3px] text-[11px] font-semibold text-white">
          Free
        </span>

        {/* Text + arrow */}
        <span className="flex items-center gap-1">
          #1 AI Thumbnail Generator For YouTube
          <svg
            className="h-3.5 w-3.5 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>

      </div>
    </motion.div>
  )
}