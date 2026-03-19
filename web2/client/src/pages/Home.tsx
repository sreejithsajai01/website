import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import NoticeBoard from "@/components/home/NoticeBoard";
import AboutSection from "@/components/home/AboutSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import SchoolNetworkSlider from "@/components/home/SchoolNetworkSlider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSlider />
        <NoticeBoard />
        <AboutSection />
        <SchoolNetworkSlider />

      </main>

      <Footer />
    </div>
  );
}