import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import stMarysICSE from "@/assets/images/stmarys-icse-koparkhairane.jpeg";
import stThomasEnglish from "@/assets/images/stthomas-english-kalyan.jpeg";
import stMarysValsad from "@/assets/images/stmarys-valsad.jpeg";
import stMarysJNP from "@/assets/images/stmarys-jnp-nhavasheva.jpeg";
import stMarysTejaswini from "@/assets/images/stmarys-tejaswini-vashi.jpeg";
import drMarTheophilusPune from "@/assets/images/drmar-theophilus-pune.jpeg";
import gregorianPublic from "@/assets/images/gregorian-public-roha.jpeg";
import westernCollege from "@/assets/images/western-college-sanpada.jpeg";
import indiraInstitute from "@/assets/images/indira-institute-sanpada.jpeg";
import stMarysKhopoli from "@/assets/images/stmarys-public-khopoli.jpeg";
import stMarysDhule from "@/assets/images/stmarys-dhule.jpeg";
import drMarTheophilusIMS from "@/assets/images/drmar-theophilus-ims-sanpada.jpeg";

interface School {
  id: number;
  name: string;
  image: string;
  location: string;
  website?: string;
}

const schoolsData: School[] = [
  {
    id: 1,
    name: "St. Mary's ICSE School",
    image: stMarysICSE,
    location: "Koparkhairane, Navi Mumbai",
    website: "https://www.stmarysicsekk.com/",
  },
  {
    id: 2,
    name: "St. Thomas English School",
    image: stThomasEnglish,
    location: "Karnik Rd, Kalyan",
  },
  {
    id: 3,
    name: "St. Mary's School",
    image: stMarysValsad,
    location: "Valsad, Gujarat",
  },
  {
    id: 4,
    name: "St. Mary's JNP School",
    image: stMarysJNP,
    location: "J.N.P.T., Nhava Sheva",
  },
  {
    id: 5,
    name: "St. Mary's Tejaswini School",
    image: stMarysTejaswini,
    location: "Vashi",
    website: "https://marianvashi.com/",
  },
  {
    id: 6,
    name: "Dr. Mar Theophilus ICSE School",
    image: drMarTheophilusPune,
    location: "Dhanori, Pune",
    website: "https://martheophilusschool.org/",
  },
  {
    id: 7,
    name: "Gregorian Public School",
    image: gregorianPublic,
    location: "Roha",
    website: "https://gregorianpublicschool.in/",
  },
  {
    id: 8,
    name: "Western College of Commerce & Business Management",
    image: westernCollege,
    location: "Sanpada",
    website: "https://www.wccbm.ac.in/",
  },
  {
    id: 9,
    name: "Indira Institute of Business Management",
    image: indiraInstitute,
    location: "Sanpada",
    website: "https://www.indiraiibm.edu.in/",
  },
  {
    id: 10,
    name: "St. Mary's Public School",
    image: stMarysKhopoli,
    location: "DP Road, Khopoli",
  },
  {
    id: 11,
    name: "St. Mary's School",
    image: stMarysDhule,
    location: "Tikhi Road, Dhule",
  },
  {
    id: 12,
    name: "Dr. Mar Theophilus Institute of Management Studies",
    image: drMarTheophilusIMS,
    location: "Sanpada",
    website: "https://dmtims.edu.in/",
  },
];

export default function SchoolNetworkSlider() {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % schoolsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (direction === "right") {
      setCenterIndex((prev) => (prev + 1) % schoolsData.length);
    } else {
      setCenterIndex((prev) => (prev - 1 + schoolsData.length) % schoolsData.length);
    }
  };

  const handleCardClick = (school: School, index: number) => {
    setCenterIndex(index);
    if (school.website) {
      setTimeout(() => {
        window.open(school.website, "_blank");
      }, 300);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      return;
    }
    e.preventDefault();
    if (e.deltaX > 0 || e.deltaY > 0) {
      scroll("right");
    } else {
      scroll("left");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 animate-[fadeInUp_0.8s_ease-out]">Our School Network</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Explore our branches across different locations
          </p>
        </div>

        <div className="relative" onWheel={handleWheel}>
          {/* Carousel Container */}
          <div className="flex items-center justify-center py-12 perspective-1000 overflow-hidden">
            <div className="relative w-full max-w-6xl h-96 flex items-center justify-center">
              {schoolsData.map((school, index) => {
                let offset = index - centerIndex;
                
                // Create seamless loop by wrapping positions
                if (offset > schoolsData.length / 2) {
                  offset -= schoolsData.length;
                } else if (offset < -schoolsData.length / 2) {
                  offset += schoolsData.length;
                }
                
                const isCenter = offset === 0;
                const absOffset = Math.abs(offset);
                
                return (
                  <div
                    key={school.id}
                    onClick={() => handleCardClick(school, index)}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `
                        translateX(${offset * 280}px)
                        translateZ(${isCenter ? 0 : -200 * absOffset}px)
                        scale(${isCenter ? 1.2 : 1 - absOffset * 0.2})
                        rotateY(${offset * -15}deg)
                      `,
                      zIndex: isCenter ? 100 : 10 - absOffset,
                      opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                      pointerEvents: absOffset > 2 ? 'none' : 'auto',
                    }}
                  >
                    <div className={`relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 ${
                      isCenter ? 'border-yellow-400' : 'border-white'
                    } transition-all duration-500 ${
                      isCenter ? 'hover:shadow-yellow-400/50' : ''
                    }`}>
                      <img
                        src={school.image}
                        alt={school.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                        isCenter ? 'opacity-100' : 'opacity-60'
                      }`}></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{school.name}</h3>
                        <p className="text-sm text-white/90 mb-3 drop-shadow-md">{school.location}</p>
                        {school.website && isCenter && (
                          <div className="flex items-center gap-2 text-yellow-400 font-semibold text-sm animate-pulse">
                            <ExternalLink className="w-4 h-4" />
                            <span>Visit Website</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full hover:bg-yellow-600 transition-colors shadow-xl z-20"
            aria-label="Previous school"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full hover:bg-yellow-600 transition-colors shadow-xl z-20"
            aria-label="Next school"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {schoolsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCenterIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === centerIndex ? 'w-8 bg-yellow-500' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to school ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </section>
  );
}
