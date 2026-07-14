import Reveal from "./Reveal"

const CARDS = [
  {
    h: "A plan matched to your condition",
    p: "We assess you first, then place you on a 7, 14 or 21-day plan. Nothing longer than what your condition actually needs.",
  },
  {
    h: "Ayurveda, Varma, ortho and posture — together",
    p: "Instead of one therapy at a time, we combine all four on the same joint, so we treat the root cause and not just the pain.",
  },
  {
    h: "Ortho-supervised, every session",
    p: "Certified orthopaedic and Varma specialists guide and review each session. You always know what is being done and why.",
  },
  {
    h: "Built around a working day",
    p: "Sessions are short, slots run into the evening, and there is no admission and no downtime. Come after work, go home the same hour.",
  },
]

export default function Why() {
  return (
    <section id="why" className="py-[88px] max-[980px]:py-16 max-[760px]:py-[52px]">
      <div className="mx-auto w-full max-w-[1140px] px-6">
        <Reveal>
          <p className="flex items-center gap-[10px] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1341a] before:h-px before:w-[26px] before:flex-none before:bg-[#e13e20] before:content-['']">
            Why Ayush Ortho
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.5rem)]">Four therapies. One joint. One plan.</h2>
        </Reveal>
        <div className="mt-11 grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.h}
              index={i}
              className="rounded-[14px] border border-[#e1e8e4] bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e13e20]"
            >
              <h3 className="mb-[9px] text-[1.15rem] font-semibold">{card.h}</h3>
              <p className="text-[0.93rem] text-[#5e6e68]">{card.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
