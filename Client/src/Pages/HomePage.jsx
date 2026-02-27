import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import FeaturesSection from "../Components/featuresSection"

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

export default HomePage