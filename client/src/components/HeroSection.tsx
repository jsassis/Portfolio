/* ============================================================
   HeroSection — "Holographic Minimal"
   Hero com background aurora, texto animado e mockup flutuante
   ============================================================ */
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663581092444/D2MWmtXnZDHKArhnv2Ng9E/hero-bg-JmZSmZfS48GH99BG8cYT92.webp";
const PHONE_MOCKUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663581092444/D2MWmtXnZDHKArhnv2Ng9E/mockup-phone-2Y9YkWqrfGQCjf4eh4A4jq.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const badges = [
  { icon: <CheckCircle2 size={14} className="text-[#00D4FF]" />, text: "Entrega em até 7 dias" },
  { icon: <Star size={14} className="text-[#FF6B35]" />, text: "Suporte direto com o dev" },
  { icon: <CheckCircle2 size={14} className="text-[#6C63FF]" />, text: "+20 negócios atendidos" },
];

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá!%20Vi%20seu%20portfólio%20e%20quero%20saber%20mais%20sobre%20as%20soluções.",
      "_blank"
    );
  };

  const handleSolutions = () => {
    document.querySelector("#solucoes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #050B18 0%, #0D1627 50%, #050B18 100%)`,
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Radial glow overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6C63FF]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00D4FF]/15 blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(108,99,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex flex-wrap gap-2"
            >
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  {b.icon}
                  {b.text}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white"
            >
              Seu negócio{" "}
              <span className="gradient-text">na palma</span>{" "}
              da mão
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg lg:text-xl text-white/65 leading-relaxed max-w-xl font-body"
            >
              Crio sistemas digitais simples e poderosos para padarias, mercadinhos, lojinhas e muito mais.{" "}
              <span className="text-[#FF6B35] font-semibold">Sem complicação, sem linguagem técnica</span> — só resultado.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleWhatsApp}
                className="btn-glow relative z-10 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white font-body shadow-[0_0_30px_rgba(108,99,255,0.3)]"
              >
                Quero minha solução
                <ArrowRight size={18} />
              </button>
              <button
                onClick={handleSolutions}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white/80 border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all duration-300 font-body"
              >
                Ver soluções
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {["🧑‍🍳", "🛒", "👗", "✂️"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#050B18] bg-gradient-to-br from-[#6C63FF]/30 to-[#00D4FF]/30 flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#FF6B35] fill-[#FF6B35]" />
                  ))}
                </div>
                <p className="text-xs text-white/50 mt-0.5">Avaliado por donos de negócios locais</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-[#6C63FF]/25 blur-[80px]" />
            </div>

            {/* Floating phone */}
            <div className="float-anim relative z-10 max-w-xs lg:max-w-sm xl:max-w-md">
              <img
                src={PHONE_MOCKUP}
                alt="Cardápio digital no celular"
                className="w-full drop-shadow-[0_30px_60px_rgba(108,99,255,0.4)]"
              />
            </div>

            {/* Floating info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="float-anim-delay absolute -left-4 top-1/4 glass-card px-4 py-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,212,255,0.2)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center">
                <span className="text-base">📱</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white font-display">Pedido via QR Code</p>
                <p className="text-[10px] text-white/50">Sem papel, sem erro</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="float-anim absolute -right-4 bottom-1/3 glass-card px-4 py-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(255,107,53,0.2)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center">
                <span className="text-base">🔔</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white font-display">Aviso no WhatsApp</p>
                <p className="text-[10px] text-white/50">Venda feita = notificação</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050B18] to-transparent pointer-events-none" />
    </section>
  );
}
