import { useState } from "react";
import { Link } from "react-router-dom";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100"
            >
              Opción 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100"
            >
              Opción 2
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
