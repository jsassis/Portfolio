/* ============================================================
   SolutionsSection — "Holographic Minimal"
   Cards glassmorphism com soluções para pequenos negócios
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  QrCode, Package, ShoppingBag, Calendar,
  CheckCircle2, ArrowRight
} from "lucide-react";

const SOLUTIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663581092444/D2MWmtXnZDHKArhnv2Ng9E/solutions-bg-GnFP2N6CFqCZcghuamzhmX.webp";

const solutions = [
  {
    icon: <QrCode size={28} />,
    color: "#6C63FF",
    glow: "rgba(108,99,255,0.3)",
    badge: "Para restaurantes e lanchonetes",
    title: "Cardápio Digital com QR Code",
    description:
      "O cliente chega, aponta o celular pro QR Code e já vê tudo no cardápio. Sem papel, sem erro de pedido, sem funcionário tendo que ficar explicando o menu.",
    benefits: [
      "Atualiza preços em segundos",
      "Funciona em qualquer celular",
      "Pedido vai direto pra cozinha",
    ],
    emoji: "🍕",
  },
  {
    icon: <Package size={28} />,
    color: "#00D4FF",
    glow: "rgba(0,212,255,0.3)",
    badge: "Para mercadinhos e distribuidoras",
    title: "Gestão de Estoque Simples",
    description:
      "Chega de descobrir que o produto acabou só quando o cliente pergunta. O sistema avisa quando está acabando e você repõe na hora certa.",
    benefits: [
      "Alerta automático de estoque baixo",
      "Relatório de vendas do dia",
      "Controle de validade dos produtos",
    ],
    emoji: "🛒",
  },
  {
    icon: <ShoppingBag size={28} />,
    color: "#FF6B35",
    glow: "rgba(255,107,53,0.3)",
    badge: "Para lojas de roupas e acessórios",
    title: "Vitrine Online com Checkout",
    description:
      "Sua loja aberta 24 horas no celular do cliente. Ele vê as peças, escolhe o tamanho e finaliza a compra — tudo pelo WhatsApp ou pelo site.",
    benefits: [
      "Catálogo com fotos e preços",
      "Pedido pelo WhatsApp ou Pix",
      "Sem mensalidade de marketplace",
    ],
    emoji: "👗",
  },
  {
    icon: <Calendar size={28} />,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.3)",
    badge: "Para barbearias, salões e pet shops",
    title: "Sistema de Agendamento Online",
    description:
      "O cliente agenda pelo celular a qualquer hora, você recebe a confirmação no WhatsApp e não precisa mais ficar gerenciando agenda no papel ou no grupo do Zap.",
    benefits: [
      "Agenda online 24h por dia",
      "Lembrete automático pro cliente",
      "Sem duplo agendamento",
    ],
    emoji: "✂️",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="solucoes"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050B18 0%, #0A1020 100%)" }}
    >
      {/* Background image subtle overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${SOLUTIONS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#6C63FF]/50 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[#00D4FF]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-[#6C63FF]/10 blur-[100px] pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">O que eu faço</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Escolha a solução{" "}
            <span className="gradient-text">certa pro seu negócio</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto font-body">
            Cada solução foi pensada para resolver um problema real de quem trabalha duro todo dia.
            Simples de usar, fácil de entender.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group glass-card p-6 flex flex-col gap-4 hover:border-white/15 transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                boxShadow: `0 4px 30px rgba(0,0,0,0.3)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${sol.glow}, 0 4px 20px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px rgba(0,0,0,0.3)`;
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${sol.color}25, ${sol.color}15)`,
                  border: `1px solid ${sol.color}30`,
                  color: sol.color,
                }}
              >
                {sol.icon}
              </div>

              {/* Badge */}
              <span
                className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
                style={{
                  background: `${sol.color}15`,
                  color: sol.color,
                  border: `1px solid ${sol.color}25`,
                }}
              >
                {sol.badge}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-white leading-tight">
                {sol.emoji} {sol.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/55 leading-relaxed font-body flex-1">
                {sol.description}
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-2">
                {sol.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-white/70 font-body">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: sol.color }} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20nessa%20solução."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold mt-2 transition-all duration-300 group-hover:gap-3"
                style={{ color: sol.color }}
              >
                Quero essa solução
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
