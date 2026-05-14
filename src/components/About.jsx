import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code2, Database, BrainCircuit, Activity } from 'lucide-react';

const valueCards = [
  {
    title: "Scalable Systems",
    desc: "Designing architecture that handles growth seamlessly.",
    icon: <Server className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Automation & Engineering",
    desc: "Building efficient workflows and optimized development processes.",
    icon: <Activity className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Backend & API Development",
    desc: "Creating high-performance, reliable backend systems.",
    icon: <Database className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Full Stack Development",
    desc: "Building scalable, modern user-focused applications.",
    icon: <Code2 className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Problem Solving",
    desc: "Applying analytical thinking to solve complex technical challenges.",
    icon: <BrainCircuit className="w-6 h-6 text-blue-400" />
  }
];

export default function About() {
  return (
    <section className="relative w-full max-w-6xl px-6 py-32 mx-auto z-10" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 space-y-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text">About Me</h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
        <p className="max-w-3xl text-lg leading-relaxed text-white/70">
          I'm passionate about building scalable systems, automating deployments, and driving innovation. At heart, I'm a problem-solver, combining Computer Science, analytical thinking, and engineering principles to craft efficient, scalable, and impactful solutions.
        </p>
        <p className="max-w-3xl text-lg leading-relaxed text-white/70">
          Whether it's designing high-performance backend APIs, building modern full-stack applications, optimizing infrastructure, or streamlining workflows, I thrive on tackling complex challenges and turning them into practical results.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-white/90">How I Add Value</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-8 group hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-6 p-4 rounded-full bg-white/5 inline-block border border-white/10">
                {card.icon}
              </div>
              <h4 className="text-xl font-medium text-white mb-3">{card.title}</h4>
              <p className="text-white/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
