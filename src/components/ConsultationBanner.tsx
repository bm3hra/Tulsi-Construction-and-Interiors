import { MessageSquare, Phone, ArrowRight, Shield } from 'lucide-react';
import { BRAND } from '../data/siteData';

interface ConsultationBannerProps {
  onOpenConsultation: () => void;
}

export default function ConsultationBanner({ onOpenConsultation }: ConsultationBannerProps) {
  return (
    <section
      id="client-experiences"
      className="py-16 sm:py-20 bg-[#F3EEE5]/80 border-t border-[#E3DED4]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
          CLIENT EXPERIENCES
        </span>

        {/* Headline as dictated by rule */}
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
          Planning Your Next Project?
        </h2>

        <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4 mb-6" />

        {/* Narrative */}
        <p className="text-base sm:text-lg text-[#687068] max-w-2xl mx-auto leading-relaxed">
          Speak with Tulsi Construction & Interiors about your construction, interior, renovation or turnkey requirement. We approach every inquiry with transparent advice, technical clarity, and personal attention from day one.
        </p>

        {/* Pillars of Consultation */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-white p-4 rounded-xl border border-[#E3DED4]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#71866A] mb-1">
              Direct Discussion
            </div>
            <p className="text-xs text-[#687068]">
              Direct conversation with Kailash Moyal regarding feasibility and materials.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E3DED4]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C9A77B] mb-1">
              Site Assessment
            </div>
            <p className="text-xs text-[#687068]">
              Practical site walkthrough across Ajmer, Jaipur, and Rajasthan locations.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E3DED4]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C98262] mb-1">
              Clear Estimation
            </div>
            <p className="text-xs text-[#687068]">
              Transparent breakdown of structural phases, interior joinery, and timelines.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-md text-white bg-[#71866A] hover:bg-[#5d7056] shadow-xs transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <a
            href={`tel:${BRAND.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-md text-[#26312B] bg-white border border-[#E3DED4] hover:bg-[#FAF8F3] transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-[#71866A]" />
            <span>Call {BRAND.phone}</span>
          </a>
        </div>

        {/* Ethical commitment badge */}
        <div className="mt-8 inline-flex items-center space-x-2 text-xs text-[#687068]">
          <Shield className="w-3.5 h-3.5 text-[#71866A]" />
          <span>No fabricated reviews or artificial claims • Pure commitment to engineering and craftsmanship</span>
        </div>

      </div>
    </section>
  );
}
