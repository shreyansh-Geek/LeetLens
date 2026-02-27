import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import FeaturesSection from "../Components/featuresSection"
import PricingSection from "../Components/PricingSection"
import ContactSection from "../Components/ContactSection"
import CTASection from "../Components/CTASection"

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
    </div>
  )
}

export default HomePage