import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { SkillsEducation } from './components/SkillsEducation';
import { Navigation } from './components/Navigation';

import resumeData from './data/resume.json';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <div id="hero">
          <Hero data={resumeData.basics} />
        </div>
        
        <div id="experience">
          <Experience data={resumeData.experience} />
        </div>
        
        <div id="achievements">
          <Achievements data={resumeData.achievements} />
        </div>
        
        <div id="projects">
          <Projects data={resumeData.projects} />
        </div>
        
        <div id="skills">
          <SkillsEducation 
            skills={resumeData.skills} 
            education={resumeData.education} 
            certifications={resumeData.certifications} 
          />
        </div>
      </main>

      <footer className="py-12 text-center text-zinc-500 text-sm border-t border-white/5 relative z-10 bg-zinc-950/50">
        <p>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
