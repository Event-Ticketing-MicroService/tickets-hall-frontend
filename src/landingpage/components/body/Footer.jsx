import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              Tickets Hall
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              The premier platform connecting event organizers with venues and
              attendees. Create unforgettable experiences with seamless event
              management and ticketing.
            </p>
            {/* Social icons */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="text-white">
                  <FaFacebook />
                </i>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="text-white">
                  <FaTwitter />
                </i>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="text-white">
                  <FaInstagram />
                </i>
              </div>
            </div>
          </div>

          {/* Attendees */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Attendees</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Browse Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  My Tickets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Event Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Venues */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Venues</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Host Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Venue Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TicketsHall. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
