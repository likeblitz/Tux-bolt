import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import TokenomicsSection from "@/components/Tokenomics";
import HowToBuy from "@/components/HowToBuy";
import Marquee from "@/components/Marquee";
import CommunitySection from "@/components/Community";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Marquee />
      <AboutSection />
      <TokenomicsSection />
      <HowToBuy />
      <Marquee />
      <CommunitySection />
    </div>
  );
};

export default Index;

