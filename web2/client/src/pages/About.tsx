import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Users, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-sans mb-6">About St. Mary's CBSE School</h1>
              <p className="text-xl text-white/80 leading-relaxed mb-4">
                St. Mary's CBSE School, Vashi is part of The Malankara Orthodox Church Council of Bombay (MOCCB), dedicated to providing quality education that nurtures young minds.
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
               We provides a nurturing and inspiring environment where young learners begin their academic journey with confidence and joy. Our focus is on child-centered learning, strong values, and holistic development.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-sans text-primary mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide holistic education that develops academic excellence, moral values, and social responsibility in every student, preparing them to be compassionate leaders of tomorrow.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-sans text-primary mb-6">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be a center of educational excellence that empowers students with knowledge, skills, and values to succeed in a rapidly changing world while staying rooted in their cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sans text-center text-primary mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white p-8 rounded-lg shadow-md text-center border-2 border-transparent hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <BookOpen className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
                <p className="text-muted-foreground">Striving for the highest standards in academics and character.</p>
              </div>
              <div className="group bg-white p-8 rounded-lg shadow-md text-center border-2 border-transparent hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
                <p className="text-muted-foreground">Building strong relationships and fostering collaboration.</p>
              </div>
              <div className="group bg-white p-8 rounded-lg shadow-md text-center border-2 border-transparent hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Award className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
                <p className="text-muted-foreground">Upholding honesty, ethics, and moral principles.</p>
              </div>
              <div className="group bg-white p-8 rounded-lg shadow-md text-center border-2 border-transparent hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Heart className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Compassion</h3>
                <p className="text-muted-foreground">Caring for others and serving the community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-sans text-center text-primary mb-12">Our History</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Established in 2026, St. Mary's CBSE School, Vashi represents the commitment of The Malankara Orthodox Church Council of Bombay (MOCCB) to provide quality education in Navi Mumbai.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our school is built on the foundation of academic excellence, moral values, and holistic development. We are affiliated with the Central Board of Secondary Education (CBSE) and follow a curriculum that prepares students for success in the 21st century.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
