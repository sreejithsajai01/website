import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OpenPositions from "./OpenPositions";

const subPages = [
  { label: "Open Positions", path: "/careers/open-positions" },
];

const componentMap: Record<string, () => JSX.Element> = {
  "/careers/open-positions": () => <OpenPositions />,
};

function useActivePath() {
  for (const page of subPages) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [match] = useRoute(page.path);
    if (match) return page.path;
  }
  return null;
}

export default function Careers() {
  const activePath = useActivePath();
  const ActiveComponent = componentMap[activePath || "/careers/open-positions"];
  const activeLabel = subPages.find((p) => p.path === activePath)?.label ?? "Open Positions";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Careers</p>
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
