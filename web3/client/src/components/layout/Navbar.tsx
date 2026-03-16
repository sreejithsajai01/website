import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Campus Life", href: "#campus" },
    { name: "Admissions", href: "#contact" },
  ];

  // Helper to handle smooth scrolling for anchor links
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location !== href) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-lg" : "bg-primary py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary transform group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold tracking-wide text-white">
              St. Mary's <span className="text-accent font-normal italic">School</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="text-white/90 hover:text-accent font-medium text-sm tracking-wide transition-colors hover-underline"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-6 py-2.5 rounded-full bg-accent text-primary font-bold text-sm hover:bg-white transition-colors duration-300 shadow-lg shadow-accent/20"
            >
              Inquire Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: '72px' }}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-white text-2xl font-display font-medium border-b border-white/10 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="mt-4 px-6 py-4 rounded-xl bg-accent text-primary font-bold text-center text-lg shadow-xl"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </header>
  );
}
