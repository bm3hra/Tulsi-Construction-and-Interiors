import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/siteData';

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export default function FinalCta({ onOpenConsultation }: FinalCtaProps) {
  return (
    <section
      id="cta-section"
      className="py-16 sm:py-20 bg-[#71866A] text-white relative overflow-hidden"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Eyebrow */}
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E7EEE4] bg-white/15 px-3.5 py-1 rounded-full inline-block mb-4 border border-white/20">
          LET'S BUILD
        </span>

        {/* Title */}
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Have a Project in Mind?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
          Tell us about your construction, interior, renovation or turnkey project and let's discuss the possibilities. We serve clients across Ajmer and Pan Rajasthan.
        </p>

        {/* Three CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${BRAND.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-white text-[#26312B] font-semibold text-sm hover:bg-[#FAF8F3] transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 mr-2 text-[#71866A]" />
            <span>Call Now ({BRAND.phone})</span>
          </a>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>WhatsApp Enquiry</span>
          </a>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#26312B] text-white font-semibold text-sm hover:bg-black transition-colors shadow-sm cursor-pointer"
          >
            <span>Get Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#C9A77B]" />
          </button>
        </div>

      </div>
    </section>
  );
}
