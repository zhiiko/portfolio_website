import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AnimationState {
  hasAnimatedOnce: boolean
  setHasAnimatedOnce: (complete: boolean) => void
}

export const useAnimationState = create(
  persist<AnimationState>(
    (set) => ({
      hasAnimatedOnce: false,
      setHasAnimatedOnce: (complete) => set({ hasAnimatedOnce: complete }),
    }),
    {
      name: 'animation-storage',
    }
  )
) 