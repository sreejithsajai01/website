import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Curriculum from "./Curriculum";
import PrimarySchool from "./PrimarySchool";
import MiddleSchool from "./MiddleSchool";
import SeniorSecondary from "./SeniorSecondary";
import Calendar from "./Calendar";

export default function Academics() {
  const [matchCurriculum] = useRoute("/academics/curriculum");
  const [matchPrimary] = useRoute("/academics/primary-school");
  const [matchMiddle] = useRoute("/academics/middle-school");
  const [matchSenior] = useRoute("/academics/senior-secondary");
  const [matchCalendar] = useRoute("/calendar");
  const [matchBase] = useRoute("/academics");

  let ActiveComponent = Curriculum;
  let activeLabel = "Curriculum";

  if (matchCurriculum || matchBase) { ActiveComponent = Curriculum; activeLabel = "Curriculum"; }
  else if (matchPrimary) { ActiveComponent = PrimarySchool; activeLabel = "Primary School"; }
  else if (matchMiddle) { ActiveComponent = MiddleSchool; activeLabel = "Middle School"; }
  else if (matchSenior) { ActiveComponent = SeniorSecondary; activeLabel = "Senior Secondary"; }
  else if (matchCalendar) { ActiveComponent = Calendar; activeLabel = "Event Calendar"; }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Academics</p>
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
