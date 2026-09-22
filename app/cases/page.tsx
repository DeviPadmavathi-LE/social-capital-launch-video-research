"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCases } from "@/lib/data";
import Link from "next/link";

export default function EvidencePage() {
  const cases = getCases();
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);

  const activeCase = cases.find(c => c.id === activeCaseId);

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto relative flex flex-col justify-start">
      
      {/* Decorative Grid Lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-[rgba(0,0,0,0.02)] -z-10 hidden lg:block"></div>
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-[rgba(0,0,0,0.02)] -z-10 hidden lg:block"></div>

      <div className="mb-6 mt-4 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-3 bg-white premium-shadow" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <span className="w-2 h-2 rounded-full bg-[#11212D] animate-pulse"></span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#253745]">
            Phase 02 // The Case Library
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient mb-2 pb-2 leading-[1.2]">
          The Investigation Files
        </h1>
        <p className="text-base max-w-2xl text-[#253745] leading-relaxed">
          Select a case file to open the detailed dossier.
        </p>
      </div>

      {/* The Bookshelf (Grid of 3 Books) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 max-w-5xl mx-auto w-full">
        {cases.map((c, idx) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveCaseId(c.id)}
            className="relative w-full aspect-[4/5] rounded-r-xl rounded-l-md shadow-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
            style={{ 
              backgroundColor: idx === 0 ? '#3B171B' : idx === 1 ? '#122D24' : '#172033', // Deep vintage colors: Burgundy, Forest, Navy
              backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
              borderLeft: '24px solid rgba(0,0,0,0.7)',
              borderRight: '1px solid rgba(255,255,255,0.1)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderBottom: '1px solid rgba(0,0,0,0.5)',
            }}
          >
            {/* Book Spine Texture Overlay */}
            <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-20"></div>

            {/* The Gold Foil Border Container */}
            <div className="flex-1 m-4 border border-[#D4AF37]/30 rounded-sm relative flex flex-col items-center justify-center p-6 text-center group-hover:border-[#D4AF37]/60 transition-colors duration-500">
              
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#D4AF37]/40"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#D4AF37]/40"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#D4AF37]/40"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#D4AF37]/40"></div>

              <div className="w-12 h-[1px] bg-[#D4AF37]/40 mb-6"></div>
              
              <p className="text-[9px] font-serif uppercase tracking-[0.3em] text-[#D4AF37]/70 mb-6">
                Archive Vol. 0{idx + 1}
              </p>
              
              <h3 className="text-3xl font-serif text-[#FDE68A] mb-8 tracking-wide drop-shadow-md leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {c.company}
              </h3>
              
              <div className="w-12 h-[1px] bg-[#D4AF37]/40 mb-8"></div>

              <p className="text-[9px] font-serif italic tracking-widest text-[#D4AF37]/50 mt-auto group-hover:text-[#D4AF37]/80 transition-colors">
                [ Click to Open Case File ]
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 pt-12 flex justify-between items-center relative z-10" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Link href="/" className="group text-xs font-mono font-bold uppercase tracking-widest text-[#253745] hover:text-white transition-colors flex items-center gap-2">
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Brief
        </Link>
        <Link href="/insight" className="inline-flex items-center gap-2 px-6 py-3 bg-[#06141B] text-white rounded-xl text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all premium-shadow group">
          View The Pattern <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* The Open Book Modal */}
      <AnimatePresence>
        {activeCaseId && activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#06141B]/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-6xl h-[85vh] md:max-h-[85vh] rounded-xl shadow-2xl flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar md:overflow-hidden relative"
              style={{ backgroundColor: 'var(--bg)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveCaseId(null)} 
                className="absolute top-6 right-6 z-50 w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center border border-[#06141B] text-[#253745] hover:text-white hover:bg-[#06141B] transition-all"
              >
                ✕
              </button>

              {/* LEFT PAGE: The Breakdown Timeline */}
              <div className="w-full shrink-0 snap-start md:w-1/2 h-full overflow-y-auto p-6 md:p-10 relative z-10 border-r border-[#06141B]/10 bg-[#EAF2F8]">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#253745] mb-2">CASE FILE // {activeCase.company}</p>
                
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#253745] mb-2 mt-4">The Claim</h4>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#06141B] mb-12 italic leading-snug">
                  "{activeCase.claim}"
                </h2>
                
                <div className="space-y-10 relative">
                  {/* Connecting Line */}
                  <div className="absolute top-4 bottom-4 left-[15px] w-[2px] bg-[#06141B]/10"></div>
                  
                  {/* Step 1 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white text-[#253745] font-bold flex items-center justify-center text-xs border border-[#06141B] z-10 shadow-sm">1</div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#253745] mb-1">The Core Friction</h4>
                    <p className="text-sm text-[#253745] leading-relaxed">{activeCase.problem}</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white text-[#253745] font-bold flex items-center justify-center text-xs border border-[#06141B] z-10 shadow-sm">2</div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#253745] mb-1">The Deliberate Omission</h4>
                    <p className="text-sm font-bold text-[#06141B] leading-relaxed">{activeCase.omitted}</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#06141B] text-white font-bold flex items-center justify-center text-xs z-10 shadow-sm">3</div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#253745] mb-1">The Uncontestable Proof</h4>
                    <p className="text-sm font-bold text-[#06141B] leading-relaxed">{activeCase.proof}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT PAGE: The Deep Analysis */}
              <div className="w-full shrink-0 snap-start md:w-1/2 h-full overflow-y-auto p-6 md:p-10 relative z-20 bg-[#EAF2F8]">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#253745] mb-6 border-b border-[#06141B] pb-3">Investigator's Analysis</h4>
                
                <div className="prose prose-neutral max-w-none flex flex-col h-[calc(100%-3rem)]">
                  <p className="text-base leading-relaxed text-[#06141B] font-medium mb-8">
                    {activeCase.id === "CASE-WISPR" && "I analyzed the Wispr Flow launch structure frame-by-frame. Unlike standard SaaS launches that rely on 'talking head' founder stories to build trust, Wispr allocates zero screen time to human faces."}
                    {activeCase.id === "CASE-CARTESIA" && "Infrastructure launches typically fail because backend code is visually boring. Cartesia solves this by abandoning the software interface entirely."}
                    {activeCase.id === "CASE-AIRWALLEX" && "I investigated the Airwallex launch. To celebrate a $1B ARR milestone without alienating their audience or appearing arrogant, Airwallex completely removes their actual financial product from the video."}
                  </p>
                  
                  <p className="text-base leading-relaxed text-[#253745] mb-10">
                    {activeCase.id === "CASE-WISPR" && "By completely removing the human element, they force the viewer's eye exclusively onto the real-time speed of the UI—transforming an abstract claim about dictation speed into undeniable, raw visual proof."}
                    {activeCase.id === "CASE-CARTESIA" && "By visualizing raw latency through immediately reactive audio waveforms, they bypass technical jargon and UI complexity, providing a visceral, immediate proof of their sub-90ms speed."}
                    {activeCase.id === "CASE-AIRWALLEX" && "By contrasting a massive B2B revenue claim with vulnerable, lo-fi archival footage of the founders in a cramped room, they use human struggle as proof that the massive scale was earned, not just engineered."}
                  </p>

                  <div className="p-6 bg-white border border-[#06141B] rounded-xl shadow-sm mt-auto">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#253745] mb-2">Core Takeaway</p>
                    <p className="text-sm font-semibold text-[#06141B] leading-relaxed">
                      {activeCase.id === "CASE-WISPR" && "This execution proves that viral trust isn't generated by adding marketing hooks. It is engineered by aggressively deleting any visual—even the founder—that distracts from the raw proof of the product's speed."}
                      {activeCase.id === "CASE-CARTESIA" && "Infrastructure is notoriously hard to demo. Cartesia succeeds by omitting traditional code screens entirely, replacing technical jargon with a visceral, instantly understandable audio-visual proof of low latency."}
                      {activeCase.id === "CASE-AIRWALLEX" && "To announce a massive financial milestone without appearing out of touch, Airwallex omitted corporate polish. They used vulnerable founding footage as evidence that their scale was hard-earned, not just engineered."}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
