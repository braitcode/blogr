import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative">
      {/* Hamburger Button */}
      <button onClick={toggleMenu} className="focus:outline-none">
        <RxHamburgerMenu className="w-8 h-8 text-white" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } transition-all duration-300 ease-in-out absolute top-10 right-0 w-[7rem] z-20`}
      >
        <ul className="flex flex-col items-center gap-4 bg-red-400 py-4 shadow-lg rounded-md">
          <li>
            <a href="/" className="text-gray-800 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-white">
              Company
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-white">
              Connect
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-white">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-white">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
