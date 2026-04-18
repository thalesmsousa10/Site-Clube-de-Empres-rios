import { motion } from 'motion/react';
import { 
  Network, 
  Users, 
  MonitorPlay, 
  Briefcase, 
  GraduationCap, 
  Target, 
  Lightbulb, 
  Presentation 
} from 'lucide-react';

const networkingFeatures = [
  { icon: Users, title: "Sinapse", desc: "Acelerador de conexões 1:1" },
  { icon: Network, title: "Octo", desc: "Rodada estratégica de Negócios" },
  { icon: MonitorPlay, title: "E-Convention", desc: "Eventos digitais exclusivos" },
  { icon: Briefcase, title: "Convenções", desc: "Encontros de alto impacto" },
];

const developmentFeatures = [
  { icon: GraduationCap, title: "Academia de Líderes", desc: "Formação de alta performance" },
  { icon: Target, title: "Target", desc: "Alinhamento de metas e visão" },
  { icon: Lightbulb, title: "Clube Mentoring", desc: "Mentoria com experts do mercado" },
  { icon: Presentation, title: "Painel Empreendedor", desc: "Estudos de caso e Conecta" },
];

function FeatureCard({ item, index }: { item: any, index: number, key?: string | number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-gold-500/50 transition-colors"
    >
      <div className="absolute inset-0 bg-gold-500 opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity"></div>
      <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 group-hover:border-gold-500/50 transition-all">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

export function Axes() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eixos de Atuação</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Experiências desenhadas meticulosamente para impulsionar seus resultados em dois pilares fundamentais.</p>
        </div>

        <div className="space-y-20">
          {/* Networking */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-zinc-800 flex-1"></div>
              <h3 className="text-2xl font-bold text-gold-500 uppercase tracking-widest flex items-center gap-2">
                <Network className="w-6 h-6" />
                Networking
              </h3>
              <div className="h-px bg-zinc-800 flex-1"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkingFeatures.map((item, idx) => (
                <FeatureCard key={item.title} item={item} index={idx} />
              ))}
            </div>
          </div>

          {/* Desenvolvimento */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-zinc-800 flex-1"></div>
              <h3 className="text-2xl font-bold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-white uppercase tracking-widest flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-zinc-300" />
                Desenvolvimento
              </h3>
              <div className="h-px bg-zinc-800 flex-1"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentFeatures.map((item, idx) => (
                <FeatureCard key={item.title} item={item} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
