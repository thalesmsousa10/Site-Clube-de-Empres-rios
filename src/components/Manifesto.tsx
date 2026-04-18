import { motion } from 'motion/react';

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 bg-zinc-950 relative border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-6">Nosso Manifesto</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-8">
            "Empresário não nasceu para <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700 italic">caminhar sozinho</span>."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
            Transformamos isolamento em <strong className="text-white font-medium">rede</strong>, 
            competição em <strong className="text-white font-medium">colaboração</strong> e 
            rotina em <strong className="text-gold-400 font-medium">propósito</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
