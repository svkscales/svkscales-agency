"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  "Barbers", "Salons", "Barbershops", "Restaurants", "Takeaways", "Cafés", "Coffee Shops", "Bars", "Cocktail Bars", "Lounges", "Nightclubs", "Gyms", "Personal Trainers", "Boxing Gyms", "Yoga Studios", "Pilates Studios", "Boutiques", "Clothing Stores", "Jewellers", "Tattoo Studios", "Nail Bars", "Lash Studios", "Beauty Clinics", "Aesthetics Clinics", "Spas", "Massage Therapists", "Photographers", "Videographers", "DJs", "Event Planners", "Florists", "Interior Designers", "Letting Agents", "Tradesmen", "Landscapers", "Driving Instructors", "Life Coaches", "Nutritionists", "Local Legends"
];

const clientString = clients.join(" · ") + " · ";
const repeatedString = Array(4).fill(clientString).join("");

export default function ClientMarquee() {
  return (
    <div className="w-full bg-transparent py-6 flex relative z-20">
      <motion.div
        className="flex whitespace-nowrap min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 180,
          repeat: Infinity,
        }}
      >
        <div className="text-[10px] md:text-xs font-[family-name:var(--font-jakarta)] tracking-[0.3em] text-white/30 hover:text-white/60 transition-colors duration-1000 uppercase">
          {repeatedString}
        </div>
        <div className="text-[10px] md:text-xs font-[family-name:var(--font-jakarta)] tracking-[0.3em] text-white/30 hover:text-white/60 transition-colors duration-1000 uppercase">
          {repeatedString}
        </div>
      </motion.div>
    </div>
  );
}
