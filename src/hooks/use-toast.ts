'use client'

import { useToast as useToastPrimitive } from '@/components/ui/use-toast'

export function useToast() {
  const { toast, toasts } = useToastPrimitive()

  const showSuccess = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: 'default',
    })
  }

  const showError = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: 'destructive',
    })
  }

  const showWarning = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: 'destructive',
    })
  }

  const showInfo = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: 'default',
    })
  }

  return {
    toast,
    toasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
}
