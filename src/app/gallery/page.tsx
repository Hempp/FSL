import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Community — Fundamental Sports Labs | Free Youth Sports in Los Angeles",
  description:
    "See FSL in action. Photos and moments from our free youth sports programs across Los Angeles — basketball, football, soccer, track, and more.",
};

import { JsonLd } from "@/components/JsonLd";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/real/golf-driving-range.jpg", caption: "Youth Golf Clinic at the Driving Range", tall: true },
  { src: "/images/real/golf-putting-green.jpg", caption: "Putting Practice on the Green" },
  { src: "/images/real/golf-fairway-swing.jpg", caption: "Fairway Swing" },
  { src: "/images/real/lakers-group-photo.jpg", caption: "FSL at Lakers UCLA Health Facility" },
  { src: "/images/real/lakers-facility-warmup.jpg", caption: "Warm-Up at Lakers Facility", tall: true },
  { src: "/images/real/basketball-drills-gym.jpg", caption: "Basketball Drills with Cones" },
  { src: "/images/real/basketball-training.jpg", caption: "Youth Dribbling Training" },
  { src: "/images/real/basketball-game-action.jpg", caption: "Game Day Action Shot" },
  { src: "/images/real/basketball-players-court.jpg", caption: "Players on the Court", tall: true },
  { src: "/images/real/basketball-blue-jerseys.jpg", caption: "Team Blue Jerseys Game Day" },
  { src: "/images/real/football-field-huddle.jpg", caption: "Coach Huddle on the Football Field" },
  { src: "/images/urban/friends-group.jpg", caption: "Building Friendships" },
  { src: "/images/action/teens-workshop.jpg", caption: "Leadership Workshop" },
  { src: "/images/urban/hero-streetball.jpg", caption: "Streetball Saturdays", tall: true },
  { src: "/images/action/teens-collab.jpg", caption: "Collaborative Learning" },
  { src: "/images/urban/soccer-ball.jpg", caption: "Soccer Match Day" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Our Community — Fundamental Sports Labs",
          description:
            "Photos and moments from FSL free youth sports programs across Los Angeles.",
          mainEntity: {
            "@type": "NGO",
            name: "Fundamental Sports Labs",
            areaServed: "Los Angeles, CA",
            nonprofitStatus: "501(c)(3)",
          },
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-black flex items-center">
          <Image
            src="/images/urban/cta-athletes.jpg"
            alt="FSL Community"
            fill
            className="object-cover scale-110"
            style={{ filter: "contrast(1.2) brightness(0.2) saturate(0.3)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-[1]" />
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-fsl-coral/8 blur-[120px] rounded-full z-[1]" />

          <div className="relative z-[2] px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full">
            <ScrollReveal animation="fade-up">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-fsl-coral" />
                Gallery
              </p>
              <h1 className="font-barlow text-[48px] sm:text-[72px] md:text-[100px] lg:text-[130px] font-bold text-white uppercase leading-[0.85] tracking-[-0.03em]">
                Our Community<br />
                <span className="text-fsl-coral">In Action.</span>
              </h1>
              <p className="font-redhat text-[16px] md:text-[18px] text-white/35 font-normal mt-8 max-w-[500px] leading-[1.85]">
                Real moments from FSL programs across Los Angeles. Every photo represents a young person investing in their future.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Masonry Photo Grid ── */}
        <section className="relative bg-[#0a0a0a] py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 120px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 120px)" }} />

          <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-fsl-coral font-semibold mb-4">Moments That Matter</p>
                <h2 className="font-barlow text-[36px] md:text-[48px] font-bold text-white uppercase leading-[0.9]">
                  Through the Lens
                </h2>
              </div>
            </ScrollReveal>

            {/* CSS Columns Masonry */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {galleryImages.map((img, i) => (
                <ScrollReveal key={img.src} animation="fade-up" delay={i * 60}>
                  <div className="group relative mb-4 break-inside-avoid overflow-hidden bg-white/[0.02] border border-white/[0.04]">
                    <div className={`relative ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"} overflow-hidden`}>
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Caption on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="font-barlow text-[14px] font-bold text-white uppercase tracking-[0.05em]">
                          {img.caption}
                        </p>
                        <p className="font-redhat text-[11px] text-fsl-coral uppercase tracking-[0.15em] font-medium mt-1">
                          FSL Program
                        </p>
                      </div>
                    </div>
                    {/* Always-visible caption below image */}
                    <div className="p-4">
                      <p className="font-barlow text-[13px] font-bold text-white/60 uppercase tracking-[0.05em] group-hover:text-white transition-colors duration-300">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Share Your Story CTA ── */}
        <section className="relative py-24 md:py-36 bg-fsl-coral overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/urban/basketball-rim.jpg"
              alt=""
              fill
              className="object-cover"
              style={{ filter: "grayscale(1)" }}
            />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24 text-center">
            <ScrollReveal animation="scale">
              <p className="font-redhat text-[11px] uppercase tracking-[0.5em] text-white/60 font-semibold mb-6">
                Your Story Matters
              </p>
              <h2 className="font-barlow text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold text-white uppercase leading-[0.9] tracking-[-0.02em] mb-6">
                Share Your<br />Story
              </h2>
              <p className="font-redhat text-[16px] md:text-[18px] text-white/70 font-normal max-w-[540px] mx-auto leading-[1.85] mb-10">
                Were you part of an FSL program? Share your photos and stories with us. Every moment captured helps inspire the next generation of athletes.
              </p>
              <Link
                href="/contact"
                className="inline-block font-redhat text-[13px] font-medium uppercase tracking-[0.15em] text-fsl-coral bg-white px-10 py-4 rounded-full hover:bg-fsl-dark hover:text-white transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <NikeFooter />
    </>
  );
}
