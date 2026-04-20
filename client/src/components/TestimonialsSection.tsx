/* ============================================================
   TestimonialsSection — "Holographic Minimal"
   Depoimentos de clientes com cards glassmorphism animados
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dona Maria",
    role: "Proprietária da Padaria Pão Quente",
    emoji: "🧑‍🍳",
    stars: 5,
    text: "Antes eu anotava tudo no papel e sempre tinha erro de pedido. Agora o cliente aponta o celular pro QR Code e o pedido vai direto pra cozinha. Minha equipe aprendeu em menos de 15 minutos!",
    highlight: "Atendimento 30% mais rápido",
    color: "#FF6B35",
  },
  {
    name: "Seu Antônio",
    role: "Dono do Mercadinho Bom Preço",
    emoji: "🛒",
    stars: 5,
    text: "Eu ficava descobrindo que o produto tinha acabado só quando o cliente pedia. Agora o sistema me avisa antes. Economizei dinheiro e parei de perder venda por falta de estoque.",
    highlight: "Zero produto em falta inesperado",
    color: "#00D4FF",
  },
  {
    name: "Camila",
    role: "Proprietária da Loja Moda Certa",
    emoji: "👗",
    stars: 5,
    text: "Minha loja agora está aberta 24 horas no celular das clientes. Elas veem as peças, escolhem o tamanho e me mandam mensagem pra fechar. As vendas aumentaram muito!",
    highlight: "Vendas fora do horário comercial",
    color: "#6C63FF",
  },
  {
    name: "Rodrigo",
    role: "Dono da Barbearia Style Cut",
    emoji: "✂️",
    stars: 5,
    text: "Acabou a confusão de agenda no WhatsApp. O cliente agenda sozinho pelo celular, recebe confirmação automática e eu fico sabendo tudo em tempo real. Simples demais!",
    highlight: "Agenda organizada sem esforço",
    color: "#A855F7",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="depoimentos"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1020 0%, #050B18 100%)" }}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#FF6B35]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#6C63FF]/8 blur-[100px] pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">Depoimentos</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Quem já usa{" "}
            <span className="gradient-text-orange">fala por mim</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto font-body">
            Donos de negócios reais que transformaram o dia a dia com soluções simples e eficientes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card p-6 flex flex-col gap-4 hover:border-white/15 hover:-translate-y-2 transition-all duration-400 group"
            >
              {/* Quote icon */}
              <Quote size={24} className="opacity-30" style={{ color: t.color }} />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#FF6B35] text-[#FF6B35]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-white/65 leading-relaxed font-body flex-1 italic">
                "{t.text}"
              </p>

              {/* Highlight */}
              <div
                className="px-3 py-2 rounded-lg text-xs font-bold"
                style={{
                  background: `${t.color}15`,
                  color: t.color,
                  border: `1px solid ${t.color}25`,
                }}
              >
                ✓ {t.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{ background: `${t.color}20` }}
                >
                  {t.emoji}
                </div>
                <div>
                  <p className="text-sm font-bold text-white font-display">{t.name}</p>
                  <p className="text-xs text-white/45 font-body">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          {[
            { emoji: "🏪", text: "Padarias e lanchonetes" },
            { emoji: "🛒", text: "Mercadinhos e mercearias" },
            { emoji: "👗", text: "Lojas de roupas e calçados" },
            { emoji: "✂️", text: "Barbearias e salões" },
            { emoji: "🐾", text: "Pet shops e clínicas" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40 text-sm font-body">
              <span>{item.emoji}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
