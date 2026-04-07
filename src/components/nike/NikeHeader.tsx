"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Mentor Coaching", href: "/mentor-coaching" },
  { label: "Impact", href: "/impact" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
] as const;

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}
function getScrolled() { return window.scrollY > 10; }
function getScrolledServer() { return false; }

export function NikeHeader() {
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getScrolledServer);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          {NAV_LINKS.map((link) => (
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
          ))}
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
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-barlow text-[32px] font-bold uppercase tracking-wide text-fsl-dark hover:text-fsl-coral transition-colors"
            >
              {link.label}
            </Link>
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
