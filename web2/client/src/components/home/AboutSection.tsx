import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Map, BookOpen, PlayCircle, UserCheck, Blend, Target } from "lucide-react";
import schoolHero from "@/assets/images/school-hero.png";

export default function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Links / Status Cards - Left Side */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
              <a href="/about/vision-mission" className="group bg-muted/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Vision & Mission</h3>
                  <p className="text-sm text-muted-foreground">Our Goals</p>
                </div>
              </a>
              
              <a href="/about/event-calendar" className="group bg-muted/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all">
                  <CalendarDays className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Event Calendar</h3>
                  <p className="text-sm text-muted-foreground">2026-2027</p>
                </div>
              </a>

              <a href="/academics/curriculum" className="group bg-muted/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Curriculum</h3>
                  <p className="text-sm text-muted-foreground">CBSE Program</p>
                </div>
              </a>

              <a href="/contact/Address" className="group bg-muted/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Map className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Get Direction</h3>
                  <p className="text-sm text-muted-foreground">Location Map</p>
                </div>
              </a>
            </div>

            {/* About Content - Right Side */}
            <div className="lg:col-span-9">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-12 h-1 bg-secondary"></div>
                <h4 className="text-primary font-bold uppercase tracking-wider text-sm">About Us</h4>
              </div>
              
              <div className="bg-muted/30 p-8 rounded-2xl border border-border relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-foreground/80 leading-relaxed mb-6">
                    St. Mary's CBSE School is inspired by the motto  "Spreading Light" - reflecting our belief that education illuminates the path of growth and success. At St. Mary's, we guide children towards wisdom, character, and purpose through empowering their young minds with knowledge and by helping them to grow into responsible individuals who can think critically, act ethically, and thus be an asset to the society.
                    </p>
                    
                    <a href="/about/history">
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all group">
                        Continue Reading 
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                  
                  <div className="md:w-1/3 flex flex-col gap-4 justify-center">
                    <div className="bg-primary text-white p-4 rounded-xl flex items-center gap-4">
                      <UserCheck className="w-10 h-10 text-secondary" />
                      <div>
                        <div className="text-sm font-bold">Student-Centric Learning</div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-primary p-4 rounded-xl flex items-center gap-4 text-primary">
                      <Blend className="w-10 h-10 text-primary" />
                      <div>
                        <div className="text-sm font-bold">Blended Learning</div>
                      </div>
                    </div>
                    <div className="bg-secondary text-primary p-4 rounded-xl flex items-center gap-4">
                      <Target className="w-10 h-10 text-primary" />
                      <div>
                        <div className="text-sm font-bold">Outcome Based Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}