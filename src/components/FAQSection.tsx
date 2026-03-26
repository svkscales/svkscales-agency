"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "HOW LONG DOES IT TAKE TO BUILD MY WEBSITE?",
    answer: "Your free mockup will be ready within 24 hours of our initial call. Once you are happy with the direction the full live website is typically completed within 3 to 7 days depending on your tier and how quickly we receive your content and brand details."
  },
  {
    question: "DO I NEED TO PROVIDE MY OWN CONTENT AND IMAGES?",
    answer: "Not necessarily. I will guide you through exactly what is needed and can generate professional copy and visuals as part of the build. High quality photos of your business make a significant difference and I will advise you on what works best — but they are not essential to get started."
  },
  {
    question: "WILL MY WEBSITE WORK ON MOBILE?",
    answer: "Every site I build is fully mobile responsive — designed to look and perform perfectly on any device including phone, tablet and desktop."
  },
  {
    question: "CAN I UPDATE THE WEBSITE MYSELF AFTER IT IS BUILT?",
    answer: "All updates and changes are handled by me as part of your monthly retainer. You simply message me with what you need changed and it is done within 24 hours. No technical knowledge required on your end."
  },
  {
    question: "DO YOU OFFER PAYMENT PLANS?",
    answer: "Yes. A 50 percent deposit is required to begin and the remaining balance is due on completion and approval of your finished site. Flexible arrangements can be discussed on our call."
  },
  {
    question: "WHAT DO YOU NEED FROM ME TO GET STARTED?",
    answer: "Just your vision and any brand assets you already have such as a logo or colour scheme. I handle the rest including the copy, the design, the animation and the technical build."
  },
  {
    question: "WILL MY WEBSITE SHOW UP ON GOOGLE?",
    answer: "Every site includes a basic SEO foundation covering page titles, meta descriptions and mobile optimisation so Google can find and index your site. Premium and Full Brand tiers include more advanced local SEO setup to help you rank higher in local searches for your area and niche."
  },
  {
    question: "WHAT IS A RETAINER AND DO I NEED ONE?",
    answer: "A retainer is a small monthly fee that keeps your website maintained, updated and performing at its best. The Standard Retainer at £100 per month covers hosting, security updates and up to three content changes per month. The Premium Retainer at £150 per month includes everything in Standard plus monthly Google My Business management and priority 24 hour update turnaround. Most clients find the retainer pays for itself within days through the extra customers their new website brings in."
  },
  {
    question: "WHAT HAPPENS AFTER THE SITE GOES LIVE?",
    answer: "You receive a full handover so you understand everything about your new site. From there your retainer keeps everything running smoothly. Any changes, updates or additions are handled by me so you never have to worry about the technical side."
  },
  {
    question: "DO YOU ONLY WORK WITH LOCAL BUSINESSES?",
    answer: "For now yes — my focus is on giving local businesses a digital presence that genuinely competes at the highest level. Whether you are a barbershop in Manchester or a gym in London I bring the same cinematic premium approach to every build."
  },
  {
    question: "HOW IS YOUR APPROACH DIFFERENT FROM OTHER WEB DESIGNERS?",
    answer: "Most web designers build template sites that look like every other business in your area. I build cinematic scroll-linked animated websites using AI powered tools that make your business look like a premium brand. Your customers will notice the difference the moment they land on your site."
  },
  {
    question: "DO YOU OFFER A FREE MOCKUP?",
    answer: "Yes — after our initial call I will build a free mockup of your website within 24 hours so you can see exactly what your business will look like before committing to anything. No obligation and no payment required to see the mockup."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 px-6 flex justify-center items-center overflow-visible border-t border-white/5">
      {/* Background Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
            Clarity & Context
          </span>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-jakarta)] font-[800] text-white mt-4 tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>Frequently</span> <span>Asked</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Questions</span>
          </h2>
        </motion.div>

        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="w-full flex flex-col border border-white/10 bg-black/40 hover:bg-white/[0.03] hover:border-white/20 transition-all rounded-[1.5rem] overflow-hidden"
              >
                <button 
                  onClick={() => toggleOpen(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-sm md:text-base font-[family-name:var(--font-jakarta)] font-bold text-gray-200 tracking-wide pr-8">
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 border border-white/10"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm md:text-base text-gray-400 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
