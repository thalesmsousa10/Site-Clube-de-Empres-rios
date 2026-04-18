import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const brands = [
  "O Boticário",
  "Chilli Beans",
  "Carmen Steffens",
  "Apollo Engenharia",
];

const leaders = [
  { name: "Caito Maia", role: "Idealizador, Chilli Beans" },
  { name: "Dener Lippert", role: "CEO, V4 Company" },
];

export function Authority() {
  return (
    <section className="py-24 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-600/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Marcas que confiam na nossa rede</h2>
          <p className="text-zinc-400">Ambiente validado por grandes nomes do mercado nacional.</p>
        </div>

        {/* Brands representation using typography since icons aren't available */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center mb-20 opacity-50">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-xl md:text-2xl font-bold font-heading text-zinc-400 tracking-wider uppercase hover:text-gold-500 transition-colors cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/20 group-hover:text-gold-500/40 transition-colors" />
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden">
                 <img src={`https://picsum.photos/seed/${leader.name.replace(' ','')}/200`} alt={leader.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" referrerPolicy="no-referrer" />
              </div>
              <p className="text-zinc-300 italic mb-6">
                "O ecossistema que o Clube de Empresários criou é fundamental para quem busca não apenas crescer, mas estruturar negócios sólidos a longo prazo."
              </p>
              <div>
                <h4 className="text-white font-bold">{leader.name}</h4>
                <p className="text-gold-500 text-sm">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <p className="text-zinc-400 mb-6">Sua jornada está pronta para começar.</p>
           <button onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-gold-500 text-white font-bold rounded-lg transition-all mx-auto shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
             Revelar Acesso e Valores
           </button>
        </div>
      </div>
    </section>
  );
}
