"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Reveal from "./Reveal"

/* PLACEHOLDER COPY — replace with real, consented Google reviews
   from the T. Nagar branch before this page goes live. */
const REVIEWS = [
  {
    name: "Divya Krishnan",
    initial: "D",
    color: "#7E57C2",
    time: "2 weeks ago",
    rating: 5,
    text: "I was told a knee replacement was the only option left. I finished the 14-day plan and I climb my own stairs again. Genuinely grateful to the whole team.",
  },
  {
    name: "Jagan Iyer",
    initial: "J",
    color: "#26A69A",
    time: "a month ago",
    rating: 5,
    text: "Working from home wrecked my lower back. Seven sessions of posture therapy and the pain simply went. No pills, no injections — highly recommend.",
  },
  {
    name: "Jacob Kurian",
    initial: "J",
    color: "#EF6C00",
    time: "3 weeks ago",
    rating: 5,
    text: "Three clinics for frozen shoulder, no result. The 21-day Varma and Ayurveda plan worked. The doctors explain every step clearly.",
  },
  {
    name: "Priya Raman",
    initial: "P",
    color: "#EC407A",
    time: "a month ago",
    rating: 5,
    text: "Very clean clinic and friendly staff. My neck stiffness from desk work improved within the first week itself. Evening slots made it easy after office.",
  },
  {
    name: "Karthik Suresh",
    initial: "K",
    color: "#5C6BC0",
    time: "2 months ago",
    rating: 5,
    text: "Came in with sciatica pain that had troubled me for over a year. The ortho-supervised sessions were spot on. Walking normally now.",
  },
  {
    name: "Meena Venkat",
    initial: "M",
    color: "#43A047",
    time: "1 week ago",
    rating: 5,
    text: "My mother is 68 and could barely stand. The Thursday free consultation got us started and she is so much better. Thank you Ayush Ortho.",
  },
]

const RATING = 4.9
const TOTAL = 137

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-[2px] ${className}`} aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
          <path
            fill={i < n ? "#FBBC04" : "#E0E0E0"}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Stories() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    setSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section id="stories" className="py-[88px] max-[980px]:py-16 max-[760px]:py-[52px]">
      <div className="mx-auto w-full max-w-[1140px] px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-[10px] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1341a] before:h-px before:w-[26px] before:flex-none before:bg-[#e13e20] before:content-['']">
                Patient stories
              </p>
              <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.5rem)]">What people walked out with</h2>
            </div>

            {/* carousel arrows */}
            <div className="flex flex-none gap-2 max-[560px]:hidden">
              <button
                onClick={scrollPrev}
                aria-label="Previous reviews"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e8e4] bg-white text-[#16241f] transition-colors duration-200 hover:border-[#e13e20] hover:text-[#e13e20]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next reviews"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e8e4] bg-white text-[#16241f] transition-colors duration-200 hover:border-[#e13e20] hover:text-[#e13e20]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Google rating summary */}
        <Reveal index={1}>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 rounded-[14px] border border-[#e1e8e4] bg-white px-7 py-6 max-[760px]:px-5">
            <div className="flex items-center gap-4">
              <GoogleG className="h-9 w-9" />
              <div>
                <p className="text-[1.05rem] font-semibold leading-tight text-[#16241f]">Google Reviews</p>
                <p className="text-[0.85rem] text-[#5e6e68]">Ayush Ortho — T. Nagar</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-[#e1e8e4] min-[561px]:block" />

            <div className="flex items-center gap-3">
              <span className="text-[2.4rem] font-semibold leading-none text-[#16241f]">{RATING.toFixed(1)}</span>
              <div>
                <Stars n={5} />
                <p className="mt-1 text-[0.82rem] text-[#5e6e68]">Based on {TOTAL} reviews</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/MjtNUQgSe8nUeDQy5"
              target="_blank"
              rel="noopener"
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-[#dadce0] bg-white px-5 py-[10px] text-[0.9rem] font-medium text-[#1a73e8] transition-colors duration-200 hover:bg-[#f8faff] max-[560px]:ml-0"
            >
              <GoogleG className="h-4 w-4" />
              Write a review
            </a>
          </div>
        </Reveal>

        {/* Review carousel — all cards in a single scrolling row */}
        <div className="mt-5 overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex touch-pan-y">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="min-w-0 flex-[0_0_100%] pl-5 min-[680px]:flex-[0_0_50%] min-[980px]:flex-[0_0_33.333%]"
              >
                <div className="flex h-full flex-col rounded-[14px] border border-[#e1e8e4] bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-[1rem] font-medium text-white"
                        style={{ backgroundColor: r.color }}
                        aria-hidden="true"
                      >
                        {r.initial}
                      </span>
                      <div>
                        <p className="text-[0.95rem] font-medium leading-tight text-[#16241f]">{r.name}</p>
                        <p className="text-[0.78rem] text-[#70757a]">{r.time}</p>
                      </div>
                    </div>
                    <GoogleG className="h-5 w-5 flex-none" />
                  </div>

                  <Stars n={r.rating} className="mt-3" />

                  <p className="mt-2 text-[0.9rem] leading-[1.55] text-[#3c4043]">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === selected ? "w-6 bg-[#e13e20]" : "w-2 bg-[#d8ddda] hover:bg-[#b9c1bc]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
