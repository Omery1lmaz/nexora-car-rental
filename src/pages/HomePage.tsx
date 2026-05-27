import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CarsSection from "../components/CarsSection";
import WhySection from "../components/WhySection";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CarsSection />
      <WhySection />
      <CTASection />
      <StatsSection />
      <Footer />
    </div>
  );
}
