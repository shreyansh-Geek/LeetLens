export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-20 pb-80 overflow-hidden">

      {/* top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          
          {/* LEFT BRAND */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src="/leetLens_Logo_resized.png"
                alt="LeetLens"
                className="h-12 w-auto"
              />
              <span className="text-white font-semibold text-lg">
                LeetLens
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              © copyright LeetLens {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          <FooterCol title="Pages" links={["Generate","My Generations","Pricing","Contact","Blog"]}/>
          <FooterCol title="Socials" links={["Twitter","Instagram","LinkedIn","YouTube"]}/>
          <FooterCol title="Legal" links={["Privacy Policy","Terms of Service","Cookie Policy"]}/>
          <FooterCol title="Account" links={["Sign Up","Login","Forgot Password"]}/>
        </div>
      </div>

      {/* BIG FADED BRAND TEXT */}
      <div
  aria-hidden
  className="
    pointer-events-none
    absolute
    left-1/2
    bottom-[-20px]
    -translate-x-1/2
    text-[220px] md:text-[320px]
    font-semibold
    tracking-tight
    leading-none
    whitespace-nowrap
    select-none
  "
>
  <span
    className="
      bg-gradient-to-b
      from-white/[0.02]
      via-white/[0.05]
      to-white/[0.22]
      bg-clip-text
      text-transparent
    "
    style={{
      WebkitMaskImage:
        'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.6) 100%)',
      maskImage:
        'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.6) 100%)',
    }}
  >
    LeetLens
  </span>
</div>

    </footer>
  )
}

/* Footer column component */
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-medium mb-4">
        {title}
      </h4>

      <ul className="space-y-3 text-sm text-gray-400">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}