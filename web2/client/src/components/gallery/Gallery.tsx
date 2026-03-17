import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Gallery</p>
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-white mb-4">Gallery</h1>
            <p className="text-white/70 text-lg">St. Mary's CBSE School — Vashi, Navi Mumbai</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8 lg:p-10">
            <PhotoGallery />
          </div>
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8 lg:p-10">
            <VideoGallery />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
