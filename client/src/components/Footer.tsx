/* ============================================================
   Footer + WhatsApp Float — "Holographic Minimal"
   ============================================================ */
import { MessageCircle, Zap } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5" style={{ background: "#030810" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Dev<span className="gradient-text">Local</span>
              </span>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Soluções", href: "#solucoes" },
                { label: "Resultados", href: "#resultados" },
                { label: "Sobre Mim", href: "#sobre" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-white/45 hover:text-white/80 transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-sm text-white/30 font-body text-center">
              © 2025 DevLocal. Feito com ❤️ para o comércio local.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá!%20Vi%20seu%20portfólio%20e%20quero%20saber%20mais%20sobre%20as%20soluções%20digitais."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </>
  );
}
