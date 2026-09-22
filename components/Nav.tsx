"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "01 The Brief" },
  { href: "/cases", label: "02 Case Studies" },
  { href: "/insight", label: "03 The Pattern" },
  { href: "/sources", label: "04 Source Data" },
];

export function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 glass-panel">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="#1DA1F2" d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.792-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.827 2.766 2.044 3.462-.046.265-.07.536-.07.81 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25.52 1.333 1.828 2.25 3.337 2.25s2.816-.917 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.792 3.918-4 0-.274-.024-.545-.07-.81 1.217-.696 2.044-2.002 2.044-3.462z" />
              <path fill="#FFFFFF" d="M10.94 15.68l-3.37-3.37 1.41-1.41 1.96 1.96 4.96-4.96 1.41 1.41z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] tracking-widest uppercase font-mono mb-1 font-semibold" style={{ color: "var(--text-muted)" }}>
              Social Capital
            </span>
            <span className="text-sm font-bold tracking-wide text-[#06141B]">
              Distribution Lab
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 bg-white px-6 py-2 rounded-full border shadow-sm" style={{ borderColor: "var(--border)" }}>
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs uppercase tracking-widest font-bold transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: active ? "var(--text-main)" : "var(--text-dim)",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a 
            href="mailto:Devi%20Padmavathi%20%3Cdevipadmavathile@gmail.com%3E" 
            className="hidden md:block text-xs font-bold px-5 py-2.5 bg-[#06141B] text-white rounded-xl hover:bg-neutral-800 transition-colors shadow-md"
          >
            CONNECT
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 z-[70]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block h-0.5 bg-[#06141B] transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-[#06141B] transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'}`}></span>
            <span className={`block h-0.5 bg-[#06141B] transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#EAF2F8] pt-28 px-6 flex flex-col items-start md:hidden"
          >
            <ul className="flex flex-col gap-6 w-full mb-8 mt-4">
              {links.map(({ href, label }) => {
                const active = pathname === href || (href !== "/" && pathname.startsWith(href));
                return (
                  <li key={href} className="w-full border-b border-[#06141B]/10 pb-4">
                    <Link
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg uppercase tracking-widest font-bold block transition-colors"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: active ? "var(--text-main)" : "var(--text-dim)",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a 
              href="mailto:Devi%20Padmavathi%20%3Cdevipadmavathile@gmail.com%3E" 
              className="w-full text-center text-sm font-bold px-5 py-4 bg-[#06141B] text-white rounded-xl shadow-md"
            >
              CONNECT WITH DEVI
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
