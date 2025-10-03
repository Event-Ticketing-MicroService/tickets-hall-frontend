import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to create or attend amazing events
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Attendees */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              For Attendees
            </h3>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Browse Events
                  </h4>
                  <p className="text-gray-600">
                    Discover events by category, location, or date. Filter by
                    your interests and budget.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Choose Your Ticket
                  </h4>
                  <p className="text-gray-600">
                    Select from Early Bird, Standard, or VIP tickets based on
                    your preferences.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure Payment
                  </h4>
                  <p className="text-gray-600">
                    Complete your purchase with our secure payment system and
                    receive instant confirmation.
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Enjoy the Event
                  </h4>
                  <p className="text-gray-600">
                    Show your digital ticket and enjoy an unforgettable
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Venues */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              For Venues
            </h3>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Create Your Event
                  </h4>
                  <p className="text-gray-600">
                    Set up your event details, venue information, and event
                    description.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Configure Tickets
                  </h4>
                  <p className="text-gray-600">
                    Set ticket types, quantities, and pricing for Early Bird,
                    Standard, and VIP options.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Publish & Promote
                  </h4>
                  <p className="text-gray-600">
                    Make your event live and reach thousands of potential
                    attendees.
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Manage & Earn
                  </h4>
                  <p className="text-gray-600">
                    Track sales, manage attendees, and receive payments directly
                    to your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
