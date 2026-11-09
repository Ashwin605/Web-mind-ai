import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { websiteCourse, appCourse } from "@/config/courses";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore WEBMIND AI courses — AI Website Development and AI App Development.",
};

export default function CoursesPage() {
  return (
    <div style={{ background: "#050509", minHeight: "100vh" }}>
      <header className="sticky top-0 z-50 px-6 py-4" style={{ background: "rgba(5,5,9,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center">
              <Zap size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-base tracking-widest">WEBMIND AI</span>
          </Link>
          <Link href="/" className="text-[#A1A1AA] hover:text-white text-sm transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Our Courses
          </h1>
          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Two focused courses designed to take you from beginner to digital builder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <CourseCard course={websiteCourse} featured />
          <CourseCard course={appCourse} />
        </div>
      </main>
    </div>
  );
}
