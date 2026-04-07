import Link from "next/link";
import Image from "next/image";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="max-w-[1400px] mx-auto px-6 md:px-[60px] py-[60px] md:py-[100px]"
    >
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[60px]">
        {/* Left column */}
        <div className="flex-1">
          {/* Heading area */}
          <div className="relative mb-6">
            <h4 className="font-barlow text-[28px] md:text-[36px] lg:text-[42px] font-bold text-fsl-dark uppercase tracking-wide">
              Shaping Futures
            </h4>
            <h2 className="font-barlow text-[40px] md:text-[60px] lg:text-[80px] font-bold text-fsl-dark uppercase leading-none">
              POWERING DREAMS
            </h2>
            <span className="font-bonvivant text-[28px] md:text-[36px] text-fsl-coral absolute right-0 top-0 lg:top-2">
              Our Mission
            </span>
          </div>

          <p className="font-redhat text-[16px] font-light text-fsl-gray leading-[28px] mb-4">
            Our mission is to empower youth through sports, wellness, financial
            literacy, and technology helping them build confidence, leadership,
            and lifelong skills for a brighter future.
          </p>
          <p className="font-redhat text-[16px] font-light text-fsl-gray leading-[28px] mb-4">
            Founded by a seasoned coach with over 15 years of experience—from
            running basketball camps to teaching P.E. for nearly a decade, and
            leading as a head varsity coach—we understand the unique
            challenges today&apos;s youth face on and off the field.
          </p>
          <p className="font-redhat text-[16px] font-light text-fsl-gray leading-[28px] mb-6">
            Our programs go beyond sports, offering support in mental health,
            recovery, technology, and financial literacy to prepare athletes for
            success in every area of life. Together, we&apos;re raising resilient youth who
            are ready for whatever comes next.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/join"
              className="bg-fsl-coral text-white px-8 py-3.5 rounded-[10px] text-base font-semibold font-redhat border border-fsl-coral hover:opacity-90 transition-all duration-500"
            >
              Join Now!
            </Link>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-fsl-coral px-8 py-3.5 rounded-[10px] text-base font-semibold font-redhat border border-fsl-coral hover:bg-fsl-coral hover:text-white transition-all duration-500 inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Donate
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 relative w-full">
          <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden">
            <Image
              src="/images/powerin-1.png"
              alt="Powering Dreams"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative icon */}
          <Image
            src="/images/dreamicon.png"
            alt=""
            width={80}
            height={80}
            className="absolute -top-5 -right-5 w-[60px] md:w-[80px]"
            aria-hidden="true"
          />
          {/* 150+ Hexagonal stat badge */}
          <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 z-10">
            <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
              <svg viewBox="0 0 120 104" className="w-full h-full" fill="none">
                <path
                  d="M60 0L113.923 31V73L60 104L6.077 73V31L60 0Z"
                  fill="#FF7900"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="font-barlow text-[36px] md:text-[42px] font-bold leading-none">150+</span>
                <span className="font-redhat text-[9px] md:text-[10px] font-light leading-tight text-center">
                  Youth<br />Empowered
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
