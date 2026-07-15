"use client"

import { useEffect, useRef, useState } from "react"
import Reveal from "./Reveal"
import { track } from "./track"

/* Leads are saved to our database and pushed to TeleCRM via this API route. */
const LEAD_ENDPOINT = "/api/leads"

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // campaign attribution — filled automatically from the URL
  useEffect(() => {
    const form = formRef.current
    if (!form) return
    const q = new URLSearchParams(window.location.search)
    ;["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"].forEach((k) => {
      const el = form.querySelector<HTMLInputElement>(`[name="${k}"]`)
      if (el) el.value = q.get(k) || ""
    })
    const pageUrl = form.querySelector<HTMLInputElement>('[name="page_url"]')
    if (pageUrl) pageUrl.value = window.location.href
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setSubmitting(true)
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    // Map form fields to the /api/leads payload shape.
    const payload = {
      name: raw.name,
      phone: raw.phone,
      area: raw.area,
      duration: raw.since,
      branch: raw.branch || "T. Nagar",
      source: raw.utm_source || "direct",
      medium: raw.utm_medium || "",
      campaign: raw.utm_campaign || "",
      pageUrl: raw.page_url || (typeof window !== "undefined" ? window.location.href : ""),
    }

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)

      track("lead_submit", { branch: "T. Nagar", area: raw.area })
      setDone(true)
      window.location.href = "/thank-you"
    } catch {
      setSubmitting(false)
      alert("That did not go through. Please call +91 91500 10389 instead.")
    }
  }

  return (
    <section
      id="book"
      className="scroll-mt-[88px] border-b border-[#e1e8e4] py-[88px] max-[980px]:py-16 max-[760px]:py-[52px]"
    >
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-start gap-16 px-6 max-[980px]:gap-11 min-[981px]:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="flex items-center gap-[10px] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1341a] before:h-px before:w-[26px] before:flex-none before:bg-[#e13e20] before:content-['']">
            Book
          </p>
          <h2 className="my-4 text-[clamp(1.7rem,3.2vw,2.5rem)]">Tell us where it hurts. We&apos;ll call you back.</h2>
          <p className="max-w-[56ch] text-[1.05rem] text-[#5e6e68]">
            Share your details and our team will call to fix a consultation slot at the T. Nagar clinic. We assess you first,
            then place you on the shortest plan that will work.
          </p>
          <div className="mt-6 rounded-[0_10px_10px_0] border-l-2 border-[#e13e20] bg-white px-5 py-[18px]">
            <p className="text-[0.9rem] text-[#5e6e68]">
              Prefer to talk now? Call{" "}
              <a
                href="tel:+919150010389"
                onClick={() => track("call_click", { branch: "T. Nagar" })}
                className="font-semibold text-[#e13e20]"
              >
                +91 91500 10389
              </a>{" "}
              — Mon to Sun, 10:00 AM to 8:00 PM.
            </p>
          </div>
        </Reveal>

        <Reveal index={1}>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            className="rounded-[14px] border border-[#e1e8e4] bg-white p-[30px] max-[760px]:p-5"
          >
            {!done ? (
              <div>
                <div className="grid grid-cols-2 gap-[14px] max-[760px]:grid-cols-1">
                  <Field label="Full name" htmlFor="f-name">
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Mobile number" htmlFor="f-phone">
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[6-9][0-9]{9}"
                      autoComplete="tel"
                      placeholder="10-digit number"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-2 gap-[14px] max-[760px]:grid-cols-1">
                  <Field label="Where does it hurt?" htmlFor="f-area">
                    <select id="f-area" name="area" required className={inputCls} defaultValue="">
                      <option value="">Select an area</option>
                      <option>Knee</option>
                      <option>Back / spine</option>
                      <option>Neck / shoulder</option>
                      <option>Hip / leg</option>
                      <option>Heel / foot</option>
                      <option>More than one area</option>
                    </select>
                  </Field>
                  <Field label="How long has it been?" htmlFor="f-since">
                    <select id="f-since" name="since" required className={inputCls} defaultValue="">
                      <option value="">Select duration</option>
                      <option>Under 3 months</option>
                      <option>3 to 12 months</option>
                      <option>Over a year</option>
                    </select>
                  </Field>
                </div>

                {/* campaign attribution — filled automatically */}
                <input type="hidden" name="utm_source" />
                <input type="hidden" name="utm_medium" />
                <input type="hidden" name="utm_campaign" />
                <input type="hidden" name="utm_content" />
                <input type="hidden" name="utm_term" />
                <input type="hidden" name="fbclid" />
                <input type="hidden" name="gclid" />
                <input type="hidden" name="branch" defaultValue="T. Nagar" />
                <input type="hidden" name="page_url" />

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-[6px] inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-[#e13e20] px-[26px] py-[14px] text-[0.95rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#c1341a] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Booking…" : "Book my consultation"}
                </button>
                <p className="mt-[14px] text-[0.75rem] leading-[1.5] text-[#5e6e68]">
                  By submitting, you agree to be contacted by Ayush Ortho about your appointment. We never share your number.
                </p>
              </div>
            ) : (
              <div className="px-[10px] py-7 text-center">
                <h3 className="mb-2 text-[1.15rem] font-semibold text-[#e13e20]">Booked. We&apos;ll call you shortly.</h3>
                <p className="text-[0.92rem] text-[#5e6e68]">
                  Our T. Nagar team will reach you on the number you shared to confirm your slot.
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

const inputCls =
  "w-full rounded-[9px] border border-[#e1e8e4] bg-[#f7f6f1] px-[15px] py-[13px] text-[0.95rem] transition-all duration-150 focus:border-[#e13e20] focus:bg-white focus:outline-none"

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="mb-[14px]">
      <label htmlFor={htmlFor} className="mb-[7px] block text-[0.75rem] font-semibold uppercase tracking-[0.05em] text-[#5e6e68]">
        {label}
      </label>
      {children}
    </div>
  )
}
