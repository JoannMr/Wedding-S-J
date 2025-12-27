import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Details } from './components/Details';
import { AiGuestbook } from './components/AiGuestbook';
import { Rsvp } from './components/Rsvp';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c1917] text-[#e7e5e4] pt-32 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-800 pb-20 mb-20">
          
          {/* Navigation Columns */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone-500">Navegación</h4>
            <nav className="flex flex-col gap-4">
              {['Historia', 'Detalles', 'Libro de Visitas', 'RSVP'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/ /g, '')}`} // simple slugify
                  className="font-serif text-2xl md:text-3xl text-stone-400 hover:text-stone-100 hover:italic transition-all w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact / Info */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone-500">Contacto</h4>
            <div className="space-y-2">
               <p className="font-serif text-xl text-stone-300">hola@silviayjoan.com</p>
               <p className="font-serif text-xl text-stone-300">+34 600 000 000</p>
            </div>
            <div className="pt-4">
               <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2">Hashtag</h4>
               <p className="font-serif text-xl text-stone-300 italic">#SyJForever</p>
            </div>
          </div>

          {/* Big Quote */}
          <div className="md:col-span-6 md:text-right flex flex-col justify-between items-start md:items-end">
             <button 
               onClick={scrollToTop}
               className="group flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-200 transition-colors mb-8"
             >
               Volver arriba
               <div className="p-2 border border-stone-800 rounded-full group-hover:border-stone-500 transition-colors">
                 <ArrowUp size={14} />
               </div>
             </button>
             <p className="font-serif text-3xl md:text-4xl italic text-stone-500 max-w-md leading-relaxed">
               "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."
             </p>
          </div>
        </div>

        {/* Massive Footer Signature */}
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone-600 mb-4 md:mb-8">
            Diseñado con amor &bull; 2025
          </div>
          <h1 className="font-serif text-[25vw] leading-[0.7] text-stone-800 select-none pointer-events-none mix-blend-screen opacity-50">
            S<span className="font-sans text-[5vw] tracking-tighter">&</span>J
          </h1>
        </div>

      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-olive-200 selection:text-olive-900 bg-[#f5f5f4] min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Story />
        <Details />
        <AiGuestbook />
        <Rsvp />
      </main>
      <Footer />
    </div>
  );
}