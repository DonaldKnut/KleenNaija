import FAQ from "../components/FAQ";
import FeaturedDrivers from "../components/FeaturedDrivers";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <div className="bg-[#1f2a40] text-white">
      <HeroSection />
      <FeaturedDrivers />
      <Testimonials />
      <FAQ />
    </div>
  );
}
