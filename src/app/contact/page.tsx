import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fundamental Sports Labs, a 501(c)(3) nonprofit offering free youth sports programs. Email info@fundamentalsportslabs.org or send us a message. Based in Los Angeles, California.",
};

import { JsonLd } from "@/components/JsonLd";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import Image from "next/image";
import Link from "next/link";

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
  {
    label: "Nonprofit Status",
    value: "501(c)(3) Tax-Exempt",
    desc: "EIN: 39-4190687",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "#00D17E",
  },
];

const socials = [
  { name: "Facebook", letter: "F", href: "#", ariaLabel: "Follow FSL on Facebook" },
  { name: "Instagram", letter: "I", href: "#", ariaLabel: "Follow FSL on Instagram" },
  { name: "Twitter / X", letter: "X", href: "#", ariaLabel: "Follow FSL on Twitter / X" },
  { name: "LinkedIn", letter: "L", href: "#", ariaLabel: "Follow FSL on LinkedIn" },
  { name: "YouTube", letter: "Y", href: "#", ariaLabel: "Subscribe to FSL on YouTube" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Fundamental Sports Labs",
          description:
            "Get in touch with Fundamental Sports Labs, a 501(c)(3) nonprofit offering free youth sports programs in Los Angeles.",
          mainEntity: {
            "@type": "Organization",
            name: "Fundamental Sports Labs",
            email: "Info@fundamentalsportslabs.org",
            areaServed: "Los Angeles, CA",
            contactPoint: {
              "@type": "ContactPoint",
              email: "Info@fundamentalsportslabs.org",
              contactType: "customer service",
              availableLanguage: "English",
            },
          },
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Bold Hero ── */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-black flex items-end">
          <Image
            src="/images/real/basketball-training.jpg"
            alt="Youth athletes training and dribbling in gym"
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
              <h1 className="font-barlow text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                        aria-label={s.ariaLabel}
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

                    <ContactForm />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hours & Availability ── */}
        <section className="py-20 md:py-28 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Availability
              </p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-12">
                When To Reach Us
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  label: "Office Hours",
                  value: "Mon — Fri, 9 AM — 5 PM PST",
                  desc: "Available for calls, emails, and partnership inquiries",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  color: "#0052FE",
                },
                {
                  label: "Program Hours",
                  value: "Sat 9 AM — 12 PM",
                  desc: "Select weekdays 3:30 — 5:30 PM for after-school sessions",
                  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                  color: "#FF7900",
                },
                {
                  label: "Response Time",
                  value: "Within 48 Hours",
                  desc: "We respond to all inquiries — no message goes unanswered",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  color: "#00D17E",
                },
              ].map((c, i) => (
                <ScrollReveal key={c.label} animation="fade-up" delay={i * 100}>
                  <div className="group relative bg-white overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_15px_50px_-12px_rgba(0,0,0,0.1)]">
                    <div className="h-[4px] w-full" style={{ backgroundColor: c.color }} />
                    <div className="p-8 md:p-10">
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

        {/* ── Where We Operate — Google Maps ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Our Area
              </p>
              <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-fsl-dark uppercase leading-[0.9] mb-3">
                Where We Operate
              </h2>
              <p className="font-redhat text-[14px] text-[#999] font-normal leading-[1.85] mb-12 max-w-[600px]">
                Serving youth across South LA, Inglewood, Baldwin Hills, View Park, and Ladera Heights
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                  className="w-full h-full"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FSL service area — Los Angeles, California"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="py-16 md:py-20 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6 justify-center">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Quick Links
              </p>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Enroll Your Child (Free)", href: "/join" },
                { label: "Donate", href: "/donate" },
                { label: "Become a Volunteer Coach", href: "/mentor-coaching" },
                { label: "View Programs", href: "/programs" },
                { label: "Read Our FAQ", href: "/faq" },
              ].map((link, i) => (
                <ScrollReveal key={link.href} animation="fade-up" delay={i * 80}>
                  <Link
                    href={link.href}
                    className="inline-block w-full sm:w-auto text-center border-2 border-fsl-coral text-fsl-coral font-redhat text-[13px] font-semibold uppercase tracking-[0.1em] px-4 sm:px-6 py-3 hover:bg-fsl-coral hover:text-white transition-all duration-500"
                  >
                    {link.label}
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NikeFooter />
    </>
  );
}
