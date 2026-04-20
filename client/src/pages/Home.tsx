/* ============================================================
   Home — "Holographic Minimal"
   Portfólio completo para atrair pequenos estabelecimentos
   Seções: Hero → Soluções → Antes/Depois → Sobre → Depoimentos → Contato
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#050B18" }}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <BeforeAfterSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
