import HeroSection from "@/components/landing/HeroSection";
import ServiceSection from "@/components/landing/ServiceSection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import { landingConfig } from "@/config/services-config";

export default function LandingPage() {
  return (
    <main>
      <HeroSection
        hero={landingConfig.hero}
        brandName={landingConfig.brand.name}
        tagline={landingConfig.brand.tagline}
      />
      <ServiceSection services={landingConfig.services} />
      <LeadForm config={landingConfig.leadForm} />
      <Footer footer={landingConfig.footer} />
    </main>
  );
}
