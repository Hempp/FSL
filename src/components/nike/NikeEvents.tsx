import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const events = [
  {
    date: "Oct 15, 2025",
    day: "15",
    month: "Oct",
    year: "2025",
    title: "Youth Golf Clinic",
    location: "Community Golf Course, Downtown",
    image: "/images/sports/youth-golf.jpg",
    color: "#00D17E",
  },
  {
    date: "Nov 22, 2025",
    day: "22",
    month: "Nov",
    year: "2025",
    title: "Basketball Tournament",
    location: "Inglewood Recreation Center",
    image: "/images/premium/event-basketball.jpg",
    color: "#0052FE",
  },
  {
    date: "Dec 08, 2025",
    day: "08",
    month: "Dec",
    year: "2025",
    title: "Track & Field Invitational",
    location: "Compton Community Track",
    image: "/images/sports/track-running.jpg",
    color: "#FF7900",
  },
];

export function NikeEvents() {
  return (
    <section id="events" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-4">
            <div>
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-4">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />
                Upcoming
              </p>
              <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em]">
                Events
              </h2>
            </div>
            <p className="font-redhat text-[13px] text-[#999] font-normal max-w-[300px] leading-[1.7] md:text-right">
              Join us at upcoming clinics, tournaments, and community events.
            </p>
          </div>
        </ScrollReveal>

        {/* Magazine editorial layout — horizontal cards on desktop */}
        <div className="space-y-6 md:space-y-0 md:divide-y md:divide-black/[0.06]">
          {events.map((event, i) => (
            <ScrollReveal key={event.title} animation="fade-up" delay={i * 120} duration={900}>
              <div className="group cursor-pointer md:grid md:grid-cols-12 md:gap-8 md:items-center md:py-10 first:md:pt-0 last:md:pb-0">

                {/* Dramatic date typography — desktop */}
                <div className="hidden md:flex md:col-span-2 flex-col items-center md:items-start">
                  <div className="relative">
                    <span
                      className="font-barlow text-[80px] lg:text-[100px] font-black leading-none tracking-tight transition-colors duration-500 group-hover:text-fsl-coral"
                      style={{ color: "#e8e8e8" }}
                    >
                      {event.day}
                    </span>
                    <div className="flex items-center gap-2 -mt-2">
                      <span className="font-barlow text-[18px] lg:text-[20px] font-bold uppercase tracking-[0.15em] text-fsl-dark">
                        {event.month}
                      </span>
                      <span className="font-redhat text-[12px] text-[#bbb] font-normal">
                        {event.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="md:col-span-4 lg:col-span-3 mb-5 md:mb-0">
                  <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      style={{ filter: "saturate(0.8) contrast(1.05)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Colored accent bar on image */}
                    <div
                      className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700"
                      style={{ backgroundColor: event.color }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-6 lg:col-span-7">
                  {/* Mobile date */}
                  <div className="flex items-center gap-3 mb-3 md:hidden">
                    <span className="font-barlow text-[32px] font-black text-fsl-coral leading-none">
                      {event.day}
                    </span>
                    <div>
                      <span className="font-barlow text-[14px] font-bold uppercase tracking-[0.1em] text-fsl-dark block">
                        {event.month}
                      </span>
                      <span className="font-redhat text-[11px] text-[#bbb]">{event.year}</span>
                    </div>
                  </div>

                  <h3 className="font-barlow text-[26px] md:text-[32px] lg:text-[40px] font-bold text-fsl-dark uppercase leading-[1] mb-3 group-hover:text-fsl-coral transition-colors duration-500">
                    {event.title}
                  </h3>

                  {/* Location badge */}
                  <div className="inline-flex items-center gap-2 bg-[#f5f5f5] group-hover:bg-fsl-coral/5 px-4 py-2 rounded-full transition-colors duration-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-fsl-coral shrink-0"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <span className="font-redhat text-[12px] md:text-[13px] text-[#888] font-medium">
                      {event.location}
                    </span>
                  </div>

                  {/* Arrow indicator — desktop */}
                  <div className="hidden md:flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                    <span className="font-redhat text-[11px] font-semibold uppercase tracking-[0.2em] text-fsl-coral">
                      View Details
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fsl-coral">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  {/* Mobile CTA */}
                  <div className="flex md:hidden items-center gap-1.5 mt-4">
                    <span className="font-redhat text-[12px] font-semibold text-fsl-coral">
                      View
                    </span>
                    <span className="text-fsl-coral text-[14px]">&rarr;</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
