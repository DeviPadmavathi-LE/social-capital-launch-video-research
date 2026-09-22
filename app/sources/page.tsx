import { getSources } from "@/lib/data";
import Link from "next/link";

export default function SourcesPage() {
  const sources = getSources();

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 max-w-5xl mx-auto relative">
      
      <div className="mb-16 relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-6 bg-white premium-shadow" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <span className="w-2 h-2 rounded-full bg-[#11212D]"></span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#4A5C6A]">
            Phase 04 // Source Data
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#06141B]">
          Raw Intelligence
        </h1>
        <p className="text-base leading-relaxed max-w-xl text-[#4A5C6A]">
          Every claim in this investigation traces back to a verified public artifact. 
        </p>
      </div>

      <div className="relative z-10">
        {/* Mobile View: Stacked Archival Tickets */}
        <div className="md:hidden space-y-6">
          {sources.map((src) => (
            <div key={src.id} className="bg-[#F8FAFC] border border-[#CCD0CF] rounded-sm p-6 shadow-sm relative overflow-hidden flex flex-col gap-4 group">
              {/* Ultra-faint large number watermark */}
              <div className="absolute -bottom-6 -right-4 text-[120px] font-mono font-black text-[#06141B]/[0.03] leading-none pointer-events-none select-none tracking-tighter">
                {src.id.replace('S', '')}
              </div>
              
              <div className="flex justify-between items-start border-b border-dashed border-[#CCD0CF] pb-4">
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">ID</p>
                  <p className="font-mono font-bold text-[#06141B] text-xl tracking-tight">{src.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Asset Type</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#06141B]">{src.type}</p>
                </div>
              </div>
              
              <div className="border-b border-dashed border-[#CCD0CF] pb-4">
                <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4A5C6A] uppercase mb-1">Verifies</p>
                <p className="text-sm font-medium text-[#06141B]">{src.verifies}</p>
              </div>
              
              <div className="pt-2">
                <a 
                  href={src.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 bg-[#06141B] text-white rounded-sm text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all shadow-md active:scale-[0.98]"
                >
                  OPEN ARTIFACT <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block bg-white rounded-[2rem] overflow-hidden border border-[#CCD0CF] premium-shadow">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#E3EAEF]/50 border-b border-[#CCD0CF]">
                <th className="py-6 pl-10 pr-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#4A5C6A]">ID</th>
                <th className="py-6 pr-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#4A5C6A]">Asset Type</th>
                <th className="py-6 pr-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#4A5C6A]">Verifies</th>
                <th className="py-6 pr-10 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-right text-[#4A5C6A]">Access</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((src) => (
                <tr 
                  key={src.id} 
                  className="hover:bg-[#11212D] transition-colors duration-500 group border-b border-[#E3EAEF] last:border-0"
                >
                  <td className="py-8 pl-10 pr-4 text-xs font-mono font-bold text-[#06141B] group-hover:text-white transition-colors duration-300">
                    {src.id}
                  </td>
                  <td className="py-8 pr-4 text-xs font-mono uppercase tracking-widest text-[#4A5C6A] group-hover:text-[#9BA8AB] transition-colors duration-300">
                    {src.type}
                  </td>
                  <td className="py-8 pr-4 text-sm leading-relaxed text-[#4A5C6A] group-hover:text-[#CCD0CF] transition-colors duration-300" style={{ maxWidth: "340px" }}>
                    {src.verifies}
                  </td>
                  <td className="py-8 pr-10 text-right">
                    <a 
                      href={src.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#CCD0CF] text-[#06141B] rounded-xl text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all shadow-sm group-hover:bg-[#253745] group-hover:border-[#253745] group-hover:text-white group-hover:shadow-lg"
                    >
                      Open <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-24 pt-12 flex justify-between items-center relative z-10 border-t border-[#CCD0CF]">
        <Link
          href="/insight"
          className="group text-xs font-mono font-bold uppercase tracking-widest text-[#4A5C6A] hover:text-[#06141B] transition-colors flex items-center gap-2"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to The Pattern
        </Link>
        <Link
          href="/"
          className="group text-xs font-mono font-bold uppercase tracking-widest text-[#06141B] hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          Return to Brief <span className="transition-transform group-hover:-rotate-90">↑</span>
        </Link>
      </div>

    </div>
  );
}
