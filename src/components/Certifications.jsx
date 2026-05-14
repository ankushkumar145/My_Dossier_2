import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Download } from 'lucide-react';

const certifications = [
  { name: "Internship Certificate", file: "/assets/12317072 internship certificate.pdf" },
  { name: "DSA Apna College", file: "/assets/Certificate DSA Apna Clg.pdf" },
  { name: "Cloud Computing", file: "/assets/Cloud Computing.pdf" },
  { name: "Digital Electronics Coursera", file: "/assets/DIGITAL ELECTRONIC COURSERA CERTIFICATE.pdf" },
  { name: "Intro to Operating Systems", file: "/assets/Into op system.pdf" },
  { name: "Linux Udemy", file: "/assets/Linux_Udemy_Cert.pdf" },
  { name: "Java Certificate", file: "/assets/java Certificate.pdf" },
];

export default function Certifications() {
  return (
    <section className="relative w-full max-w-6xl px-6 py-32 mx-auto z-10" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text mb-6">Certifications</h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-start gap-4 mb-6 z-10">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300">
                <Award className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors pt-1">
                {cert.name}
              </h3>
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-white/5 z-10">
              <a 
                href={cert.file} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm text-white/80 transition-all duration-300"
              >
                <ExternalLink size={14} /> Open
              </a>
              <a 
                href={cert.file} 
                download
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-lg text-sm text-blue-300 transition-all duration-300"
              >
                <Download size={14} /> Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
