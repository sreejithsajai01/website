import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hammer } from "lucide-react";
import { useLocation } from "wouter";

// A beautiful placeholder for Admissions, International, and Student Life pages
export default function Placeholder() {
  const [location] = useLocation();
  const pageName = location.split('/')[1] 
    ? location.split('/')[1].charAt(0).toUpperCase() + location.split('/')[1].slice(1).replace('-', ' ') 
    : 'Page';

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary">
        <Navbar />
      </div>

      <main className="flex-1 flex items-center justify-center bg-muted p-4">
        <div className="max-w-md w-full bg-card p-10 rounded-3xl shadow-xl text-center border border-border">
          <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Hammer className="w-10 h-10 text-accent-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {pageName}
          </h1>
          <p className="text-muted-foreground mb-8">
            This section of the St. Mary's CBSE School website is currently under construction. Check back soon for updates!
          </p>
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            Return Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
