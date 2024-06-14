import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function Home() {
  const logout = useAuthStore((state) => state.logout);
  // const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white">MyApp</Link>
          <div>
            <Link to="/profile" className="px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 rounded">Profile</Link>
            <button onClick={logout} className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded">Logout</button>
          </div>
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
