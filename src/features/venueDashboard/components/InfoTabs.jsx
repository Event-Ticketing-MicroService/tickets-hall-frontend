import React, { useState } from "react";
import VenueOverview from "./VenueOverview";
import VenueReview from "./VenueReview";
import VenueSettings from "./VenueSettings";
import VenueEvents from "./VenueEvents";

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview", "events", "review", "settings"];

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex justify-center items-center align-middle border-b-2 mx-auto border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md capitalize transition-all ease-in-out ${
              activeTab === tab
                ? "text-blue-700 border-b-4 border-blue-700"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex shadow-md rounded-lg flex-wrap justify-center md:justify-start my-4 border border-gray-200 bg-white p-4 sm:p-6 mx-2 items-center align-middle w-full">
        {activeTab === "events" && <VenueEvents />}
        {activeTab === "overview" && <VenueOverview />}
        {activeTab === "review" && <VenueReview />}
        {activeTab === "settings" && <VenueSettings />}
      </div>
    </div>
  );
}
