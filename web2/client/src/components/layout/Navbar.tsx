import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import schoolLogo from "../../assets/images/school.png";

const navItems = [
  {
    name: "About Us",
    href: "/about/about",
    sub: [
      { name: "About", href: "/about/about" },
      { name: "School Motto", href: "/about/school-motto" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "President's Message", href: "/about/managing-trustee" },
      { name: "Principal's Message", href: "/about/principals-message" },
      { name: "Management Team", href: "/about/management-team" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    sub: [
      { name: "Curriculum", href: "/academics/curriculum" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    sub: [
      { name: "Admission Process", href: "/admissions/process" },
    ],
  },
  {
    name: "Infrastructure",
    href: "/infrastructure",
    sub: [
      { name: "Facilities", href: "/infrastructure" },
    ],
  },
  {
    name: "Gallery",
    href: "/gallery",
    sub: [],
  },
  {
    name: "Contact Us",
    href: "/contact/address",
    sub: [],
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
        className="flex items-center gap-1 text-xs font-semibold text-foreground/80 hover:text-yellow-500 transition-colors uppercase tracking-wider whitespace-nowrap py-2 px-1 relative group"
      >
        {item.name}
        {item.sub?.length > 0 && (
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        )}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      {item.sub?.length > 0 && (
        <div
          className={`absolute top-full ${isLast ? 'right-0' : 'left-0'} w-64 bg-white rounded-xl shadow-xl border border-border z-50 overflow-hidden transition-all duration-200 origin-top ${
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
            <Link href="/login" className="hover:text-secondary transition-colors"></Link>
            <Link href="/enquiry" className="hover:text-secondary transition-colors text-secondary"></Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full px-2 sm:px-4">
        <div className="flex h-auto py-2 items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-1.5 flex-shrink-0 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <img
                src={schoolLogo}
                alt="St. Mary's CBSE School Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <h1 className="text-xs sm:text-sm lg:text-base font-sans font-bold text-primary leading-tight m-0">St. Mary's CBSE School</h1>
              <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase leading-tight hidden sm:block">Spreading Light</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1 lg:gap-2 items-center ml-auto flex-shrink-0">
            <Link href="/" className="text-xs font-semibold text-foreground/80 hover:text-yellow-500 transition-colors uppercase tracking-wider whitespace-nowrap px-1 relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {navItems.map((item, index) => (
              <DropdownItem key={item.name} item={item} onClose={() => {}} isLast={index >= navItems.length - 2} />
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-foreground flex-shrink-0" onClick={() => setIsOpen(!isOpen)}>
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
                {mobileOpen === item.name && item.sub && (
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
