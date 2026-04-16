import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate — Play Your Part",
  description: "Every dollar funds equipment, coaching, and opportunities for young athletes in underserved communities. Tax-deductible donations start at $25.",
};

import { JsonLd } from "@/components/JsonLd";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const tiers = [
  {
    amount: "$25",
    title: "Supporter",
    desc: "Covers cleats, a ball, and practice gear so one athlete can step on the field ready to compete.",
    color: "#00D17E",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    impact: "1 athlete equipped for a season",
  },
  {
    amount: "$50",
    title: "Builder",
    desc: "Funds a full month of after-school programming — drills, conditioning, and life-skills workshops for one youth athlete.",
    color: "#0052FE",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    impact: "1 month of programming",
  },
  {
    amount: "$100",
    title: "MVP",
    desc: "Pays a youth athlete's tournament entry fee and provides the gear they need to compete — jersey, shorts, and cleats.",
    color: "#FF7900",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    impact: "Tournament entry + gear",
  },
  {
    amount: "$250",
    title: "All-Star",
    desc: "Funds an entire semester of training, 1-on-1 mentorship, life-skills coaching, and leadership development for one youth.",
    color: "#E9BB00",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    impact: "Full semester funded",
  },
];

const fundAllocation = [
  { pct: 60, label: "Programs & Coaching", desc: "Youth training, clinics, mentorship, and life-skills workshops", color: "#F4767C" },
  { pct: 25, label: "Equipment & Facilities", desc: "Gear, uniforms, field access, and technology", color: "#0052FE" },
  { pct: 15, label: "Operations", desc: "Admin, outreach, and community partnerships", color: "#FF7900" },
];

export default function DonatePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DonateAction",
          recipient: {
            "@type": "NGO",
            name: "Fundamental Sports Labs",
            taxID: "39-4190687",
          },
          description:
            "Tax-deductible donation to support free youth sports programs in underserved Los Angeles communities. Every dollar funds equipment, coaching, and opportunities for young athletes.",
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Hero Section ── */}
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
              {/* Tax-Deductible Badge */}
              <div className="inline-flex items-center gap-2 border border-fsl-coral/40 bg-fsl-coral/10 px-5 py-2 mb-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4767C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
                <span className="font-redhat text-[11px] uppercase tracking-[0.3em] text-fsl-coral font-bold">
                  100% Tax-Deductible
                </span>
              </div>

              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-8">
                Every Dollar Counts
              </p>
              <h1 className="font-barlow text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[170px] font-bold text-white uppercase leading-[0.82] tracking-[-0.035em] mb-6">
                Play<br />Your <span className="text-fsl-coral">Part</span>
              </h1>
              <p className="font-redhat text-[16px] md:text-[18px] text-white/35 font-normal leading-[1.85] max-w-[520px] mx-auto mb-4">
                Behind every athlete is a community that believed in them. Your contribution writes the next chapter of their story.
              </p>
              <p className="font-redhat text-[12px] text-white/25 leading-[1.6] max-w-[480px] mx-auto mb-10">
                Fundamental Sports Labs is a registered 501(c)(3) nonprofit. Your donation is tax-deductible. EIN: 39-4190687
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

        {/* ── Mission Statement (replaces fake campaign meter) ── */}
        <section className="bg-fsl-dark py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <p className="font-redhat text-[11px] uppercase tracking-[0.3em] text-fsl-coral font-semibold mb-4">Our Promise</p>
                <p className="font-barlow text-[28px] md:text-[36px] font-bold text-white uppercase leading-[1.1] max-w-[700px] mx-auto">
                  Your support keeps our programs free for every athlete
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Why Free? Section ── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[900px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                  Why Free?
                </p>
                <h2 className="font-barlow text-[42px] md:text-[56px] font-bold text-fsl-dark uppercase leading-[0.88] mb-8">
                  No Child<br />Left Out
                </h2>
                <p className="font-redhat text-[16px] md:text-[18px] text-[#666] font-normal leading-[1.85] max-w-[600px] mx-auto mb-6">
                  100% of our programs are free. We believe no child should be turned away because of cost. Youth sports should not be a privilege reserved for families who can afford registration fees, equipment, and travel.
                </p>
                <p className="font-redhat text-[16px] md:text-[18px] text-[#666] font-normal leading-[1.85] max-w-[600px] mx-auto">
                  Your donation makes that possible. Every dollar goes directly toward keeping the doors open and the fields full for young athletes in underserved communities across Los Angeles.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Fund a Mentor Coach — Featured Banner ── */}
        <section className="relative py-20 md:py-28 bg-[#0a0a0a] overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-fsl-coral/8 blur-[180px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-fsl-blue/5 blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-fsl-coral animate-pulse" />
                  <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-semibold">Featured Program</span>
                </div>
                <h2 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] font-bold text-white uppercase leading-[0.88] tracking-[-0.02em] mb-5">
                  Fund a<br />Mentor <span className="text-fsl-coral">Coach</span>
                </h2>
                <p className="font-redhat text-[15px] sm:text-[16px] text-white/35 font-normal leading-[1.85] max-w-[560px] mx-auto">
                  Your donation funds real 1-on-1 sessions with a top coach — tracking grades, goals, and growth. Less than the cost of a dinner out, and it changes a life.
                </p>
              </div>
            </ScrollReveal>

            {/* Mini tier cards */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto mb-12">
                {[
                  { amount: "$75", label: "Single Session", period: "", highlight: false },
                  { amount: "$125", label: "Monthly", period: "/mo", highlight: true },
                  { amount: "$225", label: "Weekly", period: "/mo", highlight: false },
                  { amount: "$400", label: "Intensive", period: "/mo", highlight: false },
                ].map((tier) => (
                  <div
                    key={tier.label}
                    className={`relative text-center py-8 px-6 border transition-all duration-500 ${
                      tier.highlight
                        ? "border-fsl-coral/40 bg-fsl-coral/[0.06] shadow-[0_0_60px_-15px_rgba(244,118,124,0.2)]"
                        : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]"
                    }`}
                  >
                    {tier.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-redhat text-[9px] uppercase tracking-[0.3em] font-bold text-fsl-dark bg-fsl-coral px-4 py-1">
                        Most Popular
                      </span>
                    )}
                    <p className="font-barlow text-[48px] font-bold text-white leading-none tracking-[-0.02em]">
                      {tier.amount}
                      <span className="text-[16px] text-white/30 font-medium">{tier.period}</span>
                    </p>
                    <p className="font-barlow text-[14px] font-bold uppercase tracking-[0.1em] text-fsl-coral mt-2">{tier.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="text-center">
                <a
                  href="/mentor-coaching"
                  className="group inline-flex items-center gap-3 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] text-fsl-dark bg-white px-10 py-4 hover:bg-fsl-coral hover:text-white transition-all duration-500"
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Impact Tiers ── */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-20">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                  Choose Your Impact
                </p>
                <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] mb-5">
                  See What Your<br />Dollar Does
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

        {/* ── Where Your Money Goes (with visual bar chart) ── */}
        <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">Transparency</p>
                <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-white uppercase leading-[0.9] mb-4">
                  Where It Goes
                </h2>
                <p className="font-redhat text-[14px] text-white/30 leading-[1.7] max-w-[500px] mx-auto">
                  We believe in full transparency. Here is exactly how your donation is put to work.
                </p>
              </div>
            </ScrollReveal>

            {/* Visual allocation bar */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="max-w-[800px] mx-auto mb-16">
                <div className="flex h-4 w-full overflow-hidden">
                  {fundAllocation.map((item) => (
                    <div
                      key={item.label}
                      className="h-full first:rounded-l last:rounded-r"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  ))}
                </div>
                <div className="flex mt-4 gap-6 justify-center flex-wrap">
                  {fundAllocation.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                      <span className="font-redhat text-[12px] text-white/50">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Breakdown cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {fundAllocation.map((item, i) => (
                <ScrollReveal key={item.label} animation="fade-up" delay={i * 100}>
                  <div className="group text-center">
                    <p className="font-barlow text-[64px] md:text-[80px] font-bold leading-none mb-3" style={{ color: item.color }}>{item.pct}%</p>
                    <p className="font-barlow text-[16px] font-bold text-white uppercase tracking-[0.1em] mb-2">{item.label}</p>
                    <p className="font-redhat text-[13px] text-white/30 leading-[1.7]">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tax Receipt & Final CTA ── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[900px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                  For Your Records
                </p>
                <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-6">
                  Tax Receipt
                </h2>
                <p className="font-redhat text-[16px] text-[#666] font-normal leading-[1.85] max-w-[560px] mx-auto mb-4">
                  {`You'll receive a tax receipt via email for your records. All donations to Fundamental Sports Labs are tax-deductible to the full extent of the law.`}
                </p>
                <p className="font-redhat text-[13px] text-[#999] leading-[1.6] max-w-[480px] mx-auto mb-10">
                  Fundamental Sports Labs is a 501(c)(3) nonprofit organization. EIN: 39-4190687
                </p>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] text-white bg-fsl-dark px-10 py-4 hover:bg-fsl-coral transition-all duration-500"
                >
                  Make a Tax-Deductible Gift
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
