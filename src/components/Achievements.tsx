import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Trophy, TrendingUp, Zap, Target } from 'lucide-react';

interface Achievement {
  metric: string;
  context: string;
}

interface AchievementsProps {
  data: Achievement[];
}

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  const numMatch = value.match(/\d+/);
  const target = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    if (isInView && target > 0) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-violet-500">
      {target > 0 ? count : value}{suffix}
    </span>
  );
};

export const Achievements: React.FC<AchievementsProps> = ({ data }) => {
  const icons = [Trophy, TrendingUp, Zap, Target];

  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Impact & Achievements
          </h2>
          <div className="w-24 h-1 bg-violet-500 rounded-full mx-auto" />
        </motion.div>

        {/* Top 3 Impact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {data.slice(0, 3).map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 overflow-hidden hover:border-violet-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                    <Icon className="w-6 h-6 text-violet-300" />
                  </div>
                  <AnimatedCounter value={item.metric} />
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Remaining Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.slice(3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl font-bold text-white w-20 shrink-0 text-right">
                {item.metric}
              </div>
              <div className="w-px h-12 bg-white/10" />
              <p className="text-sm text-zinc-300 leading-relaxed">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
