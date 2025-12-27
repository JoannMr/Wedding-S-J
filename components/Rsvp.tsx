import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

export const Rsvp: React.FC = () => {
  const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);

  return (
    <section id="rsvp" className="py-32 md:py-48 bg-[#f0efeb] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-20 text-[20vw] font-serif italic leading-none">S</div>
        <div className="absolute bottom-20 right-20 text-[20vw] font-serif italic leading-none">J</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-olive-700 mb-4 block">
            Répondez s'il vous plaît
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6">
            ¿Nos acompañas?
          </h2>
          <p className="font-sans font-light text-stone-500 max-w-md mx-auto leading-relaxed">
            La confirmación es una de las partes más importantes para nosotros. Por favor, avísanos antes del 1 de Agosto.
          </p>
        </motion.div>

        {/* Narrative Form */}
        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-4xl leading-[2] md:leading-[2] text-stone-800 text-center space-y-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="inline">
            Hola, soy 
            <input 
              type="text" 
              placeholder="tu nombre completo" 
              className="mx-2 md:mx-4 bg-transparent border-b-2 border-stone-300 text-olive-800 placeholder-stone-300 focus:border-olive-600 focus:outline-none min-w-[280px] md:min-w-[400px] text-center transition-colors"
            />
          </div>
          
          <div className="inline">
            y mi email es
            <input 
              type="email" 
              placeholder="tu correo" 
              className="mx-2 md:mx-4 bg-transparent border-b-2 border-stone-300 text-olive-800 placeholder-stone-300 focus:border-olive-600 focus:outline-none min-w-[250px] md:min-w-[350px] text-center transition-colors"
            />
          </div>

          <div className="block mt-8 md:mt-4">
             Me hace mucha ilusión confirmar que
          </div>

          <div className="flex flex-wrap justify-center gap-4 my-8 md:my-6">
            <button
              type="button"
              onClick={() => setAttendance('yes')}
              className={`px-8 py-3 text-lg md:text-xl rounded-full border transition-all duration-300 ${
                attendance === 'yes' 
                  ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-lg scale-105' 
                  : 'bg-transparent border-stone-300 text-stone-400 hover:border-stone-800 hover:text-stone-800'
              }`}
            >
              ¡Sí, allí estaré!
            </button>
            <button
              type="button"
              onClick={() => setAttendance('no')}
              className={`px-8 py-3 text-lg md:text-xl rounded-full border transition-all duration-300 ${
                attendance === 'no' 
                  ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-lg scale-105' 
                  : 'bg-transparent border-stone-300 text-stone-400 hover:border-stone-800 hover:text-stone-800'
              }`}
            >
              No podré asistir
            </button>
          </div>

          <div className="block">
            Por cierto, tenéis que saber que
            <input 
              type="text" 
              placeholder="alguna alergia o nota especial..." 
              className="mx-2 md:mx-4 bg-transparent border-b-2 border-stone-300 text-olive-800 placeholder-stone-300 focus:border-olive-600 focus:outline-none w-full md:w-auto md:min-w-[500px] text-center transition-colors"
            />
          </div>

          <div className="pt-16 flex justify-center">
            <button 
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-stone-900 text-stone-50 overflow-hidden rounded-full transition-all hover:bg-olive-900 hover:pr-16"
            >
              <span className="relative font-sans text-xs uppercase tracking-[0.2em] z-10">Enviar Confirmación</span>
              <span className="absolute right-8 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

        </motion.form>
      </div>
    </section>
  );
};