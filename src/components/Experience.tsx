import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

interface ExperienceProps {
  data: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {data.map((job, index) => {
            const isExpanded = expandedIndex === index;
            
            // Extract bullets that look like metrics for highlights
            const metricBullets = job.bullets.filter(b => 
              b.includes('%') || b.includes('$') || b.includes('₹') || /\d+/.test(b)
            ).slice(0, 2);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium text-zinc-300">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{job.dates}</span>
                      </div>
                      {job.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <div className="hidden lg:flex gap-2">
                      {metricBullets.map((metric, i) => {
                        const match = metric.match(/(\d+%|\$\d+[M|K]?|₹\d+(?:,\d+)*)/);
                        if (match) {
                          return (
                            <span key={i} className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                              {match[0]}
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="p-6 sm:p-8 pt-0 border-t border-white/5">
                        <ul className="space-y-4 mt-6">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-4 text-zinc-300 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                              <span dangerouslySetInnerHTML={{ 
                                __html: bullet.replace(/(\d+%|\$\d+[M|K]?|₹\d+(?:,\d+)*)/g, '<strong class="text-white font-semibold">$1</strong>') 
                              }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
