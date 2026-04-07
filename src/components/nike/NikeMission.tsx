import Image from "next/image";
import Link from "next/link";

export function NikeMission() {
  return (
    <section id="mission" className="py-28 md:py-40 lg:py-48">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image — premium treatment */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/urban/team-huddle.jpg"
                alt="Coach mentoring young athletes"
                fill
                className="object-cover"
                style={{ filter: "contrast(1.05) saturate(0.85)" }}
              />
              {/* Warm tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-fsl-coral/5 via-transparent to-transparent mix-blend-multiply" />
            </div>
            {/* Offset accent frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-fsl-coral/20 -z-10 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:col-start-7 lg:py-8">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-10 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-fsl-coral/50" />
              Our Mission
            </p>

            <h2 className="font-barlow text-[42px] md:text-[56px] lg:text-[68px] font-bold text-fsl-dark uppercase leading-[0.88] tracking-[-0.02em] mb-10">
              Powering<br />Dreams
            </h2>

            <div className="space-y-5 mb-12">
              <p className="font-redhat text-[15px] md:text-[16px] text-[#666] font-normal leading-[1.85] max-w-[440px]">
                Our mission is to develop young athletes through the fundamentals of
                sports, wellness, financial responsibility, and technology — teaching the
                structure and discipline of the game that transitions directly into life.
              </p>
              <p className="font-redhat text-[15px] md:text-[16px] text-[#666] font-normal leading-[1.85] max-w-[440px]">
                Founded by a seasoned coach with over 15 years of experience, we create
                structured environments where young athletes learn that the
                fundamentals on the field are the same fundamentals for life.
              </p>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
