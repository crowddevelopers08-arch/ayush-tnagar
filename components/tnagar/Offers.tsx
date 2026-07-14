const OFFERS = [
  { b: "Every Thursday", p: "Free consultation for patients aged 65 and above." },
  { b: "Defence families", p: "15% off for armed forces personnel and their families." },
  { b: "Around your workday", p: "Short sessions, evening slots. Walk in, walk out." },
]

export default function Offers() {
  return (
    <section className="bg-[#e13e20] text-white">
      {/* Desktop / tablet — 3-column grid */}
      <div className="mx-auto hidden w-full max-w-[1140px] px-6 min-[640px]:block">
        <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.14)]">
          {OFFERS.map((o) => (
            <div key={o.b} className="bg-[#e13e20] px-7 py-[26px]">
              <b className="mb-[6px] block text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-[#fddfd7]">
                {o.b}
              </b>
              <p className="text-[0.95rem] leading-[1.45] text-[rgba(255,255,255,0.9)]">{o.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — single-row auto carousel */}
      <div className="overflow-hidden py-6 pl-4 min-[640px]:hidden">
        <div className="offers-marquee flex">
          {[...OFFERS, ...OFFERS].map((o, i) => (
            <div
              key={i}
              aria-hidden={i >= OFFERS.length}
              className="mr-3 w-[250px] flex-none rounded-[12px] border border-white/20 px-6 py-5"
            >
              <b className="mb-[6px] block text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-[#fddfd7]">
                {o.b}
              </b>
              <p className="text-[0.9rem] leading-[1.45] text-[rgba(255,255,255,0.9)]">{o.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
