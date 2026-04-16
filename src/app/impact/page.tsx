import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "150+ youth empowered, 85% improved academics, 92% graduate success rate, 5,000 community service hours. Real results from Fundamental Sports Labs.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeImpact } from "@/components/nike/NikeImpact";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const testimonials = [
  {
    quote: "Before joining F.S.L, I didn't believe I could succeed at anything. The coaches showed me that discipline on the field translates to success in the classroom. My grades went from Cs to As.",
    name: "Marcus",
    age: 16,
    sport: "Basketball",
    color: "#FF7900",
  },
  {
    quote: "The financial responsibility program changed how I think about money. I opened my first savings account at 14 and now I'm saving for college. My parents couldn't believe it.",
    name: "Aisha",
    age: 14,
    sport: "Track & Field",
    color: "#0052FE",
  },
  {
    quote: "I used to get in trouble after school. Now I have practice, homework sessions, and teammates who hold me accountable. F.S.L gave me structure when I needed it most.",
    name: "DeShawn",
    age: 15,
    sport: "Football",
    color: "#00D17E",
  },
  {
    quote: "The VR training is next level. I can see my form, my speed, everything in real time. It made me believe tech isn't just for Silicon Valley — it's for us too.",
    name: "Jaylen",
    age: 17,
    sport: "Soccer",
    color: "#E9BB00",
  },
];

const impactAreas = [
  { label: "Athletic Development", stat: "6", unit: "Sports", desc: "Golf, football, basketball, soccer, track, and VR training programs", color: "#F4767C" },
  { label: "Academic Support", stat: "85", unit: "%", desc: "Of participants improved their academic performance within one semester", color: "#0052FE" },
  { label: "Financial Literacy", stat: "200", unit: "+", desc: "Youth completed our financial responsibility education program", color: "#00D17E" },
  { label: "Community Impact", stat: "5K", unit: "+", desc: "Volunteer and community service hours contributed by participants", color: "#FF7900" },
];

export default function ImpactPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Cinematic Hero ── */}
        <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black flex items-center">
          <Image
            src="/images/urban/hero-basketball-court.jpg"
            alt="Impact"
            fill
            className="object-cover scale-110"
            style={{ filter: "contrast(1.2) brightness(0.2) saturate(0.3)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-[1]" />
          {/* Glowing stat orbs */}
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-fsl-coral/8 blur-[120px] rounded-full z-[1]" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-fsl-blue/5 blur-[150px] rounded-full z-[1]" />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Measurable Results
              </p>
              <h1 className="font-barlow text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                Real<br />
                <span className="text-fsl-coral">Impact.</span>
              </h1>
              <p className="font-redhat text-[16px] md:text-[18px] text-white/35 font-normal mt-8 max-w-[500px] leading-[1.85]">
                Every stat tells a story. Every number represents a young life transformed through sport, discipline, and community.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── ESPN Infographic Stats — Dark Section ── */}
        <section className="relative bg-[#0a0a0a] py-24 md:py-36 overflow-hidden">
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 120px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 120px)" }} />

          <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-20">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-4">By The Numbers</p>
                <h2 className="font-barlow text-[42px] md:text-[56px] font-bold text-white uppercase leading-[0.9]">
                  The Scoreboard
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
              {impactAreas.map((area, i) => (
                <ScrollReveal key={area.label} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-white/[0.02] border border-white/[0.04] p-8 md:p-10 text-center hover:bg-white/[0.04] transition-all duration-700 overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(circle at center, ${area.color}08 0%, transparent 70%)` }} />

                    <div className="relative">
                      {/* Stat */}
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        <p className="font-barlow text-[72px] md:text-[88px] lg:text-[100px] font-bold leading-none tracking-[-0.04em] transition-colors duration-500" style={{ color: area.color }}>
                          {area.stat}
                        </p>
                        <span className="font-barlow text-[32px] md:text-[40px] font-bold leading-none" style={{ color: `${area.color}80` }}>
                          {area.unit}
                        </span>
                      </div>
                      {/* Label */}
                      <p className="font-barlow text-[16px] font-bold text-white uppercase tracking-[0.1em] mb-3">{area.label}</p>
                      <div className="w-8 h-[2px] mx-auto mb-4 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: area.color }} />
                      <p className="font-redhat text-[13px] text-white/30 font-normal leading-[1.7]">{area.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Existing NikeImpact Counter Section ── */}
        <NikeImpact />

        {/* ── Testimonials — Dramatic Quote Cards ── */}
        <section className="relative py-28 md:py-40 bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/images/urban/hero-track-race.jpg" alt="" fill className="object-cover" style={{ filter: "grayscale(1)" }} />
          </div>

          <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Their Words
              </p>
              <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white uppercase leading-[0.88] mb-20">
                Stories That<br />
                <span className="text-fsl-coral">Score</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-white/[0.02] border border-white/[0.05] p-8 md:p-12 hover:bg-white/[0.04] transition-all duration-700 overflow-hidden">
                    {/* Large quotation mark */}
                    <span className="absolute -top-4 -left-2 font-barlow text-[160px] font-bold leading-none select-none pointer-events-none" style={{ color: `${t.color}10` }}>
                      &ldquo;
                    </span>

                    {/* Color bar top */}
                    <div className="w-10 h-[3px] mb-8 transition-all duration-500 group-hover:w-20" style={{ backgroundColor: t.color }} />

                    <blockquote className="relative">
                      <p className="font-redhat text-[16px] md:text-[18px] text-white/60 font-normal leading-[1.85] italic mb-8">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <footer className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${t.color}20` }}>
                          <span className="font-barlow text-[14px] font-bold" style={{ color: t.color }}>{t.name[0]}</span>
                        </div>
                        <div>
                          <p className="font-barlow text-[16px] font-bold text-white uppercase">{t.name}, Age {t.age}</p>
                          <p className="font-redhat text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: t.color }}>{t.sport}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Before/After Energy Banner ── */}
        <section className="relative py-20 md:py-28 bg-fsl-coral overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/action/teen-basketball.jpg" alt="" fill className="object-cover" style={{ filter: "grayscale(1)" }} />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="scale">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left items-center">
                <div>
                  <p className="font-barlow text-[18px] font-bold text-white/50 uppercase tracking-[0.2em] mb-2">Before F.S.L</p>
                  <p className="font-barlow text-[36px] md:text-[48px] font-bold text-white uppercase leading-[0.9]">
                    Untapped Potential
                  </p>
                </div>
                <div className="flex justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="rotate-90 md:rotate-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-barlow text-[18px] font-bold text-white/50 uppercase tracking-[0.2em] mb-2">After F.S.L</p>
                  <p className="font-barlow text-[36px] md:text-[48px] font-bold text-white uppercase leading-[0.9]">
                    Unstoppable Force
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
