"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const quotes = [
  {
    text: "My son did the basketball camp last summer and honestly I wasn't expecting much. But he came home talking about budgeting and saving money — from a sports camp. The financial literacy piece caught him off guard in the best way. He's been asking to go back ever since.",
    attribution: "Parent of a 2024 basketball camper",
    initials: "DW",
    color: "#0052FE",
  },
  {
    text: "I've coached youth football in Inglewood for six years. What FSL does different is the mental wellness side. These kids deal with a lot, and having that built into the program — not as an afterthought but as a whole pillar — you can see the difference on the field and off it.",
    attribution: "Volunteer coach, Inglewood",
    initials: "RT",
    color: "#FF7900",
  },
  {
    text: "I started doing track with FSL when I was 12 and now I'm in the technology workshops too. I didn't think coding was for me but they make it feel like it connects to everything. Coach says the four pillars work together and I'm starting to get what he means.",
    attribution: "Student athlete, age 14",
    initials: "KJ",
    color: "#00D17E",
  },
];

export function NikeTestimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-20 md:py-32 lg:py-44 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-fsl-coral/4 blur-[150px] rounded-full" />

      <div className="relative max-w-[900px] mx-auto px-6 md:px-16">
        {/* Quote mark */}
        <div className="text-center mb-10">
          <span className="font-barlow text-[100px] md:text-[140px] text-fsl-coral/15 leading-none select-none block h-[60px] md:h-[80px] overflow-hidden">
            &ldquo;
          </span>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {quotes.map((q) => (
              <div
                key={q.attribution}
                className="flex-[0_0_100%] min-w-0 text-center px-4"
              >
                <p className="font-barlow text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px] font-bold leading-[1.25] tracking-[-0.01em]">
                  {q.text}
                </p>

                {/* Initials circle + attribution */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-barlow font-bold text-[16px] text-white ring-2 ring-white/10"
                    style={{ backgroundColor: q.color }}
                  >
                    {q.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-redhat text-[13px] text-white/50 tracking-[0.05em]">
                      {q.attribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-14">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`p-3 rounded-full transition-all duration-600 ${
                selectedIndex === i
                  ? "w-8 h-[5px] bg-fsl-coral"
                  : "w-[5px] h-[5px] bg-white/15 hover:bg-white/30"
              }`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
