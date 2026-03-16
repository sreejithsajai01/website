import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import kidsCorner from "@/assets/images/kids-corner.jpg";
import labChemistry from "@/assets/images/lab-chemistry.jpg";
import labComputer from "@/assets/images/lab-computer.jpg";
import labPhysics from "@/assets/images/lab-physics.jpg";
import musicRoom from "@/assets/images/music-room.jpg";
import schoolHero from "@/assets/images/school-hero.png";
import schoolHero2 from "@/assets/images/schoolhero.png";

const images = [
  { id: 1, title: "School Campus", category: "Campus", src: schoolHero },
  { id: 2, title: "Chemistry Lab", category: "Facilities", src: labChemistry },
  { id: 3, title: "Computer Lab", category: "Facilities", src: labComputer },
  { id: 4, title: "Physics Lab", category: "Academics", src: labPhysics },
  { id: 5, title: "Music Room", category: "Creative", src: musicRoom },
  { id: 6, title: "Kids Corner", category: "Events", src: kidsCorner },
  { id: 7, title: "School Building", category: "Campus", src: schoolHero2 },
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">Gallery</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                A glimpse into the vibrant life at St. Mary's CBSE School.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((img) => (
                <div key={img.id} className="group relative aspect-square overflow-hidden rounded-lg hover:shadow-xl transition-shadow">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">{img.category}</span>
                    <h3 className="text-xl font-sans font-bold text-white">{img.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
