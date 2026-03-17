import { Mail } from "lucide-react";

const emails = [
  { label: "General Enquiries", email: "info@stmarys.edu" },
  { label: "Admissions", email: "admissions@stmarys.edu" },
  { label: "Careers", email: "careers@stmarys.edu" },
  { label: "Principal", email: "principal@stmarys.edu" },
];

export default function EmailPage() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Email</h2>
      <div className="space-y-4">
        {emails.map((item) => (
          <div key={item.label} className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-5">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <a href={`mailto:${item.email}`} className="font-bold text-primary hover:underline">
                {item.email}
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm mt-6">We typically respond to emails within 1–2 business days.</p>
    </div>
  );
}
