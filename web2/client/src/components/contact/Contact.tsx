import { Link, useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Address from "./Address";
import PhonePage from "./Phone";
import EmailPage from "./Email";
import MapPage from "./Map";

const subPages = [
  { label: "Address", path: "/contact/address" },
  { label: "Phone", path: "/contact/phone" },
  { label: "Email", path: "/contact/email" },
  { label: "Map", path: "/contact/map" },
];

const componentMap: Record<string, React.ReactNode> = {
  "/contact/address": <Address />,
  "/contact/phone": <PhonePage />,
  "/contact/email": <EmailPage />,
  "/contact/map": <MapPage />,
};

function useActivePath() {
  for (const page of subPages) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [match] = useRoute(page.path);
    if (match) return page.path;
  }
  return null;
}

export default function Contact() {
  const activePath = useActivePath();
  const activeContent = activePath ? componentMap[activePath] : <Address />;
  const activeLabel = subPages.find((p) => p.path === activePath)?.label ?? "Address";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Contact Us</p>
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-white mb-4">{activeLabel}</h1>
            <p className="text-white/70 text-lg">St. Mary's CBSE School — Vashi, Navi Mumbai</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-72 shrink-0">
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden sticky top-28">
                <div className="bg-primary px-5 py-4">
                  <p className="text-white font-bold uppercase tracking-wider text-sm">Contact Us</p>
                </div>
                <nav className="flex flex-col">
                  {subPages.map((page) => {
                    const isActive = (activePath ?? "/contact/address") === page.path;
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
