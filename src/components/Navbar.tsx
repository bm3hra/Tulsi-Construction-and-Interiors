import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/siteData';
import TulsiLogo from './TulsiLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-xs border-b border-[#E3DED4] py-2 sm:py-2.5'
          : 'bg-[#FAF8F3]/85 backdrop-blur-xs py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Tulsi Brand Logo (Enlarged) */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="group flex items-center focus:outline-hidden py-0.5"
          >
            <TulsiLogo size="md" variant="horizontal" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-[#26312B] hover:text-[#71866A] transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#71866A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BRAND.rawPhone}`}
              id="header-phone-link"
              className="flex items-center space-x-2 text-sm font-medium text-[#26312B] hover:text-[#71866A] transition-colors px-3 py-2 rounded-md hover:bg-[#E7EEE4]/50"
            >
              <Phone className="w-4 h-4 text-[#71866A]" />
              <span className="tracking-tight">{BRAND.phone}</span>
            </a>
            
            <button
              type="button"
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-white bg-[#71866A] hover:bg-[#5d7056] rounded-md transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* Tablet & Mobile Header Controls */}
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
            {/* Tablet-only quick consultation button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold tracking-wide text-white bg-[#71866A] hover:bg-[#5d7056] rounded-md transition-all shadow-xs"
            >
              <span>Consultation</span>
            </button>

            <a
              href={`tel:${BRAND.rawPhone}`}
              aria-label="Call Tulsi Construction"
              className="p-2 sm:px-3 sm:py-2 rounded-md text-[#71866A] bg-[#E7EEE4]/70 hover:bg-[#E7EEE4] flex items-center space-x-1.5"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold">{BRAND.phone}</span>
            </a>

            <button
              type="button"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#26312B] hover:text-[#71866A] rounded-md focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#FAF8F3] border-b border-[#E3DED4] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-base font-medium text-[#26312B] hover:text-[#71866A] py-2 border-b border-[#E3DED4]/40"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 flex flex-col space-y-2.5">
              <a
                href={`tel:${BRAND.rawPhone}`}
                className="flex items-center justify-center space-x-2 py-2.5 px-4 rounded-md border border-[#E3DED4] text-[#26312B] font-medium text-sm bg-white"
              >
                <Phone className="w-4 h-4 text-[#71866A]" />
                <span>Call {BRAND.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 rounded-md bg-[#71866A] text-white font-medium text-sm shadow-xs flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
