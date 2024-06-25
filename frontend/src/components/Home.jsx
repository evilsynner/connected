import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import HamburgerMenu from "./HamburgerMenu";
import PasteList from "./PasteList";

export default function Home() {
  const fetchUserInfo = useAuthStore((state) => state.fetchUserInfo);
  const token = useAuthStore((state) => state.refreshToken);
  const username = useAuthStore((state) => state.username);

  fetchUserInfo(username, token);
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/home" className="text-xl font-bold text-white">CONNected</Link>
          <HamburgerMenu />
        </div>
      </nav>
      <div className="container mx-auto my-11 px-4">
        <PasteList />
      </div>
    </main>
  );
};
