"use client";

import React from "react";
import Link from "next/link";
import { AvatarCircles } from "@/components/ui/AvatarCircles";

const instagramUrl = "https://www.instagram.com/svkscales?igsh=MTkzZjkzOHNkNHExbg%3D%3D&utm_source=qr";

const avatars = [
  { imageUrl: "https://github.com/shadcn.png", profileUrl: instagramUrl },
  { imageUrl: "https://github.com/leerob.png", profileUrl: instagramUrl },
  { imageUrl: "https://github.com/dillionverma.png", profileUrl: instagramUrl },
  { imageUrl: "https://github.com/tomonarifeehan.png", profileUrl: instagramUrl },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white py-16 px-6 border-t border-white/5 relative z-10">
      
      {/* Dynamic SVG Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute hidden">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#60A5FA" offset="0%" />
          <stop stopColor="#A855F7" offset="100%" />
        </linearGradient>
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        
        {/* Left Side: Mission Statement */}
        <div className="flex-1 md:text-left text-center">
          <span className="text-xs md:text-sm text-white/50 tracking-widest uppercase leading-relaxed block">
            Cinematic Web Designs<br /> For Local Leaders
          </span>
        </div>
        
        {/* Center: SVK Logo */}
        <div 
          className="flex-1 flex justify-center items-center select-none group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-3xl md:text-4xl font-bold tracking-widest text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">S</span>
          <span className="text-5xl md:text-6xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 -ml-1 -mr-1 transition-all group-hover:scale-110 duration-500 drop-shadow-lg">V</span>
          <span className="text-3xl md:text-4xl font-bold tracking-widest text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">K</span>
        </div>

        {/* Right Side: Avatar Circles + Animated Tooltip Icons */}
        <div className="flex-1 flex flex-col md:flex-row justify-center md:justify-end items-center gap-5 md:gap-8 mt-12 md:mt-0">
          
          <div className="hidden md:block">
            <AvatarCircles numPeople={84} avatarUrls={avatars} />
          </div>

          <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase z-20">
            <a 
              href="https://www.instagram.com/svkscales?igsh=MTkzZjkzOHNkNHExbg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-300"
            >
              Instagram
            </a>
          </div>

          {/* Mobile Avatar Circles placed below Instagram */}
          <div className="block md:hidden mt-2 z-20 scale-110">
            <AvatarCircles numPeople={84} avatarUrls={avatars} />
          </div>

        </div>

      </div>
      
      {/* Bottom Row Policies */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-white/30 uppercase tracking-widest gap-6">
        <span>&copy; {new Date().getFullYear()} SVK Scales. All Rights Reserved.</span>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/terms-of-service" className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">Terms of Service</Link>
          <Link href="/privacy-policy" className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">Cookie Policy</Link>
        </div>
      </div>

    </footer>
  );
}
