"use client";

import { Code2, Layers, Palette, Puzzle, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const barriers = [
  { icon: Code2, label: "Complex coding concepts", desc: "Years of syntax and paradigms to master before building anything meaningful." },
  { icon: Layers, label: "Overwhelming dev toolchains", desc: "Vast ecosystems of frameworks, bundlers and build systems to understand." },
  { icon: Palette, label: "Professional interface design", desc: "Design principles that take years of practice to apply consistently." },
  { icon: Puzzle, label: "Connecting technologies", desc: "Making frontend, backend, APIs and databases all work seamlessly together." },
  { icon: Rocket, label: "Bridging idea to product", desc: "The massive gap between having a vision and actually shipping something." },
];

export default function ProblemSection() {
  return (
    <section id="problem" style={{
      position: "relative",
      padding: "80px 20px",
      background: "#050509",
      overflow: "hidden",
    }}>
      {/* BG glow */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "min(500px, 80vw)",
        height: "min(500px, 80vw)",
        background: "radial-gradient(ellipse at top right, rgba(99,102,241,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 48,
        alignItems: "start",
      }}
      className="problem-grid"
      >
        {/* Left */}
        <div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 600,
            color: "#6366F1",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 20,
          }}>
            Chapter 02 — The Problem
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
            fontSize: "clamp(28px, 6vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 20,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Great ideas shouldn't stop
            <br />
            at <span style={{ color: "#8B5CF6" }}>technical barriers.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
            fontSize: "clamp(16px, 3vw, 18px)",
            lineHeight: 1.6,
            color: "#A1A1AA",
            marginBottom: 16,
          }}>
            The traditional path to building digital products is long and steep. Most people never ship anything.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
            fontSize: "clamp(15px, 2.5vw, 16px)",
            lineHeight: 1.6,
            color: "#71717A",
            marginBottom: 28,
          }}>
            AI is changing that. It accelerates creation — but knowing how to direct, review and iterate on its output is a skill in itself. That's what we teach.
          </motion.p>

          {/* AI callout */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            style={{
            padding: "clamp(16px, 4vw, 24px)",
            background: "rgba(139,92,246,0.07)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: 16,
            marginBottom: 40,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 12,
            }}>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles size={18} color="#8B5CF6" />
              </motion.div>
              <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>The AI Shift</span>
            </div>
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#A1A1AA",
            }}>
              WEBMIND AI teaches you to use AI as a creative partner — not a magic shortcut — while developing the critical thinking to evaluate what it produces.
            </p>
          </motion.div>
        </div>

        {/* Right — barriers */}
        <div>
          <p style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#71717A",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 16,
          }}>
            Traditional barriers beginners face
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {barriers.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "clamp(16px, 3vw, 20px)",
                    background: "#10101A",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color="#8B5CF6" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 4, wordWrap: "break-word" }}>{b.label}</p>
                    <p style={{ color: "#71717A", fontSize: 14, lineHeight: 1.5, wordWrap: "break-word" }}>{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .problem-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 64px !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
