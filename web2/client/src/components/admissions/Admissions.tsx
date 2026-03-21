import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionProcess from "./AdmissionProcess";
import Eligibility from "./Eligibility";
import FeeStructure from "./FeeStructure";
import OnlineRegistration from "./OnlineRegistration";

export default function Admissions() {
  const [matchProcess] = useRoute("/admissions/process");
  const [matchEligibility] = useRoute("/admissions/eligibility");
  const [matchFee] = useRoute("/admissions/fee-structure");
  const [matchOnline] = useRoute("/admissions/online-registration");
  const [matchBase] = useRoute("/admissions");

  let ActiveComponent = AdmissionProcess;
  let activeLabel = "Admission Process";

  if (matchProcess || matchBase) { ActiveComponent = AdmissionProcess; activeLabel = "Admission Process"; }
  else if (matchEligibility) { ActiveComponent = Eligibility; activeLabel = "Eligibility"; }
  else if (matchFee) { ActiveComponent = FeeStructure; activeLabel = "Fee Structure"; }
  else if (matchOnline) { ActiveComponent = OnlineRegistration; activeLabel = "Online Registration / Enquiry Form"; }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Admissions</p>
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-white mb-4">{activeLabel}</h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8 lg:p-10">
            <ActiveComponent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
