import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePrograms } from "@/hooks/use-programs";
import { useNews } from "@/hooks/use-news";
import { ArrowRight, Calendar, ArrowUpRight, TrendingUp, MonitorSmartphone, HeartPulse, GraduationCap, Users, Globe2, BookOpen } from "lucide-react";

export default function Home() {
  const { data: programs, isLoading: isLoadingPrograms, error: programsError } = usePrograms();
  const { data: news, isLoading: isLoadingNews, error: newsError } = useNews();

  // Grouping programs intentionally for the categories view
  const categories = [
    { 
      id: "primary", 
      title: "Primary School", 
      desc: "Building strong foundations in early education (Grades 1-5).",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-700" 
    },
    { 
      id: "middle", 
      title: "Middle School", 
      desc: "Developing critical thinking and character (Grades 6-8).",
      icon: Users,
      color: "bg-purple-50 text-purple-700"
    },
    { 
      id: "secondary", 
      title: "Secondary School", 
      desc: "Preparing for board exams and future success (Grades 9-10).",
      icon: GraduationCap,
      color: "bg-rose-50 text-rose-700"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION - Video Background */}
        <section className="relative h-screen flex items-center overflow-hidden bg-primary">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/school1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/90 z-[1]" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 
                className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1] animate-slide-up"
              >
                Tradition Meets <br />
                <span className="italic font-normal text-accent">Excellence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold mb-12 max-w-2xl leading-relaxed animate-slide-up delay-100">
                St. Mary's CBSE School, Vashi is part of The Malankara Orthodox Church Council of Bombay (MOCCB), dedicated to nurturing young minds with quality education.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 animate-slide-up delay-200">
                <Link 
                  href="/admissions" 
                  className="px-12 py-5 bg-accent text-primary font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all duration-500 shadow-2xl"
                >
                  Request Information
                </Link>
                <Link 
                  href="/programs" 
                  className="px-12 py-5 border border-white/50 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                >
                  Our Programs
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 text-white/60 animate-fade-in delay-300">
            <span className="text-xs uppercase tracking-[0.4em] font-bold">Discover St Mary's</span>
            <div className="w-24 h-px bg-white/30" />
          </div>
        </section>

        {/* CALL TO ACTION GRID */}
        <section className="relative z-20 -mt-24 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-0 shadow-2xl">
          <div className="bg-white p-12 group hover:bg-accent transition-all duration-500 border-r border-border/10">
            <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">Admissions</h3>
            <p className="text-muted-foreground mb-8 group-hover:text-primary/70 transition-colors">Join our community and start your journey to excellence.</p>
            <Link href="/admissions" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-primary">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-primary p-12 text-white group hover:bg-primary/95 transition-all duration-500">
            <h3 className="text-2xl font-serif mb-4">CBSE Curriculum</h3>
            <p className="text-white/70 mb-8">Quality education following national standards and best practices.</p>
            <Link href="/programs" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-accent">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white p-12 group hover:bg-accent transition-all duration-500 border-l border-border/10">
            <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">Campus Visit</h3>
            <p className="text-muted-foreground mb-8 group-hover:text-primary/70 transition-colors">Experience our campus and facilities with a guided tour.</p>
            <Link href="/visit" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-primary">
              Schedule Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* PARALLAX SECTION */}
        <section className="relative py-48 parallax-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Build Your Future</h2>
            <p className="text-xl md:text-2xl font-light mb-12 opacity-90">Our campus is more than just buildings; it's a place where lifelong connections are made and futures are forged.</p>
            <Link href="/apply" className="px-12 py-5 bg-white text-primary font-bold uppercase tracking-[0.2em] text-sm hover:bg-accent transition-all duration-500">Apply Today</Link>
          </div>
        </section>

        {/* FEATURED PROGRAMS SECTION - Elegant Card Layout */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">Academic Excellence</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 text-foreground">CBSE Education Programs</h2>
              <div className="w-20 h-1 bg-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {categories.map((cat) => (
                <div key={cat.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden mb-8 shadow-lg">
                    <img 
                      src={cat.id === 'primary' ? "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" : cat.id === 'middle' ? "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" : "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"} 
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-all duration-500" />
                  </div>
                  <h4 className="text-3xl font-serif mb-4 group-hover:text-primary transition-colors">{cat.title}</h4>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">{cat.desc}</p>
                  <Link href={`/programs?category=${cat.id}`} className="text-xs font-bold uppercase tracking-[0.2em] pb-1 border-b-2 border-accent hover:border-primary transition-colors inline-block">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION SECTION - High Contrast Quote */}
        <section className="py-32 bg-secondary/30 relative">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="text-4xl md:text-6xl font-serif italic text-primary leading-tight mb-12">
              "We strive to foster an environment where intellectual curiosity meets spiritual growth, preparing students to serve the common good."
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">The St Mary's Mission</p>
          </div>
        </section>

        {/* NEWS & EVENTS - Minimalist Modern Style */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">Campus News</span>
                <h2 className="text-5xl font-serif text-foreground">The Latest Insights</h2>
              </div>
              <Link href="/news" className="text-xs font-bold uppercase tracking-[0.2em] pb-1 border-b-2 border-accent">View All News</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Featured News Item */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden mb-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
                    alt="Campus" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-4 block">Institutional | Oct 20, 2024</span>
                <h3 className="text-4xl font-serif mb-6 group-hover:text-primary transition-colors leading-tight">Expansion of the Saint Mary's Research Endowment</h3>
                <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">A major gift from the alumni foundation will support new interdisciplinary research initiatives across the humanities and sciences.</p>
                <Link href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">Read More <ArrowUpRight className="w-4 h-4" /></Link>
              </div>

              {/* List of News Items */}
              <div className="space-y-12">
                {news?.slice(0, 3).map((item, i) => (
                  <div key={item.id} className="flex gap-8 group cursor-pointer pb-12 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="hidden sm:block w-32 h-32 shrink-0 bg-secondary overflow-hidden">
                       <img 
                        src={item.imageUrl || `https://images.unsplash.com/photo-${1500000000000 + (i * 1000000)}?auto=format&fit=crop&q=80&w=300`} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2 block">{new Date(item.date).toLocaleDateString()}</span>
                      <h4 className="text-xl font-serif group-hover:text-primary transition-colors mb-4 line-clamp-2">{item.title}</h4>
                      <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-accent">Read Story</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
