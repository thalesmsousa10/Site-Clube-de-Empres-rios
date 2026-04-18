export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-heading font-bold text-white mb-4">Clube de Empresários <span className="text-gold-500">•</span> BH</h3>
        <p className="text-zinc-500 text-sm mb-6 max-w-sm mx-auto">
          Onde Propósito Encontra Resultado. Maior rede de empresários do país, unidade Belo Horizonte.
        </p>
        <div className="flex justify-center gap-6 text-zinc-600 text-sm">
          <a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Contato</a>
        </div>
        <p className="text-zinc-700 text-xs mt-8">
          © {new Date().getFullYear()} Clube de Empresários. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
