import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, GraduationCap } from 'lucide-react';

interface SkillGroup {
  category: string;
  items: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  grade: string;
}

interface SkillsEducationProps {
  skills: SkillGroup[];
  education: EducationItem[];
  certifications: string[];
}

export const SkillsEducation: React.FC<SkillsEducationProps> = ({ skills, education, certifications }) => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Skills
            </h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full mb-12" />

            <div className="space-y-12">
              {skills.map((group, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-zinc-300 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 text-sm font-medium bg-white/5 text-zinc-300 rounded-xl border border-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certs Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-amber-500 rounded-full mb-12" />

            <div className="space-y-8 mb-16">
              {education.map((edu, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <GraduationCap className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-zinc-400 font-medium mb-1">{edu.school}</p>
                      <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <span>{edu.dates}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        <span>Grade: {edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Certifications
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-8" />

            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <Award className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-zinc-300 font-medium leading-relaxed">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
