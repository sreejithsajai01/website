import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Clubs from "./Clubs";
import Sports from "./Sports";
import Activities from "./Activities";

export default function StudentLife() {
  const [matchClubs] = useRoute("/student-life/clubs");
  const [matchSports] = useRoute("/student-life/sports");
  const [matchActivities] = useRoute("/student-life/activities");
  const [matchBase] = useRoute("/student-life");

  let ActiveComponent = Clubs;
  let activeLabel = "Clubs";

  if (matchClubs || matchBase) { ActiveComponent = Clubs; activeLabel = "Clubs"; }
  else if (matchSports) { ActiveComponent = Sports; activeLabel = "Sports"; }
  else if (matchActivities) { ActiveComponent = Activities; activeLabel = "Activities"; }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Student Life</p>
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
