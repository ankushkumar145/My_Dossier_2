import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "AI-Based Institutional Evaluation System",
    description: "A comprehensive backend system for evaluating institutional performance using AI scoring and dynamic data models. Built robust authentication and role-based access control.",
    tech: ["Node.js", "Express", "MongoDB", "AI Integrations"],
    github: "https://github.com/ankushkumar145/institution-performance-backend",
    live: "#"
  },
  {
    title: "ConvertX Contribution",
    description: "Active contributor to the ConvertX project. Improved documentation, resolved bugs, and enhanced core features to optimize developer experience.",
    tech: ["React", "JavaScript", "Open Source"],
    github: "https://github.com/ankushkumar145/convertX",
    live: "#"
  },
  {
    title: "SLAY Dating Assistant",
    description: "Full-stack application to assist users with dating profiles. Implemented saved kits on backend, specialized 'Love Guru' modes, and an interactive dashboard.",
    tech: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/ankushkumar145/slay",
    live: "https://slay-web-hjpg.onrender.com/"
  }
];

export default function Projects() {
  return (
    <section className="relative w-full max-w-6xl px-6 py-32 mx-auto z-10" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text mb-6">Featured Projects</h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            className="glass-card flex flex-col h-full group transition-all duration-300 hover:glow-box hover:border-white/30 perspective-1000"
          >
            {/* Placeholder Image container */}
            <div className="relative w-full h-48 bg-[#0a192f] border-b border-white/10 overflow-hidden rounded-t-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <span className="text-white/30 font-mono text-sm uppercase tracking-widest z-10">[ Project Screenshot ]</span>
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-white/60 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                <a href={project.github} className="text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium">
                  <FaGithub size={16} /> Code
                </a>
                <a href={project.live} className="text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
