import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Bell, Calendar, Download, ExternalLink } from "lucide-react";

const notices = [
  { id: 1, date: "18 Nov 2025", title: "EXAMINATION TIME TABLE 2025-2026 (ISC)", category: "Examination", isNew: true },
  { id: 2, date: "18 Nov 2025", title: "EXAMINATION TIME TABLE 2025-2026 (ICSE)", category: "Examination", isNew: true },
  { id: 3, date: "06 Nov 2025", title: "Result Of SM Talentia 2025 Inter School Competition", category: "Results", isNew: false },
  { id: 4, date: "14 Jun 2025", title: "Circular and timetables ICSE and ISC 2025", category: "Circular", isNew: false },
  { id: 5, date: "10 Jun 2025", title: "Summer Vacation Assignment 2025", category: "Academics", isNew: false },
];

export default function Notices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="bg-primary p-3 rounded-full text-white">
              <Bell className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-primary">Official Notices</h1>
          </div>

          <div className="space-y-4">
            {notices.map((notice) => (
              <div key={notice.id} className="bg-white p-6 rounded-xl shadow-sm border border-border hover:border-primary transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/5 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">{notice.category}</span>
                        {notice.isNew && (
                          <span className="bg-destructive text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">NEW</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-primary leading-tight">{notice.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">Published on {notice.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="flex items-center gap-2 bg-muted hover:bg-muted-foreground/10 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                      <Download className="h-4 w-4" /> PDF
                    </button>
                    <button className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm">
                      <ExternalLink className="h-4 w-4" /> View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}