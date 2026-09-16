interface TulsiLogoProps {
  variant?: 'full' | 'icon-only' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function TulsiLogo({ variant = 'horizontal', className = '', size = 'md' }: TulsiLogoProps) {
  // SVG sizes based on prop - prominent brand visibility with mobile fluidity
  const iconSizes = {
    sm: 'w-9 h-9 sm:w-12 sm:h-12',
    md: 'w-11 h-11 sm:w-16 sm:h-16 lg:w-18 lg:h-18',
    lg: 'w-18 h-18 sm:w-24 sm:h-24',
    xl: 'w-24 h-24 sm:w-36 sm:h-36'
  };

  const textSizes = {
    sm: { title: 'text-lg sm:text-2xl', sub: 'text-[7.5px] sm:text-[9px]' },
    md: { title: 'text-xl sm:text-3xl lg:text-[32px]', sub: 'text-[8px] sm:text-[11px] lg:text-[12px]' },
    lg: { title: 'text-2xl sm:text-4xl lg:text-5xl', sub: 'text-xs sm:text-sm' },
    xl: { title: 'text-3xl sm:text-5xl lg:text-6xl', sub: 'text-sm sm:text-base' }
  };

  const renderIconSvg = () => (
    <svg
      viewBox="0 0 200 180"
      className={`${iconSizes[size]} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tulsi Construction & Interior Emblem"
    >
      <defs>
        <linearGradient id="tulsi-orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
        <linearGradient id="tulsi-green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="60%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
        <linearGradient id="tulsi-swoosh-gradient" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
      </defs>

      {/* Modern High-rise Buildings on Left */}
      <g fill="#14532D">
        {/* Building 1 (Far Left) */}
        <rect x="25" y="65" width="12" height="40" rx="1" />
        <rect x="27" y="68" width="3.5" height="4" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="27" y="76" width="3.5" height="4" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="27" y="84" width="3.5" height="4" fill="#FFFFFF" fillOpacity="0.4" />

        {/* Building 2 (Mid Left) */}
        <rect x="39" y="45" width="16" height="60" rx="1" />
        <rect x="42" y="50" width="4" height="6" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="49" y="50" width="4" height="6" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="42" y="60" width="4" height="6" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="49" y="60" width="4" height="6" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="42" y="70" width="4" height="6" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="49" y="70" width="4" height="6" fill="#FFFFFF" fillOpacity="0.4" />

        {/* Building 3 (Tall Left) */}
        <rect x="58" y="32" width="18" height="75" rx="1" />
        <rect x="61" y="38" width="5" height="7" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="69" y="38" width="5" height="7" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="61" y="50" width="5" height="7" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="69" y="50" width="5" height="7" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="61" y="62" width="5" height="7" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="69" y="62" width="5" height="7" fill="#FFFFFF" fillOpacity="0.4" />

        {/* Building 4 (Accent Orange/Gold Structure) */}
        <rect x="78" y="52" width="14" height="50" rx="1" fill="url(#tulsi-orange-gradient)" />
        <rect x="81" y="58" width="3.5" height="5" fill="#FFFFFF" fillOpacity="0.6" />
        <rect x="87" y="58" width="3.5" height="5" fill="#FFFFFF" fillOpacity="0.6" />
      </g>

      {/* Tulsi Sacred Plant & Leaves at the peak */}
      <g>
        {/* Flowering shoot / Manjari in center top */}
        <path
          d="M109 10 C109 10 111 13 111 16 C111 19 109 23 109 26 C109 29 111 32 111 35 C111 38 109 44 109 46"
          stroke="#15803D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Flower buds / beads */}
        <circle cx="106" cy="14" r="1.8" fill="#15803D" />
        <circle cx="112" cy="13" r="1.8" fill="#15803D" />
        <circle cx="105" cy="20" r="2.2" fill="#15803D" />
        <circle cx="113" cy="19" r="2.2" fill="#15803D" />
        <circle cx="104" cy="26" r="2.5" fill="#15803D" />
        <circle cx="114" cy="25" r="2.5" fill="#15803D" />

        {/* Central Top Left Leaf */}
        <path
          d="M109 48 C100 35 88 32 86 42 C84 52 98 56 109 50 Z"
          fill="url(#tulsi-green-gradient)"
        />
        {/* Central Top Right Leaf */}
        <path
          d="M109 48 C118 34 130 31 132 41 C134 51 120 56 109 50 Z"
          fill="url(#tulsi-green-gradient)"
        />
        {/* Upper Outer Left Leaf */}
        <path
          d="M103 40 C91 26 80 28 82 35 C84 43 96 44 103 40 Z"
          fill="#22C55E"
        />
        {/* Upper Outer Right Leaf */}
        <path
          d="M115 40 C127 26 138 28 136 35 C134 43 122 44 115 40 Z"
          fill="#22C55E"
        />
        {/* Leaf veins */}
        <path d="M107 48 C97 42 90 40 88 41" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M111 48 C121 42 128 40 130 41" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
      </g>

      {/* Architectural Villa Gable / House Roof */}
      <g>
        {/* Chimney on right */}
        <rect x="145" y="58" width="10" height="20" fill="url(#tulsi-orange-gradient)" rx="1" />
        
        {/* Thick Orange Roof Slope */}
        <path
          d="M109 49 L58 88 L63 93 L109 57 L168 93 L172 88 Z"
          fill="url(#tulsi-orange-gradient)"
        />
        {/* Inner shadow/fascia */}
        <path
          d="M109 58 L68 90 L71 93 L109 63 L160 93 L163 90 Z"
          fill="#9A3412"
        />

        {/* 4-Pane Modern Window under the Roof Peak */}
        <g fill="url(#tulsi-orange-gradient)">
          <rect x="101" y="70" width="6.5" height="7" rx="0.5" />
          <rect x="110" y="70" width="6.5" height="7" rx="0.5" />
          <rect x="101" y="79" width="6.5" height="7" rx="0.5" />
          <rect x="110" y="79" width="6.5" height="7" rx="0.5" />
        </g>
      </g>

      {/* Iconic Dynamic Base Crescent Swoosh wrapping around brand */}
      <g>
        {/* Golden Orange Upper Swoop */}
        <path
          d="M15 105 C8 120 12 135 30 148 C55 165 110 168 185 130 C198 123 182 120 165 125 C115 140 60 142 38 128 C26 120 22 110 32 98 C35 94 20 95 15 105 Z"
          fill="url(#tulsi-swoosh-gradient)"
        />

        {/* Lower Grounding Green Horizon Arc */}
        <path
          d="M52 144 C95 156 145 148 195 124 C175 135 125 145 75 140 Z"
          fill="#15803D"
        />
      </g>
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderIconSvg()}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {renderIconSvg()}
        <div className="mt-1">
          <div className="font-serif font-black tracking-wider text-[#14532D] text-3xl sm:text-4xl leading-tight">
            TULSI
          </div>
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-[#A6652C] uppercase mt-0.5">
            CONSTRUCTION & INTERIOR
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (default for Navbar / Headers)
  return (
    <div className={`flex items-center space-x-3 sm:space-x-3.5 ${className}`}>
      {renderIconSvg()}
      <div className="flex flex-col justify-center">
        <span className={`font-serif font-extrabold tracking-wider text-[#14532D] ${textSizes[size].title} leading-none`}>
          TULSI
        </span>
        <span className={`font-semibold tracking-[0.24em] text-[#A6652C] uppercase ${textSizes[size].sub} mt-1 sm:mt-1.5`}>
          CONSTRUCTION & INTERIOR
        </span>
      </div>
    </div>
  );
}
