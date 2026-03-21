import managerImg from "@/assets/images/manager.jpeg";
import { Quote } from "lucide-react";

export default function ManagingTrustee() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        {/* Image with Yellow and White Ring */}
        <div className="relative w-64 h-72 flex items-center justify-center shrink-0">
          {/* Outer Yellow Ring */}
          <div className="absolute w-64 h-64 rounded-full border-8 border-yellow-400 shadow-lg"></div>
          
          {/* Inner White Ring */}
          <div className="absolute w-56 h-56 rounded-full border-4 border-white shadow-md"></div>
          
          {/* Image Container */}
          <div className="relative w-56 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-md z-10">
            <img src={managerImg} alt="Managing Trustee" className="w-full h-full object-cover object-top" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">
            <a href="https://mosc.in/holysynod/his-grace-geevarghese-mar-coorilose-metropolitan/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              H. G. Geevarghese Mar Coorilos
            </a>
          </h3>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-1">Metropolitan of Bombay Diocese</p>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-4">& President of MOCCB</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1 rotate-180" />
            <p className="text-muted-foreground italic leading-relaxed flex items-end gap-2" style={{ fontFamily: 'Poppins !important' }}>
              <span>Under the able guidance and leadership of our Diocesan Metropolitan, the Diocese is scaling the pinnacle of glory through remarkable growth in its spiritual, social, educational, ecumenical and charitable activities.</span>
              <Quote className="w-6 h-6 text-primary shrink-0 flex-shrink-0" />
            </p>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed font-sans" style={{ fontFamily: 'Poppins' }}>
        Under the able guidance and leadership of our Diocesan Metropolitan H. G. Geevarghese Mar Coorilos, the Diocese is scaling the pinnacle of glory through the remarkable growth in its spiritual, social, educational, ecumenical and charitable activities. In spite of being burdened with several responsibilities of the Diocese and various projects of the Church, Thirumeni finds time to plan meticulously and to provide specific guidelines for every activity of the Diocese, the parishes, the spiritual organizations and the social and educational projects thereof.
      </p>
    </div>
  );
}
