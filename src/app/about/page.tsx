import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About WEBMIND AI — AI-powered digital skills academy",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#050509", minHeight: "100vh" }}>
      <header className="sticky top-0 z-50 px-6 py-4" style={{ background: "rgba(5,5,9,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center">
              <Zap size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-base tracking-widest">WEBMIND AI</span>
          </Link>
          <Link href="/" className="text-[#A1A1AA] hover:text-white text-sm transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-8">
          <h1 className="text-white font-bold text-4xl mb-4" style={{ fontFamily: "var(--font-space)" }}>About WEBMIND AI</h1>
          <p className="text-[#A1A1AA] text-lg leading-relaxed">
            WEBMIND AI is an AI-powered digital skills academy helping beginners transform their ideas into real websites and applications using the power of artificial intelligence.
          </p>
        </div>
        <div className="p-8 rounded-2xl mb-6" style={{ background: "#10101A", border: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-[#A1A1AA] leading-relaxed">
            Our mission is to make digital creation accessible to everyone — regardless of technical background. We believe AI is the bridge between a great idea and a real digital product.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-[#8B5CF6] text-sm hover:text-[#A78BFA] transition-colors">← Back to home</Link>
        </div>
      </main>
    </div>
  );
}
