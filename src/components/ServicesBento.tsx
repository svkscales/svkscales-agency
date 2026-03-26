"use client";

import { motion } from "framer-motion";

export default function ServicesBento() {
  return (
    <section id="services" className="w-full text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden border-t border-white/5 relative z-20 bg-[#050505]">
      {/* Universal Faint Motion Blur Background (Teddy AI Style) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-[800] font-[family-name:var(--font-jakarta)] tracking-tight text-center mb-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          Our Services
        </motion.h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-6 auto-rows-[320px]">
          
          {/* Tier 1 - Large Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 flex flex-col justify-end transition-all hover:border-blue-500/50 hover:bg-zinc-900/80"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_60%)] group-hover:opacity-100 transition-opacity opacity-0 z-0"></div>
            <div className="relative z-20">
              <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase mb-3 block drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">Phase One</span>
              <h3 className="text-3xl lg:text-4xl font-[800] font-[family-name:var(--font-jakarta)] tracking-tight uppercase mb-4">The Cinematic Build</h3>
              <p className="text-gray-300 max-w-xl text-lg leading-relaxed">Our flagship service. A fully custom, high-converting digital presence built specifically to dominate your local market. Complete with strategic copywriting, premium UI/UX, custom database architecture, and bleeding-edge AI system integrations.</p>
            </div>
          </motion.div>

          {/* Tier 2 - Medium Box top right */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 flex flex-col justify-end transition-all hover:border-purple-500/50 hover:bg-zinc-900/80"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.2),_transparent_60%)] group-hover:opacity-100 transition-opacity opacity-0 z-0"></div>
            <div className="relative z-20">
              <span className="text-purple-400 text-sm font-bold tracking-[0.2em] uppercase mb-2 block drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">Accelerated</span>
              <h3 className="text-2xl font-[800] font-[family-name:var(--font-jakarta)] tracking-tight uppercase mb-3">The Landing Page</h3>
              <p className="text-gray-400 text-sm leading-relaxed">A highly-optimized, single-page funnel designed explicitly to convert local real-world traffic into premium leads.</p>
            </div>
          </motion.div>

          {/* Tier 3 - Medium Box bottom right */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 flex flex-col justify-end transition-all hover:border-blue-500/50 hover:bg-zinc-900/80"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.15),_transparent_60%)] group-hover:opacity-100 transition-opacity opacity-0 z-0"></div>
            <div className="relative z-20">
              <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase mb-2 block drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">Consulting</span>
              <h3 className="text-2xl font-[800] font-[family-name:var(--font-jakarta)] tracking-tight uppercase mb-3">Systems Audit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Deep-dive technical review of your current digital presence, highlighting AI bottlenecks and conversion leaks.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
