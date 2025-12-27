import React from 'react';
import { motion } from 'framer-motion';
import basilicaImg from '../images/basilica.avif';
import ringsImg from '../images/rings.jpg';
import fiestaImg from '../images/fiesta.jpg';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 lg:py-48 bg-[#f5f5f4] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-12 items-start">
          
          {/* Left Text Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 pt-0 md:pt-8 lg:pt-12 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[10px] text-olive-600 uppercase tracking-[0.3em] mb-6 block">
                Nuestros Inicios
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 md:mb-8 leading-[1.1]">
                De coincidir sin vernos <br />
                <span className="italic font-light text-stone-500">a no separarnos jamás</span>
              </h2>
              <div className="w-12 h-[1px] bg-stone-400 mb-8" />
              <p className="font-serif text-lg md:text-xl leading-relaxed text-stone-600 mb-4 md:mb-6">
                Compartimos colegio, pasillos y años de vida sin saberlo, mientras el destino tejía pacientemente los hilos para el momento perfecto.
              </p>
              <p className="font-sans text-xs leading-loose tracking-wide text-stone-500 font-light text-justify max-w-prose">
                Parece increíble que estuviéramos tan cerca sin encontrarnos, pero el futuro tenía un plan. El día que finalmente nos conocimos, todo cobró sentido de golpe. Fue una conexión tan inmediata y arrolladora que no hicieron falta dudas ni preguntas: en ese preciso instante supimos que ya no había marcha atrás.
              </p>
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-7 lg:col-start-6 relative space-y-3 md:space-y-4 mt-8 lg:mt-0">
             {/* Imagen Basílica - Grande arriba */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative z-0"
             >
                <img 
                  src={basilicaImg} 
                  alt="Basílica de Santa María del Mar" 
                  className="w-full aspect-[16/10] object-cover grayscale-[10%] sepia-[10%] hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
             </motion.div>

             {/* Grid inferior con anillos y fiesta */}
             <div className="grid grid-cols-5 gap-3 md:gap-4">
               {/* Imagen Anillos - Más pequeña, izquierda */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="col-span-3 md:col-span-5 lg:col-span-2 relative z-10 border-4 md:border-8 border-[#f5f5f4] bg-white"
               >
                 <img 
                   src={ringsImg} 
                   alt="Anillos de boda" 
                   className="w-full aspect-square object-cover"
                 />
                 <div className="bg-white p-2 md:p-4 text-center">
                    <span className="font-serif italic text-sm md:text-lg text-stone-600">Por muchos más</span>
                 </div>
               </motion.div>

               {/* Imagen Fiesta - Más grande, derecha */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="col-span-2 md:col-span-5 lg:col-span-3 relative z-0"
               >
                  <img 
                    src={fiestaImg} 
                    alt="Celebración en los jardines" 
                    className="w-full aspect-[4/3] object-cover grayscale-[10%] sepia-[10%] hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  />
               </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};