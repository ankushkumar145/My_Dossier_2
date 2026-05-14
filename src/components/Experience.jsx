import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance & Open Source",
    description: "Developing scalable full-stack applications. Active contributor to ConvertX, improving developer workflows. Building independent projects like SLAY, a Laravel and React based AI assistant.",
    type: "work"
  },
  {
    year: "2022 - 2023",
    role: "Backend Engineering Focus",
    company: "Personal & Academic Projects",
    description: "Built robust AI-Based Institutional Evaluation Systems. Designed deep relational database schemas and REST APIs using Node.js and MongoDB.",
    type: "work"
  },
  {
    year: "Recent",
    role: "Advanced Certifications",
    company: "Coursera, Udemy, Apna College",
    description: "Completed comprehensive training in Cloud Computing, DSA, Linux, and Digital Electronics to strengthen engineering fundamentals.",
    type: "education"
  }
];

export default function Experience() {
  return (
    <section className="relative w-full max-w-4xl px-6 py-32 mx-auto z-10" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text mb-6">Experience & Training</h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 pl-8">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="mb-12 relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[41px] md:-left-1.5 p-2 bg-black border border-blue-500/50 rounded-full glow-box">
              {item.type === 'work' ? (
                <Briefcase size={14} className="text-blue-400" />
              ) : (
                <GraduationCap size={14} className="text-blue-400" />
              )}
            </div>

            <div className="glass-card p-6 md:p-8 ml-0 md:ml-8 relative group hover:border-white/30 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-blue-400 font-mono text-sm tracking-wider mb-2 block">{item.year}</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.role}</h3>
              <h4 className="text-lg text-white/60 mb-4">{item.company}</h4>
              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
