"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const sizes   = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-sm", lg: "px-8 py-4 text-base" };
const bases   = { primary: { bg: "#8B5CF6", bgH: "#7C3AED", border: "#8B5CF6", color: "#fff" },
                  secondary: { bg: "transparent", bgH: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.2)", color: "#fff" },
                  ghost: { bg: "transparent", bgH: "transparent", border: "transparent", color: "#A1A1AA" } };

export default function Button({ children, variant = "primary", size = "md", icon = false, onClick, href, external, disabled, className = "", type = "button" }: ButtonProps) {
  const v = bases[variant];
  const style: React.CSSProperties = { background: v.bg, border: `1px solid ${v.border}`, color: v.color, borderRadius: 9999, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1 };

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <motion.span className="flex items-center" initial={{ x: 0 }} whileHover={{ x: 3 }} transition={{ duration: 0.18 }}>
          <ArrowRight size={14} strokeWidth={2.3} />
        </motion.span>
      )}
    </>
  );

  const shared = `inline-flex items-center gap-2 font-semibold tracking-wide ${sizes[size]} ${className}`;

  if (href) return (
    <motion.a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
      className={shared} style={style} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>{inner}</motion.a>
  );

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled}
      className={shared} style={style} whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>{inner}</motion.button>
  );
}
