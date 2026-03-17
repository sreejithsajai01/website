import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GeneralInformation from "./GeneralInformation";
import StaffDetails from "./StaffDetails";
import InfrastructureDetails from "./InfrastructureDetails";
import AcademicResults from "./AcademicResults";

export default function Disclosure() {
  const [matchGeneral] = useRoute("/disclosure/general-information");
  const [matchStaff] = useRoute("/disclosure/staff-details");
  const [matchInfra] = useRoute("/disclosure/infrastructure-details");
  const [matchResults] = useRoute("/disclosure/academic-results");
  const [matchBase] = useRoute("/disclosure");

  let ActiveComponent = GeneralInformation;
  let activeLabel = "General Information";

  if (matchGeneral || matchBase) { ActiveComponent = GeneralInformation; activeLabel = "General Information"; }
  else if (matchStaff) { ActiveComponent = StaffDetails; activeLabel = "Staff Details"; }
  else if (matchInfra) { ActiveComponent = InfrastructureDetails; activeLabel = "Infrastructure Details"; }
  else if (matchResults) { ActiveComponent = AcademicResults; activeLabel = "Academic Results"; }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Mandatory Public Disclosure</p>
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
