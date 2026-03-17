  import { Quote } from "lucide-react";

export default function AsstManagingTrustee() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">Secretary Message</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg shrink-0 bg-secondary/20 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary">AT</span>
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">Fr. George Mathew</h3>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-4">Asst. Managing Trustee, MOCCB</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground italic leading-relaxed">
              "Every child deserves a nurturing environment where they can discover their potential and grow into confident, compassionate individuals."
            </p>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        The Assistant Managing Trustee plays a vital role in the day-to-day administration and coordination of MOCCB's educational institutions, working closely with school principals and management teams to ensure smooth operations.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed">
        His dedication to student welfare and staff development has been instrumental in maintaining the high standards of education and pastoral care that St. Mary's is known for.
      </p>
    </div>
  );
}
