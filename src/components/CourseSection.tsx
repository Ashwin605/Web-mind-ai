"use client";

import CourseCard from "./CourseCard";
import { websiteCourse, appCourse } from "@/config/courses";
import { motion } from "framer-motion";

export default function CourseSection() {
  return (
    <section id="courses" style={{
      position: "relative",
      padding: "80px 20px",
      background: "#050509",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(700px, 90vw)",
        height: "min(350px, 45vw)",
        background: "radial-gradient(ellipse at center, rgba(139,92,246,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            marginBottom: 20,
          }}>
            Chapter 04 — Explore Your Path
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
            marginBottom: 16,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Choose what you want to build.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
            fontSize: "clamp(16px, 3vw, 18px)",
            lineHeight: 1.6,
            color: "#A1A1AA",
            maxWidth: 600,
            margin: "0 auto",
            padding: "0 10px",
          }}>
            Two focused courses, each designed to take you from beginner to digital creator.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 20,
          marginBottom: 40,
        }}
        className="course-grid"
        >
          <CourseCard course={websiteCourse} featured />
          <CourseCard course={appCourse} />
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .course-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
