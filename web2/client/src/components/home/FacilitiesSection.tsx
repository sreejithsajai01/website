import { Play } from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Expert & Dedicated Teachers",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: 2,
    name: "Interactive Classrooms",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  },
  {
    id: 3,
    name: "Inspiring Learning Atmosphere",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    id: 4,
    name: "Well-Stocked Library",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
  },
  {
    id: 5,
    name: "Student-Centred Activities",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-secondary"></div>
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Academic Excellence</h4>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              A World-Class Academic Environment
            </h2>
          </div>
          <a href="/facilities" className="shrink-0 bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
            View All Facilities
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`w-full ${index === 0 ? "h-[400px] lg:h-[500px]" : "h-[240px]"}`}>
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex items-center justify-between">
                <h3 className="text-white font-bold text-xl md:text-2xl drop-shadow-md relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {facility.name}
                  <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h3>

                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-secondary group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                  <Play className="w-5 h-5 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
