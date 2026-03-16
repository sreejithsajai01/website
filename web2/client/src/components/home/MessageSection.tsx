import principalImg from "@/assets/images/principal.png";
import managerImg from "@/assets/images/manager.png";
import { ArrowRight, Quote } from "lucide-react";

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
            Messages from the Desk
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Principal Message */}
          <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-6 -left-6 bg-secondary text-primary p-4 rounded-full shadow-lg">
              <Quote className="w-8 h-8" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                <img src={principalImg} alt="Principal" className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left mt-2">
                <h3 className="text-2xl font-sans font-bold text-primary">Rev. Fr. Jipson Palatty</h3>
                <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1">Principal</p>
              </div>
            </div>
            
            <p className="text-foreground/70 leading-relaxed mb-6 italic">
              "It is with immense pleasure and a deep sense of gratitude that I address you all through this message from the Principal's Desk. As we stand on the threshold of yet another academic year, I find myself reflecting on the remarkable journey of St. Mary's CBSE School, Vashi, which has been serving the community for nearly 24 years now."
            </p>
            
            <a href="/principal-message" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:underline underline-offset-4">
              Continue Reading <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Manager Message */}
          <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-300 mt-12 md:mt-0">
            <div className="absolute -top-6 -left-6 bg-primary text-secondary p-4 rounded-full shadow-lg">
              <Quote className="w-8 h-8" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                <img src={managerImg} alt="Manager" className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left mt-2">
                <h3 className="text-2xl font-sans font-bold text-primary">Fr. Andrew Correia</h3>
                <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1">Manager</p>
              </div>
            </div>
            
            <p className="text-foreground/70 leading-relaxed mb-6 italic">
              "We try to live by the motto of our school. I express my deep gratitude to the management, principal, staff, parents and students for their co-operation and co-ordination in all activities of the school. We owe to our management, principals for their well planning every year for the all-round development of the school."
            </p>
            
            <a href="/manager-message" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:underline underline-offset-4">
              Continue Reading <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}