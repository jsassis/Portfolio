/* ============================================================
   AboutSection — "Holographic Minimal"
   Seção sobre o dev com foto, texto pessoal e diferenciais
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, HeartHandshake, GraduationCap, Shield } from "lucide-react";

const PROFILE_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663581092444/D2MWmtXnZDHKArhnv2Ng9E/profile-photo-JXyZpPZYrYqizRt5Zu9d9Y.webp";

const differentials = [
  {
    icon: <Smartphone size={20} />,
    color: "#6C63FF",
    title: "Funciona tão fácil quanto o WhatsApp",
    description:
      "Não precisa ser expert em tecnologia. Se você usa WhatsApp, você consegue usar o sistema que eu crio.",
  },
  {
    icon: <HeartHandshake size={20} />,
    color: "#00D4FF",
    title: "Você fala direto com quem desenvolveu",
    description:
      "Sem atendente de call center, sem ticket de suporte. Meu número de WhatsApp vai estar disponível pra você.",
  },
  {
    icon: <GraduationCap size={20} />,
    color: "#FF6B35",
    title: "Em 15 minutos sua equipe já sabe usar tudo",
    description:
      "Faço o treinamento pessoalmente ou por vídeo chamada. Gravo um tutorial exclusivo pra você e sua equipe.",
  },
  {
    icon: <Shield size={20} />,
    color: "#A855F7",
    title: "Não vou sumir depois que entregar",
    description:
      "Ofereço manutenção e suporte contínuo. Se algo der errado, estou aqui pra resolver — sempre.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050B18 0%, #0A1020 100%)" }}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#6C63FF]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#FF6B35]/8 blur-[120px] pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo + personal info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Photo with glow ring */}
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6C63FF] via-[#00D4FF] to-[#FF6B35] p-[3px] pulse-glow">
                <div className="w-full h-full rounded-full bg-[#050B18]" />
              </div>
              <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-[3px] border-transparent"
                style={{
                  background: "linear-gradient(#050B18, #050B18) padding-box, linear-gradient(135deg, #6C63FF, #00D4FF, #FF6B35) border-box"
                }}
              >
                <img
                  src={PROFILE_PHOTO}
                  alt="Foto do desenvolvedor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-4 py-2 flex items-center gap-2 whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white/90">Disponível para novos projetos</span>
              </div>
            </div>

            {/* Personal text */}
            <div className="text-center lg:text-left">
              <span className="tech-badge mb-3 inline-block">Sobre Mim</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Olá, sou o{" "}
                <span className="gradient-text">João</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed font-body mb-4">
                Sou desenvolvedor de software e cresci vendo minha família trabalhar em pequenos negócios. Sei na pele o quanto é difícil gerir tudo sem as ferramentas certas.
              </p>
              <p className="text-base text-white/60 leading-relaxed font-body mb-6">
                Por isso criei soluções digitais que <span className="text-white font-semibold">qualquer dono de negócio consegue usar</span>, sem precisar entender de tecnologia. Meu objetivo é simples: fazer seu negócio funcionar melhor.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Comércio Local", "Tecnologia Acessível", "Suporte Humano", "Entrega Rápida"].map((tag) => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Differentials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="mb-4">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Por que trabalhar comigo?
              </h3>
              <p className="text-white/50 font-body text-sm">
                O maior medo do dono de negócio é o sistema ser difícil de mexer. Aqui está o que você pode esperar:
              </p>
            </div>

            {differentials.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 flex gap-4 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${diff.color}15`,
                    border: `1px solid ${diff.color}25`,
                    color: diff.color,
                  }}
                >
                  {diff.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white mb-1">{diff.title}</h4>
                  <p className="text-sm text-white/55 font-body leading-relaxed">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
