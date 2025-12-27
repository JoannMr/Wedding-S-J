import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: 'Historia', href: '#story' },
  { label: 'Detalles', href: '#details' },
  { label: 'Libro de Visitas', href: '#guestbook' },
  { label: 'RSVP', href: '#rsvp' },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center ${
          scrolled ? 'bg-stone-50/80 backdrop-blur-sm py-4 border-b border-stone-200/50' : 'bg-transparent py-8'
        }`}
      >
        <div className="w-full max-w-[1400px] px-6 md:px-12 flex justify-between items-center">
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-stone-900 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Left Desktop Nav */}
          <div className="hidden md:flex gap-12 flex-1 justify-start">
             {NAV_ITEMS.slice(0, 2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[10px] uppercase tracking-[0.25em] text-stone-800 hover:text-olive-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <a href="#" className={`font-serif text-3xl italic tracking-tight z-50 transition-colors duration-300 ${mobileOpen ? 'text-stone-900' : 'text-stone-900'}`}>
            S <span className="text-xl font-light text-stone-400">&</span> J
          </a>

          {/* Right Desktop Nav */}
          <div className="hidden md:flex gap-12 flex-1 justify-end">
            {NAV_ITEMS.slice(2, 4).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[10px] uppercase tracking-[0.25em] text-stone-800 hover:text-olive-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Placeholder to balance mobile layout */}
          <div className="md:hidden w-6"></div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#f5f5f4] z-30 flex flex-col justify-center items-center gap-10"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-4xl italic text-stone-900 hover:text-olive-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-8 pt-8 border-t border-stone-300 w-24 text-center">
              <span className="font-sans text-[10px] uppercase tracking-widest text-stone-500">24 . 09 . 24</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};