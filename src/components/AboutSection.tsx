"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProcessOverlay from "./ProcessOverlay";
import { RainbowButton } from "@/registry/magicui/rainbow-button";

const headerText = "Crafting cinematic web designs is my primary focus.";
const words = headerText.split(" ");

// Scroll-linked Opacity scrub component for each individual word
const ScrubWord = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const color = useTransform(progress, range, ["rgba(255,255,255,0.15)", "rgba(255,255,255,1)"]);
  return (
    <motion.span style={{ color }} className="mr-[0.25em] inline-block transition-colors duration-100">
      {children}
    </motion.span>
  );
};

export default function AboutSection() {
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically across the height of this pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  React.useEffect(() => {
    const handleOpen = () => setIsProcessOpen(true);
    window.addEventListener('open-process-overlay', handleOpen);
    return () => window.removeEventListener('open-process-overlay', handleOpen);
  }, []);

  return (
    <>
      <section id="about" ref={containerRef} className="w-full relative z-20 bg-[#050505] h-[250vh]">
        {/* Sticky frame physically stops the user scroll while absorbing the vertical journey */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-0">
          
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px]"></div>
          </div>

          <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left Side: Floating Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[280px] md:max-w-none mx-auto md:w-5/12 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.15)] ring-1 ring-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 mix-blend-multiply"></div>
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="/portrait-0.jpg" 
                alt="SVK Scales" 
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-[2000ms]"
              />
            </motion.div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12 flex flex-col items-start">
              
              {/* Headline - Scroll Linked Word Scrub */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-4xl lg:text-5xl font-[800] leading-[1.15] mb-6 md:mb-8 tracking-tight font-[family-name:var(--font-jakarta)] flex flex-wrap"
              >
                {words.map((word, i) => {
                  // Deadzone from 0 - 30% allows the user to read the subtext typing out before the headline starts lighting up
                  const start = 0.3 + (i / words.length) * 0.5;
                  const end = start + (0.5 / words.length);
                  return <ScrubWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</ScrubWord>;
                })}
              </motion.h2>

              <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-8 mb-6">
                {/* Subtext 1 */}
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } } }}
                  className="text-blue-400 text-xs md:text-base font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] flex flex-wrap"
                >
                  {"Let's cut the BS.".split("").map((char, i) => (
                    <motion.span key={i} variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0, transition: { duration: 0.2 } } }} className={char === " " ? "w-[0.5em]" : "inline-block"}>
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
                
                {/* Subtext 2 */}
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.8 } } }}
                  className="text-gray-300 text-sm md:text-xl leading-relaxed max-w-2xl font-light flex flex-wrap"
                >
                  {"You run a real business. You need a digital presence that actually reflects that. We build cinematic web designs that drop jaws and actually convert.".split(" ").map((word, i) => {
                    const isBold = word === "cinematic" || word === "web" || word === "designs" || word === "actually" || word === "convert.";
                    return (
                      <motion.span 
                        key={i} 
                        variants={{ hidden: { opacity: 0, x: -10, filter: "blur(2px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4 } } }}
                        className={`mr-[0.25em] inline-block ${isBold ? "text-white font-bold" : ""}`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </motion.p>
              </div>

              {/* Learn More CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex justify-center md:justify-start"
              >
                <RainbowButton 
                  onClick={() => setIsProcessOpen(true)}
                  className="mt-8 md:mt-10 self-center md:self-start px-8 md:px-10 py-5 md:py-6 text-xs md:text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 w-[80%] md:w-auto text-center"
                >
                  Learn More
                </RainbowButton>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <ProcessOverlay isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />
    </>
  );
}
