import React, { useState } from "react";

export default function VenueSettings() {
  const [venueName, setVenueName] = useState("Grand Convention Center");
  const [capacity, setCapacity] = useState(2500);
  const [location, setLocation] = useState("Downtown Manhattan, NY");

  const handleSave = () => {
    console.log("Saved changes:", { venueName, capacity, location });
  };

  const handleReset = () => {
    setVenueName("Grand Convention Center");
    setCapacity(2500);
    setLocation("Downtown Manhattan, NY");
  };

  return (
    <div className="bg-white rounded-lg w-auto md:w-full shadow-md border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Venue Settings
      </h3>

      <div className="space-y-4">
        {/* Venue Name + Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Venue Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              type="text"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Capacity
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 px-4 py-2 text-base flex-1"
          >
            <i className="ri-save-line mr-2"></i>
            Save Changes
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300 px-4 py-2 text-base flex-1"
          >
            <i className="ri-refresh-line mr-2"></i>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
