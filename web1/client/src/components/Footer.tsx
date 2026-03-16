import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary font-bold text-xl">
                SM
              </div>
              <span style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold">
                St. Mary's
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              St. Mary's CBSE School, Vashi is part of The Malankara Orthodox Church Council of Bombay (MOCCB). Empowering learners through quality education and holistic development.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Academics</h3>
            <ul className="space-y-3">
              <li><Link href="/programs" className="text-primary-foreground/70 hover:text-white transition-colors">All Programs</Link></li>
              <li><Link href="/programs" className="text-primary-foreground/70 hover:text-white transition-colors">School of Business</Link></li>
              <li><Link href="/programs" className="text-primary-foreground/70 hover:text-white transition-colors">School of Technology</Link></li>
              <li><Link href="/programs" className="text-primary-foreground/70 hover:text-white transition-colors">School of Health</Link></li>
              <li><Link href="/programs" className="text-primary-foreground/70 hover:text-white transition-colors">Continuing Education</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Admissions</h3>
            <ul className="space-y-3">
              <li><Link href="/admissions" className="text-primary-foreground/70 hover:text-white transition-colors">How to Apply</Link></li>
              <li><Link href="/admissions" className="text-primary-foreground/70 hover:text-white transition-colors">Tuition & Fees</Link></li>
              <li><Link href="/admissions" className="text-primary-foreground/70 hover:text-white transition-colors">Financial Aid</Link></li>
              <li><Link href="/admissions" className="text-primary-foreground/70 hover:text-white transition-colors">Important Dates</Link></li>
              <li><Link href="/admissions" className="text-primary-foreground/70 hover:text-white transition-colors">Campus Tours</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">St. Mary's CBSE School<br/>Vashi, Navi Mumbai - 400703<br/>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">info@stmarysvashi.edu</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} St. Mary's CBSE School. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
