// 3D-rendered FSL Shield Logo — sports equipment with depth & gradients
// Sports: Soccer, Football, Basketball, Baseball, Tennis, Golf + Science Flask

export function FSLShield({ className = "w-40 h-40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Shield gradients */}
        <linearGradient id="shieldMain" x1="200" y1="0" x2="200" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="40%" stopColor="#6B4F10" />
          <stop offset="100%" stopColor="#4A360B" />
        </linearGradient>
        <linearGradient id="shieldHighlight" x1="120" y1="40" x2="280" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C4973C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6B4F10" stopOpacity="0" />
        </linearGradient>

        {/* Ball gradients */}
        <radialGradient id="soccerGrad" cx="0.35" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#c0c0c0" />
        </radialGradient>
        <radialGradient id="footballGrad" cx="0.35" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#C8782A" />
          <stop offset="60%" stopColor="#9E5A15" />
          <stop offset="100%" stopColor="#7A4410" />
        </radialGradient>
        <radialGradient id="basketballGrad" cx="0.35" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#FF8C33" />
          <stop offset="50%" stopColor="#E86A10" />
          <stop offset="100%" stopColor="#C45508" />
        </radialGradient>
        <radialGradient id="baseballGrad" cx="0.35" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f0ece4" />
          <stop offset="100%" stopColor="#d8d0c0" />
        </radialGradient>
        <radialGradient id="tennisGrad" cx="0.35" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#D4E84A" />
          <stop offset="60%" stopColor="#B8CC22" />
          <stop offset="100%" stopColor="#98AA10" />
        </radialGradient>
        <radialGradient id="golfGrad" cx="0.35" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#e8e8e0" />
          <stop offset="100%" stopColor="#c8c8b8" />
        </radialGradient>
        <linearGradient id="flaskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4AE88C" />
          <stop offset="100%" stopColor="#1AA855" />
        </linearGradient>
        <linearGradient id="flaskLiquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22CC66" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#118844" />
        </linearGradient>
        <linearGradient id="batGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8D0A0" />
          <stop offset="50%" stopColor="#C4A870" />
          <stop offset="100%" stopColor="#A08848" />
        </linearGradient>
        <linearGradient id="racketGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="100%" stopColor="#555555" />
        </linearGradient>
        <linearGradient id="golfClubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B0B8C0" />
          <stop offset="100%" stopColor="#707880" />
        </linearGradient>

        {/* Shadow */}
        <filter id="dropShadow" x="-10%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.35" />
        </filter>
        <filter id="innerGlow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* ═══ SHIELD ═══ */}
      <g filter="url(#dropShadow)">
        <path
          d="M200 12L370 80V240C370 340 290 400 200 428C110 400 30 340 30 240V80L200 12Z"
          fill="url(#shieldMain)"
          stroke="#3A2808"
          strokeWidth="4"
        />
        <path
          d="M200 12L370 80V240C370 340 290 400 200 428C110 400 30 340 30 240V80L200 12Z"
          fill="url(#shieldHighlight)"
        />
        {/* Shield inner border */}
        <path
          d="M200 28L355 90V242C355 332 280 388 200 414C120 388 45 332 45 242V90L200 28Z"
          fill="none"
          stroke="#C4973C"
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />
      </g>

      {/* ═══ GOLF CLUB (back left) ═══ */}
      <g filter="url(#innerGlow)">
        <path
          d="M78 80L108 65L140 200L120 205Z"
          fill="url(#golfClubGrad)"
          stroke="#555"
          strokeWidth="1.5"
        />
        {/* Club head */}
        <path
          d="M62 85L78 80L108 65L100 55L68 68Z"
          fill="#A0A8B0"
          stroke="#666"
          strokeWidth="1.5"
        />
      </g>

      {/* ═══ BAT (back center-left) ═══ */}
      <g filter="url(#innerGlow)" transform="rotate(-25, 180, 200)">
        <rect x="170" y="50" width="18" height="200" rx="9" fill="url(#batGrad)" stroke="#8A7040" strokeWidth="1.5" />
        {/* Bat handle */}
        <rect x="174" y="220" width="10" height="60" rx="5" fill="#8A7040" stroke="#6A5530" strokeWidth="1" />
        {/* Bat tape */}
        <rect x="174" y="240" width="10" height="4" rx="2" fill="#333" />
        <rect x="174" y="248" width="10" height="4" rx="2" fill="#333" />
        <rect x="174" y="256" width="10" height="4" rx="2" fill="#333" />
      </g>

      {/* ═══ TENNIS RACKET (back right) ═══ */}
      <g filter="url(#innerGlow)">
        {/* Handle */}
        <rect x="290" y="180" width="12" height="100" rx="4" fill="#444" stroke="#333" strokeWidth="1" transform="rotate(-30, 296, 230)" />
        {/* Racket head */}
        <ellipse cx="310" cy="120" rx="42" ry="55" fill="none" stroke="url(#racketGrad)" strokeWidth="5" transform="rotate(-15, 310, 120)" />
        {/* Strings - vertical */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`sv${i}`} x1={282 + i * 9} y1="75" x2={282 + i * 9} y2="165" stroke="#888" strokeWidth="0.8" strokeOpacity="0.5" transform="rotate(-15, 310, 120)" />
        ))}
        {/* Strings - horizontal */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={`sh${i}`} x1="272" y1={78 + i * 10} x2="348" y2={78 + i * 10} stroke="#888" strokeWidth="0.8" strokeOpacity="0.5" transform="rotate(-15, 310, 120)" />
        ))}
      </g>

      {/* ═══ BASKETBALL (back right) ═══ */}
      <g filter="url(#innerGlow)">
        <circle cx="290" cy="200" r="48" fill="url(#basketballGrad)" stroke="#A04A05" strokeWidth="2" />
        {/* Lines */}
        <path d="M290 152 Q290 200 290 248" stroke="#A04A05" strokeWidth="1.8" fill="none" strokeOpacity="0.5" />
        <path d="M242 200 Q290 200 338 200" stroke="#A04A05" strokeWidth="1.8" fill="none" strokeOpacity="0.5" />
        <path d="M255 162 Q280 190 260 230" stroke="#A04A05" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
        <path d="M325 165 Q300 195 320 235" stroke="#A04A05" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
      </g>

      {/* ═══ SOCCER BALL (center, largest) ═══ */}
      <g filter="url(#dropShadow)">
        <circle cx="195" cy="210" r="72" fill="url(#soccerGrad)" stroke="#333" strokeWidth="2" />
        {/* Pentagon pattern */}
        <path d="M195 155 L215 170 L210 195 L180 195 L175 170Z" fill="#222" stroke="#333" strokeWidth="1" />
        <path d="M230 205 L250 190 L265 210 L255 230 L235 225Z" fill="#222" stroke="#333" strokeWidth="1" />
        <path d="M160 205 L140 190 L125 210 L135 230 L155 225Z" fill="#222" stroke="#333" strokeWidth="1" />
        <path d="M175 250 L180 270 L210 270 L215 250 L195 240Z" fill="#222" stroke="#333" strokeWidth="1" />
        <path d="M240 165 L255 175 L250 155 L235 148Z" fill="#222" stroke="#333" strokeWidth="1" />
        <path d="M150 165 L135 175 L140 155 L155 148Z" fill="#222" stroke="#333" strokeWidth="1" />
      </g>

      {/* ═══ BASEBALL (top left) ═══ */}
      <g filter="url(#innerGlow)">
        <circle cx="138" cy="95" r="28" fill="url(#baseballGrad)" stroke="#ccc" strokeWidth="1.5" />
        {/* Stitching */}
        <path d="M120 75 Q125 85 120 95 Q115 105 120 115" stroke="#CC2222" strokeWidth="1.5" fill="none" />
        <path d="M156 75 Q151 85 156 95 Q161 105 156 115" stroke="#CC2222" strokeWidth="1.5" fill="none" />
        {/* Stitch marks */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`stl${i}`}>
            <line x1={117 - i * 0.5} y1={77 + i * 10} x2={123 + i * 0.5} y2={79 + i * 10} stroke="#CC2222" strokeWidth="0.8" />
            <line x1={153 + i * 0.5} y1={77 + i * 10} x2={159 - i * 0.5} y2={79 + i * 10} stroke="#CC2222" strokeWidth="0.8" />
          </g>
        ))}
      </g>

      {/* ═══ FOOTBALL (bottom center-left) ═══ */}
      <g filter="url(#innerGlow)" transform="rotate(-15, 155, 320)">
        <ellipse cx="155" cy="320" rx="55" ry="32" fill="url(#footballGrad)" stroke="#6A4010" strokeWidth="2" />
        {/* Laces */}
        <line x1="135" y1="320" x2="175" y2="320" stroke="#fff" strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <line key={`fl${i}`} x1={141 + i * 10} y1="315" x2={141 + i * 10} y2="325" stroke="#fff" strokeWidth="1.5" />
        ))}
        {/* Point tips */}
        <ellipse cx="155" cy="320" rx="55" ry="32" fill="none" stroke="#7A4410" strokeWidth="1" strokeOpacity="0.3" />
      </g>

      {/* ═══ SMALL SOCCER BALL (left) ═══ */}
      <g filter="url(#innerGlow)">
        <circle cx="98" cy="225" r="22" fill="url(#soccerGrad)" stroke="#333" strokeWidth="1.5" />
        <path d="M98 208 L106 215 L104 224 L92 224 L90 215Z" fill="#222" stroke="#333" strokeWidth="0.8" />
        <path d="M112 228 L118 222 L115 235 L108 237Z" fill="#222" stroke="#333" strokeWidth="0.8" />
        <path d="M84 228 L78 222 L81 235 L88 237Z" fill="#222" stroke="#333" strokeWidth="0.8" />
      </g>

      {/* ═══ GOLF BALL (bottom left) ═══ */}
      <g filter="url(#innerGlow)">
        <circle cx="118" cy="355" r="18" fill="url(#golfGrad)" stroke="#bbb" strokeWidth="1" />
        {/* Dimples */}
        {[
          [112, 348], [124, 348], [118, 342],
          [108, 355], [118, 355], [128, 355],
          [112, 362], [124, 362], [118, 368],
        ].map(([cx, cy], i) => (
          <circle key={`gd${i}`} cx={cx} cy={cy} r="2" fill="none" stroke="#bbb" strokeWidth="0.5" strokeOpacity="0.4" />
        ))}
      </g>

      {/* ═══ TENNIS BALL (bottom right) ═══ */}
      <g filter="url(#innerGlow)">
        <circle cx="248" cy="345" r="22" fill="url(#tennisGrad)" stroke="#8AA010" strokeWidth="1.5" />
        {/* Seam */}
        <path d="M232 330 Q240 345 232 360" stroke="#fff" strokeWidth="2" fill="none" strokeOpacity="0.6" />
        <path d="M264 330 Q256 345 264 360" stroke="#fff" strokeWidth="2" fill="none" strokeOpacity="0.6" />
      </g>

      {/* ═══ SCIENCE FLASK (right) ═══ */}
      <g filter="url(#innerGlow)">
        {/* Neck */}
        <rect x="308" y="245" width="16" height="30" rx="3" fill="#88DDAA" stroke="#228855" strokeWidth="1.5" />
        {/* Rim */}
        <rect x="304" y="242" width="24" height="6" rx="3" fill="#aaa" stroke="#888" strokeWidth="1" />
        {/* Body */}
        <path d="M300 275L280 330Q278 340 288 345L344 345Q354 340 352 330L332 275Z" fill="url(#flaskGrad)" stroke="#228855" strokeWidth="2" />
        {/* Liquid */}
        <path d="M286 315Q284 335 290 340L342 340Q348 335 346 315Z" fill="url(#flaskLiquid)" />
        {/* Bubbles */}
        <circle cx="310" cy="325" r="4" fill="#66FFAA" fillOpacity="0.4" />
        <circle cx="325" cy="330" r="3" fill="#66FFAA" fillOpacity="0.3" />
        <circle cx="318" cy="318" r="2.5" fill="#66FFAA" fillOpacity="0.35" />
        {/* Highlight */}
        <path d="M306 280L310 275L312 295L308 300Z" fill="white" fillOpacity="0.15" />
      </g>

      {/* ═══ HIGHLIGHT SHEEN on shield ═══ */}
      <path
        d="M200 28L100 65V160C100 160 130 60 200 28Z"
        fill="white"
        fillOpacity="0.06"
      />
    </svg>
  );
}
