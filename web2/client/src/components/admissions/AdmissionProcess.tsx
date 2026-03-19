import { useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  { title: "Fill the Admission Form online" },
  { title: "Submit the Required Documents" },
  { title: "Parent Interaction" },
  { title: "Confirmation of Admission" },
];

const ageCriteria = [
  { grade: "Nursery", age: "3 years", dateRange: "(born between 01.07.2022 to 30.06.2023)" },
  { grade: "LKG (Lower Kindergarten)", age: "4 years", dateRange: "(born between 01.07.2021 to 30.06.2022)" },
  { grade: "UKG (Upper Kindergarten)", age: "5 years", dateRange: "(born between 01.07.2020 to 30.06.2021)" },
  { grade: "Class I", age: "6 years", dateRange: "(born between 01.07.2019 to 30.06.2020)" },
  { grade: "Class II", age: "Successfully completed Class I from a recognized school", dateRange: "" },
];

const requiredDocuments = [
  "Birth Certificate of the child",
  "Passport-size photographs of the child",
  "Aadhar Card (if available)",
];

const faqs = [
  {
    question: "When does the admission process start?",
    answer: "The admission process typically begins in December/January for the upcoming academic year. Please contact the school office for exact dates."
  },
  {
    question: "What documents are required for admission?",
    answer: "Required documents include: Birth Certificate, Transfer Certificate (TC) from previous school, Aadhar Card, Recent passport-size photographs, Previous year's report card/mark sheet, and Caste certificate (if applicable)."
  },
  {
    question: "Is there an entrance test for admission?",
    answer: "For primary classes, there is a basic interaction with the child and parents. For higher classes, a written assessment or academic review may be conducted depending on the grade and availability."
  },
  {
    question: "What is the age criteria for admission?",
    answer: "Age eligibility is calculated as on 31st March of the academic year. For Nursery/LKG: 3-4 years, UKG: 4-5 years, Class I: 5-6 years, and Class II onwards as per CBSE norms."
  },
  {
    question: "Are admissions open to all students?",
    answer: "Yes, admissions are open to all children irrespective of caste, creed, or religion, subject to eligibility criteria and seat availability."
  },
  {
    question: "Is there provision for mid-year or lateral admission?",
    answer: "Lateral admissions for Class II and above are subject to seat availability. Please contact the school office for current vacancy status."
  },
  {
    question: "How can I check the fee structure?",
    answer: "The detailed fee structure is available at the school office. You may also contact the admission office via phone or email for fee-related queries."
  },
  {
    question: "What is the mode of fee payment?",
    answer: "Fees can be paid through online transfer, cheque, or demand draft. Cash payments may be accepted at the school office as per school policy."
  },
  {
    question: "Can I visit the school campus before applying?",
    answer: "Yes, parents are welcome to visit the school campus. Please contact the admission office to schedule a visit or campus tour."
  },
  {
    question: "How will I know if my child's admission is confirmed?",
    answer: "Selected candidates will receive an admission confirmation letter from the school. Admission is finalized upon payment of fees within the stipulated timeline."
  }
];

export default function AdmissionProcess() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Admission Process */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-2">Admission Process</h2>
      <p className="text-muted-foreground text-base mb-6">Step-by-Step Process:</p>

      {/* Admissions Open Banner */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-amber-500 text-white font-bold text-lg px-8 py-2 rounded-full mb-2 shadow">Admissions Open</div>
        <div className="bg-primary text-white font-extrabold text-4xl px-10 py-3 rounded-2xl shadow-lg tracking-wide">2026–2027</div>
      </div>

      {/* Steps */}
      <div className="bg-amber-400 rounded-3xl p-6 mb-12 space-y-4">
        {steps.map((s, i) => {
          const isLeft = i % 2 === 0;
          const stepColors = ["text-amber-700", "text-blue-400", "text-green-700", "text-pink-500"];
          return (
            <div key={i} className={`flex items-center gap-3 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
              {/* Number Badge */}
              <span className={`text-6xl font-extrabold shrink-0 drop-shadow-lg ${stepColors[i]} [text-shadow:2px_2px_0_#fff,-2px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff]`}>
                {i + 1}
              </span>
              {/* Step Bar */}
              <div className="flex-1 bg-primary text-white font-bold text-base px-6 py-4 rounded-full shadow-md">
                {s.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Age Criteria */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Age Criteria</h2>
      <p className="text-muted-foreground text-base mb-6">(as per academic year guidelines):</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="border border-border p-4 text-left font-semibold">Grade</th>
              <th className="border border-border p-4 text-left font-semibold">Age Requirement</th>
              <th className="border border-border p-4 text-left font-semibold">Date of Birth Range</th>
            </tr>
          </thead>
          <tbody>
            {ageCriteria.map((row, i) => (
              <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="border border-border p-4 font-semibold text-primary">{row.grade}</td>
                <td className="border border-border p-4 text-muted-foreground text-sm">{row.age}</td>
                <td className="border border-border p-4 text-primary/70 text-sm">{row.dateRange || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Required Documents */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Required Documents</h2>
      <p className="text-muted-foreground text-base mb-6">
        Parents are required to submit the following documents at the time of admission:
      </p>
      <div className="space-y-3 mb-12">
        {requiredDocuments.map((doc, i) => (
          <div key={i} className="flex items-start gap-3 bg-primary/5 border border-primary/10 rounded-xl p-4">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <p className="text-muted-foreground text-sm">{doc}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-semibold text-primary">{faq.question}</h3>
              <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
            </button>
            {openFaq === i && (
              <div className="px-5 pb-5 pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
