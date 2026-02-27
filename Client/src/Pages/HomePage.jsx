import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import FeaturesSection from "../Components/featuresSection"
import PricingSection from "../Components/PricingSection"

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  )
}

export default HomePage