import { CheckCircle2, User, MapPin } from 'lucide-react';
import { BRAND, ABOUT_STATS } from '../data/siteData';
import DirectorProfile from './DirectorProfile';

interface AboutProps {
  onOpenConsultation: () => void;
}

export default function About({ onOpenConsultation }: AboutProps) {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#FAF8F3] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            ABOUT TULSI
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            One Team. One Vision. Complete Execution.
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Architectural Site Imagery with Director Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E3DED4] shadow-md bg-white">
              <div className="aspect-4/3 sm:aspect-16/11 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Construction supervision and architectural planning on site in Rajasthan"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Leadership badge */}
              <div className="p-5 sm:p-6 bg-white border-t border-[#E3DED4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#E7EEE4] flex items-center justify-center text-[#71866A] shrink-0 font-editorial font-bold text-lg">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#26312B] leading-none">
                      {BRAND.contactPerson}
                    </h3>
                    <p className="text-xs text-[#687068] mt-1">
                      Project Director & Leadership • Tulsi Construction
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-[#71866A] bg-[#E7EEE4] px-3 py-1.5 rounded-md self-start sm:self-auto font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C98262]" />
                  <span>{BRAND.location}</span>
                </div>
              </div>
            </div>

            {/* Subtle background offset frame */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C9A77B]/30 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Editorial narrative & factual stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-4 rounded-xl bg-[#E7EEE4]/60 border border-[#71866A]/20">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#71866A] block mb-1">
                OUR PHILOSOPHY
              </span>
              <p className="font-editorial text-lg sm:text-xl font-bold text-[#26312B] italic">
                “Tulsi Construction – Turning Dreams into Well-Designed Reality.”
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#26312B] leading-relaxed font-normal">
              Tulsi Construction & Interiors provides complete solutions for construction, interior designing, renovation, and turnkey projects across Rajasthan.
            </p>

            <p className="text-sm sm:text-base text-[#687068] leading-relaxed">
              Based in Ajmer, our approach brings construction and interior execution together so clients can coordinate their entire project through one accountable, professional team. No conflicting contractors, no miscommunicated blueprints.
            </p>

            <p className="text-sm sm:text-base text-[#687068] leading-relaxed">
              Whether it is a new luxury villa, commercial office, complete home transformation, or specialized interior renovation, we focus on practical planning, thoughtful design, and quality-oriented craftsmanship tailored to regional conditions.
            </p>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#71866A] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#26312B]">
                  Direct Site Supervision & On-Site Quality Checks
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#71866A] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#26312B]">
                  Transparent Material Selection & Procurement
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#71866A] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#26312B]">
                  Unified Civil & Interior Workflow Execution
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#71866A] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#26312B]">
                  Pan Rajasthan Deployment Capability
                </span>
              </div>
            </div>

            {/* Factual Statistics (strictly complying with no fake numbers) */}
            <div className="pt-6 border-t border-[#E3DED4] grid grid-cols-3 gap-4">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E3DED4] shadow-2xs text-center sm:text-left"
                >
                  <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#71866A]">
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold text-[#26312B] mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#687068] mt-0.5 hidden sm:block">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="text-sm font-semibold text-[#71866A] hover:text-[#5d7056] inline-flex items-center space-x-1.5 transition-colors cursor-pointer group"
              >
                <span>Discuss your project with Kailash Moyal</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>

        {/* Dedicated Kailash Moyal (Founder & Project Director) Showcase */}
        <DirectorProfile onOpenConsultation={onOpenConsultation} />

      </div>
    </section>
  );
}
