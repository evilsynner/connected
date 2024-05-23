import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  login: (accessToken, refreshToken) => set({ accessToken, refreshToken, isAuthenticated: true }),
  logout: () => set({ accessToken: null, refreshToken: null, isAuthenticated: false })
}))
