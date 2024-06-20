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
  }
}))
