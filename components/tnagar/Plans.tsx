import Reveal from "./Reveal"

const PLANS = [
  {
    n: "07",
    h: "Recent pain, mild stiffness",
    p: "Posture aches, a recent strain, a stiff neck from long desk hours. Most working professionals start here.",
  },
  {
    n: "14",
    h: "Pain that has stayed for months",
    p: "Frozen shoulder, sciatica, early-stage arthritis, recurring lower back pain that keeps coming back.",
  },
  {
    n: "21",
    h: "Chronic pain, surgery advised",
    p: "Long-standing pain, bone-on-bone knees, slip disc. If surgery has been recommended, try this first.",
  },
]

export default function Plans() {
  return (
    <section id="plans" className="border-y border-[#e1e8e4] bg-white py-[88px] max-[980px]:py-16 max-[760px]:py-[52px]">
      <div className="mx-auto w-full max-w-[1140px] px-6">
        <Reveal>
          <p className="flex items-center gap-[10px] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1341a] before:h-px before:w-[26px] before:flex-none before:bg-[#e13e20] before:content-['']">
            The plans
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.5rem)]">How long you&apos;ll be with us</h2>
          <p className="mt-[14px] max-w-[56ch] text-[1.05rem] text-[#5e6e68]">
            Your plan is decided at the first consultation, after the assessment — not before it.
          </p>
        </Reveal>
        <Reveal
          index={1}
          className="mt-11 grid grid-cols-3 overflow-hidden rounded-[14px] border border-[#e1e8e4] max-[980px]:grid-cols-1"
        >
          {PLANS.map((plan, i) => (
            <div
              key={plan.n}
              className={`border-[#e1e8e4] px-[30px] py-[34px] transition-colors duration-200 hover:bg-[#f7f6f1] ${
                i < PLANS.length - 1 ? "border-r max-[980px]:border-b max-[980px]:border-r-0" : ""
              }`}
            >
              <p className="font-[family-name:var(--font-fraunces)] text-[3.2rem] font-normal leading-none tabular-nums text-[#e13e20]">
                {plan.n}
                <sup className="relative -top-[1.5em] ml-1 font-[family-name:var(--font-instrument)] text-[0.9rem] font-semibold text-[#e13e20]">
                  days
                </sup>
              </p>
              <h3 className="mb-2 mt-4 text-[1.15rem] font-semibold">{plan.h}</h3>
              <p className="text-[0.9rem] text-[#5e6e68]">{plan.p}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
