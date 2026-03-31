import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Calculator />
        <Testimonials />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <AccessibilityWidget />
    </>
  );
}
