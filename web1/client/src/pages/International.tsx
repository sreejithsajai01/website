import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Globe, Users, BookOpen, Award } from "lucide-react";

export default function International() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary">
        <Navbar />
      </div>

      <main className="flex-1">
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">International Programs</h1>
            <p className="text-xl opacity-90">Global Education at St. Mary's CBSE School</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="p-8 border border-border rounded-lg">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Global Curriculum</h3>
                <p className="text-muted-foreground">CBSE curriculum with international standards and global perspectives integrated into our teaching methodology.</p>
              </div>
              <div className="p-8 border border-border rounded-lg">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Cultural Exchange</h3>
                <p className="text-muted-foreground">Participate in international exchange programs and cultural activities with partner schools worldwide.</p>
              </div>
              <div className="p-8 border border-border rounded-lg">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Language Programs</h3>
                <p className="text-muted-foreground">Learn multiple languages including English, Hindi, and foreign language options to prepare for global opportunities.</p>
              </div>
              <div className="p-8 border border-border rounded-lg">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">International Recognition</h3>
                <p className="text-muted-foreground">Our CBSE certification is recognized globally, opening doors to universities worldwide.</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-serif mb-6">Preparing Global Citizens</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At St. Mary's CBSE School, we prepare students to thrive in an interconnected world through quality education, 
                cultural awareness, and global competencies.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
