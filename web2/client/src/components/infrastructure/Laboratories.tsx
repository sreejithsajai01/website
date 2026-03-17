const labs = [
  { name: "Physics Laboratory", desc: "Fully equipped with modern instruments for practical experiments aligned with CBSE syllabus." },
  { name: "Chemistry Laboratory", desc: "Safe and well-ventilated lab with all necessary chemicals and apparatus for hands-on learning." },
  { name: "Biology Laboratory", desc: "Equipped with microscopes, specimens, and models to support life science education." },
  { name: "Computer Laboratory", desc: "High-speed internet-connected computers with the latest software for digital literacy and coding." },
];

export default function Laboratories() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Laboratories</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Our state-of-the-art laboratories provide students with hands-on learning experiences that complement classroom instruction and spark scientific curiosity.
      </p>
      <div className="space-y-4">
        {labs.map((lab) => (
          <div key={lab.name} className="bg-primary/5 border border-primary/10 rounded-xl p-5">
            <h3 className="font-bold text-primary mb-2">{lab.name}</h3>
            <p className="text-muted-foreground text-sm">{lab.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
