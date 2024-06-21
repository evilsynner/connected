import { useEffect } from "react";
import { useAuthStore } from "../stores/authStore";

export default function AutoRefreshToken() {
  const refreshAccessToken = useAuthStore((state) => state.refreshAccessToken);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      refreshAccessToken();
    }, 300000);
    return  () => clearInterval(interval);
  }, [isAuthenticated, refreshAccessToken]);

  return null;
}
