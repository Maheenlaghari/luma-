import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import StorySection from "@/components/home/StorySection";
import FeaturedSection from "@/components/home/FeaturedSection";
import PhilosophySection from "@/components/home/PhilosophySection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <CategorySection />
      <StorySection />
      <FeaturedSection />
      <PhilosophySection />
    </div>
  );
}
