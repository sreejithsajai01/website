const fees = [
  { grade: "Nursery / Jr. KG / Sr. KG", tuition: "₹ 12,000", term: "₹ 3,000", activity: "₹ 2,000", total: "₹ 17,000" },
  { grade: "Grade 1 – 5", tuition: "₹ 14,000", term: "₹ 3,500", activity: "₹ 2,500", total: "₹ 20,000" },
  { grade: "Grade 6 – 8", tuition: "₹ 16,000", term: "₹ 4,000", activity: "₹ 3,000", total: "₹ 23,000" },
  { grade: "Grade 9 – 10", tuition: "₹ 18,000", term: "₹ 4,500", activity: "₹ 3,500", total: "₹ 26,000" },
  { grade: "Grade 11 – 12", tuition: "₹ 20,000", term: "₹ 5,000", activity: "₹ 4,000", total: "₹ 29,000" },
];

export default function FeeStructure() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Fee Structure</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        The fee structure for the academic year 2025–2026 is as follows. Fees are payable per term (3 terms per year).
      </p>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Grade Level</th>
              <th className="text-left px-5 py-3 font-semibold">Tuition Fee (Per Term)</th>
              <th className="text-left px-5 py-3 font-semibold">Term Fee</th>
              <th className="text-left px-5 py-3 font-semibold">Activity Fee</th>
              <th className="text-left px-5 py-3 font-semibold">Total (Per Term)</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((row, i) => (
              <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="px-5 py-3 font-medium text-primary">{row.grade}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.tuition}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.term}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.activity}</td>
                <td className="px-5 py-3 font-semibold text-primary">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground text-sm mt-4">
        * Fees are subject to revision. One-time admission fee and caution deposit applicable at the time of new admission.
      </p>
    </div>
  );
}
