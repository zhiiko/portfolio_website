import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TerminalState {
  isComplete: boolean
  setComplete: (complete: boolean) => void
}

export const useTerminalState = create(
  persist<TerminalState>(
    (set) => ({
      isComplete: false,
      setComplete: (complete) => set({ isComplete: complete }),
    }),
    {
      name: 'terminal-storage',
    }
  )
)
