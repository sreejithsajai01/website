import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePrograms } from "@/hooks/use-programs";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Programs() {
  const { data: programs, isLoading, error } = usePrograms();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = programs 
    ? Array.from(new Set(programs.map(p => p.category))) 
    : ["Business", "Technology", "Health"];

  const filteredPrograms = programs?.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory ? p.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary">
        <Navbar />
      </div>

      <main className="flex-1 bg-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Academic Programs
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Explore our wide range of certificate, diploma, and degree programs designed to get you career-ready.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for programs (e.g. Nursing, Software...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full bg-white text-foreground shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50 transition-all text-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Filters & Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
                activeCategory === null 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All Programs
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="animate-pulse bg-card rounded-2xl h-64 border border-border" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Error Loading Programs</h3>
              <p className="text-muted-foreground">Please try again later or ensure the database is seeded.</p>
            </div>
          ) : filteredPrograms?.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted text-muted-foreground mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No programs found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms?.map(program => (
                <div key={program.id} className="group bg-card rounded-2xl border border-border p-6 hover-elevate-card flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {program.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground line-clamp-3 mb-6 flex-1 text-sm">
                    {program.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sm text-primary font-semibold">
                      <BookOpen className="w-4 h-4" /> 2-Year Diploma
                    </div>
                    <button className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Mock data if API returns empty array for visuals */}
              {programs?.length === 0 && [
                { id: 101, title: "Business Administration", cat: "Business", desc: "A comprehensive program covering management, marketing, and finance." },
                { id: 102, title: "Software Development", cat: "Technology", desc: "Learn modern programming languages, full-stack web development, and cloud architecture." },
                { id: 103, title: "Practical Nursing", cat: "Health", desc: "Gain the clinical skills and knowledge needed to provide exceptional patient care." },
              ].map(mock => (
                <div key={mock.id} className="group bg-card rounded-2xl border border-border p-6 hover-elevate-card flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {mock.cat}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {mock.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground line-clamp-3 mb-6 flex-1 text-sm">
                    {mock.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-border mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sm text-primary font-semibold">
                      <BookOpen className="w-4 h-4" /> 2-Year Diploma
                    </div>
                    <button className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
