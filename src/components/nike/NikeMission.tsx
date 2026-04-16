import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export function NikeMission() {
  return (
    <section id="mission" className="relative py-28 md:py-40 lg:py-52 overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-white to-[#f0f0f0]" />

      {/* Subtle diagonal accent line */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-fsl-coral/[0.03] to-transparent -skew-x-12 origin-top-right" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">

          {/* Left column — massive pullquote + text */}
          <div className="lg:col-span-6 lg:pr-16 order-2 lg:order-1">
            <ScrollReveal animation="fade-right" duration={900}>
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-8 flex items-center gap-4">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />
                Our Mission
              </p>
            </ScrollReveal>

            {/* ESPN-style massive pullquote */}
            <ScrollReveal animation="fade-up" delay={100} duration={1000}>
              <div className="relative mb-10">
                <span className="font-bonvivant text-[80px] md:text-[100px] lg:text-[120px] text-fsl-coral/10 absolute -top-10 -left-4 leading-none select-none">
                  &ldquo;
                </span>
                <h2 className="font-barlow text-[38px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em]">
                  The Game<br />
                  <span className="text-fsl-coral">Teaches</span><br />
                  Life
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} duration={900}>
              <div className="relative pl-6 border-l-[3px] border-fsl-coral/30 mb-10">
                <p className="font-redhat text-[15px] md:text-[17px] text-[#555] font-normal leading-[1.85] max-w-[480px]">
                  Our mission is to develop young athletes in Los Angeles through
                  free programming in athletics, mental wellness, financial literacy,
                  and technology — teaching the structure and discipline of the game
                  that transitions directly into life.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300} duration={900}>
              <p className="font-redhat text-[14px] md:text-[15px] text-[#888] font-normal leading-[1.85] max-w-[440px] mb-12">
                Founded by a seasoned coach with over 15 years of experience, every
                program is completely free — because access to sports, mentorship,
                and life skills should never depend on a family&apos;s income.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400} duration={900}>
              <Link
                href="#programs"
                className="group inline-flex items-center gap-3 font-redhat text-[11px] font-semibold uppercase tracking-[0.2em] text-fsl-dark"
              >
                <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-fsl-dark after:transition-all after:duration-500 group-hover:after:bg-fsl-coral group-hover:text-fsl-coral transition-colors duration-500">
                  Explore Programs
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-fsl-coral">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right column — overlapping image with stats callout */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <ScrollReveal animation="fade-left" delay={200} duration={1100}>
              <div className="relative">
                {/* Main image — dramatic treatment */}
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/urban/team-huddle.jpg"
                    alt="Coach mentoring young athletes"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ filter: "contrast(1.1) saturate(0.85)" }}
                  />
                  {/* Dramatic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-fsl-dark/60 via-fsl-dark/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-fsl-coral/10 via-transparent to-transparent mix-blend-multiply" />

                  {/* ESPN-style bottom caption bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="font-barlow text-[11px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-white/60">
                      Fundamental Sports Labs
                    </p>
                    <p className="font-barlow text-[20px] md:text-[24px] font-bold uppercase text-white leading-tight mt-1">
                      Building Champions On &amp; Off The Field
                    </p>
                  </div>
                </div>

                {/* Overlapping stats callout card */}
                <div className="absolute -bottom-8 -left-4 md:-left-10 lg:-left-16 bg-fsl-dark p-6 md:p-8 z-20 shadow-2xl">
                  <div className="flex gap-8 md:gap-12">
                    <div>
                      <p className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-coral leading-none">
                        15+
                      </p>
                      <p className="font-redhat text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/50 mt-1">
                        Years Coaching
                      </p>
                    </div>
                    <div className="w-[1px] bg-white/10" />
                    <div>
                      <p className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-coral leading-none">
                        6
                      </p>
                      <p className="font-redhat text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/50 mt-1">
                        Sports
                      </p>
                    </div>
                  </div>
                </div>

                {/* Offset accent frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-fsl-coral/15 -z-10 hidden lg:block" />

                {/* Coral accent bar */}
                <div className="absolute top-0 right-0 w-[4px] h-[40%] bg-fsl-coral hidden lg:block" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
