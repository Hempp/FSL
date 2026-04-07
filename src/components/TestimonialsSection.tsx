"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Jordan",
    org: "Shadyside Youth Sports",
    quote: "The technology workshops opened up a whole new world for me. I never thought I'd be interested in coding, but now I want to study computer science.",
    stars: 5,
    theme: { bg: "bg-fsl-blue-bg", border: "border-fsl-blue", accent: "#0052FE" },
  },
  {
    name: "Tanya W",
    org: "Huaytown Youth Basketball",
    quote: "As a volunteer coach, I've witnessed firsthand how these kids grow not just as athletes, but as leaders. It's powerful.",
    stars: 5,
    theme: { bg: "bg-fsl-orange-bg", border: "border-fsl-orange", accent: "#FF7900" },
  },
  {
    name: "Maria G.",
    org: "Columbus Wrestling Club",
    quote: "The financial literacy program opened my daughter's eyes to saving and planning. She now has a savings account and a budget at 14!",
    stars: 5,
    theme: { bg: "bg-fsl-green-bg", border: "border-fsl-green", accent: "#00D17E" },
  },
];

function QuoteIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="mb-4">
      <path
        d="M18 8H8v10c0 5.52 4.48 10 10 10v-4c-3.31 0-6-2.69-6-6h6V8zm14 0H22v10c0 5.52 4.48 10 10 10v-4c-3.31 0-6-2.69-6-6h6V8z"
        fill={color}
      />
    </svg>
  );
}

function StarIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="py-[60px] md:py-[100px] px-6 md:px-[60px] max-w-[1400px] mx-auto relative">
      {/* Header — centered like JerseyWatch */}
      <div className="mb-12 text-center">
        <h2 className="font-barlow text-[36px] md:text-[50px] lg:text-[64px] font-bold text-fsl-dark uppercase leading-none">
          What Our<br />Community Says
        </h2>
        <span className="font-bonvivant text-[24px] md:text-[32px] text-fsl-coral inline-block mt-2">
          Testimonials
        </span>
      </div>

      {/* Embla Carousel */}
      <div className="relative">
        {/* Nav arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-12 h-12 rounded-full bg-white shadow-lg text-fsl-dark flex items-center justify-center hover:bg-fsl-coral hover:text-white transition-all duration-300 hidden md:flex"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-12 h-12 rounded-full bg-white shadow-lg text-fsl-dark flex items-center justify-center hover:bg-fsl-coral hover:text-white transition-all duration-300 hidden md:flex"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="overflow-hidden mx-0 md:mx-14" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`flex-[0_0_85%] md:flex-[0_0_calc(33.333%-16px)] min-w-0 p-6 md:p-8 rounded-[20px] border-t-4 ${t.theme.border} ${t.theme.bg} flex flex-col transition-all duration-500 ${
                  selectedIndex === i ? "scale-100 opacity-100" : "scale-[0.97] opacity-80"
                }`}
              >
                <QuoteIcon color={t.theme.accent} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <StarIcon key={j} color={t.theme.accent} />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-redhat text-[15px] text-fsl-gray font-light leading-[26px] flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Avatar + Name */}
                <div className="flex items-center gap-3 pt-5 border-t border-black/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-barlow font-bold text-[16px] shadow-sm"
                    style={{ backgroundColor: t.theme.accent }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <h3 className="font-barlow text-[18px] md:text-[20px] font-bold text-fsl-dark leading-tight">
                      {t.name}
                    </h3>
                    <p className="font-redhat text-[12px] text-fsl-gray">{t.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                selectedIndex === i
                  ? "w-8 h-3 bg-fsl-coral"
                  : "w-3 h-3 bg-fsl-coral/30 hover:bg-fsl-coral/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
