import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fundamental Sports Labs. Email info@fundamentalsportslabs.org or send us a message. Based in Los Angeles, California.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const contactCards = [
  {
    label: "Email Us",
    value: "Info@fundamentalsportslabs.org",
    desc: "We respond within 24-48 hours",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#F4767C",
  },
  {
    label: "Location",
    value: "Los Angeles, California",
    desc: "Serving communities across LA County",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    color: "#0052FE",
  },
  {
    label: "Office Hours",
    value: "Mon - Fri: 9 AM - 6 PM",
    desc: "Weekend events by appointment",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "#FF7900",
  },
];

const socials = [
  { name: "Facebook", letter: "F", href: "#" },
  { name: "Instagram", letter: "I", href: "#" },
  { name: "Twitter", letter: "X", href: "#" },
  { name: "LinkedIn", letter: "L", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        {/* ── Bold Hero ── */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-black flex items-end">
          <Image
            src="/images/urban/community.jpg"
            alt="Contact"
            fill
            className="object-cover scale-105"
            style={{ filter: "contrast(1.15) brightness(0.22) saturate(0.4)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-[1]" />
          <div className="absolute bottom-0 right-[10%] w-[400px] h-[350px] bg-fsl-blue/8 blur-[140px] z-[1]" />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Get In Touch
              </p>
              <h1 className="font-barlow text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                Let&apos;s<br />
                <span className="text-fsl-coral">Connect.</span>
              </h1>
              <p className="font-redhat text-[15px] text-white/35 font-normal mt-6 max-w-[420px] leading-[1.85]">
                Questions, partnerships, or just want to say hello? We&apos;re here for it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Contact Info Cards — Bold Sport-Colored ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {contactCards.map((c, i) => (
                <ScrollReveal key={c.label} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-[#fafafa] overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_15px_50px_-12px_rgba(0,0,0,0.1)]">
                    {/* Top color bar */}
                    <div className="h-[4px] w-full" style={{ backgroundColor: c.color }} />

                    <div className="p-8 md:p-10">
                      {/* Icon circle */}
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${c.color}12` }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={c.icon} />
                        </svg>
                      </div>

                      <p className="font-redhat text-[11px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: c.color }}>{c.label}</p>
                      <p className="font-barlow text-[22px] md:text-[24px] font-bold text-fsl-dark uppercase leading-tight mb-2">{c.value}</p>
                      <p className="font-redhat text-[13px] text-[#999] font-normal leading-[1.7]">{c.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Asymmetric Split: Socials + Form ── */}
        <section className="py-16 md:py-28">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
              {/* Left — dark panel with social + quote */}
              <div className="lg:col-span-5 relative bg-fsl-dark p-10 md:p-14 lg:p-16 overflow-hidden">
                {/* Background texture */}
                <div className="absolute inset-0 opacity-5">
                  <Image src="/images/urban/hero-streetball.jpg" alt="" fill className="object-cover" style={{ filter: "grayscale(1)" }} />
                </div>

                <div className="relative">
                  <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-8">
                    <span className="w-10 h-[2px] bg-fsl-coral" />
                    Connect With Us
                  </p>

                  <h3 className="font-barlow text-[36px] md:text-[42px] font-bold text-white uppercase leading-[0.9] mb-6">
                    Join The<br />Conversation
                  </h3>

                  <p className="font-redhat text-[14px] text-white/30 font-normal leading-[1.85] mb-12 max-w-[360px]">
                    Follow our journey, see our athletes in action, and stay connected with the F.S.L community.
                  </p>

                  {/* Social links — bold cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        className="group/social flex items-center gap-4 bg-white/[0.04] border border-white/[0.06] p-4 hover:bg-white/[0.08] hover:border-fsl-coral/30 transition-all duration-500"
                      >
                        <span className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center font-barlow text-[14px] font-bold text-white/40 group-hover/social:text-fsl-coral group-hover/social:bg-fsl-coral/10 transition-all duration-500">
                          {s.letter}
                        </span>
                        <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50 group-hover/social:text-white transition-colors duration-500">
                          {s.name}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Pullquote */}
                  <div className="mt-14 pt-10 border-t border-white/[0.06]">
                    <p className="font-bonvivant text-[24px] md:text-[28px] text-fsl-coral leading-[1.3] mb-4">
                      Every conversation starts with a first step
                    </p>
                    <p className="font-redhat text-[12px] text-white/20 uppercase tracking-[0.15em]">
                      Take yours today
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — premium form */}
              <div className="lg:col-span-7">
                <ScrollReveal animation="fade-left" delay={150}>
                  <div className="bg-[#fafafa] p-8 md:p-12 lg:p-16 h-full">
                    <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                      <span className="w-10 h-[2px] bg-fsl-coral" />
                      Message
                    </p>
                    <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-3">
                      Send Us<br />A Message
                    </h2>
                    <p className="font-redhat text-[14px] text-[#999] font-normal mb-12">
                      Fill out the form and we&apos;ll get back to you within 48 hours.
                    </p>

                    <form className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="contact-name" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Name</label>
                          <input
                            id="contact-name"
                            type="text"
                            placeholder="Your name"
                            className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Email</label>
                          <input
                            id="contact-email"
                            type="email"
                            placeholder="you@email.com"
                            className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Subject</label>
                        <input
                          id="contact-subject"
                          type="text"
                          placeholder="How can we help?"
                          className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Message</label>
                        <textarea
                          id="contact-message"
                          placeholder="Tell us what's on your mind..."
                          rows={5}
                          className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group relative bg-fsl-dark text-white px-14 py-5 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(244,118,124,0.15)]"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          Send Message
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </span>
                        <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                      </button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <NikeFooter />
    </>
  );
}
