"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScratchCard({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchCount, setScratchCount] = useState(0);
  const isDrawing = useRef(false);

  // Auto-reveal after a very light scratch/hover (hyper-effortless)
  useEffect(() => {
    if (scratchCount >= 3 && !isRevealed) {
      setIsRevealed(true);
    }
  }, [scratchCount, isRevealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const initCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      // Match the physical pixels of the container
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      
      // Foil background (Dark premium color as requested)
      ctx.fillStyle = "#11212D";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Subtle noise texture on the dark foil
      for (let i = 0; i < 4000; i++) {
         ctx.fillStyle = Math.random() > 0.5 ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.2)";
         ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1.5, 1.5);
      }

      // Add a subtle border inside
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      // Draw instruction text (Light text to contrast dark background)
      ctx.fillStyle = "#4A5C6A";
      ctx.font = "bold 13px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.letterSpacing = "2px";
      ctx.fillText("SCRATCH TO REVEAL", canvas.width / 2, canvas.height / 2);
    };

    initCanvas();
    
    const handleResize = () => {
      if (!isRevealed) initCanvas();
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isRevealed]);

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // If not pressing down but moving, we can still count it if we want 'hover to reveal'.
    if (isRevealed) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    // Massive brush so a single swipe covers a huge area
    ctx.arc(x, y, 100, 0, Math.PI * 2);
    ctx.fill();

    setScratchCount((prev) => prev + 1);
  };

  return (
    <div className="relative w-full h-full" style={{ touchAction: "none" }}>
      {/* Content Layer (Blurred until revealed) */}
      <div 
        className={`relative z-0 transition-all duration-1000 ${
          isRevealed ? "opacity-100 filter-none" : "opacity-20 blur-md select-none pointer-events-none"
        }`}
      >
        {children}
      </div>
      
      {/* Scratch Canvas Overlay */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.canvas
            ref={canvasRef}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onPointerDown={(e) => {
              isDrawing.current = true;
              scratch(e);
            }}
            onPointerMove={(e) => {
              // Trigger scratch on hover OR drag based on user feedback
              scratch(e);
            }}
            onPointerUp={() => (isDrawing.current = false)}
            onPointerLeave={() => (isDrawing.current = false)}
            className="absolute top-0 left-0 z-20 cursor-crosshair rounded-[2rem] w-full h-full shadow-inner"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
