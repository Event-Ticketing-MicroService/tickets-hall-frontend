import React from "react";

export default function CardSection() {
  const stats = [
    { value: 47, label: "Total Events", color: "text-blue-600" },
    { value: "$284,750", label: "Revenue", color: "text-green-600" },
    { value: "5.3k", label: "Tickets Sold", color: "text-purple-600" },
    { value: "10k", label: "Occupancy", color: "text-orange-600" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 px-2">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md border border-gray-100 p-3 sm:p-6"
        >
          <div className="text-center">
            <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
