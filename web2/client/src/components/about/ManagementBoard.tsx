const members = [
  { name: "His Grace Mathews Mar Barnabas", role: "Founder Manager" },
  { name: "Fr. Thomas Kuriakose", role: "Managing Trustee" },
  { name: "Fr. George Mathew", role: "Asst. Managing Trustee" },
  { name: "Rev. Fr. Jipson Palatty", role: "Principal" },
  { name: "Mr. Saji Varghese", role: "Board Member" },
  { name: "Mrs. Leena Thomas", role: "Board Member" },
  { name: "Mr. Philip Abraham", role: "Board Member" },
  { name: "Mrs. Anitha Kurian", role: "Board Member" },
];

export default function ManagementBoard() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">Management / Board Members</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        The Management Board of St. Mary's CBSE School comprises dedicated individuals who bring together their expertise, faith, and commitment to guide the institution towards its vision of educational excellence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {members.map((m) => (
          <div key={m.name} className="flex items-center gap-4 bg-primary/5 rounded-xl p-4 border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
              {m.name.split(" ").slice(-1)[0][0]}
            </div>
            <div>
              <p className="font-bold text-primary">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
