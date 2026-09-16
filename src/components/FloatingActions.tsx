import { MessageCircle, Phone } from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function FloatingActions() {
  return (
    <div
      id="floating-contact-buttons"
      className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end space-y-2.5"
    >
      {/* WhatsApp Button */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Kailash Moyal"
        className="group flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${BRAND.rawPhone}`}
        aria-label="Direct Call to Tulsi Construction"
        className="group flex items-center space-x-2 bg-[#71866A] hover:bg-[#5d7056] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          Call Now
        </span>
      </a>
    </div>
  );
}
