"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    id: "01",
    title: "The Foundation",
    description: "A stunning cinematic online presence that makes your business impossible to ignore. Built for local businesses that need to look elite without the complexity. Includes a cinematic hero animation, core information, dynamic contact forms, and a clean interface. No booking systems—just pure, striking presence.",
    color: "text-blue-400",
    bgGlow: "bg-blue-500/5",
    border: "border-blue-500/20",
    link: "https://the-blues-bar.vercel.app/",
    imageUrl: "/portfolio/tier1.png",
  },
  {
    id: "02",
    title: "The Experience",
    description: "Everything in Tier 1, elevated with functionality. Your site becomes a working tool—a system that takes bookings, showcases your space, and actively drives repeat visits. Integrates seamless booking functionality, gallery showcases, and services framing. Best for salons, barbershops, and elite service businesses.",
    color: "text-purple-400",
    bgGlow: "bg-purple-500/5",
    border: "border-purple-500/20",
    link: "https://sovereign-cuts-tier2.vercel.app/",
    imageUrl: "/portfolio/tier2_fresh.png",
  },
  {
    id: "03",
    title: "The Platform",
    description: "The full package. A complete digital ecosystem built around your business. Everything in Tier 2 plus user account creation, individual service booking per team member, loyalty systems, and expanded complex architecture. Best for gyms, aesthetics clinics, and brands serious about scaling.",
    color: "text-cyan-400",
    bgGlow: "bg-cyan-500/5",
    border: "border-cyan-500/20",
    link: "https://vanguard-hq-tier3.vercel.app/",
    imageUrl: "/portfolio/tier3.png",
  }
];

const StickyTier = ({ tier, isEven }: { tier: typeof tiers[0], isEven: boolean }) => {
  return (
    <div className="relative w-full h-[150vh]">
      {/* Sticky container completely stops vertical progress for 150vh depth */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div id={`tier-${tier.id}`} className={`w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          
          {/* Central Sticky Node Dot for Timeline */}
          <div className={`hidden md:flex absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${tier.bgGlow} ${tier.border} border-2 backdrop-blur-md z-10 shadow-[0_0_15px_currentColor] ${tier.color}`}>
            <div className="w-1.5 h-1.5 bg-current rounded-full" />
          </div>

          {/* Text Details container */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <div className={`text-sm font-black tracking-[0.3em] uppercase mb-4 ${tier.color} flex items-center gap-4`}>
              <span>Tier {tier.id}</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              {tier.title}
            </h3>
            
            {/* Typewriter Scrolling Text Reveal */}
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-200px" }}
              variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.6 } } }}
              className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md flex flex-wrap"
            >
              {tier.description.split(" ").map((word, i) => (
                <motion.span 
                  key={i} 
                  variants={{ hidden: { opacity: 0, x: -10, filter: "blur(3px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4 } } }} 
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2"
            >
              <a href={tier.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-blue-400 transition-colors drop-shadow-md">
                View Architecture <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://calendly.com/svkscales/free-website-consultation" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase ${tier.color} hover:text-white transition-colors drop-shadow-md`}>
                Get A Quote <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Mockup container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full md:w-1/2"
          >
            <a href={tier.link} target="_blank" rel="noopener noreferrer" className="block group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-700 z-10 bg-[#0a0a0a]">
              
              <div 
                className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform z-0"
                style={{ backgroundImage: `url(${tier.imageUrl})` }}
              />

              <div className={`absolute inset-0 bg-gradient-to-tr ${tier.bgGlow} opacity-20 group-hover:opacity-50 transition-opacity duration-700 z-10 pointer-events-none`} />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-black/40 backdrop-blur-[2px]">
                <div className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2 text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
                  View Live Site
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default function PortfolioSection() {
  return (
    <section id="services" className="relative pt-16 md:pt-24 pb-0 bg-[#050505] overflow-visible">
      
      {/* Cinematic Background Blurs (Pinned relative to the entire Document flow) */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-[70%] right-[-5%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />

      {/* Section Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 mb-4">
            The Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-jakarta)] font-black text-white tracking-tighter">
            Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tiers</span>
          </h2>
        </motion.div>
      </div>

      {/* Timeline Container mapped dynamically */}
      <div className="relative w-full z-10">
        {/* Absolute Central Timeline tracking seamlessly down across all 3 sticky blocks */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
        
        {tiers.map((tier, index) => (
          <StickyTier key={tier.id} tier={tier} isEven={index % 2 === 0} />
        ))}
      </div>
      
    </section>
  );
}
