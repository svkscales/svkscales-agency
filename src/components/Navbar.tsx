"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center text-white bg-black/20 backdrop-blur-sm border-b border-white/10">
      <Link href="/" className="flex items-center select-none group">
        <span className="text-xl md:text-2xl font-bold tracking-widest text-white">S</span>
        <span className="text-3xl md:text-4xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 -ml-1 -mr-1 transition-all group-hover:scale-110 duration-500 drop-shadow-lg">V</span>
        <span className="text-xl md:text-2xl font-bold tracking-widest text-white">K</span>
      </Link>
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest uppercase">
        <button onClick={() => window.dispatchEvent(new Event('open-process-overlay'))} className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-300 uppercase tracking-[0.2em]">
          About
        </button>
        <a href="#tier-02" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-300 uppercase tracking-[0.2em]">
          Services
        </a>
        <a href="#contact" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-300 uppercase tracking-[0.2em]">
          Contact
        </a>
      </div>

      {/* Mobile Navigation Links */}
      <div className="flex md:hidden items-center gap-4 text-[11px] font-semibold tracking-widest uppercase">
        <button onClick={() => window.dispatchEvent(new Event('open-process-overlay'))} className="text-white hover:text-blue-400 transition-all duration-300 uppercase">
          ABOUT
        </button>
        <a href="#tier-02" className="text-white hover:text-blue-400 transition-all duration-300 uppercase">
          SERVICES
        </a>
        <a href="#contact" className="text-white hover:text-blue-400 transition-all duration-300 uppercase">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
