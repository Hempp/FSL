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

export default function ImpactPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        <section className="relative h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-end">
          <Image src="/images/urban/hero-basketball-court.jpg" alt="Impact" fill className="object-cover" style={{ filter: "contrast(1.1) brightness(0.3) saturate(0.5)" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />Results
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              Our<br /><span className="text-fsl-coral">Impact</span>
            </h1>
            <p className="font-redhat text-[14px] text-white/40 font-normal mt-6 max-w-[400px] leading-[1.8]">
              Real results from our programs — measurable change in young lives.
            </p>
          </div>
        </section>

        <NikeImpact />

        <section className="py-24 md:py-36 bg-[#f8f8f8]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />Stories
              </p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-14">
                Changing Lives
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ScrollReveal animation="fade-up">
                <blockquote className="border-l-2 border-fsl-coral pl-8">
                  <p className="font-redhat text-[16px] text-[#555] font-normal leading-[1.8] italic">
                    &ldquo;Before joining F.S.L, I didn&apos;t believe I could succeed at anything. The coaches showed me that discipline on the field translates to success in the classroom. My grades went from Cs to As.&rdquo;
                  </p>
                  <footer className="mt-4 font-redhat text-[13px] text-[#aaa]">— Marcus, Age 16</footer>
                </blockquote>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <blockquote className="border-l-2 border-fsl-blue pl-8">
                  <p className="font-redhat text-[16px] text-[#555] font-normal leading-[1.8] italic">
                    &ldquo;The financial responsibility program changed how I think about money. I opened my first savings account at 14 and now I&apos;m saving for college. My parents couldn&apos;t believe it.&rdquo;
                  </p>
                  <footer className="mt-4 font-redhat text-[13px] text-[#aaa]">— Aisha, Age 14</footer>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
