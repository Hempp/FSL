import Image from "next/image";

export function DonateSection() {
  return (
    <section
      id="donate"
      className="bg-fsl-blue rounded-t-[40px] relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center px-6 md:px-[60px] py-[60px] md:py-[100px]"
    >
      {/* Child image — left side */}
      <div className="hidden lg:block absolute bottom-0 left-[40px] xl:left-[60px] z-10">
        <Image
          src="/images/child.png"
          alt="Child athlete"
          width={400}
          height={500}
          className="max-w-[320px] xl:max-w-[380px]"
        />
      </div>

      {/* Rotated accent label */}
      <span
        className="font-bonvivant text-[20px] text-white/30 -rotate-[15deg] absolute right-8 md:right-[60px] bottom-[60px] hidden md:block"
        aria-hidden="true"
      >
        Together We&apos;ll Make Change
      </span>

      {/* Content — centered */}
      <div className="relative z-[2] text-center mx-auto max-w-[700px] lg:ml-auto lg:mr-[60px] lg:text-left">
        <h2 className="font-barlow text-[80px] md:text-[140px] lg:text-[200px] font-bold text-white uppercase leading-none">
          DONATE
        </h2>
        <p className="font-redhat text-[18px] md:text-[22px] text-white font-normal leading-[34px] mt-4 max-w-[500px] lg:max-w-none">
          Every dollar counts and makes a tangible difference in a child&apos;s life.
          Click the link to donate and be a catalyst for change.
        </p>
        <p className="font-barlow text-[30px] md:text-[50px] text-[#cacaca] uppercase tracking-tight mt-2">
          Play Your Part
        </p>
        <a
          href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fsl-coral text-white px-10 py-4 rounded-full text-base font-semibold mt-6 inline-flex items-center gap-2 hover:opacity-90 transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Donate
        </a>
      </div>
    </section>
  );
}
