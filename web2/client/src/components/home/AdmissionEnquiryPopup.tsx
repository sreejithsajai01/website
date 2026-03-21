import { useState } from "react";
import { X } from "lucide-react";
import bgImage from "@/assets/images/school-hero.png";

export default function AdmissionEnquiryPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        onClick={() => setOpen(false)}
      >
        {/* Container */}
        <div
          className="relative rounded-2xl shadow-2xl w-full max-w-3xl h-95 overflow-hidden animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background Image with Blue Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            {/* Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 via-blue-500/60 to-blue-400/70"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content Layer */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
             Academic Year 2026-2027
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-6 max-w-xl">
              Join St. Mary's CBSE School and be part of a legacy of excellence
            </p>

            {/* Single Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScAFnsEDCHib5d6f3cN1YQKhHTHGsiLW9CDPNz0DupKaDWzsw/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-white/90 font-bold py-2 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Enquiry Form
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
