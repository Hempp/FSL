import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournaments & Clinics",
  description:
    "Register for free FSL youth tournaments, skills combines, and weekly clinics across basketball, football, soccer, golf, and track & field in Los Angeles.",
};

import { JsonLd } from "@/components/JsonLd";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { EquipmentRequestForm } from "@/components/forms/EquipmentRequestForm";
import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const tournaments = [
  {
    title: "Fall Classic Basketball Tournament",
    date: "Nov 15-16, 2025",
    day: "15",
    month: "NOV",
    location: "Los Angeles Sports Center",
    ages: "Ages 10-18",
    capacity: "16 teams",
    fee: "$150/team",
    color: "#0052FE",
    sport: "Basketball",
    image: "/images/sports/basketball-game.jpg",
    desc: "Two days of elite 5-on-5 competition across four age divisions. Trophies, MVP awards, and college scout exposure for every bracket.",
  },
  {
    title: "Winter Football Skills Combine",
    date: "Dec 7, 2025",
    day: "07",
    month: "DEC",
    location: "Inglewood Field Complex",
    ages: "Ages 8-16",
    capacity: "Open",
    fee: "$25/athlete",
    color: "#FF7900",
    sport: "Football",
    image: "/images/sports/football-action.jpg",
    desc: "Combine-style testing with 40-yard dash, shuttle run, vertical jump, and position-specific drills led by former collegiate coaches.",
  },
  {
    title: "Spring Soccer Showdown",
    date: "Mar 14-15, 2026",
    day: "14",
    month: "MAR",
    location: "Carson Park Fields",
    ages: "Ages 8-14",
    capacity: "24 teams",
    fee: "$125/team",
    color: "#00D17E",
    sport: "Soccer",
    image: "/images/sports/soccer-game.jpg",
    desc: "Round-robin group play into single-elimination brackets. Full referee crews, live scoring, and championship medals for finalists.",
  },
  {
    title: "Track & Field Invitational",
    date: "Apr 18, 2026",
    day: "18",
    month: "APR",
    location: "LA Valley College Track",
    ages: "Ages 10-18",
    capacity: "Open",
    fee: "Free entry",
    color: "#F4767C",
    sport: "Track",
    image: "/images/sports/track-start.jpg",
    desc: "Sprint, relay, and field events with electronic timing and certified results. Open to all youth athletes in the greater LA area.",
  },
  {
    title: "Spring Baseball Classic",
    date: "May 3-4, 2026",
    day: "03",
    month: "MAY",
    location: "Rancho Cienega Sports Complex",
    ages: "Ages 8-16",
    capacity: "12 teams",
    fee: "$150/team",
    color: "#CC2222",
    sport: "Baseball",
    image: "/images/sports/hero-athlete.jpg",
    desc: "Double-elimination tournament with umpire crews, live scoring, and MVP awards. Showcasing the next generation of diamond talent.",
  },
];

const clinics = [
  {
    title: "Golf Fundamentals Clinic",
    schedule: "Every Saturday",
    location: "Rolling Hills Golf Course",
    ages: "Ages 8-16",
    fee: "$40/session",
    color: "#E9BB00",
    sport: "Golf",
    image: "/images/sports/golf-swing.jpg",
    desc: "Grip, stance, swing mechanics, and on-course etiquette with PGA-trained instructors. Clubs provided for beginners.",
  },
  {
    title: "Basketball Skills Lab",
    schedule: "Tuesdays & Thursdays",
    location: "FSL Training Center",
    ages: "Ages 10-18",
    fee: "$30/session",
    color: "#0052FE",
    sport: "Basketball",
    image: "/images/sports/youth-basketball.jpg",
    desc: "Ball handling, shooting form, defensive footwork, and game IQ development in a high-energy lab environment.",
  },
  {
    title: "Speed & Agility Camp",
    schedule: "Summer 2026 (June 9-20)",
    location: "LA Valley College",
    ages: "Ages 8-18",
    fee: "$200/2 weeks",
    color: "#F4767C",
    sport: "Speed",
    image: "/images/sports/track-running.jpg",
    desc: "Two-week intensive covering sprint mechanics, ladder drills, cone work, and sport-specific acceleration for all athletes.",
  },
  {
    title: "Multi-Sport Introduction",
    schedule: "Monthly (First Saturday)",
    location: "Various Locations",
    ages: "Ages 6-10",
    fee: "Free",
    color: "#00D17E",
    sport: "Multi",
    image: "/images/action/teens-stretching.jpg",
    desc: "Rotating introduction to basketball, soccer, flag football, and track. Designed to help young athletes discover their passion.",
  },
];

/* ────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────── */

export default function TournamentsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Fundamental Sports Labs Tournaments & Clinics",
          itemListElement: [
            ...tournaments.map((t, i) => ({
              "@type": "ListItem" as const,
              position: i + 1,
              item: {
                "@type": "SportsEvent",
                name: t.title,
                description: t.desc,
                startDate: t.date,
                location: {
                  "@type": "Place",
                  name: t.location,
                },
                organizer: {
                  "@type": "SportsOrganization",
                  name: "Fundamental Sports Labs",
                  url: "https://fundamentalsportslabs.org",
                },
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                image: `https://fundamentalsportslabs.org${t.image}`,
                offers: {
                  "@type": "Offer",
                  price: t.fee,
                  priceCurrency: "USD",
                },
              },
            })),
            ...clinics.map((c, i) => ({
              "@type": "ListItem" as const,
              position: tournaments.length + i + 1,
              item: {
                "@type": "Event",
                name: c.title,
                description: c.desc,
                location: {
                  "@type": "Place",
                  name: c.location,
                },
                organizer: {
                  "@type": "SportsOrganization",
                  name: "Fundamental Sports Labs",
                  url: "https://fundamentalsportslabs.org",
                },
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                image: `https://fundamentalsportslabs.org${c.image}`,
                offers: {
                  "@type": "Offer",
                  price: c.fee,
                  priceCurrency: "USD",
                },
              },
            })),
          ],
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ═══════════════════════════════════
            HERO — 85vh
        ═══════════════════════════════════ */}
        <section className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] min-h-[550px] overflow-hidden bg-black flex items-center justify-center">
          <Image
            src="/images/sports/basketball-game.jpg"
            alt="Youth athletes competing"
            fill
            className="object-cover scale-110"
            style={{ filter: "contrast(1.2) brightness(0.18) saturate(0.3)" }}
            priority
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40 z-[1]" />

          {/* Colored glows */}
          <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[300px] bg-fsl-coral/10 blur-[140px] z-[1]" />
          <div className="absolute top-[15%] right-[8%] w-[250px] h-[250px] bg-[#0052FE]/8 blur-[120px] z-[1]" />

          <div className="relative z-[2] text-center px-6 md:px-16 max-w-[1200px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral/70 font-medium mb-8 flex items-center justify-center gap-4">
                <span className="w-10 h-[1px] bg-fsl-coral/40" />
                Compete &middot; Train &middot; Grow
                <span className="w-10 h-[1px] bg-fsl-coral/40" />
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-barlow text-[36px] sm:text-[56px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                Tournaments<br />
                <span className="text-fsl-coral">&amp; Clinics</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={250}>
              <p className="font-redhat text-[15px] md:text-[17px] text-white/35 font-normal leading-[1.8] mt-8 max-w-[560px] mx-auto">
                From weekend tournaments to weekly skill labs — competitive events
                and expert-led clinics designed to elevate every young athlete.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex items-center justify-center gap-3 mt-10">
                {[
                  { color: "#0052FE", label: "Basketball" },
                  { color: "#FF7900", label: "Football" },
                  { color: "#00D17E", label: "Soccer" },
                  { color: "#E9BB00", label: "Golf" },
                  { color: "#F4767C", label: "Track" },
                  { color: "#CC2222", label: "Baseball" },
                ].map((s) => (
                  <span
                    key={s.label}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: s.color }}
                    title={s.label}
                  />
                ))}
                <span className="font-redhat text-[12px] text-white/25 ml-2 uppercase tracking-[0.15em]">
                  {tournaments.length + clinics.length} Events
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[3]" />
        </section>

        {/* ═══════════════════════════════════
            UPCOMING TOURNAMENTS
        ═══════════════════════════════════ */}
        <section className="py-24 md:py-36 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-4">
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                    <span className="w-12 h-[2px] bg-fsl-coral" />
                    Competition
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88]">
                    Upcoming<br />Tournaments
                  </h2>
                </div>
                <p className="font-redhat text-[14px] text-[#999] max-w-[360px] leading-[1.75]">
                  Organized competition with certified officials, timed results,
                  and championship-caliber experiences for every age group.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {tournaments.map((t, i) => (
                <ScrollReveal key={t.title} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-white border border-black/[0.06] overflow-hidden hover:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)] transition-all duration-700">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                        style={{ filter: "saturate(0.85) contrast(1.05)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Date badge */}
                      <div className="absolute top-4 left-4 bg-white px-4 py-2.5 flex flex-col items-center leading-none shadow-lg">
                        <span className="font-barlow text-[28px] font-bold" style={{ color: t.color }}>{t.day}</span>
                        <span className="font-barlow text-[12px] font-bold text-fsl-dark uppercase tracking-[0.1em]">{t.month}</span>
                      </div>

                      {/* Sport badge */}
                      <span
                        className="absolute top-4 right-4 font-redhat text-[9px] uppercase tracking-[0.25em] font-bold text-white px-3 py-1.5"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.sport}
                      </span>

                      {/* Bottom info bar */}
                      <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between">
                        <span className="font-redhat text-[11px] text-white/70 flex items-center gap-1.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                          {t.location}
                        </span>
                        <span className="font-redhat text-[11px] text-white/70">{t.date}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="font-barlow text-[24px] md:text-[28px] font-bold text-fsl-dark uppercase leading-[0.95] mb-3 group-hover:text-fsl-coral transition-colors duration-500">
                        {t.title}
                      </h3>
                      <p className="font-redhat text-[13px] text-[#888] leading-[1.75] mb-5">
                        {t.desc}
                      </p>

                      {/* Meta row */}
                      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                        <span className="font-redhat text-[11px] text-[#aaa] uppercase tracking-[0.1em] flex items-center gap-1.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                          {t.ages}
                        </span>
                        <span className="font-redhat text-[11px] text-[#aaa] uppercase tracking-[0.1em] flex items-center gap-1.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                          {t.capacity}
                        </span>
                        <span className="font-redhat text-[11px] uppercase tracking-[0.1em] font-bold" style={{ color: t.color }}>
                          {t.fee}
                        </span>
                      </div>

                      {/* Register button */}
                      <a
                        href="#registration"
                        className="group/btn inline-flex items-center gap-3 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white px-8 py-3.5 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                        style={{ backgroundColor: t.color }}
                      >
                        Register
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </a>
                    </div>

                    {/* Color accent bar */}
                    <div className="h-[3px] w-full" style={{ backgroundColor: t.color }} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            CLINICS — Dark Background
        ═══════════════════════════════════ */}
        <section className="relative py-24 md:py-36 bg-fsl-dark overflow-hidden">
          {/* Subtle bg texture */}
          <div className="absolute inset-0 opacity-[0.03]">
            <Image src="/images/urban/hero-basketball-court.jpg" alt="" fill className="object-cover" style={{ filter: "grayscale(1)" }} />
          </div>
          {/* Ambient glows */}
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-fsl-coral/5 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[8%] w-[250px] h-[250px] bg-[#0052FE]/5 blur-[100px]" />

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-4">
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                    <span className="w-12 h-[2px] bg-fsl-coral" />
                    Skill Development
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white uppercase leading-[0.88]">
                    Weekly<br />Clinics
                  </h2>
                </div>
                <p className="font-redhat text-[14px] text-white/30 max-w-[360px] leading-[1.75]">
                  Expert-led sessions focused on fundamentals, technique, and
                  athletic development. Drop in or commit to a full season.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {clinics.map((c, i) => (
                <ScrollReveal key={c.title} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-sm overflow-hidden hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-700">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                        style={{ filter: "saturate(0.7) contrast(1.1) brightness(0.7)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent" />

                      {/* Schedule badge */}
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                        <span className="font-redhat text-[9px] uppercase tracking-[0.2em] font-bold text-white/80">{c.schedule}</span>
                      </div>

                      {/* Sport dot */}
                      <div className="absolute top-3 right-3 w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="font-barlow text-[20px] md:text-[22px] font-bold text-white uppercase leading-[0.95] mb-2 group-hover:text-fsl-coral transition-colors duration-500">
                        {c.title}
                      </h3>
                      <p className="font-redhat text-[12px] text-white/30 leading-[1.75] mb-4">
                        {c.desc}
                      </p>

                      <div className="space-y-1.5 mb-5">
                        <p className="font-redhat text-[11px] text-white/40 flex items-center gap-2">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                          {c.location}
                        </p>
                        <p className="font-redhat text-[11px] text-white/40 flex items-center gap-2">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                          {c.ages}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-barlow text-[18px] font-bold" style={{ color: c.color }}>{c.fee}</span>
                        <a
                          href="#registration"
                          className="font-redhat text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-fsl-coral transition-colors duration-300 flex items-center gap-1.5"
                        >
                          Enroll
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="h-[2px] w-full" style={{ backgroundColor: c.color }} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            REGISTRATION FORM
        ═══════════════════════════════════ */}
        <section id="registration" className="relative py-24 md:py-36 bg-[#151515] overflow-hidden">
          {/* Ambient elements */}
          <div className="absolute top-[5%] right-[10%] w-[300px] h-[300px] bg-fsl-coral/5 blur-[150px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-[#0052FE]/4 blur-[120px]" />

          <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-14 md:mb-20">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center justify-center gap-3 mb-6">
                  <span className="w-12 h-[2px] bg-fsl-coral" />
                  Sign Up
                  <span className="w-12 h-[2px] bg-fsl-coral" />
                </p>
                <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white uppercase leading-[0.88]">
                  Registration
                </h2>
                <p className="font-redhat text-[14px] text-white/25 leading-[1.75] mt-6 max-w-[480px] mx-auto">
                  Complete the form below to register your athlete for tournaments
                  or clinics. Payment is processed via secure checkout after submission.
                </p>
              </div>
            </ScrollReveal>

            {/* Glass form card */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] p-6 md:p-10 lg:p-12">
                <RegistrationForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════
            EQUIPMENT & JERSEY DONATIONS
        ═══════════════════════════════════ */}
        <section className="relative py-24 md:py-36 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side */}
              <ScrollReveal animation="fade-right">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/urban/team-huddle.jpg"
                    alt="Team gear and jersey donations"
                    fill
                    className="object-cover"
                    style={{ filter: "saturate(0.9) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  {/* Floating stat overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-5 border border-white/10">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { num: "2,500+", label: "Jerseys Donated" },
                        { num: "45", label: "Schools Served" },
                        { num: "12", label: "Cities Reached" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className="font-barlow text-[24px] md:text-[28px] font-bold text-fsl-coral leading-none">{stat.num}</p>
                          <p className="font-redhat text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.15em] mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Content side */}
              <ScrollReveal animation="fade-left" delay={150}>
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                    <span className="w-12 h-[2px] bg-fsl-coral" />
                    Give Back
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[64px] font-bold text-fsl-dark uppercase leading-[0.88] mb-6">
                    Gear Up Your<br />
                    <span className="text-fsl-coral">Community</span>
                  </h2>
                  <p className="font-redhat text-[15px] text-[#888] leading-[1.8] mb-8 max-w-[480px]">
                    Fundamental Sports Labs donates jerseys and equipment to schools
                    and youth programs in need. Every athlete deserves the right gear
                    to compete, train, and feel like a champion.
                  </p>

                  {/* Stat cards — large format */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {[
                      { num: "2,500+", label: "Jerseys Donated", color: "#F4767C" },
                      { num: "45", label: "Schools Served", color: "#0052FE" },
                      { num: "12", label: "Cities Reached", color: "#00D17E" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#f8f8f8] p-4 md:p-5 text-center border border-black/[0.04]">
                        <p className="font-barlow text-[28px] md:text-[36px] font-bold leading-none" style={{ color: stat.color }}>{stat.num}</p>
                        <p className="font-redhat text-[10px] text-[#aaa] uppercase tracking-[0.1em] mt-2">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-[#f5f5f5] p-6 md:p-8 border border-black/[0.04]">
                    <h3 className="font-barlow text-[20px] font-bold text-fsl-dark uppercase tracking-[0.05em] mb-6">Request Equipment</h3>
                    <EquipmentRequestForm />
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/donate"
                      className="group inline-flex items-center gap-3 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark border-2 border-fsl-dark/10 px-8 py-4 hover:border-fsl-coral hover:text-fsl-coral transition-all duration-500"
                    >
                      Donate Gear
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════ */}
        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
