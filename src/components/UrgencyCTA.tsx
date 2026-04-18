import { motion } from 'motion/react';
import { Timer, ArrowRight } from 'lucide-react';

export function UrgencyCTA() {
  return (
    <section className="py-16 bg-zinc-950 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-gold-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-500/10 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 border border-gold-500/20 text-gold-500 font-medium mb-8">
              <Timer className="w-4 h-4 animate-pulse" />
              <span className="uppercase tracking-widest text-xs font-bold">Janela Mínima de Oportunidade</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              A decisão que separa o <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">comum</span> do excepcional.
            </h2>
            
            <p className="text-zinc-400 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              Para mantermos o nível de excelência das mesas de negócios e a exclusividade da nossa rede, o conselho estabelece um limite estrito de aprovações por semestre. <strong>As vagas deste ciclo podem ser encerradas a qualquer momento sem aviso prévio.</strong> Não deixe para decidir quando a porta já estiver fechada.
            </p>

            <button className="px-10 py-5 bg-white hover:bg-gold-500 text-zinc-950 font-bold rounded-xl transition-all inline-flex items-center gap-2 group shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] text-lg">
              QUERO GARANTIR MINHA VAGA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-zinc-500 text-sm mt-6">
              * Sua aplicação passará por uma rápida avaliação de viabilidade estratégica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
