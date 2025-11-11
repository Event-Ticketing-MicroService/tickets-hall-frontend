import React from "react";

export default function VenueDashboardHeader({ SetCreateNewEvent }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div class="mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
              Grand Convention Center
            </h1>
            <p class="text-sm sm:text-base text-gray-600 mt-1">
              Downtown Manhattan, NY
            </p>
          </div>
          <button
            type="button"
            class="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 px-4 py-2 text-base w-full sm:w-auto"
            onClick={() => SetCreateNewEvent(true)}
          >
            <i class="ri-add-line mr-2">+</i>Create New Event
          </button>
        </div>
      </div>
    </div>
  );
}
