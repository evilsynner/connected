import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="relative inline-block text-left bg-gray-900">
      <button
        className="inline-flex justify-content w-full rounded-md px-4 py-2 bg-green-500 hover:bg-green-600 text-sm font-semibold shadow-green-500"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-md py-1 text-sm text-gray-700"
        >
          <li>
            <Link
              to="/profile/"
              className="block py-2 px-4 hover:bg-gray-100"
          >
            My Profile
          </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:bg-gray-100"
            >
              My Pastes
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:bg-gray-100"
            >
              Settings
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:bg-gray-100"
            >
              Create paste
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li className="bg-red-500">
            <button onClick={logout} className="block py-2 px-4">Logout</button>
          </li>

        </ul>
      )}
    </div>
  );
};
