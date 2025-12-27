import React from 'react';
import { motion } from 'framer-motion';

const EventItem: React.FC<{ time: string; title: string; desc: string; isLast?: boolean }> = ({ time, title, desc, isLast }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`flex gap-8 md:gap-16 items-start pb-12 ${!isLast ? 'border-l border-stone-300 ml-3 pl-12' : 'ml-3 pl-12'}`}
  >
    <div className="relative">
      <div className="absolute -left-[54px] top-2 w-3 h-3 rounded-full bg-olive-400 ring-4 ring-[#f5f5f4]" />
      <span className="font-sans text-xs font-medium tracking-widest text-olive-600 uppercase">{time}</span>
    </div>
    <div>
      <h3 className="font-serif text-3xl text-stone-800 mb-2 italic">{title}</h3>
      <p className="font-sans text-sm text-stone-500 font-light leading-relaxed max-w-md">{desc}</p>
    </div>
  </motion.div>
);

export const Details: React.FC = () => {
  return (
    <section id="details" className="py-32 bg-stone-50 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left: General Info */}
        <div className="space-y-16">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-8">
              Detalles <br/>
              <span className="block text-2xl md:text-3xl italic text-stone-400 mt-2 font-light">Martes, 24 de Septiembre</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            <div className="border-t border-stone-200 pt-8">
              <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">Ubicación</span>
              <p className="font-serif text-2xl text-stone-800">Basílica Santa María del Mar</p>
              <p className="font-sans text-sm text-stone-500 mt-1 font-light">Ceremonia · Barcelona</p>
              <p className="font-serif text-2xl text-stone-800 mt-6">Castell de Sant Marçal</p>
              <p className="font-sans text-sm text-stone-500 mt-1 font-light">Celebración · Sant Marçal, Barcelona</p>
              <a href="#" className="inline-block mt-4 text-xs font-sans uppercase tracking-widest border-b border-stone-800 pb-1 hover:text-olive-600 hover:border-olive-600 transition-colors">Ver Mapa</a>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">Dress Code</span>
              <p className="font-serif text-2xl text-stone-800">Formal / Etiqueta</p>
              <p className="font-sans text-sm text-stone-500 mt-1 font-light max-w-xs">
                Recomendamos traje oscuro para caballeros y vestido largo o midi para damas. La ceremonia es en la basílica y la celebración en jardines.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="bg-white p-8 md:p-16 shadow-sm border border-stone-100">
           <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-12 text-center">El Programa</span>
           <div className="mt-4">
             <EventItem 
               time="17:30"
               title="Bienvenida"
               desc="Llegada de invitados en la Basílica de Santa María del Mar."
             />
             <EventItem 
               time="18:30"
               title="La Ceremonia"
               desc="Intercambio de anillos y votos en la Basílica de Santa María del Mar."
             />
             <EventItem 
               time="19:30"
               title="Aperitivo"
               desc="Música en directo, gastronomía local y puesta de sol en los jardines de Castell de Sant Marçal."
             />
             <EventItem 
               time="21:00"
               title="La Cena"
               desc="Banquete bajo las luces en los jardines de Castell de Sant Marçal."
             />
             <EventItem 
               time="23:30"
               title="Fiesta"
               desc="Barra libre y baile hasta que el cuerpo aguante."
               isLast={true}
             />
           </div>
        </div>

      </div>
    </section>
  );
};