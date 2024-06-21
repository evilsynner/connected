import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  username: null,
  udata: null,

  login: (aToken, rToken, uname) => set({ accessToken: aToken, refreshToken: rToken, isAuthenticated: true, username: uname }),
  logout: () => set({ accessToken: null, refreshToken: null, isAuthenticated: false, username: null }),

  fetchUserInfo: async () => {
    const uname = useAuthStore.getState().username;
    const aToken = useAuthStore.getState().accessToken;
    const response = await fetch(`http://127.0.0.1:8000/api/user-info/${uname}/`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${aToken}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      set({ udata: data });
    } else {
      console.log("Failed to fetch user data");
    }
  },

  refreshAccessToken: async () => {
    const state = useAuthStore.getState();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ refresh: state.refreshToken })
      });
      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data = await response.json();
      set({ accessToken: data.access });
    } catch (error) {
      console.log("Error refreshing token");
      state.logout();
    }
  }
}))
