import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navItems = [
  {
    name: "About Us",
    href: "/about",
    sub: [
      { name: "History", href: "/about/history" },
      { name: "School Motto", href: "/about/school-motto" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Founder Manager — MOCCB", href: "/about/founder-manager" },
      { name: "Managing Trustee — MOCCB", href: "/about/managing-trustee" },
      { name: "Asst. Managing Trustee — MOCCB", href: "/about/asst-managing-trustee" },
      { name: "Principal's Message", href: "/about/principals-message" },
      { name: "Management / Board Members", href: "/about/management-board" },
      { name: "The MOCCB School Network", href: "/about/school-network" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    sub: [
      { name: "Curriculum", href: "/academics/curriculum" },
      { name: "Primary School", href: "/academics/primary-school" },
      { name: "Middle School", href: "/academics/middle-school" },
      { name: "Senior Secondary", href: "/academics/senior-secondary" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    sub: [
      { name: "Admission Process", href: "/admissions/process" },
      { name: "Eligibility", href: "/admissions/eligibility" },
      { name: "Fee Structure", href: "/admissions/fee-structure" },
      { name: "Online Registration / Enquiry Form", href: "/admissions/online-registration" },
    ],
  },
  {
    name: "Infrastructure",
    href: "/infrastructure",
    sub: [
      { name: "Library", href: "/infrastructure/library" },
      { name: "Laboratories", href: "/infrastructure/laboratories" },
      { name: "Sports Facilities", href: "/infrastructure/sports-facilities" },
    ],
  },
  {
    name: "Gallery",
    href: "/gallery",
    sub: [
      { name: "Photo Gallery", href: "/gallery/photos" },
      { name: "Video Gallery", href: "/gallery/videos" },
    ],
  },
  {
    name: "Disclosure",
    href: "/disclosure",
    sub: [
      { name: "General Information", href: "/disclosure/general-information" },
      { name: "Staff Details", href: "/disclosure/staff-details" },
      { name: "Infrastructure Details", href: "/disclosure/infrastructure-details" },
      { name: "Academic Results", href: "/disclosure/academic-results" },
    ],
  },
  {
    name: "Careers",
    href: "/careers",
    sub: [
      { name: "Open Positions", href: "/careers/open-positions" },
    ],
  },
  {
    name: "Student Life",
    href: "/student-life",
    sub: [
      { name: "Clubs", href: "/student-life/clubs" },
      { name: "Sports", href: "/student-life/sports" },
      { name: "Activities", href: "/student-life/activities" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
    sub: [
      { name: "Address", href: "/contact/address" },
      { name: "Phone", href: "/contact/phone" },
      { name: "Email", href: "/contact/email" },
      { name: "Map", href: "/contact/map" },
    ],
  },
];

function DropdownItem({ item, onClose, isLast }: { item: typeof navItems[0]; onClose: () => void; isLast?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
      >
        {item.name}
        {item.sub.length > 0 && (
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        )}
      </Link>
      {item.sub.length > 0 && (
        <div
          className={`absolute top-full ${isLast ? 'right-0' : 'left-0'} mt-1 w-64 bg-white rounded-xl shadow-xl border border-border z-50 overflow-hidden transition-all duration-200 origin-top ${
            open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
          }`}
        >
          {item.sub.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={onClose}
              className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors border-b border-border last:border-0"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="mailto:cbsestmarysvashi@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">cbsestmarysvashi@gmail.com</span>
            </a>
            <a href="tel:02227662725" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">022-27662725</span>
            </a>
          </div>
          <div className="flex gap-4 font-semibold">
            <Link href="/login" className="hover:text-secondary transition-colors">Student Login</Link>
            <Link href="/enquiry" className="hover:text-secondary transition-colors text-secondary">Pay Fee Online</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary font-sans font-bold text-2xl shadow-md border-2 border-secondary">
              SM
            </div>
            <div>
              <h1 className="text-2xl font-sans font-bold text-primary leading-tight m-0">St. Mary's School</h1>
              <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">To work and serve in Love</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-5 items-center">
            <Link href="/" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider">
              Home
            </Link>
            {navItems.map((item, index) => (
              <DropdownItem key={item.name} item={item} onClose={() => {}} isLast={index >= navItems.length - 2} />
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background absolute w-full shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col">
            <Link
              href="/"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase px-4 py-3 border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-border">
                <button
                  onClick={() => setMobileOpen(mobileOpen === item.name ? null : item.name)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase px-4 py-3"
                >
                  {item.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpen === item.name ? "rotate-180" : ""}`} />
                </button>
                {mobileOpen === item.name && (
                  <div className="pl-4 flex flex-col border-l-2 border-primary/20 ml-4 mb-2">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-sm text-foreground/70 hover:text-primary transition-colors py-2"
                        onClick={() => { setIsOpen(false); setMobileOpen(null); }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
