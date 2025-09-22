'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { analytics } from '@/lib/analytics'

export default function AnalyticsProvider() {
  const pathname = usePathname()

  useEffect(() => {
    analytics.page()
  }, [pathname])

  return null
}
