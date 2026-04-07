// Sport-specific icons for FSL's 5 sports + supporting programs

export function GolfIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="18" cy="5" r="2" />
      <path d="M7 21l3-11L5 6l7 2 4-4" />
      <path d="M7 21h4" />
    </svg>
  );
}

export function FootballIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="6" transform="rotate(45 12 12)" />
      <path d="M8.5 8.5l7 7M8.5 15.5l7-7" />
      <path d="M12 4l-1.5 3M12 20l1.5-3M4 12l3 1.5M20 12l-3-1.5" />
    </svg>
  );
}

export function BasketballIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2v20" />
      <path d="M4.93 4.93c4.08 2.4 8.16 2.4 14.14 0" />
      <path d="M4.93 19.07c4.08-2.4 8.16-2.4 14.14 0" />
    </svg>
  );
}

export function SoccerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2l3 5h5l-2 5 3 5h-5l-4 5-4-5H3l3-5-2-5h5z" />
    </svg>
  );
}

export function TrackIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="7" cy="6" r="2" />
      <path d="M5 20l3-12 4 2 3-4 4 8" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function BrainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a6 6 0 016 6c0 2-1 3.5-2.5 4.5L12 15l-3.5-2.5C7 11.5 6 10 6 8a6 6 0 016-6z" />
      <path d="M12 15v7M9 18h6" />
    </svg>
  );
}

export function DollarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

export function VRIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="7" width="20" height="10" rx="3" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
      <path d="M10 12h4" />
      <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" />
    </svg>
  );
}
