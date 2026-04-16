import Image from "next/image";
import Link from "next/link";
import { NewsletterSignup } from "./NewsletterSignup";

type IconProps = { className?: string };

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Twitter / X", href: "#", icon: TwitterIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

const columns = [
  {
    title: "Organization",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Impact", href: "/impact" },
      { label: "Board Members", href: "/our-board-members" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "All Sports", href: "/programs" },
      { label: "AI by Phazur Labs", href: "/programs" },
      { label: "VR/AR Training", href: "/programs" },
      { label: "Financial Responsibility", href: "/programs" },
      { label: "Mental Wellness", href: "/programs" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Join Now", href: "/join" },
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/join" },
      { label: "Events", href: "/events" },
    ],
  },
];

export function NikeFooter() {
  return (
    <footer className="bg-fsl-dark text-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        {/* Newsletter */}
        <div className="mb-14">
          <div className="max-w-xl">
            <h4 className="font-redhat text-[12px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
              Stay updated with FSL news
            </h4>
            <NewsletterSignup />
          </div>
        </div>

        {/* Top — logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-white/10 rounded-xl p-1.5">
                <Image
                  src="/images/ft-logo.png"
                  alt="F.S.L"
                  width={80}
                  height={36}
                  className="h-[32px] w-auto"
                />
              </div>
              <span className="font-barlow text-[11px] font-bold uppercase tracking-[0.12em] leading-tight text-white">
                Fundamental<br />Sports Labs
              </span>
            </div>
            <p className="font-redhat text-[14px] text-white/50 font-light leading-relaxed max-w-[240px]">
              Empowering youth through sports, wellness, financial responsibility, and technology.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-redhat text-[12px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-redhat text-[14px] text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mb-10">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-white/50 hover:text-white transition-colors duration-200"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-redhat text-[12px] text-white/30">
              &copy; 2025 Fundamental Sports Labs. All rights reserved.
            </p>
            <p className="font-redhat text-[13px] text-white/50">
              Info@fundamentalsportslabs.org
            </p>
          </div>
          <p className="font-redhat text-[11px] text-white/30 text-center">
            Fundamental Sports Labs is a 501(c)(3) tax-exempt nonprofit organization. EIN: 39-4190687
          </p>
        </div>
      </div>
    </footer>
  );
}
