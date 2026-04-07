"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonialSnippets = [
  {
    quote: "F.S.L gave my son the confidence he needed both on and off the court.",
    name: "Marcus J.",
    org: "Parent",
  },
  {
    quote: "The mentorship program is unlike anything else in our community.",
    name: "Coach Davis",
    org: "Community Partner",
  },
  {
    quote: "My daughter learned to budget at 14 — life-changing!",
    name: "Lisa T.",
    org: "Parent",
  },
];

export function SocialProof() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-b from-fsl-blue to-[#003ad6] py-8 px-6 md:px-[60px] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Trust line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex -space-x-2">
            {["#0052FE", "#FF7900", "#00D17E", "#E9BB00"].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: color }}
              >
                {["M", "L", "C", "T"][i]}
              </div>
            ))}
          </div>
          <p className="font-redhat text-[15px] text-white/90 font-light">
            Join <span className="font-bold text-white">150+ youth athletes</span> already building their future
          </p>
        </div>

        {/* Testimonial snippets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonialSnippets.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10"
            >
              <p className="font-redhat text-[13px] text-white/80 font-light leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-fsl-coral flex items-center justify-center text-white text-[10px] font-bold">
                  {t.name[0]}
                </div>
                <span className="font-redhat text-[12px] text-white/70">
                  {t.name} · {t.org}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
