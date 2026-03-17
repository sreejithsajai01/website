import { MapPin } from "lucide-react";

const schools = [
  "St. Mary's ICSE school, Koparkhairane, Navi Mumbai",
  "St. Thomas English School, Karnik Rd, Kalyan",
  "St. Mary's School, Valsad, Gujarat",
  "St. Mary's JNP School, J.N.P.T., Nhava Sheva",
  "St. Mary's Tejaswini School, Vashi",
  "Dr. Mar Theophilus ICSE School, Dhanori, Pune",
  "Gregorian Public School, Roha",
  "Western College of Commerce & Business Management, Sanpada",
  "Indira Institute of Business Management, Sanpada",
  "St. Mary's Public School, DP Road, Khopoli",
  "St. Mary's School, Tikhi Road, Dhule",
  "Dr. Mar Theophilus Institute of Management Studies, Sanpada",
];

export default function SchoolNetwork() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">The MOCCB School Network</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Alongwith St. Mary's Multipurpose High School & Junior College, Vashi, the MOCCB trust manages the following institutions:
      </p>
      <div className="space-y-4">
        {schools.map((school) => (
          <div key={school} className="bg-white rounded-2xl border border-border shadow-sm p-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <p className="font-medium text-foreground">{school}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-primary/5 rounded-2xl p-6 border border-primary/10">
        <p className="text-muted-foreground leading-relaxed">
          Each institution in the MOCCB network shares the same founding principles and motto — <span className="font-semibold text-primary">"Lead us from Darkness to Light"</span> — ensuring a consistent, high-quality educational experience for every student across all campuses.
        </p>
      </div>
    </div>
  );
}
