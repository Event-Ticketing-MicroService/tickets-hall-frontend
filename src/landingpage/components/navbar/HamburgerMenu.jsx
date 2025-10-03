import React, { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="md:hidden scroll-smooth" ref={menuRef}>
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 dark:text-white focus:outline-none px-1"
      >
        {isOpen ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 mt-18 right-5 w-50 rounded-2xl bg-white dark:bg-gray-900 shadow-md z-20">
          <ul className="flex flex-col items-center p-4 space-y-4">
            <li>
              <a
                href="#browse-events"
                className="text-blue-700 hover:text-blue-900"
              >
                Browse Events
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-blue-700 hover:text-blue-900"
              >
                How It Works
              </a>
            </li>
            <li>
              <a href="#footer" className="text-blue-700 hover:text-blue-900">
                Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
