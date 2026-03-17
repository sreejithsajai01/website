import managerImg from "@/assets/images/manager.jpeg";
import { Quote } from "lucide-react";

export default function ManagingTrustee() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">President's Message</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        <div className="w-48 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg shrink-0">
          <img src={managerImg} alt="Managing Trustee" className="w-full h-auto object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">H.G. Geevarghese Mar Coorilos</h3>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-1">Metropolitan of Bombay Diocese</p>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-4">& President of MOCCB</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground italic leading-relaxed">
              "Under the able guidance and leadership of our Diocesan Metropolitan, the Diocese is scaling the pinnacle of glory through remarkable growth in its spiritual, social, educational, ecumenical and charitable activities."
            </p>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Under the able guidance and leadership of our Diocesan Metropolitan H. G. Geevarghese Mar Coorilos, the Diocese is scaling the pinnacle of glory through the remarkable growth in its spiritual, social, educational, ecumenical and charitable activities. In spite of being burdened with several responsibilities of the Diocese and various projects of the Church, Thirumeni finds time to plan meticulously and to provide specific guidelines for every activity of the Diocese, the parishes, the spiritual organizations and the social and educational projects thereof.
      </p>
    </div>
  );
}
