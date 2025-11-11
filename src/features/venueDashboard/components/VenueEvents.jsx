import React from "react";

export default function VenueEvents() {
  const events = [
    {
      title: "Tech Innovation Summit 2024",
      date: "3/15/2024",
      status: "completed",
      attendees: "1850/2000",
      occupancy: 93,
      revenue: "$89,500",
      ticketSales: [
        { type: "Early Bird", sold: "450/500", color: "bg-green-50" },
        { type: "Standard", sold: "980/1000", color: "bg-blue-50" },
        { type: "VIP", sold: "420/500", color: "bg-purple-50" },
      ],
      image:
        "https://readdy.ai/api/search-image?query=modern%20tech%20conference%20with%20people%20networking%20in%20a%20bright%20convention%20center%20with%20large%20screens%20displaying%20technology%20presentations%20and%20professional%20attendees%20in%20business%20attire&width=300&height=200&seq=tech-summit-dash&orientation=landscape",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      title: "Summer Music Festival",
      date: "6/20/2024",
      status: "published",
      attendees: "0/2500",
      occupancy: 0,
      revenue: "$0",
      ticketSales: [
        { type: "Early Bird", sold: "125/300", color: "bg-green-50" },
        { type: "Standard", sold: "89/1200", color: "bg-blue-50" },
        { type: "VIP", sold: "45/200", color: "bg-purple-50" },
      ],
      image:
        "https://readdy.ai/api/search-image?query=outdoor%20music%20festival%20with%20colorful%20stage%20lights%20and%20crowd%20of%20people%20enjoying%20live%20music%20performance%20under%20evening%20sky%20with%20vibrant%20atmosphere&width=300&height=200&seq=music-fest-dash&orientation=landscape",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Corporate Leadership Workshop",
      date: "4/8/2024",
      status: "draft",
      attendees: "0/150",
      occupancy: 0,
      revenue: "$0",
      ticketSales: [
        { type: "Early Bird", sold: "0/50", color: "bg-green-50" },
        { type: "Standard", sold: "0/80", color: "bg-blue-50" },
        { type: "VIP", sold: "0/20", color: "bg-purple-50" },
      ],
      image:
        "https://readdy.ai/api/search-image?query=professional%20business%20workshop%20with%20executives%20in%20modern%20conference%20room%20discussing%20leadership%20strategies%20with%20presentation%20screens%20and%20elegant%20corporate%20setting&width=300&height=200&seq=corp-workshop&orientation=landscape",
      statusColor: "bg-gray-100 text-gray-800",
    },
    {
      title: "Annual Charity Gala",
      date: "2/14/2024",
      status: "completed",
      attendees: "380/400",
      occupancy: 95,
      revenue: "$76,000",
      ticketSales: [
        { type: "Standard", sold: "180/200", color: "bg-blue-50" },
        { type: "VIP", sold: "200/200", color: "bg-purple-50" },
      ],
      image:
        "https://readdy.ai/api/search-image?query=elegant%20charity%20gala%20with%20formal%20dressed%20guests%20in%20luxurious%20ballroom%20with%20crystal%20chandeliers%20and%20sophisticated%20dining%20setup%20for%20fundraising%20event&width=300&height=200&seq=charity-gala&orientation=landscape",
      statusColor: "bg-green-100 text-green-800",
    },
  ];

  return (
    <div className="space-y-4 w-full">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-auto md:w-full bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-48 h-full lg:h-auto flex-shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 break-words">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${event.statusColor}`}
                >
                  {event.status}
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div>
                  <div className="text-sm text-gray-600">Attendees</div>
                  <div className="font-semibold">{event.attendees}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Occupancy</div>
                  <div className="font-semibold">{event.occupancy}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Revenue</div>
                  <div className="font-semibold text-green-600">
                    {event.revenue}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Status</div>
                  <div className="font-semibold capitalize">{event.status}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Occupancy</span>
                  <span>{event.occupancy}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${event.occupancy}%` }}
                  ></div>
                </div>
              </div>

              {/* Ticket Sales */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">
                  Ticket Sales
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {event.ticketSales.map((ticket, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between p-2 rounded ${ticket.color}`}
                    >
                      <span>{ticket.type}</span>
                      <span className="font-medium">{ticket.sold}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button
                  type="button"
                  className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-1.5 text-sm flex-1"
                >
                  <i className="ri-edit-line mr-2"></i>Edit Event
                </button>
                <button
                  type="button"
                  className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-1.5 text-sm flex-1"
                >
                  <i className="ri-bar-chart-line mr-2"></i>View Analytics
                </button>
                <button
                  type="button"
                  className="font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-1.5 text-sm flex-1"
                >
                  <i className="ri-download-line mr-2"></i>Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
