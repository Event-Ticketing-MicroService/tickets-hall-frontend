import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import React from "react";
import { fetchCategories } from "../../../services/categoryService";

export default function EventsList({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  selectedDate,
  setSelectedDate,
}) {
  const {
    data: categoriesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const categories = categoriesData?.data || [];

  if (isLoading) return <Spinner className="mx-auto mt-20" />;
  if (isError)
    return (
      <div className="text-red-500 mt-5 text-center">
        Error: {error.message}
      </div>
    );

  return (
    <div className="md:mx-16 mx-4 mt-6 mb-6">
      {/* Filters Card */}
      <div className="flex flex-col md:flex-row items-center gap-4 p-6 bg-slate-800 rounded-3xl shadow-lg w-full">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search events..."
          className="flex-1 w-full md:w-auto px-5 py-3 rounded-2xl border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white  transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Select */}
        <select
          className="w-full md:w-60 px-5 py-3 rounded-2xl border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white  transition"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" className="text-black">
            All Categories
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id} className="text-black">
              {cat.name}
            </option>
          ))}
        </select>

        {/* Date Picker */}
        <input
          type="date"
          className="w-full md:w-52 px-5 py-3 rounded-2xl border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white  transition"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </div>
  );
}
