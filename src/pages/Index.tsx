import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import PhilosophySection from "@/components/PhilosophySection";

export default function Index() {
  return (
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ background: "#0d0d1a" }}>
      <HeroSection />
      <CoursesSection />
      <PhilosophySection />
    </div>
  );
}
