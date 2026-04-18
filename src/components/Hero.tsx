import { motion } from 'motion/react';
import { Users, Building2, ChevronRight, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/20 via-zinc-950/80 to-zinc-950"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-gold-500/30 text-gold-400 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Franquia Oficial • Belo Horizonte</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Onde Propósito <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Encontra Resultado
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
              O ponto de encontro entre conexões, crescimento e legado em Belo Horizonte. Junte-se à elite empresarial da região.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-zinc-950 font-bold rounded-lg transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                Conhecer a Jornada
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 py-6 border-t border-zinc-800/60 w-full">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gold-500">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">+1000</h4>
                  <p className="text-sm text-zinc-500">Empresários Conectados</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gold-500">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">+25</h4>
                  <p className="text-sm text-zinc-500">Unidades Ativas</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Card */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 relative">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">Liderança Local BH</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-gold-500/50 overflow-hidden relative shadow-lg">
                     <img src="https://picsum.photos/seed/guilherme/200/200" alt="Guilherme Maciel" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Guilherme Maciel</h4>
                    <p className="text-gold-500">Presidente</p>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-gold-500/30 overflow-hidden relative shadow-lg">
                    <img src="https://picsum.photos/seed/jose/200/200" alt="Dr. José Júnior" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Dr. José Júnior</h4>
                    <p className="text-gold-500">Vice-presidente</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
