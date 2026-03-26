"use client";

import React from "react";

interface PulsatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function PulsatingButton({ children, className = "", ...props }: PulsatingButtonProps) {
  return (
    <button 
      className={`relative inline-flex items-center justify-center text-center px-8 py-3.5 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white bg-black border border-white/20 rounded-full transition-all hover:bg-white/5 hover:scale-105 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Pulse ring 1 */}
      <div className="absolute inset-0 rounded-full bg-white animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-10 z-0 pointer-events-none"></div>
      {/* Pulse ring 2 */}
      <div className="absolute inset-[-6px] rounded-full border border-white/20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] z-0 pointer-events-none"></div>
    </button>
  );
}
