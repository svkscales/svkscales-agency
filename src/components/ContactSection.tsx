"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full relative z-20 bg-[#050505] h-[150vh] border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        {/* Background Cinematic Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-[family-name:var(--font-jakarta)] font-black text-white mb-6 tracking-tighter leading-tight"
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">level up</span> <br className="hidden md:block" /> your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">business?</span>
        </motion.h2>

        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } } }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 flex flex-wrap justify-center"
        >
          {"Stop settling for average. Let's build a cinematic digital presence that commands authority and actually converts.".split(" ").map((word, i) => (
             <motion.span 
               key={i} 
               variants={{ hidden: { opacity: 0, x: -10, filter: "blur(2px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4 } } }} 
               className="mr-[0.25em] inline-block"
             >
               {word}
             </motion.span>
          ))}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-16 w-full sm:w-auto"
        >
          <a href="https://calendly.com/svkscales/free-website-consultation" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3">
            Start A Project <ArrowRight size={16} />
          </a>
          
          <a href="#tier-02" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
            View The Work
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 border-t border-white/10 pt-16 w-full max-w-3xl"
        >
          {[
            { name: "TikTok", url: "https://www.tiktok.com/@broke.findz?_r=1&_t=ZN-94zCNQUeO6Y" },
            { name: "Instagram", url: "https://www.instagram.com/svkscales?igsh=MTkzZjkzOHNkNHExbg%3D%3D&utm_source=qr" },
            { name: "Email", url: "mailto:svkscales@gmail.com" },
          ].map((link, index) => (
            <a key={index} href={link.url} target={link.name !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">{link.name}</span>
              <ArrowRight size={14} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </motion.div>

      </div>
      </div>
    </section>
  );
}
