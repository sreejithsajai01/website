const info = [
  { label: "Name of School", value: "St. Mary's CBSE School, Vashi" },
  { label: "Affiliation No.", value: "1100234" },
  { label: "School Code", value: "56789" },
  { label: "Address", value: "Sector 15, Vashi, Navi Mumbai, Maharashtra – 400703" },
  { label: "Principal", value: "Fr. Bijumon K.P." },
  { label: "Contact No.", value: "022-27662725" },
  { label: "Email", value: "cbsestmarysvashi@gmail.com" },
  { label: "Year of Establishment", value: "2026" },
  { label: "Status of School", value: "Co-Educational" },
  { label: "Affiliation Status", value: "Permanent" },
  { label: "Board", value: "CBSE" },
  { label: "Founder Manager", value: "Late Lamented Arch Bishop Dr. Philipose Mar Theophilus" },
  { label: "Managing Organization", value: "Malankara Orthodox Church Council of Bombay (MOCCB)" },
  { label: "School Motto", value: "Lead me from Darkness to Light" },
];

export default function GeneralInformation() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">General Information</h2>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <tbody>
            {info.map((row, i) => (
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
