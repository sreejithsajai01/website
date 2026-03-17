import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Bell, Calendar, Download, ExternalLink } from "lucide-react";

const notices = [
  { id: 1, date: "15 Mar 2026", title: "CBSE Stream Introduction - Admission Form Deadline Today", category: "Admissions", isNew: true, link: "#cbse-announcement" },
  { id: 2, date: "01 Mar 2026", title: "CBSE Stream Launch from Academic Year 2026-2027 (Nursery to Std II)", category: "Announcement", isNew: true, link: "#cbse-announcement" },
  { id: 3, date: "06 Nov 2025", title: "Result Of SM Talentia 2025 Inter School Competition", category: "Results", isNew: false },
  { id: 4, date: "14 Jun 2025", title: "Circular and timetables CBSE 2025", category: "Circular", isNew: false },
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
                    {notice.link && notice.link.includes("cbse") ? (
                      <a href={notice.link} className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm">
                        <ExternalLink className="h-4 w-4" /> View
                      </a>
                    ) : (
                      <>
                        <button className="flex items-center gap-2 bg-muted hover:bg-muted-foreground/10 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                          <Download className="h-4 w-4" /> PDF
                        </button>
                        <button className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm">
                          <ExternalLink className="h-4 w-4" /> View
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CBSE Announcement Section */}
          <div id="cbse-announcement" className="mt-16 bg-primary/5 border-l-4 border-primary rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-2">St. Mary's CBSE School, Vashi</h2>
            <p className="text-muted-foreground mb-6">CBSE Stream Introduction - Academic Year 2026-2027</p>

            <div className="space-y-4 text-foreground/80">
              <p className="text-lg font-semibold text-primary">Dear Parents,</p>
              
              <p>Greetings from St. Mary's.</p>
              
              <p>
                As informed during the recent Parent–Teacher Meeting, we are pleased to announce the introduction of the <span className="font-bold">CBSE stream</span> in our institution from the Academic Year <span className="font-bold">2026–2027</span>, starting from <span className="font-bold">Nursery to Standard II</span>.
              </p>

              <p>
                Parents who are interested in shifting their child from the State Board to the CBSE stream are requested to kindly fill in the Google Form by scanning the QR code given above or the link provided below.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                <h3 className="font-bold text-primary mb-4">Please note:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Submission of the form only indicates your interest in the CBSE stream.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Admissions will be granted on a <span className="font-semibold">first-come, first-served basis</span>, as there will initially be one division per class and seats will be limited.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Priority will be given to existing students.</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Remaining seats, if any, will be offered to external applicants based on availability.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                <p className="text-lg font-bold text-red-600 mb-2">Last date to submit the form: 15th March 2026</p>
                <p>
                  We request you to submit the form within the given time to help us plan the admission process smoothly.
                </p>
              </div>

              <p className="text-lg font-semibold text-primary mt-8">Regards</p>
              <p>St. Mary's CBSE School, Vashi</p>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/20">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScAFnsEDCHib5d6f3cN1YQKhHTHGsiLW9CDPNz0DupKaDWzsw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Fill CBSE Stream Interest Form
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
