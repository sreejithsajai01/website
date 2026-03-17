import { Link, useRoute } from "wouter";
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
  { label: "History", path: "/about/history" },
  { label: "School Motto", path: "/about/school-motto" },
  { label: "Vision & Mission", path: "/about/vision-mission" },
  { label: "Founder Manager — MOCCB", path: "/about/founder-manager" },
  { label: "Managing Trustee — MOCCB", path: "/about/managing-trustee" },
  { label: "Asst. Managing Trustee — MOCCB", path: "/about/asst-managing-trustee" },
  { label: "Principal's Message", path: "/about/principals-message" },
  { label: "Management / Board Members", path: "/about/management-board" },
  { label: "The MOCCB School Network", path: "/about/school-network" },
];

const componentMap: Record<string, React.ReactNode> = {
  "/about/history": <History />,
  "/about/school-motto": <SchoolMotto />,
  "/about/vision-mission": <VisionMission />,
  "/about/founder-manager": <FounderManager />,
  "/about/managing-trustee": <ManagingTrustee />,
  "/about/asst-managing-trustee": <AsstManagingTrustee />,
  "/about/principals-message": <PrincipalsMessage />,
  "/about/management-board": <ManagementBoard />,
  "/about/school-network": <SchoolNetwork />,
};

function useActivePath() {
  for (const page of subPages) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [match] = useRoute(page.path);
    if (match) return page.path;
  }
  return null;
}

export default function About() {
  const activePath = useActivePath();
  const activeContent = activePath ? componentMap[activePath] : <History />;
  const activeLabel = subPages.find((p) => p.path === activePath)?.label ?? "History";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-white mb-4">{activeLabel}</h1>
            <p className="text-white/70 text-lg">St. Mary's CBSE School — Vashi, Navi Mumbai</p>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden sticky top-28">
                <div className="bg-primary px-5 py-4">
                  <p className="text-white font-bold uppercase tracking-wider text-sm">About Us</p>
                </div>
                <nav className="flex flex-col">
                  {subPages.map((page) => {
                    const isActive = (activePath ?? "/about/history") === page.path;
                    return (
                      <Link
                        key={page.path}
                        href={page.path}
                        className={`px-5 py-3 text-sm font-medium border-b border-border last:border-0 transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-bold border-l-4 border-l-primary"
                            : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                        }`}
                      >
                        {page.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm p-8 lg:p-10">
              {activeContent}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
