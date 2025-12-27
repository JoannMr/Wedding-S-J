import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full overflow-hidden bg-stone-100 flex items-center justify-center pt-20">
      
      {/* Central Image Container */}
      <motion.div 
        style={{ y, opacity }}
        className="relative w-[90%] md:w-[70%] h-[75vh] overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
          alt="Silvia y Joan" 
          className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
        />
        <div className="absolute inset-0 bg-stone-900/10" />
      </motion.div>

      {/* Typography Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none mix-blend-difference text-stone-100">
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-center"
        >
          <h1 className="font-serif text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter italic">
            Silvia <br/> 
            <span className="ml-[1em] not-italic font-light font-sans text-[4vw] align-super">&</span> Joan
          </h1>
        </motion.div>
      </div>

      {/* Footer Meta */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 flex justify-between px-6 md:px-12 items-end z-20 text-stone-900 mix-blend-normal"
      >
        <div className="hidden md:block">
           <span className="font-sans text-[10px] tracking-[0.2em] uppercase block">Barcelona, ES</span>
           <span className="font-sans text-[10px] tracking-[0.2em] uppercase block mt-1">Masía Ribas</span>
        </div>
        
        <div className="mx-auto md:mx-0">
          <div className="h-16 w-[1px] bg-stone-900 mx-auto mb-4 origin-bottom animate-bounce" />
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>

        <div className="hidden md:block text-right">
           <span className="font-sans text-[10px] tracking-[0.2em] uppercase block">Est. 2019</span>
           <span className="font-sans text-[10px] tracking-[0.2em] uppercase block mt-1">Septiembre 24, 2024</span>
        </div>
      </motion.div>
    </section>
  );
};