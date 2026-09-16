import { useState } from 'react';
import { MapPin, Info, ArrowUpRight } from 'lucide-react';
import { RAJASTHAN_LOCATIONS } from '../data/siteData';

interface RajasthanServiceAreaProps {
  onSelectLocation: (locationName: string) => void;
}

export default function RajasthanServiceArea({ onSelectLocation }: RajasthanServiceAreaProps) {
  const [selectedCity, setSelectedCity] = useState<string>('Ajmer');

  // Relative SVG pin coordinates on a stylized Rajasthan outline canvas (500 x 420)
  const cityCoordinates: Record<string, { x: number; y: number }> = {
    "Ajmer": { x: 260, y: 215 },
    "Jaipur": { x: 335, y: 175 },
    "Kishangarh": { x: 285, y: 200 },
    "Beawar": { x: 240, y: 240 },
    "Pushkar": { x: 245, y: 205 },
    "Jodhpur": { x: 170, y: 215 },
    "Udaipur": { x: 210, y: 320 },
    "Bhilwara": { x: 275, y: 270 },
    "Kota": { x: 350, y: 280 },
    "Alwar": { x: 370, y: 145 },
    "Bikaner": { x: 195, y: 120 },
    "Sikar": { x: 295, y: 145 },
    "Nagaur": { x: 220, y: 175 },
    "Pali": { x: 205, y: 255 },
    "Rajsamand": { x: 230, y: 290 }
  };

  return (
    <section
      id="rajasthan-coverage"
      className="py-16 sm:py-24 bg-[#FAF8F3] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            WHERE WE WORK
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            Serving Clients Across Rajasthan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#687068]">
            Tulsi Construction & Interiors is based in Ajmer and provides construction, interior, renovation and turnkey project solutions across Rajasthan.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        {/* Interactive Map & Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Minimalist Stylized Map Illustration */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3DED4] shadow-xs relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#71866A]">
                  Regional Project Reach
                </span>
                <h3 className="font-editorial text-lg font-bold text-[#26312B]">
                  Central Ajmer HQ & Pan Rajasthan Service
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#687068]">
                <div className="flex items-center space-x-1.5">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#71866A]" />
                  <span>Base HQ (Ajmer)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#C9A77B]" />
                  <span>Service Region</span>
                </div>
              </div>
            </div>

            {/* Stylized Vector Map of Rajasthan with Interactive City Nodes */}
            <div className="relative aspect-5/4 w-full bg-[#FAF8F3] rounded-xl border border-[#E3DED4]/80 p-2 flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 500 420"
                className="w-full h-full max-h-[360px]"
                role="img"
                aria-label="Rajasthan service region interactive map"
              >
                {/* Rajasthan stylized geographical silhouette */}
                <path
                  d="M 120 180 L 160 100 L 230 70 L 300 80 L 370 120 L 420 140 L 400 200 L 430 260 L 380 320 L 350 350 L 290 340 L 250 370 L 200 380 L 160 340 L 170 280 L 130 240 Z"
                  fill="#F3EEE5"
                  stroke="#E3DED4"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  className="transition-all"
                />

                {/* Ajmer radius ring */}
                <circle
                  cx="260"
                  cy="215"
                  r="48"
                  fill="#71866A"
                  fillOpacity="0.08"
                  stroke="#71866A"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* Connection lines from Ajmer to key nodes */}
                {Object.entries(cityCoordinates).map(([city, coords]) => {
                  if (city === 'Ajmer') return null;
                  return (
                    <line
                      key={`line-${city}`}
                      x1="260"
                      y1="215"
                      x2={coords.x}
                      y2={coords.y}
                      stroke={selectedCity === city ? "#71866A" : "#C9A77B"}
                      strokeOpacity={selectedCity === city ? "0.6" : "0.2"}
                      strokeWidth={selectedCity === city ? "1.5" : "0.75"}
                    />
                  );
                })}

                {/* City nodes */}
                {Object.entries(cityCoordinates).map(([city, coords]) => {
                  const isAjmer = city === 'Ajmer';
                  const isSelected = selectedCity === city;

                  return (
                    <g
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        onSelectLocation(city);
                      }}
                      className="cursor-pointer group"
                    >
                      {isAjmer && (
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="12"
                          fill="#71866A"
                          fillOpacity="0.2"
                          className="animate-ping"
                        />
                      )}
                      
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isAjmer ? "7" : isSelected ? "5.5" : "4"}
                        fill={isAjmer ? "#71866A" : isSelected ? "#C98262" : "#C9A77B"}
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        className="transition-all duration-200"
                      />

                      <text
                        x={coords.x + (isAjmer ? 9 : 7)}
                        y={coords.y + 4}
                        fontSize={isAjmer ? "11" : "9"}
                        fontWeight={isAjmer || isSelected ? "700" : "500"}
                        fill="#26312B"
                        className="select-none font-sans"
                      >
                        {city} {isAjmer ? "(HQ)" : ""}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active Selected City Info Box */}
            <div className="mt-4 p-3.5 rounded-lg bg-[#FAF8F3] border border-[#E3DED4] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#71866A] shrink-0 mt-0.5 sm:mt-0" />
                <div>
                  <span className="text-xs font-bold text-[#26312B]">
                    Active Selection: {selectedCity}
                  </span>
                  <span className="text-xs text-[#687068] block">
                    {selectedCity === 'Ajmer'
                      ? 'Central Head Office & On-Site Supervisory Network'
                      : `Active Site Service Area (Coordinated from Ajmer HQ)`}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectLocation(selectedCity)}
                className="text-xs font-semibold text-[#71866A] hover:text-[#5d7056] inline-flex items-center space-x-1 cursor-pointer self-start sm:self-auto shrink-0 bg-white sm:bg-transparent px-3 py-1.5 sm:p-0 rounded border border-[#E3DED4] sm:border-0"
              >
                <span>Request Project Here</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Service Locations List & Mandatory Disclaimer */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-[#26312B] mb-2">
                15 Major Service Locations
              </h3>
              <p className="text-sm text-[#687068] leading-relaxed">
                Click any city to view service coverage details or to prepare an inquiry for that region.
              </p>
            </div>

            {/* City Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {RAJASTHAN_LOCATIONS.map((loc) => {
                const isSelected = selectedCity === loc.name;
                return (
                  <button
                    key={loc.name}
                    type="button"
                    onClick={() => {
                      setSelectedCity(loc.name);
                      onSelectLocation(loc.name);
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#E7EEE4] border-[#71866A] text-[#26312B] shadow-2xs font-semibold'
                        : 'bg-white border-[#E3DED4] text-[#687068] hover:border-[#C9A77B] hover:text-[#26312B]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#26312B]">
                        {loc.name}
                      </span>
                      {loc.isHQ && (
                        <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#71866A] text-white">
                          HQ
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#687068] block mt-0.5">
                      {loc.role}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* MANDATORY PROMPT RULE DISCLAIMER */}
            <div className="p-4 rounded-xl bg-[#F3EEE5] border border-[#E3DED4] flex items-start space-x-3">
              <Info className="w-5 h-5 text-[#C98262] shrink-0 mt-0.5" />
              <div className="text-xs text-[#687068] leading-relaxed">
                <strong className="text-[#26312B] block mb-0.5">Operational Service Notice:</strong>
                These locations represent our active on-site service coverage and mobilization capability across Rajasthan. All engineering, supervision, and project coordination are centrally directed from our Ajmer headquarters. (These are service areas, not separate branch offices).
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
