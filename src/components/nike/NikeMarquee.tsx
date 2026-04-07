// Infinite scrolling marquee — the "swag" element
// Adds energy and movement between sections

export function NikeMarquee({ dark = false }: { dark?: boolean }) {
  const items = [
    "BASKETBALL",
    "★",
    "FOOTBALL",
    "★",
    "SOCCER",
    "★",
    "GOLF",
    "★",
    "TRACK & FIELD",
    "★",
    "AI & VR TECH",
    "★",
    "MENTAL WELLNESS",
    "★",
    "FINANCIAL RESPONSIBILITY",
    "★",
  ];

  // Double for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden py-5 md:py-6 ${dark ? "bg-fsl-dark" : "bg-fsl-coral"}`}>
      <div
        className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]"
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-barlow text-[13px] md:text-[15px] font-bold uppercase tracking-[0.3em] mx-4 md:mx-6 ${
              item === "★"
                ? dark ? "text-fsl-coral" : "text-white/50"
                : dark ? "text-white/70" : "text-white"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
