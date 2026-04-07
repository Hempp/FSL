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

const contactInfo = [
  { label: "Email", value: "Info@fundamentalsportslabs.org", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Location", value: "Los Angeles, California", icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" },
];

export default function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-black flex items-end">
          <Image src="/images/urban/community.jpg" alt="Contact" fill className="object-cover" style={{ filter: "contrast(1.1) brightness(0.3) saturate(0.5)" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-20 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />Reach Out
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              Contact<br /><span className="text-fsl-coral">Us</span>
            </h1>
          </div>
        </section>

        <section className="py-24 md:py-36">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Contact info */}
              <div className="lg:col-span-4">
                <ScrollReveal animation="fade-up">
                  <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-10 flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-fsl-coral/50" />Info
                  </p>
                  <div className="space-y-10">
                    {contactInfo.map((c) => (
                      <div key={c.label} className="flex gap-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-fsl-coral flex-shrink-0 mt-0.5">
                          <path d={c.icon} />
                        </svg>
                        <div>
                          <p className="font-redhat text-[11px] uppercase tracking-[0.2em] text-[#aaa] font-medium mb-1">{c.label}</p>
                          <p className="font-redhat text-[15px] text-fsl-dark font-normal">{c.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-12">
                    {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((s) => (
                      <a key={s} href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#aaa] hover:border-fsl-coral hover:text-fsl-coral transition-all duration-300">
                        <span className="font-redhat text-[10px] font-bold uppercase">{s[0]}</span>
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 lg:col-start-6">
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className="bg-[#f8f8f8] p-8 md:p-12 lg:p-16">
                    <h2 className="font-barlow text-[32px] md:text-[40px] font-bold text-fsl-dark uppercase leading-[0.9] mb-3">
                      Send a Message
                    </h2>
                    <p className="font-redhat text-[14px] text-[#999] font-normal mb-10">
                      We&apos;d love to hear from you. Fill out the form and we&apos;ll respond within 48 hours.
                    </p>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="contact-name" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Name</label>
                          <input id="contact-name" type="text" placeholder="Your name" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors" />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Email</label>
                          <input id="contact-email" type="email" placeholder="you@email.com" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Subject</label>
                        <input id="contact-subject" type="text" placeholder="How can we help?" className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block font-redhat text-[11px] font-semibold uppercase tracking-[0.15em] text-fsl-dark mb-2">Message</label>
                        <textarea id="contact-message" placeholder="Your message..." rows={5} className="w-full bg-white border-0 border-b-2 border-black/10 px-0 py-3 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors resize-none" />
                      </div>
                      <button type="submit" className="group relative bg-fsl-dark text-white px-12 py-4 rounded-full font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] overflow-hidden mt-2">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">Send Message</span>
                        <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-full" />
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
