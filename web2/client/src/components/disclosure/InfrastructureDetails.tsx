const details = [
  { label: "Total Campus Area", value: "5 Acres" },
  { label: "Built-up Area", value: "25,000 sq. ft." },
  { label: "No. of Classrooms", value: "40" },
  { label: "No. of Laboratories", value: "4" },
  { label: "Library", value: "Yes" },
  { label: "Computer Lab", value: "Yes (60 systems)" },
  { label: "Sports Ground", value: "Yes" },
  { label: "Auditorium", value: "Yes (500 capacity)" },
  { label: "Canteen", value: "Yes" },
  { label: "Medical Room", value: "Yes" },
];

export default function InfrastructureDetails() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Infrastructure Details</h2>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <tbody>
            {details.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="px-5 py-3 font-semibold text-primary w-1/2">{row.label}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
