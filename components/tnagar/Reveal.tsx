"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  as?: ElementType
  /** stagger index — mirrors the (i % 4) * 70ms delay from the original page */
  index?: number
  className?: string
}

export default function Reveal({ children, as: Tag = "div", index = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in")
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${(index % 4) * 70}ms` }}
    >
      {children}
    </Tag>
  )
}
