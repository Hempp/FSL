"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { end: 150, suffix: "+", label: "Youth Empowered" },
  { end: 85, suffix: "%", label: "Improved Academics" },
  { end: 92, suffix: "%", label: "Graduate Success" },
  { end: 5000, suffix: "", label: "Service Hours" },
];

function Stat({ end, suffix, label, isVisible, delay }: { end: number; suffix: string; label: string; isVisible: boolean; delay: number }) {
  const value = useCountUp(end, isVisible, 2500, suffix);

  return (
    <div
      className="text-center py-8 md:py-0 transition-all duration-1000"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-barlow text-[56px] md:text-[80px] lg:text-[100px] font-bold text-fsl-dark leading-none tracking-tight">
        {value}
      </p>
      <p className="font-redhat text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-[#999] mt-3">
        {label}
      </p>
    </div>
  );
}

export function NikeImpact() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="impact" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <p className="font-redhat text-[12px] uppercase tracking-[0.3em] text-fsl-coral font-semibold mb-4">
            Our Impact
          </p>
          <h2 className="font-barlow text-[36px] md:text-[56px] font-bold text-fsl-dark uppercase leading-[0.9]">
            Real Results
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-black/10"
        >
          {stats.map((stat, i) => (
            <Stat key={stat.label} {...stat} isVisible={isVisible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
