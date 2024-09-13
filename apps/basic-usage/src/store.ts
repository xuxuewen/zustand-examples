import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
  isLoggedIn: boolean
  username: string | null
}

interface AuthActions {
  isLoading: boolean
  login: (username: string) => Promise<void>
  logout: () => void
}

type AuthStore = AuthState & AuthActions

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      isLoading: false,
      username: null,
      login: async (username: string) => {
        set({ isLoading: true })
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        set({ isLoggedIn: true, isLoading: false, username })
      },
      logout: () => {
        set({ isLoggedIn: false, username: null })
      },
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) => ({ isLoggedIn: state.isLoggedIn, username: state.username }),
    }
  )
)

export { useAuthStore }