const fees = [
  { grade: "Nursery – UKG", tuition: "₹ 45,000", annual: "₹ 8,000" },
  { grade: "Class I – V", tuition: "₹ 52,000", annual: "₹ 9,000" },
  { grade: "Class VI – VIII", tuition: "₹ 58,000", annual: "₹ 10,000" },
  { grade: "Class IX – X", tuition: "₹ 65,000", annual: "₹ 11,000" },
  { grade: "Class XI – XII", tuition: "₹ 72,000", annual: "₹ 12,000" },
];

export default function FeeStructure() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Fee Structure</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        The fee structure for the academic year 2025–2026 is as follows. Fees are payable in quarterly instalments.
      </p>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Grade</th>
              <th className="text-left px-5 py-3 font-semibold">Annual Tuition Fee</th>
              <th className="text-left px-5 py-3 font-semibold">Annual Charges</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((row, i) => (
              <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="px-5 py-3 font-medium text-primary">{row.grade}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.tuition}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.annual}</td>
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
