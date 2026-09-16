import { Building2, Sofa, Hammer, KeyRound, House, Building, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#71866A]" />;
      case 'Sofa':
        return <Sofa className="w-6 h-6 text-[#C9A77B]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#C98262]" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-[#71866A]" />;
      case 'House':
        return <House className="w-6 h-6 text-[#C9A77B]" />;
      case 'Building':
        return <Building className="w-6 h-6 text-[#C98262]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#71866A]" />;
    }
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-[#F3EEE5]/60 border-t border-[#E3DED4] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            OUR SERVICES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            Complete Solutions Under One Roof
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#687068]">
            From the first idea to the finished space.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#E3DED4] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Top Bar with Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E3DED4] group-hover:bg-[#E7EEE4]/50 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#E3DED4] group-hover:text-[#C9A77B] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#26312B] mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#687068] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Scope chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.scope.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-medium bg-[#FAF8F3] text-[#26312B] px-2.5 py-1 rounded-md border border-[#E3DED4]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#E3DED4]/60">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold text-[#71866A] group-hover:text-[#5d7056] py-1 cursor-pointer transition-colors"
                >
                  <span>Enquire for {service.title}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
