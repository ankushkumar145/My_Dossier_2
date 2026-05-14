import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section className="relative w-full max-w-4xl px-6 py-32 mx-auto z-10 text-center" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text mb-6">Resume & CV</h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Explore my complete professional background, technical expertise, and academic history.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            href="/assets/AnkushCv.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 glow-box"
          >
            <Eye size={20} />
            Preview Resume
          </motion.a>
          
          <motion.a
            href="/assets/AnkushCv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <Download size={20} />
            Download Resume
          </motion.a>

          <motion.a
            href="/assets/Anky_CVSpSlay.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 rounded-xl text-white/80 hover:text-white font-medium transition-all duration-300"
          >
            <FileText size={20} />
            Download Specialized CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
