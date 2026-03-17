import principalImg from "@/assets/images/principal.png";
import { Quote } from "lucide-react";

export default function PrincipalsMessage() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">Principal's Message</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg shrink-0">
          <img src={principalImg} alt="Principal" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">Rev. Fr. Jipson Palatty</h3>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-4">Principal, St. Mary's CBSE School</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground italic leading-relaxed">
              "It is with immense pleasure and a deep sense of gratitude that I address you all. As we stand on the threshold of yet another academic year, I find myself reflecting on the remarkable journey of St. Mary's CBSE School, Vashi."
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
        <p>
          Dear Students, Parents, and Well-wishers,
        </p>
        <p>
          St. Mary's CBSE School has been serving the community for nearly 24 years now. During this time, we have witnessed countless students blossom into confident, capable, and compassionate individuals who have gone on to make their mark in the world.
        </p>
        <p>
          Our school is not just a place of academic learning — it is a community where values are nurtured, friendships are forged, and character is built. We believe that every child is unique and gifted, and our role as educators is to help each student discover and develop their individual potential.
        </p>
        <p>
          We remain committed to providing a safe, inclusive, and inspiring environment where curiosity is celebrated, creativity is encouraged, and excellence is pursued with joy. Together — students, parents, teachers, and management — we will continue to uphold the motto that defines us: <span className="font-semibold text-primary">"To Work and Serve in Love."</span>
        </p>
        <p className="font-semibold text-primary">God Bless You All.</p>
        <p className="font-bold text-primary">Rev. Fr. Jipson Palatty</p>
      </div>
    </div>
  );
}
