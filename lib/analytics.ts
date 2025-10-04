import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

export const analytics = Analytics({
  app: 'soliid-site',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-N6J9T9TV4G'],
    })
  ]
})

export const trackEvent = {
  pageView: (page: string) => analytics.page({ title: page }),
  productView: (productName: string, category: string) =>
    analytics.track('Product Viewed', { product: productName, category }),
  contactFormStart: () => analytics.track('Contact Form Started'),
  contactFormSubmit: () => analytics.track('Contact Form Submitted'),
  whatsappClick: () => analytics.track('WhatsApp Clicked'),
  quoteRequest: (product: string) =>
    analytics.track('Quote Requested', { product })
}
