import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact WEBMIND AI",
};

export default function ContactPage() {
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
          <h1 className="text-white font-bold text-4xl mb-4" style={{ fontFamily: "var(--font-space)" }}>Contact Us</h1>
          <p className="text-[#A1A1AA] text-lg leading-relaxed">
            Have a question about our courses? Reach out to us.
          </p>
        </div>

        <div className="p-8 rounded-2xl" style={{ background: "#10101A", border: "1px solid rgba(255,255,255,0.07)" }}>
          {siteConfig.contact.email || siteConfig.contact.whatsapp || siteConfig.contact.instagram ? (
            <div className="space-y-4">
              {siteConfig.contact.email && (
                <div>
                  <p className="text-[#71717A] text-xs tracking-widest uppercase mb-1">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#8B5CF6] hover:text-[#A78BFA]">{siteConfig.contact.email}</a>
                </div>
              )}
              {siteConfig.contact.whatsapp && (
                <div>
                  <p className="text-[#71717A] text-xs tracking-widest uppercase mb-1">WhatsApp</p>
                  <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:text-[#A78BFA]">Message us on WhatsApp</a>
                </div>
              )}
              {siteConfig.contact.instagram && (
                <div>
                  <p className="text-[#71717A] text-xs tracking-widest uppercase mb-1">Instagram</p>
                  <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:text-[#A78BFA]">Follow us on Instagram</a>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-xl" style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}>
              <p className="text-[#6366F1] text-sm font-medium mb-1">⚠ Contact details coming soon</p>
              <p className="text-[#A1A1AA] text-sm">Our contact details will be added shortly. Please check back soon.</p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-[#8B5CF6] text-sm hover:text-[#A78BFA] transition-colors">← Back to home</Link>
        </div>
      </main>
    </div>
  );
}
