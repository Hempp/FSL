import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const pillars = [
  {
    num: "01",
    title: "Athletic Training",
    desc: "Golf, football, basketball, soccer, and track & field coaching with professional trainers.",
    color: "#0052FE",
    colorClass: "from-[#0052FE]",
    image: "/images/sports/football-action.jpg",
  },
  {
    num: "02",
    title: "Mental Wellness",
    desc: "Building resilience, emotional intelligence, and positive mindset development.",
    color: "#FF7900",
    colorClass: "from-[#FF7900]",
    image: "/images/premium/meditation-peace.jpg",
  },
  {
    num: "03",
    title: "Financial Literacy",
    desc: "Budgeting, saving, investing — real-world money management for young athletes.",
    color: "#00D17E",
    colorClass: "from-[#00D17E]",
    image: "/images/premium/financial-planning.jpg",
  },
  {
    num: "04",
    title: "VR/AR & AI Tech",
    desc: "Cutting-edge VR/AR training simulations and AI-powered performance analytics.",
    color: "#E9BB00",
    colorClass: "from-[#E9BB00]",
    image: "/images/sports/vr-headset.jpg",
  },
];

export function NikePillars() {
  return (
    <section className="py-20 md:py-32 bg-fsl-dark overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-4">
          <ScrollReveal animation="fade-right">
            <div>
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-4 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />
                Our Approach
              </p>
              <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white uppercase leading-[0.88] tracking-[-0.02em]">
                Four Pillars
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={200}>
            <p className="font-redhat text-[15px] text-white/40 font-normal max-w-[360px] leading-[1.7] md:text-right">
              Four pillars of fundamental development — the same structure and discipline from sports, applied to every area of life.
            </p>
          </ScrollReveal>
        </div>

        {/* Sports Illustrated full-bleed cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.num} animation="fade-up" delay={i * 120} duration={900}>
              <div className="group relative aspect-[3/4] sm:aspect-[2/3] xl:aspect-[3/5] overflow-hidden cursor-default">
                {/* Full-bleed background image */}
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  style={{ filter: "contrast(1.1) brightness(0.55) saturate(0.7)" }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Colored bottom edge glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[120px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(to top, ${pillar.color}40, transparent)`,
                  }}
                />

                {/* Bold number watermark */}
                <span
                  className="font-barlow text-[180px] sm:text-[160px] md:text-[200px] xl:text-[180px] font-black leading-none absolute -top-4 -right-2 select-none transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                  style={{ color: pillar.color, opacity: 0.08 }}
                >
                  {pillar.num}
                </span>

                {/* Animated accent line — top left */}
                <div
                  className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-[60%] transition-all duration-700 ease-out"
                  style={{ backgroundColor: pillar.color }}
                />
                {/* Animated accent line — bottom */}
                <div
                  className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-700 ease-out delay-100"
                  style={{ backgroundColor: pillar.color }}
                />

                {/* Content overlay — glass-morphism card */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  {/* Pillar number badge */}
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-5 backdrop-blur-md border border-white/10"
                    style={{ backgroundColor: `${pillar.color}25` }}
                  >
                    <span
                      className="font-barlow text-[14px] font-bold"
                      style={{ color: pillar.color }}
                    >
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-barlow text-[26px] md:text-[30px] xl:text-[28px] font-bold text-white uppercase leading-[1.05] mb-3">
                    {pillar.title}
                  </h3>

                  {/* Glass-morphism description panel */}
                  <div className="backdrop-blur-sm bg-white/[0.06] border border-white/[0.08] rounded-sm p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-redhat text-[13px] md:text-[14px] text-white/70 font-normal leading-[1.7]">
                      {pillar.desc}
                    </p>
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
