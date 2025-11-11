import React from "react";

export default function VenueOverview() {
  const activities = [
    {
      color: "bg-green-500",
      text: "New VIP ticket sold for Summer Music Festival",
      time: "2 hours ago",
    },
    {
      color: "bg-blue-500",
      text: "Tech Innovation Summit 2024 completed successfully",
      time: "1 day ago",
    },
    {
      color: "bg-purple-500",
      text: "Payment of $89,500 received",
      time: "1 day ago",
    },
    {
      color: "bg-green-500",
      text: "5 Standard tickets sold for Summer Music Festival",
      time: "3 days ago",
    },
    {
      color: "bg-blue-500",
      text: "Corporate Leadership Workshop saved as draft",
      time: "1 week ago",
    },
  ];

  return (
    <div className="">
      <div className="">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${activity.color}`}
              ></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 break-words">
                  {activity.text}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
