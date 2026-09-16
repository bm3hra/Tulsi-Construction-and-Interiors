import { Building2, Sofa, Hammer, KeyRound, MapPin } from 'lucide-react';
import { TRUST_BAR_ITEMS } from '../data/siteData';

export default function TrustBar() {
  const iconMap = [
    <Building2 key="1" className="w-4 h-4 text-[#71866A]" />,
    <Sofa key="2" className="w-4 h-4 text-[#C9A77B]" />,
    <Hammer key="3" className="w-4 h-4 text-[#C98262]" />,
    <KeyRound key="4" className="w-4 h-4 text-[#71866A]" />,
    <MapPin key="5" className="w-4 h-4 text-[#C98262]" />
  ];

  return (
    <div
      id="trust-bar"
      aria-label="Core competencies"
      className="border-y border-[#E3DED4] bg-[#F3EEE5]/80 py-4 sm:py-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-medium text-[#26312B]">
          {TRUST_BAR_ITEMS.map((item, idx) => (
            <div
              key={item}
              className="flex items-center space-x-2.5 py-1 px-2 rounded-sm"
            >
              <span className="p-1 rounded bg-white/70 shadow-2xs">
                {iconMap[idx]}
              </span>
              <span className="tracking-wide uppercase text-[11px] sm:text-xs font-semibold text-[#26312B]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
