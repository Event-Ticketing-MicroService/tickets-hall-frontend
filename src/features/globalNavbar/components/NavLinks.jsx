import React from "react";

export default function NavLinks() {
  const links = [];

  return (
    <div className="hidden md:flex space-x-6">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
}
