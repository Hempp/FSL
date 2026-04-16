import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Founded in Los Angeles, CA by a P.E. teacher, head football coach, and golf director with 15+ years in youth development. FSL combines six sports with mental wellness, financial literacy, and technology education.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const values = [
  { title: "Integrity", desc: "We lead with honesty, transparency, and accountability in everything we do.", color: "#F4767C", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Inclusion", desc: "Every young athlete deserves access — regardless of background, ability, or circumstance.", color: "#0052FE", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Excellence", desc: "We pursue the highest standards in coaching, mentorship, and program delivery.", color: "#FF7900", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { title: "Community", desc: "We believe in the power of collective effort to transform lives and neighborhoods.", color: "#00D17E", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const timeline = [
  { year: "2011", event: "Hoop It Up Training Camp launches in Los Angeles — youth basketball coaching for ages 8-17", accent: "#F4767C" },
  { year: "2016", event: "P.E. teaching, head football coaching, and golf direction begins at View Park Preparatory", accent: "#0052FE" },
  { year: "2020", event: "Expanded programming with life skills workshops — financial literacy, mental wellness, and technology", accent: "#FF7900" },
  { year: "2023", event: "Fundamental Sports Labs officially founded as a 501(c)(3) nonprofit in Los Angeles", accent: "#00D17E" },
  { year: "2025", event: "Six-sport platform live — adding mental wellness, financial literacy, and VR/AR technology tracks", accent: "#E9BB00" },
];

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Cinematic Hero — 85vh ESPN Feature ── */}
        <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black flex items-end">
          <Image
            src="/images/urban/community.jpg"
            alt="Our community"
            fill
            className="object-cover scale-105"
            style={{ filter: "contrast(1.15) brightness(0.25) saturate(0.4)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-[1]" />
          {/* Glowing accent orb */}
          <div className="absolute bottom-0 left-[15%] w-[500px] h-[400px] bg-fsl-coral/10 blur-[150px] z-[1]" />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Origin Story
              </p>
              <h1 className="font-barlow text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                Built From<br />
                <span className="text-fsl-coral">The Ground</span><br />
                <span className="text-white/20">Up.</span>
              </h1>
              <p className="font-redhat text-[15px] md:text-[17px] text-white/40 font-normal mt-8 max-w-[480px] leading-[1.85]">
                15 years of coaching. Thousands of lives changed. One mission — empowering the next generation through the power of sport.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Editorial Story Section — Overlapping Layout ── */}
        <section className="relative py-28 md:py-40 overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8f8f8] hidden lg:block" />

          <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
              {/* Text — overlaps image */}
              <div className="lg:col-span-6 relative z-10">
                <ScrollReveal animation="fade-right">
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-8">
                    <span className="w-10 h-[2px] bg-fsl-coral" />
                    Who We Are
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[64px] font-bold text-fsl-dark uppercase leading-[0.88] mb-10">
                    More Than<br />A Program
                  </h2>

                  {/* Bold pullquote */}
                  <div className="relative pl-6 border-l-[3px] border-fsl-coral mb-10">
                    <p className="font-barlow text-[22px] md:text-[26px] font-bold text-fsl-dark uppercase leading-[1.15] italic">
                      &ldquo;We don&apos;t just build athletes. We build leaders.&rdquo;
                    </p>
                  </div>

                  <div className="space-y-5 max-w-[520px]">
                    <p className="font-redhat text-[15px] text-[#666] font-normal leading-[1.9]">
                      Fundamental Sports Labs was born in Los Angeles, California — founded by a P.E. teacher, head football coach, and golf director with over 15 years working directly with youth. From teaching physical education at View Park Preparatory to running basketball training camps for ages 8-17, to directing recreation programs for underserved communities.
                    </p>
                    <p className="font-redhat text-[15px] text-[#666] font-normal leading-[1.9]">
                      We saw what sports could do when paired with real-world skills. The discipline of practice. The accountability of a team. The resilience that comes from losing and getting back up. These aren&apos;t just athletic lessons — they&apos;re life lessons. And too many young people only got them during the season.
                    </p>
                    <p className="font-redhat text-[15px] text-[#666] font-normal leading-[1.9]">
                      FSL was built to make them year-round. Our six-sport platform — basketball, football, soccer, golf, track &amp; field, and baseball — is the vehicle. But the destination is bigger: mental wellness, financial literacy, and technology fluency for every young athlete we reach.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Image — dramatic, overlapping */}
              <div className="lg:col-span-7 lg:col-start-6 relative">
                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/urban/friends-group.jpg"
                      alt="Youth community"
                      fill
                      className="object-cover"
                      style={{ filter: "saturate(0.85) contrast(1.08)" }}
                    />
                    {/* Overlay stat badge */}
                    <div className="absolute bottom-0 left-0 bg-fsl-coral p-6 md:p-8">
                      <p className="font-barlow text-[48px] md:text-[64px] font-bold text-white leading-none">15+</p>
                      <p className="font-redhat text-[11px] uppercase tracking-[0.2em] text-white/80 font-medium mt-1">Years of Impact</p>
                    </div>
                  </div>
                  {/* Decorative offset border */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-fsl-coral/10 -z-10 hidden lg:block" />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values — Full-Bleed Cards ── */}
        <section className="relative bg-fsl-dark py-24 md:py-36 overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

          <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                What Drives Us
              </p>
              <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white uppercase leading-[0.88] mb-6">
                Our Core<br />Values
              </h2>
              <p className="font-redhat text-[15px] text-white/30 font-normal leading-[1.8] mb-16 max-w-[450px]">
                Four pillars that guide every decision, every program, and every young life we touch.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[1px]">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full hover:bg-white/[0.06] transition-all duration-700 border border-white/[0.04] overflow-hidden">
                    {/* Large background number */}
                    <span className="absolute -top-4 -right-2 font-barlow text-[140px] font-bold leading-none opacity-[0.03] text-white select-none pointer-events-none">
                      0{i + 1}
                    </span>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${v.color}15` }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={v.icon} />
                      </svg>
                    </div>

                    {/* Color bar */}
                    <div className="w-8 h-[3px] mb-6 transition-all duration-700 group-hover:w-16" style={{ backgroundColor: v.color }} />

                    <h3 className="font-barlow text-[26px] md:text-[28px] font-bold text-white uppercase leading-tight mb-4">{v.title}</h3>
                    <p className="font-redhat text-[14px] text-white/40 font-normal leading-[1.8]">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline — Horizontal Dramatic Dates ── */}
        <section className="py-28 md:py-40 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Our Journey
              </p>
              <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] mb-20">
                The Road<br />So Far
              </h2>
            </ScrollReveal>

            {/* Desktop: horizontal scroll layout */}
            <div className="hidden md:block">
              {/* Horizontal line */}
              <div className="relative">
                <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-black/[0.06]" />
                <div className="grid grid-cols-5 gap-6">
                  {timeline.map((t, i) => (
                    <ScrollReveal key={t.year} animation="fade-up" delay={i * 120}>
                      <div className="relative group">
                        {/* Dramatic year */}
                        <p className="font-barlow text-[72px] lg:text-[96px] font-bold leading-none tracking-[-0.04em] transition-colors duration-500" style={{ color: `${t.accent}20` }}>
                          {t.year}
                        </p>
                        {/* Dot on line */}
                        <div className="w-4 h-4 rounded-full border-[3px] border-white mt-2 mb-6 transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: t.accent }} />
                        {/* Event text */}
                        <p className="font-redhat text-[14px] text-[#777] font-normal leading-[1.75] pr-4">
                          {t.event}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: vertical layout */}
            <div className="md:hidden space-y-0 border-l-2 border-black/10 ml-4">
              {timeline.map((t, i) => (
                <ScrollReveal key={`m-${t.year}`} animation="fade-left" delay={i * 100}>
                  <div className="relative pl-10 pb-12 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full" style={{ backgroundColor: t.accent }} />
                    <p className="font-barlow text-[48px] font-bold leading-none tracking-[-0.03em]" style={{ color: `${t.accent}30` }}>
                      {t.year}
                    </p>
                    <p className="font-redhat text-[15px] text-[#777] font-normal leading-[1.75] mt-2">{t.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission Pullquote Banner ── */}
        <section className="relative py-24 md:py-32 bg-fsl-coral overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/urban/hero-streetball.jpg" alt="" fill className="object-cover" style={{ filter: "grayscale(1)" }} />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24 text-center">
            <ScrollReveal animation="scale">
              <p className="font-bonvivant text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.2] mb-6">
                Every champion starts somewhere
              </p>
              <p className="font-barlow text-[28px] md:text-[42px] font-bold text-white uppercase leading-[1] tracking-[-0.02em]">
                WE MAKE SURE THEY START <span className="underline underline-offset-8 decoration-4 decoration-white/40">STRONG</span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
