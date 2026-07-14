"use client"

import { track } from "./track"

export default function StickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] hidden gap-[10px] border-t border-[#e1e8e4] bg-[rgba(247,246,241,0.95)] px-[14px] pt-[10px] backdrop-blur-[10px] max-[760px]:flex"
      style={{ paddingBottom: "calc(10px + env(safe-area-inset-bottom))" }}
    >
      <a
        href="tel:+919150010389"
        onClick={() => track("call_click", { branch: "T. Nagar" })}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-transparent bg-[#e13e20] px-[10px] py-[13px] text-[0.9rem] font-semibold text-white transition-all duration-200 hover:bg-[#c1341a]"
      >
        Call now
      </a>
      <a
        href="#book"
        onClick={() => track("book_click", { branch: "T. Nagar" })}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#e1e8e4] bg-white px-[10px] py-[13px] text-[0.9rem] font-semibold text-[#e13e20] transition-all duration-200 hover:border-[#e13e20]"
      >
        Book now
      </a>
    </div>
  )
}
