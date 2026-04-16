"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { end: 150, suffix: "+", label: "Youth Empowered", color: "#F4767C", icon: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2M9 7a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
  { end: 85, suffix: "%", label: "Improved Academics", color: "#0052FE", icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" },
  { end: 92, suffix: "%", label: "Graduate Success", color: "#00D17E", icon: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" },
  { end: 2500, suffix: "+", label: "Service Hours", color: "#FF7900", icon: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" },
];

function Stat({
  end,
  suffix,
  label,
  color,
  icon,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  color: string;
  icon: string;
  delay: number;
}) {
  const { ref, display } = useCountUp(end, 2500, suffix);

  return (
    <div
      className="relative text-center py-10 md:py-14 px-6 group transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow effect behind the number */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${color}12 0%, transparent 70%)`,
        }}
      />

      {/* Sport icon */}
      <div className="flex justify-center mb-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-40"
        >
          <path d={icon} />
        </svg>
      </div>

      {/* Glowing stat number */}
      <p
        ref={ref}
        className="font-barlow text-[36px] sm:text-[52px] md:text-[72px] lg:text-[96px] font-black leading-none tracking-tight transition-all duration-500"
        style={{
          color,
          textShadow: `0 0 40px ${color}30, 0 0 80px ${color}15`,
        }}
      >
        {display}
      </p>

      {/* Accent line under number */}
      <div className="flex justify-center my-4">
        <div
          className="h-[2px] w-8 group-hover:w-16 transition-all duration-500"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Label */}
      <p className="font-barlow text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-white/50">
        {label}
      </p>
    </div>
  );
}

export function NikeImpact() {
  return (
    <section id="impact" className="relative py-24 md:py-36 bg-fsl-dark overflow-hidden">
      {/* Background texture — subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow spots */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-fsl-coral/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#0052FE]/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
        {/* ESPN SportsCenter header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-6">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-semibold mb-4 flex items-center justify-center gap-3">
              <span className="w-10 h-[1px] bg-fsl-coral/40" />
              Our Impact
              <span className="w-10 h-[1px] bg-fsl-coral/40" />
            </p>
            <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-black text-white uppercase leading-[0.88] tracking-[-0.02em]">
              Real Results
            </h2>
          </div>
        </ScrollReveal>

        {/* Ticker-tape top border */}
        <ScrollReveal animation="scale" delay={200}>
          <div className="flex items-center gap-3 justify-center mb-12 md:mb-16">
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-fsl-coral/30" />
            <span className="font-barlow text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
              Season Stats
            </span>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-fsl-coral/30" />
          </div>
        </ScrollReveal>

        {/* Scoreboard grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06] border border-white/[0.06] rounded-sm overflow-hidden">
          {stats.map((stat, i) => (
            <div key={stat.label} className="bg-fsl-dark">
              <Stat {...stat} delay={i * 200} />
            </div>
          ))}
        </div>

        {/* Bottom ticker line */}
        <div className="mt-10 flex items-center gap-4 justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="font-redhat text-[10px] uppercase tracking-[0.3em] text-white/20 shrink-0">
            Live &bull; Updated 2026
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
