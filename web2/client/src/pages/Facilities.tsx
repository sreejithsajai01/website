import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Microscope, BookOpen, Dumbbell, Bus, Utensils, Wifi, Shield } from "lucide-react";

const facilities = [
  { name: "Smart Classrooms", icon: Building2, desc: "Modern, air-conditioned classrooms equipped with smart boards and digital learning tools." },
  { name: "Science Laboratories", icon: Microscope, desc: "Well-equipped labs for Physics, Chemistry, and Biology with modern apparatus." },
  { name: "Library", icon: BookOpen, desc: "Extensive collection of books, journals, and digital resources for all age groups." },
  { name: "Sports Facilities", icon: Dumbbell, desc: "Indoor and outdoor sports facilities including basketball, volleyball, and athletics." },
  { name: "Transportation", icon: Bus, desc: "Safe and reliable school bus service covering major areas of Navi Mumbai." },
  { name: "Cafeteria", icon: Utensils, desc: "Hygienic cafeteria serving nutritious meals and snacks." },
  { name: "Wi-Fi Campus", icon: Wifi, desc: "High-speed internet connectivity throughout the campus for digital learning." },
  { name: "Security", icon: Shield, desc: "24/7 security with CCTV surveillance ensuring a safe learning environment." },
];

export default function Facilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">Our Infrastructure</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                State-of-the-art infrastructure designed to provide the best learning environment for our students.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility) => (
                <div key={facility.name} className="bg-secondary/10 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <facility.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{facility.name}</h3>
                  <p className="text-muted-foreground">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Highlights */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary mb-16">Campus Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-3">Modern Infrastructure</h3>
                <p className="text-muted-foreground">Our campus features contemporary architecture with spacious classrooms, wide corridors, and green spaces.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-3">Learning Environment</h3>
                <p className="text-muted-foreground">Designed to foster creativity, collaboration, and critical thinking among students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary mb-12">Location</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground text-lg mb-8">Conveniently located in Vashi, Navi Mumbai, our campus is easily accessible from all parts of the city.</p>
              <div className="bg-secondary/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">St. Mary's CBSE School</h3>
                <p className="text-muted-foreground">Vashi, Navi Mumbai</p>
                <p className="text-muted-foreground">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
