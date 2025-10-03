import React from "react";

export default function MainPage() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://readdy.ai/api/search-image?query=modern%20event%20venue%20with%20elegant%20lighting%20and%20people%20networking%20in%20sophisticated%20atmosphere%20with%20contemporary%20architecture%20and%20professional%20ambiance&width=1920&height=1080&seq=hero-bg&orientation=landscape")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Connect. Create. Celebrate.
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The ultimate platform for event organizers and venues to create
              unforgettable experiences. From intimate workshops to grand
              festivals, we make event management seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="font-medium rounded-lg px-6 py-3 transition-colors duration-200 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300"
              >
                <i className="ri-calendar-event-line mr-2"></i>
                Browse Events
              </button>
              <button
                type="button"
                className="font-medium rounded-lg px-6 py-3 transition-colors duration-200 whitespace-nowrap cursor-pointer border-2 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 disabled:border-blue-300 disabled:text-blue-300"
              >
                <i className="ri-building-line mr-2"></i>
                List Your Venue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
