import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Clock } from 'lucide-react';

interface Project {
  title: string;
  stack: string[];
  dates: string;
  bullets: string[];
  links: { name: string; url: string }[];
}

interface ProjectsProps {
  data: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Clock className="w-4 h-4" />
                    {project.dates}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 text-zinc-300 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span dangerouslySetInnerHTML={{ 
                        __html: bullet.replace(/(\d+%|\$\d+[M|K]?|₹\d+(?:,\d+)*)/g, '<strong class="text-white font-semibold">$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>

                {project.links && project.links.length > 0 && (
                  <div className="mt-auto pt-6 border-t border-white/10 flex gap-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {link.name}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
