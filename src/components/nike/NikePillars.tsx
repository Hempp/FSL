import Image from "next/image";

// Inline SVG icons for each pillar — clean, on-brand
function AthleticIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M6 21l3-9 3 3 3-3 3 9" />
      <path d="M9 12l-3-3M15 12l3-3" />
    </svg>
  );
}

function BrainIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 015 5c0 1.5-.5 2.8-1.4 3.8L12 15l-3.6-4.2A5 5 0 017 7a5 5 0 015-5z" />
      <path d="M12 15v7" />
      <path d="M9 18h6" />
      <circle cx="10" cy="7" r="1" fill={color} />
      <circle cx="14" cy="7" r="1" fill={color} />
    </svg>
  );
}

function DollarIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

function VRIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="8" width="20" height="10" rx="3" />
      <circle cx="8" cy="13" r="2" />
      <circle cx="16" cy="13" r="2" />
      <path d="M10 13h4" />
      <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
    </svg>
  );
}

const pillarIcons = [AthleticIcon, BrainIcon, DollarIcon, VRIcon];

const pillars = [
  { num: "01", title: "Athletic\nTraining", desc: "Golf, football, basketball, soccer, and track & field coaching with professional trainers.", color: "#0052FE" },
  { num: "02", title: "Mental\nWellness", desc: "Building resilience, emotional intelligence, and positive mindset development.", color: "#FF7900" },
  { num: "03", title: "Financial\nLiteracy", desc: "Budgeting, saving, investing — real-world money management for young athletes.", color: "#00D17E" },
  { num: "04", title: "VR/AR &\nAI Tech", desc: "Cutting-edge VR/AR training simulations and AI-powered performance analytics.", color: "#E9BB00" },
];

export function NikePillars() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-4">
          <div>
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-4 flex items-center gap-3">
              <span className="w-10 h-[1px] bg-fsl-coral/50" />
              Our Approach
            </p>
            <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em]">
              Four Pillars
            </h2>
          </div>
          <p className="font-redhat text-[15px] text-[#999] font-normal max-w-[360px] leading-[1.7] md:text-right">
            Four pillars of fundamental development — the same structure and discipline from sports, applied to every area of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06]">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <div
                key={pillar.num}
                className="bg-white py-12 px-8 group cursor-default transition-all duration-700 hover:bg-[#fafafa] relative"
              >
                {/* Number watermark */}
                <span
                  className="font-barlow text-[100px] lg:text-[120px] font-bold leading-none opacity-[0.04] absolute top-4 right-4 transition-opacity duration-700 group-hover:opacity-[0.08] select-none"
                  style={{ color: pillar.color }}
                >
                  {pillar.num}
                </span>

                {/* Accent bar top */}
                <div
                  className="w-8 h-[3px] mb-8 transition-all duration-700 group-hover:w-14"
                  style={{ backgroundColor: pillar.color }}
                />

                {/* SVG Icon */}
                <div className="mb-6 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-1">
                  <Icon color={pillar.color} />
                </div>

                <h3 className="font-barlow text-[22px] md:text-[26px] font-bold text-fsl-dark uppercase leading-[1.1] whitespace-pre-line mb-4">
                  {pillar.title}
                </h3>

                <p className="font-redhat text-[14px] text-[#999] font-normal leading-[1.7]">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
