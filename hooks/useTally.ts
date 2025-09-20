import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: PopupOptions) => void
      closePopup: (formId: string) => void
    }
  }
}

type PopupOptions = {
  key?: string
  layout?: 'default' | 'modal'
  width?: number
  alignLeft?: boolean
  hideTitle?: boolean
  overlay?: boolean
  emoji?: {
    text: string
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake'
  }
  autoClose?: number
  showOnce?: boolean
  doNotShowAfterSubmit?: boolean
  customFormUrl?: string
  hiddenFields?: {
    [key: string]: any
  }
  onOpen?: () => void
  onClose?: () => void
  onPageView?: (page: number) => void
  onSubmit?: (payload: any) => void
}

export const useTally = (formId: string) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://tally.so/widgets/embed.js'
      script.async = true
      script.onload = () => setIsLoaded(true)
      document.head.appendChild(script)
    } else {
      setIsLoaded(true)
    }
  }, [])

  const openPopup = (options?: PopupOptions) => {
    if (isLoaded && window.Tally) {
      window.Tally.openPopup(formId, options)
    }
  }

  const closePopup = () => {
    if (isLoaded && window.Tally) {
      window.Tally.closePopup(formId)
    }
  }

  return {
    isLoaded,
    openPopup,
    closePopup
  }
}
