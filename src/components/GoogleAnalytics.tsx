import Script from "next/script";

/**
 * GA4 tag. Activates only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in
 * `.env.local` — use the measurement ID (format `G-XXXXXXXXXX`) from the GA4
 * property created for tech@woro.co.in.
 *
 * Uses `next/script` with strategy "afterInteractive" so it never blocks the
 * initial paint.
 */
export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            anonymize_ip: true,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
