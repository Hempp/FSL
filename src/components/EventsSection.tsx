"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";

const events = [
  {
    day: "15",
    month: "Oct",
    title: "YOUTH SOCCER CAMP 2025",
    location: "Community Sports Complex, Downtown",
    time: "9:00 AM - 1:00 PM",
    description: "A week-long soccer camp designed for ages 10-16. Young athletes will build skills, improve teamwork, and train with experienced coaches in a fun, supportive environment.",
    image: "/images/92bcf7bcbc.png",
    featureImage: "/images/hero-image.png",
  },
  {
    day: "22",
    month: "Nov",
    title: "BASKETBALL TOURNAMENT 2025",
    location: "Inglewood Recreation Center",
    time: "10:00 AM - 5:00 PM",
    description: "Competitive tournament featuring teams from across the region. Prizes and awards for top performers in multiple age divisions.",
    image: "/images/Rectangle-19588-1.png",
    featureImage: "/images/program-06.png",
  },
  {
    day: "08",
    month: "Dec",
    title: "FINANCIAL LITERACY WORKSHOP",
    location: "Compton Community Center",
    time: "1:00 PM - 4:00 PM",
    description: "Interactive workshop teaching teens budgeting, saving, and money management skills for lifelong financial health.",
    image: "/images/program-03.png",
    featureImage: "/images/gettyimages-1139743489-612x612-1.png",
  },
];

function MapMarkerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#00D17E" className="flex-shrink-0 mt-0.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#E9BB00" className="flex-shrink-0 mt-0.5">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
    </svg>
  );
}

function subscribeResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getIsMobile() {
  return window.innerWidth < 768;
}

function getIsMobileServer() {
  return false;
}

export function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useSyncExternalStore(subscribeResize, getIsMobile, getIsMobileServer);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(events.length - 1, i + 1));

  const event = events[currentIndex];

  return (
    <section id="upcoming-events" className="py-[60px] md:py-[100px] px-6 md:px-[60px] max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-baseline gap-4 flex-wrap">
          <h4 className="font-barlow text-[24px] md:text-[32px] font-bold text-fsl-dark uppercase">
            Join Us For
          </h4>
          <span className="font-bonvivant text-[22px] md:text-[28px] text-fsl-coral">
            our Events Calendar
          </span>
        </div>
        <h2 className="font-barlow text-[40px] md:text-[60px] lg:text-[80px] font-bold text-fsl-dark uppercase leading-none">
          Upcoming Events
        </h2>
      </div>

      {/* Split layout: image left, card right */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left: Feature image */}
        <div className="flex-1 relative rounded-[20px] overflow-hidden min-h-[400px] md:min-h-[500px]">
          <Image
            src={event.featureImage}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Event card */}
        <div className="flex-1 relative rounded-[20px] overflow-hidden min-h-[400px] md:min-h-[500px]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Date badge */}
          <div className="absolute top-5 right-5 z-[2] bg-fsl-orange rounded-[10px] px-4 py-3 text-center text-white">
            <div className="font-barlow text-[36px] md:text-[48px] font-bold leading-none">
              {event.day}
            </div>
            <div className="font-redhat text-[12px] font-light uppercase">
              {event.month}
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-[2]">
            <div className="flex items-center gap-2 text-white/80 mb-1">
              <ClockIcon />
              <span className="font-redhat text-[13px]">{event.time}</span>
            </div>
            <h3 className="font-barlow text-[24px] md:text-[28px] font-bold text-white uppercase mb-2">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 text-white/80 mb-3">
              <MapMarkerIcon />
              <span className="font-redhat text-[13px]">{event.location}</span>
            </div>
            <p className="font-redhat text-[14px] text-white/80 font-light leading-relaxed mb-4">
              {event.description}
            </p>
            <a
              href="/join"
              className="bg-fsl-coral text-white px-6 py-2.5 rounded-full text-[14px] font-semibold inline-block hover:opacity-90 transition-opacity"
            >
              Join a Program
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-4 mt-8 justify-center md:justify-start">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full bg-fsl-coral text-white flex items-center justify-center transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80"
          aria-label="Previous event"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          disabled={currentIndex === events.length - 1}
          className="w-12 h-12 rounded-full bg-fsl-coral text-white flex items-center justify-center transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80"
          aria-label="Next event"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
