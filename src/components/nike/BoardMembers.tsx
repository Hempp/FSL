"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";

const boardMembers = [
  {
    name: "Ingrid E. Hutt",
    role: "Owner & CEO",
    color: "#0052FE",
    initials: "IH",
    image: "/images/board/ingrid-hutt.png",
    shortBio:
      "Majority Owner & CEO of two professional basketball teams with The Basketball League. Co-founded The California Black Women's Collective. 15-year mortgage underwriting career with performance awards from Southern California banks.",
    highlights: [
      "Former TBL team owner — South Bay Flash & Santa Ana Thunder",
      "Founded The Basketball Legacy Group (2023)",
      "LA Convention & Exhibition Center Authority Commissioner",
      "Coordinated logistics for Nelson Mandela's SoCal visit",
    ],
    credentials: ["TBL", "NFDC President", "Ford USA Liaison"],
  },
  {
    name: "Jayvon Brown",
    role: "Associate",
    color: "#FF7900",
    initials: "JB",
    image: "/images/board/jayvon-brown.png",
    shortBio:
      "Associate at Fisher Phillips' Los Angeles office, defending businesses in workplace disputes including single-plaintiff lawsuits, wage and hour class actions, and representative actions under California's PAGA.",
    highlights: [
      "J.D. — University of San Diego School of Law",
      "B.A. — University of California, Riverside",
      "Litigation, employment discrimination & harassment",
      "John Langston Bar Association member",
    ],
    credentials: ["J.D.", "Fisher Phillips", "JLBA"],
  },
];

export function BoardMemberCards() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {boardMembers.map((member, i) => (
        <ScrollReveal key={member.name} animation="fade-up" delay={i * 120}>
          <div
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            {/* ── Card background ── */}
            <div
              className={cn(
                "relative bg-[#f6f6f6] transition-all duration-700",
                expanded === i ? "bg-[#f0f0f0]" : "hover:bg-[#f2f2f2]"
              )}
            >
              {/* Giant watermark initial */}
              <span
                className="absolute -top-8 -right-4 font-barlow text-[220px] md:text-[280px] font-bold leading-none opacity-[0.025] select-none pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.05]"
                style={{ color: member.color }}
              >
                {member.initials}
              </span>

              {/* ── Top: Photo + Identity ── */}
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-start gap-6">
                  {/* Photo — circle, small, crisp */}
                  <div className="relative shrink-0">
                    <div
                      className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden ring-[3px] ring-offset-4 ring-offset-[#f6f6f6] transition-all duration-700 group-hover:ring-offset-[#f2f2f2]"
                      style={{ ringColor: `${member.color}30` } as React.CSSProperties}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={240}
                        height={240}
                        className="w-full h-full object-cover object-top"
                        style={{ filter: "contrast(1.06) saturate(0.9)" }}
                      />
                    </div>
                    {/* Online-style dot */}
                    <div
                      className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-[3px] border-[#f6f6f6]"
                      style={{ backgroundColor: member.color }}
                    />
                  </div>

                  {/* Name + Role */}
                  <div className="flex-1 pt-2">
                    {/* Role badge */}
                    <p
                      className="inline-block font-redhat text-[10px] uppercase tracking-[0.25em] font-semibold px-3 py-1 mb-3"
                      style={{
                        color: member.color,
                        backgroundColor: `${member.color}0D`,
                      }}
                    >
                      {member.role}
                    </p>

                    <h3 className="font-barlow text-[28px] md:text-[36px] font-bold text-fsl-dark uppercase leading-[0.92] tracking-[-0.02em]">
                      {member.name}
                    </h3>

                    {/* Credential tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.credentials.map((c) => (
                        <span
                          key={c}
                          className="font-redhat text-[10px] uppercase tracking-[0.15em] text-[#999] border border-black/8 px-2.5 py-1"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Bio — always visible ── */}
                <p className="font-redhat text-[14px] text-[#777] leading-[1.8] mt-8 max-w-[520px]">
                  {member.shortBio}
                </p>

                {/* ── Expandable highlights ── */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-700 ease-out",
                    expanded === i
                      ? "max-h-[400px] opacity-100 mt-8"
                      : "max-h-0 opacity-0 mt-0"
                  )}
                >
                  <div className="w-full h-[1px] bg-black/5 mb-6" />
                  <p className="font-redhat text-[10px] uppercase tracking-[0.3em] text-[#bbb] font-semibold mb-4">
                    Highlights
                  </p>
                  <div className="space-y-3">
                    {member.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                          style={{ backgroundColor: member.color }}
                        />
                        <span className="font-redhat text-[13px] text-[#666] leading-[1.65]">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Expand indicator ── */}
                <div className="flex items-center gap-2 mt-8">
                  <div
                    className="w-8 h-[3px] transition-all duration-700 group-hover:w-12"
                    style={{ backgroundColor: member.color }}
                  />
                  <span className="font-redhat text-[10px] uppercase tracking-[0.2em] text-[#bbb] font-medium">
                    {expanded === i ? "Less" : "More"}
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#bbb"
                    strokeWidth="2"
                    className={cn(
                      "transition-transform duration-500",
                      expanded === i ? "rotate-180" : ""
                    )}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
