import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webmindai.in"),
  title: {
    default: "WEBMIND AI | Learn AI Website & App Development",
    template: "%s | WEBMIND AI",
  },
  description:
    "Learn to create websites and applications using AI. Explore beginner-friendly, practical digital development courses at WEBMIND AI.",
  keywords: [
    "AI website development",
    "learn web development with AI",
    "AI app development course",
    "beginner website course",
    "WEBMIND AI",
    "online coding course India",
  ],
  authors: [{ name: "WEBMIND AI" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://webmindai.in",
    siteName: "WEBMIND AI",
    title: "WEBMIND AI | Learn AI Website & App Development",
    description:
      "Learn to create websites and applications using AI. Explore beginner-friendly, practical digital development courses at WEBMIND AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WEBMIND AI — Learn. Build. Launch.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBMIND AI | Learn AI Website & App Development",
    description:
      "Learn to create websites and applications using AI. Explore beginner-friendly, practical digital development courses at WEBMIND AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
