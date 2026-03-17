import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutSubLinks = [
  { name: "History", href: "/about/history" },
  { name: "School Motto", href: "/about/school-motto" },
  { name: "Vision & Mission", href: "/about/vision-mission" },
  { name: "Founder Manager — MOCCB", href: "/about/founder-manager" },
  { name: "Managing Trustee — MOCCB", href: "/about/managing-trustee" },
  { name: "Asst. Managing Trustee — MOCCB", href: "/about/asst-managing-trustee" },
  { name: "Principal's Message", href: "/about/principals-message" },
  { name: "Management / Board Members", href: "/about/management-board" },
  { name: "The MOCCB School Network", href: "/about/school-network" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="mailto:info@stmarys.edu" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@stmarys.edu</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
          </div>
          <div className="flex gap-4 font-semibold">
            <Link href="/login" className="hover:text-secondary transition-colors">Student Login</Link>
            <Link href="/pay-fee" className="hover:text-secondary transition-colors text-secondary">Pay Fee Online</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* Using a placeholder shield icon for logo */}
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary font-sans font-bold text-2xl shadow-md border-2 border-secondary">
              SM
            </div>
            <div>
              <h1 className="text-2xl font-sans font-bold text-primary leading-tight m-0">St. Mary's School</h1>
              <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">To work and serve in Love</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider">Home</Link>

            {/* About Us Dropdown — hover */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider">
                About Us <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border z-50 overflow-hidden transition-all duration-200 origin-top ${
                  aboutOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                {aboutSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors border-b border-border last:border-0"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background absolute w-full shadow-lg">
          <nav className="flex flex-col gap-1">
            <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase px-2 py-2" onClick={() => setIsOpen(false)}>Home</Link>

            {/* Mobile About Accordion */}
            <div>
              <button
                onClick={() => setMobileAboutOpen((o) => !o)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase px-2 py-2"
              >
                About Us <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 flex flex-col gap-1 border-l-2 border-primary/20 ml-2 mb-1">
                  {aboutSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors py-1.5"
                      onClick={() => { setIsOpen(false); setMobileAboutOpen(false); }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}