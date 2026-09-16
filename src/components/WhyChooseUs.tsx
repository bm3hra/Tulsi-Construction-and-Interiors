import { Layers, Compass, ShieldCheck, Sliders, UserCheck, MapPin } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/siteData';

export default function WhyChooseUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#71866A]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C9A77B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#71866A]" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-[#C98262]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#71866A]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#C98262]" />;
      default:
        return <Layers className="w-5 h-5 text-[#71866A]" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-16 sm:py-24 bg-[#F3EEE5]/60 border-t border-[#E3DED4] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            WHY TULSI
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            Built Around Your Requirements
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#687068]">
            A reliable construction and interior partner offering clear communication, disciplined execution, and local accountability.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#E3DED4] shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-[#FAF8F3] border border-[#E3DED4] flex items-center justify-center mb-5">
                {getIcon(item.iconName)}
              </div>

              <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#26312B] mb-2.5">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#687068] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
