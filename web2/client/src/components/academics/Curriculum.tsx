const levels = [
  { title: "MARIAN PRE-PRIMARY SCHOOL", detail: "Nursery, Jr.K.G, Sr.K.G." },
  { title: "PRIMARY SCHOOL", detail: "Std. 1 to Std. 4 (Maharashtra State Board)" },
  { title: "SECONDARY SCHOOL", detail: "Std. 5 to Std. 10 (Maharashtra State Board)" },
  { title: "JUNIOR COLLEGE", detail: "Std. XI, XII (Maharashtra State Board)" },
];

export default function Curriculum() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">Curriculum</h2>
      <div className="space-y-4">
        {levels.map((level) => (
          <div key={level.title} className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
            <p className="font-bold text-primary sm:w-72 shrink-0">{level.title}</p>
            <p className="text-muted-foreground text-sm">{level.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
