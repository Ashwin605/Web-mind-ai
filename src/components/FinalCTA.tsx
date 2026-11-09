"use client";

import { ArrowRight } from "lucide-react";
import { getEnrollmentUrl } from "@/config/enrollment";
import { openEnrollmentForm } from "@/lib/utils";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" style={{
      position: "relative",
      padding: "160px 24px",
      background: "#0B0B16",
      overflow: "hidden",
      textAlign: "center",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(139,92,246,0.09) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto" }}>
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
          marginBottom: 28,
        }}>
          Chapter 09 — Final Invitation
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#fff",
          marginBottom: 20,
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          Your ideas deserve
          <br />
          <span style={{ color: "#8B5CF6" }}>to become reality.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 20, lineHeight: 1.6, color: "#A1A1AA", maxWidth: 600, margin: "0 auto 48px" }}
        >
          Start building your digital future with WEBMIND AI.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 80 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openEnrollmentForm(getEnrollmentUrl("website"))}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 32px",
              background: "#8B5CF6",
              border: "none",
              borderRadius: 999,
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              transition: "background 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#7C3AED")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#8B5CF6")}
          >
            Explore Website Course
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} strokeWidth={2.2} />
            </motion.span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openEnrollmentForm(getEnrollmentUrl("app"))}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 32px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 999,
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Explore App Course
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} strokeWidth={2.2} />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Brand reveal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ 
              width: 1, 
              height: 56, 
              background: "rgba(255,255,255,0.08)", 
              marginBottom: 28,
              transformOrigin: "top",
            }} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ marginBottom: 12 }}
          >
            <img
              src="/images/webmind-logo.svg"
              alt="WEBMIND AI"
              width="260"
              height="65"
              style={{ 
                objectFit: "contain",
                filter: "drop-shadow(0 0 28px rgba(139,92,246,0.35))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
