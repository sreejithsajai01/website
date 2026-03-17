const streams = [
  { name: "Science", subjects: ["Physics", "Chemistry", "Biology / Computer Science", "Mathematics", "English"] },
  { name: "Commerce", subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics / IP", "English"] },
  { name: "Humanities", subjects: ["History", "Political Science", "Geography", "Psychology", "English"] },
];

export default function SeniorSecondary() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Senior Secondary</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Senior Secondary (Classes IX–XII) prepares students for board examinations and higher education. We offer three streams — Science, Commerce, and Humanities — with experienced faculty and dedicated support.
      </p>
      <div className="grid sm:grid-cols-3 gap-5">
        {streams.map((stream) => (
          <div key={stream.name} className="bg-primary/5 border border-primary/10 rounded-xl p-5">
            <h3 className="font-bold text-primary mb-3">{stream.name}</h3>
            <ul className="space-y-1.5">
              {stream.subjects.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
