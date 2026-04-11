import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Industries />
      <WhyUs />
      <Process />
      <Testimonials />
      <TechStack />
      <CTABanner />
      <Contact />
    </>
  );
}
