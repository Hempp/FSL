import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about Fundamental Sports Labs — free youth sports programs, enrollment, safety, donations, and more in Los Angeles.",
};

import { JsonLd } from "@/components/JsonLd";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import type { FAQCategory } from "@/components/FAQAccordion";
import Image from "next/image";
import Link from "next/link";

/* ── FAQ DATA ── */

const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started",
    color: "#0052FE",
    tag: "01",
    items: [
      {
        question: "Is FSL really free?",
        answer:
          "Yes \u2014 100% free. There are no registration fees, no equipment costs, and no hidden charges. Fundamental Sports Labs is a 501(c)(3) nonprofit, and every program we offer is completely free for youth athletes ages 8\u201317. We believe no child should be turned away because of cost.",
      },
      {
        question: "How do I enroll my child?",
        answer:
          "Visit our Join page, select \u201cParticipant,\u201d and fill out the registration form. There are no tryouts and no waiting lists \u2014 every child is welcome. Our team will follow up within 48 hours to confirm enrollment and share next steps.",
      },
      {
        question: "What ages do you serve?",
        answer:
          "Our programs are designed for youth ages 8\u201317. All skill levels are welcome, from first-time beginners to competitive athletes looking to sharpen their fundamentals.",
      },
      {
        question: "Where are programs held?",
        answer:
          "Programs take place at various community facilities across Los Angeles, including Jesse Owens Park, Darby Park, and other local recreation centers and school campuses. Specific locations are shared at enrollment.",
      },
    ],
  },
  {
    title: "Programs",
    color: "#FF7900",
    tag: "02",
    items: [
      {
        question: "What sports do you offer?",
        answer:
          "We offer six core sports: basketball, football, soccer, golf, track & field, and baseball. Beyond athletics, our programs also include AI & machine learning classes powered by Phazur Labs, VR/AR training, coding & robotics, and mental wellness workshops.",
      },
      {
        question: "What are the four pillars?",
        answer:
          "Our four pillars are athletic training, mental wellness, financial literacy, and VR/AR & AI technology. Every young athlete in our program gets exposure to all four \u2014 because we develop leaders, not just players.",
      },
      {
        question: "When do programs run?",
        answer:
          "Programs run year-round. Saturday sessions are 9:00 AM \u2013 12:00 PM, and select weekday sessions run from 3:30 PM \u2013 5:30 PM after school. Seasonal camps and special clinics are scheduled throughout the year.",
      },
      {
        question: "Does my child need experience?",
        answer:
          "No experience is needed. All skill levels are welcome \u2014 from complete beginners who have never played a sport to competitive athletes looking to refine their game. Our coaches meet every child where they are.",
      },
    ],
  },
  {
    title: "Safety & Trust",
    color: "#00D17E",
    tag: "03",
    items: [
      {
        question: "Is FSL a registered nonprofit?",
        answer:
          "Yes. Fundamental Sports Labs is a federally recognized 501(c)(3) tax-exempt nonprofit organization. Our EIN is 39-4190687. You can verify our status on the IRS Tax Exempt Organization Search.",
      },
      {
        question: "Are coaches background-checked?",
        answer:
          "Absolutely. Every coach, volunteer, and staff member who works directly with youth undergoes a comprehensive background check before they are allowed on the field. The safety of our athletes is our top priority.",
      },
      {
        question: "What if my child has medical needs?",
        answer:
          "Our registration form includes a section for medical information, allergies, and emergency contacts. All staff members are CPR and First Aid certified. We work with parents to accommodate any medical needs and ensure a safe environment for every athlete.",
      },
    ],
  },
  {
    title: "Donations & Volunteering",
    color: "#F4767C",
    tag: "04",
    items: [
      {
        question: "Are donations tax-deductible?",
        answer:
          "Yes. All donations to Fundamental Sports Labs are tax-deductible to the full extent of the law. You will receive a tax receipt via email for your records. Our EIN is 39-4190687.",
      },
      {
        question: "Where does my money go?",
        answer:
          "We believe in full transparency. 60% of donations go directly to programs and coaching, 25% funds equipment and facility access, and 15% covers operations and community outreach. Every dollar keeps our programs free.",
      },
      {
        question: "Can I volunteer instead of donating?",
        answer:
          "Absolutely! We welcome volunteers as coaches, mentors, tutors, and event helpers. Visit our Join page and select \u201cVolunteer\u201d to get started. Every hour you give makes a real difference in a young athlete\u2019s life.",
      },
    ],
  },
];

/* Flatten for JSON-LD */
const allFaqs = faqCategories.flatMap((cat) => cat.items);

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content" className="overflow-hidden">
        {/* ═══════════════════════════════════════
            ══  HERO  ══
            ═══════════════════════════════════════ */}
        <section className="relative h-[60vh] min-h-[420px] max-h-[700px] bg-black flex items-end overflow-hidden">
          <Image
            src="/images/action/teens-collab.jpg"
            alt="Youth athletes collaborating"
            fill
            className="object-cover"
            style={{ filter: "contrast(1.2) brightness(0.18) saturate(0.3)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

          {/* Big watermark */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] font-barlow text-[30vw] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            ?
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1800px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {["#0052FE", "#FF7900", "#00D17E", "#F4767C"].map((c) => (
                    <div
                      key={c}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <span className="font-redhat text-[11px] uppercase tracking-[0.4em] text-white/40 font-medium">
                  {allFaqs.length} Questions Answered
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-barlow text-[36px] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                Frequently<br />
                <span className="relative">
                  Asked
                  <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-fsl-coral" />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="font-redhat text-[15px] sm:text-[16px] text-white/35 font-normal mt-8 max-w-[480px] leading-[1.85]">
                Everything parents, athletes, and supporters need to know about
                Fundamental Sports Labs and our free youth programs.
              </p>
            </ScrollReveal>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <span className="font-redhat text-[9px] uppercase tracking-[0.4em] text-white/15">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden">
              <div className="w-full h-3 bg-fsl-coral/50 absolute animate-[slideDown_2s_infinite]" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  FAQ CATEGORIES  ══
            ═══════════════════════════════════════ */}
        <section className="py-20 sm:py-28 md:py-40 bg-white">
          <div className="max-w-[1000px] mx-auto px-6 md:px-16 lg:px-24">
            <FAQAccordion categories={faqCategories} />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ══  STILL HAVE QUESTIONS — CTA  ══
            ═══════════════════════════════════════ */}
        <section className="relative py-16 sm:py-20 bg-fsl-dark overflow-hidden">
          {/* Diagonal stripes */}
          <div className="absolute inset-0 opacity-10">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute h-full w-[200px]"
                style={{
                  left: `${i * 25}%`,
                  background: [
                    "#0052FE",
                    "#FF7900",
                    "#00D17E",
                    "#E9BB00",
                    "#F4767C",
                  ][i],
                  transform: "skewX(-15deg)",
                  opacity: 0.3,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-barlow text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white uppercase leading-[0.9] tracking-[-0.02em]">
                Still Have{" "}
                <span className="text-fsl-coral">Questions?</span>
              </h3>
              <p className="font-redhat text-[13px] sm:text-[14px] text-white/40 mt-3 max-w-[400px]">
                Reach out and our team will get back to you within 48 hours.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="bg-fsl-coral text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-redhat text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-fsl-dark transition-all duration-500"
              >
                Contact Us
              </Link>
              <Link
                href="/join"
                className="border border-white/25 text-white/70 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-redhat text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.15em] hover:border-white hover:text-white transition-all duration-500"
              >
                Join Now
              </Link>
            </div>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
