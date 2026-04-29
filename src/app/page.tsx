import HeroSection from "@/components/landing/HeroSection";
import PositioningSection from "@/components/landing/PositioningSection";
import BuildersSection from "@/components/landing/BuildersSection";
import PrivacySection from "@/components/landing/PrivacySection";
import ObjectionHandlingSection from "@/components/landing/ObjectionHandlingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <BuildersSection />
      <PrivacySection />
      <ObjectionHandlingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
