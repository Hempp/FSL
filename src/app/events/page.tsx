import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Join our youth golf clinics, basketball tournaments, track & field invitationals, football combines, and VR sports experience days in Los Angeles.",
};

import { JsonLd } from "@/components/JsonLd";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const events = [
  { date: "Oct 15, 2025", day: "15", month: "OCT", title: "Youth Golf Clinic", location: "Community Golf Course, Downtown LA", time: "9:00 AM - 1:00 PM", desc: "Introduction to golf for ages 10-18. Learn swing mechanics, course etiquette, and sportsmanship from PGA-trained coaches.", image: "/images/sports/golf-course.jpg", color: "#00D17E", sport: "Golf" },
  { date: "Nov 22, 2025", day: "22", month: "NOV", title: "Basketball Tournament", location: "Inglewood Recreation Center", time: "10:00 AM - 5:00 PM", desc: "3-on-3 and 5-on-5 tournament featuring teams from across the region. Prizes and awards for all age divisions.", image: "/images/sports/basketball-game.jpg", color: "#FF7900", sport: "Basketball" },
  { date: "Dec 08, 2025", day: "08", month: "DEC", title: "Track & Field Invitational", location: "Compton Community Track", time: "8:00 AM - 2:00 PM", desc: "Sprint, relay, and field events for youth athletes. Timed results, medals, and college scout exposure.", image: "/images/sports/track-start.jpg", color: "#F4767C", sport: "Track" },
  { date: "Jan 15, 2026", day: "15", month: "JAN", title: "Football Skills Combine", location: "Los Angeles, CA", time: "9:00 AM - 3:00 PM", desc: "Combine-style testing and position-specific training. Speed, agility, and football IQ development.", image: "/images/sports/football-field.jpg", color: "#0052FE", sport: "Football" },
  { date: "Feb 20, 2026", day: "20", month: "FEB", title: "VR Sports Experience Day", location: "FSL Innovation Lab", time: "10:00 AM - 4:00 PM", desc: "Experience cutting-edge VR/AR sports training simulations. AI-powered performance analysis for every athlete.", image: "/images/action/teens-learning.jpg", color: "#E9BB00", sport: "Tech" },
];

export default function EventsPage() {
  const featured = events[0];
  const remaining = events.slice(1);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Fundamental Sports Labs Upcoming Events",
          itemListElement: events.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Event",
              name: e.title,
              description: e.desc,
              startDate: e.date,
              location: {
                "@type": "Place",
                name: e.location,
              },
              organizer: {
                "@type": "SportsOrganization",
                name: "Fundamental Sports Labs",
                url: "https://fundamentalsportslabs.org",
              },
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              image: `https://fundamentalsportslabs.org${e.image}`,
            },
          })),
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Featured Event Hero ── */}
        <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black flex items-end">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover scale-105"
            style={{ filter: "contrast(1.15) brightness(0.3) saturate(0.5)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-[10%] w-[400px] h-[350px] blur-[140px] z-[1]" style={{ backgroundColor: `${featured.color}15` }} />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              {/* Sport tag */}
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block font-redhat text-[10px] uppercase tracking-[0.3em] font-bold px-4 py-1.5" style={{ backgroundColor: featured.color, color: "#fff" }}>
                  Featured Event
                </span>
                <span className="font-redhat text-[11px] uppercase tracking-[0.3em] text-white/40 font-medium">
                  {featured.sport}
                </span>
              </div>

              {/* Giant date */}
              <div className="flex items-end gap-6 md:gap-10 mb-6">
                <div>
                  <p className="font-barlow text-[100px] md:text-[160px] lg:text-[200px] font-bold leading-none tracking-[-0.04em]" style={{ color: featured.color }}>
                    {featured.day}
                  </p>
                </div>
                <div className="pb-2 md:pb-4">
                  <p className="font-barlow text-[36px] md:text-[56px] font-bold text-white uppercase leading-none">{featured.month}</p>
                  <p className="font-redhat text-[13px] text-white/40 uppercase tracking-[0.2em] mt-2">{featured.time}</p>
                </div>
              </div>

              <h1 className="font-barlow text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em] mb-4">
                {featured.title}
              </h1>
              <p className="font-redhat text-[15px] text-white/40 font-normal leading-[1.8] max-w-[500px] mb-6">
                {featured.desc}
              </p>
              <div className="flex items-center gap-6">
                <p className="font-redhat text-[13px] text-white/30 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                  {featured.location}
                </p>
                <Link href="/join" className="group inline-flex items-center gap-3 font-redhat text-[12px] font-bold uppercase tracking-[0.2em] text-white bg-fsl-coral px-8 py-3.5 hover:bg-white hover:text-fsl-dark transition-all duration-500">
                  Register Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Upcoming Events — Editorial Rows ── */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-4">
                <div>
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                    <span className="w-12 h-[2px] bg-fsl-coral" />
                    Schedule
                  </p>
                  <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88]">
                    Upcoming<br />Events
                  </h2>
                </div>
                <p className="font-redhat text-[14px] text-[#999] max-w-[340px] leading-[1.75]">
                  From the court to the track, every event is a chance to grow, compete, and connect.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-0">
              {remaining.map((e, i) => (
                <ScrollReveal key={e.title} animation="fade-up" delay={i * 80}>
                  <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-14 border-b border-black/[0.06] first:border-t cursor-pointer">
                    {/* Giant date typography */}
                    <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start gap-3 lg:gap-0">
                      <p className="font-barlow text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-none tracking-[-0.04em] transition-colors duration-500 group-hover:text-fsl-coral" style={{ color: `${e.color}25` }}>
                        {e.day}
                      </p>
                      <div>
                        <p className="font-barlow text-[24px] md:text-[28px] font-bold text-fsl-dark uppercase leading-none">{e.month}</p>
                        <p className="font-redhat text-[11px] text-[#bbb] uppercase tracking-[0.15em] mt-1">{e.time}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-3 relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={e.image}
                        alt={e.title}
                        fill
                        className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                        style={{ filter: "saturate(0.85) contrast(1.05)" }}
                      />
                      {/* Sport badge */}
                      <span className="absolute top-3 left-3 font-redhat text-[9px] uppercase tracking-[0.25em] font-bold text-white px-3 py-1.5" style={{ backgroundColor: e.color }}>
                        {e.sport}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <h3 className="font-barlow text-[28px] md:text-[36px] lg:text-[42px] font-bold text-fsl-dark uppercase leading-[0.92] mb-4 group-hover:text-fsl-coral transition-colors duration-500">
                        {e.title}
                      </h3>
                      <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.75] mb-4 max-w-[460px]">{e.desc}</p>
                      <p className="font-redhat text-[12px] text-[#bbb] flex items-center gap-2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#ccc]"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                        {e.location}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="lg:col-span-2 flex items-center lg:justify-end">
                      <Link href="/join" className="group/btn inline-flex items-center gap-3 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark border-2 border-fsl-dark/10 px-6 py-3.5 hover:border-fsl-coral hover:text-fsl-coral transition-all duration-500">
                        Register
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom Banner ── */}
        <section className="relative py-20 md:py-28 bg-fsl-dark overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/images/urban/soccer-ball.jpg" alt="" fill className="object-cover" style={{ filter: "grayscale(1)" }} />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24 text-center">
            <ScrollReveal animation="scale">
              <p className="font-bonvivant text-[28px] md:text-[40px] text-fsl-coral leading-[1.2] mb-4">
                Don&apos;t miss a moment
              </p>
              <p className="font-barlow text-[32px] md:text-[48px] font-bold text-white uppercase leading-[0.92]">
                Your Season Starts Here
              </p>
              <Link href="/join" className="inline-flex items-center gap-3 font-redhat text-[12px] font-bold uppercase tracking-[0.2em] text-fsl-dark bg-white px-10 py-4 mt-10 hover:bg-fsl-coral hover:text-white transition-all duration-500">
                Sign Up Today
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
