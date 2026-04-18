import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Journey } from './components/Journey';
import { Axes } from './components/Axes';
import { Authority } from './components/Authority';
import { Offer } from './components/Offer';
import { UrgencyCTA } from './components/UrgencyCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-slate-300 font-sans selection:bg-gold-500/30 selection:text-white">
      <Hero />
      <Manifesto />
      <Journey />
      <Axes />
      <Authority />
      <Offer />
      <UrgencyCTA />
      <Footer />
    </main>
  );
}
