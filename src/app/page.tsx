import Navbar from "@/components/Navbar";
import HeroAnimation from "@/components/HeroAnimation";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroAnimation />
      
      <div className="relative w-full overflow-clip">
        <ClientMarquee />
        <AboutSection />
        <PortfolioSection />
        <BookingSection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
