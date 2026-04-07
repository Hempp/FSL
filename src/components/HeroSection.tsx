"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-fsl-blue">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0042d4] via-fsl-blue to-[#003ad6] z-0" />

      {/* Cloud animation background */}
      <div
        className="absolute bottom-0 left-0 w-full h-[200px] z-[1]"
        style={{
          backgroundImage: "url(/images/cloud-1.png)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0 bottom",
          backgroundSize: "auto 100%",
          animation: "moveClouds 60s linear infinite",
        }}
        aria-hidden="true"
      />

      {/* Content with staggered entrance */}
      <div className="relative z-[2] max-w-[1400px] mx-auto px-6 md:px-[60px] pt-[120px] pb-[60px] w-full">
        <h4
          className={`font-bonvivant text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] text-fsl-coral transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Empowering the Future
        </h4>
        <h1
          className={`font-barlow text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[160px] font-bold text-white uppercase leading-none transition-all duration-1000 ease-out delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          LEADERS of<br />tomorrow
        </h1>
        <p
          className={`font-redhat text-[16px] md:text-[20px] font-light text-white/70 mt-4 mb-8 transition-all duration-1000 ease-out delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Through Sports, Wellness, and Technology
        </p>
        <div
          className={`flex flex-wrap gap-4 transition-all duration-1000 ease-out delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/join"
            className="bg-fsl-coral text-white px-8 py-4 rounded-full text-base font-semibold font-redhat border border-fsl-coral hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Join Now!
          </Link>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white px-8 py-4 rounded-full text-base font-semibold font-redhat border border-white hover:bg-white hover:text-fsl-blue hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Donate now!
          </a>
        </div>
      </div>

      {/* Hero image with entrance animation */}
      <div
        className={`absolute right-0 bottom-0 z-[2] w-[40%] max-w-[600px] max-md:relative max-md:w-[80%] max-md:mx-auto max-md:mt-8 transition-all duration-1200 ease-out delay-300 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <Image
          src="/images/hero-image.png"
          alt="Youth athletes"
          width={800}
          height={800}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
