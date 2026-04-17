"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
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
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
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
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileSubOpen(false);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        mobileOpen
          ? "bg-white"
          : scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/5"
            : "bg-transparent"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        <Link href="/" className="shrink-0 flex items-center gap-2.5">
          <div className={cn(
            "rounded-xl p-1.5 transition-all duration-500",
            scrolled || mobileOpen ? "bg-white shadow-sm" : "bg-white/10 backdrop-blur-sm"
          )}>
            <Image
              src="/images/ft-logo.png"
              alt="F.S.L"
              width={80}
              height={36}
              className="h-[28px] sm:h-[32px] w-auto"
              priority
            />
          </div>
          <span className={cn(
            "hidden sm:block font-barlow text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.12em] leading-tight transition-colors duration-500",
            scrolled || mobileOpen ? "text-fsl-dark" : "text-white"
          )}>
            Fundamental<br />Sports Labs
          </span>
        </Link>

        {/* Desktop nav — hidden below lg to avoid cramping on tablets */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
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
                    "font-redhat text-[12px] xl:text-[13px] font-medium uppercase tracking-[0.12em] xl:tracking-[0.15em] transition-colors duration-200 hover:text-fsl-coral flex items-center gap-1",
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
                  "font-redhat text-[12px] xl:text-[13px] font-medium uppercase tracking-[0.12em] xl:tracking-[0.15em] transition-colors duration-200 hover:text-fsl-coral",
                  scrolled ? "text-fsl-dark" : "text-white"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/join"
            className="font-redhat text-[12px] xl:text-[13px] font-medium uppercase tracking-[0.15em] text-white bg-fsl-dark px-5 xl:px-6 py-2.5 rounded-full hover:bg-fsl-coral transition-colors duration-300"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile/Tablet menu button — 44px touch target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={cn("block h-[2px] w-6 transition-all duration-300 origin-center", scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white", mobileOpen && "translate-y-[5px] rotate-45")} />
          <span className={cn("block h-[2px] w-6 transition-all duration-300", scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white", mobileOpen && "opacity-0 scale-0")} />
          <span className={cn("block h-[2px] w-6 transition-all duration-300 origin-center", scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white", mobileOpen && "-translate-y-[5px] -rotate-45")} />
        </button>
      </div>

      {/* Mobile/Tablet overlay — scrollable, animated */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ease-out",
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="h-full overflow-y-auto pt-20 pb-12 px-6 sm:px-12 flex flex-col">
          {/* Logo in mobile menu */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-black/10">
            <Image
              src="/images/ft-logo.png"
              alt="FSL"
              width={60}
              height={60}
              className="h-[50px] w-auto"
            />
            <div>
              <p className="font-barlow text-[14px] font-bold uppercase tracking-[0.1em] text-fsl-dark leading-tight">
                Fundamental
              </p>
              <p className="font-barlow text-[14px] font-bold uppercase tracking-[0.1em] text-fsl-dark leading-tight">
                Sports Labs
              </p>
              <p className="font-redhat text-[10px] text-fsl-coral uppercase tracking-[0.2em] mt-1">
                Free Youth Sports · LA
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileSubOpen(!mobileSubOpen)}
                      className="w-full flex items-center justify-between py-3 sm:py-4"
                    >
                      <span className="font-barlow text-[24px] sm:text-[28px] font-bold uppercase tracking-wide text-fsl-dark">
                        {link.label}
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={cn(
                          "text-fsl-coral transition-transform duration-300",
                          mobileSubOpen && "rotate-180"
                        )}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileSubOpen ? "max-h-[200px] opacity-100 mb-2" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="pl-4 border-l-2 border-fsl-coral/20 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2.5 font-redhat text-[15px] sm:text-[16px] font-medium text-[#666] hover:text-fsl-coral transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 sm:py-4 font-barlow text-[24px] sm:text-[28px] font-bold uppercase tracking-wide text-fsl-dark hover:text-fsl-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-black/10">
            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center bg-fsl-dark text-white py-4 rounded-full font-redhat text-[14px] font-medium uppercase tracking-wide hover:bg-fsl-coral transition-colors"
            >
              Enroll Free
            </Link>
            <Link
              href="/donate"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center border-2 border-fsl-dark text-fsl-dark py-4 rounded-full font-redhat text-[14px] font-medium uppercase tracking-wide hover:bg-fsl-dark hover:text-white transition-colors"
            >
              Support Our Mission
            </Link>
          </div>

          {/* Nonprofit badge */}
          <p className="text-center font-redhat text-[11px] text-[#aaa] mt-6">
            501(c)(3) Nonprofit · EIN: 39-4190687
          </p>
        </div>
      </div>
    </header>
  );
}
