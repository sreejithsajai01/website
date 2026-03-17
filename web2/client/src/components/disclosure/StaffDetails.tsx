const staff = [
  { name: "Rev. Fr. Jipson Palatty", designation: "Principal", qualification: "M.Ed, M.Phil", experience: "20 Years" },
  { name: "Mrs. Anitha Kurian", designation: "Vice Principal", qualification: "M.Sc, B.Ed", experience: "15 Years" },
  { name: "Mr. Saji Varghese", designation: "PGT Mathematics", qualification: "M.Sc, B.Ed", experience: "12 Years" },
  { name: "Mrs. Leena Thomas", designation: "PGT English", qualification: "M.A, B.Ed", experience: "10 Years" },
  { name: "Mr. Philip Abraham", designation: "TGT Science", qualification: "B.Sc, B.Ed", experience: "8 Years" },
];

export default function StaffDetails() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Staff Details</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Name</th>
              <th className="text-left px-5 py-3 font-semibold">Designation</th>
              <th className="text-left px-5 py-3 font-semibold">Qualification</th>
              <th className="text-left px-5 py-3 font-semibold">Experience</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s, i) => (
              <tr key={s.name} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="px-5 py-3 font-medium text-primary">{s.name}</td>
                <td className="px-5 py-3 text-muted-foreground">{s.designation}</td>
                <td className="px-5 py-3 text-muted-foreground">{s.qualification}</td>
                <td className="px-5 py-3 text-muted-foreground">{s.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
