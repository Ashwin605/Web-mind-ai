"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scroll = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#050509",
      overflow: "hidden",
      padding: "100px 20px 60px",
    }}>
      {/* BG */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(139,92,246,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: 900,
        textAlign: "center",
        width: "100%",
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: 999,
            fontSize: "clamp(10px, 2.5vw, 12px)",
            fontWeight: 600,
            color: "#8B5CF6",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "clamp(20px, 4vw, 32px)",
          }}
        >
          <span style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#8B5CF6",
            animation: "pulse 2s infinite",
          }} />
          AI-Powered Digital Academy
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: "clamp(32px, 8vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "clamp(16px, 3vw, 24px)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          The future isn't<br />
          <span style={{ color: "#8B5CF6" }}>something you wait for.</span><br />
          It's something you build.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: 1.6,
            color: "#A1A1AA",
            maxWidth: 600,
            margin: "0 auto",
            marginBottom: "clamp(20px, 4vw, 32px)",
            padding: "0 10px",
          }}
        >
          Turn your ideas into websites and applications using the power of artificial intelligence.
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(8px, 2vw, 16px)",
            marginBottom: "clamp(32px, 6vw, 48px)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "clamp(20px, 4vw, 32px)", height: 1, background: "rgba(255,255,255,0.2)" }} />
          <span style={{
            fontSize: "clamp(10px, 2vw, 12px)",
            fontWeight: 600,
            color: "#71717A",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}>
            Learn · Build · Launch
          </span>
          <div style={{ width: "clamp(20px, 4vw, 32px)", height: 1, background: "rgba(255,255,255,0.2)" }} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: 500,
            margin: "0 auto",
            marginBottom: 80,
          }}
          className="hero-cta-container"
        >
          <button
            onClick={() => scroll("#courses")}
            style={{
              width: "100%",
              padding: "16px 32px",
              background: "#8B5CF6",
              border: "none",
              borderRadius: 999,
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7C3AED";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#8B5CF6";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Explore Courses →
          </button>
          <button
            onClick={() => scroll("#about")}
            style={{
              width: "100%",
              padding: "16px 32px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 999,
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Discover Our Approach
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scroll("#problem")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          background: "none",
          border: "none",
          color: "#71717A",
          cursor: "pointer",
          zIndex: 20,
        }}
        className="scroll-indicator"
      >
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (min-width: 640px) {
          .hero-cta-container {
            flex-direction: row !important;
            margin-bottom: 0 !important;
          }
        }
        
        @media (max-width: 639px) {
          .scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
