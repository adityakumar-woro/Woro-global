import IntroLoader from "@/components/IntroLoader";
import CustomCursor from "@/components/CustomCursor";
import CinematicHero from "@/components/CinematicHero";
import ScrollManifesto from "@/components/ScrollManifesto";
import HorizontalProducts from "@/components/HorizontalProducts";
import StickyServicesShowcase from "@/components/StickyServicesShowcase";
import ShaderBand from "@/components/ShaderBand";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import ShaderFinale from "@/components/ShaderFinale";
import HomepageContactStrip from "@/components/HomepageContactStrip";
import ScrollTriggerPopup from "@/components/ScrollTriggerPopup";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <CustomCursor />

      <CinematicHero />
      <ScrollManifesto />
      <HorizontalProducts />
      <StickyServicesShowcase />
      <ShaderBand />
      <Industries />
      <WhyUs />
      <Testimonials />
      <TechStack />
      <ShaderFinale />
      <HomepageContactStrip />
      <ScrollTriggerPopup />
    </>
  );
}
