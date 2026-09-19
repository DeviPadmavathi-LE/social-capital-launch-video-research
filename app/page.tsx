"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScratchCard from "@/components/ScratchCard";

export default function BriefPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 flex flex-col justify-center items-center text-center max-w-5xl mx-auto relative">
      
      {/* Decorative Crosshairs for the technical vibe */}
      <div className="crosshair hidden md:block" style={{ top: '20%', left: '5%' }}></div>
      <div className="crosshair hidden md:block" style={{ top: '20%', right: '5%' }}></div>
      <div className="crosshair hidden md:block" style={{ bottom: '20%', left: '5%' }}></div>
      <div className="crosshair hidden md:block" style={{ bottom: '20%', right: '5%' }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-12 bg-white premium-shadow relative z-10"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#11212D]"></span>
        </span>
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#253745]">
          Distribution Lab // 01
        </span>
      </motion.div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-[#06141B] leading-[1.1] relative z-10 text-center max-w-5xl mx-auto">
        {"What makes a product launch feel impossible to ignore?".split("").map((char, index, array) => {
          const delay = (array.length - 1 - index) * 0.03; // 0.03s per char (slightly faster for longer text)
          return (
            <span key={index}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: delay }}
              >
                {char}
              </motion.span>
            </span>
          );
        })}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg md:text-xl text-[#253745] max-w-3xl mx-auto text-center font-medium leading-relaxed relative z-10"
      >
        A public-data investigation into Social Capital's launch videos, creative choices, and distribution patterns.
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="flex flex-col items-center mt-20 relative z-10 opacity-80 hover:opacity-100 transition-opacity cursor-default"
      >
        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#06141B]/10 shadow-sm mb-4">
          <span className="text-base" role="img" aria-label="investigator">🕵️‍♀️</span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A5C6A]">
            Care enough to know my approach?
          </span>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-[#4A5C6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10 text-left mt-12 md:mt-16 mx-4 md:mx-auto">
        <ScratchCard>
          <div 
            className="p-8 md:p-14 bg-[#06141B]/[0.08] border border-[#06141B]/[0.12] rounded-[2rem] shadow-sm backdrop-blur-sm h-full w-full"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")` }}
          >
            <div className="max-w-xl mx-auto">
              {/* THE APPROACH: Premium Blur Reveal */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#4A5C6A] mb-8">
                  The Approach
                </p>
              </motion.div>

              {/* First sentence: Massive hook with blur reveal */}
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="text-3xl md:text-4xl font-serif text-[#06141B] leading-[1.2] tracking-tight mb-8"
              >
                "I had a question. Naturally, I went down the rabbit hole."
              </motion.p>

              {/* Remaining paragraphs: Staggered blur reveal */}
              <div className="space-y-6 text-[17px] md:text-lg text-[#11212D] leading-relaxed font-medium">
                <motion.p
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                >
                  I picked apart the public evidence, followed the interesting threads, and built the tool around what I found.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                >
                  AI helped me build the interface. The taste, judgment, and decisions are mine.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                  className="text-[#06141B] font-serif font-semibold text-xl md:text-2xl pt-4 tracking-tight"
                >
                  "I have a point of view. I just won't die on a hill if the evidence says I'm wrong."
                </motion.p>
              </div>
            </div>
          </div>
        </ScratchCard>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 relative z-10"
      >
        <Link 
          href="/cases"
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#06141B] text-white rounded-2xl text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all premium-shadow hover:-translate-y-0.5 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            View The Case Studies
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
