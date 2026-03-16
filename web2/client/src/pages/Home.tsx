import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import NoticeBoard from "@/components/home/NoticeBoard";
import AboutSection from "@/components/home/AboutSection";
import MessageSection from "@/components/home/MessageSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSlider />
        <NoticeBoard />
        <AboutSection />
        <MessageSection />
        <FacilitiesSection />
        
        {/* Simple Toppers Call to Action Banner to replace the complex topper section for the mockup */}
        <section className="py-20 bg-muted/50 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Star Achievers</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              We are incredibly proud of our Class X and XII students who have demonstrated exceptional academic excellence in the recent board examinations.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/toppers/class-x" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-md">
                Class X Toppers
              </a>
              <a href="/toppers/class-xii" className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary border border-secondary transition-colors shadow-md">
                Class XII Toppers
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}