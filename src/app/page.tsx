import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2] ">
   <HeroSection />
   <FeaturedCourses />
   <WhyChooseUs />
   <TestimonialCard />
   <UpcomingWebinars />
   <Instructors />  
   <Footer />
    </main>
  );

}