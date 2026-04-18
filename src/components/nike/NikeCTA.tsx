import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export function NikeCTA() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/images/real/basketball-game-action.jpg"
        alt="Youth basketball player driving to the basket"
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: "contrast(1.2) brightness(0.15) saturate(0.15)" }}
        aria-hidden="true"
      />

      {/* Animated diagonal color strips */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coral strip */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[200px] md:w-[300px] h-[140%] bg-fsl-coral/[0.06] rotate-[20deg] animate-[pulse_4s_ease-in-out_infinite]"
        />
        {/* Blue strip */}
        <div
          className="absolute -top-[20%] right-[15%] md:right-[20%] w-[120px] md:w-[200px] h-[140%] bg-[#0052FE]/[0.04] rotate-[20deg] animate-[pulse_4s_ease-in-out_infinite_1s]"
        />
        {/* Orange strip */}
        <div
          className="absolute -top-[20%] right-[30%] md:right-[38%] w-[80px] md:w-[120px] h-[140%] bg-[#FF7900]/[0.03] rotate-[20deg] animate-[pulse_4s_ease-in-out_infinite_2s]"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Coral glow */}
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[300px] bg-fsl-coral/8 blur-[150px]" />
      {/* Blue glow */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#0052FE]/5 blur-[120px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 w-full py-24 md:py-32">
        <ScrollReveal animation="fade-up" duration={1000}>
          <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/70 font-medium mb-8 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-fsl-coral/40" />
            Get Involved
          </p>
        </ScrollReveal>

        {/* Nike campaign poster — MASSIVE typography */}
        <ScrollReveal animation="fade-up" delay={100} duration={1200}>
          <h2 className="font-barlow text-[48px] sm:text-[64px] md:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[160px] font-black text-white uppercase leading-[0.85] tracking-[-0.03em] max-w-[900px]">
            Ready to<br />
            <span className="relative inline-block">
              Play
              {/* Underline accent */}
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[4px] md:h-[6px] bg-fsl-coral" />
            </span>{" "}
            Your<br />
            <span className="text-fsl-coral">Part?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300} duration={900}>
          <p className="font-redhat text-[14px] md:text-[16px] text-white/30 font-normal leading-[1.8] mt-8 md:mt-12 max-w-[420px]">
            Join our community of coaches, mentors, and young athletes building brighter futures together.
          </p>
        </ScrollReveal>

        {/* Pulsing action buttons */}
        <ScrollReveal animation="fade-up" delay={500} duration={900}>
          <div className="flex flex-wrap gap-4 mt-12 md:mt-16">
            <Link
              href="/join"
              className="group relative bg-fsl-coral text-white px-12 md:px-16 py-5 md:py-6 font-barlow text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(244,118,124,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Enroll Free</span>
              {/* Shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms]" />
              {/* Pulse ring */}
              <div className="absolute inset-0 border-2 border-fsl-coral animate-[ping_2s_ease-in-out_infinite] opacity-20" />
            </Link>
            <Link
              href="/donate"
              className="group border-2 border-white/15 text-white/50 px-12 md:px-16 py-5 md:py-6 font-barlow text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em] hover:border-white/40 hover:text-white transition-all duration-500 hover:bg-white/[0.03]"
            >
              Support Our Mission
            </Link>
          </div>
        </ScrollReveal>

        {/* Bottom edge — campaign tagline */}
        <ScrollReveal animation="fade-up" delay={700} duration={900}>
          <div className="mt-20 md:mt-28 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="h-[1px] w-12 bg-white/10" />
            <p className="font-bonvivant text-[18px] md:text-[22px] text-white/15 italic">
              Every athlete deserves a chance
            </p>
            <span className="hidden sm:block mx-4 h-[1px] w-6 bg-white/10" />
            <p className="font-redhat text-[11px] text-white/20 uppercase tracking-[0.15em]">
              501(c)(3) nonprofit — all programs free for youth athletes
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
