import Image from "next/image";

const events = [
  { date: "Oct 15, 2025", title: "Youth Golf Clinic", location: "Community Golf Course, Downtown", image: "/images/sports/youth-golf.jpg" },
  { date: "Nov 22, 2025", title: "Basketball Tournament", location: "Inglewood Recreation Center", image: "/images/urban/hero-basketball-court.jpg" },
  { date: "Dec 08, 2025", title: "Track & Field Invitational", location: "Compton Community Track", image: "/images/urban/hero-track-race.jpg" },
];

export function NikeEvents() {
  return (
    <section id="events" className="py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-4">
          <span className="w-10 h-[1px] bg-fsl-coral/50" />
          Upcoming
        </p>
        <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em] mb-16 md:mb-20">
          Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {events.map((event) => (
            <div key={event.title} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  style={{ filter: "saturate(0.8) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-fsl-coral/0 group-hover:bg-fsl-coral/8 transition-colors duration-700 mix-blend-multiply" />
              </div>

              <p className="font-redhat text-[11px] uppercase tracking-[0.3em] text-fsl-coral font-medium mb-3">
                {event.date}
              </p>
              <h3 className="font-barlow text-[24px] md:text-[28px] font-bold text-fsl-dark uppercase leading-[1.05] mb-2 group-hover:text-fsl-coral transition-colors duration-500">
                {event.title}
              </h3>
              <p className="font-redhat text-[13px] text-[#aaa] font-normal flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#ccc]">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
