import type React from "react"
import type {Metadata} from "next"
import Script from "next/script"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: "Soliid - Préfabrication de Parpaings, Pavés et Bordures",
  description:
    "Soliid, votre partenaire de confiance pour la préfabrication de parpaings, pavés et bordures au Cameroun. Construire facile avec nos solutions de qualité à Douala et dans tout le Cameroun.",
  keywords:
    "parpaings, pavés, bordures, préfabrication, construction, Cameroun, Douala, construire, matériaux de construction, béton",
  authors: [{name: "Soliid"}],
  creator: "Soliid",
  publisher: "Soliid",
  robots: "index, follow",
  openGraph: {
    title: "Soliid - Préfabrication de Parpaings, Pavés et Bordures",
    description:
      "Votre partenaire de confiance pour la préfabrication de parpaings et pavés au Cameroun. Construire facile avec nos solutions de qualité.",
    url: "https://www.soliid-cm.com",
    siteName: "Soliid",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo/logo-seo.png",
        width: 1024,
        height: 1024,
        alt: "Logo Soliid avec M. SOLIID"
      },
      {
        url: "/logo/logo-soliid.png",
        width: 782,
        height: 281,
        alt: "Logo Soliid"
      },
      {
        url: "/home/parpaing-soliid.png",
        width: 960,
        height: 1280,
        alt: "Palettes contenant des Parpaings de la marque Soliid"
      },
      {
        url: "/home/20190912_155144.jpg",
        width: 3096,
        height: 4128,
        alt: "Usine de préfabrication de parpaings et pavés Soliid"
      },
      {
        url: "/home/mascot-soliid.png",
        width: 1024,
        height: 1536,
        alt: "Mascotte Soliid tenant un parpaing"
      },
      {
        url: "/home/mascot-soliid-paves.png",
        width: 2812,
        height: 4046,
        alt: "Mascotte Soliid tenant un pavé"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soliid - Préfabrication de Parpaings et Pavés au Cameroun",
    description: "Votre partenaire de confiance pour la préfabrication de parpaings et pavés au Cameroun.",
    images: ["/logo/logo-seo.png", '/home/parpaing-soliid.png', '/home/mascot-soliid.png', '/home/mascot-soliid-paves.png'],
  },
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
    <head>
      <Script src="https://tally.so/widgets/embed.js" strategy="beforeInteractive"/>
    </head>
    <body className="font-sans antialiased">
    {children}
    <WhatsAppFloat/>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Script
          id="botsonic-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, o, f, js, fjs) {
                w["botsonic_widget"] = o;
                w[o] = w[o] || function () {
                  (w[o].q = w[o].q || []).push(arguments);
                };
                (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
                js.id = o;
                js.src = f;
                js.async = 1;
                fjs.parentNode.insertBefore(js, fjs);
              })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");

              Botsonic("init", {
                serviceBaseUrl: "https://api-bot.writesonic.com",
                token: "59bacca3-ad0f-454e-bda5-70a1d199a0c5",
              });
            `,
          }}
        />
    </body>
    </html>
  )
}
