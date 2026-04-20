/* ============================================================
   StatsSection — "Holographic Minimal"
   Faixa de números animados com contagem ao entrar na viewport
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Negócios atendidos", color: "#6C63FF" },
  { value: 7, suffix: " dias", label: "Prazo médio de entrega", color: "#00D4FF" },
  { value: 100, suffix: "%", label: "Clientes satisfeitos", color: "#FF6B35" },
  { value: 15, suffix: " min", label: "Para treinar sua equipe", color: "#A855F7" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #0D1627 0%, #0A1020 50%, #0D1627 100%)",
        borderTop: "1px solid rgba(108,99,255,0.15)",
        borderBottom: "1px solid rgba(108,99,255,0.15)",
      }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/5 via-transparent to-[#00D4FF]/5 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div
                className="font-display font-extrabold text-4xl lg:text-5xl"
                style={{ color: stat.color }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-white/50 font-body">{stat.label}</p>
              <div
                className="w-12 h-0.5 rounded-full mt-1"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
