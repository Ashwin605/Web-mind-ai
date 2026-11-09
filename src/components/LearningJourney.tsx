"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { websiteCourse, appCourse } from "@/config/courses";

type Tab = "website" | "app";

function DayRow({ day, isOpen, onToggle }: {
  day: { day: number; title: string; description?: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "16px 0",
          display: "flex",
          alignItems: "start",
          gap: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {/* Day number */}
        <div style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 700,
          flexShrink: 0,
          background: isOpen ? "rgba(139,92,246,0.18)" : "#151521",
          border: `1px solid ${isOpen ? "rgba(139,92,246,0.45)" : "rgba(255,255,255,0.1)"}`,
          color: isOpen ? "#A78BFA" : "#71717A",
          transition: "all 0.2s",
        }}>
          {day.day}
        </div>

        <div style={{ flex: 1, paddingTop: 6 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <span style={{
              fontSize: 14,
              fontWeight: 600,
              color: isOpen ? "#fff" : "#A1A1AA",
              transition: "color 0.2s",
            }}>
              {day.title}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.22 }}
            >
              <ChevronDown size={14} color="#71717A" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isOpen && day.description && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#71717A",
                  paddingTop: 8,
                  paddingRight: 24,
                  overflow: "hidden",
                }}
              >
                {day.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}

export default function LearningJourney() {
  const [tab, setTab] = useState<Tab>("website");
  const [openDay, setOpenDay] = useState<number | null>(null);

  return (
    <section id="learning-journey" style={{
      position: "relative",
      padding: "120px 24px",
      background: "#0B0B16",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 400,
        height: 400,
        background: "radial-gradient(ellipse at top right, rgba(34,211,238,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
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
            Chapter 05 — The Learning Journey
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
            Learn by creating.
            <br />
            <span style={{ color: "#22D3EE" }}>Not just watching.</span>
          </h2>

          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#A1A1AA",
            maxWidth: 600,
            margin: "0 auto 40px",
          }}>
            Every day builds on the last. By day 15, you've shipped something real.
          </p>

          {/* Tabs */}
          <div style={{
            display: "inline-flex",
            gap: 8,
            padding: 4,
            background: "#10101A",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 999,
          }}>
            {(["website", "app"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setOpenDay(null); }}
                style={{
                  padding: "10px 20px",
                  background: tab === t ? "#8B5CF6" : "transparent",
                  border: "none",
                  borderRadius: 999,
                  color: tab === t ? "#fff" : "#A1A1AA",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {t === "website" ? "Website Course" : "App Course"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {tab === "website" ? (
            <motion.div
              key="website"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {/* Meta row */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                padding: 20,
                background: "rgba(139,92,246,0.07)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 12,
                marginBottom: 24,
              }}>
                {[
                  { label: websiteCourse.durationLabel, color: "#8B5CF6" },
                  { label: websiteCourse.format, color: "#22D3EE" },
                  { label: websiteCourse.dailyTime!, color: "#6366F1" },
                ].map((m) => (
                  <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: m.color }} />
                    <span style={{ fontSize: 14, color: "#A1A1AA" }}>{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div style={{
                background: "#10101A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "0 24px",
              }}>
                {websiteCourse.syllabus.map((d) => (
                  <DayRow
                    key={d.day}
                    day={d}
                    isOpen={openDay === d.day}
                    onToggle={() => setOpenDay(openDay === d.day ? null : d.day)}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {/* Meta row */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                padding: 20,
                background: "rgba(99,102,241,0.07)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: 12,
                marginBottom: 24,
              }}>
                {[
                  { label: appCourse.durationLabel, color: "#6366F1" },
                  { label: appCourse.format, color: "#22D3EE" },
                  { label: appCourse.dailyTime!, color: "#8B5CF6" },
                ].map((m) => (
                  <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: m.color }} />
                    <span style={{ fontSize: 14, color: "#A1A1AA" }}>{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div style={{
                background: "#10101A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "0 24px",
              }}>
                {appCourse.syllabus.map((d) => (
                  <DayRow
                    key={d.day}
                    day={d}
                    isOpen={openDay === d.day}
                    onToggle={() => setOpenDay(openDay === d.day ? null : d.day)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
