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
  { amount: "$25", title: "Supporter", desc: "Provides equipment for one young athlete for a season.", color: "#00D17E" },
  { amount: "$50", title: "Builder", desc: "Covers one month of after-school programming for a student.", color: "#0052FE" },
  { amount: "$100", title: "MVP", desc: "Sponsors a youth athlete's full tournament entry and gear.", color: "#FF7900" },
  { amount: "$250", title: "All-Star", desc: "Funds a full semester of mentorship and coaching for one youth.", color: "#E9BB00" },
];

export default function DonatePage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        <section className="relative h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-end">
          <Image src="/images/urban/friends-group.jpg" alt="Support youth athletes" fill className="object-cover" style={{ filter: "contrast(1.1) brightness(0.25) saturate(0.4)" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="absolute bottom-0 left-[10%] w-[400px] h-[300px] bg-fsl-coral/8 blur-[120px] z-[1]" />
          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />Give Back
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[130px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              Play Your<br /><span className="text-fsl-coral">Part</span>
            </h1>
            <p className="font-redhat text-[14px] text-white/40 font-normal mt-6 max-w-[400px] leading-[1.8]">
              Every dollar counts and makes a tangible difference in a child&apos;s life.
            </p>
          </div>
        </section>

        {/* Donation tiers */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />Make an Impact
              </p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-6">
                Choose Your<br />Level
              </h2>
              <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.7] mb-14 max-w-[500px]">
                Every contribution directly funds programs, equipment, and opportunities for young athletes in underserved communities.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tiers.map((t, i) => (
                <ScrollReveal key={t.title} animation="fade-up" delay={i * 80}>
                  <a
                    href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-[#f8f8f8] p-8 md:p-10 transition-all duration-500 hover:bg-[#f3f3f3] hover:-translate-y-1"
                  >
                    <div className="w-8 h-[3px] mb-8 transition-all duration-700 group-hover:w-14" style={{ backgroundColor: t.color }} />
                    <p className="font-barlow text-[48px] md:text-[56px] font-bold text-fsl-dark leading-none mb-2">{t.amount}</p>
                    <p className="font-barlow text-[18px] font-bold text-fsl-dark uppercase tracking-wide mb-4">{t.title}</p>
                    <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.7]">{t.desc}</p>
                    <span className="inline-flex items-center gap-2 font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-coral mt-6 group-hover:gap-3 transition-all duration-300">
                      Donate
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Custom amount CTA */}
            <ScrollReveal animation="fade-up" delay={350}>
              <div className="mt-12 text-center">
                <a
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex bg-fsl-dark text-white px-14 py-5 rounded-full font-redhat text-[13px] font-semibold uppercase tracking-[0.15em] overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Custom Amount</span>
                  <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-full" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <NikeFooter />
    </>
  );
}
