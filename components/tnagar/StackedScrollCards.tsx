"use client";
import React from 'react';
import Reveal from './Reveal';

interface CardData {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

// Soft accent per step, matched to the coral/orange brand
const stepStyles: { bg: string; accent: string }[] = [
  { bg: '#FFF1EC', accent: '#e13e20' },
  { bg: '#FFF4E9', accent: '#e07b2a' },
  { bg: '#FFF0EE', accent: '#d45a4a' },
  { bg: '#FFF1EC', accent: '#e13e20' },
  { bg: '#FFF4E9', accent: '#e07b2a' },
];

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Knee Pain & Arthritis",
    content: "✔️ Age-related wear & tear\n✔️ Sports injury, early-stage arthritis\n✔️ Bone-on-bone issues (non-surgical support)",
    imageUrl: "https://ik.imagekit.io/aegfxmf0u/public/scroll1.jpg"
  },
  {
    id: 2,
    title: "Back Pain & Spine Issues",
    content: "✔️ Slip disc, sciatica, lumbar compression\n✔️ Post-pregnancy back pain\n✔️ Poor posture from sedentary work",
    imageUrl: "https://ik.imagekit.io/aegfxmf0u/public/scroll2.jpg"
  },
  {
    id: 3,
    title: "Shoulder, Neck & Frozen Shoulder",
    content: "✔️ Diabetic frozen shoulder\n✔️ Stress-related stiffness\n✔️ Cervical spondylosis",
    imageUrl: "https://ik.imagekit.io/aegfxmf0u/public/scroll3.jpg"
  },
  {
    id: 4,
    title: "Hip, Leg & Foot Pain",
    content: "✔️ Hip joint strain, postural misalignment\n✔️ Heel spur (Calcaneal spur)\n✔️ Varma-based foot alignment therapy",
    imageUrl: "https://ik.imagekit.io/aegfxmf0u/public/scroll4.jpg"
  },
  {
    id: 5,
    title: "Posture Correction & Spine Realignment",
    content: "✔️ Ideal for professionals with long sitting hours\n✔️ Combines Chiropractic, Ayurveda & Varma",
    imageUrl: "https://ik.imagekit.io/aegfxmf0u/public/scroll5.jpg"
  }
];

const StackedScrollCards: React.FC = () => {
  return (
    <section className="relative bg-white px-4 py-12 sm:px-6 md:px-[60px] md:py-16 lg:py-20">
      <div className="relative mx-auto max-w-[1040px]">
        <Reveal className="mx-auto max-w-[840px] text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] text-black sm:text-[30px] md:text-[36px] lg:text-[40px]">
            Conditions Treated at Ayush Ortho
          </h2>
        </Reveal>

        {/* Sticky stacking cards — each condition slides up and stacks over the previous one */}
        <div className="mt-12">
          {cardsData.map((card, index) => {
            const { bg, accent } = stepStyles[index % stepStyles.length];
            return (
              <div
                key={card.id}
                className="sticky pb-5"
                style={{ top: `${96 + index * 26}px` }}
              >
                <div
                  className="group flex flex-col gap-7 rounded-[22px] border border-white/60 p-7 shadow-[0_16px_40px_rgba(225,62,32,0.14)] transition-transform duration-300 sm:flex-row sm:items-center sm:gap-10 sm:p-10 md:p-12"
                  style={{ backgroundColor: bg }}
                >
                  {/* Number badge */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-[15px] font-extrabold shadow-sm sm:h-14 sm:w-14 sm:text-[17px]"
                    style={{ color: accent }}
                  >
                    {index + 1}
                  </div>

                  {/* Text content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[18px] font-extrabold leading-[1.3] text-[#1A1A1A] sm:text-[20px] md:text-[22px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-[14px] leading-[1.75] text-[#2B2B2B]/80 sm:text-[15px]">
                      {card.content}
                    </p>
                  </div>

                  {/* Image on the right */}
                  <div className="w-full shrink-0 overflow-hidden rounded-2xl sm:w-72 md:w-80 lg:w-96">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56 md:h-64 lg:h-72"
                      width={400}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StackedScrollCards;
