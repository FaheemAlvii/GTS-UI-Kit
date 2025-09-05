import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserPreferences {
  appearance: {
    theme: 'light' | 'dark' | 'system'
    primaryColor: string
    secondaryColor: string
    accentColor: string
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl'
    shadows: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  }
  typography: {
    fontFamily: 'system' | 'serif' | 'mono' | 'custom'
    fontSizeScale: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
    lineHeight: 'tight' | 'normal' | 'relaxed'
    fontWeight: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  }
  layout: {
    density: 'compact' | 'comfortable' | 'spacious'
    containerWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    sidebarPreference: 'collapsed' | 'expanded' | 'auto'
  }
  accessibility: {
    highContrast: boolean
    reducedMotion: boolean
    focusIndicators: 'subtle' | 'pronounced'
    screenReaderOptimizations: boolean
  }
  animation: {
    animationSpeed: 'none' | 'fast' | 'normal' | 'slow'
    hoverEffects: boolean
    transitionEasing: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
  }
}

const defaultPreferences: UserPreferences = {
  appearance: {
    theme: 'system',
    primaryColor: 'hsl(221.2 83.2% 53.3%)',
    secondaryColor: 'hsl(210 40% 98%)',
    accentColor: 'hsl(262.1 83.3% 57.8%)',
    borderRadius: 'md',
    shadows: 'md',
  },
  typography: {
    fontFamily: 'system',
    fontSizeScale: 'base',
    lineHeight: 'normal',
    fontWeight: 'normal',
  },
  layout: {
    density: 'comfortable',
    containerWidth: 'lg',
    sidebarPreference: 'auto',
  },
  accessibility: {
    highContrast: false,
    reducedMotion: false,
    focusIndicators: 'pronounced',
    screenReaderOptimizations: true,
  },
  animation: {
    animationSpeed: 'normal',
    hoverEffects: true,
    transitionEasing: 'ease-in-out',
  },
}

export const usePreferences = create<UserPreferences & {
  updatePreference: <K extends keyof UserPreferences>(
    category: K,
    key: keyof UserPreferences[K],
    value: UserPreferences[K][keyof UserPreferences[K]]
  ) => void
  resetPreferences: () => void
  exportPreferences: () => string
  importPreferences: (data: string) => void
}>()(
  persist(
    (set, get) => ({
      ...defaultPreferences,
      updatePreference: (category, key, value) => {
        set((state) => ({
          [category]: {
            ...state[category],
            [key]: value,
          },
        }))
      },
      resetPreferences: () => set(defaultPreferences),
      exportPreferences: () => JSON.stringify(get(), null, 2),
      importPreferences: (data: string) => {
        try {
          const imported = JSON.parse(data)
          if (imported && typeof imported === 'object') {
            set({ ...defaultPreferences, ...imported })
          }
        } catch (error) {
          console.error('Failed to import preferences:', error)
        }
      },
    }),
    {
      name: 'gts-ui-preferences',
      version: 1,
    }
  )
)
