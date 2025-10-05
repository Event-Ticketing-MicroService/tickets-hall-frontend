import React from "react";
import Logo from "../landingpage/components/navbar/Logo";
import LogoLight from "../assets/logo/LOGON.png";
import LogoDark from "../assets/logo/LOGOr.png";

export default function LoginForm({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-xs max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700">
        <div className="p-6 space-y-4 flex flex-col items-center">
          <img
            className="w-16 h-16 mr-2 hidden dark:block"
            src={LogoLight}
            alt="logo"
          />

          <img
            className="w-16 h-16 mr-2 block dark:hidden"
            src={LogoDark}
            alt="logo"
          />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h1>

          <form className="space-y-4" action="#">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-2 border rounded"
            />

            <div>
              <a
                href="#"
                className="dark:text-gray-300 dark:hover:text-gray-500 text-blue-700 hover:text-blue-900"
              >
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-800 hover:cursor-pointer text-white rounded py-2">
              Sign in
            </button>
            <style>
              {`
                    ::placeholder {
                        color: #d9d9d9 ;
                    }`}
            </style>
          </form>

          <button
            onClick={onClose}
            className="w-full mt-3 text-sm dark:text-gray-200 hover:cursor-pointer dark:hover:text-gray-400 text-gray-700 hover:text-black"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
