"use client";

import { useState } from "react";
import { Lightbulb, MessageSquare, Cpu, Paintbrush, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const stages = [
  { n: "01", title: "IDEA", sub: "Define what you want to create", icon: Lightbulb, color: "#8B5CF6", desc: "Every digital product starts with a clear vision. Define your audience, goals and the core value of what you're building." },
  { n: "02", title: "PROMPT", sub: "Communicate your idea to AI", icon: MessageSquare, color: "#6366F1", desc: "Write effective prompts that translate your vision into actionable instructions. Good prompting is a creative skill." },
  { n: "03", title: "GENERATION", sub: "Use AI to generate a starting point", icon: Cpu, color: "#22D3EE", desc: "AI tools produce a working foundation — code, layouts, components. Your role is to direct, review and understand." },
  { n: "04", title: "DESIGN", sub: "Improve the interface and experience", icon: Paintbrush, color: "#8B5CF6", desc: "Refine visual design, UX and content. Apply design thinking to make the product genuinely useful and beautiful." },
  { n: "05", title: "LAUNCH", sub: "Test and publish your creation", icon: Globe, color: "#22D3EE", desc: "Test across devices, optimise performance, and publish your project live using modern hosting platforms." },
];

export default function TransformationSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="transformation" style={{
      position: "relative",
      padding: "120px 24px",
      background: "#0B0B16",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 400,
        height: 400,
        background: "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 64,
        alignItems: "start",
      }}>
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
            background: "rgba(34,211,238,0.08)",
            border: "1px solid rgba(34,211,238,0.22)",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 600,
            color: "#22D3EE",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 24,
          }}>
            Chapter 03 — The Transformation
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
            marginBottom: 16,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            From a simple idea to
            <br />
            <span style={{ color: "#22D3EE" }}>a digital reality.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "#A1A1AA",
            marginBottom: 40,
          }}>
            Five interconnected stages. Click each to explore.
          </motion.p>

          {/* Stages */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {stages.map((st, i) => {
              const Icon = st.icon;
              const isActive = active === i;
              return (
                <div key={st.n}>
                  <button
                    onClick={() => setActive(i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: 16,
                      background: isActive ? `${st.color}0d` : "transparent",
                      border: `1px solid ${isActive ? st.color + "45" : "rgba(255,255,255,0.06)"}`,
                      borderRadius: 12,
                      transition: "all 0.25s",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        fontSize: 12,
                        fontWeight: 700,
                        width: 24,
                        color: isActive ? st.color : "#71717A",
                      }}>{st.n}</span>

                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isActive ? `${st.color}18` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${isActive ? st.color + "40" : "rgba(255,255,255,0.08)"}`,
                      }}>
                        <Icon size={15} color={isActive ? st.color : "#71717A"} />
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          color: isActive ? "#fff" : "#A1A1AA",
                          marginBottom: 2,
                        }}>
                          {st.title}
                        </p>
                        <p style={{ fontSize: 12, color: "#71717A" }}>{st.sub}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            fontSize: 14,
                            lineHeight: 1.6,
                            color: "#A1A1AA",
                            marginTop: 12,
                            paddingLeft: 40,
                            overflow: "hidden",
                          }}
                        >
                          {st.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — display card (desktop only) */}
        <div className="desktop-only" style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          paddingTop: 160,
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              style={{
                width: "100%",
                maxWidth: 340,
                padding: 40,
                background: "#10101A",
                border: `1px solid ${stages[active].color}30`,
                borderRadius: 24,
                textAlign: "center",
                boxShadow: `0 0 80px ${stages[active].color}0d`,
              }}
            >
              <div style={{
                fontSize: 80,
                fontWeight: 900,
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                color: stages[active].color,
                opacity: 0.12,
                marginBottom: 24,
              }}>
                {stages[active].n}
              </div>

              {(() => {
                const Icon = stages[active].icon;
                return (
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    background: `${stages[active].color}18`,
                    border: `1px solid ${stages[active].color}38`,
                  }}>
                    <Icon size={28} color={stages[active].color} />
                  </div>
                );
              })()}

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 24,
                fontWeight: 900,
                letterSpacing: "0.02em",
                color: "#fff",
                marginBottom: 8,
              }}>
                {stages[active].title}
              </h3>

              <p style={{
                fontSize: 14,
                color: "#71717A",
                marginBottom: 32,
              }}>
                {stages[active].sub}
              </p>

              {/* Progress dots */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
              }}>
                {stages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? 22 : 6,
                      height: 6,
                      borderRadius: 999,
                      background: i === active ? stages[active].color : "rgba(255,255,255,0.12)",
                      border: "none",
                      transition: "all 0.3s",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </section>
  );
}
