import React from "react";
import EventCard from "./EventCard";

export default function FeaturedEvents() {
  const events = [
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Convention Center Downtown, New York, NY",
      pricing: [
        { type: "Early Bird", price: "$89", color: "text-green-600" },
        { type: "Standard", price: "$129", color: "" },
        { type: "VIP", price: "$299", color: "text-purple-600" },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
      category: "Music",
      title: "Summer Music Festival",
      date: "June 20-22, 2024",
      time: "12:00 PM - 11:00 PM",
      location: "Riverside Park, Austin, TX",
      pricing: [
        { type: "Early Bird", price: "$149", color: "text-green-600" },
        { type: "Standard", price: "$199", color: "" },
        { type: "VIP", price: "$399", color: "text-purple-600" },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
      category: "Food & Drink",
      title: "Culinary Arts Workshop",
      date: "April 8, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Grand Hotel Ballroom, San Francisco, CA",
      pricing: [
        { type: "Early Bird", price: "$79", color: "text-green-600" },
        { type: "Standard", price: "$99", color: "" },
        { type: "VIP", price: "$179", color: "text-purple-600" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white" id="browse-events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing events happening near you. From early bird specials
            to VIP experiences.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button
            type="button"
            className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300 px-6 py-3 text-lg"
          >
            View All Events <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
