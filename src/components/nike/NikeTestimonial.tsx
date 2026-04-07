"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const quotes = [
  {
    text: "F.S.L changed my son's life. The coaching and mentorship gave him confidence both on and off the court. We're forever grateful.",
    name: "Jordan",
    role: "Parent",
    avatar: "/images/action/face-1.jpg",
  },
  {
    text: "As a volunteer coach, I've witnessed firsthand how these kids grow not just as athletes, but as leaders. It's powerful.",
    name: "Tanya W",
    role: "Volunteer Coach",
    avatar: "/images/action/face-2.jpg",
  },
  {
    text: "The technology workshops opened up a whole new world for me. I never thought I'd be interested in coding, but now I want to study computer science.",
    name: "Maria G.",
    role: "Student Athlete",
    avatar: "/images/action/face-3.jpg",
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
    return () => { emblaApi.off("select", onSelect); emblaApi.off("init", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-32 md:py-44 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-fsl-coral/4 blur-[150px] rounded-full" />

      <div className="relative max-w-[900px] mx-auto px-6 md:px-16">
        {/* Quote mark */}
        <div className="text-center mb-10">
          <span className="font-barlow text-[100px] md:text-[140px] text-fsl-coral/15 leading-none select-none block h-[60px] md:h-[80px] overflow-hidden">&ldquo;</span>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {quotes.map((q) => (
              <div key={q.name} className="flex-[0_0_100%] min-w-0 text-center px-4">
                <p className="font-barlow text-[22px] md:text-[32px] lg:text-[40px] font-bold leading-[1.25] tracking-[-0.01em]">
                  {q.text}
                </p>

                {/* Avatar + info */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10">
                    <Image src={q.avatar} alt={q.name} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="font-redhat text-[14px] font-semibold text-white">{q.name}</p>
                    <p className="font-redhat text-[11px] text-white/35 uppercase tracking-[0.15em]">{q.role}</p>
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
              className={`rounded-full transition-all duration-600 ${
                selectedIndex === i ? "w-8 h-[5px] bg-fsl-coral" : "w-[5px] h-[5px] bg-white/15 hover:bg-white/30"
              }`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
