import React from "react";
import Logo from "./Logo";
import ButtonsSection from "./ButtonsSection";
import HamburgerMenu from "./HamburgerMenu";

export default function LandingPageNavBar() {
  return (
    <div>
      <nav class="bg-[#f6f7f7] order-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="md:ml-13 items-center justify-center m-auto p-3">
            <Logo />
          </div>
          <div class="flex md:order-2 space-x-3 md:space-x-3 mr-0 rtl:space-x-reverse">
            <ButtonsSection />
          </div>
          <HamburgerMenu />
          <div
            class="items-center justify-between md:ml-25 hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:px-45 mt-4 borde rounded-lg bg-[#f6f7f7] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#browse-events"
                  class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Browse Events
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
