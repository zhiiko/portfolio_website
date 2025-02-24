import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TerminalState {
  isComplete: boolean
  lines: string[]
  commandHistory: string[]
  historyIndex: number
  loading: boolean
  loadingProgress: number
  awaitingLoadResponse: boolean
  hasCalledPrompt: boolean
  setComplete: (complete: boolean) => void
  setLines: (lines: string[]) => void
  addLine: (line: string) => void
  clearLines: () => void
  addToHistory: (command: string) => void
  setHistoryIndex: (index: number) => void
  setLoading: (loading: boolean) => void
  setLoadingProgress: (progress: number) => void
  setAwaitingLoadResponse: (awaiting: boolean) => void
  setHasCalledPrompt: (called: boolean) => void
}

export const useTerminalState = create(
  persist<TerminalState>(
    (set) => ({
      isComplete: false,
      lines: [],
      commandHistory: [],
      historyIndex: -1,
      loading: false,
      loadingProgress: 0,
      awaitingLoadResponse: true,
      hasCalledPrompt: false,
      setComplete: (complete) => set({ isComplete: complete }),
      setLines: (lines) => set({ lines }),
      addLine: (line) => set((state) => ({ lines: [...state.lines, line] })),
      clearLines: () => set({ lines: [] }),
      addToHistory: (command) => set((state) => ({ 
        commandHistory: [...state.commandHistory, command],
        historyIndex: -1
      })),
      setHistoryIndex: (index) => set({ historyIndex: index }),
      setLoading: (loading) => set({ loading }),
      setLoadingProgress: (progress) => set({ loadingProgress: progress }),
      setAwaitingLoadResponse: (awaiting) => set({ awaitingLoadResponse: awaiting }),
      setHasCalledPrompt: (called) => set({ hasCalledPrompt: called }),
    }),
    {
      name: 'terminal-storage',
    }
  )
)
