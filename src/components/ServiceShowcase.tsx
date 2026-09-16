import { CheckCircle, ArrowRight } from 'lucide-react';
import { SHOWCASE_ITEMS } from '../data/siteData';

interface ServiceShowcaseProps {
  onOpenConsultation: () => void;
}

export default function ServiceShowcase({ onOpenConsultation }: ServiceShowcaseProps) {
  return (
    <section
      id="service-showcase"
      className="py-16 sm:py-24 bg-[#FAF8F3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            WHAT WE DO
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            Designed Around Your Project
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#687068]">
            In-depth architectural and interior execution built around genuine functionality and fine aesthetics.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        {/* Alternating Showcase List */}
        <div className="space-y-16 sm:space-y-24">
          {SHOWCASE_ITEMS.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={item.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-[#E3DED4] shadow-md bg-white group">
                    <div className="aspect-16/11 sm:aspect-4/3 w-full overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-black/40 backdrop-blur-xs border border-white/20">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  } space-y-5`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-editorial text-3xl font-bold text-[#C9A77B]">
                      {item.number}
                    </span>
                    <span className="h-4 w-[1px] bg-[#E3DED4]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#71866A]">
                      {item.title}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl lg:text-3.5xl font-bold text-[#26312B] leading-tight">
                    {item.headline}
                  </h3>

                  <p className="text-base text-[#687068] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#71866A] shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-[#26312B] font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={onOpenConsultation}
                      className="inline-flex items-center space-x-2 text-sm font-semibold text-[#71866A] hover:text-[#5d7056] py-1 border-b border-[#71866A] pb-0.5 transition-colors cursor-pointer group"
                    >
                      <span>Consult on {item.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
