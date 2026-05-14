import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen pt-20 pb-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 glow-text mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          ANKUSH KUMAR
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl font-light tracking-wide text-white/70 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Full Stack Developer | Builder | Java & MERN
        </motion.p>
        
        <motion.div 
          className="flex items-center justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="https://github.com/ankushkumar145" target="_blank" rel="noreferrer" className="p-3 transition-all duration-300 rounded-full bg-white/5 hover:bg-white/10 hover:glow-box border border-white/10">
            <FaGithub size={24} className="text-white/80" />
          </a>
          <a href="https://www.linkedin.com/in/ankushkumar3985/" target="_blank" rel="noreferrer" className="p-3 transition-all duration-300 rounded-full bg-white/5 hover:bg-white/10 hover:glow-box border border-white/10">
            <FaLinkedin size={24} className="text-white/80" />
          </a>
          <a href="mailto:ankush3985kvponda@gmail.com" className="p-3 transition-all duration-300 rounded-full bg-white/5 hover:bg-white/10 hover:glow-box border border-white/10">
            <Mail size={24} className="text-white/80" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll to explore</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "top"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
}
