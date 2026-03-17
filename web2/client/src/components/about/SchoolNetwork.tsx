import { MapPin } from "lucide-react";

const schools = [
  { name: "St. Mary's CBSE School, Vashi", location: "Vashi, Navi Mumbai, Maharashtra", established: "2000" },
  { name: "St. Mary's CBSE School, Panvel", location: "Panvel, Navi Mumbai, Maharashtra", established: "2005" },
  { name: "St. Mary's CBSE School, Kharghar", location: "Kharghar, Navi Mumbai, Maharashtra", established: "2010" },
  { name: "St. Mary's CBSE School, Nerul", location: "Nerul, Navi Mumbai, Maharashtra", established: "2015" },
];

export default function SchoolNetwork() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">The MOCCB School Network</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        The Malankara Orthodox Church Council of Bombay (MOCCB) operates a growing network of CBSE-affiliated schools across Navi Mumbai, each committed to the same values of academic excellence, moral integrity, and holistic development.
      </p>
      <div className="space-y-4">
        {schools.map((school) => (
          <div key={school.name} className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-primary text-lg">{school.name}</h3>
              <p className="text-muted-foreground text-sm">{school.location}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Est.</p>
              <p className="font-bold text-primary">{school.established}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-primary/5 rounded-2xl p-6 border border-primary/10">
        <p className="text-muted-foreground leading-relaxed">
          Each school in the MOCCB network shares the same founding principles and motto — <span className="font-semibold text-primary">"To Work and Serve in Love"</span> — ensuring a consistent, high-quality educational experience for every student across all campuses.
        </p>
      </div>
    </div>
  );
}
