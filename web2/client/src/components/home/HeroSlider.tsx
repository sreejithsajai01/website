import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import heroImg from "@/assets/images/school-hero.png";
import { Button } from "@/components/ui/button";
import AdmissionEnquiryPopup from "./AdmissionEnquiryPopup";

const slides = [heroImg];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [, navigate] = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((img, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <img src={img} alt="" className="w-full h-full object-fill object-bottom" />
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-secondary font-bold text-lg md:text-xl mb-2 tracking-widest uppercase">Welcome to</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6 drop-shadow-lg">St. Mary's CBSE School</h1>
            <p className="text-xl md:text-2xl text-white/90 font-sans italic mb-8 drop-shadow-md">
              "Spreading Light"
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 font-bold" onClick={() => navigate("/about/vision-mission")}>
                Explore More
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent/20 backdrop-blur-sm font-bold" onClick={() => navigate("/coming-soon")}>
                Admission Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}

      <AdmissionEnquiryPopup />
    </div>
  );
}