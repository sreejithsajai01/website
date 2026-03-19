import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import History from "./History";
import SchoolMotto from "./SchoolMotto";
import VisionMission from "./VisionMission";
import FounderManager from "./FounderManager";
import ManagingTrustee from "./ManagingTrustee";
import AsstManagingTrustee from "./AsstManagingTrustee";
import PrincipalsMessage from "./PrincipalsMessage";
import ManagementBoard from "./ManagementBoard";
import SchoolNetwork from "./SchoolNetwork";

const subPages = [
  { label: "History", path: "/about/history", Component: History },
  { label: "School Motto", path: "/about/school-motto", Component: SchoolMotto },
  { label: "Vision & Mission", path: "/about/vision-mission", Component: VisionMission },
  { label: "Founder Manager — MOCCB", path: "/about/founder-manager", Component: FounderManager },
  { label: "President's Message", path: "/about/managing-trustee", Component: ManagingTrustee },
  { label: "Secretary's Message", path: "/about/asst-managing-trustee", Component: AsstManagingTrustee },
  { label: "Principal's Message", path: "/about/principals-message", Component: PrincipalsMessage },
  { label: "Management Team", path: "/about/management-team", Component: ManagementBoard },
  { label: "The MOCCB School Network", path: "/about/school-network", Component: SchoolNetwork },
];

export default function About() {
  const [matchHistory] = useRoute("/about/history");
  const [matchMotto] = useRoute("/about/school-motto");
  const [matchVision] = useRoute("/about/vision-mission");
  const [matchFounder] = useRoute("/about/founder-manager");
  const [matchManaging] = useRoute("/about/managing-trustee");
  const [matchAsst] = useRoute("/about/asst-managing-trustee");
  const [matchPrincipal] = useRoute("/about/principals-message");
  const [matchBoard] = useRoute("/about/management-team");
  const [matchNetwork] = useRoute("/about/school-network");

  let ActiveComponent = History;
  let activeLabel = "History";

  if (matchHistory) { ActiveComponent = History; activeLabel = "History"; }
  else if (matchMotto) { ActiveComponent = SchoolMotto; activeLabel = "School Motto"; }
  else if (matchVision) { ActiveComponent = VisionMission; activeLabel = "Vision & Mission"; }
  else if (matchFounder) { ActiveComponent = FounderManager; activeLabel = "Founder Manager — MOCCB"; }
  else if (matchManaging) { ActiveComponent = ManagingTrustee; activeLabel = "President Message"; }
  else if (matchAsst) { ActiveComponent = AsstManagingTrustee; activeLabel = "Secretary Message"; }
  else if (matchPrincipal) { ActiveComponent = PrincipalsMessage; activeLabel = "Principal's Message"; }
  else if (matchBoard) { ActiveComponent = ManagementBoard; activeLabel = "Management Team"; }
  else if (matchNetwork) { ActiveComponent = SchoolNetwork; activeLabel = "The MOCCB School Network"; }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-white mb-4">{activeLabel}</h1>
            <p className="text-white/70 text-lg">St. Mary's CBSE School — Vashi, Navi Mumbai</p>
          </div>
        </section>

        {/* Body */}
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
