"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import Reveal from "./Reveal"

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is the treatment really non-surgical?",
    a: "Yes. We combine Ayurveda, Varma therapy, orthopaedic manual therapy and posture correction on the same joint — no surgery, no injections, and no hospital stay.",
  },
  {
    q: "How soon will I feel relief?",
    a: "It depends on your condition. After the first assessment we place you on the shortest plan that will work — 7, 14 or 21 days. Many patients notice a difference within the first week.",
  },
  {
    q: "Which conditions do you treat?",
    a: "Knee pain and arthritis, back pain and slip disc, neck, shoulder and frozen shoulder, hip and leg pain, sciatica, heel and foot pain, and posture-related issues.",
  },
  {
    q: "Do I need a referral or scans before coming?",
    a: "No referral is needed. If you already have X-rays, MRI or other reports, bring them along — otherwise we assess you at the clinic and advise from there.",
  },
  {
    q: "Are the sessions supervised by specialists?",
    a: "Every session is guided and reviewed by certified orthopaedic and Varma specialists, so you always know what is being done and why.",
  },
  {
    q: "How long is each session? Do I need admission?",
    a: "Sessions are short and slots run into the evening. There is no admission and no downtime — come after work and go home the same hour.",
  },
  {
    q: "What are your timings and where are you located?",
    a: "We are at 23A, N Boag Rd, Drivers Colony, T. Nagar, Chennai 600017, open Mon – Sun, 10:00 AM – 8:00 PM.",
  },
  {
    q: "Do you have any offers?",
    a: "Free consultation every Thursday for patients aged 65 and above, and 15% off for armed forces personnel and their families.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-[88px] max-[980px]:py-16 max-[760px]:py-[52px]">
      <div className="mx-auto w-full max-w-[1040px] px-6">
        <Reveal>
          <p className="flex items-center gap-[10px] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1341a] before:h-px before:w-[26px] before:flex-none before:bg-[#e13e20] before:content-['']">
            FAQ
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.5rem)]">Questions people ask us</h2>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal
                key={item.q}
                index={i}
                className="overflow-hidden rounded-[14px] border border-[#e1e8e4] bg-[#f7f6f1]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                >
                  <span className="text-[0.98rem] font-semibold text-[#16241f] sm:text-[1.05rem]">{item.q}</span>
                  <Plus
                    className={`h-5 w-5 flex-none text-[#e13e20] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[0.92rem] leading-[1.65] text-[#5e6e68] sm:px-7">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
