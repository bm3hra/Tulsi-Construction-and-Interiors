import { Phone, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { BRAND } from '../data/siteData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-[#FAF8F3]"
    >
      {/* Subtle architectural background grid accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#26312B_1px,transparent_1px),linear-gradient(to_bottom,#26312B_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Narrative & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2.5 self-start px-3.5 py-1.5 rounded-full bg-[#E7EEE4] border border-[#71866A]/20 text-[#71866A] text-xs font-semibold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TULSI CONSTRUCTION • INTERIORS • RENOVATION • TURNKEY</span>
            </div>

            {/* Main Headline with the User's Exact Motto */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-6.5xl font-bold text-[#26312B] leading-[1.12] tracking-tight">
              Turning Dreams into{' '}
              <span className="italic font-normal text-[#C98262] block sm:inline">
                Well-Designed Reality.
              </span>
            </h1>

            {/* Brand Motto Callout */}
            <div className="mt-4 py-2 px-3.5 bg-[#F3EEE5] border-l-4 border-[#71866A] rounded-r-md max-w-xl">
              <p className="text-xs sm:text-sm font-medium text-[#26312B] italic">
                “Tulsi Construction – Turning Dreams into Well-Designed Reality.”
              </p>
            </div>

            {/* Subheadline */}
            <p className="mt-4 text-base sm:text-lg text-[#687068] leading-relaxed max-w-2xl">
              Complete construction, interior designing, renovation, and turnkey project solutions across Rajasthan. Bringing architectural vision to life with disciplined on-site craftsmanship.
            </p>

            {/* Location highlight */}
            <div className="mt-4 flex items-center space-x-2 text-sm font-medium text-[#26312B]/80">
              <MapPin className="w-4 h-4 text-[#C98262] shrink-0" />
              <span>Based in Ajmer • Serving Pan Rajasthan</span>
            </div>

            {/* CTA Group */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                id="hero-primary-cta"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-md text-white bg-[#71866A] hover:bg-[#5d7056] shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BRAND.rawPhone}`}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-md text-[#26312B] bg-[#F3EEE5] hover:bg-[#EEE3D3] border border-[#E3DED4] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-[#71866A]" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-[#E3DED4] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#26312B]">360°</div>
                <div className="text-xs text-[#687068] mt-0.5">End-to-End Solutions</div>
              </div>
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#71866A]">1 Team</div>
                <div className="text-xs text-[#687068] mt-0.5">Single-Point Coordination</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#C98262]">Ajmer</div>
                <div className="text-xs text-[#687068] mt-0.5">Pan Rajasthan Service</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Floating Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E3DED4] bg-white group">
              <div className="aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Contemporary luxury villa architectural construction with warm natural lighting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#26312B]/60 via-transparent to-transparent opacity-80" />
                
                {/* Bottom photo tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium tracking-wide uppercase bg-black/40 backdrop-blur-xs border border-white/20 mb-1">
                    Turnkey Architectural Execution
                  </span>
                  <p className="text-sm font-light text-white/90 drop-shadow-xs">
                    Harmonizing structural durability with contemporary Rajasthan elegance.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div
              id="hero-floating-card"
              className="absolute bottom-3 left-2 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-5 shadow-lg border border-[#E3DED4] max-w-[calc(100%-1rem)] sm:max-w-xs transition-transform hover:-translate-y-1 z-20"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-[#E7EEE4] text-[#71866A] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs tracking-wider uppercase font-semibold text-[#71866A]">
                    Serving Rajasthan
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-[#26312B] mt-0.5">
                    Construction • Interiors • Renovation • Turnkey
                  </p>
                  <p className="text-[11px] text-[#687068] mt-1">
                    Managed by Kailash Moyal & Team
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative soft accent shape */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#EEE3D3] rounded-full filter blur-2xl -z-10 opacity-70" />
          </div>

        </div>
      </div>
    </section>
  );
}
