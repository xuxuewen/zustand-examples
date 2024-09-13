import { create } from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  username: string
  isLoading: boolean
  login: (username: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  username: '',
  isLoading: false,
  login: async (username) => {
    set({ isLoading: true })
    // 模拟异步登录过程
    await new Promise(resolve => setTimeout(resolve, 1000))
    set({ isLoggedIn: true, username, isLoading: false })
  },
  logout: () => set({ isLoggedIn: false, username: '' }),
}))