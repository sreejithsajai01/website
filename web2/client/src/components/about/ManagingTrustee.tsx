import { Quote } from "lucide-react";

export default function ManagingTrustee() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">President Message</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg shrink-0 bg-primary/10 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary">MT</span>
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">Fr. Thomas Kuriakose</h3>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-4">Managing Trustee, MOCCB</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground italic leading-relaxed">
              "Our trust is built on the foundation of faith, service, and a relentless pursuit of excellence in education for every child."
            </p>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        The Managing Trustee of MOCCB oversees the strategic direction and governance of all institutions under the council, ensuring that the founding values of faith, service, and excellence are upheld across every school in the network.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Under his leadership, St. Mary's CBSE School has continued to grow and evolve, embracing modern educational practices while staying true to its Christian ethos and community-first approach.
      </p>
    </div>
  );
}
