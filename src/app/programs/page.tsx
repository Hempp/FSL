import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — Sports, Technology, Wellness & Financial Responsibility",
  description: "Free youth sports programs in Los Angeles — basketball, football, soccer, golf, track & field, and baseball. Plus AI classes by Phazur Labs, VR/AR training, mental wellness, and financial responsibility.",
};

import { JsonLd } from "@/components/JsonLd";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, DollarSign, Users, Shirt } from "lucide-react";

/* ── DATA ── */
const sports = [
  {
    title: "Basketball",
    tag: "01",
    desc: "Fundamental skill development, structured training, and game knowledge that builds discipline and character.",
    image: "/images/urban/basketball-rim.jpg",
    color: "#0052FE",
    features: ["5v5 & 3v3 leagues", "Position-specific training", "Summer camps & clinics"],
  },
  {
    title: "Football",
    tag: "02",
    desc: "Learning the structure of the game — positioning, reads, and discipline that builds character beyond the field.",
    image: "/images/urban/football-play.jpg",
    color: "#FF7900",
    features: ["Flag football (ages 8–12)", "Full-contact (ages 13–18)", "Skills combine events"],
  },
  {
    title: "Soccer",
    tag: "03",
    desc: "Building from the ground up — ball control, spacing, and team structure that teaches communication and accountability.",
    image: "/images/urban/soccer-ball.jpg",
    color: "#00D17E",
    features: ["Co-ed recreational leagues", "Development travel teams", "Goalkeeper training"],
  },
  {
    title: "Golf",
    tag: "04",
    desc: "The fundamentals of patience, precision, and process — where the structure of practice directly mirrors success.",
    image: "/images/sports/golf-swing.jpg",
    color: "#E9BB00",
    features: ["Beginner to intermediate", "On-course playing lessons", "PGA-trained instructors"],
  },
  {
    title: "Track & Field",
    tag: "05",
    desc: "Sprint, distance, relay, and field event training. Building speed, endurance, and disciplined habits.",
    image: "/images/urban/hero-track-race.jpg",
    color: "#F4767C",
    features: ["Sprint & hurdle training", "Distance & cross country", "Field events (jump, throw)"],
  },
  {
    title: "Baseball",
    tag: "06",
    desc: "Hitting, pitching, fielding, and base running fundamentals. Building hand-eye coordination, patience, and team chemistry.",
    image: "/images/sports/hero-athlete.jpg",
    color: "#CC2222",
    features: ["Batting & pitching clinics", "Fielding fundamentals", "Game strategy & situational play"],
  },
];

const tech = [
  {
    title: "AI & Machine Learning",
    subtitle: "Powered by Phazur Labs",
    desc: "Hands-on AI classes teaching youth to build, train, and deploy machine learning models — real-world skills for the next generation.",
    image: "/images/action/teens-collab.jpg",
    color: "#0052FE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" /><circle cx="12" cy="12" r="2" /></svg>
    ),
    features: ["Intro to AI & prompt engineering", "Sports performance analytics", "Build your own AI project", "Phazur Labs certified"],
  },
  {
    title: "VR/AR Training",
    subtitle: "Immersive Performance Lab",
    desc: "Step into virtual reality to train reaction time, spatial awareness, and game-day decision-making.",
    image: "/images/sports/vr-headset.jpg",
    color: "#FF7900",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="2" y="7" width="20" height="10" rx="3" /><circle cx="8" cy="12" r="2" /><circle cx="16" cy="12" r="2" /><path d="M10 12h4" /></svg>
    ),
    features: ["VR game simulation drills", "AR form analysis", "Reaction time training", "Virtual scouting"],
  },
  {
    title: "Coding & Robotics",
    subtitle: "STEM Integration",
    desc: "Learn to code through sports — build apps that track stats, program robots, and create data dashboards.",
    image: "/images/action/coach-training.jpg",
    color: "#00D17E",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
    ),
    features: ["Python & JavaScript", "Sports stats apps", "Arduino robotics", "Data visualization"],
  },
];

const wellness = [
  {
    title: "Sports Psychology",
    desc: "Mindset training, visualization, stress management, and confidence building with licensed professionals.",
    image: "/images/action/teens-stretching.jpg",
    color: "#0052FE",
    stat: "93%",
    statLabel: "improved focus",
  },
  {
    title: "Financial Literacy",
    desc: "Interactive workshops on budgeting, saving, investing, and entrepreneurship — winning in life.",
    image: "/images/action/teens-workshop.jpg",
    color: "#00D17E",
    stat: "500+",
    statLabel: "youth trained",
  },
  {
    title: "Recovery & Nutrition",
    desc: "Injury prevention, nutrition guidance, hydration science, and recovery protocols.",
    image: "/images/sports/wellness-yoga.jpg",
    color: "#FF7900",
    stat: "12",
    statLabel: "week programs",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Fundamental Sports Labs Programs",
          itemListElement: sports.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              provider: {
                "@type": "SportsOrganization",
                name: "Fundamental Sports Labs",
              },
              url: "https://fundamentalsportslabs.org/programs",
            },
          })),
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content" className="overflow-hidden">

        {/* ═══════════════════════════════════════
            ══  HERO — full-bleed, diagonal cut  ══
            ═══════════════════════════════════════ */}
        <section className="relative h-[85vh] min-h-[600px] max-h-[1000px] bg-black flex items-end overflow-hidden">
          <Image
            src="/images/urban/hero-track-race.jpg"
            alt="Athletes racing on track"
            fill
            className="object-cover"
            style={{ filter: "contrast(1.2) brightness(0.2) saturate(0.3)" }}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Big number watermark */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] font-barlow text-[30vw] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            08
          </div>

          {/* Diagonal sport color strip */}
          <div className="absolute bottom-0 left-0 right-0 h-[120px] overflow-hidden">
            <div className="absolute inset-0 flex">
              {["#0052FE", "#FF7900", "#00D17E", "#E9BB00", "#F4767C", "#CC2222"].map((c, i) => (
                <div
                  key={c}
                  className="flex-1 origin-bottom-left"
                  style={{
                    background: c,
                    clipPath: "polygon(0 60%, 100% 30%, 100% 100%, 0 100%)",
                    opacity: 0.15 + i * 0.03,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-20 md:pb-28 max-w-[1800px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {["#0052FE", "#FF7900", "#00D17E", "#E9BB00", "#F4767C", "#CC2222"].map((c) => (
                    <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-white/40 font-medium">
                  9 Programs &middot; 6 Sports
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-barlow text-[52px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                Our<br />
                <span className="relative">
                  Programs
                  <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-fsl-coral" />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="font-redhat text-[15px] sm:text-[16px] text-white/35 font-normal mt-8 max-w-[480px] leading-[1.85]">
                Six core sports. Cutting-edge technology. Mental wellness. Financial literacy. Everything a young leader needs — on and off the field.
              </p>
            </ScrollReveal>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <span className="font-redhat text-[9px] uppercase tracking-[0.4em] text-white/15">Explore</span>
            <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden">
              <div className="w-full h-3 bg-fsl-coral/50 absolute animate-[slideDown_2s_infinite]" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  CORE SPORTS — editorial cards    ══
            ═══════════════════════════════════════ */}
        <section className="py-20 sm:py-28 md:py-40 bg-white relative">
          {/* Section label */}
          <div className="absolute top-8 sm:top-12 left-6 md:left-16 lg:left-24">
            <span className="font-redhat text-[10px] uppercase tracking-[0.35em] text-fsl-dark/20 font-medium">
              Core Sports
            </span>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
                <div>
                  <h2 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em]">
                    Six Sports.<br />
                    <span className="text-fsl-coral">One Mission.</span>
                  </h2>
                </div>
                <p className="font-redhat text-[14px] text-[#999] font-normal leading-[1.8] mt-6 md:mt-0 max-w-[380px] md:text-right">
                  Professional coaching developing fundamentals that transition from the field into every area of life.
                </p>
              </div>
            </ScrollReveal>

            {/* Sport cards — alternating layout with big numbers */}
            <div className="space-y-4 sm:space-y-6">
              {sports.map((s, i) => (
                <ScrollReveal key={s.title} animation="fade-up" delay={i * 40}>
                  <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#fafafa] hover:bg-[#f5f5f5] transition-all duration-700 overflow-hidden">
                    {/* Image side */}
                    <div className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[420px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.06]"
                        style={{ filter: "saturate(0.85) contrast(1.08)" }}
                      />
                      {/* Color overlay on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-multiply"
                        style={{ backgroundColor: s.color }}
                      />
                      {/* Number overlay */}
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-8">
                        <span
                          className="font-barlow text-[64px] sm:text-[80px] font-bold leading-none"
                          style={{ color: s.color, opacity: 0.25 }}
                        >
                          {s.tag}
                        </span>
                      </div>
                      {/* Sport color bar at bottom */}
                      <div
                        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-1000"
                        style={{ backgroundColor: s.color }}
                      />
                    </div>

                    {/* Content side */}
                    <div className={`relative p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      {/* Background number */}
                      <span className="absolute top-4 right-4 sm:top-8 sm:right-8 font-barlow text-[100px] sm:text-[140px] font-bold text-black/[0.02] leading-none select-none pointer-events-none">
                        {s.tag}
                      </span>

                      <div className="relative z-10">
                        <div
                          className="w-10 h-[3px] mb-5 sm:mb-6 transition-all duration-700 group-hover:w-20"
                          style={{ backgroundColor: s.color }}
                        />
                        <h3 className="font-barlow text-[32px] sm:text-[40px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-4 sm:mb-5 tracking-[-0.01em]">
                          {s.title}
                        </h3>
                        <p className="font-redhat text-[14px] sm:text-[15px] text-[#777] font-normal leading-[1.8] mb-6 sm:mb-8 max-w-[440px]">
                          {s.desc}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                          {s.features.map((f) => (
                            <span
                              key={f}
                              className="font-redhat text-[11px] sm:text-[12px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border font-medium uppercase tracking-wide"
                              style={{
                                borderColor: `${s.color}30`,
                                color: s.color,
                                backgroundColor: `${s.color}08`,
                              }}
                            >
                              {f}
                            </span>
                          ))}
                        </div>

                        <Link
                          href="/join"
                          className="inline-flex items-center gap-3 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark group-hover:text-fsl-coral transition-colors duration-500"
                        >
                          <span className="w-8 h-[1.5px] bg-current transition-all duration-500 group-hover:w-12" />
                          Join Program
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  TECH — dark section, bold grid    ══
            ═══════════════════════════════════════ */}
        <section className="relative py-20 sm:py-28 md:py-40 bg-[#080810] text-white overflow-hidden">
          {/* Background grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-fsl-blue/5 blur-[200px] pointer-events-none" />

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full bg-fsl-coral animate-pulse" />
                    <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium">Innovation Lab</span>
                  </div>
                  <h2 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] font-bold text-white uppercase leading-[0.88] tracking-[-0.02em]">
                    Technology<br />
                    <span className="text-fsl-coral">Programs</span>
                  </h2>
                </div>
                <p className="font-redhat text-[14px] text-white/30 font-normal leading-[1.8] mt-6 md:mt-0 max-w-[350px] md:text-right">
                  Powered by Phazur Labs — AI, VR/AR, and coding for the next generation of athletes.
                </p>
              </div>
            </ScrollReveal>

            {/* Tech cards — stacked with glass effect */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {tech.map((t, i) => (
                <ScrollReveal key={t.title} animation="fade-up" delay={i * 120}>
                  <div className="group relative bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-[1.06]"
                        style={{ filter: "saturate(0.6) contrast(1.15) brightness(0.7)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/40 to-transparent" />
                      {/* Icon */}
                      <div
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                        style={{
                          borderColor: `${t.color}40`,
                          backgroundColor: `${t.color}15`,
                          color: t.color,
                        }}
                      >
                        {t.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <span className="font-redhat text-[10px] uppercase tracking-[0.3em] font-semibold mb-3 block" style={{ color: t.color }}>
                        {t.subtitle}
                      </span>
                      <h3 className="font-barlow text-[24px] sm:text-[28px] font-bold text-white uppercase leading-tight mb-3 tracking-[-0.01em]">
                        {t.title}
                      </h3>
                      <p className="font-redhat text-[13px] sm:text-[14px] text-white/35 font-normal leading-[1.75] mb-6">
                        {t.desc}
                      </p>

                      {/* Features */}
                      <div className="space-y-2.5">
                        {t.features.map((f) => (
                          <div key={f} className="flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                            <span className="font-redhat text-[12px] text-white/45">{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom accent */}
                      <div
                        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-1000"
                        style={{ backgroundColor: t.color }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  WELLNESS — magazine editorial     ══
            ═══════════════════════════════════════ */}
        <section className="py-20 sm:py-28 md:py-40 bg-[#fafafa] relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-24">
                <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 inline-flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-fsl-coral/50" />
                  Beyond the Field
                  <span className="w-6 h-[1px] bg-fsl-coral/50" />
                </span>
                <h2 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em] mt-5">
                  Wellness &<br />Life Skills
                </h2>
                <p className="font-redhat text-[14px] sm:text-[15px] text-[#999] font-normal leading-[1.8] mt-6 max-w-[450px] mx-auto">
                  The structure of sports mirrors the structure of life. Discipline, preparation, and fundamentals — on and off the field.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {wellness.map((w, i) => (
                <ScrollReveal key={w.title} animation="fade-up" delay={i * 100}>
                  <div className="group bg-white hover:shadow-xl transition-all duration-700 overflow-hidden">
                    {/* Image with stat overlay */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={w.image}
                        alt={w.title}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-[1.06]"
                        style={{ filter: "saturate(0.8) contrast(1.05)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* Stat badge */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                        <span className="font-barlow text-[40px] sm:text-[48px] font-bold text-white leading-none tracking-tight">
                          {w.stat}
                        </span>
                        <span className="block font-redhat text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">
                          {w.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <div className="w-8 h-[3px] mb-4 sm:mb-5 transition-all duration-700 group-hover:w-14" style={{ backgroundColor: w.color }} />
                      <h3 className="font-barlow text-[22px] sm:text-[26px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                        {w.title}
                      </h3>
                      <p className="font-redhat text-[13px] sm:text-[14px] text-[#888] font-normal leading-[1.75]">
                        {w.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  WHAT WE DO — 4 pillar cards       ══
            ═══════════════════════════════════════ */}
        <section className="py-20 sm:py-28 md:py-40 bg-white relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-24">
                <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 inline-flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-fsl-coral/50" />
                  Our Pillars
                  <span className="w-6 h-[1px] bg-fsl-coral/50" />
                </span>
                <h2 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em] mt-5">
                  What We Do
                </h2>
                <p className="font-redhat text-[14px] sm:text-[15px] text-[#999] font-normal leading-[1.8] mt-6 max-w-[500px] mx-auto">
                  From competitive play to mentorship and gear — we invest in every part of a young athlete&apos;s journey.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  title: "Tournaments",
                  desc: "Competitive events across 6 sports. Teams and individuals compete at city and regional level.",
                  href: "/tournaments",
                  color: "#0052FE",
                  tag: "01",
                },
                {
                  title: "Clinics",
                  desc: "Focused skill development sessions led by professional coaches. Weekly and seasonal camps.",
                  href: "/tournaments#clinics",
                  color: "#FF7900",
                  tag: "02",
                },
                {
                  title: "Mentor Coaching",
                  desc: "Donation-funded accountability coaches who check in on athletes, track goals, and keep them on track.",
                  href: "/mentor-coaching",
                  color: "#F4767C",
                  tag: "03",
                },
                {
                  title: "Equipment Donations",
                  desc: "Jerseys, shoes, and gear donated to schools and youth programs in need across Los Angeles.",
                  href: "/tournaments#equipment",
                  color: "#00D17E",
                  tag: "04",
                },
              ].map((card, i) => (
                <ScrollReveal key={card.title} animation="fade-up" delay={i * 100}>
                  <Link
                    href={card.href}
                    className="group relative block bg-[#fafafa] overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]"
                  >
                    {/* Top color bar */}
                    <div className="h-[4px] w-full" style={{ backgroundColor: card.color }} />

                    {/* Watermark number */}
                    <span
                      className="absolute -bottom-4 -right-2 font-barlow text-[120px] font-bold leading-none opacity-[0.03] select-none pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.06]"
                      style={{ color: card.color }}
                    >
                      {card.tag}
                    </span>

                    <div className="relative p-6 sm:p-8 md:p-10">
                      <div
                        className="w-10 h-[3px] mb-5 transition-all duration-700 group-hover:w-16"
                        style={{ backgroundColor: card.color }}
                      />
                      <h3 className="font-barlow text-[22px] sm:text-[26px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                        {card.title}
                      </h3>
                      <p className="font-redhat text-[13px] sm:text-[14px] text-[#888] font-normal leading-[1.75] mb-6">
                        {card.desc}
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="w-6 h-[1.5px] bg-current transition-all duration-500 group-hover:w-10" style={{ color: card.color }} />
                        <span className="font-redhat text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: card.color }}>
                          Learn More
                        </span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: card.color }}>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  PROGRAM DETAILS — practical info  ══
            ═══════════════════════════════════════ */}
        <section className="py-20 sm:py-28 md:py-40 bg-[#f5f5f5] relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16 md:mb-24">
                <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 inline-flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-fsl-coral/50" />
                  Everything You Need to Know
                  <span className="w-6 h-[1px] bg-fsl-coral/50" />
                </span>
                <h2 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em] mt-5">
                  Program Details
                </h2>
                <p className="font-redhat text-[14px] sm:text-[15px] text-[#999] font-normal leading-[1.8] mt-6 max-w-[500px] mx-auto">
                  Year-round programming for young athletes ages 8&ndash;17 across Los Angeles. No experience necessary.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Schedule */}
              <ScrollReveal animation="fade-up" delay={0}>
                <div className="bg-white p-6 sm:p-8 md:p-10 h-full">
                  <div className="w-12 h-12 rounded-full bg-fsl-coral/10 flex items-center justify-center mb-5">
                    <Calendar className="w-5 h-5 text-fsl-coral" />
                  </div>
                  <h3 className="font-barlow text-[20px] sm:text-[22px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                    Schedule
                  </h3>
                  <div className="space-y-3">
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      <span className="font-semibold text-fsl-dark">Season:</span> Year-round programming
                    </p>
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      <span className="font-semibold text-fsl-dark">Days:</span> Saturdays + select weekdays after school
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Times */}
              <ScrollReveal animation="fade-up" delay={80}>
                <div className="bg-white p-6 sm:p-8 md:p-10 h-full">
                  <div className="w-12 h-12 rounded-full bg-fsl-blue/10 flex items-center justify-center mb-5">
                    <Clock className="w-5 h-5 text-fsl-blue" />
                  </div>
                  <h3 className="font-barlow text-[20px] sm:text-[22px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                    Times
                  </h3>
                  <div className="space-y-3">
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      <span className="font-semibold text-fsl-dark">Weekends:</span> 9:00 AM &ndash; 12:00 PM
                    </p>
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      <span className="font-semibold text-fsl-dark">Weekdays:</span> 3:30 PM &ndash; 5:30 PM
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal animation="fade-up" delay={160}>
                <div className="bg-white p-6 sm:p-8 md:p-10 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#00D17E]/10 flex items-center justify-center mb-5">
                    <MapPin className="w-5 h-5 text-[#00D17E]" />
                  </div>
                  <h3 className="font-barlow text-[20px] sm:text-[22px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                    Location
                  </h3>
                  <div className="space-y-3">
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      Los Angeles, CA
                    </p>
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      Various community facilities, parks, and school campuses
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Cost */}
              <ScrollReveal animation="fade-up" delay={240}>
                <div className="bg-white p-6 sm:p-8 md:p-10 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#E9BB00]/10 flex items-center justify-center mb-5">
                    <DollarSign className="w-5 h-5 text-[#E9BB00]" />
                  </div>
                  <h3 className="font-barlow text-[20px] sm:text-[22px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                    Cost
                  </h3>
                  <div className="space-y-3">
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      <span className="font-semibold text-fsl-dark">Registration:</span> Free for all athletes
                    </p>
                    <p className="font-redhat text-[13px] sm:text-[14px] text-fsl-coral font-medium leading-[1.75]">
                      No child is turned away due to inability to pay.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Ages */}
              <ScrollReveal animation="fade-up" delay={320}>
                <div className="bg-white p-6 sm:p-8 md:p-10 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#FF7900]/10 flex items-center justify-center mb-5">
                    <Users className="w-5 h-5 text-[#FF7900]" />
                  </div>
                  <h3 className="font-barlow text-[20px] sm:text-[22px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                    Ages
                  </h3>
                  <div className="space-y-3">
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      <span className="font-semibold text-fsl-dark">Eligibility:</span> Ages 8&ndash;17
                    </p>
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      All skill levels welcome — no experience required
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* What to Bring */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="bg-white p-6 sm:p-8 md:p-10 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#CC2222]/10 flex items-center justify-center mb-5">
                    <Shirt className="w-5 h-5 text-[#CC2222]" />
                  </div>
                  <h3 className="font-barlow text-[20px] sm:text-[22px] font-bold text-fsl-dark uppercase leading-tight mb-3 tracking-[-0.01em]">
                    What to Bring
                  </h3>
                  <div className="space-y-3">
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      Athletic shoes, water bottle, and a positive attitude
                    </p>
                    <p className="font-redhat text-[13px] sm:text-[14px] text-[#777] leading-[1.75]">
                      <span className="font-semibold text-fsl-dark">Equipment:</span> Provided through our donation program
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  JOIN STRIP — bold CTA bar         ══
            ═══════════════════════════════════════ */}
        <section className="relative py-16 sm:py-20 bg-fsl-dark overflow-hidden">
          {/* Diagonal stripes */}
          <div className="absolute inset-0 opacity-10">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute h-full w-[200px]"
                style={{
                  left: `${i * 25}%`,
                  background: ["#0052FE", "#FF7900", "#00D17E", "#E9BB00", "#F4767C", "#CC2222"][i],
                  transform: "skewX(-15deg)",
                  opacity: 0.3,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-barlow text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white uppercase leading-[0.9] tracking-[-0.02em]">
                Ready to <span className="text-fsl-coral">play?</span>
              </h3>
              <p className="font-redhat text-[13px] sm:text-[14px] text-white/40 mt-3 max-w-[400px]">
                Join 500+ young athletes building fundamentals that last a lifetime.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="/join"
                className="bg-fsl-coral text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-redhat text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-fsl-dark transition-all duration-500"
              >
                Join Now
              </Link>
              <a
                href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/25 text-white/70 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-redhat text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.15em] hover:border-white hover:text-white transition-all duration-500"
              >
                Donate
              </a>
            </div>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
