import React from "react";
import { ArrowRight } from "lucide-react";

export function InteractiveHoverButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-white p-2 px-8 text-center font-bold text-black border-transparent shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Expanding Black Background from Center */}
      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-black transition-all duration-500 group-hover:scale-[100] z-0"></div>
      
      {/* Unhovered State Text */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <span className="inline-block whitespace-nowrap transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* Hovered State Text + Arrow */}
      <div className="absolute inset-0 z-20 flex h-full w-full translate-x-8 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="whitespace-nowrap">{children}</span>
        <ArrowRight className="w-5 h-5" />
      </div>
    </button>
  );
}
