"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Do I need coding knowledge before joining?", a: "No prior coding knowledge is required. The course is specifically designed for complete beginners. We start from the fundamentals and build up gradually alongside AI-assisted tools." },
  { q: "Who can join WEBMIND AI?", a: "Anyone who wants to learn how to build websites and applications using AI — college students, beginners, freelancers, entrepreneurs and anyone curious about AI-powered digital creation." },
  { q: "Are the classes conducted online?", a: "Yes. The AI Website Development course is conducted as live online classes, so you can attend from anywhere with an internet connection." },
  { q: "How long is the website development course?", a: "The AI Website Development course runs for 15 days, with approximately 1 hour of live instruction per day. The AI App Development course schedule is not yet confirmed." },
  { q: "What will I create during the course?", a: "During the website course, you'll build several practice pages and work towards a final capstone website project. By Day 15, you'll present a complete project built with AI assistance." },
  { q: "What tools will be used?", a: "The course covers AI-powered website development platforms, HTML and CSS fundamentals, design tools, and modern hosting platforms. Specific tool recommendations will be shared at the start of the course." },
  { q: "How do I enroll?", a: "Click any Enroll button on this page. It will open a Google Form where you can register your interest by submitting your name, contact details, and course preference." },
  { q: "How will I receive admission confirmation?", a: "Submitting the form does not automatically confirm your admission. Our team will review your application and payment details before sending a confirmation." },
  { q: "What are the payment details?", a: "Payment details and methods will be communicated after your application is reviewed. [Payment policy to be finalized]" },
  { q: "Is there a certificate?", a: "Certificate details are currently being finalised. We will update this information once confirmed. [Certificate policy to be finalized]" },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "20px 0",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          gap: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.5,
          color: "#fff",
          flex: 1,
        }}>
          {faq.q}
        </span>
        <div style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 2,
          background: open ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.05)",
          border: open ? "1px solid rgba(139,92,246,0.32)" : "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.2s",
        }}>
          {open
            ? <Minus size={13} color="#8B5CF6" />
            : <Plus size={13} color="#A1A1AA" />
          }
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#A1A1AA",
              paddingBottom: 20,
              paddingRight: 40,
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" style={{
      position: "relative",
      padding: "120px 24px",
      background: "#050509",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 600,
        height: 360,
        background: "radial-gradient(ellipse at top, rgba(99,102,241,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
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
            Chapter 08 — FAQ
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
            Questions, answered.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 18, lineHeight: 1.6, color: "#A1A1AA" }}
          >
            Everything you need to know before enrolling.
          </motion.p>
        </div>

        {/* FAQ list */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
          background: "#10101A",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "0 32px",
        }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
