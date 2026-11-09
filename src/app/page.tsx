import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import CourseSection from "@/components/CourseSection";
import LearningJourney from "@/components/LearningJourney";
import ShowcaseSection from "@/components/ShowcaseSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <TransformationSection />
        <CourseSection />
        <LearningJourney />
        <ShowcaseSection />
        <AboutSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
