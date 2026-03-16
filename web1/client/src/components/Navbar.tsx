import { Link, useLocation } from "wouter";
import { Menu, Search, X, BookOpen, GraduationCap, Globe, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about", icon: BookOpen },
    { name: "Admissions", href: "/admissions", icon: GraduationCap },
    { name: "Academics", href: "/academics", icon: Users },
    { name: "Facilities", href: "/facilities", icon: Globe },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white text-primary shadow-md" : "bg-black/20 text-white backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex flex-col items-center border-2 border-current px-2 py-1">
              <span className="text-xs font-bold tracking-[0.3em] uppercase leading-none">St.</span>
              <span className="text-xl font-bold uppercase leading-none">Mary's</span>
            </div>
            <div className="hidden sm:block h-12 w-px bg-current/30 mx-2" />
            <span style={{ fontFamily: "var(--font-display)" }} className="hidden sm:block text-sm font-medium uppercase tracking-widest">
              St. Mary's CBSE School
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors duration-300 relative group/link ${
                  location === link.href ? "text-accent" : ""
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:text-accent transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/apply" 
              className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 border border-transparent hover:border-accent"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-current"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden absolute top-20 left-0 right-0 bg-card text-card-foreground shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted font-medium transition-colors"
            >
              <link.icon className="w-5 h-5 text-primary" />
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <Link 
            href="/apply" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center mt-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input 
              placeholder="Search for programs, pages, or information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            {searchQuery && (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">Search results for "{searchQuery}"</p>
                <div className="space-y-2">
                  <Link href="/about" className="block p-3 hover:bg-muted rounded-lg">
                    <div className="font-bold">About Us</div>
                    <div className="text-sm text-muted-foreground">Learn about St. Mary's CBSE School</div>
                  </Link>
                  <Link href="/admissions" className="block p-3 hover:bg-muted rounded-lg">
                    <div className="font-bold">Admissions</div>
                    <div className="text-sm text-muted-foreground">Apply to St. Mary's CBSE School</div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
