import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center text-primary font-sans font-bold text-xl">
                SM
              </div>
              <h2 className="text-xl font-sans font-bold text-primary-foreground m-0">St. Mary's CBSE School</h2>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              St Mary's CBSE School Vashi is run by The Malankara Orthodox Church Council of Bombay (MOCCB) which manages and operates the St. Mary's Group of Institutions in various parts of Maharashtra & Gujarat. We are committed to providing quality education and nurturing the overall development of our students.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/stmaryscbsevashi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About School", href: "/about" },
                { name: "Admission Procedure", href: "/admissions/process" },
                
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors flex items-center gap-2">
                    <span className="text-secondary text-xs">▹</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary uppercase tracking-wider">Important Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Student Login", href: "/student-login" },
                { name: "Contact Us", href: "/contact" },
                { name: "Enquiry", href: "/enquiry" },
                { name: "Event-calender", href: "/about/event-calendar" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors flex items-center gap-2">
                    <span className="text-secondary text-xs">▹</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <a href="https://maps.google.com/?q=Dr.+Mar+Theophilus+Marg+Sector+10A+Vashi+Navi+Mumbai" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  Dr. Mar Theophilus Marg,<br />
                  Sector 10A, Vashi,<br />
                  Navi Mumbai - 400703
                </a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 text-sm items-center">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:022-27662725" className="hover:text-secondary transition-colors">022-27662725</a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 text-sm items-center">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:cbsestmarysvashi@gmail.com" className="hover:text-secondary transition-colors">cbsestmarysvashi@gmail.com</a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 text-sm items-center">
                <Globe className="w-5 h-5 text-secondary shrink-0" />
                <a href="https://stmarysvashi.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">stmarysvashi.in</a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 text-sm items-center">
                <Instagram className="w-5 h-5 text-secondary shrink-0" />
                <a href="https://www.instagram.com/stmaryscbsevashi" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">stmaryscbsevashi</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} St. Mary's School. All Rights Reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Designed & Developed by <a href="https://www.aionpixel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Aionpixel Technologies Pvt. Ltd</a>
          </p>
        </div>
      </div>
    </footer>
  );
}