"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getEnrollmentUrl } from "@/config/enrollment";
import { openEnrollmentForm } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5,5,9,0.95)" : "rgba(5,5,9,0.5)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            position: "relative",
          }}>
            <img
              src="/images/webmind-logo.svg"
              alt="WEBMIND AI"
              width="200"
              height="50"
              style={{ 
                objectFit: "contain",
                filter: "drop-shadow(0 0 20px rgba(139,92,246,0.3))",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}>
            <div style={{ display: "flex", gap: 32 }} className="desktop-nav">
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scroll(l.href)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#E5E5E5",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: 0,
                    transition: "color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#E5E5E5")}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => openEnrollmentForm(getEnrollmentUrl("website"))}
              className="desktop-cta"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "#8B5CF6",
                border: "none",
                borderRadius: 999,
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                transition: "background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#7C3AED")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#8B5CF6")}
            >
              Enroll Now
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="mobile-toggle"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(5,5,9,0.98)",
          backdropFilter: "blur(24px)",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "100px 32px 48px",
          }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scroll(l.href)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    padding: "20px 0",
                    textAlign: "left",
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: "pointer",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </nav>
            <button
              onClick={() => {
                openEnrollmentForm(getEnrollmentUrl("website"));
                setOpen(false);
              }}
              style={{
                marginTop: "auto",
                padding: "18px",
                background: "#8B5CF6",
                border: "none",
                borderRadius: 16,
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1023px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
