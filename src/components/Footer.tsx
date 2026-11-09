"use client";

import { Mail, MessageCircle, Link2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

function scrollTo(href: string) {
  if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function SocialBtn({ href, label, icon }: { href?: string; label: string; icon: React.ReactNode }) {
  const style = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "all 0.2s",
    textDecoration: "none",
    cursor: href ? "pointer" : "default",
    opacity: href ? 1 : 0.4,
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={style}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
          e.currentTarget.style.background = "rgba(139,92,246,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        }}
      >
        <span style={{ color: "#A1A1AA" }}>{icon}</span>
      </a>
    );
  }
  return <div style={style} title={`${label} — coming soon`}><span style={{ color: "#A1A1AA" }}>{icon}</span></div>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      position: "relative",
      background: "#050509",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "48px 20px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 40,
          marginBottom: 40,
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img
                src="/images/webmind-logo.svg"
                alt="WEBMIND AI"
                width="200"
                height="50"
                style={{ 
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 18px rgba(139,92,246,0.25))",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#71717A",
              maxWidth: 360,
              marginBottom: 20,
            }}>
              An AI-powered digital skills academy helping beginners transform their ideas into real websites and applications.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <SocialBtn href={siteConfig.contact.whatsapp} label="WhatsApp" icon={<MessageCircle size={15} />} />
              <SocialBtn href={siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : undefined} label="Email" icon={<Mail size={15} />} />
              <SocialBtn href={siteConfig.contact.instagram} label="Instagram" icon={<Link2 size={15} />} />
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#71717A",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontSize: 14,
                    color: "#A1A1AA",
                    transition: "color 0.2s",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#71717A",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}>
              Get in Touch
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} style={{
                  fontSize: 14,
                  color: "#A1A1AA",
                  transition: "color 0.2s",
                  textDecoration: "none",
                  display: "block",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} style={{
                  fontSize: 14,
                  color: "#A1A1AA",
                  transition: "color 0.2s",
                  textDecoration: "none",
                  display: "block",
                  wordBreak: "break-all",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 14,
                  color: "#8B5CF6",
                  transition: "color 0.2s",
                  textDecoration: "none",
                  display: "block",
                  fontWeight: 500,
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A78BFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B5CF6")}
                >
                  WhatsApp Us →
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#71717A",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}>
              Legal
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {policyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{
                    fontSize: 14,
                    color: "#A1A1AA",
                    transition: "color 0.2s",
                    textDecoration: "none",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <p style={{ fontSize: 12, color: "#71717A", textAlign: "center" }}>© {year} WEBMIND AI. All rights reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </footer>
  );
}
