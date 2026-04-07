import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — Sports, Technology, Wellness & Financial Responsibility",
  description: "Youth sports in golf, football, basketball, soccer, and track & field. Plus AI classes by Phazur Labs, VR/AR training, mental wellness, and financial responsibility.",
};

import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const sportPrograms = [
  {
    title: "Basketball",
    desc: "Fundamental skill development, structured training, and game knowledge that builds discipline and character.",
    image: "/images/sports/youth-basketball.jpg",
    color: "#0052FE",
    features: ["5v5 & 3v3 leagues", "Position-specific training", "Summer camps & clinics"],
  },
  {
    title: "Football",
    desc: "Learning the structure of the game — positioning, reads, and discipline that builds character beyond the field.",
    image: "/images/sports/youth-football.jpg",
    color: "#FF7900",
    features: ["Flag football (ages 8-12)", "Full-contact (ages 13-18)", "Skills combine events"],
  },
  {
    title: "Soccer",
    desc: "Building from the ground up — ball control, spacing, and team structure that teaches communication and accountability.",
    image: "/images/sports/youth-soccer-2.jpg",
    color: "#00D17E",
    features: ["Co-ed recreational leagues", "Development travel teams", "Goalkeeper training"],
  },
  {
    title: "Golf",
    desc: "The fundamentals of patience, precision, and process — a sport where the structure of practice directly mirrors the structure of success.",
    image: "/images/sports/youth-golf.jpg",
    color: "#E9BB00",
    features: ["Beginner to intermediate", "On-course playing lessons", "PGA-trained instructors"],
  },
  {
    title: "Track & Field",
    desc: "Sprint, distance, relay, and field event training. Building speed, endurance, and disciplined habits through structured coaching.",
    image: "/images/sports/youth-track.jpg",
    color: "#F4767C",
    features: ["Sprint & hurdle training", "Distance & cross country", "Field events (jump, throw)"],
  },
];

const techPrograms = [
  {
    title: "AI & Machine Learning",
    subtitle: "Powered by Phazur Labs",
    desc: "Hands-on AI classes teaching youth to build, train, and deploy machine learning models. From computer vision for sports analytics to natural language processing — real-world AI skills for the next generation.",
    image: "/images/action/teens-collab.jpg",
    color: "#0052FE",
    features: ["Intro to AI & prompt engineering", "Sports performance analytics with ML", "Build your own AI project", "Phazur Labs certified curriculum"],
  },
  {
    title: "VR/AR Sports Training",
    subtitle: "Immersive Performance Lab",
    desc: "Step into virtual reality to train reaction time, spatial awareness, and game-day decision-making. AR overlays for real-time form analysis on the field.",
    image: "/images/action/teens-learning.jpg",
    color: "#FF7900",
    features: ["VR game simulation drills", "AR form analysis & correction", "Reaction time training", "Virtual scouting experience"],
  },
  {
    title: "Coding & Robotics",
    subtitle: "STEM Integration",
    desc: "Learn to code through sports — build apps that track stats, program robots for field maintenance, and create data dashboards for team performance.",
    image: "/images/action/coach-training.jpg",
    color: "#00D17E",
    features: ["Python & JavaScript basics", "Sports stats app development", "Arduino robotics projects", "Data visualization dashboards"],
  },
];

const wellnessPrograms = [
  {
    title: "Sports Psychology",
    desc: "Mindset training, visualization, stress management, and confidence building. Access to licensed sports psychologists.",
    image: "/images/action/teens-stretching.jpg",
    color: "#0052FE",
  },
  {
    title: "Financial Responsibility",
    desc: "Interactive workshops on budgeting, saving, investing, and entrepreneurship. Teaching young athletes to win both on the field and in life.",
    image: "/images/action/teens-workshop.jpg",
    color: "#00D17E",
  },
  {
    title: "Recovery & Nutrition",
    desc: "Injury prevention, nutrition guidance, hydration science, and recovery protocols. Keeping athletes healthy, strong, and game-ready.",
    image: "/images/action/teens-stretching.jpg",
    color: "#FF7900",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-end">
          <Image src="/images/sports/youth-track.jpg" alt="Youth track and field" fill className="object-cover" style={{ filter: "contrast(1.1) brightness(0.3) saturate(0.5)" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-[1]" />
          <div className="relative z-[2] px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
            <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-fsl-coral/60" />What We Do
            </p>
            <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em]">
              Our<br /><span className="text-fsl-coral">Programs</span>
            </h1>
            <p className="font-redhat text-[14px] text-white/40 font-normal mt-6 max-w-[450px] leading-[1.8]">
              Five core sports. Cutting-edge technology. Mental wellness. Financial literacy. Everything a young athlete needs to lead — on and off the field.
            </p>
          </div>
        </section>

        {/* ═══ SPORTS SECTION ═══ */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />Core Sports
              </p>
              <h2 className="font-barlow text-[36px] md:text-[52px] font-bold text-fsl-dark uppercase leading-[0.88] mb-4">
                Five Sports.<br />One Mission.
              </h2>
              <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.7] mb-16 max-w-[500px]">
                Professional coaching in golf, football, basketball, soccer, and track & field — developing strong fundamentals that transition from the field into life.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {sportPrograms.map((p, i) => (
                <ScrollReveal key={p.title} animation="fade-up" delay={i * 60}>
                  <div className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#f8f8f8] overflow-hidden hover:bg-[#f3f3f3] transition-colors duration-500">
                    <div className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.04]" style={{ filter: "saturate(0.8) contrast(1.05)" }} />
                    </div>
                    <div className={`lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="w-10 h-[3px] mb-6 transition-all duration-700 group-hover:w-16" style={{ backgroundColor: p.color }} />
                      <h3 className="font-barlow text-[28px] md:text-[36px] font-bold text-fsl-dark uppercase leading-[1] mb-4">{p.title}</h3>
                      <p className="font-redhat text-[15px] text-[#777] font-normal leading-[1.8] mb-6 max-w-[440px]">{p.desc}</p>
                      <ul className="space-y-2 mb-8">
                        {p.features.map((f) => (
                          <li key={f} className="font-redhat text-[13px] text-[#555] flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/join" className="group/link inline-flex items-center gap-2 font-redhat text-[11px] font-semibold uppercase tracking-[0.2em] text-fsl-coral hover:gap-3 transition-all duration-300">
                        Join Program
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TECHNOLOGY SECTION ═══ */}
        <section className="py-24 md:py-36 bg-[#0a0a0a] text-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />Innovation Lab
              </p>
              <h2 className="font-barlow text-[36px] md:text-[52px] font-bold text-white uppercase leading-[0.88] mb-4">
                Technology<br />Programs
              </h2>
              <p className="font-redhat text-[15px] text-white/40 font-normal leading-[1.7] mb-16 max-w-[500px]">
                Powered by partnerships with Phazur Labs and industry leaders — bringing AI, VR/AR, and coding to the next generation of athletes.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {techPrograms.map((p, i) => (
                <ScrollReveal key={p.title} animation="fade-up" delay={i * 100}>
                  <div className="group bg-white/[0.04] border border-white/[0.08] overflow-hidden hover:bg-white/[0.06] transition-all duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.04]" style={{ filter: "saturate(0.7) contrast(1.1) brightness(0.8)" }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    </div>
                    <div className="p-8">
                      <div className="w-8 h-[3px] mb-5 transition-all duration-700 group-hover:w-14" style={{ backgroundColor: p.color }} />
                      <p className="font-redhat text-[10px] uppercase tracking-[0.3em] text-fsl-coral/70 font-medium mb-2">{p.subtitle}</p>
                      <h3 className="font-barlow text-[24px] font-bold text-white uppercase leading-tight mb-3">{p.title}</h3>
                      <p className="font-redhat text-[14px] text-white/40 font-normal leading-[1.7] mb-5">{p.desc}</p>
                      <ul className="space-y-2">
                        {p.features.map((f) => (
                          <li key={f} className="font-redhat text-[12px] text-white/50 flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WELLNESS & LIFE SKILLS ═══ */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral font-medium mb-5 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-fsl-coral/50" />Beyond the Field
              </p>
              <h2 className="font-barlow text-[36px] md:text-[52px] font-bold text-fsl-dark uppercase leading-[0.88] mb-4">
                Wellness &<br />Life Skills
              </h2>
              <p className="font-redhat text-[15px] text-[#888] font-normal leading-[1.7] mb-16 max-w-[500px]">
                The structure of sports mirrors the structure of life. Discipline, preparation, and fundamentals — on and off the field.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wellnessPrograms.map((p, i) => (
                <ScrollReveal key={p.title} animation="fade-up" delay={i * 100}>
                  <div className="group cursor-default">
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.04]" style={{ filter: "saturate(0.8) contrast(1.05)" }} />
                    </div>
                    <div className="w-8 h-[3px] mb-4 transition-all duration-700 group-hover:w-14" style={{ backgroundColor: p.color }} />
                    <h3 className="font-barlow text-[24px] md:text-[28px] font-bold text-fsl-dark uppercase leading-tight mb-3">{p.title}</h3>
                    <p className="font-redhat text-[14px] text-[#888] font-normal leading-[1.7]">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
