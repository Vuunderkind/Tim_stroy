'use client'

import { useEffect } from 'react'
import { i18n } from '@/i18n.config'

export default function RootPage() {
  useEffect(() => {
    // Static export on GitHub Pages: router.replace doesn't resolve basePath correctly.
    // Use direct window.location so the browser does a real navigation.
    window.location.replace('/Tim_stroy/' + i18n.defaultLocale + '/')
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-white text-lg" />
    </div>
  )
}
