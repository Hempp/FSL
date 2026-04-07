"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#mission" },
  { label: "Our Approach", href: "#our-approach" },
  { label: "Programs", href: "#program-sec" },
  { label: "Impact", href: "#our-results" },
  { label: "Events", href: "#upcoming-events" },
] as const;

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 50;
}

function getScrollServerSnapshot() {
  return false;
}

export function Header() {
  const scrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, getScrollServerSnapshot);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-white/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
        <Link href="/" className="relative shrink-0">
          <div className="bg-white rounded-xl p-1.5 shadow-sm">
            <Image
              src="/images/ft-logo.png"
              alt="F.S.L"
              width={140}
              height={50}
              className="h-[45px] w-auto"
              priority
            />
          </div>
        </Link>

        <nav className="hidden min-[1000px]:block">
          <ul className="flex items-center gap-0">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label} className="flex items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "font-redhat text-[13px] font-normal tracking-wide transition-opacity duration-200 hover:opacity-70 px-4",
                    scrolled ? "text-fsl-dark" : "text-fsl-coral"
                  )}
                >
                  {link.label}
                </Link>
                {index < NAV_LINKS.length - 1 && (
                  <span className={cn(
                    "text-[10px] select-none",
                    scrolled ? "text-fsl-dark/30" : "text-white/40"
                  )}>|</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 min-[1000px]:flex">
          <Link
            href="/join"
            className="rounded-full bg-fsl-coral px-6 py-2.5 font-redhat text-sm font-semibold uppercase text-white transition-transform duration-200 hover:scale-105"
          >
            Join Now!
          </Link>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-fsl-coral px-6 py-2.5 font-redhat text-sm font-semibold uppercase text-fsl-coral transition-transform duration-200 hover:scale-105"
          >
            Donate Now!
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 min-[1000px]:hidden"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full transition-all duration-300",
              scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full transition-all duration-300",
              scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full transition-all duration-300",
              scrolled || mobileOpen ? "bg-fsl-dark" : "bg-white",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 min-[1000px]:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-40 flex h-full w-[300px] flex-col bg-white pt-24 shadow-2xl transition-transform duration-300 ease-in-out min-[1000px]:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex-1 px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 font-redhat text-base font-medium uppercase tracking-wide text-fsl-dark transition-colors duration-200 hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-6">
          <Link
            href="/join"
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-fsl-coral px-6 py-2.5 text-center font-redhat text-sm font-semibold uppercase text-white transition-transform duration-200 hover:scale-105"
          >
            Join Now!
          </Link>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="rounded-full border-2 border-fsl-coral px-6 py-2.5 text-center font-redhat text-sm font-semibold uppercase text-fsl-coral transition-transform duration-200 hover:scale-105"
          >
            Donate Now!
          </a>
        </div>
      </div>
    </header>
  );
}
