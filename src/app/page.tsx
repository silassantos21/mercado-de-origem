import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import EspacosSection from "@/components/EspacosSection";
import EventosSection from "@/components/EventosSection";
import LojistasSection from "@/components/LojistasSection";
import FiliaisSection from "@/components/FiliaisSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <EspacosSection />
        <EventosSection />
        <LojistasSection />
        <FiliaisSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
