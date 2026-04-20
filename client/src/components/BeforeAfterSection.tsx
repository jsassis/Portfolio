/* ============================================================
   BeforeAfterSection — "Holographic Minimal"
   Tabela antes/depois com mockup de dashboard e animações
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Check, TrendingUp } from "lucide-react";

const DASHBOARD_MOCKUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663581092444/D2MWmtXnZDHKArhnv2Ng9E/mockup-dashboard-DEbr8bic9edd3KTotSU6Ma.webp";

const comparisons = [
  {
    problem: "Pedidos anotados no papel, cheios de erro",
    solution: "Sistema de pedido via QR Code direto no celular",
    impact: "Fim dos erros de pedido e atendimento 30% mais rápido",
    icon: "📋",
  },
  {
    problem: "Cliente não sabe os preços e fica perguntando no WhatsApp",
    solution: "Catálogo online que você atualiza em segundos",
    impact: "Menos tempo tirando dúvidas, mais tempo vendendo",
    icon: "💬",
  },
  {
    problem: "Estoque furado — descobre que acabou só quando o cliente pede",
    solution: "Dashboard simples com alerta de reposição automático",
    impact: "O dono sabe exatamente quando precisa repor mercadoria",
    icon: "📦",
  },
  {
    problem: "Agenda de agendamentos no papel ou no grupo do WhatsApp",
    solution: "Sistema de agendamento online com confirmação automática",
    impact: "Zero duplo agendamento, cliente recebe lembrete sozinho",
    icon: "📅",
  },
];

const stats = [
  { value: "30%", label: "mais rápido no atendimento", color: "#6C63FF" },
  { value: "7 dias", label: "para entregar sua solução", color: "#00D4FF" },
  { value: "15 min", label: "de treinamento pra equipe", color: "#FF6B35" },
  { value: "24h", label: "de suporte direto com o dev", color: "#A855F7" },
];

function AnimatedNumber({ value }: { value: string }) {
  return <span>{value}</span>;
}

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section
      id="resultados"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1020 0%, #050B18 100%)" }}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#6C63FF]/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">Antes e Depois</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            O que muda no seu{" "}
            <span className="gradient-text-orange">negócio na prática</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto font-body">
            Veja a diferença real entre trabalhar no modo antigo e ter uma solução digital feita pra você.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Table header */}
            <div className="grid grid-cols-3 gap-3 mb-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                <X size={14} className="text-red-400" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Problema</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/20">
                <Check size={14} className="text-[#6C63FF]" />
                <span className="text-xs font-bold text-[#6C63FF] uppercase tracking-wider">Solução</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20">
                <TrendingUp size={14} className="text-[#00D4FF]" />
                <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider">Impacto</span>
              </div>
            </div>

            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`grid grid-cols-3 gap-3 p-1 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeRow === i ? "bg-white/5" : "hover:bg-white/3"
                }`}
                onClick={() => setActiveRow(activeRow === i ? null : i)}
              >
                {/* Problem */}
                <div className="glass-card p-3 border-red-500/15 bg-red-500/5">
                  <span className="text-lg mb-1 block">{row.icon}</span>
                  <p className="text-xs text-red-300/80 leading-relaxed font-body">{row.problem}</p>
                </div>
                {/* Solution */}
                <div className="glass-card p-3 border-[#6C63FF]/20 bg-[#6C63FF]/5">
                  <div className="w-4 h-4 rounded-full bg-[#6C63FF]/30 flex items-center justify-center mb-1">
                    <Check size={10} className="text-[#6C63FF]" />
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed font-body">{row.solution}</p>
                </div>
                {/* Impact */}
                <div className="glass-card p-3 border-[#00D4FF]/20 bg-[#00D4FF]/5">
                  <TrendingUp size={14} className="text-[#00D4FF] mb-1" />
                  <p className="text-xs text-[#00D4FF]/90 leading-relaxed font-semibold font-body">{row.impact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Dashboard mockup + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Dashboard image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/10 blur-xl" />
              <div className="iridescent-border rounded-2xl overflow-hidden">
                <img
                  src={DASHBOARD_MOCKUP}
                  alt="Dashboard de gestão de estoque"
                  className="w-full rounded-2xl float-anim"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white/80">Sistema funcionando em tempo real</span>
              </div>
            </div>

            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-5 text-center hover:-translate-y-1 transition-transform duration-300"
                  style={{ borderColor: `${stat.color}20` }}
                >
                  <div
                    className="font-display font-extrabold text-3xl mb-1"
                    style={{ color: stat.color }}
                  >
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <p className="text-xs text-white/50 font-body leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
