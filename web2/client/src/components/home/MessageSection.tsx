import founderImg from "@/assets/images/founder.jpg";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";

export default function MessageSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 -skew-y-2 origin-top-left -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-secondary"></div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Leadership</h4>
            <div className="w-12 h-1 bg-secondary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary">
            Vision Of Our Founder
          </h2>
        </div>

        {/* Founder Message */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-300">
            {/* Opening Quote - Top Left */}
            <div className="absolute -top-6 -left-6 bg-primary text-secondary p-4 rounded-full shadow-lg">
              <Quote className="w-8 h-8 rotate-180" />
            </div>

            {/* Closing Quote - Bottom Right */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-secondary p-4 rounded-full shadow-lg">
              <Quote className="w-8 h-8" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left: Image with Yellow and White Ring */}
              <div className="relative w-56 h-64 flex items-center justify-center flex-shrink-0">
                {/* Outer Yellow Ring */}
                <div className="absolute w-56 h-56 rounded-full border-8 border-yellow-400 shadow-lg"></div>
                
                {/* Inner White Ring */}
                <div className="absolute w-48 h-48 rounded-full border-4 border-white shadow-md"></div>
                
                {/* Image Container */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                  <img src={founderImg} alt="His Grace Dr. Philipose Mar Theophilos" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-sans font-bold text-primary">His Grace Dr. Philipose Mar Theophilos</h3>
                  <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1">Founder Manager, MOCCB</p>
                </div>
                
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Established in 1986, St. Mary's Multipurpose High School & Junior College has been a beacon of quality education and holistic development for nearly four decades.
                </p>
                
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Guided by the inspiring motto "Lead Us from Darkness to Light", the institution embodies a commitment to nurturing young minds and shaping a brighter future for its students.
                </p>
                
                <Link href="/about/founder-manager" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:underline underline-offset-4">
                  Continue Reading <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
