import labImg1 from "@/assets/images/WhatsApp Image 2026-03-17 at 3.36.28 PM copy.jpeg";
import labImg2 from "@/assets/images/WhatsApp Image 2026-03-17 at 3.35.54 PM.jpeg";

const points = [
  "Well-maintained Physics, Chemistry, and Biology labs",
  "Advanced Computer Lab with updated systems",
  "Focus on experiments, innovation, and real-world application",
  "Safe and supervised environment for all practical sessions",
];

export default function Laboratories() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Laboratories</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Our laboratories are equipped with modern tools to provide practical, hands-on learning experiences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src={labImg1} alt="Laboratory 1" className="w-full object-cover h-48" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src={labImg2} alt="Laboratory 2" className="w-full object-cover h-48" />
        </div>
      </div>
      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
