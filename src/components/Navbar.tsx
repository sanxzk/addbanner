"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  bg-violet-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleNavbar}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold">
                BannerApp
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-gray-300  hover:bg-violet-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                <Link
                  className="text-gray-300  hover:bg-violet-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/manage-banners"
                >
                  Manage Banners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            className="text-gray-300  hover:bg-violet-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/"
          >
            Home
          </Link>

          <Link
            className="text-gray-300  hover:bg-violet-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/manage-banners"
          >
            Manage Banners
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
