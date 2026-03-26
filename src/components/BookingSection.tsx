"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, ArrowRight } from "lucide-react";

const headerText = "Book Your Free 1-2-1 Call";
const words = headerText.split(" ");

export default function BookingSection() {
  return (
    <section id="contact" className="w-full relative z-20 bg-[#050505] h-[150vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">

      
      {/* Background Cinematic Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-0 right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 overflow-hidden flex flex-col items-center text-center shadow-2xl"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10 opacity-50" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/80">Available For New Projects</span>
        </motion.div>

        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-black text-white mb-6 tracking-tight flex justify-center flex-wrap"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: "60%", filter: "blur(5px)" },
                visible: { opacity: 1, y: "0%", filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="mr-[0.25em] inline-block"
            >
              {word === "1-2-1" ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Let's jump on a quick Zoom call. I would love to hear the story behind your business—how you started, what your vision is, and where you want to take things next. There is absolutely zero commitment. If we're a good fit, I'll even design a <strong className="text-white">completely free, custom mockup</strong> of your new website so you can see exactly how we can elevate your brand before you spend a single penny.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://calendly.com/svkscales/free-website-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 p-2 pr-8 md:pr-12 rounded-full bg-white/5 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:shadow-[0_0_50px_rgba(96,165,250,0.15)] text-left"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-inner">
              <Video size={28} className="text-white drop-shadow-md" />
              <div className="absolute inset-0 rounded-full border border-white/20 mix-blend-overlay" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-white font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-1">Book a Chat</span>
              <span className="text-white/50 text-xs tracking-widest uppercase transition-colors group-hover:text-blue-400">Schedule Zoom Call</span>
            </div>

            <div className="absolute right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
              <ArrowRight size={20} className="text-blue-400" />
            </div>
          </a>
        </motion.div>

      </motion.div>
      </div>
    </section>
  );
}
