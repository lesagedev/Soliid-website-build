"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { analytics } from "@/lib/analytics"

export default function AnalyticsProvider() {
  const pathname = usePathname()

  useEffect(() => {
    try {
      analytics.page()
    } catch (error) {
      console.warn("[AnalyticsProvider] Failed to track page:", error)
    }
  }, [pathname])

  return null
}
