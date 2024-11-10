// src/app/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-honey text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                width={80}
                height={80}
                alt="Savannah Honey"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="hover:underline">
              About Us
            </Link>
            <Link href="#products" className="hover:underline">
              Products
            </Link>
            <Link href="#gallery" className="hover:underline">
              Gallery
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-honey">
          <Link href="#about" className="block px-3 py-2 hover:bg-amber-500">
            About Us
          </Link>
          <Link href="#products" className="block px-3 py-2 hover:bg-amber-500">
            Products
          </Link>
          <Link href="#gallery" className="block px-3 py-2 hover:bg-amber-500">
            Gallery
          </Link>
          <Link href="#contact" className="block px-3 py-2 hover:bg-amber-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
