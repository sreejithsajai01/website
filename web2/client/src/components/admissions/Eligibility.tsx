const criteria = [
  { grade: "Nursery / LKG", age: "3 – 4 years" },
  { grade: "UKG", age: "4 – 5 years" },
  { grade: "Class I", age: "5 – 6 years" },
  { grade: "Class II onwards", age: "As per CBSE norms" },
];

export default function Eligibility() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Eligibility</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Admissions are open to all children irrespective of caste, creed, or religion. Age eligibility as on 31st March of the academic year:
      </p>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Grade</th>
              <th className="text-left px-5 py-3 font-semibold">Age Criteria</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((row, i) => (
              <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="px-5 py-3 font-medium text-primary">{row.grade}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground text-sm mt-4">
        * For lateral admissions (Class II and above), availability of seats is subject to vacancy. Please contact the school office for details.
      </p>
    </div>
  );
}
