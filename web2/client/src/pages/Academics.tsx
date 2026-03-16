import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Microscope, Globe, Palette, Calculator, Languages } from "lucide-react";

const subjects = [
  { name: "Languages", icon: Languages, desc: "English, Hindi, and regional languages" },
  { name: "Mathematics", icon: Calculator, desc: "Conceptual learning and problem-solving" },
  { name: "Science", icon: Microscope, desc: "Physics, Chemistry, and Biology" },
  { name: "Social Studies", icon: Globe, desc: "History, Geography, and Civics" },
  { name: "Arts", icon: Palette, desc: "Visual arts, music, and performing arts" },
  { name: "Computer Science", icon: BookOpen, desc: "Coding, technology, and digital literacy" },
];

export default function Academics() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">Academics</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Our CBSE-affiliated curriculum provides a comprehensive education that balances academic rigor with holistic development.
              </p>
            </div>
          </div>
        </section>

        {/* Grade Levels */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary mb-12">CBSE Curriculum</h2>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We follow the Central Board of Secondary Education (CBSE) curriculum, emphasizing conceptual understanding, critical thinking, and practical application.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-sans font-bold text-primary mb-4">Primary (Grades 1–5)</h3>
                <p className="text-muted-foreground">Foundation years focusing on basic literacy, numeracy, and social skills through interactive and play-based learning.</p>
              </div>
              <div className="bg-secondary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-sans font-bold text-primary mb-4">Middle (Grades 6–8)</h3>
                <p className="text-muted-foreground">Building on fundamentals with subject-specific learning, critical thinking, and character development.</p>
              </div>
              <div className="bg-secondary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-sans font-bold text-primary mb-4">Secondary (Grades 9–10)</h3>
                <p className="text-muted-foreground">Preparing for board examinations with in-depth subject knowledge and exam strategies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary mb-16">Subjects Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject) => (
                <div key={subject.name} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <subject.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{subject.name}</h3>
                  <p className="text-muted-foreground">{subject.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary mb-12">Teaching Methodology</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Student-Centered Learning</h3>
                <p className="text-muted-foreground text-lg">Our approach places students at the center of the learning process, encouraging active participation, inquiry, and exploration.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Experiential Learning</h3>
                <p className="text-muted-foreground text-lg">We believe in learning by doing. Our curriculum includes hands-on activities, projects, and real-world applications.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Technology Integration</h3>
                <p className="text-muted-foreground text-lg">Modern technology is integrated into our teaching to enhance learning experiences and prepare students for the digital age.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
