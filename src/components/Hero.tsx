import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';

interface HeroProps {
  data: {
    name: string;
    title: string;
    summary: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter text-white mb-8 font-sans"
            >
              AS
            </motion.div>
            <div className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="h-full bg-indigo-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showSplash ? 0 : 1, y: showSplash ? 30 : 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showSplash ? 0 : 1, y: showSplash ? 30 : 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4"
          >
            {data.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showSplash ? 0 : 1, y: showSplash ? 30 : 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl lg:text-5xl font-medium text-zinc-400 mb-8"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showSplash ? 0 : 1, y: showSplash ? 30 : 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-12"
          >
            {data.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showSplash ? 0 : 1, y: showSplash ? 30 : 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#experience"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-zinc-950 font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              View Experience
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.print();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold flex items-center justify-center gap-2 border border-white/10 hover:bg-white/10 transition-colors"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};
