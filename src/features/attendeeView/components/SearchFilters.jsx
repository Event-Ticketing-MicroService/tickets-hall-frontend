import React from "react";

export default function SearchFilters() {
  return (
    <div className="p-6 flex flex-col gap-4 rounded-4xl shadow bg-white border border-slate-400 m-5">
      <input
        type="search"
        placeholder="Search events"
        className="bg-gray-300 rounded-full w-full p-4 focus:outline-blue-700 focus:ring-0 focus:border-gray-300"
      />

      <div className="flex flex-row gap-4">
        {/* Category */}
        <div className="w-full max-w-sm min-w-[150px]">
          <div className="relative">
            <label className="text-sm font-medium text-slate-700 mb-1">
              Category
            </label>
            <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="brazil">Brazil</option>
              <option value="bucharest">Bucharest</option>
              <option value="london">London</option>
              <option value="washington">Washington</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-8 right-2.5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>

        {/* Location */}
        <div className="w-full max-w-sm min-w-[150px]">
          <div className="relative">
            <label className="text-sm font-medium text-slate-700 mb-1">
              Location
            </label>
            <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="brazil">Brazil</option>
              <option value="bucharest">Bucharest</option>
              <option value="london">London</option>
              <option value="washington">Washington</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-8 right-2.5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        {/* Price Range */}
        <div className="w-full max-w-sm min-w-[150px]">
          <div className="relative">
            <label className="text-sm font-medium text-slate-700 mb-1">
              Price Range
            </label>
            <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="brazil">Brazil</option>
              <option value="bucharest">Bucharest</option>
              <option value="london">London</option>
              <option value="washington">Washington</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-8 right-2.5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>

        {/* Sort By */}
        <div className="w-full max-w-sm min-w-[150px]">
          <div className="relative">
            <label className="text-sm font-medium text-slate-700 mb-1">
              Sort By
            </label>
            <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="brazil">Brazil</option>
              <option value="bucharest">Bucharest</option>
              <option value="london">London</option>
              <option value="washington">Washington</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-8 right-2.5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
