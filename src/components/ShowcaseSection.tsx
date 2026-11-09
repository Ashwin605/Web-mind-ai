"use client";

import { Globe, User, Megaphone, Package, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { type: "Business Website", icon: Globe, color: "#8B5CF6", tags: ["Responsive", "SEO-ready", "Contact form"] },
  { type: "Personal Portfolio", icon: User, color: "#6366F1", tags: ["Animated", "Minimal", "Project gallery"] },
  { type: "Landing Page", icon: Megaphone, color: "#22D3EE", tags: ["CTA-focused", "Fast", "Mobile-first"] },
  { type: "Product Website", icon: Package, color: "#8B5CF6", tags: ["E-commerce ready", "Visual"] },
  { type: "App Prototype", icon: Smartphone, color: "#6366F1", tags: ["Multi-screen", "Interactive"] },
];

const outcomes = [
  "Understand AI-assisted development workflows",
  "Write more effective and precise prompts",
  "Design practical digital interfaces",
  "Build real projects from scratch",
  "Test and improve AI-generated output",
  "Understand the basics of publishing a project",
];

export default function ShowcaseSection() {
  return (
    <section id="showcase" style={{
      position: "relative",
      padding: "120px 24px",
      background: "#050509",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 500,
        height: 350,
        background: "radial-gradient(ellipse at bottom left, rgba(34,211,238,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.22)",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 600,
            color: "#6366F1",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 24,
          }}>
            Chapter 06 — The Outcome
          </div>

          <h2 style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 20,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Don't just learn about digital products.
            <br />
            <span style={{ color: "#6366F1" }}>Create one.</span>
          </h2>

          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#A1A1AA", maxWidth: 700, margin: "0 auto 8px" }}>
            These are the types of projects you'll work towards building.
          </p>
          <p style={{ fontSize: 14, color: "#71717A" }}>
            * Shown as example project types. Actual student output varies.
          </p>
        </div>

        {/* Projects grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 64,
        }}>
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: "#10101A",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${p.color}30`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Browser bar */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 16px",
                  background: "#151521",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                      }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1,
                    height: 20,
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <span style={{ fontSize: 10, color: "#71717A" }}>example.com</span>
                  </div>
                </div>

                {/* Preview area */}
                <div style={{
                  height: 128,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  background: "#0B0B16",
                }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.2 }} className="dot-grid" />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}30`,
                    }}>
                      <Icon size={18} color={p.color} />
                    </div>
                    <span style={{ fontSize: 10, color: "#71717A" }}>Example preview</span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: 16 }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{p.type}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 10,
                        padding: "2px 8px",
                        borderRadius: 999,
                        color: p.color,
                        background: `${p.color}12`,
                        border: `1px solid ${p.color}22`,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Outcomes */}
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 8,
            }}>
              Learning outcomes
            </h3>
            <p style={{ fontSize: 14, color: "#71717A" }}>Skills you'll develop through the course</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
          }}>
            {outcomes.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "start",
                  gap: 12,
                  padding: 16,
                  background: "#10101A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                }}
              >
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                  background: "rgba(139,92,246,0.15)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8B5CF6" }} />
                </div>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: "#A1A1AA" }}>{o}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
}
