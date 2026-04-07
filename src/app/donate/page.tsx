import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate — Play Your Part",
  description: "Every dollar funds equipment, coaching, and opportunities for young athletes in underserved communities. Support youth sports from $25.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const tiers = [
  { amount: "$25", title: "Supporter", desc: "Provides equipment for one young athlete for a season.", color: "#00D17E", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", impact: "1 athlete equipped" },
  { amount: "$50", title: "Builder", desc: "Covers one month of after-school programming for a student.", color: "#0052FE", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", impact: "1 month of programs" },
  { amount: "$100", title: "MVP", desc: "Sponsors a youth athlete's full tournament entry and gear.", color: "#FF7900", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", impact: "Tournament + gear" },
  { amount: "$250", title: "All-Star", desc: "Funds a full semester of mentorship and coaching for one youth.", color: "#E9BB00", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", impact: "Full semester funded" },
];

export default function DonatePage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        {/* ── Nike Campaign Hero — Full Bleed ── */}
        <section className="relative h-[90vh] min-h-[650px] overflow-hidden bg-black flex items-center justify-center">
          <Image
            src="/images/premium/donate-kids.jpg"
            alt="Support youth athletes"
            fill
            className="object-cover scale-105"
            style={{ filter: "contrast(1.15) brightness(0.2) saturate(0.35)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-[1]" />
          {/* Glow orbs */}
          <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[400px] bg-fsl-coral/10 blur-[160px] z-[1]" />
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-fsl-blue/5 blur-[120px] z-[1]" />

          <div className="relative z-[2] text-center px-6 max-w-[1000px] mx-auto">
            <ScrollReveal animation="scale">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-8">
                Every Dollar Counts
              </p>
              <h1 className="font-barlow text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[170px] font-bold text-white uppercase leading-[0.82] tracking-[-0.035em] mb-6">
                Play<br />Your <span className="text-fsl-coral">Part</span>
              </h1>
              <p className="font-redhat text-[16px] md:text-[18px] text-white/35 font-normal leading-[1.85] max-w-[520px] mx-auto mb-10">
                Behind every athlete is a community that believed in them. Your contribution writes the next chapter of their story.
              </p>
              <a
                href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] text-fsl-dark bg-white px-10 py-4 hover:bg-fsl-coral hover:text-white transition-all duration-500"
              >
                Donate Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Goal / Progress Indicator ── */}
        <section className="bg-fsl-dark py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.3em] text-fsl-coral font-semibold mb-2">2025 Campaign Goal</p>
                  <p className="font-barlow text-[36px] md:text-[48px] font-bold text-white uppercase leading-none">$50,000</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-barlow text-[28px] md:text-[36px] font-bold text-fsl-coral leading-none">$32,500</p>
                  <p className="font-redhat text-[12px] text-white/40 uppercase tracking-[0.15em] mt-1">Raised So Far</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="relative w-full h-2 bg-white/[0.06] overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-fsl-coral to-[#FF7900]" style={{ width: "65%" }} />
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-fsl-coral/50 to-[#FF7900]/50 animate-pulse" style={{ width: "65%" }} />
              </div>
              <p className="font-redhat text-[12px] text-white/30 mt-3 text-right">65% of goal reached</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Tier Cards with Sport-Colored Accents ── */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-20">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                  Choose Your Impact
                </p>
                <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] mb-5">
                  Pick Your<br />Level
                </h2>
                <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.8] max-w-[500px] mx-auto">
                  Every contribution directly funds programs, equipment, and opportunities for young athletes in underserved communities.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiers.map((t, i) => (
                <ScrollReveal key={t.title} animation="fade-up" delay={i * 100}>
                  <a
                    href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block bg-[#fafafa] overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]"
                  >
                    {/* Top color bar */}
                    <div className="h-[4px] w-full transition-all duration-500" style={{ backgroundColor: t.color }} />

                    {/* Large watermark amount */}
                    <span className="absolute -bottom-6 -right-2 font-barlow text-[140px] font-bold leading-none opacity-[0.03] select-none pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.06]" style={{ color: t.color }}>
                      {t.amount}
                    </span>

                    <div className="relative p-8 md:p-10">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${t.color}12` }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={t.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={t.icon} />
                        </svg>
                      </div>

                      {/* Amount */}
                      <p className="font-barlow text-[56px] md:text-[64px] font-bold text-fsl-dark leading-none mb-1 tracking-[-0.03em]">{t.amount}</p>

                      {/* Title */}
                      <p className="font-barlow text-[18px] font-bold uppercase tracking-[0.05em] mb-4" style={{ color: t.color }}>{t.title}</p>

                      {/* Description */}
                      <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.75] mb-6">{t.desc}</p>

                      {/* Impact tag */}
                      <span className="inline-block font-redhat text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 mb-6" style={{ backgroundColor: `${t.color}10`, color: t.color }}>
                        {t.impact}
                      </span>

                      {/* CTA */}
                      <div className="flex items-center gap-2 mt-auto">
                        <div className="w-8 h-[3px] transition-all duration-700 group-hover:w-14" style={{ backgroundColor: t.color }} />
                        <span className="font-redhat text-[11px] font-bold uppercase tracking-[0.15em] text-fsl-coral group-hover:gap-3 transition-all duration-300">
                          Donate
                        </span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fsl-coral group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Custom amount CTA */}
            <ScrollReveal animation="fade-up" delay={450}>
              <div className="mt-16 text-center">
                <p className="font-redhat text-[13px] text-[#999] mb-6">Want to give a different amount?</p>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-fsl-dark text-white px-14 py-5 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Custom Amount</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Where Your Money Goes ── */}
        <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24 text-center">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">Transparency</p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-white uppercase leading-[0.9] mb-16">
                Where It Goes
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { pct: "60%", label: "Programs & Coaching", desc: "Directly funding youth training, clinics, and mentorship" },
                { pct: "25%", label: "Equipment & Facilities", desc: "Gear, uniforms, field access, and technology" },
                { pct: "15%", label: "Operations", desc: "Admin, outreach, and community partnerships" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} animation="fade-up" delay={i * 100}>
                  <div className="group">
                    <p className="font-barlow text-[64px] md:text-[80px] font-bold text-fsl-coral leading-none mb-3">{item.pct}</p>
                    <p className="font-barlow text-[16px] font-bold text-white uppercase tracking-[0.1em] mb-2">{item.label}</p>
                    <p className="font-redhat text-[13px] text-white/30 leading-[1.7]">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NikeFooter />
    </>
  );
}
