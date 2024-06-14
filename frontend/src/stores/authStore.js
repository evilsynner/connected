import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      user: {
        username: "",
        email: ""
      },
      login: (accessToken, refreshToken, user) =>
        set({
          accessToken,
          refreshToken,
          isAuthenticated: true,
          user,
        }),
      logout: () =>
        set({
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          user: {
            username: "",
            email: ""
          }
        }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
