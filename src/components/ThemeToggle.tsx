'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type ThemeMode = 'light' | 'dark'

const storageKey = 'theme-mode'

function getStoredTheme(): ThemeMode | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(storageKey)
  return stored === 'light' || stored === 'dark' ? stored : null
}

function getSystemTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle('light', theme === 'light')
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const nextTheme = getStoredTheme() ?? getSystemTheme()
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }, [])

  const handleToggle = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem(storageKey, nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center p-2 "
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
