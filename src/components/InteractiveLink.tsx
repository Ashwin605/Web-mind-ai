"use client";

export default function InteractiveLink({ 
  href, 
  children, 
  style 
}: { 
  href: string; 
  children: React.ReactNode; 
  style?: React.CSSProperties;
}) {
  const baseStyle = {
    color: "#8B5CF6",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.2s",
    display: "inline-block",
    ...style,
  };

  return (
    <a 
      href={href} 
      style={baseStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#A78BFA")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#8B5CF6")}
    >
      {children}
    </a>
  );
}
