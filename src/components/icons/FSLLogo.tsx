// FSL Logo Mark — shield with 5 sport symbols
// Sports: Golf, Football, Basketball, Soccer, Track & Field

export function FSLLogoMark({ className = "w-10 h-10", light = false }: { className?: string; light?: boolean }) {
  const primary = light ? "#ffffff" : "#202020";
  const accent = "#F4767C";

  return (
    <svg viewBox="0 0 80 90" fill="none" className={className}>
      {/* Shield shape */}
      <path
        d="M40 2L74 18V52C74 68 58 82 40 88C22 82 6 68 6 52V18L40 2Z"
        fill={primary}
        fillOpacity={light ? 0.1 : 0.05}
        stroke={primary}
        strokeWidth="2.5"
        strokeOpacity={light ? 0.3 : 0.15}
      />

      {/* F.S.L text */}
      <text
        x="40"
        y="38"
        textAnchor="middle"
        fontFamily="'Barlow Condensed', sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={primary}
        letterSpacing="3"
      >
        FSL
      </text>

      {/* Coral accent bar */}
      <rect x="25" y="44" width="30" height="2.5" rx="1.25" fill={accent} />

      {/* 5 sport dots — representing the 5 sports */}
      <circle cx="24" cy="56" r="3" fill="#0052FE" /> {/* Basketball - blue */}
      <circle cx="33" cy="56" r="3" fill="#FF7900" /> {/* Football - orange */}
      <circle cx="42" cy="56" r="3" fill="#00D17E" /> {/* Soccer - green */}
      <circle cx="51" cy="56" r="3" fill="#E9BB00" /> {/* Golf - yellow */}
      <circle cx="57" cy="56" r="3" fill="#F4767C" /> {/* Track - coral */}

      {/* Tagline */}
      <text
        x="40"
        y="68"
        textAnchor="middle"
        fontFamily="'Red Hat Display', sans-serif"
        fontWeight="400"
        fontSize="6"
        fill={primary}
        fillOpacity="0.4"
        letterSpacing="2.5"
      >
        LEADERS OF TOMORROW
      </text>
    </svg>
  );
}

// Full horizontal logo with wordmark
export function FSLLogoFull({ className = "h-10", light = false }: { className?: string; light?: boolean }) {
  const primary = light ? "#ffffff" : "#202020";
  const accent = "#F4767C";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Shield mark */}
      <svg viewBox="0 0 40 46" fill="none" className="h-full w-auto">
        <path
          d="M20 1L37 9.5V27C37 35.5 29 42 20 45C11 42 3 35.5 3 27V9.5L20 1Z"
          fill={primary}
          fillOpacity={light ? 0.1 : 0.05}
          stroke={primary}
          strokeWidth="1.5"
          strokeOpacity={light ? 0.3 : 0.15}
        />
        <text
          x="20"
          y="22"
          textAnchor="middle"
          fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="700"
          fontSize="14"
          fill={primary}
          letterSpacing="1.5"
        >
          FSL
        </text>
        <rect x="11" y="26" width="18" height="1.5" rx="0.75" fill={accent} />
        {/* 5 sport dots */}
        <circle cx="11" cy="33" r="1.8" fill="#0052FE" />
        <circle cx="16" cy="33" r="1.8" fill="#FF7900" />
        <circle cx="21" cy="33" r="1.8" fill="#00D17E" />
        <circle cx="26" cy="33" r="1.8" fill="#E9BB00" />
        <circle cx="31" cy="33" r="1.8" fill="#F4767C" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className="font-barlow text-[14px] font-bold uppercase tracking-[0.1em] leading-none"
          style={{ color: primary }}
        >
          Fundamental
        </span>
        <span
          className="font-barlow text-[14px] font-bold uppercase tracking-[0.1em] leading-none"
          style={{ color: primary }}
        >
          Sports Labs
        </span>
      </div>
    </div>
  );
}
