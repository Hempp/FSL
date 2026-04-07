import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Join our youth golf clinics, basketball tournaments, track & field invitationals, football combines, and VR sports experience days in Los Angeles.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const events = [
  { date: "Oct 15, 2025", title: "Youth Golf Clinic", location: "Community Golf Course, Downtown LA", time: "9:00 AM – 1:00 PM", desc: "Introduction to golf for ages 10-18. Learn swing mechanics, course etiquette, and sportsmanship from PGA-trained coaches.", image: "/images/sports/golf-course.jpg" },
  { date: "Nov 22, 2025", title: "Basketball Tournament", location: "Inglewood Recreation Center", time: "10:00 AM – 5:00 PM", desc: "3-on-3 and 5-on-5 tournament featuring teams from across the region. Prizes and awards for all age divisions.", image: "/images/sports/basketball-game.jpg" },
  { date: "Dec 08, 2025", title: "Track & Field Invitational", location: "Compton Community Track", time: "8:00 AM – 2:00 PM", desc: "Sprint, relay, and field events for youth athletes. Timed results, medals, and college scout exposure.", image: "/images/sports/track-start.jpg" },
  { date: "Jan 15, 2026", title: "Football Skills Combine", location: "Los Angeles, CA", time: "9:00 AM – 3:00 PM", desc: "Combine-style testing and position-specific training. Speed, agility, and football IQ development.", image: "/images/sports/football-field.jpg" },
  { date: "Feb 20, 2026", title: "VR Sports Experience Day", location: "FSL Innovation Lab", time: "10:00 AM – 4:00 PM", desc: "Experience cutting-edge VR/AR sports training simulations. AI-powered performance analysis for every athlete.", image: "/images/action/teens-learning.jpg" },
];

export default function EventsPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        <section className="relative h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-end">
          <Image src="/images/urban/soccer-ball.jpg" alt="Youth sports events" fill className="object-cover" style={{ filter: "contrast(1.1) brightness(0.3) saturate(0.5)" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />Calendar
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              Upcoming<br /><span className="text-fsl-coral">Events</span>
            </h1>
          </div>
        </section>

        <section className="py-24 md:py-36">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="space-y-0 divide-y divide-black/[0.06]">
              {events.map((e, i) => (
                <ScrollReveal key={e.title} animation="fade-up" delay={i * 80}>
                  <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 first:pt-0 last:pb-0 cursor-pointer">
                    <div className="lg:col-span-4 relative aspect-[16/10] overflow-hidden">
                      <Image src={e.image} alt={e.title} fill className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" style={{ filter: "saturate(0.8) contrast(1.05)" }} />
                    </div>
                    <div className="lg:col-span-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-redhat text-[11px] uppercase tracking-[0.3em] text-fsl-coral font-semibold">{e.date}</span>
                        <span className="font-redhat text-[11px] text-[#ccc]">·</span>
                        <span className="font-redhat text-[11px] uppercase tracking-[0.2em] text-[#aaa]">{e.time}</span>
                      </div>
                      <h3 className="font-barlow text-[28px] md:text-[36px] font-bold text-fsl-dark uppercase leading-[1] mb-3 group-hover:text-fsl-coral transition-colors duration-500">{e.title}</h3>
                      <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.7] mb-4 max-w-[500px]">{e.desc}</p>
                      <div className="flex items-center gap-6">
                        <p className="font-redhat text-[13px] text-[#aaa] flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#ccc]"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                          {e.location}
                        </p>
                        <Link href="/join" className="inline-flex items-center gap-2 font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-coral hover:gap-3 transition-all duration-300">
                          Register
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                      </div>
                    </div>
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
