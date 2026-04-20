/* ============================================================
   ContactSection — "Holographic Minimal"
   CTA final com formulário simples e botão WhatsApp destacado
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Send, CheckCircle2, Clock, Wrench } from "lucide-react";

const guarantees = [
  {
    icon: <Clock size={18} />,
    color: "#6C63FF",
    title: "Entrega em até 7 dias",
    description: "Projetos simples entregues rápido, sem enrolação.",
  },
  {
    icon: <Wrench size={18} />,
    color: "#00D4FF",
    title: "Manutenção incluída",
    description: "Não vou sumir depois que entregar. Estou aqui pra sempre.",
  },
  {
    icon: <CheckCircle2 size={18} />,
    color: "#FF6B35",
    title: "Satisfação garantida",
    description: "Se não gostar, a gente ajusta até ficar perfeito.",
  },
];

const businessTypes = [
  "Padaria / Lanchonete",
  "Mercadinho / Mercearia",
  "Loja de roupas / Acessórios",
  "Barbearia / Salão",
  "Pet Shop",
  "Outro tipo de negócio",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Me chamo ${name || "visitante do portfólio"} e tenho um(a) ${selectedType || "negócio"}. Quero saber mais sobre as soluções digitais!`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section
      id="contato"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050B18 0%, #030810 100%)" }}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent" />

      {/* Big glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#6C63FF]/10 blur-[150px] pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">Vamos conversar</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Pronto para{" "}
            <span className="gradient-text">modernizar seu negócio?</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto font-body">
            Me conta o que você precisa e eu te mostro como posso ajudar. Sem compromisso, sem pressão.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <h3 className="font-display font-bold text-xl text-white">
              Me conta sobre seu negócio
            </h3>

            {!sent ? (
              <>
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/70 font-body">Seu nome</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João Silva"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#6C63FF]/50 focus:bg-white/8 transition-all duration-300 font-body text-sm"
                  />
                </div>

                {/* Business type */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/70 font-body">Tipo de negócio</label>
                  <div className="grid grid-cols-2 gap-2">
                    {businessTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-300 font-body border ${
                          selectedType === type
                            ? "bg-[#6C63FF]/20 border-[#6C63FF]/50 text-[#a8a3ff]"
                            : "bg-white/3 border-white/8 text-white/50 hover:bg-white/8 hover:text-white/80"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <button
                  onClick={handleWhatsApp}
                  className="btn-orange flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-base font-bold text-white shadow-[0_0_30px_rgba(255,107,53,0.3)] font-body"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp agora
                </button>

                <p className="text-xs text-white/35 text-center font-body">
                  Respondo em até 2 horas durante o horário comercial
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">Mensagem enviada!</h4>
                <p className="text-white/55 font-body text-sm">
                  Você foi redirecionado para o WhatsApp. Vou responder em breve!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm text-[#6C63FF] hover:text-[#00D4FF] transition-colors font-semibold font-body"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display font-bold text-xl text-white">
              O que você pode esperar
            </h3>

            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card p-5 flex gap-4 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${g.color}15`,
                    border: `1px solid ${g.color}25`,
                    color: g.color,
                  }}
                >
                  {g.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white mb-1">{g.title}</h4>
                  <p className="text-sm text-white/55 font-body">{g.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Direct WhatsApp */}
            <div className="glass-card p-5 flex items-center gap-4 border-green-500/20 bg-green-500/5">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white font-display mb-0.5">WhatsApp direto</p>
                <p className="text-xs text-white/50 font-body">
                  Prefere ir direto ao ponto?{" "}
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    Clique aqui
                  </a>{" "}
                  e me manda uma mensagem agora.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
