import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Board Members — F.S.L",
  description:
    "Meet the leadership team behind Fundamental Sports Labs. Dedicated to empowering urban youth through sports, wellness, and education.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { NikeMarquee } from "@/components/nike/NikeMarquee";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BoardMemberCards } from "@/components/nike/BoardMembers";
import Link from "next/link";
import Image from "next/image";

export default function BoardMembersPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Magazine Editorial Hero ── */}
        <section className="relative h-[80vh] min-h-[550px] overflow-hidden bg-black flex items-end">
          <Image
            src="/images/urban/team-huddle.jpg"
            alt="Our team"
            fill
            className="object-cover scale-105"
            style={{ filter: "contrast(1.15) brightness(0.22) saturate(0.4)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-[1]" />
          {/* Glow */}
          <div className="absolute bottom-0 left-[20%] w-[500px] h-[400px] bg-fsl-coral/8 blur-[150px] z-[1]" />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Leadership
              </p>
              <h1 className="font-barlow text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                The Board<br />
                <span className="text-fsl-coral">Members</span>
              </h1>
              <p className="font-redhat text-[15px] md:text-[17px] text-white/35 font-normal mt-8 max-w-[480px] leading-[1.85]">
                Visionaries, leaders, and changemakers united by a shared mission to transform young lives through sport.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Board Members — Magazine Profile Cards ── */}
        <section className="py-24 md:py-36 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                    <span className="w-12 h-[2px] bg-fsl-coral" />
                    Meet The Team
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[64px] font-bold text-fsl-dark uppercase leading-[0.88]">
                    The People<br />
                    Behind <span className="text-fsl-coral">F.S.L</span>
                  </h2>
                </div>
                <p className="font-redhat text-[14px] text-[#999] max-w-[380px] leading-[1.75]">
                  Dedicated leaders united by a shared vision — empowering youth through sports, education, and community.
                </p>
              </div>
            </ScrollReveal>

            <BoardMemberCards />
          </div>
        </section>

        {/* ── Values — Bold Typographic Section ── */}
        <section className="relative bg-[#0a0a0a] py-24 md:py-36 overflow-hidden">
          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 120px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 120px)" }} />

          <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Foundation
              </p>
              <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white uppercase leading-[0.88] mb-20">
                What We<br />Stand For
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
              {[
                { num: "01", label: "Community", desc: "Rooted in service and collective strength", color: "#F4767C", word: "SERVE" },
                { num: "02", label: "Excellence", desc: "Standards over shortcuts, always", color: "#0052FE", word: "STRIVE" },
                { num: "03", label: "Equity", desc: "Access and opportunity for every youth", color: "#FF7900", word: "INCLUDE" },
                { num: "04", label: "Growth", desc: "Continuous evolution on and off the field", color: "#00D17E", word: "EVOLVE" },
              ].map((v, i) => (
                <ScrollReveal key={v.num} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-white/[0.02] border border-white/[0.04] p-8 md:p-10 h-full hover:bg-white/[0.04] transition-all duration-700 overflow-hidden">
                    {/* Giant background word */}
                    <span className="absolute -bottom-4 -right-2 font-barlow text-[100px] lg:text-[120px] font-bold leading-none opacity-[0.02] text-white select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
                      {v.word}
                    </span>

                    <span className="font-barlow text-[56px] md:text-[72px] font-bold leading-none block mb-4 transition-colors duration-700" style={{ color: `${v.color}10` }}>
                      {v.num}
                    </span>

                    <div className="w-8 h-[3px] mb-6 transition-all duration-500 group-hover:w-14" style={{ backgroundColor: v.color }} />

                    <h3 className="font-barlow text-[22px] md:text-[26px] font-bold text-white uppercase leading-tight mb-3">
                      {v.label}
                    </h3>
                    <p className="font-redhat text-[13px] text-white/30 font-normal leading-[1.7]">
                      {v.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Join CTA — Premium Banner ── */}
        <section className="relative py-28 md:py-36 bg-white overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] hidden lg:block" />

          <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="fade-right">
                <div>
                  <p className="font-bonvivant text-[28px] md:text-[36px] text-fsl-coral leading-[1.2] mb-4">
                    Want to make a difference?
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] font-bold text-fsl-dark uppercase leading-[0.88] mb-6">
                    Join Our<br />Mission
                  </h2>
                  <p className="font-redhat text-[15px] text-[#666] leading-[1.85] mb-10 max-w-[450px]">
                    We&apos;re always looking for passionate individuals who share our vision of empowering youth through sports, education, and community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/join"
                      className="group inline-flex items-center justify-center gap-3 font-redhat text-[12px] font-bold uppercase tracking-[0.2em] text-white bg-fsl-dark px-10 py-4 hover:bg-fsl-coral transition-all duration-500"
                    >
                      Get Involved
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link
                      href="/donate"
                      className="inline-flex items-center justify-center font-redhat text-[12px] font-bold uppercase tracking-[0.2em] text-fsl-dark border-2 border-fsl-dark/10 px-10 py-4 hover:border-fsl-coral hover:text-fsl-coral transition-all duration-500"
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200}>
                <div className="relative aspect-[4/3] overflow-hidden hidden lg:block">
                  <Image
                    src="/images/premium/community-together.jpg"
                    alt="Community"
                    fill
                    className="object-cover"
                    style={{ filter: "saturate(0.85) contrast(1.05)" }}
                  />
                  <div className="absolute bottom-0 left-0 bg-fsl-coral p-5">
                    <p className="font-barlow text-[36px] font-bold text-white leading-none">150+</p>
                    <p className="font-redhat text-[10px] uppercase tracking-[0.2em] text-white/80 mt-1">Lives Changed</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <NikeMarquee dark />
        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
