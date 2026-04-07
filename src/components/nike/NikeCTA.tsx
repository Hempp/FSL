import Image from "next/image";
import Link from "next/link";

export function NikeCTA() {
  return (
    <section className="relative py-36 md:py-52 overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/images/urban/cta-athletes.jpg"
        alt=""
        fill
        className="object-cover"
        style={{ filter: "contrast(1.2) brightness(0.2) saturate(0.2)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
      {/* Coral glow */}
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[250px] bg-fsl-coral/6 blur-[120px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/70 font-medium mb-8 flex items-center gap-4">
          <span className="w-10 h-[1px] bg-fsl-coral/40" />
          Get Involved
        </p>
        <h2 className="font-barlow text-[40px] md:text-[68px] lg:text-[96px] xl:text-[112px] font-bold text-white uppercase leading-[0.88] tracking-[-0.02em] max-w-[700px]">
          Ready to<br />Play Your<br />Part?
        </h2>
        <p className="font-redhat text-[14px] md:text-[15px] text-white/35 font-normal leading-[1.8] mt-8 max-w-[380px]">
          Join our community of coaches, mentors, and young athletes building brighter futures together.
        </p>
        <div className="flex flex-wrap gap-3 mt-12">
          <Link
            href="/join"
            className="group relative bg-white text-black px-10 py-[14px] rounded-full font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(244,118,124,0.2)]"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get Started</span>
            <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-full" />
          </Link>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/15 text-white/50 px-10 py-[14px] rounded-full font-redhat text-[12px] font-medium uppercase tracking-[0.15em] hover:border-white/40 hover:text-white transition-all duration-500"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
