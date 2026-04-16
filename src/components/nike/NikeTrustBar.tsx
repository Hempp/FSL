import { ShieldCheck, Badge, MapPin, Calendar, FileText } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "GuideStar Verified" },
  { icon: Badge, label: "501(c)(3) Nonprofit" },
  { icon: MapPin, label: "Los Angeles, CA" },
  { icon: Calendar, label: "Est. 2023" },
  { icon: FileText, label: "EIN: 39-4190687" },
];

export function NikeTrustBar() {
  return (
    <section
      aria-label="Trust signals"
      className="border-y border-black/5 bg-[#f8f8f8]"
    >
      <div className="flex items-center gap-6 md:gap-10 overflow-x-auto md:overflow-visible md:justify-center px-5 py-3 md:py-4 scrollbar-none">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex shrink-0 items-center gap-2"
          >
            <Icon className="size-4 text-fsl-coral" strokeWidth={1.8} />
            <span className="text-[11px] md:text-[12px] uppercase tracking-widest text-neutral-500 font-medium whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
