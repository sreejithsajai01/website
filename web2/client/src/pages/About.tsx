import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-8 text-center">About St. Mary's School</h1>
          <div className="max-w-4xl mx-auto prose prose-blue lg:prose-xl">
            <p className="text-lg text-muted-foreground mb-6">
              St. Mary's School is a premier educational institution dedicated to excellence in learning and character building. Founded with a vision to provide holistic education, we have been a beacon of knowledge.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">To work and serve in love, nurturing young minds to become responsible global citizens with strong moral values.</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Our History</h2>
            <p> St. Mary's CBSE School Vashi is a privately run Christian minority Institution managed by The Malankara Orthodox Church Council of Bombay (MOCCB). We are committed to providing quality education and nurturing the overall development of our students.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}