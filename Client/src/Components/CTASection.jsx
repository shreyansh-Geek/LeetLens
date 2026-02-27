import { motion } from "motion/react"

export default function CTASection() {
  return (
    <section className="w-full px-6 mt-3 mb-10">
      <motion.div
        className="relative max-w-6xl mx-auto rounded-2xl px-8 md:px-14 py-12 md:py-16
        flex flex-col md:flex-row items-center justify-between gap-8
         text-white overflow-hidden border-2 border-white/10"
        
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 60 }}
      >

        {/* soft lighting */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-500/30 blur-[120px]" />
          <div className="absolute -bottom-10 right-0 w-72 h-72 bg-fuchsia-500/20 blur-[120px]" />
        </div>

        {/* LEFT TEXT */}
        <div className="relative z-10 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-5xl font-semibold leading-tight
            bg-gradient-to-r from-white via-white to-pink-300
            bg-clip-text text-transparent"
            
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, type: "spring", stiffness: 260, damping: 60 }}
          >
            Ready to go viral?
          </motion.h2>

          <motion.p
            className="mt-4 text-pink-100/80 text-base md:text-lg"
            
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, type: "spring", stiffness: 240, damping: 60 }}
          >
            Join thousands of creators using AI to boost their CTR.
          </motion.p>
        </div>

        {/* CTA BUTTON */}
        <motion.button
          className="relative z-10 px-10 py-3.5 rounded-full
          bg-white text-slate-900 font-medium
          hover:bg-gray-100 transition"
          
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, type: "spring", stiffness: 260, damping: 60 }}
        >
          Get Started
        </motion.button>

      </motion.div>
    </section>
  )
}