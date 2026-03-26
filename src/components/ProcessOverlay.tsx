"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProcessOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProcessOverlay({ isOpen, onClose }: ProcessOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#050505]/95 backdrop-blur-2xl overflow-y-auto"
        >
          {/* Background Motion Blur Orbs */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px]"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-16 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-12 md:mb-16 px-4 sticky top-0 py-4 bg-[#050505]/50 backdrop-blur-md rounded-2xl border border-white/5 mx-auto w-full">
              <h2 className="text-3xl md:text-5xl font-[800] font-[family-name:var(--font-jakarta)] text-white drop-shadow-lg tracking-tight">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Process.</span>
              </h2>
              <button 
                onClick={onClose}
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all text-white hover:rotate-90"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 flex-1">
              
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/40 border border-white/10 rounded-[2rem] p-6 md:p-10 hover:border-blue-500/50 transition-all flex flex-col"
              >
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-jakarta)] font-bold text-white mb-4">
                  Step 1. <br /><span className="text-blue-400">Connection</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  The first step is simple: we jump on a Zoom call and have a genuine chat. We'll dive right into your business to uncover exactly what you need, what you're looking for, the path you're currently on, and your ultimate vision for the future.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-black/40 border border-white/10 rounded-[2rem] p-6 md:p-10 hover:border-purple-500/50 transition-all flex flex-col"
              >
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-jakarta)] font-bold text-white mb-4">
                  Step 2. <br /><span className="text-purple-400">The Design</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  I've been fascinated by art from a very young age. That lifelong artistic intuition has always naturally guided me down creative paths. I apply that identical visual obsession to your digital identity, crafting a highly cohesive aesthetic because, at the end of the day, people buy from who they trust.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-black/40 border border-white/10 rounded-[2rem] p-6 md:p-10 hover:border-blue-500/50 transition-all flex flex-col"
              >
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-jakarta)] font-bold text-white mb-4">
                  Step 3. <br /><span className="text-blue-400">Launch</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  We finalize the build and bring your vision to life. You receive a flawlessly functional, wildly attractive platform—complete with booking integrations and order flows—that elevates your local business and actively sells your dream to your clients.
                </p>
              </motion.div>

            </div>

            {/* Cinematic Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col items-center justify-center mt-12 md:mt-16 text-white/30"
            >
              <div className="animate-bounce flex flex-col items-center">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-3">Scroll To Explore</span>
                <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
              </div>
            </motion.div>

            {/* Devon Stank Inspired Embedded CTA Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 md:mt-24 border-t border-white/10 pt-16 md:pt-20 flex flex-col w-full pb-16"
            >
              <span className="text-blue-400 text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                Interested? Let's Chat
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-[800] text-gray-200 leading-[1.3] max-w-4xl tracking-tight mb-10">
                I'm genuinely passionate about hearing the story behind your business. Let's connect, talk through your goals, and explore exactly how we can engineer your new digital identity.
              </h2>
              
              <button 
                onClick={() => window.open('https://calendly.com/svkscales/free-website-consultation', '_blank')}
                className="self-start px-10 py-5 border border-white/20 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                Contact Me Today
              </button>

              {/* Bottom Strip */}
              <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 w-full text-white/60">
                <div className="flex flex-col items-center md:items-start text-sm tracking-widest uppercase gap-1 hover:text-white transition-colors cursor-pointer">
                  <a href="mailto:svkscales@gmail.com">svkscales@gmail.com</a>
                </div>

                {/* Central Brand */}
                <div className="hidden md:flex items-center select-none group cursor-pointer" onClick={onClose}>
                  <span className="text-2xl font-bold tracking-widest text-white">S</span>
                  <span className="text-4xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 -ml-1 -mr-1 transition-all group-hover:scale-110 duration-500 drop-shadow-lg">V</span>
                  <span className="text-2xl font-bold tracking-widest text-white">K</span>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-white/50">
                  <a href="https://www.instagram.com/svkscales?igsh=MTkzZjkzOHNkNHExbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors cursor-pointer tracking-[0.2em]">Instagram</a>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
