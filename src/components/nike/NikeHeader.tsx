"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NavLink = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly { readonly label: string; readonly href: string }[];
};

const NAV_LINKS: readonly NavLink[] = [
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "All Programs", href: "/programs" },
      { label: "Tournaments & Clinics", href: "/tournaments" },
      { label: "Mentor Coaching", href: "/mentor-coaching" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}
function getScrolled() { return window.scrollY > 10; }
function getScrolledServer() { return false; }

export function NikeHeader() {
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getScrolledServer);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="shrink-0 flex items-center gap-2.5">
          <div className={cn(
            "rounded-xl p-1.5 transition-all duration-500",
            scrolled ? "bg-white shadow-sm" : "bg-white/10 backdrop-blur-sm"
          )}>
            <Image
              src="/images/ft-logo.png"
              alt="F.S.L"
              width={80}
              height={36}
              className="h-[32px] w-auto"
              priority
            />
          </div>
          <span className={cn(
            "hidden sm:block font-barlow text-[11px] font-bold uppercase tracking-[0.12em] leading-tight transition-colors duration-500",
            scrolled ? "text-fsl-dark" : "text-white"
          )}>
            Fundamental<br />Sports Labs
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "font-redhat text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:text-fsl-coral flex items-center gap-1",
                    scrolled ? "text-fsl-dark" : "text-white"
                  )}
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={cn(
                      "transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>

                {/* Dropdown */}
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                    dropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1"
                  )}
                >
                  <div className="bg-fsl-dark/95 backdrop-blur-xl border border-white/10 min-w-[220px] py-2 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.3)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 font-redhat text-[12px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200 uppercase tracking-[0.1em]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-redhat text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:text-fsl-coral",
                  scrolled ? "text-fsl-dark" : "text-white"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/join"
            className="font-redhat text-[13px] font-medium uppercase tracking-[0.15em] text-white bg-fsl-dark px-6 py-2.5 rounded-full hover:bg-fsl-coral transition-colors duration-300"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={cn("block h-[2px] w-6 transition-all duration-300", scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white", mobileOpen && "translate-y-[5px] rotate-45")} />
          <span className={cn("block h-[2px] w-6 transition-all duration-300", scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white", mobileOpen && "opacity-0")} />
          <span className={cn("block h-[2px] w-6 transition-all duration-300", scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white", mobileOpen && "-translate-y-[5px] -rotate-45")} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="flex flex-col items-center">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-barlow text-[32px] font-bold uppercase tracking-wide text-fsl-dark hover:text-fsl-coral transition-colors"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="flex flex-col items-center gap-2 mt-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-redhat text-[16px] font-medium text-[#888] hover:text-fsl-coral transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/join"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-fsl-dark text-white px-10 py-4 rounded-full font-redhat text-[14px] font-medium uppercase tracking-wide"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
