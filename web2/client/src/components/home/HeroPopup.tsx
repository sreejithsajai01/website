import { useState } from "react";
import { X, GraduationCap, Phone, Mail, ChevronRight, Sparkles } from "lucide-react";

export default function HeroPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setOpen(false)}
      >
        {/* Card */}
        <div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300 border-0 outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Banner */}
          <div className="bg-primary px-8 pt-8 pb-12 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-secondary/20"></div>

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-white text-2xl font-bold leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Admissions Open
            </h2>
            <p className="text-white/80 text-sm mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Academic Year 2026 – 2027
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-1 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full mt-3">
              <Sparkles className="w-3 h-3" />
              CBSE Affiliated
            </div>
          </div>

          {/* Wave divider */}
          <div style={{ background: 'hsl(222, 47%, 31%)', lineHeight: 0, fontSize: 0 }}>
            <svg viewBox="0 0 400 30" width="100%" height="30" preserveAspectRatio="none" style={{ display: 'block' }}>
              <path d="M0,0 C100,30 300,30 400,0 L400,30 L0,30 Z" fill="white" />
            </svg>
          </div>

          {/* Body */}
          <div className="px-8 pb-8 border-none" style={{ marginTop: '-1px' }}>
            <p className="text-muted-foreground text-sm text-center mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Join St. Mary's CBSE School and be part of a legacy of excellence, values, and holistic growth.
            </p>

            {/* Quick Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>Call us</p>
                  <p className="text-sm font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>Email us</p>
                  <p className="text-sm font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>info@stmarys.edu</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <a
              href="/enquiry"
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-colors mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Admission Enquiry <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(false)}
              className="w-full text-sm text-muted-foreground hover:text-primary transition-colors py-1"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
