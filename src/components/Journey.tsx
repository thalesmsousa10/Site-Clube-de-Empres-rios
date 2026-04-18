import { motion } from 'motion/react';
import { Target, Search, Handshake, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Diagnóstico e Onboarding",
    description: "Sua jornada começa com um mapeamento profundo do seu momento atual e dos gargalos do seu negócio. Aqui, definimos o seu perfil dentro do ecossistema."
  },
  {
    icon: Handshake,
    title: "2. Conexões Estratégicas",
    description: "Você será introduzido a grupos e trilhas específicas, sentando em mesas com empresários que possuem sinergia direta com seus objetivos e desafios."
  },
  {
    icon: Target,
    title: "3. Imersão no Método",
    description: "Participação ativa nas reuniões de rodada de negócios (Octo) e conselhos consultivos, onde problemas reais se tornam estudos de caso para a mesa."
  },
  {
    icon: TrendingUp,
    title: "4. Escala e Legado",
    description: "Com acesso a metodologias da Academia de Líderes e mentorias de alto nível, sua empresa ganha processos, governança e prepara-se para a escala."
  }
];

export function Journey() {
  return (
    <section className="py-24 bg-zinc-900 border-b border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Jornada do Membro</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Não somos um clube de encontros casuais. Existe uma trilha metodológica criada para extrair o máximo do seu potencial e do seu negócio.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} pl-16 relative w-full`}>
                    {/* Node on mobile */}
                    <div className="md:hidden absolute left-0 top-0 w-12 h-12 bg-zinc-950 border-2 border-gold-500 rounded-full flex items-center justify-center -translate-x-[24px]">
                      <span className="text-gold-500 font-bold">{idx + 1}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Node on desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-zinc-950 border-2 border-gold-500 rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Journey continuation indicator */}
          <div className="absolute bottom-0 left-6 md:left-1/2 w-px h-16 bg-gradient-to-b from-zinc-800 to-transparent md:-translate-x-1/2 translate-y-full"></div>
        </div>
      </div>
    </section>
  );
}
