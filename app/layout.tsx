import type React from "react"
import type {Metadata} from "next"
import Script from "next/script"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: "Soliid - Préfabrication de Parpaings, Pavés et Bordures au Cameroun",
  description:
    "Soliid, votre partenaire de confiance pour la préfabrication de parpaings, pavés et bordures au Cameroun. Construire facile avec nos solutions de qualité à Douala et dans tout le Cameroun.",
  keywords:
    "parpaings, pavés, bordures, préfabrication, construction, Cameroun, Douala, construire, matériaux de construction, béton",
  authors: [{name: "Soliid"}],
  creator: "Soliid",
  publisher: "Soliid",
  robots: "index, follow",
  openGraph: {
    title: "Soliid - Préfabrication de Parpaings et Pavés au Cameroun",
    description:
      "Votre partenaire de confiance pour la préfabrication de parpaings et pavés au Cameroun. Construire facile avec nos solutions de qualité.",
    url: "https://soliid.cm",
    siteName: "Soliid",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soliid - Préfabrication de Parpaings et Pavés au Cameroun",
    description: "Votre partenaire de confiance pour la préfabrication de parpaings et pavés au Cameroun.",
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'v0.app'
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
