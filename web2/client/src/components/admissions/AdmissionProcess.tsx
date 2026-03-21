import { useState } from "react";
import { ChevronDown } from "lucide-react";
import number1 from "../../assets/images/number1.png";
import number2 from "../../assets/images/number2.png";
import number3 from "../../assets/images/number3.png";
import number4 from "../../assets/images/number4.png";

const steps = [
  { title: "Fill the Admission Form online", image: number1, color: "bg-white border-2 border-red-500", textColor: "text-gray-800" },
  { title: "Submit the Required Documents", image: number2, color: "bg-white border-2 border-red-300", textColor: "text-gray-800" },
  { title: "Parent Interaction", image: number3, color: "bg-white border-2 border-orange-400", textColor: "text-gray-800" },
  { title: "Confirmation of Admission", image: number4, color: "bg-white border-2 border-yellow-400", textColor: "text-gray-800" },
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
      <h2 className="text-3xl font-sans font-bold text-primary mb-2" style={{ fontFamily: 'Poppins' }}>Step-by-Step Process</h2>

      {/* Steps */}
      <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 mb-12 space-y-4" style={{ fontFamily: 'Poppins' }}>
        {steps.map((s, i) => {
          return (
            <div key={i}>
              <div className="flex items-center gap-4">
                {/* Image Badge */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <img src={s.image} alt={`Step ${i + 1}`} className="w-full h-full object-contain" />
                </div>
                {/* Step Pill */}
                <div className={`w-80 ${s.color} ${s.textColor} font-semibold text-sm px-5 py-3 rounded-full shadow-md`} style={{ fontFamily: 'Poppins' }}>
                  {s.title}
                </div>
              </div>
              {/* Dashed connector arrow */}
              {i < steps.length - 1 && (
                <div className="flex justify-start pl-7">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/40">
                    <path d="M12 2 Q18 12 12 22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
                    <path d="M9 19 L12 22 L15 19" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Age Criteria */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-1" style={{ fontFamily: 'Poppins' }}>Age Criteria</h2>
      <p className="text-muted-foreground text-base mb-2" style={{ fontFamily: 'Poppins' }}>
        (as per academic year guidelines):
        </p>
      <div className="overflow-x-auto mb-12" style={{ fontFamily: 'Poppins' }}>
        <table className="w-full border-collapse border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="border border-border p-4 text-left font-semibold" style={{ fontFamily: 'Poppins' }}>Grade</th>
              <th className="border border-border p-4 text-left font-semibold" style={{ fontFamily: 'Poppins' }}>Age Requirement</th>
              <th className="border border-border p-4 text-left font-semibold" style={{ fontFamily: 'Poppins' }}>Date of Birth Range</th>
            </tr>
          </thead>
          <tbody>
            {ageCriteria.map((row, i) => (
              <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                <td className="border border-border p-4 font-semibold text-primary" style={{ fontFamily: 'Poppins' }}>
                  {row.grade}
                </td>
                <td className="border border-border p-4 text-muted-foreground text-sm" style={{ fontFamily: 'Poppins' }}>
                  {row.age}
                </td>
                <td className="border border-border p-4 text-primary/70 text-sm" style={{ fontFamily: 'Poppins' }}>
                  {row.dateRange || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Required Documents */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-2" style={{ fontFamily: 'Poppins' }}>Required Documents</h2>
      <p className="text-muted-foreground text-base mb-2" style={{ fontFamily: 'Poppins' }}>
        Parents are required to submit the following documents at the time of admission:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-12 text-muted-foreground" style={{ fontFamily: 'Poppins' }}>
        {requiredDocuments.map((doc, i) => (
          <li key={i}>{doc}</li>
        ))}
      </ul>

      {/* FAQ Section */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-6" style={{ fontFamily: 'Poppins' }}>Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-semibold text-primary" style={{ fontFamily: 'Poppins' }}>
                {faq.question}
              </h3>
              <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
            </button>
            {openFaq === i && (
              <div className="px-5 pb-5 pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
