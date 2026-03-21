import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Address from "./Address";
import PhonePage from "./Phone";
import EmailPage from "./Email";
import MapPage from "./Map";

export default function Contact() {
  const [matchAddress] = useRoute("/contact/address");
  const [matchPhone] = useRoute("/contact/phone");
  const [matchEmail] = useRoute("/contact/email");
  const [matchMap] = useRoute("/contact/map");
  const [matchBase] = useRoute("/contact");

  let ActiveComponent = Address;
  let activeLabel = "Address";

  if (matchAddress || matchBase) { ActiveComponent = Address; activeLabel = "Address"; }
  else if (matchPhone) { ActiveComponent = PhonePage; activeLabel = "Phone"; }
  else if (matchEmail) { ActiveComponent = EmailPage; activeLabel = "Email"; }
  else if (matchMap) { ActiveComponent = MapPage; activeLabel = "Map"; }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Contact Us</p>
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
