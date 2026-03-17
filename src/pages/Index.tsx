import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="noise-overlay min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <HeroSection />
      </main>
      <hr className="section-divider-ultra" />
      <section className="section-inverted" id="how-it-works">
        <div className="max-w-6xl mx-auto">
          <HowItWorksSection />
        </div>
      </section>
      <hr className="section-divider" />
      <main className="max-w-6xl mx-auto" id="features">
        <FeaturesSection />
      </main>
      <StatsSection />
      <hr className="section-divider" />
      <main className="max-w-6xl mx-auto" id="pricing">
        <PricingSection />
      </main>
      <hr className="section-divider" />
      <CTASection />
      <hr className="section-divider" />
      <footer className="max-w-6xl mx-auto">
        <FooterSection />
      </footer>
    </div>
  );
};

export default Index;
