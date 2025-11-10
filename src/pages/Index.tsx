import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background relative">
        <div className="ambient-glow" />
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <StatsSection />
          <FAQSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
