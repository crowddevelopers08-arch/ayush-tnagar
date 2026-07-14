import type { Metadata } from "next"

import Header from "@/components/tnagar/Header"
import Hero from "@/components/tnagar/Hero"
import Offers from "@/components/tnagar/Offers"
import BookingForm from "@/components/tnagar/BookingForm"
import Why from "@/components/tnagar/Why"
import StackedScrollCards from "@/components/tnagar/StackedScrollCards"
import Plans from "@/components/tnagar/Plans"
import Stories from "@/components/tnagar/Stories"
import VideoTestimonials from "@/components/tnagar/VideoTestimonials"
import Faq from "@/components/tnagar/Faq"
import Visit from "@/components/tnagar/Visit"
import Footer from "@/components/tnagar/Footer"
import StickyCta from "@/components/tnagar/StickyCta"

export const metadata: Metadata = {
  title: "Ayush Ortho — T. Nagar | Non-Surgical Pain Relief in Chennai",
  description:
    "Knee, back, neck, shoulder and hip pain treated in 7, 14 or 21 days at Ayush Ortho, N Boag Road, T. Nagar. Ayurveda, Varma therapy and orthopaedic manual therapy. No surgery, no injections.",
  alternates: { canonical: "https://tnagar.ayushortho.in/" },
}

export default function TnagarPage() {
  return (
    <div className="tnagar scroll-smooth max-[760px]:pb-[76px]">
      <Header />
      <main>
        <Hero />
        <Offers />
        <BookingForm />
        {/* <Why /> */}
        <StackedScrollCards />
        <VideoTestimonials />        
        <Plans />
        <Stories />
        <Faq />
        <Visit />
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}
