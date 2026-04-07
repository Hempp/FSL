import Link from "next/link";

export function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-fsl-blue via-[#0042d4] to-fsl-blue py-16 md:py-20 px-6 md:px-[60px] text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-white/3" />

      <div className="relative z-10 max-w-[700px] mx-auto">
        <h2 className="font-barlow text-[32px] md:text-[48px] lg:text-[56px] font-bold text-white uppercase leading-tight">
          Ready to make a<br />difference?
        </h2>
        <p className="font-redhat text-[16px] md:text-[18px] text-white/80 font-light mt-4 mb-8 max-w-[500px] mx-auto">
          Join our community of coaches, mentors, and young athletes building brighter futures together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/join"
            className="bg-fsl-coral text-white px-10 py-4 rounded-full text-[16px] font-semibold font-redhat hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-fsl-coral/30"
          >
            Get Started
          </Link>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full text-[16px] font-semibold font-redhat border border-white/30 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
