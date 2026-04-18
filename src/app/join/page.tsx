import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join — Empower The Youth",
  description: "Partner with us, volunteer as a coach, or join our free youth programs in Los Angeles — golf, football, basketball, soccer, and track & field.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import { JoinForm } from "@/components/forms/JoinForm";
import Image from "next/image";

const benefits = [
  {
    num: "01",
    title: "Partner with Us",
    description: "Collaborate through sponsorships, facility sharing, or joint programming to empower youth across communities.",
    image: "/images/premium/team-meeting.jpg",
    color: "#0052FE",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    num: "02",
    title: "Become a Volunteer",
    description: "Share your time as a coach, mentor, or tutor in our impactful programs. Every hour makes a difference.",
    image: "/images/action/coach-training.jpg",
    color: "#FF7900",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    num: "03",
    title: "Make a Donation",
    description: "Your financial support funds programs, equipment, and resources for youth participants in our community.",
    color: "#00D17E",
    image: "/images/premium/community-together.jpg",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    link: { text: "Donate Now", href: "https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257" },
  },
  {
    num: "04",
    title: "Enroll Your Child",
    description: "Register your young athlete for our FREE multi-sport programs, mentorship tracks, and technology workshops. No tryouts. No fees.",
    color: "#E9BB00",
    image: "/images/action/teens-stretching.jpg",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function JoinPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Nike Recruitment Campaign Hero ── */}
        <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] min-h-[550px] overflow-hidden bg-black flex items-center justify-center">
          <Image
            src="/images/real/football-field-huddle.jpg"
            alt="Coach talking to youth athletes on football field with palm trees"
            fill
            className="object-cover scale-110"
            style={{ filter: "contrast(1.15) brightness(0.2) saturate(0.4)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-[1]" />
          {/* Bold glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[200px] sm:w-[600px] sm:h-[400px] bg-fsl-coral/10 blur-[180px] z-[1]" />

          <div className="relative z-[2] text-center px-6 max-w-[1100px] mx-auto">
            <ScrollReveal animation="scale">
              <p className="font-redhat text-[11px] uppercase tracking-[0.6em] text-fsl-coral font-bold mb-8">
                The Movement Needs You
              </p>
              <h1 className="font-barlow text-[40px] sm:text-[64px] md:text-[90px] lg:text-[120px] xl:text-[150px] font-bold text-white uppercase leading-[0.92] sm:leading-[0.88] md:leading-[0.82] tracking-[-0.04em]">
                Join The<br />
                <span className="text-fsl-coral">Movement</span>
              </h1>
              <p className="font-redhat text-[16px] md:text-[18px] text-white/35 font-normal mt-8 max-w-[500px] mx-auto leading-[1.85]">
                Whether you coach, volunteer, donate, or enroll — every action fuels a future champion.
              </p>
              {/* Scroll indicator */}
              <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
                <p className="font-redhat text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-20">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Benefit Cards with Athlete Imagery ── */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                    <span className="w-12 h-[2px] bg-fsl-coral" />
                    Ways To Help
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88]">
                    Four Ways<br />To Make An<br />Impact
                  </h2>
                </div>
                <p className="font-redhat text-[14px] text-[#999] max-w-[340px] leading-[1.75]">
                  Choose the path that fits you. Every role is essential to our mission.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <ScrollReveal key={b.num} animation="fade-up" delay={i * 100}>
                  <div className="group relative overflow-hidden bg-[#fafafa] transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                    {/* Image strip */}
                    <div className="relative h-[200px] md:h-[240px] overflow-hidden">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        style={{ filter: "saturate(0.8) contrast(1.05)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {/* Number overlay */}
                      <span className="absolute bottom-4 right-6 font-barlow text-[80px] md:text-[100px] font-bold text-white/10 leading-none">
                        {b.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10">
                      {/* Icon + color bar */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${b.color}12` }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d={b.icon} />
                          </svg>
                        </div>
                        <div className="w-8 h-[3px] transition-all duration-700 group-hover:w-16" style={{ backgroundColor: b.color }} />
                      </div>

                      <h3 className="font-barlow text-[28px] md:text-[34px] font-bold text-fsl-dark uppercase leading-[0.92] mb-4 group-hover:text-fsl-coral transition-colors duration-500">
                        {b.title}
                      </h3>
                      <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.8] mb-6 max-w-[420px]">
                        {b.description}
                      </p>

                      {b.link ? (
                        <a
                          href={b.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:gap-4" style={{ color: b.color }}
                        >
                          {b.link.text}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:gap-4" style={{ color: b.color }}>
                          Learn More
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </span>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Premium Application Form ── */}
        <section className="relative py-24 md:py-36 bg-[#0a0a0a] overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 opacity-[0.03]">
            <Image src="/images/urban/hero-track-race.jpg" alt="" fill className="object-cover" style={{ filter: "grayscale(1)" }} />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            {/* ── Free Program Callout ── */}
            <ScrollReveal animation="fade-up">
              <div className="mb-16 md:mb-20 border border-fsl-coral/20 bg-fsl-coral/[0.04] px-8 py-6 md:px-10 md:py-8 max-w-[800px]">
                <p className="font-barlow text-[20px] md:text-[24px] font-bold text-white uppercase leading-[1.2] mb-2">
                  All programs are <span className="text-fsl-coral">FREE</span> for athletes ages 8-17.
                </p>
                <p className="font-redhat text-[14px] md:text-[15px] text-white/40 leading-[1.7]">
                  No tryouts. No fees. Just show up ready to grow. Programs run across Los Angeles community facilities.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left — CTA text */}
              <div className="lg:col-span-5">
                <ScrollReveal animation="fade-up">
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-8">
                    <span className="w-10 h-[2px] bg-fsl-coral" />
                    Apply Now
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] font-bold text-white uppercase leading-[0.88] mb-6">
                    Ready To<br />Step Up?
                  </h2>
                  <p className="font-redhat text-[15px] text-white/30 font-normal leading-[1.85] mb-10 max-w-[400px]">
                    Fill out the form and our team will reach out within 48 hours to discuss how you can make an impact.
                  </p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { num: "150+", label: "Youth Served" },
                      { num: "6", label: "Sports Programs" },
                      { num: "92%", label: "Success Rate" },
                      { num: "15+", label: "Years Experience" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="font-barlow text-[36px] font-bold text-fsl-coral leading-none">{s.num}</p>
                        <p className="font-redhat text-[11px] text-white/25 uppercase tracking-[0.15em] mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-7">
                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm p-8 md:p-12 lg:p-14">
                    <h3 className="font-barlow text-[28px] md:text-[36px] font-bold text-white uppercase leading-[0.92] mb-2">
                      Join Our Team
                    </h3>
                    <p className="font-redhat text-[13px] text-white/25 mb-10">
                      All fields are required unless marked optional.
                    </p>

                    <JoinForm />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
