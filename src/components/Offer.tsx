import { motion } from 'motion/react';
import { Check, ShieldCheck } from 'lucide-react';

export function Offer() {
  return (
    <section id="offer" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Chegou a hora de sentar à <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Mesa Certa</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              O Clube de Empresários - BH não é apenas sobre eventos. É sobre construir um legado cercado por mentes que elevam seu padrão.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Acesso à plataforma exclusiva do membro", 
                "Aceleração de negócios e networking qualificado", 
                "Eventos presenciais e E-Conventions",
                "Certificação na Academia de Líderes"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-1 rounded-3xl"
          >
            <div className="bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
              {/* Highlight ribbon */}
              <div className="absolute top-6 right-0 bg-gold-500 scale-90 px-4 py-1 rounded-l-full text-zinc-950 font-bold text-sm tracking-wider uppercase shadow-lg shadow-gold-500/20">
                Acesso Anual
              </div>

              <div className="mb-8">
                <p className="text-zinc-400 mb-2">Investimento</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gold-500 font-bold">12x de</span>
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tight">R$ 297</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2 hover:text-zinc-400">ou R$ 2.970 à vista</p>
              </div>

              <button className="w-full py-4 text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-zinc-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] text-lg mb-6">
                Faça parte desse movimento
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                <ShieldCheck className="w-4 h-4" />
                <span>Processo seletivo sujeito a aprovação do conselho</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
