import { Phone } from "lucide-react";

const numbers = [
  { label: "Main Office", number: "022-27662725" },
  { label: "Admissions", number: "022-27662725" },
  { label: "Principal's Office", number: "022-27662725" },
];

export default function PhonePage() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Phone</h2>
      <div className="space-y-4">
        {numbers.map((item) => (
          <div key={item.label} className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-5">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <a href={`tel:${item.number.replace(/\s/g, "")}`} className="font-bold text-primary hover:underline">
                {item.number}
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm mt-6">Office hours: Monday – Saturday, 8:00 AM – 4:00 PM</p>
    </div>
  );
}
