import React from "react";

export default function EventCard({
  image,
  category,
  title,
  date,
  time,
  location,
  pricing,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image & Category */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <i className="ri-calendar-line mr-2"></i>
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <i className="ri-time-line mr-2"></i>
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <i className="ri-map-pin-line mr-2"></i>
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-2 mb-4">
          {pricing.map((p, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{p.type}</span>
              <span className={`font-semibold ${p.color}`}>{p.price}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          type="button"
          className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 px-4 py-2 text-base w-full"
        >
          <i className="ri-ticket-line mr-2"></i>Get Tickets
        </button>
      </div>
    </div>
  );
}
