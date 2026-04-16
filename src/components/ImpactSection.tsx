"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    number: "150+",
    numericValue: 150,
    suffix: "+",
    label: "Youth Empowered",
    sublabel: "Through sports, mentorship, and wellness programs.",
    color: "#0052FE",
    iconPath: "M9 5a3 3 0 016 0v2a3 3 0 01-6 0V5zm-4 8a5 5 0 0110 0v1H5v-1zm14 0a5 5 0 00-3.5-4.77V9a5 5 0 00-2.5.67A7 7 0 0121 15v1h-2v-3z",
  },
  {
    number: "85%",
    numericValue: 85,
    suffix: "%",
    label: "Improved Academics",
    sublabel: "Driven by after-school education and technology training.",
    color: "#00D17E",
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    number: "92%",
    numericValue: 92,
    suffix: "%",
    label: "Graduate Success Rate",
    sublabel: "Supported by tutoring, career readiness, and coaching.",
    color: "#FF7900",
    iconPath: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
  {
    number: "2,500+",
    numericValue: 2500,
    suffix: "+",
    label: "Community Service Hours",
    sublabel: "Giving back through community engagement projects.",
    color: "#E9BB00",
    iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
];

function FilledHexagon({ color, number, iconPath, children }: { color: string; number?: string; iconPath: string; children?: React.ReactNode }) {
  return (
    <div className="relative w-[160px] h-[180px] md:w-[200px] md:h-[220px] lg:w-[240px] lg:h-[260px] mx-auto">
      {/* Hexagon shape with brushstroke-style border */}
      <svg viewBox="0 0 240 260" className="w-full h-full" fill="none">
        {/* Filled hexagon background */}
        <path
          d="M120 8L228 58V198L120 252L12 198V58L120 8Z"
          fill={color}
          fillOpacity="0.08"
        />
        {/* Thick brushstroke-style border */}
        <path
          d="M120 8L228 58V198L120 252L12 198V58L120 8Z"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ filter: "url(#rough)" }}
        />
        {/* Roughness filter for brushstroke effect */}
        <defs>
          <filter id="rough">
            <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs>
      </svg>
      {/* Icon + Number overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-1 opacity-70"
        >
          <path d={iconPath} />
        </svg>
        <span className="font-barlow text-[36px] md:text-[48px] lg:text-[56px] font-bold text-fsl-dark leading-none">
          {children ?? number}
        </span>
      </div>
    </div>
  );
}

function AnimatedStat({ end, suffix }: { end: number; suffix: string; isVisible: boolean }) {
  const { ref, display } = useCountUp(end, 2000, suffix);
  return <span ref={ref}>{display}</span>;
}

export function ImpactSection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="our-results" className="py-[60px] md:py-[100px] px-6 md:px-[60px] max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-16">
        <h4 className="font-barlow text-[28px] md:text-[36px] lg:text-[42px] font-light text-fsl-dark uppercase tracking-wide">
          Make an Impact
        </h4>
        <div className="flex items-baseline gap-4 flex-wrap">
          <h2 className="font-barlow text-[40px] md:text-[60px] lg:text-[80px] font-bold text-fsl-dark uppercase leading-none">
            in the community
          </h2>
          <span className="font-bonvivant text-[28px] md:text-[36px] text-fsl-coral">
            Our Results
          </span>
        </div>
        <p className="font-redhat text-[16px] text-fsl-gray font-light max-w-[600px] mt-4">
          Real results from our programs—measurable change in young lives.
        </p>
      </div>

      {/* Stats — 2x2 on mobile, 4-col on desktop */}
      <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <FilledHexagon
              color={stat.color}
              number={statsVisible ? undefined : "0"}
              iconPath={stat.iconPath}
            >
              <AnimatedStat end={stat.numericValue} suffix={stat.suffix} isVisible={statsVisible} />
            </FilledHexagon>
            <h3 className="font-barlow text-[18px] md:text-[20px] font-bold text-fsl-dark mt-4">
              {stat.label}
            </h3>
            <p className="font-redhat text-[14px] text-fsl-gray font-light mt-1 max-w-[220px] mx-auto">
              {stat.sublabel}
            </p>
          </div>
        ))}
      </div>

      {/* Hexagonal photo collage */}
      <div className="mt-16 relative flex justify-center items-center gap-[-20px] overflow-hidden">
        {[
          { src: "/images/communit-image.png", alt: "Community" },
          { src: "/images/program-06.png", alt: "Mentorship" },
          { src: "/images/92bcf7bcbc.png", alt: "Sports" },
        ].map((img, i) => (
          <div
            key={img.alt}
            className={`relative w-[180px] h-[200px] md:w-[260px] md:h-[290px] flex-shrink-0 ${i > 0 ? "-ml-8" : ""} ${i === 2 ? "hidden md:block" : ""}`}
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
