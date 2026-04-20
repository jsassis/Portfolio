/* ============================================================
   Navbar — "Holographic Minimal"
   Glassmorphism sticky navbar com logo e links de navegação
   ============================================================ */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050B18]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(108,99,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleLink("#inicio"); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(108,99,255,0.6)] transition-all duration-300">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-display font-800 text-lg text-white tracking-tight">
              Dev<span className="gradient-text">Local</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Vi%20seu%20portfólio%20e%20quero%20saber%20mais%20sobre%20as%20soluções."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow relative z-10 px-5 py-2.5 rounded-xl text-sm font-semibold text-white font-body"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050B18]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                  className="text-base font-medium text-white/80 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Vi%20seu%20portfólio%20e%20quero%20saber%20mais%20sobre%20as%20soluções."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow relative z-10 px-5 py-3 rounded-xl text-sm font-semibold text-white text-center mt-2"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
