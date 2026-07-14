import { Header } from "@/components/header"
import { Backhero } from "@/components/backhero"
import Backreviews from "@/components/backreviews"
import Backthird from "@/components/backthird"
import BackcombinedComponent from "@/components/backcombined"
import Backcenterimg from "@/components/backcenterimg"
import Backfour from "@/components/backfour"
import Backsix from "@/components/backsix"
import WhatSetsUsApart from "@/components/WhatSetsUsApart"
import { Backfooter } from "@/components/backfooter"
import Backchatbot from "@/components/backchatbot"
import Script from "next/script"

export default function HomePage() {
  return (
    <>
      {/* Google Analytics / Google Ads Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18044684782"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18044684782');
        `}
      </Script>

      {/* Conversion Tracking Script */}
      <Script id="conversion-tracking" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-18044684782/m4bQCMHqyJwcEO6TsJxD',
              'value': 1.0,
              'currency': 'INR',
              'event_callback': callback
            });
            return false;
          }
        `}
      </Script>

      <main className="min-h-screen">
        <Header />
        <Backhero />
        <section id="treatments">
          <Backthird />
        </section>
        <Backfour />
        <Backsix />
        <Backcenterimg />
        <WhatSetsUsApart />
        {/* <Backvideo /> */}
        <section id="reviews">
          <Backreviews />
        </section>
        <section id="contacts">
          <BackcombinedComponent />
        </section>
        <Backchatbot />
        <Backfooter />
      </main>
    </>
  )
}
