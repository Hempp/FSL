import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home — Leaders of Tomorrow",
  description: "Fundamental Sports Labs empowers urban youth through golf, football, basketball, soccer, track & field, mental wellness, financial responsibility, and VR/AR technology.",
};

import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { NikeHeader } from "@/components/nike/NikeHeader";
import { Hero3D } from "@/components/nike/Hero3D";
import { NikeMission } from "@/components/nike/NikeMission";
import { NikePillars } from "@/components/nike/NikePillars";
import { NikeShowcase } from "@/components/nike/NikeShowcase";
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          name: "Fundamental Sports Labs",
          alternateName: "FSL",
          url: "https://fundamentalsportslabs.org",
          logo: "https://fundamentalsportslabs.org/images/ft-logo.png",
          description:
            "Youth development through sports, wellness, financial literacy, and technology",
          email: "Info@fundamentalsportslabs.org",
          sameAs: [],
          sport: [
            "Basketball",
            "Football",
            "Soccer",
            "Golf",
            "Track and Field",
            "Baseball",
          ],
          foundingDate: "2020",
        }}
      />
      <SmoothScroll />
      <NikeHeader />
      <main id="main-content">
        <Hero3D />
        <NikeMarquee />

        <ScrollReveal animation="fade-up">
          <NikeMission />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <NikePillars />
        </ScrollReveal>

        <NikeShowcase />

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
