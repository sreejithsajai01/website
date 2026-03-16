import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Map, Building2, PlayCircle, UserCheck, Blend, Target } from "lucide-react";
import schoolHero from "@/assets/images/school-hero.png";

export default function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Quick Links / Status Cards - Left Side */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <a href="/tour" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <PlayCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">360° Virtual</h3>
                <p className="text-sm text-muted-foreground">School Tour</p>
              </div>
            </a>
            
            <a href="/calendar" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all">
                <CalendarDays className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Event Calendar</h3>
                <p className="text-sm text-muted-foreground">2025-2026</p>
              </div>
            </a>

            <a href="/facilities" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Our Facilities</h3>
                <p className="text-sm text-muted-foreground">Explore Campus</p>
              </div>
            </a>

            <a href="/direction" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center justify-center text-center gap-3">
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
            
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-primary mb-6 leading-tight">
              St. Mary's School, <br/>Vashi, Navi Mumbai
            </h2> 
            
            <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-xl text-muted-foreground mb-8 font-sans">
              "The journey of a thousand miles begins with a single step." ~Lao Tzu
            </blockquote>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border relative">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                   St. Mary's CBSE School, Vashi is part of The Malankara Orthodox Church Council of Bombay (MOCCB)
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="font-bold text-xs">01</span>
                      </div>
                      Founded in 2026
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="font-bold text-xs">02</span>
                      </div>
                      Affiliated to CBSE
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="font-bold text-xs">03</span>
                      </div>
                      Located in Vashi, Navi Mumbai
                    </li>
                  </ul>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all group">
                    Know More About School
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
    </section>
  );
}