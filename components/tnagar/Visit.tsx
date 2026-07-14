"use client"

import Reveal from "./Reveal"
import { track } from "./track"

export default function Visit() {
  return (
    <section
      id="visit"
      className="border-t border-[#e1e8e4] bg-white py-[88px] max-[980px]:py-16 max-[760px]:py-[52px]"
    >
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-center gap-14 px-6 max-[980px]:gap-11 min-[981px]:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="flex items-center gap-[10px] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1341a] before:h-px before:w-[26px] before:flex-none before:bg-[#e13e20] before:content-['']">
            Visit
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.5rem)]">Ayush Ortho, T.&nbsp;Nagar</h2>
          <ul className="my-8 list-none">
            <li className="flex gap-[14px] border-y border-[#e1e8e4] py-4">
              <b className="w-[78px] flex-none pt-[3px] text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#5e6e68]">
                Address
              </b>
              <span className="text-[0.95rem] leading-[1.5]">
                23A, N Boag Rd, Drivers Colony, T. Nagar,
                <br />
                Chennai, Greater Chennai, Tamil Nadu 600017
              </span>
            </li>
            <li className="flex gap-[14px] border-b border-[#e1e8e4] py-4">
              <b className="w-[78px] flex-none pt-[3px] text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#5e6e68]">
                Phone
              </b>
              <span className="text-[0.95rem] leading-[1.5]">
                <a
                  href="tel:+919150010389"
                  onClick={() => track("call_click", { branch: "T. Nagar" })}
                  className="font-semibold text-[#e13e20]"
                >
                  +91 91500 10389
                </a>
              </span>
            </li>
            <li className="flex gap-[14px] border-b border-[#e1e8e4] py-4">
              <b className="w-[78px] flex-none pt-[3px] text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#5e6e68]">
                Timings
              </b>
              <span className="text-[0.95rem] leading-[1.5]">Mon – Sun &nbsp;10:00 AM – 8:00 PM</span>
            </li>
          </ul>
          <a
            href="https://maps.app.goo.gl/MjtNUQgSe8nUeDQy5"
            target="_blank"
            rel="noopener"
            onClick={() => track("directions_click", { branch: "T. Nagar" })}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-[#e13e20] px-5 py-3 text-[0.9rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#c1341a] sm:w-auto sm:px-[26px] sm:py-[14px] sm:text-[0.95rem]"
          >
            Get directions
          </a>
        </Reveal>

        <Reveal
          index={1}
          className="h-[420px] overflow-hidden rounded-[14px] border border-[#e1e8e4] max-[980px]:h-[320px]"
        >
          <iframe
            title="Ayush Ortho T. Nagar location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62185.5614303457!2d80.16176231396258!3d13.061267139001421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.0748663!2d80.1637356!4m5!1s0x3a5267a7dad10e67%3A0x6c8f365d16a0d3f4!2sAyush%20Ortho%20-%20T%20Nagar%2C%2023A%2C%20N%20Boag%20Rd%2C%20Drivers%20Colony%2C%20T.%20Nagar%2C%20Chennai%2C%20Greater%20Chennai%2C%20Tamil%20Nadu%20600017!3m2!1d13.041952799999999!2d80.2446748!5e0!3m2!1sen!2sin!4v1784008034505!5m2!1sen!2sin"
            className="h-full w-full border-0 contrast-[1.03] grayscale-[0.35]"
          />
        </Reveal>
      </div>
    </section>
  )
}
