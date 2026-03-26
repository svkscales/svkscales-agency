"use client";

import React from "react";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}

interface AvatarCirclesProps {
  numPeople?: number;
  avatarUrls: Avatar[];
  className?: string;
}

export function AvatarCircles({ numPeople, avatarUrls, className = "" }: AvatarCirclesProps) {
  return (
    <div className={`flex -space-x-3 items-center ${className}`}>
      {avatarUrls.map((avatar, i) => (
        <a 
          key={i} 
          href={avatar.profileUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative w-10 h-10 rounded-full border-2 border-black overflow-hidden hover:scale-110 hover:-translate-y-1 transition-all z-10 hover:z-20 shadow-lg"
        >
          <img src={avatar.imageUrl} alt="Avatar" className="w-full h-full object-cover" />
        </a>
      ))}
      {numPeople && (
        <div className="relative w-10 h-10 rounded-full border-2 border-black bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold z-10 hover:scale-110 transition-transform cursor-default">
          +{numPeople}
        </div>
      )}
    </div>
  );
}
