import Commonfour from "@/components/commonfour"
import Commonchatbot from "@/components/commonchatbot"
import StackedScrollCards from "@/components/commonthird"
import { Neckheader } from "@/components/neckheader"
import { Neckfooter } from "@/components/neckfooter"
import Neckreviews from "@/components/neckreviews"
import { Neckhero } from "@/components/neckhero"
import Neckchatbot from "@/components/neckchatbot"
import NeckcombinedComponent from "@/components/neckcombined"
import Backthird from "@/components/backthird"
import Neckthird from "@/components/neckthird"
import Neckfour from "@/components/neckfour"
import Neckfive from "@/components/neckfive"
import Necksix from "@/components/necksix"
import Neckvideo from "@/components/neckvideo"
import Script from "next/script"

export default function HomePage() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18044684782"
        strategy="afterInteractive"
      />
      
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18044684782');
        `}
      </Script>

      {/* Neck Pain Conversion Tracking Script */}
      <Script id="conversion-tracking-neck" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-18044684782/TpuGCJLQ0JwcEO6TsJxD',
              'value': 1.0,
              'currency': 'INR',
              'event_callback': callback
            });
            return false;
          }
        `}
      </Script>

      <main className="min-h-screen">
        <Neckheader />
        <Neckhero />
        <Neckthird />
        <Neckfive />
        <Necksix />
        <Neckfour />
        {/* <Neckvideo /> */}
        <Neckreviews />
        <NeckcombinedComponent />
        <Neckfooter />
        <Neckchatbot />
      </main>
    </>
  )
}