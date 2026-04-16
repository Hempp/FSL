"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  title: string;
  color: string;
  tag: string;
  items: FAQItem[];
};

function AccordionItem({
  item,
  isOpen,
  onToggle,
  color,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  color: string;
}) {
  return (
    <div
      className="border-b border-black/[0.06] last:border-b-0 transition-colors duration-300"
      style={isOpen ? { borderColor: `${color}30` } : undefined}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="font-barlow text-[18px] sm:text-[20px] font-bold uppercase leading-[1.2] tracking-[-0.01em] transition-colors duration-300"
          style={isOpen ? { color } : { color: "#1a1a1a" }}
        >
          {item.question}
        </span>
        <span
          className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={
            isOpen
              ? { backgroundColor: color, color: "#fff" }
              : { backgroundColor: "#f5f5f5", color: "#999" }
          }
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-redhat text-[14px] sm:text-[15px] text-[#666] font-normal leading-[1.85] max-w-[680px]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggleItem(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      {categories.map((cat, catIdx) => (
        <div key={cat.title} className={catIdx > 0 ? "mt-16 sm:mt-20" : ""}>
          {/* Category header */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="font-barlow text-[48px] sm:text-[56px] font-bold leading-none opacity-15 select-none"
              style={{ color: cat.color }}
            >
              {cat.tag}
            </span>
            <div>
              <div
                className="w-8 h-[3px] mb-2"
                style={{ backgroundColor: cat.color }}
              />
              <h2 className="font-barlow text-[28px] sm:text-[36px] font-bold text-fsl-dark uppercase leading-[0.9] tracking-[-0.01em]">
                {cat.title}
              </h2>
            </div>
          </div>

          {/* Accordion items */}
          <div className="bg-[#fafafa] px-6 sm:px-8 md:px-10">
            {cat.items.map((item, itemIdx) => {
              const key = `${catIdx}-${itemIdx}`;
              return (
                <AccordionItem
                  key={key}
                  item={item}
                  isOpen={!!openItems[key]}
                  onToggle={() => toggleItem(key)}
                  color={cat.color}
                />
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
