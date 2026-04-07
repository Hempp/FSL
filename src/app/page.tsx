import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home — Leaders of Tomorrow",
  description: "Fundamental Sports Labs empowers urban youth through golf, football, basketball, soccer, track & field, mental wellness, financial responsibility, and VR/AR technology.",
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { Hero3D } from "@/components/nike/Hero3D";
import { NikeMission } from "@/components/nike/NikeMission";
import { NikePillars } from "@/components/nike/NikePillars";
import { NikePrograms } from "@/components/nike/NikePrograms";
import { NikeImpact } from "@/components/nike/NikeImpact";
import { NikeTestimonial } from "@/components/nike/NikeTestimonial";
import { NikeEvents } from "@/components/nike/NikeEvents";
import { NikeCTA } from "@/components/nike/NikeCTA";
import { NikeMarquee } from "@/components/nike/NikeMarquee";
import { NikeFooter } from "@/components/nike/NikeFooter";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <NikeHeader />
      <main>
        <Hero3D />
        <NikeMarquee />

        <ScrollReveal animation="fade-up">
          <NikeMission />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <NikePillars />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <NikePrograms />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <NikeImpact />
        </ScrollReveal>

        <NikeTestimonial />

        <ScrollReveal animation="fade-up">
          <NikeEvents />
        </ScrollReveal>

        <NikeMarquee dark />
        <NikeCTA />
      </main>
      <NikeFooter />
    </>
  );
}
