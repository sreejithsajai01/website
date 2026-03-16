import { Bell, ChevronRight } from "lucide-react";

const notices = [
  { id: 1, date: "18 Nov 2025", title: "EXAMINATION TIME TABLE 2025-2026 (ISC)", isNew: true },
  { id: 2, date: "18 Nov 2025", title: "EXAMINATION TIME TABLE 2025-2026 (ICSE)", isNew: true },
  { id: 3, date: "06 Nov 2025", title: "Result Of SM Talentia 2025 Inter School Competition", isNew: false },
  { id: 4, date: "14 Jun 2025", title: "Circular and timetables ICSE and ISC 2025", isNew: false },
];

export default function NoticeBoard() {
  return (
    <div className="bg-primary text-primary-foreground relative overflow-hidden flex flex-col md:flex-row shadow-md border-b-4 border-secondary z-10">
      {/* Label Box */}
      <div className="bg-secondary text-primary font-bold py-3 px-6 md:w-64 flex items-center gap-2 justify-center md:justify-start flex-shrink-0 z-10 shadow-[4px_0_10px_rgba(0,0,0,0.1)]">
        <Bell className="h-5 w-5 animate-bounce" />
        <span className="uppercase tracking-wider">Notice Board</span>
      </div>

      {/* Marquee Content */}
      <div className="flex-1 overflow-hidden py-3 px-4 flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {notices.map((notice) => (
            <div key={notice.id} className="inline-flex items-center gap-3">
              <span className="text-secondary font-mono text-sm bg-primary-foreground/10 px-2 py-1 rounded">
                {notice.date}
              </span>
              <a href="#" className="hover:text-secondary transition-colors hover:underline underline-offset-4 font-medium">
                {notice.title}
              </a>
              {notice.isNew && (
                <span className="bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-sm animate-pulse">
                  NEW
                </span>
              )}
              <span className="text-primary-foreground/30 px-2">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <a 
        href="/notices" 
        className="hidden md:flex items-center gap-1 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-6 font-semibold transition-colors flex-shrink-0 border-l border-primary-foreground/20 text-sm uppercase tracking-wider"
      >
        View All <ChevronRight className="h-4 w-4" />
      </a>

      {/* Add this to index.css later or configure tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}