import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaServer, FaCode, FaLayerGroup } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiSpringboot, SiRender, SiVercel } from 'react-icons/si';

const skills = [
  { name: "Java", icon: <FaJava size={24} />, colSpan: "col-span-1 md:col-span-2 lg:col-span-2", rowSpan: "row-span-1", highlight: true },
  { name: "MERN Stack", icon: <FaLayerGroup size={24} />, colSpan: "col-span-1 md:col-span-2 lg:col-span-3", rowSpan: "row-span-2", highlight: true },
  { name: "React", icon: <FaReact size={24} />, colSpan: "col-span-1 md:col-span-2 lg:col-span-2", rowSpan: "row-span-1" },
  { name: "Node.js", icon: <FaNodeJs size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", rowSpan: "row-span-1" },
  { name: "MongoDB", icon: <SiMongodb size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-2", rowSpan: "row-span-1" },
  { name: "Express", icon: <SiExpress size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-2", rowSpan: "row-span-1" },
  { name: "REST APIs", icon: <FaServer size={24} />, colSpan: "col-span-1 md:col-span-2 lg:col-span-3", rowSpan: "row-span-1" },
  { name: "DSA", icon: <FaCode size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-2", rowSpan: "row-span-2", highlight: true },
  { name: "Git", icon: <FaGitAlt size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", rowSpan: "row-span-1" },
  { name: "GitHub", icon: <FaGithub size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", rowSpan: "row-span-1" },
  { name: "SQL", icon: <FaDatabase size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-2", rowSpan: "row-span-1" },
  { name: "Postman", icon: <SiPostman size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", rowSpan: "row-span-1" },
  { name: "Spring Boot", icon: <SiSpringboot size={24} />, colSpan: "col-span-1 md:col-span-2 lg:col-span-3", rowSpan: "row-span-1", highlight: true },
  { name: "Render", icon: <SiRender size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", rowSpan: "row-span-1" },
  { name: "Vercel", icon: <SiVercel size={24} />, colSpan: "col-span-1 md:col-span-1 lg:col-span-2", rowSpan: "row-span-1" }
];

export default function Skills() {
  return (
    <section className="relative w-full max-w-6xl px-6 py-32 mx-auto z-10" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text mb-6">Core Arsenal</h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 auto-rows-[120px]">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`
              glass-card flex flex-col items-center justify-center p-6 cursor-pointer group relative overflow-hidden gap-3
              ${skill.colSpan} ${skill.rowSpan}
              ${skill.highlight ? 'bg-white/10 border-blue-500/30 glow-box' : ''}
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className={`z-10 ${skill.highlight ? 'text-blue-400' : 'text-white/50 group-hover:text-blue-400 transition-colors duration-300'}`}>
              {skill.icon}
            </div>

            <span className={`
              text-lg md:text-xl font-medium tracking-wide z-10 text-center
              ${skill.highlight ? 'text-white glow-text' : 'text-white/70 group-hover:text-white transition-colors duration-300'}
            `}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
