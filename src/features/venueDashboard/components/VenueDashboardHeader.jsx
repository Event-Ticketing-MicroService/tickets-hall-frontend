import React from "react";

export default function VenueDashboardHeader({
  SetCreateNewEvent,
  setAddNewWorkers,
}) {
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
          <div className="flex flex-row gap-2.5 md:gap-4">
            <button
              type="button"
              class="font-medium rounded-lg transition-colors duration-200 p-2 md:whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 md:px-4 md:py-2 text-base md:w-full sm:w-auto"
              onClick={() => SetCreateNewEvent(true)}
            >
              <i class="ri-add-line mr-2">+</i>Create New Event
            </button>
            <button
              type="button"
              class="font-medium rounded-lg transition-colors duration-200 md:whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 md:px-4 md:py-2 text-base md:w-full sm:w-auto"
              onClick={() => setAddNewWorkers(true)}
            >
              <i class="ri-add-line mr-2">+</i>Add Venue Workers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
