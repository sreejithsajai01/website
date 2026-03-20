import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@/assets/images/school-hero.png";

export default function ComingSoon() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-primary/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
      <div className="relative z-10 text-center max-w-md px-4">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Clock className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Great things are on the way!
       We’re updating this page to serve you better. Thank you for your patience—we can’t wait to welcome you back.</h1>
        <p className="text-white/90 text-lg mb-8 drop-shadow-md">
        </p>
        <Link href="/">
          <a className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
