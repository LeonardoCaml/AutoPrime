import Script from "next/script"

const defaultGtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5PW925X7"

interface GoogleTagManagerProps {
  gtmId?: string
}

const resolveGtmId = (gtmId?: string) => defaultGtmId || gtmId

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  const resolvedGtmId = resolveGtmId(gtmId)

  if (!resolvedGtmId) {
    return null
  }

  return (
    <Script
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${resolvedGtmId}');
        `,
      }}
    />
  )
}

export function GoogleTagManagerNoScript({ gtmId }: GoogleTagManagerProps) {
  const resolvedGtmId = resolveGtmId(gtmId)

  if (!resolvedGtmId) {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${resolvedGtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  )
}

export default GoogleTagManager
