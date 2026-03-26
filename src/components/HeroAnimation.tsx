"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { PulsatingButton } from "@/components/ui/PulsatingButton";

const FRAME_COUNT = 192;

const TwinklingStars = ({ parallaxX, parallaxY, opacity }: { parallaxX: any, parallaxY: any, opacity: any }) => {
  const [stars, setStars] = useState<Array<{ id: number, top: string, left: string, delay: number, size: number, duration: number }>>([]);

  useEffect(() => {
    const generated = [];
    for (let i = 0; i < 250; i++) {
      let t, l;
      let valid = false;
      // Intelligently spawn stars only in the upper sky to perfectly frame the canvas.
      while (!valid) {
        t = Math.random() * 100;
        l = Math.random() * 100;
        
        // Exclude the bottom 45% completely to avoid touching the ocean
        if (t > 55) continue;
        
        valid = true;
      }

      generated.push({
        id: i,
        top: `${t}%`,
        left: `${l}%`,
        delay: Math.random() * 5,
        size: Math.random() * 2.5 + 0.5,
        duration: Math.random() * 3 + 1.5,
      });
    }
    setStars(generated);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
      style={{ x: parallaxX, y: parallaxY, opacity }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.5, 0.8] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

const NumberCounter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = `${prefix}${Math.round(value)}${suffix}`;
      }
    });
    return () => controls.stop();
  }, [from, to, duration, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
};

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1 range
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 65 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 65 });
  
  // Parallax translation (in pixels) - reduced by ~1/3 for tighter constraints
  const parallaxX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(smoothY, [-1, 1], [-10, 10]);
  
  // Stars move slightly more for 3D depth effect
  const starsParallaxX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const starsParallaxY = useTransform(smoothY, [-1, 1], [-20, 20]);
  
  // Stars stay fully visible the entire time, their layout box physically protects the diamond
  const starsOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // Revert to the buttery smooth, slow sequence fade for the dark overlay
  const bgOverlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Hover triggers to replay cinematic counters
  const [tierHoverKey, setTierHoverKey] = useState(0);
  const [turnaroundHoverKey, setTurnaroundHoverKey] = useState(0);
  const [customHoverKey, setCustomHoverKey] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // frame_000_delay-0.041s.jpg
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/frames/frame_${frameNumber}_delay-0.041s.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (progress: number) => {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT)
        );
        const img = images[frameIndex];
        if (!img) return;
  
        // Draw the image to fit canvas while maintaining aspect ratio
        const { width, height } = canvas;
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
  
        let drawWidth, drawHeight, offsetX, offsetY;
        if (canvasRatio > imgRatio) {
          drawWidth = width;
          drawHeight = width / imgRatio;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawWidth = height * imgRatio;
          drawHeight = height;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        }
  
        // Fill canvas background with black to match JPEG edges
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
  
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };
  
      // Initial render
      render(0);
  
      const unsubscribe = scrollYProgress.onChange((latest) => {
        render(latest);
      });
  
      return () => unsubscribe();
    }, [images, scrollYProgress]);
  

    return (
      <div ref={containerRef} className="relative h-[300vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
  
          <motion.canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            style={{ 
              x: parallaxX, 
              y: parallaxY,
              scale: 1.05 
            }}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
  
          {/* Fading Dark Overlay - cleanly fading to zero to perfectly reveal the diamond's brightness */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" 
            style={{ opacity: bgOverlayOpacity }} 
          />

          {/* Twinkling Stars Overlay with extra 3D parallax */}
          <TwinklingStars parallaxX={starsParallaxX} parallaxY={starsParallaxY} opacity={starsOpacity} />
  
          {/* Main Hero Content */}
          <div 
            className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center z-20 px-4 pt-24 pb-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6 pointer-events-auto text-2xl md:text-3xl font-serif font-black tracking-[0.4em] ml-[0.4em]"
            >
              <span className="text-white">SVK</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">SCALES</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-[800] text-white text-center tracking-tight mb-8 max-w-5xl leading-tight drop-shadow-2xl pointer-events-auto font-[family-name:var(--font-jakarta)]"
            >
              Build Your Website <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                with AI Systems
              </span>
            </motion.h1>

            <div className="mb-auto w-full pointer-events-none"></div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="w-full pointer-events-none flex items-center justify-center mb-12 md:mb-16 pt-4"
            >
              <div className="pointer-events-auto flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 max-w-fit mx-auto px-5 py-3 md:px-8 md:py-4 bg-white-[0.03] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                
                {/* Left: 3 Tiers (Pop Fade Sequence) */}
                <div 
                  className="w-20 md:w-24 flex flex-col items-center text-center shrink-0 cursor-default group"
                  onMouseEnter={() => setTierHoverKey(prev => prev + 1)}
                >
                  <div key={tierHoverKey} className="relative w-14 h-14 md:w-16 md:h-16 mb-2 flex items-center justify-center">
                    {/* 1 */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-jakarta)] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.2] }}
                      transition={{ duration: 1.16, ease: "easeInOut", delay: 0.5 }}
                    >1</motion.div>
                    {/* 2 */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-jakarta)] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.2] }}
                      transition={{ duration: 1.16, ease: "easeInOut", delay: 1.66 }}
                    >2</motion.div>
                    {/* 3 */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-jakarta)] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 1, 1], scale: [0.5, 1, 1] }}
                      transition={{ duration: 1.16, ease: "easeOut", delay: 2.82 }}
                    >3</motion.div>
                  </div>
                  <div className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-white/70 uppercase leading-relaxed whitespace-nowrap">
                    Tier System
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-8 md:h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                {/* Center: 24 HR Turnaround Gradient Glowing SVG */}
                <div 
                  className="w-20 md:w-24 flex flex-col items-center text-center shrink-0 cursor-default group"
                  onMouseEnter={() => setTurnaroundHoverKey(prev => prev + 1)}
                >
                  <div key={turnaroundHoverKey} className="relative w-14 h-14 md:w-16 md:h-16 mb-2 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                      <circle cx="50%" cy="50%" r="44%" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" fill="none" />
                      <motion.circle 
                        cx="50%" cy="50%" r="44%" 
                        stroke="#ffffff" 
                        strokeWidth="2.5" 
                        fill="none" 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      />
                    </svg>
                    <div className="text-xs md:text-sm lg:text-base font-black text-white font-[family-name:var(--font-jakarta)] tracking-tighter z-10 pt-0.5">
                      <NumberCounter from={1} to={24} duration={3.5} suffix="HR" />
                    </div>
                  </div>
                  <div className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-white/70 uppercase leading-relaxed whitespace-nowrap">
                    Turnaround
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-8 md:h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                {/* Right: 100% Custom */}
                <div 
                  className="w-24 md:w-28 flex flex-col items-center text-center shrink-0 cursor-default group"
                  onMouseEnter={() => setCustomHoverKey(prev => prev + 1)}
                >
                  <div key={customHoverKey} className="flex items-center justify-center h-14 md:h-16 mb-2 w-full">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white font-[family-name:var(--font-jakarta)] tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tabular-nums">
                      <NumberCounter from={1} to={100} duration={3.5} suffix="%" />
                    </div>
                  </div>
                  <div className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-white/70 uppercase leading-relaxed whitespace-nowrap">
                    Custom Built
                  </div>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <PulsatingButton 
                onClick={() => window.open('https://calendly.com/svkscales/free-website-consultation', '_blank')}
                className="mt-4 md:mt-6 pointer-events-auto sm:min-w-[240px] shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              >
                Book a Free Consultation
              </PulsatingButton>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
