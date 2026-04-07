import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Founded by a seasoned coach with 15+ years of experience. Learn about our mission, values, and journey empowering urban youth through sports and education.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const values = [
  { title: "Integrity", desc: "We lead with honesty, transparency, and accountability in everything we do." },
  { title: "Inclusion", desc: "Every young athlete deserves access — regardless of background, ability, or circumstance." },
  { title: "Excellence", desc: "We pursue the highest standards in coaching, mentorship, and program delivery." },
  { title: "Community", desc: "We believe in the power of collective effort to transform lives and neighborhoods." },
];

const timeline = [
  { year: "2010", event: "Coach begins running basketball camps in local communities" },
  { year: "2015", event: "Expanded to multi-sport programming with volunteer coaches" },
  { year: "2020", event: "Added financial responsibility and technology education tracks" },
  { year: "2023", event: "Fundamental Sports Labs officially founded as a nonprofit" },
  { year: "2025", event: "Serving 150+ youth athletes across multiple programs" },
];

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-end">
          <Image src="/images/urban/community.jpg" alt="Our community" fill className="object-cover" style={{ filter: "contrast(1.1) brightness(0.3) saturate(0.5)" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />Our Story
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              About<br /><span className="text-fsl-coral">F.S.L</span>
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-8 flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-fsl-coral/50" />Who We Are
                  </p>
                  <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-8">
                    More Than<br />A Program
                  </h2>
                  <div className="space-y-5">
                    <p className="font-redhat text-[15px] text-[#666] font-normal leading-[1.85]">
                      Fundamental Sports Labs was founded by a seasoned coach with over 15 years of experience — from running basketball camps to teaching P.E. for nearly a decade, and leading as a head varsity coach.
                    </p>
                    <p className="font-redhat text-[15px] text-[#666] font-normal leading-[1.85]">
                      We understand the unique challenges today&apos;s youth face. Our programs go beyond sports, teaching the same structure and discipline from sports — applied to mental health, technology, and financial responsibility.
                    </p>
                    <p className="font-redhat text-[15px] text-[#666] font-normal leading-[1.85]">
                      Together, we&apos;re raising resilient youth who are ready for whatever comes next.
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src="/images/urban/friends-group.jpg" alt="Youth community" fill className="object-cover" style={{ filter: "saturate(0.8) contrast(1.05)" }} />
                  <div className="absolute -bottom-3 -right-3 w-full h-full border border-fsl-coral/15 -z-10 hidden lg:block" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-[#f8f8f8]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />What Drives Us
              </p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-14">
                Our Values
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.06]">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} animation="fade-up" delay={i * 80}>
                  <div className="bg-white p-10 md:p-14 group hover:bg-[#fcfcfc] transition-colors duration-500">
                    <h3 className="font-barlow text-[24px] font-bold text-fsl-dark uppercase mb-3">{v.title}</h3>
                    <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.7]">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 md:py-36">
          <div className="max-w-[800px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />Our Journey
              </p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-14">
                Timeline
              </h2>
            </ScrollReveal>
            <div className="space-y-0 border-l-2 border-black/10 ml-4">
              {timeline.map((t, i) => (
                <ScrollReveal key={t.year} animation="fade-left" delay={i * 100}>
                  <div className="relative pl-10 pb-10 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-fsl-coral" />
                    <p className="font-barlow text-[28px] font-bold text-fsl-dark">{t.year}</p>
                    <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.7] mt-1">{t.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
