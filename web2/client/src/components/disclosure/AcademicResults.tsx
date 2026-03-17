const results = [
  { year: "Nill", classX: "Nill", classXII: "Nill", topperX: "Nill", topperXII: "Nill" },
];

export default function AcademicResults() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Academic Results</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        St. Mary's CBSE School consistently achieves outstanding results in CBSE Board Examinations.
      </p>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Year</th>
              <th className="text-left px-5 py-3 font-semibold">Class X Pass %</th>
              <th className="text-left px-5 py-3 font-semibold">Class XII Pass %</th>
              <th className="text-left px-5 py-3 font-semibold">Class X Topper</th>
              <th className="text-left px-5 py-3 font-semibold">Class XII Topper</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, i) => (
              <tr key={row.year} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="px-5 py-3 font-bold text-primary">{row.year}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.classX}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.classXII}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.topperX}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.topperXII}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
