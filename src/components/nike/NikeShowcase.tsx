"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const showcaseItems = [
  {
    tag: "01",
    title: "Tournaments & Clinics",
    desc: "Competitive events across 6 sports — city and regional tournaments plus focused skill clinics led by professional coaches.",
    image: "/images/urban/team-huddle.jpg",
    href: "/tournaments",
    color: "#0052FE",
  },
  {
    tag: "02",
    title: "Mentor Coaching",
    desc: "Donation-funded accountability coaches who check in on athletes weekly — tracking grades, goals, and growth.",
    image: "/images/action/coach-training.jpg",
    href: "/mentor-coaching",
    color: "#F4767C",
  },
  {
    tag: "03",
    title: "Equipment Donations",
    desc: "Jerseys, shoes, and gear donated to schools and youth programs in need across Los Angeles.",
    image: "/images/premium/community-together.jpg",
    href: "/tournaments#equipment",
    color: "#00D17E",
  },
  {
    tag: "04",
    title: "6 Core Sports",
    desc: "Basketball, football, soccer, golf, track & field, and baseball — professional coaching building fundamentals that last a lifetime.",
    image: "/images/urban/hero-streetball.jpg",
    href: "/programs",
    color: "#FF7900",
  },
];

export function NikeShowcase() {
  return (
    <section className="py-20 sm:py-28 md:py-40 bg-[#fafafa] relative overflow-hidden">
      {/* Section label */}
      <div className="absolute top-8 sm:top-12 left-6 md:left-16 lg:left-24">
        <span className="font-redhat text-[10px] uppercase tracking-[0.35em] text-fsl-dark/20 font-medium">
          Our Mission
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
            <div>
              <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-fsl-coral/50" />
                The Foundation
                <span className="w-6 h-[1px] bg-fsl-coral/50" />
              </span>
              <h2 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em] mt-5">
                What We <span className="text-fsl-coral">Do</span>
              </h2>
            </div>
            <p className="font-redhat text-[14px] text-[#999] font-normal leading-[1.8] mt-6 md:mt-0 max-w-[380px] md:text-right">
              From competitive play to mentorship and gear — we invest in every part of a young athlete&apos;s journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric grid — 2 large + 2 small */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {showcaseItems.map((item, i) => (
            <ScrollReveal
              key={item.tag}
              animation="fade-up"
              delay={i * 80}
            >
              <Link
                href={item.href}
                className={`group relative block overflow-hidden bg-white transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] ${
                  i < 2 ? "aspect-[16/10]" : "aspect-[16/9]"
                }`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.06]"
                  style={{ filter: "saturate(0.85) contrast(1.08) brightness(0.35)" }}
                />

                {/* Color overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 mix-blend-multiply"
                  style={{ backgroundColor: item.color }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Big number */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-8">
                  <span
                    className="font-barlow text-[80px] sm:text-[100px] md:text-[120px] font-bold leading-none select-none"
                    style={{ color: item.color, opacity: 0.2 }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                  <div
                    className="w-10 h-[3px] mb-4 transition-all duration-700 group-hover:w-20"
                    style={{ backgroundColor: item.color }}
                  />
                  <h3 className="font-barlow text-[24px] sm:text-[28px] md:text-[34px] font-bold text-white uppercase leading-[0.9] mb-3 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="font-redhat text-[13px] sm:text-[14px] text-white/50 font-normal leading-[1.75] max-w-[400px] mb-5">
                    {item.desc}
                  </p>
                  <div className="inline-flex items-center gap-3 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-500">
                    <span
                      className="w-8 h-[1.5px] transition-all duration-500 group-hover:w-12"
                      style={{ backgroundColor: item.color }}
                    />
                    Explore
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom color bar */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-1000"
                  style={{ backgroundColor: item.color }}
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
