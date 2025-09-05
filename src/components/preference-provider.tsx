'use client'

import { createContext, useContext, useEffect, useMemo } from 'react'
import { usePreferences, UserPreferences } from '@/lib/preferences'

interface PreferenceContextType {
  preferences: UserPreferences
  updatePreference: <K extends keyof UserPreferences>(
    category: K,
    key: keyof UserPreferences[K],
    value: UserPreferences[K][keyof UserPreferences[K]]
  ) => void
  resetPreferences: () => void
  exportPreferences: () => string
  importPreferences: (data: string) => void
}

const PreferenceContext = createContext<PreferenceContextType | undefined>(undefined)

export function PreferenceProvider({ children }: { children: React.ReactNode }) {
  const { 
    appearance, 
    typography, 
    layout, 
    accessibility, 
    animation,
    updatePreference, 
    resetPreferences, 
    exportPreferences, 
    importPreferences 
  } = usePreferences()
  
  // Memoize preferences to prevent unnecessary re-renders
  const preferences = useMemo(() => ({ 
    appearance, 
    typography, 
    layout, 
    accessibility, 
    animation 
  }), [appearance, typography, layout, accessibility, animation])

  const memoizedPreferences = useMemo(() => preferences, [preferences])

  // Apply CSS variables based on preferences
  useEffect(() => {
    const root = document.documentElement

    // Apply color variables
    root.style.setProperty('--primary', memoizedPreferences.appearance.primaryColor)
    root.style.setProperty('--secondary', memoizedPreferences.appearance.secondaryColor)
    root.style.setProperty('--accent', memoizedPreferences.appearance.accentColor)

    // Apply theme
    if (memoizedPreferences.appearance.theme === 'dark') {
      root.classList.add('dark')
    } else if (memoizedPreferences.appearance.theme === 'light') {
      root.classList.remove('dark')
    } else if (memoizedPreferences.appearance.theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    // Apply reduced motion
    if (memoizedPreferences.accessibility.reducedMotion) {
      root.style.setProperty('--animation-duration', '0s')
    } else {
      root.style.removeProperty('--animation-duration')
    }

    // Apply high contrast
    if (memoizedPreferences.accessibility.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Apply border radius
    const borderRadiusMap = {
      none: '0px',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
    }
    root.style.setProperty('--radius', borderRadiusMap[memoizedPreferences.appearance.borderRadius])

    // Apply font family
    const fontFamilyMap = {
      system: 'ui-sans-serif, system-ui, sans-serif',
      serif: 'ui-serif, Georgia, serif',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace',
      custom: 'Inter, system-ui, sans-serif',
    }
    root.style.setProperty('--font-family', fontFamilyMap[memoizedPreferences.typography.fontFamily])

  }, [memoizedPreferences])

  return (
    <PreferenceContext.Provider
      value={{
        preferences,
        updatePreference,
        resetPreferences,
        exportPreferences,
        importPreferences,
      }}
    >
      {children}
    </PreferenceContext.Provider>
  )
}

export function usePreferenceContext() {
  const context = useContext(PreferenceContext)
  if (context === undefined) {
    throw new Error('usePreferenceContext must be used within a PreferenceProvider')
  }
  return context
}
