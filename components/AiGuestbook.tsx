import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { RelationshipType, ToneType } from '../types';
import { generateWeddingWish } from '../services/geminiService';
import { Sparkles, PenTool, Copy, Check } from 'lucide-react';

export const AiGuestbook: React.FC = () => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState<RelationshipType>(RelationshipType.FRIEND);
  const [tone, setTone] = useState<ToneType>(ToneType.SENTIMENTAL);
  const [generatedWish, setGeneratedWish] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!name) return;
    setIsGenerating(true);
    setGeneratedWish(''); // Clear previous
    const wish = await generateWeddingWish(name, relationship, tone);
    setGeneratedWish(wish);
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedWish);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="guestbook" className="py-32 bg-olive-50/30 border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-olive-200 bg-white text-olive-700 font-sans text-[10px] tracking-widest uppercase mb-6"
          >
            <Sparkles size={12} />
            Powered by Gemini AI
          </motion.span>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6 italic">Libro de Visitas</h2>
          <p className="font-sans text-stone-500 max-w-lg mx-auto font-light leading-relaxed">
            ¿Te has quedado en blanco? Dinos quién eres y cómo te sientes, y nuestra IA escribirá una dedicatoria única para que la copies en nuestro libro físico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl shadow-stone-200/50">
          
          {/* Left: Input Panel */}
          <div className="bg-white p-10 md:p-14 md:border-r border-stone-100">
            <div className="space-y-10">
              <div className="relative group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-stone-300 py-3 font-serif text-2xl text-stone-800 placeholder-stone-300 focus:border-olive-500 outline-none transition-colors"
                  placeholder="Tu nombre aquí"
                />
                <label className="absolute -top-3 left-0 text-[10px] uppercase tracking-widest text-stone-400 pointer-events-none">Quién eres</label>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-stone-400 mb-4">Tu relación con nosotros</span>
                <div className="flex flex-wrap gap-2">
                  {Object.values(RelationshipType).map((rel) => (
                    <button
                      key={rel}
                      onClick={() => setRelationship(rel)}
                      className={`px-4 py-2 text-xs font-sans tracking-wide transition-all border ${
                        relationship === rel 
                          ? 'bg-stone-800 text-stone-50 border-stone-800' 
                          : 'bg-white border-stone-200 text-stone-500 hover:border-stone-400'
                      }`}
                    >
                      {rel}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-stone-400 mb-4">El tono del mensaje</span>
                <div className="flex flex-wrap gap-2">
                  {Object.values(ToneType).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-4 py-2 text-xs font-sans tracking-wide transition-all border ${
                        tone === t 
                          ? 'bg-olive-600 text-white border-olive-600' 
                          : 'bg-white border-stone-200 text-stone-500 hover:border-stone-400'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button onClick={handleGenerate} isLoading={isGenerating} disabled={!name} className="w-full justify-center">
                  Crear Dedicatoria
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Result Card (Paper Effect) */}
          <div className="bg-[#fafaf9] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center">
             {/* Paper Texture overlay effect via CSS/SVG would go here, simplified with border */}
             <div className="absolute top-0 left-0 w-full h-2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             
             <div className="relative z-10 h-full flex flex-col">
               <div className="flex justify-between items-start mb-8">
                  <PenTool className="text-stone-300" size={24} />
                  <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">{new Date().toLocaleDateString()}</span>
               </div>

               <div className="flex-grow flex items-center">
                 <AnimatePresence mode="wait">
                   {generatedWish ? (
                     <motion.div
                       key="result"
                       initial={{ opacity: 0, filter: 'blur(5px)' }}
                       animate={{ opacity: 1, filter: 'blur(0px)' }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.8 }}
                     >
                       <p className="font-serif text-2xl md:text-3xl leading-relaxed text-stone-800 italic">
                         "{generatedWish}"
                       </p>
                       <p className="mt-6 text-right font-serif text-lg text-stone-500">— {name}</p>
                     </motion.div>
                   ) : (
                     <motion.p 
                       key="empty"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="text-stone-300 font-serif text-2xl text-center w-full italic"
                     >
                       La inspiración te espera...
                     </motion.p>
                   )}
                 </AnimatePresence>
               </div>

               {generatedWish && (
                 <motion.button
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   onClick={copyToClipboard}
                   className="mt-8 self-end flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-olive-600 hover:text-olive-800 transition-colors"
                 >
                   {copied ? <Check size={14} /> : <Copy size={14} />}
                   {copied ? 'Copiado' : 'Copiar'}
                 </motion.button>
               )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};