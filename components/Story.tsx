import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-32 md:py-48 bg-[#f5f5f4] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Column */}
          <div className="md:col-span-4 md:sticky md:top-32 pt-12 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[10px] text-olive-600 uppercase tracking-[0.3em] mb-6 block">
                Nuestros Inicios
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8 leading-[1.1]">
                De coincidir sin vernos <br />
                <span className="italic font-light text-stone-500">a no separarnos jamás</span>
              </h2>
              <div className="w-12 h-[1px] bg-stone-400 mb-8" />
              <p className="font-serif text-xl leading-relaxed text-stone-600 mb-6">
                Compartimos colegio, pasillos y años de vida sin saberlo, mientras el destino tejía pacientemente los hilos para el momento perfecto.
              </p>
              <p className="font-sans text-xs leading-loose tracking-wide text-stone-500 font-light text-justify">
                Parece increíble que estuviéramos tan cerca sin encontrarnos, pero el futuro tenía un plan. El día que finalmente nos conocimos, todo cobró sentido de golpe. Fue una conexión tan inmediata y arrolladora que no hicieron falta dudas ni preguntas: en ese preciso instante supimos que ya no había marcha atrás.
              </p>
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <div className="md:col-span-7 md:col-start-6 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative z-0"
             >
                {/* Main Image - Editorial Wedding Style */}
                <img 
                  src="https://images.unsplash.com/photo-1519225468358-19e21684fa2d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Silvia y Joan en los jardines" 
                  className="w-full aspect-[4/5] object-cover grayscale-[10%] sepia-[10%] hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
             </motion.div>

             {/* Overlapping Detail Image - Rings */}
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.3 }}
               className="md:absolute md:-bottom-24 md:-left-24 w-64 md:w-80 mt-8 md:mt-0 z-10 border-8 border-[#f5f5f4]"
             >
               <img 
                 src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop" 
                 alt="Anillos de boda" 
                 className="w-full aspect-square object-cover"
               />
               <div className="bg-white p-4 text-center shadow-lg">
                  <span className="font-serif italic text-lg text-stone-600">Por muchos más</span>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};