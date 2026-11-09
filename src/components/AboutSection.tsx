"use client";

import { BookOpen, Hammer, Cpu, FolderKanban, Wifi, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const principles = [
  { icon: BookOpen, title: "Beginner-friendly", desc: "Every concept explained from first principles. No assumed prior knowledge.", color: "#8B5CF6" },
  { icon: Hammer, title: "Practical learning", desc: "Every session involves building something. Theory without practice doesn't stick.", color: "#6366F1" },
  { icon: Cpu, title: "AI-assisted workflows", desc: "Learn to use AI as a creative partner — not a magic shortcut.", color: "#22D3EE" },
  { icon: FolderKanban, title: "Project-oriented", desc: "The course is structured around building real projects from day one.", color: "#8B5CF6" },
  { icon: Wifi, title: "Live online classes", desc: "The website course is taught live, so you can ask questions in real time.", color: "#6366F1" },
  { icon: Sparkles, title: "Focus on creation", desc: "The goal isn't to recite theory — it's to build real digital experiences.", color: "#22D3EE" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{
      position: "relative",
      padding: "120px 24px",
      background: "#0B0B16",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        width: 480,
        height: 580,
        background: "radial-gradient(ellipse at right, rgba(139,92,246,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: 900, marginBottom: 64 }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "rgba(139,92,246,0.08)",
            border: "1px solid rgba(139,92,246,0.22)",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 600,
            color: "#8B5CF6",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 24,
          }}>
            Chapter 07 — Why WEBMIND AI?
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 20,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Technology is changing.
            <br />
            <span style={{ color: "#8B5CF6" }}>The way we learn should too.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#A1A1AA",
            marginBottom: 20,
          }}>
            WEBMIND AI is built on a simple belief: the most effective way to learn digital
            creation is by actually creating things — using the best available tools,
            guided by a clear process.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "#71717A",
          }}>
            AI has lowered the technical barrier to building digital products. But knowing
            how to prompt, review, iterate and refine that output is a skill in itself.
            That's what we teach.
          </motion.p>
        </div>

        {/* Principles grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  padding: 24,
                  background: "#10101A",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${p.color}28`;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${p.color}12`,
                  border: `1px solid ${p.color}25`,
                  marginBottom: 16,
                }}>
                  <Icon size={16} color={p.color} />
                </div>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                  {p.title}
                </p>
                <p style={{ color: "#71717A", fontSize: 14, lineHeight: 1.5 }}>
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
