import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="relative w-full max-w-4xl px-6 pt-32 pb-16 mx-auto z-10 flex flex-col items-center text-center" id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full glass-card p-12 md:p-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white glow-text mb-6 relative z-10">
          Let's build something impactful.
        </h2>
        
        <div className="flex items-center justify-center gap-6 mt-12 relative z-10">
          <a href="mailto:ankush3985kvponda@gmail.com" className="p-4 transition-all duration-300 rounded-full bg-white/5 hover:bg-white/10 hover:glow-box border border-white/10 group">
            <Mail size={28} className="text-white/70 group-hover:text-white transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/ankushkumar3985/" target="_blank" rel="noreferrer" className="p-4 transition-all duration-300 rounded-full bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 group shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
            <FaLinkedin size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
          </a>
          <a href="https://github.com/ankushkumar145" target="_blank" rel="noreferrer" className="p-4 transition-all duration-300 rounded-full bg-white/5 hover:bg-white/10 hover:glow-box border border-white/10 group">
            <FaGithub size={28} className="text-white/70 group-hover:text-white transition-colors" />
          </a>
        </div>
      </motion.div>

      <footer className="mt-20 text-white/40 text-sm w-full flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8">
        <p>© {new Date().getFullYear()} Ankush Kumar. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="hover:text-white/70 transition-colors cursor-pointer">Design Philosophy</span>
          <span className="hover:text-white/70 transition-colors cursor-pointer">Back to Top</span>
        </div>
      </footer>
    </section>
  );
}
