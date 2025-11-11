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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-gray-700 dark:text-white focus:outline-none"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-10" />
        ) : (
          <Bars3Icon className="h-6 w-10" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-900 shadow-lg z-50">
          <ul className="flex flex-col p-4 space-y-2">
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
                className="text-gray-900 dark:text-white hover:text-blue-700"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="text-gray-900 dark:text-white hover:text-blue-700"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
