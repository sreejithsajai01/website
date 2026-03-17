const steps = [
  { step: "01", title: "Submit Enquiry", desc: "Fill out the online enquiry form or visit the school office to express your interest." },
  { step: "02", title: "Document Verification", desc: "Submit required documents for verification by the admissions team." },
  { step: "03", title: "Interaction / Assessment", desc: "Student and parent interaction with the principal or designated staff." },
  { step: "04", title: "Admission Confirmation", desc: "Receive admission confirmation and complete fee payment to secure the seat." },
];

export default function AdmissionProcess() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Admission Process</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Our admission process is simple, transparent, and designed to ensure every child gets a fair opportunity to join the St. Mary's family.
      </p>
      <div className="space-y-5">
        {steps.map((s) => (
          <div key={s.step} className="flex gap-5 items-start bg-primary/5 border border-primary/10 rounded-xl p-5">
            <span className="text-3xl font-bold text-primary/20 shrink-0">{s.step}</span>
            <div>
              <h3 className="font-bold text-primary mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
