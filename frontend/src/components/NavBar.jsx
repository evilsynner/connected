import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-emerald-100 hover:text-emerald-200 text-xl font-bold">
              CONNected
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-red-100 hover:text-red-200 px-3 py-2 rounded-md text-md font-medium">
                Home
              </Link>
              <Link to="/" className="text-red-100 hover:text-red-200 px-3 py-2 rounded-md text-md font-medium">
                Login
              </Link>
              <Link to="/" className="text-red-100 hover:text-red-200 px-3 py-2 rounded-md text-md font-medium">
                Register
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-red-100 hover:text-red-200 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/" className="text-red-100 hover:text-red-200 block px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            <Link to="/" className="text-red-100 hover:text-red-200 block px-3 py-2 rounded-md text-base font-medium">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;