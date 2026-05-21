"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const defaultPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

interface MetaPixelPageViewProps {
  pixelId?: string
}

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

export function MetaPixelPageView({ pixelId }: MetaPixelPageViewProps) {
  const resolvedPixelId = defaultPixelId || pixelId
  const pathname = usePathname()

  useEffect(() => {
    if (!resolvedPixelId) {
      return
    }

    let timeoutId: number | undefined

    const track = () => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView")
        return
      }
      timeoutId = window.setTimeout(track, 200)
    }

    track()

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [pathname, resolvedPixelId])

  return null
}
