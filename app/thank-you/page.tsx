"use client"

import { useEffect } from "react"
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react"
import Header from "@/components/tnagar/Header"
import Footer from "@/components/tnagar/Footer"

export default function TnagarThankYou() {
  useEffect(() => {
    // conversion signal for GTM / ad platforms
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "lead_thank_you", branch: "T. Nagar" })
  }, [])

  return (
    <div className="tnagar flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center px-5 py-14 sm:py-20 md:py-24">
        <div className="w-full max-w-[560px] rounded-[16px] border border-[#e1e8e4] bg-white p-6 text-center sm:p-10 md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e13e20]/10 sm:h-20 sm:w-20">
            <CheckCircle2 className="h-8 w-8 text-[#e13e20] sm:h-10 sm:w-10" />
          </div>

          <h1 className="text-[clamp(1.7rem,6vw,2.6rem)] font-semibold leading-tight text-[#16241f]">
            Thank you!
          </h1>
          <p className="mx-auto mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-[#5e6e68] sm:text-[1.05rem]">
            Your consultation request has been received. Our T. Nagar team will call you shortly on the number you shared to
            confirm your slot.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-[#e13e20] px-7 py-[13px] text-[0.95rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#c1341a] sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </a>
            <a
              href="tel:+919150010389"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e1e8e4] bg-white px-7 py-[13px] text-[0.95rem] font-semibold text-[#e13e20] transition-all duration-200 hover:border-[#e13e20] sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call 91500 10389
            </a>
          </div>

          <p className="mt-6 text-[0.85rem] text-[#5e6e68]">Mon – Sun &nbsp;10:00 AM – 8:00 PM</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
