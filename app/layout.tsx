import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Social Capital | Launch Analysis",
  description:
    "An interactive analysis tool decoding the omission algorithm behind Social Capital's distribution strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="grain-overlay" />
        <Nav />
        <main className="flex-grow">{children}</main>
        <footer className="py-8 text-center text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: "var(--text-dim)", borderTop: "1px solid var(--border)" }}>
          Investigation conducted by Devi Padmavathi • Potential Fit for Technical Generalist
        </footer>
      </body>
    </html>
  );
}
