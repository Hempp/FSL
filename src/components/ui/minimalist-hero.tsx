import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <div
          className="hero-fade-in-left text-xl font-bold tracking-wider"
        >
          {logoText}
        </div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          className="hero-fade-in-right flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </button>
      </header>

      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        <div
          className="hero-fade-in-up z-20 order-2 md:order-1 text-center md:text-left"
          style={{ animationDelay: '1s' }}
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
            Read More
          </a>
        </div>

        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          <div
            className="hero-scale-in absolute z-0 h-[300px] w-[300px] rounded-full bg-yellow-400/90 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            style={{ animationDelay: '0.2s' }}
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="hero-fade-in-up-long relative z-10 h-auto w-56 object-cover md:w-64 scale-150 lg:w-72"
            style={{ animationDelay: '0.4s' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found";
            }}
          />
        </div>

        <div
          className="hero-fade-in-up z-20 order-3 flex items-center justify-center text-center md:justify-start"
          style={{ animationDelay: '1.2s' }}
        >
          <h1 className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <div
          className="hero-fade-in-up-short flex items-center space-x-4"
          style={{ animationDelay: '1.2s' }}
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
        <div
          className="hero-fade-in-up-short text-sm font-medium text-foreground/80"
          style={{ animationDelay: '1.3s' }}
        >
          {locationText}
        </div>
      </footer>
    </div>
  );
};
