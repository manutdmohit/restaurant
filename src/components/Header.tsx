'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold ml-7">
            <span className="text-yellow-500">Gourmet</span> Delights
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col  space-y-4 mt-4 ml-7">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition duration-300 text-2xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
