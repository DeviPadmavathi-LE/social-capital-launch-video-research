"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFinding } from "@/lib/data";

export default function InsightPage() {
  const finding = getFinding();

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto relative flex flex-col justify-start">
      {/* Decorative Grid Lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-[rgba(0,0,0,0.02)] -z-10 hidden lg:block"></div>
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-[rgba(0,0,0,0.02)] -z-10 hidden lg:block"></div>

      <div className="mb-16 mt-4 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-4 bg-white premium-shadow" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <span className="w-2 h-2 rounded-full bg-[#4A5C6A]"></span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#253745]">
            Phase 03 // The Pattern
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#06141B] mb-6">
          What Makes The Cut
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-[#4A5C6A] leading-relaxed font-serif italic">
          "The interesting part isn't only what the videos show. It's what they choose not to show."
        </p>
      </div>

      {/* The Visual Equation (New Presentation) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl mx-auto mb-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-mono w-full">
          {/* Step 1 */}
          <div className="w-full md:w-1/3 p-8 border border-[#CCD0CF] bg-white rounded-2xl shadow-sm text-center">
            <p className="text-[10px] text-[#9BA8AB] mb-3 tracking-[0.2em]">THE CLAIM</p>
            <p className="text-base md:text-[15px] font-bold text-[#06141B] leading-snug">What does the audience need to believe?</p>
          </div>
          
          <div className="text-2xl text-[#9BA8AB] flex items-center justify-center">
            <span className="md:hidden">â†“</span>
            <span className="hidden md:inline">â†’</span>
          </div>
          
          {/* Step 2 */}
          <div className="w-full md:w-1/3 p-8 border border-[#CCD0CF] bg-white rounded-2xl shadow-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 border-2 border-[#4A5C6A]/20 rounded-2xl m-1 border-dashed"></div>
            <p className="text-[10px] text-[#9BA8AB] mb-3 tracking-[0.2em] relative z-10">THE EDIT</p>
            <p className="text-base md:text-[15px] font-bold text-[#06141B] relative z-10 leading-snug">What gets removed so that claim is easier to see?</p>
          </div>
          
          <div className="text-2xl text-[#06141B] font-bold flex items-center justify-center">
            <span className="md:hidden">â†“</span>
            <span className="hidden md:inline">â†’</span>
          </div>
          
          {/* Step 3 */}
          <div className="w-full md:w-1/3 p-10 border border-[#11212D] bg-[#11212D] rounded-2xl shadow-2xl scale-100 md:scale-110 text-center relative z-10 flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#4A5C6A]/20 rounded-bl-full blur-xl"></div>
            <p className="text-[10px] text-[#9BA8AB] mb-3 tracking-[0.2em]">THE PROOF</p>
            <p className="text-base md:text-lg font-bold text-white leading-snug">What remains to make the claim tangible?</p>
          </div>
        </div>
      </motion.div>

      {/* THE PATTERN IN 3 CASES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-32"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest mb-6 text-[#4A5C6A] text-left">
          The Pattern In 3 Cases
        </p>
          <div className="bg-transparent md:bg-white md:border border-[#CCD0CF] md:rounded-2xl shadow-none md:shadow-sm">
            
            {/* Mobile View: Stacked Archival Tickets */}
            <div className="md:hidden space-y-6">
              {/* Card 1 */}
              <div className="bg-[#F8FAFC] border border-[#CCD0CF] rounded-sm p-6 shadow-sm relative overflow-hidden flex flex-col gap-4">
                <div className="absolute -bottom-6 -right-4 text-[120px] font-mono font-black text-[#06141B]/[0.03] leading-none pointer-events-none select-none tracking-tighter">01</div>
                
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Case File</p>
                  <p className="font-bold text-[#06141B] text-xl font-mono uppercase tracking-tight">Wispr Flow</p>
                </div>
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Target Belief</p>
                  <p className="text-sm font-medium text-[#06141B]">The product is fast</p>
                </div>
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Strategic Cut</p>
                  <p className="text-sm font-medium text-[#06141B] opacity-60 line-through decoration-1 decoration-red-500/50">Human presenter</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Undeniable Proof</p>
                  <p className="text-sm font-bold text-[#06141B]">Product working in real time</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F8FAFC] border border-[#CCD0CF] rounded-sm p-6 shadow-sm relative overflow-hidden flex flex-col gap-4">
                <div className="absolute -bottom-6 -right-4 text-[120px] font-mono font-black text-[#06141B]/[0.03] leading-none pointer-events-none select-none tracking-tighter">02</div>
                
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Case File</p>
                  <p className="font-bold text-[#06141B] text-xl font-mono uppercase tracking-tight">Cartesia</p>
                </div>
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Target Belief</p>
                  <p className="text-sm font-medium text-[#06141B]">The interaction is genuinely responsive</p>
                </div>
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Strategic Cut</p>
                  <p className="text-sm font-medium text-[#06141B] opacity-60 line-through decoration-1 decoration-red-500/50">Conventional UI / human presence</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Undeniable Proof</p>
                  <p className="text-sm font-bold text-[#06141B]">Audio interaction itself</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F8FAFC] border border-[#CCD0CF] rounded-sm p-6 shadow-sm relative overflow-hidden flex flex-col gap-4">
                <div className="absolute -bottom-6 -right-4 text-[120px] font-mono font-black text-[#06141B]/[0.03] leading-none pointer-events-none select-none tracking-tighter">03</div>
                
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Case File</p>
                  <p className="font-bold text-[#06141B] text-xl font-mono uppercase tracking-tight">Airwallex</p>
                </div>
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Target Belief</p>
                  <p className="text-sm font-medium text-[#06141B]">The company has come a long way</p>
                </div>
                <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Strategic Cut</p>
                  <p className="text-sm font-medium text-[#06141B] opacity-60 line-through decoration-1 decoration-red-500/50">Product interface</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Undeniable Proof</p>
                  <p className="text-sm font-bold text-[#06141B]">Founder history + archival story</p>
                </div>
              </div>
            </div>

          {/* Desktop View: Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#EAF2F8] border-b border-[#CCD0CF]">
                  <th className="p-5 text-[10px] font-mono font-bold tracking-[0.2em] text-[#253745] uppercase">Case</th>
                  <th className="p-5 text-[10px] font-mono font-bold tracking-[0.2em] text-[#253745] uppercase">What needs to land</th>
                  <th className="p-5 text-[10px] font-mono font-bold tracking-[0.2em] text-[#253745] uppercase">What gets removed</th>
                  <th className="p-5 text-[10px] font-mono font-bold tracking-[0.2em] text-[#253745] uppercase">What remains</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E3EAEF] hover:bg-[#F5F8FA] transition-colors cursor-default">
                  <td className="p-5 font-bold text-[#06141B] whitespace-nowrap">Wispr Flow</td>
                  <td className="p-5 text-sm font-medium text-[#4A5C6A]">The product is fast</td>
                  <td className="p-5 text-sm font-medium text-[#4A5C6A]">Human presenter</td>
                  <td className="p-5 text-sm font-bold text-[#06141B]">Product working in real time</td>
                </tr>
                <tr className="border-b border-[#E3EAEF] hover:bg-[#F5F8FA] transition-colors cursor-default">
                  <td className="p-5 font-bold text-[#06141B] whitespace-nowrap">Cartesia</td>
                  <td className="p-5 text-sm font-medium text-[#4A5C6A]">The interaction is genuinely responsive</td>
                  <td className="p-5 text-sm font-medium text-[#4A5C6A]">Conventional UI / human presence</td>
                  <td className="p-5 text-sm font-bold text-[#06141B]">Audio interaction itself</td>
                </tr>
                <tr className="hover:bg-[#F5F8FA] transition-colors cursor-default">
                  <td className="p-5 font-bold text-[#06141B] whitespace-nowrap">Airwallex</td>
                  <td className="p-5 text-sm font-medium text-[#4A5C6A]">The company has come a long way</td>
                  <td className="p-5 text-sm font-medium text-[#4A5C6A]">Product interface</td>
                  <td className="p-5 text-sm font-bold text-[#06141B]">Founder history + archival story</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* THE WORKING FINDING */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-20 w-full"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest mb-6 text-[#4A5C6A] text-left">
          The Working Finding
        </p>
        <div className="bg-[#11212D] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#253745] rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
           <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-8 relative z-10">
              The creative choice appears to follow the communication problem.
           </h2>
           <p className="text-lg md:text-xl text-[#CCD0CF] mb-4 font-medium relative z-10">
              When the proof is technical, the product gets the stage.
           </p>
           <p className="text-lg md:text-xl text-[#CCD0CF] mb-12 font-medium relative z-10">
              When the proof is human, the story gets the stage.
           </p>
           <div className="border-t border-[#253745] pt-6 relative z-10">
              <p className="text-[10px] md:text-xs text-[#9BA8AB] leading-relaxed uppercase tracking-widest max-w-2xl font-mono">
                 Based on three independently verified public cases. This is an observed pattern, not a claim about Social Capital's internal process.
              </p>
           </div>
        </div>
      </motion.div>

      {/* WHY I THINK THIS (Receipts) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-32 w-full"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest mb-6 text-[#4A5C6A] text-left">
          Why I Think This
        </p>
        <div className="grid gap-4">
          <a href="https://x.com/tankots/status/2025981424470479008" target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center p-6 bg-white border border-[#CCD0CF] rounded-xl hover:bg-[#EAF2F8] transition-colors shadow-sm">
             <span className="font-bold text-[#06141B] tracking-wide">WISPR FLOW</span>
             <span className="text-xs font-mono font-bold tracking-widest text-[#4A5C6A] group-hover:text-[#06141B] flex items-center gap-2">View evidence <span className="text-lg leading-none">â†—</span></span>
          </a>
          <a href="https://x.com/krandiash/status/1983202316397453676" target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center p-6 bg-white border border-[#CCD0CF] rounded-xl hover:bg-[#EAF2F8] transition-colors shadow-sm">
             <span className="font-bold text-[#06141B] tracking-wide">CARTESIA</span>
             <span className="text-xs font-mono font-bold tracking-widest text-[#4A5C6A] group-hover:text-[#06141B] flex items-center gap-2">View evidence <span className="text-lg leading-none">â†—</span></span>
          </a>
          <a href="https://www.youtube.com/results?search_query=Airwallex+From+Coffee+Shop+to+%248+Billion+CNBC+Make+It" target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center p-6 bg-white border border-[#CCD0CF] rounded-xl hover:bg-[#EAF2F8] transition-colors shadow-sm">
             <span className="font-bold text-[#06141B] tracking-wide">AIRWALLEX</span>
             <span className="text-xs font-mono font-bold tracking-widest text-[#4A5C6A] group-hover:text-[#06141B] flex items-center gap-2">View evidence <span className="text-lg leading-none">â†—</span></span>
          </a>
        </div>
      </motion.div>

      <div className="mt-32 pt-12 w-full flex justify-between items-center max-w-5xl mx-auto relative z-10 border-t border-[#CCD0CF]">
        <Link
          href="/cases"
          className="group text-xs font-mono font-bold uppercase tracking-widest text-[#4A5C6A] hover:text-[#06141B] transition-colors flex items-center gap-2"
        >
          <span className="transition-transform group-hover:-translate-x-1">â†</span> Back to Case Library
        </Link>
        <Link
          href="/sources"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#06141B] text-white rounded-xl text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all premium-shadow group"
        >
          View Source Data <span className="transition-transform group-hover:translate-x-1">â†’</span>
        </Link>
      </div>
    </div>
  );
}
