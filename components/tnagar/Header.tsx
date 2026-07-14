"use client"

import { track } from "./track"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[#e1e8e4] bg-[rgba(247,246,241,0.88)] backdrop-blur-[10px]">
      <div className="mx-auto flex h-full w-full max-w-[1140px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-3">
          <img
            src="https://ik.imagekit.io/aegfxmf0u/public/ayushhhhh.png"
            alt="Ayush Ortho"
            className="h-[48px] w-auto sm:h-[56px]"
          />
          <span className="hidden border-l border-[#e1e8e4] pl-3 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-[#5e6e68] sm:inline-block">
            T. Nagar
          </span>
        </div>
        <div className="flex items-center gap-[18px]">
          <a
            href="tel:+919150010389"
            onClick={() => track("call_click", { branch: "T. Nagar" })}
            className="hidden text-[0.95rem] font-semibold text-[#e13e20] sm:inline-block"
          >
            +91 91500 10389
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-[#e13e20] px-4 py-2.5 text-[0.82rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#c1341a] sm:px-[26px] sm:py-[14px] sm:text-[0.95rem]"
          >
            <span className="sm:hidden">Book now</span>
            <span className="hidden sm:inline">Book a consultation</span>
          </a>
        </div>
      </div>
    </header>
  )
}
