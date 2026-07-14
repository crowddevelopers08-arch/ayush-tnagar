"use client"

import { useEffect, useState, type KeyboardEvent } from "react"
import { track } from "./track"

type Key = "knee" | "back" | "shoulder" | "hip" | "heel"

const CONDITIONS: Record<Key, { t: string; b: string[]; p: string }> = {
  knee: {
    t: "Knee pain & arthritis",
    b: ["Age-related wear and tear", "Sports injury, early-stage arthritis", "Bone-on-bone knees — non-surgical support"],
    p: "Typical plan: 14–21 days",
  },
  back: {
    t: "Back pain & slip disc",
    b: ["Slip disc, sciatica, lumbar compression", "Post-pregnancy back pain", "Posture damage from long sitting hours"],
    p: "Typical plan: 7–21 days",
  },
  shoulder: {
    t: "Neck, shoulder & frozen shoulder",
    b: ["Diabetic frozen shoulder", "Cervical spondylosis", "Stress-related neck and shoulder stiffness"],
    p: "Typical plan: 14–21 days",
  },
  hip: {
    t: "Hip & leg pain",
    b: ["Hip joint strain and misalignment", "Sciatic pain running down the leg", "Varma-based alignment therapy"],
    p: "Typical plan: 14 days",
  },
  heel: {
    t: "Heel & foot pain",
    b: ["Heel spur (calcaneal spur)", "Plantar fascia pain", "Foot alignment through Varma points"],
    p: "Typical plan: 7–14 days",
  },
}

const POINTS: { key: Key; label: string; anchor: "start" | "end"; x: number; transform: string; aria: string }[] = [
  { key: "knee", label: "Knee", anchor: "end", x: -16, transform: "translate(106,362)", aria: "Knee pain and arthritis" },
  { key: "back", label: "Back & spine", anchor: "start", x: 16, transform: "translate(141,212)", aria: "Back pain and slip disc" },
  { key: "shoulder", label: "Neck & shoulder", anchor: "start", x: 16, transform: "translate(184,106)", aria: "Neck, shoulder and frozen shoulder" },
  { key: "hip", label: "Hip", anchor: "end", x: -16, transform: "translate(112,256)", aria: "Hip and leg pain" },
  { key: "heel", label: "Heel & foot", anchor: "start", x: 16, transform: "translate(178,472)", aria: "Heel and foot pain" },
]

const PILLS: { key: Key; label: string }[] = [
  { key: "knee", label: "Knee" },
  { key: "back", label: "Back & spine" },
  { key: "shoulder", label: "Neck & shoulder" },
  { key: "hip", label: "Hip" },
  { key: "heel", label: "Heel & foot" },
]

const ORDER: Key[] = ["knee", "back", "shoulder", "hip", "heel"]

export default function Hero() {
  const [active, setActive] = useState<Key>("knee")
  const c = CONDITIONS[active]

  // Auto-cycle through the conditions by default. Any manual selection
  // (hover / click / tap) resets the timer, then cycling resumes.
  useEffect(() => {
    const t = setTimeout(() => {
      setActive((prev) => ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length])
    }, 3000)
    return () => clearTimeout(t)
  }, [active])

  const onKey = (e: KeyboardEvent, key: Key) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setActive(key)
    }
  }

  return (
    <section className="border-b border-[#e1e8e4] pb-16 pt-[72px] max-[760px]:pb-12 max-[760px]:pt-11 max-[470px]:pt-6">
      <div className="hero-grid mx-auto w-full max-w-[1140px] px-6">
        {/* copy — top: eyebrow, heading, paragraph */}
        <div className="hero-top">
          <p className="flex items-center gap-[10px] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1341a] before:h-px before:w-[26px] before:flex-none before:bg-[#e13e20] before:content-['']">
            T. Nagar, Chennai
          </p>
          <h1 className="my-[18px] text-[clamp(2.1rem,4.6vw,3.5rem)]">
            Relieve pain in <span className="hero-em">7 to 21 days</span>. Without surgery.
          </h1>
          <p className="max-w-[56ch] text-[1.05rem] text-[#5e6e68]">
            Knee, back, neck, shoulder and hip pain treated with Ayurveda, Varma therapy and orthopaedic manual therapy — in
            one room, under one plan. No injections. No hospital stay.
          </p>
        </div>

        {/* copy — bottom: buttons + trust */}
        <div className="hero-bottom">
          <div className="my-[30px] mb-[26px] max-[470px]:mt-2 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-[#e13e20] px-5 py-3 text-[0.88rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#c1341a] min-[400px]:flex-1 sm:px-[26px] sm:py-[14px] sm:text-[0.95rem] min-[761px]:flex-none"
            >
              Book a consultation
            </a>
            <a
              href="tel:+919150010389"
              onClick={() => track("call_click", { branch: "T. Nagar" })}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e1e8e4] bg-transparent px-5 py-3 text-[0.88rem] font-semibold text-[#e13e20] transition-all duration-200 hover:border-[#e13e20] hover:bg-white min-[400px]:flex-1 sm:px-[26px] sm:py-[14px] sm:text-[0.95rem] min-[761px]:flex-none"
            >
              Call 91500 10389
            </a>
          </div>

          <div className="flex flex-wrap gap-x-[22px] gap-y-2 text-[0.85rem] text-[#5e6e68]">
            {["5,000+ patients treated", "Ortho-supervised sessions", "No surgery, no injections"].map((t) => (
              <span
                key={t}
                className="flex items-center gap-[7px] before:h-[5px] before:w-[5px] before:flex-none before:rounded-full before:bg-[#e13e20] before:content-['']"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* body map */}
        <div className="hero-map overflow-hidden rounded-[14px] border border-[#e1e8e4] bg-white px-6 pb-[22px] pt-[26px] max-[760px]:px-4 max-[760px]:pb-4 max-[760px]:pt-[18px]">
          <p className="mb-[6px] text-center text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#5e6e68]">
            Where does it hurt?
          </p>
          <div className="grid grid-cols-1 items-center gap-5 max-[760px]:gap-2 min-[761px]:grid-cols-[1fr_200px]">
            <svg
              viewBox="0 0 280 560"
              role="img"
              aria-label="Body map of the areas treated at Ayush Ortho"
              className="mx-auto block h-auto max-h-[460px] w-full max-[760px]:h-[230px] max-[760px]:w-auto"
            >
              <g className="fig">
                <circle cx="140" cy="52" r="26" />
                <path d="M140 78 V96" />
                <path d="M96 106 Q140 96 184 106" />
                <path d="M140 96 C135 145 145 195 140 250" />
                <path d="M132 118 H148 M132 136 H148 M132 154 H148 M132 172 H148 M132 190 H148 M132 208 H148 M132 226 H148" />
                <path d="M110 252 Q140 262 170 252" />
                <path d="M96 106 L78 172 L72 236 L66 254" />
                <path d="M184 106 L202 172 L208 236 L214 254" />
                <path d="M112 256 L106 362 L102 472 L84 492" />
                <path d="M168 256 L174 362 L178 472 L196 492" />
              </g>
              <g className="node">
                <circle cx="78" cy="172" r="3.5" />
                <circle cx="202" cy="172" r="3.5" />
                <circle cx="72" cy="236" r="3.5" />
                <circle cx="208" cy="236" r="3.5" />
                <circle cx="168" cy="256" r="3.5" />
                <circle cx="174" cy="362" r="3.5" />
                <circle cx="102" cy="472" r="3.5" />
              </g>

              {POINTS.map((pt) => (
                <g
                  key={pt.key}
                  className={`pt${active === pt.key ? " on" : ""}`}
                  tabIndex={0}
                  role="button"
                  aria-label={pt.aria}
                  transform={pt.transform}
                  onMouseEnter={() => setActive(pt.key)}
                  onClick={() => setActive(pt.key)}
                  onKeyDown={(e) => onKey(e, pt.key)}
                >
                  <circle className="pt-halo" r="15" />
                  <circle className="pt-dot" r="6" />
                  <text className="pt-label max-[760px]:hidden" x={pt.x} y="4" textAnchor={pt.anchor}>
                    {pt.label}
                  </text>
                </g>
              ))}
            </svg>

            <div aria-live="polite">
              <p className="mb-[10px] font-[family-name:var(--font-fraunces)] text-[1.05rem] font-semibold">{c.t}</p>
              <ul className="mb-[14px] grid gap-[7px]">
                {c.b.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-[0.86rem] leading-[1.45] text-[#5e6e68] before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-[6px] before:bg-[#e13e20] before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="border-t border-[#e1e8e4] pt-3 text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-[#e13e20]">
                {c.p}
              </p>
            </div>
          </div>

          {/* mobile controls — infinite marquee */}
          <div className="mt-[18px] hidden overflow-hidden max-[760px]:block" role="tablist" aria-label="Areas we treat">
            <div className="pill-marquee">
              {[...PILLS, ...PILLS].map((pill, i) => (
                <button
                  key={i}
                  onClick={() => setActive(pill.key)}
                  aria-hidden={i >= PILLS.length}
                  className={`mr-2 flex-none cursor-pointer whitespace-nowrap rounded-full border px-[15px] py-2 text-[0.82rem] font-medium transition-all duration-200 ${
                    active === pill.key
                      ? "border-[#e13e20] bg-[#e13e20] text-white"
                      : "border-[#e1e8e4] bg-transparent text-[#5e6e68]"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
