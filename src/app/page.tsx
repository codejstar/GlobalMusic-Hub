import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-gird-white/[0.02]">
     <h1 className="text-2xl text-center">jagdeep jakhu</h1>
     <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
    </main>
  );
}
