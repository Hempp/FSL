import Image from "next/image";

const pillars = [
  {
    step: "01",
    title: "Athletic Training",
    desc: "Professional coaching in various sports with focus on technique, teamwork, and healthy competition",
    icon: "/images/01.png",
    bg: "bg-fsl-blue-bg",
    border: "border-t-4 border-fsl-blue",
    offset: false,
  },
  {
    step: "02",
    title: "Mental Wellness",
    desc: "Programs focusing on resilience, emotional intelligence, and positive mindset development.",
    icon: "/images/02.png",
    bg: "bg-fsl-orange-bg",
    border: "border-t-4 border-fsl-orange",
    offset: true,
  },
  {
    step: "03",
    title: "Financial Literacy",
    desc: "Foundational understanding of personal finance, saving, and responsible money management.",
    icon: "/images/03.png",
    bg: "bg-fsl-green-bg",
    border: "border-t-4 border-fsl-green",
    offset: false,
  },
  {
    step: "04",
    title: "Technology Education",
    desc: "Hands-on learning in digital tools and technology career pathways.",
    icon: "/images/04.png",
    bg: "bg-fsl-yellow-bg",
    border: "border-t-4 border-fsl-yellow",
    offset: true,
  },
] as const;

export function PillarsSection() {
  return (
    <section
      id="our-approach"
      className="relative py-[60px] md:py-[100px] px-6 md:px-[60px] max-w-[1400px] mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-[60px] gap-6">
        <div>
          <span className="font-bonvivant text-[28px] md:text-[36px] text-fsl-coral">
            Our Approach
          </span>
          <h2 className="font-barlow text-[36px] md:text-[50px] lg:text-[64px] font-bold text-fsl-dark uppercase leading-none">
            FOUR PILLAR<br />TO SUCCESS
          </h2>
        </div>
        <p className="font-redhat text-[16px] font-light text-fsl-gray leading-[26px] max-w-[400px] md:pt-10">
          Our holistic approach integrates four essential development areas to
          build well-rounded individuals prepared for success.
        </p>
      </div>

      {/* Decorative Background */}
      <Image
        src="/images/dream-image.png"
        alt=""
        width={800}
        height={800}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Pillar Cards Grid */}
      <div className="relative z-[1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.step}
            className={`${pillar.bg} ${pillar.border} rounded-[20px] p-10 text-left relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] cursor-default group ${
              pillar.offset ? "mt-0 sm:mt-[80px] lg:mt-[150px]" : ""
            }`}
          >
            {/* Step Number */}
            <span className="font-barlow text-[60px] font-bold opacity-10 absolute top-2.5 right-5 leading-none">
              {pillar.step}
            </span>

            {/* Icon */}
            <Image
              src={pillar.icon}
              alt={pillar.title}
              width={60}
              height={60}
              className="w-[60px] h-[60px] mb-5 transition-transform duration-500 group-hover:scale-110"
            />

            {/* Title */}
            <h3 className="font-barlow text-[24px] font-bold text-fsl-dark uppercase mb-3">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="font-redhat text-[15px] font-light text-fsl-gray leading-[24px]">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
