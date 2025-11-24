import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import React from "react";
import { fetchEvents } from "../services/eventService";

export default function EventsList({
  selectedDate,
  searchTerm,
  selectedCategory,
}) {
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["events", selectedCategory, selectedDate, searchTerm],
    queryFn: fetchEvents,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(events);

  return (
    <div className="flex rounded-4xl md:mx-10 shadow bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.data?.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md border border-gray-100 p-6 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer m-5"
          >
            <div className="relative">
              <img
                alt={event.name}
                className="w-full h-48 object-cover object-top rounded-2xl"
                src={
                  event.backgroundImageUrl ||
                  "https://via.placeholder.com/400x250"
                } // fallback image
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category?.name || "Category"}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                  {event.totalAvailableTickets
                    ? `${Math.floor(Math.random() * 100)}% full`
                    : "0% full"}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {event.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 w-full line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <i className="ri-calendar-line w-max h-4 flex items-start justify-around"></i>
                  <span className="text-sm font-semibold">
                    Starts at: {event.startsAt}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-time-line w-max flex items-center justify-center"></i>
                  <span className="text-sm font-bold">
                    {event.startsAt} - {event.endsAt}
                  </span>
                </div>
                <div className="flex items-center text-black">
                  <i className="w-max  flex items-center justify-center"></i>
                  <span className="text-xl font-bold my-5">
                    {event.location}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-user-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-sm font-bold">
                    <span className="text-lg text-blue-700 m-2">
                      {event.totalAvailableTickets}
                    </span>
                    attending
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {event.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-center justify-between mb-4">
                <div>
                  <span className="text-sm text-gray-600">From</span>
                  <div className="text-lg font-bold text-green-600">$300</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Organized by</div>
                  <div className="text-sm font-medium text-gray-900">
                    ibrahim yasin
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 px-4 py-2 text-base w-max"
              >
                <i className="ri-ticket-line mr-2"></i>View Details & Buy
                Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
