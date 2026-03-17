import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionProcess from "./AdmissionProcess";
import Eligibility from "./Eligibility";
import FeeStructure from "./FeeStructure";
import OnlineRegistration from "./OnlineRegistration";

const subPages = [
  { label: "Admission Process", path: "/admissions/process" },
  { label: "Eligibility", path: "/admissions/eligibility" },
  { label: "Fee Structure", path: "/admissions/fee-structure" },
  { label: "Online Registration / Enquiry Form", path: "/admissions/online-registration" },
];

const componentMap: Record<string, () => JSX.Element> = {
  "/admissions/process": () => <AdmissionProcess />,
  "/admissions/eligibility": () => <Eligibility />,
  "/admissions/fee-structure": () => <FeeStructure />,
  "/admissions/online-registration": () => <OnlineRegistration />,
};

function useActivePath() {
  for (const page of subPages) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [match] = useRoute(page.path);
    if (match) return page.path;
  }
  return null;
}

export default function Admissions() {
  const activePath = useActivePath();
  const ActiveComponent = componentMap[activePath || "/admissions/process"];
  const activeLabel = subPages.find((p) => p.path === activePath)?.label ?? "Admission Process";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Admissions</p>
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-white mb-4">{activeLabel}</h1>
            <p className="text-white/70 text-lg">St. Mary's CBSE School — Vashi, Navi Mumbai</p>
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
