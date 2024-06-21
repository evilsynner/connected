import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import HamburgerMenu from "./HamburgerMenu";

export default function Home() {
  const fetchUserInfo = useAuthStore((state) => state.fetchUserInfo);
  const token = useAuthStore((state) => state.refreshToken);
  const username = useAuthStore((state) => state.username);

  fetchUserInfo(username, token);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/home" className="text-xl font-bold text-white">CONNected</Link>
          <HamburgerMenu />
        </div>
      </nav>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Welcome, user!</h1>
        <p className="text-lg">This is your home page. Here you can find all your important information and manage your account.</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Your Content</h2>
          <p className="text-gray-400">This section will be populated with your content and interactions.</p>
        </div>
      </main>
    </div>
  );
};
