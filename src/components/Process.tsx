import { PROCESS_STEPS } from '../data/siteData';

export default function Process() {
  return (
    <section
      id="process"
      className="py-16 sm:py-24 bg-[#FAF8F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            OUR PROCESS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            A Clear Path From Idea to Completion
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#687068]">
            Simple communication. Thoughtful planning. Coordinated execution.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        {/* 4 Process Steps in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#E3DED4] shadow-2xs relative flex flex-col justify-between group hover:border-[#71866A]/40 transition-colors"
            >
              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#71866A]">
                    {step.number}
                  </span>
                  <span className="text-[10px] tracking-widest font-semibold uppercase px-2 py-0.5 rounded bg-[#FAF8F3] text-[#687068] border border-[#E3DED4]">
                    Stage 0{idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#26312B] mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#C98262] mb-3">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#687068] leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-[#E3DED4]/60">
                <div className="text-[11px] font-semibold text-[#26312B] uppercase tracking-wider mb-2">
                  Key Milestones
                </div>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-[11px] sm:text-xs text-[#687068] flex items-center space-x-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#71866A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
