import React from "react";

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of event organizers and attendees who trust EventHub
          for their event needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Host button */}
          <button
            type="button"
            className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100"
          >
            <i className="ri-building-line mr-2"></i>
            Start Hosting Events
          </button>

          {/* Find events button */}
          <button
            type="button"
            className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600"
          >
            <i className="ri-ticket-line mr-2"></i>
            Find Events Near Me
          </button>
        </div>
      </div>
    </section>
  );
}
