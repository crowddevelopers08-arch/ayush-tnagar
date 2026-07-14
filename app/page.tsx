
import Commonheader from "@/components/commonheader"
import CommonheroSection from "@/components/commonhero"
import Commonfour from "@/components/commonfour"
import Commonfive from "@/components/commonfive"
import Commontestimonials from "@/components/commonreview"
import Commonvideo from "@/components/commonvideo"
import Commonmap from "@/components/commonmap"
import Backthird from "@/components/backthird"
import Commonchatbot from "@/components/commonchatbot"
import StackedScrollCards from "@/components/commonthird"



export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      <Commonheader />
      <section id="hero">
      <CommonheroSection />
      </section>
      <section id="trusted-pain-relief">
      <Commonfour />
      </section>
      <section id="treatments">
      <StackedScrollCards />
      </section>
      <section id="who-is-this-for">
      <Commonfive />
      </section>
      <section id="reviews">
      <Commontestimonials /> 
      </section>
      {/* <section id="testimonials">
      <Commonvideo /> 
      </section> */}
      <Commonchatbot />
      <Commonmap />
    </main>
    </>
  )
}
