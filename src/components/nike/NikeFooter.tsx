import Image from "next/image";
import Link from "next/link";

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

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-redhat text-[12px] text-white/30">
            &copy; 2025 Fundamental Sports Labs. All rights reserved.
          </p>
          <p className="font-redhat text-[13px] text-white/50">
            Info@fundamentalsportslabs.org
          </p>
        </div>
      </div>
    </footer>
  );
}
