"use client";

import { Clock, Calendar, Wifi, CheckCircle2, ArrowRight } from "lucide-react";
import { Course } from "@/config/courses";
import { getEnrollmentUrl } from "@/config/enrollment";
import { openEnrollmentForm } from "@/lib/utils";
import { motion } from "framer-motion";

export default function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "#10101A",
      border: featured ? "1px solid rgba(139,92,246,0.38)" : "1px solid rgba(255,255,255,0.08)",
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: featured ? "0 0 60px rgba(139,92,246,0.1)" : "none",
      transition: "all 0.3s",
    }}>
      {/* Top accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ 
          height: 3, 
          background: featured ? "#8B5CF6" : "#151521",
          transformOrigin: "left",
        }} 
      />

      <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Badge row */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: 24 }}
        >
          <span style={{
            padding: "4px 12px",
            background: featured ? "rgba(139,92,246,0.12)" : "rgba(255,255,255,0.05)",
            border: featured ? "1px solid rgba(139,92,246,0.3)" : "1px solid rgba(255,255,255,0.07)",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            color: featured ? "#8B5CF6" : "#71717A",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}>
            {course.id === "website" ? "Course 01" : "Course 02"}
          </span>
          {featured && (
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.5, delay: 0.4 }}
              style={{
              padding: "4px 12px",
              background: "rgba(139,92,246,0.14)",
              border: "1px solid rgba(139,92,246,0.28)",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 700,
              color: "#A78BFA",
            }}>
              Popular
            </motion.span>
          )}
        </motion.div>

        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 24,
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.2,
          marginBottom: 6,
        }}>
          {course.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ fontSize: 14, color: "#71717A", marginBottom: 24 }}
        >
          {course.subtitle}
        </motion.p>

        {/* Price */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}
        >
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: featured ? "#8B5CF6" : "#fff",
          }}>
            {course.price}
          </span>
          <span style={{ fontSize: 14, color: "#71717A" }}>one-time</span>
        </motion.div>

        {/* Meta chips */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}
        >
          {course.duration ? (
            <Chip icon={<Clock size={12} />} label={course.duration} />
          ) : (
            <Chip icon={<Calendar size={12} />} label={course.durationLabel} accent />
          )}
          <Chip icon={<Wifi size={12} />} label={course.format} />
          {course.dailyTime && <Chip icon={<Clock size={12} />} label={course.dailyTime} />}
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ fontSize: 14, lineHeight: 1.6, color: "#A1A1AA", marginBottom: 28 }}
        >
          {course.description}
        </motion.p>

        {/* Topics */}
        <div style={{ flex: 1, marginBottom: 28 }}>
          <p style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#71717A",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 14,
          }}>
            What you'll learn
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {course.topics.slice(0, 8).map((t, i) => (
              <motion.li 
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.65 + (i * 0.05) }}
                style={{ display: "flex", alignItems: "start", gap: 10, fontSize: 14, color: "#A1A1AA" }}
              >
                <CheckCircle2 size={13} color="#8B5CF6" style={{ marginTop: 2, flexShrink: 0 }} />
                {t}
              </motion.li>
            ))}
            {course.topics.length > 8 && (
              <li style={{ fontSize: 12, color: "#71717A", paddingLeft: 20 }}>
                + {course.topics.length - 8} more topics
              </li>
            )}
          </ul>
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openEnrollmentForm(getEnrollmentUrl(course.id))}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: 16,
            background: featured ? "#8B5CF6" : "transparent",
            border: featured ? "1px solid #8B5CF6" : "1px solid rgba(255,255,255,0.15)",
            borderRadius: 16,
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = featured ? "#7C3AED" : "rgba(255,255,255,0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = featured ? "#8B5CF6" : "transparent";
          }}
        >
          {course.ctaLabel}
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={14} strokeWidth={2.3} />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}

function Chip({ icon, label, accent = false }: { icon: React.ReactNode; label: string; accent?: boolean }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      background: "#151521",
      border: accent ? "1px solid rgba(99,102,241,0.22)" : "1px solid rgba(255,255,255,0.06)",
      borderRadius: 8,
      fontSize: 12,
      color: accent ? "#6366F1" : "#A1A1AA",
    }}>
      <span style={{ color: accent ? "#6366F1" : "#71717A" }}>{icon}</span>
      {label}
    </div>
  );
}
