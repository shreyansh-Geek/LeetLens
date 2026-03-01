import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import FeaturesSection from "../Components/FeaturesSection"
import PricingSection from "../Components/PricingSection"
import ContactSection from "../Components/ContactSection"
import CTASection from "../Components/CTASection"
import Footer from "../Components/Footer"

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
    </div>
  )
}

export default HomePage