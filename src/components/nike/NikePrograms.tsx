"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Basketball",
    tagline: "Fundamentals first. Structure builds skill.",
    desc: "Fundamental skill development, structured training, and game knowledge that translates to life off the court.",
    image: "/images/urban/basketball-rim.jpg",
    accent: "#0052FE",
    stat: "5v5",
  },
  {
    title: "Football",
    tagline: "Game structure. Life structure.",
    desc: "Learning the structure of the game — positioning, reads, and discipline that builds character beyond the field.",
    image: "/images/urban/football-play.jpg",
    accent: "#FF7900",
    stat: "200+",
  },
  {
    title: "Soccer",
    tagline: "Footwork. Field vision. Foundation.",
    desc: "Building from the ground up — ball control, spacing, and team structure that teaches communication and accountability.",
    image: "/images/urban/soccer-ball.jpg",
    accent: "#00D17E",
    stat: "Co-ed",
  },
  {
    title: "Golf",
    tagline: "Precision. Process. Patience.",
    desc: "The fundamentals of patience, precision, and process — skills that transfer directly to academics and career readiness.",
    image: "/images/sports/youth-golf.jpg",
    accent: "#E9BB00",
    stat: "PGA",
  },
  {
    title: "Track & Field",
    tagline: "Form. Fundamentals. Finish.",
    desc: "Mastering the basics — proper form, consistent training habits, and the discipline of measurable self-improvement.",
    image: "/images/urban/hero-track-race.jpg",
    accent: "#F4767C",
    stat: "100m",
  },
];

const techPrograms = [
  { title: "AI & Machine Learning", sub: "Phazur Labs", image: "/images/action/teens-learning.jpg", accent: "#0052FE" },
  { title: "Financial Responsibility", sub: "Life Skills", image: "/images/action/teens-workshop.jpg", accent: "#00D17E" },
  { title: "Mental Wellness", sub: "Mindset", image: "/images/action/teens-stretching.jpg", accent: "#FF7900" },
];

export function NikePrograms() {
  const [active, setActive] = useState(0);

  return (
    <section id="programs" className="py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-fsl-coral/50" />
              What We Do
            </p>
            <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em]">
              Our Programs
            </h2>
          </div>
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 font-redhat text-[11px] font-semibold uppercase tracking-[0.2em] text-fsl-dark self-start md:self-auto md:mb-2"
          >
            <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-fsl-dark group-hover:after:bg-fsl-coral group-hover:text-fsl-coral transition-colors duration-300">
              View All
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:text-fsl-coral transition-all duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* ═══ FEATURED SPORT — interactive accordion/showcase ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-16">
          {/* Left: sport selector list */}
          <div className="lg:col-span-4 flex flex-col">
            {programs.map((p, i) => (
              <button
                key={p.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left py-5 px-6 border-l-[3px] transition-all duration-500 group",
                  active === i
                    ? "border-l-fsl-coral bg-[#fafafa]"
                    : "border-l-transparent hover:border-l-black/10 hover:bg-[#fdfdfd]"
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={cn(
                      "font-barlow text-[22px] md:text-[26px] font-bold uppercase leading-tight transition-colors duration-300",
                      active === i ? "text-fsl-dark" : "text-[#bbb] group-hover:text-[#888]"
                    )}>
                      {p.title}
                    </h3>
                    <p className={cn(
                      "font-redhat text-[13px] font-normal mt-1 transition-all duration-500 overflow-hidden",
                      active === i ? "text-[#888] max-h-20 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {p.tagline}
                    </p>
                  </div>
                  <span className={cn(
                    "font-barlow text-[28px] font-bold transition-all duration-500",
                    active === i ? "text-fsl-coral opacity-100" : "opacity-0"
                  )}>
                    {p.stat}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: active sport image + description */}
          <div className="lg:col-span-8 relative min-h-[400px] md:min-h-[500px] overflow-hidden">
            {programs.map((p, i) => (
              <div
                key={p.title}
                className={cn(
                  "absolute inset-0 transition-all duration-700",
                  active === i ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                )}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.85) contrast(1.08)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: p.accent }} />
                  <h3 className="font-barlow text-[32px] md:text-[44px] font-bold text-white uppercase leading-[0.9] mb-3">
                    {p.title}
                  </h3>
                  <p className="font-redhat text-[14px] text-white/60 font-normal max-w-[400px] leading-[1.7]">
                    {p.desc}
                  </p>
                  <Link href="/programs" className="inline-flex items-center gap-2 font-redhat text-[11px] font-semibold uppercase tracking-[0.2em] text-fsl-coral mt-5 hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ TECH + WELLNESS — 3-card row ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techPrograms.map((p) => (
            <Link key={p.title} href="/programs" className="group relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.06]"
                style={{ filter: "saturate(0.8) contrast(1.08)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="font-redhat text-[10px] uppercase tracking-[0.3em] text-fsl-coral/80 font-medium mb-1">{p.sub}</p>
                <h3 className="font-barlow text-[18px] md:text-[22px] font-bold text-white uppercase leading-tight">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
