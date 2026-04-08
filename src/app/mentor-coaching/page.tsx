import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentor Coaching — Every Athlete Deserves Someone in Their Corner",
  description:
    "Donation-funded mentorship pairing top coaches with student athletes. Sponsor real 1-on-1 sessions, goal tracking, and accountability starting at $75/session.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CoachApplicationForm } from "@/components/forms/CoachApplicationForm";
import Image from "next/image";
import Link from "next/link";

/* ── DATA ── */

const ZEFFY_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257";

const steps = [
  {
    num: "01",
    title: "Sponsor Sessions",
    desc: "Choose a package — from a single session to twice-weekly intensive coaching.",
    color: "#0052FE",
  },
  {
    num: "02",
    title: "We Match",
    desc: "FSL pairs a top certified coach with a student athlete based on sport, location, and goals.",
    color: "#FF7900",
  },
  {
    num: "03",
    title: "Watch Them Grow",
    desc: "After every session, coaches log progress. You get monthly impact reports showing real results.",
    color: "#00D17E",
  },
];

const tiers = [
  {
    name: "Single Session",
    price: "$75",
    period: "one-time",
    color: "#00D17E",
    popular: false,
    features: [
      "One 1-hour session with a top coach",
      "Goal review & action plan",
      "Text check-in follow-up",
      "Session notes & progress logged",
    ],
    breakdown: { coach: "$50", operations: "$19", scholarship: "$6" },
    hourly: "$50/hr to coach",
  },
  {
    name: "Monthly",
    price: "$125",
    period: "/month",
    color: "#0052FE",
    popular: true,
    features: [
      "Two 1-hour sessions per month",
      "Text check-ins between sessions",
      "Academic accountability tracking",
      "Monthly progress report to sponsor",
    ],
    breakdown: { coach: "$85", operations: "$31", scholarship: "$9" },
    hourly: "$42.50/hr to coach",
  },
  {
    name: "Weekly",
    price: "$225",
    period: "/month",
    color: "#FF7900",
    popular: false,
    features: [
      "Four 1-hour sessions per month",
      "Full accountability & goal tracking",
      "Report card monitoring",
      "College prep guidance",
      "Priority text/call access",
    ],
    breakdown: { coach: "$160", operations: "$52", scholarship: "$13" },
    hourly: "$40/hr to coach",
  },
  {
    name: "Intensive",
    price: "$400",
    period: "/month",
    color: "#F4767C",
    popular: false,
    features: [
      "Eight 1-hour sessions per month (2x/week)",
      "Full mentorship & life coaching",
      "College prep & scholarship guidance",
      "Family communication & updates",
      "Priority event access",
      "Direct coach phone line",
    ],
    breakdown: { coach: "$280", operations: "$95", scholarship: "$25" },
    hourly: "$35/hr to coach",
  },
];

const coachDuties = [
  {
    title: "Set Quarterly Goals",
    desc: "Academic, athletic, and personal milestones mapped out together.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Weekly / Bi-weekly Check-ins",
    desc: "Text, call, or video — consistent contact that builds trust.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Track Grades & Training",
    desc: "Monitoring attendance, academics, and athletic development in real time.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Flag Issues Early",
    desc: "Academic slipping, mood changes, or missed sessions — caught before they spiral.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
  {
    title: "Monthly Sponsor Reports",
    desc: "Transparent progress updates so sponsors see the impact of every dollar.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Connect to Resources",
    desc: "Linking athletes with camps, scholarships, trainers, and community programs.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
];

const requirements = [
  "Background check required",
  "2+ years coaching or mentoring experience",
  "Committed to weekly availability",
  "Passion for youth development",
];

const benefits = [
  "Earn $35-50/hr per session",
  "Flexible schedule — you set your availability",
  "Training and certification provided",
  "Build a caseload of 10-20 athletes",
  "Make a real, measurable impact",
];

const bgCheckSteps = [
  { step: "1", label: "Apply online" },
  { step: "2", label: "Receive background check invitation" },
  { step: "3", label: "Complete screening (2-3 business days)" },
  { step: "4", label: "Get matched with athletes" },
];

const bgCheckBadges = [
  "Criminal History Check",
  "Sex Offender Registry",
  "Identity Verification",
  "Reference Check",
];

const impactStats = [
  { value: "93%", label: "of mentored athletes improved grades" },
  { value: "150+", label: "active mentor-athlete pairs" },
  { value: "4.8/5", label: "coach satisfaction rating" },
  { value: "85%", label: "athlete retention rate" },
];

/* ── PAGE ── */

export default function MentorCoachingPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        {/* ═══════════════════════════════════════════
            HERO — 85vh
        ═══════════════════════════════════════════ */}
        <section className="relative h-[85vh] min-h-[650px] overflow-hidden bg-black flex items-end">
          <Image
            src="/images/premium/coach-mentoring.jpg"
            alt="Coach mentoring a young athlete"
            fill
            className="object-cover scale-105"
            style={{ filter: "contrast(1.15) brightness(0.18) saturate(0.3)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-[1]" />

          {/* Glow orbs */}
          <div className="absolute bottom-[8%] left-[10%] w-[500px] h-[400px] bg-fsl-coral/10 blur-[160px] z-[1]" />
          <div className="absolute top-[25%] right-[8%] w-[350px] h-[300px] bg-[#0052FE]/5 blur-[120px] z-[1]" />

          {/* Diagonal accent strips */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            <div className="absolute -top-[20%] -right-[10%] w-[200px] md:w-[280px] h-[140%] bg-fsl-coral/[0.05] rotate-[20deg]" />
            <div className="absolute -top-[20%] right-[18%] md:right-[22%] w-[100px] md:w-[160px] h-[140%] bg-[#0052FE]/[0.03] rotate-[20deg]" />
          </div>

          <div className="relative z-[2] max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 w-full pb-16 md:pb-24">
            <ScrollReveal animation="fade-up" duration={1000}>
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-6 flex items-center gap-4">
                <span className="w-10 h-[1px] bg-fsl-coral/40" />
                Mentor Coaching
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100} duration={1200}>
              <h1 className="font-barlow text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[150px] font-black text-white uppercase leading-[0.85] tracking-[-0.03em] max-w-[1000px]">
                Mentor<br />
                <span className="font-bonvivant normal-case text-[0.45em] text-fsl-coral/80 italic tracking-normal inline-block -mt-2 md:-mt-4">
                  changing lives
                </span>
                <br />
                <span className="text-fsl-coral">Coaching</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300} duration={900}>
              <p className="font-redhat text-[14px] md:text-[16px] text-white/35 font-normal leading-[1.85] mt-6 md:mt-10 max-w-[500px]">
                Every athlete deserves someone in their corner. Fund a coach who
                checks in, holds them accountable, and helps them reach their
                goals.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={500} duration={900}>
              <div className="flex flex-wrap gap-4 mt-10 md:mt-14">
                <a
                  href={ZEFFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-fsl-coral text-white px-10 md:px-14 py-4 md:py-5 font-barlow text-[13px] md:text-[15px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(244,118,124,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10">Sponsor an Athlete</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms]" />
                </a>
                <a
                  href="#become-a-coach"
                  className="group border-2 border-white/15 text-white/50 px-10 md:px-14 py-4 md:py-5 font-barlow text-[13px] md:text-[15px] font-bold uppercase tracking-[0.2em] hover:border-white/40 hover:text-white transition-all duration-500 hover:bg-white/[0.03]"
                >
                  Become a Coach
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW IT WORKS — 3 Steps
        ═══════════════════════════════════════════ */}
        <section className="py-24 md:py-36 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-24">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                  Simple Process
                </p>
                <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] mb-5">
                  How It Works
                </h2>
                <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.8] max-w-[500px] mx-auto">
                  Three steps to change a young athlete&apos;s life. It starts with you.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((s, i) => (
                <ScrollReveal key={s.num} animation="fade-up" delay={i * 120}>
                  <div className="relative group">
                    {/* Connector line on desktop */}
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-current to-transparent opacity-10" style={{ color: s.color }} />
                    )}
                    <div className="text-center">
                      <div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundColor: `${s.color}10` }}
                      >
                        <span
                          className="font-barlow text-[28px] font-bold"
                          style={{ color: s.color }}
                        >
                          {s.num}
                        </span>
                      </div>
                      <h3 className="font-barlow text-[22px] md:text-[26px] font-bold text-fsl-dark uppercase tracking-[0.02em] mb-3">
                        {s.title}
                      </h3>
                      <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.8] max-w-[320px] mx-auto">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SPONSORSHIP TIERS — 3 Cards
        ═══════════════════════════════════════════ */}
        <section className="py-24 md:py-36 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-20">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                  Choose Your Impact
                </p>
                <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] mb-5">
                  Sponsorship<br />Tiers
                </h2>
                <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.8] max-w-[520px] mx-auto">
                  100% of your donation goes to work. We show you exactly where
                  every dollar lands.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {tiers.map((t, i) => (
                <ScrollReveal key={t.name} animation="fade-up" delay={i * 120}>
                  <div className="group relative bg-white overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col h-full">
                    {/* Top color bar */}
                    <div
                      className="h-[5px] w-full"
                      style={{ backgroundColor: t.color }}
                    />

                    {/* Popular badge */}
                    {t.popular && (
                      <div
                        className="absolute top-6 right-6 font-redhat text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 text-white"
                        style={{ backgroundColor: t.color }}
                      >
                        Most Popular
                      </div>
                    )}

                    {/* Watermark */}
                    <span
                      className="absolute -bottom-4 -right-2 font-barlow text-[120px] font-bold leading-none opacity-[0.03] select-none pointer-events-none"
                      style={{ color: t.color }}
                    >
                      {t.price}
                    </span>

                    <div className="relative p-8 md:p-10 flex flex-col flex-1">
                      {/* Tier name */}
                      <p
                        className="font-barlow text-[16px] font-bold uppercase tracking-[0.1em] mb-2"
                        style={{ color: t.color }}
                      >
                        {t.name}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="font-barlow text-[56px] md:text-[64px] font-bold text-fsl-dark leading-none tracking-[-0.03em]">
                          {t.price}
                        </span>
                        <span className="font-redhat text-[14px] text-[#999]">
                          {t.period}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {t.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="shrink-0 mt-0.5"
                            >
                              <path
                                d="M5 13l4 4L19 7"
                                stroke={t.color}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="font-redhat text-[14px] text-[#666] leading-[1.6]">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Transparency breakdown */}
                      <div className="border-t border-black/[0.06] pt-5 mb-6">
                        <p className="font-redhat text-[10px] uppercase tracking-[0.2em] text-[#aaa] font-semibold mb-3">
                          Where it goes
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          <span className="font-redhat text-[12px] text-[#777]">
                            <span className="font-semibold" style={{ color: t.color }}>
                              {t.breakdown.coach}
                            </span>{" "}
                            Coach
                          </span>
                          <span className="font-redhat text-[12px] text-[#777]">
                            <span className="font-semibold text-fsl-dark">
                              {t.breakdown.operations}
                            </span>{" "}
                            Operations
                          </span>
                          <span className="font-redhat text-[12px] text-[#777]">
                            <span className="font-semibold text-[#E9BB00]">
                              {t.breakdown.scholarship}
                            </span>{" "}
                            Scholarship Fund
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={ZEFFY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative block w-full text-center py-4 font-barlow text-[13px] font-bold uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-500 hover:shadow-lg"
                        style={{ backgroundColor: t.color }}
                      >
                        <span className="relative z-10">Sponsor Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[800ms]" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHAT COACHES DO — 6-item Grid
        ═══════════════════════════════════════════ */}
        <section className="py-24 md:py-36 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-20">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                  The Playbook
                </p>
                <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] mb-5">
                  What Coaches Do
                </h2>
                <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.8] max-w-[480px] mx-auto">
                  Our mentor coaches aren&apos;t just checking boxes. They&apos;re building
                  relationships that change trajectories.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {coachDuties.map((d, i) => (
                <ScrollReveal key={d.title} animation="fade-up" delay={i * 80}>
                  <div className="group relative bg-[#fafafa] p-8 md:p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]">
                    <div className="w-12 h-12 rounded-full bg-fsl-coral/10 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F4767C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={d.icon} />
                      </svg>
                    </div>
                    <h3 className="font-barlow text-[18px] font-bold text-fsl-dark uppercase tracking-[0.03em] mb-2">
                      {d.title}
                    </h3>
                    <p className="font-redhat text-[13px] text-[#888] leading-[1.75]">
                      {d.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BECOME A COACH — Dark Section + Form
        ═══════════════════════════════════════════ */}
        <section
          id="become-a-coach"
          className="relative py-24 md:py-36 bg-fsl-dark overflow-hidden"
        >
          {/* Subtle background image */}
          <Image
            src="/images/premium/coach-training.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "brightness(0.08) saturate(0.2)" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fsl-dark/90 via-fsl-dark/80 to-fsl-dark z-[1]" />

          {/* Glow */}
          <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-fsl-coral/5 blur-[150px] z-[1]" />
          <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-[#0052FE]/4 blur-[120px] z-[1]" />

          <div className="relative z-[2] max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left — Info */}
              <div>
                <ScrollReveal animation="fade-right">
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5 flex items-center gap-4">
                    <span className="w-10 h-[1px] bg-fsl-coral/40" />
                    Join Us
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white uppercase leading-[0.88] mb-8">
                    Join Our<br />
                    <span className="text-fsl-coral">Coaching</span> Team
                  </h2>
                  <p className="font-redhat text-[15px] text-white/40 font-normal leading-[1.85] max-w-[460px] mb-12">
                    We&apos;re looking for dedicated mentors who want to invest
                    in the next generation. Competitive pay, flexible hours, real
                    purpose.
                  </p>
                </ScrollReveal>

                {/* Requirements */}
                <ScrollReveal animation="fade-right" delay={150}>
                  <div className="mb-10">
                    <h3 className="font-barlow text-[14px] font-bold text-white/60 uppercase tracking-[0.15em] mb-4">
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {requirements.map((r) => (
                        <li key={r} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-fsl-coral/15 flex items-center justify-center shrink-0">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#F4767C"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-redhat text-[14px] text-white/60">
                            {r}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Benefits */}
                <ScrollReveal animation="fade-right" delay={250}>
                  <div>
                    <h3 className="font-barlow text-[14px] font-bold text-white/60 uppercase tracking-[0.15em] mb-4">
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#00D17E]/15 flex items-center justify-center shrink-0">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#00D17E"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-redhat text-[14px] text-white/60">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right — Application Form */}
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] p-8 md:p-10 lg:p-12">
                  <h3 className="font-barlow text-[24px] md:text-[28px] font-bold text-white uppercase tracking-[0.02em] mb-8">
                    Coach Application
                  </h3>

                  <CoachApplicationForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BACKGROUND CHECK SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-24 md:py-36 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left — Content */}
              <div>
                <ScrollReveal animation="fade-right">
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-5">
                    Youth Safety
                  </p>
                  <h2 className="font-barlow text-[36px] md:text-[48px] lg:text-[56px] font-bold text-fsl-dark uppercase leading-[0.88] mb-6">
                    Your Safety,<br />
                    <span className="text-fsl-coral">Our Priority</span>
                  </h2>
                  <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.85] mb-10 max-w-[460px]">
                    All coaches undergo comprehensive background screening before
                    being matched with any student athlete. No exceptions.
                  </p>
                </ScrollReveal>

                {/* Process steps */}
                <ScrollReveal animation="fade-right" delay={150}>
                  <div className="space-y-4 mb-10">
                    {bgCheckSteps.map((s) => (
                      <div key={s.step} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-fsl-coral/10 flex items-center justify-center shrink-0">
                          <span className="font-barlow text-[14px] font-bold text-fsl-coral">
                            {s.step}
                          </span>
                        </div>
                        <span className="font-redhat text-[14px] text-[#666]">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-right" delay={250}>
                  <p className="font-redhat text-[12px] text-[#aaa] leading-[1.7] italic">
                    Background checks are renewed annually. FSL partners with
                    nationally accredited screening providers.
                  </p>
                </ScrollReveal>
              </div>

              {/* Right — Badges */}
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {bgCheckBadges.map((badge, i) => {
                    const icons = [
                      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                      "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                      "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
                      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    ];
                    const colors = ["#00D17E", "#F4767C", "#0052FE", "#FF7900"];
                    return (
                      <div
                        key={badge}
                        className="group bg-[#fafafa] p-6 md:p-8 text-center transition-all duration-500 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                      >
                        <div
                          className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundColor: `${colors[i]}10` }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={colors[i]}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d={icons[i]} />
                          </svg>
                        </div>
                        <p className="font-barlow text-[13px] font-bold text-fsl-dark uppercase tracking-[0.08em] leading-snug">
                          {badge}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            IMPACT STATS BAR
        ═══════════════════════════════════════════ */}
        <section className="relative py-16 md:py-20 bg-fsl-dark overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-fsl-coral/5 blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {impactStats.map((stat, i) => (
                <ScrollReveal key={stat.label} animation="fade-up" delay={i * 100}>
                  <div className="text-center">
                    <p className="font-barlow text-[42px] md:text-[56px] lg:text-[64px] font-bold text-white leading-none tracking-[-0.02em] mb-2">
                      {stat.value}
                    </p>
                    <p className="font-redhat text-[12px] md:text-[13px] text-white/35 uppercase tracking-[0.1em] leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════════ */}
        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
