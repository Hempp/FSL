import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join — Empower The Youth",
  description: "Partner with us, volunteer as a coach, or join our youth programs in golf, football, basketball, soccer, and track & field.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const benefits = [
  {
    num: "01",
    title: "Partner with Us",
    description: "Collaborate through sponsorships, facility sharing, or joint programming to empower youth across communities.",
  },
  {
    num: "02",
    title: "Become a Volunteer",
    description: "Share your time as a coach, mentor, or tutor in our impactful programs. Every hour makes a difference.",
  },
  {
    num: "03",
    title: "Make a Donation",
    description: "Your support funds programs and resources for youth participants in our community.",
    link: { text: "Donate Now", href: "https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257" },
  },
];

export default function JoinPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        {/* Hero — cinematic, Nike style */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-black flex items-end">
          <Image
            src="/images/urban/hero-streetball.jpg"
            alt="Youth athletes"
            fill
            className="object-cover"
            style={{ filter: "contrast(1.1) brightness(0.35) saturate(0.6)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-[1]" />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />
              Join Us
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[130px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              Empower<br />The <span className="text-fsl-coral">Youth</span>
            </h1>
            <p className="font-redhat text-[14px] md:text-[15px] text-white/40 font-normal mt-6 max-w-[400px] leading-[1.8]">
              Join us to support urban youth through sports and education. Make a difference today.
            </p>
          </div>
        </section>

        {/* Form section — clean, editorial */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Left — benefits */}
              <div className="lg:col-span-4">
                <ScrollReveal animation="fade-up">
                  <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-10 flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-fsl-coral/50" />
                    How to Help
                  </p>

                  <div className="space-y-10">
                    {benefits.map((b) => (
                      <div key={b.num} className="group">
                        <span className="font-barlow text-[48px] font-bold text-black/[0.04] leading-none block mb-2">
                          {b.num}
                        </span>
                        <h3 className="font-barlow text-[22px] font-bold text-fsl-dark uppercase leading-tight mb-3">
                          {b.title}
                        </h3>
                        <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.7]">
                          {b.description}
                        </p>
                        {b.link && (
                          <a
                            href={b.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-redhat text-[11px] text-fsl-coral font-semibold uppercase tracking-[0.15em] mt-3 hover:gap-3 transition-all duration-300"
                          >
                            {b.link.text}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-7 lg:col-start-6">
                <ScrollReveal animation="fade-up" delay={200}>
                  <div className="bg-[#f8f8f8] p-8 md:p-12 lg:p-16">
                    <h2 className="font-barlow text-[32px] md:text-[44px] font-bold text-fsl-dark uppercase leading-[0.9] mb-3">
                      Join Our Team
                    </h2>
                    <p className="font-redhat text-[14px] text-[#999] font-normal mb-10 max-w-[360px]">
                      Fill out the form below and we&apos;ll get back to you within 48 hours.
                    </p>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="join-fname" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">First Name</label>
                          <input type="text" id="join-fname" placeholder="John" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-300" />
                        </div>
                        <div>
                          <label htmlFor="join-lname" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Last Name</label>
                          <input type="text" id="join-lname" placeholder="Doe" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="join-email" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Email</label>
                        <input type="email" id="join-email" placeholder="john@example.com" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-300" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="join-path" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Your Path</label>
                          <select id="join-path" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-300 appearance-none">
                            <option value="">Select</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="partner">Partner</option>
                            <option value="donor">Donor</option>
                            <option value="participant">Participant</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="join-sport" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Sport Interest</label>
                          <select id="join-sport" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-300 appearance-none">
                            <option value="">Select a sport</option>
                            <option value="golf">Golf</option>
                            <option value="football">Football</option>
                            <option value="basketball">Basketball</option>
                            <option value="soccer">Soccer</option>
                            <option value="track">Track &amp; Field</option>
                            <option value="multiple">Multiple Sports</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="join-msg" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Message</label>
                        <textarea id="join-msg" placeholder="Tell us about your interest..." rows={4} className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-300 resize-none" />
                      </div>
                      <button
                        type="submit"
                        className="group relative bg-fsl-dark text-white px-12 py-4 rounded-full font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(244,118,124,0.2)] mt-4"
                      >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">Submit</span>
                        <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-full" />
                      </button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
