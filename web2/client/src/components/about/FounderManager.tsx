import managerImg from "@/assets/images/manager.png";
import { Quote } from "lucide-react";

export default function FounderManager() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">Founder Manager — MOCCB</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg shrink-0">
          <img src={managerImg} alt="Founder Manager" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">His Grace Mathews Mar Barnabas</h3>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-4">Founder Manager, MOCCB</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground italic leading-relaxed">
              "Education is the most powerful tool we can give our children — not just to succeed in life, but to serve humanity with love and humility."
            </p>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        The Malankara Orthodox Church Council of Bombay (MOCCB) was founded with a deep commitment to the spiritual and educational upliftment of the community. The Founder Manager's vision laid the groundwork for a network of schools that would serve thousands of students across the region.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed">
        His tireless dedication to education and community service continues to inspire the leadership and staff of St. Mary's CBSE School to this day.
      </p>
    </div>
  );
}
