import Analytics from "analytics"
import googleAnalytics from "@analytics/google-analytics"

let analytics: any

try {
  analytics = Analytics({
    app: "soliid-site",
    plugins: [
      googleAnalytics({
        measurementIds: ["G-N6J9T9TV4G"],
      }),
    ],
  })
} catch (error) {
  console.warn("[Analytics] Failed to initialize:", error)
  // Create a mock analytics object that does nothing
  analytics = {
    page: () => {},
    track: () => {},
  }
}

export { analytics }

export const trackEvent = {
  pageView: (page: string) => {
    try {
      analytics.page({ title: page })
    } catch (error) {
      console.warn("[Analytics] Failed to track page view:", error)
    }
  },
  productView: (productName: string, category: string) => {
    try {
      analytics.track("Product Viewed", { product: productName, category })
    } catch (error) {
      console.warn("[Analytics] Failed to track product view:", error)
    }
  },
  contactFormStart: () => {
    try {
      analytics.track("Contact Form Started")
    } catch (error) {
      console.warn("[Analytics] Failed to track contact form start:", error)
    }
  },
  contactFormSubmit: () => {
    try {
      analytics.track("Contact Form Submitted")
    } catch (error) {
      console.warn("[Analytics] Failed to track contact form submit:", error)
    }
  },
  whatsappClick: () => {
    try {
      analytics.track("WhatsApp Clicked")
    } catch (error) {
      console.warn("[Analytics] Failed to track WhatsApp click:", error)
    }
  },
  quoteRequest: (product: string) => {
    try {
      analytics.track("Quote Requested", { product })
    } catch (error) {
      console.warn("[Analytics] Failed to track quote request:", error)
    }
  },
}
