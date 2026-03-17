const positions = [
  { title: "PGT Mathematics", type: "Full-time", experience: "3+ Years", qualification: "M.Sc Mathematics, B.Ed" },
  { title: "TGT English", type: "Full-time", experience: "2+ Years", qualification: "M.A English, B.Ed" },
  { title: "Primary Teacher", type: "Full-time", experience: "1+ Years", qualification: "B.Ed / D.El.Ed" },
  { title: "Computer Science Teacher", type: "Full-time", experience: "2+ Years", qualification: "MCA / B.Tech, B.Ed" },
  { title: "Physical Education Teacher", type: "Full-time", experience: "2+ Years", qualification: "B.P.Ed / M.P.Ed" },
];

export default function OpenPositions() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Open Positions</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Join the St. Mary's family. We are looking for passionate educators who share our commitment to excellence and holistic education. Send your CV to <span className="text-primary font-semibold">careers@stmarys.edu</span>
      </p>
      <div className="space-y-4">
        {positions.map((pos) => (
          <div key={pos.title} className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-primary">{pos.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{pos.qualification} · {pos.experience} experience</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">{pos.type}</span>
              <a
                href="mailto:careers@stmarys.edu"
                className="text-xs font-bold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
