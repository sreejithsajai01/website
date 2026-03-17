import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              <h1 className="text-2xl font-sans font-bold text-primary leading-tight m-0">St. Mary's CBSE School</h1>
              <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">To work and serve in Love</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
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
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase"
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