import { useState, useEffect } from "react";
import heroImg from "@/assets/images/school-hero.png";
import { Button } from "@/components/ui/button";
import HeroPopup from "./HeroPopup";

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-secondary font-bold text-lg md:text-xl mb-2 tracking-widest uppercase">Welcome to</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6 drop-shadow-lg">
              St. Mary's CBSE School
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-sans italic mb-8 drop-shadow-md">
              "To work and serve in Love"
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 font-bold">
                Virtual Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent/20 backdrop-blur-sm font-bold">
                Admission Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
      <HeroPopup />
    </div>
  );
}