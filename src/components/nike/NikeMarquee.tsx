// ESPN bottom ticker — bold energy with sport-colored dots

export function NikeMarquee({ dark = false }: { dark?: boolean }) {
  const items = [
    { text: "BASKETBALL", color: "#FF7900" },
    { text: "FOOTBALL", color: "#0052FE" },
    { text: "SOCCER", color: "#00D17E" },
    { text: "GOLF", color: "#E9BB00" },
    { text: "TRACK & FIELD", color: "#F4767C" },
    { text: "AI & VR TECH", color: "#0052FE" },
    { text: "MENTAL WELLNESS", color: "#FF7900" },
    { text: "FINANCIAL RESPONSIBILITY", color: "#00D17E" },
  ];

  // Triple for seamless loop at faster speed
  const tripled = [...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden py-4 md:py-5 border-y ${
        dark
          ? "bg-fsl-dark border-white/[0.06]"
          : "bg-fsl-coral border-fsl-coral"
      }`}
    >
      <div
        className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite]"
        style={{ width: "max-content" }}
      >
        {tripled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            {/* Sport-colored dot separator */}
            <span
              className="inline-block w-[6px] h-[6px] rounded-full mx-5 md:mx-7 shrink-0"
              style={{
                backgroundColor: dark ? item.color : "rgba(255,255,255,0.35)",
              }}
            />
            <span
              className={`font-barlow text-[14px] md:text-[17px] lg:text-[19px] font-black uppercase tracking-[0.2em] ${
                dark ? "text-white/80" : "text-white"
              }`}
            >
              {item.text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
