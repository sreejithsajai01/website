import { BookOpen, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wide">
                St. Mary's <span className="text-accent italic font-normal">School</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              St. Mary's CBSE School, Vashi is part of The Malankara Orthodox Church Council of Bombay (MOCCB), dedicated to nurturing young minds with quality education.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-accent transition-colors">Academic Programs</a></li>
              <li><a href="#campus" className="hover:text-accent transition-colors">Campus Life</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Admissions Portal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Resources</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Parent Portal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Student Handbook</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">School Calendar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support St. Mary's</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Vashi, Navi Mumbai<br/>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@stmarysvashi.edu</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} St. Mary's School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
