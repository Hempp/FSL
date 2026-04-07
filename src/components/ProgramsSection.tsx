"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const programs = [
  { title: "After-School & Summer", subtitle: "Safe, structured, and inspiring environments for year-round growth.", icon: "/images/program-icon01.png", image: "/images/92bcf7bcbc.png", features: ["Multi-sport activities and enrichment sessions", "Homework help and leadership workshops", "Summer camps with fitness, fun, and personal development"] },
  { title: "Tournaments & Clinics", subtitle: "Competitive and skill-building opportunities that promote teamwork and growth.", icon: "/images/trophy.png", image: "/images/Rectangle-19588-1.png", features: ["Seasonal tournaments across multiple sports", "Skill clinics taught by professional trainers", "Recognition and award opportunities"] },
  { title: "Equipment & Supplies Donation", subtitle: "Ensuring every athlete has the tools to play and succeed.", icon: "/images/program-icon03.png", image: "/images/program-03.png", features: ["Collection and distribution of new and gently used gear", "Partnerships with brands and donors", "Support for underserved youth and programs"] },
  { title: "Sports Psychology", subtitle: "Building mental strength, focus, and resilience on and off the field.", icon: "/images/program-icon04.png", image: "/images/program-04.png", features: ["Mindset training and emotional wellness support", "Stress management and confidence workshops", "Access to licensed sports psychologists"] },
  { title: "Recovery Optimization", subtitle: "Helping young athletes stay healthy, strong, and ready to perform.", icon: "/images/dna-1.png", image: "/images/gettyimages-1139743489-612x612-1.png", features: ["Injury prevention and recovery education", "Nutrition and hydration guidance", "Access to certified athletic trainers and recovery tools"] },
  { title: "Mentorship & Coaching", subtitle: "Empowering youth through guidance, motivation, and personalized development.", icon: "/images/program-icon06.png", image: "/images/program-06.png", features: ["One-on-one and group mentorship programs", "Focus on leadership, discipline, and goal setting", "Led by experienced coaches and community role models"] },
  { title: "Financial Literacy", subtitle: "Teaching young athletes how to win both on the field and in life.", icon: "/images/piggy-bank.png", image: "/images/Rectangle-19588.png", features: ["Interactive workshops on budgeting, saving, and investing", "Real-world money management lessons for teens", "Empowering financial responsibility and future readiness"] },
  { title: "Technology Education", subtitle: "Bridging the gap between athletics and innovation.", icon: "/images/glasses.png", image: "/images/program-2.png", features: ["Hands-on learning in coding, robotics, and digital tools", "Programs that connect STEM with sports performance", "Preparing youth for careers in tech and emerging industries"] },
];

export function ProgramsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, dragFree: true },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="program-sec" className="py-[60px] md:py-[100px] px-6 md:px-[60px] max-w-[1400px] mx-auto relative">
      {/* Blue brushstroke border top */}
      <div
        className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] -mt-[30px] md:-mt-[40px] z-10 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #0052FE 0%, #0052FE 40%, transparent 100%)",
          maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1440 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 Q60,0 120,25 T240,15 T360,30 T480,10 T600,25 T720,5 T840,20 T960,30 T1080,10 T1200,25 T1320,15 T1440,20 L1440,0 L0,0 Z' fill='black'/%3E%3C/svg%3E\")",
          WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1440 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 Q60,0 120,25 T240,15 T360,30 T480,10 T600,25 T720,5 T840,20 T960,30 T1080,10 T1200,25 T1320,15 T1440,20 L1440,0 L0,0 Z' fill='black'/%3E%3C/svg%3E\")",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
      {/* Blue brushstroke border bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60px] md:h-[80px] -mb-[30px] md:-mb-[40px] z-10 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, #0052FE 0%, #0052FE 40%, transparent 100%)",
          maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1440 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,60 Q60,80 120,55 T240,65 T360,50 T480,70 T600,55 T720,75 T840,60 T960,50 T1080,70 T1200,55 T1320,65 T1440,60 L1440,80 L0,80 Z' fill='black'/%3E%3C/svg%3E\")",
          WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1440 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,60 Q60,80 120,55 T240,65 T360,50 T480,70 T600,55 T720,75 T840,60 T960,50 T1080,70 T1200,55 T1320,65 T1440,60 L1440,80 L0,80 Z' fill='black'/%3E%3C/svg%3E\")",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h4 className="font-barlow text-[24px] md:text-[32px] font-bold text-fsl-dark uppercase">
            Building Futures through
          </h4>
          <span className="font-bonvivant text-[22px] md:text-[28px] text-fsl-coral">
            Our Goals
          </span>
        </div>
        <h2 className="font-barlow text-[40px] md:text-[60px] lg:text-[80px] font-bold text-fsl-dark uppercase leading-none">
          our Programs
        </h2>
        <p className="font-redhat text-[17px] text-fsl-gray font-light max-w-[600px] mt-4">
          Flexible, accessible programming designed to meet the needs of youth in urban communities.
        </p>
      </div>

      {/* Embla Carousel */}
      <div className="relative">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-5">
            {programs.map((program) => (
              <div
                key={program.title}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0 rounded-[20px] overflow-hidden bg-white shadow-[0_7px_29px_rgba(100,100,111,0.15)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] group"
              >
                {/* Card Image */}
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Content */}
                <div className="p-6 relative">
                  {/* Icon */}
                  <div className="absolute -top-6 left-6 w-[50px] h-[50px] bg-white rounded-full p-2 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={program.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <h3 className="font-barlow text-[20px] md:text-[22px] font-bold text-fsl-dark uppercase mt-4">
                    {program.title}
                  </h3>
                  <p className="font-redhat text-[14px] text-fsl-gray font-light mb-4">
                    {program.subtitle}
                  </p>
                  <ul className="space-y-1.5">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-redhat text-[14px] text-[#434343] flex items-start gap-2"
                      >
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-fsl-green" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/join"
                    className="inline-flex items-center gap-1 font-redhat text-[14px] text-fsl-coral font-semibold mt-4 hover:gap-2 transition-all duration-300"
                  >
                    Explore
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-2 w-[50px] h-[50px] rounded-full bg-white text-fsl-dark shadow-lg flex items-center justify-center hover:bg-fsl-coral hover:text-white transition-all duration-300 z-10"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-2 w-[50px] h-[50px] rounded-full bg-white text-fsl-dark shadow-lg flex items-center justify-center hover:bg-fsl-coral hover:text-white transition-all duration-300 z-10"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Link
          href="/join"
          className="bg-fsl-coral text-white px-10 py-4 rounded-full text-base font-semibold font-redhat inline-block hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Join a Program
        </Link>
      </div>
    </section>
  );
}
