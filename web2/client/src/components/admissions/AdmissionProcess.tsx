const steps = [
  { title: "Enquiry & Registration", desc: "Parents/guardians may visit the school campus or contact the admission office to collect information and register their interest." },
  { title: "Application Form Submission", desc: "Complete the admission form with accurate details and submit it along with the required documents." },
  { title: "Document Verification", desc: "Submitted documents will be reviewed for eligibility and authenticity." },
  {
    title: "Interaction / Assessment",
    desc: null,
    bullets: [
      "For primary classes: Basic interaction with the child and parents",
      "For higher classes: Written assessment or academic review (if applicable)",
    ],
  },
  { title: "Admission Confirmation", desc: "Selected candidates will receive confirmation from the school." },
  { title: "Fee Payment & Enrollment", desc: "Admission is confirmed upon payment of fees within the stipulated timeline." },
];

const eligibility = [
  { grade: "Pre-Primary (Nursery, Jr. KG, Sr. KG)", detail: "Age should meet the prescribed limit as per educational board norms." },
  { grade: "Primary Section (Grade 1 – 5)", detail: "Successful completion of the previous class from a recognized institution." },
  { grade: "Secondary Section (Grade 6 – 10)", detail: "Academic performance and records from the previous school are considered." },
  { grade: "Junior College (Grade XI – XII)", detail: "Admission based on SSC/Equivalent board results and merit criteria." },
];

export default function AdmissionProcess() {
  return (
    <div>
      {/* Admission Process */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-2">Admission Process</h2>
      <p className="text-muted-foreground text-base mb-6">Step-by-Step Process:</p>
      <div className="space-y-4 mb-12">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-5 items-start bg-primary/5 border border-primary/10 rounded-xl p-5">
            <span className="text-3xl font-bold text-primary/20 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-bold text-primary mb-1">{s.title}</h3>
              {s.desc && <p className="text-muted-foreground text-sm">{s.desc}</p>}
              {s.bullets && (
                <ul className="space-y-1 mt-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Eligibility Structure */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-2">Eligibility Structure</h2>
      <p className="text-muted-foreground text-base mb-2">
        Admissions are granted based on age criteria, academic readiness, and seat availability.
      </p>
      <p className="text-muted-foreground text-base font-medium mb-6">General Eligibility Guidelines:</p>
      <div className="space-y-4">
        {eligibility.map((e) => (
          <div key={e.grade} className="bg-white border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-bold text-primary sm:w-72 shrink-0">{e.grade}</p>
            <p className="text-muted-foreground text-sm">{e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
