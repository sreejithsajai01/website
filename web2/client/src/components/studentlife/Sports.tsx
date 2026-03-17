const sports = [
  { name: "Cricket", level: "Inter-school & Intra-school" },
  { name: "Football", level: "Inter-school & Intra-school" },
  { name: "Basketball", level: "Intra-school" },
  { name: "Volleyball", level: "Inter-school & Intra-school" },
  { name: "Badminton", level: "Inter-school & Intra-school" },
  { name: "Table Tennis", level: "Intra-school" },
  { name: "Athletics", level: "District & State Level" },
  { name: "Chess", level: "Inter-school & Intra-school" },
  { name: "Yoga", level: "All Grades" },
  { name: "Kabaddi", level: "Intra-school" },
];

export default function Sports() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Sports</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Sports at St. Mary's go beyond physical fitness — they build teamwork, discipline, and resilience. We participate in intra-school, inter-school, district, and state-level competitions.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {sports.map((sport) => (
          <div key={sport.name} className="bg-primary/5 border border-primary/10 rounded-xl p-4">
            <p className="font-bold text-primary text-sm">{sport.name}</p>
            <p className="text-xs text-muted-foreground mt-1">{sport.level}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 border border-primary/10 rounded-xl p-5">
        <h3 className="font-bold text-primary mb-2">Annual Sports Day</h3>
        <p className="text-sm text-muted-foreground">
          Our Annual Sports Day is a grand celebration of athletic talent, held every year with track events, field events, and team sports. Students from all grades participate and are awarded for their achievements.
        </p>
      </div>
    </div>
  );
}
