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
      <main>
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-end">
          <Image
            src="/images/urban/team-huddle.jpg"
            alt="Our team"
            fill
            className="object-cover"
            style={{ filter: "contrast(1.1) brightness(0.3) saturate(0.5)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />
              Meet
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              Our Board
              <br />
              <span className="text-fsl-coral">Members</span>
            </h1>
          </div>
        </section>

        {/* ── Board Members ──────────────────────────────── */}
        <section className="py-24 md:py-36 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />
                Leadership Team
              </p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-4">
                <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9]">
                  The People
                  <br />
                  Behind F.S.L
                </h2>
                <p className="font-redhat text-[14px] text-[#999] max-w-[360px] leading-[1.75]">
                  Dedicated leaders united by a shared vision — empowering youth
                  through sports, education, and community.
                </p>
              </div>
            </ScrollReveal>

            <BoardMemberCards />
          </div>
        </section>

        {/* ── Values Strip ───────────────────────────────── */}
        <section className="bg-[#0a0a0a] py-20 md:py-28 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { num: "01", label: "Community", desc: "Rooted in service" },
                  { num: "02", label: "Excellence", desc: "Standards, not shortcuts" },
                  { num: "03", label: "Equity", desc: "Access for every youth" },
                  { num: "04", label: "Growth", desc: "On & off the field" },
                ].map((v) => (
                  <div key={v.num} className="group">
                    <span className="font-barlow text-[48px] md:text-[64px] font-bold text-white/[0.04] leading-none block mb-4 group-hover:text-fsl-coral/10 transition-colors duration-700">
                      {v.num}
                    </span>
                    <h3 className="font-barlow text-[20px] md:text-[24px] font-bold text-white uppercase leading-tight mb-2">
                      {v.label}
                    </h3>
                    <p className="font-redhat text-[13px] text-white/30">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Join CTA ───────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#fafafa]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5">
                Want to make a difference?
              </p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-8">
                Join Our Mission
              </h2>
              <p className="font-redhat text-[15px] text-[#666] leading-[1.85] mb-12 max-w-[520px] mx-auto">
                We&apos;re always looking for passionate individuals who share our
                vision of empowering youth through sports, education, and community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/join"
                  className="font-redhat text-[12px] font-semibold uppercase tracking-[0.2em] text-white bg-fsl-dark px-10 py-4 rounded-full hover:bg-fsl-coral transition-colors duration-300"
                >
                  Get Involved
                </Link>
                <Link
                  href="/donate"
                  className="font-redhat text-[12px] font-semibold uppercase tracking-[0.2em] text-fsl-dark bg-transparent border border-fsl-dark/20 px-10 py-4 rounded-full hover:border-fsl-coral hover:text-fsl-coral transition-colors duration-300"
                >
                  Donate
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <NikeMarquee dark />
        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
