import { Phone, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { BRAND } from '../data/siteData';
import TulsiLogo from './TulsiLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#26312B] text-[#FAF8F3] pt-16 pb-12 border-t border-[#26312B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Editorial Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/10 inline-block shadow-inner">
              <TulsiLogo size="lg" variant="horizontal" className="[&_span]:text-white! [&_.text-\[\#A6652C\]]:text-[#F59E0B]!" />
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Complete construction, interior designing, renovation and turnkey project solutions across Rajasthan.
            </p>

            <div className="text-xs text-[#F59E0B] italic font-medium bg-white/5 py-2 px-3 rounded border border-white/10">
              “Tulsi Construction – Turning Dreams into Well-Designed Reality.”
            </div>

            <div className="pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-medium text-[#C9A77B] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {BRAND.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C9A77B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Process</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C9A77B]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Complete Construction</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Interior Designing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Structural Renovation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Turnkey Project Execution</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Residential Villas & Homes</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Commercial & Office Spaces</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C9A77B]">
              Contact Details
            </h4>
            
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C98262] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">Ajmer, Rajasthan, India</div>
                  <div className="text-xs text-white/60">Serving Pan Rajasthan</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#71866A] shrink-0" />
                <a href={`tel:${BRAND.rawPhone}`} className="hover:text-white transition-colors font-medium">
                  {BRAND.phone}
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#C9A77B] shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors text-xs break-all">
                  {BRAND.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-white/50">
                Key Contact: Kailash Moyal
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © 2026 Tulsi Construction & Interiors. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span>Ajmer • Pan Rajasthan Service</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
