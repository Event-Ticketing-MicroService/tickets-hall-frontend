import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {!imgError ? (
        <img
          src="/user.jpg" // replace with actual user image
          alt="User"
          className="h-5 w-5 rounded-full cursor-pointer"
          onClick={() => setOpen(!open)}
          onError={() => setImgError(true)}
        />
      ) : (
        <FaUserCircle
          className="h-7 w-7 dark:text-white text-blue-700 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
}
